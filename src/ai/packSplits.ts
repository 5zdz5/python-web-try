/**
 * 经验包拆分逻辑（Pack Splits）
 *
 * 设计理念：
 *   主经验包 experiencePack.ts 137KB+，一次性全量读取对 LLM token 压力大。
 *   拆分方案：按 6 大领域提供 6 个子包导出函数，每个子包只含对应领域内容，
 *   单独生成的 JSON 更小、更聚焦、读取更快。
 *
 *   不破坏原有 API：generateExperiencePack() 接口完全不变，
 *   新增 6 个 generateXxxPack() 并行提供拆分能力。
 *   新老模型均可使用，不产生逻辑断裂。
 *
 * 子包一览：
 *   generateConventionsPack()   → 编码约定（约30KB），下一个 AI 接手先读约定
 *   generatePatternsPack()      → 设计模式（约25KB），需要改UI/架构时读
 *   generateLessonsPack()       → 历史教训（约20KB），踩坑前先读
 *   generateConversationsPack() → 对话历史（约20KB），理解用户意图脉络
 *   generateUserLogicPack()     → 用户思维模式归纳（5-10KB），**最重要**：
 *                                   从经验包 meta-workflow 自动提取用户核心思维
 *                                   框架，可跨界迁移到任何项目
 *   generateQuickstartPack()    → 快速上手（约10KB）：30秒快速启动 + prompt模板
 */

import type {
  ExperiencePack, CodingConvention, DesignPattern,
  LessonLearned, ConversationLogEntry,
} from '../types/experiencePack'
import {
  PACK_SCHEMA_VERSION, PACK_BUILD,
  SPLIT_EXPORT_CONVENTIONS, SPLIT_EXPORT_PATTERNS, SPLIT_EXPORT_LESSONS,
  SPLIT_EXPORT_CONVERSATIONS, SPLIT_EXPORT_QUICKSTART,
  SPLIT_EXPORT_PRECOMMIT, SPLIT_EXPORT_PROMPTS,
  SPLIT_EXPORT_MODULES, SPLIT_EXPORT_COMPONENTS,
  SPLIT_EXPORT_ROADMAP, SPLIT_EXPORT_BUILD,
} from './experiencePack'
import { CURRENT_VERSION, CURRENT_VERSION_LABEL, CURRENT_VERSION_DESC } from '../config/versionManager'

// ============== 子包通用头信息 ==============
function buildMeta(splitName: string, splitDescription: string, totalItems: number, estimatedKb: number) {
  return {
    schemaVersion: PACK_SCHEMA_VERSION,
    packVersion: `${CURRENT_VERSION}-pack${PACK_BUILD}-${splitName}`,
    splitName,
    splitDescription,
    totalItems,
    estimatedKb,
    generatedAt: new Date().toISOString(),
    generatedBy: 'pack-splits-subagent',
    appVersion: CURRENT_VERSION,
    appVersionLabel: CURRENT_VERSION_LABEL,
    appVersionDesc: CURRENT_VERSION_DESC,
    parentPack: `${CURRENT_VERSION}-pack${PACK_BUILD}`,
    generatedByParent: 'experiencePack.ts → packSplits.ts',
  }
}

// ============== 从主包导入的原始数据（静态引用，避免 require，不重复维护） ==============
// 说明：所有常量从 experiencePack.ts 的 SPLIT_EXPORT_* 导出静态 import
// 新增约定/模式/对话时更新主包即可，子包自动同步
const MODULES = SPLIT_EXPORT_MODULES
const COMPONENTS = SPLIT_EXPORT_COMPONENTS
const ROADMAP = SPLIT_EXPORT_ROADMAP
const BUILD = SPLIT_EXPORT_BUILD
const QUICKSTART_LLM = SPLIT_EXPORT_QUICKSTART
const PRECOMMIT_CHECKLIST = SPLIT_EXPORT_PRECOMMIT
const PROMPT_TEMPLATES = SPLIT_EXPORT_PROMPTS

