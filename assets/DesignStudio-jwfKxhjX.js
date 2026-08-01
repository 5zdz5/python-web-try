const e=`import { useEffect, useState, type CSSProperties } from 'react'
import PluginShell from '../../components/PluginShell'
import '../plugins-shared.css'
import './DesignStudio.css'

/* ---------------- 类型 ---------------- */
type TabKey = 'tokens' | 'platform' | 'flow'

interface ColorToken {
  name: string
  varName: string
}

interface FontToken {
  key: string
  label: string
  varName: string
  sample: string
  size: string
  weight: number
  desc: string
}

interface SpacingToken {
  key: string
  varName: string
  px: number
}

interface RadiusToken {
  key: string
  varName: string
  px: number
}

interface PlatformSpec {
  key: string
  label: string
  icon: string
  framework: string
  idiom: string
  code: string
  previewLabel: string
  previewStyle: CSSProperties
}

interface FlowNode {
  id: string
  label: string
  x: number
  y: number
  desc: string
}

type EdgeKind = 'normal' | 'success' | 'fail'

interface FlowEdge {
  from: string
  to: string
  kind: EdgeKind
  curved?: boolean
}

/* ---------------- Mock 数据 ---------------- */
const TAB_ITEMS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'tokens', label: '设计令牌', icon: '🎨' },
  { key: 'platform', label: '跨平台适配', icon: '📱' },
  { key: 'flow', label: 'UX 流程', icon: '🔀' },
]

const COLOR_TOKENS: ColorToken[] = [
  { name: 'primary', varName: '--color-accent-primary' },
  { name: 'secondary', varName: '--color-accent-secondary' },
  { name: 'tertiary', varName: '--color-accent-tertiary' },
  { name: 'bg-primary', varName: '--color-bg-primary' },
  { name: 'bg-secondary', varName: '--color-bg-secondary' },
  { name: 'bg-tertiary', varName: '--color-bg-tertiary' },
  { name: 'bg-card', varName: '--color-bg-card' },
  { name: 'text-primary', varName: '--color-text-primary' },
  { name: 'text-secondary', varName: '--color-text-secondary' },
  { name: 'text-muted', varName: '--color-text-muted' },
  { name: 'border', varName: '--color-border' },
  { name: 'warning', varName: '--color-warning' },
  { name: 'error', varName: '--color-error' },
  { name: 'success', varName: '--color-success' },
]

const FONT_TOKENS: FontToken[] = [
  { key: 'display', label: 'Display', varName: '--font-display', sample: 'Aa 飞书设计 01', size: '1.5rem', weight: 900, desc: 'Orbitron · 标题与强调' },
  { key: 'body', label: 'Body', varName: '--font-family', sample: 'Aa 正文排版示意 01', size: '1rem', weight: 400, desc: 'Noto Sans SC · 正文' },
  { key: 'mono', label: 'Mono', varName: '--font-mono', sample: 'Aa const x = 42;', size: '0.95rem', weight: 700, desc: 'JetBrains Mono · 代码' },
]

const SPACING_TOKENS: SpacingToken[] = [
  { key: 'xs', varName: '--spacing-xs', px: 4 },
  { key: 'sm', varName: '--spacing-sm', px: 8 },
  { key: 'md', varName: '--spacing-md', px: 16 },
  { key: 'lg', varName: '--spacing-lg', px: 24 },
  { key: 'xl', varName: '--spacing-xl', px: 32 },
  { key: '2xl', varName: '--spacing-2xl', px: 48 },
  { key: '3xl', varName: '--spacing-3xl', px: 64 },
]

const RADIUS_TOKENS: RadiusToken[] = [
  { key: 'sm', varName: '--radius-sm', px: 2 },
  { key: 'md', varName: '--radius-md', px: 4 },
  { key: 'lg', varName: '--radius-lg', px: 6 },
  { key: 'xl', varName: '--radius-xl', px: 8 },
  { key: 'full', varName: '--radius-full', px: 9999 },
]

const PLATFORMS: PlatformSpec[] = [
  {
    key: 'apple',
    label: 'Apple',
    icon: '🍎',
    framework: 'SwiftUI · HIG',
    idiom: '胶囊形圆角按钮，系统蓝 accent，SF Pro 字体，强调简约与一致性；Haptic 触感反馈配合流畅动效，控件遵循 Human Interface Guidelines。',
    code: \`Button(action: { signIn() }) {
  Text("Sign In")
    .font(.headline)
    .foregroundStyle(.white)
    .frame(maxWidth: .infinity)
    .padding(.vertical, 14)
}
.buttonStyle(.borderedProminent)
.tint(.blue)\`,
    previewLabel: 'Sign In',
    previewStyle: {
      background: '#0A84FF',
      color: '#ffffff',
      borderRadius: '999px',
      fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '0.95rem',
      padding: '14px 28px',
      border: 'none',
      letterSpacing: '0.02em',
    },
  },
  {
    key: 'android',
    label: 'Android',
    icon: '🤖',
    framework: 'Compose · Material 3',
    idiom: '填充式按钮，圆角 20dp，主色容器与白字，海拔反馈，遵循 Material You 动态配色与状态层 (state layer) 交互。',
    code: \`Button(
  onClick = { signIn() },
  modifier = Modifier.fillMaxWidth(),
  shape = RoundedCornerShape(20.dp),
  colors = ButtonDefaults.buttonColors(
    containerColor = MaterialTheme.colorScheme.primary
  )
) {
  Text("Sign In", fontWeight = FontWeight.Medium)
}\`,
    previewLabel: 'Sign In',
    previewStyle: {
      background: '#6750A4',
      color: '#ffffff',
      borderRadius: '20px',
      fontFamily: 'Roboto, system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '0.95rem',
      padding: '14px 28px',
      border: 'none',
      boxShadow: '0 1px 3px rgba(0,0,0,0.35)',
      letterSpacing: '0.04em',
    },
  },
  {
    key: 'web',
    label: 'Web',
    icon: '🌐',
    framework: 'React · Tailwind',
    idiom: '实用类组合，bg-indigo-600 + rounded-md + hover 过渡；灵活但需团队约定设计系统以保证多端一致性。',
    code: \`<button className="w-full rounded-md
  bg-indigo-600 px-4 py-3
  text-white font-medium
  hover:bg-indigo-700
  transition-colors">
  Sign In
</button>\`,
    previewLabel: 'Sign In',
    previewStyle: {
      background: '#4f46e5',
      color: '#ffffff',
      borderRadius: '6px',
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '0.95rem',
      padding: '12px 28px',
      border: 'none',
      letterSpacing: '0.01em',
    },
  },
  {
    key: 'windows',
    label: 'Windows',
    icon: '🪟',
    framework: 'WinUI 3 · Fluent',
    idiom: 'AccentButtonStyle 强调色按钮，CornerRadius 4，亚克力 (Acrylic) 背景与 Reveal 高光，强调深度与材质层次。',
    code: \`<Button
  Style="{StaticResource AccentButtonStyle}"
  HorizontalAlignment="Stretch"
  CornerRadius="4"
  Padding="16,12">
  <TextBlock Text="Sign In"
    FontWeight="SemiBold" />
</Button>\`,
    previewLabel: 'Sign In',
    previewStyle: {
      background: '#0078D4',
      color: '#ffffff',
      borderRadius: '4px',
      fontFamily: '"Segoe UI", system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '0.95rem',
      padding: '12px 28px',
      border: '1px solid rgba(255,255,255,0.18)',
      letterSpacing: '0.02em',
    },
  },
]

const NODE_W = 120
const NODE_H = 50

const FLOW_NODES: FlowNode[] = [
  { id: 'empty', label: '空状态', x: 30, y: 110, desc: '初始状态：用户尚未输入任何内容。表单字段为空，提交按钮禁用，提示文案"请输入账号与密码"。' },
  { id: 'input', label: '输入中', x: 240, y: 110, desc: '用户正在填写字段。实时校验邮箱 / 手机号格式与密码长度，错误即时提示但不阻断输入流程。' },
  { id: 'validate', label: '校验', x: 450, y: 110, desc: '提交后进入校验状态。前端先做格式校验，再调用后端鉴权接口；期间按钮显示 loading 并禁用。' },
  { id: 'success', label: '成功', x: 670, y: 40, desc: '校验通过：签发 token，跳转至主页。记录登录设备、时间与 IP，触发 onboarding 引导检查。' },
  { id: 'fail', label: '失败', x: 670, y: 180, desc: '校验失败：密码错误 / 账号不存在 / 风控拦截。展示错误原因，失败计数 +1，超过阈值触发验证码。' },
]

const FLOW_EDGES: FlowEdge[] = [
  { from: 'empty', to: 'input', kind: 'normal' },
  { from: 'input', to: 'validate', kind: 'normal' },
  { from: 'validate', to: 'success', kind: 'success' },
  { from: 'validate', to: 'fail', kind: 'fail' },
  { from: 'fail', to: 'input', kind: 'fail', curved: true },
]

/* ---------------- 组件 ---------------- */
function DesignStudio() {
  const [tab, setTab] = useState<TabKey>('tokens')
  const [colorValues, setColorValues] = useState<Record<string, string>>({})
  const [selectedNode, setSelectedNode] = useState<string>('empty')

  useEffect(() => {
    const computed = getComputedStyle(document.documentElement)
    const next: Record<string, string> = {}
    for (const t of COLOR_TOKENS) {
      next[t.name] = computed.getPropertyValue(t.varName).trim()
    }
    setColorValues(next)
  }, [])

  const nodeById = (id: string) => FLOW_NODES.find(n => n.id === id)
  const activeNode = nodeById(selectedNode) ?? FLOW_NODES[0]

  const renderTokens = () => (
    <div className="ds-tokens">
      <section className="plugin-section">
        <h2 className="plugin-section-title">颜色令牌</h2>
        <p className="ds-hint">从项目 CSS 变量实时读取 · 主题切换后刷新可更新</p>
        <div className="ds-color-grid">
          {COLOR_TOKENS.map(t => {
            const val = colorValues[t.name] || '—'
            return (
              <div key={t.name} className="ds-color-cell">
                <div
                  className="ds-color-swatch"
                  style={{ background: val === '—' ? 'var(--color-bg-tertiary)' : val }}
                />
                <div className="ds-color-meta">
                  <span className="ds-color-name">\${t.varName}</span>
                  <span className="ds-color-value">{val}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">字体令牌</h2>
        <div className="ds-font-list">
          {FONT_TOKENS.map(f => (
            <div key={f.key} className="ds-font-row">
              <div
                className="ds-font-sample"
                style={{ fontFamily: \`var(\${f.varName})\`, fontSize: f.size, fontWeight: f.weight }}
              >
                {f.sample}
              </div>
              <div className="ds-font-meta">
                <span className="ds-font-label">{f.label}</span>
                <span className="ds-font-var">\${f.varName}</span>
                <span className="ds-font-desc">{f.desc} · {f.size} / {f.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">间距令牌</h2>
        <div className="ds-spacing-list">
          {SPACING_TOKENS.map(s => (
            <div key={s.key} className="ds-spacing-row">
              <span className="ds-spacing-key">{s.key}</span>
              <div className="ds-spacing-bar-wrap">
                <div className="ds-spacing-bar" style={{ width: \`\${s.px}px\` }} />
              </div>
              <span className="ds-spacing-px">{s.px}px</span>
              <span className="ds-spacing-var">\${s.varName}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">圆角令牌</h2>
        <div className="ds-radius-grid">
          {RADIUS_TOKENS.map(r => (
            <div key={r.key} className="ds-radius-cell">
              <div
                className="ds-radius-block"
                style={{ borderRadius: r.px === 9999 ? '9999px' : \`\${r.px}px\` }}
              />
              <div className="ds-radius-meta">
                <span className="ds-radius-key">{r.key}</span>
                <span className="ds-radius-px">{r.px === 9999 ? '9999px' : \`\${r.px}px\`}</span>
                <span className="ds-radius-var">\${r.varName}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )

  const renderPlatform = () => (
    <div className="ds-platform-list">
      {PLATFORMS.map(p => (
        <section key={p.key} className="plugin-section ds-platform-section">
          <div className="ds-platform-head">
            <span className="ds-platform-icon">{p.icon}</span>
            <div>
              <h2 className="ds-platform-label">{p.label}</h2>
              <span className="ds-platform-framework">{p.framework}</span>
            </div>
          </div>
          <p className="ds-platform-idiom">{p.idiom}</p>
          <div className="ds-platform-body">
            <div className="ds-platform-code">
              <div className="ds-code-head">CODE</div>
              <pre className="ds-code-block">{p.code}</pre>
            </div>
            <div className="ds-platform-preview">
              <div className="ds-code-head">PREVIEW</div>
              <div className="ds-preview-stage">
                <button type="button" style={p.previewStyle} className="ds-preview-btn">
                  {p.previewLabel}
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )

  const renderEdge = (e: FlowEdge) => {
    const a = nodeById(e.from)
    const b = nodeById(e.to)
    if (!a || !b) return null
    const kindCls = e.kind === 'success'
      ? 'ds-flow-edge ds-flow-edge-success'
      : e.kind === 'fail'
        ? 'ds-flow-edge ds-flow-edge-fail'
        : 'ds-flow-edge'
    const marker = e.kind === 'success'
      ? 'url(#ds-arrow-success)'
      : e.kind === 'fail'
        ? 'url(#ds-arrow-fail)'
        : 'url(#ds-arrow)'

    if (e.curved) {
      const startX = a.x + NODE_W / 2
      const startY = a.y + NODE_H
      const endX = b.x + NODE_W / 2
      const endY = b.y + NODE_H
      const midY = Math.max(startY, endY) + 70
      const d = \`M \${startX} \${startY} C \${startX} \${midY}, \${endX} \${midY}, \${endX} \${endY}\`
      return (
        <g key={\`\${e.from}-\${e.to}\`}>
          <path d={d} className={kindCls} fill="none" markerEnd={marker} />
          <text x={(startX + endX) / 2} y={midY + 4} className="ds-flow-edge-label" textAnchor="middle">retry</text>
        </g>
      )
    }

    const ax = a.x + NODE_W
    const ay = a.y + NODE_H / 2
    const bx = b.x
    const by = b.y + NODE_H / 2
    return (
      <g key={\`\${e.from}-\${e.to}\`}>
        <line x1={ax} y1={ay} x2={bx} y2={by} className={kindCls} markerEnd={marker} />
      </g>
    )
  }

  const renderFlow = () => (
    <div className="ds-flow">
      <section className="plugin-section">
        <h2 className="plugin-section-title">登录注册流程 · 状态机</h2>
        <p className="ds-hint">点击节点查看状态说明</p>
        <svg className="ds-flow-svg" viewBox="0 0 820 320" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="ds-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,5 L0,10 z" className="ds-flow-arrow" />
            </marker>
            <marker id="ds-arrow-success" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,5 L0,10 z" className="ds-flow-arrow-success" />
            </marker>
            <marker id="ds-arrow-fail" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,5 L0,10 z" className="ds-flow-arrow-fail" />
            </marker>
          </defs>
          {FLOW_EDGES.map(renderEdge)}
          {FLOW_NODES.map(n => {
            const isActive = n.id === selectedNode
            return (
              <g
                key={n.id}
                className={\`ds-flow-node \${isActive ? 'active' : ''}\`}
                onClick={() => setSelectedNode(n.id)}
              >
                <rect x={n.x} y={n.y} width={NODE_W} height={NODE_H} rx="4" ry="4" className="ds-flow-node-rect" />
                <text
                  x={n.x + NODE_W / 2}
                  y={n.y + NODE_H / 2}
                  className="ds-flow-node-label"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </section>
      <section className="plugin-section ds-flow-detail">
        <h2 className="plugin-section-title">状态说明</h2>
        <div className="ds-flow-detail-head">
          <span className="ds-flow-detail-badge">{activeNode.label}</span>
          <span className="ds-flow-detail-id">id: {activeNode.id}</span>
        </div>
        <p className="ds-flow-detail-desc">{activeNode.desc}</p>
        <div className="ds-flow-legend">
          <span className="ds-flow-legend-item"><span className="ds-dot ds-dot-info" />主流程</span>
          <span className="ds-flow-legend-item"><span className="ds-dot ds-dot-success" />成功分支</span>
          <span className="ds-flow-legend-item"><span className="ds-dot ds-dot-fail" />失败 / 重试</span>
        </div>
      </section>
    </div>
  )

  return (
    <PluginShell
      icon="✨"
      title="UI/UX 设计工作室"
      subtitle="stark · 设计令牌/跨平台/UX 流程 Mock"
      vendor="stark"
      version="0.7.2"
    >
      <div className="plugin-tabs">
        {TAB_ITEMS.map(item => (
          <button
            key={item.key}
            className={\`plugin-tab \${tab === item.key ? 'active' : ''}\`}
            onClick={() => setTab(item.key)}
            type="button"
          >
            <span className="ds-tab-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      {tab === 'tokens' && renderTokens()}
      {tab === 'platform' && renderPlatform()}
      {tab === 'flow' && renderFlow()}
    </PluginShell>
  )
}

export default DesignStudio
`;export{e as default};
