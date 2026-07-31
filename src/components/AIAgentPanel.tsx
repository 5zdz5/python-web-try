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
import { useState, useEffect } from 'react'
import { useAIAgent } from '../context/AIAgentContext'
import type { AgentState, TunableParams, OptDomain, OrchestrationEntryType, LLMSuggestion } from '../types/ai'
import { getSkillTrainingSummary } from '../ai/skillTrainer'
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
  meta: '元优化',
  'learning-outcome': '学习效果',
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
  enableEmptyLessonScan: '空关卡扫描',
  enableBrokenImageCheck: '损坏图片检测',
  contentRefreshInterval: '内容刷新(ms)',
  agentLearningRate: 'Agent学习率',
  strategyExplorationRate: '策略探索率',
}

const ORC_TYPE_LABELS: Record<OrchestrationEntryType, { label: string; icon: string; color: string }> = {
  'experience-read': { label: '读取经验包', icon: '📖', color: '#3b82f6' },
  'agent-optimize': { label: 'Agent优化', icon: '⚡', color: '#10b981' },
  'llm-feature': { label: 'LLM功能', icon: '🧠', color: '#8b5cf6' },
  'global-adapt': { label: '全局适配', icon: '🌐', color: '#06b6d4' },
  'pack-write': { label: '写入经验包', icon: '📦', color: '#f59e0b' },
  'wiki-push': { label: 'Wiki推送', icon: '📝', color: '#c4ff00' },
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

function ParamRow({ name, value }: { name: keyof TunableParams; value: string | number | boolean }) {
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

function SuggestionCard({ suggestion, adopted, onAdopt, onDismiss, compliances }: {
  suggestion: LLMSuggestion
  adopted: boolean
  onAdopt: () => void
  onDismiss: () => void
  compliances?: Array<{ status: string; reason: string; skillName: string; ruleTitle: string }>
}) {
  const priorityColors: Record<string, string> = { high: '#ef4444', medium: '#f59e0b', low: '#6b7280' }
  const priorityLabels: Record<string, string> = { high: '高', medium: '中', low: '低' }
  const hasViolation = compliances?.some(c => c.status === 'violation')

  return (
    <div className="aap-llm-suggestion" style={{ borderLeftColor: priorityColors[suggestion.priority] }}>
      <div className="aap-llm-suggestion-header">
        <span className="aap-llm-suggestion-target">{suggestion.target}</span>
        <span className="aap-llm-suggestion-priority" style={{ color: priorityColors[suggestion.priority] }}>
          {priorityLabels[suggestion.priority]}
        </span>
        <span className="aap-llm-suggestion-risk">风险 {Math.round(suggestion.risk * 100)}%</span>
        {hasViolation && (
          <span className="aap-badge" style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444' }}>Skill 违规</span>
        )}
      </div>
      <div className="aap-llm-suggestion-problem">{suggestion.problem}</div>
      <div className="aap-llm-suggestion-fix">{suggestion.fix}</div>
      {suggestion.paramChanges && (
        <div className="aap-llm-suggestion-params">
          {Object.entries(suggestion.paramChanges).map(([k, v]) => (
            <code key={k}>{k}: {String(v)}</code>
          ))}
        </div>
      )}
      {suggestion.rationale && (
        <div className="aap-llm-suggestion-rationale">理由：{suggestion.rationale}</div>
      )}
      {/* pack32: 代码补丁展示 */}
      {suggestion.codePatch && (
        <div className="aap-llm-suggestion-codepatch">
          <div className="aap-codepatch-label">📋 代码补丁（需人工审查后应用）</div>
          <pre className="aap-codepatch-content">{suggestion.codePatch}</pre>
        </div>
      )}
      {/* pack31: 该建议的 Skill 合规检测详情 */}
      {compliances && compliances.length > 0 && (
        <div className="aap-suggestion-compliance">
          {compliances.map((c, i) => (
            <div key={i} className={`aap-compliance-detail aap-compliance-${c.status}`}>
              <span>{c.status === 'violation' ? '✗' : '⚠'}</span>
              <span>{c.skillName}/{c.ruleTitle}: {c.reason}</span>
            </div>
          ))}
        </div>
      )}
      <div className="aap-llm-suggestion-actions">
        {!adopted ? (
          <>
            <button className="aap-btn aap-btn-primary aap-btn-sm" onClick={onAdopt} disabled={hasViolation}>
              ✓ 采纳
            </button>
            <button className="aap-btn aap-btn-sm" onClick={onDismiss}>
              ✗ 忽略
            </button>
          </>
        ) : (
          <span className="aap-badge aap-badge-on">已采纳</span>
        )}
      </div>
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
    clearAgentRuntimeCache, safeFullReset, agentCacheStats,
    llmConfig, llmAnalysis, adoptedSuggestions, isLLMAnalyzing,
    runLLMAnalysis, updateLLMConfig, applyLLMSuggestion, dismissLLMSuggestion, testLLM,
    skillTrainingConfig, skillCompliance, updateSkillTrainingConfig,
    llmTrainingStats,
    // pack33 超级进化
    resourceBusState, comprehension, lastMetaLogicResult, lastLocalLLMOutput,
    lastSelfCodePlan, superEvolutionStats, runSuperEvolution,
    // pack34 代码级自优化：Kimi 超级升级 + 编码经验注入
    codeSelfOptimizeConfig, updateCodeSelfOptimizeConfig,
    codebaseIndex, buildCodebaseIndexAsync,
    codingExperiences, codingExperienceInjection, refreshCodingExperiences, addCustomCodingExperience,
    lastSelfOptimizeResult, isSelfOptimizing, runCodeSelfOptimizeAsync, lastSelfOptimizeRuns,
  } = useAIAgent()

  const [showParams, setShowParams] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [showOrchestration, setShowOrchestration] = useState(false)
  const [showLLM, setShowLLM] = useState(false)
  const [showSuperEvolution, setShowSuperEvolution] = useState(false)
  // pack34: 代码自优化 UI 状态
  const [showCodeSelfOptimize, setShowCodeSelfOptimize] = useState(false)
  const [showExperiences, setShowExperiences] = useState(false)
  const [codeOptimizeIntent, setCodeOptimizeIntent] = useState<string>('综合代码质量优化：类型安全 + 未使用代码清理 + 注释只讲 why + UI 一致性')
  const [showIndexStats, setShowIndexStats] = useState(false)
  const [newExpTitle, setNewExpTitle] = useState('')
  const [newExpDesc, setNewExpDesc] = useState('')
  const [newExpPractice, setNewExpPractice] = useState('')
  const [isEvolving, setIsEvolving] = useState(false)
  const [llmTestResult, setLlmTestResult] = useState<string | null>(null)
  const [isTestingLLM, setIsTestingLLM] = useState(false)
  const [cacheStats, setCacheStats] = useState(() => ({ localStorageCount: 0, sessionStorageCount: 0 }))
  const [clearedMsg, setClearedMsg] = useState<string | null>(null)

  // pack33: 手动触发超级进化
  const handleRunSuperEvolution = async () => {
    setIsEvolving(true)
    try { await runSuperEvolution() } finally { setIsEvolving(false) }
  }

  // 缓存统计懒刷新（避免每帧都遍历 storage）
  const refreshCacheStats = () => { try { setCacheStats(agentCacheStats()) } catch { /* ignore */ } }

  const isRunning = !['idle', 'paused', 'committed', 'rolledback'].includes(state)

  // 组件挂载时刷新一次缓存统计
  useEffect(() => {
    try {
      const t = setTimeout(refreshCacheStats, 100)
      return () => clearTimeout(t)
    } catch {
      /* ignore */
    }
  }, [])

  // 更安全的重置确认（不依赖原生 confirm，避免浏览器策略差异）
  const handleFullReset = () => {
    const msg = '确认对 Agent 做安全全量重置？\n（不会影响你的学习进度和登录状态）\n\n点「确定」继续，点「取消」返回'
    const ok = typeof window !== 'undefined' ? (window as any).confirm ? window.confirm(msg) : true : true
    if (ok) {
      try {
        safeFullReset()
        setClearedMsg('✓ 已安全全量重置')
        setTimeout(() => setClearedMsg(null), 3000)
        refreshCacheStats()
      } catch {
        setClearedMsg('⚠ 重置已跳过')
        setTimeout(() => setClearedMsg(null), 3000)
      }
    }
  }

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
          <button
            className="aap-btn aap-btn-cache"
            onClick={() => {
              try {
                const n = clearAgentRuntimeCache()
                setClearedMsg(`✓ 已清除 ${n} 项缓存`)
                setTimeout(() => setClearedMsg(null), 3000)
                refreshCacheStats()
              } catch {
                setClearedMsg('⚠ 清理已跳过')
                setTimeout(() => setClearedMsg(null), 3000)
              }
            }}
          >
            🧹 清缓存
          </button>
          <button
            className="aap-btn aap-btn-fullreset"
            onClick={handleFullReset}
          >
            ♻️ 安全重置
          </button>
        </div>
        {clearedMsg && (
          <div className="aap-cleared-msg">{clearedMsg}</div>
        )}
        <div className="aap-cache-hint">
          <span>localStorage: {cacheStats.localStorageCount} 项</span>
          <span>sessionStorage: {cacheStats.sessionStorageCount} 项</span>
          <span style={{ opacity: 0.6 }}>（仅清理 Agent 自身数据，不碰学习进度/登录）</span>
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

      {/* ===== LLM 分析面板（pack30：Agent 向 LLM 方向进化） ===== */}
        <div className="aap-section">
          <div
            className="aap-section-header"
            onClick={() => setShowLLM(!showLLM)}
            style={{ cursor: 'pointer' }}
          >
            <span className="aap-section-icon">🧠</span>
            <span className="aap-section-title">LLM 优化分析</span>
            <span className="aap-section-toggle">{showLLM ? '▼' : '▶'}</span>
            {llmConfig.enabled && <span className="aap-badge aap-badge-on">已启用</span>}
          </div>

          {showLLM && (
            <div className="aap-section-body">
              {/* LLM 配置区 */}
              <div className="aap-llm-config">
                <label className="aap-llm-toggle">
                  <input
                    type="checkbox"
                    checked={llmConfig.enabled}
                    onChange={e => updateLLMConfig({ enabled: e.target.checked })}
                  />
                  <span>启用 LLM 分析</span>
                </label>

                <div className="aap-llm-field">
                  <label>API Base URL</label>
                  <input
                    type="text"
                    value={llmConfig.baseUrl}
                    onChange={e => updateLLMConfig({ baseUrl: e.target.value })}
                    placeholder="https://api.openai.com/v1"
                    disabled={!llmConfig.enabled}
                  />
                </div>

                <div className="aap-llm-field">
                  <label>API Key</label>
                  <input
                    type="password"
                    value={llmConfig.apiKey}
                    onChange={e => updateLLMConfig({ apiKey: e.target.value })}
                    placeholder="sk-..."
                    disabled={!llmConfig.enabled}
                  />
                </div>

                <div className="aap-llm-field">
                  <label>模型</label>
                  <input
                    type="text"
                    value={llmConfig.model}
                    onChange={e => updateLLMConfig({ model: e.target.value })}
                    placeholder="gpt-4o-mini / deepseek-chat"
                    disabled={!llmConfig.enabled}
                  />
                </div>

                <div className="aap-llm-row">
                  <div className="aap-llm-field aap-llm-field-sm">
                    <label>温度 ({llmConfig.temperature})</label>
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={llmConfig.temperature}
                      onChange={e => updateLLMConfig({ temperature: parseFloat(e.target.value) })}
                      disabled={!llmConfig.enabled}
                    />
                  </div>
                  <div className="aap-llm-field aap-llm-field-sm">
                    <label>Max Tokens</label>
                    <input
                      type="number"
                      value={llmConfig.maxTokens}
                      onChange={e => updateLLMConfig({ maxTokens: parseInt(e.target.value) || 2000 })}
                      disabled={!llmConfig.enabled}
                    />
                  </div>
                </div>

                <div className="aap-llm-actions">
                  <button
                    className="aap-btn"
                    onClick={async () => {
                      setIsTestingLLM(true)
                      setLlmTestResult(null)
                      const r = await testLLM()
                      setLlmTestResult(r.ok ? `✓ ${r.message}` : `✗ ${r.message}`)
                      setIsTestingLLM(false)
                    }}
                    disabled={!llmConfig.enabled || isTestingLLM}
                  >
                    {isTestingLLM ? '⏳ 测试中...' : '🔌 测试连接'}
                  </button>
                  <button
                    className="aap-btn aap-btn-primary"
                    onClick={() => runLLMAnalysis()}
                    disabled={!llmConfig.enabled || isLLMAnalyzing}
                  >
                    {isLLMAnalyzing ? '⏳ LLM 分析中...' : '🧠 运行 LLM 分析'}
                  </button>
                </div>

                {llmTestResult && <div className="aap-llm-test-result">{llmTestResult}</div>}

                {/* pack31: Skill 训练配置 */}
                <div className="aap-skill-training-config">
                  <label className="aap-llm-toggle">
                    <input
                      type="checkbox"
                      checked={skillTrainingConfig.enabled}
                      onChange={e => updateSkillTrainingConfig({ enabled: e.target.checked })}
                    />
                    <span>启用 Skill 训练（将项目 Skill 规则注入 LLM prompt）</span>
                  </label>
                  {skillTrainingConfig.enabled && (
                    <>
                      <label className="aap-llm-toggle">
                        <input
                          type="checkbox"
                          checked={skillTrainingConfig.strictMode}
                          onChange={e => updateSkillTrainingConfig({ strictMode: e.target.checked })}
                        />
                        <span>严格模式（违规建议自动拦截）</span>
                      </label>
                      <div className="aap-skill-training-summary">
                        {(() => {
                          const s = getSkillTrainingSummary(skillTrainingConfig)
                          return (
                            <>
                              <span className="aap-badge aap-badge-on">{s.totalSkills} 个 Skill</span>
                              <span className="aap-badge">{s.totalRules} 条规则</span>
                              <span className="aap-skill-list">{s.activeSkills.join(' · ')}</span>
                            </>
                          )
                        })()}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* LLM 分析结果 */}
              {llmAnalysis && (
                <div className="aap-llm-result">
                  <div className="aap-llm-meta">
                    <span>模型: {llmAnalysis.model}</span>
                    <span>置信度: {(llmAnalysis.confidence * 100).toFixed(0)}%</span>
                    <span>{formatTime(llmAnalysis.timestamp).split(' ')[1]}</span>
                    {llmAnalysis.tokenUsage && (
                      <span>Tokens: {llmAnalysis.tokenUsage.total}</span>
                    )}
                  </div>

                  {llmAnalysis.error ? (
                    <div className="aap-llm-error">⚠ {llmAnalysis.error}</div>
                  ) : (
                    <>
                      <div className="aap-llm-reasoning">{llmAnalysis.reasoning}</div>

                      {llmAnalysis.suggestions.length > 0 ? (
                        <div className="aap-llm-suggestions">
                          {llmAnalysis.suggestions.map(s => {
                            // pack31: 查找该建议的合规检测结果
                            const compliances = skillCompliance.filter(c => c.suggestionId === s.id)
                            return (
                              <SuggestionCard
                                key={s.id}
                                suggestion={s}
                                adopted={adoptedSuggestions.some(a => a.suggestionId === s.id)}
                                onAdopt={() => applyLLMSuggestion(s.id)}
                                onDismiss={() => dismissLLMSuggestion(s.id)}
                                compliances={compliances}
                              />
                            )
                          })}
                        </div>
                      ) : (
                        <div className="aap-empty">LLM 认为当前状态健康，无需优化</div>
                      )}

                      {/* pack31: Skill 合规检测总览 */}
                      {skillCompliance.length > 0 && (
                        <div className="aap-skill-compliance">
                          <div className="aap-skill-compliance-title">
                            Skill 合规检测 ({skillCompliance.length} 项)
                            {skillCompliance.filter(c => c.status === 'violation').length > 0 && (
                              <span className="aap-badge" style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444' }}>
                                {skillCompliance.filter(c => c.status === 'violation').length} 违规
                              </span>
                            )}
                            {skillCompliance.filter(c => c.status === 'warn').length > 0 && (
                              <span className="aap-badge" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>
                                {skillCompliance.filter(c => c.status === 'warn').length} 警告
                              </span>
                            )}
                          </div>
                          {skillCompliance.map((c, i) => (
                            <div key={i} className={`aap-skill-compliance-item aap-compliance-${c.status}`}>
                              <span className="aap-compliance-status">
                                {c.status === 'violation' ? '✗' : '⚠'}
                              </span>
                              <span className="aap-compliance-rule">{c.skillName}/{c.ruleTitle}</span>
                              <span className="aap-compliance-reason">{c.reason}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* 已采纳建议历史 */}
              {adoptedSuggestions.length > 0 && (
                <div className="aap-llm-adopted">
                  <div className="aap-llm-adopted-title">已采纳建议 ({adoptedSuggestions.length})</div>
                  {adoptedSuggestions.slice(-5).reverse().map((a, i) => (
                    <div key={i} className="aap-llm-adopted-item">
                      <span className="aap-llm-adopted-target">{a.target}</span>
                      <span className={`aap-badge ${a.applied ? 'aap-badge-on' : ''}`}>
                        {a.applied ? '已应用' : '待手动'}
                      </span>
                      <span className="aap-llm-adopted-time">{formatTime(a.timestamp).split(' ')[1]}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* pack32: LLM 训练统计 */}
              {llmTrainingStats.totalAnalysis > 0 && (
                <div className="aap-llm-training-stats">
                  <div className="aap-llm-stats-title">LLM 训练统计</div>
                  <div className="aap-llm-stats-grid">
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.totalAnalysis}</span>
                      <span className="aap-llm-stat-label">分析次数</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.totalSuggestions}</span>
                      <span className="aap-llm-stat-label">建议总数</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.adoptedCount}</span>
                      <span className="aap-llm-stat-label">已采纳</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">
                        {llmTrainingStats.totalSuggestions > 0
                          ? `${((llmTrainingStats.adoptedCount / llmTrainingStats.totalSuggestions) * 100).toFixed(0)}%`
                          : '-'}
                      </span>
                      <span className="aap-llm-stat-label">采纳率</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.violatedCount}</span>
                      <span className="aap-llm-stat-label">违规拦截</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.qTableFeedbackCount}</span>
                      <span className="aap-llm-stat-label">Q-table 反馈</span>
                    </div>
                    <div className="aap-llm-stat-item">
                      <span className="aap-llm-stat-value">{llmTrainingStats.lastGain > 0 ? llmTrainingStats.lastGain.toFixed(3) : '-'}</span>
                      <span className="aap-llm-stat-label">最近 gain</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ===== pack33 超级进化：资源调配中心 + 本地 LLM 内核 + 自编码 ===== */}
        <div className="aap-section aap-super-evolution">
          <div
            className="aap-section-header"
            onClick={() => setShowSuperEvolution(!showSuperEvolution)}
            role="button"
            tabIndex={0}
          >
            <span className="aap-section-icon">🧬</span>
            <span className="aap-section-title">超级进化 · 资源调配中心</span>
            <span className="aap-section-toggle">{showSuperEvolution ? '▾' : '▸'}</span>
          </div>

          {showSuperEvolution && (
            <div className="aap-section-body">
              {/* 进化等级 + 理解度仪表 */}
              <div className="aap-se-gauges">
                <div className="aap-se-gauge">
                  <div className="aap-se-gauge-val" style={{
                    color: superEvolutionStats.evolutionLevel >= 70 ? 'var(--color-accent-primary)' :
                           superEvolutionStats.evolutionLevel >= 40 ? '#ff8c00' : 'var(--color-text-muted)'
                  }}>
                    {superEvolutionStats.evolutionLevel}
                  </div>
                  <div className="aap-se-gauge-label">进化等级 /100</div>
                </div>
                <div className="aap-se-gauge">
                  <div className="aap-se-gauge-val" style={{
                    color: comprehension.level >= 70 ? 'var(--color-accent-primary)' :
                           comprehension.level >= 40 ? '#ff8c00' : 'var(--color-text-muted)'
                  }}>
                    {comprehension.level}
                  </div>
                  <div className="aap-se-gauge-label">理解度 /100</div>
                </div>
              </div>

              {/* 理解度 4 因子 */}
              <div className="aap-se-factors">
                <div className="aap-se-factor">
                  <span className="aap-se-factor-label">意图清晰度</span>
                  <div className="aap-se-factor-bar"><div className="aap-se-factor-fill" style={{ width: `${comprehension.factors.intentClarity}%` }} /></div>
                  <span className="aap-se-factor-val">{comprehension.factors.intentClarity}</span>
                </div>
                <div className="aap-se-factor">
                  <span className="aap-se-factor-label">上下文丰富度</span>
                  <div className="aap-se-factor-bar"><div className="aap-se-factor-fill" style={{ width: `${comprehension.factors.contextRichness}%` }} /></div>
                  <span className="aap-se-factor-val">{comprehension.factors.contextRichness}</span>
                </div>
                <div className="aap-se-factor">
                  <span className="aap-se-factor-label">历史一致性</span>
                  <div className="aap-se-factor-bar"><div className="aap-se-factor-fill" style={{ width: `${comprehension.factors.historyAlignment}%` }} /></div>
                  <span className="aap-se-factor-val">{comprehension.factors.historyAlignment}</span>
                </div>
                <div className="aap-se-factor">
                  <span className="aap-se-factor-label">资源利用率</span>
                  <div className="aap-se-factor-bar"><div className="aap-se-factor-fill" style={{ width: `${comprehension.factors.resourceUtilization}%` }} /></div>
                  <span className="aap-se-factor-val">{comprehension.factors.resourceUtilization}</span>
                </div>
              </div>

              {/* 超级进化统计 */}
              <div className="aap-se-stats">
                <div className="aap-se-stat"><span className="aap-se-stat-v">{superEvolutionStats.metaLogicRuns}</span><span className="aap-se-stat-l">元逻辑执行</span></div>
                <div className="aap-se-stat"><span className="aap-se-stat-v">{superEvolutionStats.localLLMRuns}</span><span className="aap-se-stat-l">本地LLM推理</span></div>
                <div className="aap-se-stat"><span className="aap-se-stat-v">{superEvolutionStats.selfCodePlans}</span><span className="aap-se-stat-l">自编码方案</span></div>
                <div className="aap-se-stat"><span className="aap-se-stat-v">{superEvolutionStats.resourceDispatches}</span><span className="aap-se-stat-l">资源调配</span></div>
                <div className="aap-se-stat"><span className="aap-se-stat-v">{superEvolutionStats.avgComprehension}</span><span className="aap-se-stat-l">平均理解度</span></div>
              </div>

              {/* 资源调配总线状态 */}
              <div className="aap-se-bus">
                <div className="aap-se-bus-title">📡 资源调配总线</div>
                <div className="aap-se-bus-stats">
                  <span className="aap-se-bus-stat">总调用 {resourceBusState.totalCalls}</span>
                  <span className="aap-se-bus-stat aap-se-bus-ok">成功 {resourceBusState.successCalls}</span>
                  <span className="aap-se-bus-stat aap-se-bus-fail">失败 {resourceBusState.failedCalls}</span>
                </div>
                <div className="aap-se-bus-resources">
                  {resourceBusState.availableResources.map(r => (
                    <span key={r} className="aap-se-bus-res">{r}</span>
                  ))}
                </div>
                {/* 最近资源调用 */}
                {resourceBusState.recentCalls.length > 0 && (
                  <div className="aap-se-bus-recent">
                    {resourceBusState.recentCalls.slice(0, 4).map(c => (
                      <div key={c.id} className={`aap-se-bus-call aap-se-bus-call-${c.result || 'skipped'}`}>
                        <span className="aap-se-bus-call-res">{c.resource}</span>
                        <span className="aap-se-bus-call-act">{c.action}</span>
                        <span className="aap-se-bus-call-result">{c.result || 'skipped'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 元逻辑执行结果 */}
              {lastMetaLogicResult && (
                <div className="aap-se-meta">
                  <div className="aap-se-meta-title">🎯 元逻辑（编码经验库）置信度 {(lastMetaLogicResult.confidence * 100).toFixed(0)}%</div>
                  {lastMetaLogicResult.appliedRules.length > 0 ? (
                    <div className="aap-se-meta-rules">
                      {lastMetaLogicResult.appliedRules.map((rid, i) => (
                        <span key={i} className="aap-se-meta-rule">{rid}</span>
                      ))}
                    </div>
                  ) : (
                    <div className="aap-se-meta-empty">本轮无规则命中（参数均在经验区间内）</div>
                  )}
                  {lastMetaLogicResult.logs.slice(-3).map((log, i) => (
                    <div key={i} className="aap-se-meta-log">{log}</div>
                  ))}
                </div>
              )}

              {/* 本地 LLM 推理结果 */}
              {lastLocalLLMOutput && (
                <div className="aap-se-llm">
                  <div className="aap-se-llm-title">
                    🧠 本地 LLM 内核（离线·来源: {lastLocalLLMOutput.source}）置信度 {(lastLocalLLMOutput.confidence * 100).toFixed(0)}%
                  </div>
                  <div className="aap-se-llm-intent">意图：{lastLocalLLMOutput.intent}</div>
                  {lastLocalLLMOutput.suggestions.length > 0 ? (
                    <div className="aap-se-llm-suggestions">
                      {lastLocalLLMOutput.suggestions.slice(0, 4).map(s => (
                        <div key={s.id} className="aap-se-llm-sug">
                          <span className={`aap-badge aap-prio-${s.priority}`}>{s.priority}</span>
                          <span className="aap-se-llm-sug-target">{s.target}</span>
                          <span className="aap-se-llm-sug-fix">{s.fix}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aap-se-meta-empty">无建议（参数已最优或无明显症状）</div>
                  )}
                </div>
              )}

              {/* 自编码方案 */}
              {lastSelfCodePlan && (
                <div className="aap-se-sc">
                  <div className="aap-se-sc-title">
                    ⚡ 自编码方案（来源: {lastSelfCodePlan.source}）置信度 {(lastSelfCodePlan.confidence * 100).toFixed(0)}%
                  </div>
                  <div className="aap-se-sc-intent">{lastSelfCodePlan.intent}</div>
                  {Object.keys(lastSelfCodePlan.paramChanges).length > 0 && (
                    <div className="aap-se-sc-changes">
                      {Object.entries(lastSelfCodePlan.paramChanges).map(([k, v]) => (
                        <span key={k} className="aap-se-sc-change">{k} → {String(v)}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 手动触发按钮 */}
              <button
                className="aap-btn aap-btn-evolve"
                onClick={handleRunSuperEvolution}
                disabled={isEvolving}
              >
                {isEvolving ? '进化中…' : '🧬 手动触发超级进化'}
              </button>
            </div>
          )}
        </div>

        {/* ===== pack34 代码级自优化：Kimi 超级升级 + 编码经验注入 ===== */}
        <div className="aap-section aap-code-self-optimize">
          <div
            className="aap-section-header"
            onClick={() => setShowCodeSelfOptimize(!showCodeSelfOptimize)}
            role="button"
            tabIndex={0}
          >
            <span className="aap-section-icon">🛠️</span>
            <span className="aap-section-title">代码级自优化 · Kimi 超级升级</span>
            <span className="aap-section-toggle">{showCodeSelfOptimize ? '▾' : '▸'}</span>
            {codeSelfOptimizeConfig.enabled && <span className="aap-badge aap-badge-on">已启用</span>}
            {codingExperienceInjection && (
              <span className="aap-badge" style={{ background: 'rgba(59,130,246,0.2)', color: '#3b82f6' }}>
                {codingExperienceInjection.injectedCount} 条编码经验
              </span>
            )}
          </div>

          {showCodeSelfOptimize && (
            <div className="aap-section-body">
              {/* 配置区 */}
              <div className="aap-cso-config">
                <label className="aap-llm-toggle">
                  <input
                    type="checkbox"
                    checked={codeSelfOptimizeConfig.enabled}
                    onChange={e => updateCodeSelfOptimizeConfig({ enabled: e.target.checked })}
                  />
                  <span>启用代码级自优化（生成代码补丁 + 自动审查）</span>
                </label>

                <div className="aap-cso-config-grid">
                  <label className="aap-cso-row">
                    <span>每轮最大补丁数：</span>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={codeSelfOptimizeConfig.maxPatchesPerRun}
                      onChange={e => updateCodeSelfOptimizeConfig({ maxPatchesPerRun: parseInt(e.target.value) || 8 })}
                    />
                  </label>

                  <label className="aap-cso-row">
                    <span>最大允许风险：</span>
                    <input
                      type="range"
                      min={0.1}
                      max={1}
                      step={0.05}
                      value={codeSelfOptimizeConfig.maxAllowedRisk}
                      onChange={e => updateCodeSelfOptimizeConfig({ maxAllowedRisk: parseFloat(e.target.value) })}
                    />
                    <b> {Math.round(codeSelfOptimizeConfig.maxAllowedRisk * 100)}%</b>
                  </label>

                  <label className="aap-cso-row">
                    <input
                      type="checkbox"
                      checked={codeSelfOptimizeConfig.autoValidate}
                      onChange={e => updateCodeSelfOptimizeConfig({ autoValidate: e.target.checked })}
                    />
                    <span>语法级自动校验</span>
                  </label>
                  <label className="aap-cso-row">
                    <input
                      type="checkbox"
                      checked={codeSelfOptimizeConfig.autoRollback}
                      onChange={e => updateCodeSelfOptimizeConfig({ autoRollback: e.target.checked })}
                    />
                    <span>失败自动回溯（关键）</span>
                  </label>
                  <label className="aap-cso-row">
                    <input
                      type="checkbox"
                      checked={codeSelfOptimizeConfig.forceBackup}
                      onChange={e => updateCodeSelfOptimizeConfig({ forceBackup: e.target.checked })}
                    />
                    <span>修改前强制备份</span>
                  </label>
                  <label className="aap-cso-row">
                    <span>首选 Provider：</span>
                    <select
                      value={codeSelfOptimizeConfig.preferredProvider}
                      onChange={e => updateCodeSelfOptimizeConfig({ preferredProvider: e.target.value as any })}
                    >
                      <option value="kimi">Kimi（Moonshot）</option>
                      <option value="openai-compatible">OpenAI 兼容</option>
                      <option value="gemini">Gemini</option>
                    </select>
                  </label>
                </div>

                <div className="aap-cso-paths">
                  <div className="aap-cso-paths-title">📁 路径策略（白/黑名单）</div>
                  <div className="aap-cso-paths-list">
                    <div className="aap-cso-path-row aap-cso-path-allow">
                      白名单：{codeSelfOptimizeConfig.allowedFilePatterns.join(' · ')}
                    </div>
                    <div className="aap-cso-path-row aap-cso-path-forbid">
                      黑名单：{codeSelfOptimizeConfig.forbiddenPatterns.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* 代码库索引 */}
              <div className="aap-cso-index">
                <div className="aap-cso-subtitle">
                  📚 代码库索引（给 LLM 构建知识库）
                  <button
                    className="aap-btn aap-btn-sm"
                    onClick={() => buildCodebaseIndexAsync(120)}
                  >
                    {codebaseIndex ? '🔄 重新索引' : '🔍 构建索引'}
                  </button>
                  {codebaseIndex && (
                    <button
                      className="aap-btn aap-btn-sm"
                      onClick={() => setShowIndexStats(!showIndexStats)}
                    >
                      {showIndexStats ? '收起详情' : '📊 查看详情'}
                    </button>
                  )}
                </div>
                {codebaseIndex && (
                  <div className="aap-cso-index-stats">
                    <div className="aap-cso-stat">
                      <b>{codebaseIndex.totalFiles}</b><span>文件数</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{codebaseIndex.summaryLines}</b><span>摘要行</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{codebaseIndex.totalKeywords}</b><span>关键词</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{new Date(codebaseIndex.indexedAt).toLocaleTimeString('zh-CN')}</b><span>索引时间</span>
                    </div>
                    {showIndexStats && (
                      <div className="aap-cso-index-detail">
                        <div className="aap-cso-files">
                          {codebaseIndex.files.slice(0, 12).map(f => (
                            <div key={f.path} className="aap-cso-file">
                              <span className="aap-cso-file-path">{f.path}</span>
                              <span className="aap-cso-file-meta">
                                {f.language} · 约 {Math.ceil(f.content.length / 1024)}KB · {f.keywords.length} 关键词
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 编码经验注入 */}
              <div className="aap-cso-experiences">
                <div className="aap-cso-subtitle">
                  💡 编码经验注入（把所有 AI 编码经验喂给 LLM 学习）
                  <button className="aap-btn aap-btn-sm" onClick={refreshCodingExperiences}>🔄 刷新经验库</button>
                  <button className="aap-btn aap-btn-sm" onClick={() => setShowExperiences(!showExperiences)}>
                    {showExperiences ? '收起清单' : '📋 查看清单'}
                  </button>
                </div>
                {codingExperienceInjection && (
                  <div className="aap-cso-exp-stats">
                    <div className="aap-cso-stat">
                      <b>{codingExperienceInjection.injectedCount}</b><span>经验条目</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{Object.keys(codingExperienceInjection.categories).length}</b><span>覆盖分类</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{codingExperienceInjection.estimatedTokenBudget.toLocaleString()}</b><span>Token 预算</span>
                    </div>
                    <div className="aap-cso-stat">
                      <b>{codingExperienceInjection.fewShotCount}</b><span>Few-shot 正例</span>
                    </div>
                    <div className="aap-cso-categories">
                      {Object.entries(codingExperienceInjection.categories).map(([cat, n]) => (
                        <span key={cat} className="aap-cso-cat-tag">#{cat} ×{n}</span>
                      ))}
                    </div>
                  </div>
                )}
                {showExperiences && (
                  <div className="aap-cso-exp-list">
                    {codingExperiences.slice(0, 16).map(e => (
                      <div key={e.id} className={`aap-cso-exp aap-cso-exp-p${e.priority}`}>
                        <div className="aap-cso-exp-head">
                          <span className="aap-cso-exp-cat">{e.category}</span>
                          <span className="aap-cso-exp-title">{e.title}</span>
                          <span className="aap-badge" style={{ fontSize: 10, padding: '2px 6px' }}>
                            priority {e.priority}
                          </span>
                        </div>
                        <div className="aap-cso-exp-desc">{e.description}</div>
                        <div className="aap-cso-exp-practice">✅ {e.practice}</div>
                        {e.antiExample && <div className="aap-cso-exp-anti">🚫 {e.antiExample}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* 追加自定义经验 */}
                <div className="aap-cso-exp-form">
                  <div className="aap-cso-exp-form-title">➕ 追加自定义编码经验（会被注入 LLM prompt）</div>
                  <input
                    type="text"
                    placeholder="经验标题（如：禁止使用 any，需精确类型）"
                    value={newExpTitle}
                    onChange={e => setNewExpTitle(e.target.value)}
                    className="aap-cso-input"
                  />
                  <input
                    type="text"
                    placeholder="描述"
                    value={newExpDesc}
                    onChange={e => setNewExpDesc(e.target.value)}
                    className="aap-cso-input"
                  />
                  <input
                    type="text"
                    placeholder="推荐做法"
                    value={newExpPractice}
                    onChange={e => setNewExpPractice(e.target.value)}
                    className="aap-cso-input"
                  />
                  <button
                    className="aap-btn aap-btn-sm aap-btn-primary"
                    disabled={!newExpTitle || !newExpDesc || !newExpPractice}
                    onClick={() => {
                      const ok = addCustomCodingExperience({
                        category: 'user-defined',
                        title: newExpTitle,
                        description: newExpDesc,
                        trigger: '任意场景',
                        practice: newExpPractice,
                        source: 'user',
                        priority: 2,
                      })
                      if (ok) {
                        setNewExpTitle(''); setNewExpDesc(''); setNewExpPractice('')
                      }
                    }}
                  >
                    💾 添加经验
                  </button>
                </div>
              </div>

              {/* 运行自优化 */}
              <div className="aap-cso-run">
                <div className="aap-cso-subtitle">🚀 执行代码级自优化（Kimi Context Caching + 补丁闭环）</div>
                <textarea
                  className="aap-cso-textarea"
                  value={codeOptimizeIntent}
                  onChange={e => setCodeOptimizeIntent(e.target.value)}
                  rows={3}
                  placeholder="告诉 LLM 你想优化什么：例如「移除 src/ai 下所有未使用的导入」「AIAgentContext 里所有回调依赖列全」「把 color red 统一改成 CSS 变量」"
                />
                <div className="aap-cso-run-actions">
                  <button
                    className="aap-btn"
                    onClick={() => runCodeSelfOptimizeAsync(codeOptimizeIntent, true)}
                    disabled={isSelfOptimizing}
                    title="仅走本地 Q-table + 元逻辑（无外部 API 调用），适合快速测试流程"
                  >
                    🧠 本地 LLM（不调外部 API）
                  </button>
                  <button
                    className="aap-btn aap-btn-primary aap-btn-lg"
                    onClick={() => runCodeSelfOptimizeAsync(codeOptimizeIntent, false)}
                    disabled={isSelfOptimizing || !codeSelfOptimizeConfig.enabled || !llmConfig.enabled || !llmConfig.apiKey}
                    title="调用外部 LLM（Kimi/OpenAI Compatible）根据索引+经验生成补丁；浏览器端先做内存 dry-run"
                  >
                    {isSelfOptimizing ? '⏳ 补丁生成+审查中…' : '✨ 运行代码级自优化（调外部 LLM）'}
                  </button>
                </div>
                {(!llmConfig.apiKey || !llmConfig.enabled) && (
                  <div className="aap-warn">
                    请先在上方「LLM 优化分析」启用并配置 API Key（推荐 Kimi，支持 128K 上下文 + Context Caching + 文件上传抽取）。
                  </div>
                )}
              </div>

              {/* 最近结果展示 */}
              {lastSelfOptimizeResult && (
                <div className="aap-cso-result">
                  <div className="aap-cso-subtitle">📝 最近一次执行结果</div>
                  <div className="aap-cso-result-meta">
                    <span>准备：{lastSelfOptimizeResult.prepareTimeMs}ms</span>
                    <span>生成：{lastSelfOptimizeResult.generateTimeMs}ms</span>
                    <span>应用+校验：{lastSelfOptimizeResult.applyTimeMs}ms</span>
                  </div>
                  {lastSelfOptimizeResult.error && (
                    <div className="aap-error">❌ 错误：{lastSelfOptimizeResult.error}</div>
                  )}
                  {lastSelfOptimizeResult.plan && (
                    <div className="aap-cso-plan">
                      <div className="aap-cso-plan-head">
                        <b>{lastSelfOptimizeResult.plan.title}</b>
                        <span className="aap-badge" style={{
                          background: lastSelfOptimizeResult.plan.riskAssessment === 'high' ? 'rgba(239,68,68,0.2)' :
                            lastSelfOptimizeResult.plan.riskAssessment === 'medium' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)',
                          color: lastSelfOptimizeResult.plan.riskAssessment === 'high' ? '#ef4444' :
                            lastSelfOptimizeResult.plan.riskAssessment === 'medium' ? '#f59e0b' : '#10b981',
                        }}>
                          风险：{lastSelfOptimizeResult.plan.riskAssessment}
                        </span>
                        <span>置信度 {Math.round(lastSelfOptimizeResult.plan.confidence * 100)}%</span>
                        <span>{lastSelfOptimizeResult.plan.patches.length} 个补丁</span>
                      </div>
                      <div className="aap-cso-plan-desc">{lastSelfOptimizeResult.plan.description}</div>
                      {lastSelfOptimizeResult.dryRun?.run.patchResults && (
                        <div className="aap-cso-patches">
                          {lastSelfOptimizeResult.plan.patches.slice(0, 8).map((patch, idx) => {
                            const r = lastSelfOptimizeResult.dryRun!.run.patchResults[idx]
                            const statusColor =
                              r?.status === 'applied' ? 'var(--color-success, #10b981)' :
                              r?.status === 'rolledback' ? '#f59e0b' :
                              r?.status === 'validation-failed' ? '#ef4444' :
                              r?.status === 'match-failed' ? 'rgba(239,68,68,0.7)' : '#6b7280'
                            return (
                              <div key={patch.id} className="aap-cso-patch" style={{ borderLeftColor: statusColor }}>
                                <div className="aap-cso-patch-head">
                                  <span className="aap-cso-patch-file">{patch.filePath}</span>
                                  <span className="aap-badge" style={{ color: statusColor, background: `${statusColor}15` }}>
                                    {r?.status || 'pending'}
                                  </span>
                                  <span>风险 {Math.round(patch.risk * 100)}%</span>
                                  <span className="aap-cso-domain">{patch.domain}</span>
                                </div>
                                <div className="aap-cso-patch-reason">💡 {patch.reason}</div>
                                {patch.expectedGain && <div className="aap-cso-patch-gain">🎯 预期：{patch.expectedGain}</div>}
                                {patch.rationale && <div className="aap-cso-patch-rationale">🧠 {patch.rationale}</div>}
                                <details>
                                  <summary>查看补丁差异（old → new）</summary>
                                  <pre className="aap-cso-diff-old">- {patch.oldSnippet}</pre>
                                  <pre className="aap-cso-diff-new">+ {patch.newSnippet}</pre>
                                </details>
                                {r?.errorMessage && <div className="aap-error-small">{r.errorMessage}</div>}
                              </div>
                            )
                          })}
                        </div>
                      )}
                      {lastSelfOptimizeResult.dryRun && (
                        <div className="aap-cso-summary">
                          <div>总体状态：<b className={
                            lastSelfOptimizeResult.dryRun.run.overallStatus === 'success' ? 'aap-ok' :
                              lastSelfOptimizeResult.dryRun.run.overallStatus === 'rolledback' ? 'aap-warn-cls' :
                              lastSelfOptimizeResult.dryRun.run.overallStatus === 'partial' ? 'aap-warn-cls' : 'aap-error'
                          }>{lastSelfOptimizeResult.dryRun.run.overallStatus}</b></div>
                          <div>语法检查：{lastSelfOptimizeResult.dryRun.syntaxOk ? '✅ 通过' : '❌ 失败（已回滚）'}</div>
                          <div>耗时：{lastSelfOptimizeResult.dryRun.run.durationMs}ms</div>
                          <div>📌 {lastSelfOptimizeResult.dryRun.run.summary}</div>
                          {lastSelfOptimizeResult.dryRun.syntaxErrors.length > 0 && (
                            <ul className="aap-error-list">
                              {lastSelfOptimizeResult.dryRun.syntaxErrors.slice(0, 5).map((e, i) => <li key={i}>{e}</li>)}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 历史 runs */}
              {lastSelfOptimizeRuns.length > 0 && (
                <div className="aap-cso-runs">
                  <div className="aap-cso-subtitle">🕑 最近代码自优化历史</div>
                  <div className="aap-cso-runs-list">
                    {lastSelfOptimizeRuns.map(r => (
                      <div key={r.id} className={`aap-cso-run-item aap-cso-${r.overallStatus}`}>
                        <span>{new Date(r.timestamp).toLocaleTimeString('zh-CN')}</span>
                        <span className={`aap-cso-run-status`}>{r.overallStatus}</span>
                        <span>{r.patchResults.filter(p => p.status === 'applied').length}/{r.plan?.patches.length || 0} 应用</span>
                        <span>{r.syntaxOk ? '✅语法OK' : '❌语法错'}</span>
                        <span>{r.durationMs}ms</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
    </div>
  )
}

export default AIAgentPanel
