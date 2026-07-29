// 菜鸟教程风格的拓展主题数据
// 用于在关卡详情页展示相关的 Python 生态学习路径

export interface RunoobTopic {
  id: string
  name: string
  description: string
  icon: string
  category: 'language' | 'web' | 'data' | 'tool' | 'finance'
  difficulty: 1 | 2 | 3 | 4 | 5
  unlocked: boolean
  href?: string
}

export const runoobTopics: RunoobTopic[] = [
  // Python 语言本体
  {
    id: 'python3',
    name: '学习 Python 3',
    description: 'Python3 是当前主流 Python 版本。',
    icon: '🐍',
    category: 'language',
    difficulty: 1,
    unlocked: true
  },
  {
    id: 'python2',
    name: '学习 Python 2.x',
    description: 'Python 经典版本（已停止维护）。',
    icon: '🐍',
    category: 'language',
    difficulty: 2,
    unlocked: false
  },
  // Web 框架
  {
    id: 'fastapi',
    name: '学习 FastAPI',
    description: '现代高性能 Python API 框架。',
    icon: '⚡',
    category: 'web',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'flask',
    name: '学习 Flask',
    description: '轻量级 Python Web 应用框架。',
    icon: '🌶️',
    category: 'web',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'django',
    name: '学习 Django',
    description: '全功能 Python Web 开发框架。',
    icon: '🎸',
    category: 'web',
    difficulty: 4,
    unlocked: false
  },
  // 数据科学
  {
    id: 'numpy',
    name: '学习 NumPy',
    description: 'Python 科学计算核心库。',
    icon: '🔢',
    category: 'data',
    difficulty: 2,
    unlocked: false
  },
  {
    id: 'pandas',
    name: '学习 Pandas',
    description: 'Python 数据分析核心库。',
    icon: '🐼',
    category: 'data',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'scipy',
    name: '学习 SciPy',
    description: 'Python 数学与科学计算工具包。',
    icon: '🧪',
    category: 'data',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'matplotlib',
    name: '学习 Matplotlib',
    description: 'Python 数据可视化绘图库。',
    icon: '📊',
    category: 'data',
    difficulty: 2,
    unlocked: false
  },
  {
    id: 'dash',
    name: '学习 Dash',
    description: 'Python 数据分析与可视化 Web 框架。',
    icon: '📈',
    category: 'data',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'jupyter',
    name: '学习 Jupyter Notebook',
    description: '交互式数据分析与计算工具。',
    icon: '📓',
    category: 'tool',
    difficulty: 2,
    unlocked: false
  },
  {
    id: 'pillow',
    name: '学习 Pillow',
    description: 'Python 图像处理库。',
    icon: '🖼️',
    category: 'tool',
    difficulty: 2,
    unlocked: false
  },
  // 量化交易
  {
    id: 'quant',
    name: '量化交易',
    description: '利用程序化策略进行金融交易。',
    icon: '💹',
    category: 'finance',
    difficulty: 4,
    unlocked: false
  },
  // 其他语言
  {
    id: 'r',
    name: '学习 R',
    description: '用于统计分析与数据科学的编程语言。',
    icon: '📐',
    category: 'language',
    difficulty: 3,
    unlocked: false
  },
  {
    id: 'julia',
    name: '学习 Julia',
    description: '面向科学计算的高性能语言。',
    icon: '🔬',
    category: 'language',
    difficulty: 4,
    unlocked: false
  }
]

export const categoryLabels: Record<RunoobTopic['category'], string> = {
  language: '编程语言',
  web: 'Web 框架',
  data: '数据科学',
  tool: '工具',
  finance: '金融'
}

export const categoryColors: Record<RunoobTopic['category'], string> = {
  language: '#10b981',
  web: '#3b82f6',
  data: '#8b5cf6',
  tool: '#f59e0b',
  finance: '#ef4444'
}
