/**
 * 项目文档数据 - 每次迭代更新此文件
 * 作为源码探索页面的数据源，包含架构说明、功能列表、原理、迁移指南
 */

export interface FileNode {
  name: string
  type: 'file' | 'folder'
  path: string
  desc: string
  children?: FileNode[]
}

export interface FeatureItem {
  icon: string
  title: string
  desc: string
  files: string[]
}

export interface PrincipleItem {
  icon: string
  title: string
  desc: string
  code?: string
}

export interface MigrationStep {
  step: number
  title: string
  desc: string
  code?: string
}

// ===== 当前版本信息 =====
export const DOC_VERSION = 'v3.0'
export const DOC_LAST_UPDATE = '2026-07-30'
export const DOC_CHANGES = [
  '扩展至60关：新增网络编程、系统模块、PyQt、FastAPI、Django、NumPy/Pandas/Matplotlib/Jupyter/Pillow 进阶、R 语言、内置函数与数学模块、爬虫与自动化、FastAPI/Django 实战项目、R 数据 IO 与绘图',
  '对齐菜鸟教程10大教程全目录：Python3、FastAPI、Django、NumPy、Pandas、Matplotlib、Jupyter Notebook、Pillow、Python Qt、R 语言',
  '引入8大分类地图系统：基础、进阶、网络爬虫、数据科学、Web开发、工具、金融、系统编程，每类独立主题色',
  '主题卡片扩展至76张：新增 MongoDB、BeautifulSoup、Selenium、pyecharts、pip 包管理、venv 虚拟环境、CSV、logging、datetime 等细分主题，覆盖 Requests、Scrapy、正则表达式、MySQL、SQLite、Redis、Git、pytest、asyncio、scikit-learn、TensorFlow、PyTorch 全生态',
  '无敌模式覆盖全部60关，分类地图切换支持主题色动态变化',
  '版本化存储 key 自动升级，旧版本数据冻结保留',
  '经验包集成两个外部 Skill：Leonxlnx/taste-skill（三旋钮设计+anti-slop反默认+字体反Inter反Serif+LILA反AI紫蓝规则）与 pbakaus/impeccable（四模式23命令+58检测规则），并新增两套 Prompt 工作流模板，PACK_BUILD 升至 pack3',
  'v1.5：监测系统全局适配修复（reportHealth自动建组+巡游三态检测+7业务页主动注册监测组），新增7条监测设计模式写入经验包 pack4（含三层覆盖/6 Tab结构/主题解耦/关卡三层数据），新增 Card 组件遵循 impeccable 反卡片套卡规则，Button/Navbar 按 taste-skill LILA 规则改造',
  'v1.6：经验包元工作流 pack5 — 写入"读-执行-写回"三步闭环规则作为 PROMPT 模板 + 3 条 meta-workflow 编码约定 + 9 条对话历史归档 CONVERSATION_LOG 数组。强制要求每次对话先读经验包再执行后写回，PACK_BUILD 递增锁，conversationLog 五字段必填，递归规则含其自身',
  'v1.7：Andrej Karpathy Skill 四原则写入经验包 pack6 — 4 条 karpathy 编码约定（Think/Small diff/Run early/Leave better）+ 1 条四步编码流水线设计模式 + karpathyWorkflow Prompt 模板（THINK→DIFF→RUN→POLISH 四阶段+违规自动失败清单6条）+ 第 10 条对话归档。Karpathy 四原则为后续所有对话的最高优先级工作流，在 anti-slop / LILA / impeccable 之上',
  'v1.8：20轮代码筛查与迭代 pack7 — tsc 类型错误 60→0、any 清理 40→约15（保留 API/性能相关）、CSS 硬编码色 33处→CSS 变量、localStorage 保护 3处加 try-catch、事件监听器 5个全有 cleanup、监测覆盖 7/7 页面、ErrorBoundary 全 app 覆盖、XSS 静态内容低风险。新增 VersionProgressData/LeaderboardEntry 类型接口、ConventionCategory/DesignPatternCategory 联合类型扩展、InteractiveStep 加 exercise/answer/explanation',
  'v1.9：按 taste-skill + impeccable 双 Skill 艺术风格优化 pack8 — LILA 紫蓝违规修复 60+处（ErrorBoundary/SourceExplorer/VersionHistory/PatrolButton）、圆角统一为 --radius-* 变量、字体反默认（--font-mono JetBrains Mono 提前）、去除 CSS 变量 fallback 硬编码色、rgba 紫蓝改用 color-mix(in srgb, ...) 表达式',
  'v2.0：接入 Darwin skill（alchaincyf/darwin-skill）与 autoresearch skill（karpathy/autoresearch）pack10 — 新增 6 条编码约定：3 条 darwin-ratchet（棘轮原则分数只升不降+git revert 禁 reset --hard / 独立评委原则禁自评 LLM 自评仅 46.4% / 单一变量原则一轮一维度）、2 条 autoresearch（单文件可修改原则其他只读 / 固定时间预算原则 90s 验证）、1 条 meta-workflow 双螺旋元规则（Skill 是"怎么做"的规则 + 经验包是"做了什么"的记录，两者交叉引用共同迭代进化）。新增 2 条设计模式：Darwin 棘轮+autoresearch 自主实验循环、python-quest-dev-process Skill（网站开发过程 Skill）。扩展 CodingConvention.category 联合类型新增 darwin-ratchet / autoresearch 两个分类。第 13 条对话归档 conv-20260730-13',
  'v2.1：用户要求"每次对话都推"pack11 — 新增 meta-workflow 编码约定：每轮对话 POLISH 阶段 commit 完成后立即 git push origin master，不要等用户额外说"推送"；用户明确说"不推/本地调试先别推/等会儿推"才跳过。推送完成后在 5 句话总结里写明「已推送」+ commit range（如 198a46e..9e0eb65）+ GitHub Pages 重建提示（1-3分钟后上线）。第 14 条对话归档 conv-20260730-14。PACK_BUILD 10→11，DOC_VERSION v2.0→v2.1',
  'v2.2：对话七步闭环规则 pack12 — 新增 meta-workflow 编码约定：每轮对话必须依次执行 ① 回顾 CONVERSATION_LOG 历史对话逐条理解（不允许跳读，Darwin 独立评委原则）② 逐条适配本轮诉求与历史脉络 ③ 应用 5 个 Skill（Karpathy 四步+Darwin 棘轮+autoresearch 单文件+taste-skill 三旋钮+impeccable 四模式+python-quest-dev-process）④ 代码内主动设置局部监测（useEffect 中 registerGroup + reportHealth）⑤ 对接 AIAgentContext 暴露可调参数给 Agent 自主迭代 ⑥ POLISH 阶段省察 7 项遗漏（CONVERSATION_LOG/PACK_BUILD/DOC_VERSION/DOC_CHANGES/project_memory/lastModified/主题同步）⑦ 与当前 Web 内容无缝衔接（路由注册+导航链接+样式跟随主题+Pyodide+Gist 同步）。第 15 条对话归档 conv-20260730-15。PACK_BUILD 11→12，DOC_VERSION v2.1→v2.2',
  'v2.3：安装 Graphify 知识图谱 Skill pack13 — 主页新增『知识图谱』按钮（链接到 /python-web-try/graphify/graph.html）。Graphify (90K+⭐) 是面向 AI 编程助手的代码库知识图谱工具，使用 tree-sitter AST + Leiden 算法，3秒生成交互式可视化图谱（graph.html）+ 结构化数据（graph.json）+ 总览报告（graph_report.md）。Token 省降 71.5 倍。已安装 Skill 清单（7个）：Darwin/autoresearch/taste-skill/impeccable/python-quest-dev-process/Karpathy/Graphify。创建 public/graphify/ 目录存放生成产物。第 16 条对话归档 conv-20260730-16。PACK_BUILD 12→13，DOC_VERSION v2.2→v2.3',
  'v2.4：动态调配元规则 + 用户思维模式元逻辑 pack14 — 创建 src/config/installedSkills.ts skill注册表（7条skill记录+6个动态查询函数），主页按钮改为遍历 webSkills 动态渲染（新增skill自动出现按钮+统计区自动+1），统计区新增"已装Skill"计数。经验包新增3条meta-workflow编码约定：①动态适配元规则（禁止硬编码可变数据）②用户思维模式元逻辑（动态调配→自动归类→举例子验证→跨界迁移→自动总结写入，五步闭环可跨界复用）③自动总结写入规则（每次对话后主动提炼可复用经验写入经验包）。消除分散硬编码，实现"新增skill=追加1条记录=全站自动感知"。第 17 条对话归档 conv-20260730-17。PACK_BUILD 13→14，DOC_VERSION v2.3→v2.4',
  'v2.5：经验包拆分 + 用户思维模式动态归纳 pack15 — 创建 src/ai/packSplits.ts：6个领域子包并行导出（conventions/patterns/lessons/conversations/user-logic/quickstart），主包 generateExperiencePack() 接口完全不变，子包懒加载主包内部数据避免双份维护，主包137KB拆成6个10-30KB精包子包按需读取。创建 UserLogicPanel 组件（4Tab：5步自我进化闭环+8个可展开洞察+词频关键词云+硬约束清单），主页新增"🧠思维模式归纳"按钮直达。经验包追加2条meta-workflow约定：经验包拆分不破坏原则、用户思维模式动态归纳模式。第 18 条对话归档 conv-20260730-18。PACK_BUILD 14→15，DOC_VERSION v2.4→v2.5',
  'v2.6：版块实时更新规则 + 经验包展示说明面板 pack16 — 在 packSplits.ts 新增 generatePackOverview() 函数：12个版块（架构总览/功能模块/编码约定/设计模式/历史教训/可复用组件/路线图/构建约束/快速上手/提交前自检/Prompt模板/对话归档）各含独立更新规则+分类分布+数据源标注+最近更新pack号，所有统计从实际数组 .length 实时计算不硬编码。创建 ExperiencePackOverview 组件（2Tab：版块详情12个可展开卡片含说明/更新规则/分类分布/数据源 + 更新规则汇总），主页新增"📦经验包展示"按钮直达。经验包追加2条meta-workflow约定：版块实时更新规则、经验包展示说明必须实时可访问。第 19 条对话归档 conv-20260730-19。PACK_BUILD 15→16，DOC_VERSION v2.5→v2.6',
  'v2.7：新功能适配法则 pack17 — 用户要求"对源码项目进行分配，编写一套新功能适配法则"。基于现有 MODULES 数组（30+模块9大类）扩展 CodingConvention.category 和 DesignPattern.category 联合类型新增 feature-adaptation 分类，编写 8 条新功能适配法则（①分层归属决策 ②扩展点优先 ③动态适配禁止硬编码 ④监测主动注册 ⑤主题同步双适配 ⑥路由+导航+文档三注册 ⑦经验包写回闭环 ⑧Karpathy四步流水线）+ 2 条设计模式（新功能分层归属决策树 7 层判定 + 新功能五维适配检查清单 架构/数据/监测/主题/文档维）。法则覆盖从"放哪层→怎么扩展→怎么不破坏架构→怎么写回经验包"的完整决策链，让下一个 AI 模型新增功能时有明确规则可依。第 20 条对话归档 conv-20260730-20。PACK_BUILD 16→17，DOC_VERSION v2.6→v2.7',
  'v2.8：蚕食爬取按钮 pack18 — 用户要求"编写一个蚕食按钮，根据 scrapling 对网站进行内容爬取，将爬取内容关卡化处理使用户易于学习"。新增 3 个文件落地法则 1-8 全链路：① src/data/nibbleLevels.ts 数据层（fetchHtml 多 CORS 代理 fallback + nibbleToLevels h2/h3 标题分割算法 + NibbleLevel/NibbleStep/NibbleChallenge 三层类型）② src/components/NibbleButton/NibbleButton.tsx 组件层（监测主动注册 + URL输入 + fetching/parsing/done/error 五态 + 像素风 3D 按钮）③ src/pages/NibbleLevels/NibbleLevels.tsx 页面层（双栏布局 + 步骤指示器 + 挑战展示）。法则 6 三注册完成：App.tsx 路由 /nibble、Navbar 导航"蚕食爬取"、projectDocs.ts FILE_TREE 追加 NibbleButton+NibbleLevels 节点。法则 5 主题双适配：NibbleButton.css 和 NibbleLevels.css 同时支持 [data-theme=pixel-spectrum] 彩虹流动 + [data-theme=pixel-crow] 乌鸦虹彩。第 21 条对话归档 conv-20260730-21。PACK_BUILD 17→18，DOC_VERSION v2.7→v2.8',
  'v2.9：Skill 实验室 + taste-skill/impeccable 审美落地 pack19 — 用户批评"重构UI与界面时完全没有调用 taste skill 与另一个，审美低下"。新增 4 个文件：① src/components/SkillViewer/SkillViewer.tsx + .css（双栏实验室面板：左列表 + 右详情，每个 Skill 展示核心规则含正反例 + 调用命令一键复制 + 调用示例 + Web 入口跳转）② src/pages/SkillLab/SkillLab.tsx + .css（承载 SkillViewer 的页面壳）③ 扩展 src/config/installedSkills.ts：InstalledSkill 接口新增 rules/invokeCommand/invokeExample 三字段，8 个 Skill 全部补全核心规则（共 18 条规则，含 taste-skill 三旋钮 anti-slop/字体反默认/LILA + impeccable 四规则 no-card-in-card/radius-unified/spacing-scale/console-leftover + Karpathy 三原则 + Darwin 三原则 + autoresearch 二原则 + dev-process 二原则 + graphify/scrapling 各一原则）。严格应用 taste-skill：所有间距用 8 倍数显式声明、字体用 var(--font-mono) JetBrains Mono（非 Inter）、颜色全用 var(--color-accent-*)（非 #7c3aed/#6366f1/#3b82f6 紫蓝）。严格应用 impeccable：面板内用 .skill-section 分隔不嵌套 .card、圆角全用 var(--radius-*)、间距全用 8 倍数、无 console 残留。法则 6 三注册：App.tsx 路由 /skills、Navbar 导航"Skill 实验室"、projectDocs.ts FILE_TREE 追加 SkillViewer+SkillLab 节点。法则 5 主题双适配：pixel-spectrum 彩虹流动边框 + pixel-crow 乌鸦虹彩光泽。第 22 条对话归档 conv-20260730-22。PACK_BUILD 18→19，DOC_VERSION v2.8→v2.9',
  'v3.0：一致推送铁律 pack20 — 用户原话"以后一致推送，不准遗漏，编写一套规则，写入源码"。升级 pack11"对话后自动推送"规则为"一致推送铁律"：取消"用户明确说不推才跳过"的例外条款，改为只要产生 git commit 就必须立即 git push origin master，无一例外，禁止延迟推送/被动推送/遗漏推送。用户主权保留边界调整为"用户可说不 commit，但不得要求 commit 了不推的矛盾状态"。新增 pack20"推送前自检清单 4 项"meta-workflow 编码约定：① 工作树 clean（git status 无未提交）② 本地领先 origin N≥1 个 commit ③ push 目标必须是 master 分支 ④ 推送后验证 origin/master HEAD=本地 HEAD。补录 conv-22（pack19 经验包漏录的对话归档）。第 23 条对话归档 conv-20260730-23。PACK_BUILD 19→20，DOC_VERSION v2.9→v3.0'
]