// ============== 1. 编码约定子包 ==============
export function generateConventionsPack() {
  const CONVENTIONS = SPLIT_EXPORT_CONVENTIONS
  const meta = buildMeta('conventions', '编码约定 - 所有硬约束，读了就知道什么不能碰', CONVENTIONS.length, 30)
  // 按 category 自动归类统计 + 举例每个分类top3
  const byCategory = CONVENTIONS.reduce<Record<string, CodingConvention[]>>((acc, c) => {
    const k = c.category || 'uncategorized'
    if (!acc[k]) acc[k] = []
    acc[k].push(c)
    return acc
  }, {})
  return {
    meta,
    categoryStats: Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => [k, v.length])
    ),
    conventions: CONVENTIONS,
    // 举例：每个分类给 1 条最核心约定（方便 LLM 快速扫一眼）
    examplesPerCategory: Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => [k, v.slice(0, 1).map(c => ({ rule: c.rule, description: c.description.slice(0, 120) + '...' }))])
    ),
    // 读取顺序建议：先 meta-workflow 再其他
    recommendedReadOrder: ['meta-workflow', 'karpathy', 'darwin-ratchet', 'autoresearch', 'naming', 'structure', 'anti-slop', 'typography', 'color'],
  }
}

// ============== 2. 设计模式子包 ==============
export function generatePatternsPack() {
  const PATTERNS = SPLIT_EXPORT_PATTERNS
  const meta = buildMeta('patterns', '设计模式 - 改UI/架构时参考，避免重复造轮子', PATTERNS.length, 25)
  const byCategory = PATTERNS.reduce<Record<string, DesignPattern[]>>((acc, p) => {
    const k = p.category || 'uncategorized'
    if (!acc[k]) acc[k] = []
    acc[k].push(p)
    return acc
  }, {})
  return {
    meta,
    categoryStats: Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => [k, v.length])
    ),
    patterns: PATTERNS,
    // 举例子：每个分类给 1 个最简单的 template
    examplesPerCategory: Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => {
        const top = v[0]
        return [k, { name: top.name, filePattern: top.filePattern, templatePreview: (top.template || '').slice(0, 120) + '...' }]
      })
    ),
  }
}

// ============== 3. 历史教训子包 ==============
export function generateLessonsPack() {
  const LESSONS = SPLIT_EXPORT_LESSONS
  const meta = buildMeta('lessons', '历史教训 - 踩坑前先扫，避免重蹈覆辙', LESSONS.length, 20)
  const byCategory = LESSONS.reduce<Record<string, LessonLearned[]>>((acc, l) => {
    const k = (l as unknown as { category?: string }).category || 'misc'
    if (!acc[k]) acc[k] = []
    acc[k].push(l)
    return acc
  }, {})
  return {
    meta,
    categoryStats: Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => [k, v.length])
    ),
    lessons: LESSONS,
    // 快速浏览：每条教训只给 1 句 "问题 → 解决"
    quickScan: LESSONS.map(l => ({
      id: (l as unknown as { id: string }).id,
      category: (l as unknown as { category: string }).category,
      title: (l as unknown as { title: string }).title,
      quick: `${(l as unknown as { problem: string }).problem.slice(0, 40)}... → ${(l as unknown as { solution: string }).solution.slice(0, 40)}...`,
    })),
  }
}

// ============== 4. 对话历史子包 ==============
export function generateConversationsPack() {
  const CONVERSATION_LOG = SPLIT_EXPORT_CONVERSATIONS
  const meta = buildMeta('conversations', '对话历史归档 - 理解用户意图和项目演变脉络', CONVERSATION_LOG.length, 20)
  return {
    meta,
    conversations: CONVERSATION_LOG,
    // 脉络视图：每条对话仅显示 1 句 summary + patternsAdded 数量
    timelineView: CONVERSATION_LOG.map(c => ({
      id: c.id,
      date: c.date,
      summary: c.summary.slice(0, 100) + (c.summary.length > 100 ? '...' : ''),
      filesCount: Array.isArray(c.filesModified) ? c.filesModified.length : 0,
      patternsCount: Array.isArray(c.patternsAdded) ? c.patternsAdded.length : 0,
    })),
    // 模式统计：哪些 patterns 被提及最多
    topPatterns: (() => {
      const counts: Record<string, number> = {}
      CONVERSATION_LOG.forEach(c => {
        (c.patternsAdded || []).forEach(p => { counts[p] = (counts[p] || 0) + 1 })
      })
      return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([name, count]) => ({ name, count }))
    })(),
  }
}

