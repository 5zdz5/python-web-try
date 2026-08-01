const n=`/**
 * SelfCoder - 自编码器
 *
 * 核心理念：根据需求理解度，自动生成参数调整方案
 *           把编码经验传授给它，让 Agent 具备自编码能力
 *
 * 工作流程：
 * 1. 评估理解度（comprehension level 0-100）
 * 2. 根据理解度选择生成策略：
 *    - <30：保守模式，仅微调，参考历史
 *    - 30-70：探索模式，结合本地 LLM + 元逻辑
 *    - >70：精细模式，主动调度资源 + 自编码方案
 * 3. 生成 SelfCodePlan（参数变更 + 推理 + 置信度）
 * 4. 来源标记：local-llm / meta-logic / q-table / hybrid
 */

import type {
  SelfCodePlan, ComprehensionState, TunableParams,
  HealthScores, ObservedMetrics, Iteration,
  LLMSuggestion,
} from '../types/ai'
import { localInfer } from './localLLMCore'
import { runMetaLogic } from './metaLogic'
import type { MetaLogicContext } from '../types/ai'

// ===== 自编码策略选择 =====

type CodingMode = 'conservative' | 'exploratory' | 'precise'

function selectMode(comprehension: ComprehensionState): CodingMode {
  if (comprehension.level < 30) return 'conservative'
  if (comprehension.level > 70) return 'precise'
  return 'exploratory'
}

// ===== 保守模式：<30 理解度 =====

function conservativeCode(
  params: TunableParams,
  history: Iteration[],
): SelfCodePlan {
  // 仅微调，参考历史最佳
  const bestIter = history
    .filter(h => h.result === 'committed' && h.gain > 0)
    .sort((a, b) => b.gain - a.gain)[0]

  const paramChanges: Partial<TunableParams> = {}
  let reasoning = '保守模式：理解度<30，仅微调'

  if (bestIter && bestIter.decisions) {
    // 复用历史最佳迭代的参数调整
    for (const d of bestIter.decisions) {
      if (d.applied && d.afterParams) {
        Object.assign(paramChanges, d.afterParams)
      }
    }
    reasoning += \`，参考历史最佳迭代 #\${bestIter.iterationNumber}（gain=+\${bestIter.gain}）\`
  } else {
    // 无历史可参考，仅调整学习率
    paramChanges.agentLearningRate = Math.max(0.05, params.agentLearningRate * 0.8)
    reasoning += '，无历史可参考，降低学习率'
  }

  return {
    id: \`sc-conservative-\${Date.now()}\`,
    timestamp: new Date().toISOString(),
    comprehensionLevel: 0, // 由调用方填充
    intent: '保守微调',
    paramChanges,
    reasoning,
    confidence: 0.5,
    source: 'q-table',
  }
}

// ===== 探索模式：30-70 理解度 =====

function exploratoryCode(
  params: TunableParams,
  metrics: ObservedMetrics,
  scores: HealthScores,
  history: Iteration[],
  resourceCallCount: number,
  metaCtx: MetaLogicContext,
): SelfCodePlan {
  // 结合本地 LLM + 元逻辑
  const llmOutput = localInfer(metrics, scores, params, history, resourceCallCount)
  const metaResult = runMetaLogic(metaCtx)

  // 合并建议
  const paramChanges: Partial<TunableParams> = {}

  // 优先采纳高优先级 LLM 建议
  for (const s of llmOutput.suggestions) {
    if (s.priority === 'high' && s.risk < 0.4 && s.paramChanges) {
      Object.assign(paramChanges, s.paramChanges)
    }
  }

  // 合并元逻辑参数变更
  Object.assign(paramChanges, metaResult.paramChanges)

  const reasoning = [
    '探索模式：理解度 30-70，结合本地 LLM + 元逻辑',
    \`本地 LLM：\${llmOutput.suggestions.length} 条建议，置信度 \${llmOutput.confidence.toFixed(2)}\`,
    \`元逻辑：\${metaResult.appliedRules.length} 条规则命中\`,
    \`推理链：\${llmOutput.reasoning}\`,
  ].join(' | ')

  return {
    id: \`sc-exploratory-\${Date.now()}\`,
    timestamp: new Date().toISOString(),
    comprehensionLevel: 0,
    intent: llmOutput.intent,
    paramChanges,
    reasoning,
    confidence: Math.min(0.85, (llmOutput.confidence + metaResult.confidence) / 2),
    source: 'hybrid',
  }
}

// ===== 精细模式：>70 理解度 =====

function preciseCode(
  params: TunableParams,
  metrics: ObservedMetrics,
  scores: HealthScores,
  history: Iteration[],
  resourceCallCount: number,
  metaCtx: MetaLogicContext,
): SelfCodePlan {
  // 主动调度资源 + 自编码
  const llmOutput = localInfer(metrics, scores, params, history, resourceCallCount)
  const metaResult = runMetaLogic(metaCtx)

  const paramChanges: Partial<TunableParams> = {}

  // 采纳所有中等风险以下的建议
  for (const s of llmOutput.suggestions) {
    if (s.risk < 0.5 && s.paramChanges) {
      Object.assign(paramChanges, s.paramChanges)
    }
  }

  // 合并元逻辑
  Object.assign(paramChanges, metaResult.paramChanges)

  // 精细模式：提升学习率做精细调优
  if (paramChanges.agentLearningRate === undefined) {
    paramChanges.agentLearningRate = Math.min(0.4, params.agentLearningRate * 1.2)
  }

  const reasoning = [
    '精细模式：理解度>70，主动调度资源 + 自编码',
    \`本地 LLM：\${llmOutput.suggestions.length} 条建议\`,
    \`元逻辑：\${metaResult.appliedRules.length} 条规则命中\`,
    \`资源调度：\${metaResult.resourceCalls.length} 次调用\`,
    \`推理链：\${llmOutput.reasoning}\`,
  ].join(' | ')

  return {
    id: \`sc-precise-\${Date.now()}\`,
    timestamp: new Date().toISOString(),
    comprehensionLevel: 0,
    intent: llmOutput.intent + '（精细调优）',
    paramChanges,
    reasoning,
    confidence: Math.min(0.95, llmOutput.confidence * 1.1),
    source: 'hybrid',
  }
}

// ===== 主入口：生成自编码方案 =====

/**
 * 根据理解度生成自编码方案
 * @returns SelfCodePlan + 资源调用列表（供 Agent 调度）
 */
export function generateSelfCodePlan(
  params: TunableParams,
  metrics: ObservedMetrics,
  scores: HealthScores,
  history: Iteration[],
  comprehension: ComprehensionState,
  resourceCallCount: number,
  metaCtx: MetaLogicContext,
): { plan: SelfCodePlan; resourceCalls: { resource: string; action: string }[] } {
  const mode = selectMode(comprehension)

  let plan: SelfCodePlan
  let resourceCalls: { resource: string; action: string }[] = []

  switch (mode) {
    case 'conservative':
      plan = conservativeCode(params, history)
      break
    case 'exploratory':
      plan = exploratoryCode(params, metrics, scores, history, resourceCallCount, metaCtx)
      resourceCalls = [{ resource: 'llm', action: 'local-infer' }]
      break
    case 'precise':
      plan = preciseCode(params, metrics, scores, history, resourceCallCount, metaCtx)
      resourceCalls = [
        { resource: 'llm', action: 'local-infer' },
        { resource: 'pyodide', action: 'run-learning-validation' },
      ]
      break
  }

  plan.comprehensionLevel = comprehension.level
  return { plan, resourceCalls }
}

// ===== 自编码统计 =====

export function getCodingModeDescription(mode: CodingMode): string {
  switch (mode) {
    case 'conservative': return '保守模式（理解度<30）：仅微调，参考历史最佳'
    case 'exploratory': return '探索模式（理解度 30-70）：结合本地 LLM + 元逻辑'
    case 'precise': return '精细模式（理解度>70）：主动调度资源 + 自编码'
  }
}

export function getCurrentMode(comprehension: ComprehensionState): CodingMode {
  return selectMode(comprehension)
}

// ===== 从建议生成参数变更（供 UI 单条采纳）=====

export function suggestionToParamChanges(suggestion: LLMSuggestion): Partial<TunableParams> {
  return suggestion.paramChanges || {}
}
`;export{n as default};