// ===== 技术栈 =====
export const TECH_STACK = [
  { name: 'React 18', icon: '⚛️', desc: 'UI 框架，使用 Hooks + Context API' },
  { name: 'TypeScript 5', icon: '📘', desc: '类型安全，所有组件均使用 TSX' },
  { name: 'Vite 5', icon: '⚡', desc: '构建工具，支持代码分割和 HMR' },
  { name: 'React Router 6', icon: '🧭', desc: 'HashRouter 路由，适配 GitHub Pages' },
  { name: 'Pyodide 0.26', icon: '🐍', desc: '浏览器中运行 Python，WASM 技术' },
  { name: 'GitHub API', icon: '🐙', desc: 'PAT 认证 + Gist 存储云同步' },
  { name: 'localStorage', icon: '💾', desc: '本地进度持久化，防抖写入' },
  { name: 'CSS Variables', icon: '🎨', desc: '主题色系统，无 UI 库依赖' }
]

// ===== 项目文件树 =====
export const FILE_TREE: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    path: 'src',
    desc: '源码根目录',
    children: [
      {
        name: 'components',
        type: 'folder',
        path: 'src/components',
        desc: '可复用组件',
        children: [
          { name: 'Navbar', type: 'file', path: 'src/components/Navbar', desc: '顶部导航栏（Logo + 菜单 + 登录状态 + 同步指示器）' },
          { name: 'Footer', type: 'file', path: 'src/components/Footer', desc: '底部信息栏' },
          { name: 'CodeEditor', type: 'file', path: 'src/components/CodeEditor', desc: '代码编辑器（textarea + 语法高亮 + Pyodide 执行）' },
          { name: 'InteractiveLesson', type: 'file', path: 'src/components/InteractiveLesson', desc: '交互式课程（4种步骤类型 + 答案展示 + 进度条）' },
          { name: 'ChallengeArena', type: 'file', path: 'src/components/ChallengeArena', desc: '挑战竞技场（代码提交 + 测试验证）' },
          { name: 'LoginModal', type: 'file', path: 'src/components/LoginModal', desc: 'GitHub PAT 登录弹窗（含 Token 获取指南）' },
          { name: 'VersionHistory', type: 'file', path: 'src/components/VersionHistory', desc: '版本历史查看（只读快照 + 关卡进度）' },
          { name: 'Button', type: 'file', path: 'src/components/Button', desc: '通用按钮组件' },
          { name: 'NibbleButton', type: 'file', path: 'src/components/NibbleButton', desc: '蚕食爬取按钮（URL输入 + 多CORS代理fallback + 进度展示 + 监测主动注册）' },
          { name: 'SkillViewer', type: 'file', path: 'src/components/SkillViewer', desc: 'Skill 查看按钮（双栏实验室面板 + 规则正反例 + 调用命令复制 + 主题双适配）' }
        ]
      },
      {
        name: 'config',
        type: 'folder',
        path: 'src/config',
        desc: '配置模块',
        children: [
          { name: 'github.ts', type: 'file', path: 'src/config/github.ts', desc: 'GitHub API 集成（PAT认证 + Gist读写 + 超时重试）' },
          { name: 'versionManager.ts', type: 'file', path: 'src/config/versionManager.ts', desc: '版本管理系统（注册表 + 数据冻结 + 快照）' }
        ]
      },
      {
        name: 'context',
        type: 'folder',
        path: 'src/context',
        desc: 'React Context 全局状态',
        children: [
          { name: 'AuthContext.tsx', type: 'file', path: 'src/context/AuthContext.tsx', desc: '认证状态（登录/登出 + Token 校验）' },
          { name: 'ProgressContext.tsx', type: 'file', path: 'src/context/ProgressContext.tsx', desc: '进度状态（关卡/课程/挑战/成就 + 本地存储 + 云同步）' },
          { name: 'PyodideContext.tsx', type: 'file', path: 'src/context/PyodideContext.tsx', desc: 'Pyodide 环境（WASM 加载 + Python 执行）' }
        ]
      },
      {
        name: 'data',
        type: 'folder',
        path: 'src/data',
        desc: '静态数据',
        children: [
          { name: 'mockData.ts', type: 'file', path: 'src/data/mockData.ts', desc: '60关卡元数据（标题/难度/图标/分类/主题，8大分类地图）' },
          { name: 'lessonContent.ts', type: 'file', path: 'src/data/lessonContent.ts', desc: '课程内容（10000+行，60关×多步，含讲解/示例/练习/测验）' },
          { name: 'achievements.ts', type: 'file', path: 'src/data/achievements.ts', desc: '成就系统定义（XP/徽章/解锁条件）' },
          { name: 'runoobTopics.ts', type: 'file', path: 'src/data/runoobTopics.ts', desc: '菜鸟教程76张拓展主题卡片' },
          { name: 'projectDocs.ts', type: 'file', path: 'src/data/projectDocs.ts', desc: '项目文档数据（本文件）' }
        ]
      },
      {
        name: 'pages',
        type: 'folder',
        path: 'src/pages',
        desc: '页面组件',
        children: [
          { name: 'Home', type: 'file', path: 'src/pages/Home', desc: '首页（Hero + 功能介绍 + 版本入口）' },
          { name: 'LevelMap', type: 'file', path: 'src/pages/LevelMap', desc: '关卡地图（60关蛇形布局 + 8大分类切换 + 进度条）' },
          { name: 'LevelDetail', type: 'file', path: 'src/pages/LevelDetail', desc: '关卡详情（课程 + 挑战 + 拓展阅读）' },
          { name: 'Achievements', type: 'file', path: 'src/pages/Achievements', desc: '成就页面' },
          { name: 'Leaderboard', type: 'file', path: 'src/pages/Leaderboard', desc: '排行榜页面' },
          { name: 'LearningPath', type: 'file', path: 'src/pages/LearningPath', desc: '学习路径页面' },
          { name: 'SourceExplorer', type: 'file', path: 'src/pages/SourceExplorer', desc: '源码探索页面（本页面）' },
          { name: 'MonitorDashboard', type: 'file', path: 'src/pages/MonitorDashboard', desc: '监测仪表盘页面（健康/性能/经验包/AI Agent 4 Tab）' },
          { name: 'NibbleLevels', type: 'file', path: 'src/pages/NibbleLevels', desc: '蚕食关卡化页面（双栏布局 + 步骤导航 + 挑战展示 + 双主题适配）' },
          { name: 'SkillLab', type: 'file', path: 'src/pages/SkillLab', desc: 'Skill 实验室页面（承载 SkillViewer + 规则查阅 + 调用命令复制）' }
        ]
      },
      { name: 'App.tsx', type: 'file', path: 'src/App.tsx', desc: '根组件（路由表 + Navbar + Footer）' },
      { name: 'main.tsx', type: 'file', path: 'src/main.tsx', desc: '入口文件（Provider 嵌套 + HashRouter）' },
      { name: 'types/index.ts', type: 'file', path: 'src/types/index.ts', desc: '类型定义（Level/Lesson/Challenge）' }
    ]
  },
  {
    name: 'config files',
    type: 'folder',
    path: '.',
    desc: '配置文件',
    children: [
      { name: 'vite.config.ts', type: 'file', path: 'vite.config.ts', desc: 'Vite 配置（base路径 + 代码分割 + 端口）' },
      { name: 'package.json', type: 'file', path: 'package.json', desc: '依赖管理（4运行时 + 5开发依赖）' },
      { name: 'tsconfig.json', type: 'file', path: 'tsconfig.json', desc: 'TypeScript 编译配置' },
      { name: '.github/workflows/deploy.yml', type: 'file', path: '.github/workflows/deploy.yml', desc: 'GitHub Actions 自动部署到 Pages' }
    ]
  }
]

