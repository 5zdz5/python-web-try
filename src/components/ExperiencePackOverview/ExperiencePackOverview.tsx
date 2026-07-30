/**
 * 经验包展示说明面板（实时版块概览 + 更新规则）
 *
 * 功能：从 generatePackOverview() 动态拉取 12 个版块的实时状态，
 * 展示：① 汇总统计 ② 各版块详情（可展开）③ 更新规则汇总
 *
 * 调用：主页"📦 经验包展示"按钮点击后弹出
 */
import { useState, useEffect } from 'react'
import './ExperiencePackOverview.css'
import type { PackSectionStatus } from '../../ai/packSplits'

interface PackOverviewData {
  meta: { packVersion: string; parentPack: string; totalItems: number; estimatedKb: number }
  sections: PackSectionStatus[]
  totalItems: number
  updateRulesSummary: string
}

interface Props {
  onClose: () => void
}

export default function ExperiencePackOverview({ onClose }: Props) {
  const [data, setData] = useState<PackOverviewData | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'sections' | 'rules'>('sections')

  useEffect(() => {
    import('../../ai/packSplits').then(mod => {
      setData(mod.generatePackOverview() as PackOverviewData)
    })
  }, [])

  if (!data) {
    return (
      <div className="epo-overlay" onClick={onClose}>
        <div className="epo-modal" onClick={e => e.stopPropagation()}>
          <div className="epo-loading">📦 正在加载经验包版块概览...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="epo-overlay" onClick={onClose}>
      <div className="epo-modal" onClick={e => e.stopPropagation()}>
        <header className="epo-header">
          <div>
            <h2 className="epo-title">
              <span>📦</span>
              经验包展示说明
              <span className="epo-badge">v{data.meta.packVersion}</span>
            </h2>
            <p className="epo-subtitle">
              {data.sections.length} 个版块 · {data.totalItems} 条记录 · 实时从主经验包动态计算
            </p>
          </div>
          <button className="epo-close" onClick={onClose} aria-label="关闭">✕</button>
        </header>

        {/* 汇总统计 */}
        <div className="epo-content">
          <div className="epo-summary-grid">
            <div className="epo-stat-card">
              <div className="epo-stat-value">{data.sections.length}</div>
              <div className="epo-stat-label">版块总数</div>
            </div>
            <div className="epo-stat-card">
              <div className="epo-stat-value">{data.totalItems}</div>
              <div className="epo-stat-label">条目总计</div>
            </div>
            <div className="epo-stat-card">
              <div className="epo-stat-value">{data.sections.filter(s => s.splitFn !== '—').length}</div>
              <div className="epo-stat-label">可拆子包</div>
            </div>
            <div className="epo-stat-card">
              <div className="epo-stat-value">{data.meta.estimatedKb}</div>
              <div className="epo-stat-label">概览体积(KB)</div>
            </div>
          </div>
        </div>

        {/* Tab 导航 */}
        <nav className="epo-tabs">
          <button
            className={`epo-tab ${activeTab === 'sections' ? 'active' : ''}`}
            onClick={() => setActiveTab('sections')}
          >
            📋 版块详情（{data.sections.length}）
          </button>
          <button
            className={`epo-tab ${activeTab === 'rules' ? 'active' : ''}`}
            onClick={() => setActiveTab('rules')}
          >
            📏 更新规则汇总
          </button>
        </nav>

        <section className="epo-content">
          {activeTab === 'sections' && (
            <div className="epo-sections-list">
              {data.sections.map(sec => (
                <div key={sec.id} className="epo-section">
                  <div
                    className="epo-section-head"
                    onClick={() => setExpandedSection(expandedSection === sec.id ? null : sec.id)}
                  >
                    <span className="epo-section-icon">{sec.icon}</span>
                    <span className="epo-section-name">{sec.name}</span>
                    <span className="epo-section-count">{sec.itemCount} 条</span>
                    <span className="epo-section-build">pack{sec.lastUpdatedBuild}</span>
                    <span className="epo-section-toggle">
                      {expandedSection === sec.id ? '− 收起' : '+ 展开'}
                    </span>
                  </div>
                  {expandedSection === sec.id && (
                    <div className="epo-section-detail">
                      <div className="epo-detail-row">
                        <div className="epo-detail-label">说明</div>
                        <div className="epo-detail-text">{sec.description}</div>
                      </div>
                      <div className="epo-detail-row">
                        <div className="epo-detail-label">更新规则</div>
                        <div className="epo-detail-text rule">{sec.updateRule}</div>
                      </div>
                      <div className="epo-detail-row">
                        <div className="epo-detail-label">分类分布</div>
                        <div className="epo-categories">
                          {Object.entries(sec.categoryBreakdown).map(([cat, count]) => (
                            <span key={cat} className="epo-cat-tag">
                              {cat}<span className="epo-cat-count">{count}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="epo-detail-row">
                        <div className="epo-detail-label">数据源</div>
                        <div className="epo-detail-text">
                          <span className="epo-source-tag">{sec.sourceConst}</span>
                          {sec.splitFn !== '—' && (
                            <span className="epo-source-tag">{sec.splitFn}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="epo-rules-section">
              <h3>各版块更新规则一览</h3>
              {data.updateRulesSummary.split('\n').map((line, i) => (
                <div key={i} className="epo-rule-line">{line}</div>
              ))}
              <div style={{ marginTop: 16 }}>
                <h3>各版块详细更新触发条件</h3>
                {data.sections.map(sec => (
                  <div key={sec.id} className="epo-rule-line">
                    {sec.icon} {sec.name}：{sec.updateRule}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <footer className="epo-footer">
          <span className="epo-footnote">
            ⚠️ 本面板所有数据从 generatePackOverview() 实时计算，主经验包变更后自动同步
          </span>
        </footer>
      </div>
    </div>
  )
}
