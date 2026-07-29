/**
 * AI Agent 控制面板
 *
 * 集成到 MonitorDashboard 的 Agent Tab，展示：
 *   1. Agent 状态与控制（启动/停止/暂停/重置）
 *   2. 健康度评分（4领域 + 综合）
 *   3. 当前迭代详情（阶段/决策日志）
 *   4. 迭代历史（趋势图 + 列表）
 *   5. 可调参数实时展示
 *   6. 快照管理（带版本号）
 */
import { useState } from 'react'
import { useAIAgent } from '../context/AIAgentContext'
import type { AgentState, TunableParams, OptDomain, OrchestrationEntryType } from '../types/ai'
import './AIAgentPanel.css'

const STATE_LABELS: Record<AgentState, string> = {
  idle: '空闲',
  observing: '观察中',
  analyzing: '分析中',
  deciding: '决策中',
  acting: '执行中',
  verifying: '验证中',
  committed: '已提交',
  rolledback: '已回溯',
  paused: '已暂停',
}

const STATE_COLORS: Record<AgentState, string> = {
  idle: '#6b7280',
  observing: '#3b82f6',
  analyzing: '#8b5cf6',
  deciding: '#f59e0b',
  acting: '#10b981',
  verifying: '#06b6d4',
  committed: '#10b981',
  rolledback: '#ef4444',
  paused: '#f59e0b',
}

const DOMAIN_LABELS: Record<OptDomain, string> = {
  performance: '性能',
  ux: '用户体验',
  content: '内容',
  stability: '稳定性',
}

const PARAM_LABELS: Record<keyof TunableParams, string> = {
  cacheTTL: '缓存TTL(ms)',
  memoryCacheSize: '内存缓存上限',
  debounceMs: '防抖(ms)',
  throttleMs: '节流(ms)',
  lazyLoadThreshold: '懒加载阈值(px)',
  toastDuration: '提示时长(ms)',
  animationDuration: '动画时长(ms)',
  loadingTimeout: '加载超时(ms)',
  autoSaveInterval: '自动保存(ms)',
  maxRetries: '最大重试',
  retryBaseDelay: '重试延迟(ms)',
  snapshotInterval: '快照间隔(ms)',
  errorThreshold: '错误阈值',
  enablePrefetch: '路由预取',
  enableLazyPyodide: 'Pyodide懒加载',
  enableErrorRecovery: '错误恢复',
}

const ORC_TYPE_LABELS: Record<OrchestrationEntryType, { label: string; icon: string; color: string }> = {
  'experience-read': { label: '读取经验包', icon: '📖', color: '#3b82f6' },
  'agent-optimize': { label: 'Agent优化', icon: '⚡', color: '#10b981' },
  'llm-feature': { label: 'LLM功能', icon: '🧠', color: '#8b5cf6' },
  'global-adapt': { label: '全局适配', icon: '🌐', color: '#06b6d4' },
  'pack-write': { label: '写入经验包', icon: '📦', color: '#f59e0b' },
}

function formatTime(iso: string): string {
  try { return new Date(iso).toLocaleString('zh-CN', { hour12: false }) } catch { return iso }
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div className="aap-score-row">
      <span className="aap-score-label">{label}</span>
      <div className="aap-score-bar">
        <div
          className="aap-score-fill"
          style={{ width: `${score}%`, background: color }}
        ></div>
      </div>
      <span className="aap-score-val">{score}</span>
    </div>
  )
}

function ParamRow({ name, value }: { name: keyof TunableParams; value: any }) {
  const display = typeof value === 'boolean' ? (value ? '✓ 开' : '✗ 关') : value
  return (
    <div className="aap-param-row">
      <span className="aap-param-name">{PARAM_LABELS[name] || name}</span>
      <span className={`aap-param-val ${typeof value === 'boolean' ? (value ? 'on' : 'off') : ''}`}>
        {display}
      </span>
    </div>
  )
}

