export interface Level {
  id: number
  title: string
  subtitle: string
  description: string
  status: 'completed' | 'current' | 'locked'
  difficulty: number
  duration: string
  lessons: number
  challenges: number
  topics: string[]
  side: 'left' | 'right'
}

export interface Lesson {
  id: number
  title: string
  duration: string
  completed: boolean
  type: 'video' | 'reading' | 'interactive'
}

export interface Challenge {
  id: number
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  completed: boolean
}

export interface UserProgress {
  totalLevels: number
  completedLevels: number
  totalXP: number
  currentXP: number
  streak: number
  rank: string
}
