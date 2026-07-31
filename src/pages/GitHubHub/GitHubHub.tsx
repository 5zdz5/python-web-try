import { useState, useMemo } from 'react'
import PluginShell from '../../components/PluginShell'
import '../plugins-shared.css'
import './GitHubHub.css'

/* ============================================================
 *  GitHubHub — GitHub 插件页面
 *  全前端 Mock，不调用真实 API
 * ============================================================ */

// ============ 类型定义 ============
type TabId = 'repos' | 'prs' | 'issues' | 'ci'
type PRStatus = 'open' | 'merged' | 'closed'
type CIStatus = 'success' | 'failure' | 'running'
type Priority = 'P0' | 'P1' | 'P2' | 'P3'

interface Repo {
  id: string
  name: string
  desc: string
  stars: number
  language: string
  langColor: string
  updated: string
}

interface PR {
  id: string
  number: number
  title: string
  author: string
  status: PRStatus
  additions: number
  deletions: number
  files: number
  repo: string
}

interface Issue {
  id: string
  number: number
  title: string
  labels: string[]
  priority: Priority
  assignee: string | null
  repo: string
}

interface CIRun {
  id: string
  workflow: string
  branch: string
  status: CIStatus
  duration: string
  logSummary: string
  repo: string
}

// ============ Mock 数据 ============
const REPOS: Repo[] = [
  {
    id: 'r1',
    name: 'python-quest',
    desc: 'Python 学习闯关平台 · 像素风 · AI Agent 自适应训练',
    stars: 1284,
    language: 'TypeScript',
    langColor: '#3178c6',
    updated: '2 小时前',
  },
  {
    id: 'r2',
    name: 'pixel-render-engine',
    desc: '8-bit 像素渲染引擎，支持扫描线 / 故障 / 霓虹特效',
    stars: 856,
    language: 'Rust',
    langColor: '#dea584',
    updated: '5 小时前',
  },
  {
    id: 'r3',
    name: 'agent-skill-trainer',
    desc: '基于强化学习的 AI 技能训练框架，Q-Learning + LLM Advisor',
    stars: 642,
    language: 'Python',
    langColor: '#3572A5',
    updated: '1 天前',
  },
  {
    id: 'r4',
    name: 'viz-lab-core',
    desc: '数据可视化内核：D3 / Canvas2D / Three.js 统一抽象层',
    stars: 423,
    language: 'TypeScript',
    langColor: '#3178c6',
    updated: '2 天前',
  },
  {
    id: 'r5',
    name: 'wiki-sync-cli',
    desc: 'Obsidian Wiki 与在线文档双向同步命令行工具',
    stars: 198,
    language: 'Go',
    langColor: '#00ADD8',
    updated: '3 天前',
  },
  {
    id: 'r6',
    name: 'theme-pack-zzz',
    desc: '绝区零赛博朋克主题包 · 斜切角 / 扫描线 / 霓虹荧光',
    stars: 312,
    language: 'CSS',
    langColor: '#563d7c',
    updated: '4 天前',
  },
]

const PRS: PR[] = [
  {
    id: 'p1',
    number: 142,
    title: 'feat: 新增 GitHubHub 插件页面（仓库/PR/Issue/CI 四标签）',
    author: 'A',
    status: 'open',
    additions: 482,
    deletions: 36,
    files: 6,
    repo: 'python-quest',
  },
  {
    id: 'p2',
    number: 138,
    title: 'fix: 修复像素渲染引擎在 HiDPI 屏幕下模糊的问题',
    author: 'L',
    status: 'merged',
    additions: 124,
    deletions: 88,
    files: 3,
    repo: 'pixel-render-engine',
  },
  {
    id: 'p3',
    number: 131,
    title: 'refactor: 拆分 Agent 训练循环为可插拔策略模式',
    author: 'M',
    status: 'merged',
    additions: 642,
    deletions: 512,
    files: 11,
    repo: 'agent-skill-trainer',
  },
  {
    id: 'p4',
    number: 127,
    title: 'perf: Canvas2D 热力图批量绘制，万级单元格 60fps',
    author: 'Z',
    status: 'open',
    additions: 256,
    deletions: 14,
    files: 2,
    repo: 'viz-lab-core',
  },
  {
    id: 'p5',
    number: 119,
    title: 'docs: 补充 wiki-sync-cli 双向冲突解决策略文档',
    author: 'W',
    status: 'closed',
    additions: 88,
    deletions: 4,
    files: 1,
    repo: 'wiki-sync-cli',
  },
  {
    id: 'p6',
    number: 115,
    title: 'chore: 升级 Vite 5 + 迁移 tsconfig strict 全量检查',
    author: 'C',
    status: 'open',
    additions: 312,
    deletions: 246,
    files: 8,
    repo: 'python-quest',
  },
]

