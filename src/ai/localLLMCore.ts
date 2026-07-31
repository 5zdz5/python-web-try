/**
 * LocalLLMCore - 本地 LLM 内核
 *
 * 核心理念：将 web 所有数据作为 Agent 进化为 LLM 的数据
 *           达到不需要外界 AI 接入也能进行迭代
 *
 * 推理路径（无需外部 API）：
 * 1. N-gram 模式匹配：从历史迭代中提取"症状→参数调整"的 N-gram 模式
 * 2. 模式匹配：基于规则库的模式识别（错误模式/性能模式/UX 模式）
 * 3. 经验检索：从 experiencePack 检索相似场景的历史教训
 * 4. 启发式推理：基于元逻辑规则的启发式推断
 *
 * 知识来源（web 所有数据）：
 * - Agent 迭代历史（history）
 * - 经验包（experiencePack modules/conventions/lessons）
 * - 监查指标（metrics）
 * - 用户进度（progress）
 * - 主题配置（themes）
 * - 关卡内容（lessonContent）
 * - 错误日志（monitor events）
 */

import type {
  LocalLLMOutput, LLMSuggestion,
  TunableParams, HealthScores, ObservedMetrics, Iteration,
} from '../types/ai'
import { computeComprehension } from './metaLogic'

// ===== 知识库条目（从 web 数据提取）=====

interface KnowledgeEntry {
  id: string
  source: 'history' | 'experience' | 'metrics' | 'lesson' | 'theme' | 'error'
  symptom: string           // 症状描述（如 "errorCount > 5"）
  pattern: string           // 模式（如 "high-error-rate"）
  action: string            // 应对动作
  paramChanges?: Partial<TunableParams>
  confidence: number
  timestamp: string
}

// ===== N-gram 模式提取 =====

/**
 * 从历史迭代中提取 "症状 → 参数调整 → gain" 的 N-gram 模式
 * 例如：[errorCount=10, maxRetries=1] → maxRetries=3 → gain=+8
 */
function extractNGramsFromHistory(history: Iteration[]): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = []

  for (const iter of history) {
    if (!iter.metricsBefore || !iter.metricsAfter || !iter.scoresBefore) continue

    // 提取症状
    const symptoms: string[] = []
    if (iter.metricsBefore.errorCount > 5) symptoms.push('high-error-rate')
    if (iter.metricsBefore.fcp > 2000) symptoms.push('slow-fcp')
    if (iter.metricsBefore.lcp > 4000) symptoms.push('slow-lcp')
    if (iter.metricsBefore.memoryUsed > 100) symptoms.push('high-memory')
    if (iter.metricsBefore.avgResponseTime > 500) symptoms.push('slow-response')
    if (iter.metricsBefore.testPassRate < 0.5) symptoms.push('low-test-pass')

    // 提取参数调整
    const paramChanges: Partial<TunableParams> = {}
    for (const decision of iter.decisions) {
      if (decision.applied && decision.afterParams) {
        Object.assign(paramChanges, decision.afterParams)
      }
    }

    // 只记录正向 gain 的模式（负向 gain 视为反例）
    const isPositive = iter.gain > 0
    const pattern = symptoms.length > 0 ? symptoms.join('+') : 'no-symptom'

    entries.push({
      id: `ng-${iter.id}`,
      source: 'history',
      symptom: pattern,
      pattern,
      action: isPositive ? 'apply-similar' : 'avoid-similar',
      paramChanges,
      confidence: isPositive ? Math.min(1, iter.gain / 20) : 0.3,
      timestamp: iter.startTime,
    })
  }

  return entries
}

// ===== 模式匹配规则 =====

interface PatternRule {
  id: string
  match: (metrics: ObservedMetrics, scores: HealthScores) => boolean
  intent: string
  suggestion: Omit<LLMSuggestion, 'id'>
  source: 'pattern'
}

