const n=`// GitHub 集成：用户使用 GitHub Personal Access Token 登录
// 数据保存在用户的 Gist 中（云端持久化）
// Token 存储在 localStorage，跨设备需用户自行复制 Token

const GIST_FILENAME = 'python-quest-progress.json'
const GIST_DESCRIPTION = 'Python Quest 学习进度备份'
const FETCH_TIMEOUT = 15000
const MAX_RETRIES = 2
const RETRY_DELAY = 2000

export interface GithubUser {
  login: string
  id: number
  avatar_url: string
  name: string
  email: string
  bio: string
  public_repos: number
  followers: number
  html_url: string
}

export interface AuthState {
  token: string
  user: GithubUser
  gistId: string | null
}

const TOKEN_KEY = 'python-quest-github-token'
const USER_KEY = 'python-quest-github-user'
const GIST_ID_KEY = 'python-quest-gist-id'

export function loadAuth(): AuthState | null {
  try {
    const token = localStorage.getItem(TOKEN_KEY)
    const userStr = localStorage.getItem(USER_KEY)
    const gistId = localStorage.getItem(GIST_ID_KEY)
    if (!token || !userStr) return null
    return { token, user: JSON.parse(userStr), gistId }
  } catch {
    return null
  }
}

export function saveAuth(state: AuthState) {
  try {
    localStorage.setItem(TOKEN_KEY, state.token)
    localStorage.setItem(USER_KEY, JSON.stringify(state.user))
    if (state.gistId) localStorage.setItem(GIST_ID_KEY, state.gistId)
    else localStorage.removeItem(GIST_ID_KEY)
  } catch {
    /* localStorage 不可用或已满，静默降级 */
  }
}

export function clearAuth() {
  try {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(GIST_ID_KEY)
  } catch {
    /* localStorage 不可用，静默降级 */
  }
}

export class GithubApiError extends Error {
  status: number
  constructor(message: string, status: number = 0) {
    super(message)
    this.status = status
  }
}

export function isNetworkError(err: unknown): boolean {
  if (err instanceof GithubApiError) return err.status === 0
  if (err instanceof TypeError) return true
  const msg = err instanceof Error ? err.message : String(err)
  return msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('AbortError') || msg.includes('timeout')
}

async function githubFetch<T>(url: string, token: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT)

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': \`Bearer \${token}\`,
        'X-GitHub-Api-Version': '2022-11-28',
        ...(options.headers || {})
      }
    })

    if (!res.ok) {
      const text = await res.text()
      throw new GithubApiError(\`GitHub API \${res.status}: \${text}\`, res.status)
    }
    return res.json() as Promise<T>
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new GithubApiError('请求超时（网络不稳定）', 0)
    }
    throw err
  } finally {
    clearTimeout(timer)
  }
}

async function withRetry<T>(fn: () => Promise<T>, opName: string): Promise<T> {
  let lastErr: unknown
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastErr = err
      if (attempt < MAX_RETRIES && isNetworkError(err)) {
        const delay = RETRY_DELAY * Math.pow(2, attempt)
        console.warn(\`\${opName} 第 \${attempt + 1} 次失败，\${delay}ms 后重试...\`)
        await new Promise(resolve => setTimeout(resolve, delay))
      } else {
        break
      }
    }
  }
  throw lastErr
}

export async function verifyToken(token: string): Promise<GithubUser> {
  return withRetry(() => githubFetch<GithubUser>('https://api.github.com/user', token), '验证Token')
}

export async function findOrCreateGist(token: string): Promise<string> {
  try {
    const gists = await withRetry(
      () => githubFetch<any[]>('https://api.github.com/gists?per_page=100', token),
      '查询Gist'
    )
    const existing = gists.find(g => g.files && g.files[GIST_FILENAME])
    if (existing) return existing.id
  } catch (err) {
    if (!isNetworkError(err)) {
      throw err
    }
  }

  const created = await withRetry(
    () => githubFetch<any>('https://api.github.com/gists', token, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: GIST_DESCRIPTION,
        public: false,
        files: {
          [GIST_FILENAME]: {
            content: JSON.stringify({ initialized: true, savedAt: new Date().toISOString() })
          }
        }
      })
    }),
    '创建Gist'
  )
  return created.id
}

export async function readGist(token: string, gistId: string): Promise<any | null> {
  try {
    const gist = await withRetry(
      () => githubFetch<any>(\`https://api.github.com/gists/\${gistId}\`, token),
      '读取Gist'
    )
    const file = gist.files?.[GIST_FILENAME]
    if (!file) return null
    return JSON.parse(file.content)
  } catch (err) {
    console.warn('读取 Gist 失败', err)
    return null
  }
}

export async function writeGist(token: string, gistId: string, data: any): Promise<void> {
  await withRetry(
    () => githubFetch<any>(\`https://api.github.com/gists/\${gistId}\`, token, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: {
          [GIST_FILENAME]: {
            content: JSON.stringify(data, null, 2)
          }
        }
      })
    }),
    '写入Gist'
  )
}

export async function testGistAccess(token: string): Promise<boolean> {
  try {
    await withRetry(
      () => githubFetch<any>('https://api.github.com/gists?per_page=1', token),
      '测试Gist访问'
    )
    return true
  } catch {
    return false
  }
}
`;export{n as default};
