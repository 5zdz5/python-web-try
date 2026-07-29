// 菜鸟教程风格的拓展主题数据
// 用于在关卡详情页展示相关的 Python 生态学习路径
// 按主题分类组织：语言基础、数据结构、Web开发、数据科学、进阶编程、数据库、工具、其他语言、机器学习、金融

export interface RunoobTopic {
  id: string
  name: string
  description: string
  icon: string
  category: 'language' | 'web' | 'data' | 'advanced' | 'tool' | 'finance'
  difficulty: 1 | 2 | 3 | 4 | 5
  unlocked: boolean
  href?: string
}

export const runoobTopics: RunoobTopic[] = [
  // ===== Python 语言基础 =====
  {
    id: 'python3',
    name: '学习 Python 3',
    description: 'Python3 是当前主流 Python 版本。',
    icon: '🐍',
    category: 'language',
    difficulty: 1,
    unlocked: true,
    href: '#/level/1'
  },
  {
    id: 'python2',
    name: '学习 Python 2.x',
    description: 'Python 经典版本（已停止维护）。',
    icon: '🐍',
    category: 'language',
    difficulty: 2,
    unlocked: true
  },
  {
    id: 'python-io',
    name: '输入输出',
    description: '格式化输出、文件读写、标准流。',
    icon: '📝',
    category: 'language',
    difficulty: 2,
    unlocked: true,
    href: '#/level/37'
  },
  {
    id: 'python-basic-syntax',
    name: '基础语法',
    description: '注释、缩进、标识符、关键字。',
    icon: '📖',
    category: 'language',
    difficulty: 1,
    unlocked: true,
    href: '#/level/1'
  },
  {
    id: 'python-data-types',
    name: '数据类型',
    description: '数字、字符串、布尔值、类型转换。',
    icon: '🔤',
    category: 'language',
    difficulty: 1,
    unlocked: true,
    href: '#/level/2'
  },
  {
    id: 'python-operators',
    name: '运算符',
    description: '算术、比较、逻辑、赋值、成员运算符。',
    icon: '➗',
    category: 'language',
    difficulty: 1,
    unlocked: true,
    href: '#/level/2'
  },

  // ===== 数据结构与算法 =====
  {
    id: 'python-list',
    name: '列表 List',
    description: '有序可变序列，索引、切片、常用方法。',
    icon: '📋',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/5'
  },
  {
    id: 'python-tuple',
    name: '元组 Tuple',
    description: '有序不可变序列，解包、遍历。',
    icon: '📐',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/5'
  },
  {
    id: 'python-dict',
    name: '字典 Dict',
    description: '键值对集合，增删改查、遍历、推导式。',
    icon: '📖',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/6'
  },
  {
    id: 'python-set',
    name: '集合 Set',
    description: '无序不重复集合，交并差运算。',
    icon: '🔵',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/6'
  },
  {
    id: 'python-string',
    name: '字符串深入',
    description: '索引切片、常用方法、格式化、编码。',
    icon: '🔤',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/10'
  },
  {
    id: 'python-control-flow',
    name: '条件与循环',
    description: 'if/elif/else、for、while、break/continue。',
    icon: '🔀',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/3'
  },
  {
    id: 'python-function',
    name: '函数',
    description: '定义、参数、返回值、作用域、Lambda。',
    icon: '⚙️',
    category: 'data',
    difficulty: 3,
    unlocked: true,
    href: '#/level/7'
  },
  {
    id: 'collections',
    name: 'collections 库',
    description: 'Counter/deque/defaultdict/namedtuple。',
    icon: '📦',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/21'
  },
  {
    id: 'itertools',
    name: 'itertools 模块',
    description: 'count/cycle/permutations/combinations。',
    icon: '🔄',
    category: 'data',
    difficulty: 3,
    unlocked: true,
    href: '#/level/22'
  },
  {
    id: 'python-iterator-generator',
    name: '迭代器与生成器',
    description: 'iter/next、yield、生成器表达式。',
    icon: '⚡',
    category: 'data',
    difficulty: 4,
    unlocked: true,
    href: '#/level/38'
  },

  // ===== 进阶编程 =====
  {
    id: 'python-oop',
    name: '面向对象',
    description: '类与对象、属性方法、封装、继承。',
    icon: '🏛️',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/12'
  },
  {
    id: 'python-inheritance',
    name: '继承与多态',
    description: '方法重写、super()、抽象类、多态。',
    icon: '🌳',
    category: 'advanced',
    difficulty: 4,
    unlocked: true,
    href: '#/level/13'
  },
  {
    id: 'python-decorator',
    name: '装饰器与闭包',
    description: '@装饰器、闭包、函数式编程。',
    icon: '🎨',
    category: 'advanced',
    difficulty: 4,
    unlocked: true,
    href: '#/level/16'
  },
  {
    id: 'python-exception',
    name: '异常处理',
    description: 'try/except/finally、自定义异常、with。',
    icon: '⚠️',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/14'
  },
  {
    id: 'python-module',
    name: '模块与包',
    description: 'import、自定义模块、包管理、__name__。',
    icon: '📦',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/11'
  },
  {
    id: 'python-stdlib',
    name: '常用标准库',
    description: 'datetime、re、json、collections、itertools。',
    icon: '📚',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/17'
  },
  {
    id: 'regex',
    name: '正则表达式',
    description: '元字符、分组、贪婪/非贪婪、match/search。',
    icon: '🔍',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/20'
  },
  {
    id: 'python-file-io',
    name: '文件与目录',
    description: 'open/read/write、os/os.path、shutil。',
    icon: '📁',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/15'
  },
  {
    id: 'python-json-xml',
    name: 'JSON 与 XML',
    description: 'json 模块、XML ElementTree、pickle。',
    icon: '🔄',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/39'
  },
  {
    id: 'python-multithreading',
    name: '多线程与多进程',
    description: 'threading、GIL、multiprocessing、线程池。',
    icon: '🧵',
    category: 'advanced',
    difficulty: 4,
    unlocked: true,
    href: '#/level/41'
  },
  {
    id: 'python-async',
    name: '异步编程 asyncio',
    description: 'async/await、事件循环、Task、aiohttp。',
    icon: '⚡',
    category: 'advanced',
    difficulty: 5,
    unlocked: true,
    href: '#/level/42'
  },
  {
    id: 'python-testing',
    name: '单元测试 pytest',
    description: 'unittest、pytest、fixture、Mock、覆盖率。',
    icon: '✅',
    category: 'advanced',
    difficulty: 3,
    unlocked: true,
    href: '#/level/43'
  },
  {
    id: 'python-performance',
    name: '内存与性能优化',
    description: 'GC 机制、cProfile、lru_cache、优化实战。',
    icon: '🚀',
    category: 'advanced',
    difficulty: 4,
    unlocked: true,
    href: '#/level/44'
  },

  // ===== Web 开发 =====
  {
    id: 'requests',
    name: 'Requests 网络请求',
    description: 'HTTP GET/POST、Session、Headers、文件上传。',
    icon: '🌐',
    category: 'web',
    difficulty: 2,
    unlocked: true,
    href: '#/level/19'
  },
  {
    id: 'flask',
    name: 'Flask',
    description: '轻量级 Python Web 框架，路由、模板、蓝图。',
    icon: '🌶️',
    category: 'web',
    difficulty: 3,
    unlocked: true,
    href: '#/level/27'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    description: '现代高性能 Python API 框架，Pydantic、依赖注入。',
    icon: '⚡',
    category: 'web',
    difficulty: 4,
    unlocked: true,
    href: '#/level/28'
  },
  {
    id: 'django',
    name: 'Django',
    description: '全功能 Python Web 框架，MTV、ORM、Admin。',
    icon: '🎸',
    category: 'web',
    difficulty: 4,
    unlocked: true,
    href: '#/level/29'
  },
  {
    id: 'scrapy',
    name: 'Scrapy 爬虫',
    description: 'Spider/Item/Pipeline、XPath/CSS 选择器。',
    icon: '🕷️',
    category: 'web',
    difficulty: 5,
    unlocked: true,
    href: '#/level/30'
  },

  // ===== 数据科学 =====
  {
    id: 'numpy',
    name: 'NumPy',
    description: 'ndarray、广播、矩阵运算、线性代数。',
    icon: '🔢',
    category: 'data',
    difficulty: 3,
    unlocked: true,
    href: '#/level/23'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    description: 'DataFrame、CSV/Excel、数据清洗、groupby。',
    icon: '🐼',
    category: 'data',
    difficulty: 4,
    unlocked: true,
    href: '#/level/24'
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    description: '折线图、柱状图、饼图、子图、样式导出。',
    icon: '📊',
    category: 'data',
    difficulty: 2,
    unlocked: true,
    href: '#/level/25'
  },
  {
    id: 'scipy',
    name: 'SciPy',
    description: '线性代数、优化求根、信号处理、统计分布。',
    icon: '🧪',
    category: 'data',
    difficulty: 4,
    unlocked: true,
    href: '#/level/26'
  },
  {
    id: 'dash',
    name: 'Dash',
    description: 'Plotly 组件、Callback、多页仪表盘。',
    icon: '📈',
    category: 'data',
    difficulty: 3,
    unlocked: true,
    href: '#/level/31'
  },

  // ===== 数据库 =====
  {
    id: 'sqlite',
    name: 'Python SQLite',
    description: '内置 sqlite3、CRUD、事务、with 语句。',
    icon: '💾',
    category: 'tool',
    difficulty: 2,
    unlocked: true,
    href: '#/level/40'
  },
  {
    id: 'mysql',
    name: 'Python MySQL',
    description: 'pymysql 连接、CRUD、事务管理。',
    icon: '🗄️',
    category: 'tool',
    difficulty: 3,
    unlocked: true,
    href: '#/level/40'
  },
  {
    id: 'redis',
    name: 'Python Redis',
    description: 'Redis 缓存与 Python 交互、发布订阅。',
    icon: '⚡',
    category: 'tool',
    difficulty: 3,
    unlocked: true
  },

  // ===== 开发工具 =====
  {
    id: 'jupyter',
    name: 'Jupyter Notebook',
    description: 'Markdown、魔法命令、ipywidgets、导出。',
    icon: '📓',
    category: 'tool',
    difficulty: 2,
    unlocked: true,
    href: '#/level/32'
  },
  {
    id: 'pillow',
    name: 'Pillow 图像处理',
    description: '打开保存、像素操作、变换、滤镜、水印。',
    icon: '🖼️',
    category: 'tool',
    difficulty: 2,
    unlocked: true,
    href: '#/level/33'
  },
  {
    id: 'git',
    name: 'Git 版本控制',
    description: '版本控制基础、分支、合并、远程仓库。',
    icon: '🔧',
    category: 'tool',
    difficulty: 2,
    unlocked: true
  },

  // ===== 其他语言 =====
  {
    id: 'r',
    name: 'R 语言入门',
    description: '向量、数据框、dplyr、ggplot2、统计检验。',
    icon: '📐',
    category: 'language',
    difficulty: 3,
    unlocked: true,
    href: '#/level/35'
  },
  {
    id: 'julia',
    name: 'Julia 科学计算',
    description: '多重派发、数组运算、微分方程、性能优化。',
    icon: '🔬',
    category: 'language',
    difficulty: 4,
    unlocked: true,
    href: '#/level/36'
  },

  // ===== 机器学习 =====
  {
    id: 'sklearn',
    name: 'scikit-learn',
    description: '分类、回归、聚类、交叉验证、Pipeline。',
    icon: '🤖',
    category: 'data',
    difficulty: 4,
    unlocked: true
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: '计算图、神经网络、Keras、模型部署。',
    icon: '🧠',
    category: 'data',
    difficulty: 5,
    unlocked: true
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    description: '张量、自动微分、神经网络、GPU 加速。',
    icon: '🔥',
    category: 'data',
    difficulty: 5,
    unlocked: true
  },

  // ===== 金融 =====
  {
    id: 'quant',
    name: '量化交易',
    description: 'K线数据、均线策略、回测、夏普比率。',
    icon: '💹',
    category: 'finance',
    difficulty: 5,
    unlocked: true,
    href: '#/level/34'
  }
]

export const categoryLabels: Record<RunoobTopic['category'], string> = {
  language: '语言基础',
  web: 'Web 开发',
  data: '数据科学',
  advanced: '进阶编程',
  tool: '工具与数据库',
  finance: '金融实战'
}

export const categoryColors: Record<RunoobTopic['category'], string> = {
  language: '#10b981',
  web: '#3b82f6',
  data: '#8b5cf6',
  advanced: '#f97316',
  tool: '#f59e0b',
  finance: '#ef4444'
}