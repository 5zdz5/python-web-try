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
