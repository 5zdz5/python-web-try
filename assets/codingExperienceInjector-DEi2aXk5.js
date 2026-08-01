const n=`/**
 * pack34 编码经验注入器（Coding Experience Injector）
 *
 * 目标：把 AI 的所有编码经验喂给 LLM 学习（Kimi 升级重点）。
 *
 * 编码经验来源：
 *   1. Karpathy 四步工作流（THINK → DIFF → RUN → POLISH）
 *   2. 参数真实消费闭环（TunableParams 真生效，避免装饰参数）
 *   3. meta 域 Q-table + epsilon-greedy（meta参数核心决策因素）
 *   4. Wiki 真实闭环（带指数退避重试 + 定时消费者）
 *   5. UI 偏好（像素风 / 乌鸦彩色黑 / shimmer 液体风格 / 3D 立体按钮）
 *   6. 安全（首页永不修改、无破坏性高风险操作）
 *   7. 理解度评估（4因子：意图清晰度/上下文丰富度/历史一致性/资源利用率）
 *   8. 自编码经验（保守/探索/精细三模式）
 *   9. 用户偏好（中文交流、项目约定）
 *   10. Skill 训练规则（合规校验、strictMode 拦截）
 *
 * 输出：
 *   - 经验条目数组（持久化到 localStorage）
 *   - 注入到 system prompt + few-shot 示例的函数
 */
import type { CodingExperienceEntry, ExperienceInjectionResult } from '../types/ai'

/** localStorage key */
export const CODING_EXPERIENCE_KEY = 'python-quest-coding-experiences-v1'

// =============================================================
//  内置编码经验库（打包进 bundle，作为默认知识库）
//  共 20+ 条，覆盖上述 10 个来源
// =============================================================
const BUILTIN_EXPERIENCES: Omit<CodingExperienceEntry, 'id' | 'timestamp'>[] = [
  // ---- 1) Karpathy 四步工作流（最高优先级） ----
  {
    category: 'workflow',
    title: 'Karpathy 四步：先思考再动手（THINK 阶段）',
    description: '每轮迭代先评估需求理解度；理解度<40 时不要做任何修改，先观察收集上下文、澄清需求',
    trigger: '用户需求模糊、理解度低、首轮迭代、context 稀少',
    practice: '在开始改代码前，先写一段"理解度评估"文字，确认与用户需求一致；理解度低的迭代仅做观察/提问，不做 diff',
    antiExample: '用户说"优化一下"就立刻改参数，结果发现用户要的是功能新增不是性能调优',
    source: 'karpathy',
    priority: 1,
  },
  {
    category: 'workflow',
    title: 'Karpathy 第二步：最小可验证变更（DIFF 阶段）',
    description: '每一步只改最小、可独立验证的一块代码；避免一次大改导致难以定位错误',
    trigger: '准备修改任何文件时',
    practice: '单次改动范围：一个函数/一个规则/一个组件 state；改完立刻有明确的验证手段（tsc、测试、UI 刷新）',
    antiExample: '一次 Edit 同时改 AIAgentContext + 10 个页面 + 所有 CSS',
    source: 'karpathy',
    priority: 1,
  },
  {
    category: 'workflow',
    title: 'Karpathy 第三步：每次改完必须跑验证（RUN 阶段）',
    description: '代码改动不是完成，验证通过才是完成；至少 tsc --noEmit，有测试跑测试，UI 改动刷新页面',
    trigger: '任何代码改动落盘后',
    practice: '应用补丁后立刻：1) npx tsc --noEmit -p tsconfig.json；2) UI 相关改动访问页面截图；3) 失败立即回溯',
    antiExample: '改完 AIAgentContext 就宣称"已完成"，结果 tsc 报 12 个错误',
    source: 'karpathy',
    priority: 1,
  },
  {
    category: 'workflow',
    title: 'Karpathy 第四步：打磨细节（POLISH 阶段）',
    description: '验证通过后二次检查：是否移除未使用导入/变量、类型是否精确（不用 any）、注释是否只讲 why',
    trigger: 'tsc 已通过、主功能已验证',
    practice: '最后一轮：grep 未使用变量、检查 any 的使用、去除调试 console.log、用更具体的类型代替 Record<string, any>',
    source: 'karpathy',
    priority: 1,
  },

  // ---- 2) 参数真消费闭环 ----
  {
    category: 'anti-pattern',
    title: '禁止"装饰参数"：参数必须被组件真实消费',
    description: 'TunableParams 里的每一个字段都必须在某个组件中被读取并影响行为，否则就是假进化',
    trigger: '新增一个可调参数时，或发现 params 某个字段长期未使用',
    practice: '新增参数同时在 1+ 组件中 useAIAgent 读取并使用；例如 cacheTTL 决定 localStorage 有效期、autoSaveInterval 决定保存定时器间隔',
    antiExample: '加了 strategyExplorationRate 但 Q-table + epsilon-greedy 从未引用，等于白加',
    source: 'history',
    priority: 1,
  },
  {
    category: 'optimization',
    title: '元优化（meta 域）核心：Q-table + epsilon-greedy',
    description: 'strategyExplorationRate（epsilon）决定策略选择时探索 vs 利用的比例；agentLearningRate 控制学习步长',
    trigger: '选择优化策略、评估参数变更幅度',
    practice: '当 epsilon 高（>0.3）时允许尝试新策略，低时只选 Q 值最高的历史最优；学习率大时步长大，学习率小时微调',
    source: 'history',
    priority: 2,
  },

  // ---- 3) Wiki 推送闭环 ----
  {
    category: 'pattern',
    title: '异步推送必须 fire-AND-remember，不能 fire-and-forget',
    description: 'GitHub 推送不能只调用一次就丢；必须有指数退避重试 + 待推送队列 + 定时消费者',
    trigger: '需要把经验包/代码更改/监查报告同步到 Wiki 时',
    practice: 'pushToWikiAsync 失败写入 pending 队列；每 5 分钟 processPendingQueue 重试，最多 maxRetries 次，指数退避 2^attempt',
    antiExample: 'fetch(url) 之后没有 .catch 也没有重试，GitHub 偶尔 500 就永久丢失推送',
    source: 'history',
    priority: 2,
  },

  // ---- 4) UI 偏好（用户明确要求）----
  {
    category: 'ui-preference',
    title: 'UI 风格：像素风 + 最小块 + 3D 立体按钮（透视原理）',
    description: '所有视觉元素偏向像素艺术风格；按钮立体效果需体现光影与消失点透视',
    trigger: '新建或调整按钮、卡片、交互组件样式',
    practice: '按钮使用 clip-path 加斜角，加 box-shadow 模拟立体厚度；悬停时 Y 轴 -2px 位移 + 阴影加深营造按压',
    source: 'user',
    priority: 2,
  },
  {
    category: 'ui-preference',
    title: '配色：乌鸦彩色黑（深底+虹彩光泽）+ shimmer 液体（Terraria 彩虹渐变）',
    description: '不使用明亮白色大背景；优先深色底，渐变高光，shimmer 动效用 HSL 彩虹循环',
    trigger: '定义 CSS 变量、渐变、动画',
    practice: '背景使用深灰+暗紫渐变；主色使用 color-mix 叠加虹彩；shimmer 用 @keyframes 0-100% hue-rotate 360deg',
    source: 'user',
    priority: 2,
  },
  {
    category: 'ui-preference',
    title: 'UI 呼出效果：3D 像素柱随机升起，元素避免重叠',
    description: '进入页面/展开板块时，小块元素以随机延迟 + translateY(0) 从地下升起；z-index 分层避免覆盖',
    trigger: '新页面初始化/折叠面板展开/模态弹层打开',
    practice: '给每个卡片加 animation-delay: \${i * 0.03}s；transform 从 translateY(40px) 到 0；父层 overflow 保证布局不变形',
    source: 'user',
    priority: 2,
  },

  // ---- 5) 安全 ----
  {
    category: 'security',
    title: '首页（路由 "/"）核心内容受保护，永不自动修改',
    description: '首页是用户访问入口，任何代码自优化/Agent 自动调优不得触碰首页核心组件源码',
    trigger: '准备写入任何文件前，先检查路径黑名单',
    practice: '修改前判断 filePath：命中 src/pages/Home/、package.json、tsconfig.json 直接跳过；除非用户在 prompt 中明确要求',
    source: 'default',
    priority: 1,
  },
  {
    category: 'security',
    title: '补丁执行前强制备份 + 应用失败自动回溯',
    description: '代码改动必须有 rollback 路径；不能让用户处于"改坏了修不回来"的境地',
    trigger: '准备 apply 任何代码补丁前',
    practice: '把要修改的每个文件原始内容写入 Map 备份；整体补丁应用完后运行 tsc；失败按原顺序逆序恢复备份文件',
    source: 'default',
    priority: 1,
  },
  {
    category: 'security',
    title: '补丁风险分层：>0.6 需要人工确认，0.8+ 直接禁止',
    description: 'risk 0=纯格式化；0.3=新增导入/小重构；0.5=影响运行时行为；>0.6=跨模块大改动；>0.8=删除大量代码/改类型签名',
    trigger: '生成补丁后自动按配置过滤',
    practice: '默认 maxAllowedRisk=0.5；若 autoApply=true 只应用 risk<=0.5；高风险补丁必须等用户在 UI 中手动点"应用"',
    source: 'default',
    priority: 2,
  },

  // ---- 6) 理解度评估（自编码模式选择依据）----
  {
    category: 'comprehension',
    title: '理解度 < 30 → 保守模式：只参考历史最佳参数微调',
    description: '上下文信息不足时，不做任何大改动；保守模式下仅从历史已 committed + gain>0 的迭代中选最优参数作小调整',
    trigger: '每轮迭代计算 comprehension 后，决定自编码模式',
    practice: '在 history 中过滤 result=committed 且 gain>0，按 gain 排序取前 3 条；参数调整幅度不超过 agentLearningRate * 当前值 ±20%',
    source: 'history',
    priority: 2,
  },
  {
    category: 'comprehension',
    title: '理解度 30~70 → 探索模式：结合本地 LLM 建议 + 资源验证',
    description: '有一定上下文但仍需试探；此时调本地 LLM 推理 + pyodide 跑测试 + 调用 monitor 创建快照',
    trigger: '30 ≤ 理解度 ≤ 70',
    practice: '自编码阶段 dispatch 资源：llm:local-infer 与 pyodide:run-learning-validation；然后 merge 元逻辑 + LLM 的参数建议',
    source: 'history',
    priority: 2,
  },
  {
    category: 'comprehension',
    title: '理解度 > 70 → 精细模式：高学习率、精细调优、主动做性能 A/B',
    description: '理解度高时可以做更激进的优化，因为有足够上下文兜底；同时学习率提至 0.3 快速迭代',
    trigger: '理解度 > 70',
    practice: '将 agentLearningRate 调至 0.3；主动跑多次验证对比；允许自编码产生 2-3 组参数 A/B 选择',
    source: 'history',
    priority: 2,
  },

  // ---- 7) Skill 训练（合规校验）----
  {
    category: 'architecture',
    title: 'Skill 规则优先于 LLM 自由发挥：不合规建议强制拦截',
    description: '严格模式下，LLM 给出的建议先过 skill 规则合规校验；违反规则的建议直接 discard，不进入应用阶段',
    trigger: '采纳 LLM 建议前',
    practice: 'strictMode=true 时 violation 状态建议不应用；warn 状态建议可降级标记，由用户确认',
    antiExample: 'skill 规则写死了"禁止首页修改"，LLM 建议改首页，结果被直接应用引发 bug',
    source: 'skill',
    priority: 2,
  },

  // ---- 8) JSON 解析健壮性（来自经验 607244）----
  {
    category: 'debugging',
    title: 'LLM JSON 返回必须做 sanitizeLLMJSON 清洗',
    description: 'LLM 常生成带 markdown 代码块、前导解释文字、尾逗号、BOM 的伪 JSON；直接 parse 必失败',
    trigger: '任何从 LLM 文本响应到 JSON.parse 的边界处',
    practice: '使用 sanitizeLLMJSON 函数：去 BOM → 去代码块包裹 → 截取 { } 或 [ ] → 清理尾逗号 → 再 parse；失败返回 null 而非抛',
    source: 'history',
    priority: 1,
  },

  // ---- 9) 文件系统查询兜底（来自经验 639749）----
  {
    category: 'debugging',
    title: '文件发现三段式兜底：LS → 含隐藏项遍历 → 交叉工具切换',
    description: 'Glob/LS 与预期冲突时，必须用显示隐藏项的遍历验证；某工具调用 failed 立刻切等价查询',
    trigger: '目录列表结果为空或不匹配预期时',
    practice: '先用 LS（常规），再用带隐藏的命令/遍历，若失败换 Read 指定文件 + 报错提示',
    source: 'history',
    priority: 2,
  },
  {
    category: 'debugging',
    title: 'Git 错误硬性规则：fatal/error/Permission denied/exit非0 一律按失败',
    description: '任何 Git 输出中出现上述关键词，必须进入失败路径处理；禁止"静默成功"式汇报',
    trigger: '调用 Git 相关命令/API 之后',
    practice: '正则匹配输出，命中失败关键词就返回失败并把关键错误行引用到汇报中',
    source: 'history',
    priority: 2,
  },

  // ---- 10) 代码补丁（old snippet 唯一匹配）----
  {
    category: 'pattern',
    title: '代码补丁 old_snippet 必须唯一匹配，前后保留足够上下文',
    description: 'old_snippet 过短会在文件中命中多次，导致替换错误位置；要前后各加 1-2 行上下文确保唯一',
    trigger: '生成 old_snippet / new_snippet 补丁对时',
    practice: 'old_snippet 至少 6 行（10 行更稳妥）；前后包含能定位的独特标识（函数名、常量名、注释块）',
    antiExample: 'old_snippet = "return null" 导致整文件 12 处命中，替换到错误分支',
    source: 'default',
    priority: 1,
  },
  {
    category: 'anti-pattern',
    title: '禁止未读先写：Edit 前必须 Read 最新内容',
    description: '若没先 Read 文件就 Edit，old_string 很可能与磁盘最新内容不匹配，导致 Edit 工具失败，用户感知"原地踏步"',
    trigger: '准备 Edit 任何文件前',
    practice: 'Read 拿到精确行片段 → 在 Edit 的 old_string 中一字不差复用这段 → 再替换为 new_string',
    antiExample: '凭记忆写 old_string，结果是 10 行前的版本，Edit 报"找不到匹配"',
    source: 'history',
    priority: 1,
  },
]

// =============================================================
//  持久化 + 合并
// =============================================================

function storageGet(): CodingExperienceEntry[] {
  try {
    const raw = localStorage.getItem(CODING_EXPERIENCE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CodingExperienceEntry[]
  } catch {
    return []
  }
}
function storageSet(list: CodingExperienceEntry[]): void {
  try {
    localStorage.setItem(CODING_EXPERIENCE_KEY, JSON.stringify(list))
  } catch {
    // ignore
  }
}

/** 初次加载时合并内置经验 + localStorage 用户追加经验（按 id 去重） */
export function loadCodingExperiences(): CodingExperienceEntry[] {
  const stored = storageGet()
  const now = new Date().toISOString()
  const builtinWithId: CodingExperienceEntry[] = BUILTIN_EXPERIENCES.map((e, i) => ({
    ...e,
    id: \`builtin-\${i.toString().padStart(3, '0')}\`,
    timestamp: now,
  }))
  const seen = new Set<string>()
  const merged: CodingExperienceEntry[] = []
  // 先放内置
  for (const b of builtinWithId) {
    if (!seen.has(b.id)) {
      seen.add(b.id)
      merged.push(b)
    }
  }
  // 再放用户追加
  for (const s of stored) {
    if (!seen.has(s.id)) {
      seen.add(s.id)
      merged.push(s)
    }
  }
  return merged
}

/** 追加用户自定义编码经验 */
export function appendCodingExperience(
  entry: Omit<CodingExperienceEntry, 'id' | 'timestamp'>,
): CodingExperienceEntry {
  const all = loadCodingExperiences()
  const newEntry: CodingExperienceEntry = {
    ...entry,
    id: \`user-\${Date.now().toString(36)}\`,
    timestamp: new Date().toISOString(),
  }
  storageSet([...all, newEntry])
  return newEntry
}

// =============================================================
//  注入到 LLM prompt：system prompt + few-shot 示例
// =============================================================

/**
 * 把编码经验条目渲染成自然语言规则列表（给 system prompt 或 Kimi Context Caching 用）。
 * 按 priority 升序（1 = 最高），按 category 分组。
 */
export function renderExperienceRules(experiences: CodingExperienceEntry[], maxCount = 40): string[] {
  const sorted = [...experiences].sort((a, b) => a.priority - b.priority)
  const lines: string[] = []
  const seenCategory = new Set<string>()
  for (let i = 0; i < Math.min(maxCount, sorted.length); i++) {
    const e = sorted[i]
    if (!seenCategory.has(e.category)) {
      lines.push(\`# === 分类：\${e.category}（\${i === 0 ? '核心最高优先级' : '优先遵守'}）\`)
      seenCategory.add(e.category)
    }
    const parts: string[] = [
      \`规则 \${i + 1}：\${e.title}（source=\${e.source}，priority=\${e.priority}）\`,
      \`  - 说明：\${e.description}\`,
      \`  - 触发条件：\${e.trigger}\`,
      \`  - 推荐做法：\${e.practice}\`,
    ]
    if (e.antiExample) parts.push(\`  - 反例（禁止）：\${e.antiExample}\`)
    if (e.positiveExample) parts.push(\`  - 正例：\${e.positiveExample}\`)
    lines.push(parts.join('\\n'))
  }
  return lines
}

/** 估算 token 预算（粗略：中文按 2 chars / token 估算） */
function estimateTokens(text: string): number {
  return Math.max(8, Math.round(text.length / 3))
}

/**
 * 生成编码经验注入结果：
 *   - systemPrompt：完整的 system 角色 + 规则库（Kimi 可放 Context Caching 中）
 *   - fewShotCount：few-shot 正例数
 *   - estimatedTokenBudget：粗略 token 估算
 */
export function injectExperiences(experiences: CodingExperienceEntry[]): ExperienceInjectionResult {
  const rules = renderExperienceRules(experiences)
  const categoryCount: Record<string, number> = {}
  for (const e of experiences) {
    categoryCount[e.category] = (categoryCount[e.category] || 0) + 1
  }
  // few-shot：内置的 3 个正例（Karpathy 工作流 / 参数消费 / 补丁唯一匹配）
  const fewShots = [
    // 示例1：正确应用参数消费
    {
      title: '参数消费：autoSaveInterval 真实影响保存定时器',
      before: 'const [saveTimer, setSaveTimer] = useState(setInterval(() => save(), 10000))',
      after: 'const { params } = useAIAgent(); useEffect(() => { const t = setInterval(save, params.autoSaveInterval); return () => clearInterval(t); }, [params.autoSaveInterval])',
    },
    // 示例2：old_snippet 足够上下文确保唯一匹配
    {
      title: '补丁唯一匹配：old_snippet 包含函数签名+2行上下文',
      before: 'function logDecision(phase, strategyId) {\\n  const d = { id, timestamp, phase, strategyId }\\n  history.push(d)\\n}',
      after: 'function logDecision(phase, strategyId, reason, before, after, applied) {\\n  const d = { id, timestamp, phase, strategyId, reason, before, after, applied }\\n  history.push(d)\\n}',
    },
    // 示例3：sanitizeLLMJSON 健壮解析
    {
      title: 'LLM JSON 清洗：去除 markdown 代码块 + 尾逗号',
      before: '{ "a": 1,\\n  "b": 2, } // trailing comma\\n\`\`\`',
      after: '{\\n  "a": 1,\\n  "b": 2\\n}',
    },
  ]
  const fewShotText = fewShots
    .map(
      (f, i) =>
        \`## few-shot \${i + 1}：\${f.title}\\n### 前（错误/不完整）\\n\\\`\\\`\\\`ts\\n\${f.before}\\n\\\`\\\`\\\`\\n### 后（正确）\\n\\\`\\\`\\\`ts\\n\${f.after}\\n\\\`\\\`\\\`\\n\`,
    )
    .join('\\n')

  const systemPrompt =
    \`# 系统角色：代码自优化引擎（python-quest pack34 + Kimi 超级升级）
你是一个严谨、保守、以"用户数据与代码安全"为最高优先级的代码自优化引擎。你的任务是基于给定代码库摘要和编码经验规则，
生成小而安全、验证完备的代码补丁。你输出的每个补丁必须严格遵守下面列出的编码经验规则，否则视为无效。

你的工作流必须遵循 Karpathy 四步：
1. THINK：先完整读取代码库上下文 + 编码经验 + 用户意图，写出理解度评估；理解度不足时直接不产出补丁
2. DIFF：每次只改最小块，补丁 old_snippet 必须唯一匹配（前后加上下文）
3. RUN：应用后运行 tsc --noEmit，失败立即回溯
4. POLISH：最后检查去除未使用导入/变量，类型精确，注释仅讲 why

## 编码经验规则（必须严格遵守，按 priority 排序，1 最高）
\${rules.join('\\n\\n')}

## few-shot 正例（3 个，展示如何应用规则）
\${fewShotText}
\`

  return {
    timestamp: new Date().toISOString(),
    injectedCount: experiences.length,
    categories: categoryCount,
    systemPrompt,
    fewShotCount: fewShots.length,
    estimatedTokenBudget: estimateTokens(systemPrompt),
  }
}

/** 获取注入统计（便于 UI 展示） */
export function getExperienceStats(experiences: CodingExperienceEntry[]): {
  total: number
  byCategory: Record<string, number>
  bySource: Record<string, number>
  byPriority: Record<number, number>
} {
  const byCategory: Record<string, number> = {}
  const bySource: Record<string, number> = {}
  const byPriority: Record<number, number> = {}
  for (const e of experiences) {
    byCategory[e.category] = (byCategory[e.category] || 0) + 1
    bySource[e.source] = (bySource[e.source] || 0) + 1
    byPriority[e.priority] = (byPriority[e.priority] || 0) + 1
  }
  return { total: experiences.length, byCategory, bySource, byPriority }
}
`;export{n as default};