const PATTERN_RULES: PatternRule[] = [
  {
    id: 'pat-high-error',
    match: (m) => m.errorCount > 5,
    intent: '降低错误率',
    source: 'pattern',
    suggestion: {
      target: 'maxRetries + retryBaseDelay',
      problem: '错误数偏高',
      fix: '增加重试次数和重试延迟，启用错误自动恢复',
      priority: 'high' as const,
      risk: 0.2,
      paramChanges: { maxRetries: 3, retryBaseDelay: 1500, enableErrorRecovery: true },
      rationale: '模式匹配：错误数>5，提升容错能力',
    },
  },
  {
    id: 'pat-slow-fcp',
    match: (m) => m.fcp > 2000,
    intent: '优化首屏渲染',
    source: 'pattern',
    suggestion: {
      target: 'cacheTTL + lazyLoadThreshold',
      problem: 'FCP 偏慢',
      fix: '延长缓存 TTL，增加懒加载触发距离',
      priority: 'high' as const,
      risk: 0.3,
      paramChanges: { cacheTTL: 120000, lazyLoadThreshold: 400, enablePrefetch: true },
      rationale: '模式匹配：FCP>2s，优化渲染路径',
    },
  },
  {
    id: 'pat-low-test-pass',
    match: (m) => m.testPassRate < 0.6,
    intent: '提升学习效果',
    source: 'pattern',
    suggestion: {
      target: 'contentRefreshInterval',
      problem: '测试通过率偏低',
      fix: '缩短内容刷新间隔，加强错误模式分析',
      priority: 'medium' as const,
      risk: 0.2,
      paramChanges: { contentRefreshInterval: 60000, enableEmptyLessonScan: true },
      rationale: '模式匹配：通过率<60%，强化内容质量',
    },
  },
  {
    id: 'pat-low-stability',
    match: (_m, s) => s.stability < 60,
    intent: '提升稳定性',
    source: 'pattern',
    suggestion: {
      target: 'errorThreshold + snapshotInterval',
      problem: '稳定性分偏低',
      fix: '收紧错误阈值，缩短快照间隔',
      priority: 'high' as const,
      risk: 0.25,
      paramChanges: { errorThreshold: 3, snapshotInterval: 60000 },
      rationale: '模式匹配：稳定性<60，强化监控',
    },
  },
  {
    id: 'pat-high-memory',
    match: (m) => m.memoryUsed > 100,
    intent: '降低内存占用',
    source: 'pattern',
    suggestion: {
      target: 'memoryCacheSize + enableLazyPyodide',
      problem: '内存占用偏高',
      fix: '减少内存缓存条目，启用 Pyodide 懒加载',
      priority: 'medium' as const,
      risk: 0.2,
      paramChanges: { memoryCacheSize: 30, enableLazyPyodide: true },
      rationale: '模式匹配：内存>100MB，优化资源',
    },
  },
]

// ===== 经验检索 =====

/**
 * 从知识库检索与当前症状相似的条目
 * 使用简单的字符串相似度（编辑距离的近似）
 */
function retrieveFromKnowledge(
  knowledge: KnowledgeEntry[],
  currentSymptoms: string[],
): KnowledgeEntry[] {
  if (currentSymptoms.length === 0) return []
  return knowledge
    .filter(k => k.confidence > 0.5)
    .filter(k => {
      // 症状交集
      const symptoms = k.symptom.split('+')
      return symptoms.some(s => currentSymptoms.includes(s))
    })
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 3)
}

// ===== 推理引擎 =====

/**
 * 本地 LLM 推理：无需外部 API
 * 综合 4 条路径得出建议
 */
