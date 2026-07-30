/**
 * Skill 查看按钮 + 实验室面板
 *
 * 法则1 分层归属：组件层（component），被 pages 消费
 * 法则4 监测主动注册：useEffect 中 registerGroup + reportHealth
 * 法则5 主题同步双适配：CSS 变量 + pixel-spectrum/pixel-crow 双选择器
 * 法则6 三注册：本组件 + App.tsx 路由 + Navbar 导航 + projectDocs 文档
 *
 * 应用 taste-skill 三旋钮：
 *   - anti-slop：所有间距/圆角/颜色显式声明，不用默认
 *   - 字体反默认：var(--font-mono) JetBrains Mono，不用 Inter
 *   - LILA 反紫蓝：全用 var(--color-accent-*)，不用 #7c3aed/#6366f1/#3b82f6
 *
 * 应用 impeccable 规则：
 *   - no-card-in-card：面板内用 section 分隔，不嵌套 card
 *   - radius-unified：全用 var(--radius-*)
 *   - spacing-scale：全用 8 倍数
 *   - console-leftover：无 console 残留
 */
import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useMonitor } from '../../context/MonitorContext'
import {
  getInstalledSkills,
  getSkillCategoryStats,
  type InstalledSkill,
  type SkillCategory,
} from '../../config/installedSkills'
import './SkillViewer.css'

/** 分类元数据（动态调配，不硬编码） */
const CATEGORY_META: Record<SkillCategory, { label: string; icon: string; desc: string }> = {
  'coding-workflow': { label: '编码工作流', icon: '⚙️', desc: '代码修改的流程规则' },
  'code-quality': { label: '代码质量', icon: '✨', desc: '审美与规范检测' },
  'research': { label: '自主研究', icon: '🔬', desc: '实验与探索方法论' },
  'knowledge-graph': { label: '知识图谱', icon: '🕸️', desc: '代码可视化与理解' },
  'dev-process': { label: '开发流程', icon: '🔄', desc: '项目级完整开发流程' },
  'web-scraping': { label: '网页抓取', icon: '🕷️', desc: '内容爬取与解析' },
}

interface SkillViewerProps {
  /** 是否默认展开 */
  defaultExpanded?: boolean
}

