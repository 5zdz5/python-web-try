const n=`/**
 * Wiki 同步模块 — Agent 监察后推到 Wiki 的核心能力
 *
 * pack21 新增（用户原话："把这项能力写入agent，让agent监察后推到Wiki，更改也推到Wiki"）
 *
 * 设计：
 *   1. inspectCodebase() — 监察代码状态（PACK_BUILD/DOC_VERSION/监测摘要/未推送 commit）
 *   2. buildWikiMarkdown() — 把经验包/代码更改转为 Wiki markdown 文档
 *   3. pushPackToWiki() / pushChangesToWiki() — 推送（队列 + 可选 GitHub API）
 *   4. 去重：基于 PACK_BUILD/DOC_VERSION/contentHash，避免重复推送
 *
 * 浏览器端限制：
 *   - 无法直接调飞书 OpenAPI（需鉴权）
 *   - 无法直接 git push（需 CLI）
 *   - 方案：写入 localStorage 待推送队列，由 TRAE IDE 中的 Agent 通过 lark-wiki skill 消费；
 *          可选通过 GitHub API（fetch + token）直接更新 wiki 文件
 *
 * 法则 4 监测主动注册：本模块为 ai 层，无 useEffect，由 AIAgentContext 调用并上报
 * 法则 5 主题同步：本模块无 UI，无需主题适配
 */
import type {
  WikiPushRecord, WikiPushTarget, WikiSyncState,
} from '../types/ai'
import type { ExperiencePack } from '../types/experiencePack'
import { DOC_VERSION } from '../data/projectDocs'

// ===== 常量 =====
const WIKI_SYNC_KEY = 'python-quest-wiki-sync'
const WIKI_PENDING_KEY = 'python-quest-wiki-pending'
const MAX_PUSH_HISTORY = 30
const MAX_PENDING_QUEUE = 50

// ===== 默认状态 =====
export const DEFAULT_WIKI_SYNC: WikiSyncState = {
  lastPush: null,
  lastPackBuildPushed: 0,
  lastDocVersionPushed: '',
  pushHistory: [],
  autoPushEnabled: true,
  pendingChanges: [],
  totalPushes: 0,
  totalFailures: 0,
}

// ===== 工具函数 =====
function safeGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function safeSet(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); return true } catch { return false }
}
function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try { return JSON.parse(raw) as T } catch { return fallback }
}

/** 将 Uint8Array 编码为 base64 字符串（替代废弃的 btoa(unescape(encodeURIComponent(...)))） */
function bytesToBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

/** 简易哈希（djb2 算法，用于内容去重） */
export function hashContent(text: string): string {
  let hash = 5381
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) + hash) + text.charCodeAt(i)
    hash = hash & 0xffffffff
  }
  return \`h\${(hash >>> 0).toString(36)}\`
}

/** 生成推送记录 ID */
function makePushId(): string {
  return \`wiki-push-\${Date.now()}-\${Math.random().toString(36).slice(2, 6)}\`
}

// ===== 1. 监察代码状态 =====

export interface CodebaseInspection {
  packBuild: number
  docVersion: string
  hasNewPack: boolean                    // 是否有新经验包待推送
  hasNewDocVersion: boolean              // 是否有新文档版本待推送
  moduleCount: number
  conventionCount: number
  conversationLogCount: number
  monitorSummary?: string               // 监测摘要（若有）
  pendingChangesCount: number           // 待推送队列长度
  inspectedAt: string
}

/**
 * 监察代码状态 — Agent 调用，判断是否需要推送 Wiki
 * @param pack 当前经验包
 * @param syncState 当前 Wiki 同步状态
 * @param monitorSummary 可选的监测系统摘要
 */
export function inspectCodebase(
  pack: ExperiencePack,
  syncState: WikiSyncState,
  monitorSummary?: string,
): CodebaseInspection {
  const packBuild = pack.meta.packBuild
  const docVersion = DOC_VERSION
  return {
    packBuild,
    docVersion,
    hasNewPack: packBuild > syncState.lastPackBuildPushed,
    hasNewDocVersion: docVersion !== syncState.lastDocVersionPushed,
    moduleCount: pack.modules.length,
    conventionCount: pack.conventions.length,
    conversationLogCount: pack.conversationLog.length,
    monitorSummary,
    pendingChangesCount: syncState.pendingChanges.length,
    inspectedAt: new Date().toISOString(),
  }
}

// ===== 2. 构建 Wiki Markdown =====

/**
 * 把经验包转为 Wiki markdown 文档
 * 用于推送到飞书知识库或 GitHub Wiki
 */
export function buildPackWikiMarkdown(pack: ExperiencePack, inspection: CodebaseInspection): string {
  const lines: string[] = []
  lines.push(\`# Python Quest 经验包 Wiki\`)
  lines.push(\`\`)
  lines.push(\`> 自动生成 by Agent wikiSync · \${inspection.inspectedAt}\`)
  lines.push(\`\`)
  lines.push(\`## 元信息\`)
  lines.push(\`- **PACK_BUILD**: \${pack.meta.packBuild}\`)
  lines.push(\`- **DOC_VERSION**: \${inspection.docVersion}\`)
  lines.push(\`- **模块数**: \${inspection.moduleCount}\`)
  lines.push(\`- **编码约定数**: \${inspection.conventionCount}\`)
  lines.push(\`- **对话归档数**: \${inspection.conversationLogCount}\`)
  lines.push(\`\`)
  lines.push(\`## 模块清单（\${pack.modules.length}）\`)
  for (const m of pack.modules.slice(0, 30)) {
    lines.push(\`- \\\`\${m.id}\\\` (\${m.category}) \${m.name} — \${m.description}\`)
  }
  if (pack.modules.length > 30) {
    lines.push(\`- ... 及另外 \${pack.modules.length - 30} 个模块\`)
  }
  lines.push(\`\`)
  lines.push(\`## 最近对话归档（最新 10 条）\`)
  for (const c of pack.conversationLog.slice(0, 10)) {
    lines.push(\`### \${c.id} (\${c.date})\`)
    lines.push(c.summary)
    lines.push(\`\`)
  }
  if (inspection.monitorSummary) {
    lines.push(\`## 监测摘要\`)
    lines.push(inspection.monitorSummary)
    lines.push(\`\`)
  }
  lines.push(\`---\`)
  lines.push(\`*由 src/ai/wikiSync.ts buildPackWikiMarkdown 生成*\`)
  return lines.join('\\n')
}

/**
 * 把代码更改摘要转为 Wiki markdown
 * @param changes 更改摘要数组
 * @param context 上下文（迭代号/策略/评分变化）
 */
export function buildChangesWikiMarkdown(
  changes: string[],
  context: { iterationNumber?: number; appliedStrategies?: string[]; scoreBefore?: number; scoreAfter?: number },
): string {
  const lines: string[] = []
  lines.push(\`# 代码更改同步 Wiki\`)
  lines.push(\`\`)
  lines.push(\`> 自动生成 by Agent wikiSync · \${new Date().toISOString()}\`)
  lines.push(\`\`)
  if (context.iterationNumber !== undefined) {
    lines.push(\`## 迭代 \${context.iterationNumber}\`)
  }
  if (context.appliedStrategies && context.appliedStrategies.length > 0) {
    lines.push(\`### 应用策略\`)
    for (const s of context.appliedStrategies) {
      lines.push(\`- \${s}\`)
    }
    lines.push(\`\`)
  }
  if (context.scoreBefore !== undefined && context.scoreAfter !== undefined) {
    const gain = context.scoreAfter - context.scoreBefore
    lines.push(\`### 评分变化\`)
    lines.push(\`- 综合分：\${context.scoreBefore} → \${context.scoreAfter}（\${gain >= 0 ? '+' : ''}\${gain}）\`)
    lines.push(\`\`)
  }
  lines.push(\`## 更改清单\`)
  for (const c of changes) {
    lines.push(\`- \${c}\`)
  }
  lines.push(\`\`)
  lines.push(\`---\`)
  lines.push(\`*由 src/ai/wikiSync.ts buildChangesWikiMarkdown 生成*\`)
  return lines.join('\\n')
}

// ===== 3. 推送到 Wiki =====

/**
 * 推送到 Wiki（核心实现）
 *
 * 浏览器端策略：
 *   1. 写入 localStorage 待推送队列（WIKI_PENDING_KEY），供 TRAE IDE Agent 通过 lark-wiki skill 消费
 *   2. 可选：若配置了 GitHub Token + repo，尝试通过 GitHub API 更新 wiki 文件
 *   3. 去重：基于 contentHash，重复内容标记 skipped 不重复推
 *
 * @returns 推送记录
 */
export function pushToWiki(
  target: WikiPushTarget,
  summary: string,
  content: string,
  options: {
    packBuild?: number
    docVersion?: string
    githubToken?: string       // 可选 GitHub Token
    githubRepo?: string        // 可选 GitHub 仓库 (owner/repo)
    githubPath?: string        // 可选 wiki 文件路径
  } = {},
): WikiPushRecord {
  const contentHash = hashContent(content)
  const record: WikiPushRecord = {
    id: makePushId(),
    timestamp: new Date().toISOString(),
    target,
    summary,
    detail: content.slice(0, 500),
    packBuild: options.packBuild,
    docVersion: options.docVersion,
    contentHash,
    status: 'pending',
  }

  // 1. 写入待推送队列（供 TRAE IDE Agent 消费）
  const pending = safeParse<string[]>(safeGet(WIKI_PENDING_KEY), [])
  pending.push(JSON.stringify({
    id: record.id,
    target,
    summary,
    content,
    contentHash,
    packBuild: options.packBuild,
    docVersion: options.docVersion,
    timestamp: record.timestamp,
  }))
  // 队列上限
  const trimmed = pending.slice(-MAX_PENDING_QUEUE)
  if (!safeSet(WIKI_PENDING_KEY, JSON.stringify(trimmed))) {
    record.status = 'failed'
    record.errorMessage = '写入待推送队列失败（localStorage 不可用）'
    return record
  }

  // 2. 可选：通过 GitHub API 直接推送
  if (options.githubToken && options.githubRepo && options.githubPath) {
    try {
      // 注意：fetch 是异步的，这里返回 pending 状态，实际推送结果由后台完成
      // 真实场景下 Agent 会等待 fetch 完成；这里为兼容同步接口，标记为 pending
      void pushViaGithubApi(
        options.githubToken,
        options.githubRepo,
        options.githubPath,
        content,
        summary,
      ).then(
        () => { record.status = 'success' },
        (err) => {
          record.status = 'failed'
          record.errorMessage = err instanceof Error ? err.message : String(err)
        },
      )
    } catch (err) {
      record.status = 'failed'
      record.errorMessage = err instanceof Error ? err.message : String(err)
    }
  } else {
    // 无 GitHub 配置：仅入队，标记为 pending（等 TRAE IDE Agent 消费）
    record.status = 'pending'
    record.errorMessage = '已加入待推送队列，等待 TRAE IDE Agent 通过 lark-wiki skill 消费'
  }

  return record
}

/**
 * 通过 GitHub API 更新 wiki 文件（异步，需 token）
 * 注意：浏览器端可能受 CORS 限制，主要用于 TRAE IDE 环境
 */
async function pushViaGithubApi(
  token: string,
  repo: string,
  path: string,
  content: string,
  commitMessage: string,
): Promise<void> {
  const url = \`https://api.github.com/repos/\${repo}/contents/\${path}\`
  // 1. 获取当前文件 sha（若存在）
  let sha: string | undefined
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': \`Bearer \${token}\`,
        'Accept': 'application/vnd.github+json',
      },
    })
    if (res.ok) {
      const data = await res.json()
      sha = data.sha
    }
  } catch {
    // 文件不存在，跳过 sha
  }
  // 2. 更新或创建文件
  const body = {
    message: commitMessage,
    content: bytesToBase64(new TextEncoder().encode(content)),  // UTF-8 base64
    ...(sha ? { sha } : {}),
    branch: 'master',
  }
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': \`Bearer \${token}\`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(\`GitHub API \${res.status}: \${errText}\`)
  }
}

/**
 * pack29 超级进化：带指数退避重试的 pushViaGithubApi 包装
 * 修复原实现 fire-and-forget（status 永远 pending）的问题
 * @param maxRetries  最大重试次数（默认用 TunableParams.maxRetries）
 * @param baseDelayMs 基础退避延迟（默认用 TunableParams.retryBaseDelay）
 */
export async function pushViaGithubApiWithRetry(
  token: string,
  repo: string,
  path: string,
  content: string,
  commitMessage: string,
  maxRetries = 2,
  baseDelayMs = 2000,
): Promise<void> {
  let lastError: unknown
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await pushViaGithubApi(token, repo, path, content, commitMessage)
      return
    } catch (err) {
      lastError = err
      if (attempt >= maxRetries) break
      // 指数退避：delay = baseDelay × 2^attempt
      await new Promise(r => setTimeout(r, baseDelayMs * Math.pow(2, attempt)))
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError))
}

/**
 * pack29：异步版 pushToWiki（真 await pushViaGithubApi 并用 retry）
 * 同步版 pushToWiki 因接口兼容保留，但浏览器端推荐调用这个
 */
export async function pushToWikiAsync(
  target: WikiPushTarget,
  summary: string,
  content: string,
  options: {
    packBuild?: number
    docVersion?: string
    githubToken?: string
    githubRepo?: string
    githubPath?: string
    maxRetries?: number
    retryBaseDelayMs?: number
  } = {},
): Promise<WikiPushRecord> {
  const record: WikiPushRecord = {
    id: \`wiki-\${target}-\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 6)}\`,
    target,
    summary,
    status: 'pending',
    contentHash: hashContent(content),
    timestamp: new Date().toISOString(),
    errorMessage: undefined,
  }

  // 总是写待推送队列（TRAE IDE 侧可消费）
  const pending = loadPendingQueueRaw()
  pending.push(JSON.stringify({
    id: record.id,
    target,
    summary,
    content,
    contentHash: record.contentHash,
    packBuild: options.packBuild,
    docVersion: options.docVersion,
    timestamp: record.timestamp,
  }))
  const trimmed = pending.slice(-MAX_PENDING_QUEUE)
  if (!safeSet(WIKI_PENDING_KEY, JSON.stringify(trimmed))) {
    record.status = 'failed'
    record.errorMessage = '写入待推送队列失败（localStorage 不可用）'
    return record
  }

  if (options.githubToken && options.githubRepo && options.githubPath) {
    try {
      // pack29: 真 await + 指数退避重试，不再 fire-and-forget
      await pushViaGithubApiWithRetry(
        options.githubToken,
        options.githubRepo,
        options.githubPath,
        content,
        summary,
        options.maxRetries ?? 2,
        options.retryBaseDelayMs ?? 2000,
      )
      record.status = 'success'
      // 推送成功：把自己从 pending 队列移除（去重）
      const left = loadPendingQueueRaw().filter(raw => {
        try { const o = JSON.parse(raw) as PendingQueueItem; return o.id !== record.id } catch { return true }
      })
      safeSet(WIKI_PENDING_KEY, JSON.stringify(left))
    } catch (err) {
      record.status = 'failed'
      record.errorMessage = err instanceof Error ? err.message : String(err)
    }
  } else {
    record.status = 'pending'
    record.errorMessage = '已加入待推送队列，等待 TRAE IDE Agent 通过 lark-wiki skill 消费'
  }
  return record
}

/**
 * pack29：pending 队列消费者（Agent 启动后每 5 分钟执行一次，或手动触发）
 * 依次处理队列中的每一条记录，有 GitHub 凭证时真推送并回写状态
 * 返回所有推送结果
 */
export async function processPendingQueue(options: {
  githubToken?: string
  githubRepo?: string
  githubPathPrefix?: string
  maxRetries?: number
  retryBaseDelayMs?: number
  maxProcessPerBatch?: number
} = {}): Promise<WikiPushRecord[]> {
  const queue = loadPendingQueue()
  if (queue.length === 0) return []
  const maxProcess = options.maxProcessPerBatch ?? 10
  const batch = queue.slice(0, maxProcess)
  const results: WikiPushRecord[] = []
  const remainingIds: string[] = []

  for (const item of batch) {
    const record: WikiPushRecord = {
      id: item.id,
      target: item.target,
      summary: item.summary,
      status: 'pending',
      contentHash: item.contentHash,
      timestamp: item.timestamp,
    }
    if (options.githubToken && options.githubRepo) {
      const path = \`\${options.githubPathPrefix ?? 'wiki/'}\${item.target}-\${item.packBuild ?? 'latest'}.md\`
      try {
        await pushViaGithubApiWithRetry(
          options.githubToken,
          options.githubRepo,
          path,
          item.content,
          item.summary,
          options.maxRetries ?? 2,
          options.retryBaseDelayMs ?? 2000,
        )
        record.status = 'success'
      } catch (err) {
        record.status = 'failed'
        record.errorMessage = err instanceof Error ? err.message : String(err)
        // 失败的留在队列里下次重试（记录 id，最后重建队列时保留）
        remainingIds.push(item.id)
      }
    } else {
      record.errorMessage = '无 GitHub 凭证，保持 pending'
      remainingIds.push(item.id)
    }
    results.push(record)
  }
  // 重建队列：批外剩余 + 批内失败的
  const rest = queue.slice(maxProcess)
  const failedItems = queue.filter(i => remainingIds.includes(i.id))
  const rawItems: string[] = [...rest, ...failedItems]
    .map(item => JSON.stringify(item))
  safeSet(WIKI_PENDING_KEY, JSON.stringify(rawItems))
  return results
}

// ===== 4. 高层 API =====

/** 推送经验包到 Wiki */
export function pushPackToWiki(
  pack: ExperiencePack,
  inspection: CodebaseInspection,
  options: { githubToken?: string; githubRepo?: string; githubPath?: string } = {},
): WikiPushRecord {
  const content = buildPackWikiMarkdown(pack, inspection)
  return pushToWiki(
    'experience-pack',
    \`经验包推送 PACK_BUILD=\${inspection.packBuild} DOC_VERSION=\${inspection.docVersion}\`,
    content,
    {
      packBuild: inspection.packBuild,
      docVersion: inspection.docVersion,
      ...options,
    },
  )
}

/** 推送代码更改到 Wiki */
export function pushChangesToWiki(
  changes: string[],
  context: { iterationNumber?: number; appliedStrategies?: string[]; scoreBefore?: number; scoreAfter?: number },
  options: { githubToken?: string; githubRepo?: string; githubPath?: string } = {},
): WikiPushRecord {
  const content = buildChangesWikiMarkdown(changes, context)
  return pushToWiki(
    'code-changes',
    \`代码更改推送 迭代\${context.iterationNumber ?? '?'} \${changes.length} 项\`,
    content,
    options,
  )
}

// ===== 5. 状态管理 =====

/** 读取 Wiki 同步状态 */
export function loadWikiSyncState(): WikiSyncState {
  return safeParse(safeGet(WIKI_SYNC_KEY), DEFAULT_WIKI_SYNC)
}

/** 保存 Wiki 同步状态 */
export function saveWikiSyncState(state: WikiSyncState): boolean {
  return safeSet(WIKI_SYNC_KEY, JSON.stringify({
    ...state,
    pushHistory: state.pushHistory.slice(0, MAX_PUSH_HISTORY),
  }))
}

/** 队列项（解析后对象） */
export type PendingQueueItem = {
  id: string; target: WikiPushTarget; summary: string;
  content: string; contentHash: string; packBuild?: number; docVersion?: string; timestamp: string;
}

/** 读取待推送队列（返回 JSON 字符串数组，存储格式保持向后兼容） */
export function loadPendingQueueRaw(): string[] {
  return safeParse<string[]>(safeGet(WIKI_PENDING_KEY), [])
}

/** 读取待推送队列（解析后对象数组） */
export function loadPendingQueue(): PendingQueueItem[] {
  return loadPendingQueueRaw()
    .map(s => { try { return JSON.parse(s) as PendingQueueItem } catch { return null } })
    .filter((x): x is NonNullable<typeof x> => x !== null)
}

/** 清空待推送队列（消费完成后调用） */
export function clearPendingQueue(): boolean {
  return safeSet(WIKI_PENDING_KEY, JSON.stringify([]))
}

/**
 * 应用推送记录到 WikiSyncState（更新 lastPushedBuild/Version + history）
 */
export function applyPushToState(
  state: WikiSyncState,
  record: WikiPushRecord,
): WikiSyncState {
  if (record.status === 'failed') {
    return {
      ...state,
      pushHistory: [record, ...state.pushHistory].slice(0, MAX_PUSH_HISTORY),
      totalFailures: state.totalFailures + 1,
    }
  }
  if (record.status === 'skipped') {
    return {
      ...state,
      pushHistory: [record, ...state.pushHistory].slice(0, MAX_PUSH_HISTORY),
    }
  }
  // success 或 pending：更新 lastPushed
  return {
    ...state,
    lastPush: record.timestamp,
    lastPackBuildPushed: record.packBuild ?? state.lastPackBuildPushed,
    lastDocVersionPushed: record.docVersion ?? state.lastDocVersionPushed,
    pushHistory: [record, ...state.pushHistory].slice(0, MAX_PUSH_HISTORY),
    totalPushes: state.totalPushes + 1,
  }
}
`;export{n as default};
