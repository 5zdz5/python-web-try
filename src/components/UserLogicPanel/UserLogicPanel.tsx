/**
 * 用户思维模式归纳面板（动态归纳，从 packSplits.ts 实时读取）
 *
 * 功能：从 generateUserLogicPack() 动态拉取用户思维模式数据，
 * 展示：① 5步核心框架 ② 8个洞察（可点击展开详情）③ 关键词云 ④ 硬约束列表
 *
 * 调用：主页"思维模式归纳"按钮点击后弹出
 */
import { useState, useEffect, useMemo } from 'react'
import './UserLogicPanel.css'
import type { UserLogicPack, UserLogicInsight } from '../../ai/packSplits'

interface Props {
  onClose: () => void
}

export default function UserLogicPanel({ onClose }: Props) {
  const [data, setData] = useState<UserLogicPack | null>(null)
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'framework' | 'insights' | 'keywords' | 'constraints'>('framework')

  useEffect(() => {
    // 动态加载，不 import 顶部避免循环依赖
    import('../../ai/packSplits').then(mod => {
      setData(mod.generateUserLogicPack())
    })
  }, [])

  const maxKeywordWeight = useMemo(() => {
    if (!data) return 1
    return Math.max(...data.keywordCloud.map(k => k.weight), 1)
  }, [data])

  if (!data) {
    return (
      <div className="ulp-overlay" onClick={onClose}>
        <div className="ulp-modal" onClick={e => e.stopPropagation()}>
          <div className="ulp-loading">🧠 正在动态归纳用户思维模式...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="ulp-overlay" onClick={onClose}>
      <div className="ulp-modal" onClick={e => e.stopPropagation()}>
        <header className="ulp-header">
          <div>
            <h2 className="ulp-title">
              <span className="ulp-title-icon">🧠</span>
              思维模式归纳
              <span className="ulp-badge">v{data.meta.packVersion}</span>
            </h2>
            <p className="ulp-subtitle">
              从 {data.meta.parentPack} 自动归纳 · {data.insights.length} 条洞察 · 可跨界迁移到任何项目
            </p>
          </div>
          <button className="ulp-close" onClick={onClose} aria-label="关闭">✕</button>
        </header>

        <nav className="ulp-tabs">
          {([
            ['framework', `① 核心框架（5步闭环）`],
            ['insights', `② 具体洞察（${data.insights.length}）`],
            ['keywords', `③ 关键词云（${data.keywordCloud.length}）`],
            ['constraints', `④ 硬约束（${data.hardConstraints.length}）`],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              className={`ulp-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </nav>

        <section className="ulp-content">
          {activeTab === 'framework' && (
            <div className="ulp-framework">
              <h3 className="ulp-section-title">{data.coreFramework.name}</h3>
              <div className="ulp-framework-flow">
                {data.coreFramework.steps.map(step => (
                  <div key={step.step} className="ulp-step">
                    <div className="ulp-step-num">S{step.step}</div>
                    <div className="ulp-step-body">
                      <div className="ulp-step-name">{step.name}</div>
                      <div className="ulp-step-desc">{step.description}</div>
                      <div className="ulp-step-example">💡 {step.example}</div>
                    </div>
                  </div>
                ))}
                <div className="ulp-flow-arrow">↻ 每轮迭代循环进化</div>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="ulp-insights">
              {data.insights.map((insight: UserLogicInsight) => (
                <div
                  key={insight.id}
                  className={`ulp-insight ${expandedInsight === insight.id ? 'expanded' : ''}`}
                >
                  <header className="ulp-insight-head" onClick={() => setExpandedInsight(expandedInsight === insight.id ? null : insight.id)}>
                    <div className="ulp-insight-title">
                      <span className="ulp-insight-icon">🎯</span>
                      <span>{insight.name}</span>
                    </div>
                    <span className="ulp-insight-toggle">{expandedInsight === insight.id ? '− 收起' : '+ 展开'}</span>
                  </header>
                  <p className="ulp-insight-desc">{insight.description}</p>
                  {expandedInsight === insight.id && (
                    <div className="ulp-insight-detail">
                      <div className="ulp-detail-block">
                        <h4>🌐 跨界迁移举例</h4>
                        <p>{insight.crossDomainExample}</p>
                      </div>
                      <div className="ulp-detail-block">
                        <h4>✅ 可执行步骤</h4>
                        <ol>
                          {insight.actionableSteps.map((s, i) => <li key={i}>{s}</li>)}
                        </ol>
                      </div>
                      <div className="ulp-detail-block">
                        <h4>📎 提取来源</h4>
                        <ul className="ulp-refs">
                          {insight.sourceRefs.map((ref, i) => <li key={i}>{ref}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'keywords' && (
            <div className="ulp-keywords">
              <h3 className="ulp-section-title">高频强调关键词（按权重）</h3>
              <div className="ulp-keywords-cloud">
                {data.keywordCloud.map((k, i) => {
                  const scale = 0.8 + (k.weight / maxKeywordWeight) * 1.5
                  return (
                    <span
                      key={i}
                      className="ulp-keyword"
                      style={{ fontSize: `${scale}em` }}
                      title={`权重: ${k.weight}`}
                    >
                      {k.word}
                    </span>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'constraints' && (
            <div className="ulp-constraints">
              <h3 className="ulp-section-title">硬约束清单（用户明确说必须/禁止的事）</h3>
              <ul className="ulp-constraint-list">
                {data.hardConstraints.map((c, i) => (
                  <li key={i}>
                    <span className={`ulp-constraint-type ${c.text.includes('禁止') || c.text.includes('绝不') ? 'prohibit' : 'must'}`}>
                      {c.text.includes('禁止') || c.text.includes('绝不') ? '🚫 禁止' : '✅ 必须'}
                    </span>
                    <span className="ulp-constraint-text">{c.text}</span>
                    <span className="ulp-constraint-src">[{c.source}]</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <footer className="ulp-footer">
          <span className="ulp-footnote">
            ⚠️ 本面板内容由 packSplits.ts 从主经验包动态归纳，新增规则会自动同步到这里
          </span>
        </footer>
      </div>
    </div>
  )
}
