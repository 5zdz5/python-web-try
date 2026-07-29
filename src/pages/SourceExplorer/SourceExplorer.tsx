import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './SourceExplorer.css'
import {
  DOC_VERSION, DOC_LAST_UPDATE, DOC_CHANGES,
  TECH_STACK, FILE_TREE, FEATURES, PRINCIPLES, MIGRATION_STEPS,
  FileNode
} from '../../data/projectDocs'
import { levels } from '../../data/mockData'
import { runoobTopics } from '../../data/runoobTopics'
import { CATEGORY_ORDER } from '../../config/categories'
import ExperiencePackPanel from '../../components/ExperiencePackPanel'

type Tab = 'overview' | 'files' | 'features' | 'principles' | 'migration' | 'experience'

function FileTreeNode({ node, depth }: { node: FileNode; depth: number }) {
  const [expanded, setExpanded] = useState(depth < 2)
  const isFolder = node.type === 'folder'

  return (
    <div className="file-node">
      <div
        className={`file-row ${isFolder ? 'folder' : 'file'}`}
        style={{ paddingLeft: `${depth * 20 + 12}px` }}
        onClick={() => isFolder && setExpanded(!expanded)}
      >
        <span className="file-icon">
          {isFolder ? (expanded ? '📂' : '📁') : getFileIcon(node.name)}
        </span>
        <span className="file-name">{node.name}</span>
        <span className="file-desc">{node.desc}</span>
      </div>
      {isFolder && expanded && node.children && (
        <div className="file-children">
          {node.children.map((child) => (
            <FileTreeNode key={child.path} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function getFileIcon(name: string): string {
  if (name.endsWith('.tsx') || name.endsWith('.ts')) return '📘'
  if (name.endsWith('.css')) return '🎨'
  if (name.endsWith('.json')) return '📋'
  if (name.endsWith('.yml') || name.endsWith('.yaml')) return '⚙️'
  if (name.endsWith('.md')) return '📝'
  return '📄'
}

function SourceExplorer() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  // 迭代适配：项目规模统计从实际数据自动计算，新增关卡/卡片/分类时无需改 UI
  const stats = useMemo(() => {
    const totalLessons = levels.reduce((s, l) => s + (l.lessons || 0), 0)
    const totalChallenges = levels.reduce((s, l) => s + (l.challenges || 0), 0)
    return {
      levels: levels.length,
      categories: CATEGORY_ORDER.length,
      topics: runoobTopics.length,
      lessons: totalLessons,
      challenges: totalChallenges
    }
  }, [])

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: '总览', icon: '🏠' },
    { id: 'files', label: '源码结构', icon: '📂' },
    { id: 'features', label: '功能清单', icon: '✨' },
    { id: 'principles', label: '核心原理', icon: '🔬' },
    { id: 'migration', label: '迁移指南', icon: '🚀' },
    { id: 'experience', label: '经验包', icon: '📦' }
  ]

  return (
    <div className="source-explorer-page">
      {/* Hero 区域 */}
      <section className="se-hero">
        <div className="se-hero-content">
          <div className="se-badge">
            <span className="se-version">{DOC_VERSION}</span>
            <span className="se-date">更新于 {DOC_LAST_UPDATE}</span>
          </div>
          <h1 className="se-title">
            <span className="se-icon">🔧</span>
            源码探索中心
          </h1>
          <p className="se-subtitle">
            了解项目架构、功能原理，学习如何迁移源码进行二次开发
          </p>
          <div className="se-tech-pills">
            {TECH_STACK.map((tech) => (
              <span key={tech.name} className="tech-pill" title={tech.desc}>
                <span className="tech-icon">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 更新日志 */}
      <section className="se-changelog">
        <div className="container">
          <h3 className="changelog-title">📢 本次更新内容</h3>
          <div className="changelog-list">
            {DOC_CHANGES.map((change, i) => (
              <div key={i} className="changelog-item">
                <span className="changelog-dot">✦</span>
                <span>{change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab 导航 */}
      <div className="se-tabs-bar">
        <div className="container">
          <div className="se-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`se-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab 内容 */}
      <div className="se-content container">
        {/* 总览 */}
        {activeTab === 'overview' && (
          <div className="tab-panel animate-fade-in">
            <div className="overview-grid">
              <div className="overview-card">
                <div className="overview-icon">📦</div>
                <h3>项目规模</h3>
                <div className="overview-stats">
                  <div className="os-row"><span className="os-label">组件</span><span className="os-val">9 个</span></div>
                  <div className="os-row"><span className="os-label">页面</span><span className="os-val">7 个</span></div>
                  <div className="os-row"><span className="os-label">关卡</span><span className="os-val">{stats.levels} 关</span></div>
                  <div className="os-row"><span className="os-label">分类地图</span><span className="os-val">{stats.categories} 大主题</span></div>
                  <div className="os-row"><span className="os-label">主题卡片</span><span className="os-val">{stats.topics} 张</span></div>
                  <div className="os-row"><span className="os-label">课程步骤</span><span className="os-val">{stats.lessons} 课时 / {stats.challenges} 挑战</span></div>
                  <div className="os-row"><span className="os-label">依赖</span><span className="os-val">4 运行时 + 5 开发</span></div>
                </div>
              </div>

              <div className="overview-card">
                <div className="overview-icon">🏗️</div>
                <h3>架构特点</h3>
                <ul className="overview-list">
                  <li>Context API 全局状态管理（无 Redux）</li>
                  <li>HashRouter 路由（适配静态部署）</li>
                  <li>Pyodide WASM 浏览器内 Python</li>
                  <li>GitHub Gist 云端进度同步</li>
                  <li>localStorage 防抖本地持久化</li>
                  <li>CSS 变量主题系统（无 UI 库）</li>
                  <li>分类地图系统（8 大主题色动态切换）</li>
                </ul>
              </div>

              <div className="overview-card">
                <div className="overview-icon">🎯</div>
                <h3>设计理念</h3>
                <ul className="overview-list">
                  <li>游戏化学习体验</li>
                  <li>国内网络友好（无 Firebase）</li>
                  <li>零后端服务器成本</li>
                  <li>渐进式进度保存</li>
                  <li>版本化数据管理</li>
                  <li>易于迁移和二次开发</li>
                  <li>对齐菜鸟教程10大教程全目录</li>
                </ul>
              </div>
            </div>

            <div className="overview-cta">
              <h3>快速导航</h3>
              <div className="cta-buttons">
                <button className="cta-btn" onClick={() => setActiveTab('files')}>
                  📂 查看源码结构
                </button>
                <button className="cta-btn" onClick={() => setActiveTab('features')}>
                  ✨ 功能清单
                </button>
                <button className="cta-btn" onClick={() => setActiveTab('principles')}>
                  🔬 核心原理
                </button>
                <button className="cta-btn" onClick={() => setActiveTab('migration')}>
                  🚀 迁移指南
                </button>
                <button className="cta-btn" onClick={() => setActiveTab('experience')}>
                  📦 大模型经验包
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 源码结构 */}
        {activeTab === 'files' && (
          <div className="tab-panel animate-fade-in">
            <h2 className="panel-title">📂 项目文件结构</h2>
            <p className="panel-desc">点击文件夹展开/折叠，每个文件附带功能说明</p>
            <div className="file-tree-container">
              {FILE_TREE.map((node) => (
                <FileTreeNode key={node.path} node={node} depth={0} />
              ))}
            </div>
          </div>
        )}

        {/* 功能清单 */}
        {activeTab === 'features' && (
          <div className="tab-panel animate-fade-in">
            <h2 className="panel-title">✨ 功能清单</h2>
            <p className="panel-desc">每个功能列出涉及的源码文件</p>
            <div className="features-grid">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="feature-doc-card">
                  <div className="fdc-header">
                    <span className="fdc-icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                  </div>
                  <p className="fdc-desc">{feature.desc}</p>
                  <div className="fdc-files">
                    {feature.files.map((f) => (
                      <code key={f} className="fdc-file-tag">{f}</code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 核心原理 */}
        {activeTab === 'principles' && (
          <div className="tab-panel animate-fade-in">
            <h2 className="panel-title">🔬 核心原理</h2>
            <p className="panel-desc">深入理解项目的关键技术决策和设计模式</p>
            <div className="principles-list">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="principle-card">
                  <div className="pc-header">
                    <span className="pc-icon">{p.icon}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <p className="pc-desc">{p.desc}</p>
                  {p.code && (
                    <div className="pc-code-block">
                      <div className="pc-code-header">
                        <span className="pc-code-dots">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </span>
                        <span className="pc-code-lang">Code</span>
                      </div>
                      <pre className="pc-code"><code>{p.code}</code></pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 迁移指南 */}
        {activeTab === 'migration' && (
          <div className="tab-panel animate-fade-in">
            <h2 className="panel-title">🚀 迁移指南</h2>
            <p className="panel-desc">按照步骤将本项目迁移为你的 own 项目</p>
            <div className="migration-timeline">
              {MIGRATION_STEPS.map((m) => (
                <div key={m.step} className="migration-step">
                  <div className="ms-marker">
                    <div className="ms-circle">{m.step}</div>
                    {m.step < MIGRATION_STEPS.length && <div className="ms-line"></div>}
                  </div>
                  <div className="ms-content">
                    <h3 className="ms-title">{m.title}</h3>
                    <p className="ms-desc">{m.desc}</p>
                    {m.code && (
                      <div className="ms-code-block">
                        <pre className="ms-code"><code>{m.code}</code></pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 经验包 */}
        {activeTab === 'experience' && (
          <div className="tab-panel animate-fade-in">
            <ExperiencePackPanel />
          </div>
        )}
      </div>

      {/* 底部返回 */}
      <div className="se-footer">
        <Link to="/" className="se-back-btn">← 返回首页</Link>
        <Link to="/map" className="se-back-btn">前往关卡地图 →</Link>
      </div>
    </div>
  )
}

export default SourceExplorer
