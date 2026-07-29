import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useProgress } from '../../context/ProgressContext'
import { useAuth } from '../../context/AuthContext'
import LoginModal from '../LoginModal'

interface NavbarProps {
  showUserInfo?: boolean
}

function Navbar({ showUserInfo }: NavbarProps) {
  const location = useLocation()
  const { progress, syncStatus } = useProgress()
  const { auth, signOutUser } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  const isHome = location.pathname === '/'
  const displayUserInfo = showUserInfo !== undefined ? showUserInfo : !isHome

  const initials = auth?.user?.login?.slice(0, 2).toUpperCase() || 'LY'

  const renderSyncBadge = () => {
    if (!auth) return <span className="sync-badge local">本地保存</span>
    if (syncStatus === 'loading') return <span className="sync-badge loading">同步中...</span>
    if (syncStatus === 'syncing') return <span className="sync-badge loading">上传中...</span>
    if (syncStatus === 'synced') return <span className="sync-badge synced">☁️ 已同步</span>
    if (syncStatus === 'error') return <span className="sync-badge error">同步失败</span>
    return null
  }

  return (
    <>
      <nav className={`navbar ${isHome ? 'navbar-home' : 'navbar-inner'}`}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Python Quest</span>
          </Link>

          <div className="navbar-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              首页
            </Link>
            <Link to="/map" className={`nav-link ${location.pathname === '/map' ? 'active' : ''}`}>
              冒险地图
            </Link>
            <Link to="/path" className={`nav-link ${location.pathname === '/path' ? 'active' : ''}`}>
              学习路径
            </Link>
            <Link to="/achievements" className={`nav-link ${location.pathname === '/achievements' ? 'active' : ''}`}>
              成就
            </Link>
            <Link to="/leaderboard" className={`nav-link ${location.pathname === '/leaderboard' ? 'active' : ''}`}>
              排行榜
            </Link>
          </div>

          <div className="navbar-actions">
            {displayUserInfo && (
              <div className="user-info">
                <div className="xp-badge">
                  <span className="xp-icon">⭐</span>
                  <span className="xp-text">{progress.xp} / {progress.totalXP} XP</span>
                </div>
                <div className="streak-badge">
                  <span className="streak-icon">🔥</span>
                  <span className="streak-text">{progress.streak}天</span>
                </div>
                {renderSyncBadge()}
                {auth ? (
                  <a
                    className="avatar avatar-online"
                    title={`${auth.user.name || auth.user.login} (@${auth.user.login})`}
                    href={auth.user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={auth.user.avatar_url} alt={initials} />
                  </a>
                ) : (
                  <div className="avatar">
                    <span>LY</span>
                  </div>
                )}
              </div>
            )}
            {auth ? (
              <button className="btn btn-secondary btn-sm" onClick={signOutUser}>
                退出
              </button>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={() => setShowLogin(true)}>
                <span className="btn-icon">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                GitHub 登录
              </button>
            )}
          </div>
        </div>
      </nav>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}

export default Navbar