// ============== 5. 用户思维模式归纳子包（核心！可跨界迁移） ==============
export interface UserLogicInsight {
  id: string
  name: string
  description: string
  /** 从经验包哪条约定/模式/对话中提取 */
  sourceRefs: string[]
  /** 跨界迁移举例（如何应用到其他项目） */
  crossDomainExample: string
  /** 实践步骤（1-2-3-4） */
  actionableSteps: string[]
}

export interface UserLogicPack {
  meta: ReturnType<typeof buildMeta>
  /** 核心思维框架：5 步闭环 */
  coreFramework: {
    name: string
    steps: { step: number; name: string; description: string; example: string }[]
  }
  /** 具体洞察：每条可跨界复用 */
  insights: UserLogicInsight[]
  /** 关键词云：用户反复强调的词汇 */
  keywordCloud: { word: string; weight: number }[]
  /** 硬约束列表：用户说"必须/禁止"的事 */
  hardConstraints: { text: string; source: string }[]
}

export function generateUserLogicPack(): UserLogicPack {
  const CONVENTIONS = SPLIT_EXPORT_CONVENTIONS
  const CONVERSATION_LOG = SPLIT_EXPORT_CONVERSATIONS

  // 从 meta-workflow 分类提取核心洞察
  const metaConventions = CONVENTIONS.filter(c => c.category === 'meta-workflow')

  const insights: UserLogicInsight[] = [
    {
      id: 'logic-dynamic-dispatch',
      name: '动态调配原则',
      description: '任何可变数据（统计数字、列表、按钮）绝不硬编码在 UI 中，必须从数据源/注册表动态计算或读取。新增数据 = 追加 1 条记录，不改 UI 代码。',
      sourceRefs: metaConventions.map(c => c.rule).filter(r => r.includes('动态')),
      crossDomainExample: '做电商网站 → 商品列表从 DB 读+分类注册表，"新增商品分类"只需插一条 DB 记录，页面分类Tab自动+1，不需要改前端代码。',
      actionableSteps: [
        '① 识别可变数据（列表、统计、菜单项）',
        '② 创建集中注册表（数组/对象/DB表）',
        '③ UI 层遍历注册表动态渲染',
        '④ 验证：新增1条 → UI自动更新无代码改动',
      ],
    },
    {
      id: 'logic-auto-classify',
      name: '自动归类机制',
      description: '数据自带 category 字段，系统根据 category 自动归入正确分组，不需人工指定。注册表 + 分类字段 = 零人工归类。',
      sourceRefs: ['Skill 按 category 自动归类（getSkillsByCategory）', 'Convention 按 category 分分类统计'],
      crossDomainExample: '做博客系统 → 文章自带 tags/category 字段，分类页/标签云自动计算，不需要运营手动把文章拖到对应栏目。',
      actionableSteps: [
        '① 在数据 schema 定义 category/tag 字段（联合类型）',
        '② 写入数据时必填 category',
        '③ 读数据时按 category 分组统计（reduce+Object.fromEntries）',
        '④ UI 按分组动态渲染',
      ],
    },
    {
      id: 'logic-example-verify',
      name: '举例子验证法',
      description: '抽象规则写出来后，必须用 1 个具体正例 + 1 个反例验证规则的有效性。没有例子的规则 = 不可执行的空话。',
      sourceRefs: ['每条 CodingConvention 有 goodExample + badExample'],
      crossDomainExample: '设计"用户注册要填完整信息"规则 → 正例：填完邮箱验证码点提交成功；反例：邮箱格式错时明确提示"格式不正确"而不是 500 报错。',
      actionableSteps: [
        '① 定义抽象规则',
        '② 写 1 个 goodExample（正常流程）',
        '③ 写 1 个 badExample（异常分支）',
        '④ 看反例是否真的违反规则，正例是否真的符合',
      ],
    },
    {
      id: 'logic-cross-domain-transfer',
      name: '跨界迁移思维',
      description: '每提炼一个模式，立即思考"这个在其他项目/领域怎么用"。模式不是绑定本项目的，而是可迁移的通用方法论。',
      sourceRefs: ['用户原话："将我的思维模式作为可跨界迁移的经验"'],
      crossDomainExample: '项目A（python-quest）提炼的"动态调配原则" → 迁移到项目B（电商）：商品分类Tab动态渲染；迁移到项目C（OA）：审批流程节点从注册表动态渲染。',
      actionableSteps: [
        '① 从当前项目提炼 1 条可复用模式',
        '② 去掉项目特定术语，抽象到"模式+意图"层',
        '③ 映射到 2-3 个完全不同的项目领域',
        '④ 写每个领域的具体落地方式',
      ],
    },
    {
      id: 'logic-auto-summarize',
      name: '自动总结写入闭环',
      description: '每次对话/工作流结束后，AI 必须主动提炼可复用的经验写入经验包/知识库。不总结 = 白干 = 下次从零开始。',
      sourceRefs: metaConventions.map(c => c.rule).filter(r => r.includes('自动总结')),
      crossDomainExample: '做算法迭代 → 每次实验结束自动写 experiment log：参数+结果+发现+下次建议，下次实验直接读 log 避免重复踩坑。',
      actionableSteps: [
        '① 本轮完成了什么（filesModified）',
        '② 发现了什么新模式/教训（patternsAdded/lessons）',
        '③ 哪些内容可迁移到下次（写进经验包）',
        '④ PACK_BUILD/DOC_VERSION 同步递增',
      ],
    },
    {
      id: 'logic-split-not-break',
      name: '拆分不破坏原则',
      description: '大文件/大模块拆分时，保持旧接口 100% 兼容，新拆分只提供额外的导出函数/新入口，绝不修改旧调用方。',
      sourceRefs: ['packSplits.ts 设计原则：generateExperiencePack() 不变，新增 generateXxxPack()'],
      crossDomainExample: '后端 monolith 拆微服务 → 旧 API 路由完全不动（转发到新服务），新功能走新 API，用户零感知迁移。',
      actionableSteps: [
        '① 先列出旧接口清单（所有导出函数/组件）',
        '② 新拆分绝不修改这些接口的签名',
        '③ 新增接口以不同名称提供（generateConventionsPack vs generateExperiencePack）',
        '④ 运行旧调用方 100% 通过验证',
      ],
    },
    {
      id: 'logic-seven-step-closure',
      name: '对话七步闭环',
      description: '每轮对话必须走：回顾历史→逐条适配→应用Skill→局部监测→对接Agent→省察遗漏→与Web无缝衔接。七步全跑 = 对话真正完成。',
      sourceRefs: CONVENTIONS.filter(c => c.rule.includes('对话七步闭环')).map(c => c.rule),
      crossDomainExample: '做产品迭代会议 → ①回顾上次会议决策 ②适配本次需求 ③套用研发流程 ④检查本次改动影响面 ⑤对接CI/CD ⑥检查有没有漏 ⑦上线后看用户反馈。',
      actionableSteps: [
        '① 回顾历史（CONVERSATION_LOG / 会议纪要）',
        '② 适配本轮诉求（和上次的关联/修正/新增）',
        '③ 应用工作流/方法论（Skill/SOP）',
        '④ 监测改动影响（局部范围/影响模块）',
        '⑤ 对接下游系统（Agent/CI/运维）',
        '⑥ 遗漏扫描（checklist 全勾）',
        '⑦ 无缝衔接（入口/导航/数据一致）',
      ],
    },
    {
      id: 'logic-ratchet-only-forward',
      name: '棘轮原则：只向前不后退',
      description: '质量/分数/体验指标只能升不能降。每次改代码后跑独立验证，退步立即 revert，向前的改进通过 commit 固化。',
      sourceRefs: CONVENTIONS.filter(c => c.category === 'darwin-ratchet').map(c => c.rule),
      crossDomainExample: '做推荐算法优化 → 每次新模型离线评估 AUC 必须高于线上当前模型，低了立即抛弃不灰度；高了再灰度验证。',
      actionableSteps: [
        '① 定义可量化评分指标（build 时间/首屏耗时/错误数）',
        '② 改动前记录 baseline 分数',
        '③ 改动后跑独立工具链评分',
        '④ 分数降 → git revert，分数升 → git commit 固化',
      ],
    },
  ]

  // 关键词云：从用户原话提取高频词（基于 conversation.summary + convention.rule 的词频）
  const allText = [
    ...CONVERSATION_LOG.map(c => c.summary),
    ...metaConventions.map(c => c.rule + ' ' + c.description),
  ].join(' ')
  const rawKeywords = [
    { word: '经验包', weight: 1 },
    { word: '动态调配', weight: 1 },
    { word: '自动归类', weight: 1 },
    { word: '举例子', weight: 1 },
    { word: '跨界迁移', weight: 1 },
    { word: '自动总结', weight: 1 },
    { word: '拆分不破坏', weight: 1 },
    { word: 'Skill', weight: 1 },
    { word: '七步闭环', weight: 1 },
    { word: '棘轮原则', weight: 1 },
    { word: '硬编码', weight: 1 },
    { word: '注册表', weight: 1 },
    { word: 'Web 无缝衔接', weight: 1 },
    { word: '用户思维', weight: 1 },
    { word: '双螺旋迭代', weight: 1 },
  ]
  const keywordCloud = rawKeywords.map(kw => ({
    ...kw,
    weight: kw.weight + (allText.match(new RegExp(kw.word, 'g')) || []).length * 2,
  })).sort((a, b) => b.weight - a.weight)

  // 硬约束列表：提取所有包含"必须/禁止/绝不"的语句
  const hardConstraints: { text: string; source: string }[] = []
  CONVENTIONS.forEach(c => {
    ;[c.rule, c.description].forEach(txt => {
      if (txt.includes('必须') || txt.includes('禁止') || txt.includes('绝不')) {
        const firstSentence = txt.split(/[。；]/).find(s => s.includes('必须') || s.includes('禁止') || s.includes('绝不')) || ''
        if (firstSentence) {
          hardConstraints.push({ text: firstSentence, source: `convention/${c.category}` })
        }
      }
    })
  })

  return {
    meta: buildMeta('user-logic', '用户思维模式归纳 - 5步闭环 + 8个洞察，可跨界迁移到任何项目', insights.length, 10),
    coreFramework: {
      name: '动态调配→自动归类→举例子验证→跨界迁移→自动总结写入 五步自我进化闭环',
      steps: [
        { step: 1, name: '动态调配', description: '识别可变数据，创建注册表，UI动态渲染', example: 'skill列表=installedSkills.ts数组，主页按钮遍历渲染' },
        { step: 2, name: '自动归类', description: '数据自带category字段，系统自动分组统计', example: 'getSkillsByCategory(coding-workflow)自动返回正确分类' },
        { step: 3, name: '举例子验证', description: '正例+反例验证抽象规则的可执行性', example: '每条CodingConvention都有goodExample/badExample' },
        { step: 4, name: '跨界迁移', description: '去除项目特定术语，映射到其他领域落地', example: '"动态调配"迁移到电商=商品分类动态渲染Tab' },
        { step: 5, name: '自动总结写入', description: '本轮结束主动提炼经验写入经验包，PACK_BUILD+1', example: '对话结束 → CONVERSATION_LOG追加1条 + 如有新规则写入CONVENTIONS' },
      ],
    },
    insights,
    keywordCloud,
    hardConstraints,
  }
}

