const e=`/**
 * AI Agent 类型定义
 *
 * 设计理念：
 *   - Agent 在浏览器端运行，通过"观察→分析→决策→执行→验证"循环迭代优化
 *   - 优化对象是运行时可调参数（缓存TTL、防抖阈值、重试次数等），不修改源码
 *   - 每次优化前创建版本号快照，回归时自动回溯
 *   - 首页（'/' 路由）核心内容受保护，永不修改
 */

/** 优化领域 */
export type OptDomain = 'performance' | 'ux' | 'content' | 'stability' | 'meta' | 'learning-outcome'

/** Agent 运行状态 */
export type AgentState = 'idle' | 'observing' | 'analyzing' | 'deciding' | 'acting' | 'verifying' | 'committed' | 'rolledback' | 'paused'

/** 迭代阶段 */
export type IterationPhase = 'observe' | 'analyze' | 'decide' | 'snapshot' | 'act' | 'verify' | 'commit' | 'rollback'

/** 观察指标（性能 + UX + 稳定性） */
export interface ObservedMetrics {
  // 性能指标（来自 Performance API）
  fcp: number                    // First Contentful Paint (ms)
  lcp: number                    // Largest Contentful Paint (ms)
  domLoad: number                // DOMContentLoaded (ms)
  loadComplete: number           // load 事件 (ms)
  memoryUsed: number             // 已用内存 (MB, chrome only)
  // 交互指标
  interactionCount: number      // 用户交互次数
  avgResponseTime: number        // 平均响应时间 (ms)
  errorCount: number             // 错误总数
  crashCount: number             // 崩溃总数
  // 稳定性指标
  uptimeMs: number               // 运行时长
  lastErrorAge: number           // 距上次错误的秒数
  retrySuccessRate: number       // 重试成功率 0-1
  // 内容指标
  levelsWithContent: number      // 有内容的关卡数
  emptyLessons: number           // 空课程数
  brokenImages: number           // 损坏图片数
  // 学习效果指标（pack28 超级进化：Pyodide 验证闭环）
  testPassRate: number           // 测试通过率 0-1
  commonErrorPatterns: number    // 常见错误模式数
  retryAfterHintRate: number     // 提示后重试率 0-1
}

/** 学习效果指标（pack28 超级进化：基于 Pyodide 真实代码执行结果） */
export interface LearningMetrics {
  totalTests: number             // 总测试数
  passedTests: number            // 通过数
  failedTests: number            // 失败数
  passRate: number               // 通过率 0-1
  errorPatterns: { pattern: string; count: number }[]  // 错误模式分布
  averageAttempts: number        // 平均尝试次数
  lastValidationTime: string     // 最后验证时间 ISO
  highFailureLevels: number[]    // 高失败率关卡 ID（失败率 >40%）
}

/** 健康度评分（每个领域 0-100） */
export interface HealthScores {
  performance: number            // 性能分
  ux: number                     // 用户体验分
  content: number               // 内容质量分
  stability: number             // 稳定性分
  overall: number                // 综合分（加权平均）
  learningOutcome?: number       // 学习效果分（pack28 新增，可选保持向后兼容）
}

/** 优化策略 */
export interface OptimizationStrategy {
  id: string
  domain: OptDomain
  name: string
  description: string
  // 预期收益（0-1）
  expectedGain: number
  // 风险等级（0=安全，1=高风险）
  risk: number
  // 是否首页安全（true 表示可在首页运行）
  homepageSafe: boolean
  // 条件过滤：当前参数是否还能应用此策略（避免到达边界的无效优化）
  // 可选：未提供时默认始终可应用（后续由 willChange 二次过滤）
  appliesTo?: (params: TunableParams) => boolean
  // 应用函数（返回应用后的参数变更）
  apply: (params: TunableParams) => TunableParams
}

/** 可调参数（运行时优化对象） */
export interface TunableParams {
  // 性能相关
  cacheTTL: number                // localStorage 缓存TTL (ms)
  memoryCacheSize: number         // 内存缓存最大条目
  debounceMs: number              // 默认防抖时间
  throttleMs: number              // 默认节流时间
  lazyLoadThreshold: number       // 懒加载触发距离 (px)
  // UX 相关
  toastDuration: number           // 提示显示时长 (ms)
  animationDuration: number       // 动画时长 (ms)
  loadingTimeout: number          // 加载超时阈值 (ms)
  autoSaveInterval: number        // 自动保存间隔 (ms)
  // 稳定性相关
  maxRetries: number              // 最大重试次数
  retryBaseDelay: number          // 重试基础延迟 (ms)
  snapshotInterval: number        // 自动快照间隔 (ms)
  errorThreshold: number          // 错误阈值（超过则降级）
  // 功能开关
  enablePrefetch: boolean         // 路由预取
  enableLazyPyodide: boolean      // 懒加载 Pyodide
  enableErrorRecovery: boolean    // 错误自动恢复
  // 内容质量相关（pack23 新增）
  enableEmptyLessonScan: boolean  // 启用空关卡扫描
  enableBrokenImageCheck: boolean // 启用损坏图片检测
  contentRefreshInterval: number  // 内容刷新间隔 (ms)
  // 元优化相关（pack23 新增 — Agent 自适应）
  agentLearningRate: number       // Agent 学习率（0-1，控制参数调整步长）
  strategyExplorationRate: number // 策略探索率（0-1，epsilon-greedy 的 epsilon）
}

/** 决策记录 */
export interface Decision {
  id: string
  timestamp: string
  phase: IterationPhase
  strategyId: string
  reason: string                  // 决策原因
  beforeParams?: Partial<TunableParams>
  afterParams?: Partial<TunableParams>
  applied: boolean                // 是否实际应用
}

/** 一次完整的迭代 */
export interface Iteration {
  id: string
  iterationNumber: number
  startTime: string
  endTime: string | null
  phase: IterationPhase
  metricsBefore: ObservedMetrics | null
  metricsAfter: ObservedMetrics | null
  scoresBefore: HealthScores | null
  scoresAfter: HealthScores | null
  decisions: Decision[]
  appliedStrategies: string[]
  result: 'pending' | 'committed' | 'rolledback' | 'skipped'
  gain: number                    // 综合分提升（负数为下降）
  versionStamp: string            // 版本号快照标识
}

/** Agent 快照（带版本号） */
export interface AgentSnapshot {
  id: string
  versionStamp: string            // e.g. "agent@v1.3-iter5-1234567890"
  appVersion: string              // 应用版本 e.g. "v1.3"
  iterationNumber: number
  timestamp: string
  params: TunableParams            // 快照时的可调参数
  scores: HealthScores
  data: Record<string, string>    // localStorage 数据快照
  label: string                    // 描述
  stable: boolean                  // 是否标记为稳定
}

/** Agent 配置 */
export interface AgentConfig {
  autoRun: boolean                 // 是否自动运行
  iterationInterval: number        // 迭代间隔 (ms)
  observationPeriod: number       // 观察期时长 (ms)
  verificationPeriod: number       // 验证期时长 (ms)
  rollbackThreshold: number        // 回溯阈值（综合分下降多少触发回溯）
  homepageProtected: boolean       // 首页保护
  maxIterations: number            // 最大迭代次数
  enabledDomains: OptDomain[]      // 启用的优化领域
}

/** Agent 状态摘要（供 UI 展示） */
export interface AgentSummary {
  state: AgentState
  currentIteration: number
  totalIterations: number
  lastResult: Iteration['result'] | null
  overallScore: number
  scoreTrend: number[]             // 最近N次评分
  appliedOptimizations: number
  rollbackCount: number
  uptimeMs: number
}

// ===== 全局调配（Global Orchestration）=====

/** 调配记录条目类型 */
export type OrchestrationEntryType =
  | 'experience-read'    // 读取经验包
  | 'agent-optimize'     // Agent 自身参数优化
  | 'llm-feature'        // LLM 驱动的功能新增
  | 'global-adapt'       // 全局适配（跨模块协调）
  | 'pack-write'         // 写入经验包
  | 'wiki-push'          // 推送到 Wiki（经验包/代码更改同步）

/** 单条调配记录 */
export interface OrchestrationEntry {
  id: string
  timestamp: string
  type: OrchestrationEntryType
  summary: string                    // 一句话摘要
  detail?: string                    // 详细说明
  modules?: string[]                 // 涉及的模块 ID
  scoreImpact?: number               // 对综合分的影响
}

/** 全局调配状态 */
export interface GlobalOrchestrationState {
  active: boolean                    // 是否正在调配
  lastRun: string | null             // 上次调配时间 ISO
  entries: OrchestrationEntry[]      // 调配记录（最新在前）
  packReadEnabled: boolean           // 是否在每次开发前强制读取经验包
  autoWritePack: boolean             // 是否每次优化后自动写入经验包
  totalAdaptations: number           // 累计适配次数
}

// ===== Wiki 同步（pack21 新增：Agent 监察后推到 Wiki）=====

/** Wiki 推送目标类型 */
export type WikiPushTarget = 'experience-pack' | 'code-changes' | 'monitor-report'

/** Wiki 推送状态 */
export interface WikiPushRecord {
  id: string                         // 记录 ID
  timestamp: string                  // 推送时间 ISO
  target: WikiPushTarget             // 推送目标
  summary: string                    // 一句话摘要
  detail?: string                    // 详细说明
  packBuild?: number                 // 推送时的 PACK_BUILD
  docVersion?: string                // 推送时的 DOC_VERSION
  contentHash?: string               // 内容哈希（去重用）
  status: 'pending' | 'success' | 'failed' | 'skipped'
  errorMessage?: string              // 失败原因
}

/** Wiki 同步状态 */
export interface WikiSyncState {
  lastPush: string | null            // 上次推送时间 ISO
  lastPackBuildPushed: number        // 上次已推送的 PACK_BUILD
  lastDocVersionPushed: string       // 上次已推送的 DOC_VERSION
  pushHistory: WikiPushRecord[]      // 推送历史（最新在前）
  autoPushEnabled: boolean           // 是否自动推送（监察后自动推）
  pendingChanges: string[]           // 待推送的更改摘要队列
  totalPushes: number                // 累计推送次数
  totalFailures: number              // 累计失败次数
}

// ===== LLM 集成（pack30：Agent 向 LLM 方向进化）=====

/** LLM 配置（OpenAI 兼容接口） */
export interface LLMConfig {
  enabled: boolean                   // 是否启用 LLM 分析
  baseUrl: string                    // API base URL（如 https://api.openai.com/v1）
  apiKey: string                     // API Key（存 localStorage）
  model: string                      // 模型名（如 gpt-4o-mini / deepseek-chat）
  temperature: number                // 采样温度 0-2
  maxTokens: number                  // 最大输出 token 数
  timeout: number                    // 请求超时 ms
  maxRetries: number                 // 最大重试次数
}

/** LLM 输出的单条优化建议 */
export interface LLMSuggestion {
  id: string                         // 建议 ID（LLM 生成或哈希）
  target: string                     // 目标：参数名 / 文件 / 模块
  problem: string                    // 问题描述
  fix: string                        // 修复方案
  priority: 'high' | 'medium' | 'low'
  risk: number                       // 风险等级 0-1
  paramChanges?: Partial<TunableParams>  // 参数变更（可选，适用于参数级建议）
  codePatch?: string                 // 代码补丁（可选，适用于代码级建议）
  rationale?: string                 // LLM 给出的理由
}

/** LLM 分析结果 */
export interface LLMAnalysisResult {
  timestamp: string                  // 分析时间 ISO
  reasoning: string                  // LLM 整体推理过程
  confidence: number                 // 置信度 0-1
  suggestions: LLMSuggestion[]       // 建议列表
  model: string                      // 使用的模型
  tokenUsage?: { prompt: number; completion: number; total: number }
  error?: string                     // 失败原因（成功时为 undefined）
}

/** 已采纳的建议记录 */
export interface AdoptedSuggestion {
  suggestionId: string
  timestamp: string
  target: string
  applied: boolean                   // 是否成功应用
  paramChanges?: Partial<TunableParams>
}

// ===== Skill 训练（pack31：结合 Skill 进行 LLM 训练）=====

/** Skill 训练配置 */
export interface SkillTrainingConfig {
  enabled: boolean                   // 是否启用 skill 训练
  activeSkillIds: string[]           // 参与训练的 skill ID（空数组=所有已启用 skill）
  strictMode: boolean                // 严格模式：违规建议自动拦截，不采纳
}

/** Skill 合规检测结果 */
export interface SkillCompliance {
  ruleId: string                     // 规则 ID
  skillId: string                    // 所属 skill ID
  skillName: string                  // 所属 skill 名称
  ruleTitle: string                  // 规则标题
  status: 'pass' | 'warn' | 'violation'  // pass=合规 warn=警告 violation=违规
  reason: string                     // 原因说明
  suggestionId: string               // 关联的建议 ID
}

// ===== 超级进化（pack33+：Agent 作为资源调配中心 + 本地 LLM 内核）=====

/** 资源类型（调配总线统一调度） */
export type ResourceType =
  | 'plugin'        // 插件功能
  | 'skill'         // Skill 规则
  | 'level'         // 关卡
  | 'monitor'       // 监查
  | 'experience'    // 经验包
  | 'wiki'          // Wiki 同步
  | 'llm'           // LLM 内核
  | 'pyodide'       // Python 执行环境

/** 资源调配请求 */
export interface ResourceCall {
  id: string
  resource: ResourceType
  action: string                    // 动作名（如 'invoke-plugin'、'run-level-test'）
  args?: Record<string, unknown>    // 调用参数
  timestamp: string
  result?: 'success' | 'failed' | 'skipped'
  detail?: string
}

/** 资源调配总线状态 */
export interface ResourceBusState {
  totalCalls: number
  successCalls: number
  failedCalls: number
  recentCalls: ResourceCall[]       // 最近 N 次调用
  availableResources: ResourceType[]
}

/** 元逻辑规则（编码经验库） */
export interface MetaLogicRule {
  id: string
  category: 'workflow' | 'param-tuning' | 'ui-preference' | 'safety' | 'comprehension' | 'self-coding'
  title: string
  description: string
  // 触发条件：返回 true 时执行 apply
  condition: (ctx: MetaLogicContext) => boolean
  // 应用动作：返回参数变更 + 日志
  apply: (ctx: MetaLogicContext) => MetaLogicAction
  priority: number                  // 优先级（高优先）
}

/** 元逻辑上下文（每轮迭代传入） */
export interface MetaLogicContext {
  params: TunableParams
  scores: HealthScores
  metrics: ObservedMetrics
  iteration: number
  history: Iteration[]
  // 资源调配能力
  dispatch: (resource: ResourceType, action: string, args?: Record<string, unknown>) => Promise<unknown>
  // 理解度
  comprehension: ComprehensionState
}

/** 元逻辑执行动作 */
export interface MetaLogicAction {
  paramChanges?: Partial<TunableParams>
  resourceCalls?: { resource: ResourceType; action: string; args?: Record<string, unknown> }[]
  log: string
  confidence: number                // 0-1
}

/** 元逻辑执行结果 */
export interface MetaLogicResult {
  appliedRules: string[]
  paramChanges: Partial<TunableParams>
  logs: string[]
  resourceCalls: ResourceCall[]
  confidence: number
}

/** 需求理解度状态 */
export interface ComprehensionState {
  level: number                     // 0-100，理解度评分
  factors: {
    intentClarity: number           // 意图清晰度
    contextRichness: number         // 上下文丰富度
    historyAlignment: number        // 与历史决策一致性
    resourceUtilization: number     // 资源利用率
  }
  lastUpdate: string
}

/** 自编码方案（根据理解度生成的参数调整代码） */
export interface SelfCodePlan {
  id: string
  timestamp: string
  comprehensionLevel: number
  intent: string                    // 推断的意图
  paramChanges: Partial<TunableParams>
  reasoning: string                 // 推理过程
  confidence: number
  source: 'local-llm' | 'meta-logic' | 'q-table' | 'hybrid'
}

/** 本地 LLM 内核推理结果（离线，无需外部 API） */
export interface LocalLLMOutput {
  timestamp: string
  intent: string                    // 推断意图
  reasoning: string                 // 推理链
  suggestions: LLMSuggestion[]      // 建议（复用 LLM 建议结构）
  comprehension: ComprehensionState
  confidence: number
  source: 'ngram' | 'pattern' | 'experience-retrieval' | 'heuristic'
}

/** 超级进化统计 */
export interface SuperEvolutionStats {
  metaLogicRuns: number             // 元逻辑执行次数
  localLLMRuns: number              // 本地 LLM 推理次数
  selfCodePlans: number             // 自编码方案数
  resourceDispatches: number        // 资源调配次数
  avgComprehension: number          // 平均理解度
  lastComprehension: number         // 最近一次理解度
  evolutionLevel: number            // 进化等级（0-100，综合指标）
}

// ===== pack34 代码级自优化 + Kimi 超级升级 + 编码经验注入 =====

/** LLM 提供商（支持 Kimi 升级） */
export type LLMProvider = 'openai-compatible' | 'kimi' | 'deepseek' | 'custom'

/** 代码文件条目 */
export interface CodeFileEntry {
  path: string
  content: string
  language: 'typescript' | 'tsx' | 'javascript' | 'jsx' | 'css' | 'json' | 'markdown' | 'html' | 'other'
  sizeBytes: number
  lineCount: number
  lastModified?: string
  /** 内容哈希，用于变更检测 */
  hash: string
  /** 关键词标签（自动提取） */
  tags: string[]
  /** 关键词数组（与 tags 同义，UI 侧更直观） */
  keywords: string[]
}

/** 代码库索引 */
export interface CodebaseIndex {
  indexedAt: string
  totalFiles: number
  totalLines: number
  totalSizeBytes: number
  files: CodeFileEntry[]
  /** 关键词倒排：关键词 → 文件路径数组 */
  keywordIndex: Record<string, string[]>
  /** 文件路径 → 摘要 */
  fileSummaries: Record<string, string>
  /** 摘要总行数（UI 展示用） */
  summaryLines: number
  /** 关键词总数（UI 展示用） */
  totalKeywords: number
}

/** 编码经验条目（注入 LLM 训练） */
export interface CodingExperienceEntry {
  id: string
  category: 'workflow' | 'pattern' | 'anti-pattern' | 'debugging' | 'optimization' | 'security' | 'ui-preference' | 'architecture' | 'comprehension' | 'user-defined'
  title: string
  description: string
  /** 触发条件（自然语言） */
  trigger: string
  /** 推荐做法（代码级） */
  practice: string
  /** 反例（不要这么做） */
  antiExample?: string
  /** 正例（推荐这么做） */
  positiveExample?: string
  priority: 1 | 2 | 3  // 1=最高
  /** 来源：karpathy-workflow / user-preference / project-history / skill / default */
  source: 'karpathy' | 'user' | 'history' | 'skill' | 'default'
  timestamp: string
}

/** LLM 编码经验注入结果 */
export interface ExperienceInjectionResult {
  timestamp: string
  injectedCount: number
  categories: Record<string, number>
  systemPrompt: string
  fewShotCount: number
  estimatedTokenBudget: number
}

/** 单一文件的代码补丁（diff 风格） */
export interface CodePatch {
  id: string
  filePath: string
  /** 旧代码片段（唯一匹配） */
  oldSnippet: string
  /** 新代码片段 */
  newSnippet: string
  /** 变更理由 */
  reason: string
  /** 风险等级 0-1 */
  risk: number
  /** 影响领域 */
  domain: string
  /** 预期收益描述 */
  expectedGain: string
  /** LLM 生成的理由说明 */
  rationale?: string
}

/** 代码自优化计划（包含多个补丁 + 验证步骤） */
export interface CodeSelfOptimizePlan {
  id: string
  timestamp: string
  title: string
  description: string
  /** 生成补丁的 LLM 来源 */
  llmSource: LLMProvider
  /** 补丁列表 */
  patches: CodePatch[]
  /** 需要运行的验证命令 */
  validationCommands: string[]
  /** 编码经验注入数量 */
  experienceUsed: number
  /** 风险评估 */
  riskAssessment: 'low' | 'medium' | 'high'
  /** 置信度 0-1 */
  confidence: number
  /** 推断意图 */
  intent: string
}

/** 补丁执行结果 */
export interface PatchExecutionResult {
  patchId: string
  filePath: string
  status: 'pending' | 'applied' | 'match-failed' | 'validation-failed' | 'rolledback'
  errorMessage?: string
  /** 备份快照 ID（应用前） */
  backupId?: string
  appliedAt?: string
  rolledbackAt?: string
}

/** 代码自优化执行记录 */
export interface CodeSelfOptimizeRun {
  id: string
  timestamp: string
  plan: CodeSelfOptimizePlan
  patchResults: PatchExecutionResult[]
  overallStatus: 'pending' | 'running' | 'success' | 'partial' | 'failed' | 'rolledback'
  validationOutput?: string
  validationExitCode?: number
  /** 备份快照（应用前整库） */
  backupSnapshotId?: string
  durationMs?: number
  summary: string
  /** 基本语法检查结果（dry-run 内存模拟） */
  syntaxOk: boolean
  /** 语法错误信息（若有） */
  syntaxErrors?: string[]
}

/** 代码自优化统计 */
export interface CodeSelfOptimizeStats {
  totalRuns: number
  successfulRuns: number
  failedRuns: number
  rolledBackRuns: number
  totalPatches: number
  appliedPatches: number
  rollbackPatches: number
  filesModified: string[]
  lastRunId?: string
  lastStatus?: string
  /** 应用补丁后编译通过的累计次数 */
  compilePassCount: number
}

/** Kimi API 能力特征（Kimi 升级：长上下文 + 深度代码理解） */
export interface KimiCapabilities {
  maxContextTokens: number           // Kimi: 128k/2M
  supportsCodePatch: boolean
  supportsFileTree: boolean
  supportsFewShot: boolean
  recommendedTemperature: number
  recommendedTopP: number
}

/** 代码自优化配置 */
export interface CodeSelfOptimizeConfig {
  enabled: boolean
  /** 每次最大补丁数（避免一次改太多） */
  maxPatchesPerRun: number
  /** 自动应用补丁（false 则仅生成需手动确认） */
  autoApply: boolean
  /** 应用前强制备份 */
  forceBackup: boolean
  /** 应用后自动运行 tsc 验证 */
  autoValidate: boolean
  /** 验证失败自动回溯 */
  autoRollback: boolean
  /** 允许修改的文件白名单（空=全部允许） */
  allowedFilePatterns: string[]
  /** 禁止修改的文件黑名单（正则） */
  forbiddenPatterns: string[]
  /** 最高允许风险 */
  maxAllowedRisk: number
  /** 使用的 LLM 提供商 */
  preferredProvider: LLMProvider
}

/** 默认代码自优化配置 */
export const DEFAULT_CODE_SELF_OPTIMIZE: CodeSelfOptimizeConfig = {
  enabled: false,
  maxPatchesPerRun: 3,
  autoApply: false,
  forceBackup: true,
  autoValidate: true,
  autoRollback: true,
  allowedFilePatterns: ['**/*.ts', '**/*.tsx', '**/*.css'],
  forbiddenPatterns: [
    'node_modules/',
    'dist/',
    '.git/',
    // 首页受保护
    'src/pages/Home/',
    // 包配置不自动改
    'package.json',
    'tsconfig.json',
  ],
  maxAllowedRisk: 0.5,
  preferredProvider: 'kimi',
}

/** Kimi 官方能力特征（开源/文档公开的能力） */
export const DEFAULT_KIMI_CAPABILITIES: KimiCapabilities = {
  maxContextTokens: 128000,
  supportsCodePatch: true,
  supportsFileTree: true,
  supportsFewShot: true,
  recommendedTemperature: 0.2,  // 代码改动偏保守
  recommendedTopP: 0.9,
}


`;export{e as default};
