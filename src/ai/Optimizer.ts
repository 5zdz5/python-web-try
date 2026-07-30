/**
 * AI Agent 优化策略库 + 健康度评分系统
 *
 * 4 大优化领域：
 *   1. performance  - 性能优化（缓存/防抖/懒加载）
 *   2. ux          - 用户体验（动画/提示/加载态）
 *   3. content     - 内容质量（空课程/损坏资源检测）
 *   4. stability   - 稳定性（重试/快照/错误恢复）
 *
 * 所有策略都是"运行时可调参数"变更，不修改源码。
 * 带有 homepageSafe 标记的策略才能在首页保护模式下运行。
 */
import type {
  OptimizationStrategy, TunableParams, ObservedMetrics, HealthScores, OptDomain
} from '../types/ai'

// ===== 默认可调参数 =====
export const DEFAULT_PARAMS: TunableParams = {
  cacheTTL: 5 * 60 * 1000,        // 5 分钟
  memoryCacheSize: 50,
  debounceMs: 300,
  throttleMs: 100,
  lazyLoadThreshold: 200,
  toastDuration: 3000,
  animationDuration: 300,
  loadingTimeout: 10000,
  autoSaveInterval: 1500,
  maxRetries: 2,
  retryBaseDelay: 2000,
  snapshotInterval: 5 * 60 * 1000,
  errorThreshold: 10,
  enablePrefetch: false,
  enableLazyPyodide: true,
  enableErrorRecovery: true,
  // pack23: 内容质量默认配置
  enableEmptyLessonScan: true,     // 默认开启空关卡扫描
  enableBrokenImageCheck: true,    // 默认开启损坏图片检测
  contentRefreshInterval: 30 * 60 * 1000, // 30 分钟刷新一次
  // pack23: 元优化默认配置（Agent 自适应）
  agentLearningRate: 0.3,          // 学习率 0.3，中等步长
  strategyExplorationRate: 0.2,    // 探索率 0.2，20% 概率尝试新策略
}

// ===== 参数边界常量（优化前先检测是否可达，避免无效 apply）=====
const BOUNDS = {
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
  // pack23: 内容质量边界
  contentRefreshInterval: { min: 5 * 60 * 1000, max: 24 * 60 * 60 * 1000 },
  // pack23: 元优化边界
  agentLearningRate: { min: 0.05, max: 1.0 },
  strategyExplorationRate: { min: 0, max: 0.5 },
} as const

/** 检测策略对当前参数是否还能改变（避免无效优化） */
function willChange(params: TunableParams, apply: (p: TunableParams) => TunableParams): boolean {
  const next = apply(params)
  return Object.keys(next).some(k => {
    const key = k as keyof TunableParams
    return (params[key] as unknown) !== (next[key] as unknown)
  })
}

