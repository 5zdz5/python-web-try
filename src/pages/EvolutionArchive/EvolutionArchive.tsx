/**
 * 进化档案页 — Agent 20 次迭代可视化
 *
 * pack23 新增（用户原话："continue，疯狂进化"）
 *
 * 三栏布局：
 *   1. 顶部统计卡：迭代总数/策略应用数/评分变化/Wiki 推送数
 *   2. 中部策略时间线：每个策略应用记录横向展示
 *   3. 底部评分曲线：SVG 折线图展示 overall 分变化
 *
 * 法则 4 监测主动注册
 * 法则 5 主题同步双适配
 * 法则 6 三注册（路由/导航/文档）
 */
import { useEffect, useMemo } from 'react'
import { useAIAgent } from '../../context/AIAgentContext'
import { useMonitor } from '../../context/MonitorContext'
import { STRATEGIES } from '../../ai/Optimizer'
import './EvolutionArchive.css'

function EvolutionArchive() {
  const {
    history, summary, orchestration, wikiSync, snapshots,
    state, currentIteration,
    startAgent, stopAgent, resetAgent, runGlobalOrchestration,
  } = useAIAgent()
  const { registerGroup, reportHealth } = useMonitor()

  useEffect(() => {
    registerGroup('EvolutionArchive', '进化档案页', 'src/pages/EvolutionArchive/EvolutionArchive.tsx')
    reportHealth('EvolutionArchive', 'healthy', '进化档案页挂载成功')
  }, [registerGroup, reportHealth])

  const isRunning = state === 'observing' || state === 'analyzing' || state === 'deciding' || state === 'acting' || state === 'verifying'
  const progressPct = summary.totalIterations > 0
    ? Math.min(100, (summary.currentIteration / summary.totalIterations) * 100)
    : 0

  // 统计派生数据
  const stats = useMemo(() => {
    const applied = history.filter(h => h.result === 'committed').length
    const skipped = history.length - applied
    const scoreMin = history.length > 0
      ? Math.min(...history.map(h => h.scoresBefore?.overall ?? 100))
      : 0
    const scoreMax = history.length > 0
      ? Math.max(...history.map(h => h.scoresAfter?.overall ?? 0))
      : 0
    return {
      total: history.length,
      applied,
      skipped,
      scoreMin,
      scoreMax,
      wikiPushes: wikiSync.totalPushes,
      wikiFailures: wikiSync.totalFailures,
      snapshotCount: snapshots.length,
      orchestrationCount: orchestration.totalAdaptations,
    }
  }, [history, wikiSync, snapshots, orchestration])

  // 策略应用频次统计
  const strategyFreq = useMemo(() => {
    const freq: Record<string, number> = {}
    for (const h of history) {
      for (const d of (h.decisions || [])) {
        if (d.applied) {
          freq[d.strategyId] = (freq[d.strategyId] || 0) + 1
        }
      }
    }
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([id, count]) => ({
        id,
        count,
        name: STRATEGIES.find(s => s.id === id)?.name || id,
        domain: STRATEGIES.find(s => s.id === id)?.domain || 'unknown',
      }))
  }, [history])

  // 评分曲线 SVG 路径
  const scoreCurve = useMemo(() => {
    if (history.length === 0) return ''
    const w = 800, h = 200, pad = 40
    const scores = history.map(it => it.scoresAfter?.overall ?? 0)
    const maxScore = Math.max(100, ...scores)
    const minScore = Math.min(0, ...scores)
    const range = maxScore - minScore || 1
    const stepX = (w - pad * 2) / Math.max(scores.length - 1, 1)
    return scores.map((s, i) => {
      const x = pad + i * stepX
      const y = h - pad - ((s - minScore) / range) * (h - pad * 2)
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    }).join(' ')
  }, [history])

  // 域分布饼图数据
  const domainDist = useMemo(() => {
    const dist: Record<string, number> = { performance: 0, ux: 0, content: 0, stability: 0, meta: 0 }
    for (const h of history) {
      for (const d of (h.decisions || [])) {
        if (d.applied) {
          const s = STRATEGIES.find(st => st.id === d.strategyId)
          if (s) dist[s.domain] = (dist[s.domain] || 0) + 1
        }
      }
    }
    return dist
  }, [history])

  const domainColors: Record<string, string> = {
    performance: 'var(--color-accent-primary, #c4ff00)',
    ux: 'var(--color-accent-secondary, #00e5ff)',
    content: 'var(--color-accent-tertiary, #ff2e63)',
    stability: '#ff8c00',
    meta: '#9d4edd',
  }

  return (
    <div className="evolution-archive-page">
      <header className="ea-header">
        <h1 className="ea-title">🧬 进化档案</h1>
        <p className="ea-subtitle">
          Agent 自主迭代历史 · 策略应用时间线 · 评分进化曲线 · Wiki 同步记录
        </p>
      </header>

      {/* 进化控制台 — pack24 新增：真正可交互的进化入口 */}
      <section className="ea-console">
        <div className="ea-console-status">
          <div className="ea-console-state">
            <span className={`ea-state-badge ea-state-${state}`}>{state}</span>
            <span className="ea-console-score">综合分: {summary.overallScore.toFixed(1)}</span>
          </div>
          <div className="ea-console-progress">
            <div className="ea-progress-bar">
              <div className="ea-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="ea-progress-text">
              {summary.currentIteration} / {summary.totalIterations} 轮
            </span>
          </div>
        </div>
        <div className="ea-console-actions">
          <button
            className="ea-btn ea-btn-primary"
            onClick={() => startAgent()}
            disabled={isRunning}
            title="启动 Agent 自主迭代（观察→分析→决策→执行→验证）"
          >
            ▶ 启动进化
          </button>
          <button
            className="ea-btn ea-btn-secondary"
            onClick={() => stopAgent()}
            disabled={!isRunning && state !== 'paused'}
            title="停止 Agent 迭代"
          >
            ⏹ 停止
          </button>
          <button
            className="ea-btn ea-btn-warn"
            onClick={() => runGlobalOrchestration()}
            disabled={orchestration.active}
            title="触发全局调配（读经验包→优化→Wiki 推送）"
          >
            🌐 全局调配
          </button>
          <button
            className="ea-btn ea-btn-danger"
            onClick={() => {
              if (window.confirm('确认重置 Agent？将清空所有迭代历史和参数。')) resetAgent()
            }}
            disabled={isRunning}
            title="清空迭代历史，恢复默认参数"
          >
            ↺ 重置
          </button>
        </div>
        {currentIteration && (
          <div className="ea-console-current">
            <span className="ea-current-label">当前迭代 #{currentIteration.iterationNumber}:</span>
            <span className="ea-current-phase">阶段 {currentIteration.phase}</span>
            <span className="ea-current-strategies">
              策略: {currentIteration.appliedStrategies.length > 0
                ? currentIteration.appliedStrategies.join(', ')
                : '（无）'}
            </span>
          </div>
        )}
      </section>

      {/* 顶部统计卡 */}
      <section className="ea-stats-grid">
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.total}</div>
          <div className="ea-stat-label">总迭代</div>
        </div>
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.applied}</div>
          <div className="ea-stat-label">已应用策略</div>
        </div>
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.skipped}</div>
          <div className="ea-stat-label">跳过/回滚</div>
        </div>
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.scoreMin}→{stats.scoreMax}</div>
          <div className="ea-stat-label">评分区间</div>
        </div>
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.wikiPushes}</div>
          <div className="ea-stat-label">Wiki 推送</div>
        </div>
        <div className="ea-stat-card">
          <div className="ea-stat-value">{stats.orchestrationCount}</div>
          <div className="ea-stat-label">全局调配</div>
        </div>
      </section>

      {/* 评分曲线 */}
      <section className="ea-section">
        <h2 className="ea-section-title">📈 评分进化曲线</h2>
        {history.length > 0 ? (
          <div className="ea-curve-wrap">
            <svg viewBox="0 0 800 200" className="ea-curve-svg" preserveAspectRatio="none">
              {/* 网格线 */}
              {[0, 25, 50, 75, 100].map(v => (
                <line key={v} x1="40" x2="760" y1={200 - 40 - (v / 100) * 120} y2={200 - 40 - (v / 100) * 120}
                  stroke="var(--color-border, #2a2a35)" strokeWidth="1" strokeDasharray="2 4" />
              ))}
              {/* 曲线 */}
              <path d={scoreCurve} fill="none" stroke="var(--color-accent-primary, #c4ff00)" strokeWidth="2" />
              {/* 端点 */}
              {history.map((it, i) => {
                const w = 800, h = 200, pad = 40
                const scores = history.map(x => x.scoresAfter?.overall ?? 0)
                const maxScore = Math.max(100, ...scores)
                const minScore = Math.min(0, ...scores)
                const range = maxScore - minScore || 1
                const stepX = (w - pad * 2) / Math.max(scores.length - 1, 1)
                const x = pad + i * stepX
                const y = h - pad - (((it.scoresAfter?.overall ?? 0) - minScore) / range) * (h - pad * 2)
                return <circle key={i} cx={x} cy={y} r="3" fill="var(--color-accent-secondary, #00e5ff)" />
              })}
            </svg>
            <div className="ea-curve-legend">
              <span>● 综合分变化（{stats.scoreMin} → {stats.scoreMax}）</span>
            </div>
          </div>
        ) : (
          <div className="ea-empty">尚无迭代记录。启动 Agent 后将自动生成进化曲线。</div>
        )}
      </section>

      {/* 策略应用频次 */}
      <section className="ea-section">
        <h2 className="ea-section-title">🏆 策略应用 TOP 10</h2>
        {strategyFreq.length > 0 ? (
          <div className="ea-strategy-list">
            {strategyFreq.map(s => (
              <div key={s.id} className="ea-strategy-item">
                <span className="ea-strategy-domain" style={{ color: domainColors[s.domain] }}>
                  [{s.domain}]
                </span>
                <span className="ea-strategy-name">{s.name}</span>
                <span className="ea-strategy-count">{s.count} 次</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="ea-empty">尚无策略应用记录。</div>
        )}
      </section>

      {/* 域分布 */}
      <section className="ea-section">
        <h2 className="ea-section-title">🎯 优化域分布</h2>
        <div className="ea-domain-bar">
          {Object.entries(domainDist).map(([domain, count]) => {
            const total = Object.values(domainDist).reduce((a, b) => a + b, 0) || 1
            const pct = (count / total) * 100
            return (
              <div key={domain} className="ea-domain-segment"
                style={{
                  width: `${pct}%`,
                  background: domainColors[domain],
                }}
                title={`${domain}: ${count} 次 (${pct.toFixed(1)}%)`}
              >
                {pct > 10 && <span>{domain} {count}</span>}
              </div>
            )
          })}
        </div>
      </section>

      {/* 最近迭代列表 */}
      <section className="ea-section">
        <h2 className="ea-section-title">🔄 最近迭代（最新 10 条）</h2>
        {history.length > 0 ? (
          <div className="ea-iter-list">
            {history.slice(0, 10).map(it => (
              <div key={it.id} className={`ea-iter-item ${it.result === 'committed' ? 'applied' : 'skipped'}`}>
                <div className="ea-iter-head">
                  <span className="ea-iter-id">#{it.iterationNumber}</span>
                  <span className="ea-iter-status">{it.result === 'committed' ? '✓ 已应用' : `○ ${it.result || 'skipped'}`}</span>
                  <span className="ea-iter-score">
                    {it.scoresBefore?.overall ?? '?'} → {it.scoresAfter?.overall ?? '?'}
                  </span>
                  <span className="ea-iter-time">{it.startTime ? new Date(it.startTime).toLocaleTimeString() : '--'}</span>
                </div>
                <div className="ea-iter-strategies">
                  {(it.decisions || []).filter(d => d.applied).map(d => {
                    const s = STRATEGIES.find(st => st.id === d.strategyId)
                    return (
                      <span key={d.id} className="ea-iter-strategy-chip"
                        style={{ borderColor: s ? domainColors[s.domain] : 'var(--color-border)' }}
                      >
                        {s?.name || d.strategyId}
                      </span>
                    )
                  })}
                  {(it.decisions || []).length === 0 && <span className="ea-iter-empty">无策略</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="ea-empty">尚无迭代记录。</div>
        )}
      </section>

      {/* Wiki 同步记录 */}
      <section className="ea-section">
        <h2 className="ea-section-title">📝 Wiki 同步记录（最新 5 条）</h2>
        {wikiSync.pushHistory.length > 0 ? (
          <div className="ea-wiki-list">
            {wikiSync.pushHistory.slice(0, 5).map(r => (
              <div key={r.id} className={`ea-wiki-item ${r.status}`}>
                <span className="ea-wiki-target">[{r.target}]</span>
                <span className="ea-wiki-summary">{r.summary}</span>
                <span className="ea-wiki-status">{r.status}</span>
                <span className="ea-wiki-time">{new Date(r.timestamp).toLocaleString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="ea-empty">尚无 Wiki 推送记录。运行全局调配后将自动推送。</div>
        )}
      </section>

      <footer className="ea-footer">
        <p>💡 Agent 在每次 runGlobalOrchestration 阶段 6 自动监察代码并推送到飞书 Wiki</p>
        <p>📊 评分曲线基于 history 数组实时生成，启动 Agent 后将自动填充</p>
      </footer>
    </div>
  )
}

export default EvolutionArchive