// ===== 功能列表 =====
export const FEATURES: FeatureItem[] = [
  {
    icon: '🎮',
    title: '游戏化关卡系统',
    desc: '60个关卡覆盖Python基础到R语言进阶，蛇形地图布局，8大主题分类地图（基础/进阶/网络爬虫/数据科学/Web开发/工具/金融/系统编程），支持关卡解锁/完成状态/进度百分比显示，分类切换时主题色动态变化',
    files: ['src/data/mockData.ts', 'src/pages/LevelMap/LevelMap.tsx', 'src/context/ProgressContext.tsx']
  },
  {
    icon: '🐍',
    title: '浏览器内 Python 执行',
    desc: '基于 Pyodide (WebAssembly) 在浏览器中直接运行 Python 代码，无需后端服务器',
    files: ['src/context/PyodideContext.tsx', 'src/components/CodeEditor/CodeEditor.tsx']
  },
  {
    icon: '📚',
    title: '交互式课程',
    desc: '4种步骤类型（讲解/示例/练习/测验），10000+行课程内容覆盖60关，支持查看答案、复制代码、步骤跳转，对齐菜鸟教程10大教程全目录',
    files: ['src/components/InteractiveLesson/InteractiveLesson.tsx', 'src/data/lessonContent.ts']
  },
  {
    icon: '🗂️',
    title: '菜鸟教程主题卡片',
    desc: '76张拓展主题卡片对齐菜鸟教程，覆盖 Requests、Scrapy、BeautifulSoup、Selenium、MongoDB、MySQL、SQLite、Redis、Git、pip、venv、CSV、logging、datetime、pytest、asyncio、scikit-learn、TensorFlow、PyTorch 全生态，带分类标识和难度等级',
    files: ['src/data/runoobTopics.ts', 'src/pages/LevelDetail/LevelDetail.tsx']
  },
  {
    icon: '🔐',
    title: 'GitHub PAT 认证',
    desc: '使用 GitHub Personal Access Token 登录，无需 Firebase，适配国内网络',
    files: ['src/config/github.ts', 'src/context/AuthContext.tsx', 'src/components/LoginModal/LoginModal.tsx']
  },
  {
    icon: '☁️',
    title: 'Gist 云端同步',
    desc: '进度数据存储在 GitHub Gist 中，支持超时重试（15s + 指数退避）和网络错误降级',
    files: ['src/config/github.ts', 'src/context/ProgressContext.tsx']
  },
  {
    icon: '💾',
    title: '版本化进度管理',
    desc: '每次迭代版本独立存储，旧版本数据冻结保留，可查看历史进度快照',
    files: ['src/config/versionManager.ts', 'src/components/VersionHistory/VersionHistory.tsx']
  },
  {
    icon: '🏆',
    title: '成就系统',
    desc: 'XP经验值、徽章解锁、活动日志，激励用户持续学习',
    files: ['src/data/achievements.ts', 'src/context/ProgressContext.tsx', 'src/pages/Achievements/Achievements.tsx']
  },
  {
    icon: '📱',
    title: '响应式设计',
    desc: 'CSS 变量主题系统，移动端适配，无第三方 UI 库依赖',
    files: ['src/index.css', 'src/App.css', '各组件CSS文件']
  },
  {
    icon: '🐛',
    title: '蚕食爬取关卡化',
    desc: '基于 Scrapling 思路的网页内容爬取按钮，多 CORS 代理 fallback（allorigins/corsproxy/thingproxy）+ DOMParser 解析 + h2/h3 标题分割算法，自动将网页内容关卡化为 NibbleLevel/NibbleStep/NibbleChallenge 三层数据结构，每关含讲解/示例/挑战，让用户像吃桑叶一样逐关消化网页知识',
    files: ['src/components/NibbleButton/NibbleButton.tsx', 'src/data/nibbleLevels.ts', 'src/pages/NibbleLevels/NibbleLevels.tsx']
  },
  {
    icon: '🧪',
    title: 'Skill 实验室',
    desc: '让 8 个已安装 Skill 真正能被查看和使用：双栏实验室面板（左列表 + 右详情），每个 Skill 展示核心规则（含正反例对照）+ 调用命令（一键复制到剪贴板）+ 调用示例代码 + Web 入口跳转。严格应用 taste-skill 三旋钮（anti-slop/字体反默认/LILA 反紫蓝）+ impeccable 规则（no-card-in-card/radius-unified/spacing-scale），双主题适配（pixel-spectrum 彩虹流动 + pixel-crow 乌鸦虹彩）',
    files: ['src/components/SkillViewer/SkillViewer.tsx', 'src/components/SkillViewer/SkillViewer.css', 'src/pages/SkillLab/SkillLab.tsx', 'src/config/installedSkills.ts']
  }
]

// ===== 核心原理 =====
export const PRINCIPLES: PrincipleItem[] = [
  {
    icon: '🏛️',
    title: 'Provider 三层嵌套架构',
    desc: 'AuthProvider → ProgressProvider → PyodideProvider，由外到内依次初始化。Auth最外层因为Progress依赖用户身份进行云同步，Pyodide最内层因为只在代码执行时才需要。',
    code: `<AuthProvider>
  <ProgressProvider>
    <PyodideProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PyodideProvider>
  </ProgressProvider>
</AuthProvider>`
  },
  {
    icon: '🔄',
    title: '双通道数据持久化',
    desc: '本地 localStorage（300ms防抖写入）保证即时可用，GitHub Gist（1.5s延迟同步）实现跨设备。同步失败不阻塞本地使用，网络恢复后自动重试。',
    code: `// 本地保存 - 防抖300ms
localSaveTimerRef.current = setTimeout(() => {
  safeSetItem(STORAGE_KEY, JSON.stringify(progress))
}, 300)

// 云端同步 - 延迟1.5s + 超时15s + 重试2次
pendingSyncRef.current = setTimeout(() => {
  writeGist(auth.token, auth.gistId, { progress, savedAt })
}, 1500)`
  },
  {
    icon: '🧊',
    title: '版本冻结机制',
    desc: '每个版本使用独立存储key（python-quest-progress@v1.1），迭代时旧版本数据自动复制冻结，用户可点击版本号查看历史进度快照。登录状态使用独立key不受影响。',
    code: `// 版本化存储 key
const STORAGE_KEY = getVersionStorageKey(CURRENT_VERSION)
// => "python-quest-progress@v1.1"

// Auth 独立存储（跨版本持久）
const TOKEN_KEY = 'python-quest-github-token'`
  },
  {
    icon: '🐍',
    title: 'Pyodide WASM 执行原理',
    desc: 'Pyodide 将 CPython 编译为 WebAssembly，在浏览器中运行完整 Python 解释器。加载时从本地 public/pyodide/ 目录读取（避免CORS），通过 runPythonAsync 执行代码。',
    code: `const pyodide = await loadPyodide({
  indexURL: '/python-web-try/pyodide/',
  checkAPIVersion: false
})
await pyodide.runPythonAsync(\`
  import sys, io
  result = exec(user_code)
\`)`
  },
  {
    icon: '🛡️',
    title: '安全存储降级策略',
    desc: 'safeSetItem 捕获 QuotaExceededError，存储空间不足时自动清理旧活动日志（保留最近30条），避免应用崩溃。所有 localStorage 操作均经过安全包装。',
    code: `function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      // 清理旧数据后重试
      data.activityLog = data.activityLog.slice(0, 30)
      localStorage.setItem(key, JSON.stringify(data))
    }
  }
}`
  },
  {
    icon: '⚙️',
    title: 'Vite 代码分割',
    desc: '将 react/react-dom/react-router-dom 分离为 react-vendor chunk，pyodide 分离为独立 chunk。主包体积减少33%，vendor chunk 可被浏览器独立缓存。',
    code: `// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'pyodide': ['pyodide']
      }
    }
  }
}`
  }
]

