import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LevelMap.css'
import { levels, currentLevelLessons } from '../../data/mockData'
import { challenges } from '../../data/lessonContent'
import { useProgress } from '../../context/ProgressContext'
import { Level, LevelCategory } from '../../types'
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  filterLevelsByCategory,
  computeCategoryProgressPercent
} from '../../config/categories'

function LevelMap() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<LevelCategory>('basic')
  const { progress, isLevelUnlocked, isLevelCompleted, isChallengeCompleted, getLevelProgress, godMode, toggleGodMode } = useProgress()

  // 所有关卡的状态
  const levelsWithStatus = useMemo(() => {
    return levels.map(level => {
      const unlocked = isLevelUnlocked(level.id)
      const completed = isLevelCompleted(level.id)
      const lp = getLevelProgress(level.id)

      let status: 'completed' | 'current' | 'locked' = 'locked'
      if (completed) status = 'completed'
      else if (unlocked) status = 'current'

      return { ...level, status, levelProgress: lp }
    })
  }, [isLevelUnlocked, isLevelCompleted, getLevelProgress])

  // 当前分类的关卡（迭代适配：复用 config/categories 共享逻辑）
  const categoryLevels = useMemo(() => {
    return filterLevelsByCategory(levelsWithStatus, activeCategory)
  }, [levelsWithStatus, activeCategory])

  // 全局进度
  const completedCount = levelsWithStatus.filter(l => l.status === 'completed').length
  const progressPercent = Math.round((completedCount / levels.length) * 100)

  // 当前分类进度（迭代适配：复用 config/categories 共享计算函数）
  const categoryProgressPercent = computeCategoryProgressPercent(categoryLevels, progress.levels)

  const renderStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < difficulty ? 'filled' : ''}`}>★</span>
    ))
  }

  const currentLevel = levelsWithStatus.find(l => l.status === 'current') || levelsWithStatus.find(l => l.status !== 'locked') || levelsWithStatus[0]
  const currentLevelId = currentLevel?.id || 4
  const levelChallenges = challenges[currentLevelId] || []
  const completedLessons = currentLevelLessons.filter(l => l.completed).length

  const handleLevelClick = (level: Level & { status: string }) => {
    if (level.status !== 'locked') {
      navigate(`/level/${level.id}`)
    }
  }

  // 当前分类的元数据
  const catMeta = CATEGORY_META[activeCategory]

  return (
    <div className="level-map-page">
      <div className="map-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
        <div className="deco-code">{`</>`}</div>
        <div className="deco-code deco-code-2">{`{ }`}</div>
      </div>

      <div className="container map-container">
        <div className="map-header">
          <div className="path-info">
            <div className="path-badge">
              <span className="path-icon">🐍</span>
              <span>Python 全景地图</span>
            </div>
            <h1 className="map-title">冒险地图</h1>
            <p className="map-subtitle">
              {completedCount} / {levels.length} 关已完成 · {CATEGORY_ORDER.length} 个主题地图
            </p>
          </div>

          <div className="map-controls">
            <div className="progress-bar-section">
              <div className="progress-info">
                <span className="progress-label">总进度</span>
                <span className="progress-percent">{progressPercent}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>

            <button
              className={`god-mode-btn ${godMode ? 'active' : ''}`}
              onClick={toggleGodMode}
              title={godMode ? '无敌模式已开启：所有关卡解锁' : '点击开启无敌模式：解锁所有关卡'}
            >
              <span className="god-mode-icon">{godMode ? '⚡' : '🔒'}</span>
              <span className="god-mode-text">{godMode ? '无敌模式' : '按进度解锁'}</span>
              <span className="god-mode-toggle">
                <span className={`toggle-slider ${godMode ? 'on' : ''}`}></span>
              </span>
            </button>
          </div>
        </div>

        {/* 分类选择器 */}
        <div className="category-tabs">
          {CATEGORY_ORDER.map(cat => {
            const meta = CATEGORY_META[cat]
            const catLevels = levelsWithStatus.filter(l => l.category === cat)
            const catDone = catLevels.filter(l => l.status === 'completed').length
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                className={`category-tab ${isActive ? 'active' : ''}`}
                style={{
                  '--cat-color': meta.color,
                  borderColor: isActive ? meta.color : undefined
                } as React.CSSProperties}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="cat-icon">{meta.icon}</span>
                <span className="cat-label">{meta.label}</span>
                <span className="cat-count" style={{ background: meta.color + '22', color: meta.color }}>
                  {catDone}/{catLevels.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* 当前分类信息 */}
        <div className="category-info-bar" style={{ borderColor: catMeta.color + '44' }}>
          <div className="cat-info-left">
            <span className="cat-info-icon" style={{ background: catMeta.color + '22' }}>{catMeta.icon}</span>
            <div>
              <h2 className="cat-info-title" style={{ color: catMeta.color }}>{catMeta.label}</h2>
              <p className="cat-info-desc">{catMeta.desc}</p>
            </div>
          </div>
          <div className="cat-info-right">
            <div className="cat-progress-mini">
              <span className="cat-progress-label">本分类进度</span>
              <span className="cat-progress-num" style={{ color: catMeta.color }}>{categoryProgressPercent}%</span>
            </div>
            <div className="cat-progress-bar">
              <div className="cat-progress-fill" style={{ width: `${categoryProgressPercent}%`, background: catMeta.color }}></div>
            </div>
          </div>
        </div>

        {/* 关卡地图 */}
        <div className="level-map-wrapper">
          <div className="level-map">
            <div className="map-line" style={{ '--line-color': catMeta.color } as React.CSSProperties}></div>

            {categoryLevels.map((level, index) => (
              <div
                key={level.id}
                className={`map-node node-${level.side} status-${level.status}`}
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() => handleLevelClick(level)}
              >
                <div className="node-dot">
                  {level.status === 'completed' && <span className="dot-check">✓</span>}
                  {level.status === 'current' && <div className="dot-pulse"></div>}
                  {level.status === 'locked' && <span className="dot-lock">🔒</span>}
                </div>

                <div className="node-card">
                  {level.status !== 'locked' ? (
                    <>
                      <div className="card-header">
                        <span className="level-number">{level.title}</span>
                        <div className="level-stars">{renderStars(level.difficulty)}</div>
                      </div>
                      <h3 className="card-title">{level.subtitle}</h3>
                      <p className="card-desc">{level.description}</p>
                      <div className="card-meta">
                        <span className="meta-item"><span className="meta-icon">📚</span>{level.lessons} 节课</span>
                        <span className="meta-item"><span className="meta-icon">⚡</span>{level.challenges} 个挑战</span>
                        <span className="meta-item"><span className="meta-icon">⏱</span>{level.duration}</span>
                      </div>
                      <div className="card-topics">
                        {level.topics.map((topic, i) => (
                          <span key={i} className="topic-tag">{topic}</span>
                        ))}
                      </div>
                      {level.status === 'current' && (
                        <>
                          <div className="current-badge">
                            <span className="pulse-dot"></span>进行中
                          </div>
                          {level.levelProgress.total > 0 && (
                            <div className="level-progress-mini">
                              <div className="level-progress-bar">
                                <div className="level-progress-fill" style={{ width: `${level.levelProgress.percent}%` }}></div>
                              </div>
                              <span className="level-progress-text">{level.levelProgress.completed}/{level.levelProgress.total}</span>
                            </div>
                          )}
                        </>
                      )}
                      {level.status === 'completed' && <div className="completed-badge-card">✓ 已完成</div>}
                    </>
                  ) : (
                    <div className="locked-content">
                      <div className="lock-icon">🔒</div>
                      <h3 className="lock-title">未解锁</h3>
                      <p className="lock-desc">{level.title}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 当前关卡详情 */}
        {currentLevel && (
          <div className="current-level-detail">
            <div className="detail-header">
              <div>
                <h2>{currentLevel.title}</h2>
                <p className="detail-subtitle">{currentLevel.subtitle}</p>
              </div>
              <Link to={`/level/${currentLevel.id}`} className="btn btn-primary">进入学习 →</Link>
            </div>

            <div className="lessons-list">
              <h3 className="list-title">📖 课程列表</h3>
              {currentLevelLessons.map((lesson, index) => (
                <div key={lesson.id} className={`lesson-item ${lesson.completed ? 'completed' : ''}`} onClick={() => navigate(`/level/${currentLevel.id}`)}>
                  <div className="lesson-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="lesson-icon">
                    {lesson.type === 'video' && '🎬'}
                    {lesson.type === 'reading' && '📖'}
                    {lesson.type === 'interactive' && '💻'}
                  </div>
                  <div className="lesson-info">
                    <h4 className="lesson-title">{lesson.title}</h4>
                    <span className="lesson-duration">{lesson.duration}</span>
                  </div>
                  <div className="lesson-status">
                    {lesson.completed ? <span className="status-completed">✓ 已完成</span> : <span className="status-current">继续学习</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="challenges-section">
              <h3 className="list-title">⚡ 编程挑战</h3>
              <div className="challenges-grid">
                {levelChallenges.length > 0 ? levelChallenges.map((challenge) => {
                  const completed = isChallengeCompleted(currentLevelId, challenge.id)
                  return (
                    <div key={challenge.id} className={`challenge-card ${completed ? 'completed' : ''}`} onClick={() => navigate(`/level/${currentLevel.id}`)}>
                      <div className="challenge-header">
                        <span className={`challenge-difficulty difficulty-${challenge.difficulty}`}>
                          {challenge.difficulty === 'easy' && '简单'}
                          {challenge.difficulty === 'medium' && '中等'}
                          {challenge.difficulty === 'hard' && '困难'}
                        </span>
                        {completed && <span className="challenge-check">✓</span>}
                      </div>
                      <h4 className="challenge-title">{challenge.title}</h4>
                    </div>
                  )
                }) : (
                  <div className="challenge-card" style={{ opacity: 0.6, cursor: 'default' }} onClick={(e) => e.preventDefault()}>
                    <div className="challenge-header">
                      <span className="challenge-difficulty difficulty-easy">即将上线</span>
                    </div>
                    <h4 className="challenge-title">🚧 本关挑战正在准备中</h4>
                  </div>
                )}
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <span className="stat-big">{completedLessons}/{currentLevelLessons.length}</span>
                  <span className="stat-small">已完成课时</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <span className="stat-big">{progress.xp}/{progress.totalXP}</span>
                  <span className="stat-small">经验值 XP</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏱</div>
                <div className="stat-content">
                  <span className="stat-big">{'>'}30 分钟</span>
                  <span className="stat-small">预计学习时间</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LevelMap
