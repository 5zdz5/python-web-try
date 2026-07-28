import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

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
  levels: Record<number, LevelProgress>
}

interface ProgressContextType {
  progress: UserProgress
  isLessonCompleted: (levelId: number, lessonId: number) => boolean
  isChallengeCompleted: (levelId: number, challengeId: number) => boolean
  isLevelUnlocked: (levelId: number) => boolean
  isLevelCompleted: (levelId: number) => boolean
  completeLesson: (levelId: number, lessonId: number, code?: string) => void
  completeChallenge: (levelId: number, challengeId: number, xp?: number, code?: string) => void
  getLessonCode: (levelId: number, lessonId: number) => string | undefined
  getChallengeCode: (levelId: number, challengeId: number) => string | undefined
  saveLessonCode: (levelId: number, lessonId: number, code: string) => void
  saveChallengeCode: (levelId: number, challengeId: number, code: string) => void
  getLevelProgress: (levelId: number) => { completed: number; total: number; percent: number }
  resetProgress: () => void
}

const STORAGE_KEY = 'python-quest-progress'

const defaultProgress: UserProgress = {
  xp: 50,
  totalXP: 180,
  streak: 7,
  levels: {
    1: { unlocked: true, completed: true, lessons: {}, challenges: {} },
    2: { unlocked: true, completed: true, lessons: {}, challenges: {} },
    3: { unlocked: true, completed: true, lessons: {}, challenges: {} },
    4: { unlocked: true, completed: false, lessons: {}, challenges: {} },
    5: { unlocked: false, completed: false, lessons: {}, challenges: {} },
    6: { unlocked: false, completed: false, lessons: {}, challenges: {} },
    7: { unlocked: false, completed: false, lessons: {}, challenges: {} },
    8: { unlocked: false, completed: false, lessons: {}, challenges: {} },
    9: { unlocked: false, completed: false, lessons: {}, challenges: {} }
  }
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        return JSON.parse(saved)
      }
    } catch {}
    return defaultProgress
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {}
  }, [progress])

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

      return {
        ...prev,
        levels: {
          ...prev.levels,
          [levelId]: {
            ...level,
            lessons: newLessons
          }
        }
      }
    })
  }, [])

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
      const newLevels = {
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

      return {
        ...prev,
        xp: wasCompleted ? prev.xp : prev.xp + xpReward,
        levels: newLevels
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
              [lessonId]: {
                ...lesson,
                lastCode: code
              }
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
              [challengeId]: {
                ...challenge,
                lastCode: code
              }
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

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }, [])

  return (
    <ProgressContext.Provider value={{
      progress,
      isLessonCompleted,
      isChallengeCompleted,
      isLevelUnlocked,
      isLevelCompleted,
      completeLesson,
      completeChallenge,
      getLessonCode,
      getChallengeCode,
      saveLessonCode,
      saveChallengeCode,
      getLevelProgress,
      resetProgress
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