const ISSUES: Issue[] = [
  {
    id: 'i1',
    number: 207,
    title: '主题切换时 PluginShell 底部光带闪动两次',
    labels: ['bug', 'UI'],
    priority: 'P1',
    assignee: 'A',
    repo: 'python-quest',
  },
  {
    id: 'i2',
    number: 201,
    title: '支持在 CI Checks 标签内联展开日志全文搜索',
    labels: ['enhancement', 'CI'],
    priority: 'P2',
    assignee: 'Z',
    repo: 'python-quest',
  },
  {
    id: 'i3',
    number: 198,
    title: 'Agent 训练在 Pyodide 离线环境下抛 TypeError',
    labels: ['bug', 'agent'],
    priority: 'P0',
    assignee: null,
    repo: 'agent-skill-trainer',
  },
  {
    id: 'i4',
    number: 186,
    title: '甘特图任务条在移动端横向溢出无法滚动',
    labels: ['bug', 'UI'],
    priority: 'P1',
    assignee: 'L',
    repo: 'viz-lab-core',
  },
  {
    id: 'i5',
    number: 174,
    title: '提供导出 Experience Pack 为 .json 离线包的能力',
    labels: ['enhancement', 'export'],
    priority: 'P3',
    assignee: 'M',
    repo: 'python-quest',
  },
  {
    id: 'i6',
    number: 159,
    title: 'wiki-sync 大文件同步时内存峰值过高',
    labels: ['performance'],
    priority: 'P2',
    assignee: null,
    repo: 'wiki-sync-cli',
  },
]

const CI_RUNS: CIRun[] = [
  {
    id: 'c1',
    workflow: 'deploy.yml',
    branch: 'main',
    status: 'success',
    duration: '2m 14s',
    logSummary: '✓ 安装依赖 ✓ 类型检查 ✓ 单元测试 (184 passed) ✓ 构建 ✓ 部署到 GitHub Pages',
    repo: 'python-quest',
  },
  {
    id: 'c2',
    workflow: 'ci.yml',
    branch: 'feat/github-hub',
    status: 'running',
    duration: '0m 42s',
    logSummary: '→ 安装依赖 ✓ 类型检查 → 单元测试 进行中... (96 / 184)',
    repo: 'python-quest',
  },
  {
    id: 'c3',
    workflow: 'release.yml',
    branch: 'v1.4.0',
    status: 'failure',
    duration: '3m 08s',
    logSummary: '✓ 构建 ✗ 发布失败：npm publish 401 Unauthorized，请检查 NPM_TOKEN',
    repo: 'pixel-render-engine',
  },
  {
    id: 'c4',
    workflow: 'test.yml',
    branch: 'main',
    status: 'success',
    duration: '1m 52s',
    logSummary: '✓ pytest (62 passed) ✓ lint ✓ type-check',
    repo: 'agent-skill-trainer',
  },
  {
    id: 'c5',
    workflow: 'build.yml',
    branch: 'main',
    status: 'success',
    duration: '4m 36s',
    logSummary: '✓ 安装依赖 ✓ Vite 构建 (3 chunks) ✓ 上传 artifact',
    repo: 'viz-lab-core',
  },
  {
    id: 'c6',
    workflow: 'lint.yml',
    branch: 'dev',
    status: 'failure',
    duration: '0m 28s',
    logSummary: '✗ golangci-lint: 3 errors (errcheck, unused) 在 sync.go:42,84,121',
    repo: 'wiki-sync-cli',
  },
]

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: 'repos', label: '仓库', icon: '📦' },
  { id: 'prs', label: 'PR', icon: '🔀' },
  { id: 'issues', label: 'Issue', icon: '🎫' },
  { id: 'ci', label: 'CI Checks', icon: '✅' },
]

