import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { readGist, writeGist } from '../config/github'
import { achievements as allAchievements, AchievementStats } from '../data/achievements'
import { levels as ALL_LEVELS } from '../data/mockData'
import { initVersionSystem, getVersionStorageKey, CURRENT_VERSION, getCurrentVersionInfo, getPreviousVersionStorageKey, VersionInfo } from '../config/versionManager'

interface LessonProgress {
  completed: boolean
  lastCode?: string
  completedAt?: string
}

interface ChallengeProgress {
  completed: boolean
  lastCode?: string
  completedAt?: string
  attempts: number
}

interface LevelProgress {
  lessons: Record<number, LessonProgress>
  challenges: Record<number, ChallengeProgress>
  unlocked: boolean
  completed: boolean
}

interface UserProgress {
  xp: number
  totalXP: number
  streak: number
  lastStudyDate?: string
  studyDays: string[]
  levels: Record<number, LevelProgress>
  unlockedAchievements: string[]
  claimedAchievements: string[]
  activityLog: ActivityEntry[]
  godMode?: boolean
}

export interface ActivityEntry {
  id: string
  type: 'lesson' | 'challenge' | 'level' | 'achievement' | 'streak'
  title: string
  description: string
  xp?: number
  timestamp: string
  icon: string
}

interface ProgressContextType {
  progress: UserProgress
  stats: AchievementStats
  syncStatus: 'idle' | 'loading' | 'synced' | 'syncing' | 'error'
  syncError: string
  localSaveStatus: 'saved' | 'saving' | 'error'
  lastLocalSave: string | null
  isLessonCompleted: (levelId: number, lessonId: number) => boolean
  isChallengeCompleted: (levelId: number, challengeId: number) => boolean
  isLevelUnlocked: (levelId: number) => boolean
  isLevelCompleted: (levelId: number) => boolean
  isAchievementUnlocked: (achievementId: string) => boolean
  isAchievementClaimed: (achievementId: string) => boolean
  completeLesson: (levelId: number, lessonId: number, code?: string) => void
  completeChallenge: (levelId: number, challengeId: number, xp?: number, code?: string) => void
  claimAchievement: (achievementId: string) => void
  getLessonCode: (levelId: number, lessonId: number) => string | undefined
  getChallengeCode: (levelId: number, challengeId: number) => string | undefined
  saveLessonCode: (levelId: number, lessonId: number, code: string) => void
  saveChallengeCode: (levelId: number, challengeId: number, code: string) => void
  getLevelProgress: (levelId: number) => { completed: number; total: number; percent: number }
  getOverallProgress: () => { completed: number; total: number; percent: number }
  getRecentActivities: (limit?: number) => ActivityEntry[]
  resetProgress: () => void
  manualSync: () => Promise<void>
  forceLocalSave: () => void
  currentVersion: VersionInfo | null
  versionHistory: VersionInfo[]
  godMode: boolean
  toggleGodMode: () => void
}

// 版本化存储：每次迭代使用独立的 key，旧版本数据冻结保留
const LOCAL_SAVE_DEBOUNCE = 300 // 本地保存防抖时间(ms)
// 启动时初始化版本系统，获取当前版本的存储 key
const _versionRegistry = initVersionSystem()
const STORAGE_KEY = getVersionStorageKey(CURRENT_VERSION)
const STORAGE_VERSION = CURRENT_VERSION

const today = () => new Date().toISOString().slice(0, 10)

// 安全的 localStorage 写入，处理 QuotaExceededError 等异常
function safeSetItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value)
    return true
  } catch (e) {
    if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      console.warn('localStorage 存储空间不足，尝试清理旧数据...')
      try {
        // 清理活动日志中的旧数据，保留最近的
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const data = JSON.parse(saved)
          if (data.activityLog && data.activityLog.length > 30) {
            data.activityLog = data.activityLog.slice(0, 30)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
            return true
          }
        }
      } catch {}
    }
    console.error('localStorage 写入失败:', e)
    return false
  }
}

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const defaultProgress: UserProgress = {
  xp: 50,
  totalXP: 500,
  streak: 7,
  studyDays: [today()],
  lastStudyDate: today(),
  levels: buildDefaultLevels(),
  unlockedAchievements: ['first-day'],
  claimedAchievements: [],
  activityLog: [
    {
      id: 'welcome',
      type: 'achievement',
      title: '欢迎来到 Python Quest',
      description: '开始你的编程冒险之旅',
      xp: 10,
      timestamp: new Date().toISOString(),
      icon: '🎉'
    }
  ]
}

