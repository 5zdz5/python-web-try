/**
 * AI Agent 类型定义
 *
 * 设计理念：
 *   - Agent 在浏览器端运行，通过"观察→分析→决策→执行→验证"循环迭代优化
 *   - 优化对象是运行时可调参数（缓存TTL、防抖阈值、重试次数等），不修改源码
 *   - 每次优化前创建版本号快照，回归时自动回溯
 *   - 首页（'/' 路由）核心内容受保护，永不修改
 */

/** 优化领域 */
export type OptDomain = 'performance' | 'ux' | 'content' | 'stability'

/** Agent 运行状态 */
export type AgentState = 'idle' | 'observing' | 'analyzing' | 'deciding' | 'acting' | 'verifying' | 'committed' | 'rolledback' | 'paused'

/** 迭代阶段 */
export type IterationPhase = 'observe' | 'analyze' | 'decide' | 'snapshot' | 'act' | 'verify' | 'commit' | 'rollback'

/** 观察指标（性能 + UX + 稳定性） */
export interface ObservedMetrics {
  // 性能指标（来自 Performance API）
  fcp: number                    // First Contentful Paint (ms)
  lcp: number                    // Largest Contentful Paint (ms)
  domLoad: number                // DOMContentLoaded (ms)
  loadComplete: number           // load 事件 (ms)
  memoryUsed: number             // 已用内存 (MB, chrome only)
  // 交互指标
  interactionCount: number      // 用户交互次数
  avgResponseTime: number        // 平均响应时间 (ms)
  errorCount: number             // 错误总数
  crashCount: number             // 崩溃总数
  // 稳定性指标
  uptimeMs: number               // 运行时长
  lastErrorAge: number           // 距上次错误的秒数
  retrySuccessRate: number       // 重试成功率 0-1
  // 内容指标
  levelsWithContent: number      // 有内容的关卡数
  emptyLessons: number           // 空课程数
  brokenImages: number           // 损坏图片数
}

/** 健康度评分（每个领域 0-100） */
export interface HealthScores {
  performance: number            // 性能分
  ux: number                     // 用户体验分
  content: number               // 内容质量分
  stability: number             // 稳定性分
  overall: number                // 综合分（加权平均）
}

/** 优化策略 */
export interface OptimizationStrategy {
  id: string
  domain: OptDomain
  name: string
  description: string
  // 预期收益（0-1）
  expectedGain: number
  // 风险等级（0=安全，1=高风险）
  risk: number
  // 是否首页安全（true 表示可在首页运行）
  homepageSafe: boolean
  // 条件过滤：当前参数是否还能应用此策略（避免到达边界的无效优化）
  // 可选：未提供时默认始终可应用（后续由 willChange 二次过滤）
  appliesTo?: (params: TunableParams) => boolean
  // 应用函数（返回应用后的参数变更）
  apply: (params: TunableParams) => TunableParams
}

/** 可调参数（运行时优化对象） */
export interface TunableParams {
  // 性能相关
  cacheTTL: number                // localStorage 缓存TTL (ms)
  memoryCacheSize: number         // 内存缓存最大条目
  debounceMs: number              // 默认防抖时间
  throttleMs: number              // 默认节流时间
  lazyLoadThreshold: number       // 懒加载触发距离 (px)
  // UX 相关
  toastDuration: number           // 提示显示时长 (ms)
  animationDuration: number       // 动画时长 (ms)
  loadingTimeout: number          // 加载超时阈值 (ms)
  autoSaveInterval: number        // 自动保存间隔 (ms)
  // 稳定性相关
  maxRetries: number              // 最大重试次数
  retryBaseDelay: number          // 重试基础延迟 (ms)
  snapshotInterval: number        // 自动快照间隔 (ms)
  errorThreshold: number          // 错误阈值（超过则降级）
  // 功能开关
  enablePrefetch: boolean         // 路由预取
  enableLazyPyodide: boolean      // 懒加载 Pyodide
  enableErrorRecovery: boolean    // 错误自动恢复
}

/** 决策记录 */
export interface Decision {
  id: string
  timestamp: string
  phase: IterationPhase
  strategyId: string
  reason: string                  // 决策原因
  beforeParams?: Partial<TunableParams>
  afterParams?: Partial<TunableParams>
  applied: boolean                // 是否实际应用
}

/** 一次完整的迭代 */
export interface Iteration {
  id: string
  iterationNumber: number
  startTime: string
  endTime: string | null
  phase: IterationPhase
  metricsBefore: ObservedMetrics | null
  metricsAfter: ObservedMetrics | null
  scoresBefore: HealthScores | null
  scoresAfter: HealthScores | null
  decisions: Decision[]
  appliedStrategies: string[]
  result: 'pending' | 'committed' | 'rolledback' | 'skipped'
  gain: number                    // 综合分提升（负数为下降）
  versionStamp: string            // 版本号快照标识
}

/** Agent 快照（带版本号） */
export interface AgentSnapshot {
  id: string
  versionStamp: string            // e.g. "agent@v1.3-iter5-1234567890"
  appVersion: string              // 应用版本 e.g. "v1.3"
  iterationNumber: number
  timestamp: string
  params: TunableParams            // 快照时的可调参数
  scores: HealthScores
  data: Record<string, string>    // localStorage 数据快照
  label: string                    // 描述
  stable: boolean                  // 是否标记为稳定
}

/** Agent 配置 */
export interface AgentConfig {
  autoRun: boolean                 // 是否自动运行
  iterationInterval: number        // 迭代间隔 (ms)
  observationPeriod: number       // 观察期时长 (ms)
  verificationPeriod: number       // 验证期时长 (ms)
  rollbackThreshold: number        // 回溯阈值（综合分下降多少触发回溯）
  homepageProtected: boolean       // 首页保护
  maxIterations: number            // 最大迭代次数
  enabledDomains: OptDomain[]      // 启用的优化领域
}

/** Agent 状态摘要（供 UI 展示） */
export interface AgentSummary {
  state: AgentState
  currentIteration: number
  totalIterations: number
  lastResult: Iteration['result'] | null
  overallScore: number
  scoreTrend: number[]             // 最近N次评分
  appliedOptimizations: number
  rollbackCount: number
  uptimeMs: number
}

// ===== 全局调配（Global Orchestration）=====

/** 调配记录条目类型 */
export type OrchestrationEntryType =
  | 'experience-read'    // 读取经验包
  | 'agent-optimize'     // Agent 自身参数优化
  | 'llm-feature'        // LLM 驱动的功能新增
  | 'global-adapt'       // 全局适配（跨模块协调）
  | 'pack-write'         // 写入经验包

/** 单条调配记录 */
export interface OrchestrationEntry {
  id: string
  timestamp: string
  type: OrchestrationEntryType
  summary: string                    // 一句话摘要
  detail?: string                    // 详细说明
  modules?: string[]                 // 涉及的模块 ID
  scoreImpact?: number               // 对综合分的影响
}

/** 全局调配状态 */
export interface GlobalOrchestrationState {
  active: boolean                    // 是否正在调配
  lastRun: string | null             // 上次调配时间 ISO
  entries: OrchestrationEntry[]      // 调配记录（最新在前）
  packReadEnabled: boolean           // 是否在每次开发前强制读取经验包
  autoWritePack: boolean             // 是否每次优化后自动写入经验包
  totalAdaptations: number           // 累计适配次数
}
