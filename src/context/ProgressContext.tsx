import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { readGist, writeGist } from '../config/github'
import { achievements as allAchievements, AchievementStats } from '../data/achievements'

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
}

const STORAGE_KEY = 'python-quest-progress'
const STORAGE_VERSION = 'v5-unlock-all-18'

const today = () => new Date().toISOString().slice(0, 10)

const defaultProgress: UserProgress = {
  xp: 50,
  totalXP: 500,
  streak: 7,
  studyDays: [today()],
  lastStudyDate: today(),
  levels: {
    1: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    2: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    3: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    4: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    5: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    6: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    7: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    8: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    9: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    10: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    11: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    12: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    13: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    14: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    15: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    16: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    17: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    18: { unlocked: true, completed: false, lessons: {}, challenges: {} }
  },
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

function migrateProgress(saved: any): UserProgress {
  if (!saved || typeof saved !== 'object') return { ...defaultProgress }
  return {
    ...defaultProgress,
    ...saved,
    levels: saved.levels ? { ...defaultProgress.levels, ...saved.levels } : { ...defaultProgress.levels },
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
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      const version = localStorage.getItem(STORAGE_KEY + '-version')
      if (saved && version === STORAGE_VERSION) {
        return JSON.parse(saved)
      } else {
        localStorage.setItem(STORAGE_KEY + '-version', STORAGE_VERSION)
      }
    } catch {}
    return { ...defaultProgress }
  })

  const hasSyncedRef = useRef(false)
  const pendingSyncRef = useRef<NodeJS.Timeout | null>(null)

  // 登录后从 Gist 加载进度
  useEffect(() => {
    if (authLoading) return
    if (!auth || !auth.gistId) {
      setSyncStatus('idle')
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
        hasSyncedRef.current = true
      })
      .catch(err => {
        console.error('加载云端进度失败', err)
        setSyncStatus('error')
        hasSyncedRef.current = true
      })
  }, [auth, authLoading])

  useEffect(() => {
    if (!auth) {
      hasSyncedRef.current = false
      setSyncStatus('idle')
    }
  }, [auth])

  // 本地持久化
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {}

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
          .then(() => setSyncStatus('synced'))
          .catch(err => {
            console.error('上传 Gist 失败', err)
            setSyncStatus('error')
          })
      }, 1500)
    }
  }, [progress, auth, syncStatus])

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

      let next: UserProgress = {
        ...prev,
        levels: {
          ...prev.levels,
          [levelId]: { ...level, lessons: newLessons }
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

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress })
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.setItem(STORAGE_KEY + '-version', STORAGE_VERSION)
    } catch {}
  }, [])

  const manualSync = useCallback(async () => {
    if (!auth || !auth.gistId) return
    setSyncStatus('syncing')
    try {
      await writeGist(auth.token, auth.gistId, {
        progress,
        savedAt: new Date().toISOString(),
        version: STORAGE_VERSION
      })
      setSyncStatus('synced')
    } catch (err) {
      console.error('手动同步失败', err)
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
      manualSync
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
