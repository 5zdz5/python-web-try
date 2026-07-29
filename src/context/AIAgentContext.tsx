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
  Iteration, Decision, AgentSnapshot, AgentSummary, IterationPhase
} from '../types/ai'
import { DEFAULT_PARAMS, STRATEGIES, computeScores, selectStrategies } from '../ai/Optimizer'
import { collectMetrics, resetCounters, initInteractionTracking, recordCrash } from '../ai/metrics'
import { CURRENT_VERSION } from '../config/versionManager'
import { useMonitor } from './MonitorContext'

// ===== 常量 =====
const AGENT_PARAMS_KEY = 'python-quest-agent-params'
const AGENT_CONFIG_KEY = 'python-quest-agent-config'
const AGENT_SNAPSHOTS_KEY = 'python-quest-agent-snapshots'
const AGENT_HISTORY_KEY = 'python-quest-agent-history'
const MAX_SNAPSHOTS = 8
const MAX_HISTORY = 20

// ===== 默认配置 =====
const DEFAULT_CONFIG: AgentConfig = {
  autoRun: false,
  iterationInterval: 30000,       // 30 秒一轮
  observationPeriod: 5000,       // 观察 5 秒
  verificationPeriod: 5000,      // 验证 5 秒
  rollbackThreshold: 5,          // 综合分下降 5 分触发回溯
  homepageProtected: true,
  maxIterations: 20,
  enabledDomains: ['performance', 'ux', 'content', 'stability'],
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

// ===== Provider =====
export function AIAgentProvider({ children }: { children: ReactNode }) {
  const monitor = useMonitor()

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

  const iterationCountRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cleanupTrackingRef = useRef<(() => void) | null>(null)
  const isOnHomepageRef = useRef(isOnHomepage())
  const startTimeRef = useRef(Date.now())
  // 使用 ref 打破循环依赖，始终指向最新的 runIteration
  const runIterationRef = useRef<() => Promise<void>>(() => Promise.resolve())

  // ===== 持久化 =====
  useEffect(() => { safeSet(AGENT_PARAMS_KEY, JSON.stringify(params)) }, [params])
  useEffect(() => { safeSet(AGENT_CONFIG_KEY, JSON.stringify(config)) }, [config])
  useEffect(() => { safeSet(AGENT_HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY))) }, [history])
  useEffect(() => { safeSet(AGENT_SNAPSHOTS_KEY, JSON.stringify(snapshots.slice(0, MAX_SNAPSHOTS))) }, [snapshots])

  // ===== 跟踪首页位置 =====
  useEffect(() => {
    const onHashChange = () => { isOnHomepageRef.current = isOnHomepage() }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // ===== 初始化交互监听 =====
  useEffect(() => {
    cleanupTrackingRef.current = initInteractionTracking()
    return () => {
      if (cleanupTrackingRef.current) cleanupTrackingRef.current()
    }
  }, [])

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
    const strategies = selectStrategies(
      config.enabledDomains,
      config.homepageProtected && onHome,
      3,
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
  }, [state, config, params, createSnapshot, restoreSnapshotInternal, markSnapshotStable, monitor, logDecision, scheduleNext])

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
