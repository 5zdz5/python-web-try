/**
 * MetaLogic - 元逻辑层
 *
 * 核心理念：将编码经验传授给 Agent，每轮迭代都加载并执行
 *
 * 元逻辑规则库涵盖：
 * 1. 工作流经验（Karpathy 四步：THINK → DIFF → RUN → POLISH）
 * 2. 参数调优经验（cacheTTL/debounceMs/maxRetries 等边界与最优值）
 * 3. UI 偏好经验（像素风/3D 立体/彩虹流动/乌鸦虹彩/无重叠）
 * 4. 安全经验（首页保护/快照先于执行/回溯阈值）
 * 5. 需求理解度评估（意图清晰度/上下文丰富度/历史一致性/资源利用率）
 * 6. 自编码经验（根据理解度自动生成参数调整）
 *
 * 每轮迭代流程：
 *   loadMetaLogic() → 按优先级排序 → 逐条 condition() → 命中则 apply() → 汇总 MetaLogicResult
 */

import type {
  MetaLogicRule, MetaLogicContext, MetaLogicResult, MetaLogicAction,
  ComprehensionState, TunableParams,
  Iteration, ResourceType, ResourceCall,
} from '../types/ai'

// ===== 元逻辑规则库（编码经验）=====

const RULES: MetaLogicRule[] = [
  // ===== 工作流经验 =====
  {
    id: 'wf-karpathy-think-first',
    category: 'workflow',
    title: 'Karpathy 四步：先思考再动手',
    description: '每轮迭代先评估理解度，理解度<40 时降低探索率避免盲调',
    priority: 100,
    condition: (ctx) => ctx.comprehension.level < 40 && ctx.params.strategyExplorationRate > 0.2,
    apply: (ctx) => ({
      paramChanges: { strategyExplorationRate: Math.max(0.1, ctx.params.strategyExplorationRate - 0.1) },
      log: '理解度低（<40），降低探索率至 0.1，先观察积累上下文（Karpathy: THINK first）',
      confidence: 0.85,
    }),
  },
  {
    id: 'wf-karpathy-diff-small',
    category: 'workflow',
    title: 'Karpathy 四步：小步 DIFF',
    description: '单次参数变更幅度不超过 20%，避免大步回溯',
    priority: 95,
    condition: (ctx) => ctx.history.some(h => Math.abs(h.gain) > 10),
    apply: (ctx) => ({
      paramChanges: { agentLearningRate: Math.min(0.2, ctx.params.agentLearningRate) },
      log: '历史出现大幅回溯，限制学习率≤0.2，保持小步迭代（Karpathy: small DIFF）',
      confidence: 0.9,
    }),
  },
  {
    id: 'wf-karpathy-run-validate',
    category: 'workflow',
    title: 'Karpathy 四步：RUN 后必验证',
    description: '每次参数变更后强制走验证阶段，失败立即回溯',
    priority: 90,
    condition: (ctx) => ctx.scores.stability < 60,
    apply: (ctx) => ({
      paramChanges: { errorThreshold: Math.max(2, ctx.params.errorThreshold - 1) },
      log: '稳定性分<60，收紧错误阈值，强化验证（Karpathy: RUN then validate）',
      confidence: 0.88,
    }),
  },

  // ===== 参数调优经验 =====
  {
    id: 'pt-cache-ttl-balance',
    category: 'param-tuning',
    title: '缓存 TTL 平衡：太短频繁失效，太长数据陈旧',
    description: 'cacheTTL 维持在 30s-5min 区间最优',
    priority: 80,
    condition: (ctx) => ctx.params.cacheTTL < 10000 || ctx.params.cacheTTL > 600000,
    apply: (ctx) => {
      const ttl = ctx.params.cacheTTL < 10000 ? 30000 : 300000
      return {
        paramChanges: { cacheTTL: ttl },
        log: `cacheTTL=${ctx.params.cacheTTL}ms 越界，调整为 ${ttl}ms（经验区间 30s-5min）`,
        confidence: 0.82,
      }
    },
  },
  {
    id: 'pt-debounce-ux-balance',
    category: 'param-tuning',
    title: '防抖平衡：<100ms 频繁触发，>1000ms 响应迟钝',
    description: 'debounceMs 维持在 150-500ms 区间',
    priority: 78,
    condition: (ctx) => ctx.params.debounceMs < 100 || ctx.params.debounceMs > 1000,
    apply: (ctx) => ({
      paramChanges: { debounceMs: 250 },
      log: `debounceMs=${ctx.params.debounceMs} 越界，调整为 250ms（UX 经验值）`,
      confidence: 0.85,
    }),
  },
  {
    id: 'pt-retry-stability',
    category: 'param-tuning',
    title: '重试次数：错误多时增加，稳定时减少',
    description: '根据错误率动态调整 maxRetries',
    priority: 75,
    condition: (ctx) => ctx.metrics.errorCount > 3 && ctx.params.maxRetries < 3,
    apply: (ctx) => ({
      paramChanges: { maxRetries: 3, retryBaseDelay: Math.min(2000, ctx.params.retryBaseDelay + 500) },
      log: `错误数=${ctx.metrics.errorCount}，提升 maxRetries=3，增加重试延迟`,
      confidence: 0.8,
      resourceCalls: [{ resource: 'monitor' as ResourceType, action: 'get-error-summary' }],
    }),
  },

  // ===== UI 偏好经验 =====
  {
    id: 'ui-animation-pixel-style',
    category: 'ui-preference',
    title: '像素风偏好：动画时长不宜过长',
    description: 'animationDuration 维持在 100-300ms，保持像素风硬朗感',
    priority: 70,
    condition: (ctx) => ctx.params.animationDuration > 500,
    apply: (ctx) => ({
      paramChanges: { animationDuration: 200 },
      log: `animationDuration=${ctx.params.animationDuration} 过长，调整为 200ms（像素风硬朗）`,
      confidence: 0.78,
    }),
  },
  {
    id: 'ui-toast-duration',
    category: 'ui-preference',
    title: 'Toast 时长：太短看不清，太长挡视线',
    description: 'toastDuration 维持在 2000-4000ms',
    priority: 68,
    condition: (ctx) => ctx.params.toastDuration < 1500 || ctx.params.toastDuration > 5000,
    apply: (ctx) => ({
      paramChanges: { toastDuration: 3000 },
      log: `toastDuration=${ctx.params.toastDuration} 越界，调整为 3000ms`,
      confidence: 0.8,
    }),
  },

  // ===== 安全经验 =====
  {
    id: 'safety-snapshot-before-act',
    category: 'safety',
    title: '执行前必先快照',
    description: '每次参数变更前调用 monitor 资源创建快照',
    priority: 99,
    condition: (ctx) => ctx.iteration > 0 && ctx.history.length === 0,
    apply: () => ({
      log: '首轮执行，强制调度 monitor 创建快照（安全优先）',
      confidence: 1.0,
      resourceCalls: [{ resource: 'monitor' as ResourceType, action: 'create-snapshot' }],
    }),
  },
  {
    id: 'safety-rollback-on-regression',
    category: 'safety',
    title: '回溯阈值：综合分下降>5 必须回溯',
    description: '历史 gain < -5 时降低学习率防止恶化',
    priority: 92,
    condition: (ctx) => ctx.history.slice(0, 3).some(h => h.gain < -5),
    apply: (ctx) => ({
      paramChanges: { agentLearningRate: Math.max(0.05, ctx.params.agentLearningRate * 0.5) },
      log: '近期出现 gain<-5，学习率减半，防止恶化',
      confidence: 0.95,
    }),
  },

  // ===== 需求理解度评估 =====
  {
    id: 'comp-boost-on-success',
    category: 'comprehension',
    title: '连续成功提升理解度',
    description: '连续 3 次迭代 committed，理解度+5',
    priority: 85,
    condition: (ctx) => {
      const recent = ctx.history.slice(0, 3)
      return recent.length === 3 && recent.every(h => h.result === 'committed')
    },
    apply: () => ({
      log: '连续 3 次提交成功，理解度置信度提升',
      confidence: 0.9,
    }),
  },
  {
    id: 'comp-reduce-on-rollback',
    category: 'comprehension',
    title: '回溯降低理解度',
    description: '连续 2 次回溯，理解度-10，重新观察',
    priority: 88,
    condition: (ctx) => {
      const recent = ctx.history.slice(0, 2)
      return recent.length === 2 && recent.every(h => h.result === 'rolledback')
    },
    apply: (ctx) => ({
      paramChanges: { strategyExplorationRate: Math.min(0.8, ctx.params.strategyExplorationRate + 0.2) },
      log: '连续 2 次回溯，提升探索率重新尝试新策略',
      confidence: 0.85,
    }),
  },

  // ===== 自编码经验 =====
  {
    id: 'sc-high-comprehension-auto-tune',
    category: 'self-coding',
    title: '高理解度自动精细调优',
    description: '理解度>70 时，提升学习率做精细调优',
    priority: 82,
    condition: (ctx) => ctx.comprehension.level > 70 && ctx.params.agentLearningRate < 0.3,
    apply: () => ({
      paramChanges: { agentLearningRate: 0.3 },
      log: '理解度>70，提升学习率至 0.3 做精细调优（自编码：高置信快速迭代）',
      confidence: 0.88,
    }),
  },
  {
    id: 'sc-resource-dispatch',
    category: 'self-coding',
    title: '主动调度资源验证假设',
    description: '理解度中等时主动调度 Pyodide 验证学习效果',
    priority: 76,
    condition: (ctx) => ctx.comprehension.level >= 40 && ctx.comprehension.level <= 70 && ctx.iteration % 3 === 0,
    apply: () => ({
      log: '理解度中等，主动调度 pyodide 跑测试验证假设',
      confidence: 0.75,
      resourceCalls: [{ resource: 'pyodide' as ResourceType, action: 'run-learning-validation' }],
    }),
  },
]

