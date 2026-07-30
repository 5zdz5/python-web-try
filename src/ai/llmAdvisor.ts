/**
 * LLM 驱动的优化分析器（pack30+pack31：Agent 向 LLM 方向进化 + 结合 Skill 训练）
 *
 * 核心职责：
 *   1. 将 Agent 当前的监测指标、健康分数、可调参数打包为结构化 prompt
 *   2. 调用 LLM（OpenAI 兼容接口）获取优化建议
 *   3. 解析 LLM 返回的 JSON 为 LLMSuggestion[]
 *   4. pack31: 将 Skill 规则注入 system prompt，让 LLM 成为"skill 训练过的顾问"
 *
 * 设计理念：
 *   - LLM 是"顾问"而非"执行者"：输出建议，人工确认后才应用
 *   - Skill 规则 = few-shot 训练样本：正反例让 LLM 学会项目约定
 *   - 建议分两类：参数级（paramChanges）和代码级（codePatch）
 *   - 参数级建议可安全自动应用（有 BOUNDS 边界保护）
 *   - 代码级建议仅展示，需人工审查后手动应用
 */
import type {
  LLMConfig, LLMSuggestion, LLMAnalysisResult,
  ObservedMetrics, HealthScores, TunableParams, SkillTrainingConfig, SkillCompliance,
} from '../types/ai'
import { callLLMJSON, type LLMMessage } from './llmClient'
import { buildSkillTrainingPrompt, checkAllSuggestionsCompliance } from './skillTrainer'

/** LLM 返回的 JSON schema */
interface LLMResponseSchema {
  reasoning: string
  confidence: number
  suggestions: Array<{
    target: string
    problem: string
    fix: string
    priority: 'high' | 'medium' | 'low'
    risk: number
    paramChanges?: Record<string, number | boolean>
    rationale?: string
  }>
}

/** 参数边界（与 Optimizer.ts BOUNDS 保持一致，用于校验 LLM 建议的参数变更） */
const PARAM_BOUNDS: Record<string, { min: number; max: number }> = {
  cacheTTL: { min: 0, max: 30 * 60 * 1000 },
  memoryCacheSize: { min: 0, max: 200 },
  debounceMs: { min: 0, max: 800 },
  throttleMs: { min: 0, max: 1000 },
  lazyLoadThreshold: { min: 0, max: 2000 },
  toastDuration: { min: 1500, max: 10000 },
  animationDuration: { min: 150, max: 1000 },
  loadingTimeout: { min: 5000, max: 30000 },
  autoSaveInterval: { min: 500, max: 5000 },
  maxRetries: { min: 0, max: 5 },
  retryBaseDelay: { min: 1000, max: 10000 },
  snapshotInterval: { min: 60 * 1000, max: 60 * 60 * 1000 },
  errorThreshold: { min: 3, max: 50 },
  contentRefreshInterval: { min: 5 * 60 * 1000, max: 24 * 60 * 60 * 1000 },
  agentLearningRate: { min: 0.05, max: 1.0 },
  strategyExplorationRate: { min: 0, max: 0.5 },
}

/** 布尔型参数集合 */
const BOOLEAN_PARAMS = new Set([
  'enablePrefetch', 'enableLazyPyodide', 'enableErrorRecovery',
  'enableEmptyLessonScan', 'enableBrokenImageCheck',
])

/** 数值型参数集合（其余全部是数值） */
const NUMERIC_PARAMS = new Set(Object.keys(PARAM_BOUNDS))

/**
 * 构建 system prompt（LLM 的角色 + 项目上下文 + 输出格式要求）
 */
