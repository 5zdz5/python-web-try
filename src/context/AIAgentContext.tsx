/**
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
  LLMConfig, LLMAnalysisResult, AdoptedSuggestion,
} from '../types/ai'
import { DEFAULT_PARAMS, STRATEGIES, computeScores, selectStrategies, loadQTable, updateQTable, QTable } from '../ai/Optimizer'
import { collectMetrics, resetCounters, initInteractionTracking, recordCrash } from '../ai/metrics'
import { generateExperiencePack } from '../ai/experiencePack'
import {
  DEFAULT_WIKI_SYNC, inspectCodebase, saveWikiSyncState, applyPushToState,
  processPendingQueue, pushToWikiAsync, buildPackWikiMarkdown, buildChangesWikiMarkdown
} from '../ai/wikiSync'
import { DEFAULT_LLM_CONFIG, LLM_CONFIG_KEY, testLLMConnection } from '../ai/llmClient'
import { analyzeWithLLM } from '../ai/llmAdvisor'
import { CURRENT_VERSION } from '../config/versionManager'
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
  return `agent@${CURRENT_VERSION}-iter${iteration}-${Date.now()}`
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
    id: `orc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
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
            monitor.logEvent('info', 'agent', `Wiki 队列消费者：${results.length} 条（成功 ${success}，失败 ${failed}）`)
            setWikiSync(prev => {
              let next = prev
              for (const r of results) next = applyPushToState(next, r)
              return next
            })
          }
        })
        .catch(err => {
          monitor.logEvent('warning', 'agent', `Wiki 队列消费者异常：${err instanceof Error ? err.message : String(err)}`)
        })
    }, 5 * 60 * 1000)
    return () => {
      if (cleanupTrackingRef.current) cleanupTrackingRef.current()
      if (wikiConsumerTimerRef.current) clearInterval(wikiConsumerTimerRef.current)
    }
  }, [wikiSync.autoPushEnabled, monitor, params.maxRetries, params.retryBaseDelay])

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
        id: `snap-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        versionStamp,
        appVersion: CURRENT_VERSION,
        iterationNumber: iter,
        timestamp: new Date().toISOString(),
        params: { ...params },
        scores,
        data,
        label: label || `迭代 ${iter} 快照`,
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
      monitor.logEvent('info', 'agent', `已回溯到快照`)
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
      id: `dec-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
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
            const pattern = errMsg.split('\n')[0].slice(0, 50) || 'unknown'
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
      `学习验证完成：通过率 ${(metrics.passRate * 100).toFixed(1)}%（${passedTests}/${totalTests}），高失败率关卡 ${highFailureLevels.length} 个`)
    return metrics
  }, [pyodide, monitor])

  // ===== 迭代循环核心 =====
  const runIteration = useCallback(async () => {
    if (state === 'paused' || state === 'idle') return
    if (iterationCountRef.current >= config.maxIterations) {
      setState('idle')
      monitor.logEvent('info', 'agent', `达到最大迭代次数 ${config.maxIterations}，Agent 停止`)
      return
    }

    iterationCountRef.current++
    const iterNum = iterationCountRef.current
    const versionStamp = makeVersionStamp(iterNum)
    const iteration: Iteration = {
      id: `iter-${iterNum}-${Date.now()}`,
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
    monitor.logEvent('info', 'agent', `迭代 ${iterNum} 开始观察`)
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
    monitor.logEvent('info', 'agent', `分析中：综合分 ${scoresBefore.overall}`)
    await sleep(500)

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
        `选中策略：${s.name}（预期收益 ${s.expectedGain}，风险 ${s.risk}）`,
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
      monitor.logEvent('info', 'agent', `迭代 ${iterNum} 跳过（首页保护）`)
      // 安排下一轮
      scheduleNext()
      return
    }

    // ===== 阶段 4: 快照（执行前创建保险快照） =====
    setState('deciding')
    iteration.phase = 'snapshot'
    const snapshot = createSnapshot(`迭代 ${iterNum} 执行前`)
    if (snapshot) {
      iteration.decisions.push(logDecision(
        'snapshot',
        'pre-execution',
        `已创建快照 ${snapshot.versionStamp}`,
        undefined,
        undefined,
        true,
      ))
      monitor.logEvent('snapshot', 'agent', `已创建保险快照（迭代 ${iterNum}）`)
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
        `应用策略：${s.name}`,
        before,
        after,
        true,
      ))
      iteration.appliedStrategies.push(s.id)
      monitor.logEvent('info', 'agent', `应用优化：${s.name}`)
    }
    setParams(newParams)
    setAppliedOptimizations(prev => prev + strategies.length)
    setCurrentIteration({ ...iteration })
    await sleep(500)

    // ===== 阶段 6: 验证 =====
    setState('verifying')
    iteration.phase = 'verify'
    resetCounters()
    monitor.logEvent('info', 'agent', `迭代 ${iterNum} 验证中`)
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
        `提交：综合分 ${scoresBefore.overall} → ${scoresAfter.overall}（${gain >= 0 ? '+' : ''}${gain}）`,
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
      monitor.logEvent('info', 'agent', `迭代 ${iterNum} 提交（评分 ${scoresAfter.overall}，${gain >= 0 ? '+' : ''}${gain}）`)
    } else {
      // 显著下降：回溯
      setState('rolledback')
      iteration.phase = 'rollback'
      iteration.result = 'rolledback'
      iteration.endTime = new Date().toISOString()
      iteration.decisions.push(logDecision(
        'rollback',
        'rollback',
        `回溯：综合分下降 ${gain}（阈值 -${config.rollbackThreshold}）`,
        undefined,
        undefined,
        true,
      ))
      if (snapshot) restoreSnapshotInternal(snapshot.id)
      setRollbackCount(prev => prev + 1)
      monitor.logEvent('warning', 'agent', `迭代 ${iterNum} 回溯（评分下降 ${gain}）`)
    }

    setCurrentIteration({ ...iteration })
    setHistory(prev => [iteration, ...prev].slice(0, MAX_HISTORY))

    // 安排下一轮（通过 ref 调用最新版本）
    scheduleNext()
  }, [state, config, params, createSnapshot, restoreSnapshotInternal, markSnapshotStable, monitor, logDecision, scheduleNext, runLearningValidation])

  // 同步 ref，确保 scheduleNext 始终调用最新的 runIteration
  useEffect(() => {
    runIterationRef.current = runIteration
  }, [runIteration])

  // ===== 控制 API =====
  const startAgent = useCallback(() => {
    if (state !== 'idle' && state !== 'paused' && state !== 'committed' && state !== 'rolledback') return
    setState('observing')
    monitor.logEvent('info', 'agent', `Agent 启动（版本 ${CURRENT_VERSION}）`)
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
      `已读取经验包 ${pack.meta.packVersion}`,
      `模块 ${pack.modules.length} 个，约定 ${pack.conventions.length} 条，教训 ${pack.lessons.length} 条`,
      pack.modules.slice(0, 5).map(m => m.id),
    ))
    monitor.logEvent('info', 'agent', `全局调配：已读取经验包 ${pack.meta.packVersion}`)

    await sleep(300)

    // 阶段 2: 分析当前状态
    const metrics = collectMetrics(monitor.summary.errorEvents, monitor.summary.crashed)
    const scores = computeScores(metrics)
    newEntries.push(makeEntry(
      'global-adapt',
      `当前健康度：综合 ${scores.overall}，性能 ${scores.performance}，UX ${scores.ux}，稳定性 ${scores.stability}，内容 ${scores.content}`,
      `FCP=${metrics.fcp}ms, LCP=${metrics.lcp}ms, 内存=${metrics.memoryUsed}MB, 错误=${metrics.errorCount}`,
    ))
    monitor.logEvent('info', 'agent', `全局调配：分析完成，综合分 ${scores.overall}`)

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
        `应用策略：${s.name}`,
        `预期收益 ${s.expectedGain}，风险 ${s.risk}`,
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
        `本轮调配应用了 ${appliedNames.length} 个优化策略`,
        appliedNames.join('、'),
      ))
      monitor.logEvent('info', 'agent', `全局调配：应用 ${appliedNames.length} 个策略`)
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
        `LLM 分析启动：模型=${llmConfig.model}`,
        `综合分=${scores.overall}，性能=${scores.performance}，UX=${scores.ux}，稳定性=${scores.stability}`,
      ))
      const llmResult = await runLLMAnalysis()
      if (llmResult && !llmResult.error && llmResult.suggestions.length > 0) {
        newEntries.push(makeEntry(
          'llm-feature',
          `LLM 分析完成：${llmResult.suggestions.length} 条建议，置信度=${(llmResult.confidence * 100).toFixed(0)}%`,
          llmResult.suggestions.map(s => `[${s.priority}] ${s.target}: ${s.fix}`).join(' | '),
          ['ai-llm'],
        ))
        // 自动采纳 high 优先级且 risk < 0.3 的参数级建议
        for (const s of llmResult.suggestions) {
          if (s.priority === 'high' && s.risk < 0.3 && s.paramChanges) {
            applyLLMSuggestion(s.id)
            newEntries.push(makeEntry(
              'llm-feature',
              `LLM 建议自动采纳：${s.target}`,
              s.fix,
              ['ai-llm'],
            ))
          }
        }
      } else if (llmResult?.error) {
        newEntries.push(makeEntry(
          'llm-feature',
          `LLM 分析失败：${llmResult.error}`,
          undefined,
          ['ai-llm'],
        ))
      }
    } else {
      newEntries.push(makeEntry(
        'global-adapt',
        `全局适配完成（LLM 未启用，使用 Q-table 策略）`,
        `本轮协调了 ${strategies.length} 个 Agent 策略，经验包模块 ${pack.modules.length} 个`,
        pack.modules.filter(m => m.category === 'ai' || m.category === 'context').map(m => m.id),
      ))
    }

    await sleep(200)

    // 阶段 5: 写入经验包
    if (orchestration.autoWritePack) {
      newEntries.push(makeEntry(
        'pack-write',
        `经验包已更新：${pack.meta.packVersion}`,
        `已记录 ${newEntries.length} 条调配记录，下次读取时将包含本次变更`,
        ['ai-experiencepack', 'ctx-ai'],
      ))
      monitor.logEvent('info', 'agent', `全局调配：经验包已写入`)
    }

    await sleep(200)

    // 阶段 6: 推送到 Wiki（pack21+pack29：异步真 await 推送，不再 fire-and-forget）
    if (wikiSync.autoPushEnabled) {
      const monitorSummary = `综合分 ${scores.overall}，性能 ${scores.performance}，UX ${scores.ux}，稳定性 ${scores.stability}，内容 ${scores.content}；错误 ${metrics.errorCount}，崩溃 ${metrics.crashCount}`
      const inspection = inspectCodebase(pack, wikiSync, monitorSummary)
      const pushRecords: WikiPushRecord[] = []

      // 6a. 经验包推送（仅当有新 PACK_BUILD 或新 DOC_VERSION 时）
      if (inspection.hasNewPack || inspection.hasNewDocVersion) {
        const packContent = buildPackWikiMarkdown(pack, inspection)
        const packRecord = await pushToWikiAsync(
          'experience-pack',
          `经验包 PACK_BUILD=${inspection.packBuild} DOC_VERSION=${inspection.docVersion}`,
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
          `经验包已推送到 Wiki 队列：PACK_BUILD=${inspection.packBuild} DOC_VERSION=${inspection.docVersion}`,
          packRecord.errorMessage || `内容哈希 ${packRecord.contentHash}，状态 ${packRecord.status}`,
          ['ai-wikisync', 'ai-experiencepack'],
        ))
        monitor.logEvent('info', 'agent', `全局调配：经验包推送 Wiki（${packRecord.status}）`)
      }

      // 6b. 代码更改推送（本轮应用的策略作为更改摘要）
      if (appliedNames.length > 0) {
        const changesContent = buildChangesWikiMarkdown(
          appliedNames.map(name => `应用策略：${name}`),
          {
            iterationNumber: iterationCountRef.current,
            appliedStrategies: appliedNames,
            scoreAfter: scores.overall,
          },
        )
        const changesRecord = await pushToWikiAsync(
          'code-changes',
          `代码更改 ${appliedNames.length} 项：迭代 ${iterationCountRef.current}`,
          changesContent,
          {
            maxRetries: params.maxRetries,
            retryBaseDelayMs: params.retryBaseDelay,
          },
        )
        pushRecords.push(changesRecord)
        newEntries.push(makeEntry(
          'wiki-push',
          `代码更改已推送到 Wiki 队列：${appliedNames.length} 项更改`,
          changesRecord.errorMessage || `状态 ${changesRecord.status}`,
          ['ai-wikisync'],
        ))
        monitor.logEvent('info', 'agent', `全局调配：代码更改推送 Wiki（${changesRecord.status}）`)
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
          `Wiki 推送跳过：经验包与文档版本均未变更（PACK_BUILD=${inspection.packBuild} 已推送）`,
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
    monitor.logEvent('info', 'agent', `全局调配完成（共 ${newEntries.length} 条记录）`)
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
    const monitorSummary = `错误 ${monitor.summary.errorEvents}，崩溃 ${monitor.summary.crashed ? '是' : '否'}`
    const inspection = inspectCodebase(pack, wikiSync, monitorSummary)
    const records: WikiPushRecord[] = []

    // 经验包推送（有新版本才推）
    if (inspection.hasNewPack || inspection.hasNewDocVersion) {
      // pack29: 使用 params.maxRetries 和 params.retryBaseDelay 控制重试策略
      const packContent = buildPackWikiMarkdown(pack, inspection)
      const packSummary = `经验包推送 PACK_BUILD=${inspection.packBuild} DOC_VERSION=${inspection.docVersion}`
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
      monitor.logEvent('info', 'agent', `Wiki 推送：经验包 PACK_BUILD=${inspection.packBuild} DOC_VERSION=${inspection.docVersion}（${r.status}）`)

      // pack29: 变更日志同步推送（用 CONVERSATION_LOG 最新 5 条 + lessons 最新 3 条拼 changes 数组）
      const convChanges = pack.conversationLog.slice(-5).map(c => `[${c.id}] ${c.summary}`)
      const lessonChanges = pack.lessons.slice(-3).map(l => `[${l.id}] ${l.title}：${l.problem}`)
      const changesContent = buildChangesWikiMarkdown(
        [...convChanges, ...lessonChanges],
        { iterationNumber: iterationCountRef.current },
      )
      const changesSummary = `变更日志 PACK_BUILD=${inspection.packBuild} DOC_VERSION=${inspection.docVersion}`
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
      monitor.logEvent('info', 'agent', `Wiki 推送跳过：PACK_BUILD=${inspection.packBuild} 已推送`)
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
    monitor.logEvent('info', 'agent', `Wiki 同步配置更新：${JSON.stringify(patch)}`)
  }, [monitor])


  // ===== 缓存与重置（安全，不碰用户进度/认证）=====
  // 只清理 `python-quest-agent-*` 前缀的 localStorage/sessionStorage
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

  /** 运行 LLM 分析（采集当前指标 → 调 LLM → 返回建议） */
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
      // monitor.summary.errorEvents 是 number（错误计数），不是数组
      const recentErrors: string[] = metrics.errorCount > 0
        ? [`最近 ${metrics.errorCount} 个错误`]
        : []

      monitor.logEvent('info', 'agent', `LLM 分析开始：模型=${llmConfig.model}，综合分=${scores.overall}`)

      const result = await analyzeWithLLM(llmConfig, metrics, scores, params, recentErrors)
      setLlmAnalysis(result)

      if (result.error) {
        monitor.logEvent('error', 'agent', `LLM 分析失败：${result.error}`)
      } else {
        monitor.logEvent('info', 'agent', `LLM 分析完成：${result.suggestions.length} 条建议，置信度=${(result.confidence * 100).toFixed(0)}%`)
      }

      return result
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err)
      monitor.logEvent('error', 'agent', `LLM 分析异常：${errMsg}`)
      const failResult: LLMAnalysisResult = {
        timestamp: new Date().toISOString(),
        reasoning: `LLM 分析异常: ${errMsg}`,
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
  }, [llmConfig, params, monitor])

  /** 采纳 LLM 建议（应用参数变更到 TunableParams） */
  const applyLLMSuggestion = useCallback((suggestionId: string): boolean => {
    if (!llmAnalysis) return false
    const suggestion = llmAnalysis.suggestions.find(s => s.id === suggestionId)
    if (!suggestion) return false
    if (!suggestion.paramChanges || Object.keys(suggestion.paramChanges).length === 0) {
      // 代码级建议：仅记录已采纳，不自动应用
      setAdoptedSuggestions(prev => [
        ...prev,
        { suggestionId, timestamp: new Date().toISOString(), target: suggestion.target, applied: false },
      ])
      monitor.logEvent('info', 'agent', `LLM 建议已采纳（代码级，需手动应用）：${suggestion.target}`)
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
    monitor.logEvent('info', 'agent', `LLM 建议已采纳（参数级）：${suggestion.target} → ${JSON.stringify(suggestion.paramChanges)}`)
    return true
  }, [llmAnalysis, monitor])

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
    monitor.logEvent('info', 'agent', `Agent 缓存清理完成，共清除 ${cleared} 项`)
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