// ===== 优化策略库 =====
// 说明：每个策略都附加了 appliesTo 函数，用于在 selectStrategies 阶段先过滤
// 已经到达边界或布尔开关已经是目标值的策略直接跳过，减少无效优化
export const STRATEGIES: OptimizationStrategy[] = [
  // ===== 性能优化 =====
  {
    id: 'perf-increase-cache-ttl',
    domain: 'performance',
    name: '延长缓存TTL',
    description: '提高localStorage缓存有效期，减少重复请求。适用于低频变更数据。',
    expectedGain: 0.15,
    risk: 0.1,
    homepageSafe: true,
    appliesTo: (p) => p.cacheTTL < BOUNDS.cacheTTL.max,
    apply: (p) => ({ ...p, cacheTTL: Math.min(p.cacheTTL * 1.5, BOUNDS.cacheTTL.max) }),
  },
  {
    id: 'perf-expand-memory-cache',
    domain: 'performance',
    name: '扩大内存缓存',
    description: '增加内存缓存条目上限，减少重复计算。',
    expectedGain: 0.1,
    risk: 0.2,
    homepageSafe: true,
    appliesTo: (p) => p.memoryCacheSize < BOUNDS.memoryCacheSize.max,
    apply: (p) => ({ ...p, memoryCacheSize: Math.min(p.memoryCacheSize + 25, BOUNDS.memoryCacheSize.max) }),
  },
  {
    id: 'perf-increase-debounce',
    domain: 'performance',
    name: '加大防抖阈值',
    description: '提高防抖时间，减少频繁操作（如保存）的开销。',
    expectedGain: 0.08,
    risk: 0.15,
    homepageSafe: true,
    appliesTo: (p) => p.debounceMs < BOUNDS.debounceMs.max,
    apply: (p) => ({ ...p, debounceMs: Math.min(p.debounceMs + 100, BOUNDS.debounceMs.max) }),
  },
  {
    id: 'perf-enable-prefetch',
    domain: 'performance',
    name: '启用路由预取',
    description: '空闲时预取可能访问的下一个路由资源。',
    expectedGain: 0.2,
    risk: 0.3,
    homepageSafe: true,
    appliesTo: (p) => p.enablePrefetch !== true,
    apply: (p) => ({ ...p, enablePrefetch: true }),
  },
  // perf-lazy-pyodide 和 stab-enable-recovery 已在 DEFAULT_PARAMS 中默认开启，
  // apply 不会产生任何变化，属于无效优化，已移除。
  // ===== UX 优化 =====
  {
    id: 'ux-shorten-animation',
    domain: 'ux',
    name: '缩短动画时长',
    description: '动画过慢会让用户感觉迟钝，适度缩短提升响应感。',
    expectedGain: 0.1,
    risk: 0.1,
    homepageSafe: true,
    appliesTo: (p) => p.animationDuration > BOUNDS.animationDuration.min,
    apply: (p) => ({ ...p, animationDuration: Math.max(p.animationDuration - 50, BOUNDS.animationDuration.min) }),
  },
  {
    id: 'ux-shorten-toast',
    domain: 'ux',
    name: '缩短提示时长',
    description: '过长提示占用注意力，适度缩短。',
    expectedGain: 0.05,
    risk: 0.05,
    homepageSafe: true,
    appliesTo: (p) => p.toastDuration > BOUNDS.toastDuration.min,
    apply: (p) => ({ ...p, toastDuration: Math.max(p.toastDuration - 500, BOUNDS.toastDuration.min) }),
  },
  {
    id: 'ux-reduce-loading-timeout',
    domain: 'ux',
    name: '降低加载超时阈值',
    description: '更快检测到加载卡死并显示恢复提示。',
    expectedGain: 0.12,
    risk: 0.2,
    homepageSafe: true,
    appliesTo: (p) => p.loadingTimeout > BOUNDS.loadingTimeout.min,
    apply: (p) => ({ ...p, loadingTimeout: Math.max(p.loadingTimeout - 2000, BOUNDS.loadingTimeout.min) }),
  },
  {
    id: 'ux-speedup-autosave',
    domain: 'ux',
    name: '加快自动保存',
    description: '减少自动保存间隔，降低数据丢失风险。',
    expectedGain: 0.08,
    risk: 0.3,
    homepageSafe: true,
    appliesTo: (p) => p.autoSaveInterval > BOUNDS.autoSaveInterval.min,
    apply: (p) => ({ ...p, autoSaveInterval: Math.max(p.autoSaveInterval - 300, BOUNDS.autoSaveInterval.min) }),
  },
  // ===== 稳定性优化 =====
  {
    id: 'stab-increase-retries',
    domain: 'stability',
    name: '增加重试次数',
    description: '网络不稳定时增加重试次数提升成功率。',
    expectedGain: 0.15,
    risk: 0.2,
    homepageSafe: true,
    appliesTo: (p) => p.maxRetries < BOUNDS.maxRetries.max,
    apply: (p) => ({ ...p, maxRetries: Math.min(p.maxRetries + 1, BOUNDS.maxRetries.max) }),
  },
  {
    id: 'stab-reduce-retry-delay',
    domain: 'stability',
    name: '缩短重试延迟',
    description: '过长的重试延迟影响用户体验，适度缩短。',
    expectedGain: 0.1,
    risk: 0.25,
    homepageSafe: true,
    appliesTo: (p) => p.retryBaseDelay > BOUNDS.retryBaseDelay.min,
    apply: (p) => ({ ...p, retryBaseDelay: Math.max(p.retryBaseDelay - 500, BOUNDS.retryBaseDelay.min) }),
  },
  {
    id: 'stab-increase-snapshot-freq',
    domain: 'stability',
    name: '加快快照频率',
    description: '更频繁的快照减少崩溃时的数据丢失。',
    expectedGain: 0.12,
    risk: 0.15,
    homepageSafe: true,
    appliesTo: (p) => p.snapshotInterval > BOUNDS.snapshotInterval.min,
    apply: (p) => ({ ...p, snapshotInterval: Math.max(p.snapshotInterval / 2, BOUNDS.snapshotInterval.min) }),
  },
  {
    id: 'stab-lower-error-threshold',
    domain: 'stability',
    name: '降低错误阈值',
    description: '更早进入降级模式，保护系统稳定。',
    expectedGain: 0.1,
    risk: 0.3,
    homepageSafe: true,
    appliesTo: (p) => p.errorThreshold > BOUNDS.errorThreshold.min,
    apply: (p) => ({ ...p, errorThreshold: Math.max(p.errorThreshold - 2, BOUNDS.errorThreshold.min) }),
  },
  // ===== 内容质量优化（pack23 新增 — 补全 4 域之 content）=====
  {
    id: 'content-enable-empty-scan',
    domain: 'content',
    name: '启用空关卡扫描',
    description: '开启空关卡描述扫描，自动检测内容缺失，提升内容质量分。',
    expectedGain: 0.2,
    risk: 0.05,
    homepageSafe: true,
    appliesTo: (p) => !p.enableEmptyLessonScan,
    apply: (p) => ({ ...p, enableEmptyLessonScan: true }),
  },
  {
    id: 'content-enable-image-check',
    domain: 'content',
    name: '启用图片健康检测',
    description: '开启损坏图片检测，自动发现 404 资源，提升内容完整度。',
    expectedGain: 0.15,
    risk: 0.05,
    homepageSafe: true,
    appliesTo: (p) => !p.enableBrokenImageCheck,
    apply: (p) => ({ ...p, enableBrokenImageCheck: true }),
  },
  {
    id: 'content-speedup-refresh',
    domain: 'content',
    name: '加快内容刷新',
    description: '缩短内容刷新间隔，让用户更快看到内容更新。注意权衡网络开销。',
    expectedGain: 0.1,
    risk: 0.2,
    homepageSafe: true,
    appliesTo: (p) => p.contentRefreshInterval > BOUNDS.contentRefreshInterval.min,
    apply: (p) => ({ ...p, contentRefreshInterval: Math.max(p.contentRefreshInterval / 2, BOUNDS.contentRefreshInterval.min) }),
  },
  // ===== 元优化（pack23 新增 — Agent 自适应进化）=====
  {
    id: 'meta-boost-learning-rate',
    domain: 'meta',
    name: '提升学习率',
    description: '增大 Agent 学习率，让参数调整步长更大，加速收敛（但可能震荡）。',
    expectedGain: 0.12,
    risk: 0.4,
    homepageSafe: false,
    appliesTo: (p) => p.agentLearningRate < BOUNDS.agentLearningRate.max,
    apply: (p) => ({ ...p, agentLearningRate: Math.min(p.agentLearningRate * 1.5, BOUNDS.agentLearningRate.max) }),
  },
  {
    id: 'meta-boost-exploration',
    domain: 'meta',
    name: '提升探索率',
    description: '增大策略探索率（epsilon-greedy），让 Agent 更多尝试新策略，避免陷入局部最优。',
    expectedGain: 0.1,
    risk: 0.3,
    homepageSafe: false,
    appliesTo: (p) => p.strategyExplorationRate < BOUNDS.strategyExplorationRate.max,
    apply: (p) => ({ ...p, strategyExplorationRate: Math.min(p.strategyExplorationRate + 0.05, BOUNDS.strategyExplorationRate.max) }),
  },
  {
    id: 'meta-decelerate-learning',
    domain: 'meta',
    name: '降低学习率（精细微调）',
    description: '降低 Agent 学习率，进入精细微调阶段，减少震荡。适用于评分已较高（≥85）时。',
    expectedGain: 0.08,
    risk: 0.1,
    homepageSafe: true,
    appliesTo: (p) => p.agentLearningRate > BOUNDS.agentLearningRate.min,
    apply: (p) => ({ ...p, agentLearningRate: Math.max(p.agentLearningRate * 0.7, BOUNDS.agentLearningRate.min) }),
  },
  // ===== pack28 超级进化：学习效果优化（基于 Pyodide 真实测试结果） =====
  {
    id: 'learn-boost-empty-scan',
    domain: 'learning-outcome',
    name: '加强空关卡扫描（提升学习覆盖率）',
    description: '启用更激进的空关卡扫描频率，确保所有关卡有学习内容。基于 Pyodide 测试通过率反馈。',
    expectedGain: 0.2,
    risk: 0.1,
    homepageSafe: true,
    appliesTo: (p) => !p.enableEmptyLessonScan,
    apply: (p) => ({ ...p, enableEmptyLessonScan: true }),
  },
  {
    id: 'learn-speed-up-content-refresh',
    domain: 'learning-outcome',
    name: '加快内容刷新（快速响应学习反馈）',
    description: '缩短内容刷新间隔，让 Agent 更快感知课程内容变化和学习效果反馈。',
    expectedGain: 0.15,
    risk: 0.15,
    homepageSafe: true,
    appliesTo: (p) => p.contentRefreshInterval > 60000,
    apply: (p) => ({ ...p, contentRefreshInterval: Math.max(p.contentRefreshInterval * 0.5, 30000) }),
  },
  {
    id: 'learn-enable-error-recovery',
    domain: 'learning-outcome',
    name: '启用错误自动恢复（降低学习中断率）',
    description: '启用错误自动恢复，当学员代码执行出错时自动重试，降低学习中断率。',
    expectedGain: 0.18,
    risk: 0.2,
    homepageSafe: true,
    appliesTo: (p) => !p.enableErrorRecovery,
    apply: (p) => ({ ...p, enableErrorRecovery: true }),
  },
]