// ===== 理解度计算 =====

const INITIAL_COMPREHENSION: ComprehensionState = {
  level: 50,
  factors: {
    intentClarity: 50,
    contextRichness: 50,
    historyAlignment: 50,
    resourceUtilization: 50,
  },
  lastUpdate: new Date().toISOString(),
}

/**
 * 计算当前理解度
 * 综合 4 个因子：
 * 1. 意图清晰度：历史 committed 率越高越清晰
 * 2. 上下文丰富度：迭代次数 + 资源调用越多越丰富
 * 3. 历史一致性：gain 方差越小越一致
 * 4. 资源利用率：资源调用次数
 */
export function computeComprehension(
  history: Iteration[],
  iteration: number,
  resourceCalls: number,
): ComprehensionState {
  // 1. 意图清晰度
  const committedCount = history.filter(h => h.result === 'committed').length
  const intentClarity = history.length > 0
    ? Math.min(100, 50 + (committedCount / history.length) * 50)
    : 50

  // 2. 上下文丰富度
  const contextRichness = Math.min(100, 30 + iteration * 3 + resourceCalls * 2)

  // 3. 历史一致性（gain 方差越小越一致）
  const gains = history.map(h => h.gain).filter(g => !isNaN(g))
  const avgGain = gains.length > 0 ? gains.reduce((s, g) => s + g, 0) / gains.length : 0
  const variance = gains.length > 0
    ? gains.reduce((s, g) => s + (g - avgGain) ** 2, 0) / gains.length
    : 100
  const historyAlignment = Math.max(0, Math.min(100, 100 - variance * 2))

  // 4. 资源利用率
  const resourceUtilization = Math.min(100, resourceCalls * 5)

  // 加权综合
  const level = Math.round(
    intentClarity * 0.3 +
    contextRichness * 0.25 +
    historyAlignment * 0.25 +
    resourceUtilization * 0.2
  )

  return {
    level: Math.max(0, Math.min(100, level)),
    factors: {
      intentClarity: Math.round(intentClarity),
      contextRichness: Math.round(contextRichness),
      historyAlignment: Math.round(historyAlignment),
      resourceUtilization: Math.round(resourceUtilization),
    },
    lastUpdate: new Date().toISOString(),
  }
}

