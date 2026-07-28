import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useProgress } from '../../context/ProgressContext'

interface NavbarProps {
  showUserInfo?: boolean
}

function Navbar({ showUserInfo }: NavbarProps) {
  const location = useLocation()
  const { progress } = useProgress()
  const isHome = location.pathname === '/'
  const displayUserInfo = showUserInfo !== undefined ? showUserInfo : !isHome

  return (
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
              <div className="avatar">
                <span>LY</span>
              </div>
            </div>
          )}
          <Link to="/map" className="btn btn-primary btn-sm">
            开始学习
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
