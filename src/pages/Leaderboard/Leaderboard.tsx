import { useState, useMemo, useEffect } from 'react'
import { useProgress } from '../../context/ProgressContext'
import { leaderboardMockData } from '../../data/achievements'
import './Leaderboard.css'
import { useMonitor } from '../../context/MonitorContext'

type SortKey = 'xp' | 'streak' | 'levels'

function Leaderboard() {
  const { registerGroup } = useMonitor()
  const { progress, stats } = useProgress()
  const [sortKey, setSortKey] = useState<SortKey>('xp')
  const [period, setPeriod] = useState<'all' | 'week' | 'month'>('all')

  useEffect(() => {
    registerGroup('Leaderboard', '排行榜', 'pages/Leaderboard/Leaderboard.tsx')
  }, [registerGroup])

  // 当前用户
  const myEntry = {
    rank: 0, // 后面计算
    name: '我 (LY)',
    avatar: 'LY',
    xp: progress.totalXP,
    streak: progress.streak,
    levels: stats.completedLevels,
    color: '#10b981',
    isMe: true
  }

  const sortedData = useMemo(() => {
    const data = [...leaderboardMockData]
    data.sort((a, b) => (b[sortKey] as number) - (a[sortKey] as number))
    return data
  }, [sortKey])

  // 计算我的排名
  const myRank = sortedData.findIndex(d => (d[sortKey] as number) > progress.totalXP) + 1
  myEntry.rank = myRank > 0 ? myRank : sortedData.length + 1

  // 合并并计算最终排名
  const finalData = useMemo(() => {
    const withMyEntry = [...sortedData, myEntry].sort((a, b) => (b[sortKey] as number) - (a[sortKey] as number))
    return withMyEntry.map((d, i) => ({ ...d, rank: i + 1 }))
  }, [sortedData, sortKey, progress.totalXP])

  const top3 = finalData.slice(0, 3)
  const rest = finalData.slice(3)
  const myFinalEntry = finalData.find(d => d.isMe)!

  const sortLabels: Record<SortKey, string> = {
    xp: '经验值 XP',
    streak: '连续天数',
    levels: '通关数'
  }

  return (
    <div className="leaderboard-page">
      <div className="lb-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
      </div>

      <div className="container lb-container">
        <div className="lb-header">
          <div className="badge">
            <span className="badge-icon">🏅</span>
            <span>排行榜</span>
          </div>
          <h1 className="page-title">学习风云榜</h1>
          <p className="page-subtitle">看看你在 Python Quest 社区中的位置</p>
        </div>

        <div className="lb-stats-row">
          <div className="lb-stat">
            <span className="lb-stat-label">我的排名</span>
            <span className="lb-stat-value">#{myFinalEntry.rank}</span>
          </div>
          <div className="lb-stat">
            <span className="lb-stat-label">我的经验</span>
            <span className="lb-stat-value">{progress.totalXP}</span>
          </div>
          <div className="lb-stat">
            <span className="lb-stat-label">我的连续</span>
            <span className="lb-stat-value">{progress.streak} 天</span>
          </div>
          <div className="lb-stat">
            <span className="lb-stat-label">通关数</span>
            <span className="lb-stat-value">{stats.completedLevels}</span>
          </div>
        </div>

        <div className="lb-filters">
          <div className="filter-group">
            <span className="filter-label">时间:</span>
            {([
              { v: 'all' as const, l: '总榜' },
              { v: 'month' as const, l: '本月' },
              { v: 'week' as const, l: '本周' }
            ]).map(p => (
              <button
                key={p.v}
                className={`filter-btn ${period === p.v ? 'active' : ''}`}
                onClick={() => setPeriod(p.v)}
              >
                {p.l}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">排序:</span>
            {(Object.keys(sortLabels) as SortKey[]).map(k => (
              <button
                key={k}
                className={`filter-btn ${sortKey === k ? 'active' : ''}`}
                onClick={() => setSortKey(k)}
              >
                {sortLabels[k]}
              </button>
            ))}
          </div>
        </div>

        {/* 前三名领奖台 */}
        <div className="podium">
          {top3.map((p, i) => {
            const order = [1, 0, 2] // 中间是冠军
            const visualIndex = order.indexOf(i)
            const height = [180, 220, 150][visualIndex]
            const colors = ['#fbbf24', '#94a3b8', '#f97316']
            return (
              <div key={p.rank} className={`podium-item rank-${p.rank}`} style={{ order: visualIndex + 1 }}>
                <div className="podium-avatar" style={{ background: p.color }}>
                  <span>{p.avatar}</span>
                  {p.isMe && <span className="me-flag">我</span>}
                </div>
                <div className="podium-name">{p.name}</div>
                <div className="podium-stats">
                  <span>⭐ {p.xp}</span>
                  <span>🔥 {p.streak}</span>
                </div>
                <div className="podium-rank" style={{ background: colors[i] }}>
                  <span className="rank-medal">
                    {p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : '🥉'}
                  </span>
                  <span>#{p.rank}</span>
                </div>
                <div className="podium-stand" style={{ height: `${height}px`, background: colors[i] }}>
                  <span className="stand-text">{p.rank === 1 ? '冠军' : p.rank === 2 ? '亚军' : '季军'}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* 完整排行 */}
        <div className="lb-list">
          <div className="lb-list-header">
            <span>排名</span>
            <span>玩家</span>
            <span>经验</span>
            <span>连续</span>
            <span>通关</span>
          </div>
          {rest.map(p => (
            <div
              key={p.rank}
              className={`lb-list-row ${p.isMe ? 'is-me' : ''}`}
            >
              <span className="lb-rank">#{p.rank}</span>
              <div className="lb-player">
                <div className="lb-avatar" style={{ background: p.color }}>
                  <span>{p.avatar}</span>
                </div>
                <span className="lb-name">{p.name}</span>
              </div>
              <span className="lb-xp">⭐ {p.xp}</span>
              <span className="lb-streak">🔥 {p.streak}</span>
              <span className="lb-levels">🚪 {p.levels}</span>
            </div>
          ))}

          {/* 如果用户不在前三中，单独高亮显示 */}
          {myFinalEntry.rank > 3 && (
            <>
              <div className="lb-divider">... 你的位置 ...</div>
              <div className="lb-list-row is-me">
                <span className="lb-rank">#{myFinalEntry.rank}</span>
                <div className="lb-player">
                  <div className="lb-avatar" style={{ background: myFinalEntry.color }}>
                    <span>{myFinalEntry.avatar}</span>
                  </div>
                  <span className="lb-name">{myFinalEntry.name}</span>
                </div>
                <span className="lb-xp">⭐ {myFinalEntry.xp}</span>
                <span className="lb-streak">🔥 {myFinalEntry.streak}</span>
                <span className="lb-levels">🚪 {myFinalEntry.levels}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