/**
 * 迭代适配：从 mockData.levels 自动生成默认关卡进度
 * 新增关卡只需改 mockData，此处会自动补全默认状态
 */
function buildDefaultLevels(): Record<number, LevelProgress> {
  const out: Record<number, LevelProgress> = {}
  for (const lv of ALL_LEVELS) {
    // 默认第 1 关解锁，其余锁
    out[lv.id] = {
      unlocked: lv.id === 1,
      completed: false,
      lessons: {},
      challenges: {}
    }
  }
  return out
}

/**
 * 迭代适配：确保 progress.levels 中包含所有关卡
 * 每次版本升级或从存储载入时调用，避免因新增关卡导致 undefined/缺项
 */
function ensureAllLevelsExist(levels: Record<number, LevelProgress> | undefined): Record<number, LevelProgress> {
  const out: Record<number, LevelProgress> = { ...(levels || {}) }
  for (const lv of ALL_LEVELS) {
    if (!out[lv.id]) {
      out[lv.id] = { unlocked: lv.id === 1, completed: false, lessons: {}, challenges: {} }
    } else {
      // 确保 lessons/challenges 存在（兼容老数据结构缺项）
      out[lv.id] = {
        unlocked: lv.id === 1 ? true : (out[lv.id].unlocked ?? false),
        completed: out[lv.id].completed ?? false,
        lessons: out[lv.id].lessons ?? {},
        challenges: out[lv.id].challenges ?? {}
      }
    }
  }
  return out
}

/**
 * 迭代适配：给整个 UserProgress 做 levels 补全（含字段结构兼容）
 */
function sanitizeProgress(p: any): UserProgress {
  if (!p || typeof p !== 'object') {
    return { ...defaultProgress, levels: buildDefaultLevels() }
  }
  return {
    ...defaultProgress,
    ...p,
    levels: ensureAllLevelsExist(p.levels)
  }
}

