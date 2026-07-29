/**
 * 监测系统类型定义
 */

/** 监测组状态 */
export interface MonitorGroup {
  id: string
  name: string
  sourceFile?: string
  status: 'healthy' | 'warning' | 'error' | 'crashed'
  lastReport: string
  detail?: string
  checks: number
  errors: number
}

/** 监测事件 */
export interface MonitorEvent {
  id: string
  type: 'info' | 'warning' | 'error' | 'crash' | 'patrol' | 'snapshot'
  source: string
  message: string
  detail?: string
  timestamp: string
}

/** 巡游步骤 */
export interface PatrolStep {
  id: string
  path: string
  name: string
  group: string
  checks: string[]
  status?: 'pass' | 'fail'
  detail?: string
}

/** 巡游状态 */
export interface PatrolState {
  active: boolean
  currentStep: number
  totalSteps: number
  results: (PatrolStep & { status: 'pass' | 'fail'; detail: string })[]
  startTime: number | null
  endTime: number | null
}

/** 巡游配置 */
export interface PatrolConfig {
  autoStart: boolean
  interval: number
  routes: PatrolStep[]
}

/** 保险快照 */
export interface MonitorSnapshot {
  id: string
  timestamp: string
  data: Record<string, string>
  label: string
}

/** 监测汇总 */
export interface MonitorSummary {
  totalGroups: number
  healthy: number
  warning: number
  error: number
  crashed: number
  totalEvents: number
  errorEvents: number
  patrolTotal: number
  patrolPass: number
  patrolFail: number
  patrolProgress: number
}

/** 完整监测报告 */
export interface MonitorReport {
  timestamp: string
  summary: MonitorSummary
  groups: MonitorGroup[]
  events: MonitorEvent[]
  patrol: PatrolState & { duration: number }
  snapshots: number
}

/** 源码展示条目 */
export interface SourceCodeEntry {
  id: string
  group: string
  name: string
  file: string
  description: string
  principle: string
  code: string
  monitorChecks: string[]
}
