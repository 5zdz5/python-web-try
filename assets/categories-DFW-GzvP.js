const n=`/**
 * 分类地图集中配置
 * 迭代新增主题/分类时，只需修改此文件：
 *   1. 在 LevelCategory 类型中添加新 key
 *   2. 在 CATEGORY_META 中添加元数据
 *   3. 在 CATEGORY_ORDER 中放入顺序
 *
 * 所有消费方（LevelMap / Home / SourceExplorer 等）会自动读取新分类
 */
import type { LevelCategory } from '../types'

export interface CategoryMeta {
  label: string
  icon: string
  color: string
  desc: string
}

/**
 * 8 大分类地图元数据（核心配置）
 * 主题色（color）同时被 LevelMap 主题切换、首页卡片、进度条等复用
 */
export const CATEGORY_META: Record<LevelCategory, CategoryMeta> = {
  basic: {
    label: 'Python 基础',
    icon: '🐍',
    color: '#10b981',
    desc: '语法、变量、循环、函数、数据结构入门'
  },
  advanced: {
    label: 'Python 进阶',
    icon: '🚀',
    color: '#f97316',
    desc: 'OOP、装饰器、异常、标准库、综合实战'
  },
  network: {
    label: '网络与爬虫',
    icon: '🌐',
    color: '#3b82f6',
    desc: 'Requests、正则表达式、Scrapy 爬虫框架'
  },
  'data-science': {
    label: '数据科学',
    icon: '📊',
    color: '#8b5cf6',
    desc: 'NumPy、Pandas、Matplotlib、SciPy'
  },
  web: {
    label: 'Web 开发',
    icon: '⚡',
    color: '#06b6d4',
    desc: 'Flask、FastAPI、Django 全栈框架'
  },
  tools: {
    label: '工具与可视化',
    icon: '🛠️',
    color: '#f59e0b',
    desc: 'Dash 仪表盘、Jupyter、Pillow 图像'
  },
  finance: {
    label: '金融与其他语言',
    icon: '💹',
    color: '#ef4444',
    desc: '量化交易、R 语言、Julia 科学计算'
  },
  system: {
    label: '系统编程',
    icon: '⚙️',
    color: '#6366f1',
    desc: 'IO、迭代器、JSON、数据库、并发、测试、性能'
  }
}

/**
 * 分类显示顺序
 */
export const CATEGORY_ORDER: LevelCategory[] = [
  'basic',
  'advanced',
  'network',
  'data-science',
  'web',
  'tools',
  'finance',
  'system'
]

/**
 * 迭代助手：按分类过滤关卡
 */
export function filterLevelsByCategory<T extends { category: LevelCategory }>(
  all: T[],
  cat: LevelCategory
): T[] {
  return all.filter((l) => l.category === cat)
}

/**
 * 迭代助手：按分类分组关卡
 */
export function groupLevelsByCategory<T extends { category: LevelCategory }>(
  all: T[]
): Record<LevelCategory, T[]> {
  const groups = {} as Record<LevelCategory, T[]>
  for (const cat of CATEGORY_ORDER) groups[cat] = []
  for (const l of all) {
    groups[l.category]?.push(l)
  }
  return groups
}

/**
 * 迭代助手：计算某分类的进度百分比（completed / total）
 */
export function computeCategoryProgressPercent(
  categoryLevels: { id: number }[],
  progressLevels: Record<number, { completed?: boolean }> | undefined
): number {
  if (!categoryLevels.length) return 100
  const completed = categoryLevels.filter((l) => progressLevels?.[l.id]?.completed ?? false)
  return Math.round((completed.length / categoryLevels.length) * 100)
}
`;export{n as default};
