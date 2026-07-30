/**
 * 已安装 Skill 注册表（动态调配核心配置）
 *
 * 设计理念（用户思维模式：动态调配 + 自动归类 + 反硬编码）：
 *   ① 新增 skill 只需在此追加一条记录，全站自动感知（主页按钮、经验包、源码探索页均动态读取）
 *   ② skill 列表是"唯一数据源"（single source of truth），消除分散在对话日志/经验包文本中的硬编码
 *   ③ 每条 skill 记录含 webIntegration 字段：若提供了 entryRoute/entryHref，主页自动渲染入口按钮
 *
 * 元规则：添加新 skill = 追加 1 条记录 + 不改其他代码 = 自动适配
 */

export type SkillCategory =
  | 'coding-workflow'    // 编码工作流（Karpathy 四步、Darwin 棘轮等）
  | 'code-quality'       // 代码质量（taste-skill、impeccable 等）
  | 'research'           // 自主研究（autoresearch 等）
  | 'knowledge-graph'    // 知识图谱（Graphify 等）
  | 'dev-process'        // 项目开发流程（python-quest-dev-process）
  | 'web-scraping'       // 网页抓取（Scrapling 等）

export type WebIntegration =
  | { type: 'route'; path: string }         // 站内路由，如 /source
  | { type: 'external-href'; href: string }  // 外部链接，如 /python-web-try/graphify/graph.html
  | { type: 'none' }                        // 无 Web 入口（纯编码约定）

export interface InstalledSkill {
  /** 唯一 ID（kebab-case） */
  id: string
  /** 显示名称 */
  name: string
  /** 分类 */
  category: SkillCategory
  /** 来源（GitHub 仓库或来源） */
  source: string
  /** 一句话描述 */
  description: string
  /** 是否启用 */
  enabled: boolean
  /** Web 集成入口（主页自动渲染按钮） */
  webIntegration: WebIntegration
  /** 按钮图标（emoji） */
  icon: string
  /** 按钮文字 */
  buttonText: string
  /** 安装日期 */
  installedDate: string
  /** Skill 核心规则（让 skill 真正能被查看和应用） */
  rules?: SkillRule[]
  /** 标准调用命令（复制即可使用） */
  invokeCommand?: string
  /** 调用示例代码 */
  invokeExample?: string
}

/** Skill 规则项 — 让 skill 不只是名字，而是可被查阅和应用的规则集 */
export interface SkillRule {
  /** 规则 ID */
  ruleId: string
  /** 规则标题 */
  title: string
  /** 规则详细描述 */
  desc: string
  /** 反例（违规写法） */
  badExample?: string
  /** 正例（合规写法） */
  goodExample?: string
}

