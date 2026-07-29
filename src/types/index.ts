// 关卡分类：对应菜鸟教程 Python3 的章节分类
export type LevelCategory =
  | 'basic'         // Python 基础语法
  | 'advanced'      // Python 进阶特性
  | 'network'       // 网络与爬虫
  | 'data-science'  // 数据科学
  | 'web'           // Web 开发
  | 'tools'         // 工具与可视化
  | 'finance'       // 金融与其他语言
  | 'system'        // 系统编程

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
  category: LevelCategory
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

// 经验包类型导出
export type {
  PackMetadata, ModuleCategory, ModuleInfo, ArchitectureOverview, FileTreeNode,
  CodingConvention, DesignPattern, LessonLearned, ReusableComponent,
  ExtensionRoadmap, BuildConstraints, ExperiencePack,
} from './experiencePack'