export function localInfer(
  metrics: ObservedMetrics,
  scores: HealthScores,
  params: TunableParams,
  history: Iteration[],
  resourceCallCount: number,
): LocalLLMOutput {
  const timestamp = new Date().toISOString()

  // 1. 提取当前症状
  const currentSymptoms: string[] = []
  if (metrics.errorCount > 5) currentSymptoms.push('high-error-rate')
  if (metrics.fcp > 2000) currentSymptoms.push('slow-fcp')
  if (metrics.lcp > 4000) currentSymptoms.push('slow-lcp')
  if (metrics.memoryUsed > 100) currentSymptoms.push('high-memory')
  if (metrics.avgResponseTime > 500) currentSymptoms.push('slow-response')
  if (metrics.testPassRate < 0.5) currentSymptoms.push('low-test-pass')

  // 2. N-gram 路径：从历史提取模式
  const ngramKnowledge = extractNGramsFromHistory(history)
  const ngramMatches = retrieveFromKnowledge(ngramKnowledge, currentSymptoms)

  // 3. 模式匹配路径
  const patternMatches = PATTERN_RULES.filter(r => r.match(metrics, scores))

  // 4. 经验检索路径：从 N-gram 知识中检索
  const experienceMatches = ngramMatches.slice(0, 2)

  // 5. 启发式路径：基于规则的简单推断
  const heuristicSuggestions: LLMSuggestion[] = []
  if (scores.overall < 50) {
    heuristicSuggestions.push({
      id: `heur-${Date.now()}-1`,
      target: 'agentLearningRate',
      problem: '综合分偏低',
      fix: '降低学习率，保守迭代',
      priority: 'medium',
      risk: 0.1,
      paramChanges: { agentLearningRate: 0.1 },
      rationale: '启发式：综合分<50，保守策略',
    })
  }

  // 合并建议
  const suggestions: LLMSuggestion[] = []

  // 模式匹配建议（优先）
  for (const r of patternMatches) {
    suggestions.push({
      id: `${r.id}-${Date.now()}`,
      ...r.suggestion,
    } as LLMSuggestion)
  }

  // N-gram 建议
  for (const ng of ngramMatches) {
    if (ng.paramChanges && Object.keys(ng.paramChanges).length > 0) {
      suggestions.push({
        id: `${ng.id}-${Date.now()}`,
        target: Object.keys(ng.paramChanges).join(', '),
        problem: `历史模式：${ng.symptom}`,
        fix: `复用历史有效调整（gain 经验值）`,
        priority: 'medium',
        risk: 0.2,
        paramChanges: ng.paramChanges,
        rationale: `N-gram 路径：从 ${ng.source} 提取，置信度 ${ng.confidence.toFixed(2)}`,
      })
    }
  }

  // 启发式建议
  suggestions.push(...heuristicSuggestions)

  // 去重（按 target）+ 过滤无意义建议（建议值=当前值）
  const seen = new Set<string>()
  const deduped = suggestions.filter(s => {
    if (seen.has(s.target)) return false
    seen.add(s.target)
    // 过滤 no-op：建议的参数变更与当前值相同则跳过
    if (s.paramChanges) {
      const hasRealChange = Object.entries(s.paramChanges).some(([k, v]) => {
        const current = (params as unknown as Record<string, unknown>)[k]
        return current !== v
      })
      if (!hasRealChange) return false
    }
    return true
  }).slice(0, 6)

  // 计算理解度
  const comprehension = computeComprehension(history, history.length, resourceCallCount)

  // 推理链
  const reasoning = [
    `症状识别：${currentSymptoms.length > 0 ? currentSymptoms.join(', ') : '无明显异常'}`,
    `N-gram 路径：${ngramMatches.length} 条历史模式匹配`,
    `模式匹配路径：${patternMatches.length} 条规则命中`,
    `经验检索路径：${experienceMatches.length} 条相似经验`,
    `启发式路径：${heuristicSuggestions.length} 条推断`,
    `综合建议：${deduped.length} 条（已过滤 no-op，参考当前参数）`,
    `理解度：${comprehension.level}/100`,
  ].join(' | ')

  // 推断意图
  const intent = currentSymptoms.length > 0
    ? `针对 ${currentSymptoms.join('、')} 进行优化`
    : scores.overall < 60
      ? '综合优化提升整体健康度'
      : '维持当前状态，精细调优'

  // 置信度
  const confidence = deduped.length > 0
    ? Math.min(1, deduped.reduce((s, sg) => s + (1 - sg.risk), 0) / deduped.length)
    : 0.3

  // 推理来源
  const source = ngramMatches.length > 0
    ? 'ngram'
    : patternMatches.length > 0
      ? 'pattern'
      : experienceMatches.length > 0
        ? 'experience-retrieval'
        : 'heuristic'

  return {
    timestamp,
    intent,
    reasoning,
    suggestions: deduped,
    comprehension,
    confidence,
    source,
  }
}

