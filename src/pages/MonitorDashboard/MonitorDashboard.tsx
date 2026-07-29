import { useState } from 'react'
import { useMonitor } from '../../context/MonitorContext'
import { SOURCE_CODE_ENTRIES } from '../../data/sourceCodeData'
import AIAgentPanel from '../../components/AIAgentPanel'
import type { MonitorGroup, MonitorEvent } from '../../types/monitor'
import './MonitorDashboard.css'

type Tab = 'overview' | 'groups' | 'source' | 'patrol' | 'snapshots' | 'agent'

const STATUS_COLORS: Record<MonitorGroup['status'], string> = {
  healthy: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  crashed: '#dc2626',
}

const STATUS_LABELS: Record<MonitorGroup['status'], string> = {
  healthy: '健康',
  warning: '警告',
  error: '异常',
  crashed: '崩溃',
}

const EVENT_TYPE_LABELS: Record<MonitorEvent['type'], string> = {
  info: '信息',
  warning: '警告',
  error: '错误',
  crash: '崩溃',
  patrol: '巡游',
  snapshot: '快照',
}

function formatTime(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleString('zh-CN', { hour12: false })
  } catch {
    return iso
  }
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`
  const s = Math.floor(ms / 1000)
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  return `${m}m ${s % 60}s`
}

function MonitorDashboard() {
  const {
    groups, events, patrol, startPatrol, stopPatrol, patrolSteps,
    snapshots, createSnapshot, restoreSnapshot, deleteSnapshot,
    summary, generateReport,
  } = useMonitor()

  const [activeTab, setActiveTab] = useState<Tab>('overview')

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: '总览', icon: '📊' },
    { id: 'groups', label: '监测组', icon: '📡' },
    { id: 'source', label: '源码原理', icon: '🔬' },
    { id: 'patrol', label: '巡游记录', icon: '🚀' },
    { id: 'snapshots', label: '快照保险', icon: '💾' },
    { id: 'agent', label: 'AI Agent', icon: '🤖' },
  ]

  const groupList = Object.values(groups)

  const handleExportReport = () => {
    const report = generateReport()
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `monitor-report-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="md-page">
      {/* Hero */}
      <section className="md-hero">
        <div className="md-hero-content">
          <div className="md-badge">
            <span className="md-status-dot md-status-healthy"></span>
            <span>全局监测系统</span>
          </div>
          <h1 className="md-title">
            <span className="md-icon">🛰️</span>
            监测仪表盘
          </h1>
          <p className="md-subtitle">
            分层监测 · 巡游测试 · 快照保险 · 崩溃恢复
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="md-tabs-bar">
        <div className="md-container">
          <div className="md-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`md-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="md-tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="md-content md-container">
        {/* ===== 总览 ===== */}
        {activeTab === 'overview' && (
          <div className="md-panel">
            <div className="md-actions">
              <button className="md-btn md-btn-primary" onClick={handleExportReport}>
                📄 导出报告
              </button>
              {patrol.active ? (
                <button className="md-btn md-btn-danger" onClick={stopPatrol}>
                  ⏹ 停止巡游
                </button>
              ) : (
                <button className="md-btn md-btn-accent" onClick={startPatrol}>
                  ▶ 开始巡游
                </button>
              )}
            </div>

            {/* 汇总卡片 */}
            <div className="md-summary-grid">
              <div className="md-summary-card">
                <div className="md-sc-value">{summary.totalGroups}</div>
                <div className="md-sc-label">总组数</div>
              </div>
              <div className="md-summary-card md-status-healthy-bg">
                <div className="md-sc-value">{summary.healthy}</div>
                <div className="md-sc-label">健康</div>
              </div>
              <div className="md-summary-card md-status-warning-bg">
                <div className="md-sc-value">{summary.warning}</div>
                <div className="md-sc-label">警告</div>
              </div>
              <div className="md-summary-card md-status-error-bg">
                <div className="md-sc-value">{summary.error}</div>
                <div className="md-sc-label">异常</div>
              </div>
              <div className="md-summary-card md-status-crashed-bg">
                <div className="md-sc-value">{summary.crashed}</div>
                <div className="md-sc-label">崩溃</div>
              </div>
            </div>

            {/* 巡游状态卡片 */}
            <div className="md-card">
              <h3 className="md-card-title">🚀 巡游状态</h3>
              {patrol.active ? (
                <>
                  <div className="md-patrol-progress-wrap">
                    <div className="md-patrol-progress-bar">
                      <div
                        className="md-patrol-progress-fill"
                        style={{ width: `${summary.patrolProgress}%` }}
                      ></div>
                    </div>
                    <span className="md-patrol-progress-text">{summary.patrolProgress}%</span>
                  </div>
                  <div className="md-patrol-stats">
                    <span>当前步骤: {patrol.currentStep + 1} / {patrol.totalSteps}</span>
                    <span>通过: {summary.patrolPass}</span>
                    <span>失败: {summary.patrolFail}</span>
                  </div>
                </>
              ) : (
                <div className="md-patrol-stats">
                  <span>状态: 空闲</span>
                  <span>总通过: {summary.patrolPass}</span>
                  <span>总失败: {summary.patrolFail}</span>
                </div>
              )}
            </div>

            {/* 事件统计 */}
            <div className="md-card">
              <h3 className="md-card-title">📡 事件统计</h3>
              <div className="md-event-stats">
                <div className="md-es-row">
                  <span className="md-es-label">总事件数</span>
                  <span className="md-es-val">{summary.totalEvents}</span>
                </div>
                <div className="md-es-row">
                  <span className="md-es-label">错误/崩溃事件</span>
                  <span className="md-es-val">{summary.errorEvents}</span>
                </div>
              </div>
              <div className="md-event-list">
                {events.slice(0, 10).map((evt) => (
                  <div key={evt.id} className={`md-event-item md-event-${evt.type}`}>
                    <span className="md-event-type">{EVENT_TYPE_LABELS[evt.type]}</span>
                    <span className="md-event-source">{evt.source}</span>
                    <span className="md-event-message">{evt.message}</span>
                    <span className="md-event-time">{formatTime(evt.timestamp)}</span>
                  </div>
                ))}
                {events.length === 0 && (
                  <div className="md-empty">暂无事件</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===== 监测组 ===== */}
        {activeTab === 'groups' && (
          <div className="md-panel">
            <h2 className="md-panel-title">📡 监测组列表</h2>
            <p className="md-panel-desc">所有注册的代码监测组及其状态汇报</p>
            <div className="md-group-list">
              {groupList.map((g) => (
                <div key={g.id} className="md-group-card">
                  <div className="md-group-header">
                    <span
                      className="md-status-dot"
                      style={{ background: STATUS_COLORS[g.status] }}
                    ></span>
                    <span className="md-group-name">{g.name}</span>
                    <span className={`md-group-status md-status-text-${g.status}`}>
                      {STATUS_LABELS[g.status]}
                    </span>
                  </div>
                  <div className="md-group-meta">
                    <div className="md-gm-item">
                      <span className="md-gm-label">源文件</span>
                      <code className="md-gm-value">{g.sourceFile || '-'}</code>
                    </div>
                    <div className="md-gm-item">
                      <span className="md-gm-label">检查次数</span>
                      <span className="md-gm-value">{g.checks}</span>
                    </div>
                    <div className="md-gm-item">
                      <span className="md-gm-label">错误次数</span>
                      <span className="md-gm-value">{g.errors}</span>
                    </div>
                    <div className="md-gm-item">
                      <span className="md-gm-label">最后汇报</span>
                      <span className="md-gm-value">{formatTime(g.lastReport)}</span>
                    </div>
                  </div>
                  {g.detail && (
                    <div className="md-group-detail">{g.detail}</div>
                  )}
                </div>
              ))}
              {groupList.length === 0 && (
                <div className="md-empty">暂无注册的监测组</div>
              )}
            </div>
          </div>
        )}

        {/* ===== 源码原理 ===== */}
        {activeTab === 'source' && (
          <div className="md-panel">
            <h2 className="md-panel-title">🔬 源码原理</h2>
            <p className="md-panel-desc">每个代码组的源码实现与设计原理讲解</p>
            <div className="md-source-list">
              {SOURCE_CODE_ENTRIES.map((entry) => (
                <div key={entry.id} className="md-source-card">
                  <div className="md-source-header">
                    <h3 className="md-source-name">{entry.name}</h3>
                    <code className="md-source-file">{entry.file}</code>
                  </div>
                  <div className="md-source-section">
                    <div className="md-source-section-title">功能说明</div>
                    <p className="md-source-text">{entry.description}</p>
                  </div>
                  <div className="md-source-section">
                    <div className="md-source-section-title">原理讲解</div>
                    <p className="md-source-text">{entry.principle}</p>
                  </div>
                  <div className="md-source-section">
                    <div className="md-source-section-title">核心源码</div>
                    <div className="md-code-block">
                      <div className="md-code-header">
                        <span className="md-code-dots">
                          <span className="md-dot md-dot-red"></span>
                          <span className="md-dot md-dot-yellow"></span>
                          <span className="md-dot md-dot-green"></span>
                        </span>
                        <span className="md-code-lang">{entry.file}</span>
                      </div>
                      <pre className="md-code"><code>{entry.code}</code></pre>
                    </div>
                  </div>
                  <div className="md-source-section">
                    <div className="md-source-section-title">监测检查项</div>
                    <ul className="md-checks-list">
                      {entry.monitorChecks.map((check, i) => (
                        <li key={i} className="md-check-item">{check}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== 巡游记录 ===== */}
        {activeTab === 'patrol' && (
          <div className="md-panel">
            <h2 className="md-panel-title">🚀 巡游记录</h2>
            <p className="md-panel-desc">自主导航各页面进行测试的巡游步骤与结果</p>

            {patrol.active && (
              <div className="md-patrol-active">
                <div className="md-patrol-progress-wrap">
                  <div className="md-patrol-progress-bar">
                    <div
                      className="md-patrol-progress-fill"
                      style={{ width: `${summary.patrolProgress}%` }}
                    ></div>
                  </div>
                  <span className="md-patrol-progress-text">{summary.patrolProgress}%</span>
                </div>
                <div className="md-patrol-stats">
                  <span>当前步骤: {patrol.currentStep + 1} / {patrol.totalSteps}</span>
                  {patrol.startTime && (
                    <span>已用时: {formatDuration(Date.now() - patrol.startTime)}</span>
                  )}
                </div>
              </div>
            )}

            <div className="md-patrol-list">
              {patrolSteps.map((step, idx) => {
                const result = patrol.results.find((r) => r.id === step.id)
                const isCurrent = patrol.active && patrol.currentStep === idx
                return (
                  <div
                    key={step.id}
                    className={`md-patrol-step ${isCurrent ? 'current' : ''} ${result ? `md-patrol-${result.status}` : ''}`}
                  >
                    <div className="md-patrol-step-header">
                      <span className="md-patrol-step-idx">{idx + 1}</span>
                      <span className="md-patrol-step-name">{step.name}</span>
                      <code className="md-patrol-step-path">{step.path}</code>
                      <span className="md-patrol-step-group">{step.group}</span>
                      {result && (
                        <span className={`md-patrol-step-status md-status-text-${result.status === 'pass' ? 'healthy' : 'error'}`}>
                          {result.status === 'pass' ? '✓ 通过' : '✗ 失败'}
                        </span>
                      )}
                      {isCurrent && (
                        <span className="md-patrol-step-status md-status-text-warning">进行中...</span>
                      )}
                    </div>
                    <div className="md-patrol-step-checks">
                      {step.checks.map((check, i) => (
                        <span key={i} className="md-check-tag">{check}</span>
                      ))}
                    </div>
                    {result && result.detail && (
                      <div className="md-patrol-step-detail">{result.detail}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ===== 快照保险 ===== */}
        {activeTab === 'snapshots' && (
          <div className="md-panel">
            <div className="md-snapshots-header">
              <div>
                <h2 className="md-panel-title">💾 快照保险</h2>
                <p className="md-panel-desc">巡游前保存的 localStorage 快照，崩溃时可回溯</p>
              </div>
              <button className="md-btn md-btn-accent" onClick={() => createSnapshot()}>
                ➕ 创建新快照
              </button>
            </div>
            <div className="md-snapshot-list">
              {snapshots.map((snap) => (
                <div key={snap.id} className="md-snapshot-card">
                  <div className="md-snapshot-info">
                    <div className="md-snapshot-label">{snap.label}</div>
                    <div className="md-snapshot-time">{formatTime(snap.timestamp)}</div>
                    <div className="md-snapshot-meta">
                      {Object.keys(snap.data).length} 个数据项
                    </div>
                  </div>
                  <div className="md-snapshot-actions">
                    <button
                      className="md-btn md-btn-sm md-btn-primary"
                      onClick={() => restoreSnapshot(snap.id)}
                    >
                      ↩ 回溯
                    </button>
                    <button
                      className="md-btn md-btn-sm md-btn-danger"
                      onClick={() => deleteSnapshot(snap.id)}
                    >
                      🗑 删除
                    </button>
                  </div>
                </div>
              ))}
              {snapshots.length === 0 && (
                <div className="md-empty">暂无快照，点击"创建新快照"开始</div>
              )}
            </div>
          </div>
        )}

        {/* ===== AI Agent ===== */}
        {activeTab === 'agent' && (
          <div className="md-panel">
            <div className="md-agent-intro">
              <h2 className="md-panel-title">🤖 AI Agent 自主迭代优化</h2>
              <p className="md-panel-desc">
                浏览器端 AI Agent，通过"观察→分析→决策→快照→执行→验证→提交/回溯"循环自主优化。
                每次执行前创建版本号快照，评分下降超阈值时自动回溯，首页受保护永不修改。
              </p>
            </div>
            <AIAgentPanel />
          </div>
        )}
      </div>
    </div>
  )
}

export default MonitorDashboard
