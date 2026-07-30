import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import { levels } from '../../data/mockData'
import { lessonSteps, challenges } from '../../data/lessonContent'
import './LearningPath.css'
import { useMonitor } from '../../context/MonitorContext'

function formatTimeAgo(timestamp: string) {
  const diff = Date.now() - new Date(timestamp).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}小时前`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}天前`
  return new Date(timestamp).toLocaleDateString('zh-CN')
}

function LearningPath() {
  const { registerGroup } = useMonitor()
  const navigate = useNavigate()
  const { progress, stats, getLevelProgress, getOverallProgress, getRecentActivities } = useProgress()

  useEffect(() => {
    registerGroup('LearningPath', '学习路径', 'pages/LearningPath/LearningPath.tsx')
  }, [registerGroup])

  const overall = getOverallProgress()
  const recent = getRecentActivities(20)

  // 计算最近 7 天的学习日历
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().slice(0, 10)
  })

  // 关卡摘要
  const levelSummary = levels.map(lv => {
    const lp = getLevelProgress(lv.id)
    const lessonCount = lessonSteps[lv.id]?.length || 0
    const challengeCount = challenges[lv.id]?.length || 0
    return {
      ...lv,
      ...lp,
      lessonCount,
      challengeCount,
      total: lessonCount + challengeCount,
      unlocked: lv.status !== 'locked'
    }
  })

  // 计算路径完成率
  const xpToNextLevel = 500
  const currentLevel = Math.floor(progress.totalXP / xpToNextLevel) + 1
  const xpInLevel = progress.totalXP % xpToNextLevel
  const levelProgressPercent = Math.round((xpInLevel / xpToNextLevel) * 100)

  // 计算用户等级标题
  const levelTitles = ['编程小白', '初学者', '进阶学徒', '熟练开发者', '资深工程师', 'Python 大师', '传奇程序员']
  const userTitle = levelTitles[Math.min(currentLevel - 1, levelTitles.length - 1)]

  return (
    <div className="learning-path-page">
      <div className="path-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
      </div>

      <div className="container path-container">
        <div className="path-header">
          <div className="header-info">
            <div className="badge">
              <span className="badge-icon">📈</span>
              <span>学习路径</span>
            </div>
            <h1 className="page-title">我的学习进度</h1>
            <p className="page-subtitle">追踪每一次成长，赢取每一个徽章</p>
          </div>
        </div>

        {/* 用户等级卡片 */}
        <div className="user-level-card">
          <div className="user-avatar-lg">
            <span>LY</span>
            <div className="avatar-ring"></div>
          </div>
          <div className="user-info-block">
            <div className="user-title-row">
              <h2 className="user-name">冒险者 LY</h2>
              <span className="user-level-badge">Lv.{currentLevel} {userTitle}</span>
            </div>
            <div className="level-progress-block">
              <div className="level-progress-info">
                <span>{xpInLevel} / {xpToNextLevel} XP</span>
                <span>距下一级还需 {xpToNextLevel - xpInLevel} XP</span>
              </div>
              <div className="level-progress-bar">
                <div className="level-progress-fill" style={{ width: `${levelProgressPercent}%` }}></div>
              </div>
            </div>
            <div className="user-tags">
              <span className="user-tag">⚡ 速度学习者</span>
              <span className="user-tag">🎯 挑战爱好者</span>
            </div>
          </div>
        </div>

        {/* 概览数据 */}
        <div className="overview-grid">
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>⭐</div>
            <div className="ov-info">
              <div className="ov-value">{progress.totalXP}</div>
              <div className="ov-label">累计经验值</div>
              <div className="ov-hint">+{progress.xp} 可用</div>
            </div>
          </div>
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>🔥</div>
            <div className="ov-info">
              <div className="ov-value">{progress.streak} 天</div>
              <div className="ov-label">连续学习</div>
              <div className="ov-hint">保持节奏</div>
            </div>
          </div>
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>📚</div>
            <div className="ov-info">
              <div className="ov-value">{stats.completedLessons}</div>
              <div className="ov-label">完成学习</div>
              <div className="ov-hint">课时统计</div>
            </div>
          </div>
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}>⚔️</div>
            <div className="ov-info">
              <div className="ov-value">{stats.completedChallenges}</div>
              <div className="ov-label">完成挑战</div>
              <div className="ov-hint">挑战统计</div>
            </div>
          </div>
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>🚪</div>
            <div className="ov-info">
              <div className="ov-value">{stats.completedLevels} / {stats.totalLevels}</div>
              <div className="ov-label">通关进度</div>
              <div className="ov-hint">{overall.percent}% 完成</div>
            </div>
          </div>
          <div className="overview-card">
            <div className="ov-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>🏆</div>
            <div className="ov-info">
              <div className="ov-value">{progress.unlockedAchievements.length}</div>
              <div className="ov-label">解锁成就</div>
              <div className="ov-hint">查看全部 →</div>
            </div>
          </div>
        </div>

        <div className="path-main">
          {/* 学习日历 */}
          <div className="path-card calendar-card">
            <h3 className="card-title">📅 最近 7 天学习</h3>
            <div className="calendar-week">
              {last7Days.map(date => {
                const studied = progress.studyDays?.includes(date)
                const isToday = date === new Date().toISOString().slice(0, 10)
                const dayLabel = new Date(date).toLocaleDateString('zh-CN', { weekday: 'short' })
                return (
                  <div
                    key={date}
                    className={`cal-day ${studied ? 'studied' : ''} ${isToday ? 'today' : ''}`}
                    title={date}
                  >
                    <div className="cal-day-label">{dayLabel}</div>
                    <div className="cal-day-cell">
                      {studied && <span className="cal-check">✓</span>}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="calendar-foot">
              <span>已连续学习 <strong>{progress.streak}</strong> 天</span>
            </div>
          </div>

          {/* 关卡路径 */}
          <div className="path-card levels-card">
            <h3 className="card-title">🗺️ 学习路径</h3>
            <div className="levels-progress">
              {levelSummary.map((lv, idx) => {
                const isLast = idx === levelSummary.length - 1
                return (
                  <div
                    key={lv.id}
                    className={`path-level ${lv.completed ? 'completed' : ''} ${lv.unlocked ? 'unlocked' : 'locked'}`}
                    onClick={() => lv.unlocked && navigate(`/level/${lv.id}`)}
                  >
                    <div className="pl-node">
                      {lv.completed ? <span>✓</span> : <span>{lv.id}</span>}
                    </div>
                    <div className="pl-content">
                      <div className="pl-title">{lv.subtitle}</div>
                      <div className="pl-meta">
                        <span>{lv.completed}/{lv.total}</span>
                        <span>{lv.percent}%</span>
                      </div>
                      <div className="pl-bar">
                        <div className="pl-fill" style={{ width: `${lv.percent}%` }}></div>
                      </div>
                    </div>
                    {!isLast && <div className={`pl-line ${lv.completed ? 'completed' : ''}`}></div>}
                  </div>
                )
              })}
            </div>
          </div>

          {/* 活动流 */}
          <div className="path-card activity-card">
            <h3 className="card-title">🕐 最近活动</h3>
            {recent.length > 0 ? (
              <div className="activity-list">
                {recent.map(item => (
                  <div key={item.id} className="activity-item">
                    <div className="act-icon">{item.icon}</div>
                    <div className="act-body">
                      <div className="act-title">{item.title}</div>
                      <div className="act-desc">{item.description}</div>
                    </div>
                    <div className="act-meta">
                      {item.xp && <span className="act-xp">+{item.xp} XP</span>}
                      <span className="act-time">{formatTimeAgo(item.timestamp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>还没有活动记录，开始学习吧 🚀</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPath
