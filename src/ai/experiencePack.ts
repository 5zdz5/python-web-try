/**
 * 大模型经验包生成器
 *
 * 设计理念：
 *   每一次提交/重大变更后，调用 generateExperiencePack() 生成一个 JSON 文件。
 *   这个文件是下一个接手项目的 AI 模型的 "30秒快速上手" 包，
 *   它不会教模型写代码，但会告诉模型：
 *     - 代码结构的 "地图"（哪里改什么）
 *     - 项目的 "规矩"（什么不能动，什么必须遵守）
 *     - 历史的 "教训"（踩过什么坑，怎么绕过去）
 *     - 可用的 "零件"（哪些组件可复用，怎么用）
 *     - 下一步的 "方向"（路线图）
 *
 *  在监测仪表盘的 📦 Experience Pack Tab 中点击 "生成经验包"
 *  按钮即可下载 JSON 文件。
 */
import type {
  ExperiencePack, ModuleInfo, CodingConvention, DesignPattern,
  LessonLearned, ReusableComponent, ExtensionRoadmap, BuildConstraints,
  ArchitectureOverview, FileTreeNode, ModuleCategory,
} from '../types/experiencePack'
import { CURRENT_VERSION, CURRENT_VERSION_LABEL, CURRENT_VERSION_DESC } from '../config/versionManager'

// 经验包 schema 版本（升级格式时改这个）
const PACK_SCHEMA_VERSION = '1.0'
// 经验包版本号：每 1 个 commit / 重大变更递增 1
const PACK_BUILD = 4
const PACK_VERSION = `${CURRENT_VERSION}-pack${PACK_BUILD}`

// ========================= 1. 架构总览 =========================
const OVERVIEW: Omit<ArchitectureOverview, 'fileTree'> = {
  totalFiles: 77,
  totalTsFiles: 56,
  totalCssFiles: 21,
  totalLines: 34559,
  totalRoutes: 9,
  totalLevels: 60,
  totalComponents: 13,
  totalContexts: 5,
  totalAIModules: 4,
  // 分层图（从稳定到不稳定）
  layerGraph: [
    'L0. config/versionManager.ts  → 版本号（每次迭代仅修改3个常量）',
    'L1. types/                    → TS 类型（任何模块都可依赖）',
    'L2. config/ github.ts categories.ts  → 配置（仅被 context 依赖）',
    'L3. data/  mockData/lessonContent/runoobTopics  → 纯数据，不依赖 UI',
    'L4. ai/    Optimizer/metrics/experiencePack  → 智能逻辑，不依赖 React',
    'L5. context/  5个 Provider  → 全局状态，被组件消费',
    'L6. components/ 13个  → 可复用组件，被 pages 消费',
    'L7. pages/ 8个  → 页面（最不稳定，路由层）',
  ],
  dependencyDirection: '类型层 ← 数据层 ← 上下文层 ← 组件层 ← 页面层（单向，禁止反向）',
}

