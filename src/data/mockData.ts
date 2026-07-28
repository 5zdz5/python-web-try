import { Level, Lesson, Challenge, UserProgress } from '../types'

export const levels: Level[] = [
  {
    id: 1,
    title: '第1关：初见 Python',
    subtitle: '认识 Python 的世界',
    description: '了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。',
    status: 'completed',
    difficulty: 1,
    duration: '约1小时',
    lessons: 5,
    challenges: 3,
    topics: ['Python简介', '环境搭建', '第一个程序', '打印输出'],
    side: 'left'
  },
  {
    id: 2,
    title: '第2关：变量与数据类型',
    subtitle: '掌握数据的存储与运算',
    description: '学习变量、基本数据类型、运算符和类型转换，打下编程基础。',
    status: 'completed',
    difficulty: 1,
    duration: '约1.5小时',
    lessons: 6,
    challenges: 4,
    topics: ['变量', '数字类型', '字符串', '运算符', '类型转换'],
    side: 'right'
  },
  {
    id: 3,
    title: '第3关：条件判断',
    subtitle: '让程序学会思考',
    description: '学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。',
    status: 'completed',
    difficulty: 2,
    duration: '约1.5小时',
    lessons: 5,
    challenges: 5,
    topics: ['if语句', 'else和elif', '比较运算', '逻辑运算', '嵌套条件'],
    side: 'left'
  },
  {
    id: 4,
    title: '第4关：循环结构',
    subtitle: '重复的力量',
    description: '掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。',
    status: 'current',
    difficulty: 2,
    duration: '约2小时',
    lessons: 7,
    challenges: 6,
    topics: ['for循环', 'range()函数', 'while循环', 'break与continue', '循环嵌套'],
    side: 'right'
  },
  {
    id: 5,
    title: '第5关：列表与元组',
    subtitle: '数据的集合',
    description: '学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。',
    status: 'locked',
    difficulty: 2,
    duration: '约2小时',
    lessons: 6,
    challenges: 5,
    topics: ['列表基础', '列表操作', '元组', '切片', '列表推导式'],
    side: 'left'
  },
  {
    id: 6,
    title: '第6关：字典与集合',
    subtitle: '键值的魔法',
    description: '深入学习字典和集合的使用，理解哈希表原理和应用场景。',
    status: 'locked',
    difficulty: 3,
    duration: '约2小时',
    lessons: 6,
    challenges: 5,
    topics: ['字典基础', '字典操作', '集合', '字典推导式', '常用场景'],
    side: 'right'
  },
  {
    id: 7,
    title: '第7关：函数',
    subtitle: '代码的封装与复用',
    description: '学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。',
    status: 'locked',
    difficulty: 3,
    duration: '约2.5小时',
    lessons: 8,
    challenges: 7,
    topics: ['函数定义', '参数类型', '返回值', '作用域', '递归', 'Lambda函数'],
    side: 'left'
  },
  {
    id: 8,
    title: '第8关：文件操作',
    subtitle: '与文件系统交互',
    description: '学习文件的读写、目录操作、异常处理，掌握数据持久化。',
    status: 'locked',
    difficulty: 3,
    duration: '约2小时',
    lessons: 6,
    challenges: 5,
    topics: ['文件读写', '上下文管理器', '目录操作', '异常处理', 'JSON处理'],
    side: 'right'
  },
  {
    id: 9,
    title: '第9关：项目实战',
    subtitle: '综合项目挑战',
    description: '运用所学知识，完成一个完整的Python项目，检验你的学习成果。',
    status: 'locked',
    difficulty: 4,
    duration: '约3小时',
    lessons: 4,
    challenges: 3,
    topics: ['项目规划', '模块化设计', '测试调试', '项目部署'],
    side: 'left'
  }
]

export const currentLevelLessons: Lesson[] = [
  { id: 1, title: 'for 循环基础', duration: '12分钟', completed: true, type: 'video' },
  { id: 2, title: 'range() 函数详解', duration: '15分钟', completed: true, type: 'video' },
  { id: 3, title: '遍历列表与字典', duration: '18分钟', completed: true, type: 'video' },
  { id: 4, title: 'while 循环', duration: '14分钟', completed: true, type: 'video' },
  { id: 5, title: 'break 与 continue', duration: '16分钟', completed: false, type: 'video' },
  { id: 6, title: '循环嵌套', duration: '20分钟', completed: false, type: 'video' },
  { id: 7, title: '实战：打印九九乘法表', duration: '25分钟', completed: false, type: 'interactive' }
]

export const currentLevelChallenges: Challenge[] = [
  { id: 1, title: '计算1到100的和', difficulty: 'easy', completed: true },
  { id: 2, title: '打印三角形图案', difficulty: 'easy', completed: true },
  { id: 3, title: '找出100以内的素数', difficulty: 'medium', completed: false },
  { id: 4, title: '冒泡排序实现', difficulty: 'medium', completed: false },
  { id: 5, title: '猜数字游戏', difficulty: 'medium', completed: false },
  { id: 6, title: '斐波那契数列', difficulty: 'hard', completed: false }
]

export const userProgress: UserProgress = {
  totalLevels: 9,
  completedLevels: 3,
  totalXP: 180,
  currentXP: 50,
  streak: 7,
  rank: '初级冒险者'
}
