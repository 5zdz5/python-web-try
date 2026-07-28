export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'learning' | 'challenge' | 'streak' | 'mastery' | 'special'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  xpReward: number
  condition: (stats: AchievementStats) => boolean
  progress?: (stats: AchievementStats) => { current: number; total: number }
}

export interface AchievementStats {
  totalXP: number
  streak: number
  completedLevels: number
  completedLessons: number
  completedChallenges: number
  perfectChallenges: number
  totalLevels: number
}

export const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: '初出茅庐',
    description: '完成第一个学习步骤',
    icon: '🌱',
    category: 'learning',
    rarity: 'common',
    xpReward: 20,
    condition: (s) => s.completedLessons >= 1,
    progress: (s) => ({ current: Math.min(s.completedLessons, 1), total: 1 })
  },
  {
    id: 'lesson-10',
    title: '勤学不辍',
    description: '完成 10 个学习步骤',
    icon: '📚',
    category: 'learning',
    rarity: 'common',
    xpReward: 50,
    condition: (s) => s.completedLessons >= 10,
    progress: (s) => ({ current: Math.min(s.completedLessons, 10), total: 10 })
  },
  {
    id: 'lesson-50',
    title: '学富五车',
    description: '完成 50 个学习步骤',
    icon: '🎓',
    category: 'learning',
    rarity: 'rare',
    xpReward: 200,
    condition: (s) => s.completedLessons >= 50,
    progress: (s) => ({ current: Math.min(s.completedLessons, 50), total: 50 })
  },
  {
    id: 'first-challenge',
    title: '初战告捷',
    description: '完成第一个编程挑战',
    icon: '🎯',
    category: 'challenge',
    rarity: 'common',
    xpReward: 30,
    condition: (s) => s.completedChallenges >= 1,
    progress: (s) => ({ current: Math.min(s.completedChallenges, 1), total: 1 })
  },
  {
    id: 'challenge-5',
    title: '小试牛刀',
    description: '完成 5 个编程挑战',
    icon: '⚔️',
    category: 'challenge',
    rarity: 'common',
    xpReward: 80,
    condition: (s) => s.completedChallenges >= 5,
    progress: (s) => ({ current: Math.min(s.completedChallenges, 5), total: 5 })
  },
  {
    id: 'challenge-15',
    title: '身经百战',
    description: '完成 15 个编程挑战',
    icon: '🛡️',
    category: 'challenge',
    rarity: 'rare',
    xpReward: 200,
    condition: (s) => s.completedChallenges >= 15,
    progress: (s) => ({ current: Math.min(s.completedChallenges, 15), total: 15 })
  },
  {
    id: 'level-1',
    title: '初窥门径',
    description: '完成第 1 个关卡',
    icon: '🚪',
    category: 'mastery',
    rarity: 'common',
    xpReward: 50,
    condition: (s) => s.completedLevels >= 1,
    progress: (s) => ({ current: Math.min(s.completedLevels, 1), total: 1 })
  },
  {
    id: 'level-half',
    title: '半程英雄',
    description: '完成 50% 的关卡',
    icon: '⭐',
    category: 'mastery',
    rarity: 'rare',
    xpReward: 300,
    condition: (s) => s.completedLevels >= Math.ceil(s.totalLevels / 2),
    progress: (s) => ({ current: Math.min(s.completedLevels, Math.ceil(s.totalLevels / 2)), total: Math.ceil(s.totalLevels / 2) })
  },
  {
    id: 'level-all',
    title: '登峰造极',
    description: '完成所有关卡',
    icon: '👑',
    category: 'mastery',
    rarity: 'legendary',
    xpReward: 1000,
    condition: (s) => s.completedLevels >= s.totalLevels && s.totalLevels > 0,
    progress: (s) => ({ current: Math.min(s.completedLevels, s.totalLevels), total: s.totalLevels })
  },
  {
    id: 'xp-100',
    title: '小有所成',
    description: '累计获得 100 XP',
    icon: '💫',
    category: 'learning',
    rarity: 'common',
    xpReward: 30,
    condition: (s) => s.totalXP >= 100,
    progress: (s) => ({ current: Math.min(s.totalXP, 100), total: 100 })
  },
  {
    id: 'xp-500',
    title: '中流砥柱',
    description: '累计获得 500 XP',
    icon: '✨',
    category: 'learning',
    rarity: 'rare',
    xpReward: 100,
    condition: (s) => s.totalXP >= 500,
    progress: (s) => ({ current: Math.min(s.totalXP, 500), total: 500 })
  },
  {
    id: 'xp-1000',
    title: '登堂入室',
    description: '累计获得 1000 XP',
    icon: '🌟',
    category: 'learning',
    rarity: 'epic',
    xpReward: 250,
    condition: (s) => s.totalXP >= 1000,
    progress: (s) => ({ current: Math.min(s.totalXP, 1000), total: 1000 })
  },
  {
    id: 'streak-3',
    title: '坚持不懈',
    description: '连续学习 3 天',
    icon: '🔥',
    category: 'streak',
    rarity: 'common',
    xpReward: 50,
    condition: (s) => s.streak >= 3,
    progress: (s) => ({ current: Math.min(s.streak, 3), total: 3 })
  },
  {
    id: 'streak-7',
    title: '周周向上',
    description: '连续学习 7 天',
    icon: '🔥',
    category: 'streak',
    rarity: 'rare',
    xpReward: 150,
    condition: (s) => s.streak >= 7,
    progress: (s) => ({ current: Math.min(s.streak, 7), total: 7 })
  },
  {
    id: 'streak-30',
    title: '持之以恒',
    description: '连续学习 30 天',
    icon: '🌋',
    category: 'streak',
    rarity: 'epic',
    xpReward: 500,
    condition: (s) => s.streak >= 30,
    progress: (s) => ({ current: Math.min(s.streak, 30), total: 30 })
  },
  {
    id: 'all-rounder',
    title: '全能选手',
    description: '同时拥有 5 个成就',
    icon: '🏆',
    category: 'special',
    rarity: 'epic',
    xpReward: 300,
    condition: (s) => s.completedLessons >= 5 && s.completedChallenges >= 5 && s.completedLevels >= 1
  },
  {
    id: 'first-day',
    title: '启航',
    description: '欢迎来到 Python Quest',
    icon: '🎉',
    category: 'special',
    rarity: 'common',
    xpReward: 10,
    condition: () => true
  }
]

