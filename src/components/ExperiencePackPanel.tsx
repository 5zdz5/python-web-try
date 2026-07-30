/**
 * 大模型经验包面板组件
 *
 * 挂在监测仪表盘的 "📦 Experience Pack" Tab，提供：
 *   1. 经验包预览（元信息/模块统计/快速上手）
 *   2. 一键下载 JSON 经验包
 *   3. 模块归类可视化（按 10 类模块分类展示）
 *   4. 历史教训检索
 *   5. 扩展路线图展示
 */
import { useMemo, useState } from 'react'
import type { ExperiencePack, ModuleCategory, ModuleInfo } from '../types/experiencePack'
import { generateExperiencePack, downloadExperiencePack, estimatePackSizeKb, PACK_VERSION } from '../ai/experiencePack'
import './ExperiencePackPanel.css'

const CATEGORY_LABELS: Record<ModuleCategory, { label: string; color: string; icon: string }> = {
  core:       { label: '核心 (Core)', color: '#ef4444', icon: '🧠' },
  context:    { label: '上下文 (Context)', color: '#8b5cf6', icon: '🔌' },
  component:  { label: '组件 (Component)', color: '#3b82f6', icon: '🧩' },
  page:       { label: '页面 (Page)', color: '#06b6d4', icon: '📄' },
  ai:         { label: 'AI 模块', color: '#10b981', icon: '🤖' },
  data:       { label: '数据 (Data)', color: '#0ea5e9', icon: '💾' },
  config:     { label: '配置 (Config)', color: '#f59e0b', icon: '⚙️' },
  monitor:    { label: '监测 (Monitor)', color: '#14b8a6', icon: '📡' },
  auth:       { label: '认证 (Auth)', color: '#ec4899', icon: '🔐' },
  build:      { label: '构建/部署', color: '#6366f1', icon: '🚀' },
}

function StatCard({ icon, label, value, hint }: { icon: string; label: string; value: string | number; hint?: string }) {
  return (
    <div className="ep-stat">
      <div className="ep-stat-icon">{icon}</div>
      <div className="ep-stat-body">
        <div className="ep-stat-val">{value}</div>
        <div className="ep-stat-label">{label}</div>
        {hint && <div className="ep-stat-hint">{hint}</div>}
      </div>
    </div>
  )
}

