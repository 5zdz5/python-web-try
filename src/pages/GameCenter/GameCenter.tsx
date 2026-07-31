import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GameCenter.css'
import { useMonitor } from '../../context/MonitorContext'
import { useTheme } from '../../context/ThemeContext'

interface GameMeta {
  id: string
  name: string
  desc: string
  icon: string
  path: string
  difficulty: 1 | 2 | 3 | 4 | 5
  tag: string
}

const GAMES: GameMeta[] = [
  {
    id: 'code-typing',
    name: '像素打字大战',
    desc: 'Python 代码从天而降，正确输入即可消除。WPM 统计、连击倍率、血量系统、动画掉落。',
    icon: '⌨️',
    path: '/games/typing',
    difficulty: 2,
    tag: '代码手感',
  },
  {
    id: 'code-output',
    name: '代码输出猜谜',
    desc: '读代码块 → 4 选 1 猜输出结果。覆盖 Python/TS 基础语法、for 循环、列表切片、闭包。',
    icon: '🧩',
    path: '/games/code-output',
    difficulty: 3,
    tag: '代码理解',
  },
  {
    id: 'algo-flashcards',
    name: '算法闪卡训练营',
    desc: '翻转卡：正面题目+难度，反面复杂度+思路。数组/链表/二叉树/哈希/排序 5 大分类。',
    icon: '🗂️',
    path: '/games/algo-flashcards',
    difficulty: 4,
    tag: '算法数据结构',
  },
]

/**
 * 游戏中心聚合页
 *
 * 归属层：pages/（路由级页面，符合法则1分层归属决策）
 * 监测：useEffect registerGroup + reportHealth（法则4）
 * 主题：CSS 变量 + 像素风升起动画（法则5）
 */
function GameCenter() {
  const { registerGroup, reportHealth } = useMonitor()
  const { themeId } = useTheme()
  const isPixel = themeId === 'pixel-spectrum' || themeId === 'pixel-crow'

  useEffect(() => {
    registerGroup('GameCenter', '游戏中心聚合页', 'src/pages/GameCenter/GameCenter.tsx')
    reportHealth('GameCenter', 'healthy', `游戏中心挂载：${GAMES.length} 款小游戏`)
  }, [registerGroup, reportHealth])

  return (
    <div className="game-center">
      <section className={`gc-hero ${isPixel ? 'pixel-rise-container' : ''}`}>
        <div className="container gc-hero-content">
          <div className={`gc-badge ${isPixel ? 'pixel-rise-tall' : 'animate-fade-in'}`}>
            <span>🎮 游戏化学习</span>
          </div>
          <h1 className={`gc-title ${isPixel ? 'pixel-rise-tall' : 'animate-fade-in delay-100'}`}>
            <span className="title-gradient">游戏中心 → 刷题即通关</span>
          </h1>
          <p className={`gc-subtitle ${isPixel ? 'pixel-rise-tall' : 'animate-fade-in delay-200'}`}>
            代码打字、输出猜谜、算法闪卡——用游戏感培养代码手感和理解度
          </p>
          <div className="gc-stats-row">
            <div className="gc-stat-card pixel-panel pixel-panel-accent">
              <div className="gc-stat-val">{GAMES.length}</div>
              <div className="gc-stat-label">小游戏</div>
            </div>
            <div className="gc-stat-card pixel-panel">
              <div className="gc-stat-val">{GAMES.reduce((s, g) => s + g.difficulty, 0) / GAMES.length} / 5</div>
              <div className="gc-stat-label">平均难度</div>
            </div>
            <div className="gc-stat-card pixel-panel">
              <div className="gc-stat-val">3</div>
              <div className="gc-stat-label">训练方向</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container gc-games-grid">
        {GAMES.map((g, idx) => (
          <Link
            key={g.id}
            to={g.path}
            className={`gc-game-card pixel-card-3d feature-card-anim ${isPixel ? 'pixel-rise' : ''}`}
            style={{ animationDelay: `${0.06 * idx}s` }}
          >
            <div className="gc-game-head">
              <div className="gc-game-icon">{g.icon}</div>
              <span className="gc-game-tag">{g.tag}</span>
            </div>
            <h3 className="gc-game-name">{g.name}</h3>
            <p className="gc-game-desc">{g.desc}</p>
            <div className="gc-game-footer">
              <div className="gc-game-diff">
                难度：{'★'.repeat(g.difficulty)}
                <span className="gc-diff-empty">{'☆'.repeat(5 - g.difficulty)}</span>
              </div>
              <span className="gc-game-enter">开始游戏 →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="container gc-back-nav">
        <Link to="/" className="btn btn-secondary btn-sm">← 返回首页</Link>
        <Link to="/map" className="btn btn-secondary btn-sm">前往冒险地图 →</Link>
      </section>
    </div>
  )
}

export default GameCenter
