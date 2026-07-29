/**
 * 全局监测系统 MonitorContext
 *
 * 功能：
 *   1. 分层监测：每个代码组（页面/组件）注册一个 Monitor，向上汇报状态
 *   2. 崩溃捕获：通过 ErrorBoundary 捕获 React 崩溃 + window.onerror 捕获原生错误
 *   3. 巡游系统：自主导航各页面，动态测试，收集健康指标
 *   4. 保险快照：巡游前保存 localStorage 快照，崩溃时自动回溯
 *   5. 报告生成：层层上报 → 汇总 → 生成最终报告
 */
import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react'
import type {
  MonitorGroup, MonitorReport, MonitorSnapshot, MonitorEvent,
  PatrolState, PatrolConfig, PatrolStep, MonitorSummary
} from '../types/monitor'

// ===== 常量 =====
const SNAPSHOT_KEY = 'python-quest-monitor-snapshots'
const MAX_SNAPSHOTS = 10
const MAX_EVENTS = 200

// ===== Context 类型 =====
interface MonitorContextValue {
  // 分层监测组
  groups: Record<string, MonitorGroup>
  registerGroup: (id: string, name: string, sourceFile?: string) => void
  reportHealth: (groupId: string, status: 'healthy' | 'warning' | 'error' | 'crashed', detail?: string) => void

  // 事件流
  events: MonitorEvent[]
  logEvent: (type: MonitorEvent['type'], source: string, message: string, detail?: string) => void

  // 巡游系统
  patrol: PatrolState
  startPatrol: () => void
  stopPatrol: () => void
  patrolSteps: PatrolStep[]

  // 快照系统
  snapshots: MonitorSnapshot[]
  createSnapshot: () => MonitorSnapshot
  restoreSnapshot: (id: string) => boolean
  deleteSnapshot: (id: string) => void

  // 报告
  generateReport: () => MonitorReport
  summary: MonitorSummary

  // 崩溃状态
  crashed: boolean
  crashInfo: MonitorEvent | null
  recoverFromCrash: () => void
}

const MonitorContext = createContext<MonitorContextValue | null>(null)

// ===== 巡游路由配置 =====
const PATROL_ROUTES: PatrolStep[] = [
  { id: 'home', path: '#/', name: '首页', group: 'Home', checks: ['页面加载', '统计数据', '版本号'] },
  { id: 'map', path: '#/map', name: '关卡地图', group: 'LevelMap', checks: ['分类标签', '关卡卡片', '无敌模式'] },
  { id: 'level1', path: '#/level/1', name: '第1关', group: 'LevelDetail', checks: ['课程步骤', '挑战区域', '拓展卡片'] },
  { id: 'level50', path: '#/level/50', name: '第50关', group: 'LevelDetail', checks: ['空挑战状态', '课程内容'] },
  { id: 'level60', path: '#/level/60', name: '第60关', group: 'LevelDetail', checks: ['最后一关内容'] },
  { id: 'source', path: '#/source', name: '源码探索', group: 'SourceExplorer', checks: ['5个Tab', '统计数据', '文件树'] },
  { id: 'path', path: '#/path', name: '学习路径', group: 'LearningPath', checks: ['路径展示'] },
  { id: 'achievements', path: '#/achievements', name: '成就', group: 'Achievements', checks: ['成就列表'] },
  { id: 'leaderboard', path: '#/leaderboard', name: '排行榜', group: 'Leaderboard', checks: ['排行榜列表'] },
  { id: '404', path: '#/nonexistent', name: '404重定向', group: 'App', checks: ['重定向到首页'] },
  { id: 'invalid-level', path: '#/level/999', name: '无效关卡', group: 'LevelDetail', checks: ['关卡不存在提示'] },
]