// ===== 健康度评分系统 =====
// 各领域权重（综合分加权平均）
// pack23: meta 域权重 0（元优化不参与综合分加权，但策略仍可应用）
// pack28: learning-outcome 域权重 0.15（教育产品核心指标，从其他域分摊）
const WEIGHTS: Record<OptDomain, number> = {
  performance: 0.25,
  ux: 0.2,
  content: 0.15,
  stability: 0.2,
  meta: 0,
  'learning-outcome': 0.2,
}

/** 计算 0-100 的评分，越大越优 */
function clampScore(v: number): number {
  return Math.max(0, Math.min(100, Math.round(v)))
}

/** 计算性能分 */
function scorePerformance(m: ObservedMetrics): number {
  // FCP：0ms=100, 3000ms+=0
  const fcpScore = m.fcp <= 0 ? 80 : Math.max(0, 100 - (m.fcp / 3000) * 100)
  // LCP：0ms=100, 5000ms+=0
  const lcpScore = m.lcp <= 0 ? 80 : Math.max(0, 100 - (m.lcp / 5000) * 100)
  // 内存：0MB=100, 200MB+=0
  const memScore = m.memoryUsed <= 0 ? 90 : Math.max(0, 100 - (m.memoryUsed / 200) * 100)
  // 响应时间：0ms=100, 500ms+=0
  const respScore = m.avgResponseTime <= 0 ? 90 : Math.max(0, 100 - (m.avgResponseTime / 500) * 100)
  return clampScore(fcpScore * 0.3 + lcpScore * 0.3 + memScore * 0.2 + respScore * 0.2)
}

