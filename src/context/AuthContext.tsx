import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { isFirebaseEnabled, onAuthChanged, signInWithGithub, logOut } from '../config/firebase'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isFirebaseEnabled: boolean
  signIn: () => Promise<void>
  signOutUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isFirebaseEnabled()) {
      setIsLoading(false)
      return
    }
    const unsubscribe = onAuthChanged(u => {
      setUser(u)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const signIn = async () => {
    if (!isFirebaseEnabled()) {
      alert('Firebase 未配置，无法登录。请在 .env 中填写 Firebase 配置。')
      return
    }
    try {
      await signInWithGithub()
    } catch (err: any) {
      console.error('GitHub 登录失败', err)
      if (err?.code === 'auth/popup-closed-by-user') return
      alert('GitHub 登录失败：' + (err?.message || '未知错误'))
    }
  }

  const signOutUser = async () => {
    if (!isFirebaseEnabled()) return
    try {
      await logOut()
    } catch (err: any) {
      console.error('登出失败', err)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isFirebaseEnabled: isFirebaseEnabled(),
      signIn,
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
