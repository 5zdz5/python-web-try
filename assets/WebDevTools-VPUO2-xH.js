const e=`import { useMemo, useState } from 'react'
import PluginShell from '../../components/PluginShell'
import '../plugins-shared.css'
import './WebDevTools.css'

/* ============ 类型 ============ */
type TabKey = 'scaffold' | 'debugger' | 'performance' | 'design'
type Framework = 'react' | 'vue' | 'svelte' | 'vanilla'
type Language = 'ts' | 'js'
type BuildTool = 'vite' | 'webpack' | 'rollup'
type LogLevel = 'info' | 'warn' | 'error'
type Tone = 'success' | 'warning' | 'error' | 'info'

interface LogEntry {
  id: string
  level: LogLevel
  time: string
  source: string
  message: string
}

interface NetworkRequest {
  id: string
  method: string
  url: string
  status: number
  duration: number
  size: string
}

interface ScoreCard {
  key: string
  label: string
  score: number
}

interface Metric {
  key: string
  label: string
  value: string
  unit: string
  rating: 'good' | 'warn' | 'poor'
}

interface ButtonVariant {
  key: string
  label: string
}

interface BadgeSpec {
  key: string
  label: string
  tone: Tone
}

/* ============ Mock 数据 ============ */
const TAB_ITEMS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'scaffold', label: '脚手架', icon: '🛠' },
  { key: 'debugger', label: '调试器', icon: '🐞' },
  { key: 'performance', label: '性能', icon: '⚡' },
  { key: 'design', label: '设计系统', icon: '🎨' },
]

const FRAMEWORKS: { key: Framework; label: string; icon: string }[] = [
  { key: 'react', label: 'React', icon: '⚛' },
  { key: 'vue', label: 'Vue', icon: '▲' },
  { key: 'svelte', label: 'Svelte', icon: '🔥' },
  { key: 'vanilla', label: 'Vanilla', icon: '✦' },
]

const LANGUAGES: { key: Language; label: string }[] = [
  { key: 'ts', label: 'TypeScript' },
  { key: 'js', label: 'JavaScript' },
]

const BUILD_TOOLS: { key: BuildTool; label: string; icon: string }[] = [
  { key: 'vite', label: 'Vite', icon: '⚡' },
  { key: 'webpack', label: 'Webpack', icon: '📦' },
  { key: 'rollup', label: 'Rollup', icon: '🌀' },
]

const SCAFFOLD_OPTIONS: { key: string; label: string; desc: string }[] = [
  { key: 'router', label: 'Router', desc: '路由方案' },
  { key: 'state', label: 'State', desc: '状态管理' },
  { key: 'cssinjs', label: 'CSS-in-JS', desc: '样式方案' },
  { key: 'testing', label: 'Testing', desc: '单元测试' },
]

const INITIAL_LOGS: LogEntry[] = [
  { id: 'l1', level: 'info', time: '10:24:01', source: 'App', message: '应用已挂载，初始渲染完成。' },
  { id: 'l2', level: 'info', time: '10:24:02', source: 'Router', message: '路由切换 → /dashboard' },
  { id: 'l3', level: 'warn', time: '10:24:03', source: 'Net', message: '请求耗时偏长：/api/users 耗时 842ms' },
  { id: 'l4', level: 'error', time: '10:24:05', source: 'Net', message: '请求失败：/api/order/42 → 500 内部错误' },
  { id: 'l5', level: 'info', time: '10:24:06', source: 'Store', message: '状态已更新：user.profile.name' },
]

const INITIAL_REQUESTS: NetworkRequest[] = [
  { id: 'r1', method: 'GET', url: '/api/users', status: 200, duration: 842, size: '12.4 KB' },
  { id: 'r2', method: 'POST', url: '/api/login', status: 200, duration: 318, size: '0.8 KB' },
  { id: 'r3', method: 'GET', url: '/api/order/42', status: 500, duration: 1240, size: '0.2 KB' },
  { id: 'r4', method: 'PUT', url: '/api/profile', status: 204, duration: 156, size: '0 KB' },
  { id: 'r5', method: 'GET', url: '/api/feed?page=1', status: 200, duration: 504, size: '34.1 KB' },
  { id: 'r6', method: 'DELETE', url: '/api/comment/9', status: 403, duration: 88, size: '0.1 KB' },
]

const SCORES: ScoreCard[] = [
  { key: 'perf', label: '性能', score: 92 },
  { key: 'a11y', label: '可访问性', score: 88 },
  { key: 'best', label: '最佳实践', score: 95 },
  { key: 'seo', label: 'SEO', score: 100 },
]

const METRICS: Metric[] = [
  { key: 'fcp', label: 'First Contentful Paint', value: '0.8', unit: 's', rating: 'good' },
  { key: 'lcp', label: 'Largest Contentful Paint', value: '1.2', unit: 's', rating: 'good' },
  { key: 'tti', label: 'Time to Interactive', value: '1.8', unit: 's', rating: 'good' },
  { key: 'tbt', label: 'Total Blocking Time', value: '120', unit: 'ms', rating: 'warn' },
  { key: 'cls', label: 'Cumulative Layout Shift', value: '0.04', unit: '', rating: 'good' },
]

const BUTTON_VARIANTS: ButtonVariant[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'outline', label: 'Outline' },
  { key: 'ghost', label: 'Ghost' },
  { key: 'danger', label: 'Danger' },
]

const BADGES: BadgeSpec[] = [
  { key: 'success', label: 'Success', tone: 'success' },
  { key: 'warning', label: 'Warning', tone: 'warning' },
  { key: 'error', label: 'Error', tone: 'error' },
  { key: 'info', label: 'Info', tone: 'info' },
]

/* ============ 工具函数 ============ */
function buildCommand(framework: Framework, lang: Language, build: BuildTool, opts: string[]): string {
  const tpl = \`\${framework}\${lang === 'ts' ? '-ts' : ''}\`
  let base: string
  if (build === 'vite') {
    base = \`npx create-vite my-app --template \${tpl}\`
  } else if (build === 'webpack') {
    base = \`npx create-webpack-app my-app --framework \${framework} --lang \${lang === 'ts' ? 'typescript' : 'javascript'}\`
  } else {
    base = \`npx create-rollup-app my-app --framework \${framework} --lang \${lang === 'ts' ? 'ts' : 'js'}\`
  }
  const flags = opts.length > 0 ? ' ' + opts.map(o => \`--\${o}\`).join(' ') : ''
  return \`\${base}\${flags}\`
}

function statusTone(status: number): Tone {
  if (status >= 500) return 'error'
  if (status >= 400) return 'warning'
  if (status >= 300) return 'info'
  if (status >= 200) return 'success'
  return 'info'
}

function scoreColor(score: number): string {
  if (score >= 90) return 'var(--color-success)'
  if (score >= 50) return 'var(--color-warning)'
  return 'var(--color-error)'
}

function metricRatingTone(rating: Metric['rating']): Tone {
  if (rating === 'good') return 'success'
  if (rating === 'warn') return 'warning'
  return 'error'
}

/* ============ 子组件 ============ */
function ScoreRing({ score, label }: { score: number; label: string }) {
  const r = 40
  const c = 2 * Math.PI * r
  const offset = c * (1 - score / 100)
  const color = scoreColor(score)
  return (
    <div className="wdt-ring">
      <div className="wdt-ring-stage">
        <svg viewBox="0 0 100 100" className="wdt-ring-svg">
          <circle cx="50" cy="50" r={r} className="wdt-ring-track" />
          <circle
            cx="50"
            cy="50"
            r={r}
            className="wdt-ring-fill"
            stroke={color}
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="wdt-ring-center">
          <span className="wdt-ring-score" style={{ color }}>{score}</span>
        </div>
      </div>
      <span className="wdt-ring-title">{label}</span>
    </div>
  )
}

/* ============ 主组件 ============ */
function WebDevTools() {
  const [tab, setTab] = useState<TabKey>('scaffold')

  // 脚手架状态
  const [framework, setFramework] = useState<Framework>('react')
  const [lang, setLang] = useState<Language>('ts')
  const [build, setBuild] = useState<BuildTool>('vite')
  const [options, setOptions] = useState<string[]>(['router'])
  const [copied, setCopied] = useState<boolean>(false)

  // 调试器状态
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS)
  const [requests, setRequests] = useState<NetworkRequest[]>(INITIAL_REQUESTS)

  const command = useMemo(
    () => buildCommand(framework, lang, build, options),
    [framework, lang, build, options],
  )

  const toggleOption = (key: string) => {
    setOptions(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]))
  }

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  const clearDebugger = () => {
    setLogs([])
    setRequests([])
  }

  const renderScaffold = () => (
    <div className="wdt-scaffold">
      <section className="plugin-section">
        <h2 className="plugin-section-title">框架选择</h2>
        <div className="wdt-chip-row">
          {FRAMEWORKS.map(f => (
            <button
              key={f.key}
              type="button"
              className={\`wdt-chip \${framework === f.key ? 'active' : ''}\`}
              onClick={() => setFramework(f.key)}
            >
              <span className="wdt-chip-icon">{f.icon}</span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
        <div className="wdt-chip-row wdt-chip-row-sub">
          {LANGUAGES.map(l => (
            <button
              key={l.key}
              type="button"
              className={\`wdt-chip wdt-chip-sm \${lang === l.key ? 'active' : ''}\`}
              onClick={() => setLang(l.key)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">构建工具</h2>
        <div className="wdt-chip-row">
          {BUILD_TOOLS.map(b => (
            <button
              key={b.key}
              type="button"
              className={\`wdt-chip \${build === b.key ? 'active' : ''}\`}
              onClick={() => setBuild(b.key)}
            >
              <span className="wdt-chip-icon">{b.icon}</span>
              <span>{b.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">可选能力</h2>
        <div className="wdt-opt-grid">
          {SCAFFOLD_OPTIONS.map(o => {
            const active = options.includes(o.key)
            return (
              <button
                key={o.key}
                type="button"
                className={\`wdt-opt \${active ? 'active' : ''}\`}
                onClick={() => toggleOption(o.key)}
              >
                <span className="wdt-opt-check">{active ? '▣' : '▢'}</span>
                <span className="wdt-opt-label">{o.label}</span>
                <span className="wdt-opt-desc">{o.desc}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">生成命令</h2>
        <div className="wdt-cmd">
          <pre className="wdt-cmd-text">{command}</pre>
          <button
            type="button"
            className={\`plugin-btn \${copied ? 'plugin-btn-primary' : ''}\`}
            onClick={copyCommand}
          >
            {copied ? '✓ 已复制' : '复制命令'}
          </button>
        </div>
        <p className="wdt-hint">* Mock 生成 · 实际脚手架命令以官方文档为准</p>
      </section>
    </div>
  )

  const renderDebugger = () => (
    <div className="wdt-debugger">
      <section className="plugin-section">
        <div className="wdt-sec-head">
          <h2 className="plugin-section-title">控制台日志 ({logs.length})</h2>
          <button type="button" className="plugin-btn" onClick={clearDebugger}>清空</button>
        </div>
        {logs.length === 0 ? (
          <div className="plugin-empty">
            <div className="plugin-empty-icon">📭</div>
            <p>暂无日志</p>
          </div>
        ) : (
          <div className="wdt-log-list">
            {logs.map(l => (
              <div key={l.id} className={\`wdt-log-row wdt-log-\${l.level}\`}>
                <span className="wdt-log-time">{l.time}</span>
                <span className="wdt-log-level">{l.level.toUpperCase()}</span>
                <span className="wdt-log-source">[{l.source}]</span>
                <span className="wdt-log-msg">{l.message}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">网络请求 ({requests.length})</h2>
        {requests.length === 0 ? (
          <div className="plugin-empty">
            <div className="plugin-empty-icon">🔌</div>
            <p>暂无请求记录</p>
          </div>
        ) : (
          <div className="wdt-net-table">
            <div className="wdt-net-head">
              <span>方法</span>
              <span>URL</span>
              <span>状态</span>
              <span>耗时</span>
              <span>大小</span>
            </div>
            {requests.map(r => {
              const tone = statusTone(r.status)
              return (
                <div key={r.id} className="wdt-net-row">
                  <span className={\`wdt-net-method wdt-net-method-\${r.method.toLowerCase()}\`}>{r.method}</span>
                  <span className="wdt-net-url" title={r.url}>{r.url}</span>
                  <span className={\`wdt-net-status wdt-tone-\${tone}\`}>{r.status}</span>
                  <span className="wdt-net-dur">{r.duration}ms</span>
                  <span className="wdt-net-size">{r.size}</span>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )

  const renderPerformance = () => (
    <div className="wdt-perf">
      <section className="plugin-section">
        <h2 className="plugin-section-title">Lighthouse 评分</h2>
        <div className="wdt-ring-grid">
          {SCORES.map(s => (
            <ScoreRing key={s.key} score={s.score} label={s.label} />
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">关键指标</h2>
        <div className="wdt-metric-list">
          {METRICS.map(m => {
            const tone = metricRatingTone(m.rating)
            return (
              <div key={m.key} className="wdt-metric-row">
                <div className="wdt-metric-meta">
                  <span className="wdt-metric-key">{m.key.toUpperCase()}</span>
                  <span className="wdt-metric-label">{m.label}</span>
                </div>
                <div className="wdt-metric-value-wrap">
                  <span className={\`wdt-metric-value wdt-tone-\${tone}\`}>{m.value}</span>
                  <span className="wdt-metric-unit">{m.unit}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )

  const renderDesign = () => (
    <div className="wdt-design">
      <section className="plugin-section">
        <h2 className="plugin-section-title">按钮 Button</h2>
        <div className="wdt-comp-row">
          {BUTTON_VARIANTS.map(v => (
            <button key={v.key} type="button" className={\`wdt-ui-btn wdt-ui-btn-\${v.key}\`}>{v.label}</button>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">输入框 Input</h2>
        <div className="wdt-input-grid">
          <div className="wdt-field">
            <label className="plugin-label">账号</label>
            <input type="text" className="plugin-input" placeholder="请输入账号" />
          </div>
          <div className="wdt-field">
            <label className="plugin-label">邮箱</label>
            <input type="email" className="plugin-input" placeholder="user@example.com" defaultValue="admin@trae.dev" />
          </div>
          <div className="wdt-field wdt-field-full">
            <label className="plugin-label">简介</label>
            <textarea className="plugin-textarea" placeholder="一句话介绍自己" defaultValue="前端工程师 · 像素风爱好者" />
          </div>
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">徽标 Badge</h2>
        <div className="wdt-comp-row">
          {BADGES.map(b => (
            <span key={b.key} className={\`wdt-ui-badge wdt-tone-\${b.tone}\`}>{b.label}</span>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">卡片 Card</h2>
        <div className="wdt-card-grid">
          <div className="wdt-ui-card">
            <div className="wdt-ui-card-head">
              <span className="wdt-ui-card-badge wdt-tone-info">DEMO</span>
              <span className="wdt-ui-card-id">#001</span>
            </div>
            <h3 className="wdt-ui-card-title">像素风主题包</h3>
            <p className="wdt-ui-card-desc">Press Start 2P 字体 + 硬边框 + 8bit 配色，还原复古街机质感。</p>
            <div className="wdt-ui-card-foot">
              <span className="wdt-ui-tag">font</span>
              <span className="wdt-ui-tag">border</span>
              <span className="wdt-ui-tag">8bit</span>
            </div>
          </div>
          <div className="wdt-ui-card">
            <div className="wdt-ui-card-head">
              <span className="wdt-ui-card-badge wdt-tone-success">NEW</span>
              <span className="wdt-ui-card-id">#002</span>
            </div>
            <h3 className="wdt-ui-card-title">赛博朋克霓虹</h3>
            <p className="wdt-ui-card-desc">霓虹荧光 + 扫描线 + 故障跳动动效，ZZZ 风格的全套视觉语言。</p>
            <div className="wdt-ui-card-foot">
              <span className="wdt-ui-tag">neon</span>
              <span className="wdt-ui-tag">glitch</span>
              <span className="wdt-ui-tag">scanline</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return (
    <PluginShell
      icon="⚙️"
      title="Web 开发工具"
      subtitle="web-app-development · 脚手架/调试/性能/设计系统 Mock"
      vendor="web-app-development"
      version="0.1.1"
    >
      <div className="plugin-tabs">
        {TAB_ITEMS.map(item => (
          <button
            key={item.key}
            className={\`plugin-tab \${tab === item.key ? 'active' : ''}\`}
            onClick={() => setTab(item.key)}
            type="button"
          >
            <span className="wdt-tab-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      {tab === 'scaffold' && renderScaffold()}
      {tab === 'debugger' && renderDebugger()}
      {tab === 'performance' && renderPerformance()}
      {tab === 'design' && renderDesign()}
    </PluginShell>
  )
}

export default WebDevTools
`;export{e as default};