// ============== 6. 快速上手指包子包 ==============
export function generateQuickstartPack() {
  const meta = buildMeta('quickstart', '快速上手 + Prompt模板 - 30秒接管项目',
    QUICKSTART_LLM.length + PRECOMMIT_CHECKLIST.length + Object.keys(PROMPT_TEMPLATES).length, 10)
  return {
    meta,
    quickstart: QUICKSTART_LLM,
    precommitChecklist: PRECOMMIT_CHECKLIST,
    promptTemplates: PROMPT_TEMPLATES,
    modules: (MODULES as unknown[]).map((m: any) => ({ id: m.id, name: m.name, path: m.path })),
    components: (COMPONENTS as unknown[]).map((c: any) => ({ id: c.id, name: c.name })),
    roadmap: ROADMAP,
    buildConstraints: BUILD,
  }
}

// ============== 子包索引（主页显示用） ==============
export interface PackSplitInfo {
  id: string
  name: string
  icon: string
  description: string
  estimatedKb: number
  itemCount: number
  generateFn: () => unknown
}

export function getAllPackSplitsInfo(): PackSplitInfo[] {
  return [
    { id: 'conventions', name: '编码约定', icon: '📐', description: '所有硬约束+分类统计，读了就知道什么不能碰', estimatedKb: 30, itemCount: SPLIT_EXPORT_CONVENTIONS.length, generateFn: generateConventionsPack },
    { id: 'patterns', name: '设计模式', icon: '🎨', description: '改UI/架构参考，避免重复造轮子', estimatedKb: 25, itemCount: SPLIT_EXPORT_PATTERNS.length, generateFn: generatePatternsPack },
    { id: 'lessons', name: '历史教训', icon: '💡', description: '踩坑前先扫，避免重蹈覆辙', estimatedKb: 20, itemCount: SPLIT_EXPORT_LESSONS.length, generateFn: generateLessonsPack },
    { id: 'conversations', name: '对话归档', icon: '💬', description: '项目演变脉络+模式统计', estimatedKb: 20, itemCount: SPLIT_EXPORT_CONVERSATIONS.length, generateFn: generateConversationsPack },
    { id: 'user-logic', name: '思维模式归纳', icon: '🧠', description: '5步闭环+8洞察+关键词云，可跨界迁移', estimatedKb: 10, itemCount: generateUserLogicPack().insights.length, generateFn: generateUserLogicPack },
    { id: 'quickstart', name: '快速上手', icon: '⚡', description: '30秒接管项目+Prompt模板', estimatedKb: 10, itemCount: 3, generateFn: generateQuickstartPack },
  ]
}