/** 计算 UX 分 */
function scoreUX(m: ObservedMetrics): number {
  // 错误数：0=100, 20+=0
  const errScore = Math.max(0, 100 - (m.errorCount / 20) * 100)
  // 响应时间：0ms=100, 500ms+=0
  const respScore = m.avgResponseTime <= 0 ? 90 : Math.max(0, 100 - (m.avgResponseTime / 500) * 100)
  // 交互次数（说明用户活跃度）：>10=100, 0=50
  const interScore = Math.min(100, 50 + m.interactionCount * 5)
  return clampScore(errScore * 0.4 + respScore * 0.3 + interScore * 0.3)
}

/** 计算内容质量分 */
function scoreContent(m: ObservedMetrics): number {
  // 有内容关卡比例
  const contentRatio = m.levelsWithContent <= 0 ? 1 : 1 - (m.emptyLessons / Math.max(m.levelsWithContent, 1))
  const contentScore = Math.max(0, contentRatio * 100)
  // 损坏图片：0=100, 10+=0
  const imgScore = Math.max(0, 100 - (m.brokenImages / 10) * 100)
  return clampScore(contentScore * 0.7 + imgScore * 0.3)
}

/** 计算稳定性分 */
function scoreStability(m: ObservedMetrics): number {
  // 崩溃数：0=100, 5+=0
  const crashScore = Math.max(0, 100 - (m.crashCount / 5) * 100)
  // 距上次错误：>300s=100, 0s=20
  const errAgeScore = Math.min(100, 20 + (m.lastErrorAge / 300) * 80)
  // 重试成功率
  const retryScore = m.retrySuccessRate * 100
  // 运行时长（越久越稳定）：>1h=100, 0=50
  const uptimeScore = Math.min(100, 50 + (m.uptimeMs / (60 * 60 * 1000)) * 50)
  return clampScore(crashScore * 0.4 + errAgeScore * 0.2 + retryScore * 0.2 + uptimeScore * 0.2)
}

