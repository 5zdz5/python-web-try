import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const stats = [
    { value: '10', label: '大关卡' },
    { value: '52', label: '编程挑战' },
    { value: '156+', label: '学习者' },
    { value: '98%', label: '好评率' }
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
            通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <Link to="/map" className="btn btn-primary btn-lg">
              开始冒险
            </Link>
            <button className="btn btn-secondary btn-lg">
              <span className="btn-icon">▶</span>
              免费试学
            </button>
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
              <p>9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>实战挑战</h3>
              <p>50+编程挑战，边学边练，在实践中真正掌握Python编程技能。</p>
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
    </div>
  )
}

export default Home