// ========================= 已安装 Skill 注册表 =========================
// 新增 skill 时只需追加一条记录，全站自动感知
const INSTALLED_SKILLS: InstalledSkill[] = [
  {
    id: 'karpathy',
    name: 'Karpathy 四步编码流水线',
    category: 'coding-workflow',
    source: 'andrej-karpathy-skills',
    description: 'THINK → DIFF → RUN → POLISH 四步工作流，最高优先级编码规则',
    enabled: true,
    webIntegration: { type: 'route', path: '/source' },
    icon: '🧠',
    buttonText: '源码探索',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: andrej-karpathy-skills action=pipeline',
    invokeExample: `// 每次代码修改前必须走四步
// 1. THINK: 先读经验包+相关文件，列出 diff 计划
// 2. DIFF: 按计划做最小化改动
// 3. RUN: npm run build 验证
// 4. POLISH: 省察 7 项遗漏清单`,
    rules: [
      {
        ruleId: 'think-first',
        title: 'Think before code',
        desc: '动手前先读相关文件和经验包，列出改动计划。禁止跳过 THINK 直接改代码',
        badExample: '用户说"改个bug" → 直接改代码 → 发现改错地方了',
        goodExample: '用户说"改个bug" → 读经验包找相关模块 → 读相关源文件 → 列出 diff 计划 → 开始改',
      },
      {
        ruleId: 'small-diff',
        title: 'Small diff, leave better than found',
        desc: '每次改动尽量小，但要留下比之前更好的代码。不要顺手改无关代码',
        badExample: '改一个 bug 顺手重构了 3 个文件 → 难以 review',
        goodExample: '只改 bug 相关的 5 行，但加了一个注释说明 root cause',
      },
      {
        ruleId: 'run-early',
        title: 'Run early, run often',
        desc: '每改完一块就立即 build/test 验证，不要攒一大堆再验证',
        badExample: '改了 10 个文件才 npm run build → 报 20 个错不知道哪个文件的',
        goodExample: '改完 1 个文件就 build → 通过 → 改下一个',
      },
    ],
  },
  {
    id: 'darwin',
    name: 'Darwin 棘轮验证',
    category: 'coding-workflow',
    source: 'alchaincyf/darwin-skill',
    description: '棘轮原则（分数只升不降）+ 独立评委原则（禁自评）+ 单一变量原则（一轮一维度）',
    enabled: true,
    webIntegration: { type: 'none' },
    icon: '🧬',
    buttonText: '',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: alchaincyf/darwin-skill action=verify',
    invokeExample: `// 每轮迭代的验证流程
// 1. 跑评分（性能/可读性/测试覆盖率）
// 2. 若分数下降 → git revert（禁 reset --hard）
// 3. 若分数上升 → commit 锁定
// 4. 一轮只改一个维度（如只改性能，不改可读性）`,
    rules: [
      {
        ruleId: 'ratchet',
        title: '棘轮原则：分数只升不降',
        desc: '每轮迭代必须用客观指标验证，分数下降则回滚，上升则锁定。禁止"感觉差不多就提交"',
        badExample: '重构后没跑 benchmark 就提交 → 上线后发现性能下降 30%',
        goodExample: '重构后跑 benchmark → 分数 85→87 → commit 锁定',
      },
      {
        ruleId: 'independent-judge',
        title: '独立评委原则：禁自评',
        desc: 'LLM 自评准确率仅 46.4%。必须用客观工具（benchmark/test/lint）评判，不能"我觉得没问题"',
        badExample: 'AI 改完代码自己说"看起来没问题" → 提交',
        goodExample: 'AI 改完代码 → 跑 npm run build + npm test + tsc → 全绿才提交',
      },
      {
        ruleId: 'single-variable',
        title: '单一变量原则：一轮一维度',
        desc: '一轮迭代只改一个维度（性能 OR 可读性 OR 功能），不要同时改多个维度，否则无法归因',
        badExample: '同时改性能+重构+加新功能 → 出问题不知道哪个改的锅',
        goodExample: '本轮只优化性能 → 下轮只重构 → 下轮才加新功能',
      },
    ],
  },
  {
    id: 'autoresearch',
    name: 'Autoresearch 自主实验',
    category: 'research',
    source: 'karpathy/autoresearch',
    description: '单文件可修改原则 + 固定时间预算原则（90s 验证超时即 revert）',
    enabled: true,
    webIntegration: { type: 'none' },
    icon: '🔬',
    buttonText: '',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: karpathy/autoresearch action=experiment',
    invokeExample: `// 自主实验循环
// 1. 选定 1 个文件可修改（其他只读）
// 2. 启动 90s 倒计时
// 3. 修改 → build → 测量
// 4. 超时或失败 → revert，换下个实验`,
    rules: [
      {
        ruleId: 'single-file',
        title: '单文件可修改原则',
        desc: '每次实验只允许修改 1 个文件，其他文件只读。避免改动扩散难以归因',
        badExample: '同时改了 5 个文件 → 不知道哪个改动起了作用',
        goodExample: '只改 Optimizer.ts → 其他文件只读 → 明确归因',
      },
      {
        ruleId: 'time-budget',
        title: '固定时间预算原则',
        desc: '每个实验 90s 预算，超时即 revert。避免在死胡同里耗太久',
        badExample: '一个实验卡了 30 分钟还在调试 → 浪费时间',
        goodExample: '90s 内没跑通 → revert → 换下个思路',
      },
    ],
  },
  {
    id: 'taste-skill',
    name: 'Taste-Skill 艺术风格',
    category: 'code-quality',
    source: 'Leonxlnx/taste-skill',
    description: '三旋钮设计：anti-slop 反默认 + 字体反 Inter/Serif + LILA 反 AI 紫蓝',
    enabled: true,
    webIntegration: { type: 'none' },
    icon: '🎨',
    buttonText: '',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: Leonxlnx/taste-skill action=lint knobs=[7,8,6] path=src/',
    invokeExample: `// taste-skill 三旋钮配置
{
  "compactness": 7,   // 0=极啰嗦 10=极度简洁
  "consistency": 8,   // 0=自由发挥 10=严格对齐
  "readability": 6    // 0=无注释 10=逐行注释
}
// 调用：taste-skill lint 检查 anti-slop/字体/LILA`,
    rules: [
      {
        ruleId: 'anti-slop',
        title: 'anti-slop 反默认原则',
        desc: '禁止使用 LLM/框架/库的默认值而不思考。所有配置项必须显式声明选择理由。反 slop = 反"偷懒用默认"',
        badExample: 'timeout: 30000（直接用默认，没理由）；color: blue（直接写默认蓝）',
        goodExample: 'timeout: 15000 /* 选15s而非默认30s：GitHub API国内15s已够，减少用户等待 */',
      },
      {
        ruleId: 'font-anti-default',
        title: '字体反默认：禁用 Inter/Serif',
        desc: 'Inter 是 LLM 最常输出的默认字体（占比>70%），Serif 是系统默认衬线，两者叠加=视觉无辨识度。必须根据项目调性选有辨识度的字体栈',
        badExample: 'font-family: Inter, system-ui, serif（LLM 默认吐，和 99% 项目撞脸）',
        goodExample: 'font-family: "JetBrains Mono", "PingFang SC", sans-serif（等宽+苹方，适配编程学习）',
      },
      {
        ruleId: 'lila-anti-purple-blue',
        title: 'LILA 规则：反 AI 紫蓝',
        desc: 'LILA = LLM-Induced Lavender Aesthetic。AI 极爱输出 #7c3aed 紫、#6366f1 靛、#3b82f6 蓝及渐变。禁止在新功能中直接使用这三个紫蓝色号，必须用项目 CSS 变量 --color-accent-* 或非典型 AI 调色板（琥珀/青柠/玫红/赭石）',
        badExample: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)（典型 AI 紫蓝渐变）',
        goodExample: 'background: var(--color-accent-primary)（用项目已有非紫蓝主题色）',
      },
    ],
  },
  {
    id: 'impeccable',
    name: 'Impeccable 代码规范',
    category: 'code-quality',
    source: 'pbakaus/impeccable',
    description: '四模式 23 命令 + 58 检测规则（圆角/间距/卡片套卡等）',
    enabled: true,
    webIntegration: { type: 'none' },
    icon: '✨',
    buttonText: '',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: pbakaus/impeccable mode=SCAN cmd=detect rules=all',
    invokeExample: `// impeccable 四模式标准工作流
// Mode 1 SCAN: detect → catalog → classify → prioritize → map → profile
// Mode 2 FIX:   correct → refactor → extract → inline → rename → reorder → simplify
// Mode 3 VERIFY: compile → test → diff → benchmark → compare
// Mode 4 REPORT: summarize → visualize → document → changelog → recommend`,
    rules: [
      {
        ruleId: 'no-card-in-card',
        title: '禁止卡片套卡片',
        desc: '卡片内不应再嵌套独立卡片样式。同层级内容用分隔线/标题区分，不要用阴影+边框套娃',
        badExample: '<div class="card"><div class="card">内容</div></div>（视觉套娃，层次混乱）',
        goodExample: '<div class="card"><h3>标题</h3><div class="section">内容</div></div>（用 section 分隔）',
      },
      {
        ruleId: 'radius-unified',
        title: '圆角统一变量',
        desc: '所有圆角必须用 --radius-sm/md/lg/xl 变量，禁止散落硬编码 px。切换主题时圆角统一变化',
        badExample: 'border-radius: 8px;（散落硬编码）',
        goodExample: 'border-radius: var(--radius-md);（主题感知）',
      },
      {
        ruleId: 'spacing-scale',
        title: '间距用 8 倍数',
        desc: '间距必须是 8 的倍数（8/16/24/32），用 --space-* 变量。禁止 7px/13px 等魔数',
        badExample: 'padding: 13px; margin: 7px;（魔数）',
        goodExample: 'padding: var(--space-md); /* 16px */ margin: var(--space-lg); /* 24px */',
      },
      {
        ruleId: 'console-leftover',
        title: '禁止 console 残留',
        desc: '生产代码中不得残留 console.log/debug/error。调试完必须删除',
        badExample: 'console.log("debug here", data)（忘删）',
        goodExample: '// 调试完删除，或用 logger 抽象',
      },
    ],
  },
  {
    id: 'python-quest-dev-process',
    name: 'Python Quest 开发流程',
    category: 'dev-process',
    source: '本项目自研',
    description: '网站完整开发过程 Skill：需求 → 读经验包 → Karpathy 四步 → Darwin 验证 → 写回经验包',
    enabled: true,
    webIntegration: { type: 'route', path: '/source' },
    icon: '🔄',
    buttonText: '源码探索',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: python-quest-dev-process action=full-cycle',
    invokeExample: `// 完整开发流程
// 1. READ: 读经验包 generateExperiencePack()
// 2. EXECUTE: 按 Karpathy 四步 + Darwin 验证
// 3. CHECK: 按 taste-skill/impeccable 检查审美
// 4. WRITE: 写回经验包 (CONVERSATION_LOG+1 + PACK_BUILD+1)`,
    rules: [
      {
        ruleId: 'read-before-execute',
        title: '先读经验包再执行',
        desc: '每次对话开始必须先读最新经验包，了解 modules/conventions/patterns。禁止跳过直接写代码',
        badExample: '用户说"加功能X" → 直接写代码 → 重复造轮子或违反既有约定',
        goodExample: '用户说"加功能X" → 读经验包找相关 module → 按 conventions 写',
      },
      {
        ruleId: 'write-back-after-execute',
        title: '执行后必须写回经验包',
        desc: '任务完成后必须把新模块/约定/模式/教训写回经验包，PACK_BUILD+1。未写回的功能等于"不存在"',
        badExample: '写完代码就结束 → 下个模型看不到新功能 → 重复造轮子',
        goodExample: '写完代码 → 追加 CONVERSATION_LOG + MODULES + PACK_BUILD+1',
      },
    ],
  },
  {
    id: 'graphify',
    name: 'Graphify 知识图谱',
    category: 'knowledge-graph',
    source: 'safishamsi/graphify',
    description: 'tree-sitter AST + Leiden 算法，3秒生成交互式代码知识图谱，Token 省降 71.5 倍',
    enabled: true,
    webIntegration: { type: 'external-href', href: '/python-web-try/graphify/graph.html' },
    icon: '🕸️',
    buttonText: '知识图谱',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: safishamsi/graphify action=generate target=src/',
    invokeExample: `// Graphify 三步
// 1. generate: tree-sitter AST 解析 + Leiden 社区聚类
// 2. 输出: graph.html (交互) + graph.json (数据) + graph_report.md (报告)
// 3. 收益: Token 省降 71.5 倍，3 秒出图`,
    rules: [
      {
        ruleId: 'ast-based',
        title: '基于 AST 而非正则',
        desc: '用 tree-sitter 解析语法树，而非正则匹配。准确率远高于正则方案',
        badExample: '用正则提取函数定义 → 漏掉装饰器/嵌套函数',
        goodExample: 'tree-sitter AST → 精确定位所有函数/类/方法',
      },
    ],
  },
  {
    id: 'scrapling',
    name: 'Scrapling 自适应爬虫',
    category: 'web-scraping',
    source: 'D4Vinci/Scrapling',
    description: '自适应网页抓取框架：智能元素追踪（页面变更自动重定位）+ 反反爬（绕过 Cloudflare Turnstile）+ Spider 并发爬虫 + MCP Server',
    enabled: true,
    webIntegration: { type: 'external-href', href: 'https://scrapling.readthedocs.io' },
    icon: '🕷️',
    buttonText: '网页抓取',
    installedDate: '2026-07-30',
    invokeCommand: 'skill: D4Vinci/Scrapling action=fetch url=<target>',
    invokeExample: `// Scrapling 自适应抓取
// 1. fetch(url): 智能元素追踪，页面变更自动重定位
// 2. 反反爬：绕过 Cloudflare Turnstile
// 3. Spider: 并发爬虫
// 4. MCP Server: 标准化接口`,
    rules: [
      {
        ruleId: 'adaptive-tracking',
        title: '自适应元素追踪',
        desc: '页面 DOM 变更时自动重定位元素，不需要重写选择器。比传统 XPath/CSS 选择器更鲁棒',
        badExample: '硬编码 XPath → 网站改版 → 选择器失效 → 全部重写',
        goodExample: 'Scrapling 自适应追踪 → 网站改版 → 自动重定位 → 代码不变',
      },
    ],
  },
]

