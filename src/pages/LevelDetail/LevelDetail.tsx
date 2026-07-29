import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './LevelDetail.css'
import { levels } from '../../data/mockData'
import { lessonSteps, challenges } from '../../data/lessonContent'
import { useProgress } from '../../context/ProgressContext'
import InteractiveLesson from '../../components/InteractiveLesson'
import ChallengeArena from '../../components/ChallengeArena'
import { usePyodide } from '../../context/PyodideContext'
import { runoobTopics, categoryLabels, categoryColors } from '../../data/runoobTopics'

type TabType = 'learn' | 'challenges' | 'notes'

function LevelDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabType>('learn')
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null)
  const { isLoading: pyodideLoading, error: pyodideError, retryLoad } = usePyodide()
  
  const { 
    progress, 
    isChallengeCompleted,
    isLevelUnlocked,
    completeLesson,
    completeChallenge,
    getLevelProgress
  } = useProgress()

  const levelId = parseInt(id || '4')
  const level = levels.find(l => l.id === levelId) || levels[3]
  const unlocked = isLevelUnlocked(levelId)
  const levelProgress = getLevelProgress(levelId)
  
  const currentLessonSteps = lessonSteps[levelId] || []
  const currentChallenges = challenges[levelId] || []

  const completedChallenges = currentChallenges.filter(c => 
    isChallengeCompleted(levelId, c.id)
  ).length

  const renderStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < difficulty ? 'filled' : ''}`}>★</span>
    ))
  }

  const handleLessonComplete = () => {
    completeLesson(levelId, 1)
  }

  const handleChallengeComplete = (challengeId: number, xpReward: number) => {
    completeChallenge(levelId, challengeId, xpReward)
    setActiveChallenge(null)
  }

  if (!unlocked) {
    return (
      <div className="level-detail-page">
        <div className="container detail-container">
          <button className="back-btn" onClick={() => navigate('/map')}>
            <span>←</span> 返回地图
          </button>
          <div className="locked-page">
            <div className="lock-icon-big">🔒</div>
            <h2>关卡未解锁</h2>
            <p>完成前一关的所有课程和挑战后即可解锁此关卡</p>
            <button className="btn btn-primary" onClick={() => navigate('/map')}>
              返回地图
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="level-detail-page">
      {pyodideError && (
        <div className="pyodide-error">
          <span className="error-icon">⚠️</span>
          <span>Python运行环境加载失败，代码执行功能暂不可用</span>
          <button className="retry-btn" onClick={retryLoad}>重试</button>
        </div>
      )}

      {pyodideLoading && !pyodideError && (
        <div className="pyodide-loading-banner">
          <div className="loading-spinner-small"></div>
          <span>正在加载Python运行环境...</span>
        </div>
      )}

      <div className="container detail-container">
        <button className="back-btn" onClick={() => navigate('/map')}>
          <span>←</span> 返回地图
        </button>

        <div className="level-header">
          <div className="level-info">
            <div className="level-badge">
              <span className="badge-icon">🐍</span>
              <span>Python 进阶 · 第 {level.id} 关</span>
            </div>
            <h1 className="level-title">{level.title}</h1>
            <p className="level-desc">{level.description}</p>
            
            <div className="level-meta">
              <div className="meta-item">
                <span className="meta-icon">📚</span>
                <span>{currentLessonSteps.length} 个学习步骤</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⚡</span>
                <span>{currentChallenges.length} 个挑战</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱</span>
                <span>{level.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span>难度 {renderStars(level.difficulty)}</span>
              </div>
            </div>

            <div className="level-progress">
              <div className="progress-info">
                <span>本关进度</span>
                <span className="progress-text">
                  {levelProgress.completed}/{levelProgress.total} 完成 · {levelProgress.percent}%
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${levelProgress.percent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="level-actions">
            <button 
              className="btn btn-primary btn-lg continue-btn"
              onClick={() => setActiveTab('learn')}
            >
              ▶ 开始学习
            </button>
            <div className="xp-display">
              <span className="xp-icon">⭐</span>
              <span className="xp-value">{progress.xp} XP</span>
            </div>
          </div>
        </div>

        <div className="topics-section">
          <h3 className="section-title-sm">📋 本关知识点</h3>
          <div className="topics-tags">
            {level.topics.map((topic, i) => (
              <span key={i} className="topic-chip">{topic}</span>
            ))}
          </div>
        </div>

        <div className="runoob-section">
          <div className="runoob-header">
            <h3 className="section-title-sm">
              <span className="runoob-logo">📚</span>
              Python / 数据科学 · 拓展学习路径
            </h3>
            <span className="runoob-source">风格借鉴自菜鸟教程</span>
          </div>
          <p className="runoob-intro">
            完成当前关卡后，可以挑战更多 Python 生态方向。本页展示的扩展主题按难度递进，建议先打通主线关卡再探索。
          </p>
          <div className="runoob-grid">
            {runoobTopics.map(topic => (
              <div
                key={topic.id}
                className={`runoob-card ${topic.unlocked ? 'unlocked' : 'locked'}`}
                style={{ '--topic-color': categoryColors[topic.category] } as React.CSSProperties}
                onClick={() => {
                  if (topic.unlocked && topic.href) {
                    const match = topic.href.match(/#\/level\/(\d+)/)
                    if (match) navigate(`/level/${match[1]}`)
                  }
                }}
                role={topic.unlocked && topic.href ? 'button' : undefined}
              >
                <div className="runoob-card-icon">
                  <span className="runoob-icon-emoji">{topic.icon}</span>
                </div>
                <div className="runoob-card-body">
                  <div className="runoob-card-header">
                    <h4 className="runoob-card-title">【{topic.name.replace('学习 ', '')}】</h4>
                    <span
                      className="runoob-card-category"
                      style={{ background: categoryColors[topic.category] + '22', color: categoryColors[topic.category] }}
                    >
                      {categoryLabels[topic.category]}
                    </span>
                  </div>
                  <p className="runoob-card-desc">{topic.description}</p>
                  <div className="runoob-card-footer">
                    <span className="runoob-difficulty">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className={`runoob-dot ${i < topic.difficulty ? 'filled' : ''}`}>●</span>
                      ))}
                    </span>
                    {!topic.unlocked && (
                      <span className="runoob-lock-badge">🔒 待解锁</span>
                    )}
                    {topic.unlocked && (
                      <span className="runoob-go-badge">进入学习 →</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-tabs">
          <button 
            className={`tab-btn ${activeTab === 'learn' ? 'active' : ''}`}
            onClick={() => { setActiveTab('learn'); setActiveChallenge(null); }}
          >
            📖 互动学习
            <span className="tab-count">{currentLessonSteps.length}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'challenges' ? 'active' : ''}`}
            onClick={() => { setActiveTab('challenges'); setActiveChallenge(null); }}
          >
            ⚡ 编程挑战
            <span className="tab-count">{completedChallenges}/{currentChallenges.length}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => { setActiveTab('notes'); setActiveChallenge(null); }}
          >
            📝 学习笔记
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'learn' && (
            <div className="learn-tab-content">
              {currentLessonSteps.length > 0 ? (
                <InteractiveLesson 
                  title={level.title}
                  steps={currentLessonSteps}
                  onComplete={handleLessonComplete}
                />
              ) : (
                <div className="empty-state">
                  <p>暂无学习内容</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="challenges-tab-content">
              {activeChallenge ? (
                <div>
                  <button 
                    className="back-to-challenges"
                    onClick={() => setActiveChallenge(null)}
                  >
                    ← 返回挑战列表
                  </button>
                  {(() => {
                    const challenge = currentChallenges.find(c => c.id === activeChallenge)
                    if (!challenge) return null
                    return (
                      <ChallengeArena
                        title={challenge.title}
                        description={challenge.description}
                        difficulty={challenge.difficulty}
                        initialCode={challenge.initialCode}
                        testCode={challenge.testCode}
                        testCases={challenge.testCases}
                        xpReward={challenge.xpReward}
                        onComplete={() => handleChallengeComplete(challenge.id, challenge.xpReward)}
                      />
                    )
                  })()}
                </div>
              ) : (
                <div className="challenges-list">
                  <div className="challenges-header">
                    <h3>编程挑战</h3>
                    <p>完成以下挑战来巩固所学知识，获得经验值奖励</p>
                  </div>
                  <div className="challenges-grid">
                    {currentChallenges.map((challenge, index) => {
                      const completed = isChallengeCompleted(levelId, challenge.id)
                      return (
                        <div 
                          key={challenge.id} 
                          className={`challenge-card ${completed ? 'completed' : ''}`}
                          onClick={() => setActiveChallenge(challenge.id)}
                        >
                          <div className="challenge-card-header">
                            <span className="challenge-number">挑战 {index + 1}</span>
                            <span className={`challenge-diff diff-${challenge.difficulty}`}>
                              {challenge.difficulty === 'easy' && '🟢 简单'}
                              {challenge.difficulty === 'medium' && '🟡 中等'}
                              {challenge.difficulty === 'hard' && '🔴 困难'}
                            </span>
                          </div>
                          <h4 className="challenge-card-title">{challenge.title}</h4>
                          <p className="challenge-card-desc">{challenge.description.substring(0, 80)}...</p>
                          <div className="challenge-card-footer">
                            <span className="xp-reward-badge">⭐ +{challenge.xpReward} XP</span>
                            {completed && <span className="completed-check">✓ 已完成</span>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="notes-content">
              <div className="notes-placeholder">
                <div className="notes-icon">📝</div>
                <h3>学习笔记</h3>
                <p>记录你的学习心得和重要知识点</p>
                <textarea 
                  className="notes-textarea"
                  placeholder="在这里记录你的笔记..."
                  rows={10}
                />
                <button className="btn btn-primary">
                  保存笔记
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LevelDetail
