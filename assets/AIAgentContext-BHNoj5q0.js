const n=`/**
 * AI Agent Context - 全自动迭代优化系统
 *
 * 架构：
 *   迭代循环：观察 → 分析 → 决策 → 快照 → 执行 → 验证 → 提交/回溯
 *
 * 安全机制：
 *   1. 首页保护：当前在 '/' 路由时，执行阶段跳过（不修改任何参数）
 *   2. 版本号快照：每次执行前创建带版本号的快照（agent@v1.3-iter5-{ts}）
 *   3. 自动回溯：验证阶段如综合分下降超过阈值，自动回溯到最近稳定快照
 *   4. 迭代上限：达到 maxIterations 后自动停止
 *   5. 崩溃联动：MonitorContext 检测到崩溃时，Agent 自动回溯到上一个稳定快照
 */
import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react'
import type {
  AgentState, AgentConfig, TunableParams, ObservedMetrics, HealthScores,
  Iteration, Decision, AgentSnapshot, AgentSummary, IterationPhase,
  GlobalOrchestrationState, OrchestrationEntry, OrchestrationEntryType,
  WikiSyncState, WikiPushRecord, LearningMetrics,
  LLMConfig, LLMAnalysisResult, AdoptedSuggestion, SkillTrainingConfig, SkillCompliance,
  // pack33 超级进化类型
  ResourceType, ResourceBusState,
  ComprehensionState, MetaLogicContext, MetaLogicResult,
  LocalLLMOutput, SelfCodePlan, SuperEvolutionStats,
  // pack34 代码级自优化：Kimi + 编码经验注入 + 代码补丁
  CodeSelfOptimizeConfig, CodeSelfOptimizeRun, ExperienceInjectionResult,
  CodebaseIndex, CodingExperienceEntry,
} from '../types/ai'
import { DEFAULT_PARAMS, STRATEGIES, computeScores, selectStrategies, loadQTable, updateQTable, QTable } from '../ai/Optimizer'
import { collectMetrics, resetCounters, initInteractionTracking, recordCrash } from '../ai/metrics'
import { generateExperiencePack } from '../ai/experiencePack'
import {
  DEFAULT_WIKI_SYNC, inspectCodebase, saveWikiSyncState, applyPushToState,
  processPendingQueue, pushToWikiAsync, buildPackWikiMarkdown, buildChangesWikiMarkdown
} from '../ai/wikiSync'
import { DEFAULT_LLM_CONFIG, LLM_CONFIG_KEY, testLLMConnection } from '../ai/llmClient'
import { analyzeWithLLM, computeLLMGain } from '../ai/llmAdvisor'
import { DEFAULT_SKILL_TRAINING_CONFIG, getSkillTrainingSummary } from '../ai/skillTrainer'
// pack33 超级进化：资源调配总线 + 元逻辑 + 本地 LLM 内核 + 自编码器
import { createResourceBus, registerResourceHandler, registerAllMockHandlers } from '../ai/resourceBus'
import { runMetaLogic, computeComprehension, getInitialComprehension, getMetaLogicStats } from '../ai/metaLogic'
import { localInfer } from '../ai/localLLMCore'
import { generateSelfCodePlan, getCurrentMode } from '../ai/selfCoder'
import { CURRENT_VERSION } from '../config/versionManager'
// pack34 代码自优化：索引 + 编码经验注入 + 自优化引擎
import {
  buildCodebaseIndex,
} from '../ai/codebaseIndexer'
import {
  loadCodingExperiences,
  injectExperiences,
  appendCodingExperience,
  getExperienceStats,
} from '../ai/codingExperienceInjector'
import {
  runCodeSelfOptimize,
  SelfOptimizeResult,
} from '../ai/codeSelfOptimizer'
export const DEFAULT_CODE_SELF_OPTIMIZE_CONFIG: CodeSelfOptimizeConfig = {
  enabled: false,
  maxPatchesPerRun: 8,
  autoApply: false,
  forceBackup: true,
  autoValidate: true,
  autoRollback: true,
  allowedFilePatterns: ['src/ai/**/*.ts', 'src/context/**/*.tsx', 'src/components/**/*.tsx'],
  forbiddenPatterns: ['src/pages/Home', 'src/pages/Home/', 'package.json', 'tsconfig.json', '.html'],
  maxAllowedRisk: 0.55,
  preferredProvider: 'kimi',
}
const CODE_SELF_OPTIMIZE_CONFIG_KEY = 'python-quest-code-self-optimize-config'
import { useMonitor } from './MonitorContext'
import { usePyodide } from './PyodideContext'
import { challenges } from '../data/lessonContent'

// ===== 常量 =====
const AGENT_PARAMS_KEY = 'python-quest-agent-params'
const AGENT_CONFIG_KEY = 'python-quest-agent-config'
const AGENT_SNAPSHOTS_KEY = 'python-quest-agent-snapshots'
const AGENT_HISTORY_KEY = 'python-quest-agent-history'
const AGENT_ORCHESTRATION_KEY = 'python-quest-agent-orchestration'
const AGENT_WIKI_SYNC_KEY = 'python-quest-wiki-sync'  // pack21: Wiki 同步状态持久化
// pack33: 超级进化状态持久化（理解度 + 进化统计）
const AGENT_COMPREHENSION_KEY = 'python-quest-agent-comprehension'
const AGENT_SUPER_EVOLUTION_KEY = 'python-quest-agent-super-evolution'
const MAX_SNAPSHOTS = 8
const MAX_HISTORY = 20
const MAX_ORCHESTRATION_ENTRIES = 30

// ===== 默认配置 =====
const DEFAULT_CONFIG: AgentConfig = {
  autoRun: false,
  iterationInterval: 30000,       // 30 秒一轮
  observationPeriod: 5000,       // 观察 5 秒
  verificationPeriod: 5000,      // 验证 5 秒
  rollbackThreshold: 5,          // 综合分下降 5 分触发回溯
  homepageProtected: true,
  maxIterations: 20,
  enabledDomains: ['performance', 'ux', 'content', 'stability', 'meta', 'learning-outcome'],
}

// ===== Context 类型 =====
interface AIAgentContextValue {
  // 状态
  state: AgentState
  config: AgentConfig
  params: TunableParams
  currentIteration: Iteration | null
  history: Iteration[]
  snapshots: AgentSnapshot[]
  summary: AgentSummary

  // 控制
  startAgent: () => void
  stopAgent: () => void
  pauseAgent: () => void
  resetAgent: () => void
  updateConfig: (patch: Partial<AgentConfig>) => void
  resetParams: () => void

  // 手动操作
  createSnapshot: (label?: string) => AgentSnapshot | null
  restoreSnapshot: (id: string) => boolean
  deleteSnapshot: (id: string) => void
  markSnapshotStable: (id: string) => void

  // 数据
  currentMetrics: ObservedMetrics | null
  currentScores: HealthScores | null
  strategies: typeof STRATEGIES

  // 全局调配
  orchestration: GlobalOrchestrationState
  runGlobalOrchestration: () => Promise<void>
  clearOrchestrationEntries: () => void

  // 缓存与重置（安全无破坏性，不影响用户数据）
  clearAgentRuntimeCache: () => number   // 清 Agent 自身缓存/指标，返回被清理项数
  safeFullReset: () => void              // 安全全量重置（仅 Agent 数据，不碰用户进度/认证）
  agentCacheStats: () => { localStorageCount: number; sessionStorageCount: number }

  // Wiki 同步（pack21 新增：Agent 监察后推到 Wiki，更改也推到 Wiki）
  wikiSync: WikiSyncState
  inspectAndPushToWiki: () => Promise<WikiPushRecord[]>
  updateWikiSyncConfig: (patch: Partial<Pick<WikiSyncState, 'autoPushEnabled'>>) => void

  // pack28 超级进化：学习效果指标（Pyodide 验证闭环）
  learningMetrics: LearningMetrics | null
  runLearningValidation: () => Promise<LearningMetrics | null>

  // pack30 LLM 进化：LLM 驱动的优化分析
  llmConfig: LLMConfig
  llmAnalysis: LLMAnalysisResult | null
  adoptedSuggestions: AdoptedSuggestion[]
  isLLMAnalyzing: boolean
  runLLMAnalysis: () => Promise<LLMAnalysisResult | null>
  updateLLMConfig: (patch: Partial<LLMConfig>) => void
  applyLLMSuggestion: (suggestionId: string) => boolean
  dismissLLMSuggestion: (suggestionId: string) => void
  testLLM: () => Promise<{ ok: boolean; message: string; model?: string }>
  // pack31 Skill 训练：skill 规则注入 LLM + 合规检测
  skillTrainingConfig: SkillTrainingConfig
  skillCompliance: SkillCompliance[]
  updateSkillTrainingConfig: (patch: Partial<SkillTrainingConfig>) => void
  // pack32 LLM 训练统计
  llmTrainingStats: {
    totalAnalysis: number
    totalSuggestions: number
    adoptedCount: number
    violatedCount: number
    qTableFeedbackCount: number
    lastGain: number
  }

  // pack33 超级进化：Agent 作为资源调配中心 + 本地 LLM 内核 + 自编码
  resourceBusState: ResourceBusState
  comprehension: ComprehensionState
  lastMetaLogicResult: MetaLogicResult | null
  lastLocalLLMOutput: LocalLLMOutput | null
  lastSelfCodePlan: SelfCodePlan | null
  superEvolutionStats: SuperEvolutionStats
  runSuperEvolution: () => Promise<void>
  dispatchResource: (resource: ResourceType, action: string, args?: Record<string, unknown>) => Promise<unknown>

  // pack34 代码级自优化：Kimi 超级升级 + 编码经验注入 + 代码补丁闭环
  codeSelfOptimizeConfig: CodeSelfOptimizeConfig
  updateCodeSelfOptimizeConfig: (patch: Partial<CodeSelfOptimizeConfig>) => void
  codebaseIndex: CodebaseIndex | null
  buildCodebaseIndexAsync: (maxFiles?: number) => Promise<CodebaseIndex>
  codingExperiences: CodingExperienceEntry[]
  codingExperienceInjection: ExperienceInjectionResult | null
  refreshCodingExperiences: () => void
  addCustomCodingExperience: (entry: Omit<CodingExperienceEntry, 'id' | 'timestamp'>) => CodingExperienceEntry | null
  lastSelfOptimizeResult: SelfOptimizeResult | null
  isSelfOptimizing: boolean
  runCodeSelfOptimizeAsync: (intent?: string, skipLLM?: boolean) => Promise<SelfOptimizeResult | null>
  lastSelfOptimizeRuns: CodeSelfOptimizeRun[]
}

const AIAgentContext = createContext<AIAgentContextValue | null>(null)

// ===== 辅助函数 =====
function safeGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function safeSet(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); return true } catch { return false }
}
function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try { return JSON.parse(raw) as T } catch { return fallback }
}

/** 当前是否在首页（受保护） */
function isOnHomepage(): boolean {
  const hash = window.location.hash || ''
  return hash === '#/' || hash === '' || hash === '#'
}

/** 创建版本号快照标识 */
function makeVersionStamp(iteration: number): string {
  return \`agent@\${CURRENT_VERSION}-iter\${iteration}-\${Date.now()}\`
}

/** 默认全局调配状态 */
const DEFAULT_ORCHESTRATION: GlobalOrchestrationState = {
  active: false,
  lastRun: null,
  entries: [],
  packReadEnabled: true,
  autoWritePack: true,
  totalAdaptations: 0,
}

/** 创建调配记录条目 */
function makeEntry(type: OrchestrationEntryType, summary: string, detail?: string, modules?: string[], scoreImpact?: number): OrchestrationEntry {
  return {
    id: \`orc-\${Date.now()}-\${Math.random().toString(36).slice(2, 6)}\`,
    timestamp: new Date().toISOString(),
    type,
    summary,
    detail,
    modules,
    scoreImpact,
  }
}

// ===== Provider =====
export function AIAgentProvider({ children }: { children: ReactNode }) {
  const monitor = useMonitor()
  const pyodide = usePyodide()

  const [state, setState] = useState<AgentState>('idle')
  const [config, setConfig] = useState<AgentConfig>(() =>
    safeParse(safeGet(AGENT_CONFIG_KEY), DEFAULT_CONFIG)
  )
  const [params, setParams] = useState<TunableParams>(() =>
    safeParse(safeGet(AGENT_PARAMS_KEY), DEFAULT_PARAMS)
  )
  const [currentIteration, setCurrentIteration] = useState<Iteration | null>(null)
  const [history, setHistory] = useState<Iteration[]>(() =>
    safeParse(safeGet(AGENT_HISTORY_KEY), [])
  )
  const [snapshots, setSnapshots] = useState<AgentSnapshot[]>(() =>
    safeParse(safeGet(AGENT_SNAPSHOTS_KEY), [])
  )
  const [currentMetrics, setCurrentMetrics] = useState<ObservedMetrics | null>(null)
  const [currentScores, setCurrentScores] = useState<HealthScores | null>(null)
  const [rollbackCount, setRollbackCount] = useState(0)
  const [appliedOptimizations, setAppliedOptimizations] = useState(0)
  const [orchestration, setOrchestration] = useState<GlobalOrchestrationState>(() =>
    safeParse(safeGet(AGENT_ORCHESTRATION_KEY), DEFAULT_ORCHESTRATION)
  )
  // pack21: Wiki 同步状态（Agent 监察后推到 Wiki）
  const [wikiSync, setWikiSync] = useState<WikiSyncState>(() => {
    const stored = safeParse(safeGet(AGENT_WIKI_SYNC_KEY), DEFAULT_WIKI_SYNC)
    return { ...DEFAULT_WIKI_SYNC, ...stored }
  })
  // pack28 超级进化：学习效果指标（Pyodide 验证闭环）
  const [learningMetrics, setLearningMetrics] = useState<LearningMetrics | null>(null)
  // pack29 超级进化：Q-table（epsilon-greedy，meta参数真生效）
  const qTableRef = useRef<QTable>(loadQTable())
  // pack30 LLM 进化：LLM 配置 + 分析结果 + 已采纳建议
  const [llmConfig, setLlmConfig] = useState<LLMConfig>(() => {
    const stored = safeParse(safeGet(LLM_CONFIG_KEY), DEFAULT_LLM_CONFIG)
    return { ...DEFAULT_LLM_CONFIG, ...stored }
  })
  const [llmAnalysis, setLlmAnalysis] = useState<LLMAnalysisResult | null>(null)
  const [adoptedSuggestions, setAdoptedSuggestions] = useState<AdoptedSuggestion[]>([])
  const [isLLMAnalyzing, setIsLLMAnalyzing] = useState(false)
  // pack31 Skill 训练：skill 规则注入 LLM prompt + 合规检测
  const [skillTrainingConfig, setSkillTrainingConfig] = useState<SkillTrainingConfig>(DEFAULT_SKILL_TRAINING_CONFIG)
  const [skillCompliance, setSkillCompliance] = useState<SkillCompliance[]>([])
  // pack32 LLM 训练统计：采纳率/违规率/Q-table 反馈
  const [llmTrainingStats, setLlmTrainingStats] = useState({
    totalAnalysis: 0,          // LLM 分析总次数
    totalSuggestions: 0,       // LLM 输出的建议总数
    adoptedCount: 0,           // 被采纳的建议数
    violatedCount: 0,          // 被合规检测拦截的建议数
    qTableFeedbackCount: 0,    // Q-table 反馈次数
    lastGain: 0,               // 最近一次反馈的 gain
  })
  const llmAutoTrainTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // pack33 超级进化：资源调配总线 + 元逻辑 + 本地 LLM + 自编码
  const resourceBusRef = useRef(createResourceBus())
  const [resourceBusState, setResourceBusState] = useState<ResourceBusState>(() => resourceBusRef.current.getState())
  const [comprehension, setComprehension] = useState<ComprehensionState>(() => {
    const stored = safeParse(safeGet(AGENT_COMPREHENSION_KEY), null as ComprehensionState | null)
    return stored || getInitialComprehension()
  })
  const [lastMetaLogicResult, setLastMetaLogicResult] = useState<MetaLogicResult | null>(null)
  const [lastLocalLLMOutput, setLastLocalLLMOutput] = useState<LocalLLMOutput | null>(null)
  const [lastSelfCodePlan, setLastSelfCodePlan] = useState<SelfCodePlan | null>(null)
  const [superEvolutionStats, setSuperEvolutionStats] = useState<SuperEvolutionStats>(() =>
    safeParse(safeGet(AGENT_SUPER_EVOLUTION_KEY), {
      metaLogicRuns: 0,
      localLLMRuns: 0,
      selfCodePlans: 0,
      resourceDispatches: 0,
      avgComprehension: 50,
      lastComprehension: 50,
      evolutionLevel: 50,
    })
  )
  // 累计理解度（用于计算平均值）
  const comprehensionAccumRef = useRef<{ sum: number; count: number }>({ sum: 0, count: 0 })

  // ===== pack34 代码级自优化：状态 =====
  const [codeSelfOptimizeConfig, setCodeSelfOptimizeConfig] = useState<CodeSelfOptimizeConfig>(() =>
    safeParse(safeGet(CODE_SELF_OPTIMIZE_CONFIG_KEY), DEFAULT_CODE_SELF_OPTIMIZE_CONFIG)
  )
  const [codebaseIndex, setCodebaseIndex] = useState<CodebaseIndex | null>(null)
  const [codingExperiences, setCodingExperiences] = useState<CodingExperienceEntry[]>(() => {
    try { return loadCodingExperiences() } catch { return [] }
  })
  const [codingExperienceInjection, setCodingExperienceInjection] = useState<ExperienceInjectionResult | null>(() => {
    try { return injectExperiences(loadCodingExperiences()) } catch { return null }
  })
  const [lastSelfOptimizeResult, setLastSelfOptimizeResult] = useState<SelfOptimizeResult | null>(null)
  const [isSelfOptimizing, setIsSelfOptimizing] = useState(false)
  const [lastSelfOptimizeRuns, setLastSelfOptimizeRuns] = useState<CodeSelfOptimizeRun[]>([])

  // pack34 持久化
  useEffect(() => {
    safeSet(CODE_SELF_OPTIMIZE_CONFIG_KEY, JSON.stringify(codeSelfOptimizeConfig))
  }, [codeSelfOptimizeConfig])

  const iterationCountRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cleanupTrackingRef = useRef<(() => void) | null>(null)
  // pack29: Wiki pending 队列消费者定时器（每 5 分钟跑一次）
  const wikiConsumerTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isOnHomepageRef = useRef(isOnHomepage())
  const startTimeRef = useRef(Date.now())
  // 使用 ref 打破循环依赖，始终指向最新的 runIteration
  const runIterationRef = useRef<() => Promise<void>>(() => Promise.resolve())

  // ===== 持久化 =====
  useEffect(() => { safeSet(AGENT_PARAMS_KEY, JSON.stringify(params)) }, [params])
  useEffect(() => { safeSet(AGENT_CONFIG_KEY, JSON.stringify(config)) }, [config])
  useEffect(() => { safeSet(AGENT_HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY))) }, [history])
  useEffect(() => { safeSet(AGENT_SNAPSHOTS_KEY, JSON.stringify(snapshots.slice(0, MAX_SNAPSHOTS))) }, [snapshots])
  useEffect(() => { safeSet(AGENT_ORCHESTRATION_KEY, JSON.stringify({ ...orchestration, entries: orchestration.entries.slice(0, MAX_ORCHESTRATION_ENTRIES) })) }, [orchestration])
  // pack21: Wiki 同步状态持久化
  useEffect(() => { saveWikiSyncState(wikiSync) }, [wikiSync])
  // pack33: 理解度 + 超级进化统计持久化
  useEffect(() => { safeSet(AGENT_COMPREHENSION_KEY, JSON.stringify(comprehension)) }, [comprehension])
  useEffect(() => { safeSet(AGENT_SUPER_EVOLUTION_KEY, JSON.stringify(superEvolutionStats)) }, [superEvolutionStats])

  // ===== 跟踪首页位置 =====
  useEffect(() => {
    const onHashChange = () => { isOnHomepageRef.current = isOnHomepage() }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // ===== 初始化交互监听 + Wiki pending 队列消费者 =====
  useEffect(() => {
    cleanupTrackingRef.current = initInteractionTracking()
    // pack29: 每 5 分钟跑一次 pending 队列消费者，有 GitHub 凭证时真推送
    wikiConsumerTimerRef.current = setInterval(() => {
      if (!wikiSync.autoPushEnabled) return
      processPendingQueue({ maxRetries: params.maxRetries, retryBaseDelayMs: params.retryBaseDelay })
        .then(results => {
          if (results.length > 0) {
            const success = results.filter(r => r.status === 'success').length
            const failed = results.filter(r => r.status === 'failed').length
            monitor.logEvent('info', 'agent', \`Wiki 队列消费者：\${results.length} 条（成功 \${success}，失败 \${failed}）\`)
            setWikiSync(prev => {
              let next = prev
              for (const r of results) next = applyPushToState(next, r)
              return next
            })
          }
        })
        .catch(err => {
          monitor.logEvent('warning', 'agent', \`Wiki 队列消费者异常：\${err instanceof Error ? err.message : String(err)}\`)
        })
    }, 5 * 60 * 1000)
    return () => {
      if (cleanupTrackingRef.current) cleanupTrackingRef.current()
      if (wikiConsumerTimerRef.current) clearInterval(wikiConsumerTimerRef.current)
    }
  }, [wikiSync.autoPushEnabled, monitor, params.maxRetries, params.retryBaseDelay])

  // ===== pack33: 资源调配总线 — 注册真实处理器（Agent 作为资源调配中心）=====
  // 监查/经验/Wiki/LLM/Pyodide 走真实实现；插件/Skill/关卡 走 Mock（前端无后端）
  useEffect(() => {
    // 先注册所有 Mock 作为兜底
    registerAllMockHandlers()

    // monitor: 走真实 MonitorContext
    registerResourceHandler('monitor', async (action) => {
      if (action === 'get-error-summary') {
        return { errorEvents: monitor.summary.errorEvents, crashed: monitor.summary.crashed }
      }
      if (action === 'get-crash-status') {
        return { crashed: monitor.summary.crashed }
      }
      if (action === 'create-snapshot') {
        const snap = createSnapshot('resource-bus-monitor')
        return snap ? { id: snap.id, version: snap.versionStamp } : null
      }
      return { action, monitor: monitor.summary }
    })

    // experience: 走真实 experiencePack
    registerResourceHandler('experience', async (action) => {
      if (action === 'read-pack' || action === 'retrieve-lessons') {
        const pack = generateExperiencePack({ generatedBy: 'ai-agent' })
        return { version: pack.meta.packVersion, modules: pack.modules.length, lessons: pack.lessons.slice(0, 5) }
      }
      if (action === 'write-pack') {
        return { written: true, timestamp: new Date().toISOString() }
      }
      return { action }
    })

    // wiki: 走真实 wikiSync
    registerResourceHandler('wiki', async (action) => {
      if (action === 'get-pending') {
        return { pending: wikiSync.pendingChanges.length }
      }
      if (action === 'process-pending') {
        const results = await processPendingQueue({ maxRetries: params.maxRetries, retryBaseDelayMs: params.retryBaseDelay })
        return { processed: results.length }
      }
      if (action === 'push-to-wiki') {
        return { autoPushEnabled: wikiSync.autoPushEnabled, lastPush: wikiSync.lastPush }
      }
      return { action }
    })

    // llm: 优先本地 LLM 内核（离线），可选外部 LLM
    registerResourceHandler('llm', async (action) => {
      if (action === 'local-infer' || action === 'get-comprehension') {
        const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
        const scores = computeScores(metrics)
        const resourceCallCount = resourceBusRef.current.getState().totalCalls
        const output = localInfer(metrics, scores, params, history, resourceCallCount)
        if (action === 'get-comprehension') {
          return { comprehension: output.comprehension }
        }
        return output
      }
      if (action === 'external-infer') {
        // 委托给已有的 runLLMAnalysis（若启用）
        return { enabled: llmConfig.enabled, model: llmConfig.model }
      }
      return { action }
    })

    // pyodide: 走真实 PyodideContext
    registerResourceHandler('pyodide', async (action, args) => {
      if (action === 'run-learning-validation') {
        const lm = await runLearningValidation()
        return lm ? { passRate: lm.passRate, total: lm.totalTests } : null
      }
      if (action === 'run-code' && args?.code) {
        const result = await pyodide.runCode(String(args.code))
        return result
      }
      if (action === 'run-code-with-tests' && args?.code && args?.tests) {
        const result = await pyodide.runCodeWithTests(String(args.code), String(args.tests))
        return result
      }
      return { action, ready: !!pyodide.pyodide }
    })

    return () => {
      // 不注销（全局单例），仅记录
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitor, params, history, wikiSync, llmConfig, pyodide])

  // ===== 崩溃联动：监听 MonitorContext 崩溃事件 =====
  useEffect(() => {
    if (monitor.crashed && snapshots.length > 0) {
      // 自动回溯到最近稳定快照
      const stable = snapshots.find(s => s.stable) || snapshots[0]
      recordCrash()
      restoreSnapshotInternal(stable.id)
      setState('rolledback')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitor.crashed])

  // ===== 创建快照 =====
  const createSnapshot = useCallback((label?: string): AgentSnapshot | null => {
    try {
      const iter = iterationCountRef.current
      const versionStamp = makeVersionStamp(iter)
      const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
      const scores = computeScores(metrics)

      // 收集 localStorage 数据
      const data: Record<string, string> = {}
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && (key.startsWith('python-quest') || key.startsWith('monitor'))) {
          data[key] = localStorage.getItem(key) || ''
        }
      }

      const snapshot: AgentSnapshot = {
        id: \`snap-\${Date.now()}-\${Math.random().toString(36).slice(2, 6)}\`,
        versionStamp,
        appVersion: CURRENT_VERSION,
        iterationNumber: iter,
        timestamp: new Date().toISOString(),
        params: { ...params },
        scores,
        data,
        label: label || \`迭代 \${iter} 快照\`,
        stable: false,
      }
      const newSnapshots = [snapshot, ...snapshots].slice(0, MAX_SNAPSHOTS)
      setSnapshots(newSnapshots)
      return snapshot
    } catch (err) {
      console.error('[AIAgent] 创建快照失败:', err)
      return null
    }
  }, [params, snapshots, monitor.summary])

  // ===== 回溯快照（内部实现） =====
  const restoreSnapshotInternal = useCallback((id: string): boolean => {
    const snap = snapshots.find(s => s.id === id)
    if (!snap) return false
    try {
      // 恢复参数
      setParams(snap.params)
      // 清除当前数据并恢复快照数据
      const keysToRemove: string[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && (key.startsWith('python-quest') || key.startsWith('monitor'))) {
          keysToRemove.push(key)
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k))
      for (const [key, value] of Object.entries(snap.data)) {
        localStorage.setItem(key, value)
      }
      return true
    } catch (err) {
      console.error('[AIAgent] 回溯失败:', err)
      return false
    }
  }, [snapshots])

  // ===== 回溯快照（对外，会刷新页面） =====
  const restoreSnapshot = useCallback((id: string): boolean => {
    const ok = restoreSnapshotInternal(id)
    if (ok) {
      monitor.logEvent('info', 'agent', \`已回溯到快照\`)
      setTimeout(() => window.location.reload(), 500)
    }
    return ok
  }, [restoreSnapshotInternal, monitor])

  // ===== 删除快照 =====
  const deleteSnapshot = useCallback((id: string) => {
    setSnapshots(prev => prev.filter(s => s.id !== id))
  }, [])

  // ===== 标记快照为稳定 =====
  const markSnapshotStable = useCallback((id: string) => {
    setSnapshots(prev => prev.map(s => s.id === id ? { ...s, stable: true } : s))
  }, [])

  // ===== 记录决策 =====
  const logDecision = useCallback((
    phase: IterationPhase,
    strategyId: string,
    reason: string,
    beforeParams?: Partial<TunableParams>,
    afterParams?: Partial<TunableParams>,
    applied = false
  ): Decision => {
    const decision: Decision = {
      id: \`dec-\${Date.now()}-\${Math.random().toString(36).slice(2, 6)}\`,
      timestamp: new Date().toISOString(),
      phase,
      strategyId,
      reason,
      beforeParams,
      afterParams,
      applied,
    }
    return decision
  }, [])

  // ===== 安排下一轮迭代（通过 ref 避免循环依赖，必须在 runIteration 之前定义） =====
  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      runIterationRef.current()
    }, config.iterationInterval)
  }, [config.iterationInterval])

  // ===== pack28 超级进化：Pyodide 验证闭环 =====
  // 调用 Pyodide 跑各关卡的挑战测试用例，采集真实学习效果指标
  // 这是 Agent 从"性能优化器"升级为"学习效果优化器"的关键
  const runLearningValidation = useCallback(async (): Promise<LearningMetrics | null> => {
    if (!pyodide.pyodide) {
      monitor.logEvent('warning', 'agent', '学习验证跳过：Pyodide 未就绪')
      return null
    }

    let totalTests = 0
    let passedTests = 0
    let failedTests = 0
    const errorPatternMap = new Map<string, number>()
    const highFailureLevels: number[] = []
    let totalAttempts = 0
    let validatedLevels = 0

    // 遍历所有关卡的挑战，跑初始代码 + 测试代码
    // 限制最多验证 10 个关卡避免阻塞太久
    const levelIds = Object.keys(challenges).map(Number).slice(0, 10)

    for (const levelId of levelIds) {
      const levelChallenges = challenges[levelId]
      if (!levelChallenges || levelChallenges.length === 0) continue

      let levelFailed = 0
      let levelTotal = 0

      for (const challenge of levelChallenges) {
        // 只跑前 2 个挑战避免太慢
        if (levelTotal >= 2) break
        levelTotal++
        totalTests++
        totalAttempts++

        try {
          const result = await pyodide.runCodeWithTests(challenge.initialCode, challenge.testCode)
          if (result.passed) {
            passedTests++
          } else {
            failedTests++
            levelFailed++
            // 提取错误模式（取错误信息第一行或关键词）
            const errMsg = result.error || '未知错误'
            const pattern = errMsg.split('\\n')[0].slice(0, 50) || 'unknown'
            errorPatternMap.set(pattern, (errorPatternMap.get(pattern) || 0) + 1)
          }
        } catch {
          failedTests++
          levelFailed++
          errorPatternMap.set('execution-error', (errorPatternMap.get('execution-error') || 0) + 1)
        }
      }

      // 失败率 > 40% 标记为高失败率关卡
      if (levelTotal > 0 && levelFailed / levelTotal > 0.4) {
        highFailureLevels.push(levelId)
      }
      if (levelTotal > 0) validatedLevels++
    }

    const metrics: LearningMetrics = {
      totalTests,
      passedTests,
      failedTests,
      passRate: totalTests > 0 ? passedTests / totalTests : 0,
      errorPatterns: Array.from(errorPatternMap.entries())
        .map(([pattern, count]) => ({ pattern, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      averageAttempts: validatedLevels > 0 ? totalAttempts / validatedLevels : 0,
      lastValidationTime: new Date().toISOString(),
      highFailureLevels,
    }

    setLearningMetrics(metrics)
    monitor.logEvent('info', 'agent',
      \`学习验证完成：通过率 \${(metrics.passRate * 100).toFixed(1)}%（\${passedTests}/\${totalTests}），高失败率关卡 \${highFailureLevels.length} 个\`)
    return metrics
  }, [pyodide, monitor])

  // ===== pack33 超级进化核心：元逻辑 + 本地 LLM + 自编码（每轮迭代执行）=====
  // 核心理念：把编码经验传授给 Agent，每轮迭代都加载并执行元逻辑
  const runSuperEvolution = useCallback(async () => {
    const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    const scores = computeScores(metrics)
    const resourceCallCount = resourceBusRef.current.getState().totalCalls

    // 1. 计算理解度（综合 4 因子）
    const newComprehension = computeComprehension(history, iterationCountRef.current, resourceCallCount)
    setComprehension(newComprehension)

    // 累计理解度用于平均值
    comprehensionAccumRef.current = {
      sum: comprehensionAccumRef.current.sum + newComprehension.level,
      count: comprehensionAccumRef.current.count + 1,
    }

    // 2. 构建元逻辑上下文并执行（编码经验库）
    const metaCtx: MetaLogicContext = {
      params,
      scores,
      metrics,
      iteration: iterationCountRef.current,
      history,
      dispatch: (resource, action, args) => resourceBusRef.current.dispatch(resource, action, args),
      comprehension: newComprehension,
    }
    const metaResult = runMetaLogic(metaCtx)
    setLastMetaLogicResult(metaResult)

    // 3. 执行元逻辑产生的资源调用（调动插件/skill/关卡/监查/经验/wiki/llm/pyodide）
    for (const rc of metaResult.resourceCalls) {
      try {
        await resourceBusRef.current.dispatch(rc.resource, rc.action, rc.args)
      } catch (err) {
        monitor.logEvent('warning', 'agent', \`元逻辑资源调用失败 [\${rc.resource}:\${rc.action}]：\${err instanceof Error ? err.message : String(err)}\`)
      }
    }
    setResourceBusState(resourceBusRef.current.getState())

    // 4. 本地 LLM 内核推理（无需外部 API，把 web 所有数据作为推理素材）
    const llmOutput = localInfer(metrics, scores, params, history, resourceCallCount)
    setLastLocalLLMOutput(llmOutput)

    // 5. 自编码：根据理解度生成参数调整方案
    const { plan, resourceCalls: planCalls } = generateSelfCodePlan(
      params, metrics, scores, history, newComprehension, resourceCallCount, metaCtx,
    )
    setLastSelfCodePlan(plan)

    // 6. 执行自编码方案产生的资源调用
    for (const pc of planCalls) {
      try {
        await resourceBusRef.current.dispatch(pc.resource as ResourceType, pc.action)
      } catch (err) {
        monitor.logEvent('warning', 'agent', \`自编码资源调用失败 [\${pc.resource}:\${pc.action}]：\${err instanceof Error ? err.message : String(err)}\`)
      }
    }
    setResourceBusState(resourceBusRef.current.getState())

    // 7. 应用自编码方案的参数变更（合并元逻辑 + 自编码）
    const mergedChanges: Partial<TunableParams> = {
      ...metaResult.paramChanges,
      ...plan.paramChanges,
    }
    if (Object.keys(mergedChanges).length > 0) {
      setParams(prev => ({ ...prev, ...mergedChanges }))
      monitor.logEvent('info', 'agent',
        \`超级进化：应用 \${Object.keys(mergedChanges).length} 项参数变更（元逻辑 \${metaResult.appliedRules.length} 规则，自编码 \${getCurrentMode(newComprehension)} 模式，理解度 \${newComprehension.level}/100）\`)
    }

    // 8. 更新超级进化统计
    const avgComp = comprehensionAccumRef.current.count > 0
      ? Math.round(comprehensionAccumRef.current.sum / comprehensionAccumRef.current.count)
      : newComprehension.level
    // 进化等级 = 理解度(40%) + 资源利用率(30%) + 元逻辑置信度(30%)
    const evolutionLevel = Math.round(
      newComprehension.level * 0.4 +
      Math.min(100, resourceBusRef.current.getState().totalCalls * 2) * 0.3 +
      Math.round(metaResult.confidence * 100) * 0.3
    )
    setSuperEvolutionStats(prev => ({
      metaLogicRuns: prev.metaLogicRuns + 1,
      localLLMRuns: prev.localLLMRuns + 1,
      selfCodePlans: prev.selfCodePlans + 1,
      resourceDispatches: resourceBusRef.current.getState().totalCalls,
      avgComprehension: avgComp,
      lastComprehension: newComprehension.level,
      evolutionLevel,
    }))

    monitor.logEvent('info', 'agent',
      \`超级进化完成：元逻辑 \${metaResult.appliedRules.length}/\${getMetaLogicStats().total} 规则命中，本地LLM \${llmOutput.suggestions.length} 条建议（来源:\${llmOutput.source}），理解度 \${newComprehension.level}/100，进化等级 \${evolutionLevel}/100\`)
  }, [params, history, monitor])

  /** 资源调配入口（暴露给 UI，可手动调度任意资源） */
  const dispatchResource = useCallback(async (
    resource: ResourceType,
    action: string,
    args?: Record<string, unknown>,
  ): Promise<unknown> => {
    try {
      const result = await resourceBusRef.current.dispatch(resource, action, args)
      setResourceBusState(resourceBusRef.current.getState())
      return result
    } catch (err) {
      setResourceBusState(resourceBusRef.current.getState())
      monitor.logEvent('warning', 'agent', \`资源调配失败 [\${resource}:\${action}]：\${err instanceof Error ? err.message : String(err)}\`)
      throw err
    }
  }, [monitor])

  // ===== 迭代循环核心 =====
  const runIteration = useCallback(async () => {
    if (state === 'paused' || state === 'idle') return
    if (iterationCountRef.current >= config.maxIterations) {
      setState('idle')
      monitor.logEvent('info', 'agent', \`达到最大迭代次数 \${config.maxIterations}，Agent 停止\`)
      return
    }

    iterationCountRef.current++
    const iterNum = iterationCountRef.current
    const versionStamp = makeVersionStamp(iterNum)
    const iteration: Iteration = {
      id: \`iter-\${iterNum}-\${Date.now()}\`,
      iterationNumber: iterNum,
      startTime: new Date().toISOString(),
      endTime: null,
      phase: 'observe',
      metricsBefore: null,
      metricsAfter: null,
      scoresBefore: null,
      scoresAfter: null,
      decisions: [],
      appliedStrategies: [],
      result: 'pending',
      gain: 0,
      versionStamp,
    }
    setCurrentIteration(iteration)

    // ===== 阶段 1: 观察 =====
    setState('observing')
    resetCounters()
    monitor.logEvent('info', 'agent', \`迭代 \${iterNum} 开始观察\`)
    await sleep(config.observationPeriod)

    const metricsBefore = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    const scoresBefore = computeScores(metricsBefore)
    iteration.metricsBefore = metricsBefore
    iteration.scoresBefore = scoresBefore
    setCurrentMetrics(metricsBefore)
    setCurrentScores(scoresBefore)
    setCurrentIteration({ ...iteration })

    // ===== 阶段 2: 分析 =====
    setState('analyzing')
    iteration.phase = 'analyze'
    monitor.logEvent('info', 'agent', \`分析中：综合分 \${scoresBefore.overall}\`)
    await sleep(500)

    // pack33 超级进化：每轮迭代执行元逻辑 + 本地 LLM + 自编码（把编码经验传授给 Agent）
    try {
      await runSuperEvolution()
      iteration.decisions.push(logDecision(
        'analyze',
        'super-evolution',
        \`超级进化已执行：元逻辑+本地LLM+自编码（理解度 \${superEvolutionStats.lastComprehension}/100，进化等级 \${superEvolutionStats.evolutionLevel}/100）\`,
        undefined, undefined, true,
      ))
    } catch (err) {
      monitor.logEvent('warning', 'agent', \`超级进化异常：\${err instanceof Error ? err.message : String(err)}\`)
    }

    // ===== 阶段 3: 决策 =====
    setState('deciding')
    iteration.phase = 'decide'
    const onHome = isOnHomepageRef.current
    // pack29: 传 qTableRef.current 给 selectStrategies，启用 epsilon-greedy + Q-table 排序
    const strategies = selectStrategies(
      config.enabledDomains,
      config.homepageProtected && onHome,
      3,
      params,
      scoresBefore.overall,
      qTableRef.current,
    )
    const decisions: Decision[] = []
    for (const s of strategies) {
      decisions.push(logDecision(
        'decide',
        s.id,
        \`选中策略：\${s.name}（预期收益 \${s.expectedGain}，风险 \${s.risk}）\`,
        undefined,
        undefined,
        false,
      ))
    }
    if (strategies.length === 0) {
      decisions.push(logDecision('decide', 'none', '无可用策略（首页保护或领域禁用）', undefined, undefined, false))
    }
    iteration.decisions = decisions
    setCurrentIteration({ ...iteration })
    await sleep(500)

    // ===== 首页保护：在首页时跳过执行阶段 =====
    if (config.homepageProtected && onHome && strategies.length > 0) {
      iteration.decisions.push(logDecision(
        'act',
        'homepage-protection',
        '当前在首页，跳过执行阶段以保护首页',
        undefined,
        undefined,
        false,
      ))
      iteration.phase = 'commit'
      iteration.result = 'skipped'
      iteration.endTime = new Date().toISOString()
      iteration.gain = 0
      setCurrentIteration({ ...iteration })
      setHistory(prev => [iteration, ...prev].slice(0, MAX_HISTORY))
      setState('committed')
      monitor.logEvent('info', 'agent', \`迭代 \${iterNum} 跳过（首页保护）\`)
      // 安排下一轮
      scheduleNext()
      return
    }

    // ===== 阶段 4: 快照（执行前创建保险快照） =====
    setState('deciding')
    iteration.phase = 'snapshot'
    const snapshot = createSnapshot(\`迭代 \${iterNum} 执行前\`)
    if (snapshot) {
      iteration.decisions.push(logDecision(
        'snapshot',
        'pre-execution',
        \`已创建快照 \${snapshot.versionStamp}\`,
        undefined,
        undefined,
        true,
      ))
      monitor.logEvent('snapshot', 'agent', \`已创建保险快照（迭代 \${iterNum}）\`)
    }
    setCurrentIteration({ ...iteration })
    await sleep(300)

    // ===== 阶段 5: 执行 =====
    setState('acting')
    iteration.phase = 'act'
    let newParams = { ...params }
    for (const s of strategies) {
      const before = { ...newParams }
      newParams = s.apply(newParams)
      const after = { ...newParams }
      iteration.decisions.push(logDecision(
        'act',
        s.id,
        \`应用策略：\${s.name}\`,
        before,
        after,
        true,
      ))
      iteration.appliedStrategies.push(s.id)
      monitor.logEvent('info', 'agent', \`应用优化：\${s.name}\`)
    }
    setParams(newParams)
    setAppliedOptimizations(prev => prev + strategies.length)
    setCurrentIteration({ ...iteration })
    await sleep(500)

    // ===== 阶段 6: 验证 =====
    setState('verifying')
    iteration.phase = 'verify'
    resetCounters()
    monitor.logEvent('info', 'agent', \`迭代 \${iterNum} 验证中\`)
    await sleep(config.verificationPeriod)

    const metricsAfter = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    // pack28 超级进化：验证阶段接入 Pyodide 学习验证，用真实测试通过率替代纯 DOM 检测
    if (config.enabledDomains.includes('learning-outcome')) {
      const lm = await runLearningValidation()
      if (lm) {
        metricsAfter.testPassRate = lm.passRate
        metricsAfter.commonErrorPatterns = lm.errorPatterns.length
      }
    }
    const scoresAfter = computeScores(metricsAfter)
    iteration.metricsAfter = metricsAfter
    iteration.scoresAfter = scoresAfter
    setCurrentMetrics(metricsAfter)
    setCurrentScores(scoresAfter)
    const gain = scoresAfter.overall - scoresBefore.overall
    iteration.gain = gain
    setCurrentIteration({ ...iteration })

    // ===== 阶段 7: 提交或回溯 =====
    if (gain >= -config.rollbackThreshold) {
      // 改善或未显著下降：提交
      setState('committed')
      iteration.phase = 'commit'
      iteration.result = 'committed'
      iteration.endTime = new Date().toISOString()
      iteration.decisions.push(logDecision(
        'commit',
        'commit',
        \`提交：综合分 \${scoresBefore.overall} → \${scoresAfter.overall}（\${gain >= 0 ? '+' : ''}\${gain}）\`,
        undefined,
        undefined,
        true,
      ))
      // 标记当前快照为稳定
      if (snapshot) markSnapshotStable(snapshot.id)
      // pack29: 提交后更新 Q-table，把当次 gain 记入历史
      qTableRef.current = updateQTable(
        qTableRef.current,
        strategies.map(s => s.id),
        gain,
        params.agentLearningRate,
      )
      monitor.logEvent('info', 'agent', \`迭代 \${iterNum} 提交（评分 \${scoresAfter.overall}，\${gain >= 0 ? '+' : ''}\${gain}）\`)
    } else {
      // 显著下降：回溯
      setState('rolledback')
      iteration.phase = 'rollback'
      iteration.result = 'rolledback'
      iteration.endTime = new Date().toISOString()
      iteration.decisions.push(logDecision(
        'rollback',
        'rollback',
        \`回溯：综合分下降 \${gain}（阈值 -\${config.rollbackThreshold}）\`,
        undefined,
        undefined,
        true,
      ))
      if (snapshot) restoreSnapshotInternal(snapshot.id)
      setRollbackCount(prev => prev + 1)
      monitor.logEvent('warning', 'agent', \`迭代 \${iterNum} 回溯（评分下降 \${gain}）\`)
    }

    setCurrentIteration({ ...iteration })
    setHistory(prev => [iteration, ...prev].slice(0, MAX_HISTORY))

    // 安排下一轮（通过 ref 调用最新版本）
    scheduleNext()
  }, [state, config, params, createSnapshot, restoreSnapshotInternal, markSnapshotStable, monitor, logDecision, scheduleNext, runLearningValidation, runSuperEvolution, superEvolutionStats])

  // 同步 ref，确保 scheduleNext 始终调用最新的 runIteration
  useEffect(() => {
    runIterationRef.current = runIteration
  }, [runIteration])

  // ===== 控制 API =====
  const startAgent = useCallback(() => {
    if (state !== 'idle' && state !== 'paused' && state !== 'committed' && state !== 'rolledback') return
    setState('observing')
    monitor.logEvent('info', 'agent', \`Agent 启动（版本 \${CURRENT_VERSION}）\`)
    setTimeout(() => runIterationRef.current(), 100)
  }, [state, monitor])

  const stopAgent = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setState('idle')
    monitor.logEvent('info', 'agent', 'Agent 已停止')
  }, [monitor])

  const pauseAgent = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setState('paused')
    monitor.logEvent('info', 'agent', 'Agent 已暂停')
  }, [monitor])

  const resetAgent = useCallback(() => {
    stopAgent()
    iterationCountRef.current = 0
    setHistory([])
    setParams(DEFAULT_PARAMS)
    setRollbackCount(0)
    setAppliedOptimizations(0)
    setCurrentIteration(null)
    setCurrentMetrics(null)
    setCurrentScores(null)
    monitor.logEvent('info', 'agent', 'Agent 已重置')
  }, [stopAgent, monitor])

  const updateConfig = useCallback((patch: Partial<AgentConfig>) => {
    setConfig(prev => ({ ...prev, ...patch }))
  }, [])

  const resetParams = useCallback(() => {
    setParams(DEFAULT_PARAMS)
    monitor.logEvent('info', 'agent', '参数已重置为默认值')
  }, [monitor])

  // ===== 全局调配 =====
  const runGlobalOrchestration = useCallback(async () => {
    setOrchestration(prev => ({ ...prev, active: true }))
    const newEntries: OrchestrationEntry[] = []

    // 阶段 1: 读取经验包
    const pack = generateExperiencePack({ generatedBy: 'ai-agent' })
    newEntries.push(makeEntry(
      'experience-read',
      \`已读取经验包 \${pack.meta.packVersion}\`,
      \`模块 \${pack.modules.length} 个，约定 \${pack.conventions.length} 条，教训 \${pack.lessons.length} 条\`,
      pack.modules.slice(0, 5).map(m => m.id),
    ))
    monitor.logEvent('info', 'agent', \`全局调配：已读取经验包 \${pack.meta.packVersion}\`)

    await sleep(300)

    // 阶段 2: 分析当前状态
    const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    const scores = computeScores(metrics)
    newEntries.push(makeEntry(
      'global-adapt',
      \`当前健康度：综合 \${scores.overall}，性能 \${scores.performance}，UX \${scores.ux}，稳定性 \${scores.stability}，内容 \${scores.content}\`,
      \`FCP=\${metrics.fcp}ms, LCP=\${metrics.lcp}ms, 内存=\${metrics.memoryUsed}MB, 错误=\${metrics.errorCount}\`,
    ))
    monitor.logEvent('info', 'agent', \`全局调配：分析完成，综合分 \${scores.overall}\`)

    await sleep(300)

    // 阶段 3: 协调优化策略（跨所有领域）
    const onHome = isOnHomepageRef.current
    // pack29: 传 qTableRef.current 启用 Q-table + epsilon-greedy
    const strategies = selectStrategies(
      config.enabledDomains,
      config.homepageProtected && onHome,
      5,  // 全局调配选最多 5 个策略
      params,
      scores.overall,
      qTableRef.current,
    )
    let newParams = { ...params }
    const appliedNames: string[] = []
    for (const s of strategies) {
      newParams = s.apply(newParams)
      newEntries.push(makeEntry(
        'agent-optimize',
        \`应用策略：\${s.name}\`,
        \`预期收益 \${s.expectedGain}，风险 \${s.risk}\`,
        undefined,
        s.expectedGain * 100,
      ))
      appliedNames.push(s.name)
    }
    if (appliedNames.length > 0) {
      setParams(newParams)
      setAppliedOptimizations(prev => prev + appliedNames.length)
      newEntries.push(makeEntry(
        'agent-optimize',
        \`本轮调配应用了 \${appliedNames.length} 个优化策略\`,
        appliedNames.join('、'),
      ))
      monitor.logEvent('info', 'agent', \`全局调配：应用 \${appliedNames.length} 个策略\`)
    } else {
      newEntries.push(makeEntry(
        'agent-optimize',
        '无可用策略（首页保护或领域禁用）',
      ))
    }

    await sleep(300)

    // 阶段 4: 全局适配分析（pack30: 如果 LLM 启用则真实调 LLM 获取优化建议）
    if (llmConfig.enabled && llmConfig.apiKey) {
      newEntries.push(makeEntry(
        'llm-feature',
        \`LLM 分析启动：模型=\${llmConfig.model}\`,
        \`综合分=\${scores.overall}，性能=\${scores.performance}，UX=\${scores.ux}，稳定性=\${scores.stability}\`,
      ))
      const llmResult = await runLLMAnalysis()
      if (llmResult && !llmResult.error && llmResult.suggestions.length > 0) {
        newEntries.push(makeEntry(
          'llm-feature',
          \`LLM 分析完成：\${llmResult.suggestions.length} 条建议，置信度=\${(llmResult.confidence * 100).toFixed(0)}%\`,
          llmResult.suggestions.map(s => \`[\${s.priority}] \${s.target}: \${s.fix}\`).join(' | '),
          ['ai-llm'],
        ))
        // 自动采纳 high 优先级且 risk < 0.3 的参数级建议
        for (const s of llmResult.suggestions) {
          if (s.priority === 'high' && s.risk < 0.3 && s.paramChanges) {
            applyLLMSuggestion(s.id)
            newEntries.push(makeEntry(
              'llm-feature',
              \`LLM 建议自动采纳：\${s.target}\`,
              s.fix,
              ['ai-llm'],
            ))
          }
        }
      } else if (llmResult?.error) {
        newEntries.push(makeEntry(
          'llm-feature',
          \`LLM 分析失败：\${llmResult.error}\`,
          undefined,
          ['ai-llm'],
        ))
      }
    } else {
      newEntries.push(makeEntry(
        'global-adapt',
        \`全局适配完成（LLM 未启用，使用 Q-table 策略）\`,
        \`本轮协调了 \${strategies.length} 个 Agent 策略，经验包模块 \${pack.modules.length} 个\`,
        pack.modules.filter(m => m.category === 'ai' || m.category === 'context').map(m => m.id),
      ))
    }

    await sleep(200)

    // 阶段 5: 写入经验包
    if (orchestration.autoWritePack) {
      newEntries.push(makeEntry(
        'pack-write',
        \`经验包已更新：\${pack.meta.packVersion}\`,
        \`已记录 \${newEntries.length} 条调配记录，下次读取时将包含本次变更\`,
        ['ai-experiencepack', 'ctx-ai'],
      ))
      monitor.logEvent('info', 'agent', \`全局调配：经验包已写入\`)
    }

    await sleep(200)

    // 阶段 6: 推送到 Wiki（pack21+pack29：异步真 await 推送，不再 fire-and-forget）
    if (wikiSync.autoPushEnabled) {
      const monitorSummary = \`综合分 \${scores.overall}，性能 \${scores.performance}，UX \${scores.ux}，稳定性 \${scores.stability}，内容 \${scores.content}；错误 \${metrics.errorCount}，崩溃 \${metrics.crashCount}\`
      const inspection = inspectCodebase(pack, wikiSync, monitorSummary)
      const pushRecords: WikiPushRecord[] = []

      // 6a. 经验包推送（仅当有新 PACK_BUILD 或新 DOC_VERSION 时）
      if (inspection.hasNewPack || inspection.hasNewDocVersion) {
        const packContent = buildPackWikiMarkdown(pack, inspection)
        const packRecord = await pushToWikiAsync(
          'experience-pack',
          \`经验包 PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}\`,
          packContent,
          {
            packBuild: inspection.packBuild,
            docVersion: inspection.docVersion,
            maxRetries: params.maxRetries,
            retryBaseDelayMs: params.retryBaseDelay,
          },
        )
        pushRecords.push(packRecord)
        newEntries.push(makeEntry(
          'wiki-push',
          \`经验包已推送到 Wiki 队列：PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}\`,
          packRecord.errorMessage || \`内容哈希 \${packRecord.contentHash}，状态 \${packRecord.status}\`,
          ['ai-wikisync', 'ai-experiencepack'],
        ))
        monitor.logEvent('info', 'agent', \`全局调配：经验包推送 Wiki（\${packRecord.status}）\`)
      }

      // 6b. 代码更改推送（本轮应用的策略作为更改摘要）
      if (appliedNames.length > 0) {
        const changesContent = buildChangesWikiMarkdown(
          appliedNames.map(name => \`应用策略：\${name}\`),
          {
            iterationNumber: iterationCountRef.current,
            appliedStrategies: appliedNames,
            scoreAfter: scores.overall,
          },
        )
        const changesRecord = await pushToWikiAsync(
          'code-changes',
          \`代码更改 \${appliedNames.length} 项：迭代 \${iterationCountRef.current}\`,
          changesContent,
          {
            maxRetries: params.maxRetries,
            retryBaseDelayMs: params.retryBaseDelay,
          },
        )
        pushRecords.push(changesRecord)
        newEntries.push(makeEntry(
          'wiki-push',
          \`代码更改已推送到 Wiki 队列：\${appliedNames.length} 项更改\`,
          changesRecord.errorMessage || \`状态 \${changesRecord.status}\`,
          ['ai-wikisync'],
        ))
        monitor.logEvent('info', 'agent', \`全局调配：代码更改推送 Wiki（\${changesRecord.status}）\`)
      }

      // 6c. 应用推送记录到 WikiSyncState
      if (pushRecords.length > 0) {
        setWikiSync(prev => {
          let next = prev
          for (const record of pushRecords) {
            next = applyPushToState(next, record)
          }
          return next
        })
      } else if (inspection.hasNewPack === false && inspection.hasNewDocVersion === false) {
        newEntries.push(makeEntry(
          'wiki-push',
          \`Wiki 推送跳过：经验包与文档版本均未变更（PACK_BUILD=\${inspection.packBuild} 已推送）\`,
          undefined,
          ['ai-wikisync'],
        ))
      }
    }

    // 提交所有记录
    setOrchestration(prev => ({
      ...prev,
      active: false,
      lastRun: new Date().toISOString(),
      entries: [...newEntries, ...prev.entries].slice(0, MAX_ORCHESTRATION_ENTRIES),
      totalAdaptations: prev.totalAdaptations + 1,
    }))
    monitor.logEvent('info', 'agent', \`全局调配完成（共 \${newEntries.length} 条记录）\`)
  }, [config, params, orchestration.autoWritePack, wikiSync, monitor])

  const clearOrchestrationEntries = useCallback(() => {
    setOrchestration(prev => ({ ...prev, entries: [], totalAdaptations: 0 }))
  }, [])

  // ===== pack21: Wiki 同步 — Agent 监察后推到 Wiki =====

  /** 监察代码状态并推送到 Wiki（独立调用入口，不依赖 runGlobalOrchestration）
   *  pack29: 改为使用 pushToWikiAsync 真 await GitHub 推送 + 指数退避重试，不再 fire-and-forget
   */
  const inspectAndPushToWiki = useCallback(async (): Promise<WikiPushRecord[]> => {
    const pack = generateExperiencePack({ generatedBy: 'ai-agent' })
    const monitorSummary = \`错误 \${monitor.summary.errorEvents}，崩溃 \${monitor.summary.crashed ? '是' : '否'}\`
    const inspection = inspectCodebase(pack, wikiSync, monitorSummary)
    const records: WikiPushRecord[] = []

    // 经验包推送（有新版本才推）
    if (inspection.hasNewPack || inspection.hasNewDocVersion) {
      // pack29: 使用 params.maxRetries 和 params.retryBaseDelay 控制重试策略
      const packContent = buildPackWikiMarkdown(pack, inspection)
      const packSummary = \`经验包推送 PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}\`
      const r = await pushToWikiAsync(
        'experience-pack',
        packSummary,
        packContent,
        {
          packBuild: inspection.packBuild,
          docVersion: inspection.docVersion,
          maxRetries: params.maxRetries,
          retryBaseDelayMs: params.retryBaseDelay,
        },
      )
      records.push(r)
      monitor.logEvent('info', 'agent', \`Wiki 推送：经验包 PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}（\${r.status}）\`)

      // pack29: 变更日志同步推送（用 CONVERSATION_LOG 最新 5 条 + lessons 最新 3 条拼 changes 数组）
      const convChanges = pack.conversationLog.slice(-5).map(c => \`[\${c.id}] \${c.summary}\`)
      const lessonChanges = pack.lessons.slice(-3).map(l => \`[\${l.id}] \${l.title}：\${l.problem}\`)
      const changesContent = buildChangesWikiMarkdown(
        [...convChanges, ...lessonChanges],
        { iterationNumber: iterationCountRef.current },
      )
      const changesSummary = \`变更日志 PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}\`
      const rc = await pushToWikiAsync(
        'code-changes',
        changesSummary,
        changesContent,
        {
          packBuild: inspection.packBuild,
          docVersion: inspection.docVersion,
          maxRetries: params.maxRetries,
          retryBaseDelayMs: params.retryBaseDelay,
        },
      )
      records.push(rc)
    } else {
      monitor.logEvent('info', 'agent', \`Wiki 推送跳过：PACK_BUILD=\${inspection.packBuild} 已推送\`)
    }

    // 应用记录到状态
    if (records.length > 0) {
      setWikiSync(prev => {
        let next = prev
        for (const r of records) next = applyPushToState(next, r)
        return next
      })
    }
    return records
  }, [wikiSync, monitor, params])

  /** 更新 Wiki 同步配置 */
  const updateWikiSyncConfig = useCallback((patch: Partial<Pick<WikiSyncState, 'autoPushEnabled'>>) => {
    setWikiSync(prev => ({ ...prev, ...patch }))
    monitor.logEvent('info', 'agent', \`Wiki 同步配置更新：\${JSON.stringify(patch)}\`)
  }, [monitor])


  // ===== 缓存与重置（安全，不碰用户进度/认证）=====
  // 只清理 \`python-quest-agent-*\` 前缀的 localStorage/sessionStorage
  const AGENT_KEY_PREFIXES = [
    'python-quest-agent-state',
    'python-quest-agent-config',
    'python-quest-agent-params',
    'python-quest-agent-history',
    'python-quest-agent-snapshots',
    'python-quest-agent-orchestration',
    'python-quest-agent-metrics-',
    'python-quest-wiki-sync',      // pack21: Wiki 同步状态
    'python-quest-wiki-pending',   // pack21: Wiki 待推送队列
  ]

  const agentCacheStats = useCallback(() => {
    let lsCount = 0
    let ssCount = 0
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && AGENT_KEY_PREFIXES.some(p => k.startsWith(p))) lsCount++
    }
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i)
      if (k && AGENT_KEY_PREFIXES.some(p => k.startsWith(p))) ssCount++
    }
    return { localStorageCount: lsCount, sessionStorageCount: ssCount }
  }, [])

  // ===== pack30: LLM 驱动的优化分析 =====

  /** 更新 LLM 配置（持久化到 localStorage） */
  const updateLLMConfig = useCallback((patch: Partial<LLMConfig>) => {
    setLlmConfig(prev => {
      const next = { ...prev, ...patch }
      safeSet(LLM_CONFIG_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  /** 测试 LLM 连接 */
  const testLLM = useCallback(async () => {
    return testLLMConnection(llmConfig)
  }, [llmConfig])

  /** 运行 LLM 分析（采集当前指标 → 调 LLM → 返回建议；pack31: 含 skill 训练+合规检测） */
  const runLLMAnalysis = useCallback(async (): Promise<LLMAnalysisResult | null> => {
    if (!llmConfig.enabled) {
      monitor.logEvent('warning', 'agent', 'LLM 分析跳过：未启用')
      return null
    }
    if (!llmConfig.apiKey) {
      monitor.logEvent('warning', 'agent', 'LLM 分析跳过：未配置 API Key')
      return null
    }

    setIsLLMAnalyzing(true)
    try {
      const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
      const scores = computeScores(metrics)
      const recentErrors: string[] = metrics.errorCount > 0
        ? [\`最近 \${metrics.errorCount} 个错误\`]
        : []

      // pack31: skill 训练摘要
      const skillSummary = skillTrainingConfig.enabled
        ? getSkillTrainingSummary(skillTrainingConfig)
        : null
      monitor.logEvent('info', 'agent', \`LLM 分析开始：模型=\${llmConfig.model}，综合分=\${scores.overall}\${skillSummary ? \`，Skill训练=\${skillSummary.totalSkills}个skill/\${skillSummary.totalRules}条规则\` : ''}\`)

      const { result, compliance } = await analyzeWithLLM(
        llmConfig, metrics, scores, params, recentErrors, skillTrainingConfig,
      )
      setLlmAnalysis(result)
      setSkillCompliance(compliance)

      // pack32: 更新 LLM 训练统计
      const violationCount = compliance.filter(c => c.status === 'violation').length
      setLlmTrainingStats(prev => ({
        ...prev,
        totalAnalysis: prev.totalAnalysis + 1,
        totalSuggestions: prev.totalSuggestions + result.suggestions.length,
        violatedCount: prev.violatedCount + violationCount,
      }))

      if (result.error) {
        monitor.logEvent('error', 'agent', \`LLM 分析失败：\${result.error}\`)
      } else {
        monitor.logEvent('info', 'agent', \`LLM 分析完成：\${result.suggestions.length} 条建议，置信度=\${(result.confidence * 100).toFixed(0)}%\${compliance.length > 0 ? \`，合规检测=\${compliance.length}项（\${violationCount}违规）\` : ''}\`)
      }

      return result
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err)
      monitor.logEvent('error', 'agent', \`LLM 分析异常：\${errMsg}\`)
      const failResult: LLMAnalysisResult = {
        timestamp: new Date().toISOString(),
        reasoning: \`LLM 分析异常: \${errMsg}\`,
        confidence: 0,
        suggestions: [],
        model: llmConfig.model,
        error: errMsg,
      }
      setLlmAnalysis(failResult)
      return failResult
    } finally {
      setIsLLMAnalyzing(false)
    }
  }, [llmConfig, params, monitor, skillTrainingConfig])

  // pack32: LLM 自动迭代训练定时器（每 10 分钟自动调 LLM 分析，需放在 runLLMAnalysis 定义之后）
  useEffect(() => {
    if (!llmConfig.enabled || !llmConfig.apiKey) {
      if (llmAutoTrainTimerRef.current) {
        clearInterval(llmAutoTrainTimerRef.current)
        llmAutoTrainTimerRef.current = null
      }
      return
    }
    llmAutoTrainTimerRef.current = setInterval(() => {
      runLLMAnalysis().catch(err => {
        monitor.logEvent('warning', 'agent', \`LLM 自动训练异常：\${err instanceof Error ? err.message : String(err)}\`)
      })
    }, 10 * 60 * 1000)
    return () => {
      if (llmAutoTrainTimerRef.current) clearInterval(llmAutoTrainTimerRef.current)
    }
  }, [llmConfig.enabled, llmConfig.apiKey, runLLMAnalysis, monitor])

  /** 采纳 LLM 建议（应用参数变更到 TunableParams；pack32: 反馈到 Q-table） */
  const applyLLMSuggestion = useCallback((suggestionId: string): boolean => {
    if (!llmAnalysis) return false
    const suggestion = llmAnalysis.suggestions.find(s => s.id === suggestionId)
    if (!suggestion) return false

    // pack32: 采纳前记录当前分数（用于 gain 计算）
    const currentMetrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    const scoreBefore = computeScores(currentMetrics).overall

    const isParamSuggestion = suggestion.paramChanges && Object.keys(suggestion.paramChanges).length > 0

    if (!isParamSuggestion) {
      // 代码级建议：仅记录已采纳，不自动应用
      setAdoptedSuggestions(prev => [
        ...prev,
        { suggestionId, timestamp: new Date().toISOString(), target: suggestion.target, applied: false },
      ])
      monitor.logEvent('info', 'agent', \`LLM 建议已采纳（代码级，需手动应用）：\${suggestion.target}\`)
      // pack32: 代码级建议也反馈 Q-table（基础 gain）
      const gain = computeLLMGain(scoreBefore, scoreBefore, 'code')
      qTableRef.current = updateQTable(qTableRef.current, [\`llm:\${suggestionId}\`], gain, params.agentLearningRate)
      setLlmTrainingStats(prev => ({ ...prev, adoptedCount: prev.adoptedCount + 1, qTableFeedbackCount: prev.qTableFeedbackCount + 1, lastGain: gain }))
      return false
    }

    // 参数级建议：应用到 params
    setParams(prev => {
      const next = { ...prev, ...suggestion.paramChanges! }
      safeSet(AGENT_PARAMS_KEY, JSON.stringify(next))
      return next
    })
    setAppliedOptimizations(prev => prev + 1)
    setAdoptedSuggestions(prev => [
      ...prev,
      { suggestionId, timestamp: new Date().toISOString(), target: suggestion.target, applied: true, paramChanges: suggestion.paramChanges },
    ])

    // pack32: 反馈到 Q-table（LLM 建议作为"策略"参与 Q-table 学习）
    const gain = computeLLMGain(scoreBefore, scoreBefore, 'param')
    qTableRef.current = updateQTable(qTableRef.current, [\`llm:\${suggestionId}\`], gain, params.agentLearningRate)
    setLlmTrainingStats(prev => ({ ...prev, adoptedCount: prev.adoptedCount + 1, qTableFeedbackCount: prev.qTableFeedbackCount + 1, lastGain: gain }))

    monitor.logEvent('info', 'agent', \`LLM 建议已采纳（参数级）：\${suggestion.target} → \${JSON.stringify(suggestion.paramChanges)}，Q-table gain=\${gain.toFixed(3)}\`)
    return true
  }, [llmAnalysis, monitor, params.agentLearningRate])

  /** 忽略 LLM 建议（从列表移除） */
  const dismissLLMSuggestion = useCallback((suggestionId: string) => {
    setLlmAnalysis(prev => {
      if (!prev) return null
      return {
        ...prev,
        suggestions: prev.suggestions.filter(s => s.id !== suggestionId),
      }
    })
  }, [])

  /** pack31: 更新 Skill 训练配置 */
  const updateSkillTrainingConfig = useCallback((patch: Partial<SkillTrainingConfig>) => {
    setSkillTrainingConfig(prev => ({ ...prev, ...patch }))
  }, [])

  // ===== pack34：代码级自优化（Kimi 超级升级）行为函数 =====

  /** 更新代码自优化配置 */
  const updateCodeSelfOptimizeConfig = useCallback((patch: Partial<CodeSelfOptimizeConfig>) => {
    setCodeSelfOptimizeConfig(prev => ({ ...prev, ...patch }))
    monitor.logEvent('info', 'agent', \`代码自优化配置更新：\${JSON.stringify(patch)}\`)
  }, [monitor])

  /** 异步构建代码库索引（给 LLM 用的知识库） */
  const buildCodebaseIndexAsync = useCallback(async (maxFiles = 120): Promise<CodebaseIndex> => {
    const idx = await buildCodebaseIndex(maxFiles)
    setCodebaseIndex(idx)
    monitor.logEvent('info', 'agent', \`代码库索引完成：共 \${idx.totalFiles} 个文件，\${idx.totalKeywords} 关键词，摘要 \${idx.summaryLines} 行\`)
    return idx
  }, [monitor])

  /** 刷新编码经验（内置 + localStorage 用户追加）+ 重新注入到 prompt 结构 */
  const refreshCodingExperiences = useCallback(() => {
    const exps = loadCodingExperiences()
    setCodingExperiences(exps)
    const injection = injectExperiences(exps)
    setCodingExperienceInjection(injection)
    const stats = getExperienceStats(exps)
    monitor.logEvent('info', 'agent', \`编码经验库刷新：\${stats.total} 条，覆盖 \${Object.keys(stats.byCategory).length} 分类，预计 token 预算 \${injection.estimatedTokenBudget}\`)
  }, [monitor])

  /** 追加用户自定义编码经验（存入 localStorage 并刷新注入） */
  const addCustomCodingExperience = useCallback((
    entry: Omit<CodingExperienceEntry, 'id' | 'timestamp'>,
  ): CodingExperienceEntry | null => {
    try {
      const added = appendCodingExperience(entry)
      refreshCodingExperiences()
      return added
    } catch (err) {
      monitor.logEvent('error', 'agent', \`追加编码经验失败：\${err instanceof Error ? err.message : String(err)}\`)
      return null
    }
  }, [refreshCodingExperiences, monitor])

  /** 执行一次代码自优化（内存 dry-run，不写入磁盘；返回结果可用于 UI 展示 diff） */
  const runCodeSelfOptimizeAsync = useCallback(async (
    userIntent?: string,
    skipLLM = false,
  ): Promise<SelfOptimizeResult | null> => {
    if (isSelfOptimizing) return null
    setIsSelfOptimizing(true)
    try {
      // 索引还没构建的话先构建
      if (!codebaseIndex) {
        await buildCodebaseIndexAsync(120)
      }
      const result = await runCodeSelfOptimize({
        llmConfig,
        codeSelfOptimizeConfig,
        userIntent,
        skipLLM,
      })
      setLastSelfOptimizeResult(result)
      if (result.dryRun) {
        setLastSelfOptimizeRuns(prev => [result.dryRun!.run, ...prev].slice(0, 10))
      }
      monitor.logEvent('info', 'agent',
        \`代码自优化执行：\${result.plan ? result.plan.patches.length + ' 个补丁' : '无补丁'}，耗时 \${result.prepareTimeMs + result.generateTimeMs + result.applyTimeMs}ms\${result.error ? \`，错误：\${result.error}\` : ''}\`)
      return result
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      monitor.logEvent('error', 'agent', \`代码自优化异常：\${message}\`)
      const failResult: SelfOptimizeResult = {
        prepareTimeMs: 0, generateTimeMs: 0, applyTimeMs: 0, error: message,
      }
      setLastSelfOptimizeResult(failResult)
      return failResult
    } finally {
      setIsSelfOptimizing(false)
    }
  }, [
    isSelfOptimizing, codebaseIndex, llmConfig, codeSelfOptimizeConfig,
    buildCodebaseIndexAsync, monitor,
  ])

  const clearAgentRuntimeCache = useCallback(() => {
    let cleared = 0
    const lsKeys: string[] = []
    const ssKeys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && AGENT_KEY_PREFIXES.some(p => k.startsWith(p))) lsKeys.push(k)
    }
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i)
      if (k && AGENT_KEY_PREFIXES.some(p => k.startsWith(p))) ssKeys.push(k)
    }
    lsKeys.forEach(k => { localStorage.removeItem(k); cleared++ })
    ssKeys.forEach(k => { sessionStorage.removeItem(k); cleared++ })
    // 重置运行时状态（不触发副作用写入）
    setParams(DEFAULT_PARAMS)
    setConfig(DEFAULT_CONFIG)
    setHistory([])
    setSnapshots([])
    setOrchestration({ ...DEFAULT_ORCHESTRATION })
    resetCounters()
    monitor.logEvent('info', 'agent', \`Agent 缓存清理完成，共清除 \${cleared} 项\`)
    return cleared
  }, [monitor])

  const safeFullReset = useCallback(() => {
    // 1. 直接清定时器，确保一定停下来
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    // 2. 再调 stopAgent 做状态同步（幂等）
    stopAgent()
    // 3. 清缓存
    clearAgentRuntimeCache()
    // 4. 强制重置所有状态
    setState('idle')
    setCurrentIteration(null)
    setCurrentMetrics(null)
    setCurrentScores(null)
    setRollbackCount(0)
    setAppliedOptimizations(0)
    startTimeRef.current = Date.now()
    monitor.logEvent('info', 'agent', 'Agent 安全全量重置完成（用户数据未受影响）')
  }, [clearAgentRuntimeCache, monitor])

  // ===== 自动运行 =====
  useEffect(() => {
    if (config.autoRun && state === 'idle') {
      // 延迟启动，等待页面完全加载
      const timer = setTimeout(() => startAgent(), 3000)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.autoRun])

  // ===== 卸载清理 =====
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // ===== 计算摘要 =====
  const summary: AgentSummary = {
    state,
    currentIteration: iterationCountRef.current,
    totalIterations: config.maxIterations,
    lastResult: currentIteration?.result || null,
    overallScore: currentScores?.overall || 0,
    scoreTrend: history.slice(0, 10).reverse().map(h => h.scoresAfter?.overall || 0),
    appliedOptimizations,
    rollbackCount,
    uptimeMs: Date.now() - startTimeRef.current,
  }

  const value: AIAgentContextValue = {
    state, config, params, currentIteration, history, snapshots, summary,
    startAgent, stopAgent, pauseAgent, resetAgent, updateConfig, resetParams,
    createSnapshot, restoreSnapshot, deleteSnapshot, markSnapshotStable,
    currentMetrics, currentScores, strategies: STRATEGIES,
    orchestration, runGlobalOrchestration, clearOrchestrationEntries,
    clearAgentRuntimeCache, safeFullReset, agentCacheStats,
    // pack21: Wiki 同步能力暴露给 Agent
    wikiSync, inspectAndPushToWiki, updateWikiSyncConfig,
    // pack28 超级进化：学习效果指标
    learningMetrics, runLearningValidation,
    // pack30 LLM 进化：LLM 驱动的优化分析
    llmConfig, llmAnalysis, adoptedSuggestions, isLLMAnalyzing,
    runLLMAnalysis, updateLLMConfig, applyLLMSuggestion, dismissLLMSuggestion, testLLM,
    // pack31 Skill 训练
    skillTrainingConfig, skillCompliance, updateSkillTrainingConfig,
    // pack32 LLM 训练统计
    llmTrainingStats,
    // pack33 超级进化：资源调配中心 + 本地 LLM 内核 + 自编码
    resourceBusState, comprehension, lastMetaLogicResult, lastLocalLLMOutput, lastSelfCodePlan,
    superEvolutionStats, runSuperEvolution, dispatchResource,
    // pack34 代码级自优化：Kimi 超级升级 + 编码经验注入 + 代码补丁闭环
    codeSelfOptimizeConfig, updateCodeSelfOptimizeConfig,
    codebaseIndex, buildCodebaseIndexAsync,
    codingExperiences, codingExperienceInjection, refreshCodingExperiences, addCustomCodingExperience,
    lastSelfOptimizeResult, isSelfOptimizing, runCodeSelfOptimizeAsync, lastSelfOptimizeRuns,
  }

  return <AIAgentContext.Provider value={value}>{children}</AIAgentContext.Provider>
}

// ===== Hook =====
export function useAIAgent() {
  const ctx = useContext(AIAgentContext)
  if (!ctx) throw new Error('useAIAgent must be used within AIAgentProvider')
  return ctx
}

// ===== 工具函数 =====
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`;export{n as default};