function ModuleCard({ mod }: { mod: ModuleInfo }) {
  const [expanded, setExpanded] = useState(false)
  const style = CATEGORY_LABELS[mod.category] || CATEGORY_LABELS.component
  return (
    <div className={`ep-module ep-module-${mod.category}`}>
      <div className="ep-module-head" onClick={() => setExpanded(!expanded)}>
        <span className="ep-module-icon" style={{ background: style.color + '22', color: style.color }}>
          {style.icon}
        </span>
        <div className="ep-module-title">
          <div className="ep-module-name">{mod.name}</div>
          <code className="ep-module-path">{mod.path}</code>
        </div>
        <div className="ep-module-meta">
          <span>{mod.files} 文件</span>
          <span>~{mod.approxLines} 行</span>
          <span className={`ep-expand-arrow ${expanded ? 'open' : ''}`}>▶</span>
        </div>
      </div>
      {expanded && (
        <div className="ep-module-body">
          <p className="ep-module-desc">{mod.description}</p>
          {mod.exports.length > 0 && (
            <div className="ep-module-section">
              <h5>对外导出</h5>
              <div className="ep-exports">{mod.exports.map((e: string, i: number) => <code key={i}>{e}</code>)}</div>
            </div>
          )}
          {mod.extensionPoints.length > 0 && (
            <div className="ep-module-section">
              <h5>💡 扩展点（新增功能时改这里）</h5>
              <ul>{mod.extensionPoints.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
            </div>
          )}
          {mod.pitfalls.length > 0 && (
            <div className="ep-module-section ep-pitfalls">
              <h5>⚠️ 常见陷阱</h5>
              <ul>{mod.pitfalls.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
            </div>
          )}
          <div className="ep-module-section ep-deps">
            <div>
              <h6>依赖（{mod.dependsOn.length}）</h6>
              <div className="ep-dep-tags">
                {mod.dependsOn.length === 0
                  ? <span className="ep-dep-none">无（底层模块）</span>
                  : mod.dependsOn.map((d: string, i: number) => <span key={i} className="ep-dep-tag">{d}</span>)}
              </div>
            </div>
            <div>
              <h6>被依赖（{mod.dependedBy.length}）</h6>
              <div className="ep-dep-tags">
                {mod.dependedBy.length === 0
                  ? <span className="ep-dep-none">无（顶层模块）</span>
                  : mod.dependedBy.map((d: string, i: number) => <span key={i} className="ep-dep-tag">{d}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ExperiencePackPanel() {
  const pack = useMemo<ExperiencePack>(() => generateExperiencePack(), [])
  const sizeKb = useMemo(() => estimatePackSizeKb(), [])

  const [categoryFilter, setCategoryFilter] = useState<ModuleCategory | 'all'>('all')
  const [query, setQuery] = useState('')

  // 模块过滤
  const modules = useMemo(() => {
    return pack.modules.filter(m => {
      if (categoryFilter !== 'all' && m.category !== categoryFilter) return false
      if (query) {
        const q = query.toLowerCase()
        return (
          m.name.toLowerCase().includes(q) ||
          m.path.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.exports.join(' ').toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [pack.modules, categoryFilter, query])

  // 模块分类统计
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {}
    pack.modules.forEach(m => { stats[m.category] = (stats[m.category] || 0) + 1 })
    return stats
  }, [pack.modules])

  // 教训过滤
  const [lessonQuery, setLessonQuery] = useState('')
  const lessons = useMemo(() => {
    if (!lessonQuery) return pack.lessons
    const q = lessonQuery.toLowerCase()
    return pack.lessons.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.problem.toLowerCase().includes(q) ||
      l.solution.toLowerCase().includes(q)
    )
  }, [pack.lessons, lessonQuery])

  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'lessons' | 'roadmap' | 'conventions' | 'patterns'>('overview')
  type TabId = typeof activeTab

  const handleDownload = () => {
    downloadExperiencePack(pack)
  }

  return (
    <div className="ep-container">
      {/* 顶部：介绍 + 下载 */}
      <div className="ep-hero">
        <div className="ep-hero-left">
          <div className="ep-hero-title">📦 大模型经验包</div>
          <div className="ep-hero-subtitle">
            让接手的 AI 模型 30 秒内理解整个项目：模块地图、编码约定、历史教训、扩展路线、可复用组件、Prompt 模板。
          </div>
        </div>
        <div className="ep-hero-right">
          <div className="ep-hero-meta">
            <div>版本: <code>{PACK_VERSION}</code></div>
            <div>大小: ~{sizeKb} KB</div>
            <div>生成: {new Date(pack.meta.generatedAt).toLocaleString('zh-CN', { hour12: false })}</div>
          </div>
          <button className="ep-btn-download" onClick={handleDownload}>
            ⬇ 下载经验包 JSON
          </button>
        </div>
      </div>

      {/* 统计 */}
      <div className="ep-stat-grid">
        <StatCard icon="📁" label="源码文件" value={pack.overview.totalFiles} hint={`TS/TSX ${pack.overview.totalTsFiles} + CSS ${pack.overview.totalCssFiles}`} />
        <StatCard icon="📝" label="总代码行" value={pack.overview.totalLines.toLocaleString()} hint="不含 node_modules / dist" />
        <StatCard icon="🗂" label="功能模块" value={pack.modules.length} hint={`${Object.keys(categoryStats).length} 个分类`} />
        <StatCard icon="🎯" label="关卡/路由" value={`${pack.overview.totalLevels} / ${pack.overview.totalRoutes}`} hint="60 个关卡 + 9 个路由" />
        <StatCard icon="🧩" label="可复用组件" value={pack.components.length} hint="点击面板查看复用方式" />
        <StatCard icon="⚠️" label="历史教训" value={pack.lessons.length} hint="踩坑总结+绕过方案" />
      </div>

      {/* 快速上手给 LLM */}
      <div className="ep-quickstart">
        <div className="ep-quickstart-title">🤖 给新 AI 模型的快速上手步骤</div>
        <ol className="ep-quickstart-steps">
          {pack.quickstartForLLM.map((s, i) => (
            <li key={i}><span className="ep-step-num">Step {i}</span>{s.replace(/^Step \d+\.\s*/, '')}</li>
          ))}
        </ol>
      </div>

      {/* Tab 切换 */}
      <div className="ep-tabs">
        {[
          ['overview', '📌 总览'],
          ['modules', '🗂 模块归类（' + pack.modules.length + '）'],
          ['conventions', '📐 编码约定（' + pack.conventions.length + '）'],
          ['patterns', '🎨 设计模式（' + pack.patterns.length + '）'],
          ['lessons', '⚠️ 历史教训（' + pack.lessons.length + '）'],
          ['roadmap', '🗺 扩展路线（' + pack.roadmap.length + '）'],
        ].map(([id, label]) => (
          <button
            key={id}
            className={`ep-tab ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id as TabId)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab 内容 */}
      <div className="ep-tab-content">
        {/* 总览：架构分层 + 构建约束 + 自检清单 */}
        {activeTab === 'overview' && (
          <div className="ep-overview">
            <div className="ep-section">
              <h3>🏗 架构分层图（从稳定 → 不稳定）</h3>
              <div className="ep-layers">
                {pack.overview.layerGraph.map((layer, i) => (
                  <div key={i} className="ep-layer" style={{ opacity: 1 - i * 0.08 }}>
                    {layer}
                  </div>
                ))}
              </div>
              <p className="ep-layer-rule">依赖方向：{pack.overview.dependencyDirection}</p>
            </div>

            <div className="ep-section">
              <h3>🚀 构建与部署硬性约束（违反必失败）</h3>
              <ul className="ep-hard-rules">
                {pack.build.hardRules.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            <div className="ep-section">
              <h3>✅ 每次提交前自检清单（{pack.preCommitChecklist.length} 项）</h3>
              <ol className="ep-checklist">
                {pack.preCommitChecklist.map((c, i) => <li key={i}>{c}</li>)}
              </ol>
            </div>

            <div className="ep-section">
              <h3>💬 快速 Prompt 模板（新手模型直接套）</h3>
              <div className="ep-prompts">
                {Object.entries(pack.promptTemplates).map(([key, value]) => (
                  <div key={key} className="ep-prompt">
                    <div className="ep-prompt-title">📋 {key.toUpperCase()}</div>
                    <pre className="ep-prompt-body">{value}</pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 模块归类 */}
        {activeTab === 'modules' && (
          <div>
            <div className="ep-filter-bar">
              <input
                type="text"
                placeholder="🔍 搜模块名/路径/导出..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="ep-search"
              />
              <div className="ep-category-filters">
                <button
                  className={`ep-cat ${categoryFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setCategoryFilter('all')}
                >全部 ({pack.modules.length})</button>
                {Object.entries(CATEGORY_LABELS).map(([key, meta]) => {
                  const n = categoryStats[key] || 0
                  if (n === 0) return null
                  return (
                    <button
                      key={key}
                      className={`ep-cat ${categoryFilter === key ? 'active' : ''}`}
                      onClick={() => setCategoryFilter(key as ModuleCategory)}
                      style={categoryFilter === key ? { background: meta.color, color: '#fff' } : {}}
                    >
                      {meta.icon} {meta.label} ({n})
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="ep-module-list">
              {modules.map(m => <ModuleCard key={m.id} mod={m} />)}
              {modules.length === 0 && <div className="ep-empty">没找到匹配的模块</div>}
            </div>
          </div>
        )}

        {/* 编码约定 */}
        {activeTab === 'conventions' && (
          <div className="ep-conventions">
            {pack.conventions.map((c, i) => (
              <div key={i} className={`ep-convention ep-cat-${c.category}`}>
                <div className="ep-con-head">
                  <span className="ep-con-cat">[{c.category}]</span>
                  <span className="ep-con-rule">{c.rule}</span>
                </div>
                <p className="ep-con-desc">{c.description}</p>
                {c.goodExample && <div className="ep-example good"><strong>✓ 推荐</strong><code>{c.goodExample}</code></div>}
                {c.badExample && <div className="ep-example bad"><strong>✗ 避免</strong><code>{c.badExample}</code></div>}
                {c.consequence && <div className="ep-consequence">⚠️ 违反后果：{c.consequence}</div>}
              </div>
            ))}
          </div>
        )}

        {/* 设计模式 */}
        {activeTab === 'patterns' && (
          <div className="ep-patterns">
            {pack.patterns.map((p, i) => (
              <div key={i} className="ep-pattern">
                <div className="ep-pattern-head">
                  <span className="ep-pattern-cat">{p.category}</span>
                  <h4>{p.name}</h4>
                </div>
                <p>{p.description}</p>
                <div className="ep-pattern-meta">
                  <div>📍 <strong>适用位置：</strong>{p.filePattern}</div>
                  <div>💡 <strong>何时使用：</strong>{p.whenToUse}</div>
                  <div>🎯 <strong>示例：</strong>{p.where}</div>
                </div>
                {p.template && (
                  <div className="ep-pattern-template">
                    <div className="ept-title">📝 代码模板</div>
                    <pre>{p.template}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 历史教训 */}
        {activeTab === 'lessons' && (
          <div>
            <input
              type="text"
              placeholder="🔍 搜教训（问题/方案/关键词）..."
              value={lessonQuery}
              onChange={e => setLessonQuery(e.target.value)}
              className="ep-search"
              style={{ marginBottom: 12 }}
            />
            <div className="ep-lessons">
              {lessons.map(l => (
                <details key={l.id} className="ep-lesson">
                  <summary>
                    <span className={`ep-lesson-cat ep-cat-${l.category}`}>{l.category}</span>
                    <span className="ep-lesson-date">{l.date}</span>
                    <span className="ep-lesson-title">{l.title}</span>
                  </summary>
                  <div className="ep-lesson-body">
                    <div className="ep-lesson-grid">
                      <div>
                        <h5>❓ 问题</h5><p>{l.problem}</p>
                        {l.rootCause && (<><h5>🔍 根因</h5><p>{l.rootCause}</p></>)}
                      </div>
                      <div>
                        <h5>✅ 解决方案</h5><p>{l.solution}</p>
                      </div>
                    </div>
                    <h5>📝 步骤</h5>
                    <ol className="ep-steps">{l.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
                    <h5>✅ 验证方法</h5>
                    <p>{l.verification}</p>
                    <h5>📂 相关文件</h5>
                    <div className="ep-files">
                      {l.relatedFiles.map((f, i) => <code key={i}>{f}</code>)}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* 扩展路线 */}
        {activeTab === 'roadmap' && (
          <div className="ep-roadmap">
            {pack.roadmap.map((r, i) => (
              <div key={i} className={`ep-roadmap-item ep-risk-${r.risk} ep-priority-${r.priority}`}>
                <div className="ep-roadmap-head">
                  <span className={`ep-priority ep-priority-${r.priority}`}>{r.priority.toUpperCase()}</span>
                  <h4>{r.item}</h4>
                  <span className={`ep-risk ep-risk-${r.risk}`}>风险 {r.risk}</span>
                </div>
                <p>{r.description}</p>
                <div className="ep-roadmap-meta">
                  <span>🗂 涉及模块：{r.modules.join(' · ')}</span>
                  <span>📝 预估：~{r.estimateLines} 行</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