function SkillViewer({ defaultExpanded = false }: SkillViewerProps) {
  const { registerGroup, reportHealth } = useMonitor()
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // 法则4：监测主动注册
  useEffect(() => {
    registerGroup('SkillViewer', 'Skill 查看按钮', 'src/components/SkillViewer/SkillViewer.tsx')
    reportHealth('SkillViewer', 'healthy', '组件挂载成功')
  }, [registerGroup, reportHealth])

  const allSkills = useMemo(() => getInstalledSkills(), [])
  const categoryStats = useMemo(() => getSkillCategoryStats(), [])

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return allSkills
    return allSkills.filter(s => s.category === activeCategory)
  }, [allSkills, activeCategory])

  const activeSkill: InstalledSkill | null = useMemo(() => {
    if (!activeSkillId) return null
    return allSkills.find(s => s.id === activeSkillId) || null
  }, [activeSkillId, allSkills])

  // 复制调用命令到剪贴板 — 让 skill 真正能被使用
  const handleCopyCommand = useCallback(async (skill: InstalledSkill) => {
    if (!skill.invokeCommand) return
    try {
      await navigator.clipboard.writeText(skill.invokeCommand)
      setCopiedId(skill.id)
      reportHealth('SkillViewer', 'healthy', `已复制 ${skill.name} 调用命令`)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      reportHealth('SkillViewer', 'warning', `复制失败：${err instanceof Error ? err.message : '未知错误'}`)
    }
  }, [reportHealth])

  const handleToggle = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  return (
    <div className="skill-viewer-wrap">
      {/* 触发按钮 */}
      <button
        type="button"
        className="skill-trigger"
        onClick={handleToggle}
        aria-expanded={expanded}
        aria-controls="skill-panel"
      >
        <span className="skill-trigger-face">
          <span className="skill-trigger-icon">🧪</span>
          <span className="skill-trigger-text">Skill 实验室</span>
          <span className="skill-trigger-count">{allSkills.length}</span>
          <span className={`skill-trigger-arrow ${expanded ? 'expanded' : ''}`}>▼</span>
        </span>
      </button>

      {/* 展开面板 */}
      {expanded && (
        <div id="skill-panel" className="skill-panel">
          {/* 头部统计 */}
          <header className="skill-panel-header">
            <div className="skill-panel-title">
              <h2>已安装 Skill 实验室</h2>
              <p className="skill-panel-subtitle">
                {allSkills.length} 个 Skill · {Object.keys(categoryStats).length} 个分类 · 点击查看规则与调用方式
              </p>
            </div>
            <button
              type="button"
              className="skill-close-btn"
              onClick={handleToggle}
              aria-label="关闭"
            >
              ✕
            </button>
          </header>

          {/* 分类筛选 — 动态渲染，不硬编码 */}
          <div className="skill-category-filter">
            <button
              type="button"
              className={`skill-category-chip ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              全部 ({allSkills.length})
            </button>
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = categoryStats[key as SkillCategory] || 0
              if (count === 0) return null
              return (
                <button
                  key={key}
                  type="button"
                  className={`skill-category-chip ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key as SkillCategory)}
                >
                  {meta.icon} {meta.label} ({count})
                </button>
              )
            })}
          </div>

          {/* 主体：双栏布局 — 左侧列表 + 右侧详情 */}
          <div className="skill-body">
            <aside className="skill-list">
              {filteredSkills.map(skill => (
                <button
                  key={skill.id}
                  type="button"
                  className={`skill-item ${activeSkillId === skill.id ? 'active' : ''}`}
                  onClick={() => setActiveSkillId(skill.id)}
                >
                  <div className="skill-item-icon">{skill.icon}</div>
                  <div className="skill-item-info">
                    <div className="skill-item-name">{skill.name}</div>
                    <div className="skill-item-meta">
                      <span className="skill-item-cat">{CATEGORY_META[skill.category].label}</span>
                      {skill.rules && skill.rules.length > 0 && (
                        <span className="skill-item-rules">{skill.rules.length} 条规则</span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </aside>

            <section className="skill-detail">
              {!activeSkill ? (
                <div className="skill-detail-empty">
                  <div className="skill-empty-icon">←</div>
                  <p>从左侧选择一个 Skill 查看详细规则与调用方式</p>
                  <p className="skill-empty-hint">
                    每个 Skill 包含：核心规则（含正反例）+ 调用命令 + 调用示例
                  </p>
                </div>
              ) : (
                <div className="skill-detail-content">
                  {/* Skill 概要 */}
                  <div className="skill-detail-header">
                    <div className="skill-detail-title-row">
                      <span className="skill-detail-icon">{activeSkill.icon}</span>
                      <div>
                        <h3 className="skill-detail-name">{activeSkill.name}</h3>
                        <div className="skill-detail-source">{activeSkill.source}</div>
                      </div>
                    </div>
                    <p className="skill-detail-desc">{activeSkill.description}</p>
                  </div>

                  {/* Web 入口 — 让 skill 真正能被使用 */}
                  {activeSkill.webIntegration.type !== 'none' && (
                    <div className="skill-section">
                      <h4 className="skill-section-title">🌐 Web 入口</h4>
                      {activeSkill.webIntegration.type === 'route' ? (
                        <Link
                          to={activeSkill.webIntegration.path}
                          className="skill-entry-btn"
                        >
                          打开页面 → {activeSkill.buttonText}
                        </Link>
                      ) : (
                        <a
                          href={activeSkill.webIntegration.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="skill-entry-btn"
                        >
                          打开链接 → {activeSkill.buttonText}
                        </a>
                      )}
                    </div>
                  )}

                  {/* 调用命令 — 复制即可使用 */}
                  {activeSkill.invokeCommand && (
                    <div className="skill-section">
                      <h4 className="skill-section-title">⚡ 调用命令（复制即用）</h4>
                      <div className="skill-invoke-cmd">
                        <code className="skill-cmd-text">{activeSkill.invokeCommand}</code>
                        <button
                          type="button"
                          className="skill-copy-btn"
                          onClick={() => handleCopyCommand(activeSkill)}
                        >
                          {copiedId === activeSkill.id ? '✓ 已复制' : '复制'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 调用示例 */}
                  {activeSkill.invokeExample && (
                    <div className="skill-section">
                      <h4 className="skill-section-title">📋 调用示例</h4>
                      <pre className="skill-example-code">
                        <code>{activeSkill.invokeExample}</code>
                      </pre>
                    </div>
                  )}

                  {/* 核心规则 — 让 skill 真正能被查阅和应用 */}
                  {activeSkill.rules && activeSkill.rules.length > 0 && (
                    <div className="skill-section">
                      <h4 className="skill-section-title">
                        📐 核心规则（{activeSkill.rules.length} 条）
                      </h4>
                      <div className="skill-rules-list">
                        {activeSkill.rules.map(rule => (
                          <article key={rule.ruleId} className="skill-rule-card">
                            <header className="skill-rule-header">
                              <code className="skill-rule-id">{rule.ruleId}</code>
                              <h5 className="skill-rule-title">{rule.title}</h5>
                            </header>
                            <p className="skill-rule-desc">{rule.desc}</p>
                            {rule.badExample && (
                              <div className="skill-rule-example bad">
                                <span className="skill-example-label">✗ 反例</span>
                                <pre className="skill-example-text">{rule.badExample}</pre>
                              </div>
                            )}
                            {rule.goodExample && (
                              <div className="skill-rule-example good">
                                <span className="skill-example-label">✓ 正例</span>
                                <pre className="skill-example-text">{rule.goodExample}</pre>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 安装信息 */}
                  <div className="skill-section">
                    <h4 className="skill-section-title">📦 安装信息</h4>
                    <div className="skill-install-grid">
                      <div className="skill-install-item">
                        <span className="skill-install-label">分类</span>
                        <span className="skill-install-value">
                          {CATEGORY_META[activeSkill.category].icon} {CATEGORY_META[activeSkill.category].label}
                        </span>
                      </div>
                      <div className="skill-install-item">
                        <span className="skill-install-label">来源</span>
                        <span className="skill-install-value">{activeSkill.source}</span>
                      </div>
                      <div className="skill-install-item">
                        <span className="skill-install-label">安装日期</span>
                        <span className="skill-install-value">{activeSkill.installedDate}</span>
                      </div>
                      <div className="skill-install-item">
                        <span className="skill-install-label">状态</span>
                        <span className="skill-install-value status-enabled">
                          ● 已启用
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillViewer
