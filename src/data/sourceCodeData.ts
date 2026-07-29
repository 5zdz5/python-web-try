import type { SourceCodeEntry } from '../types/monitor'

export const SOURCE_CODE_ENTRIES: SourceCodeEntry[] = [
  {
    id: 'app-routes',
    group: 'App',
    name: 'App 路由系统',
    file: 'src/App.tsx',
    description:
      '应用根组件，使用 React Router 管理全局路由。包含首页、关卡地图、关卡详情、学习路径、成就、排行榜、源码探索共 7 个业务路由，并通过通配符路由兜底将所有未知路径重定向到首页。',
    principle:
      '采用 HashRouter（在 main.tsx 中包裹）而非 BrowserRouter，路由信息通过 URL 的 hash 部分（#）传递，无需服务端配合即可在 GitHub Pages 等静态托管环境直接部署。通配符路由 path="*" 配合 <Navigate to="/" replace /> 实现 404 兜底：任何未匹配的路径都会被重定向到首页，replace 属性确保重定向不会在浏览器历史记录中留下无效条目，用户点后退不会回到 404 页面。Navbar 与 Footer 在 Routes 之外渲染，保证导航栏和页脚在所有页面全局可见。',
    code: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/map" element={<LevelMap />} />
  <Route path="/level/:id" element={<LevelDetail />} />
  <Route path="/path" element={<LearningPath />} />
  <Route path="/achievements" element={<Achievements />} />
  <Route path="/leaderboard" element={<Leaderboard />} />
  <Route path="/source" element={<SourceExplorer />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>`,
    monitorChecks: ['路由配置完整性', '404重定向到首页', '所有7个业务页面可访问', 'Navbar/Footer全局渲染'],
  },
  {
    id: 'monitor-context',
    group: 'MonitorContext',
    name: 'MonitorContext 监测系统',
    file: 'src/context/MonitorContext.tsx',
    description:
      '全局监测系统 Context，提供分层监测组注册、事件流记录、自主巡游导航、保险快照创建与回溯、崩溃捕获恢复、汇总报告生成六大能力，是整个应用的健康监控中枢。',
    principle:
      '采用分层监测架构：每个页面/组件通过 registerGroup 注册为一个监测组，通过 reportHealth 向上汇报状态（healthy/warning/error/crashed），形成树状汇报链。巡游系统通过 PATROL_ROUTES 配置表驱动，启动时先调用 createSnapshot 保存 localStorage 保险快照，再通过修改 window.location.hash 自动导航各页面，每步等待 2 秒后检测 document.body.innerText 是否超过 50 字符来判断页面是否正常渲染，结果回填到 patrol.results 并同步汇报给对应监测组。崩溃捕获通过 window.addEventListener("error") 和 unhandledrejection 双重监听，崩溃时自动标记 crashed 状态并可通过 recoverFromCrash 回溯到最近快照。事件流限制 200 条、快照限制 10 条，防止内存溢出。',
    code: `const startPatrol = useCallback(() => {
  // 巡游前创建保险快照
  const snapshot = createSnapshot()
  logEvent('info', 'patrol', \`巡游启动，已创建保险快照 \${snapshot.id}\`)
  setPatrol({
    active: true,
    currentStep: 0,
    totalSteps: PATROL_ROUTES.length,
    results: [],
    startTime: Date.now(),
    endTime: null,
  })
  // 跳转到第一个路由
  window.location.hash = PATROL_ROUTES[0].path
}, [createSnapshot, logEvent])`,
    monitorChecks: ['监测组注册与汇报', '巡游自动导航11个路由', '保险快照创建与回溯', '崩溃捕获(window.onerror + unhandledrejection)', '汇总报告生成'],
  },
  {
    id: 'progress-context',
    group: 'ProgressContext',
    name: 'ProgressContext 进度管理',
    file: 'src/context/ProgressContext.tsx',
    description:
      '用户学习进度的全局状态管理，包含关卡/课程/挑战完成状态、XP 经验值、连续学习天数、成就解锁、活动日志，支持版本化存储、本地防抖持久化、GitHub Gist 云端同步、无敌模式与数据迁移。',
    principle:
      '采用版本化存储策略：STORAGE_KEY 由 getVersionStorageKey(CURRENT_VERSION) 生成（如 python-quest-progress@v1.3），每个版本独立存储，旧版本数据冻结保留。初始化时采用三级回退：优先读当前版本 key → 回退到上一版本 key 并调用 migrateProgress 迁移 → 回退到旧版 legacy key。migrateProgress 通过 ensureAllLevelsExist 对齐 mockData 中所有关卡，补全缺失的 lessons/challenges 字段，确保新增关卡不会导致 undefined。本地保存使用 300ms 防抖（LOCAL_SAVE_DEBOUNCE）避免频繁写入，云端同步使用 1500ms 节流上传 Gist。safeSetItem 捕获 QuotaExceededError 并自动清理超过 30 条的旧活动日志。completeLesson/completeChallenge 在完成时自动检查关卡完成度、解锁下一关、触发成就检测、写入活动日志。',
    code: `// 版本化存储：每次迭代使用独立的 key，旧版本数据冻结保留
const STORAGE_KEY = getVersionStorageKey(CURRENT_VERSION)

function migrateProgress(saved: any): UserProgress {
  if (!saved || typeof saved !== 'object') return { ...defaultProgress, levels: buildDefaultLevels() }
  const mergedLevels = ensureAllLevelsExist({
    ...buildDefaultLevels(),
    ...(saved.levels || {})
  })
  return {
    ...defaultProgress,
    ...saved,
    levels: mergedLevels,
    unlockedAchievements: Array.isArray(saved.unlockedAchievements)
      ? saved.unlockedAchievements : defaultProgress.unlockedAchievements,
    claimedAchievements: Array.isArray(saved.claimedAchievements)
      ? saved.claimedAchievements : defaultProgress.claimedAchievements,
  }
}`,
    monitorChecks: ['版本化存储key正确', '三级回退加载(当前/上一/legacy)', '数据迁移字段补全', '本地防抖保存(300ms)', '云端Gist同步(1500ms节流)', '无敌模式开关'],
  },
  {
    id: 'level-map',
    group: 'LevelMap',
    name: 'LevelMap 关卡地图',
    file: 'src/pages/LevelMap/LevelMap.tsx',
    description:
      '关卡地图页面，按 8 大分类（basic/advanced/network/data-science/web/tools/finance/system）展示所有关卡，支持分类切换、全局进度条、无敌模式开关、关卡节点状态可视化（已完成/进行中/锁定）。',
    principle:
      '通过 useMemo 派生 levelsWithStatus，将原始 levels 数据与 ProgressContext 中的解锁/完成状态合并，计算出每个关卡的 status（completed/current/locked），避免每次渲染重复计算。分类过滤复用 config/categories 的 filterLevelsByCategory 共享函数，分类进度复用 computeCategoryProgressPercent，保证 LevelMap 与其他页面分类逻辑一致。分类切换通过 activeCategory 状态控制，CATEGORY_META 提供主题色/图标/描述，CSS 变量 --cat-color 实现分类切换时的主题色动态变化。无敌模式通过 toggleGodMode 切换 godMode，开启时 isLevelUnlocked 对所有关卡返回 true，关闭时恢复按进度解锁。关卡节点点击根据 status 决定是否可导航，锁定关卡不响应点击。',
    code: `const levelsWithStatus = useMemo(() => {
  return levels.map(level => {
    const unlocked = isLevelUnlocked(level.id)
    const completed = isLevelCompleted(level.id)
    const lp = getLevelProgress(level.id)
    let status: 'completed' | 'current' | 'locked' = 'locked'
    if (completed) status = 'completed'
    else if (unlocked) status = 'current'
    return { ...level, status, levelProgress: lp }
  })
}, [isLevelUnlocked, isLevelCompleted, getLevelProgress])

const categoryLevels = useMemo(() => {
  return filterLevelsByCategory(levelsWithStatus, activeCategory)
}, [levelsWithStatus, activeCategory])

const categoryProgressPercent = computeCategoryProgressPercent(categoryLevels, progress.levels)`,
    monitorChecks: ['分类标签8个', '关卡卡片渲染', '无敌模式开关', '分类进度百分比计算', '主题色动态切换', '锁定关卡不可点击'],
  },
  {
    id: 'level-detail',
    group: 'LevelDetail',
    name: 'LevelDetail 关卡详情',
    file: 'src/pages/LevelDetail/LevelDetail.tsx',
    description:
      '关卡详情页，展示关卡头部信息、知识点标签、菜鸟教程拓展卡片、互动学习/编程挑战/学习笔记三个 Tab，支持无效关卡提示、未解锁提示、空挑战状态处理、Pyodide 环境加载状态展示。',
    principle:
      '通过 useParams 获取路由参数 id，parseInt 解析为数字后用 levels.find 查找关卡。采用多重空状态防御：第一层检测 !level || isNaN(levelId) 显示"关卡不存在"页面，第二层检测 !unlocked 显示"关卡未解锁"页面，第三层在挑战 Tab 中检测 currentChallenges.length === 0 显示"即将上线"空状态。Tab 切换通过 activeTab 状态控制（learn/challenges/notes），切换时重置 activeChallenge 避免残留状态。挑战区域采用两级导航：列表页点击进入 ChallengeArena，返回时回到列表。Pyodide 加载状态通过 usePyodide 获取，加载中显示 banner，失败显示错误条并提供重试按钮。拓展卡片(runoobTopics)通过 unlocked 和 href 字段区分"可跳转关卡""拓展阅读""待解锁"三种状态。',
    code: `const levelId = parseInt(id || '4')
const level = levels.find(l => l.id === levelId)

// 无效关卡ID：显示"关卡不存在"页面
if (!level || isNaN(levelId)) {
  return (
    <div className="level-detail-page">
      <div className="container detail-container">
        <button className="back-btn" onClick={() => navigate('/map')}>
          <span>←</span> 返回地图
        </button>
        <div className="locked-page">
          <div className="lock-icon-big">🔍</div>
          <h2>关卡不存在</h2>
          <p>找不到对应的关卡，请从地图选择关卡进入</p>
          <button className="btn btn-primary" onClick={() => navigate('/map')}>返回地图</button>
        </div>
      </div>
    </div>
  )
}`,
    monitorChecks: ['课程步骤渲染', '编程挑战区域', '拓展卡片展示', '空挑战状态("即将上线")', '无效关卡提示(/level/999)', '未解锁关卡提示', 'Pyodide加载/错误状态'],
  },
  {
    id: 'source-explorer',
    group: 'SourceExplorer',
    name: 'SourceExplorer 源码探索',
    file: 'src/pages/SourceExplorer/SourceExplorer.tsx',
    description:
      '源码探索中心，通过 5 个 Tab（总览/源码结构/功能清单/核心原理/迁移指南）展示项目架构文档，统计数据从实际数据源自动计算，文件树支持展开折叠。',
    principle:
      '采用数据驱动统计：stats 通过 useMemo 从 levels（关卡数）、CATEGORY_ORDER（分类数）、runoobTopics（主题卡片数）自动求和计算，新增关卡或卡片时无需修改 UI 即可自动更新。Tab 切换通过 activeTab 状态控制，5 个 Tab 配置以数组驱动渲染，新增 Tab 只需在 tabs 数组添加一项并补充对应面板。文件树使用递归组件 FileTreeNode 渲染，depth 控制缩进层级，默认展开前 2 层（depth < 2），点击文件夹切换 expanded 状态。getFileIcon 根据文件扩展名返回对应 emoji 图标。所有文档内容（DOC_VERSION/TECH_STACK/FILE_TREE/FEATURES/PRINCIPLES/MIGRATION_STEPS）集中在 projectDocs.ts 管理，实现内容与展示分离。',
    code: `// 迭代适配：项目规模统计从实际数据自动计算，新增关卡/卡片/分类时无需改 UI
const stats = useMemo(() => {
  const totalLessons = levels.reduce((s, l) => s + (l.lessons || 0), 0)
  const totalChallenges = levels.reduce((s, l) => s + (l.challenges || 0), 0)
  return {
    levels: levels.length,
    categories: CATEGORY_ORDER.length,
    topics: runoobTopics.length,
    lessons: totalLessons,
    challenges: totalChallenges
  }
}, [])

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'overview', label: '总览', icon: '🏠' },
  { id: 'files', label: '源码结构', icon: '📂' },
  { id: 'features', label: '功能清单', icon: '✨' },
  { id: 'principles', label: '核心原理', icon: '🔬' },
  { id: 'migration', label: '迁移指南', icon: '🚀' }
]`,
    monitorChecks: ['5个Tab切换正常', '统计数据自动计算(关卡/分类/主题/课时/挑战)', '文件树展开折叠', '功能清单卡片', '核心原理代码块', '迁移指南时间线'],
  },
  {
    id: 'home',
    group: 'Home',
    name: 'Home 首页',
    file: 'src/pages/Home/Home.tsx',
    description:
      '应用首页，包含 Hero 横幅、统计数据展示、核心特性介绍、CTA 行动召唤、版本号入口。所有统计数字从实际数据源自动计算，无需手动维护。',
    principle:
      '统计数据通过 useMemo 自动派生：totalLevels 从 levels.length 获取关卡总数，totalChallenges 用 reduce 累加每关的 challenges 数量，totalTopics 从 runoobTopics.length 获取主题卡片数，totalCategories 用 new Set(levels.map(l => l.category)).size 自动去重统计分类数。这种数据驱动方式确保新增关卡、主题或分类时首页数字自动更新，无需修改 UI 代码。版本号通过 getCurrentVersionInfo() 获取，点击底部 version-badge 弹出 VersionHistory 组件查看历史版本快照。stats 数组将数字与标签配对，通过 map 渲染为统计卡片，实现数据与展示分离。',
    code: `// 自动计算统计数据（迭代新增关卡/卡片时自动更新）
const { totalLevels, totalChallenges, totalTopics, totalCategories } = useMemo(() => {
  const totalLevels = levels.length
  const totalChallenges = levels.reduce((s, l) => s + (l.challenges || 0), 0)
  const totalTopics = runoobTopics.length
  const categorySet = new Set(levels.map((l) => l.category))
  const totalCategories = categorySet.size
  return { totalLevels, totalChallenges, totalTopics, totalCategories }
}, [])

const stats = [
  { value: String(totalLevels), label: '大关卡' },
  { value: String(totalChallenges) + '+', label: '编程挑战' },
  { value: String(totalTopics), label: '主题卡片' },
  { value: String(totalCategories) + ' 类', label: '课程分类' }
]`,
    monitorChecks: ['页面加载正常', '4项统计数据正确', '版本号显示', 'Hero横幅与CTA按钮', '特性卡片4个'],
  },
  {
    id: 'categories-config',
    group: 'Categories',
    name: 'categories 分类配置',
    file: 'src/config/categories.ts',
    description:
      '8 大分类地图的集中化元数据配置，定义每个分类的标签、图标、主题色、描述，以及分类显示顺序，并提供过滤、分组、进度计算三个共享工具函数。',
    principle:
      '采用集中式配置模式：所有分类元数据（label/icon/color/desc）统一定义在 CATEGORY_META 中，分类显示顺序由 CATEGORY_ORDER 数组控制，二者作为单一数据源被 LevelMap、Home、SourceExplorer 等多个页面复用，避免分类信息散落各处导致不一致。主题色 color 以 hex 字符串存储，消费方通过 CSS 变量 --cat-color 或字符串拼接（如 color + "22" 生成半透明背景）实现主题色动态应用。新增分类只需三步：在 LevelCategory 类型加 key → 在 CATEGORY_META 加元数据 → 在 CATEGORY_ORDER 加顺序，所有消费方自动读取。三个工具函数使用泛型 <T extends { category: LevelCategory }> 约束，兼容任何包含 category 字段的对象，提高复用性。',
    code: `export const CATEGORY_META: Record<LevelCategory, CategoryMeta> = {
  basic: { label: 'Python 基础', icon: '🐍', color: '#10b981', desc: '语法、变量、循环、函数、数据结构入门' },
  advanced: { label: 'Python 进阶', icon: '🚀', color: '#f97316', desc: 'OOP、装饰器、异常、标准库、综合实战' },
  network: { label: '网络与爬虫', icon: '🌐', color: '#3b82f6', desc: 'Requests、正则表达式、Scrapy 爬虫框架' },
  'data-science': { label: '数据科学', icon: '📊', color: '#8b5cf6', desc: 'NumPy、Pandas、Matplotlib、SciPy' },
  // ... web / tools / finance / system 同理
}

export const CATEGORY_ORDER: LevelCategory[] = [
  'basic', 'advanced', 'network', 'data-science', 'web', 'tools', 'finance', 'system'
]

export function filterLevelsByCategory<T extends { category: LevelCategory }>(all: T[], cat: LevelCategory): T[] {
  return all.filter((l) => l.category === cat)
}`,
    monitorChecks: ['8大分类元数据完整', '分类顺序正确', '主题色一致性', 'filterLevelsByCategory过滤函数', 'computeCategoryProgressPercent进度计算', '新增分类三步流程'],
  },
  {
    id: 'version-manager',
    group: 'VersionManager',
    name: 'versionManager 版本管理',
    file: 'src/config/versionManager.ts',
    description:
      '版本管理系统，实现版本注册表、版本冻结、旧版数据迁移、版本快照摘要查询。每次迭代发布新版本时，旧版本进度数据被冻结为只读快照，新版本使用独立的存储 key。',
    principle:
      '采用注册表 + 版本化存储 key 的设计。版本注册表存储在 localStorage 的 REGISTRY_KEY（python-quest-version-registry）中，记录所有版本信息。每个版本有独立的 storageKey（python-quest-progress@v1.3 格式），互不干扰。initVersionSystem 在应用启动时调用，处理三种场景：①注册表为空且无旧版数据 → 创建首个版本；②注册表为空但有旧版数据 → 创建一个冻结的 v1.0 快照保存旧数据 + 创建当前版本；③注册表中无当前版本 → 将所有现有版本冻结，添加新版本。getPreviousVersionStorageKey 返回最近一个冻结版本的 storageKey，供 ProgressContext 在当前版本无数据时回退读取并迁移。getAllVersionSnapshots 遍历所有版本的存储数据，提取 XP/完成数等摘要供 VersionHistory 组件展示。',
    code: `export function initVersionSystem(): VersionInfo[] {
  let registry = getVersionRegistry()
  if (registry.length === 0) {
    const legacyData = safeGet(LEGACY_PROGRESS_KEY)
    const newVersion: VersionInfo = {
      version: CURRENT_VERSION, label: CURRENT_VERSION_LABEL,
      date: new Date().toISOString(),
      storageKey: getVersionStorageKey(CURRENT_VERSION),
      frozen: false, description: CURRENT_VERSION_DESC
    }
    if (legacyData) {
      // 有旧版数据：先创建一个冻结版本保存旧数据
      const frozenVersion: VersionInfo = {
        version: 'v1.0', label: '历史版本',
        date: new Date().toISOString(),
        storageKey: getVersionStorageKey('v1.0'),
        frozen: true, description: '从旧版迁移的数据'
      }
      safeSet(frozenVersion.storageKey, legacyData)
      registry = [frozenVersion, newVersion]
    } else {
      registry = [newVersion]
    }
    saveVersionRegistry(registry)
    return registry
  }
  // 新版本：冻结所有旧版本，添加新版本
  registry.forEach(v => { v.frozen = true })
  registry.push({ version: CURRENT_VERSION, label: CURRENT_VERSION_LABEL, date: new Date().toISOString(), storageKey: getVersionStorageKey(CURRENT_VERSION), frozen: false, description: CURRENT_VERSION_DESC })
  saveVersionRegistry(registry)
  return registry
}`,
    monitorChecks: ['版本注册表读写', '版本冻结机制', '旧版数据迁移', 'getPreviousVersionStorageKey回退', '版本快照摘要查询', 'storageKey格式正确'],
  },
]
