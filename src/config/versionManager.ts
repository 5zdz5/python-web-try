/**
 * 版本管理系统
 * - 每次迭代发布新版本时，旧版本进度数据被冻结（只读）
 * - 用户可通过版本号入口查看历史版本的进度快照
 * - 登录状态不随版本变化
 */

export interface VersionInfo {
  version: string       // 版本号 e.g. 'v1.0'
  label: string          // 版本名称 e.g. '初始版本'
  date: string           // 发布日期 ISO
  storageKey: string     // 该版本的进度存储key
  frozen: boolean        // 是否已冻结（旧版本为true）
  description?: string   // 版本描述
}

export interface VersionSnapshot {
  version: string
  totalXP: number
  completedLevels: number
  completedLessons: number
  completedChallenges: number
  studyDays: string[]
  activityLogLength: number
  snapshotDate: string
}

// 当前活跃版本（每次迭代更新此值）
export const CURRENT_VERSION = 'v1.1'
export const CURRENT_VERSION_LABEL = '进度保存优化版'
export const CURRENT_VERSION_DESC = '安全存储 + 防抖保存 + 关卡完成逻辑修复'

// 版本注册表 key（全局唯一，不随版本变化）
const REGISTRY_KEY = 'python-quest-version-registry'
// 旧版进度 key（用于迁移）
const LEGACY_PROGRESS_KEY = 'python-quest-progress'
const LEGACY_VERSION_KEY = 'python-quest-progress-version'

// 安全的 localStorage 操作
function safeGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function safeSet(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); return true }
  catch { console.warn('localStorage 写入失败:', key); return false }
}

/** 获取版本的进度存储 key */
export function getVersionStorageKey(version: string): string {
  return `python-quest-progress@${version}`
}

/** 读取版本注册表 */
export function getVersionRegistry(): VersionInfo[] {
  const raw = safeGet(REGISTRY_KEY)
  if (!raw) return []
  try {
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr : []
  } catch { return [] }
}

/** 写入版本注册表 */
function saveVersionRegistry(versions: VersionInfo[]): void {
  safeSet(REGISTRY_KEY, JSON.stringify(versions))
}

/**
 * 初始化版本系统：
 * 1. 如果注册表为空，创建当前版本记录
 * 2. 如果检测到旧版数据（python-quest-progress），冻结并迁移
 * 3. 如果当前版本不在注册表中，将上一版本冻结并添加新版本
 */
export function initVersionSystem(): VersionInfo[] {
  let registry = getVersionRegistry()

  // 首次使用：注册表为空
  if (registry.length === 0) {
    // 检查是否有旧版数据需要迁移
    const legacyData = safeGet(LEGACY_PROGRESS_KEY)
    const legacyVersion = safeGet(LEGACY_VERSION_KEY)

    const newVersion: VersionInfo = {
      version: CURRENT_VERSION,
      label: CURRENT_VERSION_LABEL,
      date: new Date().toISOString(),
      storageKey: getVersionStorageKey(CURRENT_VERSION),
      frozen: false,
      description: CURRENT_VERSION_DESC
    }

    if (legacyData) {
      // 有旧版数据：先创建一个 v1.0 冻结版本
      const frozenVersion: VersionInfo = {
        version: legacyVersion || 'v1.0',
        label: '历史版本',
        date: new Date().toISOString(),
        storageKey: getVersionStorageKey(legacyVersion || 'v1.0'),
        frozen: true,
        description: '从旧版迁移的数据'
      }
      // 把旧数据复制到冻结 key
      safeSet(frozenVersion.storageKey, legacyData)
      registry = [frozenVersion, newVersion]
    } else {
      registry = [newVersion]
    }

    saveVersionRegistry(registry)
    return registry
  }

  // 检查当前版本是否已在注册表中
  const existing = registry.find(v => v.version === CURRENT_VERSION)
  if (existing) {
    // 更新描述等信息
    existing.label = CURRENT_VERSION_LABEL
    existing.description = CURRENT_VERSION_DESC
    saveVersionRegistry(registry)
    return registry
  }

  // 新版本：冻结所有旧版本
  registry.forEach(v => { v.frozen = true })

  // 把当前活跃版本的数据复制到其冻结 key
  const lastActive = registry.find(v => !v.frozen)
  if (lastActive) {
    const currentData = safeGet(lastActive.storageKey) || safeGet(LEGACY_PROGRESS_KEY)
    if (currentData) {
      safeSet(lastActive.storageKey, currentData)
    }
    lastActive.frozen = true
  }

  // 添加新版本
  const newVersion: VersionInfo = {
    version: CURRENT_VERSION,
    label: CURRENT_VERSION_LABEL,
    date: new Date().toISOString(),
    storageKey: getVersionStorageKey(CURRENT_VERSION),
    frozen: false,
    description: CURRENT_VERSION_DESC
  }
  registry.push(newVersion)
  saveVersionRegistry(registry)
  return registry
}

/** 获取当前活跃版本信息 */
export function getCurrentVersionInfo(): VersionInfo | null {
  const registry = getVersionRegistry()
  return registry.find(v => v.version === CURRENT_VERSION && !v.frozen) || null
}

/** 获取指定版本的进度数据（只读） */
export function getVersionProgress(version: string): any | null {
  const registry = getVersionRegistry()
  const info = registry.find(v => v.version === version)
  if (!info) return null

  const data = safeGet(info.storageKey)
  if (!data) return null
  try { return JSON.parse(data) } catch { return null }
}

/** 获取所有版本的快照摘要 */
export function getAllVersionSnapshots(): VersionSnapshot[] {
  const registry = getVersionRegistry()
  return registry.map(info => {
    const data = getVersionProgress(info.version)
    if (!data) {
      return {
        version: info.version,
        totalXP: 0,
        completedLevels: 0,
        completedLessons: 0,
        completedChallenges: 0,
        studyDays: [],
        activityLogLength: 0,
        snapshotDate: info.date
      }
    }
    const levels = data.levels || {}
    const completedLevels = Object.values(levels).filter((l: any) => l?.completed).length
    const completedLessons = Object.values(levels).reduce(
      (sum: number, l: any) => sum + Object.values(l?.lessons || {}).filter((x: any) => x?.completed).length, 0
    )
    const completedChallenges = Object.values(levels).reduce(
      (sum: number, l: any) => sum + Object.values(l?.challenges || {}).filter((x: any) => x?.completed).length, 0
    )
    return {
      version: info.version,
      totalXP: data.totalXP || 0,
      completedLevels,
      completedLessons,
      completedChallenges,
      studyDays: data.studyDays || [],
      activityLogLength: data.activityLog?.length || 0,
      snapshotDate: info.date
    }
  })
}