function migrateProgress(saved: any): UserProgress {
  if (!saved || typeof saved !== 'object') return { ...defaultProgress, levels: buildDefaultLevels() }
  const mergedLevels = ensureAllLevelsExist({
    ...buildDefaultLevels(),
    ...(saved.levels || {})
  })
  return {
    ...defaultProgress,
    ...saved,
    levels: mergedLevels,
    unlockedAchievements: Array.isArray(saved.unlockedAchievements)
      ? saved.unlockedAchievements
      : defaultProgress.unlockedAchievements,
    claimedAchievements: Array.isArray(saved.claimedAchievements)
      ? saved.claimedAchievements
      : defaultProgress.claimedAchievements,
    activityLog: Array.isArray(saved.activityLog) && saved.activityLog.length > 0
      ? saved.activityLog
      : defaultProgress.activityLog,
    studyDays: Array.isArray(saved.studyDays) ? saved.studyDays : defaultProgress.studyDays
  }
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { auth, isLoading: authLoading } = useAuth()
  const [syncStatus, setSyncStatus] = useState<'idle' | 'loading' | 'syncing' | 'synced' | 'error'>('idle')
  const [syncError, setSyncError] = useState('')
  const [localSaveStatus, setLocalSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved')
  const [lastLocalSave, setLastLocalSave] = useState<string | null>(null)
  const [versionHistory] = useState<VersionInfo[]>(_versionRegistry)
  const currentVersion = useMemo(() => getCurrentVersionInfo(), [])
  const [progress, setProgress] = useState<UserProgress>(() => {
    // 优先从当前版本的存储 key 加载
    const saved = safeGetItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return sanitizeProgress(parsed)
      } catch {}
    }
    // 回退1：尝试上一版本的存储 key 并迁移
    const prevKey = getPreviousVersionStorageKey()
    if (prevKey) {
      const prevData = safeGetItem(prevKey)
      if (prevData) {
        try {
          const migrated = migrateProgress(JSON.parse(prevData))
          // 把迁移后的数据存到当前版本的 key
          safeSetItem(STORAGE_KEY, JSON.stringify(migrated))
          return migrated
        } catch {}
      }
    }
    // 回退2：尝试旧版数据并迁移
    const legacyData = safeGetItem('python-quest-progress')
    if (legacyData) {
      try {
        return migrateProgress(JSON.parse(legacyData))
      } catch {}
    }
    safeSetItem(STORAGE_KEY + '-version', STORAGE_VERSION)
    return sanitizeProgress(defaultProgress)
  })

  const hasSyncedRef = useRef(false)
  const pendingSyncRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const localSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const syncErrorRef = useRef<string>('')

  // 登录后从 Gist 加载进度
  useEffect(() => {
    if (authLoading) return
    if (!auth || !auth.gistId) {
      setSyncStatus('idle')
      hasSyncedRef.current = false
      return
    }
    if (hasSyncedRef.current) return

    setSyncStatus('loading')
    readGist(auth.token, auth.gistId)
      .then(cloud => {
        if (cloud && cloud.progress) {
          setProgress(prev => {
            const merged = migrateProgress(cloud.progress)
            const localXP = prev.totalXP
            const cloudXP = merged.totalXP
            if (localXP > cloudXP) {
              return migrateProgress({ ...merged, ...prev })
            }
            return merged
          })
        }
        setSyncStatus('synced')
        syncErrorRef.current = ''
        hasSyncedRef.current = true
      })
      .catch(err => {
        console.error('加载云端进度失败', err)
        const msg = err instanceof Error ? err.message : String(err)
        syncErrorRef.current = msg
        setSyncStatus('error')
        // 网络问题时允许后续重试（不阻止 hasSyncedRef）
        if (msg.includes('超时') || msg.includes('网络') || msg.includes('Failed to fetch')) {
          hasSyncedRef.current = false
        } else {
          hasSyncedRef.current = true
        }
      })
  }, [auth, authLoading])

  useEffect(() => {
    if (!auth) {
      hasSyncedRef.current = false
      setSyncStatus('idle')
    }
  }, [auth])

  // 本地持久化 - 防抖保存
  useEffect(() => {
    setLocalSaveStatus('saving')

    // 清除之前的定时器
    if (localSaveTimerRef.current) {
      clearTimeout(localSaveTimerRef.current)
    }

    // 防抖：延迟保存，避免频繁写入
    localSaveTimerRef.current = setTimeout(() => {
      const success = safeSetItem(STORAGE_KEY, JSON.stringify(progress))
      if (success) {
        setLocalSaveStatus('saved')
        setLastLocalSave(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
      } else {
        setLocalSaveStatus('error')
      }
    }, LOCAL_SAVE_DEBOUNCE)

    // 登录态 + 已同步过 -> 节流上传 Gist
    if (auth && auth.gistId && hasSyncedRef.current && syncStatus !== 'loading') {
      if (pendingSyncRef.current) clearTimeout(pendingSyncRef.current)
      pendingSyncRef.current = setTimeout(() => {
        setSyncStatus('syncing')
        writeGist(auth.token, auth.gistId!, {
          progress,
          savedAt: new Date().toISOString(),
          version: STORAGE_VERSION
        })
          .then(() => {
            setSyncStatus('synced')
            setSyncError('')
          })
          .catch(err => {
            console.error('上传 Gist 失败', err)
            const msg = err instanceof Error ? err.message : String(err)
            setSyncError(msg)
            setSyncStatus('error')
          })
      }, 1500)
    }
  // 注意：syncStatus 不放入依赖数组，避免 syncing→synced 状态变化触发无限循环
  }, [progress, auth])

  // 立即保存到本地（用于关键操作后强制保存）
  const forceLocalSave = useCallback(() => {
    setLocalSaveStatus('saving')
    if (localSaveTimerRef.current) {
      clearTimeout(localSaveTimerRef.current)
    }
    const success = safeSetItem(STORAGE_KEY, JSON.stringify(progress))
    if (success) {
      setLocalSaveStatus('saved')
      setLastLocalSave(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    } else {
      setLocalSaveStatus('error')
    }
  }, [progress])

  const checkAchievements = useCallback((current: UserProgress) => {
    const completedLessons = Object.values(current.levels).reduce(
      (sum, l) => sum + Object.values(l.lessons).filter(x => x.completed).length, 0
    )
    const completedChallenges = Object.values(current.levels).reduce(
      (sum, l) => sum + Object.values(l.challenges).filter(x => x.completed).length, 0
    )
    const completedLevels = Object.values(current.levels).filter(l => l.completed).length
    const totalLevels = Object.keys(current.levels).length

    const stats: AchievementStats = {
      totalXP: current.totalXP,
      streak: current.streak,
      completedLevels,
      completedLessons,
      completedChallenges,
      perfectChallenges: completedChallenges,
      totalLevels
    }

    const newUnlocked: string[] = []
    for (const ach of allAchievements) {
      if (current.unlockedAchievements.includes(ach.id)) continue
      if (ach.condition(stats)) newUnlocked.push(ach.id)
    }

    if (newUnlocked.length > 0) {
      return { ...current, unlockedAchievements: [...current.unlockedAchievements, ...newUnlocked] }
    }
    return current
  }, [])

  const isLessonCompleted = useCallback((levelId: number, lessonId: number) => {
    return progress.levels[levelId]?.lessons[lessonId]?.completed || false
  }, [progress])

  const isChallengeCompleted = useCallback((levelId: number, challengeId: number) => {
    return progress.levels[levelId]?.challenges[challengeId]?.completed || false
  }, [progress])

  const isLevelUnlocked = useCallback((levelId: number) => {
    if (progress.godMode) return true
    return progress.levels[levelId]?.unlocked || false
  }, [progress])

  const isLevelCompleted = useCallback((levelId: number) => {
    return progress.levels[levelId]?.completed || false
  }, [progress])

  const isAchievementUnlocked = useCallback((achievementId: string) => {
    return progress.unlockedAchievements.includes(achievementId)
  }, [progress])

  const isAchievementClaimed = useCallback((achievementId: string) => {
    return progress.claimedAchievements.includes(achievementId)
  }, [progress])

  const completeLesson = useCallback((levelId: number, lessonId: number, code?: string) => {
    setProgress(prev => {
      const level = prev.levels[levelId] || { unlocked: false, completed: false, lessons: {}, challenges: {} }
      const lesson = level.lessons[lessonId] || { completed: false }
      if (lesson.completed) return prev

      const newLessons = {
        ...level.lessons,
        [lessonId]: {
          ...lesson,
          completed: true,
          lastCode: code || lesson.lastCode,
          completedAt: new Date().toISOString()
        }
      }

      // 检查是否所有 lessons 和 challenges 都已完成
      const allLessonsCompleted = Object.values(newLessons).every(l => l.completed)
      const allChallengesCompleted = Object.values(level.challenges).every(c => c.completed)
      const hasChallenges = Object.keys(level.challenges).length > 0
      const levelCompleted = allLessonsCompleted && (hasChallenges ? allChallengesCompleted : true)

      const nextLevelId = levelId + 1
      const newLevels: Record<number, LevelProgress> = {
        ...prev.levels,
        [levelId]: { ...level, lessons: newLessons, completed: levelCompleted || level.completed }
      }

      if (levelCompleted && !level.completed && prev.levels[nextLevelId]) {
        newLevels[nextLevelId] = {
          ...prev.levels[nextLevelId],
          unlocked: true
        }
      }

      let next: UserProgress = {
        ...prev,
        levels: newLevels
      }

      if (levelCompleted && !level.completed) {
        const activity: ActivityEntry = {
          id: makeId(),
          type: 'level',
          title: `完成第 ${levelId} 关`,
          description: `解锁下一关卡`,
          timestamp: new Date().toISOString(),
          icon: '🎊'
        }
        next = {
          ...next,
          activityLog: [activity, ...next.activityLog].slice(0, 100)
        }
      }

      next = checkAchievements(next)
      return next
    })
  }, [checkAchievements])

  const completeChallenge = useCallback((levelId: number, challengeId: number, xpReward = 10, code?: string) => {
    setProgress(prev => {
      const level = prev.levels[levelId] || { unlocked: false, completed: false, lessons: {}, challenges: {} }
      const challenge = level.challenges[challengeId] || { completed: false, attempts: 0 }
      const wasCompleted = challenge.completed

      const newChallenges = {
        ...level.challenges,
        [challengeId]: {
          ...challenge,
          completed: true,
          lastCode: code || challenge.lastCode,
          completedAt: new Date().toISOString(),
          attempts: challenge.attempts + 1
        }
      }

      const allChallengesCompleted = Object.values(newChallenges).every(c => c.completed)
      const allLessonsCompleted = Object.values(level.lessons).every(l => l.completed)
      const levelCompleted = allChallengesCompleted && allLessonsCompleted

      const nextLevelId = levelId + 1
      const newLevels: Record<number, LevelProgress> = {
        ...prev.levels,
        [levelId]: {
          ...level,
          challenges: newChallenges,
          completed: levelCompleted
        }
      }

      if (levelCompleted && prev.levels[nextLevelId]) {
        newLevels[nextLevelId] = {
          ...prev.levels[nextLevelId],
          unlocked: true
        }
      }

      let next: UserProgress = {
        ...prev,
        xp: wasCompleted ? prev.xp : prev.xp + xpReward,
        totalXP: wasCompleted ? prev.totalXP : prev.totalXP + xpReward,
        levels: newLevels
      }

      if (levelCompleted) {
        const activity: ActivityEntry = {
          id: makeId(),
          type: 'level',
          title: `完成第 ${levelId} 关`,
          description: `解锁下一关卡`,
          timestamp: new Date().toISOString(),
          icon: '🎊'
        }
        next = {
          ...next,
          activityLog: [activity, ...next.activityLog].slice(0, 100)
        }
      }

      next = checkAchievements(next)
      return next
    })
  }, [checkAchievements])

  const claimAchievement = useCallback((achievementId: string) => {
    setProgress(prev => {
      if (!prev.unlockedAchievements.includes(achievementId)) return prev
      if (prev.claimedAchievements.includes(achievementId)) return prev
      const ach = allAchievements.find(a => a.id === achievementId)
      if (!ach) return prev

      const activity: ActivityEntry = {
        id: makeId(),
        type: 'achievement',
        title: `解锁成就：${ach.title}`,
        description: ach.description,
        xp: ach.xpReward,
        timestamp: new Date().toISOString(),
        icon: ach.icon
      }

      return {
        ...prev,
        xp: prev.xp + ach.xpReward,
        totalXP: prev.totalXP + ach.xpReward,
        claimedAchievements: [...prev.claimedAchievements, achievementId],
        activityLog: [activity, ...prev.activityLog].slice(0, 100)
      }
    })
  }, [])

  const getLessonCode = useCallback((levelId: number, lessonId: number) => {
    return progress.levels[levelId]?.lessons[lessonId]?.lastCode
  }, [progress])

  const getChallengeCode = useCallback((levelId: number, challengeId: number) => {
    return progress.levels[levelId]?.challenges[challengeId]?.lastCode
  }, [progress])

  const saveLessonCode = useCallback((levelId: number, lessonId: number, code: string) => {
    setProgress(prev => {
      const level = prev.levels[levelId] || { unlocked: false, completed: false, lessons: {}, challenges: {} }
      const lesson = level.lessons[lessonId] || { completed: false }
      return {
        ...prev,
        levels: {
          ...prev.levels,
          [levelId]: {
            ...level,
            lessons: {
              ...level.lessons,
              [lessonId]: { ...lesson, lastCode: code }
            }
          }
        }
      }
    })
  }, [])

  const saveChallengeCode = useCallback((levelId: number, challengeId: number, code: string) => {
    setProgress(prev => {
      const level = prev.levels[levelId] || { unlocked: false, completed: false, lessons: {}, challenges: {} }
      const challenge = level.challenges[challengeId] || { completed: false, attempts: 0 }
      return {
        ...prev,
        levels: {
          ...prev.levels,
          [levelId]: {
            ...level,
            challenges: {
              ...level.challenges,
              [challengeId]: { ...challenge, lastCode: code }
            }
          }
        }
      }
    })
  }, [])

  const getLevelProgress = useCallback((levelId: number) => {
    const level = progress.levels[levelId]
    if (!level) return { completed: 0, total: 0, percent: 0 }
    const lessons = Object.values(level.lessons)
    const challenges = Object.values(level.challenges)
    const completed = lessons.filter(l => l.completed).length + challenges.filter(c => c.completed).length
    const total = lessons.length + challenges.length
    return {
      completed,
      total,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0
    }
  }, [progress])

  const getOverallProgress = useCallback(() => {
    let totalItems = 0
    let completedItems = 0
    for (const level of Object.values(progress.levels)) {
      totalItems += Object.keys(level.lessons).length + Object.keys(level.challenges).length
      completedItems += Object.values(level.lessons).filter(l => l.completed).length
      completedItems += Object.values(level.challenges).filter(c => c.completed).length
    }
    return {
      completed: completedItems,
      total: totalItems,
      percent: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
    }
  }, [progress])

  const getRecentActivities = useCallback((limit = 10) => {
    return progress.activityLog.slice(0, limit)
  }, [progress])

  const toggleGodMode = useCallback(() => {
    setProgress(prev => {
      const newGodMode = !prev.godMode
      if (newGodMode) {
        // 开启无敌版：解锁所有关卡
        const levels: Record<number, LevelProgress> = {}
        for (const lv of ALL_LEVELS) {
          levels[lv.id] = {
            ...(prev.levels[lv.id] || { lessons: {}, challenges: {} }),
            unlocked: true,
            completed: prev.levels[lv.id]?.completed || false
          }
        }
        return {
          ...prev,
          godMode: true,
          levels,
          activityLog: [
            {
              id: 'godmode-on-' + Date.now(),
              type: 'achievement' as const,
              title: '无敌模式已开启',
              description: '所有关卡已解锁，自由探索！',
              xp: 0,
              timestamp: new Date().toISOString(),
              icon: '⚡'
            },
            ...prev.activityLog
          ]
        }
      } else {
        // 关闭无敌版：恢复按进度解锁（第1关解锁，其余按完成情况）
        const levels: Record<number, LevelProgress> = {}
        for (const lv of ALL_LEVELS) {
          const existing = prev.levels[lv.id] || { lessons: {}, challenges: {} }
          levels[lv.id] = {
            ...existing,
            unlocked: lv.id === 1 || existing.completed
          }
        }
        // 确保已完成关卡的下一关是解锁的（按 ALL_LEVELS id 升序排列处理）
        const sortedIds = ALL_LEVELS.map((l) => l.id).sort((a, b) => a - b)
        for (let i = 0; i < sortedIds.length - 1; i++) {
          const curId = sortedIds[i]
          const nextId = sortedIds[i + 1]
          if (levels[curId]?.completed) {
            levels[nextId].unlocked = true
          }
        }
        return {
          ...prev,
          godMode: false,
          levels,
          activityLog: [
            {
              id: 'godmode-off-' + Date.now(),
              type: 'achievement' as const,
              title: '无敌模式已关闭',
              description: '恢复按进度解锁关卡',
              xp: 0,
              timestamp: new Date().toISOString(),
              icon: '🔒'
            },
            ...prev.activityLog
          ]
        }
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress })
    try {
      localStorage.removeItem(STORAGE_KEY)
      safeSetItem(STORAGE_KEY + '-version', STORAGE_VERSION)
      setLocalSaveStatus('saved')
      setLastLocalSave(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    } catch {}
  }, [])

  const manualSync = useCallback(async () => {
    if (!auth || !auth.gistId) return
    setSyncStatus('syncing')
    setSyncError('')
    try {
      await writeGist(auth.token, auth.gistId, {
        progress,
        savedAt: new Date().toISOString(),
        version: STORAGE_VERSION
      })
      setSyncStatus('synced')
    } catch (err) {
      console.error('手动同步失败', err)
      const msg = err instanceof Error ? err.message : String(err)
      setSyncError(msg)
      setSyncStatus('error')
    }
  }, [auth, progress])

  const stats = useMemo<AchievementStats>(() => {
    const completedLessons = Object.values(progress.levels).reduce(
      (sum, l) => sum + Object.values(l.lessons).filter(x => x.completed).length, 0
    )
    const completedChallenges = Object.values(progress.levels).reduce(
      (sum, l) => sum + Object.values(l.challenges).filter(x => x.completed).length, 0
    )
    const completedLevels = Object.values(progress.levels).filter(l => l.completed).length
    const totalLevels = Object.keys(progress.levels).length
    return {
      totalXP: progress.totalXP,
      streak: progress.streak,
      completedLevels,
      completedLessons,
      completedChallenges,
      perfectChallenges: completedChallenges,
      totalLevels
    }
  }, [progress])

  return (
    <ProgressContext.Provider value={{
      progress,
      stats,
      syncStatus,
      syncError,
      localSaveStatus,
      lastLocalSave,
      isLessonCompleted,
      isChallengeCompleted,
      isLevelUnlocked,
      isLevelCompleted,
      isAchievementUnlocked,
      isAchievementClaimed,
      completeLesson,
      completeChallenge,
      claimAchievement,
      getLessonCode,
      getChallengeCode,
      saveLessonCode,
      saveChallengeCode,
      getLevelProgress,
      getOverallProgress,
      getRecentActivities,
      resetProgress,
      manualSync,
      forceLocalSave,
      currentVersion,
      versionHistory,
      godMode: progress.godMode || false,
      toggleGodMode
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