// ============ 工具函数 ============
function statusLabel(s: PRStatus): string {
  return s === 'open' ? 'open' : s === 'merged' ? 'merged' : 'closed'
}

function avatarColor(initial: string): string {
  const palette = ['#c4ff00', '#00e5ff', '#ff2e63', '#ffb800', '#a855f7', '#22c55e']
  const idx = initial.charCodeAt(0) % palette.length
  return palette[idx]
}

function GitHubHub() {
  const [active, setActive] = useState<TabId>('repos')
  const [toast, setToast] = useState<string | null>(null)
  const [expandedCI, setExpandedCI] = useState<string | null>(null)

  // 顶部统计
  const stats = useMemo(() => {
    const openPRs = PRS.filter(p => p.status === 'open').length
    const ciSuccess = CI_RUNS.filter(c => c.status === 'success').length
    const ciTotal = CI_RUNS.length
    const ciRate = ciTotal === 0 ? 0 : Math.round((ciSuccess / ciTotal) * 100)
    return {
      repos: REPOS.length,
      openPRs,
      openIssues: ISSUES.length,
      ciRate,
    }
  }, [])

  const showToast = (msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2200)
  }

  const toggleCI = (id: string) => {
    setExpandedCI(prev => (prev === id ? null : id))
  }

  return (
    <PluginShell
      icon="🐙"
      title="GitHub Hub"
      subtitle="GitHub · 仓库/PR/Issue/CI 全流程 Mock"
      vendor="GitHub"
      version="0.1.2"
    >
      {/* 顶部统计条 */}
      <div className="gh-stats-bar">
        <div className="gh-stat">
          <span className="gh-stat-icon">📦</span>
          <div className="gh-stat-text">
            <span className="gh-stat-value">{stats.repos}</span>
            <span className="gh-stat-label">仓库</span>
          </div>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-icon">🔀</span>
          <div className="gh-stat-text">
            <span className="gh-stat-value">{stats.openPRs}</span>
            <span className="gh-stat-label">开放 PR</span>
          </div>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-icon">🎫</span>
          <div className="gh-stat-text">
            <span className="gh-stat-value">{stats.openIssues}</span>
            <span className="gh-stat-label">开放 Issue</span>
          </div>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-icon">✅</span>
          <div className="gh-stat-text">
            <span className="gh-stat-value">{stats.ciRate}%</span>
            <span className="gh-stat-label">CI 成功率</span>
          </div>
        </div>
      </div>

      {/* 标签页 */}
      <div className="plugin-tabs gh-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`plugin-tab ${active === t.id ? 'active' : ''}`}
            onClick={() => setActive(t.id)}
            type="button"
          >
            <span className="gh-tab-icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* 仓库 Tab */}
      {active === 'repos' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">
            仓库列表 <span className="mock-badge">MOCK</span>
          </h2>
          <div className="gh-repo-grid">
            {REPOS.map((r, idx) => (
              <article
                key={r.id}
                className="gh-repo-card feature-card-anim"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <div className="gh-repo-head">
                  <span className="gh-repo-name">{r.name}</span>
                  <span className="gh-repo-stars">⭐ {r.stars}</span>
                </div>
                <p className="gh-repo-desc">{r.desc}</p>
                <div className="gh-repo-foot">
                  <span className="gh-repo-lang">
                    <span
                      className="gh-lang-dot"
                      style={{ background: r.langColor }}
                    />
                    {r.language}
                  </span>
                  <span className="gh-repo-updated">更新于 {r.updated}</span>
                </div>
                <button
                  className="plugin-btn plugin-btn-primary gh-clone-btn"
                  type="button"
                  onClick={() => showToast(`已克隆 ${r.name}（Mock）`)}
                >
                  克隆
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PR Tab */}
      {active === 'prs' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">
            Pull Requests <span className="mock-badge">MOCK</span>
          </h2>
          <div className="gh-list">
            {PRS.map((p, idx) => (
              <div
                key={p.id}
                className="gh-row gh-pr-row feature-card-anim"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <span
                  className={`gh-status-chip gh-status-${p.status}`}
                >
                  {statusLabel(p.status)}
                </span>
                <div className="gh-pr-main">
                  <div className="gh-pr-title">
                    <span className="gh-pr-num">#{p.number}</span>
                    {p.title}
                  </div>
                  <div className="gh-pr-meta">
                    <span className="gh-repo-tag">{p.repo}</span>
                    <span className="gh-avatar" style={{ background: avatarColor(p.author) }}>
                      {p.author}
                    </span>
                    <span className="gh-diff">
                      <span className="gh-diff-add">+{p.additions}</span>
                      <span className="gh-diff-del">−{p.deletions}</span>
                    </span>
                    <span className="gh-files">{p.files} 文件</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Issue Tab */}
      {active === 'issues' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">
            Issues <span className="mock-badge">MOCK</span>
          </h2>
          <div className="gh-list">
            {ISSUES.map((i, idx) => (
              <div
                key={i.id}
                className="gh-row gh-issue-row feature-card-anim"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <span className={`gh-priority gh-pri-${i.priority}`}>{i.priority}</span>
                <div className="gh-issue-main">
                  <div className="gh-issue-title">
                    <span className="gh-pr-num">#{i.number}</span>
                    {i.title}
                  </div>
                  <div className="gh-issue-meta">
                    <span className="gh-repo-tag">{i.repo}</span>
                    {i.labels.map(l => (
                      <span key={l} className="gh-label-chip">{l}</span>
                    ))}
                    <span className="gh-assignee">
                      {i.assignee ? (
                        <>
                          <span className="gh-avatar gh-avatar-sm" style={{ background: avatarColor(i.assignee) }}>
                            {i.assignee}
                          </span>
                          指派
                        </>
                      ) : (
                        <span className="gh-unassigned">未指派</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CI Checks Tab */}
      {active === 'ci' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">
            CI Runs <span className="mock-badge">MOCK</span>
          </h2>
          <div className="gh-list">
            {CI_RUNS.map((c, idx) => (
              <div
                key={c.id}
                className="gh-row gh-ci-row feature-card-anim"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <span className={`gh-ci-dot gh-ci-${c.status}`} />
                <div className="gh-ci-main">
                  <button
                    className="gh-ci-head"
                    type="button"
                    onClick={() => toggleCI(c.id)}
                  >
                    <span className="gh-ci-workflow">{c.workflow}</span>
                    <span className="gh-ci-branch">@ {c.branch}</span>
                    <span className={`gh-ci-status gh-ci-status-${c.status}`}>{c.status}</span>
                    <span className="gh-ci-duration">{c.duration}</span>
                    <span className={`gh-ci-expand ${expandedCI === c.id ? 'open' : ''}`}>▾</span>
                  </button>
                  {expandedCI === c.id && (
                    <pre className="gh-ci-log">{c.logSummary}</pre>
                  )}
                  <div className="gh-ci-meta">
                    <span className="gh-repo-tag">{c.repo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Toast */}
      {toast && (
        <div className="gh-toast" role="status">
          <span className="gh-toast-icon">✓</span>
          {toast}
        </div>
      )}
    </PluginShell>
  )
}

export default GitHubHub