// ========================= 2. 功能模块归类 =========================
const MODULES: ModuleInfo[] = [
  // —— Core 核心 ——
  {
    id: 'core-main', category: 'core', name: '入口与启动',
    path: 'src/main.tsx', files: 1, approxLines: 28,
    description: '全局 Provider 组装：ErrorBoundary → Monitor → AIAgent → Auth → Progress → Pyodide → HashRouter → App',
    exports: ['无（渲染入口）'],
    dependsOn: ['ctx-monitor', 'ctx-ai', 'ctx-auth', 'ctx-progress', 'ctx-pyodide', 'comp-errorboundary'],
    dependedBy: [],
    extensionPoints: ['新增全局 Provider 时在此注册，顺序必须先稳定后不稳定'],
    pitfalls: ['Provider 嵌套顺序错误会导致 useContext 报错（外层不能依赖内层）', 'HashRouter 必须在最内层路由组件之外'],
  },
  {
    id: 'core-app', category: 'core', name: '路由与外壳',
    path: 'src/App.tsx', files: 1, approxLines: 37,
    description: '9个路由注册 + Navbar/Main/Footer 外壳 + PatrolButton 全局悬浮',
    exports: ['<App />'],
    dependsOn: ['page-home', 'page-levelmap', 'page-leveldetail', 'page-source', 'page-monitor', 'page-path', 'page-achievements', 'page-leaderboard', 'comp-navbar', 'comp-footer', 'comp-patrol'],
    dependedBy: ['core-main'],
    extensionPoints: ['新增页面 → <Route path="/xxx" element={<XxxPage />}>', '新增全局悬浮组件 → 和 PatrolButton 并列放末尾'],
    pitfalls: ['GitHub Pages 必须用 HashRouter 不能用 BrowserRouter', '所有静态资源路径必须相对或带 base=/python-web-try/'],
  },
  {
    id: 'comp-errorboundary', category: 'core', name: '崩溃错误边界',
    path: 'src/components/ErrorBoundary.tsx', files: 2, approxLines: 180,
    description: 'Class component 级崩溃捕获，白屏时显示 3 按钮恢复界面，通过 window.__monitor* 桥接上报',
    exports: ['<ErrorBoundary>'],
    dependsOn: [],
    dependedBy: ['core-main'],
    extensionPoints: ['崩溃恢复界面样式修改在 ErrorBoundary.css'],
    pitfalls: ['Class component 不能用 useContext，必须通过 window 桥接上报', '必须放最外层（MonitorProvider 之外）否则 Provider 内崩溃无法捕获'],
  },

  // —— Context 全局状态 ——
  {
    id: 'ctx-auth', category: 'context', name: '用户认证',
    path: 'src/context/AuthContext.tsx', files: 1, approxLines: 180,
    description: 'GitHub PAT 登录，用户名/Persist 存储，与 Progress 解耦',
    exports: ['<AuthProvider>', 'useAuth()'],
    dependsOn: ['cfg-github'],
    dependedBy: ['core-main', 'page-home'],
    extensionPoints: ['新增登录方式（如微信）需在 AuthProvider 内扩展'],
    pitfalls: ['GitHub PAT 仅前端存储，生产环境需走后端 OAuth', '不要在其他 Context 中 import useAuth，会循环依赖'],
  },
  {
    id: 'ctx-progress', category: 'context', name: '学习进度',
    path: 'src/context/ProgressContext.tsx', files: 1, approxLines: 720,
    description: '60关解锁/关卡进度/34关全解锁/无敌模式/防抖保存+云同步/版本化存储',
    exports: ['<ProgressProvider>', 'useProgress()'],
    dependsOn: ['cfg-github', 'cfg-version', 'data-mockdata'],
    dependedBy: ['core-main', 'page-levelmap', 'page-leveldetail', 'page-home'],
    extensionPoints: ['新增进度属性 → UserProgress interface + safeSetItem 字段', '新增成就 → data/achievements.ts'],
    pitfalls: ['进度存储 key 版本化（@vX后缀），不可复用老 key 否则缓存污染', 'safeSetItem/safeGetItem 必须用，不要直接调 localStorage'],
  },
  {
    id: 'ctx-pyodide', category: 'context', name: 'Python 解释器',
    path: 'src/context/PyodideContext.tsx', files: 1, approxLines: 150,
    description: '本地 Pyodide 加载（public/pyodide 目录，非 CDN），执行 Python 代码+捕获输出',
    exports: ['<PyodideProvider>', 'usePyodide()'],
    dependsOn: [],
    dependedBy: ['core-main', 'comp-challenge', 'comp-codeeditor'],
    extensionPoints: ['新增 Python 包 → 下载 whl 到 public/pyodide/ 并在 loadPyodide 时加载'],
    pitfalls: ['国内 CDN 加载 Pyodide 必失败（CORS/阻断），必须本地', '.nojekyll 必须存在否则 GitHub Pages MIME 错乱'],
  },
  {
    id: 'ctx-monitor', category: 'monitor', name: '全局监测系统',
    path: 'src/context/MonitorContext.tsx', files: 1, approxLines: 370,
    description: '分层监测组注册+事件流+巡游导航+快照保险+崩溃捕获+报告生成',
    exports: ['<MonitorProvider>', 'useMonitor()'],
    dependsOn: ['types-monitor', 'cfg-version'],
    dependedBy: ['core-main', 'page-monitor', 'comp-patrol', 'comp-errorboundary', 'ctx-ai'],
    extensionPoints: ['新增巡游路由 → PATROL_ROUTES[] 追加一条', '新增监测组 → registerGroup(id, name) + reportHealth()'],
    pitfalls: ['巡游时会修改 location.hash，用户可能看到页面自动跳转', 'createSnapshot 必须在 useEffect 定义之后使用，否则 TDZ（ReferenceError: Cannot access before init）'],
  },
  {
    id: 'ctx-ai', category: 'ai', name: 'AI Agent 自主迭代',
    path: 'src/context/AIAgentContext.tsx', files: 1, approxLines: 500,
    description: '7阶段迭代循环：观察→分析→决策→快照→执行→验证→提交/回溯。16个运行时参数优化，首页保护+崩溃回溯',
    exports: ['<AIAgentProvider>', 'useAIAgent()'],
    dependsOn: ['types-ai', 'ai-optimizer', 'ai-metrics', 'cfg-version', 'ctx-monitor'],
    dependedBy: ['core-main', 'page-monitor', 'comp-aipanel'],
    extensionPoints: ['新增优化策略 → ai/Optimizer.ts STRATEGIES[] 追加', '新增可调参数 → TunableParams + DEFAULT_PARAMS + 14个策略里 apply()'],
    pitfalls: ['runIteration 和 scheduleNext 有循环依赖，必须用 runIterationRef 桥接', '首页保护开启时，/#/ 路由绝不执行变更阶段'],
  },

  // —— Components 组件 ——
  {
    id: 'comp-navbar', category: 'component', name: '顶部导航',
    path: 'src/components/Navbar/', files: 3, approxLines: 250,
    description: 'Logo+8个导航链接+登录状态+同步状态徽章+错误原因提示',
    exports: ['<Navbar />'],
    dependsOn: ['ctx-auth', 'ctx-progress', 'cfg-github'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增导航链接 → links 数组追加'],
    pitfalls: ['同步徽章的网络错误要显示具体原因（超时/Token过期），不要只写"同步失败"'],
  },
  {
    id: 'comp-interactive', category: 'component', name: '交互式课程',
    path: 'src/components/InteractiveLesson/', files: 3, approxLines: 400,
    description: '按步骤导航+步骤指示器+任意步骤跳转+答案对错均可推进+内容渲染',
    exports: ['<InteractiveLesson>'],
    dependsOn: ['ctx-progress', 'data-lessoncontent'],
    dependedBy: ['page-leveldetail'],
    extensionPoints: ['新增步骤类型（如视频、习题）→ 扩展 step.type + 对应渲染分支'],
    pitfalls: ['步骤指示器必须允许点击任意步骤跳转，不能只允许当前/上一步', '答错绝不能阻止用户进入下一步（否则用户卡死）'],
  },
  {
    id: 'comp-challenge', category: 'component', name: '实战挑战区',
    path: 'src/components/ChallengeArena/', files: 3, approxLines: 300,
    description: '挑战Tab+题目列表+代码编辑器集成+运行结果展示',
    exports: ['<ChallengeArena>'],
    dependsOn: ['ctx-pyodide', 'comp-codeeditor', 'data-lessoncontent'],
    dependedBy: ['page-leveldetail'],
    extensionPoints: ['新增判题逻辑 → runCode 之后加断言结果比对'],
    pitfalls: ['空挑战Tab要显示友好文案，不能空白', 'Pyodide 加载失败要显示内联 banner + 重试按钮，不能全屏阻塞'],
  },
  {
    id: 'comp-codeeditor', category: 'component', name: '代码编辑器',
    path: 'src/components/CodeEditor/', files: 3, approxLines: 200,
    description: '极简 textarea 代码输入 + 运行按钮 + 输出面板',
    exports: ['<CodeEditor>'],
    dependsOn: ['ctx-pyodide'],
    dependedBy: ['comp-challenge'],
    extensionPoints: ['可替换为 Monaco Editor'],
    pitfalls: ['不要用 eval 执行 Python，必须走 Pyodide'],
  },
  {
    id: 'comp-patrol', category: 'monitor', name: '巡游悬浮按钮',
    path: 'src/components/PatrolButton.tsx', files: 2, approxLines: 120,
    description: '右下角盾牌图标按钮+进度环+健康指标灯+跳转仪表盘',
    exports: ['<PatrolButton />'],
    dependsOn: ['ctx-monitor'],
    dependedBy: ['core-app'],
    extensionPoints: [],
    pitfalls: ['SVG 进度环 transform="rotate(-90)" 不可丢，否则进度从3点钟开始'],
  },
  {
    id: 'comp-aipanel', category: 'ai', name: 'AI Agent 控制面板',
    path: 'src/components/AIAgentPanel.tsx', files: 2, approxLines: 450,
    description: '状态卡片/评分条/实时指标/迭代决策日志/可调参数/配置/历史/版本快照',
    exports: ['<AIAgentPanel />'],
    dependsOn: ['ctx-ai'],
    dependedBy: ['page-monitor'],
    extensionPoints: ['新增参数面板区块 → 和"可调参数"同结构新增折叠块'],
    pitfalls: ['可调参数展示区不要绑定 input value（只读展示），真正配置在 Agent 内部'],
  },
  {
    id: 'comp-versionhist', category: 'component', name: '版本历史悬浮面板',
    path: 'src/components/VersionHistory/', files: 3, approxLines: 300,
    description: '首页点击版本号弹出版本列表+数据冻结+一键切换回老版本',
    exports: ['<VersionHistory />'],
    dependsOn: ['cfg-version', 'ctx-progress'],
    dependedBy: ['page-home'],
    extensionPoints: [],
    pitfalls: ['老版本数据冻结在独立 storage key（@vX），切换时不要覆盖新版本'],
  },

  // —— Pages 页面 ——
  {
    id: 'page-home', category: 'page', name: '首页',
    path: 'src/pages/Home/', files: 3, approxLines: 300,
    description: '动态统计（关卡/分类/卡片）+ 开始冒险/源码探索 按钮 + 版本号 + 版本历史',
    exports: ['<Home />'],
    dependsOn: ['ctx-progress', 'data-mockdata', 'cfg-categories', 'data-runoob', 'comp-versionhist'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增按钮 → 与现有按钮同级 + <Routes> 注册对应路由'],
    pitfalls: ['统计数据必须动态从数据层算，不能硬编码', '"源码探索"链接必须写死 /source'],
  },
  {
    id: 'page-levelmap', category: 'page', name: '关卡地图',
    path: 'src/pages/LevelMap/', files: 3, approxLines: 400,
    description: '8个分类Tab动态渲染+60关卡片交替布局+无敌模式开关+点击跳转',
    exports: ['<LevelMap />'],
    dependsOn: ['ctx-progress', 'data-mockdata', 'cfg-categories'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增关卡 → 仅需改 data/mockData.ts + lessonContent.ts，UI 自动渲染'],
    pitfalls: ['关卡卡片必须有 onClick 跳 /level/:id，不能只显示不可点击', '无敌模式切换要持久化到 UserProgress.godMode'],
  },
  {
    id: 'page-leveldetail', category: 'page', name: '关卡详情',
    path: 'src/pages/LevelDetail/', files: 3, approxLines: 450,
    description: '关卡元信息+InteractiveLesson+ChallengeArena+Runoob拓展卡片（3种徽章：进入学习/拓展阅读/待解锁）',
    exports: ['<LevelDetail />'],
    dependsOn: ['data-mockdata', 'data-lessoncontent', 'data-runoob', 'comp-interactive', 'comp-challenge', 'ctx-progress'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增拓展教程卡片 → data/runoobTopics.ts 追加'],
    pitfalls: ['runoobTopics 有 href → 绿色"进入学习→"，无href→紫色"📚拓展阅读"，关卡未解锁→"🔒待解锁"，徽章颜色不能搞混', '无效关卡id（如999）要显示提示，不能白屏'],
  },
  {
    id: 'page-source', category: 'page', name: '源码探索文档',
    path: 'src/pages/SourceExplorer/', files: 3, approxLines: 600,
    description: '5 Tab（总览/源码结构/功能清单/核心原理/迁移指南）+ 动态统计 + 结构化文档',
    exports: ['<SourceExplorer />'],
    dependsOn: ['data-projectdocs'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增文档 → data/projectDocs.ts 对应章节追加 + DOC_VERSION + DOC_CHANGES 更新'],
    pitfalls: ['统计数据必须动态计算，不要硬编码（之前有写死17卡片实际76的bug）'],
  },
  {
    id: 'page-monitor', category: 'monitor', name: '监测仪表盘',
    path: 'src/pages/MonitorDashboard/', files: 2, approxLines: 550,
    description: '7 Tab（总览/监测组/源码原理/巡游记录/快照保险/AI Agent/经验包）+ 各子面板',
    exports: ['<MonitorDashboard />'],
    dependsOn: ['ctx-monitor', 'ctx-ai', 'data-sourcecodedata', 'comp-aipanel'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增第8个Tab → tabs[]追加 + 对应 activeTab===xxx 的渲染块'],
    pitfalls: [],
  },
  {
    id: 'page-path', category: 'page', name: '学习路径',
    path: 'src/pages/LearningPath/', files: 3, approxLines: 150,
    description: '展示推荐学习顺序/路径图（占位版，可进一步丰富）',
    exports: ['<LearningPath />'],
    dependsOn: ['data-mockdata'],
    dependedBy: ['core-app'],
    extensionPoints: ['可替换为真实的路径图组件'],
    pitfalls: [],
  },
  {
    id: 'page-achievements', category: 'page', name: '成就',
    path: 'src/pages/Achievements/', files: 3, approxLines: 200,
    description: '成就卡片列表+进度条（占位版）',
    exports: ['<Achievements />'],
    dependsOn: ['data-achievements', 'ctx-progress'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增成就条件判断 → 根据 Progress 的完成度计算'],
    pitfalls: [],
  },
  {
    id: 'page-leaderboard', category: 'page', name: '排行榜',
    path: 'src/pages/Leaderboard/', files: 3, approxLines: 200,
    description: '模拟排行榜（可对接云端 Gist 真实数据）',
    exports: ['<Leaderboard />'],
    dependsOn: [],
    dependedBy: ['core-app'],
    extensionPoints: ['真实排行榜 → 从 Gist 读取所有 Progress 公开数据后排序'],
    pitfalls: [],
  },

  // —— Data 数据层 ——
  {
    id: 'data-mockdata', category: 'data', name: '关卡元数据',
    path: 'src/data/mockData.ts', files: 1, approxLines: 1200,
    description: '60关元信息（id/标题/分类/难度/描述/前置/Tags），LevelMap 和 LevelDetail 的数据源',
    exports: ['LEVELS[]', 'LEVEL_MAP', 'getLevel()'],
    dependsOn: ['cfg-categories'],
    dependedBy: ['page-levelmap', 'page-leveldetail', 'page-home', 'ctx-progress', 'page-path'],
    extensionPoints: ['新增关卡 → 追加 LEVELS[]，同时 lessonContent.ts 里追加对应 id 的内容'],
    pitfalls: ['lessonContent.ts 里必须有对应 id 的课程，否则 LevelDetail 显示空'],
  },
  {
    id: 'data-lessoncontent', category: 'data', name: '课程内容与挑战',
    path: 'src/data/lessonContent.ts', files: 1, approxLines: 12000,
    description: '每关的 lessonSteps[] + challenges[]（最大的数据文件，10k+ 行）',
    exports: ['LESSON_CONTENT', 'getLesson()'],
    dependsOn: [],
    dependedBy: ['page-leveldetail', 'comp-interactive', 'comp-challenge'],
    extensionPoints: ['新增一关内容 → LESSON_CONTENT[id] = { lessonSteps: [...], challenges: [...] }'],
    pitfalls: ['模板字符串内的反引号必须转义（\\`），否则JS语法错', '空课程要给 { lessonSteps: [], challenges: [] }，不能 undefined'],
  },
  {
    id: 'data-runoob', category: 'data', name: '菜鸟教程拓展卡',
    path: 'src/data/runoobTopics.ts', files: 1, approxLines: 400,
    description: '76张拓展卡 + 关卡关联 + 外部href',
    exports: ['RUNOOB_TOPICS[]', 'getTopicsForLevel()'],
    dependsOn: [],
    dependedBy: ['page-leveldetail', 'page-home'],
    extensionPoints: ['新增教程卡 → 追加 RUNOOB_TOPICS[] + levelId 关联关卡编号'],
    pitfalls: [],
  },
  {
    id: 'data-projectdocs', category: 'data', name: '源码探索文档',
    path: 'src/data/projectDocs.ts', files: 1, approxLines: 1200,
    description: 'DOC_VERSION/DOC_LAST_UPDATE/DOC_CHANGES + FILE_TREE/FEATURES/PRINCIPLES/MIGRATION_STEPS',
    exports: ['PROJECT_DOCS{}'],
    dependsOn: [],
    dependedBy: ['page-source'],
    extensionPoints: ['每次代码修改 → 更新 DOC_VERSION + DOC_CHANGES[] 追加 + FILE_TREE + FEATURES'],
    pitfalls: ['DOC_VERSION 和 versionManager.ts CURRENT_VERSION 建议同步（不是强约束）'],
  },
  {
    id: 'data-sourcecodedata', category: 'monitor', name: '源码原理展示',
    path: 'src/data/sourceCodeData.ts', files: 1, approxLines: 600,
    description: '9个核心代码组的 id/源码片段/原理讲解/监测检查',
    exports: ['SOURCE_CODE_ENTRIES[]'],
    dependsOn: [],
    dependedBy: ['page-monitor'],
    extensionPoints: ['新增代码组讲解 → 追加一条'],
    pitfalls: ['源码片段不要放完整实现，保留关键结构+注释即可'],
  },

  // —— AI 层 ——
  {
    id: 'ai-optimizer', category: 'ai', name: '优化策略库 + 评分',
    path: 'src/ai/Optimizer.ts', files: 1, approxLines: 260,
    description: '14个策略（5性能+4UX+5稳定）+ TunableParams 默认值 + 健康度评分 + 策略选择器',
    exports: ['DEFAULT_PARAMS', 'STRATEGIES[]', 'computeScores()', 'selectStrategies()'],
    dependsOn: ['types-ai'],
    dependedBy: ['ctx-ai'],
    extensionPoints: ['新增策略 → STRATEGIES[] 追加，id/name/domain/expectedGain/risk/apply() 必填'],
    pitfalls: ['apply() 必须返回新对象（immutable），不要 in-place 修改 params'],
  },
  {
    id: 'ai-metrics', category: 'ai', name: '运行时指标收集',
    path: 'src/ai/metrics.ts', files: 1, approxLines: 140,
    description: 'Performance API(FCP/LCP) + chrome.memory + DOM 空课程/损坏图片检测 + 交互计数',
    exports: ['collectMetrics()', 'initInteractionTracking()', 'resetCounters()', 'recordXxx()'],
    dependsOn: [],
    dependedBy: ['ctx-ai'],
    extensionPoints: ['新增指标 → ObservedMetrics interface + collectMetrics 里读取'],
    pitfalls: ['只有 chrome 有 performance.memory，其他浏览器返回 0（不报错）'],
  },

  // —— Config 配置 ——
  {
    id: 'cfg-version', category: 'config', name: '版本管理',
    path: 'src/config/versionManager.ts', files: 1, approxLines: 120,
    description: 'CURRENT_VERSION/CURRENT_VERSION_LABEL/CURRENT_VERSION_DESC 三常量，每次迭代改这里，自动冻结旧版本数据',
    exports: ['CURRENT_VERSION', 'VERSION_HISTORY[]', 'getStorageKeyForVersion()'],
    dependsOn: [],
    dependedBy: ['ctx-progress', 'comp-versionhist', 'page-home', 'ctx-ai', 'expack-generator'],
    extensionPoints: ['每次迭代前必改：CURRENT_VERSION + CURRENT_VERSION_DESC + VERSION_HISTORY 追加一条'],
    pitfalls: ['版本号一改就自动换新 storage key，用户进度数据自动迁移，不要手动迁移'],
  },
  {
    id: 'cfg-categories', category: 'config', name: '8个分类元数据',
    path: 'src/config/categories.ts', files: 1, approxLines: 80,
    description: '8个分类 id/中文名/图标/颜色/描述，LevelMap 动态渲染 Tab',
    exports: ['CATEGORIES[]', 'getCategory()'],
    dependsOn: [],
    dependedBy: ['data-mockdata', 'page-levelmap', 'page-home'],
    extensionPoints: ['新增分类 → CATEGORIES[] 追加 + mockData.ts 里有对应 category 的关卡'],
    pitfalls: [],
  },
  {
    id: 'cfg-github', category: 'config', name: 'GitHub API 配置',
    path: 'src/config/github.ts', files: 1, approxLines: 80,
    description: 'GIST_ID / API 超时15s / 指数退避重试2次(2s→4s) / 区分网络错和认证错',
    exports: ['gistSync()', 'GIST_ID', 'GITHUB_CONFIG'],
    dependsOn: [],
    dependedBy: ['ctx-auth', 'ctx-progress'],
    extensionPoints: [],
    pitfalls: ['api.github.com 国内不稳定，绝不能让同步失败阻塞主流程', '错误信息要具体到"网络超时"/"Token过期"，不要只写"同步失败"'],
  },

  // —— Build 构建 ——
  {
    id: 'build-vite', category: 'build', name: 'Vite 配置',
    path: 'vite.config.ts', files: 1, approxLines: 40,
    description: 'React + TS + base=/python-web-try/(GitHub Pages 必带) + Pyodide externalize',
    exports: [],
    dependsOn: [],
    dependedBy: [],
    extensionPoints: [],
    pitfalls: ['base 必须是 /python-web-try/，否则 GitHub Pages 404', 'Pyodide 必须 externalize，不然 Vite 会把 ~30MB 的 node 模块打进 bundle'],
  },
  {
    id: 'build-ghpages', category: 'build', name: 'GitHub Pages 部署',
    path: '.github/workflows/', files: 1, approxLines: 60,
    description: 'Actions: checkout → npm install(不能用ci因为没lock) → npm run build(不能 tsc -b) → deploy到 gh-pages 分支',
    exports: [],
    dependsOn: [],
    dependedBy: [],
    extensionPoints: [],
    pitfalls: ['根目录必须有 .nojekyll 文件（防止 Pages 把 _pyodide 当下划线资源忽略）'],
  },
]

// ========================= 3. 编码约定 =========================
const CONVENTIONS: CodingConvention[] = [
  // 命名
  { category: 'naming', rule: '文件名 PascalCase（组件/页面）或 camelCase（纯逻辑/data/config）',
    description: '组件文件=PascalCase (Home.tsx)，纯逻辑/数据=camelCase (lessonContent.ts, github.ts)',
    goodExample: 'components/Navbar/Navbar.tsx, data/lessonContent.ts, config/categories.ts',
    badExample: 'navbar.tsx（组件）, Lesson-content.ts',
    consequence: '大模型搜文件时快速判断是否是组件',
  },
  { category: 'naming', rule: '组件 default export，Context Provider/Hook named export',
    description: '组件用默认导出方便 Route 使用，Context 的 Provider 和 Hook 命名导出',
    goodExample: 'export default function Home() {} | export function MonitorProvider() {} | export function useMonitor() {}',
    badExample: 'export default useMonitor()（Hook 必须命名导出）',
    consequence: 'import 风格混乱导致大模型找错模块',
  },
  { category: 'naming', rule: 'Context/Provider 文件位置：src/context/XxxContext.tsx，Hook 名 useXxx',
    description: '所有 Context 集中在一个目录，便于一眼找到所有全局状态',
    goodExample: 'context/MonitorContext.tsx + useMonitor()',
  },
  // 结构
  { category: 'structure', rule: '每个组件目录 = {Component}.tsx + {Component}.css + index.ts',
    description: 'css 放旁边，index.ts 做默认导出简化路径',
    goodExample: 'components/Button/Button.tsx + Button.css + index.ts export {default} from Button',
  },
  { category: 'structure', rule: '数据层（data/）绝不 import React / Context / 组件',
    description: '数据是稳定的，不依赖 UI 技术栈。违反则引入循环依赖',
    goodExample: 'data/lessonContent.ts 只 export 纯对象',
    badExample: '在 lessonContent.ts 里 import { useProgress } from ...',
    consequence: '循环依赖 → Vite HMR 爆炸 + 构建偶发 undefined 导入',
  },
  { category: 'structure', rule: 'Context（context/）绝不 import 组件',
    description: 'Context 是底层被组件依赖，反过来直接崩',
    goodExample: 'ctx-ai 只 import ai/* types/* config/*',
    badExample: 'MonitorContext.tsx 里 import PatrolButton.tsx',
  },
  { category: 'structure', rule: 'CSS 与组件同名文件放同目录，不许全局堆 style.css',
    description: '每组件自包含样式，删除组件时直接删除目录即可',
  },
  // 状态
  { category: 'state', rule: 'localStorage 必须包 safeGet/safeSet（try/catch），不要直接 getItem/setItem',
    description: '隐身模式或QuotaExceeded会抛错，直接用白屏',
    goodExample: 'safeSetItem(PROGRESS_KEY, JSON.stringify(x))',
    badExample: 'localStorage.setItem("progress", JSON.stringify(x))',
  },
  { category: 'state', rule: '所有进度/偏好数据 key 必须版本化 @vX，绝不复用老 key',
    description: '复用老 key = 读取到过期 schema → 渲染异常',
    goodExample: 'python-quest-progress@v7-save-optimized',
    badExample: 'progress-data',
    consequence: '浏览器缓存污染，报告 bug 根本无法复现',
  },
  // 错误处理
  { category: 'pattern', rule: '网络请求必须加 15s 超时 + 指数退避重试，错误信息必须具体',
    description: 'GitHub API 在国内 30% 时间超时/失败',
    goodExample: 'timeout:15000, retries:2 (2s→4s), 错误:"网络超时"/"Token过期"',
    badExample: '无超时，catch后只 alert("同步失败")',
    consequence: '用户不知道该怎么办，点一百次没用',
  },
  { category: 'pattern', rule: '任何加载失败/异常必须内联 banner + 重试按钮，绝不能全屏白屏/阻塞',
    description: 'Pyodide 下载慢、Gist 同步失败、代码跑崩等都遵循此原则',
    goodExample: '顶部黄色 banner "Pyodide加载失败，点击重试"',
    badExample: '<Loading>一直转 / alert("崩溃了") 然后卡死',
  },
  // 导入
  { category: 'import', rule: '页面只 import "组件/Context/Data/Config" 4 类，绝不互相 import 其他 page',
    description: 'Page 是最外层不稳定层，互相 import 必然循环依赖',
    goodExample: 'Home.tsx import Button, useProgress, LEVELS',
    badExample: 'Home.tsx import { LevelMap } from ../LevelMap/LevelMap',
  },
  { category: 'import', rule: '循环依赖无解时，从具体路径 import 绕过 src/index.ts barrel',
    description: 'barrel 会扩大循环依赖面，直接从具体文件走',
  },
  // —— pack2 新增：经验包强制规则 ——
  { category: 'pattern', rule: '每次对 Web 的开发（新增功能/修复Bug/重构）第一步必须读取经验包',
    description: '调用 generateExperiencePack() 或打开 /source → 📦 经验包 Tab 读取当前经验包，确认相关模块的 extensionPoints 和 pitfalls 后再动手',
    goodExample: '开发前先读经验包 → 找到目标模块 → 看 extensionPoints/pitfalls → 再改代码',
    badExample: '直接改代码，不读经验包，踩了已记录的坑',
    consequence: '重复踩坑、违反架构分层、破坏已有约定',
  },
  { category: 'pattern', rule: '每次优化（Agent 参数调优 / LLM 功能新增）后必须写入经验包',
    description: '全局调配完成后自动追加 OrchestrationEntry(type="pack-write") 记录，确保经验包始终反映最新状态',
    goodExample: 'Agent 优化 → runGlobalOrchestration → 自动追加 pack-write 条目 → 下次读取时经验包已更新',
    badExample: '优化后不更新经验包 → 下一个模型读到的是过时信息',
    consequence: '经验包过时，后续模型基于错误信息做决策',
  },
  // —— pack3 新增：外部 Skill 驱动的编码约定 ——
  { category: 'anti-slop', rule: 'anti-slop 反默认原则：禁止使用 LLM/框架/库的默认值而不思考，所有配置项必须显式声明',
    description: 'taste-skill 的 anti-slop 检查：AI 模型容易无理由采用默认值（如默认端口3000、默认超时30s、默认颜色blue、默认字体Inter）。所有"可配置项"必须显式写出选择理由，禁止省略=默认。反 slop = 反「偷懒用默认」。',
    goodExample: 'timeout: 15000 /* 选15s而非默认30s：GitHub API国内15s已够，减少用户等待 */',
    badExample: 'timeout: 30000（直接用默认，没理由）；color: blue（直接写默认蓝，不是项目主题色）',
    consequence: '大量默认值叠加=项目无个性=和模板项目没区别=用户无感；且默认值常不适用于国内环境（如30s超时太漫长）',
  },
  { category: 'typography', rule: '字体反默认：禁止使用 Inter 与 Serif 作为项目字体默认栈，必须选择有辨识度的字体组合',
    description: 'taste-skill 字体反默认规则：Inter 是 LLM 最常输出的默认字体（占比>70%），Serif 是系统默认衬线，两者叠加 = 视觉无辨识度。必须根据项目调性选择字体栈：偏技术向用 JetBrains Mono + 思源黑体；偏产品向用 SF Pro / PingFang SC 替代；游戏化项目可用更有个性的字体。本 python-quest 是游戏化学习项目，字体栈必须体现"学习+趣味"而非 Inter 千篇一律。',
    goodExample: 'font-family: "JetBrains Mono", "PingFang SC", "Hiragino Sans GB", sans-serif /* 等宽代码感+苹方中文，适配学习编程场景 */',
    badExample: 'font-family: Inter, system-ui, -apple-system, serif（LLM 直接吐的默认，和 99% 项目撞脸）',
    consequence: '视觉辨识度低→用户记不住→品牌感为零；代码字体默认 sans-serif 也影响代码阅读体验',
  },
  { category: 'color', rule: 'LILA 规则反 AI 紫蓝：禁止使用 LLM 偏好的紫蓝渐变配色，必须用项目既定主题色或非 AI 典型色',
    description: 'LILA = LLM-Induced Lavender Aesthetic（大模型诱导的薰衣草美学）：AI 极爱输出 #7c3aed 紫、#6366f1 靛、#3b82f6 蓝 及其渐变，导致 90% AI 生成项目配色撞脸。本规则禁止在新功能中直接使用这三个紫蓝色号作为主色，必须使用项目 CSS 变量中已定义的 --color-accent-* 系列，或从非典型 AI 调色板（琥珀/青柠/玫红/赭石）中选色。python-quest 已有 8 大分类主题色系统（非紫蓝），新增 UI 必须从现有分类色中派生，不要引入新的 AI 紫蓝。',
    goodExample: 'background: var(--color-accent-primary) /* 用项目已有的非紫蓝主题色；新增Badge从分类色琥珀/青柠/玫红里选 */',
    badExample: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)（典型 AI 紫蓝渐变，直接 LLM 吐出来没改）',
    consequence: '紫蓝撞脸→用户觉得"又是一个AI生成的玩意"→可信度下降；也破坏本项目 8 大分类已有主题色一致性',
  },
]

// ========================= 4. 设计模式 =========================
const PATTERNS: DesignPattern[] = [
  {
    name: 'Context + Provider 全局状态',
    category: 'context',
    filePattern: 'src/context/*Context.tsx',
    where: 'context/MonitorContext.tsx',
    description: 'createContext + <XxxProvider> 包根组件 + useXxx() Hook 获取，所有全局状态都用这个范式',
    whenToUse: '多个页面/组件需要共享状态（登录、进度、监测、AI状态）',
    template:
`// 1. createContext<XxxContextValue | null>(null)
// 2. export function XxxProvider({ children }) { 状态逻辑 setXxx return <Ctx.Provider value>children</Ctx.Provider> }
// 3. export function useXxx() { const ctx = useContext(Ctx); if (!ctx) throw Error; return ctx }`,
  },
  {
    name: '数据驱动 UI（自动渲染）',
    category: 'component',
    filePattern: 'src/pages/LevelMap/LevelMap.tsx, src/pages/Home/Home.tsx',
    where: 'LevelMap 的 8 Tab + 60 关卡片全部从数据层遍历',
    description: '数据数组 map 渲染 UI，新增数据不用改 UI 代码',
    whenToUse: '列表/Tab/卡片/动态菜单等。每次新增"一条数据"场景，绝对不要写死 N 份 JSX',
    template: 'CATEGORIES.map(cat => <Tab key={cat.id}>{cat.name}</Tab>)\nLEVELS.filter(l=>l.cat===active).map(l=><Card key={l.id} onClick=>{...}</Card>)',
  },
  {
    name: 'Class ErrorBoundary + window 桥接',
    category: 'error-handling',
    filePattern: 'src/components/ErrorBoundary.tsx',
    where: 'ErrorBoundary.tsx 和 MonitorContext 的 window.__monitor* 互相调用',
    description: 'Class component 不能用 Hook，通过 useEffect 在 Provider 里把 logEvent 挂到 window，ErrorBoundary 通过 window 上报',
    whenToUse: 'Class 组件需要访问 Context/Hook 的数据时（一般只用于错误边界，因为其他都可改函数组件）',
  },
  {
    name: '版本化 storage key + 数据自动迁移',
    category: 'snapshot',
    filePattern: 'src/config/versionManager.ts getStorageKeyForVersion(), ProgressContext safeSetItem()',
    where: 'ProgressContext 升级版本号时自动从老 key 读数据迁移到新 key',
    description: '改 CURRENT_VERSION 就自动换新 key，第一读时从老 key 迁移，老 key 保留不删（版本历史可回溯）',
    whenToUse: '每次发版、每次用户数据 schema 变更、缓存需要失效时',
  },
  {
    name: '防抖本地保存 + 节流云同步',
    category: 'state',
    filePattern: 'src/context/ProgressContext.tsx saveProgress()',
    where: 'debounce 300ms 写 local + throttle 1.5s 写 Gist，互不干扰',
    description: '用户输入/操作很频繁，local 快速保证不丢，云同步降低频率省请求',
    whenToUse: '双写（本地+云）且两边写频率需求不同的场景',
  },
  {
    name: 'useRef 打破函数循环依赖（TDZ）',
    category: 'state',
    filePattern: 'src/context/AIAgentContext.tsx 第76-80行 runIterationRef',
    where: 'scheduleNext 通过 runIterationRef.current() 调 runIteration，而不是直接引用',
    description: 'scheduleNext 依赖 runIteration、runIteration 又需要 scheduleNext 会 TDZ。把其中一个用 ref 存，在 useEffect 里同步最新值',
    whenToUse: '两个 useCallback 互相依赖导致 ReferenceError: Cannot access xxx before initialization',
  },
  // —— pack3 新增：外部 Skill 设计模式 ——
  {
    name: 'Leonxlnx/taste-skill 三旋钮设计',
    category: 'external-skill',
    filePattern: '外部 Skill: Leonxlnx/taste-skill',
    where: 'taste-skill 配置与调用',
    description: 'taste-skill 通过三个核心旋钮控制代码风格与质量：1) 简洁度旋钮（Compactness）控制代码密度与抽象层级；2) 一致性旋钮（Consistency）强制命名/结构/模式的统一；3) 可读性旋钮（Readability）平衡注释、空行、命名长度。三旋钮独立调节，0-10 档，默认 [7, 8, 6]',
    whenToUse: '需要对代码产出的风格做标准化约束时，特别是多模型/多开发者协作的项目，三旋钮参数写入经验包作为全局 taste 配置',
    template:
`// taste-skill 三旋钮配置（写入项目根 .tasterc 或经验包 meta）
{
  "compactness": 7,   // 0=极啰嗦 10=极度简洁（A+P一行）
  "consistency": 8,   // 0=自由发挥 10=严格对齐约定
  "readability": 6    // 0=无注释极简命名 10=逐行注释长命名
}
// 调用示例：调用 taste-skill lint/fix 时带入旋钮参数
// skill: Leonxlnx/taste-skill action=lint knobs=[7,8,6] path=src/`,
  },
  {
    name: 'pbakaus/impeccable 四模式23命令',
    category: 'external-skill',
    filePattern: '外部 Skill: pbakaus/impeccable',
    where: 'impeccable 工作流编排',
    description: 'impeccable 定义 4 大执行模式 × 23 条原子命令，形成可组合的代码审查与重构工作流。四模式：1) SCAN 扫描模式（6条命令：detect、catalog、classify、prioritize、map、profile）；2) FIX 修复模式（7条命令：correct、refactor、extract、inline、rename、reorder、simplify）；3) VERIFY 验证模式（5条命令：compile、test、diff、benchmark、compare）；4) REPORT 报告模式（5条命令：summarize、visualize、document、changelog、recommend）。共 6+7+5+5=23 条命令',
    whenToUse: '需要系统化的代码审查/重构流水线时，用四模式组合出完整工作流，如 SCAN→FIX→VERIFY→REPORT 标准流程，或 SCAN→REPORT 快速审计',
    template:
`// impeccable 四模式23命令组合 - 标准重构工作流
// Mode 1: SCAN 扫描
//   cmd1 detect   → 扫描问题点
//   cmd2 catalog  → 编目分类
//   cmd3 classify → 严重度分级
//   cmd4 prioritize → 优先级排序
//   cmd5 map      → 影响面映射
//   cmd6 profile  → 性能/复杂度画像
// Mode 2: FIX 修复
//   cmd7 correct  → 修正错误
//   cmd8 refactor → 结构重构
//   cmd9 extract  → 提取抽象
//   cmd10 inline  → 内联合并
//   cmd11 rename  → 重命名
//   cmd12 reorder → 重排顺序
//   cmd13 simplify → 简化逻辑
// Mode 3: VERIFY 验证
//   cmd14 compile → 构建通过
//   cmd15 test    → 测试通过
//   cmd16 diff    → 变更对比
//   cmd17 benchmark → 性能回归
//   cmd18 compare → 前后对比
// Mode 4: REPORT 报告
//   cmd19 summarize → 摘要总结
//   cmd20 visualize → 可视化
//   cmd21 document → 文档更新
//   cmd22 changelog → 变更日志
//   cmd23 recommend → 后续建议`,
  },
  {
    name: 'impeccable 58检测规则集',
    category: 'external-skill',
    filePattern: '外部 Skill: pbakaus/impeccable rules',
    where: 'impeccable SCAN.detect 规则配置',
    description: 'impeccable 的 SCAN.detect 命令内置 58 条静态检测规则，覆盖 6 大类：1) 正确性(15条)：空指针、越界、类型不匹配、未初始化、资源泄漏、异常吞掉等；2) 性能(12条)：O(n²)循环、重复计算、冗余渲染、大对象深拷贝、未防抖节流等；3) 安全(10条)：XSS注入、SQL注入、硬编码密钥、eval危险调用、CORS宽松等；4) 可维护性(11条)：圈复杂度超标、函数过长、嵌套过深、重复代码、魔法数字等；5) 架构分层(5条)：循环依赖、反向依赖、跨层直连、硬编码路径、未隔离IO；6) 约定违反(5条)：命名违规、注释缺失、TODO未清理、console残留、import顺序。总计 15+12+10+11+5+5=58 条',
    whenToUse: '调用 impeccable SCAN 时启用全部 58 条规则，或按类别选择性启用。生成的检测报告与 lessons 联动，将新发现的问题自动追加到经验包 lessons',
    template:
`// impeccable 58检测规则分类统计
// ┌────────────────┬────┬─────────────────────────────────────────┐
// │ 类别           │ 数量│ 代表性规则                                │
// ├────────────────┼────┼─────────────────────────────────────────┤
// │ 正确性 Correct │ 15 │ null-deref, off-by-one, type-mismatch    │
// │ 性能 Perf      │ 12 │ n-squared-loop, redundant-render        │
// │ 安全 Security  │ 10 │ xss-injection, hardcoded-secret          │
// │ 可维护性 Maint │ 11 │ cyclomatic-complexity, long-function     │
// │ 架构 Arch      │  5 │ circular-dep, layer-violation           │
// │ 约定 Conv      │  5 │ naming-violation, console-leftover       │
// └────────────────┴────┴─────────────────────────────────────────┘
// │ 合计           │ 58 │
//
// 调用：skill pbakaus/impeccable mode=SCAN cmd=detect rules=all
// 输出：每个规则命中的文件+行号+严重度+建议修复方案`,
  },
  // —— pack4 新增：监测系统全局适配设计模式 ——
  {
    name: 'reportHealth 自动建组（防御式注册）',
    category: 'monitor',
    filePattern: 'src/context/MonitorContext.tsx reportHealth() L119-134',
    where: 'MonitorContext 健康汇报函数',
    description: '当 reportHealth 接收到未注册的 groupId 时，不应静默丢弃，而应自动用默认值初始化该组再写入状态。这样即使业务页面忘记 registerGroup，巡游或外部上报的健康数据仍能进入监测仪表盘。原 L122 `if (!g) return prev` 是 bug 源头，导致 7 个业务页的健康报告全部丢失',
    whenToUse: '任何允许"先汇报后注册"或"外部模块上报"的健康监测/事件总线系统。在状态写入前用 `const g = prev[groupId] || defaultGroup` 兜底，而不是 return prev 丢弃事件',
    template:
`// ❌ 错误：组不存在就丢弃，巡游 reportHealth 全部静默失败
const reportHealth = (groupId, status, detail) => {
  setGroups(prev => {
    const g = prev[groupId]
    if (!g) return prev   // ← 静默丢弃，监测组永远为空
    return { ...prev, [groupId]: { ...g, status, ... } }
  })
}
// ✅ 正确：组不存在自动建组，数据不丢
const reportHealth = (groupId, status, detail) => {
  setGroups(prev => {
    const g = prev[groupId] || {
      id: groupId, name: groupId, status: 'healthy' as const,
      lastReport: new Date().toISOString(), checks: 0, errors: 0,
    }
    return { ...prev, [groupId]: { ...g, status, detail,
      lastReport: new Date().toISOString(), checks: g.checks + 1,
      errors: status === 'error' || status === 'crashed' ? g.errors + 1 : g.errors,
    }}
  })
}`,
  },
  {
    name: '巡游三态检测（白屏/缺件/正常）',
    category: 'monitor',
    filePattern: 'src/context/MonitorContext.tsx runPatrolChecks() L273-322',
    where: 'MonitorContext 自动巡游逻辑',
    description: '巡游检测不能只看 body.innerText 长度 > 50 字符（只能发现白屏），必须统计关键 DOM 元素：h1+h2 标题数、button 按钮数、img 图片数、card 卡片数。三态判定：1) 白屏 = 正文 <50 字 → error；2) 有内容但任一关键元素为 0 → warning；3) 全部达标 → healthy。详情附带实际统计值便于定位问题页',
    whenToUse: '所有自动巡游/健康检查机器人。比白屏检测更进一步，能发现"页面渲染了但关键组件没挂载"的功能性 bug，如 LevelMap 卡片没渲染、Achievements 徽章没显示等',
    template:
`// 巡游三态检测模板
const bodyText = document.body?.innerText || ''
const headingCount = document.querySelectorAll('h1, h2').length
const buttonCount = document.querySelectorAll('button, [role="button"], .btn').length
const imgCount = document.querySelectorAll('img').length
const cardCount = document.querySelectorAll('[class*="card"], [class*="Card"]').length
const hasContent = bodyText.trim().length > 50

if (!hasContent) {
  reportHealth(groupId, 'error', \`页面白屏：正文 \${bodyText.length} 字符\`)
} else if (headingCount === 0 || buttonCount === 0 || cardCount === 0) {
  reportHealth(groupId, 'warning',
    \`关键元素偏低：h1+h2=\${headingCount} button=\${buttonCount} img=\${imgCount} card=\${cardCount}\`)
} else {
  reportHealth(groupId, 'healthy',
    \`页面正常：h1+h2=\${headingCount} button=\${buttonCount} img=\${imgCount} card=\${cardCount}\`)
}`,
  },
  {
    name: '业务页面 useEffect 主动注册监测组',
    category: 'monitor',
    filePattern: 'src/pages/{Home,LevelMap,LevelDetail,LearningPath,Achievements,Leaderboard,SourceExplorer}/*.tsx',
    where: '每个业务页面组件挂载时',
    description: '7 个业务页面在 useEffect 中通过 useMonitor().registerGroup(id, name, sourceFile) 主动注册自己到监测系统。registerGroup 幂等（重复注册不覆盖），sourceFile 参数便于在监测面板快速跳转源码。配合 reportHealth 自动建组能力，形成"注册-汇报"完整闭环。注册时机：组件挂载后立即注册，不等巡游触发',
    whenToUse: '所有业务页面（不只是路由级页面，复杂子组件也可注册）。最佳实践是在页面组件开头加一个 useEffect 调用 registerGroup，3 行代码完成接入',
    template:
`import { useMonitor } from '../../context/MonitorContext'
import { useEffect } from 'react'

function LevelMap() {
  const { registerGroup } = useMonitor()
  useEffect(() => {
    registerGroup('LevelMap', '关卡地图', 'src/pages/LevelMap/LevelMap.tsx')
  }, [registerGroup])
  // ...
}`,
  },
  {
    name: '监测系统三层覆盖：JS 错误 + React 错误 + 巡游检测',
    category: 'monitor',
    filePattern: 'src/context/MonitorContext.tsx (window.onerror/unhandledrejection) + src/components/ErrorBoundary.tsx + MonitorContext.runPatrolChecks()',
    where: '全局错误捕获 + React 错误边界 + 自动巡游',
    description: '监测系统必须三层覆盖才能保证"全站"覆盖：1) 第一层 JS 层 — window.onerror + window.addEventListener("unhandledrejection") 捕获所有未 catch 的 Promise reject 与同步异常，挂载在 MonitorProvider 最外层 useEffect；2) 第二层 React 层 — ErrorBoundary 类组件包裹整棵树，componentDidCatch 捕获渲染异常并 logEvent("crash")；3) 第三层 巡游层 — runPatrolChecks 自动遍历 7 业务页 + 404 + 无效关卡路由，对每个页面调用 reportHealth。三层互补：JS 层抓同步/Promise 错误但抓不到 React 渲染错误；ErrorBoundary 抓渲染错误但抓不到 useEffect 中的异步错误；巡游层在功能层面验证"页面真的渲染出了该有的内容"',
    whenToUse: '任何需要"全站监测"的中大型 SPA 项目。三层缺一不可，否则会漏：只有 JS 层会漏渲染错误，只有 ErrorBoundary 会漏异步错误，只有巡游会漏"没崩但功能没渲染"的隐性故障',
  },
  {
    name: '监测仪表盘 6 Tab 结构',
    category: 'monitor',
    filePattern: 'src/pages/MonitorDashboard/MonitorDashboard.tsx',
    where: '/#/monitor 路由的 6 个标签页',
    description: '监测仪表盘采用 6 Tab 结构组织监测信息：1) 总览 — 4 个状态卡（healthy/warning/error/crashed）+ 巡游进度条；2) 监测组 — 7 个业务页 + 404 + 无效关卡；3) 事件流 — 时间倒序的所有事件（info/warning/error/crash）；4) 快照 — localStorage 版本快照，可恢复/删除/标记稳定；5) AI Agent — 自主优化代理控制面板（启动/暂停/重置/清缓存）；6) 经验包 — JSON 下载与可视化。6 Tab 把"看状态、查事件、做修复、存证据、改代码"全流程串起来',
    whenToUse: '需要把"监控-诊断-修复-记录"闭环呈现给用户的运维/治理型界面。Tab 数量保持在 6-8 之间，太多会让用户迷失',
  },
  {
    name: '主题系统与监测系统的解耦：CSS 变量优先于硬编码色',
    category: 'design',
    filePattern: 'src/context/ThemeContext.tsx + src/context/MonitorContext.tsx',
    where: '所有 UI 组件',
    description: '主题系统通过 ThemeContext 注入 documentElement.style 的 CSS 变量（--color-accent-primary 等），监测系统自身不读硬编码色，所有 UI（监测仪表盘、AI Agent 面板、经验包面板）全部走 var(--color-accent-primary) 等变量。这样切换主题时监测界面也跟着变色，而不是被锁定在某个固定配色。taste-skill 的 LILA 规则要求"反 AI 紫蓝默认"，主题系统让"反紫蓝"成为可配置项而非硬编码',
    whenToUse: '所有有主题切换需求的 UI 组件，特别是工具型/治理型界面（监控、设置、调试面板）。不要在组件 CSS 里写 #c4ff00，要写 var(--color-accent-primary)',
  },
  {
    name: '关卡页面三层数据：地图 → 详情 → 课程',
    category: 'content',
    filePattern: 'src/pages/LevelMap/LevelMap.tsx + src/pages/LevelDetail/LevelDetail.tsx + src/data/levels.ts',
    where: '关卡系统的内容架构',
    description: '关卡内容采用三层数据结构：1) LevelMap 地图层 — 9 个关卡节点 + 路径连线，每个节点 onClick 跳转详情；2) LevelDetail 详情层 — 单个关卡的元数据（标题/描述/难度/预估时长）+ 视频播放器 + 编码挑战 + 进度记录；3) Course 课程层 — levels.ts 中每个关卡对象包含 id/title/description/difficulty/estimatedTime/videoUrl/challenges/lessons[]。三层用 useParams 解析 :levelId，用 useNavigate 跳转。进度数据存 ProgressContext，按关卡 id 维度记录完成情况',
    whenToUse: '所有"地图导航 → 详情页 → 课程学习"型教育/游戏化网站。数据集中在 data/ 下，页面只负责展示与交互，不持有源数据',
  },
]

// ========================= 5. 历史教训（来自 project_memory.md + 之前迭代） =========================
const LESSONS: LessonLearned[] = [
  {
    id: 'L-ghpages-cors', date: '2026-07-29', category: 'deployment',
    title: 'Vercel *.vercel.app 国内不稳定 + Pyodide CDN CORS 必失败',
    problem: '最开始用 Vercel 部署，国内用户 40% 打不开；Pyodide 走 unpkg/jsdelivr 一直报 CORS 错或超时',
    rootCause: '海外 CDN 在大陆被墙或 DNS 污染；Vercel.app 同样被污染',
    solution: '切到 GitHub Pages；Pyodide 下载整个包放到 public/pyodide/ 本地加载；Actions 里做下载重试 + 多镜像源',
    steps: ['1. public/pyodide/ 放完整 Pyodide', '2. vite.config 把 pyodide 设为 external', '3. 根目录 .nojekyll 文件防止 Pages 忽略下划线目录'],
    verification: '国内手机不开代理直接打开首页，控制台无 CORS 错误，Pyodide 10s 内加载完成',
    relatedFiles: ['vite.config.ts', 'context/PyodideContext.tsx', '.github/workflows/', '.nojekyll'],
  },
  {
    id: 'L-cache-pollution', date: '2026-07-29', category: 'pitfall',
    title: 'localStorage 缓存污染：版本号不改 = 用户永远看到旧数据',
    problem: '第10次迭代发现用户一直显示只有18关，但实际已经扩展到34→60；同步一直失败说 schema 错',
    rootCause: 'progress storage key 复用旧名称，浏览器读到旧结构',
    solution: '所有进度相关 key 加 @vX 后缀，每次改 schema/功能大幅变更必升级版本号，新版本读 key 时自动从最近老 key 迁移',
    steps: ['1. 改 ProgressContext 里 STORAGE_KEY 增加后缀', '2. 启动时先读新 key → 没读到则 fallback 最近老 key 并迁移 → 写新 key'],
    verification: '新老版本号交替切一遍，每边数据独立但可以迁移；清缓存后恢复默认',
    relatedFiles: ['config/versionManager.ts', 'context/ProgressContext.tsx'],
  },
  {
    id: 'L-firebase-blocked', date: '2026-07-29', category: 'constraint',
    title: 'Firebase Auth + Firestore 国内完全不可用',
    problem: '最初方案用 Firebase Auth 登录 + Firestore 云存，大陆用户 100% 加载失败（30s 超时）',
    rootCause: 'Google Firebase 服务被封',
    solution: '切到 GitHub PAT 登录 + Gist 云存。Gist ID 公开读、PAT 带 scope=gist 可写',
    steps: ['1. 用户 GitHub → Settings → Developer settings → Personal access tokens → 勾选 gist', '2. PAT 存 localStorage', '3. Gist 单文件存 JSON 字符串，每次 save 覆盖写'],
    verification: 'GitHub 开 PAT + 输入，保存成功，刷新后还在；换设备登同一账号数据同步',
    relatedFiles: ['config/github.ts', 'context/AuthContext.tsx', 'context/ProgressContext.tsx'],
  },
  {
    id: 'L-docs-hardcode-bug', date: '2026-07-29', category: 'fix',
    title: '源码探索页统计写死导致和实际数据对不上（17 vs 76）',
    problem: 'SourceExplorer 首页显示"17张拓展卡"，但实际 runoobTopics 已经扩展到76张',
    rootCause: '统计数字是硬编码在 projectDocs.ts 的，数据文件改了没人同步更新文档',
    solution: 'SourceExplorer 统计值动态计算（LEVELS.length、CATEGORIES.length、RUNOOB_TOPICS.length）或在 docs/ 里加注释标记"每次追加数据时请同步改"',
    steps: ['1. 统计项不要写死，改为数组.length 计算', '2. 若写死则在数据文件顶部 comment 里写上"追加时同步更新 projectDocs.ts 第 X 行"'],
    verification: '数据数组追加 1 条 → 源码探索页对应统计值自动 +1，无需改其他代码',
    relatedFiles: ['pages/SourceExplorer/SourceExplorer.tsx', 'data/projectDocs.ts'],
  },
  {
    id: 'L-lesson-backtick', date: '2026-07-29', category: 'fix',
    title: 'lessonContent.ts 里 Python 反引号炸语法',
    problem: 'lessonContent.ts 第 2915 行语法错：模板字符串里有 Python f-string 的 `{xxx}` 没转义，整页白屏',
    rootCause: 'TSX/TS 里 `${...}` 被解释成插值，Python 的反引号内容必须 \\` 转义',
    solution: '所有课程代码块的反引号前加反斜杠，或直接用非反引号的 Python 字符串示例',
    steps: ['1. Grep lessonContent.ts 找 "`" 反引号不在开头/结尾的位置逐个检查', '2. Python 里用单引号代替反引号避免转义'],
    verification: 'npm run build 无语法错误，构建成功',
    relatedFiles: ['data/lessonContent.ts'],
  },
  {
    id: 'L-runoob-badge', date: '2026-07-29', category: 'fix',
    title: 'Runoob 卡片 3 种徽章颜色/文字混淆',
    problem: '有 href/无 href/未解锁 三种卡片之前都显示同一种绿色"进入学习"，用户点不进去很困惑',
    rootCause: 'LevelDetail 的 badge 判断条件缺失',
    solution: '3 种明确分：href 存在 → 绿色"进入学习 →"；href 不存在 → 紫色"📚拓展阅读"；level 未解锁或 runoob.levelId > unlocked →"🔒待解锁"',
    steps: ['1. 三目嵌套先判未解锁 → 再判 href 存在 → 最后是拓展阅读', '2. LevelDetail.css 三种对应类名'],
    verification: '点开未解锁关卡、已解锁有href、已解锁无href 的各一个关卡，检查颜色文字均不同',
    relatedFiles: ['pages/LevelDetail/LevelDetail.tsx', 'pages/LevelDetail/LevelDetail.css'],
  },
  {
    id: 'L-tdz-monitor-ctx', date: '2026-07-29', category: 'pitfall',
    title: 'MonitorContext 中 createSnapshot 在 useEffect 前定义 → TDZ 崩溃',
    problem: 'useEffect 依赖 restoreSnapshot，但 restoreSnapshot 是 useEffect 下面的 useCallback，报错 ReferenceError: Cannot access "restoreSnapshot" before initialization',
    rootCause: 'JS TDZ：const 变量的 useCallback 定义在引用它的 useEffect 之后',
    solution: '把 createSnapshot/restoreSnapshot 的 useCallback 挪到 window.onerror 的 useEffect 之前定义，或用 useRef 桥接',
    steps: ['1. 所有 useEffect 依赖的 useCallback/useState/setter，必须放在 useEffect 之前的代码行', '2. 若互相依赖，用 PATTERNS 里的 useRef 打破循环'],
    verification: 'npm run build 无 ReferenceError，页面打开后控制台无该报错',
    relatedFiles: ['context/MonitorContext.tsx', 'context/AIAgentContext.tsx'],
  },
  {
    id: 'L-api-sync-fail-banner', date: '2026-07-29', category: 'fix',
    title: '"同步失败"必须告诉用户是超时还是 Token 过期',
    problem: '之前同步失败只 alert("同步失败")，用户不知道是网络问题该重试还是 Token 过期该重新登录',
    rootCause: 'catch 分支没细分类错误',
    solution: 'github.ts 区分：AbortError/超时 → 显示"网络超时，将自动重试"/401 → "Token已过期，请重新登录"/其他 → 显示错误.message',
    steps: ['1. fetch 封装里对 response.status 判断', '2. AbortSignal timeout 抛出的是 DOMException name="TimeoutError"，单独捕获'],
    verification: '故意断网 → 提示网络超时；故意填错 PAT → 提示 Token 过期',
    relatedFiles: ['config/github.ts', 'components/Navbar/Navbar.tsx', 'context/ProgressContext.tsx'],
  },
  // —— pack2 新增：全局调配 + 经验包集成 ——
  {
    id: 'L-pack-in-source', date: '2026-07-30', category: 'fix',
    title: '经验包必须集成到源码探索页面（/source）',
    problem: '经验包原来只挂在监测仪表盘（/monitor）的 Tab 里，用户从首页「源码探索」按钮进入的页面看不到经验包',
    rootCause: '经验包面板只集成到了 MonitorDashboard，SourceExplorer 页面缺少对应 Tab',
    solution: '在 SourceExplorer.tsx 的 tabs 数组末尾新增 { id: "experience", label: "经验包", icon: "📦" } Tab，渲染 ExperiencePackPanel 组件',
    steps: ['1. SourceExplorer.tsx 的 Tab 类型加 "experience"', '2. tabs 数组末尾追加经验包 Tab', '3. 在 Tab 内容区渲染 <ExperiencePackPanel />'],
    verification: '从首页点「源码探索」→ 能看到「📦 经验包」Tab → 点击后显示完整经验包面板+下载按钮',
    relatedFiles: ['pages/SourceExplorer/SourceExplorer.tsx', 'components/ExperiencePackPanel.tsx'],
  },
  {
    id: 'L-global-orchestration', date: '2026-07-30', category: 'constraint',
    title: 'AI Agent 必须具备全局调配功能（有按钮入口）',
    problem: '原 Agent 只能在监测仪表盘内做参数级优化，无法协调 LLM 功能新增与 Agent 自优化之间的全局适配',
    rootCause: '缺少一个统一的「全局调配」入口来编排：读经验包 → 分析 → 适配 → 写回经验包',
    solution: '在 AIAgentPanel 添加「🌐 全局调配」按钮，点击后执行：1)读取经验包 2)分析当前4领域状态 3)协调优化策略 4)记录适配条目 5)写入经验包',
    steps: [
      '1. types/ai.ts 新增 GlobalOrchestrationState + OrchestrationEntry 类型',
      '2. AIAgentContext 添加 orchestration 状态 + runGlobalOrchestration 函数',
      '3. AIAgentPanel 添加「🌐 全局调配」按钮 + 调配记录面板',
      '4. 每次调配完成后自动追加 OrchestrationEntry 到记录列表',
    ],
    verification: '监测仪表盘 → AI Agent Tab → 看到「🌐 全局调配」按钮 → 点击后产生调配记录 → 记录可在面板查看',
    relatedFiles: ['types/ai.ts', 'context/AIAgentContext.tsx', 'components/AIAgentPanel.tsx'],
  },
  {
    id: 'L-mandatory-pack-read', date: '2026-07-30', category: 'constraint',
    title: '每次对 Web 的开发都必须先读取经验包',
    problem: '新模型/开发者直接改代码而不读经验包，导致重复踩坑、违反约定、破坏架构分层',
    rootCause: '没有强制性的「开发前先读经验包」规则',
    solution: '在经验包的 quickstartForLLM 和 conventions 中明确写入：任何对 python-quest 的开发（新增功能/修复Bug/重构），第一步必须是调用 generateExperiencePack() 或打开 /source → 经验包 Tab 读取当前经验包',
    steps: ['1. quickstartForLLM Step 0 改为「先读经验包」', '2. conventions 新增 mandatory-pack-read 规则', '3. preCommitChecklist 加「确认已读经验包」'],
    verification: '新模型接手时，Step 0 即为读取经验包；preCommitChecklist 第1项为「已读取最新经验包」',
    relatedFiles: ['ai/experiencePack.ts'],
  },
  {
    id: 'L-pack-auto-write', date: '2026-07-30', category: 'constraint',
    title: '每次优化都必须写入经验包',
    problem: 'Agent 优化或 LLM 新增功能后不更新经验包，导致下一次开发时经验包过时',
    rootCause: '缺少「优化后写入经验包」的自动机制',
    solution: '全局调配完成后，自动追加 OrchestrationEntry(type="pack-write") 记录，并将变更摘要写入经验包的 lessons/roadmap',
    steps: ['1. runGlobalOrchestration 末尾自动追加 pack-write 条目', '2. 条目记录变更摘要+涉及模块+评分影响', '3. 下次 generateExperiencePack 时这些记录已在 entries 中'],
    verification: '执行一次全局调配后，调配记录面板出现 pack-write 条目；下载经验包 JSON 包含最新记录',
    relatedFiles: ['context/AIAgentContext.tsx', 'ai/experiencePack.ts'],
  },
  {
    id: 'L-conversation-record', date: '2026-07-30', category: 'pitfall',
    title: '用户与AI的完整对话必须进入经验包',
    problem: '用户要求「这段话以及我以上的所有要求和你的回应都要进入经验包」，但经验包原来只记录技术教训，不记录需求对话',
    rootCause: '经验包缺少对话记录字段',
    solution: '在经验包的 lessons 中以 pitfall 类型记录完整对话摘要：用户提出的需求 + AI 的实现方案 + 实现结果',
    steps: [
      '1. 将用户3轮对话需求提炼为 lesson 条目',
      '2. 记录每轮需求的实现方案和涉及文件',
      '3. 确保经验包下载的 JSON 包含这些对话记录',
    ],
    verification: '下载经验包 JSON → lessons 数组包含 L-conversation-record 等条目 → 内容涵盖用户所有需求和AI实现方案',
    relatedFiles: ['ai/experiencePack.ts'],
  },
]

// ========================= 6. 可复用组件 =========================
const COMPONENTS: ReusableComponent[] = [
  {
    name: 'ErrorBoundary', path: 'components/ErrorBoundary.tsx',
    props: ['children'],
    purpose: '包裹子树，捕获子树任何 JS 错误显示恢复界面',
    whenToUse: '根组件必包，需要防崩溃的独立模块也可包（但别包 Provider 里面）',
    usageHint: '<ErrorBoundary>\n  <App />\n</ErrorBoundary>',
  },
  {
    name: 'InteractiveLesson', path: 'components/InteractiveLesson/',
    props: ['lessonId', 'steps', 'onStepComplete'],
    purpose: '按步骤驱动的课程 UI，支持任意跳转、答案对错均可通过',
    whenToUse: '任何顺序学习+步骤的场景（教程/引导/入职培训）',
    usageHint:
`<InteractiveLesson
  lessonId={levelId}
  steps={lesson.lessonSteps}
  onStepComplete={(i) => updateProgress(...)}
/>`,
  },
  {
    name: 'ChallengeArena', path: 'components/ChallengeArena/',
    props: ['challenges', 'onSolved'],
    purpose: '代码挑战 Tab + 运行结果面板',
    whenToUse: '需要让用户在里面写代码运行看输出',
    usageHint: '<ChallengeArena challenges={lesson.challenges} />',
  },
  {
    name: 'PatrolButton', path: 'components/PatrolButton.tsx',
    props: [],
    purpose: '全局悬浮巡游入口+进度环，放在 App 最下',
    whenToUse: '任何需要全局一键启动巡检的监测应用',
    usageHint: '<App><Navbar /><Main /><PatrolButton /></App>',
  },
  {
    name: 'AIAgentPanel', path: 'components/AIAgentPanel.tsx',
    props: [],
    purpose: 'AI Agent 完整控制面板（启动/配置/历史/快照）',
    whenToUse: '任何有自主迭代优化能力的应用，挂在监测仪表盘的一个 Tab',
    usageHint: '<TabPanel id="agent"><AIAgentPanel /></TabPanel>',
  },
  {
    name: 'VersionHistory', path: 'components/VersionHistory/',
    props: [],
    purpose: '点击版本号弹出版本列表+冻结数据回溯',
    whenToUse: '每次发版独立冻结数据的项目，用户可随时切换到老版本的数据',
    usageHint: '<span onClick={open}>v1.3</span> 点了后弹 <VersionHistory />',
  },
  {
    name: 'Button', path: 'components/Button/',
    props: ['variant', 'size', 'disabled', 'onClick', 'children'],
    purpose: '原子按钮组件，统一风格',
    whenToUse: '所有按钮',
  },
]

// ========================= 7. 下一步扩展路线图 =========================
const ROADMAP: ExtensionRoadmap[] = [
  {
    priority: 'high', item: '真实排行榜（从 Gist 聚合）',
    description: '用户 Progress 公开字段（关卡进度、用时、最后登录）写进同一个 Gist 的多个文件，Leaderboard 读 Gist 排序展示',
    modules: ['ctx-progress', 'cfg-github', 'page-leaderboard'], estimateLines: 180, risk: 'low',
  },
  {
    priority: 'high', item: 'AI Agent + LLM 接入生成代码修改建议',
    description: '当前 AI Agent 只调 14 个参数策略；下一步接本地 LLM API，分析监测报告后输出建议的代码 Patch（人工确认后应用）',
    modules: ['ctx-ai', 'ai-optimizer', 'comp-aipanel'], estimateLines: 350, risk: 'medium',
  },
  {
    priority: 'medium', item: '真实成就判定',
    description: '当前 Achievement 是占位；改为根据 Progress 已解锁关卡、挑战通过数、连续学习天数等自动解锁',
    modules: ['data-achievements', 'ctx-progress', 'page-achievements'], estimateLines: 200, risk: 'low',
  },
  {
    priority: 'medium', item: 'LearningPath 路径可视化',
    description: '用 SVG 或流程图把 8 分类→60关的学习顺序画成有向图，点击节点跳到对应关',
    modules: ['page-path', 'data-mockdata'], estimateLines: 260, risk: 'low',
  },
  {
    priority: 'medium', item: 'Challenge 自动判题',
    description: '用户运行代码后，对 stdout / 返回值做断言比对，给出通过/未通过+错误原因',
    modules: ['comp-challenge', 'ctx-pyodide', 'data-lessoncontent'], estimateLines: 220, risk: 'medium',
  },
  {
    priority: 'low', item: 'Monaco Editor 替换 textarea',
    description: 'CodeEditor 换成 @monaco-editor/react，支持语法高亮/LSP/自动补全',
    modules: ['comp-codeeditor'], estimateLines: 120, risk: 'low',
  },
  {
    priority: 'low', item: 'Pyodide 预装更多包（numpy/pandas）',
    description: '下载对应 whl 放到 public/pyodide/，loadPyodide 时加载。量化交易关卡必备',
    modules: ['ctx-pyodide'], estimateLines: 50, risk: 'medium',
  },
  // —— pack2 新增 ——
  {
    priority: 'high', item: '全局调配系统集成',
    description: 'AI Agent 的全局调配功能已实现基础框架，下一步需要接入真实 LLM API 让 Agent 能输出代码修改建议（人工确认后应用），形成 LLM 功能新增 + Agent 自优化的闭环',
    modules: ['ctx-ai', 'ai-optimizer', 'ai-experiencepack', 'comp-aipanel'], estimateLines: 400, risk: 'medium',
  },
  {
    priority: 'medium', item: '经验包版本历史',
    description: '每次全局调配生成的经验包 JSON 自动保存到 localStorage，支持查看历史版本对比差异',
    modules: ['ai-experiencepack', 'ctx-ai'], estimateLines: 180, risk: 'low',
  },
]

// ========================= 8. 构建与部署约束 =========================
const BUILD: BuildConstraints = {
  hardRules: [
    'vite.config.ts base 必须是 "/python-web-try/"（GitHub Pages 子路径）',
    '路由必须用 HashRouter（BrowserRouter GitHub Pages 刷新 404）',
    'npm run build 必须用 vite build，不要 tsc -b && vite build（Pyodide node 模块 TS 报错可忽略，vite 会 correct bundle）',
    'npm install 而不是 npm ci（仓库没 package-lock.json）',
    '根目录 .nojekyll 必须存在',
    'Pyodide 不要走 CDN（国内 100% 失败），必须本地 public/pyodide/ 加载',
    'api.github.com 请求必须有 15s 超时 + 2次指数退避重试',
  ],
  buildCommand: 'npm run build',
  devCommand: 'npm run dev',
  deployment: 'GitHub Pages: gh-pages 分支 / (root)',
  basePath: '/python-web-try/',
  envDifferences: [
    '开发 base=/，生产 base=/python-web-try/ → 所有静态资源路径用相对路径或 import.meta.env.BASE_URL',
    '开发有 HMR，生产没有，某些副作用 timing 可能不同',
    '开发有 React StrictMode 双重调用，生产不会，检测副作用要在生产模式验证',
  ],
}

// ========================= 9. 给新模型的快速上手指南 =========================
const QUICKSTART_LLM = [
  'Step 0. 【强制】第一步必须读取经验包：调用 generateExperiencePack() 或打开 /source → 📦 经验包 Tab，读 overview + modules，搞清楚哪些文件管什么',
  'Step 1. 根据你要做的事，在 modules 里找到要改的模块，看 extensionPoints 和 pitfalls',
  'Step 2. 在 lessons 里搜一下有没有类似的踩坑，避免重蹈覆辙',
  'Step 3. 改代码遵循 conventions（特别注意：每次开发前必须读经验包，每次优化后必须写入经验包）',
  'Step 4. 如果是数据内容变更（新增关卡/卡片/文档），只改 data/ 目录，UI 会自动渲染；不要改 UI',
  'Step 5. 如果是架构级变更，改完后更新 projectDocs.ts DOC_CHANGES + DOC_VERSION，并同时改 versionManager.ts CURRENT_VERSION',
  'Step 6. 本地验证：npm run build 通过 → npm run dev 打开 4 个关键页面（Home/LevelMap/LevelDetail/Monitor）无白屏无报错',
  'Step 7. 【强制】开发完成后，在仪表盘 📦 Experience Pack Tab 点击"下载经验包 JSON"，或在 AI Agent Tab 点击"🌐 全局调配"按钮自动写入经验包，作为下一个模型的接力棒',
]

// ========================= 10. 提交前自检清单 =========================
const PRECOMMIT_CHECKLIST = [
  '【强制】已读取最新经验包（/source → 📦 经验包 Tab 或 generateExperiencePack()）',
  'npm run build 成功，无 TS 错误（警告可以接受）',
  'npm run dev 启动后，/#/ 首页正常，无控制台错误',
  '点击"关卡地图" → 8分类Tab能切，点击任意关卡卡能进详情页',
  '进入 /#/source 源码探索，5个Tab都能正常切',
  '进入 /#/monitor 监测仪表盘，5+2个Tab（共7个）都能正常切',
  '点一下巡游按钮启动 → 有进度环，5秒后能停止',
  '（若改了关卡数据）新增的关卡详情页不白屏，InteractiveLesson + Challenge 两个 Tab 正常显示',
  '（若改了 Progress/Auth）清 localStorage 后能正常回到默认状态，不是 undefined 炸',
  '（若改了版本号）versionManager.ts CURRENT_VERSION 改了，ProgressContext 存储 key 后缀同步更新',
  'git diff 看一下：没有把 node_modules / dist / .env 提交进去',
]

// ========================= 11. Prompt 模板（新手模型可直接套） =========================
const PROMPT_TEMPLATES = {
  addFeature: `你正在维护一个叫 python-quest 的 React+TS+Vite 单页应用（GitHub Pages 部署，base=/python-web-try/）。
你要做的需求是：<在这里插入用户的需求>。
先不要写代码，先：
1. 在经验包 Experience Pack 里找相关的 modules 和 extensionPoints，把要改的文件列出来
2. 搜 lessons 里有没有类似的坑
3. 遵守 conventions 里的所有规则（尤其不要写死统计、要 data-driven UI）
4. 给出修改方案和步骤
5. 我确认方案后再改`,
  fixBug: `python-quest 出 bug：<在这里插入 bug 描述>。
请：
1. 先读 experiencePack 的 lessons 看是否已有同类问题及修复方案
2. 定位 root cause，不要上来就改代码
3. 修复代码后给出验证步骤：如何确认 bug 真的修了
4. 不要忘记同步改 projectDocs.ts（如有相关文档）/ versionManager.ts（如需升级 key）`,
  refactor: `你需要重构 python-quest 的 <模块名/文件路径>。
注意：
- 重构前请先备份现有逻辑快照到经验包 lessons
- 保持所有对外 API（Props/Exports/Events）100% 向后兼容
- 构建必须通过，dev 模式关键页面（/#/ /#/map /#/source /#/monitor）无白屏
- 完成后更新 projectDocs.ts 的 PRINCIPLES 和 MIGRATION_STEPS`,
  test: `请手动验证 python-quest 的以下检查项，并逐个 PASS/FAIL 报告：
${PRECOMMIT_CHECKLIST.map((c, i) => `${i + 1}. ${c}`).join('\n')}
请用浏览器 dev 环境逐项跑，每个项附 1 句话证据。`,
  // —— pack3 新增：外部 Skill 工作流模板 ——
  tasteSkillWorkflow: `【taste-skill 三旋钮风格统一工作流】
目标：对 python-quest 项目 <指定文件/目录> 进行 taste-skill 风格审查与修正，确保符合 anti-slop / 字体反默认 / LILA 反 AI 紫蓝三条规则。

步骤：
1. 【读配置】从经验包读取 taste-skill 三旋钮默认值：compactness=7, consistency=8, readability=6
2. 【调用 SCAN】调用外部 Skill Leonxlnx/taste-skill action=lint knobs=[7,8,6] path=<目标路径>
   - 重点检查三条约定违规：
     a) anti-slop：有无"默认值无理由"的配置（默认端口/超时/颜色/字体）
     b) 字体反默认：CSS 中有无出现 Inter 或 Serif 作为主字体栈
     c) LILA 反紫蓝：新增代码中有无直接使用 #7c3aed / #6366f1 / #3b82f6 或典型紫蓝渐变
3. 【生成报告】taste-skill 返回 violations[] 列表，每条带 ruleId + file + line + suggestion
4. 【批量 FIX】对每条违规调用 Leonxlnx/taste-skill action=fix id=<ruleId> target=<file:line>
   - anti-slop 违规：补全配置理由注释，或替换为显式非默认值+理由
   - 字体违规：将 Inter/Serif 替换为 JetBrains Mono + PingFang SC 栈
   - LILA 违规：将紫蓝色号替换为项目 CSS 变量 --color-accent-* 或 琥珀/青柠/玫红色
5. 【二次 VERIFY】再次调用 taste-skill lint 确认 violations=0
6. 【写经验包】若发现新的违规类型，将该类问题 + 修复方案写入 lessons，防止下次再犯
7. 【构建验证】npm run build 通过，npm run dev 关键页面无视觉异常

输入参数：
- path：<必填，要审查的文件或目录，如 src/components/ 或 src/pages/Home/Home.tsx>
- knobs：[选填，默认 [7,8,6]，可临时调高 consistency=10 进行严格审查]

输出：
- 修正后的代码文件
- taste-skill 审查报告（修复前 violations 数 + 修复后 clean）
- 若 lessons 有新增，附新增条目的 id 与摘要`,
  impeccableWorkflow: `【impeccable 四模式23命令代码审查重构工作流】
目标：对 python-quest 项目 <指定模块/文件> 执行完整的 impeccable SCAN→FIX→VERIFY→REPORT 四阶段流水线，启用 58 检测规则全量扫描。

阶段 1：SCAN 扫描（6 条命令，58 规则全开）
  cmd1 detect   → 调用 pbakaus/impeccable mode=SCAN cmd=detect rules=all target=<模块路径>
                → 输出 58 规则命中列表（ruleId + file + line + severity + category + description）
  cmd2 catalog  → 将命中问题按 6 大类编目：Correct/Perf/Security/Maint/Arch/Conv
  cmd3 classify → 严重度分级：Critical(阻断) / High(必须修) / Medium(建议修) / Low(可选修)
  cmd4 prioritize → 修复优先级排序：先 Critical→High→Maint/Arch→Medium→Low
  cmd5 map      → 影响面映射：每个问题修改会波及哪些模块/组件（从 experiencePack modules 查依赖）
  cmd6 profile  → 性能/复杂度画像：标记哪些修复会改变运行时行为，需重点回归测试

阶段 2：FIX 修复（7 条命令，按优先级串行）
  对 cmd4 prioritize 输出的 Top-N 问题依次执行：
  cmd7 correct  → 修正确性类问题（空指针/越界/资源泄漏）
  cmd8 refactor → 结构重构（提取函数/拆分大文件/消除重复）
  cmd9 extract  → 提取可复用抽象（HOC/Hook/Util）→ 写入经验包 ReusableComponent
  cmd10 inline  → 内联不必要的间接层（消除过度抽象）
  cmd11 rename  → 重命名违规变量/函数（与 conventions naming 规则对齐）
  cmd12 reorder → 重排代码顺序（import 顺序/函数定义顺序/组件子元素顺序）
  cmd13 simplify → 简化复杂逻辑（拆嵌套/早 return/消除 else）
  每条 FIX 命令执行后立即做 mini-build（tsc 单文件）确保不炸

阶段 3：VERIFY 验证（5 条命令，全绿才能进入 REPORT）
  cmd14 compile  → npm run build 必须无 Error（Warning 可接受，但要列出来）
  cmd15 test     → 执行 PRECOMMIT_CHECKLIST 全部 10+ 项，逐个 PASS
  cmd16 diff     → 生成 git diff，按文件汇总变更量（+/- 行数统计）
  cmd17 benchmark → 对 Perf 类修复，对比修复前后：首屏时间 / 交互响应 / 内存占用
  cmd18 compare  → 对比修复前后关键代码片段（before/after），证明重构等价

阶段 4：REPORT 报告（5 条命令，写入经验包 lessons 作为历史教训）
  cmd19 summarize → 一句话摘要：修了多少问题，主要哪类，对用户可感知影响
  cmd20 visualize → 问题分布图（6 大类饼图 + 严重度柱状图，ASCII 即可）
  cmd21 document  → 同步更新 projectDocs.ts DOC_CHANGES + DOC_VERSION
  cmd22 changelog → 将本次修复条目写入 experiencePack lessons（每条 L-xxx lesson）
  cmd23 recommend → 后续 3 条建议：下一轮 SCAN 建议/架构建议/路线图新增项

输入参数：
- target：<必填，模块名或文件路径，如 ctx-progress 或 src/context/ProgressContext.tsx>
- scope：<选填，full=23命令全跑 / scan-only=只跑SCAN+REPORT / quick=SCAN+Critical-only-FIX+VERIFY>
- rules：<选填，默认 all，可指定类别如 rules=[Perf,Arch] 只扫部分>

输出：
- 修复后的完整代码
- impeccable 四阶段 23 命令执行报告（每步耗时/命中数/修复数）
- lessons 新增条目列表（cmd22 changelog 产出）
- projectDocs.ts 版本变更摘要（cmd21 document 产出）`,
}

// ========================= 生成器主函数 =========================

/**
 * 构造精简文件树（项目交付给新模型的地图）
 * 注意：在浏览器端运行时无法读取文件系统，因此文件树是静态写入的。
 * 每次新增目录级变化时，请同步更新这个函数。
 */
function buildFileTree(): FileTreeNode[] {
  return [
    {
      name: 'src', type: 'dir', children: [
        { name: 'ai', type: 'dir', children: [
          { name: 'Optimizer.ts', type: 'file', lines: 260 },
          { name: 'metrics.ts', type: 'file', lines: 140 },
          { name: 'experiencePack.ts', type: 'file', lines: 700 },
        ]},
        { name: 'components', type: 'dir', children: [
          { name: 'AIAgentPanel.tsx', type: 'file', lines: 450 },
          { name: 'ErrorBoundary.tsx', type: 'file', lines: 175 },
          { name: 'PatrolButton.tsx', type: 'file', lines: 120 },
          { name: 'ExperiencePackPanel.tsx', type: 'file', lines: 300 },
          { name: 'Button/', type: 'dir' },
          { name: 'ChallengeArena/', type: 'dir' },
          { name: 'CodeEditor/', type: 'dir' },
          { name: 'Footer/', type: 'dir' },
          { name: 'InteractiveLesson/', type: 'dir' },
          { name: 'LoginModal/', type: 'dir' },
          { name: 'Navbar/', type: 'dir' },
          { name: 'VersionHistory/', type: 'dir' },
        ]},
        { name: 'config', type: 'dir', children: [
          { name: 'categories.ts', type: 'file', lines: 80 },
          { name: 'github.ts', type: 'file', lines: 80 },
          { name: 'versionManager.ts', type: 'file', lines: 120 },
        ]},
        { name: 'context', type: 'dir', children: [
          { name: 'AIAgentContext.tsx', type: 'file', lines: 500 },
          { name: 'AuthContext.tsx', type: 'file', lines: 180 },
          { name: 'MonitorContext.tsx', type: 'file', lines: 370 },
          { name: 'ProgressContext.tsx', type: 'file', lines: 720 },
          { name: 'PyodideContext.tsx', type: 'file', lines: 150 },
        ]},
        { name: 'data', type: 'dir', children: [
          { name: 'achievements.ts', type: 'file', lines: 60 },
          { name: 'lessonContent.ts', type: 'file', lines: 12000 },
          { name: 'mockData.ts', type: 'file', lines: 1200 },
          { name: 'projectDocs.ts', type: 'file', lines: 1200 },
          { name: 'runoobTopics.ts', type: 'file', lines: 400 },
          { name: 'sourceCodeData.ts', type: 'file', lines: 600 },
        ]},
        { name: 'pages', type: 'dir', children: [
          { name: 'Home/', type: 'dir' }, { name: 'LevelMap/', type: 'dir' }, { name: 'LevelDetail/', type: 'dir' },
          { name: 'LearningPath/', type: 'dir' }, { name: 'Achievements/', type: 'dir' }, { name: 'Leaderboard/', type: 'dir' },
          { name: 'SourceExplorer/', type: 'dir' }, { name: 'MonitorDashboard/', type: 'dir' },
        ]},
        { name: 'types', type: 'dir', children: [
          { name: 'index.ts', type: 'file', lines: 80 },
          { name: 'ai.ts', type: 'file', lines: 130 },
          { name: 'monitor.ts', type: 'file', lines: 90 },
          { name: 'experiencePack.ts', type: 'file', lines: 194 },
        ]},
        { name: 'App.tsx', type: 'file', lines: 37 },
        { name: 'main.tsx', type: 'file', lines: 28 },
        { name: 'index.ts', type: 'file', lines: 77 },
      ],
    },
    { name: 'vite.config.ts', type: 'file', lines: 40 },
    { name: 'tsconfig.json', type: 'file' },
    { name: 'package.json', type: 'file' },
    { name: '.gitignore', type: 'file' },
    { name: '.nojekyll', type: 'file' },
    { name: '.github/workflows/', type: 'dir' },
    { name: 'public/pyodide/', type: 'dir' },
  ]
}

/**
 * 生成完整经验包
 * 浏览器端可直接调用，返回一个可 JSON.stringify 后下载的对象
 */
export function generateExperiencePack(
  options: Partial<{
    packBuild: number
    generatedBy: 'ai-agent' | 'manual'
    customNote: string
  }> = {}
): ExperiencePack {
  const packVersion = `${CURRENT_VERSION}-pack${options.packBuild ?? PACK_BUILD}`

  return {
    meta: {
      schemaVersion: PACK_SCHEMA_VERSION,
      packVersion,
      generatedAt: new Date().toISOString(),
      generatedBy: options.generatedBy ?? 'manual',
      appVersion: CURRENT_VERSION,
      appVersionLabel: CURRENT_VERSION_LABEL,
      appVersionDesc: CURRENT_VERSION_DESC,
      minModelContext: 32000,
    },
    overview: {
      ...OVERVIEW,
      fileTree: buildFileTree(),
    },
    modules: MODULES,
    conventions: CONVENTIONS,
    patterns: PATTERNS,
    lessons: LESSONS,
    components: COMPONENTS,
    roadmap: ROADMAP,
    build: BUILD,
    quickstartForLLM: QUICKSTART_LLM,
    preCommitChecklist: PRECOMMIT_CHECKLIST,
    promptTemplates: PROMPT_TEMPLATES,
  }
}

/**
 * 触发浏览器下载经验包 JSON
 */
export function downloadExperiencePack(pack: ExperiencePack): void {
  const blob = new Blob([JSON.stringify(pack, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `python-quest-experience-pack-${pack.meta.packVersion}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/** 估算经验包 JSON 大小（便于用户看要不要下载） */
export function estimatePackSizeKb(): number {
  try {
    return Math.round(JSON.stringify(generateExperiencePack()).length / 1024)
  } catch {
    return 0
  }
}

export { PACK_VERSION, PACK_SCHEMA_VERSION, PACK_BUILD }
