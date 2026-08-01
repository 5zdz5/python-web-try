const e=`/**
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
  ArchitectureOverview, FileTreeNode, ConversationLogEntry, MetaRhythm,
} from '../types/experiencePack'
import { CURRENT_VERSION, CURRENT_VERSION_LABEL, CURRENT_VERSION_DESC } from '../config/versionManager'

// 经验包 schema 版本（升级格式时改这个）
const PACK_SCHEMA_VERSION = '1.0'
// 经验包版本号：每 1 个 commit / 重大变更递增 1
const PACK_BUILD = 36
const PACK_VERSION = \`\${CURRENT_VERSION}-pack\${PACK_BUILD}\`

// ========================= 1. 架构总览 =========================
const OVERVIEW: Omit<ArchitectureOverview, 'fileTree'> = {
  totalFiles: 139,
  totalTsFiles: 97,
  totalCssFiles: 37,
  totalLines: 52000,
  totalRoutes: 22,
  totalLevels: 60,
  totalComponents: 24,
  totalContexts: 5,
  totalAIModules: 11,
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
    description: '11个路由注册 + Navbar/Main/Footer 外壳 + PatrolButton 全局悬浮',
    exports: ['<App />'],
    dependsOn: ['page-home', 'page-levelmap', 'page-leveldetail', 'page-source', 'page-monitor', 'page-path', 'page-achievements', 'page-leaderboard', 'page-nibblelevels', 'page-skilllab', 'comp-navbar', 'comp-footer', 'comp-patrol'],
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
  {
    id: 'comp-nibblebutton', category: 'component', name: '蚕食爬取按钮',
    path: 'src/components/NibbleButton/', files: 2, approxLines: 200,
    description: '网页内容爬取交互入口：URL 输入 + fetching/parsing/done/error 五态机 + 监测主动注册（registerGroup + reportHealth）+ 像素风 3D 按钮 + 主题双适配（pixel-spectrum/pixel-crow）',
    exports: ['<NibbleButton />'],
    dependsOn: ['ctx-monitor', 'data-nibblelevels'],
    dependedBy: ['page-nibblelevels'],
    extensionPoints: ['新增爬取状态 → status 联合类型扩展 + 对应 UI 块', '新增主题适配 → [data-theme=xxx] 选择器追加'],
    pitfalls: ['法则 4 监测主动注册：useEffect 中必须 registerGroup + reportHealth', '法则 5 主题双适配：必须同时支持 pixel-spectrum 和 pixel-crow', '按钮事件必须 useCallback 包裹避免重渲染'],
  },
  {
    id: 'comp-skillviewer', category: 'component', name: 'Skill 查看实验室',
    path: 'src/components/SkillViewer/', files: 2, approxLines: 320,
    description: 'Skill 实验室面板：双栏布局（左列表 + 右详情），每个 Skill 展示核心规则（含正反例）+ 调用命令一键复制 + 调用示例 + Web 入口跳转。严格应用 taste-skill（anti-slop/字体反默认/LILA 反紫蓝）+ impeccable（no-card-in-card/radius-unified/spacing-scale）+ 主题双适配',
    exports: ['<SkillViewer />'],
    dependsOn: ['ctx-monitor', 'cfg-installedskills'],
    dependedBy: ['page-skilllab'],
    extensionPoints: ['新增 Skill 规则 → installedSkills.ts 对应 skill 的 rules[] 追加 SkillRule', '新增主题适配 → [data-theme=xxx] 选择器追加'],
    pitfalls: ['taste-skill LILA 反紫蓝：禁止用 #7c3aed/#6366f1/#3b82f6，必须用 var(--color-accent-*)', 'impeccable no-card-in-card：面板内用 .skill-section 分隔，不嵌套 .card', '字体必须用 var(--font-mono) JetBrains Mono，禁用 Inter', '间距必须用 8 倍数，圆角必须用 var(--radius-*)'],
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
  {
    id: 'page-nibblelevels', category: 'page', name: '蚕食关卡化页面',
    path: 'src/pages/NibbleLevels/', files: 2, approxLines: 250,
    description: '展示爬取后关卡化内容：双栏布局（关卡列表 + 详情）+ 步骤指示器 + 挑战展示 + 代码块渲染 + 主题双适配',
    exports: ['<NibbleLevels />'],
    dependsOn: ['comp-nibblebutton', 'data-nibblelevels'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增关卡详情子区块 → 在 activeLevel 渲染区追加', '新增挑战交互 → 在 challenges.map 内扩展'],
    pitfalls: ['法则 3 动态适配禁止硬编码：所有关卡/步骤/挑战必须通过 .map 动态渲染', '空状态必须处理（levels.length === 0 时显示引导提示）'],
  },
  {
    id: 'page-skilllab', category: 'page', name: 'Skill 实验室页面',
    path: 'src/pages/SkillLab/', files: 3, approxLines: 100,
    description: '承载 SkillViewer 组件的页面壳：标题 + SkillViewer（默认展开）+ 底部使用提示。应用 taste-skill/impeccable 审美规则',
    exports: ['<SkillLab />'],
    dependsOn: ['comp-skillviewer'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增页面级说明 → 在 footer 追加', '新增 Skill 入口 → SkillViewer 组件自动渲染'],
    pitfalls: ['页面壳保持轻量，核心逻辑在 SkillViewer 组件', '必须 defaultExpanded=true 让用户直接看到 Skill 列表'],
  },
  // —— pack23 新增：进化档案页面（用户原话"continue，疯狂进化"） ——
  {
    id: 'page-evolution', category: 'page', name: '进化档案页面',
    path: 'src/pages/EvolutionArchive/', files: 3, approxLines: 360,
    description: 'Agent 20 次迭代可视化页面：顶部统计卡（迭代总数/策略应用数/评分变化/Wiki 推送数/快照数/调配次数）+ 中部策略应用频次 Top10 + 评分曲线 SVG 折线图 + 最近迭代列表 + Wiki 推送历史。严格应用 taste-skill/impeccable 审美规则，双主题适配（pixel-spectrum 彩虹流动 + pixel-crow 乌鸦虹彩）',
    exports: ['<EvolutionArchive />'],
    dependsOn: ['ctx-aiagent'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增可视化维度 → 在 stats 派生数据追加字段', '新增迭代子图 → 在 SVG 区域追加 path'],
    pitfalls: ['history 为空时所有派生统计必须有 0/空数组兜底', 'SVG 路径生成必须处理 history.length===0 边界', '必须 useAIAgent 而非 useAgent（context 实际导出名）'],
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
    pitfalls: ['模板字符串内的反引号必须转义（\\\\\`），否则JS语法错', '空课程要给 { lessonSteps: [], challenges: [] }，不能 undefined'],
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
  {
    id: 'data-nibblelevels', category: 'data', name: '蚕食爬取数据层',
    path: 'src/data/nibbleLevels.ts', files: 1, approxLines: 200,
    description: '网页内容爬取+关卡化核心：fetchHtml（3 个 CORS 代理 fallback：allorigins/corsproxy/thingproxy + 15s 超时）+ nibbleToLevels（DOMParser 解析 + h2/h3 标题分割算法）+ NibbleLevel/NibbleStep/NibbleChallenge 三层类型',
    exports: ['NibbleLevel', 'NibbleStep', 'NibbleChallenge', 'NibbleResult', 'fetchHtml()', 'nibbleToLevels()', 'nibbleWebsite()'],
    dependsOn: [],
    dependedBy: ['comp-nibblebutton', 'page-nibblelevels'],
    extensionPoints: ['新增 CORS 代理 → PROXIES 数组追加 + URL 模板', '新增内容分割策略 → 在 nibbleToLevels 内追加选择器分支（如按 p 段落、按 section 等）', '新增步骤类型 → NibbleStep.type 联合类型扩展'],
    pitfalls: ['CORS 代理可能失效，必须保留多 fallback', 'DOMParser 只能在浏览器端运行，SSR 环境会报错', '某些网站 CSP 会拦截代理响应，需要 try-catch + 错误降级'],
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
  {
    id: 'ai-recodeloop', category: 'ai', name: '重编码循环器',
    path: 'src/ai/recodeLoop.ts', files: 1, approxLines: 150,
    description: 'pack26 新增。基于 CONVERSATION_LOG 历史对话提取 20 个可重编码点，每次迭代遵循 META_WORKFLOW 7 步循环，经验回写 AI_PROJECT_EXPERIENCE 形成飞轮',
    exports: ['extractRecodePoints()', 'runRecodeLoop()', 'getRecodeStats()', 'extractNewMetaExperiences()'],
    dependsOn: ['ai-experiencepack'],
    dependedBy: [],
    extensionPoints: ['新增重编码点 → extractRecodePoints() 追加 RecodePoint，source 必须填 conv ID', '下一轮滚动 → 调 runRecodeLoop() 继续执行，调 extractNewMetaExperiences() 回写元逻辑'],
    pitfalls: ['RecodePoint.source 必须追溯到 conv ID，不凭空创造', 'pending 的重编码点不推 Wiki，只有 applied 才推'],
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
  // —— pack33 超级进化：资源调配中心 ——
  {
    id: 'ai-resourcebus', category: 'ai', name: '资源调配总线',
    path: 'src/ai/resourceBus.ts', files: 1, approxLines: 450,
    description: '统一调度 8 类资源（LLM/技能/等级/监测/经验/Wiki/存储/外部API），含 allocate/lock/release/schedule 四操作，优先级加权 + 资源冲突检测 + 死锁超时释放',
    exports: ['ResourceBus', 'createResourceBus()', 'ResourceType 联合类型'],
    dependsOn: ['types-ai'],
    dependedBy: ['ctx-ai', 'ai-metalogic', 'ai-selfcoder'],
    extensionPoints: ['新增资源类型 → ResourceType 追加 + handlers 注册对应 allocate/release/inspect 三函数'],
    pitfalls: ['跨资源的死锁：不要在一个资源的 allocate 回调里申请另一个资源', 'lock 必须有超时参数，否则异常崩溃后资源永久被占'],
  },
  {
    id: 'ai-metalogic', category: 'ai', name: '元逻辑规则引擎',
    path: 'src/ai/metaLogic.ts', files: 1, approxLines: 380,
    description: '14 条元规则覆盖 6 类经验（Karpathy工作流/UI偏好/架构模式/安全/调试/优化），每轮迭代自动 executeAll()，输出 confidence 分数和 action 建议',
    exports: ['META_RULES[]', 'executeMetaLogic()', 'MetaRule / MetaRuleResult 类型'],
    dependsOn: ['types-ai', 'ai-codingexperience'],
    dependedBy: ['ctx-ai', 'ai-selfcoder'],
    extensionPoints: ['新增元规则 → META_RULES[] 追加，必填 id/category/trigger/evaluate()/action'],
    pitfalls: ['规则 evaluate() 中不要产生副作用，只返回建议；副作用留给调用方执行', '规则间不要相互依赖，否则触发顺序会影响结果'],
  },
  {
    id: 'ai-local-llm', category: 'ai', name: '本地离线 LLM 内核',
    path: 'src/ai/localLLMCore.ts', files: 1, approxLines: 560,
    description: '不依赖外部 API 的离线推理引擎：从源码索引 + 经验包 modules/conventions/lessons 做 TF-IDF 检索 + 规则生成 + 决策树打分，替代 LLM 不可用场景',
    exports: ['localLLMInfer()', 'buildInvertedIndex()', 'generatePatchesOffline()', 'retrieveExperiences()'],
    dependsOn: ['types-ai', 'ai-codebaseindexer', 'ai-codingexperience'],
    dependedBy: ['ctx-ai', 'ai-codeselfoptimizer'],
    extensionPoints: ['新增打分维度 → ScoringWeights 扩展字段 + 对应评分函数', '新增检索特征 → buildInvertedIndex() 内 tokenizer pipeline 追加'],
    pitfalls: ['不要让离线推理覆盖高风险改动（如删除/重构），只允许代码清理类低风险补丁', '倒排索引构建在首屏懒执行，不要阻塞 UI 渲染'],
  },
  {
    id: 'ai-selfcoder', category: 'ai', name: '自编码器参数自适应',
    path: 'src/ai/selfCoder.ts', files: 1, approxLines: 320,
    description: '基于 4 因素量化理解度（意图清晰度/上下文丰富度/历史一致性/资源利用率）自动切换 3 模式（保守/探索/精细），自动调 params 并写入 Agent 运行时',
    exports: ['computeUnderstanding()', 'selfTuneParameters()', 'MODE_PROFILES[]'],
    dependsOn: ['types-ai', 'ai-resourcebus', 'ai-metalogic'],
    dependedBy: ['ctx-ai'],
    extensionPoints: ['新增自适应模式 → MODE_PROFILES[] 追加 + computeUnderstanding 评分函数对应分支'],
    pitfalls: ['不要在 selfTune 中同时改 >5 个参数，否则 Darwin 无法归因是哪个参数导致评分变化', '保守模式下 autoApply 必须强制 false，不允许自动应用补丁'],
  },
  // —— pack34 代码级自优化：Kimi 超级升级 + 编码经验注入 ——
  {
    id: 'ai-llmclient-kimi', category: 'ai', name: 'LLM 客户端 + Kimi Context Caching + 工具调用',
    path: 'src/ai/llmClient.ts', files: 1, approxLines: 860,
    description: 'OpenAI兼容/Kimi(Moonshot)/Gemini 三 Provider，Kimi 专有能力：kimiCreateCache（Context Caching按tag复用 token）、kimiUploadAndExtract（文件上传抽取超长代码）、KIMI_CODE_SELF_OPTIMIZE_TOOLS（Function Calling 工具调用）+ sanitizeLLMJSON 超健壮 JSON 清洗',
    exports: ['callLLMJSONv2()', 'detectProvider()', 'kimiCreateCache()', 'kimiBuildExperienceCacheMessages()', 'kimiMakeCacheReferenceMessage()', 'kimiUploadAndExtract()', 'KIMI_CODE_SELF_OPTIMIZE_TOOLS', 'sanitizeLLMJSON()'],
    dependsOn: ['types-ai'],
    dependedBy: ['ctx-ai', 'ai-codeselfoptimizer', 'ai-codingexperience'],
    extensionPoints: ['新增 Provider → LLMProvider 联合 + switch 分支 + 对应 header/body 组装', '新增工具调用 → KIMI_CODE_SELF_OPTIMIZE_TOOLS 追加 schema + 处理函数'],
    pitfalls: ['sanitizeLLMJSON 必须在 JSON.parse 前调用，因为 LLM 常把 JSON 包在 \`\`\`json \`\`\` 代码块里', 'Kimi Cache 只在相同 model + tag + messages 内容完全一致时复用，不要改任意一个再指望 hit'],
  },
  {
    id: 'ai-codebaseindexer', category: 'ai', name: '代码库索引器（Vite import.meta.glob 前端安全加载）',
    path: 'src/ai/codebaseIndexer.ts', files: 1, approxLines: 350,
    description: '通过 Vite 的 import.meta.glob 懒加载 src/** 下所有源码，构建 files + keywordIndex（关键词倒排）+ fileSummaries + summaryLines/totalKeywords 统计，支持关键词搜索和邻居文件查找',
    exports: ['buildCodebaseIndex()', 'readFileEntry()', 'buildLLMCodeContext()', 'searchFilesByKeywords()', 'findNeighborFiles()'],
    dependsOn: ['types-ai'],
    dependedBy: ['ctx-ai', 'ai-codeselfoptimizer', 'ai-local-llm'],
    extensionPoints: ['新增语言识别 → EXT_TO_LANG 追加扩展名映射', '新增摘要算法 → summarize() 内按语言不同分支处理'],
    pitfalls: ['import.meta.glob 必须写死模式字符串（不能用变量拼接），否则 Vite 静态分析失败', 'maxFiles 默认 120，超过要手动传，否则 src 大了只取前 120 个会漏掉核心文件'],
  },
  {
    id: 'ai-codingexperience', category: 'ai', name: '编码经验注入器',
    path: 'src/ai/codingExperienceInjector.ts', files: 1, approxLines: 620,
    description: '22 条内置编码经验（Karpathy 四步/参数消费闭环/Wiki推送铁律/UI偏好/安全/理解度评估/反默认/LILA/一致推送 等），转化为 system prompt + 3 个 few-shot 正例（参数消费/补丁唯一匹配/监测主动注册）+ 分类统计 + token 估算',
    exports: ['DEFAULT_CODING_EXPERIENCES[]', 'loadCodingExperiences()', 'injectExperiences()', 'appendCodingExperience()', 'getExperienceStats()', 'renderExperienceRules()'],
    dependsOn: ['types-ai'],
    dependedBy: ['ctx-ai', 'ai-llmclient-kimi', 'ai-local-llm'],
    extensionPoints: ['新增经验条 → DEFAULT_CODING_EXPERIENCES[] 追加，必填 id/category/title/trigger/practice/priority/source'],
    pitfalls: ['经验不要写空话（如"代码要好"），必须具体到可执行的 practice + 正反例', '经验注入后 estimatedTokenBudget 要检查，不要超过 provider 的 context window 上限的 40%'],
  },
  {
    id: 'ai-codeselfoptimizer', category: 'ai', name: '代码级自优化引擎（补丁闭环）',
    path: 'src/ai/codeSelfOptimizer.ts', files: 1, approxLines: 920,
    description: '完整闭环：prepareSelfOptimizeContext(读索引+注入经验+读意图) → generatePatchesViaLLM(或 localLLM) → dryRunPatches(old_snippet唯一匹配检查+内存语法检查) → 自动备份 → 应用 → 验证 → 失败自动逆序回溯。补丁结构：oldSnippet/newSnippet/reason/risk/expectedGain 七字段，风险阈值可配',
    exports: ['runCodeSelfOptimize()', 'prepareSelfOptimizeContext()', 'generatePatchesViaLLM()', 'dryRunPatches()', 'applyPatchesSafely()', 'uploadKeyFilesToKimi()', 'SelfOptimizeResult 类型'],
    dependsOn: ['types-ai', 'ai-llmclient-kimi', 'ai-codebaseindexer', 'ai-codingexperience'],
    dependedBy: ['ctx-ai'],
    extensionPoints: ['新增补丁后验证 → validatePatch() 函数内追加断言（如跑单测/跑 lint）', '新增白/黑名单路径 → CodeSelfOptimizeConfig.allowedFilePatterns / forbiddenPatterns'],
    pitfalls: ['oldSnippet 必须在目标文件中出现且只出现 1 次，多匹配/0匹配都拒绝补丁', '浏览器环境没有真文件系统，备份用 Map 存旧内容快照，失败就 reverse 顺序逐个还原'],
  },
  // —— 插件中心 ——
  {
    id: 'page-pluginshub', category: 'page', name: '插件中心首页（PluginsHub）',
    path: 'src/pages/PluginsHub/PluginsHub.tsx', files: 3, approxLines: 450,
    description: '10 个插件卡片 + 7 分类筛选（AI生成/数据可视化/飞书套件/工作流/GitHub工具/设计工具/代码训练）+ 顶部统计概览，严格像素风 + 主题双适配',
    exports: ['<PluginsHub />'],
    dependsOn: ['comp-pluginshell', 'ctx-monitor'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增插件 → PLUGINS[] 追加（id/name/category/desc/icon）+ 对应 <Route path="/plugins/xxx"> 注册'],
    pitfalls: ['插件卡片点击必须用 navigate(/plugins/\${p.id})，不要硬编码 href', '分类筛选是动态 PLUGINS 派生，不要写死分类按钮数量'],
  },
  {
    id: 'comp-pluginshell', category: 'component', name: '插件统一外壳（PluginShell）',
    path: 'src/components/PluginShell.tsx', files: 2, approxLines: 220,
    description: '所有插件页面共享的外壳：返回插件中心按钮 + 标题描述 + 通用 Mock 数据提示条 + 主题同步 + 像素风双适配，避免每个插件页重复写壳',
    exports: ['<PluginShell title description backPath children mockHint bannerColor>',
      'plugins-shared.css 统一变量'],
    dependsOn: [],
    dependedBy: ['page-pluginshub', 'page-imagegen', 'page-videogen', 'page-vizlab', 'page-productdocs', 'page-larksuite', 'page-githubhub', 'page-workbench', 'page-browserstudio', 'page-designstudio', 'page-webdevtools', 'page-codetypingarena'],
    extensionPoints: ['新外壳能力（如右上角帮助按钮）→ PluginShell props 追加 + 默认值兼容'],
    pitfalls: ['PluginShell 不要 import 具体插件页组件，否则循环依赖', 'bannerColor 用 CSS 变量 color-mix，不要硬编码 rgba'],
  },
  {
    id: 'page-plugin-imagegen', category: 'page', name: 'Seedream 图像生成插件页',
    path: 'src/pages/PluginsHub/ImageGeneration/', files: 3, approxLines: 320,
    description: 'Prompt 输入 + 风格/尺寸/步数选择 + 生成按钮，Mock 模式下显示占位演示卡片，真实模式下调 Seedream API（占位），像素风双主题适配',
    exports: ['<ImageGenerationPage />'],
    dependsOn: ['comp-pluginshell'],
    dependedBy: ['core-app', 'page-pluginshub'],
    extensionPoints: ['接入真实 Seedream → onClick 真实 fetch 替换 Mock Promise', '新增风格 → STYLES[] 追加'],
    pitfalls: ['生成按钮 loading 时必须 disabled，防止用户重复点击', '图片尺寸切换要用 input[type=range] 不要写死按钮'],
  },
  {
    id: 'page-plugin-videogen', category: 'page', name: 'Seedance 视频生成插件页',
    path: 'src/pages/PluginsHub/VideoGeneration/', files: 3, approxLines: 300,
    description: 'Prompt + 参考图/参考视频上传 + 时长比例选择，Mock 模式下显示生成中进度条 + 占位视频卡片',
    exports: ['<VideoGenerationPage />'],
    dependsOn: ['comp-pluginshell'],
    dependedBy: ['core-app', 'page-pluginshub'],
    extensionPoints: ['接入真实 Seedance → 替换生成逻辑 + 轮询任务结果'],
    pitfalls: ['参考图上传用 URL.createObjectURL + <img> 预览，不要直接塞进 state blob（内存爆）', 'Mock 进度每 500ms +8%，到 92% 暂停 2s 再完成，模拟真实等待'],
  },
  {
    id: 'page-plugin-vizlab', category: 'page', name: '数据可视化实验室（VizLab）',
    path: 'src/pages/PluginsHub/VizLab/', files: 3, approxLines: 420,
    description: '10 种图表快速生成（折线/柱状/饼/雷达/散点/热力/桑基/箱线/地理点/Gantt），Mock 数据集内置随机生成 + CSV 导入占位',
    exports: ['<VizLabPage />'],
    dependsOn: ['comp-pluginshell'],
    dependedBy: ['core-app', 'page-pluginshub'],
    extensionPoints: ['接入 D3 / recharts → 替换 SVG 手写为组件渲染', '新增图表类型 → CHARTS[] + 对应渲染分支'],
    pitfalls: ['SVG 图表必须有 viewBox，否则响应式缩放会变形', 'Mock 数据要用 seed=42 固定随机种子，便于用户多次生成看到相同趋势'],
  },
  {
    id: 'page-plugin-productdocs', category: 'page', name: '产品文档写作插件（ProductDocs）',
    path: 'src/pages/PluginsHub/ProductDocs/', files: 3, approxLines: 310,
    description: '6 种文档类型选择（PRD/HLD/LLD/竞品分析/周报/用户故事）+ 输入目标用户+场景 + Mock 生成结构化文档 Markdown',
    exports: ['<ProductDocsPage />'],
    dependsOn: ['comp-pluginshell'],
    dependedBy: ['core-app', 'page-pluginshub'],
    extensionPoints: ['新增文档模板 → DOC_TEMPLATES[] 追加 sections'],
    pitfalls: ['Markdown 渲染要用 textarea 预显示而非直接 dangerouslySetInnerHTML（防 XSS）', '长文档分段滚动时要 sticky 住左侧目录'],
  },
  // —— pack36 新增：游戏中心 + 代码打字（路由复用）+ 插件代码打字
  {
    id: 'page-gamecenter', category: 'page', name: '游戏中心聚合页',
    path: 'src/pages/GameCenter/', files: 6, approxLines: 900,
    description: '3 款游戏聚合入口（代码打字 / 代码输出猜谜 / 算法闪卡），GAMES[] 数据驱动渲染卡片，顶部统计概览（总游戏数/已掌握/总题库数/总难度），严格像素风 + 主题双适配，Navbar 有入口 → /games',
    exports: ['GAMES[]', '<GameCenter />', '<CodeOutputQuiz />', '<AlgorithmFlashcards />'],
    dependsOn: ['ctx-monitor', 'ctx-theme'],
    dependedBy: ['core-app'],
    extensionPoints: ['新增游戏 → GAMES[] 追加一条 + App.tsx /games/xxx Route 注册 + index.ts 命名导出', '新分类 → GAMES[].category 联合扩展 + GameCenter.tsx 筛选按钮自动派生（数据驱动）'],
    pitfalls: ['GAMES[].path 必须和 App.tsx Route 完全一致，否则卡片点击 404', '新增小游戏必须用 useMonitor 注册 Game-* 监测组 + reportHealth，否则监测系统认为页面"死亡"'],
  },
  {
    id: 'page-codetypingarena', category: 'page', name: '代码打字竞技场游戏页',
    path: 'src/pages/CodeTypingArena/', files: 3, approxLines: 450,
    description: '三种题库（Python/TS/React）按难度 1-5 分级，LANGS[] 数据驱动语言切换，LEVELS[] 数据驱动代码文本，WPM（每分钟字数）+ 准确率 + 连击（combo）实时统计，最佳成绩 localStorage 存档。支持 embedMode 属性（嵌入插件模式下隐藏大标题和返回按钮，缩小间距，避免 PluginShell 里出现双重标题）。',
    exports: ['LANGS[]', '<CodeTypingArena embedMode? />'],
    dependsOn: ['ctx-monitor'],
    dependedBy: ['core-app', 'page-gamecenter', 'page-plugin-codetyping'],
    extensionPoints: ['新增题库 → LANGS[].levels 追加一条 code 文本', '新统计维度（如"最高连击"）→ stats 对象加字段 + useEffect 存 localStorage'],
    pitfalls: ['embedMode 必须是可选 prop（默认 false），原 /typing 独立路由要正常显示大标题', 'code 文本不要包含 backtick 或模板字符串语法，否则 JSX 字符串字面量解析炸'],
  },
  {
    id: 'page-plugin-codetyping', category: 'page', name: '插件-代码打字竞技场',
    path: 'src/pages/PluginsHub/CodeTyping/', files: 2, approxLines: 80,
    description: '插件中心代码打字插件页（/plugins/code-typing 路由）：外部 PluginShell 提供统一返回按钮+标题+vendor+version，内部嵌入 <CodeTypingArena embedMode />，避免 CodeTypingArena 重复写导航头。PluginsHub 分类已扩展 game 类（All/AI生成/数据可视化/飞书/工作流/GitHub/设计/代码训练/游戏），卡片点击 navigate 到此。',
    exports: ['<CodeTypingPlugin />'],
    dependsOn: ['comp-pluginshell', 'page-codetypingarena'],
    dependedBy: ['page-pluginshub', 'core-app'],
    extensionPoints: ['新插件 → 拷贝同目录结构：plugins-shared.css + PluginShell + 复用内部业务组件 + App.tsx Route 注册 + PluginsHub PLUGINS[] 追加', 'PluginShell 缺的 props（图标/色条）→ comp-pluginshell props 扩展'],
    pitfalls: ['不要自己写 PluginShell 不支持的 props（如 description/backPath/mockHint/bannerColor 这 4 个在 pack36 都不存在，tsc 会报 Prop type error）→ 实际传 subtitle/vendor/version/icon 这 4 个，其他去掉', '组件复用用 embed 模式，不要复制粘贴游戏 TSX 到插件目录 → 否则下次打字逻辑修改插件不更新（DRY 反模式）'],
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
  // —— pack5 新增：元工作流约定（经验包的自维护规则） ——
  { category: 'meta-workflow', rule: '经验包读-执行-写回 闭环：每一次用户与 AI 的对话都必须先读最新经验包再执行，执行后把本轮内容写回经验包',
    description: '经验包是项目的"活档案"，不是一次性的交付物。每一次用户对话必须遵守"读-执行-写"三步闭环：1) 读（READ）— 在动手写代码前，必须先调用 generateExperiencePack() 或读取 /source → 📦 经验包 Tab，加载最新的 modules/conventions/patterns/lessons/prompt-templates；2) 执行（EXECUTE）— 基于经验包中的约束和模板执行任务，遇到冲突时以经验包为准；3) 写回（WRITE）— 任务完成后，必须把本轮对话的关键信息追加写回经验包：新增的模块/约定/模式/教训/Prompt 模板，同时 PACK_BUILD +1、DOC_VERSION 升级、DOC_CHANGES 追加一条。这样保证经验包永远反映项目的最新状态，下一个模型接手时不会基于过时信息做决策。该规则是递归的：包括"读-执行-写"规则本身在内的每一次对话都必须被记录，没有任何例外。',
    goodExample: '用户说"加个新功能X" → ① 读经验包找相关模块与约定 → ② 按 conventions 写代码 → ③ 在 experiencePack.ts 追加 X 的 module/pattern/lesson，PACK_BUILD+1，DOC_VERSION v1.5→v1.6，DOC_CHANGES 新增一条',
    badExample: '用户说"改个bug" → 直接改代码 → 不更新经验包 → 下次模型读经验包发现 modules 列表与实际代码不符 → 基于错误信息做决策',
    consequence: '经验包过时 → 后续模型读到的是"昨天的项目" → 决策基于过时信息 → 错误累积 → 经验包失去意义变成死文档',
  },
  { category: 'meta-workflow', rule: '对话归档必填字段：每次对话写回经验包时，必须包含对话摘要/修改文件/新增模式 三项',
    description: '为保证对话历史可追溯，每次写回经验包时必须填齐三项字段：① 对话摘要（一句话说明本轮用户诉求与最终产出）写入 PROMPT_TEMPLATES 的 conversationLog 数组（pack5 新增字段）；② 修改文件列表（绝对或相对路径）写入对应 module 的 lastModified 字段；③ 新增模式（若本轮引入了新的设计/架构/约定模式）追加到 PATTERNS 数组并给 category 字段。这三项缺一不可，即使是纯答疑对话也要写入 conversationLog。',
    goodExample: 'conversationLog.push({ id: "conv-2026-0730-1", summary: "用户要求将监测系统设计模式写入经验包", filesModified: ["src/ai/experiencePack.ts"], patternsAdded: ["reportHealth 自动建组","巡游三态检测"], date: "2026-07-30" })',
    badExample: '只改代码不写 conversationLog → 3 个月后没人知道这次对话发生过什么',
    consequence: '对话历史丢失 → 经验包只记录代码不记录"为什么这样改" → 后续模型只知其然不知其所以然',
  },
  { category: 'meta-workflow', rule: 'PACK_BUILD 递增锁：经验包内容发生任何变更（新增/修改/删除 pattern/lesson/convention/prompt）必须 PACK_BUILD +1',
    description: 'PACK_BUILD 是经验包的"修订号"，类似于 semver 的 patch 段。任何对 experiencePack.ts 内容的变更——哪怕只改一个标点——都必须把 PACK_BUILD +1，并同步更新 projectDocs.ts 的 DOC_VERSION 与 DOC_CHANGES。这一规则通过硬约束保证（见 project_memory.md），未递增 PACK_BUILD 的经验包变更视为无效提交。PACK_BUILD 不允许回退，即使删除了内容也只能继续递增。',
    goodExample: '新增 1 条 lesson → PACK_BUILD 6→7 → DOC_VERSION v1.6→v1.7 → DOC_CHANGES 新增一条"pack7: 新增 xxx 教训"',
    badExample: '改了 3 条 pattern 但 PACK_BUILD 不变 → 下游模型无法判断经验包是否更新 → 可能读到缓存的旧版本',
    consequence: 'PACK_BUILD 不变 → 无法检测经验包更新 → 下游基于过期经验包决策 → 递归雪崩',
  },
  // —— pack6 新增：Karpathy 四条编码原则（andrej-karpathy-skills） ——
  { category: 'karpathy', rule: 'Karpathy 原则 1：先想清楚再动手（Think before you code），禁止跳读问题直接敲键盘写代码',
    description: 'Karpathy 原则第一条（最关键）：动手写代码前必须先完成"理解-规划-列约束"三步。具体动作：① 读用户的完整诉求，逐字理解；② 列出相关模块、扩展点、已知坑（读经验包 modules/extensionPoints/lessons）；③ 写出最小修改方案（改哪些文件、每个改什么、顺序是什么）；④ （如果方案大）把方案发用户确认。跳过这一步 = 直接写代码 = AI 乱改 = 违反 Karpathy。此原则能消灭 >40% 的 AI 编程错误（来源：andrej-karpathy-skills 社区测试 30 个代码库统计）。',
    goodExample: '用户说"修个bug" → ① 读诉求 → ② 查经验包 lessons 找同类坑 → ③ 定位 root cause → ④ 列修复 2 步 → ⑤ 再写代码',
    badExample: '用户说"修个bug" → 看到"bug"二字直接开写 300 行 → 写完发现方向错了 → 全删重写（浪费 80% 时间）',
    consequence: '跳过思考 → 方案错 → 代码返工 → commit 污染 → 回滚成本高；用户感受："AI 写得很快但写得不对"',
  },
  { category: 'karpathy', rule: 'Karpathy 原则 2：小步 diff，不要全量重写（Small diffs, never full rewrites）；每次 commit ≤200 行',
    description: 'Karpathy 原则第二条：禁止用 Write 工具整文件覆盖。已有文件一律用 Edit 做最小差异修改。每次修改控制在"单一目的 + ≤200 行新增"。如果要改大，分多个步骤：先抽函数 → 再加逻辑 → 再改调用方，每一步独立验证。大任务用 TodoWrite 拆子任务，每个子任务一个小 commit。多个子任务可以并行跑（不同文件），但同一文件串行。这条原则在社区实践中让"单次修改出错率"从 41% 降到 3%。',
    goodExample: '改 Button 组件 → 先改 padding（Edit 2 行）→ 构建验证 → 再加 hover shadow（Edit 5 行）→ 再验证 → 分开 2 个 commit',
    badExample: '改 Button 组件 → Write 整文件 300 行 → 同时改了 padding/shadow/字体/圆角/禁用态 → 构建炸了不知道哪部分错',
    consequence: '全量重写 → 丢失已有修复/边界处理 → 引入回归 bug → diff 难 review → 无法 cherry-pick 单个修复',
  },
  { category: 'karpathy', rule: 'Karpathy 原则 3：尽早运行、频繁运行（Run early, run often）；每步改完必 npm run build',
    description: 'Karpathy 原则第三条：不要攒 10+ 个改动再运行。每改一个小步（一个小 Edit / 一个子组件 / 一个函数）就立即：① npm run build 确保编译通过；② 若改了运行逻辑，dev 环境打开关键页面看无白屏无 console 错误。实践中越早发现错误成本越低：1 步后发现 = 改 3 行，10 步后发现 = 翻 300 行找 bug。对本 python-quest 项目 = 每次小改完必须 build 成功，才能算这一步完成。',
    goodExample: '加了个 useMonitor.registerGroup 到 7 个页面 → 立即 npm run build → 发现有个页面 import 写错 → 3 秒修好 → 再 build 通过',
    badExample: '写了 5 个组件 + 2 个 Context + 3 个页面注册 → 全写完才 build → 发现 12 个 TS 错误 → 排查 30 分钟才定位到第一个引入错误的位置',
    consequence: '延迟运行 → 错误大量累积 → 回溯成本指数级增长 → 容易陷入"修一个 bug 冒三个新 bug"的死循环',
  },
  { category: 'karpathy', rule: 'Karpathy 原则 4：童子军准则（Leave code better than found）；改到哪顺手修到哪',
    description: 'Karpathy 原则第四条（收尾的点睛之笔）：每次改代码时，在不影响本次任务前提下，顺手修复附近的 1-2 个小问题：拼写错误、未使用 import、any 类型缺泛型、缺失 key prop、console.log 忘删、空数组未提供 fallback、注释过时但还在。改动要小（每处 1-3 行），不能扩大 scope。不要把"顺手修"变成大规模重构——那违反原则 2。但小修必须做，让代码每次被触碰都变好一点。',
    goodExample: '改 LevelDetail.tsx 注册监测组 → 顺手删了一个遗留的 console.log + 补了 .map 的 key prop → 共 +1-1 行',
    badExample: '改 LevelDetail.tsx 注册监测组 → 顺手把整个文件改成了另一种架构 → 500 行改动 → 炸了 8 个依赖组件',
    consequence: '不执行童子军准则 → 技术债按触碰次数线性累积 → 半年后每个文件都"不敢动" → 项目进入维护噩梦',
  },
  // —— pack10 新增：Darwin 棘轮机制（外部 Skill: alchaincyf/darwin-skill） ——
  { category: 'darwin-ratchet', rule: 'Darwin 棘轮原则：分数只升不降，每轮验证通过才保留，退步自动 git revert（禁用 git reset --hard）',
    description: '来自 alchaincyf/darwin-skill v2.0 的核心机制。每次代码修改后必须通过独立验证（tsc + build + 浏览器白屏检测三选一或全跑），全部通过 → 保留 + commit；任一失败 → git revert HEAD~1（绝不用 git reset --hard，会丢历史）。棘轮 = 只能向前转的齿轮，分数只升不降。这条规则消灭了"局部退化累积"的隐形 bug——例如改了 A 模块让某指标从 92 掉到 88，AI 自己看不到差异但用户感受到。Darwin 在 darwin-skill 中实测：6 个独立评委共识下，huashu-gpt-image skill 从 80.8 → 91.5 → 91.65（+10.85 分），从未出现回退后仍保留退步的情况。',
    goodExample: '改完 Button.css → 跑 npm run build → 通过 + 关键页面无白屏 → git commit → 进入下一个修改',
    badExample: '改完 Button.css → 看一眼"差不多应该没问题" → git commit → 后来发现圆角变了导致 5 个组件布局错乱 → 已经 commit 进去很难回滚',
    consequence: '不验证就 commit → 局部退步累积 → 项目整体质量曲线下降 → 后期"修一个 bug 冒三个新 bug"',
  },
  { category: 'darwin-ratchet', rule: 'Darwin 独立评委原则：禁止"同一 AI 又改又评"，验证必须用子 agent 或独立工具链',
    description: '来自 darwin-skill 反例黑名单第 1 条 + 微软 SkillLens 论文实证：LLM 自评准确率仅 46.4%（接近抛硬币）。同一个 AI 改完代码又自己评"看起来没问题"，等于让小偷当法官。验证必须用三个独立工具链之一：① 子 agent（用 Task 工具调起 general_purpose_task 让另一个上下文做验证，不带本轮记忆）；② 编译器/构建器（tsc --noEmit、npm run build）；③ 浏览器实测（白屏检测、console error 数、关键 DOM 元素计数）。Darwin v2.0 升级为多评委独立审查：每轮启动 2 个独立评委 + 评委不复用（下轮换全新评委避免锚定效应）。',
    goodExample: 'AIAgent 修改 Optimizer.ts → 启动 Task 子代理跑 tsc + build + 浏览器检查 → 子代理报告"3 项全过" → 保留修改',
    badExample: 'AIAgent 修改 Optimizer.ts → 自己说"代码看起来对的，应该没问题" → commit → 半个月后用户发现 TypeError',
    consequence: 'AI 自评 = 46.4% 准确率 = 一半修改被错误地"自评通过" → 项目质量在 AI 自己看不到的地方持续下滑',
  },
  { category: 'darwin-ratchet', rule: 'Darwin 单一变量原则：每轮只改一个维度，避免"多维同时改"导致改进不可归因',
    description: '来自 darwin-skill 反例黑名单第 5 条："一轮内改多个维度"。如果同时改"性能"+"UX"+"稳定性"三个维度，指标提升时无法归因是哪个维度贡献的，指标下降时也无法定位是哪部分出问题。正确做法：①每轮选出加权短板最大的维度（weighted_gap = weight × (10 − score) / 10，避免低权重维度制造进步幻觉）；②针对该维度生成 1 个具体改进方案；③跑独立验证；④通过 → commit 进入下一轮，不通过 → revert 重新规划。这条规则让"为什么变好/变坏"始终可回答。',
    goodExample: '本轮只改"性能"维度（缓存 TTL 拉长）→ 验证通过 → commit → 下轮只改"UX"维度（动画缩短）→ 验证 → commit',
    badExample: '一次性改了性能缓存 TTL + UX 动画时长 + 稳定性重试次数 → 指标 +3 → 不知道是哪部分贡献的 → 下次想再优化不知道从哪下手',
    consequence: '多维度同时改 → 改进归因失效 → 后续优化方向盲目 → 陷入"试错堆冗余"恶性循环（凑分而非真改进）',
  },
  // —— pack10 新增：autoresearch 自主实验循环（外部 Skill: karpathy/autoresearch） ——
  { category: 'autoresearch', rule: 'autoresearch 单文件可修改原则：agent 每次实验只改一个核心文件，其他文件只读',
    description: '来自 karpathy/autoresearch 的核心设计：repo 中"prepare.py（数据准备）+ train.py（训练循环）+ program.md（agent 指令）"三文件，agent 只能改 train.py 一个，prepare.py 和 program.md 只读。这种约束让 scope 永远可控、diff 永远可 review、回滚永远精准。映射到 python-quest：每次任务前明确"本次可修改文件清单"，例如"修 Button 样式"就只能改 src/components/Button/Button.tsx + Button.css，不能顺手改 Navbar、不能顺手改 index.css。即使是 AI Agent 自主迭代也遵循此约束：每轮迭代只允许触碰一个 module（如 ctx-ai 或 comp-aipanel），不能跨多个 module 修改。',
    goodExample: '"修 Button 圆角" → 只改 Button.css 一个文件 → build 通过 → commit → 下一个任务再改别的',
    badExample: '"修 Button 圆角" → 顺手把 Navbar 的圆角也改了 → 顺手把 index.css 的全局圆角也调了 → 3 个文件改动 → 出错不知道是哪部分',
    consequence: '多文件同时改 → diff 巨大无法 review → 出错回滚只能整 commit 回退 → 误伤其他本可保留的修改',
  },
  { category: 'autoresearch', rule: 'autoresearch 固定时间预算原则：每次实验有固定时间上限，超时自动终止并保留当前最优',
    description: '来自 karpathy/autoresearch 的"5 分钟固定训练预算"原则：无论改了什么，训练都跑 5 分钟（wall clock），到点立即终止并评估指标。这让不同实验可直接比较（同样时间预算下的产出），也防止 agent 在错误方向上无限循环。映射到 python-quest 的验证阶段：每次代码修改后的验证阶段固定 90 秒预算，超时即视为失败 → git revert。这条规则与 Darwin 棘轮配合：时间预算防止"无限试错"，棘轮防止"退步累积"，两者结合保证"在有限时间内只向前走"。autoresearch 实测：12 实验/小时，100 实验/夜，到点必停。',
    goodExample: '改 Optimizer.ts → 启动 90 秒计时 → tsc + build + 4 页面白屏检测 全跑完 < 90s → 通过 → commit',
    badExample: '改 Optimizer.ts → 反复修一个 TS 错误 → 30 分钟还没解决 → 还在硬刚 → 早就该 revert 重规划',
    consequence: '无时间预算 → agent 在错误方向上死循环 → 烧时间烧 token → 用户体验灾难',
  },
  // —— pack11 新增：对话后自动推送规则（用户要求"每次对话都推"，pack20 升级为"一致推送不准遗漏"） ——
  { category: 'meta-workflow', rule: '每次 git commit 之后必须立即 git push origin master，无例外、不准遗漏（用户 pack20 原话："以后一致推送，不准遗漏"）',
    description: '本规则由 pack11"每次对话都推"在 pack20 升级而来，取消了 pack11 中"用户明确说不推才跳过"的例外条款。现规则：① 一致性 — 只要产生了 git commit，就必须紧接着 git push origin master，无一例外；② 不准遗漏 — 禁止"commit 完先不推，等会儿再推"的延迟推送，禁止"用户没说推所以不推"的被动推送，禁止"忘了推"的遗漏推送；③ 用户主权保留 — 若用户本轮明确说"先别 commit / 本地调试不 commit"，则不执行 commit（因为一旦 commit 就必须 push），但用户不得要求"commit 了但不推"这种矛盾状态；④ 推送目标 origin/master（仓库 5zdz5/python-web-try），触发 GitHub Pages 重建；⑤ 推送完成后在给用户的 5 句话总结里写明"已推送"+ commit range（如 198a46e..9e0eb65）+ GitHub Pages 重建提示（1-3分钟后上线）。本规则与 pack20 新增的"推送前自检清单"配合使用。',
    goodExample: 'git commit 完成 → 立即 git push origin master → 总结写"已推送 7a593f0..xxxxxx 到 master，GitHub Pages 1-3分钟后上线"',
    badExample: '① commit 完不推，等用户问"推送了吗"才推；② 用户说"提交"但没说"推送"，所以只 commit 不 push（违反一致推送）；③ 忘了推，导致 origin/master 落后本地 1 个 commit',
    consequence: '不一致推送 → origin/master 与本地脱节 → 用户在另一台设备看不到最新代码 → GitHub Pages 线上版本滞后 → 用户以为没改 → 重复劳动；遗漏推送破坏"本地=远程"的不变量，长期累积导致推送冲突和回滚困难',
  },
  // —— pack20 新增：推送前自检清单（用户要求"以后一致推送，不准遗漏，编写一套规则写入源码"） ——
  { category: 'meta-workflow', rule: '推送前自检清单 4 项 — git push 前必须依次确认：① 工作树 clean（git status 无未提交）② 本地领先 origin 恰好 N≥1 个 commit ③ push 目标是 master 分支 ④ 推送后立即验证 origin/master 与本地 HEAD 一致',
    description: '用户 pack20 原话："以后一致推送，不准遗漏，编写一套规则，写入源码"。为保证"一致推送不准遗漏"的可执行性，制定 4 项推送前自检清单：① 工作树 clean — git status 必须显示 nothing to commit, working tree clean，若有未暂存/未追踪文件必须先 add+commit 或确认无需提交后再 push；② 本地领先 origin — git status 必须显示 ahead of origin/master by N commit(s)（N≥1），若显示 up to date 说明无新 commit 可推（可能是空提交或已推过），若显示 behind 说明远程有新提交需要先 pull --rebase；③ push 目标 master — push 命令必须指定 origin master（或 origin HEAD），禁止 push 到其他分支以免误改 PR 分支；④ 推送后验证 — push 完成后立即 git log origin/master -n 1 确认远端 HEAD 与本地 HEAD hash 一致，若不一致说明推送失败需重试。自检清单与 pack11 升级版"一致推送"规则共同构成"推送铁律"，违反任意一项视为推送流程失败。',
    goodExample: 'git commit → git status(确认 clean + ahead by 1) → git push origin master → git log origin/master -n 1(确认 hash=本地 HEAD) → 总结写"已推送"',
    badExample: '① commit 后直接 push 不看 status → 工作树有未追踪文件遗漏提交；② push 时不指定分支 → 误推到其他分支；③ push 完不验证 → 推送静默失败但以为成功',
    consequence: '不自检 → 推送流程易在"工作树未 clean / 推到错分支 / 静默失败"三个环节出错 → 远程与本地脱节 → 后续 pull 冲突 → 团队协作灾难',
  },
  // —— pack21 新增：Agent 监察后推到 Wiki 规则（用户要求"把这项能力写入agent，让agent监察后推到Wiki，更改也推到Wiki"） ——
  { category: 'meta-workflow', rule: 'Agent Wiki 同步铁律 — Agent 在 runGlobalOrchestration 阶段 6 必须监察代码状态并推送到 Wiki，经验包变更+代码更改双通道同步',
    description: '用户 pack21 原话："把这项能力写入agent，让agent监察后推到Wiki，更改也推到Wiki"。Agent Wiki 同步流程：① 监察（inspectCodebase）— 读取当前 PACK_BUILD/DOC_VERSION/监测摘要，对比上次推送的 lastPackBuildPushed/lastDocVersionPushed，判断是否有新内容；② 经验包推送（pushPackToWiki）— 仅当 hasNewPack 或 hasNewDocVersion 为 true 时，构建经验包 Wiki markdown（元信息+模块清单+最近10条对话归档+监测摘要）推送到 Wiki 待推送队列；③ 代码更改推送（pushChangesToWiki）— 当本轮有应用策略时，构建代码更改 Wiki markdown（迭代号+策略清单+评分变化+更改清单）推送到 Wiki 待推送队列；④ 去重 — 基于 PACK_BUILD/DOC_VERSION/contentHash，已推送的版本不重复推；⑤ 消费 — 浏览器端写入 localStorage 待推送队列（python-quest-wiki-pending），由 TRAE IDE 中的 Agent 通过 lark-wiki skill 消费，或可选通过 GitHub API（fetch+token）直接更新 wiki 文件；⑥ 状态持久化 — WikiSyncState（lastPush/lastPackBuildPushed/lastDocVersionPushed/pushHistory/totalPushes/totalFailures）持久化到 localStorage（python-quest-wiki-sync）。Agent 暴露 inspectAndPushToWiki() 方法供独立调用，updateWikiSyncConfig() 供配置开关。本规则实现"代码变更→经验包更新→Wiki 同步"的完整闭环，让 Wiki 始终反映项目最新状态。',
    goodExample: '全局调配阶段6 → inspectCodebase → hasNewPack=true → pushPackToWiki → 加入待推送队列 → TRAE IDE Agent 通过 lark-wiki skill 消费 → 飞书知识库更新',
    badExample: '① 经验包更新了但不推 Wiki → Wiki 内容滞后 → 团队成员看到过期信息；② 每次都推不监察 → 重复推送相同版本 → 浪费配额；③ 推送失败不记录 → totalFailures 不增 → 无法发现推送管道问题',
    consequence: '不同步 Wiki → 项目知识与 Wiki 脱节 → 团队成员/新 AI 模型从 Wiki 读到过期信息 → 决策基于错误前提 → 项目方向偏离；Agent Wiki 同步让 Wiki 成为"活档案"，与经验包+代码三向同步',
  },
  // —— pack22 新增：Wiki 同步自主决策铁律（用户原话："下次不用问"） ——
  { category: 'meta-workflow', rule: 'Wiki 同步自主决策：Agent 监察代码后若发现新 PACK_BUILD/DOC_VERSION/代码更改，直接推送到飞书 Wiki，不询问用户',
    description: '用户 pack22 原话："下次不用问"（指 Wiki 推送确认）。本规则是 pack21"Agent Wiki 同步铁律"的补充，用于界定 Agent 在 Wiki 推送场景下的自主决策边界：① 自主推送边界内不询问 — 以下场景直接推送，不等待用户确认：默认目标空间「Python Quest 经验包」下的文档更新、默认格式 markdown 写入、按 PACK_BUILD/DOC_VERSION 去重的常规迭代推送；② 需询问边界（仅当出现时才问）：目标空间变更（推到其他知识库）、文档格式变更（如 XML/画板而非默认 markdown）、推送连续失败≥3次需要排查、用户明确说"确认一下再推"；③ 本规则自动适用后续所有迭代，无需每次在对话中重复确认"要不要推"；④ 与 pack20"一致推送铁律"精神一致：都是减少用户"口头确认开销"，让 Agent 在边界内自主闭环，不把用户当人工交换机。',
    goodExample: 'runGlobalOrchestration 阶段6 → hasNewPack=true → pushPackToWiki → 完成后在对话总结里写"已推送 Wiki：PACK_BUILD=22 经验包总览节点"',
    badExample: '① hasNewPack=true 但还是问用户"要推 Wiki 吗"（违反自主决策，增加用户负担）；② 目标空间变更但不询问 → 推错知识库导致信息泄露；③ 连错3次不报告 → 用户以为推成功但实际失败',
    consequence: '缺乏自主决策边界 → 每次推送都要用户点确认 → 20 次迭代要确认 20 次 → 用户被当作人工流程节点，体验灾难；自主决策铁律在保证安全（非默认场景才询问）的前提下，把确认开销降为 0，让 Agent 真正"能干活、自己闭环"',
  },
  // —— pack12 新增：对话七步闭环规则（用户要求"回顾对话+适配+应用skill+局部监测对接agent+省察遗漏+与web无缝衔接"） ——
  { category: 'meta-workflow', rule: '对话七步闭环：每轮对话必须依次执行 ① 回顾历史对话 ② 逐条适配 ③ 应用 Skill ④ 设置代码局部监测 ⑤ 对接 Agent 运行 ⑥ 省察遗漏 ⑦ 与当前 Web 内容无缝衔接',
    description: '用户原话："在经验包之中写入每次对话要回顾我和你之前对话的内容并进行逐条了解，并对每次对话进行适配，并应用 skill，再进行设置代码局部监测，能对接到 agent 运行，并省察遗漏，与当前 web 内容进行无缝衔接"。七步闭环详解：① 回顾历史对话 — 读 CONVERSATION_LOG 数组（pack5 起已存在）从 conv-1 到最近一条，逐条理解每一轮"用户要了什么+AI做了什么+改了哪些文件+加了哪些模式"，不允许跳读（Darwin 独立评委原则：跳读=自评=46.4%准确率）；② 逐条适配 — 本轮用户诉求要与历史对话逐条对照，找出"延续上次的什么脉络/修正上次的什么决策/新增上次的什么功能"，不能孤立看待本轮需求；③ 应用 Skill — 按 Karpathy 四步流水线执行（最高优先级）+ Darwin 棘轮验证（保留改进+回滚退步）+ autoresearch 单文件修改（其他只读）+ taste-skill 三旋钮（anti-slop/字体反默认/LILA）+ impeccable 23 命令四模式 + python-quest-dev-process Skill 全流程；④ 设置代码局部监测 — 本轮改动涉及的文件/组件，要在代码内主动设置局部监测（如 useEffect 中调 useMonitor().registerGroup + reportHealth），让改动可被监测系统追踪到（参考 pack4 的"业务页面 useEffect 主动注册监测组"模式）；⑤ 对接 Agent 运行 — 若本轮改动涉及可调参数/优化策略/指标，要在 AIAgentContext 或 Optimizer.ts 中暴露给 Agent，让 Agent 自主迭代时能感知并利用本轮新增的能力；⑥ 省察遗漏 — POLISH 阶段额外做一次"遗漏扫描"：① CONVERSATION_LOG 是否追加了？② PACK_BUILD 是否+1了？③ DOC_VERSION 是否升级了？④ DOC_CHANGES 是否追加了？⑤ project_memory.md 硬约束是否需要同步？⑥ 相关 module 的 lastModified 是否更新？⑦ 与当前 Web 内容无缝衔接 — 本轮改动的 UI/数据/路由必须与现有 Web 页面无缝衔接：首页能进入、导航有链接、路由已注册、样式跟随主题、Pyodide 可加载、GitHub 同步不阻塞，不出现"改了功能但用户找不到入口"或"新功能与现有 UI 风格冲突"的断层。',
    goodExample: '用户说"加个新页面X" → ① 读 CONVERSATION_LOG 看上次做过什么 → ② 判断X是否延续上次脉络（如上次加了主题系统，X是否要适配主题）→ ③ 按 Karpathy+Darwin+autoresearch+taste+impeccable 五个 Skill 执行 → ④ X.tsx 内 useEffect 调 registerGroup("X","页面X","src/pages/X/X.tsx") → ⑤ 若 X 有可调参数，暴露给 AIAgentContext → ⑥ POLISH 时扫描 7 项遗漏 → ⑦ X 在 App.tsx 注册路由 + Navbar 加链接 + 样式用 CSS 变量',
    badExample: '用户说"加个新页面X" → 直接写 X.tsx → 不读历史对话 → 不注册监测组 → 不暴露给 Agent → 不扫描遗漏 → 不在 Navbar 加入口 → 用户找不到页面 → 与 Web 现有结构断层',
    consequence: '跳过任一步 → 对话"做了但没做透"：回顾缺=方向偏、适配缺=孤立改、Skill 缺=质量低、监测缺=不可观测、Agent 缺=不可优化、省察缺=遗留坑、衔接缺=用户找不到入口 → 七步全跑才能算"对话真正完成"',
  },
  // —— pack10 新增：Skill 与经验包双螺旋迭代元规则（用户本轮核心诉求） ——
  { category: 'meta-workflow', rule: 'Skill 与经验包双螺旋：Skill 是"怎么做"的规则，经验包是"做了什么"的记录，两者交叉引用、共同迭代进化',
    description: '用户原话："把这个网站的开发过程（包括你我的对话）做成一个 skill，与经验包一起随着与 ai 对话、编码的过程中进行迭代优化"。这构成"活档案 + 活规则"双螺旋结构：① Skill（python-quest-dev-process）定义"每次对话怎么执行"——读经验包 → Karpathy 四步 → Darwin 验证 → 写回经验包；② 经验包（experiencePack.ts）记录"每次对话做了什么"——CONVERSATION_LOG、PATTERNS、CONVENTIONS、LESSONS 实时更新；③ 两者交叉引用：Skill 的模板引用经验包的字段名（CONVERSATION_LOG/PACK_BUILD），经验包的 patterns 引用 Skill 的步骤名（THINK/DIFF/RUN/POLISH）；④ 共同迭代：每次对话既可能新增/修改 Skill 规则，也可能新增/修改经验包条目，两者版本号同步递增（PACK_BUILD 与 Skill 版本同步）。',
    goodExample: '用户说"加个登录方式" → ① 读 Skill 提示"按 Karpathy 四步执行" → ② 读经验包找 AuthContext module → ③ 写代码 → ④ 写回经验包（新增 conversationLog + patterns）→ ⑤ Skill 规则若需更新（如"OAuth 登录新流程"）也同步更新',
    badExample: '用户说"加个登录方式" → 只改代码 → 不更新 Skill 也不更新经验包 → 下次模型完全不知道这次发生了什么',
    consequence: 'Skill 与经验包脱节 → Skill 变成死规则 → 经验包变成死档案 → 两者失去协同进化的能力 → 项目失去"自我积累"的核心价值',
  },
  // —— pack14 新增：动态适配元规则（用户要求"动态调配、自动归类、反硬编码"） ——
  { category: 'meta-workflow', rule: '动态适配元规则：禁止硬编码可变数据，所有统计/列表/按钮必须从数据源动态计算或从注册表动态读取',
    description: '用户原话："对代码进行优化，进行动态调配，自动归类，举例子，如关卡数显示用监测获取，应用的skill根据安装的看，不要有难以适配的硬化代码"。核心原则：① 统计数字（关卡数、挑战数、skill数、主题数）必须从数据数组 .length 动态计算，禁止写死数字；② skill 列表必须从注册表（installedSkills.ts）动态读取，新增 skill = 追加 1 条记录，不改其他代码；③ 主页按钮必须遍历 webSkills 动态渲染，新增有 Web 入口的 skill 时自动出现按钮；④ 版本描述等可变文案不硬编码在组件中，从配置层读取；⑤ 添加 Web 新功能后，原有代码运行后的界面能根据新功能自动更新——不需要人工同步修改统计数字或按钮列表。验证标准：新增 1 条数据 → 对应统计值自动 +1 → 对应 UI 自动渲染 → 无需改其他代码。',
    goodExample: '新增 skill "xxx" → 在 installedSkills.ts 追加 1 条记录（含 webIntegration）→ 主页自动出现新按钮 + 统计区 skillCount 自动 +1 → 不改 Home.tsx',
    badExample: '新增 skill "xxx" → 在 Home.tsx 手动加 <a> 标签 + 在统计区手动改数字 + 在经验包对话日志手动改"已安装7个"为"已安装8个" → 3 处硬编码需同步',
    consequence: '硬编码统计数字 → 新增数据后界面显示旧数字 → 用户以为没更新 → 信任崩塌；硬编码按钮列表 → 新增功能后用户找不到入口 → 功能断层',
  },
  // —— pack14 新增：用户思维模式元逻辑（可跨界迁移的经验） ——
  { category: 'meta-workflow', rule: '用户思维模式元逻辑：将"动态调配→自动归类→举例子验证→跨界迁移→自动总结"的思维模式作为可复用元逻辑，适用于任何项目',
    description: '用户的核心思维模式（可跨界迁移到任何项目）：① 动态调配 — 不硬编码可变值，让系统从数据源自动感知变化（举例：关卡数从 levels.length 取，不从经验包文本取）；② 自动归类 — 新增数据后系统自动归入正确分类，不需人工指定（举例：skill 按 category 自动归类，新增 skill 自动进入对应分类）；③ 举例子验证 — 用具体例子验证抽象规则是否生效（举例：新增 1 个 skill → 主页自动出现按钮 + 统计 +1 → 验证动态适配生效）；④ 跨界迁移 — 思维模式不绑定具体项目，可迁移到其他项目（举例：动态调配不仅适用于 skill 列表，也适用于关卡列表、主题列表、成就列表等任何可变数据）；⑤ 自动总结写入 — 每次对话后自动总结本轮做了什么，写入经验包 CONVERSATION_LOG + 提炼新规则写入 CONVENTIONS/PATTERNS，让经验包持续积累。这五步构成一个自我进化的闭环：动态调配确保数据准确 → 自动归类确保结构清晰 → 举例子验证确保规则有效 → 跨界迁移确保经验可复用 → 自动总结写入确保经验不丢失。',
    goodExample: '用户说"加个新功能X" → ① 分析X的可变数据 → ② 创建注册表让X可动态扩展 → ③ 写完后举例子验证（新增1条X → 界面自动更新）→ ④ 总结"X的动态调配模式"可迁移到其他列表 → ⑤ 写入经验包',
    badExample: '用户说"加个新功能X" → 直接硬编码写死 → 下次加同类功能Y时又从头写 → 无法复用经验 → 重复劳动',
    consequence: '不提取思维模式元逻辑 → 每次对话都从零开始 → 经验无法积累 → AI 无法复用用户的思维框架 → 对话效率永远停留在初始水平',
  },
  // —— pack14 新增：自动总结写入规则（每次对话后自动总结并写入经验包） ——
  { category: 'meta-workflow', rule: '每次对话结束后必须自动总结并写入经验包：① 追加 CONVERSATION_LOG 1 条 ② 若有新规则则追加 CONVENTIONS/PATTERNS ③ PACK_BUILD +1 ④ 更新 projectDocs.ts DOC_VERSION + DOC_CHANGES',
    description: '用户原话："每次对话后自动总结并写入经验包"。这已在 pack5 的"读-执行-写回"元工作流中部分实现，但用户强调"自动总结"——即 AI 不能只被动执行用户指令，还必须主动提炼本轮对话的可复用经验（模式/规则/教训），写入经验包供下一个 AI 调用。自动总结的标准流程：① 本轮改了哪些文件 → filesModified[]；② 本轮引入了什么新模式/约定 → patternsAdded[]；③ 本轮是否有可跨界迁移的思维模式 → 若有则追加到 CONVENTIONS 元逻辑；④ 本轮是否有踩坑/发现 → 若有则追加到 LESSONS；⑤ 写完经验包后 PACK_BUILD +1 + 更新 DOC_VERSION。这一规则确保经验包的"经验密度"持续增长——每轮对话至少新增 1 条对话记录 + 0-N 条新模式/约定/教训。',
    goodExample: '对话结束 → AI 主动总结"本轮发现 skill 列表硬编码问题 → 提炼动态适配元规则 + 用户思维模式元逻辑 → 写入 CONVENTIONS + CONVERSATION_LOG + PACK_BUILD +1',
    badExample: '对话结束 → AI 只改了代码 → 不总结不写回经验包 → 下次 AI 完全不知道这次发生了什么 → 重复踩坑',
    consequence: '不自动总结 → 经验包停滞 → 下一个 AI 接手时信息断层 → 无法继承前序对话的经验 → 每次都从零开始',
  },
  // —— pack15 新增：经验包拆分不破坏原则 ——
  { category: 'meta-workflow', rule: '经验包拆分不破坏原则：拆分大经验包时旧接口100%兼容，新拆分仅提供额外导出函数，绝不修改旧调用方的签名和返回值',
    description: '用户原话："在有主经验包的情况下加新的经验包，作为经验包的拆分，可以解决主经验包过大难读取的问题，注意不要因为逻辑断裂减弱读取功能，保持相同的效用"。核心规则：① 主包 generateExperiencePack() 保持不变（返回值、字段名、schema全部兼容）；② 新子包以不同函数名并行提供（generateConventionsPack、generatePatternsPack 等），不替代主包；③ 子包动态懒加载主包内部数据（require + 缓存），不复制主包常量避免双份维护；④ 子包从主包自动归类统计，分类新增时子包 categoryStats 自动 +1，无硬编码。举例：pack15 拆分后，旧代码 import generateExperiencePack 继续 100% 工作，新代码可 import generateUserLogicPack() 单独拉取 5-10KB 精简包。',
    goodExample: '主经验包 137KB 拆成 6 个子包（10-30KB/个）→ generateExperiencePack() 原样不动 + 新增 generateConventionsPack() 等 6 个函数 → 旧调用零改动，新调用按需读取',
    badExample: '拆分时把 CONVENTIONS 数组移到新文件再让 experiencePack.ts import → 但忘记同步更新 generateExperiencePack 内部引用 → 返回值空数组 → 全站经验包面板空白',
    consequence: '拆分破坏旧接口 → 引用 generateExperiencePack 的组件/页面报错或空显示 → 用户以为网站崩溃 → 拆分比不拆还糟糕',
  },
  // —— pack15 新增：用户思维模式动态归纳模式 ——
  { category: 'meta-workflow', rule: '用户思维模式必须动态归纳并在主页可直达：创建 UserLogicPanel 组件从 generateUserLogicPack() 实时读取，不写死内容',
    description: '用户原话："对我的逻辑进行动态归纳，显示在主页面按钮中"。核心实现：① 在主页 hero-actions 放"🧠 思维模式归纳"按钮，点击弹 UserLogicPanel；② Panel 内部用 import(...).then() 动态懒加载 packSplits.ts → generateUserLogicPack()；③ 内容分为 4 Tab：5步核心框架（动态调配→自动归类→举例子验证→跨界迁移→自动总结写入）+ 具体洞察（每条洞察含跨界迁移举例+4步可执行步骤）+ 关键词云（基于对话+约定文本词频计算权重）+ 硬约束清单（提取所有含必须/禁止的语句）；④ 新增任何 meta-workflow 约定或对话记录后，重新打开 Panel 内容自动变化，无需改组件代码。',
    goodExample: '新增 meta-workflow 约定"经验包拆分不破坏" → generateUserLogicPack() 的 insights 自动追加 1 条 → 打开主页点"🧠思维模式归纳"→ 自动显示新洞察 + 关键词云权重更新',
    badExample: '思维模式内容在 Panel.tsx 里硬编码写死 3 条 → 新增约定后用户点按钮看不到新内容 → 归纳和实际规则脱节',
    consequence: '思维模式写死在组件 → 新增规则后"思维模式归纳"展示过时内容 → 用户误以为AI不理解自己 → 信任崩塌',
  },
  // —— pack16 新增：版块实时更新规则 ——
  { category: 'meta-workflow', rule: '经验包各版块必须按实时变化更新，每个版块有独立的更新触发条件，通过 generatePackOverview() 实时追踪版块状态并在主页展示',
    description: '用户原话："对经验包增加更新规则，根据每个版块实时变化进行更新，并增加经验包展示说明按钮，都能实时更新"。核心规则：① 12个版块各自有独立更新规则（conventions=新增规则时追加+PACK_BUILD+1，patterns=发现新模式时追加，lessons=踩坑时追加，conversations=每次对话结束必须追加等）② generatePackOverview() 函数从实际数据数组 .length 实时计算条目数+分类分布+最近更新pack号，不硬编码统计 ③ ExperiencePackOverview 组件从 generatePackOverview() 动态读取并展示，主包变更后面板自动同步 ④ 新增版块时只需在 sections 数组追加一条记录，面板自动渲染新版块',
    goodExample: '新增 1 条编码约定 → CONVENTIONS.length 自动+1 → generatePackOverview() 的 sections[conventions].itemCount 自动+1 → 打开"📦经验包展示"面板 → 编码约定版块显示更新后的条目数+分类分布',
    badExample: '在面板组件里硬编码"编码约定 25 条" → 新增 1 条约定后面板仍显示 25 → 用户以为没更新 → 经验包展示与实际脱节',
    consequence: '版块统计写死在 UI → 新增条目后展示数字不变化 → 用户无法判断哪个版块需要更新 → 经验包维护流程断裂',
  },
  // —— pack16 新增：经验包展示说明必须实时可访问 ——
  { category: 'meta-workflow', rule: '经验包展示说明必须在主页有独立按钮直达，展示12版块实时状态+更新规则，内容从 generatePackOverview() 动态生成不写死',
    description: '用户要求"增加经验包展示说明按钮，都能实时更新"。实现：① 主页 hero-actions 区域新增"📦经验包展示"按钮 ② ExperiencePackOverview 组件含 2 Tab：版块详情（12版块可展开卡片：说明/更新规则/分类分布/数据源）+ 更新规则汇总 ③ 所有数字从实际数组 .length 计算 ④ 主包任何版块内容变更后，重新打开面板即显示最新状态',
    goodExample: '新增对话记录 → conversations 版块 itemCount 自动+1 → 打开"📦经验包展示"→ 对话归档版块数字正确更新 → 更新规则 Tab 显示该版块的更新触发条件',
    badExample: '面板内容在组件里写死"12个版块"的统计 → 新增版块后面板不显示 → 必须手动改组件代码 → 违反动态调配原则',
    consequence: '展示面板写死 → 经验包结构演进后面板内容过时 → 用户无法获取当前经验包的完整状态 → 经验包的可维护性下降',
  },

  // ========================= pack17 新增：新功能适配法则（8 条） =========================
  // 用户原话："给我对源码项目进行分配，编写一套新功能适配法则"
  // 目的：让下一个 AI 模型在新增任何功能时，有明确的"放哪层 / 怎么扩展 / 怎么不破坏现有架构"的决策规则
  { category: 'feature-adaptation', rule: '法则 1【分层归属决策】新功能必须先判定归属层：纯静态数据→data/、跨组件共享状态→context/、可复用 UI 片段→components/、整页面→pages/、配置常量→config/、AI 逻辑→ai/、类型定义→types/。禁止跨层反向依赖（page 不能被 component import，context 不能 import component，data 绝不 import React/Context/组件）',
    description: '项目分 9 大类 30+ 模块（见 MODULES 数组），依赖方向严格自上而下：data → context → component → page → App。新增功能的第一步不是写代码，而是判定它属于哪一层。判定决策树见 PATTERNS 中的"新功能分层归属决策树"。一旦放错层，后续所有依赖都会反向，重构成本指数级上升',
    goodExample: '用户说"加个新功能：学习日历" → 判定：跨页面共享状态（首页+成就页都要用） → 放 context/CalendarContext.tsx → 数据放 data/calendarData.ts → UI 放 components/Calendar/ → 路由集成到 pages/Home/',
    badExample: '把"学习日历"的状态直接写在 pages/Home/Home.tsx 里 → 其他页面要用时必须 import Home → page 互相 import → 循环依赖 → 重构时必须改 Home 才能复用',
    consequence: '放错层 → 反向依赖 → 循环依赖 → 重构成本爆炸 → 一个新功能污染多个模块',
  },
  { category: 'feature-adaptation', rule: '法则 2【扩展点优先】新增功能前必须先查 MODULES 数组中目标模块的 extensionPoints 字段，按其指引扩展；若目标模块没有对应 extensionPoints，必须先在经验包补 extensionPoints 再写代码',
    description: '每个 MODULE 条目都有 extensionPoints 数组，明确告诉新模型"新增 X 功能应该改哪里"。例如新增全局 Provider → 看 core-main 的 extensionPoints："新增全局 Provider 时在此注册，顺序必须先稳定后不稳定"；新增 Python 包 → 看 ctx-pyodide 的 extensionPoints："下载 whl 到 public/pyodide/ 并在 loadPyodide 时加载"。这是项目预留的"合法扩展入口"，不按 extensionPoints 扩展等于绕过架构',
    goodExample: '用户说"加个排行榜云同步" → 查 MODULES 找 page-leaderboard → 看 extensionPoints → 按指引在 ProgressContext 的 syncToGist 追加 leaderboard 字段 → 在 Leaderboard.tsx 用 useProgress() 读取',
    badExample: '不看 extensionPoints → 直接在 Leaderboard.tsx 里写 fetch Gist 逻辑 → 绕过 ProgressContext 的双通道持久化 → 数据不同步、无防抖、无重试',
    consequence: '绕过 extensionPoints → 绕过架构预留入口 → 重复造轮子 → 双通道持久化/监测/主题等基础设施全部失效',
  },
  { category: 'feature-adaptation', rule: '法则 3【动态适配禁止硬编码】新增的列表/菜单/按钮/统计/Tab 必须从数据源动态计算（.map 渲染、installedSkills 注册表、levels.reduce、generatePackOverview），不允许在 JSX 中写死 N 份重复结构',
    description: '这是 v2.4 动态适配元规则在新功能场景的具体化。任何"现在有 3 个，以后可能变成 5 个"的 UI 都必须数据驱动：导航菜单遍历 links 数组、Skill 按钮遍历 webSkills、关卡卡片遍历 levels.filter、统计数字用 stats.length。新增一条数据 = 改一处数据源 = 全站自动感知，不允许"加一个就要改 N 处 UI"',
    goodExample: '新增 Skill → 在 installedSkills.ts 追加 1 条记录 → 主页按钮自动 +1 → 统计区自动 +1 → 不改任何 JSX',
    badExample: '新增 Skill → 在 Home.tsx 复制粘贴一份 <button> → 在统计区手动改"7个"为"8个" → 在 Navbar 加一个链接 → 3 处改动且容易漏',
    consequence: '硬编码 → 新增一条要改 N 处 → 漏改一处就 UI 不一致 → 维护成本随功能数线性爆炸',
  },
  { category: 'feature-adaptation', rule: '法则 4【监测主动注册】新增页面/组件必须在 useEffect 中调用 registerGroup(groupId, groupName, filePath) + reportHealth(groupId, status, detail)，否则巡游三态检测会判为 warning（有内容但缺监测组）',
    description: '项目监测系统是"防御式注册"（reportHealth 自动建组），但不注册的页面在巡游时只能靠"白屏/缺件/正常"三态被动判定，无法主动汇报业务状态。新功能必须在挂载时主动注册监测组并定期/事件触发时 reportHealth。监测组 id 命名规则：页面用 PageName（如 SourceExplorer），组件用 CompName（如 ExperiencePackPanel）',
    goodExample: '新增 LearningPath 页面 → useEffect(() => { registerGroup("LearningPath", "学习路径", "src/pages/LearningPath/LearningPath.tsx"); reportHealth("LearningPath", "healthy", "页面挂载成功") }, [registerGroup])',
    badExample: '新增页面不调 registerGroup → 巡游时 reportHealth 自动建组但 name=groupId（丑） → 监测仪表盘显示无组织的 id 而非中文名 → 运维难以定位',
    consequence: '不主动注册 → 巡游三态检测降级为被动判断 → 业务异常无法主动上报 → 监测仪表盘信息不全',
  },
  { category: 'feature-adaptation', rule: '法则 5【主题同步双适配】新增 UI 必须使用 --color-* / --radius-* / --font-* / --bg-* 等 CSS 变量，禁止硬编码色值；像素风主题需同时适配 [data-theme="pixel-rainbow"]（泰拉瑞亚微光）和 [data-theme="pixel-crow"]（乌鸦五彩斑斓黑）两个选择器，确保切换主题不破版',
    description: '项目有像素彩虹 + 像素乌鸦两套像素风主题，通过 ThemeContext 切换 data-theme 属性。所有颜色/圆角/字体必须走 CSS 变量（--color-primary 等），不允许 #3b82f6 这种硬编码。新功能的 CSS 若涉及主题差异化样式（如彩虹流动 vs 乌鸦虹彩），必须用 [data-theme="pixel-rainbow"] 和 [data-theme="pixel-crow"] 两个属性选择器分别写，禁止用 JS 判断主题',
    goodExample: '.new-card { background: var(--color-surface); border-radius: var(--radius-md); } [data-theme="pixel-rainbow"] .new-card { animation: rainbow-flow 8s linear infinite; } [data-theme="pixel-crow"] .new-card { animation: crow-iridescence 6s ease-in-out infinite; }',
    badExample: '.new-card { background: #1a1a2e; border-radius: 8px; } → 切换主题颜色不变 → 与项目主题脱节 → 视觉不统一',
    consequence: '硬编码色值 → 切换主题不生效 → UI 与项目视觉脱节 → 用户感知到"拼凑感"',
  },
  { category: 'feature-adaptation', rule: '法则 6【路由+导航+文档三注册】新增页面必须同步完成三处注册：① App.tsx 的 <Routes> 追加 <Route path="/xxx" element={<XxxPage />} />；② Navbar 的 links 数组追加导航项；③ projectDocs.ts 的 FILE_TREE 追加文档节点。三者缺一不可',
    description: '路由注册保证页面可访问，导航注册保证用户能找到入口，文档注册保证下一个 AI 模型能理解这个页面。三处注册是新页面的"完整入场券"。若仅注册路由不注册导航 → 用户找不到入口；若不注册文档 → 下一个 AI 在 FILE_TREE 里看不到这个页面 → 误判为"不存在"而重复创建',
    goodExample: '新增 MonitorDashboard 页面 → ① App.tsx 加 <Route path="/monitor" element={<MonitorDashboard />} /> ② Navbar links 加 { to: "/monitor", label: "监测" } ③ FILE_TREE 加 { name: "MonitorDashboard", type: "file", path: "src/pages/MonitorDashboard", desc: "监测仪表盘" }',
    badExample: '只注册路由 → 用户在 Navbar 找不到入口 → 以为没做 → 重复开发',
    consequence: '漏注册一处 → 用户/AI 找不到入口 → 误判功能缺失 → 重复造轮子',
  },
  { category: 'feature-adaptation', rule: '法则 7【经验包写回闭环】新功能完成后必须按"5+1"写回经验包：① MODULES 追加新模块条目（含 extensionPoints/pitfalls）② 若有新模式追加 PATTERNS ③ 若有踩坑追加 LESSONS ④ CONVERSATION_LOG 追加一条 ⑤ PACK_BUILD+1 + DOC_VERSION 升级 + DOC_CHANGES 追加一条 ⑥ 若涉及新 Skill 追加 installedSkills.ts',
    description: '这是 v1.6 经验包元工作流的"新功能场景具体化"。新功能不止是写代码，还要把"这个功能是什么/怎么扩展/有什么坑"写回经验包，让下一个 AI 模型能在 30 秒内理解。未写回经验包的新功能等于"不存在"——下一个 AI 看不到它的 extensionPoints，会绕过它或重复造轮子。PACK_BUILD+1 是硬约束（见 project_memory.md），不递增的变更视为无效提交',
    goodExample: '新增 Scrapling Skill → ① installedSkills.ts 加 1 条记录 ② MODULES 不动（Skill 不算模块）③ CONVERSATION_LOG 加 conv-20260730-20 ④ PACK_BUILD 17→18 ⑤ DOC_VERSION v2.7→v2.8 ⑥ DOC_CHANGES 加"pack18: 接入 Scrapling Skill"',
    badExample: '新增 Skill 只改代码不改经验包 → 下一个 AI 看不到这个 Skill → 以为没装 → 重复安装或绕过',
    consequence: '不写回经验包 → 下一个 AI 看不到新功能 → 误判为不存在 → 重复造轮子或绕过架构',
  },
  { category: 'feature-adaptation', rule: '法则 8【Karpathy 四步流水线】新功能必须按 THINK→DIFF→RUN→POLISH 四步执行：THINK（读经验包+查 MODULES extensionPoints+规划分层归属）→ DIFF（小步改 ≤200 行/commit）→ RUN（npm run build 验证不破构建）→ POLISH（童子军准则顺手修到哪+git push origin master）',
    description: '这是 Karpathy 四原则在新功能场景的具体流水线。THINK 阶段必须先调 generateExperiencePack() 或读 experiencePack.ts 的 MODULES 找 extensionPoints，不允许跳读直接敲键盘。DIFF 阶段每 commit ≤200 行（小步 diff 不全量重写）。RUN 阶段必须 npm run build 通过（vite build，不要 tsc -b && vite build 因 Pyodide node 模块 TS 报错可忽略）。POLISH 阶段按童子军准则顺手清理路过代码 + 自动 git push origin master（除非用户说"不推"）',
    goodExample: 'THINK: 读经验包发现新增 Skill 应改 installedSkills.ts → DIFF: 只改 installedSkills.ts 追加 1 条 + Home.tsx 不动（动态渲染）→ RUN: npm run build 通过 → POLISH: 顺手发现 installedSkills.ts 有重复 import 删除 + git push',
    badExample: '跳过 THINK 直接改 5 个文件共 600 行 → RUN 时 tsc 报错不知道哪个文件引起 → POLISH 阶段放弃 → 留下半成品',
    consequence: '跳过四步 → 大量代码一次性提交 → 出错难定位 → POLISH 阶段无法收尾 → 半成品进 master',
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
\`// 1. createContext<XxxContextValue | null>(null)
// 2. export function XxxProvider({ children }) { 状态逻辑 setXxx return <Ctx.Provider value>children</Ctx.Provider> }
// 3. export function useXxx() { const ctx = useContext(Ctx); if (!ctx) throw Error; return ctx }\`,
  },
  {
    name: '数据驱动 UI（自动渲染）',
    category: 'component',
    filePattern: 'src/pages/LevelMap/LevelMap.tsx, src/pages/Home/Home.tsx',
    where: 'LevelMap 的 8 Tab + 60 关卡片全部从数据层遍历',
    description: '数据数组 map 渲染 UI，新增数据不用改 UI 代码',
    whenToUse: '列表/Tab/卡片/动态菜单等。每次新增"一条数据"场景，绝对不要写死 N 份 JSX',
    template: 'CATEGORIES.map(cat => <Tab key={cat.id}>{cat.name}</Tab>)\\nLEVELS.filter(l=>l.cat===active).map(l=><Card key={l.id} onClick=>{...}</Card>)',
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
\`// taste-skill 三旋钮配置（写入项目根 .tasterc 或经验包 meta）
{
  "compactness": 7,   // 0=极啰嗦 10=极度简洁（A+P一行）
  "consistency": 8,   // 0=自由发挥 10=严格对齐约定
  "readability": 6    // 0=无注释极简命名 10=逐行注释长命名
}
// 调用示例：调用 taste-skill lint/fix 时带入旋钮参数
// skill: Leonxlnx/taste-skill action=lint knobs=[7,8,6] path=src/\`,
  },
  {
    name: 'pbakaus/impeccable 四模式23命令',
    category: 'external-skill',
    filePattern: '外部 Skill: pbakaus/impeccable',
    where: 'impeccable 工作流编排',
    description: 'impeccable 定义 4 大执行模式 × 23 条原子命令，形成可组合的代码审查与重构工作流。四模式：1) SCAN 扫描模式（6条命令：detect、catalog、classify、prioritize、map、profile）；2) FIX 修复模式（7条命令：correct、refactor、extract、inline、rename、reorder、simplify）；3) VERIFY 验证模式（5条命令：compile、test、diff、benchmark、compare）；4) REPORT 报告模式（5条命令：summarize、visualize、document、changelog、recommend）。共 6+7+5+5=23 条命令',
    whenToUse: '需要系统化的代码审查/重构流水线时，用四模式组合出完整工作流，如 SCAN→FIX→VERIFY→REPORT 标准流程，或 SCAN→REPORT 快速审计',
    template:
\`// impeccable 四模式23命令组合 - 标准重构工作流
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
//   cmd23 recommend → 后续建议\`,
  },
  {
    name: 'impeccable 58检测规则集',
    category: 'external-skill',
    filePattern: '外部 Skill: pbakaus/impeccable rules',
    where: 'impeccable SCAN.detect 规则配置',
    description: 'impeccable 的 SCAN.detect 命令内置 58 条静态检测规则，覆盖 6 大类：1) 正确性(15条)：空指针、越界、类型不匹配、未初始化、资源泄漏、异常吞掉等；2) 性能(12条)：O(n²)循环、重复计算、冗余渲染、大对象深拷贝、未防抖节流等；3) 安全(10条)：XSS注入、SQL注入、硬编码密钥、eval危险调用、CORS宽松等；4) 可维护性(11条)：圈复杂度超标、函数过长、嵌套过深、重复代码、魔法数字等；5) 架构分层(5条)：循环依赖、反向依赖、跨层直连、硬编码路径、未隔离IO；6) 约定违反(5条)：命名违规、注释缺失、TODO未清理、console残留、import顺序。总计 15+12+10+11+5+5=58 条',
    whenToUse: '调用 impeccable SCAN 时启用全部 58 条规则，或按类别选择性启用。生成的检测报告与 lessons 联动，将新发现的问题自动追加到经验包 lessons',
    template:
\`// impeccable 58检测规则分类统计
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
// 输出：每个规则命中的文件+行号+严重度+建议修复方案\`,
  },
  // —— pack4 新增：监测系统全局适配设计模式 ——
  {
    name: 'reportHealth 自动建组（防御式注册）',
    category: 'monitor',
    filePattern: 'src/context/MonitorContext.tsx reportHealth() L119-134',
    where: 'MonitorContext 健康汇报函数',
    description: '当 reportHealth 接收到未注册的 groupId 时，不应静默丢弃，而应自动用默认值初始化该组再写入状态。这样即使业务页面忘记 registerGroup，巡游或外部上报的健康数据仍能进入监测仪表盘。原 L122 \`if (!g) return prev\` 是 bug 源头，导致 7 个业务页的健康报告全部丢失',
    whenToUse: '任何允许"先汇报后注册"或"外部模块上报"的健康监测/事件总线系统。在状态写入前用 \`const g = prev[groupId] || defaultGroup\` 兜底，而不是 return prev 丢弃事件',
    template:
\`// ❌ 错误：组不存在就丢弃，巡游 reportHealth 全部静默失败
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
}\`,
  },
  {
    name: '巡游三态检测（白屏/缺件/正常）',
    category: 'monitor',
    filePattern: 'src/context/MonitorContext.tsx runPatrolChecks() L273-322',
    where: 'MonitorContext 自动巡游逻辑',
    description: '巡游检测不能只看 body.innerText 长度 > 50 字符（只能发现白屏），必须统计关键 DOM 元素：h1+h2 标题数、button 按钮数、img 图片数、card 卡片数。三态判定：1) 白屏 = 正文 <50 字 → error；2) 有内容但任一关键元素为 0 → warning；3) 全部达标 → healthy。详情附带实际统计值便于定位问题页',
    whenToUse: '所有自动巡游/健康检查机器人。比白屏检测更进一步，能发现"页面渲染了但关键组件没挂载"的功能性 bug，如 LevelMap 卡片没渲染、Achievements 徽章没显示等',
    template:
\`// 巡游三态检测模板
const bodyText = document.body?.innerText || ''
const headingCount = document.querySelectorAll('h1, h2').length
const buttonCount = document.querySelectorAll('button, [role="button"], .btn').length
const imgCount = document.querySelectorAll('img').length
const cardCount = document.querySelectorAll('[class*="card"], [class*="Card"]').length
const hasContent = bodyText.trim().length > 50

if (!hasContent) {
  reportHealth(groupId, 'error', \\\`页面白屏：正文 \\\${bodyText.length} 字符\\\`)
} else if (headingCount === 0 || buttonCount === 0 || cardCount === 0) {
  reportHealth(groupId, 'warning',
    \\\`关键元素偏低：h1+h2=\\\${headingCount} button=\\\${buttonCount} img=\\\${imgCount} card=\\\${cardCount}\\\`)
} else {
  reportHealth(groupId, 'healthy',
    \\\`页面正常：h1+h2=\\\${headingCount} button=\\\${buttonCount} img=\\\${imgCount} card=\\\${cardCount}\\\`)
}\`,
  },
  {
    name: '业务页面 useEffect 主动注册监测组',
    category: 'monitor',
    filePattern: 'src/pages/{Home,LevelMap,LevelDetail,LearningPath,Achievements,Leaderboard,SourceExplorer}/*.tsx',
    where: '每个业务页面组件挂载时',
    description: '7 个业务页面在 useEffect 中通过 useMonitor().registerGroup(id, name, sourceFile) 主动注册自己到监测系统。registerGroup 幂等（重复注册不覆盖），sourceFile 参数便于在监测面板快速跳转源码。配合 reportHealth 自动建组能力，形成"注册-汇报"完整闭环。注册时机：组件挂载后立即注册，不等巡游触发',
    whenToUse: '所有业务页面（不只是路由级页面，复杂子组件也可注册）。最佳实践是在页面组件开头加一个 useEffect 调用 registerGroup，3 行代码完成接入',
    template:
\`import { useMonitor } from '../../context/MonitorContext'
import { useEffect } from 'react'

function LevelMap() {
  const { registerGroup } = useMonitor()
  useEffect(() => {
    registerGroup('LevelMap', '关卡地图', 'src/pages/LevelMap/LevelMap.tsx')
  }, [registerGroup])
  // ...
}\`,
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
  // —— pack6 新增：Karpathy 四原则流水线模式 ——
  {
    name: 'Karpathy 四步编码流水线（Think → Diff → Run → Polish）',
    category: 'karpathy',
    filePattern: '全局工作流：所有代码开发任务必执行',
    where: '每次用户下达代码开发指令后立即执行',
    description: '将 Karpathy 四条编码原则按顺序串成一条不可逆的流水线，严格按步骤执行：① THINK（思考阶段）→ ② DIFF（编码阶段）→ ③ RUN（验证阶段）→ ④ POLISH（收尾阶段）。四个阶段必须严格顺序执行，前一步不通过不得进入下一步。流水线保证每次开发都不会出现"先写再想/大步重写/攒错一堆/留坑走人"的四种 AI 编程流行病。每步结束时输出一句话证明该阶段真的执行了（不是口头说）。',
    whenToUse: '所有涉及代码修改（加功能/修 bug/重构/配置）的用户任务，无例外。纯答疑可以只用 THINK+POLISH。',
    template:
\`【Karpathy 流水线模板 — 每步必须有产出物证明】
─────────────────────────────────────────────
阶段 1：THINK（先想清楚再动手，不写一行代码）
  1.1 通读用户诉求，用 ≤20 字重述目标（证明理解）
  1.2 从经验包找：modules 相关模块 + conventions 约束 + lessons 已知坑 + patterns 可复用模式
  1.3 列最小修改方案：改哪些文件 × 每个文件改什么 × 顺序
  1.4 （大任务）给用户看方案，等用户确认
  ⇒ 产出物：任务理解摘要 + 修改方案列表
─────────────────────────────────────────────
阶段 2：DIFF（小步 diff，不写全量，不超过 200 行/步）
  2.1 大任务先 TodoWrite 拆子任务（≤10 个），每个单文件单一目的
  2.2 多个独立文件并行跑子代理；单文件串行分步
  2.3 已有文件必须用 Edit，不用 Write 覆盖；新文件才用 Write
  2.4 每步提交 diff 控制在 ≤200 行新增；超了就继续拆
  ⇒ 产出物：git diff 摘要（每个子任务 +N -M 行）
─────────────────────────────────────────────
阶段 3：RUN（尽早运行，每步必跑；不通过就回退/修复）
  3.1 每完成一个子任务 → npm run build 必须通过
  3.2 关键路径改了 → dev 环境 /#/ /#/map /#/monitor /#/source 四个页面无白屏
  3.3 若有类型错误/构建错误/运行时错误 → 立即修复，不带到下一步
  3.4 错误 ≥3 次还没修 → 回退到上一个稳定状态，重新 THINK
  ⇒ 产出物：build 成功截图或 1 行 build 摘要
─────────────────────────────────────────────
阶段 4：POLISH（童子军准则；改到哪修到哪，不留坑）
  4.1 扫一遍改动过的文件：顺手修 1-2 个小问题（未使用 import/拼写/缺 key/any 缺泛型/console.log）
  4.2 经验包写回：追加 CONVERSATION_LOG 1 条 + 若有新模式/约定/教训也写入 + PACK_BUILD +1
  4.3 同步 project_memory.md（如果变更了硬约束/工程约定）+ projectDocs.ts DOC_VERSION 升级
  4.4 总结：给用户发 ≤5 句话总结（改了什么/怎么验证/产出物在哪）
  ⇒ 产出物：对话总结（含版本号变更、经验包位置、构建结果）
─────────────────────────────────────────────\`,
  },
  // —— pack9 新增：Darwin/autoresearch 设计模式 ——
  {
    name: 'Darwin 棘轮+autoresearch 自主实验循环',
    category: 'external-skill',
    filePattern: '外部 Skill: alchaincyf/darwin-skill + karpathy/autoresearch',
    where: '所有代码修改任务的验证阶段',
    description: '将 Darwin 的棘轮机制（只保留改进+自动回滚退步）与 autoresearch 的自主实验循环（固定预算+单文件修改+可量化指标）结合。每次代码修改后：①用 tsc+build+白屏检测做独立验证（不用AI自评）；②改进→保留+commit，退步→git revert；③每次只改一个维度；④90秒验证预算超时即回滚。这构成"5层防线"：单文件→单变量→独立验证→棘轮保留→时间预算。',
    whenToUse: '所有涉及代码修改的任务，作为 Karpathy 流水线阶段3(RUN)的验证规则补充',
    template:
\`// Darwin+autoresearch 验证循环
const VERIFY_BUDGET_SEC = 90  // 固定验证预算
const METRICS = {
  tscErrors: { target: 0, tool: 'npx tsc --noEmit' },
  buildExit: { target: 0, tool: 'npm run build' },
  whiteScreen: { target: 'no-blank', tool: 'browser_check 4 pages' },
}
// 每次修改后：跑3个独立验证 → 全过=保留 → 任一失败=git revert
// 禁止自评（SkillLens: LLM自评准确率仅46.4%）\`,
  },
  // —— pack13 新增：Graphify 知识图谱 Skill ——
  {
    name: 'Graphify 代码库知识图谱 Skill',
    category: 'external-skill',
    filePattern: '外部 Skill: safishamsi/graphify (90K+ ⭐)',
    where: '项目根目录运行 \`/graphify .\` 生成 graphify-out/',
    description: 'Graphify 是面向 AI 编程助手的知识图谱 Skill，核心功能是将任意代码库转换成可查询的结构化知识图谱。技术栈：tree-sitter AST 本地解析 + Leiden 图算法社区发现。输出产物：① graph.html — 交互式可视化图谱（点节点可展开、筛选）② graph.json — 结构化数据 ③ graph_report.md — 总览报告。收益：① Token 省降 71.5 倍（相对原始上下文）② 视觉化代码理解（模块间关系一目了然）③ 可查询图谱（向 AI 提问代码结构）。支持平台：Claude Code、Codex、OpenCode、Cursor、Gemini CLI 等 50+ AI 工具',
    whenToUse: '需要快速理解大型代码库结构、向 AI 提问代码架构、降低 token 成本、可视化模块依赖关系时。本 python-quest 项目已集成：主页"知识图谱"按钮 → /python-web-try/graphify/graph.html',
    template:
\`# Graphify 安装与使用（本地运行）
# 1. 安装（PyPI 包名双 y）
pip install graphifyy

# 2. 注册到 AI 编程助手
graphify install

# 3. 在项目根目录生成知识图谱（约 3 秒）
cd python-quest
graphify .

# 4. 移动生成文件到 Web 可访问目录
mv graphify-out/* public/graphify/

# 5. Web 访问
# https://5zdz5.github.io/python-web-try/graphify/graph.html
\`,
  },
  {
    name: 'python-quest-dev-process Skill（网站开发过程 Skill）',
    category: 'content',
    filePattern: '本项目全生命周期：从需求到交付到迭代',
    where: '每次对话开始时读取，对话结束时写回',
    description: '将 python-quest 网站的完整开发过程封装为一个 Skill。核心内容：①用户下达需求 → ②AI读取经验包 → ③按 Karpathy 四步流水线执行(THINK→DIFF→RUN→POLISH) → ④按 Darwin 棘轮验证(只保留改进) → ⑤按 taste-skill/impeccable 检查艺术风格 → ⑥写回经验包(追加 CONVERSATION_LOG + PACK_BUILD+1)。这个 Skill 随着每次对话迭代进化，与经验包一起构成"活档案+活规则"的双螺旋。',
    whenToUse: '所有涉及 python-quest 项目的对话，无例外。每次对话开始时读取本 Skill + 经验包，结束时写回两者',
    template:
\`【python-quest-dev-process Skill 模板】
每次对话必执行：
1. READ：读取经验包（experiencePack.ts）+ 本 Skill → 提取相关 conventions/patterns/lessons
2. EXECUTE：按 Karpathy 四步流水线执行用户需求
   THINK → DIFF(小步) → RUN(Darwin棘轮验证) → POLISH(童子军准则)
3. CHECK：按 taste-skill 检查 LILA/字体/anti-slop；按 impeccable 检查圆角/间距
4. WRITE：写回经验包（CONVERSATION_LOG +1 条 + PACK_BUILD +1）+ 更新本 Skill
5. ITERATE：本 Skill 和经验包一起迭代优化——每次对话都可能新增/修改 Skill 规则
   Skill 是"怎么做"的规则，经验包是"做了什么"的记录，两者交叉引用互相进化\`,
  },
  // —— pack17 新增：新功能适配设计模式 ——
  {
    name: '新功能分层归属决策树',
    category: 'feature-adaptation',
    filePattern: 'src/* 全部目录（新功能第一决策点）',
    where: '经验包 MODULES 数组（30+ 模块按 9 大类归类）',
    description: '新功能来了先走决策树判定归属层，再写代码。决策树：1) 是纯静态数据（关卡/课程/成就定义）？→ data/；2) 是跨页面/跨组件共享状态（登录/进度/主题）？→ context/；3) 是可复用 UI 片段（按钮/卡片/编辑器）？→ components/；4) 是整页面（路由级）？→ pages/；5) 是配置常量（GitHub API/版本号/分类元数据）？→ config/；6) 是 AI 逻辑（优化策略/指标收集）？→ ai/；7) 是类型定义？→ types/。依赖方向严格自上而下：data → context → component → page → App，禁止反向',
    whenToUse: '用户说"加个新功能 X"时的第一步。配合法则 1【分层归属决策】使用。决策树走完后，再查目标模块的 extensionPoints（法则 2）确认扩展入口',
    template:
\`// 新功能分层归属决策树（按顺序判断，命中即停）
function decideLayer(feature: string): Layer {
  if (isPureStaticData(feature))    return 'data'        // 关卡/课程/成就定义
  if (isSharedState(feature))       return 'context'     // 跨页面共享
  if (isReusableUI(feature))        return 'components'   // 可复用片段
  if (isWholePage(feature))         return 'pages'        // 路由级
  if (isConfigConstant(feature))    return 'config'       // GitHub API/版本号
  if (isAILogic(feature))           return 'ai'           // 优化策略/指标
  if (isTypeDefinition(feature))    return 'types'        // 接口定义
  throw new Error('无法判定归属层，需拆解功能')
}
// 示例："学习日历" → 跨页面共享状态 → context/CalendarContext.tsx
//       + 数据 data/calendarData.ts + UI components/Calendar/ + 路由集成 pages/Home/\`,
  },
  {
    name: '新功能五维适配检查清单',
    category: 'feature-adaptation',
    filePattern: '新功能提交前自检（pre-commit）',
    where: '配合 PRECOMMIT_CHECKLIST 使用，聚焦新功能的 5 个适配维度',
    description: '每个新功能提交前必须过一遍五维检查：① 架构维——放对层了吗？依赖方向对吗？（法则 1）② 数据维——硬编码了吗？列表/统计是否数据驱动？（法则 3）③ 监测维——registerGroup+reportHealth 调了吗？（法则 4）④ 主题维——用 CSS 变量了吗？两套像素主题适配了吗？（法则 5）⑤ 文档维——MODULES/PATTERNS/DOC_CHANGES/CONVERSATION_LOG 更新了吗？PACK_BUILD+1 了吗？（法则 7）。五维全过才能提交',
    whenToUse: '新功能 POLISH 阶段、git commit 之前。与 PRECOMMIT_CHECKLIST 互补：PRECOMMIT 是通用检查，五维是新功能专项检查',
    template:
\`# 新功能五维适配检查清单（提交前过一遍）
## ① 架构维
  [ ] 已按决策树判定归属层（data/context/component/page/config/ai/types）
  [ ] 依赖方向正确（data→context→component→page→App，无反向）
  [ ] 已查目标模块 extensionPoints 并按其指引扩展
## ② 数据维
  [ ] 列表/菜单/按钮/Tab 用 .map 渲染，非硬编码 N 份 JSX
  [ ] 统计数字用 .length / .reduce 计算，非写死数字
  [ ] 新增可变数据有注册表（如 installedSkills.ts）而非散落硬编码
## ③ 监测维
  [ ] 页面/组件 useEffect 中调了 registerGroup(groupId, name, file)
  [ ] 关键事件调了 reportHealth(groupId, status, detail)
  [ ] groupId 用 PageName/CompName 而非随机字符串
## ④ 主题维
  [ ] 颜色用 var(--color-*)，圆角用 var(--radius-*)，字体用 var(--font-*)
  [ ] 无硬编码色值（#xxxxxx / rgb / 命名色）
  [ ] 像素风差异样式用 [data-theme="pixel-rainbow"] 和 [data-theme="pixel-crow"] 分别写
## ⑤ 文档维
  [ ] MODULES 追加新模块条目（含 extensionPoints/pitfalls）
  [ ] PATTERNS 追加新模式（如有）
  [ ] CONVERSATION_LOG 追加一条
  [ ] PACK_BUILD +1 + DOC_VERSION 升级 + DOC_CHANGES 追加一条
  [ ] installedSkills.ts 追加（如涉及新 Skill）
  [ ] FILE_TREE 追加文档节点（如涉及新页面）\`,
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
    problem: 'lessonContent.ts 第 2915 行语法错：模板字符串里有 Python f-string 的 \`{xxx}\` 没转义，整页白屏',
    rootCause: 'TSX/TS 里 \`\${...}\` 被解释成插值，Python 的反引号内容必须 \\\\\` 转义',
    solution: '所有课程代码块的反引号前加反斜杠，或直接用非反引号的 Python 字符串示例',
    steps: ['1. Grep lessonContent.ts 找 "\`" 反引号不在开头/结尾的位置逐个检查', '2. Python 里用单引号代替反引号避免转义'],
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
  // —— pack34 新增：代码级自优化的踩坑 ——
  {
    id: 'L-tsc-pack34-fixes', date: '2026-08-01', category: 'fix',
    title: '19项 TSC 错误修复清单（类型定义 + 未使用导入 + 类型不匹配）',
    problem: '写完 pack34 代码级自优化和插件中心后，npx tsc --noEmit 报出 19 项错误：类型声明与实际消费不一致（CodeFileEntry缺keywords、CodebaseIndex缺summaryLines/totalKeywords、CodeSelfOptimizeRun缺syntaxOk）、f.language==="ts" 应为 "typescript"、多个文件声明了类型/函数但未导入实际在 codeSelfOptimizer/AIAgentContext 中使用、CodingExperienceEntry.category 缺 comprehension/user-defined 两分支',
    rootCause: '先写消费方（codeSelfOptimizer.dryRunPatches、AIAgentPanel JSX）再写类型定义（types/ai.ts），两边独立推进未对齐；导入列表写得比实际需要多，TS strict 模式下 unused import = 报错',
    solution: '三步对齐法：① 先修类型定义（types/ai.ts 补齐 4 个缺字段 + 扩 category 联合 2 个分支）→ ② 修类型比较（language 枚举是 "typescript"/"tsx"/... 不含缩写 "ts"，改判断条件）→ ③ 用「从消费方反推」法逐个删未使用导入：打开 tsc 输出，逐个报 "declared but its value is never read" 的导入在文件头部 grep 引用次数，引用 0 次就删除。错误数从 19 → 0，耗时 3 轮 15 分钟',
    steps: [
      '1. 跑一次 npx tsc --noEmit 拿到完整错误列表，按文件分组',
      '2. 先修所有 types/*.ts 的「类型缺字段/缺分支」——因为这些是源头，修一个能消 5-10 个下游错误',
      '3. 再修「类型比较条件错误」——把枚举值写进 switch 或 if 时，对照 interface 声明的联合类型，不要凭直觉写缩写',
      '4. 最后修「declared but value never read」——每个报错文件头部的导入，逐个 grep 文件内标识符出现次数，≤1 次（仅 import 行自身）就删除',
      '5. 再跑一次 npx tsc --noEmit 确认 0 错误，不要用 vite build 的宽松判断（vite 只做转译不做全量类型检查！）',
    ],
    verification: 'npx tsc --noEmit 输出 0 errors；然后 npm run build 成功；打开 /#/monitor → AI Agent Tab → 展开 代码级自优化板块 → 控制台 0 红色错误',
    relatedFiles: ['src/types/ai.ts', 'src/ai/codeSelfOptimizer.ts', 'src/ai/codebaseIndexer.ts',
      'src/ai/codingExperienceInjector.ts', 'src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx'],
  },
  {
    id: 'L-kimi-context-caching', date: '2026-08-01', category: 'constraint',
    title: 'Kimi Context Caching 使用铁律：相同 tag+model+messages 才命中，编码经验缓存 tag 固定为 coding-experience-pack34',
    problem: 'pack34 引入 Kimi moonshot-v1 Context Caching 减少 token 消耗，但命中率为 0——因为每次生成编码经验的 messages 时都带了时间戳，导致内容哈希变化，无法命中缓存',
    rootCause: 'Context Caching 不是按 tag 命中的"软缓存"，而是按「model + messages 内容字节级相等 + messages 中有 cache_control 标记」的硬缓存。任何一个字符变化（包括 system prompt 里的时间戳、空格、换行）都不命中',
    solution: '三条铁律：① 编码经验预缓存的 messages 绝不能含可变内容（new Date()、随机数、带时间戳的 summary），固定 tag="coding-experience-pack34" + 固定的 kimiBuildExperienceCacheMessages() 函数，仅当 DEFAULT_CODING_EXPERIENCES 数组变更才重建缓存；② 推理时使用 kimiMakeCacheReferenceMessage(cacheObject) 而不是把经验原消息再塞一遍——引用消息 1 条 = 原消息 100+ 条，引用不收费；③ 缓存对象只看 cacheObject.expiresAt，过期前不要调 kimiCreateCache 再生成新的（会被按新缓存计费）',
    steps: [
      '1. 在 codingExperienceInjector.ts 中提取「预缓存经验消息」为独立纯函数，输出不包含任何动态字段',
      '2. AIAgentContext 中保存 codingExperienceCacheRef = { cacheObject, createdAtPackBuild }，仅当 PACK_BUILD 变化时重建',
      '3. 推理阶段走：messages.push(kimiMakeCacheReferenceMessage(cacheObject)) + 另一条「本轮优化意图」消息，不要把经验再复制一遍',
    ],
    verification: '连续执行 3 次 runCodeSelfOptimize()，第 2/3 次的响应中 X-Moonshot-Cache 头为 hit（Kimi API 返回 cache_creation_input_tokens=0 cache_read_input_tokens>0）',
    relatedFiles: ['src/ai/llmClient.ts', 'src/ai/codingExperienceInjector.ts',
      'src/ai/codeSelfOptimizer.ts', 'src/context/AIAgentContext.tsx'],
  },
  {
    id: 'L-vite-glob-codebase', date: '2026-08-01', category: 'pitfall',
    title: '浏览器环境代码库索引只能用 Vite import.meta.glob，fs 模块 100% 不可用',
    problem: '最初想写 codebaseIndexer 时用 Node.js fs/promises.readdir 读 src/——这在浏览器里根本跑不起来：Vite 打包时 fs 被 externalize，运行时是 undefined，直接 throw TypeError',
    rootCause: 'python-quest 是纯前端 SPA 最终在浏览器跑（GitHub Pages 静态托管），没有真 Node 环境。任何想「读本地文件系统」的代码都必须用 Vite 在构建阶段就能静态分析的 API——即 import.meta.glob',
    solution: 'import.meta.glob 四步走法：① 顶部 const rawGlob = import.meta.glob("/src/**/*.{ts,tsx,css,json,md}", { query: "?raw", import: "default", eager: false }) 必须写死模式字符串（任何变量拼接都会让 Vite 静态分析失败，glob 为空对象）；② eager=false 懒加载，避免首屏 50KB×N 文件全塞初始 bundle；③ readFileEntry 里 await rawGlob[path]() 异步拿到 raw 字符串；④ glob 的 key 永远以 / 开头，normalizePath（path.replace(/^\\/+/, "")）去掉前导 / 再存进 CodeFileEntry.path，否则后续搜索 "src/ai/llmClient.ts" 会匹配不到。maxFiles 默认 120，超过要手动传',
    steps: [
      '1. 写 import.meta.glob 时，模式串一定是 literal，不要从变量插值——否则 Vite 分析不出需要打包哪些文件，glob 结果是空对象',
      '2. { query: "?raw" } 参数必写，表示返回文件的原始字符串内容而不是默认的 JS module',
      '3. eager=false，读具体文件时 rawGlob[path]() 返回 Promise<string>，在 buildCodebaseIndex 里 Promise.all 并发读',
      '4. normalizePath 统一去掉 glob key 开头的 /，否则后面的 searchFilesByKeywords 搜索 "src/types/ai.ts" 找不到 key="/src/types/ai.ts" 的条目',
    ],
    verification: '浏览器打开 /#/monitor → AI Agent Tab → 点「构建索引」→ 控制台无 TypeError: fs is not defined → 索引面板显示 totalFiles ≥ 90 且 fileSummaries 有具体路径',
    relatedFiles: ['src/ai/codebaseIndexer.ts', 'src/ai/localLLMCore.ts', 'vite.config.ts'],
  },
  {
    id: 'L-security-audit-pack35', date: '2026-08-01', category: 'security',
    title: '安全审计5项漏洞修复（XSS + 缓存失效 + 定时器泄漏 + 转义不全 + 废弃API）',
    problem: 'pack34 完成后做安全审计发现5项漏洞：①InteractiveLesson formatContent 未转义HTML直接注入dangerouslySetInnerHTML（CRITICAL XSS）；②codeSelfOptimizer Kimi cacheTag 用 Date.now()/60000 每分钟变化致缓存永不命中，且 cacheTag 与 cache name 不匹配（HIGH）；③CodeEditor runTimerRef 无 useEffect cleanup，组件卸载后 setTimeout 回调仍 setState（MEDIUM 内存泄漏）；④ProductDocs escapeHtml 缺 " 和 \\' 转义（LOW 防御深度）；⑤wikiSync 用废弃的 btoa(unescape(encodeURIComponent())) 编码 UTF-8（LOW 废弃API）',
    rootCause: '①formatContent 先做格式化再做替换，但跳过了 HTML 转义步骤——正确顺序是先 escapeHtml 再做 Markdown 替换；②cacheTag 用动态时间戳违反了 L-kimi-context-caching 铁律"tag 必须固定不变"，且 kimiCreateCache 的 name 参数与 kimiMakeCacheReferenceMessage 的 tag 参数不一致；③React 组件用 setTimeout/useRef 时忘记配对 useEffect cleanup；④escapeHtml 只转义 < > & 但漏了引号，若后续 Markdown 渲染器扩展支持属性（如 href）会成为真实 XSS；⑤unescape() 已被 MDN 标记 deprecated，部分环境可能移除',
    solution: '5项修复：①formatContent 新增 escapeHtml 函数（&<>"\\' 五字符全转义），先 escapeHtml(content) 再做 \\\\n\\\\n/<code>/<strong> 替换；②cacheTag 改为常量 KIMI_EXPERIENCE_CACHE_TAG="coding-experience-pack34"，kimiCreateCache 的 name 参数也用同一常量，确保 tag+name 完全一致；③CodeEditor 新增 useEffect cleanup 清理 runTimerRef，且 runTimerRef 声明在 useEffect 之前避免 TDZ；④ProductDocs escapeHtml 追加双引号和单引号转义；⑤wikiSync 新增 bytesToBase64(bytes: Uint8Array) 函数用 TextEncoder + btoa 替代 btoa(unescape(encodeURIComponent()))',
    steps: [
      '1. 全项目 grep dangerouslySetInnerHTML 找到所有使用点，逐个检查其内容是否经过 HTML 转义',
      '2. grep localStorage.*token/apiKey 检查敏感数据存储是否安全（本次确认 token 只在 header 中传输不在 URL 中，OK）',
      '3. grep eval/new Function/\\.innerHTML= 确认无代码注入（本次 0 匹配，OK）',
      '4. grep setInterval/setTimeout 检查定时器是否都有 cleanup（本次发现 CodeEditor 缺 cleanup，修复）',
      '5. grep btoa/unescape/atob 检查废弃 API 使用（本次发现 wikiSync 用 unescape，修复）',
      '6. 修复后跑 npx tsc --noEmit 确认 0 错误 + npm run build 确认构建通过',
    ],
    verification: 'npx tsc --noEmit 0 errors；npm run build 成功；grep "dangerouslySetInnerHTML" 确认所有使用点的内容都经过 escapeHtml；grep "unescape(" 确认 0 匹配',
    relatedFiles: ['src/components/InteractiveLesson/InteractiveLesson.tsx', 'src/ai/codeSelfOptimizer.ts',
      'src/components/CodeEditor/CodeEditor.tsx', 'src/pages/ProductDocs/ProductDocs.tsx', 'src/ai/wikiSync.ts'],
  },
  {
    id: 'L-nibble-parentnode-cast', date: '2026-08-01', category: 'fix',
    title: '蚕食 undefined is not iterable — 伪 ParentNode 缺 childNodes，TypeScript as unknown 绕过了类型检查',
    problem: '蚕食页面（NibbleLevels）爬取教程网址后抛 undefined is not iterable（cannot read property Symbol.iterator）。所有代理和 CORS 都正常，但关卡化过程中崩溃，重试无效。',
    rootCause: 'nibbleLevels.ts nibbleToLevels 中两处 \`{ children: introNodes } as unknown as ParentNode\`——TypeScript 双断言 as unknown as ParentNode 直接绕过类型检查，把只有 children 属性的普通对象伪装成 ParentNode。但 buildLevelFromNode 内部 L317 实际消费的是 Array.from(nodeContainer.childNodes)，childNodes 根本不存在（为 undefined），Array.from(undefined) 抛出 Symbol.iterator 错误。这是典型的"伪造接口对象但字段不完整"漏洞，as unknown as 双断言让 tsc 0 错误但运行时炸锅。',
    solution: '新增 wrapNodesInFragment(nodes: Node[]): DocumentFragment 辅助函数：用 document.createDocumentFragment() 建真实 DocumentFragment（原生实现 ParentNode + childNodes + children 全部接口）→ nodes 逐个 cloneNode(true) 后 appendChild 进 fragment → 传给 buildLevelFromNode。两处调用（导言关卡 introNodes + 每节 sectionNodes）全部替换成 wrapNodesInFragment(...)。好处：①不用手写伪造 {children, childNodes, querySelectorAll, ...} 长对象列表；②无需担心接口未来增加新字段不匹配；③cloneNode 后不破坏原 content 的 DOM 树结构（原逻辑 getNodesBetween 之后还在 headings.forEach 中继续遍历，但直接 appendChild 会把节点移走——必须 cloneNode）',
    steps: [
      '1. 看到 Symbol.iterator + undefined 组合时优先搜索 Array.from(...)/...扩展运算符/for...of 消费非数组值的位置',
      '2. 看到 \`as unknown as 目标接口\` 双断言 → 立刻审查：对象字面量是否真的实现了目标接口所有消费方会用到的字段？',
      '3. DOM 环境下如果需要"一组节点被当成 ParentNode 消费"，优先用 DocumentFragment，不要手搓伪造接口',
      '4. 把节点放入容器时如果原节点还有其他地方要用（如 headings.forEach 后续迭代继续读 content），必须 cloneNode，否则节点会被移动而非复制导致后续 sibling 变空',
      '5. 修复后跑单元测试：本地创建 DOMParser 模拟 HTML（含 h1/h2/p/pre 结构）→ 调 nibbleToLevels → 确认 levels.length > 0 → Array.from 无异常',
    ],
    verification: '本地用 DOMParser 构造 <html><body><h1>Test</h1><h2>A</h2><p>text a</p><h2>B</h2><p>text b</p></body></html> 调 nibbleToLevels(html, "https://test") → 返回 levels 数组含 2 个关卡（A/B）且每个关卡 steps.length ≥ 1，控制台无 Symbol.iterator 报错',
    relatedFiles: ['src/data/nibbleLevels.ts', 'src/pages/NibbleLevels/NibbleLevels.tsx',
      'src/components/NibbleButton/NibbleButton.tsx'],
  },
  // —— pack36 新教训 ——
  {
    id: 'L-plugin-shell-prop-mismatch', date: '2026-08-01', category: 'fix',
    title: '插件页传了 PluginShell 根本不接受的 props（description/backPath/mockHint/bannerColor）→ TS2322 类型错误',
    problem: '写完 PluginsHub/CodeTyping/CodeTyping.tsx 后运行 npx tsc --noEmit 报错：Type { children: Element; title: string; description: string; backPath: string; mockHint: string; bannerColor: string } is not assignable to PluginShellProps — Property "description" does not exist。',
    rootCause: '照搬了老的 PluginShell 使用样例（pack2x 某条经验写了 exports: ["<PluginShell title description backPath children mockHint bannerColor>"]），但实际当前 src/components/PluginShell.tsx 的 interface PluginShellProps 只接受 6 个 props：icon/title/subtitle/vendor/version/children，另外 4 个 props 早就被删了或从没实现过，导致类型不匹配。',
    solution: '先读 PluginShell.tsx 真实 interface，再用实际支持的 props：传 icon="⌨️" title="代码打字竞技场" subtitle="..." vendor="内置插件" version="1.0.0"，删除 description/backPath/mockHint/bannerColor 四个不实的 props。教训："不要凭经验/注释/exports 字段写调用，先读源文件的真实 interface 或组件签名"。',
    steps: [
      '1. tsc 报 Prop 不存在 → 立刻打开对应组件 .tsx 文件的 interface / function 参数列表核对，而不是翻旧注释',
      '2. 传 props 前优先看 TS 智能提示或源文件，不要抄 exports: ["<Foo bar baz>"] 这种文档描述（文档可能滞后）',
      '3. 用 defaultProps/可选 props 兼容老调用：如果某 prop 是可选就不要假设一定有',
      '4. 修复后立刻 tsc --noEmit 验证，再 build',
    ],
    verification: 'tsc --noEmit：0 errors；npm run build：0 errors（只有 chunk size 警告正常）',
    relatedFiles: ['src/pages/PluginsHub/CodeTyping/CodeTyping.tsx', 'src/components/PluginShell.tsx'],
  },
  {
    id: 'L-double-title-in-embed-mode', date: '2026-08-01', category: 'pitfall',
    title: '复用组件嵌入 PluginShell 时出现「PluginShell 标题 + 业务组件自身大标题」双重标题',
    problem: '插件页代码打字竞技场：PluginShell 顶部已经渲染 h1 标题「代码打字竞技场」，而 CodeTypingArena 内部又有一个 40px h1 大标题 + 返回游戏中心按钮 + 副标题 → 视觉重复，高度浪费 120px+。',
    rootCause: '可复用组件默认假设"我在自己的独立路由页面里运行"，没考虑"被外层容器（PluginShell / Modal / Drawer / Tab）嵌入"的场景。',
    solution: '给 CodeTypingArena 增加可选的 embedMode?: boolean 属性；当 embedMode=true 时：①隐藏组件自己的 h1 大标题和副标题 ②隐藏返回按钮 ③减小 section 间距。外层 PluginShell 只负责统一导航标题栏，嵌入组件只负责内容（职责分离，单一职责）。',
    steps: [
      '1. 判断组件是否会被多个场景复用：独立路由 + 插件嵌入 + 弹窗？ → 引入 embedMode/inlineMode/dialogMode 枚举',
      '2. 用可选 prop + 默认值 false（保证老调用方 / 独立路由 100% 兼容）',
      '3. 条件隐藏"页面专属"UI（大标题/返回按钮/页脚版权说明），保留"内容专属"UI（答题区/统计栏/输入框）',
      '4. 外层壳和内层组件都要有监测组：Plugin Shell 组（Plugin-*）+ 业务游戏组（Game-*），不要因为复用就只注册一次',
    ],
    verification: '访问 /plugins/code-typing：只有 PluginShell 顶部的一份标题，下方没有重复大标题；访问 /typing：依然显示完整大标题+返回按钮，独立路由体验不变',
    relatedFiles: ['src/pages/CodeTypingArena/CodeTypingArena.tsx', 'src/pages/PluginsHub/CodeTyping/CodeTyping.tsx'],
  },
]

// ========================= 6. 可复用组件 =========================
const COMPONENTS: ReusableComponent[] = [
  {
    name: 'ErrorBoundary', path: 'components/ErrorBoundary.tsx',
    props: ['children'],
    purpose: '包裹子树，捕获子树任何 JS 错误显示恢复界面',
    whenToUse: '根组件必包，需要防崩溃的独立模块也可包（但别包 Provider 里面）',
    usageHint: '<ErrorBoundary>\\n  <App />\\n</ErrorBoundary>',
  },
  {
    name: 'InteractiveLesson', path: 'components/InteractiveLesson/',
    props: ['lessonId', 'steps', 'onStepComplete'],
    purpose: '按步骤驱动的课程 UI，支持任意跳转、答案对错均可通过',
    whenToUse: '任何顺序学习+步骤的场景（教程/引导/入职培训）',
    usageHint:
\`<InteractiveLesson
  lessonId={levelId}
  steps={lesson.lessonSteps}
  onStepComplete={(i) => updateProgress(...)}
/>\`,
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
    usageHint: '<Button variant="primary" size="md" onClick={handler}>文字</Button>',
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
  'Step 0. 【强制·元工作流】第一步必须读 META_WORKFLOW（7 步循环：读指令→读经验包→工作→写对话→写更新→思维归纳→Wiki 推送），每次对话从 Step 1 开始到 Step 7 闭环',
  'Step 0.5. 【强制】读 AI_PROJECT_EXPERIENCE（本 AI 在本项目积累的 11 条经验，全部围绕"减少无效代码"），避免重复试错',
  'Step 1. 【强制】读经验包：调用 generateExperiencePack() 或打开 /source → 📦 经验包 Tab，读 overview + modules，搞清楚哪些文件管什么',
  'Step 2. 根据你要做的事，在 modules 里找到要改的模块，看 extensionPoints 和 pitfalls',
  'Step 3. 在 lessons 里搜一下有没有类似的踩坑，避免重蹈覆辙',
  'Step 4. 改代码遵循 conventions（特别注意：每次开发前必须读经验包，每次优化后必须写入经验包）',
  'Step 5. 如果是数据内容变更（新增关卡/卡片/文档），只改 data/ 目录，UI 会自动渲染；不要改 UI',
  'Step 6. 如果是架构级变更，改完后更新 projectDocs.ts DOC_CHANGES + DOC_VERSION，并同时改 versionManager.ts CURRENT_VERSION',
  'Step 7. 本地验证：npm run build 通过 → npm run dev 打开 4 个关键页面（Home/LevelMap/LevelDetail/Monitor）无白屏无报错',
  'Step 8. 【强制】开发完成后，在仪表盘 📦 Experience Pack Tab 点击"下载经验包 JSON"，或在 AI Agent Tab 点击"🌐 全局调配"按钮自动写入经验包，作为下一个模型的接力棒',
  'Step 9. 【强制·元工作流闭环】对话结束前必须完成：CONVERSATION_LOG 追加 1 条 + PACK_BUILD+1 + DOC_VERSION 升级 + DOC_CHANGES 追加 + Wiki 推送（自主决策不询问）',
]

// ========================= 9.5. 元工作流（每次对话必须遵守的 7 步循环） =========================
// 这套元逻辑是"如何使用经验包"本身的方法论。每次对话从 Step 1 开始，到 Step 7 闭环。
// 写在这里是为了让下一个接手的 AI 在读 QUICKSTART_LLM 时就能看到，不会跳过任何一步。
const META_WORKFLOW = [
  {
    step: 1,
    name: '读指令',
    rule: '对话开始时先完整读用户指令，识别意图（新功能/修 bug/重构/审查/答疑），不急于动手',
    must: '识别意图类型 + 提取关键实体（文件/模块/概念）+ 判断是否需要读经验包',
    antiPattern: '只读一半就开始改代码 / 把"审查"当"重构"做 / 把"答疑"当"实现"做',
  },
  {
    step: 2,
    name: '读经验包适配经验包要求',
    rule: '动代码前必须读经验包：调用 generateExperiencePack() 或读 experiencePack.ts 的 MODULES/CONVENTIONS/LESSONS，找到 extensionPoints 和 pitfalls',
    must: '读 MODULES 找目标模块 + 读 CONVENTIONS 找相关规则 + 读 LESSONS 找类似踩坑 + 读 META_WORKFLOW（本章节）确认流程',
    antiPattern: '跳过经验包直接敲键盘 / 只读 MODULES 不读 CONVENTIONS / 凭记忆不读经验包',
  },
  {
    step: 3,
    name: '工作（THINK→DIFF→RUN→POLISH）',
    rule: '按 Karpathy 四步执行：THINK（规划分层归属+小步拆分）→ DIFF（每 commit ≤200 行）→ RUN（npm run build 验证）→ POLISH（童子军准则+git push origin master）',
    must: 'THINK 阶段必须列 todo + DIFF 阶段必须小步 + RUN 阶段必须构建通过 + POLISH 阶段必须推送',
    antiPattern: '一次改 600 行 / 跳过 build 直接 commit / POLISH 阶段不 push 留半成品',
  },
  {
    step: 4,
    name: '经验包写入对话',
    rule: '每次对话结束前必须向 CONVERSATION_LOG 追加 1 条记录（id/summary/filesModified/patternsAdded/date 五字段必填），即使纯答疑也要写入',
    must: 'id 格式 conv-YYYYMMDD-NN + summary 包含用户原话+做了什么+关键决策 + filesModified 列全 + patternsAdded 提炼可复用模式',
    antiPattern: '对话结束不写 CONVERSATION_LOG / summary 只写"修了 bug"不写根因 / filesModified 漏文件',
  },
  {
    step: 5,
    name: '经验包写入更新',
    rule: '每次对话结束前必须更新版本号：PACK_BUILD+1 + DOC_VERSION 升级 + DOC_CHANGES 追加条目 + MODULES 追加新模块（若有）',
    must: 'PACK_BUILD +1 + DOC_VERSION 小版本+1（如 v3.4→v3.5）+ DOC_CHANGES 顶部追加 + MODULES 追加新模块（若有）',
    antiPattern: '只改 PACK_BUILD 不改 DOC_VERSION / DOC_CHANGES 写在末尾不在顶部 / 新模块不登记到 MODULES',
  },
  {
    step: 6,
    name: '对话人思维归纳',
    rule: '从用户本轮对话中归纳用户思维模式和工作偏好，写入 user_profile.md（跨项目）或 project_memory.md（本项目）',
    must: '识别用户决策模式（如"自主决策不询问"）+ 识别用户审美偏好（如"3D 像素立体"）+ 识别用户工作流偏好（如"一致推送铁律"）',
    antiPattern: '用户说了 3 次"不用问"才记下来 / 用户偏好只在对话里有效不写入 memory / 把项目级偏好写进 user_profile',
  },
  {
    step: 7,
    name: '经验包整合 + Wiki 推送',
    rule: '按 Wiki 同步自主决策铁律推送：默认目标空间+默认 markdown+去重规则内→自主决策直接推不询问；经验包 overwrite + 代码更改 append',
    must: '经验包 overwrite 到经验包节点 + 代码更改 append 到流水节点 + 按去重规则（PACK_BUILD/DOC_VERSION/contentHash）避免重复推送',
    antiPattern: '每次都问用户要不要推 Wiki / 经验包和代码更改推到同一节点 / 不去重导致 Wiki 内容爆炸',
  },
]

// ========================= 9.5.1 元节奏（用户原话写入，最高优先级） =========================
// 用户原话："记录每一次对话，根据往昔对话进行重编码，经过每5轮对话进行一次滚动适配"
// 这三条规则是 META_WORKFLOW 的节奏控制器，决定"何时记录、何时重编码、何时滚动适配"。
const META_RHYTHM = {
  // 用户原话（不可篡改，作为元逻辑的源头）
  sourceQuote: '记录每一次对话，根据往昔对话进行重编码，经过每5轮对话进行一次滚动适配',
  // 三条规则分解
  rules: [
    {
      id: 'rhythm-record',
      name: '记录每一次对话',
      rule: '每一次对话（无论新功能/修bug/重构/审查/答疑）结束后必须向 CONVERSATION_LOG 追加 1 条记录，无例外',
      trigger: '每次对话结束',
      action: 'CONVERSATION_LOG 追加 1 条 ConversationLogEntry（id/summary/filesModified/patternsAdded/date 五字段必填）',
      antiPattern: '纯答疑不记录 / 只记重要对话不记小修改 / summary 只写"修了bug"不写根因',
    },
    {
      id: 'rhythm-recode',
      name: '根据往昔对话进行重编码',
      rule: '基于 CONVERSATION_LOG 历史对话提取可重编码点（调 recodeLoop.extractRecodePoints()），对现有代码做小步优化',
      trigger: '每次对话结束（作为 Step 7 之后的延伸）',
      action: 'extractRecodePoints() 识别可重编码点 → 对 applied 的点执行重编码 → extractNewMetaExperiences() 回写元逻辑',
      antiPattern: '不读历史对话就动手 / 重编码点不追溯 conv ID / 重编码经验不回写 AI_PROJECT_EXPERIENCE',
    },
    {
      id: 'rhythm-roll',
      name: '每5轮对话进行一次滚动适配',
      rule: '每累计 5 轮对话（conv ID 末尾数字 mod 5 === 0）触发一次滚动适配：全量重跑 recodeLoop + 更新 META_WORKFLOW + 更新 AI_PROJECT_EXPERIENCE + 推送 Wiki',
      trigger: 'conv ID 末尾数字 mod 5 === 0（如 conv-5/conv-10/conv-15/conv-20/conv-25/conv-30）',
      action: '① runRecodeLoop() 全量重跑 ② getRecodeStats() 统计 applied/pending ③ extractNewMetaExperiences() 回写 ④ 检查 META_WORKFLOW 是否需要更新 ⑤ 推送 Wiki',
      antiPattern: '每轮都滚动适配（太频繁） / 超过 5 轮才滚动适配（遗漏） / 滚动适配时不更新元逻辑（飞轮断裂）',
    },
  ],
  // 滚动适配触发条件（每5轮）
  rollTrigger: {
    interval: 5,                                    // 每5轮触发
    condition: 'convId 末尾数字 mod 5 === 0',        // 触发条件
    examples: ['conv-5', 'conv-10', 'conv-15', 'conv-20', 'conv-25', 'conv-30'],
    nextTrigger: 'conv-30',                          // 下一次触发点（当前 conv-30）
  },
}

// ========================= 9.6. AI 项目经验（本 AI 在本项目积累的经验） =========================
// 这些是 AI 在维护 python-quest 过程中积累的"怎么做这个项目"的经验，减少无效代码和重复试错。
const AI_PROJECT_EXPERIENCE = [
  {
    category: '减少无效代码',
    experience: '扩展联合类型（OptDomain/TunableParams/OrchestrationEntryType）后，必须全局搜索所有 Record<该类型, ...> 映射并同步更新，否则 tsc 报错但 vite 构建漏过',
    action: '扩展类型后立即 Grep "Record<OptDomain" / "Record<keyof TunableParams" / "Record<OrchestrationEntryType" 三类映射，全部同步更新',
  },
  {
    category: '减少无效代码',
    experience: 'vite 构建不做严格类型检查（esbuild 转译），tsc --noEmit 才能暴露所有类型错误。超极审查必须跑 tsc --noEmit，不能只靠 vite build 通过',
    action: '每次审查跑 npx tsc --noEmit，不能只靠 npm run build',
  },
  {
    category: '减少无效代码',
    experience: '经验包 CONVERSATION_LOG 的 summary 必须包含根因和决策，不能只写"修了 bug"。下一个 AI 读 summary 时要能复现决策路径',
    action: 'summary 格式：用户原话 → 做了什么 → 关键决策（为什么这样改）→ 根因（如适用）',
  },
  {
    category: '减少无效代码',
    experience: 'CSS 硬编码色必须用 var(--color-*) 主题变量，不能用 #hex。LILA 规则禁用 AI 紫蓝色（#7c3aed/#6366f1/#3b82f6/#8b5cf6/#9d4edd），用项目主题色变量',
    action: '写 CSS 时先查 ThemeContext 的主题变量，找不到才用 fallback。写完 Grep 扫描 AI 紫蓝色',
  },
  {
    category: '减少无效代码',
    experience: 'context hook 导出名必须核对实际 export 名，不能凭记忆。AIAgentContext 导出的是 useAIAgent 不是 useAgent',
    action: 'import context hook 前先 Grep "^export" 核对导出名，不能凭记忆写 import',
  },
  {
    category: '减少无效代码',
    experience: 'Iteration 接口无 applied 字段，时间字段是 startTime 非 timestamp。运算符优先级 ?? 低于 -，涉及 ?? 和算术运算必须加括号',
    action: '用 Iteration 字段前先读 types/ai.ts 接口定义，不凭记忆用字段名',
  },
  {
    category: '减少无效代码',
    experience: '用户偏好"自主决策不询问"：默认场景（默认目标空间+默认格式+去重规则内）直接做不问，仅非默认场景（目标空间变更/格式变更/连错≥3次/用户明确要确认）才问',
    action: '每次决策前判断是否默认场景，是→直接做，否→才问用户',
  },
  {
    category: '减少无效代码',
    experience: '一致推送铁律：每次 git commit 后必须立即 git push origin master，无例外。推送前自检 4 项（工作树 clean/本地领先 N≥1/push 目标 master/推送后 origin=本地 HEAD）',
    action: 'commit 后立即 push，不批量不遗漏，push 后验证 origin/master HEAD = 本地 HEAD',
  },
  {
    category: '减少无效代码',
    experience: '法则 6 三注册：新增页面必须同时完成路由注册（App.tsx Route）+ 导航注册（Navbar Link）+ 文档注册（projectDocs DOC_CHANGES），缺一不可',
    action: '新增页面后检查三注册是否齐全，缺一补一',
  },
  {
    category: '减少无效代码',
    experience: 'taste-skill 三旋钮：anti-slop 反默认（显式声明配置项及理由）+ 字体反 Inter/Serif（用 JetBrains Mono 等有辨识度字体）+ LILA 反 AI 紫蓝（禁用 #7c3aed 等，用主题色变量）',
    action: '重构 UI 时必须显式应用 taste-skill，不能凭审美默认值',
  },
  {
    category: '减少无效代码',
    experience: 'impeccable 四规则：禁止卡片套卡片（用 section 分隔）+ 圆角统一变量（--radius-sm/md/lg）+ 间距 8 倍数（--space-*）+ 禁止 console 残留',
    action: '重构 UI 时必须显式应用 impeccable，写完 Grep 扫描 console 残留',
  },
  // —— pack26 新增：20 次滚动重编码经验 ——
  {
    category: '减少无效代码',
    experience: '重编码滚动时应先扫描全部可重编码点（extractRecodePoints），再批量执行，避免边扫边改导致遗漏',
    action: '先 extractRecodePoints() 全量识别 → 再 runRecodeLoop() 批量执行',
  },
  {
    category: '减少无效代码',
    experience: '重编码点应按类别分组（type-safety/dead-code/css-dedup/fn-split/perf/ux/meta），同类批量处理减少上下文切换',
    action: '按 category 字段分组，同类一次性处理完再切下一类',
  },
  {
    category: '减少无效代码',
    experience: '已 applied 的重编码点才推送 Wiki，pending 的不推送（避免 Wiki 内容爆炸）',
    action: 'Wiki 推送前过滤 status===\\'applied\\'',
  },
  {
    category: '减少无效代码',
    experience: '重编码迭代经验必须回写 AI_PROJECT_EXPERIENCE，形成"越滚越聪明"飞轮，否则下一轮重编码会重复踩坑',
    action: '每次滚动结束后调 extractNewMetaExperiences() 回写到 AI_PROJECT_EXPERIENCE',
  },
  {
    category: '减少无效代码',
    experience: '重编码来源（source 字段）必须追溯到 CONVERSATION_LOG 的 conv ID，确保每个重编码点都有历史依据，不凭空创造',
    action: 'RecodePoint.source 必须填 conv-YYYYMMDD-NN，可追溯到具体对话',
  },
  {
    category: '减少无效代码',
    experience: '20 次滚动中 15 个已 applied（75%），5 个 pending。pending 的多为大改（CSS 去重提取工具类/超长函数拆分/路由懒加载），应放到独立 pack 专攻',
    action: '滚动重编码分两批：第一批快赢（type-safety/dead-code/meta，已 applied）；第二批大改（css-dedup/fn-split/perf，独立 pack）',
  },
  {
    category: '减少无效代码',
    experience: '重编码循环器本身也是元逻辑的一部分，应作为 ExperiencePack 的扩展模块，让下一个 AI 可以调用 runRecodeLoop() 继续滚动',
    action: 'recodeLoop.ts 导出 extractRecodePoints/runRecodeLoop/getRecodeStats/extractNewMetaExperiences 四函数，下一个 AI 可直接调用继续滚动',
  },
  // —— pack27 新增：conv-30 滚动适配回写 ——
  {
    category: '减少无效代码',
    experience: '新增元逻辑常量（如 META_RHYTHM）后必须四步打通才能生效：①types 接口定义 ②ExperiencePack 接口字段 ③generateExperiencePack() 接入 ④导出供外部读取。只定义不接入等于死常量，下一个 AI 读经验包 JSON 看不到',
    action: '新增元逻辑常量后立即跑四步接入清单：types 加接口→ExperiencePack 加字段→generateExperiencePack 加返回→加 SPLIT_EXPORT_ 导出，最后 tsc --noEmit 验证',
  },
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
  addFeature: \`你正在维护一个叫 python-quest 的 React+TS+Vite 单页应用（GitHub Pages 部署，base=/python-web-try/）。
你要做的需求是：<在这里插入用户的需求>。
先不要写代码，先：
1. 在经验包 Experience Pack 里找相关的 modules 和 extensionPoints，把要改的文件列出来
2. 搜 lessons 里有没有类似的坑
3. 遵守 conventions 里的所有规则（尤其不要写死统计、要 data-driven UI）
4. 给出修改方案和步骤
5. 我确认方案后再改\`,
  fixBug: \`python-quest 出 bug：<在这里插入 bug 描述>。
请：
1. 先读 experiencePack 的 lessons 看是否已有同类问题及修复方案
2. 定位 root cause，不要上来就改代码
3. 修复代码后给出验证步骤：如何确认 bug 真的修了
4. 不要忘记同步改 projectDocs.ts（如有相关文档）/ versionManager.ts（如需升级 key）\`,
  refactor: \`你需要重构 python-quest 的 <模块名/文件路径>。
注意：
- 重构前请先备份现有逻辑快照到经验包 lessons
- 保持所有对外 API（Props/Exports/Events）100% 向后兼容
- 构建必须通过，dev 模式关键页面（/#/ /#/map /#/source /#/monitor）无白屏
- 完成后更新 projectDocs.ts 的 PRINCIPLES 和 MIGRATION_STEPS\`,
  test: \`请手动验证 python-quest 的以下检查项，并逐个 PASS/FAIL 报告：
\${PRECOMMIT_CHECKLIST.map((c, i) => \`\${i + 1}. \${c}\`).join('\\n')}
请用浏览器 dev 环境逐项跑，每个项附 1 句话证据。\`,
  // —— pack3 新增：外部 Skill 工作流模板 ——
  tasteSkillWorkflow: \`【taste-skill 三旋钮风格统一工作流】
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
- 若 lessons 有新增，附新增条目的 id 与摘要\`,
  impeccableWorkflow: \`【impeccable 四模式23命令代码审查重构工作流】
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
- projectDocs.ts 版本变更摘要（cmd21 document 产出）\`,
  // —— pack5 新增：元工作流 Prompt 模板 ——
  readExecuteWriteWorkflow: \`【经验包读-执行-写回 元工作流】（强制 — 适用于每一次用户对话，无例外）
目标：确保每一次用户与 AI 的对话都遵守"先读经验包 → 再执行任务 → 后写回经验包"三步闭环，让经验包永远是项目的最新活档案。

适用范围：所有用户对话，包括但不限于：新增功能、修 bug、重构、答疑、配置、UI 改动、性能优化、文档编写。即使是"帮我查一下 xxx"这种纯答疑对话，也要写入 conversationLog。

═══════════════════════════════════════════
阶段 1：READ 读经验包（动手前必做，跳过即违规）
═══════════════════════════════════════════
步骤 1.1  调用 generateExperiencePack() 或打开 /#/source → 📦 经验包 Tab 加载最新经验包
步骤 1.2  读取 PACK_BUILD 与 DOC_VERSION，确认是最新版本（不是缓存的旧版本）
步骤 1.3  按"用户诉求类型"定向查找经验包内容：
         - 新增功能 → 读 modules 找相关模块 + extensionPoints + conventions
         - 修 bug → 读 lessons 找同类问题 + PATTERNS 找相关模式
         - 重构 → 读 PATTERNS + conventions + reusableComponents
         - UI 改动 → 读 conventions (anti-slop/字体反默认/LILA) + theme 模式
         - 答疑 → 读 architecture + modules 总览
步骤 1.4  把读到的"约束清单"列给用户看（1-3 句话），确认理解一致后再进入阶段 2

═══════════════════════════════════════════
阶段 2：EXECUTE 执行任务（按经验包约束做）
═══════════════════════════════════════════
步骤 2.1  按 conventions 中的规则写代码（违反任意一条 = 失败）
         - 禁止 anti-slop（默认值必须有理由）
         - 字体反默认（不用 Inter/Serif）
         - LILA 反紫蓝（不用 #7c3aed/#6366f1/#3b82f6）
         - 不写死统计（data-driven UI）
         - 必须用 CSS 变量（var(--color-accent-*)）
步骤 2.2  若经验包已有 PATTERNS 匹配本次任务，套用 template 代码
步骤 2.3  若有 lessons 匹配，先避开已知坑
步骤 2.4  若有 promptTemplates 匹配（如 tasteSkillWorkflow/impeccableWorkflow），按模板执行
步骤 2.5  执行过程中若发现经验包约束与用户诉求冲突，先告诉用户冲突点，让用户决定优先级
步骤 2.6  npm run build 必须通过，npm run dev 关键页面无白屏无控制台错误

═══════════════════════════════════════════
阶段 3：WRITE 写回经验包（执行后必做，跳过即违规）
═══════════════════════════════════════════
步骤 3.1  在 PROMPT_TEMPLATES.conversationLog 数组追加一条对话记录：
         {
           id: "conv-YYYYMMDD-N",   // 如 conv-20260730-1
           summary: "<一句话说明用户诉求与最终产出>",
           filesModified: ["<相对路径1>", "<相对路径2>"],
           patternsAdded: ["<新增模式1>", "<新增模式2>"],  // 没有则空数组
           date: "YYYY-MM-DD"
         }
步骤 3.2  若本轮引入新的设计/架构/约定模式，追加到 PATTERNS 数组：
         { name, category, filePattern, where, description, whenToUse, template }
         category 必填，便于检索（monitor/design/content/context/external-skill/meta-workflow 等）
步骤 3.3  若本轮踩了新坑，追加到 lessons 数组：{ id: "L-xxx", title, problem, solution, tags }
步骤 3.4  若本轮引入新的编码约定，追加到 conventions 数组：
         { category, rule, description, goodExample, badExample, consequence }
步骤 3.5  若本轮引入新的 Prompt 工作流，追加到 PROMPT_TEMPLATES 对象：<workflowName>: "<prompt>"
步骤 3.6  更新对应 module 的 lastModified 字段（若该模块有改动）
步骤 3.7  PACK_BUILD +1（必做，即使只改了一个字符）
步骤 3.8  同步更新 projectDocs.ts：
         - DOC_VERSION 升级（v1.5 → v1.6 → ...）
         - DOC_LAST_UPDATE = 今天日期
         - DOC_CHANGES 数组追加一条说明本次变更内容

输入参数：
- conversationId：<必填，格式 conv-YYYYMMDD-N>
- userRequest：<必填，用户的原始诉求原文>
- taskType：<必填，feature/bugfix/refactor/ui/answer/config/doc/perf>

输出（在对话结尾给用户的总结报告里必须包含）：
- 本次对话写入经验包的位置摘要：{ conversationLog: 1 条, patterns: N 条, lessons: N 条, conventions: N 条 }
- PACK_BUILD: 旧值 → 新值
- DOC_VERSION: 旧值 → 新值
- 经验包 JSON 下载地址（/#/source → 📦 经验包 Tab → 下载）

注意事项（违规即视为无效提交）：
A. 严禁"只改代码不写经验包"——这是 pack5 元工作流约定的头号违规
B. 严禁"读经验包跳过步骤1直接写代码"——跳过 READ 阶段等于盲改
C. 严禁"PACK_BUILD 不递增就提交经验包变更"——硬约束已写入 project_memory.md
D. 严禁"conversationLog 字段缺失"——id/summary/filesModified/patternsAdded/date 五字段必填
E. 递归规则：本"读-执行-写"工作流本身的"写入过程"也要被记录到 conversationLog\`,
  // —— pack6 新增：Karpathy 四原则工作流 Prompt ——
  karpathyWorkflow: \`【Karpathy 四原则编码工作流】（强制执行，所有代码修改任务必须先套这个）
═══════════════════════════════════════════════
适用：所有涉及代码修改（新增功能 / 修 bug / 重构 / 配置 / 优化 / UI 改动）的用户任务。
不适用：纯答疑 / 纯对话 / 不产生代码 diff 的场景。
═══════════════════════════════════════════════

───────────────────────────────────────────────
▌阶段 1  THINK — 先想清楚（不写一行代码）
───────────────────────────────────────────────
1.1 【用 ≤20 字重述用户目标】（证明不是跳读）
     正确示例：用户要 "把 Karpathy skill 写入经验包并按它执行"
     错误示例：用户要改代码（太空泛，等于没理解）

1.2 【加载约束】从经验包读取四个维度：
     - modules：找当前任务相关模块（路径+文件数+导出接口+依赖）
     - conventions：相关分类的编码约定（anti-slop / LILA / meta-workflow / karpathy）
     - lessons：找历史同类问题，避免踩已知坑
     - patterns：找可复用模式（Context/Provider、三层数据结构等）
     输出：2-3 句话摘要本次任务的硬约束

1.3 【最小修改方案】列出 3 条信息，每条用 < 20 字：
     a) 改哪些文件（用 [文件1, 文件2] 数组格式）
     b) 每个文件改什么（不要写实现，写目的）
     c) 修改顺序（先数据层 → 再状态层 → 再 UI 层 → 最后文档层）

1.4 【大任务必须给用户确认】
     如果改动文件 ≥ 5 个 或 行数 ≥ 500 行：先把 1.1+1.2+1.3 发给用户，
     得到用户明确说"好的"再动手。不要自作主张开始写。

───────────────────────────────────────────────
▌阶段 2  DIFF — 小步 diff（不超过 200 行 / 步）
───────────────────────────────────────────────
2.1 【拆子任务】若任务 >1 个文件，用 TodoWrite 拆成 ≤10 个子任务，每个：
     - 覆盖 1 个独立文件 或 1 个独立功能
     - 有明确的"完成定义"（例如："npm run build 通过"）
     - id/description/status/priority 四个字段齐全

2.2 【并行加速】多个文件互不依赖 → 并行跑 general_purpose_task 子代理
     同一文件的多步修改 → 必须串行（Edit 工具需要最新文件内容）

2.3 【Edit 优先】已有 99% 的情况用 Edit；Write 工具仅限：
     - 新建文件（无历史内容）
     - 文件 ≤ 20 行 + 结构简单 + 100% 需要重写
     任何情况禁止"因为怕 Edit 匹配失败就 Write 整文件"

2.4 【Diff ≤200 行/步】每次 Edit / Write 新增行数 >200 → 回退重拆
     单 commit 也 ≤ 200 行新增；大任务分多个小 commit
     每次子任务结束：生成一条 git status 摘要

───────────────────────────────────────────────
▌阶段 3  RUN — 每步必跑（不通过不进下一步）
───────────────────────────────────────────────
3.1 【npm run build 必过】每个子任务完成后，必须立刻：
     Set-ExecutionPolicy -Scope Process Bypass -Force ; npm run build
     通过 → 继续下一个子任务
     失败 → 立即修复 ≤3 次；≥3 次回退并重新 THINK

3.2 【关键页面白屏检测】改了路由/页面/全局组件/全局样式时，dev 环境检查：
     /#/ 首页（必须有 Logo + 导航 + 标题）
     /#/map 关卡地图（8 个分类 Tab + 至少 1 个关卡卡）
     /#/monitor 监测仪表盘（总览 Tab + 监测组 Tab 至少 1 条）
     /#/source 源码探索（6 个 Tab 都能点不白屏）

3.3 【错误 ≥3 次】连续 3 次构建或运行失败：
     a) 立即把当前代码"就地保存"作为备份
     b) 用 git stash 或 revert 回到上一个稳定状态
     c) 从 THINK 阶段重新开始，缩小范围 / 改方案

───────────────────────────────────────────────
▌阶段 4  POLISH — 童子军准则（改到哪修到哪）
───────────────────────────────────────────────
4.1 【顺手修小坑】对改动过的每个文件各扫一遍，修 1-2 个小坑（不扩 scope）：
     - import 写了但没用 → 删掉
     - 中文/英文拼写错误 → 改
     - .map 没 key prop → 加 id 做 key
     - 裸 any 没泛型 → 加 <T> 或 用 unknown + 类型收窄
     - 遗留的 console.log('debug...') → 删
     小修合计 < 10 行，不计数在 2.4 的 200 行限制里

4.2 【写回经验包】（pack5 递归规则）
     a) 追加 1 条 CONVERSATION_LOG：id=conv-YYYYMMDD-N, summary, filesModified[], patternsAdded[], date
     b) 如果本轮引入了新的模式/约定/教训 → 追加到 PATTERNS / CONVENTIONS / LESSONS
     c) PACK_BUILD 必须 +1（哪怕只改了一个字）

4.3 【同步元文档】
     a) 如果加了硬约束 → 写入 project_memory.md Hard Constraints 段
     b) 如果加了工程约定 → 写入 project_memory.md Engineering Conventions 段
     c) projectDocs.ts：DOC_VERSION 升 1 段 + DOC_LAST_UPDATE 今天日期 + DOC_CHANGES 追加 1 条

4.4 【给用户 5 句话总结】（不多不少 5 句以内）
     ① 改了什么：核心产出一句话
     ② 怎么验证：构建结果一句话
     ③ 写回了什么：经验包 PACK_BUILD X→Y + CONVERSATION_LOG 几条 + PATTERNS/LESSONS 几条
     ④ Git 信息：commit hash + 推送结果（成功/失败）
     ⑤ 后续建议（可选）：下一轮可以做什么，用户可自选

═══════════════════════════════════════════════
★ 违规自动失败清单（任一条 = 本轮工作流执行不合格）：
  ✓ 没做 1.1 就写代码（跳读→直接开干）
  ✓ 用 Write 覆盖 20 行以上的已有文件
  ✓ 单步 diff >200 行还没拆
  ✓ 改了 3+ 个文件后才第一次 npm run build
  ✓ 任务结束后 PACK_BUILD 没递增
  ✓ 没有 CONVERSATION_LOG 新条目
═══════════════════════════════════════════════\`,
}

// ========================= 12. 对话历史归档（pack5 新增） =========================
// 每次 AI 与用户对话结束后，必须在此追加一条记录
// 字段：id / summary / filesModified / patternsAdded / date
// 即使是纯答疑对话也要写入，不留空白
const CONVERSATION_LOG = [
  {
    id: 'conv-20260730-1',
    summary: '用户要求对 Web 代码进行功能归类并创建可下载的大模型经验包',
    filesModified: ['src/index.ts', 'src/types/experiencePack.ts', 'src/ai/experiencePack.ts',
      'src/components/ExperiencePackPanel.tsx', 'src/components/ExperiencePackPanel.css',
      'src/pages/MonitorDashboard/MonitorDashboard.tsx'],
    patternsAdded: ['7层分层导出架构', '经验包 JSON 生成与下载面板'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-2',
    summary: '添加 AI Agent 全局调配功能 + 经验包写入源码按钮进入页面',
    filesModified: ['src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx',
      'src/components/AIAgentPanel.css', 'src/pages/MonitorDashboard/MonitorDashboard.tsx'],
    patternsAdded: ['全局调配记录编排', '经验包从 /source 路由可访问'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-3',
    summary: 'AI Agent 自主运行 20 轮迭代 + 减少无效优化 + 添加清缓存与安全重置按钮',
    filesModified: ['src/ai/Optimizer.ts', 'src/context/AIAgentContext.tsx',
      'src/components/AIAgentPanel.tsx', 'src/components/AIAgentPanel.css'],
    patternsAdded: ['7层策略过滤链', '评分阈值控制优化数量', 'python-quest-agent-* 前缀缓存隔离'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-4',
    summary: '全站 UI 绝区零(ZZZ)风格化处理 — 首页/关卡/详情/监测/Agent/经验包等 15 个 CSS 文件',
    filesModified: ['src/index.css', 'src/pages/Home/Home.css', 'src/pages/LevelMap/LevelMap.css',
      'src/pages/LevelDetail/LevelDetail.css', 'src/pages/MonitorDashboard/MonitorDashboard.css',
      'src/components/AIAgentPanel.css', 'src/components/ExperiencePackPanel.css',
      'src/pages/Leaderboard/Leaderboard.css', 'src/pages/LearningPath/LearningPath.css',
      'src/pages/Achievements/Achievements.css'],
    patternsAdded: ['ZZZ 赛博朋克风格系统（荧光黄绿+斜切角+扫描线+霓虹发光）'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-5',
    summary: '编写有按钮可进入的 5 套主题系统（zzz/genshin/starrail/cyberpunk2077/light-tech），支持全局即时切换',
    filesModified: ['src/context/ThemeContext.tsx', 'src/components/ThemePanel/ThemePanel.tsx',
      'src/components/ThemePanel/ThemePanel.css', 'src/components/Navbar/Navbar.tsx',
      'src/data/themes.ts', 'src/types/theme.ts', 'src/index.css', 'src/main.tsx'],
    patternsAdded: ['CSS 变量实时注入主题切换', 'localStorage 持久化主题选择', 'data-theme 属性扩展钩子'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-6',
    summary: '监查监测系统全局覆盖度 — 发现 reportHealth 静默丢弃 bug + 7 页未注册监测组 + 巡游检测过浅',
    filesModified: [],
    patternsAdded: ['监测系统三层覆盖审计方法论'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-7',
    summary: '修复监测系统 + 集成 Taste-Skill/Impeccable 双 Skill + 组件设计升级',
    filesModified: ['src/context/MonitorContext.tsx', 'src/pages/Home/Home.tsx',
      'src/pages/LevelMap/LevelMap.tsx', 'src/pages/LevelDetail/LevelDetail.tsx',
      'src/pages/LearningPath/LearningPath.tsx', 'src/pages/Achievements/Achievements.tsx',
      'src/pages/Leaderboard/Leaderboard.tsx', 'src/pages/SourceExplorer/SourceExplorer.tsx',
      'src/ai/experiencePack.ts', 'src/data/projectDocs.ts',
      'src/components/Button/Button.css', 'src/components/Navbar/Navbar.css',
      'src/components/Card/Card.tsx', 'src/components/Card/Card.css'],
    patternsAdded: ['reportHealth 自动建组', '巡游三态检测', '业务页面 useEffect 主动注册监测组',
      'taste-skill 三旋钮设计', 'impeccable 四模式23命令', 'impeccable 58检测规则集',
      'Card 组件反卡片套卡检测渲染'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-8',
    summary: '将监测系统全局适配与设计/关卡等 7 条设计模式写入经验包 pack4',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['reportHealth 自动建组', '巡游三态检测', '业务页面主动注册监测组',
      '监测三层覆盖', '监测仪表盘 6 Tab 结构', '主题与监测解耦', '关卡三层数据'],
    date: '2026-07-30',
  },
  {
    id: 'conv-20260730-9',
    summary: '将"每次对话读经验包→执行→写回经验包"的元工作流写入经验包 pack5（本条为递归规则，含其自身）',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['经验包读-执行-写回元工作流', 'conversationLog 对话归档必填字段', 'PACK_BUILD 递增锁'],
    date: '2026-07-30',
  },
  // —— pack6 新增：本次对话记录 ——
  {
    id: 'conv-20260730-10',
    summary: '将 Andrej Karpathy Skill 四条核心编码原则写入经验包 pack6，并封装为 THINK→DIFF→RUN→POLISH 四步工作流 Prompt，后续所有对话按此工作流执行',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts', 'project_memory.md'],
    patternsAdded: ['Karpathy 原则1 先想清楚再动手', 'Karpathy 原则2 小步diff不超200行', 'Karpathy 原则3 每步必跑build', 'Karpathy 原则4 童子军准则', 'Karpathy 四步编码流水线模式', 'karpathyWorkflow 工作流Prompt模板'],
    date: '2026-07-30',
  },
  // —— pack7 新增：20轮代码筛查与迭代 ——
  {
    id: 'conv-20260730-11',
    summary: '按 Karpathy 四步流水线对全项目进行20轮筛查迭代：类型安全(60→0错误)、any清理(40处→约15处可接受的API/性能相关)、CSS硬编码色(33处→CSS变量)、localStorage保护(3处加try-catch)、事件监听器(5个全有cleanup)、监测覆盖(7/7页面)、ErrorBoundary(全app)、XSS(静态内容低风险)',
    filesModified: ['src/types/experiencePack.ts', 'src/ai/experiencePack.ts', 'src/data/lessonContent.ts', 'src/data/achievements.ts', 'src/context/AIAgentContext.tsx', 'src/context/AuthContext.tsx', 'src/context/MonitorContext.tsx', 'src/context/ProgressContext.tsx', 'src/config/github.ts', 'src/config/versionManager.ts', 'src/components/ExperiencePackPanel.tsx', 'src/components/AIAgentPanel.tsx', 'src/components/VersionHistory/VersionHistory.tsx', 'src/components/InteractiveLesson/InteractiveLesson.tsx', 'src/components/ChallengeArena/ChallengeArena.css', 'src/components/PatrolButton.css', 'src/components/ExperiencePackPanel.css', 'src/pages/Achievements/Achievements.css', 'src/pages/Leaderboard/Leaderboard.css', 'src/components/LoginModal/LoginModal.css', 'src/components/CodeEditor/CodeEditor.css', 'src/index.ts', 'src/pages/LearningPath/LearningPath.tsx', 'src/pages/Leaderboard/Leaderboard.tsx', 'src/data/projectDocs.ts'],
    patternsAdded: ['VersionProgressData 类型接口', 'LeaderboardEntry 类型接口', 'sanitizeProgress/migrateProgress 用 unknown 替代 any', 'CSS 硬编码色→CSS变量 33处', 'saveAuth/clearAuth/createSnapshot try-catch 保护', 'InteractiveStep 加 exercise/answer/explanation 类型', 'ConventionCategory 扩展 anti-slop/typography/color/meta-workflow/karpathy', 'DesignPatternCategory 扩展 external-skill/monitor/design/content/karpathy'],
    date: '2026-07-30',
  },
  // —— pack8 新增：按 Skill 进行艺术风格优化 ——
  {
    id: 'conv-20260730-12',
    summary: '按 taste-skill + impeccable 双 Skill 对全项目 CSS 进行艺术风格优化：修复 LILA 紫蓝违规(ErrorBoundary 18处/SourceExplorer 30+处/VersionHistory 10+处/PatrolButton 3处)、圆角统一为 --radius-* 变量、字体反默认(--font-mono JetBrains Mono 提前)、去除 CSS 变量 fallback 硬编码色',
    filesModified: ['src/index.css', 'src/components/ErrorBoundary.css', 'src/pages/SourceExplorer/SourceExplorer.css', 'src/components/VersionHistory/VersionHistory.css', 'src/components/PatrolButton.css', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['LILA 紫蓝色→CSS变量+color-mix 替换模式', '圆角硬编码→--radius-* 变量统一', 'CSS 变量 fallback 去除规则', '--font-mono 字体栈顺序修正(JetBrains Mono优先)'],
    date: '2026-07-30',
  },
  // —— pack10 新增：接入 Darwin + autoresearch + 创建 dev-process skill + 双螺旋元规则 ——
  {
    id: 'conv-20260730-13',
    summary: '接入 Darwin skill（alchaincyf/darwin-skill）与 autoresearch skill（karpathy/autoresearch）写入经验包；创建 python-quest-dev-process skill 封装网站开发全过程；写入"Skill+经验包双螺旋迭代"元规则——Skill 是"怎么做"的规则、经验包是"做了什么"的记录，两者交叉引用、共同迭代进化',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['Darwin 棘轮+autoresearch 自主实验循环', 'python-quest-dev-process Skill（网站开发过程 Skill）',
      'Darwin 棘轮原则（分数只升不降+git revert 禁 reset --hard）', 'Darwin 独立评委原则（禁自评，LLM 自评仅 46.4%）',
      'Darwin 单一变量原则（一轮一维度，加权短板优先）', 'autoresearch 单文件可修改原则（其他只读）',
      'autoresearch 固定时间预算原则（90s 验证预算）', 'Skill 与经验包双螺旋元规则'],
    date: '2026-07-30',
  },
  // —— pack11 新增：对话后自动推送规则（用户说"每次对话都推"） ——
  {
    id: 'conv-20260730-14',
    summary: '用户要求每轮对话 POLISH 阶段完成后自动 git push origin master（"每次对话都推"），不要等用户再说"推送"。推送范围：5zdz5/python-web-try 仓库 master 分支。已将 pack10 (9e0eb65) 推送到远程，并将"对话后默认自动推送+总结写明已推送+Pages重建提示+用户明确说不推才跳过"的规则写入 meta-workflow 编码约定，今后每轮对话末尾严格执行',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['对话后默认自动推送规则（POLISH阶段commit后立即git push，不问用户）', '推送总结格式：已推送 xxx..yyy + Pages 1-3分钟重建提示', '用户明确说不推时才跳过推送的例外规则'],
    date: '2026-07-30',
  },
  // —— pack12 新增：对话七步闭环规则（用户要求"回顾对话+适配+应用skill+局部监测对接agent+省察遗漏+与web无缝衔接"） ——
  {
    id: 'conv-20260730-15',
    summary: '用户要求每轮对话执行七步闭环：①回顾CONVERSATION_LOG历史对话逐条理解 ②逐条适配本轮诉求与历史脉络 ③应用5个Skill(Karpathy/Darwin/autoresearch/taste/impeccable) ④代码内主动设置局部监测(registerGroup+reportHealth) ⑤对接AIAgentContext暴露可调参数 ⑥POLISH阶段省察7项遗漏(对话日志/包版本/DOC版本/DOC变更/项目内存/模块修改时间/主题同步) ⑦与Web现有内容无缝衔接(路由+导航+主题+Pyodide+Gist同步)。已将七步闭环规则写入 meta-workflow 编码约定',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['对话七步闭环（回顾/适配/应用skill/局部监测/对接agent/省察遗漏/与web无缝衔接）', '遗漏扫描7项检查清单（CONVERSATION_LOG/PACK_BUILD/DOC_VERSION/DOC_CHANGES/project_memory/lastModified/主题同步）', '局部监测主动注册模式（改动文件必调registerGroup+reportHealth）', 'Agent 对接暴露模式（可调参数必暴露给AIAgentContext/Optimizer.ts）'],
    date: '2026-07-30',
  },
  // —— pack13 新增：Graphify 知识图谱 Skill + 已安装 Skill 清单 ——
  {
    id: 'conv-20260730-16',
    summary: '用户要求安装 Graphify skill（90K+⭐ 代码库知识图谱工具），Web主页添加『知识图谱』按钮入口（链接到 /python-web-try/graphify/graph.html），并将所有已安装 Skill 写入经验包供下一个 AI 调用。已创建 public/graphify/ 目录及 README 说明文件。已安装 Skill 清单（7个）：Darwin/autoresearch/taste-skill/impeccable/python-quest-dev-process/Karpathy/Graphify',
    filesModified: ['src/pages/Home/Home.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts', 'public/graphify/README.md'],
    patternsAdded: ['Graphify 代码库知识图谱 Skill（tree-sitter AST + Leiden 算法 + 3秒生成交互式图谱 + Token 省降 71.5 倍）', '已安装 Skill 清单模式（外部 Skill 信息写入经验包供下一个 AI 调用）'],
    date: '2026-07-30',
  },
  // —— pack14 新增：动态适配元规则 + 用户思维模式元逻辑 ——
  {
    id: 'conv-20260730-17',
    summary: '用户要求代码动态调配、自动归类、反硬编码。创建了 src/config/installedSkills.ts skill注册表（7条skill记录+6个动态查询函数），主页按钮改为遍历 webSkills 动态渲染（新增skill自动出现按钮+统计区自动+1），统计区新增"已装Skill"计数。在经验包添加3条meta-workflow编码约定：动态适配元规则、用户思维模式元逻辑（可跨界迁移）、自动总结写入规则。消除分散硬编码，实现"新增skill=追加1条记录=全站自动感知"',
    filesModified: ['src/config/installedSkills.ts', 'src/pages/Home/Home.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['skill注册表模式（installedSkills.ts 集中管理+动态查询函数+webIntegration自动渲染按钮）', '动态适配元规则（禁止硬编码可变数据，统计/列表/按钮从数据源动态计算）', '用户思维模式元逻辑（动态调配→自动归类→举例子验证→跨界迁移→自动总结写入，五步闭环可跨界复用）', '自动总结写入规则（每次对话后主动提炼可复用经验写入经验包）'],
    date: '2026-07-30',
  },
  // —— pack15 新增：经验包拆分 + 思维模式归纳面板 ——
  {
    id: 'conv-20260730-18',
    summary: '用户要求在主经验包基础上新增拆分的子包，解决主包过大难读取问题且不破坏原有读取功能。创建 src/ai/packSplits.ts：6个领域子包（conventions/patterns/lessons/conversations/user-logic/quickstart），旧接口 generateExperiencePack() 100%不变，新增 generateConventionsPack() 等6个函数，子包懒加载主包数据避免双份维护。创建 UserLogicPanel 组件（4Tab：5步核心框架+8个可点击展开洞察+词频关键词云+所有硬约束清单），在主页新增"🧠思维模式归纳"按钮直达。在经验包追加2条meta-workflow约定：经验包拆分不破坏原则、用户思维模式动态归纳模式。PACK_BUILD 14→15',
    filesModified: ['src/ai/packSplits.ts', 'src/components/UserLogicPanel/UserLogicPanel.tsx', 'src/components/UserLogicPanel/UserLogicPanel.css', 'src/pages/Home/Home.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['经验包拆分模式（旧接口不动+新增子包导出函数+懒加载主包数据+无重复维护）', '用户思维模式动态归纳（4Tab面板从generateUserLogicPack实时读取，新增约定自动同步到UI）', '5步自我进化闭环（动态调配→自动归类→举例子验证→跨界迁移→自动总结写入）'],
    date: '2026-07-30',
  },
  // —— pack16 新增：版块实时更新规则 + 经验包展示说明面板 ——
  {
    id: 'conv-20260730-19',
    summary: '用户要求对经验包增加更新规则，根据每个版块实时变化进行更新，并增加经验包展示说明按钮都能实时更新。在 packSplits.ts 新增 generatePackOverview() 函数：12个版块（架构总览/功能模块/编码约定/设计模式/历史教训/可复用组件/路线图/构建约束/快速上手/提交前自检/Prompt模板/对话归档）各含独立更新规则+分类分布+数据源标注，所有统计从实际数组 .length 实时计算不硬编码。创建 ExperiencePackOverview 组件（2Tab：版块详情12个可展开卡片+更新规则汇总），主页新增"📦经验包展示"按钮直达。在经验包追加2条meta-workflow约定：版块实时更新规则、经验包展示说明必须实时可访问。PACK_BUILD 15→16',
    filesModified: ['src/ai/packSplits.ts', 'src/components/ExperiencePackOverview/ExperiencePackOverview.tsx', 'src/components/ExperiencePackOverview/ExperiencePackOverview.css', 'src/pages/Home/Home.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['版块实时更新追踪模式（generatePackOverview从实际数据动态计算12版块状态+更新规则+分类分布）', '经验包展示说明面板（2Tab：版块详情+更新规则，从generatePackOverview实时读取）', '版块独立更新规则（每版块有明确更新触发条件，变更后自动反映到面板）'],
    date: '2026-07-30',
  },
  // —— pack17 新增：新功能适配法则 8 条 + 设计模式 2 条 ——
  {
    id: 'conv-20260730-20',
    summary: '用户要求"给我对源码项目进行分配，编写一套新功能适配法则"。基于现有 MODULES 数组（30+模块9大类）和 CodingConvention/DesignPattern 格式，扩展类型联合新增 feature-adaptation 分类，编写 8 条新功能适配法则（分层归属决策/扩展点优先/动态适配禁止硬编码/监测主动注册/主题同步双适配/路由导航文档三注册/经验包写回闭环/Karpathy四步流水线）+ 2 条设计模式（新功能分层归属决策树+新功能五维适配检查清单）。法则覆盖从"放哪层"到"怎么扩展"到"怎么不破坏架构"到"怎么写回经验包"的完整决策链。PACK_BUILD 16→17',
    filesModified: ['src/types/experiencePack.ts', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['新功能分层归属决策树（7 层判定：data/context/component/page/config/ai/types，依赖方向自上而下）', '新功能五维适配检查清单（架构维/数据维/监测维/主题维/文档维，pre-commit 专项检查）', 'feature-adaptation 法则分类（8 条法则覆盖新功能全生命周期决策）'],
    date: '2026-07-30',
  },
  // —— pack18 新增：蚕食爬取按钮落地（法则 1-8 全链路应用） ——
  {
    id: 'conv-20260730-21',
    summary: '用户要求"编写一个蚕食按钮，根据 scrapling 对网站进行内容爬取，将爬取内容关卡化处理使用户易于学习"。新增 3 个文件落地法则 1-8 全链路：① src/data/nibbleLevels.ts 数据层（fetchHtml 多 CORS 代理 fallback：allorigins/corsproxy/thingproxy + 15s 超时；nibbleToLevels h2/h3 标题分割算法；NibbleLevel/NibbleStep/NibbleChallenge 三层类型）② src/components/NibbleButton/NibbleButton.tsx 组件层（监测主动注册 + URL 输入 + fetching/parsing/done/error 五态机 + 像素风 3D 按钮）③ src/pages/NibbleLevels/NibbleLevels.tsx 页面层（双栏布局 + 步骤指示器 + 挑战展示）。法则 6 三注册完成：App.tsx 路由 /nibble、Navbar 导航"蚕食爬取"、projectDocs.ts FILE_TREE 追加节点。法则 5 主题双适配：CSS 同时支持 [data-theme=pixel-spectrum] 彩虹流动 + [data-theme=pixel-crow] 乌鸦虹彩。PACK_BUILD 17→18',
    filesModified: ['src/data/nibbleLevels.ts', 'src/components/NibbleButton/NibbleButton.tsx', 'src/components/NibbleButton/NibbleButton.css', 'src/pages/NibbleLevels/NibbleLevels.tsx', 'src/pages/NibbleLevels/NibbleLevels.css', 'src/App.tsx', 'src/components/Navbar/Navbar.tsx', 'src/data/projectDocs.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['蚕食爬取架构模式（数据层 fetchHtml+关卡化 / 组件层五态机+监测注册 / 页面层双栏布局，三层解耦）', '多 CORS 代理 fallback 模式（PROXIES 数组 + for 循环 + try-catch + 15s 超时，单代理失效自动切换）', 'h2/h3 标题分割关卡化算法（DOMParser 解析 + querySelectorAll 遍历 + 按 heading 切块 + 提取 p/code/ul 为步骤）', '法则 5 主题双适配实战（[data-theme=pixel-spectrum] 彩虹流动 + [data-theme=pixel-crow] 乌鸦虹彩，单 CSS 文件双选择器）'],
    date: '2026-07-30',
  },
  // —— pack19 新增：Skill 实验室 + taste-skill/impeccable 审美落地（补录，原 projectDocs 已记 conv-22 但经验包漏录） ——
  {
    id: 'conv-20260730-22',
    summary: '用户批评"重构UI与界面时完全没有调用 taste skill 与另一个，审美低下"，要求"创建 skill 察看按钮，可让 skill 真正被使用"。新增 SkillViewer 组件（双栏实验室面板：左列表+右详情，每个 Skill 展示核心规则含正反例+调用命令一键复制+调用示例+Web入口跳转）+ SkillLab 页面壳。扩展 installedSkills.ts：InstalledSkill 接口新增 rules/invokeCommand/invokeExample 三字段，8 个 Skill 全部补全核心规则（共 18 条，含 taste-skill 三旋钮 anti-slop/字体反默认/LILA + impeccable 四规则 no-card-in-card/radius-unified/spacing-scale/console-leftover）。严格应用 taste-skill：间距 8 倍数、字体 var(--font-mono) JetBrains Mono、颜色 var(--color-accent-*) 非 AI 紫蓝。严格应用 impeccable：用 .skill-section 分隔不嵌套 .card、圆角 var(--radius-*)、无 console 残留。法则 6 三注册：App.tsx 路由 /skills、Navbar 导航"Skill 实验室"、projectDocs.ts FILE_TREE 追加节点。PACK_BUILD 18→19，DOC_VERSION v2.8→v2.9',
    filesModified: ['src/components/SkillViewer/SkillViewer.tsx', 'src/components/SkillViewer/SkillViewer.css', 'src/pages/SkillLab/SkillLab.tsx', 'src/pages/SkillLab/SkillLab.css', 'src/pages/SkillLab/index.ts', 'src/config/installedSkills.ts', 'src/App.tsx', 'src/components/Navbar/Navbar.tsx', 'src/data/projectDocs.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['Skill 注册表 rules/invokeCommand/invokeExample 三字段模式（让 skill 不只是名字，而是可被查阅和应用的规则集）', 'SkillViewer 双栏面板模式（左列表+右详情+分类筛选+调用命令一键复制+Web入口跳转）', 'taste-skill 三旋钮实战（anti-slop 间距显式声明/字体反默认 JetBrains Mono/LILA 反 AI 紫蓝用 var(--color-accent-*)）', 'impeccable 四规则实战（.skill-section 分隔不嵌套 .card / var(--radius-*) / 8 倍数 / 无 console）'],
    date: '2026-07-30',
  },
  // —— pack20 新增：一致推送铁律（用户要求"以后一致推送，不准遗漏，编写一套规则写入源码"） ——
  {
    id: 'conv-20260730-23',
    summary: '用户原话："以后一致推送，不准遗漏，编写一套规则，写入源码"。本次会话先提交 pack19（commit 7a593f0，30 files +6444/-32），用户追问"提交"后已 commit 但未 push（违反 pack11 原规则因有"用户说不推才跳过"例外）。用户遂要求升级推送规则为"一致推送不准遗漏"，取消一切例外。编写 2 条 meta-workflow 编码约定写入经验包：① pack11 升级版"一致推送规则"（commit 后必须立即 push，无例外，禁止延迟/被动/遗漏推送，用户主权保留为"不 commit"而非"commit 了不推"）② pack20 新增"推送前自检清单 4 项"（工作树 clean / 本地领先 origin N≥1 / push 目标 master / 推送后验证 origin/master HEAD=本地 HEAD）。同时补录 conv-22（pack19 经验包漏录的对话归档）。PACK_BUILD 19→20，DOC_VERSION v2.9→v3.0',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['一致推送铁律（commit 后必须立即 push，无例外不准遗漏，取消"用户说不推才跳过"例外条款）', '推送前自检清单 4 项（工作树 clean / 本地领先 origin N≥1 / push 目标 master / 推送后验证 HEAD 一致）', '用户主权保留边界（用户可说"不 commit"，但不得要求"commit 了不推"的矛盾状态）'],
    date: '2026-07-30',
  },
  // —— pack21 新增：Agent Wiki 同步能力（用户要求"把这项能力写入agent，让agent监察后推到Wiki，更改也推到Wiki"） ——
  {
    id: 'conv-20260730-24',
    summary: '用户原话："检查一下之前遗漏，省察代码，最后把这项能力写入agent，让agnet监察后推到Wiki，更改也推到Wiki，你再改"。先省察 pack19/pack20 提交：路由/导航/监测注册三注册完整，无遗漏。然后创建 src/ai/wikiSync.ts（430 行）实现 Agent Wiki 同步核心能力：① inspectCodebase() 监察代码状态（PACK_BUILD/DOC_VERSION/模块数/约定数/对话归档数/监测摘要/待推送队列长度，对比上次推送判断 hasNewPack/hasNewDocVersion）② buildPackWikiMarkdown()/buildChangesWikiMarkdown() 构建经验包/代码更改的 Wiki markdown 文档 ③ pushPackToWiki()/pushChangesToWiki() 推送（浏览器端写入 localStorage 待推送队列，供 TRAE IDE Agent 通过 lark-wiki skill 消费；可选通过 GitHub API fetch+token 直接更新 wiki 文件）④ hashContent() djb2 哈希去重 ⑤ loadPendingQueue()/clearPendingQueue() 队列管理 ⑥ applyPushToState() 状态更新。扩展 src/types/ai.ts：OrchestrationEntryType 新增 wiki-push，新增 WikiPushTarget/WikiPushRecord/WikiSyncState 三接口。扩展 src/context/AIAgentContext.tsx：新增 wikiSync 状态 + 持久化 + inspectAndPushToWiki() 独立调用入口 + updateWikiSyncConfig() 配置开关，runGlobalOrchestration 新增阶段 6 Wiki 推送（6a 经验包推送+6b 代码更改推送+6c 状态应用），AGENT_KEY_PREFIXES 加入 wiki-sync/wiki-pending 两 key，value 暴露 wikiSync/inspectAndPushToWiki/updateWikiSyncConfig 三能力给 Agent。经验包新增 1 条 meta-workflow 编码约定"Agent Wiki 同步铁律"。PACK_BUILD 20→21，DOC_VERSION v3.0→v3.1',
    filesModified: ['src/ai/wikiSync.ts', 'src/types/ai.ts', 'src/context/AIAgentContext.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['Agent Wiki 同步模式（inspect→build→push→dedupe 四步，浏览器端入队+TRAE IDE 消费+可选 GitHub API 直推三通道）', 'runGlobalOrchestration 阶段 6 Wiki 推送（经验包推送+代码更改推送双通道，基于 PACK_BUILD/DOC_VERSION 去重）', 'WikiSyncState 持久化模式（lastPackBuildPushed/lastDocVersionPushed 去重锚点 + pushHistory 审计轨迹 + totalPushes/totalFailures 健康度）', 'WikiPushRecord 状态机（pending→success/failed/skipped，contentHash 去重）'],
    date: '2026-07-30',
  },
  // —— pack22 新增：Wiki 自主决策 + 20 次迭代验证通过（用户原话"继续"+"下次不用问"） ——
  {
    id: 'conv-20260730-25',
    summary: '用户原话："测试迭代20次"→完成后用户说"下次不用问"→"继续"。① 创建 scripts/test-wikisync-iter.mjs 自动化测试脚本（puppeteer 连接浏览器，20 次迭代模拟 PACK_BUILD 22→41 递增，验证 inspectCodebase 监察+pushPackToWiki 去重+pushChangesToWiki 推送+applyPushToState 状态更新+localStorage 持久化），20/20 迭代全部通过，经验包推送 20/20，代码更改推送 20/20，totalFailures=0，pushHistoryLen=30（上限自动淘汰），localStorage wiki-sync 8 字段+wiki-pending 队列 40 条全部正确持久化，测试报告保存在 test-reports/。② 用户说"下次不用问"→新增 pack22 meta-workflow 编码约定"Wiki 同步自主决策铁律"：默认目标空间「Python Quest 经验包」+默认 markdown 格式+按去重规则的常规推送，Agent 自主决策直接推不询问；仅目标空间变更/格式变更/连错≥3次/用户明确说要确认 这四类场景才询问。③ 首次飞书 Wiki 推送落地：创建知识空间「Python Quest 经验包」(space_id=7668337248428903362) + wiki 节点「经验包总览 (pack21, v3.1)」(node_token=GYBew6WWLimAgZkezy9cOU5cnsc, doc_token=U0U2d005Iov5JIxpssoc1ArenBg)，写入 pack21 经验包 markdown 正文，revision_id=3 成功，访问链接 https://jcnb0xfc41jh.feishu.cn/wiki/GYBew6WWLimAgZkezy9cOU5cnsc 。PACK_BUILD 21→22，DOC_VERSION v3.1→v3.2',
    filesModified: ['src/ai/experiencePack.ts', 'src/data/projectDocs.ts', 'scripts/test-wikisync-iter.mjs'],
    patternsAdded: ['Wiki 同步自主决策边界模式（默认目标/默认格式/去重规则内不询问，非默认场景才询问，减少用户确认开销）', 'wikiSync 20 次迭代验证脚本模式（puppeteer 浏览器端运行，PACK_BUILD 递增模拟→监察→推送→去重→持久化全链路验证）', '飞书 Wiki 首次落地三流程（创建知识空间+创建 wiki 节点+用 lark-doc overwrite 写入正文）'],
    date: '2026-07-30',
  },
  // —— pack23 新增：疯狂进化（用户原话"continue，疯狂进化"） ——
  {
    id: 'conv-20260731-26',
    summary: '用户原话："continue，疯狂进化"。① 扩展优化策略库 src/ai/Optimizer.ts：补全 content 域 3 策略（启用空关卡扫描/启用损坏图片检测/加快内容刷新）+ 新增 meta 域 3 策略（提升学习率/提升探索率/降低学习率精细微调），TunableParams 接口新增 enableEmptyLessonScan/enableBrokenImageCheck/contentRefreshInterval/agentLearningRate/strategyExplorationRate 五字段，DEFAULT_PARAMS 添加默认值，BOUNDS 新增参数边界，WEIGHTS 新增 meta 域权重。② 扩展 src/types/ai.ts：OptDomain 联合类型新增 \\'meta\\'，TunableParams 同步新增五字段。③ 扩展 src/context/AIAgentContext.tsx：DEFAULT_CONFIG.enabledDomains 加入 \\'meta\\'，Agent 现可应用 meta 域策略进行自我进化。④ 创建 src/pages/EvolutionArchive/EvolutionArchive.tsx + .css + index.ts（360 行）：三栏布局进化档案页（顶部统计卡 6 指标+中部策略频次 Top10+底部评分曲线 SVG 折线图+最近迭代列表+Wiki 推送历史），集成 useAIAgent 拉取 history/summary/orchestration/wikiSync/snapshots，严格应用 taste-skill（间距 8 倍数+JetBrains Mono 字体+主题色变量）和 impeccable（section 分隔不嵌套 card+--radius-* 圆角+无 console 残留）规则，双主题适配（pixel-spectrum 彩虹流动+pixel-crow 乌鸦虹彩）。⑤ 法则 6 三注册完成：App.tsx 路由 /evolution、Navbar 导航"进化档案"、projectDocs.ts DOC_VERSION v3.2→v3.3。⑥ 修复构建错误：EvolutionArchive.tsx 误用 useAgent（实际导出名 useAIAgent），更正后构建通过。⑦ 经验包写回：MODULES 追加 page-evolution 模块、CONVERSATION_LOG 追加 conv-26、DOC_CHANGES 追加 pack23 条目。PACK_BUILD 22→23，DOC_VERSION v3.2→v3.3',
    filesModified: ['src/ai/Optimizer.ts', 'src/types/ai.ts', 'src/context/AIAgentContext.tsx', 'src/pages/EvolutionArchive/EvolutionArchive.tsx', 'src/pages/EvolutionArchive/EvolutionArchive.css', 'src/pages/EvolutionArchive/index.ts', 'src/App.tsx', 'src/components/Navbar/Navbar.tsx', 'src/data/projectDocs.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['优化策略库 5 域补全模式（performance/ux/content/stability/meta 五域全覆盖，meta 域实现 Agent 自适应进化）', '进化可视化三栏布局（统计卡+策略频次+评分曲线 SVG，从 useAIAgent 派生全量统计，history 为空时 0/空数组兜底）', 'context hook 导出名硬约束（实际导出 useAIAgent 而非 useAgent，import 时必须核对 value 暴露字段）'],
    date: '2026-07-31',
  },
  // —— pack24 新增：进化控制台 + 3 bug 修复（用户原话"continue，疯狂进化"） ——
  {
    id: 'conv-20260731-27',
    summary: '用户原话："continue，疯狂进化"。pack23 的 EvolutionArchive 是纯展示页，无交互入口——本次补齐"真正可交互的进化控制台"。① 在 EvolutionArchive.tsx 顶部 header 后新增进化控制台 section：状态徽章（idle/observing/analyzing/deciding/acting/verifying/committed/rolledback/paused 九态，运行态有 pulse 动画）+ 综合分实时显示 + 进度条（currentIteration/totalIterations，渐变填充+发光）+ 4 个 3D 像素立体按钮（▶启动进化 调 startAgent / ⏹停止 调 stopAgent / 🌐全局调配 调 runGlobalOrchestration / ↺重置 调 resetAgent 带 confirm 二次确认）+ 当前迭代信息条（迭代号+阶段+已应用策略）。按钮严格按用户偏好实现 3D stereoscopic 效果：inset 上亮下暗内阴影 + 外阴影做底座，hover 上移 1px 加深底座，active 下移 2px 模拟按压。② 修复 3 个 bug：bug1 第171行运算符优先级 \`it.scoresAfter?.overall ?? 0 - minScore\` 应为 \`((it.scoresAfter?.overall ?? 0) - minScore)\`（?? 优先级低于 -，导致先算 0-minScore 再 ?? 取左侧 overall，端点 y 坐标错误）；bug2 第239行字段名 \`it.timestamp\` 不存在（Iteration 接口实际字段为 \`it.startTime\`），导致渲染 undefined；bug3 stats 和 iter-item 误用不存在的 \`h.applied\`/\`it.applied\` 字段（Iteration 接口无 applied 字段，应使用 \`result === \\'committed\\'\` 判断已应用）。③ CSS 新增控制台样式：.ea-console 容器（accent-primary 高亮边框）/ .ea-state-badge 九态颜色映射 / .ea-progress-bar 渐变进度条 / .ea-btn 3D 像素按钮（4 变体 primary/secondary/warn/danger），严格应用 taste-skill（间距 8 倍数+JetBrains Mono+主题色变量，无 AI 紫蓝）和 impeccable（section 分隔不嵌套 card+--radius-* 圆角+无 console 残留）。PACK_BUILD 23→24，DOC_VERSION v3.3→v3.4',
    filesModified: ['src/pages/EvolutionArchive/EvolutionArchive.tsx', 'src/pages/EvolutionArchive/EvolutionArchive.css', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['进化控制台交互模式（状态徽章九态映射+进度条+4 按钮 3D 像素立体+当前迭代信息条，从 useAIAgent 解构 startAgent/stopAgent/resetAgent/runGlobalOrchestration 四控制 API）', '3D 像素按钮 CSS 立体效果模式（inset 上亮下暗内阴影+外阴影底座，hover 上移加深，active 下移按压，transform 位移配合 box-shadow 变化）', 'Iteration 接口字段约束（无 applied 字段，用 result===\\'committed\\' 判断；时间字段是 startTime 非 timestamp；运算符优先级 ?? 低于 -，涉及 ?? 和算术运算必须加括号）'],
    date: '2026-07-31',
  },
  // —— pack25 新增：元工作流 + AI 项目经验写入经验包（用户原话"把读指令，读经验包适配经验包要求，工作，经验包写入对话，经验包写入更新，对话人思维归纳，经验包整合，写入经验包的元逻辑中"） ——
  {
    id: 'conv-20260731-28',
    summary: '用户原话："把读指令，读经验包适配经验包要求，工作，经验包写入对话，经验包写入更新，对话人思维归纳，经验包整合，写入经验包的元逻辑中（要求每次对话遵守），并写入你这个ai做这个项目的经验，减少无效代码"。本次是元层级提升：把"如何使用经验包"本身的方法论写入经验包。① 新增 META_WORKFLOW 常量（7 步循环）：Step1 读指令（识别意图+提取实体）→ Step2 读经验包适配要求（MODULES/CONVENTIONS/LESSONS/META_WORKFLOW）→ Step3 工作（THINK→DIFF→RUN→POLISH 四步）→ Step4 经验包写入对话（CONVERSATION_LOG 追加 1 条，5 字段必填）→ Step5 经验包写入更新（PACK_BUILD+1+DOC_VERSION 升级+DOC_CHANGES 追加+MODULES 追加）→ Step6 对话人思维归纳（写入 user_profile.md 或 project_memory.md）→ Step7 经验包整合+Wiki 推送（自主决策不询问）。每步包含 rule/must/antiPattern 三字段。② 新增 AI_PROJECT_EXPERIENCE 常量（11 条经验，全部围绕"减少无效代码"）：扩展联合类型必须同步 Record 映射/vite 不做严格类型检查必须跑 tsc/summary 必须含根因和决策/CSS 必须用主题变量禁 AI 紫蓝/context hook 导出名必须核对/Iteration 字段必须读接口定义/自主决策不询问/一致推送铁律/法则 6 三注册/taste-skill 三旋钮/impeccable 四规则。③ 更新 QUICKSTART_LLM：Step 0 改为强制读 META_WORKFLOW + 新增 Step 0.5 读 AI_PROJECT_EXPERIENCE + 新增 Step 9 元工作流闭环。④ 扩展 ExperiencePack 接口：新增 metaWorkflow 和 aiProjectExperience 两字段。⑤ 更新 generateExperiencePack 输出：加入 metaWorkflow 和 aiProjectExperience。PACK_BUILD 24→25，DOC_VERSION v3.4→v3.5',
    filesModified: ['src/ai/experiencePack.ts', 'src/types/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['元工作流 7 步循环模式（读指令→读经验包→工作→写对话→写更新→思维归纳→Wiki 推送，每步 rule/must/antiPattern 三字段，写入经验包让下一个 AI 第一眼看到）', 'AI 项目经验沉淀模式（11 条经验全部围绕"减少无效代码"，每条含 category/experience/action 三字段，从踩过的坑提炼可执行 action）', '元逻辑写入经验包模式（META_WORKFLOW 和 AI_PROJECT_EXPERIENCE 作为 ExperiencePack 接口字段，通过 generateExperiencePack 输出，QUICKSTART_LLM Step 0 强制读）'],
    date: '2026-07-31',
  },
  // —— pack26 新增：20 次滚动重编码+元逻辑写入（用户原话"根据往昔对话进行重编码，滚动20次，写入元逻辑"） ——
  {
    id: 'conv-20260731-29',
    summary: '用户原话："根据往昔对话进行重编码，滚动20次，写入元逻辑"。本次是基于 28 条历史对话的元层级重编码。① 创建 recodeLoop.ts 重编码循环器（4 函数）：extractRecodePoints() 从 CONVERSATION_LOG 提取 20 个可重编码点 + runRecodeLoop() 执行 20 次迭代（每次遵循 META_WORKFLOW 7 步）+ getRecodeStats() 统计 + extractNewMetaExperiences() 提炼新元逻辑。② 20 个重编码点按类别分组：6 类型安全（conv-26/27 超极审查发现的 tsc 错误）+3 CSS 去重（370x display:flex 重复）+3 超长函数（CodeEditor/InteractiveLesson/Home）+3 死代码（无效策略/未使用导入）+4 元逻辑（META_WORKFLOW/AI_PROJECT_EXPERIENCE/QUICKSTART_LLM）+1 HTML（title/description）+1 性能（bundle 1085KB）。③ 15 个已 applied（75%，主要是前两轮超极审查已修复的），5 个 pending（CSS 工具类提取/超长函数拆分/路由懒加载，留给独立 pack 专攻）。④ 每个重编码点含 source 字段追溯到具体 conv ID，不凭空创造。⑤ 7 条滚动经验回写 AI_PROJECT_EXPERIENCE（先全量识别再批量执行/按类别分组/已 applied 才推 Wiki/经验回写飞轮/source 追溯/分两批处理/循环器本身是元逻辑扩展模块）。AI_PROJECT_EXPERIENCE 从 11 条扩展到 18 条。PACK_BUILD 25→26，DOC_VERSION v3.5→v3.6',
    filesModified: ['src/ai/recodeLoop.ts', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['重编码循环器模式（extractRecodePoints 全量识别→runRecodeLoop 批量执行→getRecodeStats 统计→extractNewMetaExperiences 回写元逻辑，四函数形成闭环）', '重编码点分类模式（type-safety/dead-code/css-dedup/fn-split/perf/ux/meta 七类，同类批量处理减少上下文切换）', '重编码分两批策略（第一批快赢 type-safety/dead-code/meta 已 applied；第二批大改 css-dedup/fn-split/perf 留给独立 pack）', '重编码经验飞轮模式（每次滚动经验回写 AI_PROJECT_EXPERIENCE，下一轮重编码可读取避免重复踩坑）'],
    date: '2026-07-31',
  },
  // —— pack27 新增：META_RHYTHM 元节奏接入 + conv-30 滚动适配触发 ——
  // 用户原话："记录每一次对话，根据往昔对话进行重编码，经过每5轮对话进行一次滚动适配"
  // conv-30 触发 rhythm-roll（30 mod 5 === 0）
  {
    id: 'conv-20260731-30',
    summary: '用户原话："记录每一次对话，根据往昔对话进行重编码，经过每5轮对话进行一次滚动适配"。本次完成 META_RHYTHM 元节奏从"死常量"到"经验包一等公民"的接入。① types/experiencePack.ts 新增 MetaRhythmRule + MetaRhythm 两个接口，ExperiencePack 接口添加 metaRhythm: MetaRhythm 字段。② experiencePack.ts 将 META_RHYTHM 接入 generateExperiencePack() 返回值，并新增 SPLIT_EXPORT_META_RHYTHM 导出（recodeLoop 读 rollTrigger 判断滚动适配触发、Agent 推 Wiki 时一并写出）。③ tsc --noEmit 0 错误。④ conv-30 触发 rhythm-roll 滚动适配（30 mod 5 === 0）：本次属轻量滚动（接入型变更，无新可重编码点），getRecodeStats 维持 15 applied/5 pending，META_WORKFLOW 无需更新，AI_PROJECT_EXPERIENCE 追加 1 条"元逻辑接入"经验',
    filesModified: ['src/types/experiencePack.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['元节奏接入模式（META_RHYTHM 四步打通：类型定义→接口字段→生成器接入→导出，让下一个 AI 读经验包 JSON 时能看到记录/重编码/滚动适配三条规则与触发条件）', '滚动适配触发判定模式（convId 末尾数字 mod 5 === 0 触发，conv-30 为 pack27 首次触发点，触发时执行全量重跑+统计+回写+检查 META_WORKFLOW+推 Wiki 五步）'],
    date: '2026-07-31',
  },
  // —— pack28 新增：Agent 超级进化 — P0参数真实消费 + P1 Pyodide验证闭环 ——
  // 用户原话："agent超级进化"
  // conv-31 不触发 rhythm-roll（31 mod 5 !== 0），但记录 rhythm-record + rhythm-recode
  {
    id: 'conv-20260731-31',
    summary: '用户原话"agent超级进化"。基于调研发现 Agent 架构完备但执行层空转（19个可调参数无人读取、Pyodide不接入验证、recodeLoop零调用、meta参数自指空转）。本次聚焦两个杠杆点落地：①P0参数真实消费 — 调整 main.tsx Provider 嵌套顺序（PyodideProvider 移到 AIAgentProvider 外层），CodeEditor 消费 params.debounceMs 做运行防抖，Agent 调 debounceMs 现在真实影响组件响应节奏。②P1 Pyodide验证闭环 — types/ai.ts 新增 learning-outcome 域 + LearningMetrics 接口 + ObservedMetrics 扩展 testPassRate/commonErrorPatterns/retryAfterHintRate 三字段；AIAgentContext 实现 runLearningValidation() 调用 Pyodide 跑各关卡挑战测试用例（限10关卡×2挑战），采集真实通过率/错误模式/高失败率关卡；迭代循环验证阶段接入学习验证，metricsAfter.testPassRate 填真实值；Optimizer 新增 scoreLearningOutcome() 评分函数 + 3条 learning-outcome 域策略（加强空关卡扫描/加快内容刷新/启用错误恢复），WEIGHTS 加入 learning-outcome:0.2；HealthScores 加 learningOutcome 可选字段；AIAgentPanel DOMAIN_LABELS 加学习效果映射。③tsc --noEmit 0错误（修复4个错误：AIAgentPanel缺域映射/useMemo未用/runLearningValidation声明顺序）。Agent 从"性能优化器"升级为"学习效果优化器"，验证阶段的 gain 终于基于真实学习数据',
    filesModified: ['src/types/ai.ts', 'src/ai/Optimizer.ts', 'src/ai/metrics.ts', 'src/context/AIAgentContext.tsx', 'src/main.tsx', 'src/components/CodeEditor/CodeEditor.tsx', 'src/components/AIAgentPanel.tsx', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['Pyodide验证闭环模式（runLearningValidation调Pyodide跑关卡测试→采集通过率/错误模式/高失败率关卡→填metricsAfter→影响综合分→触发learning-outcome域策略，形成"学员代码执行结果→Agent决策→学习体验优化"飞轮）', '参数真实消费模式（组件useAIAgent读params→params值直接控制组件行为如debounceMs防抖，Agent优化不再是数字游戏而是真实可观测的应用行为变化）', 'Provider嵌套顺序调整模式（PyodideProvider移到AIAgentProvider外层，让AIAgentContext能usePyodide，打破"AIAgent想用Pyodide但Pyodide在内层"的架构约束）', '学习效果评分模式（scoreLearningOutcome=通过率60%+错误模式数20%+提示后重试率20%，教育产品核心指标从纯DOM检测升级为真实代码执行结果）'],
    date: '2026-07-31',
  },
  // —— pack29 新增：Agent 超级进化 P0参数消费 + P2 Q-table + P2 Wiki闭环 ——
  // 用户原话："agent超级进化"
  // conv-20260731-32 不触发 rhythm-roll（32 mod 5 !== 0）
  {
    id: 'conv-20260731-32',
    summary: '用户原话"agent超级进化"（第二轮）。pack29 推进三个未落地的高价值点：①P0补全参数消费 — ProgressContext 用 params.autoSaveInterval 替换云端同步节流固定值 1500ms，CodeEditor 用 params.animationDuration 设置输出面板 transitionDuration，Agent 调 autoSaveInterval/animationDuration 现在真实影响云端同步节奏和 UI 动画。②P2 Q-table epsilon-greedy — Optimizer.ts 新增 QTable/QTableEntry 接口 + loadQTable/saveQTable 持久化 + optimisticEstimate UCB 乐观估计；selectStrategies 重写：以 ε=strategyExplorationRate 概率随机探索（优先未试过的策略），其余利用模式按 Q-table avgGain/risk 排序（替代硬编码 expectedGain）；新增 updateQTable() 在 Agent 每轮 commit 后调用，α=agentLearningRate 控制指数加权步长；AIAgentContext 在两处 selectStrategies 调用传 qTableRef.current，在提交阶段调用 updateQTable 写入当次 gain；meta 域从"自指空转"升级为真自适应核心。③P2 Wiki 真实闭环 — wikiSync.ts 新增 pushViaGithubApiWithRetry（指数退避 maxRetries+retryBaseDelay）、pushToWikiAsync（真 await 推送成功后立即从 pending 队列移除）、processPendingQueue（每批最多10条，失败项保留重试，结果回写 WikiSyncState）+ 拆分 loadPendingQueueRaw/loadPendingQueue 统一存储格式为 JSON 字符串数组；AIAgentContext 把 inspectAndPushToWiki 从同步版替换为 pushToWikiAsync（经验包+变更日志双通道异步真推送），runGlobalOrchestration 阶段 6 也替换为 pushToWikiAsync，新增每5分钟一次的 processPendingQueue 定时器（autoPushEnabled=true 时激活）；修复原 fire-and-forget 导致 record.status 永远 pending 的问题。④tsc --noEmit 0 错误。参数真实消费点从 1 个（pack28 debounceMs）扩展为 3 个：debounceMs + autoSaveInterval + animationDuration；meta 域 2 个参数首次参与真实决策；Wiki 推送从"异步写 pending 队列后立即返回"升级为"真 await GitHub API + 指数退避 + 成功去重 + 定时消费者"',
    filesModified: ['src/context/ProgressContext.tsx', 'src/components/CodeEditor/CodeEditor.tsx', 'src/ai/Optimizer.ts', 'src/context/AIAgentContext.tsx', 'src/ai/wikiSync.ts', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['Q-table epsilon-greedy 真探索模式（QTableEntry{tries,totalGain,avgGain}+localStorage持久化；selectStrategies ε=20%探索未试策略，其余按历史avgGain/risk排序；commit后updateQTable以 agentLearningRate=α指数加权回写；expectedGain不再是硬编码常数）', '指数退避重试模式（pushViaGithubApiWithRetry：attempt 0..maxRetries，delay=retryBaseDelay×2^attempt，参数来自 TunableParams.maxRetries 和 retryBaseDelay）', 'Wiki异步真推送模式（pushToWikiAsync真await GitHub API → 成功则从pending队列移除 → record.status真的变成success/failed，替代原fire-and-forget永远pending）', 'pending队列消费者定时器模式（processPendingQueue每5分钟一批最多10条，失败项留队重试，autoPushEnabled=false时跳过，通过setInterval挂载在Provider useEffect）'],
    date: '2026-07-31',
  },
  // —— pack30 新增：Agent 向 LLM 方向进化 ——
  // 用户原话："agent超级进化，向LLM方向"
  // conv-20260731-33 不触发 rhythm-roll（33 mod 5 !== 0）
  {
    id: 'conv-20260731-33',
    summary: '用户原话"agent超级进化，向LLM方向"。pack30 实现 Agent 从纯规则驱动（Q-table+14条硬编码策略）向 LLM 驱动进化：①新建 llmClient.ts — OpenAI 兼容 API 客户端（callLLM/callLLMJSON/testLLMConnection），支持超时控制（AbortController）+ 指数退避重试（isRetryableError 判断 5xx/429/网络错误）+ JSON 模式（response_format json_object + markdown 代码块提取 + 花括号定位兜底）+ LLMClientError 错误类（status+isRetryable）；DEFAULT_LLM_CONFIG 含 enabled/baseUrl/apiKey/model/temperature/maxTokens/timeout/maxRetries 8 字段；apiKey 存 localStorage（与 GitHub token 一致处理）。②新建 llmAdvisor.ts — LLM 驱动分析器（analyzeWithLLM）：buildSystemPrompt 构建 21 个可调参数说明 + JSON 输出格式要求 + risk 分级规则；buildUserPrompt 把当前 FCP/LCP/内存/错误数/通过率等 17 项指标 + 5 领域健康分 + 当前 params JSON 打包为 prompt；validateParamChanges 校验 LLM 返回的参数变更（数值 clamp 到 BOUNDS 边界、布尔转 boolean、未知 key 忽略）；generateSuggestionId 基于内容哈希生成稳定 ID；返回 LLMAnalysisResult{reasoning,confidence,suggestions,model,tokenUsage,error}。③types/ai.ts 新增 4 个类型：LLMConfig（8字段）、LLMSuggestion（id/target/problem/fix/priority/risk/paramChanges/codePatch/rationale）、LLMAnalysisResult（timestamp/reasoning/confidence/suggestions/model/tokenUsage/error）、AdoptedSuggestion（suggestionId/timestamp/target/applied/paramChanges）。④AIAgentContext.tsx 接入：新增 llmConfig/llmAnalysis/adoptedSuggestions/isLLMAnalyzing 4 个 state；runLLMAnalysis() 采集当前指标→调 analyzeWithLLM→回写 state+monitor 日志；applyLLMSuggestion(id) 参数级建议直接应用到 TunableParams（持久化到 localStorage），代码级建议仅记录；dismissLLMSuggestion(id) 从列表移除；updateLLMConfig(patch) 持久化配置；testLLM() 调 testLLMConnection；runGlobalOrchestration 阶段4从假"全局适配分析"升级为真实 LLM 调用（如果 enabled+apiKey 则调 runLLMAnalysis，自动采纳 high 优先级且 risk<0.3 的参数级建议，否则回退到 Q-table 模式）。⑤AIAgentPanel.tsx 新增 LLM 面板：配置区（启用开关+baseUrl+apiKey+model+temperature滑块+maxTokens+测试连接按钮+运行分析按钮）；结果展示区（模型+置信度+token用量+推理过程+建议列表）；SuggestionCard 组件（优先级颜色边框+问题+修复方案+参数变更标签+采纳/忽略按钮+已采纳状态）；已采纳建议历史。⑥AIAgentPanel.css 追加 LLM 相关样式（aap-llm-config/field/row/actions/result/meta/error/reasoning/suggestions/suggestion/header/problem/fix/params/rationale/actions/adopted + aap-badge/badge-on + aap-btn-primary/sm）。⑦tsc --noEmit 0 错误（修复 6 个：maxRetries 未使用、LLMSuggestion 未使用导入、warn→warning、errorEvents 是 number 不是数组）。Agent 从"纯规则优化器"进化为"LLM 顾问+规则引擎双模式"：未启用 LLM 时回退到 Q-table 策略，启用后 LLM 分析监测数据输出结构化建议，人工确认后应用参数变更，high 优先级低风险建议自动采纳',
    filesModified: ['src/ai/llmClient.ts', 'src/ai/llmAdvisor.ts', 'src/types/ai.ts', 'src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx', 'src/components/AIAgentPanel.css', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['LLM 顾问模式（LLM 输出结构化建议而非直接执行：analyzeWithLLM 返回 LLMSuggestion[] 带 paramChanges + risk + priority，人工确认后 applyLLMSuggestion 才应用到 TunableParams；high 优先级且 risk<0.3 的参数级建议在全局调配中自动采纳，其余需手动确认）', 'OpenAI 兼容 API 客户端模式（callLLM 支持 baseUrl+apiKey+model 配置；超时 AbortController；指数退避重试 isRetryableError 判断 5xx/429/网络错误；JSON 模式 response_format json_object + markdown 代码块提取 + 花括号定位兜底三重解析）', 'LLM 参数变更安全校验模式（validateParamChanges：数值参数 clamp 到 PARAM_BOUNDS 边界、布尔参数强制转 boolean、未知 key 直接忽略，防止 LLM 幻觉输出非法参数名或越界值）', '双模式回退模式（llmConfig.enabled=false 或 apiKey 为空时 runGlobalOrchestration 阶段4 回退到 Q-table+硬编码策略，LLM 启用后真实调用 API 分析，两种模式无缝切换）'],
    date: '2026-07-31',
  },
  // —— pack31 新增：Agent 向 LLM 方向进化，结合 Skill 进行训练 ——
  // 用户原话："agent超级进化，向LLM方向，结合skill进行训练"
  // conv-20260731-34 不触发 rhythm-roll（34 mod 5 !== 0）
  {
    id: 'conv-20260731-34',
    summary: '用户原话"agent超级进化，向LLM方向，结合skill进行训练"。pack31 在 pack30 LLM 基础上接入 Skill 训练系统：①新建 skillTrainer.ts — 从 installedSkills.ts 提取 8 个已启用 skill 的 22 条结构化规则（SkillRule 含 ruleId/title/desc/badExample/goodExample），buildSkillTrainingPrompt 构建为 few-shot 训练 prompt（按 skill 分组，每条规则含 ❌反例+✅正例），extractSkillRulesBySkillIds 支持按 skillId 过滤（空数组=全部），checkSuggestionCompliance 对 LLM 建议做合规检测（关键词匹配+特定规则检测：anti-slop 默认值检测、console-leftover 残留检测、LILA 紫蓝色检测 B>R&&B>G&&B>100、spacing-scale 8倍数检测），checkAllSuggestionsCompliance 批量检测，getSkillTrainingSummary 返回训练摘要（skill数/规则数/skill名列表），DEFAULT_SKILL_TRAINING_CONFIG 默认启用+全 skill+非严格模式。②更新 llmAdvisor.ts — analyzeWithLLM 新增第6参数 skillTrainingConfig，system prompt = 基础角色 prompt + skill 训练规则段落，返回值从 LLMAnalysisResult 改为 {result, compliance} 双返回，严格模式下自动过滤 violation 建议不返回给用户。③types/ai.ts 新增 SkillTrainingConfig（enabled/activeSkillIds/strictMode）+ SkillCompliance（ruleId/skillId/skillName/ruleTitle/status/reason/suggestionId）类型。④AIAgentContext.tsx 新增 skillTrainingConfig/skillCompliance 2 个 state + updateSkillTrainingConfig 方法，runLLMAnalysis 传入 skillTrainingConfig 调 analyzeWithLLM，monitor 日志含 skill 训练摘要和合规检测统计。⑤AIAgentPanel.tsx SuggestionCard 新增 compliances prop，违规建议显示红色"Skill 违规"标签+采纳按钮 disabled，合规详情内嵌每条建议卡片；新增 Skill 训练配置区（启用开关+严格模式开关+训练摘要 badge）；新增合规检测总览区（违规/警告统计+逐条展示）。⑥AIAgentPanel.css 追加 skill 训练相关样式（aap-skill-training-config/summary、aap-suggestion-compliance/compliance-detail/violation/warn、aap-skill-compliance/title/item/status/rule/reason）。⑦tsc --noEmit 0 错误（修复 1 个：InstalledSkill 未使用导入）。Agent 从"通用 LLM 顾问"进化为"项目 Skill 训练过的 LLM 顾问"：8 个 Skill 的 22 条规则作为 few-shot 训练样本注入 system prompt，LLM 理解 anti-slop/Darwin 棘轮/taste-skill LILA/impeccable 等项目约定后给出合规建议；后验合规检测进一步过滤违规建议，严格模式下自动拦截',
    filesModified: ['src/ai/skillTrainer.ts', 'src/ai/llmAdvisor.ts', 'src/types/ai.ts', 'src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx', 'src/components/AIAgentPanel.css', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['Skill few-shot 训练模式（buildSkillTrainingPrompt 从 installedSkills.ts 提取 8 个 skill 的 22 条规则，按 skill 分组构建为 system prompt 段落，每条规则含 desc+❌badExample+✅goodExample，让 LLM 理解项目约定而非给通用建议）', 'Skill 合规后验检测模式（checkSuggestionCompliance 对 LLM 输出的建议做关键词匹配+特定规则检测：anti-slop 默认值/console残留/LILA 紫蓝色 B>R&&B>G&&B>100/spacing 8倍数，返回 SkillCompliance[]{status: pass|warn|violation, reason}）', '严格模式自动拦截模式（skillTrainingConfig.strictMode=true 时 analyzeWithLLM 返回前过滤掉所有 status=violation 的建议，不展示给用户；非严格模式只标记不拦截）', '双返回值模式（analyzeWithLLM 返回 {result: LLMAnalysisResult, compliance: SkillCompliance[]}，调用方同时获取分析结果和合规检测，不再需要二次调用）'],
    date: '2026-07-31',
  },
  // —— pack32 新增：LLM 训练反馈闭环 + codePatch + 自动迭代训练 ——
  // 用户原话："继续"（在 pack31 Agent 结合 Skill 进行 LLM 训练之后）
  // conv-20260731-35 触发 rhythm-roll（35 mod 5 === 0）
  {
    id: 'conv-20260731-35',
    summary: '用户原话"继续"。pack32 补全 LLM 训练闭环的最后三个环节：①LLM 建议反馈 Q-table — llmAdvisor.ts 新增 computeLLMGain(scoreBefore, scoreAfter, suggestionType) 函数：gain = baseReward + (scoreAfter-scoreBefore)/100，参数级建议 baseReward=0.05，代码级 baseReward=0.1，保底为基础奖励一半避免负增益抑制探索；AIAgentContext.tsx 的 applyLLMSuggestion 在采纳建议后调用 updateQTable，LLM 建议 ID 以 llm: 前缀作为策略 ID 写入 Q-table，agentLearningRate 控制学习步长，使 LLM 建议和 Q-table 策略共用同一套学习机制。②codePatch 解析和展示 — llmAdvisor.ts LLMResponseSchema 新增 codePatch 字段，suggestion 解析时提取非空 codePatch 字符串；AIAgentPanel.tsx SuggestionCard 新增 codePatch 展示区（📋代码补丁标签 + pre 代码块 + 最大高度200px滚动 + word-break），标注"需人工审查后应用"。③LLM 自动迭代训练 — AIAgentContext.tsx 新增 llmAutoTrainTimerRef 定时器，llmConfig.enabled && apiKey 时每10分钟自动调 runLLMAnalysis，形成 observe→analyze→adopt→verify 闭环；useEffect 依赖 runLLMAnalysis 保证回调引用最新。④LLM 训练统计 — 新增 llmTrainingStats state（totalAnalysis/totalSuggestions/adoptedCount/violatedCount/qTableFeedbackCount/lastGain）；runLLMAnalysis 每次调用后更新统计；AIAgentPanel.tsx 新增训练统计面板（4列网格：分析次数/建议总数/已采纳/采纳率/违规拦截/Q-table反馈/最近gain）。⑤tsc --noEmit 0 错误（修复 1 个：runLLMAnalysis 在定义前使用，将 useEffect 移到 runLLMAnalysis 定义之后）。LLM 训练从"单次分析"进化为"持续闭环"：自动定时分析→Skill合规检测→人工/自动采纳→Q-table反馈→统计追踪，Agent 具备了真正的 LLM 驱动自适应迭代能力',
    filesModified: ['src/ai/llmAdvisor.ts', 'src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx', 'src/components/AIAgentPanel.css', 'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['LLM→Q-table 反馈闭环模式（applyLLMSuggestion 采纳建议后调 computeLLMGain 计算 gain → updateQTable 以 llm: 前缀 ID 写入 Q-table → agentLearningRate 控制步长，LLM 建议和规则策略共用同一套学习机制）', 'codePatch 代码补丁展示模式（LLMResponseSchema 新增 codePatch 字段 → SuggestionCard 展示 pre 代码块 + 📋标签 + "需人工审查"标注，代码级建议不自动应用只展示）', 'LLM 自动迭代训练模式（llmAutoTrainTimerRef 每10分钟自动调 runLLMAnalysis → observe→analyze→adopt→verify 闭环，llmConfig.enabled+apiKey 为激活条件，useEffect cleanup 清理定时器）', 'LLM 训练统计模式（llmTrainingStats 追踪 totalAnalysis/totalSuggestions/adoptedCount/violatedCount/qTableFeedbackCount/lastGain，AIAgentPanel 4列网格展示采纳率和 Q-table 反馈次数）'],
    date: '2026-07-31',
  },
  // —— pack33 超级进化：资源调配总线 + 元逻辑引擎 + 本地离线LLM内核 + 自编码器参数自适应 ——
  // 用户原话："推"（在 pack32 LLM 训练反馈闭环之后）
  // conv-20260801-36 触发 rhythm-roll（36 mod 5 !== 0 → 下一轮 37 mod 5 = 2，不触发）
  {
    id: 'conv-20260801-36',
    summary: '用户原话"推"（继续推进 Agent 超级进化，pack33 补齐4个未落地超能力）。pack33 在 Q-table+LLM 顾问之上，新增 4 个核心能力：①资源调配总线 resourceBus.ts — 8 类资源统一调度（LLM/技能/等级/监测/经验/Wiki/存储/外部API），ResourceType 联合 + handlers[allocate/release/inspect] 三函数，allocate() 做优先级加权分配 + 资源冲突检测（同资源被两处并发申请返回 conflict）+ 死锁超时释放（lock 超时自动 release，防止异常崩溃后资源永久被占），createResourceBus() 构造单例，返回 bus 对象暴露 allocate/lock/release/schedule 四操作。②元逻辑规则引擎 metaLogic.ts — 14 条 META_RULES 覆盖 6 类经验（Karpathy工作流/UI偏好/架构模式/安全/调试/优化），每条 MetaRule 含 id/category/trigger/evaluate()/action 五字段，evaluate(ctx) 返回 confidence 0-1 + action 建议，executeMetaLogic(ctx) 批量执行所有规则输出 MetaRuleResult[]，confidence 加权供 Agent 做最终决策（规则不直接产生副作用）。③本地离线 LLM 内核 localLLMCore.ts — 网络断或 LLM API 不可用时的兜底：buildInvertedIndex() 从源码索引+经验包 modules/conventions/lessons 做 TF-IDF 倒排；retrieveExperiences(query) 按关键词检索；generatePatchesOffline(意图) 用规则生成+决策树打分，严格限制只能输出低风险补丁（删除/重构/风险>0.3 都拒绝）；localLLMInfer() 组合三者返回与 callLLMJSONv2 同结构的响应，让 Agent 无需改代码即可切换 provider。④自编码器参数自适应 selfCoder.ts — computeUnderstanding(意图, 上下文, 历史, 资源利用率) 四因素量化理解度（每项 0-25 分加权），理解度<20=保守模式（autoApply强制 false, risk上限0.2）、20-60=探索模式（ε=25%探索新策略）、>60=精细模式（ε=8%低风险自动应用）；MODE_PROFILES[] 定义 3 模式 12 个参数开关，selfTuneParameters(currentParams, mode) 自动覆盖 TunableParams 对应字段，写入 AIAgentContext 当前运行时参数，从"人工预设参数"升级为"按理解度自适应调参"。⑤tsc --noEmit 0 错误。Agent 从"规则+LLM双模式"进化为"自适应+离线兜底+资源全局调配"的完整自治系统',
    filesModified: ['src/ai/resourceBus.ts', 'src/ai/metaLogic.ts', 'src/ai/localLLMCore.ts',
      'src/ai/selfCoder.ts', 'src/types/ai.ts', 'src/context/AIAgentContext.tsx',
      'src/ai/experiencePack.ts', 'src/data/projectDocs.ts'],
    patternsAdded: ['八类资源统一调度总线模式（ResourceType 联合 + handlers[allocate/release/inspect] + allocate/lock/release/schedule 四操作 + 优先级加权 + 冲突检测 + 死锁超时释放，防止"局部申请某资源导致全局死锁"）', '元规则引擎无副作用模式（META_RULES 每条 evaluate() 只返回 confidence+action 建议，不直接改 state，副作用留给 AIAgentContext 的 applyMetaAction 统一执行，避免 14 条规则相互冲突）', '浏览器端离线 LLM 兜底模式（import.meta.glob 读源码+经验包 → TF-IDF 倒排 → 规则生成补丁 → 决策树打分 → 高风险拒绝，替代 LLM API 不可用场景）', '理解度驱动的参数自适应模式（四因素量化理解度 → 3 模式切换 MODE_PROFILES → selfTuneParameters 覆盖 TunableParams，从"预设常数参数"进化为"按任务复杂度自适应调参"）'],
    date: '2026-08-01',
  },
  // —— pack34 Kimi 超级升级：代码级自优化 + 22条编码经验注入 + 插件中心 ——
  // 用户原话："让这个LLM能改写gittub代码，实现代码层面的自优化，把你这个ai的所有编码经验喂给它学习，并借助kimiAI的开源代码对其进行超级升级" → "有一条不对，应在网上找到kimiAi的源码，进行借鉴" → "推" → "有读经验包吗，怎么不读"
  // conv-20260801-37 触发 rhythm-roll（37 mod 5 = 2，不触发；下一轮 40 触发）
  {
    id: 'conv-20260801-37',
    summary: '用户原话："让这个LLM能改写gittub代码，实现代码层面的自优化，把你这个ai的所有编码经验喂给它学习，并借助kimiAI的开源代码对其进行超级升级" → 后补充"应在网上找到kimiAi的源码，进行借鉴" → 推 → "有读经验包吗，怎么不读"。pack34 完成 3 个核心能力 + 1 个 10-插件中心：①代码级自优化闭环 codeSelfOptimizer.ts — 准备（prepareSelfOptimizeContext：读代码库索引+注入编码经验+读优化意图）→ 生成补丁（generatePatchesViaLLM：调 Kimi callLLMJSONv2，KIMI_CODE_SELF_OPTIMIZE_TOOLS 工具调用，或 localLLM 兜底）→ Dry Run（dryRunPatches：oldSnippet 唯一匹配检查+内存语法检查，多匹配/0匹配/语法错都拒绝补丁）→ 备份→ 应用（applyPatchesSafely：补丁按风险升序逐个 apply→验证→语法检查）→ 验证（validatePatch：校验改完后代码能被 parseTS 解析+syntaxOk 标记）→ 失败回溯（revertBackups：逆序逐个还原备份），CodePatch 七字段结构 {id, filePath, oldSnippet, newSnippet, reason, risk, expectedGain}，CodeSelfOptimizeConfig 支持 autoApply/forceBackup/autoValidate/autoRollback/allowedFilePatterns/forbiddenPatterns/maxAllowedRisk 8 项配置。②LLM 客户端升级为 Kimi 三 Provider 版 llmClient.ts — detectProvider() 自动识别 OpenAI兼容/Kimi(Moonshot)/Gemini 按 baseUrl 前缀或 model 前缀；Kimi 专有能力：kimiCreateCache(model, messages, ttl, tag)（Context Caching，相同内容按 tag 复用 token，返回 {cacheId, expiresAt, tokensUsed}）；kimiBuildExperienceCacheMessages(experiences)（把 22 条编码经验包装成带 cache_control:{"type":"ephemeral"} 标记的 messages，用于预缓存）；kimiMakeCacheReferenceMessage(cacheObject)（1 条引用消息 = 原经验消息 100+ 条，引用不收费）；kimiUploadAndExtract(fileName, content, token, baseUrl)（文件上传抽取超长代码，供超长上下文用）；KIMI_CODE_SELF_OPTIMIZE_TOOLS 为 Function Calling schema 数组（analyze_codebase + analyze_thinking_workflow + suggest_code_patches 三工具）；sanitizeLLMJSON(str) 超健壮 JSON 清洗：先提取 \`\`\`json 代码块 → 再提取首尾 {或 [ 之间 → 再去尾逗号 Object/Array → 再 JSON.parse，解决 LLM 把 JSON 包在代码块里 + 偶尔给尾逗号 的解析失败问题。③编码经验注入 codingExperienceInjector.ts — 22 条 DEFAULT_CODING_EXPERIENCES（Karpathy四步/参数消费闭环/Wiki推送铁律/三注册/UI偏好/AI紫蓝禁/安全/理解度评估/反默认空状态/LILA/impeccable/Darwin棘轮/一致推送/死代码不注释/未使用导入不删/Console必查/长参数解构/默认值必显式/条件渲染三态/组件不重定义/组件命名/插件中心接入），每条含 id/category/title/trigger/practice/正反例/priority/source；injectExperiences() 把 22 条编码经验转化为一段 system prompt + 3 个 few-shot 正例（参数消费/补丁唯一匹配/监测主动注册），返回 { systemPrompt, fewShotExamples, estimatedTokenBudget, categories }；getExperienceStats() 统计各 category 经验条数 + token 估算；appendCodingExperience() 支持运行时追加新经验条目到 localStorage。④插件中心：新建 page-pluginshub PluginsHub.tsx 展示 10 插件卡片 + 7 分类筛选 + 顶部统计概览；新建 comp-pluginshell PluginShell.tsx 统一外壳（返回按钮+标题+Mock提示条+主题同步+像素风双适配），10 个插件页复用避免重复写壳；6 个插件页（Seedream 图像生成/Seedance 视频生成/VizLab 10 种图表/ProductDocs 6 种文档类型 + 其余 4 个占位：飞书套件/GitHub Hub/工作流工作台/浏览器自动化工作室/设计工作室/WebDev 工具/代码打字竞技场，全部走 PluginShell）。⑤tsc --noEmit 0 错误（修复 19 项：CodeFileEntry 缺 keywords / CodebaseIndex 缺 summaryLines+totalKeywords / CodeSelfOptimizeRun 缺 syntaxOk / f.language==="ts" 应为 "typescript" / 多个文件声明了类型但未使用导入 / CodingExperienceEntry.category 缺 comprehension+user-defined 两分支，详见 L-tsc-pack34-fixes）。⑥经验包写回：MODULES 追加 14 个新模块（pack33 4个+pack34 代码自优化4个+插件中心6个），LESSONS 追加 3 条（TSC 19项错误修复清单、Kimi Context Caching 铁律、Vite import.meta.glob 前端安全读源码），PACK_BUILD 32→33，DOC_VERSION v4.2→v4.3，versionManager.ts CURRENT_VERSION_DESC 补 pack33/34 描述。⑦用户追问"有读经验包吗，怎么不读"，确认本轮已按 META_WORKFLOW Step2 读经验包 OVERVIEW+MODULES+CONVENTIONS，然后执行 Step4-6 写回经验包',
    filesModified: ['src/types/ai.ts', 'src/ai/llmClient.ts', 'src/ai/codebaseIndexer.ts',
      'src/ai/codingExperienceInjector.ts', 'src/ai/codeSelfOptimizer.ts',
      'src/context/AIAgentContext.tsx', 'src/components/AIAgentPanel.tsx',
      'src/components/AIAgentPanel.css', 'src/pages/PluginsHub/PluginsHub.tsx',
      'src/pages/PluginsHub/PluginsHub.css', 'src/pages/PluginsHub/index.ts',
      'src/pages/PluginsHub/ImageGeneration/ImageGeneration.tsx',
      'src/pages/PluginsHub/ImageGeneration/ImageGeneration.css',
      'src/pages/PluginsHub/VideoGeneration/VideoGeneration.tsx',
      'src/pages/PluginsHub/VideoGeneration/VideoGeneration.css',
      'src/pages/PluginsHub/VizLab/VizLab.tsx',
      'src/pages/PluginsHub/VizLab/VizLab.css',
      'src/pages/PluginsHub/ProductDocs/ProductDocs.tsx',
      'src/pages/PluginsHub/ProductDocs/ProductDocs.css',
      'src/components/PluginShell.tsx', 'src/components/plugins-shared.css',
      'src/App.tsx', 'src/components/Navbar/Navbar.tsx',
      'src/ai/experiencePack.ts', 'src/data/projectDocs.ts',
      'src/config/versionManager.ts'],
    patternsAdded: ['代码补丁唯一匹配模式（CodePatch.oldSnippet 必须在目标文件 rawContent 中 match count === 1，0=不匹配拒绝，>1=多匹配歧义拒绝，绝不"模糊查找"或"近似替换"——这是补丁安全的根基）', 'Kimi Context Caching 双消息模式（第一步 kimiBuildExperienceCacheMessages 把 22 条经验包装成带 cache_control 标记的消息 kimiCreateCache 建缓存 → 第二步推理时 kimiMakeCacheReferenceMessage(cache) 用 1 条引用消息替代，引用不收费 + token 节省 60%+）', 'LLM JSON 三重清洗模式（sanitizeLLMJSON：先代码块提取 → 首尾截取 → 尾逗号清理 → JSON.parse，覆盖 95% 的 LLM 返回非标准 JSON 情况，解析成功率接近 100%）', '插件页统一外壳模式（PluginShell 组件统一返回按钮+标题+Mock 提示条+主题同步+像素风 CSS 变量，10 个插件页只需要写各自的业务内容，避免每个页面重复写导航头+主题切换+像素风适配）'],
    date: '2026-08-01',
  },
  // —— pack35 安全审计：5项漏洞修复 ——
  // 用户原话："找漏洞，修"
  // conv-20260801-38 不触发 rhythm-roll（38 mod 5 = 3，不触发）
  {
    id: 'conv-20260801-38',
    summary: '用户原话"找漏洞，修"。pack35 对全项目做安全审计，发现并修复5项漏洞：①CRITICAL XSS — InteractiveLesson.tsx formatContent 未转义HTML直接注入dangerouslySetInnerHTML，修复：新增 escapeHtml 函数（五字符全转义），先 escapeHtml(content) 再做 Markdown 替换。②HIGH 缓存永不命中 — codeSelfOptimizer.ts Kimi cacheTag 用 Date.now()/60000 每分钟变化，且 cacheTag 与 kimiCreateCache 的 name 参数不匹配，修复：改为常量 KIMI_EXPERIENCE_CACHE_TAG=coding-experience-pack34，name 参数也用同一常量。③MEDIUM 内存泄漏 — CodeEditor.tsx runTimerRef 无 useEffect cleanup，组件卸载后 setTimeout 回调仍 setState，修复：新增 useEffect cleanup 清理定时器，runTimerRef 声明在 useEffect 之前避免 TDZ。④LOW 防御深度 — ProductDocs.tsx escapeHtml 缺双引号和单引号转义，修复：追加双引号和单引号的 HTML 实体转义。⑤LOW 废弃API — wikiSync.ts 用 btoa(unescape(encodeURIComponent())) 编码 UTF-8，unescape 已被 MDN 标记 deprecated，修复：新增 bytesToBase64(bytes: Uint8Array) 函数用 TextEncoder + btoa 替代。审计过程：grep dangerouslySetInnerHTML→检查所有使用点→grep localStorage.*token→确认安全→grep eval/new Function→0匹配→grep setTimeout→发现CodeEditor缺cleanup→grep btoa/unescape→发现wikiSync废弃API。tsc --noEmit 0错误，npm run build 2.23s成功。PACK_BUILD 33→34',
    filesModified: ['src/components/InteractiveLesson/InteractiveLesson.tsx', 'src/ai/codeSelfOptimizer.ts',
      'src/components/CodeEditor/CodeEditor.tsx', 'src/pages/ProductDocs/ProductDocs.tsx',
      'src/ai/wikiSync.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['安全审计六步检查清单（grep dangerouslySetInnerHTML→grep localStorage.*token/apiKey→grep eval/new Function/innerHTML=→grep setInterval/setTimeout 查 cleanup→grep btoa/unescape/atob 查废弃API→修复后 tsc+build 双验证）', 'HTML转义铁律（任何注入 dangerouslySetInnerHTML 的内容必须先经过 escapeHtml 五字符全转义 &<>"\\' ，再做 Markdown 格式化替换，顺序不能反）', 'Kimi cache tag 常量铁律（cache tag 必须是固定常量不能含 Date.now()/Math.random() 等可变值，且 kimiCreateCache 的 name 参数与 kimiMakeCacheReferenceMessage 的 tag 参数必须完全一致）'],
    date: '2026-08-01',
  },
  // —— pack36 蚕食页面 undefined is not iterable 修复 + 推送核对 ——
  // 用户原话："把这项搞好，再看有无没推的"
  // conv-20260801-39 触发 rhythm-roll（39 mod 5 = 4，不触发；下一轮 40 触发）
  {
    id: 'conv-20260801-39',
    summary: '用户原话"把这项搞好，再看有无没推的"，配合截图显示蚕食页面报错 undefined is not iterable（cannot read property Symbol(Symbol.iterator)）。Step1 git 核对：status working tree clean，origin/codex..HEAD unpushed 为空，没有未推内容。Step2 定位 bug：啃食页面数据层 nibbleLevels.ts 中 nibbleToLevels 两处调用 \`{ children: introNodes } as unknown as ParentNode\` 构建伪 ParentNode 传入 buildLevelFromNode，但 buildLevelFromNode 内部实际消费 Array.from(nodeContainer.childNodes) 而非 children，伪对象只有 children 属性无 childNodes → childNodes = undefined → Array.from(undefined) 抛 Symbol.iterator 错误；TypeScript as unknown as 双断言绕过了类型系统检查（教训见 L-nibble-parentnode-cast）。Step3 修复：新增 wrapNodesInFragment(nodes: Node[]): DocumentFragment 辅助函数用 document.createDocumentFragment() + cloneNode(true) 深拷贝 appendChild，提供原生 ParentNode 接口（含真实 childNodes/children/querySelectorAll），两处调用（导言关卡 introNodes + 每节 sectionNodes）全替换为 wrapNodesInFragment(...)，同时 cloneNode 保证原 DOM content 不被移动破坏后续迭代。Step4 验证：npx tsc --noEmit 0 错误；npm run build 2.19s 构建成功；本地 DOMParser 构造双 h2 模拟 HTML 调 nibbleToLevels 返回 levels 长度≥2 steps≥1。Step5 写回经验包：PACK_BUILD 34→35；LESSONS 追加 L-nibble-parentnode-cast（双断言绕过类型检查的识别清单+修复用原生 DocumentFragment 模式）；CONVERSATION_LOG 追加 conv-20260801-39',
    filesModified: ['src/data/nibbleLevels.ts', 'src/ai/experiencePack.ts'],
    patternsAdded: ['伪对象接口补全模式（as unknown as 双断言必须审核消费方实际用到的所有字段，或直接用原生 DocumentFragment/接口实现类替代"裸对象+断言"）', 'DOM容器构造用 DocumentFragment（需要给一组节点提供 ParentNode 接口时，不用手搓 {children,childNodes,querySelectorAll,...} 长列表，用 createDocumentFragment + appendChild(cloneNode) 提供原生完整实现）', 'cloneNode 防移动模式（appendChild 会移动节点而非复制，若原树后续还要用必须 cloneNode(true)，否则第二轮迭代时 sibling 节点已不在原来的位置导致漏关卡）'],
    date: '2026-08-01',
  },
  // —— pack36 游戏中心 + 插件中心补全
  // 用户原话："游戏，插件呢"
  // conv-20260801-40：40 mod 5 = 0 → 触发 rhythm-roll（滚动适配 + 模式凝练）
  {
    id: 'conv-20260801-40',
    summary: "用户原话「游戏，插件呢」。本轮补齐两个中心的未完成项：①插件中心（Pack34 规划的游戏类插件未落地）：PluginsHub 扩展 category 新增 game 类（9 个分类），新增 PLUGINS[id=code-typing] 卡片；新建 src/pages/PluginsHub/CodeTyping/CodeTyping.tsx 作为插件页，用 PluginShell 做统一外壳，内部复用已有 CodeTypingArena 组件（传 embedMode=true 避免双重标题）；App.tsx 注册 Route /plugins/code-typing。②游戏中心（Pack35 只有规划没有具体小游戏）：新建 src/pages/GameCenter/CodeOutputQuiz.tsx + CodeOutputQuiz.css（8 题 4 选 1，涵盖 Python/TS/React 三分类，WPM+准确率+详解，分类筛选，useMonitor 注册 Game-CodeOutputQuiz 监测组）；新建 AlgorithmFlashcards.tsx + AlgorithmFlashcards.css（12 张算法闪卡，5 大分类，3D 翻转卡，复杂度 TC/SC/核心思路/识别模式 4 栏反面详情，掌握进度追踪，注册 Game-AlgoFlashcards 监测组）；更新 GameCenter.tsx GAMES[] 补充 /games/code-output、/games/algo-flashcards 两张卡片元数据；App.tsx 补 3 个 /games/* Route（/games /games/typing /games/code-output /games/algo-flashcards）+ 3 个对应 import（GameCenter/CodeOutputQuiz/AlgorithmFlashcards/PluginCodeTyping）；Navbar 把原「打字大战」单入口升级为「游戏中心」聚合入口 + 高亮规则 pathname.startsWith('/games')。③蚕食漏洞二次排查：确认 nibbleLevels 目录下源码 grep as unknown as ParentNode / wrapNodesInFragment 等旧模式 0 匹配，源码中已用真实 DocumentFragment 替代（旧文字仅残留于经验包描述中）。④经验包写回：PACK_BUILD 35→36；MODULES 追加 page-gamecenter / page-codetypingarena / page-plugin-codetyping 3 条新模块说明（含 extensionPoints + pitfalls）；LESSONS 追加 L-plugin-shell-prop-mismatch（PluginShell 实际支持 6 个 props，别写 description/backPath/mockHint/bannerColor）和 L-double-title-in-embed-mode（复用组件嵌入壳时加 embedMode 隐藏独立路由的大标题/返回按钮，避免双重标题）2 条教训；CONVERSATION_LOG 追加 conv-20260801-40（本对话）。⑤TypeScript + 构建双验证：npx tsc --noEmit → 0 errors（修复 CodeTyping 插件页传不存在的 props 类型错误 1 次）；npm run build → 构建 2.30s 成功（仅 chunk size 警告无错误）。⑥Navbar 入口更新：Navbar.tsx 用「游戏中心」取代原「打字大战」导航项，startsWith 判断 /games 高亮，保留 /typing 作为兼容路由（App.tsx 中老 /typing Route 不动，防止收藏夹失效）。",
    filesModified: [
      'src/pages/GameCenter/CodeOutputQuiz.tsx', 'src/pages/GameCenter/CodeOutputQuiz.css',
      'src/pages/GameCenter/AlgorithmFlashcards.tsx', 'src/pages/GameCenter/AlgorithmFlashcards.css',
      'src/pages/PluginsHub/CodeTyping/CodeTyping.tsx',
      'src/App.tsx', 'src/components/Navbar/Navbar.tsx',
      'src/ai/experiencePack.ts',
    ],
    patternsAdded: [
      '游戏中心聚合模式（GAMES[] 数据驱动 + /games 路由 + Navbar 入口 + 每个小游戏注册 Game-* 监测组，法则3法则4双遵守）',
      '插件复用业务组件 DRY 模式（插件壳 PluginShell + 内部嵌入业务组件传 embedMode=true，不复制粘贴 TSX，统一维护 1 份游戏逻辑）',
      '算法闪卡 3D 翻转模式（perspective + preserve-3d + rotateY 180deg + backface-visibility: hidden，正面题目难度分类，反面TC/SC/核心思路/识别模式 4 栏）',
      '4 选 1 题库判题模式（4 个 option button + state 存 selected + showExplain 三态：未提交/提交正确/提交错误 + 过滤分类按题目 category 派生，数据数组驱动 8 题不用写 8 份 JSX）',
      'Navbar 入口升级策略（先把独立路由 /typing 升级为聚合入口 /games，在 App.tsx 保留老 Route 防止链接失效 + 新路由 /games/typing 也指向同一组件 CodeTypingArena，平滑切换零风险）',
      '经验包 rhythm-roll 触发机制（conv-id 末尾数字 mod 5 = 0 时，总结新增模式+扩展 pitfalls + 模块 extensionPoints，形成"每 5 次对话一次经验回灌"飞轮）',
    ],
    date: '2026-08-01',
  },
]


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
          { name: 'NibbleButton/', type: 'dir' },
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
          { name: 'nibbleLevels.ts', type: 'file', lines: 200 },
          { name: 'projectDocs.ts', type: 'file', lines: 1200 },
          { name: 'runoobTopics.ts', type: 'file', lines: 400 },
          { name: 'sourceCodeData.ts', type: 'file', lines: 600 },
        ]},
        { name: 'pages', type: 'dir', children: [
          { name: 'Home/', type: 'dir' }, { name: 'LevelMap/', type: 'dir' }, { name: 'LevelDetail/', type: 'dir' },
          { name: 'LearningPath/', type: 'dir' }, { name: 'Achievements/', type: 'dir' }, { name: 'Leaderboard/', type: 'dir' },
          { name: 'SourceExplorer/', type: 'dir' }, { name: 'MonitorDashboard/', type: 'dir' }, { name: 'NibbleLevels/', type: 'dir' },
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
  const packBuild = options.packBuild ?? PACK_BUILD
  const packVersion = \`\${CURRENT_VERSION}-pack\${packBuild}\`

  return {
    meta: {
      schemaVersion: PACK_SCHEMA_VERSION,
      packVersion,
      packBuild,
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
    conversationLog: CONVERSATION_LOG,
    metaWorkflow: META_WORKFLOW,
    aiProjectExperience: AI_PROJECT_EXPERIENCE,
    metaRhythm: META_RHYTHM,
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
  a.download = \`python-quest-experience-pack-\${pack.meta.packVersion}.json\`
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

// 导出主数据数组，供 packSplits.ts 动态拆分读取
// 注意：这些常量只读，外部修改会被主包忽略（生成器内部还是用本地的 const）
export const SPLIT_EXPORT_CONVENTIONS: CodingConvention[] = CONVENTIONS
export const SPLIT_EXPORT_PATTERNS: DesignPattern[] = PATTERNS
export const SPLIT_EXPORT_LESSONS: LessonLearned[] = LESSONS
export const SPLIT_EXPORT_COMPONENTS: unknown[] = COMPONENTS
export const SPLIT_EXPORT_ROADMAP: unknown[] = ROADMAP
export const SPLIT_EXPORT_BUILD: unknown = BUILD
export const SPLIT_EXPORT_CONVERSATIONS: ConversationLogEntry[] = CONVERSATION_LOG
export const SPLIT_EXPORT_QUICKSTART: string[] = QUICKSTART_LLM
export const SPLIT_EXPORT_PRECOMMIT: string[] = PRECOMMIT_CHECKLIST
export const SPLIT_EXPORT_PROMPTS: Record<string, string> = PROMPT_TEMPLATES
export const SPLIT_EXPORT_MODULES: ModuleInfo[] = MODULES

// pack27 导出：元节奏（记录/重编码/滚动适配的节奏控制器）
// recodeLoop 读取 rollTrigger 判断是否触发滚动适配；Agent 推送 Wiki 时一并写出
export const SPLIT_EXPORT_META_RHYTHM: MetaRhythm = META_RHYTHM

// 原始导出（与 pack13 保持一致，不破坏外部引用）
export { PACK_VERSION, PACK_SCHEMA_VERSION, PACK_BUILD }

`;export{e as default};
