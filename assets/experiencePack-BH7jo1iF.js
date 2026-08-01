const e=`/**
 * 大模型经验包 (Experience Pack) 类型定义
 *
 * 设计目的：
 *   让接手本项目的新 AI 编码模型能够在 30 秒内理解整个项目的：
 *   - 架构分层、模块职责、依赖关系
 *   - 编码约定、命名规则、设计模式
 *   - 历史踩坑、已知风险、绕过方案
 *   - 可复用组件、可扩展点、迭代清单
 *
 * 文件格式：JSON，可通过监测仪表盘 UI 下载
 * 每一个 commit 或重大变更都应该生成一个新版本的经验包
 */

/** 经验包元信息 */
export interface PackMetadata {
  schemaVersion: '1.0'           // 经验包自身 schema 版本
  packVersion: string             // 经验包版本号，如 "v1.3-pack4"
  packBuild: number               // 经验包构建号（数字，如 24）
  generatedAt: string             // 生成时间 ISO
  generatedBy: 'ai-agent' | 'manual'
  appVersion: string              // 应用版本号 (CURRENT_VERSION)
  appVersionLabel: string
  appVersionDesc: string
  // 兼容性：经验包最低适配的 TRAE / 模型能力
  minTraeVersion?: string
  minModelContext?: number        // 推荐最小上下文窗口 (tokens)
}

/** 架构模块（功能归类） */
export type ModuleCategory =
  | 'core'        // 核心（入口/路由/错误边界）
  | 'context'     // 全局状态
  | 'component'   // 可复用组件
  | 'page'        // 页面
  | 'ai'          // AI 模块（Agent/优化/指标）
  | 'data'        // 数据
  | 'config'      // 配置
  | 'monitor'     // 监测系统
  | 'auth'        // 认证
  | 'build'       // 构建/部署

export interface ModuleInfo {
  id: string                      // 唯一标识
  category: ModuleCategory
  name: string                    // 中文名称
  path: string                    // 目录或文件路径（相对于 src/）
  files: number                   // 包含文件数
  approxLines: number             // 预估代码行数
  description: string             // 1-2 句功能描述
  // 对外暴露接口（便于新模型快速定位）
  exports: string[]
  // 依赖哪些模块
  dependsOn: string[]
  // 被哪些模块依赖
  dependedBy: string[]
  // 新增功能时应该在哪改
  extensionPoints: string[]
  // 常见陷阱
  pitfalls: string[]
}

/** 架构总览 */
export interface ArchitectureOverview {
  // 项目统计
  totalFiles: number
  totalTsFiles: number
  totalCssFiles: number
  totalLines: number
  totalRoutes: number
  totalLevels: number
  totalComponents: number
  totalContexts: number
  totalAIModules: number
  // 分层图（文字描述，便于模型快速理解）
  layerGraph: string[]
  // 依赖方向 (稳定 → 不稳定)
  dependencyDirection: string
  // 目录文件树（精简版，去除 node_modules/dist）
  fileTree: FileTreeNode[]
}

export interface FileTreeNode {
  name: string
  type: 'dir' | 'file'
  children?: FileTreeNode[]
  lines?: number
}

/** 编码约定 */
export interface CodingConvention {
  category: 'naming' | 'structure' | 'pattern' | 'state' | 'style' | 'import'
    | 'anti-slop' | 'typography' | 'color' | 'meta-workflow' | 'karpathy'
    | 'darwin-ratchet' | 'autoresearch' | 'feature-adaptation'
  rule: string
  description: string
  // 正例/反例
  goodExample?: string
  badExample?: string
  // 违反此约定的常见后果
  consequence?: string
}

/** 常见设计模式 */
export interface DesignPattern {
  name: string
  category: 'context' | 'component' | 'state' | 'data' | 'error-handling' | 'snapshot'
    | 'external-skill' | 'monitor' | 'design' | 'content' | 'karpathy' | 'feature-adaptation'
  filePattern: string             // 哪类文件使用
  where: string                   // 示例位置
  description: string
  // 何时使用
  whenToUse: string
  // 新增代码时的模板
  template?: string
}

/** 历史经验：踩坑与绕过 */
export interface LessonLearned {
  id: string
  date: string
  category: 'pitfall' | 'constraint' | 'fix' | 'deployment' | 'security'
  title: string
  problem: string
  rootCause?: string
  solution: string
  // 下次做同样事时的步骤
  steps: string[]
  // 验证方法
  verification: string
  // 相关文件
  relatedFiles: string[]
}

/** 可复用组件清单 */
export interface ReusableComponent {
  name: string
  path: string
  props: string[]
  purpose: string
  // 何时选用
  whenToUse: string
  // 如何复用（关键代码片段提示）
  usageHint: string
}

/** 扩展路线图：下次迭代时优先做什么 */
export interface ExtensionRoadmap {
  priority: 'high' | 'medium' | 'low'
  item: string
  description: string
  // 修改涉及的模块
  modules: string[]
  // 预计代码量
  estimateLines: number
  // 风险评估
  risk: 'low' | 'medium' | 'high'
}

/** 构建与部署约束 */
export interface BuildConstraints {
  // 必须遵守的硬性约束（违反即部署失败）
  hardRules: string[]
  // 构建命令
  buildCommand: string
  // 开发命令
  devCommand: string
  // 部署方式
  deployment: string
  // 域名 / base path
  basePath: string
  // 已知环境差异（开发 vs 生产）
  envDifferences: string[]
}

/** 单条对话归档记录（pack5 新增） */
export interface ConversationLogEntry {
  /** 对话 ID，格式 conv-YYYYMMDD-N */
  id: string
  /** 一句话说明用户诉求与最终产出 */
  summary: string
  /** 本次修改的文件列表（相对路径） */
  filesModified: string[]
  /** 本次新增的设计模式名称列表 */
  patternsAdded: string[]
  /** 日期 YYYY-MM-DD */
  date: string
}

/** 元节奏单条规则（pack27 新增，对应用户原话分解） */
export interface MetaRhythmRule {
  id: string                       // 'rhythm-record' | 'rhythm-recode' | 'rhythm-roll'
  name: string                     // 规则中文名
  rule: string                     // 规则正文
  trigger: string                  // 触发条件
  action: string                   // 执行动作
  antiPattern: string              // 反模式
}

/** 元节奏：记录/重编码/滚动适配的节奏控制器（pack27 新增） */
export interface MetaRhythm {
  /** 用户原话（不可篡改，作为元逻辑的源头） */
  sourceQuote: string
  /** 三条规则分解：记录每一次对话 / 根据往昔对话重编码 / 每5轮滚动适配 */
  rules: MetaRhythmRule[]
  /** 滚动适配触发条件 */
  rollTrigger: {
    interval: number               // 触发间隔（5）
    condition: string              // 触发条件描述
    examples: string[]             // 触发示例 convId 列表
    nextTrigger: string            // 下一次触发点
  }
}

/** 完整经验包 */
export interface ExperiencePack {
  meta: PackMetadata
  overview: ArchitectureOverview
  modules: ModuleInfo[]
  conventions: CodingConvention[]
  patterns: DesignPattern[]
  lessons: LessonLearned[]
  components: ReusableComponent[]
  roadmap: ExtensionRoadmap[]
  build: BuildConstraints
  // 给新 AI 模型的使用说明（最先读）
  quickstartForLLM: string[]
  // 自检清单：每次提交前跑一遍
  preCommitChecklist: string[]
  // 给新模型的提问提示词模板
  promptTemplates: {
    addFeature: string
    fixBug: string
    refactor: string
    test: string
    // pack3 新增：外部 Skill 工作流
    tasteSkillWorkflow: string
    impeccableWorkflow: string
    // pack5 新增：元工作流
    readExecuteWriteWorkflow: string
    // pack6 新增：Karpathy 四原则工作流
    karpathyWorkflow: string
  }
  // pack5 新增：对话历史归档（每次对话追加一条，包括纯答疑）
  conversationLog: ConversationLogEntry[]
  // pack25 新增：元工作流（每次对话必须遵守的 7 步循环）
  metaWorkflow: {
    step: number
    name: string
    rule: string
    must: string
    antiPattern: string
  }[]
  // pack25 新增：AI 项目经验（本 AI 在本项目积累的经验，减少无效代码）
  aiProjectExperience: {
    category: string
    experience: string
    action: string
  }[]
  // pack27 新增：元节奏（用户原话写入，记录/重编码/滚动适配的节奏控制器）
  metaRhythm: MetaRhythm
}
`;export{e as default};