export const achievementCategories = [
  { id: 'all', label: '全部', icon: '🏆' },
  { id: 'learning', label: '学习', icon: '📚' },
  { id: 'challenge', label: '挑战', icon: '⚔️' },
  { id: 'mastery', label: '精通', icon: '👑' },
  { id: 'streak', label: '连续', icon: '🔥' },
  { id: 'special', label: '特殊', icon: '✨' }
] as const

export const rarityConfig: Record<string, { label: string; color: string; bg: string }> = {
  common: { label: '普通', color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)' },
  rare: { label: '稀有', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
  epic: { label: '史诗', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)' },
  legendary: { label: '传说', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' }
}

export const leaderboardMockData = [
  { rank: 1, name: 'PythonMaster', avatar: 'PM', xp: 2850, streak: 45, levels: 9, color: '#f59e0b' },
  { rank: 2, name: 'CodeWizard', avatar: 'CW', xp: 2340, streak: 32, levels: 8, color: '#a855f7' },
  { rank: 3, name: 'DataDragon', avatar: 'DD', xp: 1980, streak: 28, levels: 8, color: '#3b82f6' },
  { rank: 4, name: 'LoopLegend', avatar: 'LL', xp: 1650, streak: 21, levels: 7, color: '#10b981' },
  { rank: 5, name: 'FunctionFox', avatar: 'FF', xp: 1320, streak: 18, levels: 6, color: '#ec4899' },
  { rank: 6, name: 'SyntaxSage', avatar: 'SS', xp: 1080, streak: 15, levels: 5, color: '#06b6d4' },
  { rank: 7, name: 'BinaryBard', avatar: 'BB', xp: 920, streak: 12, levels: 4, color: '#84cc16' },
  { rank: 8, name: 'RecursionR', avatar: 'RR', xp: 760, streak: 10, levels: 3, color: '#f97316' },
  { rank: 9, name: 'TupleTitan', avatar: 'TT', xp: 540, streak: 8, levels: 2, color: '#8b5cf6' },
  { rank: 10, name: 'StringSlayer', avatar: 'ST', xp: 320, streak: 5, levels: 1, color: '#ef4444' }
]
