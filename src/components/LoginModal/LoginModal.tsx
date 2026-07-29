import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import './LoginModal.css'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { signInWithToken, isLoggingIn, loginError } = useAuth()
  const [token, setToken] = useState('')
  const [showToken, setShowToken] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setToken('')
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await signInWithToken(token)
    if (ok) onClose()
  }

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
      <div className="login-modal" onClick={e => e.stopPropagation()}>
        <button className="lm-close" onClick={onClose} aria-label="关闭">×</button>

        <div className="lm-header">
          <div className="lm-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <h2 className="lm-title">使用 GitHub 登录</h2>
          <p className="lm-subtitle">连接 GitHub 账号，云端保存你的学习进度</p>
        </div>

        <form onSubmit={handleSubmit} className="lm-form">
          <div className="lm-field">
            <label className="lm-label">
              <span>Personal Access Token</span>
              <span className="lm-required">必填</span>
            </label>
            <div className="lm-input-wrap">
              <input
                type={showToken ? 'text' : 'password'}
                className="lm-input"
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                className="lm-toggle"
                onClick={() => setShowToken(s => !s)}
                aria-label={showToken ? '隐藏' : '显示'}
              >
                {showToken ? '🙈' : '👁️'}
              </button>
            </div>
            <p className="lm-hint">
              需要 Gist 权限。Token 仅保存在你的浏览器本地，不会上传到任何服务器。
            </p>
          </div>

          {loginError && (
            <div className="lm-error">
              <span>⚠️</span> {loginError}
            </div>
          )}

          <button
            type="submit"
            className="lm-submit"
            disabled={isLoggingIn || !token.trim()}
          >
            {isLoggingIn ? '连接中...' : '登录'}
          </button>
        </form>

        <div className="lm-guide">
          <details>
            <summary>📖 如何获取 Token？（点击展开）</summary>
            <ol className="lm-steps">
              <li>访问 <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noopener noreferrer">github.com/settings/tokens</a></li>
              <li>点击 <strong>Generate new token</strong> → 选择 <strong>Fine-grained</strong></li>
              <li>设置 Token 名称（如 "Python Quest"）和过期时间</li>
              <li>在 <strong>Resource owner</strong> 选择你的账号</li>
              <li>在 <strong>Repository access</strong> 中选择 <strong>All repositories</strong> 或仅特定仓库</li>
              <li>展开 <strong>Account permissions</strong>，找到 <strong>Gists</strong> 权限，设置为 <strong>Read and write</strong></li>
              <li>点击 <strong>Generate token</strong>，复制生成的 token（只显示一次！）</li>
              <li>回到这里粘贴 token 并登录</li>
            </ol>
            <div className="lm-warning">
              <strong>⚠️ 安全提示：</strong>请勿将 Token 分享给他人。退出登录或更换设备时，记得在 GitHub 设置中撤销旧 Token。
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