// ============== 7. 经验包版块实时概览（展示说明面板数据源） ==============
// 每个版块的实时统计 + 更新规则说明，供 ExperiencePackOverview 面板动态读取
// 新增版块/规则时只需在此追加一条 section 记录，面板自动渲染

export interface PackSectionStatus {
  id: string
  name: string
  icon: string
  /** 当前条目数（从实际数据数组 .length 实时计算，不硬编码） */
  itemCount: number
  /** 分类统计（如 convention 的 category 分布） */
  categoryBreakdown: Record<string, number>
  /** 最近一次更新的 pack build 号 */
  lastUpdatedBuild: number
  /** 更新规则说明：该版块在什么情况下需要更新 */
  updateRule: string
  /** 版块说明 */
  description: string
  /** 对应的子包导出函数名 */
  splitFn: string
  /** 对应主包中的源常量名 */
  sourceConst: string
}

export function generatePackOverview(): {
  meta: ReturnType<typeof buildMeta>
  sections: PackSectionStatus[]
  totalItems: number
  updateRulesSummary: string
} {
  const CONVENTIONS = SPLIT_EXPORT_CONVENTIONS
  const PATTERNS = SPLIT_EXPORT_PATTERNS
  const LESSONS = SPLIT_EXPORT_LESSONS
  const CONVERSATIONS = SPLIT_EXPORT_CONVERSATIONS

  // 约定按 category 分组
  const convByCategory = CONVENTIONS.reduce<Record<string, number>>((acc, c) => {
    const k = c.category || 'uncategorized'
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  // 模式按 category 分组
  const patByCategory = PATTERNS.reduce<Record<string, number>>((acc, p) => {
    const k = p.category || 'uncategorized'
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  // 教训按 category 分组
  const lessByCategory = LESSONS.reduce<Record<string, number>>((acc, l) => {
    const k = (l as unknown as { category?: string }).category || 'misc'
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  // 对话按日期分组（最近5天）
  const convByDate: Record<string, number> = {}
  CONVERSATIONS.forEach(c => {
    convByDate[c.date] = (convByDate[c.date] || 0) + 1
  })

  // 从对话历史中提取每个版块最近更新的 pack build
  const lastConvBuild = CONVERSATIONS.length > 0
    ? parseInt(CONVERSATIONS[CONVERSATIONS.length - 1].id.replace('conv-', '').split('-').pop() || '0', 10)
    : 0

  const sections: PackSectionStatus[] = [
    {
      id: 'architecture',
      name: '架构总览',
      icon: '🏗️',
      itemCount: 1,
      categoryBreakdown: { overview: 1 },
      lastUpdatedBuild: 1,
      updateRule: '目录结构变化时（新增/删除/重命名目录）必须同步更新架构总览和 buildFileTree()',
      description: '项目整体架构、分层、文件树地图，给新 AI 的"导航地图"',
      splitFn: '—',
      sourceConst: 'ARCHITECTURE + buildFileTree()',
    },
    {
      id: 'modules',
      name: '功能模块',
      icon: '📦',
      itemCount: SPLIT_EXPORT_MODULES.length,
      categoryBreakdown: SPLIT_EXPORT_MODULES.reduce<Record<string, number>>((acc, m) => {
        const k = (m as unknown as { category?: string }).category || 'uncategorized'
        acc[k] = (acc[k] || 0) + 1
        return acc
      }, {}),
      lastUpdatedBuild: 15,
      updateRule: '新增页面/组件/Context 时必须追加一条 ModuleInfo；修改已有模块的路径/功能时同步更新描述',
      description: '所有功能模块的清单、路径、功能描述、最后修改时间',
      splitFn: '—',
      sourceConst: 'MODULES',
    },
    {
      id: 'conventions',
      name: '编码约定',
      icon: '📐',
      itemCount: CONVENTIONS.length,
      categoryBreakdown: convByCategory,
      lastUpdatedBuild: 15,
      updateRule: '① 新增规则/约束时追加 CodingConvention（必填 category/rule/description/goodExample/badExample/consequence）② 用户口头强调"必须/禁止"时必须写入 ③ PACK_BUILD+1',
      description: '所有硬约束、规则、禁止项——"什么不能碰"清单',
      splitFn: 'generateConventionsPack()',
      sourceConst: 'CONVENTIONS',
    },
    {
      id: 'patterns',
      name: '设计模式',
      icon: '🎨',
      itemCount: PATTERNS.length,
      categoryBreakdown: patByCategory,
      lastUpdatedBuild: 14,
      updateRule: '① 发现新的可复用设计模式时追加 DesignPattern（必填 name/category/filePattern/template）② 重构后模式失效时标记 deprecated ③ PACK_BUILD+1',
      description: '可复用的设计方案、代码模板、架构模式',
      splitFn: 'generatePatternsPack()',
      sourceConst: 'PATTERNS',
    },
    {
      id: 'lessons',
      name: '历史教训',
      icon: '💡',
      itemCount: LESSONS.length,
      categoryBreakdown: lessByCategory,
      lastUpdatedBuild: 7,
      updateRule: '① 踩坑/排错后必须追加 LessonLearned ② 同类错误重复出现时检查是否已有对应教训，有则引用 ③ PACK_BUILD+1',
      description: '历史踩坑记录和解决方案，"避免重蹈覆辙"清单',
      splitFn: 'generateLessonsPack()',
      sourceConst: 'LESSONS',
    },
    {
      id: 'components',
      name: '可复用组件',
      icon: '🧩',
      itemCount: SPLIT_EXPORT_COMPONENTS.length,
      categoryBreakdown: { reusable: SPLIT_EXPORT_COMPONENTS.length },
      lastUpdatedBuild: 7,
      updateRule: '① 新建可复用组件时追加 ReusableComponent ② 组件 API 变更时同步更新 ③ 组件废弃时标记 deprecated',
      description: '项目内可复用的 UI/逻辑组件清单',
      splitFn: '—',
      sourceConst: 'COMPONENTS',
    },
    {
      id: 'roadmap',
      name: '路线图',
      icon: '🗺️',
      itemCount: (SPLIT_EXPORT_ROADMAP as unknown[]).length,
      categoryBreakdown: { roadmap: 1 },
      lastUpdatedBuild: 1,
      updateRule: '① 完成/新增/调整功能规划时同步更新路线图 ② 已完成项标记 completed ③ 新增项标注优先级',
      description: '下一步扩展方向和功能规划',
      splitFn: '—',
      sourceConst: 'ROADMAP',
    },
    {
      id: 'build',
      name: '构建约束',
      icon: '🔧',
      itemCount: 1,
      categoryBreakdown: { constraints: 1 },
      lastUpdatedBuild: 1,
      updateRule: '① 构建配置变更时同步更新（Vite/TypeScript/部署方式）② 新增环境变量/外部依赖时追加',
      description: '构建和部署的技术约束',
      splitFn: '—',
      sourceConst: 'BUILD',
    },
    {
      id: 'quickstart',
      name: '快速上手',
      icon: '🚀',
      itemCount: SPLIT_EXPORT_QUICKSTART.length,
      categoryBreakdown: { guide: 1 },
      lastUpdatedBuild: 5,
      updateRule: '① 项目结构重大变更后重写快速上手指南 ② 新增重要 Skill 时追加对应说明段落',
      description: '给新模型的 30 秒快速上手指南',
      splitFn: 'generateQuickstartPack()',
      sourceConst: 'QUICKSTART_LLM',
    },
    {
      id: 'precommit',
      name: '提交前自检',
      icon: '✅',
      itemCount: SPLIT_EXPORT_PRECOMMIT.length,
      categoryBreakdown: { checklist: 1 },
      lastUpdatedBuild: 6,
      updateRule: '① 发现新的必检项时追加 ② 不再适用的条目标记 deprecated',
      description: '每次 commit 前必须逐项核对的清单',
      splitFn: '—',
      sourceConst: 'PRECOMMIT_CHECKLIST',
    },
    {
      id: 'prompts',
      name: 'Prompt模板',
      icon: '📝',
      itemCount: Object.keys(SPLIT_EXPORT_PROMPTS).length,
      categoryBreakdown: { templates: Object.keys(SPLIT_EXPORT_PROMPTS).length },
      lastUpdatedBuild: 6,
      updateRule: '① 新增工作流/Skill 时追加对应 Prompt 模板 ② 工作流步骤变更时同步更新模板 ③ 模板名=Skill名+Workflow',
      description: '各种工作流 Prompt 模板，新模型可直接套用',
      splitFn: '—',
      sourceConst: 'PROMPT_TEMPLATES',
    },
    {
      id: 'conversations',
      name: '对话归档',
      icon: '💬',
      itemCount: CONVERSATIONS.length,
      categoryBreakdown: convByDate,
      lastUpdatedBuild: lastConvBuild || 15,
      updateRule: '① 每次对话结束必须追加 1 条 ConversationLogEntry（id/summary/filesModified/patternsAdded/date 五字段必填）② 即使纯答疑也要写入 ③ PACK_BUILD+1',
      description: '每次 AI 与用户对话的归档记录，项目演变脉络',
      splitFn: 'generateConversationsPack()',
      sourceConst: 'CONVERSATION_LOG',
    },
  ]

  const totalItems = sections.reduce((s, sec) => s + sec.itemCount, 0)

  const updateRulesSummary = [
    '核心原则：任何版块内容变更 → PACK_BUILD+1 → DOC_VERSION 升级 → DOC_CHANGES 追加说明',
    '约定(conventions)：新增规则/用户强调必须禁止时追加，PACK_BUILD+1',
    '模式(patterns)：发现可复用设计时追加，失效时标记 deprecated，PACK_BUILD+1',
    '教训(lessons)：踩坑/排错后追加，同类错误复现时检查已有教训，PACK_BUILD+1',
    '对话(conversations)：每次对话结束必须追加 1 条，五字段必填，PACK_BUILD+1',
    '模块(modules)：新增页面/组件/Context 时追加，修改路径时同步更新',
    '快速上手(quickstart)：结构重大变更后重写，新增 Skill 时追加段落',
    'Prompt模板(prompts)：新增工作流/Skill 时追加，步骤变更时同步更新',
  ].join('\n')

  return {
    meta: buildMeta('overview', '经验包版块实时概览 - 12版块状态+更新规则', sections.length, 5),
    sections,
    totalItems,
    updateRulesSummary,
  }
}

// ============== 子包下载工具 ==============
export function downloadSplitPack(id: string): void {
  const info = getAllPackSplitsInfo().find(i => i.id === id)
  if (!info) return
  const data = info.generateFn()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `python-quest-${info.id}-pack-${CURRENT_VERSION}-pack${PACK_BUILD}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
