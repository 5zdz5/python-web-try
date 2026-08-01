const e=`/**
 * 蚕食关卡化展示页面
 *
 * 归属层：pages/（路由级页面，符合法则1分层归属决策）
 * 功能：展示蚕食按钮爬取并关卡化后的内容，用户可点击关卡查看学习步骤
 * 监测：useEffect 中 registerGroup + reportHealth（法则4）
 * 主题：CSS 变量 + 像素风升起动画（法则5）
 */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NibbleLevels.css'
import NibbleButton from '../../components/NibbleButton'
import { useMonitor } from '../../context/MonitorContext'
import { useTheme } from '../../context/ThemeContext'
import type { NibbleResult, NibbleLevel } from '../../data/nibbleLevels'

function NibbleLevels() {
  const { registerGroup, reportHealth } = useMonitor()
  const { themeId } = useTheme()
  const [result, setResult] = useState<NibbleResult | null>(null)
  const [activeLevel, setActiveLevel] = useState<NibbleLevel | null>(null)
  const [currentStepIdx, setCurrentStepIdx] = useState(0)

  const isPixelTheme = themeId === 'pixel-spectrum' || themeId === 'pixel-crow'

  // 法则4：监测主动注册
  useEffect(() => {
    registerGroup('NibbleLevels', '蚕食关卡化页面', 'src/pages/NibbleLevels/NibbleLevels.tsx')
    reportHealth('NibbleLevels', 'healthy', '页面挂载成功')
  }, [registerGroup, reportHealth])

  const handleNibbleDone = (r: NibbleResult) => {
    setResult(r)
    setActiveLevel(null)
    setCurrentStepIdx(0)
    reportHealth('NibbleLevels', 'healthy', \`生成 \${r.levels.length} 关卡\`)
  }

  const openLevel = (lv: NibbleLevel) => {
    setActiveLevel(lv)
    setCurrentStepIdx(0)
  }

  const nextStep = () => {
    if (activeLevel && currentStepIdx < activeLevel.steps.length - 1) {
      setCurrentStepIdx((i) => i + 1)
    }
  }
  const prevStep = () => {
    if (currentStepIdx > 0) setCurrentStepIdx((i) => i - 1)
  }

  return (
    <div className="nibble-page">
      {/* Hero */}
      <section className={\`nibble-hero \${isPixelTheme ? 'pixel-rise-container' : ''}\`}>
        <div className="container nibble-hero-content">
          <div className={\`nibble-badge \${isPixelTheme ? 'pixel-rise-tall' : 'animate-fade-in'}\`}>
            <span>🕷️ Scrapling 蚕食爬取</span>
          </div>
          <h1 className={\`nibble-title \${isPixelTheme ? 'pixel-rise-tall' : 'animate-fade-in delay-100'}\`}>
            <span className="title-gradient">蚕食网页 → 关卡化学习</span>
          </h1>
          <p className={\`nibble-subtitle \${isPixelTheme ? 'pixel-rise-tall' : 'animate-fade-in delay-200'}\`}>
            输入任意教程网址，自动爬取内容并拆解为可学习的关卡与挑战
          </p>
          <div className={\`nibble-hero-actions \${isPixelTheme ? 'pixel-rise-tall' : 'animate-fade-in delay-300'}\`}>
            <NibbleButton onNibbleDone={handleNibbleDone} />
          </div>
        </div>
      </section>

      {/* 结果展示 */}
      {result && (
        <section className="nibble-result-section container">
          {/* 源信息卡片 */}
          <div className="nibble-source-card pixel-card-3d">
            <div className="nibble-source-head">
              <span className="nibble-source-icon">📄</span>
              <div className="nibble-source-meta">
                <h2 className="nibble-source-title">{result.sourceTitle}</h2>
                <a href={result.sourceUrl} target="_blank" rel="noopener noreferrer" className="nibble-source-url">
                  {result.sourceUrl}
                </a>
              </div>
            </div>
            <div className="nibble-source-stats">
              <div className="nibble-stat">
                <span className="nibble-stat-val">{result.levels.length}</span>
                <span className="nibble-stat-label">关卡</span>
              </div>
              <div className="nibble-stat">
                <span className="nibble-stat-val">{result.totalSteps}</span>
                <span className="nibble-stat-label">学习步骤</span>
              </div>
              <div className="nibble-stat">
                <span className="nibble-stat-val">{result.totalChallenges}</span>
                <span className="nibble-stat-label">挑战</span>
              </div>
            </div>
          </div>

          {/* 关卡列表 + 详情 */}
          <div className="nibble-levels-layout">
            {/* 左侧关卡列表 */}
            <div className="nibble-levels-list">
              <h3 className="nibble-list-title">📚 关卡列表</h3>
              {result.levels.map((lv) => (
                <button
                  key={lv.id}
                  type="button"
                  className={\`nibble-level-card \${activeLevel?.id === lv.id ? 'active' : ''}\`}
                  onClick={() => openLevel(lv)}
                >
                  <div className="nlc-head">
                    <span className="nlc-num">第 {lv.id} 关</span>
                    <span className="nlc-diff">
                      {'★'.repeat(lv.difficulty)}
                      {'☆'.repeat(5 - lv.difficulty)}
                    </span>
                  </div>
                  <div className="nlc-title">{lv.title}</div>
                  <div className="nlc-desc">{lv.description.slice(0, 80)}</div>
                  <div className="nlc-meta">
                    <span>⏱ {lv.duration}</span>
                    <span>📖 {lv.steps.length} 步</span>
                    {lv.challenges.length > 0 && <span>🎯 {lv.challenges.length} 挑战</span>}
                  </div>
                </button>
              ))}
            </div>

            {/* 右侧关卡详情 */}
            <div className="nibble-level-detail">
              {!activeLevel ? (
                <div className="nibble-empty">
                  <span className="nibble-empty-icon">👈</span>
                  <p>点击左侧任一关卡开始学习</p>
                </div>
              ) : (
                <div className="nibble-step-viewer">
                  <div className="nibble-step-header">
                    <h3 className="nibble-step-title">{activeLevel.title}</h3>
                    <div className="nibble-step-progress">
                      {currentStepIdx + 1} / {activeLevel.steps.length}
                    </div>
                  </div>

                  {/* 步骤指示器（法则3：数据驱动渲染，可点击跳转） */}
                  <div className="nibble-step-indicators">
                    {activeLevel.steps.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        className={\`nibble-step-dot \${idx === currentStepIdx ? 'active' : ''} \${idx < currentStepIdx ? 'done' : ''}\`}
                        onClick={() => setCurrentStepIdx(idx)}
                        title={s.title}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* 当前步骤内容 */}
                  {activeLevel.steps[currentStepIdx] && (
                    <div className="nibble-step-content">
                      <div className="nibble-step-content-title">
                        <span className="nibble-step-type-tag">{typeLabel(activeLevel.steps[currentStepIdx].type)}</span>
                        {activeLevel.steps[currentStepIdx].title}
                      </div>
                      <div className="nibble-step-content-body">
                        {activeLevel.steps[currentStepIdx].content.split('\\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      {activeLevel.steps[currentStepIdx].code && (
                        <div className="nibble-step-code-block">
                          <div className="nibble-code-head">
                            <span className="nibble-code-lang">代码</span>
                            <button
                              type="button"
                              className="nibble-copy-btn"
                              onClick={() => {
                                navigator.clipboard?.writeText(activeLevel.steps[currentStepIdx].code || '')
                              }}
                            >
                              复制
                            </button>
                          </div>
                          <pre className="nibble-step-code">
                            <code>{activeLevel.steps[currentStepIdx].code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 导航按钮 */}
                  <div className="nibble-step-nav">
                    <button
                      type="button"
                      className="nibble-nav-btn"
                      onClick={prevStep}
                      disabled={currentStepIdx === 0}
                    >
                      ← 上一步
                    </button>
                    <button
                      type="button"
                      className="nibble-nav-btn nibble-nav-next"
                      onClick={nextStep}
                      disabled={currentStepIdx >= activeLevel.steps.length - 1}
                    >
                      下一步 →
                    </button>
                  </div>

                  {/* 关卡挑战 */}
                  {activeLevel.challenges.length > 0 && (
                    <div className="nibble-challenges">
                      <h4 className="nibble-challenges-title">🎯 本关挑战</h4>
                      {activeLevel.challenges.map((ch) => (
                        <div key={ch.id} className="nibble-challenge-card">
                          <div className="ncc-head">
                            <span className="ncc-title">{ch.title}</span>
                            <span className={\`ncc-diff ncc-diff-\${ch.difficulty}\`}>{ch.difficulty}</span>
                          </div>
                          <p className="ncc-desc">{ch.description}</p>
                          <pre className="ncc-code"><code>{ch.initialCode}</code></pre>
                          <p className="ncc-hint">💡 {ch.hint}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 底部返回 */}
      <div className="nibble-footer">
        <Link to="/" className="nibble-back-btn">← 返回首页</Link>
        <Link to="/map" className="nibble-back-btn">前往关卡地图 →</Link>
      </div>
    </div>
  )
}

function typeLabel(type: string): string {
  const map: Record<string, string> = {
    explanation: '📖 讲解',
    example: '💡 示例',
    practice: '✏️ 练习',
    quiz: '❓ 测验',
    exercise: '🎯 实战',
  }
  return map[type] || type
}

export default NibbleLevels
`;export{e as default};
