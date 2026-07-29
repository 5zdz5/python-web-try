// GitHub 集成：用户使用 GitHub Personal Access Token 登录
// 数据保存在用户的 Gist 中（云端持久化）
// Token 存储在 localStorage，跨设备需用户自行复制 Token

const GIST_FILENAME = 'python-quest-progress.json'
const GIST_DESCRIPTION = 'Python Quest 学习进度备份'

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
  localStorage.setItem(TOKEN_KEY, state.token)
  localStorage.setItem(USER_KEY, JSON.stringify(state.user))
  if (state.gistId) localStorage.setItem(GIST_ID_KEY, state.gistId)
  else localStorage.removeItem(GIST_ID_KEY)
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(GIST_ID_KEY)
}

async function githubFetch<T>(url: string, token: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {})
    }
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`GitHub API ${res.status}: ${text}`)
  }
  return res.json() as Promise<T>
}

export async function verifyToken(token: string): Promise<GithubUser> {
  return githubFetch<GithubUser>('https://api.github.com/user', token)
}

export async function findOrCreateGist(token: string): Promise<string> {
  // 查找现有 Gist
  try {
    const gists = await githubFetch<any[]>('https://api.github.com/gists?per_page=100', token)
    const existing = gists.find(g => g.files && g.files[GIST_FILENAME])
    if (existing) return existing.id
  } catch (err) {
    console.warn('查询 Gist 失败', err)
  }

  // 创建新 Gist
  const created = await githubFetch<any>('https://api.github.com/gists', token, {
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
  })
  return created.id
}

export async function readGist(token: string, gistId: string): Promise<any | null> {
  try {
    const gist = await githubFetch<any>(`https://api.github.com/gists/${gistId}`, token)
    const file = gist.files?.[GIST_FILENAME]
    if (!file) return null
    return JSON.parse(file.content)
  } catch (err) {
    console.warn('读取 Gist 失败', err)
    return null
  }
}

export async function writeGist(token: string, gistId: string, data: any): Promise<void> {
  await githubFetch<any>(`https://api.github.com/gists/${gistId}`, token, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(data, null, 2)
        }
      }
    })
  })
}

export async function testGistAccess(token: string): Promise<boolean> {
  try {
    await githubFetch<any>('https://api.github.com/gists?per_page=1', token)
    return true
  } catch {
    return false
  }
}
