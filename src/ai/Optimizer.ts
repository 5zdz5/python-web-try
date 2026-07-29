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
}

// ===== 优化策略库 =====
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
    apply: (p) => ({ ...p, cacheTTL: Math.min(p.cacheTTL * 1.5, 30 * 60 * 1000) }),
  },
  {
    id: 'perf-expand-memory-cache',
    domain: 'performance',
    name: '扩大内存缓存',
    description: '增加内存缓存条目上限，减少重复计算。',
    expectedGain: 0.1,
    risk: 0.2,
    homepageSafe: true,
    apply: (p) => ({ ...p, memoryCacheSize: Math.min(p.memoryCacheSize + 25, 200) }),
  },
  {
    id: 'perf-increase-debounce',
    domain: 'performance',
    name: '加大防抖阈值',
    description: '提高防抖时间，减少频繁操作（如保存）的开销。',
    expectedGain: 0.08,
    risk: 0.15,
    homepageSafe: true,
    apply: (p) => ({ ...p, debounceMs: Math.min(p.debounceMs + 100, 800) }),
  },
  {
    id: 'perf-enable-prefetch',
    domain: 'performance',
    name: '启用路由预取',
    description: '空闲时预取可能访问的下一个路由资源。',
    expectedGain: 0.2,
    risk: 0.3,
    homepageSafe: true,
    apply: (p) => ({ ...p, enablePrefetch: true }),
  },
  {
    id: 'perf-lazy-pyodide',
    domain: 'performance',
    name: 'Pyodide 懒加载',
    description: '推迟Pyodide初始化到首次使用，加快首屏。',
    expectedGain: 0.25,
    risk: 0.2,
    homepageSafe: true,
    apply: (p) => ({ ...p, enableLazyPyodide: true }),
  },
  // ===== UX 优化 =====
  {
    id: 'ux-shorten-animation',
    domain: 'ux',
    name: '缩短动画时长',
    description: '动画过慢会让用户感觉迟钝，适度缩短提升响应感。',
    expectedGain: 0.1,
    risk: 0.1,
    homepageSafe: true,
    apply: (p) => ({ ...p, animationDuration: Math.max(p.animationDuration - 50, 150) }),
  },
  {
    id: 'ux-shorten-toast',
    domain: 'ux',
    name: '缩短提示时长',
    description: '过长提示占用注意力，适度缩短。',
    expectedGain: 0.05,
    risk: 0.05,
    homepageSafe: true,
    apply: (p) => ({ ...p, toastDuration: Math.max(p.toastDuration - 500, 1500) }),
  },
  {
    id: 'ux-reduce-loading-timeout',
    domain: 'ux',
    name: '降低加载超时阈值',
    description: '更快检测到加载卡死并显示恢复提示。',
    expectedGain: 0.12,
    risk: 0.2,
    homepageSafe: true,
    apply: (p) => ({ ...p, loadingTimeout: Math.max(p.loadingTimeout - 2000, 5000) }),
  },
  {
    id: 'ux-speedup-autosave',
    domain: 'ux',
    name: '加快自动保存',
    description: '减少自动保存间隔，降低数据丢失风险。',
    expectedGain: 0.08,
    risk: 0.3,
    homepageSafe: true,
    apply: (p) => ({ ...p, autoSaveInterval: Math.max(p.autoSaveInterval - 300, 500) }),
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
    apply: (p) => ({ ...p, maxRetries: Math.min(p.maxRetries + 1, 5) }),
  },
  {
    id: 'stab-reduce-retry-delay',
    domain: 'stability',
    name: '缩短重试延迟',
    description: '过长的重试延迟影响用户体验，适度缩短。',
    expectedGain: 0.1,
    risk: 0.25,
    homepageSafe: true,
    apply: (p) => ({ ...p, retryBaseDelay: Math.max(p.retryBaseDelay - 500, 1000) }),
  },
  {
    id: 'stab-increase-snapshot-freq',
    domain: 'stability',
    name: '加快快照频率',
    description: '更频繁的快照减少崩溃时的数据丢失。',
    expectedGain: 0.12,
    risk: 0.15,
    homepageSafe: true,
    apply: (p) => ({ ...p, snapshotInterval: Math.max(p.snapshotInterval / 2, 60 * 1000) }),
  },
  {
    id: 'stab-lower-error-threshold',
    domain: 'stability',
    name: '降低错误阈值',
    description: '更早进入降级模式，保护系统稳定。',
    expectedGain: 0.1,
    risk: 0.3,
    homepageSafe: true,
    apply: (p) => ({ ...p, errorThreshold: Math.max(p.errorThreshold - 2, 3) }),
  },
  {
    id: 'stab-enable-recovery',
    domain: 'stability',
    name: '启用错误恢复',
    description: '自动从错误状态恢复，减少白屏。',
    expectedGain: 0.2,
    risk: 0.1,
    homepageSafe: true,
    apply: (p) => ({ ...p, enableErrorRecovery: true }),
  },
]

// ===== 健康度评分系统 =====
// 各领域权重（综合分加权平均）
const WEIGHTS: Record<OptDomain, number> = {
  performance: 0.3,
  ux: 0.25,
  content: 0.2,
  stability: 0.25,
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

/** 计算所有评分 */
export function computeScores(m: ObservedMetrics): HealthScores {
  const performance = scorePerformance(m)
  const ux = scoreUX(m)
  const content = scoreContent(m)
  const stability = scoreStability(m)
  const overall = Math.round(
    performance * WEIGHTS.performance +
    ux * WEIGHTS.ux +
    content * WEIGHTS.content +
    stability * WEIGHTS.stability
  )
  return { performance, ux, content, stability, overall: clampScore(overall) }
}

/** 按领域筛选可用策略 */
export function getStrategiesByDomain(domain: OptDomain): OptimizationStrategy[] {
  return STRATEGIES.filter(s => s.domain === domain)
}

/**
 * 选择本轮要应用的策略
 *  - 按（预期收益 / (风险+0.1)）降序排列
 *  - 限制每轮最多 3 条，避免一次性变化过大
 *  - 首页保护模式下只选 homepageSafe=true 的策略
 */
export function selectStrategies(
  enabledDomains: OptDomain[],
  homepageProtected: boolean,
  maxPerIteration = 3,
): OptimizationStrategy[] {
  const candidates = STRATEGIES.filter(s => {
    if (!enabledDomains.includes(s.domain)) return false
    if (homepageProtected && !s.homepageSafe) return false
    return true
  })
  return candidates
    .sort((a, b) => (b.expectedGain / (b.risk + 0.1)) - (a.expectedGain / (a.risk + 0.1)))
    .slice(0, maxPerIteration)
}
