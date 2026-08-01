const n=`/**
 * LLM 客户端（pack30：Agent 向 LLM 方向进化）
 *
 * OpenAI 兼容接口客户端，支持：
 *   - 超时控制（AbortController）
 *   - 指数退避重试（复用 github.ts 的 withRetry 模式）
 *   - JSON 模式调用（强制返回可解析的 JSON）
 *   - 流式响应预留（当前为非流式，后续可扩展）
 *
 * 安全设计：
 *   - apiKey 仅存 localStorage，不发送到第三方
 *   - 所有调用走用户配置的 baseUrl，不硬编码任何 API 端点
 *   - 超时和重试参数由 LLMConfig 控制
 */
import type { LLMConfig, LLMProvider, KimiCapabilities, CodingExperienceEntry } from '../types/ai'
import { DEFAULT_KIMI_CAPABILITIES as KIMI_CAPS } from '../types/ai'

/** LLM 消息角色 */
export type LLMRole = 'system' | 'user' | 'assistant' | 'tool' | 'cache'  // pack34: Kimi 扩展 role=cache

/** LLM 消息 */
export interface LLMMessage {
  role: LLMRole
  content: string
  /** Kimi 扩展：tool / tool_calls / tool_call_id / name */
  name?: string
  tool_call_id?: string
  tool_calls?: Array<{
    id: string
    type: 'function'
    function: { name: string; arguments: string }
  }>
}

/** LLM 调用选项 */
export interface LLMCallOptions {
  temperature?: number
  maxTokens?: number
  timeout?: number
  maxRetries?: number
  /** 强制 JSON 模式（在 messages 中追加"只返回 JSON"指令） */
  jsonMode?: boolean
}

/** LLM 原始响应 */
export interface LLMRawResponse {
  content: string
  model: string
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
  finishReason?: string
}

/** LLM 客户端错误 */
export class LLMClientError extends Error {
  status: number
  isRetryable: boolean
  constructor(message: string, status: number = 0, isRetryable: boolean = false) {
    super(message)
    this.name = 'LLMClientError'
    this.status = status
    this.isRetryable = isRetryable
  }
}

/** 默认超时 */
const DEFAULT_TIMEOUT = 30000

/** 判断错误是否可重试（网络错误 + 5xx + 429） */
function isRetryableError(err: unknown): boolean {
  if (err instanceof LLMClientError) {
    return err.isRetryable || err.status === 0 || err.status >= 500 || err.status === 429
  }
  if (err instanceof TypeError) return true // fetch 网络错误
  if (err instanceof DOMException && err.name === 'AbortError') return true
  const msg = err instanceof Error ? err.message : String(err)
  return msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('timeout')
}

/**
 * 指数退避重试
 */
async function withRetry<T>(fn: () => Promise<T>, maxRetries: number, opName: string): Promise<T> {
  let lastErr: unknown
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastErr = err
      if (attempt < maxRetries && isRetryableError(err)) {
        const delay = 2000 * Math.pow(2, attempt)
        console.warn(\`[LLM] \${opName} 第 \${attempt + 1} 次失败，\${delay}ms 后重试...\`)
        await new Promise(resolve => setTimeout(resolve, delay))
      } else {
        break
      }
    }
  }
  throw lastErr
}

/**
 * 调用 LLM（OpenAI 兼容 /v1/chat/completions）
 *
 * @param config LLM 配置
 * @param messages 消息列表
 * @param options 调用选项
 * @returns 原始响应（content + usage）
 */
export async function callLLM(
  config: LLMConfig,
  messages: LLMMessage[],
  options: LLMCallOptions = {},
): Promise<LLMRawResponse> {
  if (!config.apiKey) {
    throw new LLMClientError('未配置 API Key', 0, false)
  }

  const baseUrl = config.baseUrl.replace(/\\/+$/, '') // 去掉尾部斜杠
  const url = \`\${baseUrl}/chat/completions\`
  const timeout = options.timeout ?? config.timeout ?? DEFAULT_TIMEOUT
  const temperature = options.temperature ?? config.temperature ?? 0.7
  const maxTokens = options.maxTokens ?? config.maxTokens ?? 2000

  // JSON 模式：在 system 消息末尾追加指令
  const finalMessages = options.jsonMode
    ? messages.map((m, i) =>
        i === 0 && m.role === 'system'
          ? { ...m, content: \`\${m.content}\\n\\n重要：你必须只返回合法的 JSON，不要包含任何 markdown 代码块标记或额外文字。\` }
          : m,
      )
    : messages

  const body = {
    model: config.model,
    messages: finalMessages,
    temperature,
    max_tokens: maxTokens,
    ...(options.jsonMode ? { response_format: { type: 'json_object' as const } } : {}),
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    const res = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${config.apiKey}\`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      const isRetryable = res.status >= 500 || res.status === 429
      throw new LLMClientError(
        \`LLM API \${res.status}: \${text.slice(0, 200)}\`,
        res.status,
        isRetryable,
      )
    }

    const data = await res.json()
    const choice = data.choices?.[0]
    if (!choice) {
      throw new LLMClientError('LLM 返回空响应（无 choices）', 0, false)
    }

    return {
      content: choice.message?.content ?? '',
      model: data.model ?? config.model,
      usage: data.usage
        ? {
            prompt_tokens: data.usage.prompt_tokens ?? 0,
            completion_tokens: data.usage.completion_tokens ?? 0,
            total_tokens: data.usage.total_tokens ?? 0,
          }
        : undefined,
      finishReason: choice.finish_reason,
    }
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new LLMClientError(\`LLM 请求超时（\${timeout}ms）\`, 0, true)
    }
    if (err instanceof LLMClientError) throw err
    // 网络错误
    throw new LLMClientError(
      err instanceof Error ? err.message : String(err),
      0,
      true,
    )
  } finally {
    clearTimeout(timer)
  }
}

/**
 * 调用 LLM 并解析为 JSON 对象
 *
 * 自动从响应中提取 JSON（支持 markdown 代码块包裹的情况），
 * 解析失败时抛出 LLMClientError。
 */
export async function callLLMJSON<T = unknown>(
  config: LLMConfig,
  messages: LLMMessage[],
  options: LLMCallOptions = {},
): Promise<{ data: T; raw: LLMRawResponse }> {
  const raw = await withRetry(
    () => callLLM(config, messages, { ...options, jsonMode: true }),
    options.maxRetries ?? config.maxRetries ?? 2,
    'callLLMJSON',
  )

  // 尝试直接解析
  let jsonStr = raw.content.trim()

  // 如果被 markdown 代码块包裹，提取内容
  const codeBlockMatch = jsonStr.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/)
  if (codeBlockMatch) {
    jsonStr = codeBlockMatch[1].trim()
  }

  // 如果还有前导文字（如 "Here is the JSON:"），尝试找到第一个 { 和最后一个 }
  if (!jsonStr.startsWith('{') && !jsonStr.startsWith('[')) {
    const firstBrace = jsonStr.indexOf('{')
    const lastBrace = jsonStr.lastIndexOf('}')
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      jsonStr = jsonStr.slice(firstBrace, lastBrace + 1)
    }
  }

  try {
    const data = JSON.parse(jsonStr) as T
    return { data, raw }
  } catch (parseErr) {
    throw new LLMClientError(
      \`LLM 返回的内容无法解析为 JSON: \${parseErr instanceof Error ? parseErr.message : String(parseErr)}\\n前200字符: \${raw.content.slice(0, 200)}\`,
      0,
      false,
    )
  }
}

/** 默认 LLM 配置（用户需自行填入 apiKey 和 baseUrl） */
export const DEFAULT_LLM_CONFIG: LLMConfig = {
  enabled: false,
  baseUrl: 'https://api.openai.com/v1',
  apiKey: '',
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 2000,
  timeout: 30000,
  maxRetries: 2,
}

/** localStorage key */
export const LLM_CONFIG_KEY = 'python-quest-llm-config'

/** 测试 LLM 连接（发一条简短消息验证配置是否可用） */
export async function testLLMConnection(config: LLMConfig): Promise<{ ok: boolean; message: string; model?: string }> {
  try {
    const raw = await callLLM(config, [
      { role: 'system', content: 'You are a test assistant. Reply with exactly: OK' },
      { role: 'user', content: 'ping' },
    ], { maxTokens: 10, timeout: 10000, maxRetries: 1 })
    return {
      ok: true,
      message: \`连接成功（模型: \${raw.model}）\`,
      model: raw.model,
    }
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : String(err),
    }
  }
}

// =============================================================
//  pack34 代码级自优化 + Kimi 超级升级
// =============================================================

/** Kimi / Moonshot API 官方端点（Kimi 开源兼容 OpenAI 格式） */
export const KIMI_BASE_URL = 'https://api.moonshot.cn/v1'

/** 常见 Kimi 模型名（公开可用） */
export const KIMI_MODELS = [
  { id: 'moonshot-v1-8k',  label: 'Kimi Moonshot v1 8K',  maxCtx: 8192 },
  { id: 'moonshot-v1-32k', label: 'Kimi Moonshot v1 32K', maxCtx: 32768 },
  { id: 'moonshot-v1-128k', label: 'Kimi Moonshot v1 128K', maxCtx: 131072 },
]

/** 根据 baseUrl 推断提供商 */
export function detectProvider(config: LLMConfig): LLMProvider {
  const url = config.baseUrl.toLowerCase()
  if (url.includes('moonshot') || url.includes('kimi')) return 'kimi'
  if (url.includes('deepseek')) return 'deepseek'
  if (url.includes('api.openai.com')) return 'openai-compatible'
  return 'custom'
}

/** 按提供商获取推荐参数（代码补丁任务偏保守） */
export function getProviderDefaults(provider: LLMProvider): { temperature: number; topP: number; jsonModeHint: boolean } {
  switch (provider) {
    case 'kimi':
      // Kimi 对 JSON 模式兼容良好，但代码补丁任务需要保守
      return { temperature: KIMI_CAPS.recommendedTemperature, topP: KIMI_CAPS.recommendedTopP, jsonModeHint: true }
    case 'deepseek':
      return { temperature: 0.25, topP: 0.9, jsonModeHint: true }
    case 'openai-compatible':
      return { temperature: 0.3, topP: 0.9, jsonModeHint: true }
    default:
      return { temperature: 0.4, topP: 0.95, jsonModeHint: false }
  }
}

/** 获取 Kimi 能力（API 兼容度） */
export function getKimiCapabilities(): KimiCapabilities {
  return { ...KIMI_CAPS }
}

/** 创建 Kimi 预设配置（只需要 API Key 即可用） */
export function buildKimiConfig(apiKey: string, modelId: string = 'moonshot-v1-128k'): LLMConfig {
  return {
    enabled: true,
    baseUrl: KIMI_BASE_URL,
    apiKey,
    model: modelId,
    temperature: KIMI_CAPS.recommendedTemperature,
    maxTokens: 8000,   // 代码补丁输出较长
    timeout: 60000,    // Kimi 长上下文允许更长超时
    maxRetries: 3,
  }
}

// -----------------------------------------------------------
//  超健壮 JSON 清洗（Kimi 升级：兼容 LLM 各种花式返回）
// -----------------------------------------------------------

/**
 * LLM 返回的 JSON 清洗函数（参考经验 607244）
 *   - 去除 BOM / 不可见字符
 *   - 若包含 \`\`\` 代码块，提取内部
 *   - 否则从首个 { 到最后一个 } 截取
 *   - 必要时从首个 [ 到最后一个 ] 截取
 *   - 清理尾逗号、尾随文字
 */
export function sanitizeLLMJSON(text: string): string {
  if (!text) return '{}'
  let s = text

  // 1. 去除 BOM 与控制字符（保留换行/制表）
  s = s.replace(/^\\uFEFF/, '')
  s = s.replace(/[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F]/g, '')

  // 2. trim
  s = s.trim()

  // 3. markdown 代码块内提取（优先级最高）
  const codeBlock = s.match(/\`\`\`(?:json\\s*)?([\\s\\S]*?)\`\`\`/i)
  if (codeBlock && codeBlock[1] && codeBlock[1].trim().length > 0) {
    s = codeBlock[1].trim()
  } else {
    // 4. 若无代码块，尝试首尾截取 JSON
    const fb = s.indexOf('{')
    const lb = s.lastIndexOf('}')
    const fsq = s.indexOf('[')
    const lsq = s.lastIndexOf(']')
    // 对象 vs 数组，选最早出现的那类
    if (fb !== -1 && (fsq === -1 || fb < fsq)) {
      if (lb > fb) s = s.slice(fb, lb + 1)
    } else if (fsq !== -1) {
      if (lsq > fsq) s = s.slice(fsq, lsq + 1)
    }
  }

  // 5. 清理对象/数组尾逗号（JSON 不允许尾逗号，但 LLM 常生成）
  //    ", }" / ", }" / ",\\n}" → "}"  ，数组同理
  s = s.replace(/,(\\s*[}\\]])/g, '$1')

  return s
}

/** 尝试从 LLM 文本响应解析 JSON，失败返回 null（不抛） */
export function safeParseLLMJSON<T = unknown>(text: string): T | null {
  try {
    const cleaned = sanitizeLLMJSON(text)
    return JSON.parse(cleaned) as T
  } catch {
    return null
  }
}

/**
 * 调用 LLM 并解析 JSON（pack34 升级版：使用 sanitizeLLMJSON）
 * 比 callLLMJSON 更健壮：
 *   - 不再依赖服务端 response_format 强制 JSON
 *   - 先清洗再解析，兼容更多模型（Kimi / DeepSeek 等）
 */
export async function callLLMJSONv2<T = unknown>(
  config: LLMConfig,
  messages: LLMMessage[],
  options: LLMCallOptions = {},
): Promise<{ data: T | null; raw: LLMRawResponse; parseError?: string }> {
  const provider = detectProvider(config)
  const def = getProviderDefaults(provider)

  // 注入 JSON 提示词（非强制模式，兼容不支持 response_format 的供应商）
  const jsonHint = def.jsonModeHint
    ? \`\\n\\n你必须严格以合法的 JSON 对象作为最终回答，不要包含 markdown 代码块包裹、不要添加任何额外文字。\\n\`
    : ''

  const finalMessages: LLMMessage[] = messages.map((m, i) =>
    i === 0 && m.role === 'system'
      ? { ...m, content: m.content + jsonHint }
      : m,
  )

  const finalOptions: LLMCallOptions = {
    temperature: options.temperature ?? def.temperature,
    maxTokens: options.maxTokens,
    timeout: options.timeout,
    maxRetries: options.maxRetries ?? config.maxRetries ?? 2,
    jsonMode: false, // v2 版本不强制服务端 JSON，靠客户端清洗兼容
  }

  const raw = await withRetry(
    () => callLLM(config, finalMessages, finalOptions),
    finalOptions.maxRetries ?? 2,
    'callLLMJSONv2',
  )

  const parsed = safeParseLLMJSON<T>(raw.content)
  if (parsed === null) {
    return {
      data: null,
      raw,
      parseError: \`JSON 解析失败，已清洗前400字符：\${sanitizeLLMJSON(raw.content).slice(0, 400)}\`,
    }
  }
  return { data: parsed, raw }
}

// -----------------------------------------------------------
//  代码补丁模式（Kimi 升级：为代码自优化定制的输出模式）
// -----------------------------------------------------------

/** 单个补丁的 JSON 响应结构（LLM 按此 schema 输出） */
export interface LLMPatchResponse {
  patches: Array<{
    file_path: string
    old_snippet: string
    new_snippet: string
    reason: string
    risk: number       // 0-1
    domain: string
    expected_gain: string
    rationale?: string
  }>
  intent: string
  risk_assessment: 'low' | 'medium' | 'high'
  confidence: number  // 0-1
  validation_commands?: string[]
}

/**
 * 代码补丁生成 prompt 模板（Kimi 升级：结合编码经验注入）
 *
 * @param codebaseContext 代码库上下文（文件树/摘要/关键词）
 * @param experienceRules 编码经验注入条目（以自然语言列表形式拼接）
 * @param userIntent 用户意图描述（可选："优化性能"、"去除未使用代码" 等）
 */
export function buildCodePatchPrompt(
  codebaseContext: string,
  experienceRules: string[],
  userIntent: string = '综合代码质量优化（类型安全 + 性能 + 可读性 + 未使用代码清理）',
): { system: string; user: string } {
  const rulesBlock = experienceRules.length > 0
    ? \`\\n# 必须遵守的编码经验规则（按优先级排列）\\n\${experienceRules.map((r, i) => \`\${i + 1}. \${r}\`).join('\\n')}\\n\\n\`
    : '\\n# 编码风格\\n- 类型安全第一，避免 any；必要时用 unknown + 窄化\\n- 参数真消费，去除未使用变量/导入\\n- 尊重现有项目风格（像素风 UI、React Hooks）\\n- 首页（/pages/Home/）永不修改\\n\\n'

  const system = \`你是一个资深 TypeScript + React 代码优化专家，专注于前端代码的安全增量改造。

# 工作方式（Karpathy WORKFLOW）
1. 先完整理解给出的代码库上下文
2. 识别可优化点：类型安全、性能、死代码、可维护性、UI 一致性
3. 以"精确片段替换"的方式输出补丁，old_snippet 必须在文件中唯一匹配
4. 每个补丁小而安全，一次不要改太多，遵循低风险原则
5. 永远不要修改被禁止的路径（首页 / 配置文件）
6. 每个补丁附带修改理由与风险评级（0-1，越高越风险）
7. 只返回合法的 JSON 对象，不要包含任何 markdown 代码块标记或额外文字。\${rulesBlock}
# 补丁输出格式
以 JSON 返回，必须符合以下 schema（不要额外字段）：
{
  "patches": [
    {
      "file_path": "相对路径，如 src/components/Foo.tsx",
      "old_snippet": "原文件中出现过一次且仅一次的完整代码片段（前后保留足够上下文保证唯一匹配）",
      "new_snippet": "替换后的新代码",
      "reason": "为什么改（一句话）",
      "risk": 0.2,
      "domain": "typescript | react | css | performance | cleanup | other",
      "expected_gain": "预期收益一句话",
      "rationale": "（可选）详细推理"
    }
  ],
  "intent": "你推断的本次优化整体意图",
  "risk_assessment": "low | medium | high",
  "confidence": 0-1 的置信度,
  "validation_commands": ["npx tsc --noEmit -p tsconfig.json"]
}
\`

  const user = \`## 用户优化意图
\${userIntent}

## 代码库上下文
\\\`\\\`\\\`
\${codebaseContext}
\\\`\\\`\\\`

## 优化要求
- 输出 1-3 个补丁（不要更多），优先选择最保守、收益最高的修改
- old_snippet 必须唯一，避免因重复导致匹配失败
- 不要修改被禁止的路径：node_modules/、dist/、.git/、src/pages/Home/、package.json、tsconfig.json
- 补丁必须能被严格匹配，因此在 old_snippet 中保留足够上下文（前后各一两行）
- 永远保持 TypeScript 类型正确
- 完成后按上面 schema 只返回 JSON，不要加任何说明文字。\`

  return { system, user }
}

// =============================================================
//  Kimi AI 开源能力升级（借鉴官方开源文档 / K2 模型推理代码）
//  Kimi 专有：Context Caching、文件抽取、工具调用
// =============================================================

/** Kimi 创建 Cache 请求参数（官方 API 规范） */
export interface KimiCreateCacheParams {
  model: string                       // 固定 "moonshot-v1"（model family）
  messages: LLMMessage[]              // 缓存的消息（可含 system/user/tool/assistant）
  tools?: Array<Record<string, unknown>>  // 缓存的工具定义
  name?: string                       // 辅助性质的缓存名称
  description?: string                // 辅助描述
  metadata?: Record<string, string>   // 元信息，用于后续筛选缓存
  ttl?: number                        // 存活秒数（与 expired_at 二选一）
  expired_at?: number                 // Unix 秒级时间戳（与 ttl 二选一）
}

/** Kimi Cache 创建响应结构 */
export interface KimiCacheObject {
  id: string
  status: 'pending' | 'ready' | 'error' | 'inactive'
  object: 'context-cache'
  created_at: number
  tokens: number
  expired_at: number
  model: string
  error?: { type: string; message: string }
  metadata?: Record<string, string>
  name?: string
  description?: string
}

/**
 * 创建 Kimi Context Caching（官方 /v1/caching 接口）
 *
 * 借鉴 Kimi 官方文档 + 开源调用示例：
 *   - 将编码经验规则预先缓存（tag = coding-experience-pack34）
 *   - 后续代码补丁生成调用时，只需 role=cache 的消息引用 tag，
 *     不必重复传输数百条经验条目，节省带宽和费用
 *   - 每次请求携带 reset_ttl=300 自动延长缓存寿命
 *
 * @returns KimiCacheObject
 */
export async function kimiCreateCache(
  config: LLMConfig,
  params: KimiCreateCacheParams,
): Promise<KimiCacheObject> {
  if (!config.apiKey) throw new LLMClientError('未配置 Kimi API Key', 0, false)
  const url = \`\${config.baseUrl.replace(/\\/+$/, '')}/caching\`

  const body: Record<string, unknown> = {
    model: params.model || 'moonshot-v1',
    messages: params.messages,
  }
  if (params.tools && params.tools.length > 0) body.tools = params.tools
  if (params.name) body.name = params.name
  if (params.description) body.description = params.description
  if (params.metadata && Object.keys(params.metadata).length > 0) body.metadata = params.metadata
  if (typeof params.ttl === 'number') body.ttl = Math.max(60, params.ttl)
  if (typeof params.expired_at === 'number') body.expired_at = params.expired_at

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: \`Bearer \${config.apiKey}\`,
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new LLMClientError(\`Kimi 创建缓存失败 \${res.status}: \${text.slice(0, 300)}\`, res.status, res.status >= 500)
  }
  return (await res.json()) as KimiCacheObject
}

/**
 * 生成一条 role=cache 的消息（用于在 chat/completions 中引用已缓存的上下文）
 *
 * Kimi 官方开源示例：
 *   messages 第一条放 { role: 'cache', content: 'tag=<cache_tag>;reset_ttl=300' }
 * 网络效果：128K tokens 的经验库/代码库，只传输几十字节即可引用
 */
export function kimiMakeCacheReferenceMessage(
  cacheTag: string,
  resetTTLSeconds: number = 300,
): LLMMessage {
  return {
    role: 'cache',
    content: \`tag=\${cacheTag};reset_ttl=\${resetTTLSeconds}\`,
  }
}

/**
 * 将编码经验条目预构建为可缓存的 messages（调用 kimiCreateCache 缓存后，
 * 后续只引用 cache tag，不必每次重发）。
 *
 * @returns 可直接塞给 /v1/caching 的 messages 数组
 */
export function kimiBuildExperienceCacheMessages(experiences: CodingExperienceEntry[]): LLMMessage[] {
  // 按 priority 排序，最高优先级放前面
  const sorted = [...experiences].sort((a, b) => a.priority - b.priority)
  const content = sorted
    .map((e, i) => {
      const lines = [
        \`\${i + 1}. [\${e.category} / priority=\${e.priority} / source=\${e.source}] \${e.title}\`,
        \`   - 说明：\${e.description}\`,
        \`   - 触发条件：\${e.trigger}\`,
        \`   - 推荐做法：\${e.practice}\`,
      ]
      if (e.positiveExample) lines.push(\`   - 正例：\${e.positiveExample}\`)
      if (e.antiExample) lines.push(\`   - 反例：\${e.antiExample}\`)
      return lines.join('\\n')
    })
    .join('\\n\\n')

  const system = \`# 编码经验库（Kimi Context Cache，pack34）
以下是从项目迭代中沉淀的编码经验（按优先级排列，1 为最高）。
在生成代码补丁/优化方案时，**必须严格遵循**这些经验，除非用户明确要求偏离。

--- 经验列表开始 ---
\${content}
--- 经验列表结束 ---

执行时请：
- 不要输出任何偏离以上经验的方案
- 如果某条经验与用户请求冲突，优先按最高优先级的经验执行
- 遵守 Karpathy 工作流：先理解上下文，再识别问题，再生成补丁，再验证\`
  return [{ role: 'system', content: system }]
}

/** 官方 Kimi 上传文件响应 */
export interface KimiFileObject {
  id: string
  object: 'file'
  bytes: number
  created_at: number
  filename: string
  purpose: 'file-extract' | 'fine-tune'   // 文件抽取用于上下文
  status?: 'uploaded' | 'processed' | 'error'
  status_details?: string
}

/**
 * 上传代码文件到 Kimi（/v1/files 接口）并抽取为 role=system 的消息。
 * 借鉴官方 upload_files 函数：将单个本地文件文本内容上传并抽取。
 *
 * 浏览器环境下不能使用 fs API，这里构造 Blob 模拟 multipart/form-data。
 * 如果调用环境受限，可降级为直接塞 system 消息。
 */
export async function kimiUploadAndExtract(
  config: LLMConfig,
  file: { path: string; content: string },
): Promise<{ fileObject: KimiFileObject | null; messages: LLMMessage[]; fallbackUsed: boolean }> {
  // 浏览器沙箱降级（无 Blob 直接用 system）
  const canForm = typeof Blob !== 'undefined' && typeof FormData !== 'undefined'
  if (!canForm || !config.apiKey) {
    // 降级：将内容塞 role=system message
    return {
      fileObject: null,
      fallbackUsed: true,
      messages: [
        {
          role: 'system',
          content: \`# 文件 \${file.path}\\n\\\`\\\`\\\`\\n\${file.content.slice(0, 200_000)}\\n\\\`\\\`\\\`\`,
        },
      ],
    }
  }
  try {
    const url = \`\${config.baseUrl.replace(/\\/+$/, '')}/files\`
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' })
    const form = new FormData()
    form.append('file', blob, file.path.split(/[\\\\/]/).pop() || 'file.ts')
    form.append('purpose', 'file-extract')

    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: \`Bearer \${config.apiKey}\` },
      body: form,
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(\`Kimi 文件上传 \${res.status}: \${text.slice(0, 200)}\`)
    }
    const fobj = (await res.json()) as KimiFileObject
    // 下载抽取结果（官方示例：client.files.content(file_id).text）
    const contentUrl = \`\${config.baseUrl.replace(/\\/+$/, '')}/files/\${fobj.id}/content\`
    const cres = await fetch(contentUrl, {
      headers: { Authorization: \`Bearer \${config.apiKey}\` },
    })
    const extracted = cres.ok ? await cres.text() : file.content
    return {
      fileObject: fobj,
      fallbackUsed: false,
      messages: [
        {
          role: 'system',
          content: extracted,
        },
      ],
    }
  } catch {
    // 失败回退
    return {
      fileObject: null,
      fallbackUsed: true,
      messages: [
        {
          role: 'system',
          content: \`# 文件 \${file.path}\\n\\\`\\\`\\\`\\n\${file.content.slice(0, 200_000)}\\n\\\`\\\`\\\`\`,
        },
      ],
    }
  }
}

// =============================================================
//  Kimi 工具调用（Function Calling）— 代码自优化专用工具定义
//  借鉴官方 CodeRunner 示例
// =============================================================

/** 代码自优化阶段的工具定义（Kimi function calling） */
export const KIMI_CODE_SELF_OPTIMIZE_TOOLS = [
  {
    type: 'function' as const,
    function: {
      name: 'generate_code_patches',
      description:
        '生成代码补丁来优化当前代码库。你必须先分析上下文中的代码与编码经验，然后调用本工具输出补丁。每次调用最多 3 个补丁，优先保守、低风险。',
      parameters: {
        type: 'object' as const,
        required: ['patches', 'intent', 'risk_assessment', 'confidence'],
        properties: {
          patches: {
            type: 'array' as const,
            description: '补丁列表（最多 3 个，从保守到高风险排序）',
            items: {
              type: 'object' as const,
              required: ['file_path', 'old_snippet', 'new_snippet', 'reason', 'risk', 'domain', 'expected_gain'],
              properties: {
                file_path: { type: 'string', description: '相对路径，如 src/components/Foo.tsx' },
                old_snippet: { type: 'string', description: '原文件中出现过一次的完整代码片段（前后保留足够上下文保证唯一匹配）' },
                new_snippet: { type: 'string', description: '替换后的新代码' },
                reason: { type: 'string', description: '为什么改（一句话）' },
                risk: { type: 'number', description: '风险等级 0-1（越高越危险，>0.6 通常不执行）' },
                domain: { type: 'string', enum: ['typescript', 'react', 'css', 'performance', 'cleanup', 'other'], description: '修改领域' },
                expected_gain: { type: 'string', description: '预期收益一句话' },
                rationale: { type: 'string', description: '（可选）详细推理过程' },
              },
            },
          },
          intent: { type: 'string', description: '你推断的本次优化整体意图' },
          risk_assessment: { type: 'string', enum: ['low', 'medium', 'high'], description: '整体风险评估' },
          confidence: { type: 'number', description: '0-1 的置信度（越高越确定）' },
          validation_commands: {
            type: 'array',
            items: { type: 'string' },
            description: '建议的验证命令，如 ["npx tsc --noEmit -p tsconfig.json"]',
          },
        },
      },
    },
  },
] as const

`;export{n as default};
