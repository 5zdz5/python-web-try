import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  loadAuth, saveAuth, clearAuth, verifyToken, findOrCreateGist,
  testGistAccess, AuthState
} from '../config/github'

interface AuthContextType {
  auth: AuthState | null
  isLoading: boolean
  isLoggingIn: boolean
  loginError: string
  signInWithToken: (token: string) => Promise<boolean>
  signOutUser: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    // 启动时尝试从 localStorage 恢复登录态
    const cached = loadAuth()
    if (cached) {
      setAuth(cached)
      // 静默校验 token 是否还有效
      testGistAccess(cached.token)
        .then(ok => {
          if (!ok) {
            clearAuth()
            setAuth(null)
          }
        })
        .catch(() => {
          // 网络错误保留本地状态
        })
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [])

  const signInWithToken = async (token: string) => {
    setIsLoggingIn(true)
    setLoginError('')
    try {
      const trimmed = token.trim()
      if (!trimmed) {
        setLoginError('请输入 Token')
        return false
      }
      // 1. 验证 token
      const user = await verifyToken(trimmed)
      // 2. 创建或查找 Gist
      const gistId = await findOrCreateGist(trimmed)
      const state: AuthState = { token: trimmed, user, gistId }
      saveAuth(state)
      setAuth(state)
      return true
    } catch (err: any) {
      console.error('登录失败', err)
      const msg = err?.message || ''
      if (msg.includes('401')) {
        setLoginError('Token 无效或已过期，请重新生成')
      } else if (msg.includes('403')) {
        setLoginError('Token 权限不足，请勾选 Gist 权限')
      } else if (msg.includes('network') || err instanceof TypeError) {
        setLoginError('网络错误，请检查是否能访问 github.com')
      } else {
        setLoginError('登录失败：' + (msg || '未知错误'))
      }
      return false
    } finally {
      setIsLoggingIn(false)
    }
  }

  const signOutUser = () => {
    clearAuth()
    setAuth(null)
    setLoginError('')
  }

  return (
    <AuthContext.Provider value={{
      auth,
      isLoading,
      isLoggingIn,
      loginError,
      signInWithToken,
      signOutUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
