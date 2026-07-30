import { useState, useMemo, useEffect } from 'react'
import { useProgress } from '../../context/ProgressContext'
import { achievements, achievementCategories, rarityConfig } from '../../data/achievements'
import './Achievements.css'
import { useMonitor } from '../../context/MonitorContext'

function Achievements() {
  const { registerGroup } = useMonitor()
  const { progress, stats, isAchievementUnlocked, isAchievementClaimed, claimAchievement } = useProgress()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  useEffect(() => {
    registerGroup('Achievements', '成就殿堂', 'pages/Achievements/Achievements.tsx')
  }, [registerGroup])

  const totalUnlocked = progress.unlockedAchievements.length
  const totalAchievements = achievements.length
  const unlockedPercent = Math.round((totalUnlocked / totalAchievements) * 100)

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return achievements
    return achievements.filter(a => a.category === activeCategory)
  }, [activeCategory])

  const unlockedList = achievements.filter(a => isAchievementUnlocked(a.id))
  const lockedList = achievements.filter(a => !isAchievementUnlocked(a.id))

  return (
    <div className="achievements-page">
      <div className="achievements-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
        <div className="deco-circle deco-3"></div>
      </div>

      <div className="container achievements-container">
        <div className="achievements-header">
          <div className="header-info">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span>成就系统</span>
            </div>
            <h1 className="page-title">成就殿堂</h1>
            <p className="page-subtitle">解锁成就，赢得荣耀徽章，赢取经验值奖励</p>
          </div>

          <div className="header-stats">
            <div className="h-stat-card">
              <div className="h-stat-icon">🎖️</div>
              <div className="h-stat-info">
                <div className="h-stat-value">{totalUnlocked} / {totalAchievements}</div>
                <div className="h-stat-label">已解锁成就</div>
              </div>
            </div>
            <div className="h-stat-card">
              <div className="h-stat-icon">⭐</div>
              <div className="h-stat-info">
                <div className="h-stat-value">{progress.totalXP}</div>
                <div className="h-stat-label">累计 XP</div>
              </div>
            </div>
            <div className="h-stat-card">
              <div className="h-stat-icon">🔥</div>
              <div className="h-stat-info">
                <div className="h-stat-value">{progress.streak} 天</div>
                <div className="h-stat-label">连续学习</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overall-progress-card">
          <div className="overall-info">
            <span className="overall-label">成就解锁进度</span>
            <span className="overall-percent">{unlockedPercent}%</span>
          </div>
          <div className="overall-bar">
            <div className="overall-fill" style={{ width: `${unlockedPercent}%` }}></div>
          </div>
        </div>

        <div className="category-tabs">
          {achievementCategories.map(cat => (
            <button
              key={cat.id}
              className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {unlockedList.length > 0 && activeCategory === 'all' && (
          <div className="achievements-section">
            <h2 className="section-title">✨ 已解锁 ({unlockedList.length})</h2>
            <div className="achievements-grid">
              {unlockedList.map(ach => {
                const claimed = isAchievementClaimed(ach.id)
                const r = rarityConfig[ach.rarity]
                const progressInfo = ach.progress ? ach.progress(stats) : null
                return (
                  <div
                    key={ach.id}
                    className={`achievement-card unlocked rarity-${ach.rarity} ${claimed ? 'claimed' : ''}`}
                    style={{ borderColor: r.color, background: r.bg }}
                  >
                    <div className="ach-glow" style={{ background: r.color }}></div>
                    <div className="ach-icon" style={{ color: r.color }}>{ach.icon}</div>
                    <div className="ach-content">
                      <div className="ach-header">
                        <h3 className="ach-title">{ach.title}</h3>
                        <span className="ach-rarity" style={{ background: r.color }}>{r.label}</span>
                      </div>
                      <p className="ach-desc">{ach.description}</p>
                      {progressInfo && progressInfo.total > 1 && (
                        <div className="ach-progress">
                          <div className="ach-progress-bar">
                            <div
                              className="ach-progress-fill"
                              style={{
                                width: `${(progressInfo.current / progressInfo.total) * 100}%`,
                                background: r.color
                              }}
                            ></div>
                          </div>
                          <span className="ach-progress-text">
                            {progressInfo.current} / {progressInfo.total}
                          </span>
                        </div>
                      )}
                      <div className="ach-footer">
                        <span className="ach-xp">+{ach.xpReward} XP</span>
                        {claimed ? (
                          <span className="ach-claimed">✓ 已领取</span>
                        ) : (
                          <button
                            className="ach-claim-btn"
                            style={{ background: r.color }}
                            onClick={() => claimAchievement(ach.id)}
                          >
                            领取奖励
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="achievements-section">
          <h2 className="section-title">
            {activeCategory === 'all' ? '🔒 待解锁' : `${achievementCategories.find(c => c.id === activeCategory)?.icon} ${achievementCategories.find(c => c.id === activeCategory)?.label}类成就`}
          </h2>
          <div className="achievements-grid">
            {(activeCategory === 'all' ? lockedList : filtered).map(ach => {
              const r = rarityConfig[ach.rarity]
              const progressInfo = ach.progress ? ach.progress(stats) : null
              return (
                <div
                  key={ach.id}
                  className={`achievement-card locked rarity-${ach.rarity}`}
                  style={{ borderColor: r.color, background: r.bg }}
                >
                  <div className="ach-icon" style={{ color: r.color, filter: 'grayscale(50%) opacity(0.6)' }}>{ach.icon}</div>
                  <div className="ach-content">
                    <div className="ach-header">
                      <h3 className="ach-title">{ach.title}</h3>
                      <span className="ach-rarity" style={{ background: r.color }}>{r.label}</span>
                    </div>
                    <p className="ach-desc">{ach.description}</p>
                    {progressInfo && (
                      <div className="ach-progress">
                        <div className="ach-progress-bar">
                          <div
                            className="ach-progress-fill"
                            style={{
                              width: `${(progressInfo.current / progressInfo.total) * 100}%`,
                              background: r.color
                            }}
                          ></div>
                        </div>
                        <span className="ach-progress-text">
                          {progressInfo.current} / {progressInfo.total}
                        </span>
                      </div>
                    )}
                    <div className="ach-footer">
                      <span className="ach-xp">+{ach.xpReward} XP</span>
                      <span className="ach-locked-label">🔒 未解锁</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {filtered.length === 0 && (
            <div className="empty-state">
              <p>该分类暂无成就</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Achievements
