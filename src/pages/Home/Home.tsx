import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import VersionHistory from '../../components/VersionHistory'
import { CURRENT_VERSION, getCurrentVersionInfo } from '../../config/versionManager'
import { levels } from '../../data/mockData'
import { runoobTopics } from '../../data/runoobTopics'
import { useMonitor } from '../../context/MonitorContext'
import { getWebIntegratedSkills, getInstalledSkillCount } from '../../config/installedSkills'

function Home() {
  const { registerGroup } = useMonitor()
  const [showVersionHistory, setShowVersionHistory] = useState(false)
  const versionInfo = getCurrentVersionInfo()

  useEffect(() => {
    registerGroup('Home', '首页', 'pages/Home/Home.tsx')
  }, [registerGroup])

  // 自动计算统计数据（迭代新增关卡/卡片时自动更新）
  const { totalLevels, totalChallenges, totalTopics, totalCategories, skillCount } = useMemo(() => {
    const totalLevels = levels.length
    const totalChallenges = levels.reduce((s, l) => s + (l.challenges || 0), 0)
    const totalTopics = runoobTopics.length
    const categorySet = new Set(levels.map((l) => l.category))
    const totalCategories = categorySet.size
    const skillCount = getInstalledSkillCount()
    return { totalLevels, totalChallenges, totalTopics, totalCategories, skillCount }
  }, [])

  // 动态获取有 Web 入口的 skill（主页按钮自动渲染，新增 skill 无需改这里）
  const webSkills = useMemo(() => getWebIntegratedSkills(), [])

  const stats = [
    { value: String(totalLevels), label: '大关卡' },
    { value: String(totalChallenges) + '+', label: '编程挑战' },
    { value: String(totalTopics), label: '主题卡片' },
    { value: String(totalCategories) + ' 类', label: '课程分类' },
    { value: String(skillCount), label: '已装Skill' }
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-bg-decorations">
          <div className="floating-element elem-1"></div>
          <div className="floating-element elem-2"></div>
          <div className="floating-element elem-3"></div>
          <div className="code-symbol code-1">{`</>`}</div>
          <div className="code-symbol code-2">{`{ }`}</div>
          <div className="code-symbol code-3">🐍</div>
        </div>

        <div className="container hero-content">
          <div className="hero-badge animate-fade-in">
            <span>🎮 游戏化学习</span>
          </div>
          
          <h1 className="hero-title animate-fade-in delay-100">
            <span className="title-gradient">Python Quest</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in delay-200">
            通过 {totalLevels} 大关卡、{totalChallenges}+ 编程挑战，从零到英雄独立完成项目
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <Link to="/map" className="btn btn-primary btn-lg">
              开始冒险
            </Link>
            {webSkills.map(skill => {
              if (skill.webIntegration.type === 'route') {
                return (
                  <Link key={skill.id} to={skill.webIntegration.path} className="btn btn-secondary btn-lg">
                    <span className="btn-icon">{skill.icon}</span>
                    {skill.buttonText}
                  </Link>
                )
              }
              if (skill.webIntegration.type === 'external-href') {
                return (
                  <a
                    key={skill.id}
                    href={skill.webIntegration.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    <span className="btn-icon">{skill.icon}</span>
                    {skill.buttonText}
                  </a>
                )
              }
              return null
            })}
          </div>

          <div className="hero-stats animate-fade-in delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">为什么选择 Python Quest？</h2>
          <p className="section-subtitle">游戏化学习，让编程变得有趣又高效</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>闯关式学习</h3>
              <p>{totalLevels}大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>实战挑战</h3>
              <p>{totalChallenges}+编程挑战，边学边练，在实践中真正掌握Python编程技能。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>成就系统</h3>
              <p>XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>进度追踪</h3>
              <p>可视化学习地图，清晰展示学习进度，让成长之路一目了然。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>准备好开始你的编程冒险了吗？</h2>
            <p>加入 Python Quest，从零开始，成为Python编程高手</p>
            <Link to="/map" className="btn btn-primary btn-lg">
              立即开始 →
            </Link>
          </div>
        </div>
      </section>

      {/* 版本号入口 */}
      <div className="version-badge-footer">
        <button className="version-badge" onClick={() => setShowVersionHistory(true)}>
          <span className="vb-dot"></span>
          {CURRENT_VERSION} {versionInfo?.label}
        </button>
      </div>

      {/* 版本历史弹窗 */}
      {showVersionHistory && <VersionHistory onClose={() => setShowVersionHistory(false)} />}
    </div>
  )
}

export default Home
