/**
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
import type { LLMConfig } from '../types/ai'

/** LLM 消息角色 */
export type LLMRole = 'system' | 'user' | 'assistant'

/** LLM 消息 */
export interface LLMMessage {
  role: LLMRole
  content: string
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
        console.warn(`[LLM] ${opName} 第 ${attempt + 1} 次失败，${delay}ms 后重试...`)
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

  const baseUrl = config.baseUrl.replace(/\/+$/, '') // 去掉尾部斜杠
  const url = `${baseUrl}/chat/completions`
  const timeout = options.timeout ?? config.timeout ?? DEFAULT_TIMEOUT
  const temperature = options.temperature ?? config.temperature ?? 0.7
  const maxTokens = options.maxTokens ?? config.maxTokens ?? 2000

  // JSON 模式：在 system 消息末尾追加指令
  const finalMessages = options.jsonMode
    ? messages.map((m, i) =>
        i === 0 && m.role === 'system'
          ? { ...m, content: `${m.content}\n\n重要：你必须只返回合法的 JSON，不要包含任何 markdown 代码块标记或额外文字。` }
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
        'Authorization': `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      const isRetryable = res.status >= 500 || res.status === 429
      throw new LLMClientError(
        `LLM API ${res.status}: ${text.slice(0, 200)}`,
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
      throw new LLMClientError(`LLM 请求超时（${timeout}ms）`, 0, true)
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
  const codeBlockMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/)
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
      `LLM 返回的内容无法解析为 JSON: ${parseErr instanceof Error ? parseErr.message : String(parseErr)}\n前200字符: ${raw.content.slice(0, 200)}`,
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
      message: `连接成功（模型: ${raw.model}）`,
      model: raw.model,
    }
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : String(err),
    }
  }
}