export function getInitialComprehension(): ComprehensionState {
  return { ...INITIAL_COMPREHENSION, lastUpdate: new Date().toISOString() }
}

// ===== 元逻辑执行器 =====

/**
 * 执行元逻辑：每轮迭代调用
 * 按优先级排序 → 逐条检查 condition → 命中则 apply → 汇总结果
 */
export function runMetaLogic(ctx: MetaLogicContext): MetaLogicResult {
  const appliedRules: string[] = []
  const logs: string[] = []
  const resourceCalls: ResourceCall[] = []
  const paramChanges: Partial<TunableParams> = {}
  let totalConfidence = 0
  let confidenceCount = 0

  // 按优先级降序
  const sorted = [...RULES].sort((a, b) => b.priority - a.priority)

  for (const rule of sorted) {
    try {
      if (!rule.condition(ctx)) continue
      const action: MetaLogicAction = rule.apply(ctx)
      appliedRules.push(rule.id)
      logs.push(`[${rule.id}] ${action.log}`)
      totalConfidence += action.confidence
      confidenceCount++

      // 合并参数变更（后执行的覆盖前面的，但只在该键未冲突时合并）
      if (action.paramChanges) {
        for (const [k, v] of Object.entries(action.paramChanges)) {
          (paramChanges as Record<string, unknown>)[k] = v
        }
      }

      // 收集资源调用
      if (action.resourceCalls) {
        for (const rc of action.resourceCalls) {
          resourceCalls.push({
            id: `rc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            resource: rc.resource,
            action: rc.action,
            args: rc.args,
            timestamp: new Date().toISOString(),
          })
        }
      }
    } catch (err) {
      logs.push(`[${rule.id}] 执行异常: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  const confidence = confidenceCount > 0 ? totalConfidence / confidenceCount : 0

  return {
    appliedRules,
    paramChanges,
    logs,
    resourceCalls,
    confidence,
  }
}

/** 获取所有规则（供 UI 展示） */
export function getMetaLogicRules(): MetaLogicRule[] {
  return [...RULES].sort((a, b) => b.priority - a.priority)
}

/** 获取规则数量统计 */
export function getMetaLogicStats() {
  const categories = new Set(RULES.map(r => r.category))
  return {
    total: RULES.length,
    categories: categories.size,
    byCategory: Array.from(categories).map(c => ({
      category: c,
      count: RULES.filter(r => r.category === c).length,
    })),
  }
}