// ========================= 动态查询函数 =========================

/** 获取所有已安装 skill（自动归类） */
export function getInstalledSkills(): InstalledSkill[] {
  return INSTALLED_SKILLS.filter(s => s.enabled)
}

/** 获取有 Web 入口的 skill（主页动态渲染按钮用） */
export function getWebIntegratedSkills(): InstalledSkill[] {
  return getInstalledSkills().filter(s => s.webIntegration.type !== 'none')
}

/** 获取已安装 skill 总数 */
export function getInstalledSkillCount(): number {
  return getInstalledSkills().length
}

/** 按 category 自动归类 */
export function getSkillsByCategory(category: SkillCategory): InstalledSkill[] {
  return getInstalledSkills().filter(s => s.category === category)
}

/** 获取 skill 分类统计（自动归类，不硬编码） */
export function getSkillCategoryStats(): Record<SkillCategory, number> {
  const stats = {} as Record<SkillCategory, number>
  for (const skill of getInstalledSkills()) {
    stats[skill.category] = (stats[skill.category] || 0) + 1
  }
  return stats
}

/** 根据 id 获取单个 skill */
export function getSkillById(id: string): InstalledSkill | undefined {
  return INSTALLED_SKILLS.find(s => s.id === id && s.enabled)
}

export { INSTALLED_SKILLS }