// ===== Provider =====
export function MonitorProvider({ children }: { children: ReactNode }) {
  const [groups, setGroups] = useState<Record<string, MonitorGroup>>({})
  const [events, setEvents] = useState<MonitorEvent[]>([])
  const [snapshots, setSnapshots] = useState<MonitorSnapshot[]>([])
  const [crashed, setCrashed] = useState(false)
  const [crashInfo, setCrashInfo] = useState<MonitorEvent | null>(null)
  const [patrol, setPatrol] = useState<PatrolState>({
    active: false,
    currentStep: -1,
    totalSteps: PATROL_ROUTES.length,
    results: [],
    startTime: null,
    endTime: null,
  })

  const patrolTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ===== 加载快照 =====
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SNAPSHOT_KEY)
      if (saved) {
        setSnapshots(JSON.parse(saved))
      }
    } catch {}
  }, [])

  // ===== 保存快照 =====
  const persistSnapshots = useCallback((snaps: MonitorSnapshot[]) => {
    try {
      localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snaps.slice(0, MAX_SNAPSHOTS)))
    } catch {}
  }, [])

  // ===== 注册监测组 =====
  const registerGroup = useCallback((id: string, name: string, sourceFile?: string) => {
    setGroups(prev => {
      if (prev[id]) return prev
      return {
        ...prev,
        [id]: { id, name, sourceFile, status: 'healthy', lastReport: new Date().toISOString(), checks: 0, errors: 0 }
      }
    })
  }, [])

  // ===== 汇报健康状态 =====
  const reportHealth = useCallback((groupId: string, status: 'healthy' | 'warning' | 'error' | 'crashed', detail?: string) => {
    setGroups(prev => {
      const g = prev[groupId]
      if (!g) return prev
      return {
        ...prev,
        [groupId]: {
          ...g,
          status,
          lastReport: new Date().toISOString(),
          detail,
          checks: g.checks + 1,
          errors: status === 'error' || status === 'crashed' ? g.errors + 1 : g.errors,
        }
      }
    })
  }, [])

  // ===== 记录事件 =====
  const logEvent = useCallback((type: MonitorEvent['type'], source: string, message: string, detail?: string) => {
    const event: MonitorEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type, source, message, detail,
      timestamp: new Date().toISOString(),
    }
    setEvents(prev => [event, ...prev].slice(0, MAX_EVENTS))

    // 崩溃事件触发保险
    if (type === 'crash') {
      setCrashed(true)
      setCrashInfo(event)
    }
  }, [])

  // ===== 创建快照（必须在全局错误捕获 useEffect 之前定义，避免 TDZ） =====
  const createSnapshot = useCallback((): MonitorSnapshot => {
    const allKeys = Object.keys(localStorage).filter(k =>
      k.startsWith('python-quest') || k.startsWith('monitor')
    )
    const data: Record<string, string> = {}
    for (const key of allKeys) {
      data[key] = localStorage.getItem(key) || ''
    }
    const snapshot: MonitorSnapshot = {
      id: `snap-${Date.now()}`,
      timestamp: new Date().toISOString(),
      data,
      label: patrol.active ? '巡游前快照' : '手动快照',
    }
    const newSnapshots = [snapshot, ...snapshots].slice(0, MAX_SNAPSHOTS)
    setSnapshots(newSnapshots)
    persistSnapshots(newSnapshots)
    return snapshot
  }, [snapshots, patrol.active, persistSnapshots])

  // ===== 回溯快照 =====
  const restoreSnapshot = useCallback((id: string): boolean => {
    const snap = snapshots.find(s => s.id === id)
    if (!snap) return false
    try {
      // 先清除当前数据
      Object.keys(localStorage).filter(k =>
        k.startsWith('python-quest') || k.startsWith('monitor')
      ).forEach(k => localStorage.removeItem(k))
      // 恢复快照数据
      for (const [key, value] of Object.entries(snap.data)) {
        localStorage.setItem(key, value)
      }
      logEvent('info', 'snapshot', `已回溯到快照 ${snap.timestamp}`)
      // 刷新页面以重新加载
      setTimeout(() => window.location.reload(), 500)
      return true
    } catch (err) {
      logEvent('error', 'snapshot', `回溯失败: ${err}`)
      return false
    }
  }, [snapshots, logEvent])

  // ===== 删除快照 =====
  const deleteSnapshot = useCallback((id: string) => {
    const newSnapshots = snapshots.filter(s => s.id !== id)
    setSnapshots(newSnapshots)
    persistSnapshots(newSnapshots)
  }, [snapshots, persistSnapshots])

  // ===== 全局错误捕获 =====
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      logEvent('crash', 'window', event.message, `${event.filename}:${event.lineno}:${event.colno}`)
    }
    const unhandledRejection = (event: PromiseRejectionEvent) => {
      logEvent('crash', 'promise', `Unhandled rejection: ${event.reason}`)
    }
    window.addEventListener('error', handler)
    window.addEventListener('unhandledrejection', unhandledRejection)
    // 注入全局桥接函数，供 ErrorBoundary 使用
    ;(window as any).__monitorLogEvent = logEvent
    ;(window as any).__monitorRestoreSnapshot = () => {
      if (snapshots.length > 0) restoreSnapshot(snapshots[0].id)
    }
    return () => {
      window.removeEventListener('error', handler)
      window.removeEventListener('unhandledrejection', unhandledRejection)
      delete (window as any).__monitorLogEvent
      delete (window as any).__monitorRestoreSnapshot
    }
  }, [logEvent, snapshots, restoreSnapshot])

  // ===== 巡游系统 =====
  const startPatrol = useCallback(() => {
    // 巡游前创建保险快照
    const snapshot = createSnapshot()
    logEvent('info', 'patrol', `巡游启动，已创建保险快照 ${snapshot.id}`)

    setPatrol({
      active: true,
      currentStep: 0,
      totalSteps: PATROL_ROUTES.length,
      results: [],
      startTime: Date.now(),
      endTime: null,
    })
    // 跳转到第一个路由
    window.location.hash = PATROL_ROUTES[0].path
  }, [createSnapshot, logEvent])

  const stopPatrol = useCallback(() => {
    setPatrol(prev => ({
      ...prev,
      active: false,
      endTime: Date.now(),
    }))
    if (patrolTimerRef.current) {
      clearTimeout(patrolTimerRef.current)
      patrolTimerRef.current = null
    }
    logEvent('info', 'patrol', '巡游已停止')
  }, [logEvent])

  // ===== 巡游自动导航 =====
  useEffect(() => {
    if (!patrol.active || patrol.currentStep < 0) return

    const step = PATROL_ROUTES[patrol.currentStep]
    if (!step) {
      // 巡游完成
      setPatrol(prev => ({ ...prev, active: false, endTime: Date.now() }))
      logEvent('info', 'patrol', '巡游完成')
      return
    }

    // 导航到当前步骤
    window.location.hash = step.path
    logEvent('info', 'patrol', `巡游: ${step.name} (${step.path})`)

    // 等待页面加载后检查
    patrolTimerRef.current = setTimeout(() => {
      // 检查页面是否正常加载
      const bodyText = document.body?.innerText || ''
      const hasContent = bodyText.trim().length > 50
      const result: PatrolStep & { status: 'pass' | 'fail'; detail: string } = {
        ...step,
        status: hasContent ? 'pass' : 'fail',
        detail: hasContent ? '页面正常加载' : '页面内容为空',
      }

      setPatrol(prev => ({
        ...prev,
        results: [...prev.results, result],
        currentStep: prev.currentStep + 1,
      }))

      // 汇报监测组状态
      reportHealth(step.group, hasContent ? 'healthy' : 'error', result.detail)
    }, 2000) // 每步等待2秒

    return () => {
      if (patrolTimerRef.current) clearTimeout(patrolTimerRef.current)
    }
  }, [patrol.active, patrol.currentStep, logEvent, reportHealth])

  // ===== 恢复崩溃 =====
  const recoverFromCrash = useCallback(() => {
    setCrashed(false)
    setCrashInfo(null)
    // 尝试恢复最近的快照
    if (snapshots.length > 0) {
      restoreSnapshot(snapshots[0].id)
    } else {
      // 没有快照，刷新页面
      window.location.reload()
    }
  }, [snapshots, restoreSnapshot])

  // ===== 汇总计算 =====
  const summary: MonitorSummary = (() => {
    const groupList = Object.values(groups)
    const healthy = groupList.filter(g => g.status === 'healthy').length
    const warning = groupList.filter(g => g.status === 'warning').length
    const error = groupList.filter(g => g.status === 'error').length
    const crashedGroups = groupList.filter(g => g.status === 'crashed').length
    const patrolResults = patrol.results
    const patrolPass = patrolResults.filter(r => r.status === 'pass').length
    const patrolFail = patrolResults.filter(r => r.status === 'fail').length
    return {
      totalGroups: groupList.length,
      healthy, warning, error, crashed: crashedGroups,
      totalEvents: events.length,
      errorEvents: events.filter(e => e.type === 'error' || e.type === 'crash').length,
      patrolTotal: patrolResults.length,
      patrolPass, patrolFail,
      patrolProgress: patrol.totalSteps > 0 ? Math.round((patrolResults.length / patrol.totalSteps) * 100) : 0,
    }
  })()

  // ===== 生成报告 =====
  const generateReport = useCallback((): MonitorReport => {
    const groupList = Object.values(groups)
    return {
      timestamp: new Date().toISOString(),
      summary,
      groups: groupList,
      events: events.slice(0, 50),
      patrol: {
        ...patrol,
        results: patrol.results,
        duration: patrol.startTime && patrol.endTime
          ? patrol.endTime - patrol.startTime
          : patrol.startTime ? Date.now() - patrol.startTime : 0,
      },
      snapshots: snapshots.length,
    }
  }, [groups, events, patrol, snapshots, summary])

  const value: MonitorContextValue = {
    groups, registerGroup, reportHealth,
    events, logEvent,
    patrol, startPatrol, stopPatrol, patrolSteps: PATROL_ROUTES,
    snapshots, createSnapshot, restoreSnapshot, deleteSnapshot,
    generateReport, summary,
    crashed, crashInfo, recoverFromCrash,
  }

  return <MonitorContext.Provider value={value}>{children}</MonitorContext.Provider>
}

// ===== Hook =====
export function useMonitor() {
  const ctx = useContext(MonitorContext)
  if (!ctx) throw new Error('useMonitor must be used within MonitorProvider')
  return ctx
}