// ===== 迁移指南 =====
export const MIGRATION_STEPS: MigrationStep[] = [
  {
    step: 1,
    title: '克隆项目并安装依赖',
    desc: '将项目克隆到本地，安装 npm 依赖包',
    code: `git clone https://github.com/5zdz5/python-web-try.git
cd python-web-try
npm install`
  },
  {
    step: 2,
    title: '修改项目基本信息',
    desc: '修改 package.json 中的项目名称和 vite.config.ts 中的 base 路径。如果你部署到 GitHub Pages 的 /your-repo-name/ 路径下，需要修改 base。',
    code: `// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/',  // 改为你的仓库名
  // ...
})`
  },
  {
    step: 3,
    title: '替换课程内容',
    desc: '修改 src/data/mockData.ts 定义你的关卡元数据，修改 src/data/lessonContent.ts 添加课程步骤。每个关卡支持4种步骤类型：讲解、示例、练习、测验。',
    code: `// mockData.ts - 定义关卡
{ id: 1, title: '第一课', icon: '📚', difficulty: 1, category: '基础' }

// lessonContent.ts - 定义课程步骤
1: [{
  id: 1, title: '步骤标题', type: 'explanation',
  content: 'Markdown 格式的内容'
}]`
  },
  {
    step: 4,
    title: '自定义主题色',
    desc: '修改 src/index.css 中的 CSS 变量，一键切换全站主题。所有组件都使用 var(--color-xxx) 引用。',
    code: `/* src/index.css */
:root {
  --color-bg-primary: #1a1b26;
  --color-bg-secondary: #24283b;
  --color-accent-primary: #7aa2f7;
  --color-accent-success: #10b981;
}`
  },
  {
    step: 5,
    title: '配置 GitHub 认证',
    desc: '认证模块无需修改，用户输入自己的 GitHub PAT 即可。Gist API 自动创建进度备份文件。如需改为其他后端，替换 src/config/github.ts 和 src/context/AuthContext.tsx。',
    code: `// 用户在 GitHub Settings > Developer settings
// > Personal access tokens > Generate new token
// 勾选 gist 权限即可`
  },
  {
    step: 6,
    title: '部署到 GitHub Pages',
    desc: '项目已配置 GitHub Actions 自动部署。推送代码到 main 分支即可触发部署。确保仓库 Settings > Pages > Source 设为 gh-pages 分支。',
    code: `# .github/workflows/deploy.yml
# 自动构建并部署到 gh-pages 分支
git push origin main
# 等待 Actions 完成，访问:
# https://你的用户名.github.io/你的仓库名/`
  },
  {
    step: 7,
    title: '迭代新版本',
    desc: '每次大版本更新时，修改 versionManager.ts 中的版本号常量。系统自动冻结旧版本数据，用户进度不丢失。',
    code: `// src/config/versionManager.ts
export const CURRENT_VERSION = 'v2.0'
export const CURRENT_VERSION_LABEL = '全新版本'
export const CURRENT_VERSION_DESC = '描述本次更新内容'

// 同时更新 projectDocs.ts 中的文档
export const DOC_VERSION = 'v2.0'
export const DOC_CHANGES = ['新功能1', '修复问题2']`
  }
]