function buildSystemPrompt(): string {
  return `你是一个 Python 学习平台（Python Quest）的 AI Agent 优化顾问。

你的职责：
1. 分析 Agent 当前采集的运行时指标、健康度评分和可调参数
2. 输出具体的优化建议，帮助提升平台性能、用户体验、稳定性和学习效果

可调参数说明（你可以在 paramChanges 中建议调整这些参数）：
- cacheTTL: localStorage 缓存 TTL (ms)，范围 0-1800000
- memoryCacheSize: 内存缓存条目上限，范围 0-200
- debounceMs: 默认防抖时间 (ms)，范围 0-800
- throttleMs: 默认节流时间 (ms)，范围 0-1000
- lazyLoadThreshold: 懒加载触发距离 (px)，范围 0-2000
- toastDuration: 提示显示时长 (ms)，范围 1500-10000
- animationDuration: 动画时长 (ms)，范围 150-1000
- loadingTimeout: 加载超时阈值 (ms)，范围 5000-30000
- autoSaveInterval: 自动保存间隔 (ms)，范围 500-5000
- maxRetries: 最大重试次数，范围 0-5
- retryBaseDelay: 重试基础延迟 (ms)，范围 1000-10000
- snapshotInterval: 快照间隔 (ms)，范围 60000-3600000
- errorThreshold: 错误降级阈值，范围 3-50
- enablePrefetch: 路由预取 (boolean)
- enableLazyPyodide: Pyodide 懒加载 (boolean)
- enableErrorRecovery: 错误自动恢复 (boolean)
- enableEmptyLessonScan: 空关卡扫描 (boolean)
- enableBrokenImageCheck: 损坏图片检测 (boolean)
- contentRefreshInterval: 内容刷新间隔 (ms)，范围 300000-86400000
- agentLearningRate: Agent 学习率，范围 0.05-1.0
- strategyExplorationRate: 策略探索率，范围 0-0.5

输出要求：
你必须返回一个 JSON 对象，格式如下：
{
  "reasoning": "整体分析推理过程（中文，2-4 句话）",
  "confidence": 0.0-1.0,
  "suggestions": [
    {
      "target": "参数名或模块名",
      "problem": "问题描述（中文）",
      "fix": "修复方案（中文，具体到建议的值）",
      "priority": "high" | "medium" | "low",
      "risk": 0.0-1.0,
      "paramChanges": { "参数名": 新值 },
      "rationale": "理由（中文，1 句话）"
    }
  ]
}

注意：
- 每次最多输出 5 条建议，按优先级排序
- paramChanges 只能包含上面列出的可调参数，值必须在范围内
- 如果当前指标健康、无需优化，返回空 suggestions 数组
- risk: 0=完全安全（调参数），0.5=中等风险（改布尔开关），1=高风险（改核心配置）`
}

/**
 * 构建 user prompt（当前运行时状态摘要）
 */
function buildUserPrompt(
  metrics: ObservedMetrics,
  scores: HealthScores,
  params: TunableParams,
  recentErrors?: string[],
): string {
  const errorSummary = recentErrors && recentErrors.length > 0
    ? `\n最近错误（最近 5 条）：\n${recentErrors.slice(-5).map(e => `- ${e}`).join('\n')}`
    : '\n最近无错误记录'

  return `请分析以下 Python Quest 平台的当前运行状态，输出优化建议。

## 运行时指标
- FCP (First Contentful Paint): ${metrics.fcp}ms
- LCP (Largest Contentful Paint): ${metrics.lcp}ms
- DOM 加载: ${metrics.domLoad}ms
- 页面完全加载: ${metrics.loadComplete}ms
- 内存使用: ${metrics.memoryUsed}MB
- 用户交互次数: ${metrics.interactionCount}
- 平均响应时间: ${metrics.avgResponseTime}ms
- 错误总数: ${metrics.errorCount}
- 崩溃总数: ${metrics.crashCount}
- 运行时长: ${Math.round(metrics.uptimeMs / 1000)}s
- 距上次错误: ${metrics.lastErrorAge}s
- 重试成功率: ${(metrics.retrySuccessRate * 100).toFixed(1)}%
- 有内容关卡数: ${metrics.levelsWithContent}
- 空课程数: ${metrics.emptyLessons}
- 损坏图片数: ${metrics.brokenImages}
- 测试通过率: ${(metrics.testPassRate * 100).toFixed(1)}%
- 常见错误模式数: ${metrics.commonErrorPatterns}
- 提示后重试率: ${(metrics.retryAfterHintRate * 100).toFixed(1)}%
${errorSummary}

## 健康度评分（0-100）
- 综合分: ${scores.overall}
- 性能: ${scores.performance}
- 用户体验: ${scores.ux}
- 内容质量: ${scores.content}
- 稳定性: ${scores.stability}
${scores.learningOutcome !== undefined ? `- 学习效果: ${scores.learningOutcome}` : ''}

## 当前可调参数
${JSON.stringify(params, null, 2)}

请基于以上数据，分析最需要优化的方面，并给出具体的参数调整建议。`
}

/**
 * 校验并规范化 LLM 返回的参数变更
 * - 过滤掉不存在的参数名
 * - 数值参数 clamp 到边界内
 * - 布尔参数转为 boolean
 */
function validateParamChanges(
  raw: Record<string, number | boolean> | undefined,
): Partial<TunableParams> {
  if (!raw) return {}
  const result: Partial<TunableParams> = {}
  for (const [key, val] of Object.entries(raw)) {
    if (BOOLEAN_PARAMS.has(key)) {
      // 布尔参数
      ;(result as Record<string, unknown>)[key] = Boolean(val)
    } else if (NUMERIC_PARAMS.has(key)) {
      // 数值参数：clamp 到边界
      const bounds = PARAM_BOUNDS[key]
      const num = typeof val === 'number' ? val : Number(val)
      if (!isNaN(num)) {
        ;(result as Record<string, unknown>)[key] = Math.max(bounds.min, Math.min(bounds.max, num))
      }
    }
    // 不在已知参数列表中的 key 直接忽略
  }
  return result
}