function AIAgentPanel() {
  const {
    state, config, params, summary, currentIteration, history, snapshots,
    currentMetrics, currentScores, strategies,
    startAgent, stopAgent, pauseAgent, resetAgent, updateConfig, resetParams,
    createSnapshot, restoreSnapshot, deleteSnapshot, markSnapshotStable,
    orchestration, runGlobalOrchestration, clearOrchestrationEntries,
  } = useAIAgent()

  const [showParams, setShowParams] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [showOrchestration, setShowOrchestration] = useState(false)

  const isRunning = !['idle', 'paused', 'committed', 'rolledback'].includes(state)

  return (
    <div className="aap-container">
      {/* ===== Agent 状态卡片 ===== */}
      <div className="aap-status-card">
        <div className="aap-status-header">
          <div className="aap-status-left">
            <span
              className="aap-status-indicator"
              style={{ background: STATE_COLORS[state] }}
            ></span>
            <span className="aap-status-text">{STATE_LABELS[state]}</span>
          </div>
          <div className="aap-status-right">
            <span className="aap-iteration-count">
              迭代 {summary.currentIteration} / {summary.totalIterations}
            </span>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="aap-controls">
          {!isRunning ? (
            <button className="aap-btn aap-btn-start" onClick={startAgent}>
              ▶ 启动
            </button>
          ) : (
            <button className="aap-btn aap-btn-pause" onClick={pauseAgent}>
              ⏸ 暂停
            </button>
          )}
          <button className="aap-btn aap-btn-stop" onClick={stopAgent} disabled={state === 'idle'}>
            ⏹ 停止
          </button>
          <button className="aap-btn aap-btn-reset" onClick={resetAgent}>
            ↻ 重置
          </button>
          <button className="aap-btn aap-btn-snapshot" onClick={() => createSnapshot('手动快照')}>
            📸 快照
          </button>
          <button
            className="aap-btn aap-btn-orchestrate"
            onClick={() => runGlobalOrchestration()}
            disabled={orchestration.active}
          >
            {orchestration.active ? '⏳ 调配中...' : '🌐 全局调配'}
          </button>
        </div>

        {/* 摘要统计 */}
        <div className="aap-summary-grid">
          <div className="aap-summary-item">
            <div className="aap-si-val">{summary.overallScore}</div>
            <div className="aap-si-label">综合分</div>
          </div>
          <div className="aap-summary-item">
            <div className="aap-si-val">{summary.appliedOptimizations}</div>
            <div className="aap-si-label">已应用优化</div>
          </div>
          <div className="aap-summary-item">
            <div className="aap-si-val aap-si-rollback">{summary.rollbackCount}</div>
            <div className="aap-si-label">回溯次数</div>
          </div>
          <div className="aap-summary-item">
            <div className="aap-si-val">{snapshots.length}</div>
            <div className="aap-si-label">快照数</div>
          </div>
        </div>

        {/* 评分趋势 */}
        {summary.scoreTrend.length > 0 && (
          <div className="aap-trend">
            <span className="aap-trend-label">评分趋势：</span>
            <div className="aap-trend-chart">
              {summary.scoreTrend.map((score, i) => (
                <div
                  key={i}
                  className="aap-trend-bar"
                  style={{ height: `${score}%` }}
                  title={`迭代 ${i + 1}: ${score}分`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== 健康度评分 ===== */}
      {currentScores && (
        <div className="aap-section">
          <h3 className="aap-section-title">📊 健康度评分</h3>
          <ScoreBar label="性能" score={currentScores.performance} color="#3b82f6" />
          <ScoreBar label="用户体验" score={currentScores.ux} color="#8b5cf6" />
          <ScoreBar label="内容质量" score={currentScores.content} color="#10b981" />
          <ScoreBar label="稳定性" score={currentScores.stability} color="#f59e0b" />
          <div className="aap-score-divider"></div>
          <ScoreBar label="综合" score={currentScores.overall} color="#06b6d4" />
        </div>
      )}

      {/* ===== 当前指标 ===== */}
      {currentMetrics && (
        <div className="aap-section">
          <h3 className="aap-section-title">📡 实时指标</h3>
          <div className="aap-metrics-grid">
            <div className="aap-metric"><span>FCP</span><span>{currentMetrics.fcp}ms</span></div>
            <div className="aap-metric"><span>LCP</span><span>{currentMetrics.lcp}ms</span></div>
            <div className="aap-metric"><span>内存</span><span>{currentMetrics.memoryUsed || '-'}MB</span></div>
            <div className="aap-metric"><span>交互</span><span>{currentMetrics.interactionCount}</span></div>
            <div className="aap-metric"><span>错误</span><span>{currentMetrics.errorCount}</span></div>
            <div className="aap-metric"><span>崩溃</span><span>{currentMetrics.crashCount}</span></div>
            <div className="aap-metric"><span>运行</span><span>{Math.floor(currentMetrics.uptimeMs / 1000)}s</span></div>
            <div className="aap-metric"><span>重试率</span><span>{Math.round(currentMetrics.retrySuccessRate * 100)}%</span></div>
          </div>
        </div>
      )}

      {/* ===== 当前迭代详情 ===== */}
      {currentIteration && (
        <div className="aap-section">
          <h3 className="aap-section-title">
            🔄 当前迭代 #{currentIteration.iterationNumber}
            <span className={`aap-iteration-result aap-result-${currentIteration.result}`}>
              {currentIteration.result === 'pending' ? '进行中' :
               currentIteration.result === 'committed' ? '已提交' :
               currentIteration.result === 'rolledback' ? '已回溯' : '跳过'}
            </span>
          </h3>
          <div className="aap-iteration-meta">
            <span>版本戳: <code>{currentIteration.versionStamp}</code></span>
            {currentIteration.gain !== 0 && (
              <span className={currentIteration.gain >= 0 ? 'aap-gain-positive' : 'aap-gain-negative'}>
                评分变化: {currentIteration.gain >= 0 ? '+' : ''}{currentIteration.gain}
              </span>
            )}
          </div>
          {/* 决策日志 */}
          <div className="aap-decisions">
            {currentIteration.decisions.slice(-8).map((d) => (
              <div key={d.id} className={`aap-decision aap-decision-${d.applied ? 'applied' : 'pending'}`}>
                <span className="aap-decision-phase">{d.phase}</span>
                <span className="aap-decision-reason">{d.reason}</span>
                <span className="aap-decision-time">{formatTime(d.timestamp).split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== 可调参数 ===== */}
      <div className="aap-section">
        <div className="aap-section-header" onClick={() => setShowParams(!showParams)}>
          <h3 className="aap-section-title">⚙️ 可调参数</h3>
          <span className="aap-toggle">{showParams ? '▼' : '▶'}</span>
        </div>
        {showParams && (
          <div className="aap-params">
            {Object.entries(params).map(([key, val]) => (
              <ParamRow key={key} name={key as keyof TunableParams} value={val} />
            ))}
            <button className="aap-btn aap-btn-reset-params" onClick={resetParams}>
              ↻ 恢复默认参数
            </button>
          </div>
        )}
      </div>

      {/* ===== 配置 ===== */}
      <div className="aap-section">
        <div className="aap-section-header" onClick={() => setShowConfig(!showConfig)}>
          <h3 className="aap-section-title">🔧 Agent 配置</h3>
          <span className="aap-toggle">{showConfig ? '▼' : '▶'}</span>
        </div>
        {showConfig && (
          <div className="aap-config">
            <label className="aap-config-row">
              <input
                type="checkbox"
                checked={config.autoRun}
                onChange={e => updateConfig({ autoRun: e.target.checked })}
              />
              <span>自动启动</span>
            </label>
            <label className="aap-config-row">
              <input
                type="checkbox"
                checked={config.homepageProtected}
                onChange={e => updateConfig({ homepageProtected: e.target.checked })}
              />
              <span>首页保护</span>
            </label>
            <label className="aap-config-row">
              <span>迭代间隔(ms):</span>
              <input
                type="number"
                value={config.iterationInterval}
                onChange={e => updateConfig({ iterationInterval: Number(e.target.value) })}
                min={5000}
                step={1000}
              />
            </label>
            <label className="aap-config-row">
              <span>最大迭代:</span>
              <input
                type="number"
                value={config.maxIterations}
                onChange={e => updateConfig({ maxIterations: Number(e.target.value) })}
                min={1}
                max={100}
              />
            </label>
            <label className="aap-config-row">
              <span>回溯阈值:</span>
              <input
                type="number"
                value={config.rollbackThreshold}
                onChange={e => updateConfig({ rollbackThreshold: Number(e.target.value) })}
                min={1}
                max={50}
              />
            </label>
            {/* 启用领域 */}
            <div className="aap-config-domains">
              <span>启用领域:</span>
              <div className="aap-domain-toggles">
                {Object.entries(DOMAIN_LABELS).map(([key, label]) => {
                  const enabled = config.enabledDomains.includes(key as OptDomain)
                  return (
                    <label key={key} className="aap-domain-toggle">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={e => {
                          const domains = e.target.checked
                            ? [...config.enabledDomains, key as OptDomain]
                            : config.enabledDomains.filter(d => d !== key)
                          updateConfig({ enabledDomains: domains })
                        }}
                      />
                      <span>{label}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===== 迭代历史 ===== */}
      <div className="aap-section">
        <h3 className="aap-section-title">📜 迭代历史 ({history.length})</h3>
        <div className="aap-history">
          {history.slice(0, 10).map((iter) => (
            <div key={iter.id} className={`aap-history-item aap-result-${iter.result}`}>
              <div className="aap-history-header">
                <span className="aap-history-num">#{iter.iterationNumber}</span>
                <span className={`aap-history-result aap-result-${iter.result}`}>
                  {iter.result === 'committed' ? '✓ 提交' :
                   iter.result === 'rolledback' ? '✗ 回溯' :
                   iter.result === 'skipped' ? '⊘ 跳过' : '...'}
                </span>
                {iter.scoresBefore && iter.scoresAfter && (
                  <span className="aap-history-gain">
                    {iter.scoresBefore.overall} → {iter.scoresAfter.overall}
                    <span className={iter.gain >= 0 ? 'aap-gain-positive' : 'aap-gain-negative'}>
                      ({iter.gain >= 0 ? '+' : ''}{iter.gain})
                    </span>
                  </span>
                )}
                <span className="aap-history-time">{formatTime(iter.startTime).split(' ')[1]}</span>
              </div>
              {iter.appliedStrategies.length > 0 && (
                <div className="aap-history-strategies">
                  {iter.appliedStrategies.map(sid => {
                    const s = strategies.find(x => x.id === sid)
                    return <span key={sid} className="aap-strategy-tag">{s?.name || sid}</span>
                  })}
                </div>
              )}
            </div>
          ))}
          {history.length === 0 && <div className="aap-empty">暂无迭代记录</div>}
        </div>
      </div>

      {/* ===== 快照管理 ===== */}
      <div className="aap-section">
        <h3 className="aap-section-title">💾 版本快照 ({snapshots.length})</h3>
        <div className="aap-snapshots">
          {snapshots.map((snap) => (
            <div key={snap.id} className={`aap-snapshot ${snap.stable ? 'stable' : ''}`}>
              <div className="aap-snapshot-info">
                <div className="aap-snapshot-label">{snap.label}</div>
                <code className="aap-snapshot-stamp">{snap.versionStamp}</code>
                <div className="aap-snapshot-meta">
                  {formatTime(snap.timestamp)} · 评分 {snap.scores.overall} · {Object.keys(snap.data).length} 项数据
                  {snap.stable && <span className="aap-stable-badge">★ 稳定</span>}
                </div>
              </div>
              <div className="aap-snapshot-actions">
                <button className="aap-btn aap-btn-sm aap-btn-restore" onClick={() => restoreSnapshot(snap.id)}>
                  ↩ 回溯
                </button>
                {!snap.stable && (
                  <button className="aap-btn aap-btn-sm aap-btn-stable" onClick={() => markSnapshotStable(snap.id)}>
                    ★ 标稳定
                  </button>
                )}
                <button className="aap-btn aap-btn-sm aap-btn-del" onClick={() => deleteSnapshot(snap.id)}>
                  🗑
                </button>
              </div>
            </div>
          ))}
          {snapshots.length === 0 && <div className="aap-empty">暂无快照</div>}
        </div>
      </div>

      {/* ===== 全局调配记录 ===== */}
      <div className="aap-section">
        <div className="aap-section-header" onClick={() => setShowOrchestration(!showOrchestration)}>
          <h3 className="aap-section-title">🌐 全局调配记录 ({orchestration.entries.length})</h3>
          <span className="aap-toggle">{showOrchestration ? '▼' : '▶'}</span>
        </div>
        {showOrchestration && (
          <div className="aap-orchestration">
            {/* 调配概览 */}
            <div className="aap-orc-overview">
              <div className="aap-orc-stat">
                <span className="aap-orc-stat-val">{orchestration.totalAdaptations}</span>
                <span className="aap-orc-stat-label">累计调配</span>
              </div>
              <div className="aap-orc-stat">
                <span className="aap-orc-stat-val">{orchestration.entries.length}</span>
                <span className="aap-orc-stat-label">记录条数</span>
              </div>
              <div className="aap-orc-stat">
                <span className="aap-orc-stat-val">{orchestration.lastRun ? formatTime(orchestration.lastRun).split(' ')[1] : '-'}</span>
                <span className="aap-orc-stat-label">上次调配</span>
              </div>
              <div className="aap-orc-stat">
                <span className="aap-orc-stat-val" style={{ color: orchestration.packReadEnabled ? '#10b981' : '#6b7280' }}>
                  {orchestration.packReadEnabled ? '✓' : '✗'}
                </span>
                <span className="aap-orc-stat-label">强制读包</span>
              </div>
              <div className="aap-orc-stat">
                <span className="aap-orc-stat-val" style={{ color: orchestration.autoWritePack ? '#10b981' : '#6b7280' }}>
                  {orchestration.autoWritePack ? '✓' : '✗'}
                </span>
                <span className="aap-orc-stat-label">自动写包</span>
              </div>
            </div>

            {/* 调配记录列表 */}
            <div className="aap-orc-entries">
              {orchestration.entries.map((entry) => {
                const meta = ORC_TYPE_LABELS[entry.type] || { label: entry.type, icon: '•', color: '#6b7280' }
                return (
                  <div key={entry.id} className="aap-orc-entry" style={{ borderLeftColor: meta.color }}>
                    <span className="aap-orc-entry-icon">{meta.icon}</span>
                    <div className="aap-orc-entry-body">
                      <div className="aap-orc-entry-head">
                        <span className="aap-orc-entry-type" style={{ color: meta.color }}>{meta.label}</span>
                        <span className="aap-orc-entry-time">{formatTime(entry.timestamp).split(' ')[1]}</span>
                      </div>
                      <div className="aap-orc-entry-summary">{entry.summary}</div>
                      {entry.detail && <div className="aap-orc-entry-detail">{entry.detail}</div>}
                      {entry.modules && entry.modules.length > 0 && (
                        <div className="aap-orc-entry-modules">
                          {entry.modules.map(m => <code key={m}>{m}</code>)}
                        </div>
                      )}
                    </div>
                    {entry.scoreImpact !== undefined && (
                      <span className="aap-orc-entry-score">+{Math.round(entry.scoreImpact)}</span>
                    )}
                  </div>
                )
              })}
              {orchestration.entries.length === 0 && <div className="aap-empty">暂无调配记录，点击「🌐 全局调配」按钮开始</div>}
            </div>

            {/* 清除按钮 */}
            {orchestration.entries.length > 0 && (
              <button className="aap-btn aap-btn-reset-params" onClick={clearOrchestrationEntries}>
                🗑 清除调配记录
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AIAgentPanel