/** 计算学习效果分（pack28 超级进化：基于 Pyodide 真实测试通过率） */
function scoreLearningOutcome(m: ObservedMetrics): number {
  // 测试通过率：0=0, 1=100
  const passRateScore = m.testPassRate * 100
  // 错误模式数：0=100, 10+=0（错误模式越少说明课程质量越好）
  const errorPatternScore = Math.max(0, 100 - (m.commonErrorPatterns / 10) * 100)
  // 提示后重试率：0=50, 1=100（高重试率说明学员愿意继续尝试）
  const retryScore = 50 + m.retryAfterHintRate * 50
  return clampScore(passRateScore * 0.6 + errorPatternScore * 0.2 + retryScore * 0.2)
}

/** 计算所有评分 */
export function computeScores(m: ObservedMetrics): HealthScores {
  const performance = scorePerformance(m)
  const ux = scoreUX(m)
  const content = scoreContent(m)
  const stability = scoreStability(m)
  const learningOutcome = scoreLearningOutcome(m)
  const overall = Math.round(
    performance * WEIGHTS.performance +
    ux * WEIGHTS.ux +
    content * WEIGHTS.content +
    stability * WEIGHTS.stability +
    learningOutcome * WEIGHTS['learning-outcome']
  )
  return { performance, ux, content, stability, overall: clampScore(overall), learningOutcome }
}

/** 按领域筛选可用策略 */
export function getStrategiesByDomain(domain: OptDomain): OptimizationStrategy[] {
  return STRATEGIES.filter(s => s.domain === domain)
}

/**
 * 选择本轮要应用的策略
 *  过滤器层级（从强到弱，每一层都减少无效策略）：
 *   1. 领域筛选（enabledDomains）
 *   2. 首页保护（homepageSafe）
 *   3. appliesTo 条件（参数是否还能改变）
 *   4. willChange 二次检测（apply 前后是否真的不同）
 *   5. 高评分减少策略：当 overall≥85 时最多 1 条，≥90 时直接跳过
 *   6. 按收益/风险排序
 *   7. maxPerIteration 限制
 */
export function selectStrategies(
  enabledDomains: OptDomain[],
  homepageProtected: boolean,
  maxPerIteration = 3,
  params?: TunableParams,
  overallScore?: number,
): OptimizationStrategy[] {
  // 过滤 5: 评分已很高时停止微调
  if (overallScore !== undefined && overallScore >= 90) return []
  const effectiveMax = overallScore !== undefined && overallScore >= 85
    ? Math.min(maxPerIteration, 1)
    : maxPerIteration

  const candidates = STRATEGIES.filter(s => {
    // 1. 领域筛选
    if (!enabledDomains.includes(s.domain)) return false
    // 2. 首页保护
    if (homepageProtected && !s.homepageSafe) return false
    // 3. appliesTo 条件（可选）
    if (params && s.appliesTo && !s.appliesTo(params)) return false
    // 4. willChange 二次检测（最严格的去无效优化）
    if (params && !willChange(params, s.apply)) return false
    return true
  })
  return candidates
    .sort((a, b) => (b.expectedGain / (b.risk + 0.1)) - (a.expectedGain / (a.risk + 0.1)))
    .slice(0, effectiveMax)
}
