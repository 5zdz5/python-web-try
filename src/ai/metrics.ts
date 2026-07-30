/**
 * 指标收集器
 *
 * 从多个来源收集运行时指标：
 *   - Performance API（FCP/LCP/DOM/load）
 *   - 用户交互（点击/滚动/输入计数）
 *   - 内存使用（chrome.memory API，若可用）
 *   - DOM 检查（空课程/损坏图片）
 *   - localStorage 状态
 */
import type { ObservedMetrics } from '../types/ai'

// 用户交互计数器（模块级单例）
let interactionCount = 0
let responseTimes: number[] = []
let lastErrorTime: number | null = null
let crashCount = 0
let retryAttempts = 0
let retrySuccess = 0
let startTime = Date.now()

/** 重置所有计数器（Agent 每轮迭代开始时调用） */
export function resetCounters(): void {
  interactionCount = 0
  responseTimes = []
  retryAttempts = 0
  retrySuccess = 0
  // 注意：crashCount 和 lastErrorTime 不重置，因为它们是累积指标
}

/** 记录一次用户交互 */
export function recordInteraction(): void {
  interactionCount++
}

/** 记录一次响应时间 */
export function recordResponseTime(ms: number): void {
  responseTimes.push(ms)
  if (responseTimes.length > 50) responseTimes.shift()
}

/** 记录一次错误 */
export function recordError(): void {
  lastErrorTime = Date.now()
}

/** 记录一次崩溃 */
export function recordCrash(): void {
  crashCount++
  lastErrorTime = Date.now()
}

/** 记录一次重试尝试 */
export function recordRetryAttempt(success: boolean): void {
  retryAttempts++
  if (success) retrySuccess++
}

/** 获取 Performance API 时间 */
function getPerfTiming(): { fcp: number; lcp: number; domLoad: number; loadComplete: number } {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry | undefined
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
    const lcpEntry = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1] : undefined
    return {
      fcp: fcpEntry ? fcpEntry.startTime : (nav ? nav.domContentLoadedEventEnd : 0),
      lcp: lcpEntry ? lcpEntry.startTime : (nav ? nav.loadEventEnd : 0),
      domLoad: nav ? nav.domContentLoadedEventEnd : 0,
      loadComplete: nav ? nav.loadEventEnd : 0,
    }
  } catch {
    return { fcp: 0, lcp: 0, domLoad: 0, loadComplete: 0 }
  }
}

/** 获取内存使用 (MB) */
function getMemoryUsed(): number {
  try {
    const perfMem = (performance as any).memory
    if (perfMem && typeof perfMem.usedJSHeapSize === 'number') {
      return Math.round(perfMem.usedJSHeapSize / (1024 * 1024))
    }
  } catch {}
  return 0
}

/** 计算 DOM 内容指标 */
function getContentMetrics(): { levelsWithContent: number; emptyLessons: number; brokenImages: number } {
  let levelsWithContent = 0
  let emptyLessons = 0
  let brokenImages = 0

  try {
    // 检查关卡卡片是否有内容
    const levelCards = document.querySelectorAll('[data-level-id]')
    if (levelCards.length > 0) {
      levelsWithContent = levelCards.length
    } else {
      // 如果当前不在关卡页面，用 mockData 推断
      levelsWithContent = 60
    }

    // 检查损坏图片
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
        brokenImages++
      }
    })

    // 检查空课程区域
    const emptyLessonEls = document.querySelectorAll('[data-empty-lesson]')
    emptyLessons = emptyLessonEls.length
  } catch {}

  return { levelsWithContent, emptyLessons, brokenImages }
}

/**
 * 收集当前所有指标
 * @param monitorErrorCount 来自 MonitorContext 的错误事件数
 * @param monitorCrashCount 来自 MonitorContext 的崩溃事件数
 */
export function collectMetrics(monitorErrorCount = 0, monitorCrashCount = 0): ObservedMetrics {
  const perf = getPerfTiming()
  const mem = getMemoryUsed()
  const content = getContentMetrics()

  // 距上次错误的秒数
  const lastErrorAge = lastErrorTime ? Math.floor((Date.now() - lastErrorTime) / 1000) : 9999

  // 重试成功率
  const retrySuccessRate = retryAttempts > 0 ? retrySuccess / retryAttempts : 1

  // 平均响应时间
  const avgResponseTime = responseTimes.length > 0
    ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
    : 0

  // 合并错误数：MonitorContext 的 + 本地计数器
  const errorCount = Math.max(monitorErrorCount, 0)
  const finalCrashCount = Math.max(crashCount, monitorCrashCount)

  return {
    fcp: Math.round(perf.fcp),
    lcp: Math.round(perf.lcp),
    domLoad: Math.round(perf.domLoad),
    loadComplete: Math.round(perf.loadComplete),
    memoryUsed: mem,
    interactionCount,
    avgResponseTime,
    errorCount,
    crashCount: finalCrashCount,
    uptimeMs: Date.now() - startTime,
    lastErrorAge,
    retrySuccessRate,
    levelsWithContent: content.levelsWithContent,
    emptyLessons: content.emptyLessons,
    brokenImages: content.brokenImages,
    // pack28: 学习效果指标默认值（真实值由 AIAgentContext.runLearningValidation 填充）
    testPassRate: 0,
    commonErrorPatterns: 0,
    retryAfterHintRate: 0,
  }
}

/** 重置启动时间（页面加载完成时） */
export function resetStartTime(): void {
  startTime = Date.now()
}

/** 初始化交互监听（在 App 挂载时调用一次） */
export function initInteractionTracking(): () => void {
  const onClick = () => recordInteraction()
  const onInput = () => recordInteraction()
  const onScroll = () => recordInteraction()
  const onError = () => recordError()

  document.addEventListener('click', onClick, { passive: true })
  document.addEventListener('input', onInput, { passive: true })
  document.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('error', onError)

  return () => {
    document.removeEventListener('click', onClick)
    document.removeEventListener('input', onInput)
    document.removeEventListener('scroll', onScroll)
    window.removeEventListener('error', onError)
  }
}