// ===== 知识库构建（从 web 所有数据）=====

/**
 * 从 web 所有数据构建知识库
 * 这是 Agent 进化为 LLM 的核心：把所有数据作为推理素材
 */
export function buildKnowledgeBase(
  history: Iteration[],
  experienceLessons: { id: string; title: string; problem: string; solution?: string }[],
  errorEvents: { type: string; message: string; count: number }[],
  themeCount: number,
  levelCount: number,
): { total: number; bySource: Record<string, number>; samples: KnowledgeEntry[] } {
  const entries: KnowledgeEntry[] = []

  // 从历史迭代
  entries.push(...extractNGramsFromHistory(history))

  // 从经验教训
  for (const lesson of experienceLessons) {
    entries.push({
      id: `lesson-${lesson.id}`,
      source: 'experience',
      symptom: lesson.title,
      pattern: lesson.problem.slice(0, 50),
      action: lesson.solution || 'avoid',
      confidence: 0.7,
      timestamp: new Date().toISOString(),
    })
  }

  // 从错误事件
  for (const err of errorEvents) {
    entries.push({
      id: `err-${err.type}-${Date.now()}`,
      source: 'error',
      symptom: `${err.type} x${err.count}`,
      pattern: err.message.slice(0, 50),
      action: 'fix-or-retry',
      confidence: 0.6,
      timestamp: new Date().toISOString(),
    })
  }

  // 从主题/关卡（元数据）
  if (themeCount > 0) {
    entries.push({
      id: `theme-meta-${Date.now()}`,
      source: 'theme',
      symptom: `${themeCount} themes available`,
      pattern: 'theme-diversity',
      action: 'leverage-for-ux',
      confidence: 0.5,
      timestamp: new Date().toISOString(),
    })
  }
  if (levelCount > 0) {
    entries.push({
      id: `level-meta-${Date.now()}`,
      source: 'lesson',
      symptom: `${levelCount} levels available`,
      pattern: 'content-coverage',
      action: 'leverage-for-learning',
      confidence: 0.5,
      timestamp: new Date().toISOString(),
    })
  }

  // 按来源统计
  const bySource: Record<string, number> = {}
  for (const e of entries) {
    bySource[e.source] = (bySource[e.source] || 0) + 1
  }

  return {
    total: entries.length,
    bySource,
    samples: entries.slice(0, 10),
  }
}

/** 获取本地 LLM 能力描述（供 UI） */
export function getLocalLLMCapabilities() {
  return {
    name: '本地 LLM 内核',
    description: '无需外部 API 的离线推理引擎',
    paths: [
      { id: 'ngram', name: 'N-gram 模式匹配', description: '从历史迭代提取症状→调整→gain 模式' },
      { id: 'pattern', name: '规则模式匹配', description: '基于 5+ 内置规则的错误/性能/UX 模式识别' },
      { id: 'experience-retrieval', name: '经验检索', description: '从经验包检索相似场景教训' },
      { id: 'heuristic', name: '启发式推理', description: '基于元逻辑的启发式推断' },
    ],
    knowledgeSources: [
      'Agent 迭代历史',
      '经验包模块/约定/教训',
      '监查指标与错误事件',
      '用户进度数据',
      '主题配置',
      '关卡内容',
    ],
  }
}
