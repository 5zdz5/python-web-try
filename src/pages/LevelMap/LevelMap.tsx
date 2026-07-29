import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LevelMap.css'
import { levels, currentLevelLessons, currentLevelChallenges } from '../../data/mockData'
import { challenges } from '../../data/lessonContent'
import { useProgress } from '../../context/ProgressContext'
import { Level } from '../../types'

function LevelMap() {
  const navigate = useNavigate()
  const [selectedLevel, setSelectedLevel] = useState<Level>(levels[3])
  const { progress, isLevelUnlocked, isLevelCompleted, isChallengeCompleted, getLevelProgress } = useProgress()

  const levelsWithStatus = useMemo(() => {
    return levels.map(level => {
      const unlocked = isLevelUnlocked(level.id)
      const completed = isLevelCompleted(level.id)
      const lp = getLevelProgress(level.id)

      let status: 'completed' | 'current' | 'locked' = 'locked'
      if (completed) {
        status = 'completed'
      } else if (unlocked) {
        status = 'current'
      }

      return { ...level, status, levelProgress: lp }
    })
  }, [isLevelUnlocked, isLevelCompleted, getLevelProgress])

  const completedCount = levelsWithStatus.filter(l => l.status === 'completed').length
  const progressPercent = Math.round((completedCount / levels.length) * 100)

  const renderStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < difficulty ? 'filled' : ''}`}>★</span>
    ))
  }

  const currentLevel = levelsWithStatus.find(l => l.status === 'current') || levelsWithStatus.find(l => l.status !== 'locked') || levelsWithStatus[0]
  const currentLevelId = currentLevel.id
  
  const levelChallenges = challenges[currentLevelId] || []

  const completedLessons = currentLevelLessons.filter(l => l.completed).length

  const handleLevelClick = (level: Level & { status: string }) => {
    if (level.status !== 'locked') {
      setSelectedLevel(level)
      navigate(`/level/${level.id}`)
    }
  }

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
              <span>Python 进阶</span>
            </div>
            <h1 className="map-title">冒险地图</h1>
            <p className="map-subtitle">
              完成 {completedCount} 个关卡，共 {levels.length} 关 · 解锁你的 Python 技能
            </p>
          </div>

          <div className="progress-bar-section">
            <div className="progress-info">
              <span className="progress-label">学习进度</span>
              <span className="progress-percent">{progressPercent}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="level-map-wrapper">
          <div className="level-map">
            <div className="map-line"></div>
            
            {levelsWithStatus.map((level, index) => (
              <div 
                key={level.id} 
                className={`map-node node-${level.side} status-${level.status}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleLevelClick(level)}
              >
                <div className="node-dot">
                  {level.status === 'completed' && (
                    <span className="dot-check">✓</span>
                  )}
                  {level.status === 'current' && (
                    <div className="dot-pulse"></div>
                  )}
                  {level.status === 'locked' && (
                    <span className="dot-lock">🔒</span>
                  )}
                </div>

                <div className={`node-card ${selectedLevel.id === level.id ? 'selected' : ''}`}>
                  {level.status !== 'locked' ? (
                    <>
                      <div className="card-header">
                        <span className="level-number">{level.title}</span>
                        <div className="level-stars">
                          {renderStars(level.difficulty)}
                        </div>
                      </div>
                      <h3 className="card-title">{level.subtitle}</h3>
                      <p className="card-desc">{level.description}</p>
                      <div className="card-meta">
                        <span className="meta-item">
                          <span className="meta-icon">📚</span>
                          {level.lessons} 节课
                        </span>
                        <span className="meta-item">
                          <span className="meta-icon">⚡</span>
                          {level.challenges} 个挑战
                        </span>
                        <span className="meta-item">
                          <span className="meta-icon">⏱</span>
                          {level.duration}
                        </span>
                      </div>
                      <div className="card-topics">
                        {level.topics.map((topic, i) => (
                          <span key={i} className="topic-tag">{topic}</span>
                        ))}
                      </div>
                      {level.status === 'current' && (
                        <>
                          <div className="current-badge">
                            <span className="pulse-dot"></span>
                            进行中
                          </div>
                          {level.levelProgress.total > 0 && (
                            <div className="level-progress-mini">
                              <div className="level-progress-bar">
                                <div
                                  className="level-progress-fill"
                                  style={{ width: `${level.levelProgress.percent}%` }}
                                ></div>
                              </div>
                              <span className="level-progress-text">
                                {level.levelProgress.completed}/{level.levelProgress.total}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                      {level.status === 'completed' && (
                        <div className="completed-badge-card">
                          ✓ 已完成
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="locked-content">
                      <div className="lock-icon">🔒</div>
                      <h3 className="lock-title">未解锁</h3>
                      <p className="lock-desc">完成前一关后解锁此关卡</p>
                      <div className="lock-hint">
                        需要完成：{levelsWithStatus[index - 1]?.title}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentLevel && (
          <div className="current-level-detail">
            <div className="detail-header">
              <div>
                <h2>{currentLevel.title}</h2>
                <p className="detail-subtitle">
                  掌握 {currentLevel.subtitle}，学会使用循环的核心结构
                </p>
              </div>
              <Link to={`/level/${currentLevel.id}`} className="btn btn-primary">
                进入学习 →
              </Link>
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
                    {lesson.completed ? (
                      <span className="status-completed">✓ 已完成</span>
                    ) : (
                      <span className="status-current">继续学习</span>
                    )}
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
                }) : currentLevelChallenges.map(challenge => (
                  <div key={challenge.id} className={`challenge-card ${challenge.completed ? 'completed' : ''}`} onClick={() => navigate(`/level/${currentLevel.id}`)}>
                    <div className="challenge-header">
                      <span className={`challenge-difficulty difficulty-${challenge.difficulty}`}>
                        {challenge.difficulty === 'easy' && '简单'}
                        {challenge.difficulty === 'medium' && '中等'}
                        {challenge.difficulty === 'hard' && '困难'}
                      </span>
                      {challenge.completed && <span className="challenge-check">✓</span>}
                    </div>
                    <h4 className="challenge-title">{challenge.title}</h4>
                  </div>
                ))}
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
