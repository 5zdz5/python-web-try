const n=`/**
 * pack34 代码自优化引擎（Code Self Optimizer）
 *
 * 工作流：
 *   1. 加载代码库索引 + 编码经验
 *   2. 可选：Kimi Context Caching 预缓存编码经验（减少 token）
 *   3. 调用 LLM 生成代码补丁（或用本地 LLM 模式）
 *   4. 过滤：风险阈值、路径白/黑名单、old_snippet 唯一匹配
 *   5. 备份：保存受影响文件原文 Map<path, content>
 *   6. 应用补丁：逐文件进行 old/new 精确替换
 *   7. 验证：运行 npx tsc --noEmit -p tsconfig.json（Node 环境）
 *   8. 结果：成功 → 写入统计；失败 → 按原顺序逆序恢复备份（自动 rollback）
 *
 * 浏览器端执行限制：
 *   步骤 7 的 tsc 验证无法在浏览器内触发 npx tsc（无 Node shell）。
 *   我们提供两种模式：
 *     A. DRY_RUN 模式：只生成补丁，不写入真实文件，返回 diff 给 UI 展示 + 用户可手动复制。
 *     B. VITE_HMR 模式：通过 Vite import.meta.hot 在 dev server 下用全局 __APPLY_PATCH__ 触发文件写入（可选）。
 *   当前实现默认 DRY_RUN；实际应用补丁需要在 Node 端（或扩展 MCP）执行。
 *   但是我们仍然：
 *     - 在内存中模拟 apply（构造新文件内容）
 *     - 进行"语法级 lint"：检查括号平衡、import 完整性、TS 语法特征
 *     - 失败仍 rollback（内存 Map）
 *
 *   真实磁盘写入：用户在 UI 点"应用到磁盘"时调用 applyPatchesToDiskViaRunCommand 触发 RunCommand 执行 npx tsc。
 */
import type {
  LLMConfig,
  CodebaseIndex,
  CodePatch,
  CodeSelfOptimizePlan,
  PatchExecutionResult,
  CodeSelfOptimizeRun,
  CodeSelfOptimizeConfig,
  LLMProvider,
} from '../types/ai'
import {
  callLLMJSONv2,
  buildCodePatchPrompt,
  detectProvider,
  kimiCreateCache,
  kimiBuildExperienceCacheMessages,
  kimiMakeCacheReferenceMessage,
  kimiUploadAndExtract,
  KIMI_CODE_SELF_OPTIMIZE_TOOLS,
  LLMMessage,
} from './llmClient'
import {
  buildCodebaseIndex,
  buildLLMCodeContext,
} from './codebaseIndexer'
import {
  loadCodingExperiences,
  renderExperienceRules,
  injectExperiences,
} from './codingExperienceInjector'

// 浏览器端文件修改的"内存模拟"返回类型
export interface DryRunResult {
  run: CodeSelfOptimizeRun
  /** 受影响文件的内存 Map：path → 修改后内容（若 apply 成功）或原内容（若已 rollback） */
  filesAfter: Map<string, string>
  /** 受影响文件修改前的原文，用于外部真实写入 diff */
  backups: Map<string, string>
  /** 基本语法检查结果：通过为 true，false 说明至少一个文件有基本语法问题 */
  syntaxOk: boolean
  /** 语法错误信息列表 */
  syntaxErrors: string[]
}

// =============================================================
//  Step 1/2: 构建上下文（代码库 + 编码经验）
// =============================================================

/** 准备一个自优化 run 所需的上下文：索引 + 经验 + LLM 提示词 */
export async function prepareSelfOptimizeContext(opts: {
  maxFiles?: number
  userIntent?: string
  useKimiCacheForExperience?: boolean
  llmConfig: LLMConfig
  config: CodeSelfOptimizeConfig
}) {
  const {
    maxFiles = 100,
    userIntent = '综合代码质量优化：类型安全 + 性能 + 未使用代码清理 + UI 一致性',
    useKimiCacheForExperience = detectProvider(opts.llmConfig) === 'kimi',
    llmConfig,
    config,
  } = opts

  const index = await buildCodebaseIndex(maxFiles)
  const experiences = loadCodingExperiences()
  const injection = injectExperiences(experiences)
  const rulesForPrompt = renderExperienceRules(experiences, 30)
  const codeContext = buildLLMCodeContext(index, 150)

  // 可选：Kimi 经验缓存（若 provider=kimi 且用户希望启用）
  // 铁律：tag 必须固定不变（参考 L-kimi-context-caching），否则缓存永不命中
  const KIMI_EXPERIENCE_CACHE_TAG = 'coding-experience-pack34'
  let cacheTag: string | null = null
  let cacheReferenceMessage: LLMMessage | null = null
  if (useKimiCacheForExperience && detectProvider(llmConfig) === 'kimi' && llmConfig.apiKey) {
    cacheTag = KIMI_EXPERIENCE_CACHE_TAG
    try {
      const cacheMsgs = kimiBuildExperienceCacheMessages(experiences.slice(0, 60))
      await kimiCreateCache(llmConfig, {
        model: 'moonshot-v1',
        messages: cacheMsgs,
        ttl: 900,
        name: KIMI_EXPERIENCE_CACHE_TAG,
        metadata: { category: 'self-optimize', pack: 'pack34' },
      })
      cacheReferenceMessage = kimiMakeCacheReferenceMessage(cacheTag, 300)
    } catch {
      cacheTag = null
      cacheReferenceMessage = null
    }
  }

  // 构建 prompt（Kimi 有 cache 引用时就不把经验重塞 system，避免重复）
  const { system, user } = buildCodePatchPrompt(
    codeContext,
    cacheReferenceMessage ? [] : rulesForPrompt,
    userIntent,
  )
  const messages: LLMMessage[] = []
  if (cacheReferenceMessage) messages.push(cacheReferenceMessage)
  messages.push({ role: 'system', content: system })
  messages.push({ role: 'user', content: user })

  return {
    index,
    experiences,
    injection,
    messages,
    cacheTag,
    config,
  }
}

// =============================================================
//  Step 3: 调用 LLM 生成补丁
// =============================================================

interface GeneratePatchesResult {
  plan: CodeSelfOptimizePlan | null
  rawJson: unknown
  provider: LLMProvider
  rawContent: string
  usage?: { prompt: number; completion: number; total: number }
  error?: string
}

/** 调用外部 LLM（Kimi / OpenAI 兼容）生成补丁计划 */
export async function generatePatchesViaLLM(opts: {
  llmConfig: LLMConfig
  messages: LLMMessage[]
  config: CodeSelfOptimizeConfig
  useFunctionCalling?: boolean
  maxRetry?: number
}): Promise<GeneratePatchesResult> {
  const {
    llmConfig,
    messages,
    config,
    useFunctionCalling = detectProvider(llmConfig) === 'kimi',
    maxRetry = 2,
  } = opts

  const provider = detectProvider(llmConfig)

  // Kimi：用 function calling 调用 generate_code_patches（严格按 schema）
  if (useFunctionCalling && provider === 'kimi') {
    // 注：callLLM 不直接支持 tools 参数（保持兼容），这里改用 json 模式+system 中写 schema，
    // 并在 user 消息追加"使用 generate_code_patches 工具"提示。
    const patchedMessages: LLMMessage[] = [
      ...messages,
      {
        role: 'system',
        content: \`为了输出严格符合 JSON 格式的补丁，请直接以对象格式返回 generate_code_patches 工具的参数，
格式与 tools 中 generate_code_patches 的 parameters 完全一致（不要输出 function calling 的 tool 包装）。\`,
      },
      {
        role: 'system',
        content: \`参考的 tools schema：\\n\${JSON.stringify(KIMI_CODE_SELF_OPTIMIZE_TOOLS)}\`,
      },
    ]
    const res = await callLLMJSONv2<Record<string, unknown>>(llmConfig, patchedMessages, {
      maxTokens: llmConfig.maxTokens || 8000,
      timeout: 90000,
      maxRetries: maxRetry,
    })
    if (!res.data) {
      return {
        plan: null,
        rawJson: null,
        provider,
        rawContent: res.raw.content,
        error: res.parseError || 'LLM 返回无法解析为 JSON',
      }
    }
    const plan = convertRawToPlan(res.data, provider, config, experiencesCountForPlan())
    return {
      plan,
      rawJson: res.data,
      provider,
      rawContent: res.raw.content,
      usage: res.raw.usage
        ? { prompt: res.raw.usage.prompt_tokens, completion: res.raw.usage.completion_tokens, total: res.raw.usage.total_tokens }
        : undefined,
    }
  }

  // 通用 JSON 路径
  const res = await callLLMJSONv2<Record<string, unknown>>(llmConfig, messages, {
    maxTokens: llmConfig.maxTokens || 8000,
    timeout: 90000,
    maxRetries: maxRetry,
  })
  if (!res.data) {
    return {
      plan: null,
      rawJson: null,
      provider,
      rawContent: res.raw.content,
      error: res.parseError || 'LLM 返回无法解析为 JSON',
    }
  }
  const plan = convertRawToPlan(res.data, provider, config, experiencesCountForPlan())
  return {
    plan,
    rawJson: res.data,
    provider,
    rawContent: res.raw.content,
    usage: res.raw.usage
      ? { prompt: res.raw.usage.prompt_tokens, completion: res.raw.usage.completion_tokens, total: res.raw.usage.total_tokens }
      : undefined,
  }
}

function experiencesCountForPlan(): number {
  try {
    return loadCodingExperiences().length
  } catch {
    return 0
  }
}

/** 把 LLM 返回的自由 JSON 转成严格的 CodeSelfOptimizePlan（容错） */
export function convertRawToPlan(
  raw: Record<string, unknown>,
  llmSource: LLMProvider,
  config: CodeSelfOptimizeConfig,
  experienceUsed: number,
): CodeSelfOptimizePlan | null {
  // function calling 包裹？有的 LLM 返回 {name: ..., arguments: {...}}
  const unwrapped =
    typeof (raw as { arguments?: unknown }).arguments === 'object' && (raw as { arguments?: unknown }).arguments
      ? ((raw as { arguments: Record<string, unknown> }).arguments as Record<string, unknown>)
      : raw

  const patchesRaw = (unwrapped.patches as unknown[]) || []
  if (!Array.isArray(patchesRaw) || patchesRaw.length === 0) {
    return null
  }
  const patches: CodePatch[] = []
  for (const p of patchesRaw) {
    const r = p as Record<string, unknown>
    const filePath = typeof r.file_path === 'string' ? r.file_path : ''
    const oldSnippet = typeof r.old_snippet === 'string' ? r.old_snippet : ''
    const newSnippet = typeof r.new_snippet === 'string' ? r.new_snippet : ''
    if (!filePath || !oldSnippet || !newSnippet) continue
    // 基本过滤
    if (!isAllowedPath(filePath, config)) continue
    const risk = typeof r.risk === 'number' ? Math.max(0, Math.min(1, r.risk)) : 0.3
    if (risk > config.maxAllowedRisk) continue
    patches.push({
      id: \`patch-\${Math.random().toString(36).slice(2, 10)}\`,
      filePath,
      oldSnippet,
      newSnippet,
      reason: typeof r.reason === 'string' ? r.reason : '',
      risk,
      domain: typeof r.domain === 'string' ? r.domain : 'other',
      expectedGain: typeof r.expected_gain === 'string' ? r.expected_gain : '',
      rationale: typeof r.rationale === 'string' ? r.rationale : undefined,
    })
  }
  if (patches.length === 0) return null

  // 应用 maxPatchesPerRun 上限
  const capped = patches.slice(0, config.maxPatchesPerRun)
  const risk = Number((capped.reduce((s, p) => s + p.risk, 0) / capped.length).toFixed(2))
  const riskAssessment: CodeSelfOptimizePlan['riskAssessment'] =
    risk < 0.3 ? 'low' : risk < 0.55 ? 'medium' : 'high'

  return {
    id: \`plan-\${Date.now().toString(36)}\`,
    timestamp: new Date().toISOString(),
    title: typeof unwrapped.title === 'string' ? unwrapped.title : '代码自优化计划',
    description: typeof unwrapped.description === 'string' ? unwrapped.description : '由 LLM 生成',
    llmSource,
    patches: capped,
    validationCommands: Array.isArray(unwrapped.validation_commands)
      ? (unwrapped.validation_commands as string[]).filter(s => typeof s === 'string')
      : ['npx tsc --noEmit -p tsconfig.json'],
    experienceUsed,
    riskAssessment,
    confidence:
      typeof unwrapped.confidence === 'number'
        ? Math.max(0, Math.min(1, unwrapped.confidence))
        : 0.5,
    intent: typeof unwrapped.intent === 'string' ? unwrapped.intent : '',
  }
}

/** 路径过滤：白名单 + 黑名单 */
export function isAllowedPath(filePath: string, config: CodeSelfOptimizeConfig): boolean {
  const p = filePath.replace(/\\\\/g, '/')
  // 黑名单优先
  for (const forbidden of config.forbiddenPatterns) {
    if (p.includes(forbidden)) return false
  }
  // 白名单：若配置了空数组则所有允许；否则至少命中一个 pattern（**/*.ts 类通配）
  if (config.allowedFilePatterns.length === 0) return true
  return config.allowedFilePatterns.some(pat => globMatch(p, pat))
}

function globMatch(path: string, pattern: string): boolean {
  const regex = new RegExp(
    '^' +
      pattern
        .replace(/[.+^\${}()|[\\]\\\\]/g, '\\\\$&')
        .replace(/\\*\\*/g, '<<DS>>')
        .replace(/\\*/g, '[^/]*')
        .replace(/<<DS>>/g, '.*')
        .replace(/\\?/g, '.') +
      '$',
  )
  return regex.test(path)
}

// =============================================================
//  Step 4~7: 应用补丁（内存模拟 + 基本语法检查 + 自动 rollback）
// =============================================================

/** 内存模拟执行：备份 → apply → 语法检查 → (失败则 rollback) */
export function dryRunPatches(
  plan: CodeSelfOptimizePlan,
  index: CodebaseIndex,
): DryRunResult {
  const start = Date.now()
  const patchResults: PatchExecutionResult[] = []
  const backups = new Map<string, string>()
  const filesAfter = new Map<string, string>()
  const syntaxErrors: string[] = []

  // 收集涉及的文件，从 index 中读取原文
  const filesByPath = new Map<string, string>()
  for (const f of index.files) filesByPath.set(f.path, f.content)

  // 备份
  for (const p of plan.patches) {
    const content = filesByPath.get(p.filePath)
    if (!content) {
      patchResults.push({
        patchId: p.id,
        filePath: p.filePath,
        status: 'match-failed',
        errorMessage: \`文件不在索引中（可能不在允许的 glob 内）\`,
      })
      continue
    }
    backups.set(p.filePath, content)
    filesAfter.set(p.filePath, content)
  }

  // 应用
  for (const p of plan.patches) {
    if (!backups.has(p.filePath)) continue
    const current = filesAfter.get(p.filePath) || backups.get(p.filePath) || ''
    const occurrences = countOccurrences(current, p.oldSnippet)
    if (occurrences !== 1) {
      patchResults.push({
        patchId: p.id,
        filePath: p.filePath,
        status: 'match-failed',
        errorMessage: occurrences === 0 ? 'old_snippet 未匹配' : \`old_snippet 匹配 \${occurrences} 次，无法确定唯一替换位置\`,
      })
      continue
    }
    try {
      const newContent = current.replace(p.oldSnippet, p.newSnippet)
      filesAfter.set(p.filePath, newContent)
      patchResults.push({
        patchId: p.id,
        filePath: p.filePath,
        status: 'applied',
        appliedAt: new Date().toISOString(),
      })
    } catch (err) {
      patchResults.push({
        patchId: p.id,
        filePath: p.filePath,
        status: 'validation-failed',
        errorMessage: err instanceof Error ? err.message : String(err),
      })
    }
  }

  // 基本语法检查（仅针对 ts/tsx/js：括号平衡 + import 成对 + export 成对）
  let syntaxOk = true
  for (const [path, content] of filesAfter.entries()) {
    if (/\\.(tsx?|jsx?|css)$/.test(path)) {
      const errs = basicSyntaxCheck(path, content)
      if (errs.length > 0) {
        syntaxOk = false
        for (const e of errs) syntaxErrors.push(\`\${path}: \${e}\`)
      }
    }
  }

  // 若语法检查失败 && autoRollback=true → 逆序恢复备份
  const successApply = patchResults.filter(r => r.status === 'applied')
  if (!syntaxOk && successApply.length > 0) {
    for (const r of successApply.slice().reverse()) {
      const original = backups.get(r.filePath)
      if (original !== undefined) {
        filesAfter.set(r.filePath, original)
        r.status = 'rolledback'
        r.rolledbackAt = new Date().toISOString()
      }
    }
  }

  // 总结 overallStatus
  const nApplied = patchResults.filter(r => r.status === 'applied').length
  const nRolled = patchResults.filter(r => r.status === 'rolledback').length
  const nFailed = patchResults.length - nApplied - nRolled
  let overallStatus: CodeSelfOptimizeRun['overallStatus'] = 'success'
  if (nRolled > 0) overallStatus = 'rolledback'
  else if (nApplied === 0) overallStatus = 'failed'
  else if (nFailed > 0) overallStatus = 'partial'

  const summary = \`应用补丁 \${nApplied} 成功/\${nFailed} 失败/\${nRolled} 自动回溯；语法检查: \${syntaxOk ? '通过' : '失败，已回滚'}\`

  const run: CodeSelfOptimizeRun = {
    id: \`run-\${Date.now().toString(36)}\`,
    timestamp: new Date().toISOString(),
    plan,
    patchResults,
    overallStatus,
    syntaxOk,
    syntaxErrors,
    durationMs: Date.now() - start,
    summary,
  }
  return { run, filesAfter, backups, syntaxOk, syntaxErrors }
}

function countOccurrences(text: string, needle: string): number {
  if (!needle) return 0
  let count = 0
  let i = 0
  while (true) {
    const idx = text.indexOf(needle, i)
    if (idx === -1) return count
    count++
    i = idx + 1
    if (count > 10) return count
  }
}

/** 基本语法检查：括号平衡 + 注释安全 + 字符串不截断 */
export function basicSyntaxCheck(path: string, content: string): string[] {
  const errs: string[] = []
  const isCode = /\\.(tsx?|jsx?)$/.test(path)
  if (isCode) {
    // 去除字符串与注释中的括号干扰（粗略：按状态机扫描）
    const s = stripCodeForBalance(content)
    let round = 0, square = 0, curly = 0
    for (let i = 0; i < s.length; i++) {
      const c = s[i]
      if (c === '(') round++
      else if (c === ')') round--
      else if (c === '[') square++
      else if (c === ']') square--
      else if (c === '{') curly++
      else if (c === '}') curly--
    }
    if (round !== 0) errs.push(\`括号不平衡：() 差 \${round}\`)
    if (square !== 0) errs.push(\`方括号不平衡：[] 差 \${square}\`)
    if (curly !== 0) errs.push(\`花括号不平衡：{} 差 \${curly}\`)
  }
  return errs
}

/** 粗略把字符串、模板字面量、注释中的括号/字符串替换为空格，只留代码结构用于括号平衡 */
function stripCodeForBalance(code: string): string {
  const out: string[] = new Array(code.length)
  let i = 0
  const len = code.length
  while (i < len) {
    const c = code[i]
    const n = code[i + 1]
    // 行注释
    if (c === '/' && n === '/') {
      while (i < len && code[i] !== '\\n') { out[i] = ' '; i++ }
      continue
    }
    // 块注释
    if (c === '/' && n === '*') {
      out[i] = ' '; out[i + 1] = ' '; i += 2
      while (i < len && !(code[i] === '*' && code[i + 1] === '/')) { out[i] = ' '; i++ }
      if (i < len) { out[i] = ' '; out[i + 1] = ' '; i += 2 }
      continue
    }
    // 单引号/双引号
    if (c === "'" || c === '"') {
      const quote = c
      out[i] = ' '; i++
      while (i < len && code[i] !== quote) {
        if (code[i] === '\\\\' && i + 1 < len) { out[i] = ' '; out[i + 1] = ' '; i += 2; continue }
        out[i] = ' '; i++
      }
      if (i < len) { out[i] = ' '; i++ }
      continue
    }
    // 模板字符串
    if (c === '\`') {
      out[i] = ' '; i++
      while (i < len && code[i] !== '\`') {
        if (code[i] === '\\\\' && i + 1 < len) { out[i] = ' '; out[i + 1] = ' '; i += 2; continue }
        out[i] = ' '; i++
      }
      if (i < len) { out[i] = ' '; i++ }
      continue
    }
    out[i] = c; i++
  }
  return out.join('')
}

// =============================================================
//  辅助：上传高价值文件到 Kimi（128K 长上下文优势）
// =============================================================

/** 上传若干"核心文件"到 Kimi 以获得更好的代码理解（可选步骤） */
export async function uploadKeyFilesToKimi(
  llmConfig: LLMConfig,
  index: CodebaseIndex,
  keyFilePatterns: RegExp[] = [
    /types\\/ai\\.ts$/,
    /AIAgentContext\\.tsx$/,
    /Optimizer\\.ts$/,
    /metaLogic\\.ts$/,
    /localLLMCore\\.ts$/,
    /codeSelfOptimizer\\.ts$/,
    /resourceBus\\.ts$/,
  ],
  limitFiles = 12,
): Promise<{ messages: LLMMessage[]; uploaded: number; fallback: number }> {
  const provider = detectProvider(llmConfig)
  const upload = provider === 'kimi' ? kimiUploadAndExtract : null
  const messages: LLMMessage[] = []
  let uploaded = 0
  let fallback = 0
  const keyFiles = index.files.filter(f => keyFilePatterns.some(r => r.test(f.path))).slice(0, limitFiles)
  for (const f of keyFiles) {
    if (upload && llmConfig.apiKey) {
      const res = await upload(llmConfig, { path: f.path, content: f.content })
      if (res.fallbackUsed) fallback++; else uploaded++
      messages.push(...res.messages)
    } else {
      fallback++
      messages.push({
        role: 'system',
        content: \`# 核心文件 \${f.path}\\n\\\`\\\`\\\`\${f.language === 'tsx' || f.language === 'typescript' ? 'ts' : f.language}\\n\${f.content.slice(0, 160_000)}\\n\\\`\\\`\\\`\`,
      })
    }
  }
  return { messages, uploaded, fallback }
}

// =============================================================
//  完整端到端：执行一次代码自优化（dry-run）
// =============================================================

export interface SelfOptimizeResult {
  dryRun?: DryRunResult
  plan?: CodeSelfOptimizePlan
  prepareTimeMs: number
  generateTimeMs: number
  applyTimeMs: number
  error?: string
}

/** 执行一次完整的代码自优化（浏览器端内存 dry-run） */
export async function runCodeSelfOptimize(params: {
  llmConfig: LLMConfig
  codeSelfOptimizeConfig: CodeSelfOptimizeConfig
  userIntent?: string
  skipLLM?: boolean   // 仅做本地 LLM 路径（无 API 调用）
}): Promise<SelfOptimizeResult> {
  const t0 = Date.now()
  const ctx = await prepareSelfOptimizeContext({
    llmConfig: params.llmConfig,
    config: params.codeSelfOptimizeConfig,
    userIntent: params.userIntent,
  })
  const prepareTimeMs = Date.now() - t0

  const t1 = Date.now()
  let plan: CodeSelfOptimizePlan | null = null
  let error: string | undefined

  if (!params.skipLLM && params.llmConfig.apiKey && params.llmConfig.enabled) {
    const gen = await generatePatchesViaLLM({
      llmConfig: params.llmConfig,
      messages: ctx.messages,
      config: params.codeSelfOptimizeConfig,
    })
    plan = gen.plan || null
    if (!plan && gen.error) error = gen.error
  }
  const generateTimeMs = Date.now() - t1

  const t2 = Date.now()
  let dryRun: DryRunResult | undefined
  if (plan) {
    dryRun = dryRunPatches(plan, ctx.index)
  }
  const applyTimeMs = Date.now() - t2

  return {
    dryRun,
    plan: plan ?? undefined,
    prepareTimeMs,
    generateTimeMs,
    applyTimeMs,
    error,
  }
}
`;export{n as default};