/**
 * 为建议生成稳定 ID（基于内容哈希）
 */
function generateSuggestionId(suggestion: { target: string; problem: string; fix: string }): string {
  const str = `${suggestion.target}:${suggestion.problem}:${suggestion.fix}`
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return `llm-${Math.abs(hash).toString(36)}`
}

/**
 * LLM 驱动的优化分析（pack31: 支持 Skill 训练）
 *
 * @param config LLM 配置
 * @param metrics 当前运行时指标
 * @param scores 当前健康度评分
 * @param params 当前可调参数
 * @param recentErrors 最近的错误记录（可选）
 * @param skillTrainingConfig Skill 训练配置（可选，启用后注入 skill 规则到 prompt）
 * @returns LLM 分析结果（包含建议列表 + 合规检测）
 */
export async function analyzeWithLLM(
  config: LLMConfig,
  metrics: ObservedMetrics,
  scores: HealthScores,
  params: TunableParams,
  recentErrors?: string[],
  skillTrainingConfig?: SkillTrainingConfig,
): Promise<{ result: LLMAnalysisResult; compliance: SkillCompliance[] }> {
  const timestamp = new Date().toISOString()

  if (!config.enabled) {
    return {
      result: {
        timestamp,
        reasoning: 'LLM 分析未启用',
        confidence: 0,
        suggestions: [],
        model: config.model,
        error: 'LLM 分析未启用，请在配置中开启',
      },
      compliance: [],
    }
  }

  if (!config.apiKey) {
    return {
      result: {
        timestamp,
        reasoning: '未配置 API Key',
        confidence: 0,
        suggestions: [],
        model: config.model,
        error: '未配置 API Key，无法调用 LLM',
      },
      compliance: [],
    }
  }

  // pack31: 构建 skill 训练 prompt（如果启用）
  const skillPrompt = skillTrainingConfig?.enabled
    ? buildSkillTrainingPrompt(skillTrainingConfig)
    : ''

  // pack31: system prompt = 基础角色 prompt + skill 训练规则
  const systemContent = skillPrompt
    ? `${buildSystemPrompt()}\n${skillPrompt}`
    : buildSystemPrompt()

  const messages: LLMMessage[] = [
    { role: 'system', content: systemContent },
    { role: 'user', content: buildUserPrompt(metrics, scores, params, recentErrors) },
  ]

  try {
    const { data, raw } = await callLLMJSON<LLMResponseSchema>(config, messages, {
      temperature: 0.3, // 分析模式用低温度保证稳定性
      maxTokens: config.maxTokens,
    })

    // 解析并校验建议
    const suggestions: LLMSuggestion[] = (data.suggestions || []).map(s => {
      const validated = validateParamChanges(s.paramChanges)
      const id = generateSuggestionId(s)
      return {
        id,
        target: s.target || 'unknown',
        problem: s.problem || '',
        fix: s.fix || '',
        priority: s.priority || 'medium',
        risk: typeof s.risk === 'number' ? Math.max(0, Math.min(1, s.risk)) : 0.5,
        paramChanges: Object.keys(validated).length > 0 ? validated : undefined,
        rationale: s.rationale,
      }
    })

    // pack31: skill 合规检测
    const compliance = skillTrainingConfig?.enabled
      ? checkAllSuggestionsCompliance(suggestions, skillTrainingConfig)
      : []

    // pack31: 严格模式下过滤违规建议
    const filteredSuggestions = skillTrainingConfig?.strictMode
      ? suggestions.filter(s => !compliance.some(c => c.suggestionId === s.id && c.status === 'violation'))
      : suggestions

    return {
      result: {
        timestamp,
        reasoning: data.reasoning || 'LLM 未提供推理过程',
        confidence: typeof data.confidence === 'number' ? Math.max(0, Math.min(1, data.confidence)) : 0.5,
        suggestions: filteredSuggestions,
        model: raw.model,
        tokenUsage: raw.usage
          ? {
              prompt: raw.usage.prompt_tokens,
              completion: raw.usage.completion_tokens,
              total: raw.usage.total_tokens,
            }
          : undefined,
      },
      compliance,
    }
  } catch (err) {
    return {
      result: {
        timestamp,
        reasoning: `LLM 分析失败: ${err instanceof Error ? err.message : String(err)}`,
        confidence: 0,
        suggestions: [],
        model: config.model,
        error: err instanceof Error ? err.message : String(err),
      },
      compliance: [],
    }
  }
}
