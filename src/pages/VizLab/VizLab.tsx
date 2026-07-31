import { useState } from 'react'
import PluginShell from '../../components/PluginShell'
import './VizLab.css'

type ChartType = 'bar' | 'line' | 'pie' | 'gantt' | 'uml' | 'gauge' | 'heatmap'

const CHART_TYPES: { id: ChartType; label: string; icon: string }[] = [
  { id: 'bar', label: '柱状图', icon: '📊' },
  { id: 'line', label: '折线图', icon: '📈' },
  { id: 'pie', label: '饼图', icon: '🥧' },
  { id: 'gantt', label: '甘特图', icon: '📅' },
  { id: 'uml', label: 'UML 类图', icon: '🔗' },
  { id: 'gauge', label: '仪表盘', icon: '🎯' },
  { id: 'heatmap', label: '热力图', icon: '🔥' },
]

// Mock 数据
const BAR_DATA = [
  { label: 'Python', value: 85, color: 'var(--color-accent-primary)' },
  { label: 'JavaScript', value: 72, color: 'var(--color-accent-secondary)' },
  { label: 'Rust', value: 45, color: 'var(--color-accent-tertiary)' },
  { label: 'Go', value: 58, color: '#ff8c00' },
  { label: 'TypeScript', value: 91, color: '#00c8ff' },
  { label: 'C++', value: 63, color: '#8000ff' },
]

const LINE_DATA = [
  { x: '1月', y: 30 },
  { x: '2月', y: 45 },
  { x: '3月', y: 38 },
  { x: '4月', y: 62 },
  { x: '5月', y: 55 },
  { x: '6月', y: 78 },
  { x: '7月', y: 92 },
  { x: '8月', y: 85 },
]

const PIE_DATA = [
  { label: '前端', value: 35, color: 'var(--color-accent-primary)' },
  { label: '后端', value: 28, color: 'var(--color-accent-secondary)' },
  { label: 'DevOps', value: 18, color: 'var(--color-accent-tertiary)' },
  { label: '设计', value: 12, color: '#ff8c00' },
  { label: '其他', value: 7, color: '#8000ff' },
]

const GANTT_DATA = [
  { task: '需求分析', start: 0, duration: 5, progress: 100 },
  { task: 'UI 设计', start: 3, duration: 7, progress: 80 },
  { task: '前端开发', start: 7, duration: 12, progress: 45 },
  { task: '后端开发', start: 6, duration: 14, progress: 50 },
  { task: '联调测试', start: 16, duration: 6, progress: 10 },
  { task: '上线部署', start: 20, duration: 3, progress: 0 },
]

const UML_CLASSES = [
  {
    name: 'Agent',
    x: 40, y: 40, w: 180, h: 140,
    attrs: ['- id: string', '- params: Tunable', '- qTable: Map'],
    methods: ['+ decide()', '+ learn()', '+ evolve()'],
  },
  {
    name: 'Optimizer',
    x: 320, y: 40, w: 180, h: 120,
    attrs: ['- gain: number'],
    methods: ['+ optimize()', '+ rollback()'],
  },
  {
    name: 'LLMAdvisor',
    x: 180, y: 240, w: 180, h: 120,
    attrs: ['- client: LLM'],
    methods: ['+ analyze()', '+ train()'],
  },
]

const UML_RELATIONS = [
  { from: { x: 220, y: 110 }, to: { x: 320, y: 100 }, label: 'uses' },
  { from: { x: 130, y: 180 }, to: { x: 270, y: 240 }, label: 'delegates' },
]

function BarChart() {
  const max = Math.max(...BAR_DATA.map(d => d.value))
  return (
    <div className="vl-chart-wrap">
      <svg viewBox="0 0 480 280" className="vl-svg">
        {/* 网格 */}
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line
              x1="40" y1={240 - (v / max) * 200}
              x2="460" y2={240 - (v / max) * 200}
              stroke="var(--color-border)" strokeWidth="1" strokeDasharray="2 4"
            />
            <text x="32" y={244 - (v / max) * 200} fill="var(--color-text-muted)" fontSize="10" textAnchor="end">
              {v}
            </text>
          </g>
        ))}
        {/* 柱子 */}
        {BAR_DATA.map((d, i) => {
          const h = (d.value / max) * 200
          const x = 60 + i * 65
          return (
            <g key={d.label}>
              <rect
                x={x} y={240 - h} width="40" height={h}
                fill={d.color}
                className="vl-bar"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <title>{d.label}: {d.value}</title>
              </rect>
              <text x={x + 20} y={240 - h - 6} fill={d.color} fontSize="11" textAnchor="middle" fontWeight="bold">
                {d.value}
              </text>
              <text x={x + 20} y="258" fill="var(--color-text-secondary)" fontSize="10" textAnchor="middle">
                {d.label}
              </text>
            </g>
          )
        })}
        <line x1="40" y1="240" x2="460" y2="240" stroke="var(--color-border-light)" strokeWidth="2" />
      </svg>
    </div>
  )
}

function LineChart() {
  const max = Math.max(...LINE_DATA.map(d => d.y))
  const points = LINE_DATA.map((d, i) => ({
    px: 50 + (i / (LINE_DATA.length - 1)) * 400,
    py: 240 - (d.y / max) * 200,
    label: d.x,
    value: d.y,
  }))
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.px} ${p.py}`).join(' ')
  const areaPath = `${path} L ${points[points.length - 1].px} 240 L ${points[0].px} 240 Z`
  return (
    <div className="vl-chart-wrap">
      <svg viewBox="0 0 480 280" className="vl-svg">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-accent-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line x1="40" y1={240 - (v / max) * 200} x2="460" y2={240 - (v / max) * 200}
              stroke="var(--color-border)" strokeWidth="1" strokeDasharray="2 4" />
            <text x="32" y={244 - (v / max) * 200} fill="var(--color-text-muted)" fontSize="10" textAnchor="end">
              {v}
            </text>
          </g>
        ))}
        <path d={areaPath} fill="url(#lineGrad)" />
        <path d={path} fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.5"
          className="vl-line" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.px} cy={p.py} r="4" fill="var(--color-bg-primary)"
              stroke="var(--color-accent-primary)" strokeWidth="2" className="vl-dot" />
            <text x={p.px} y="258" fill="var(--color-text-secondary)" fontSize="10" textAnchor="middle">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function PieChart() {
  const total = PIE_DATA.reduce((s, d) => s + d.value, 0)
  let acc = 0
  return (
    <div className="vl-chart-wrap vl-pie-wrap">
      <svg viewBox="0 0 280 280" className="vl-svg vl-pie">
        {PIE_DATA.map((d, i) => {
          const start = (acc / total) * Math.PI * 2 - Math.PI / 2
          acc += d.value
          const end = (acc / total) * Math.PI * 2 - Math.PI / 2
          const large = end - start > Math.PI ? 1 : 0
          const cx = 140, cy = 140, r = 100
          const x1 = cx + r * Math.cos(start)
          const y1 = cy + r * Math.sin(start)
          const x2 = cx + r * Math.cos(end)
          const y2 = cy + r * Math.sin(end)
          return (
            <path
              key={d.label}
              d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`}
              fill={d.color}
              className="vl-pie-slice"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <title>{d.label}: {d.value} ({Math.round((d.value / total) * 100)}%)</title>
            </path>
          )
        })}
        <circle cx="140" cy="140" r="40" fill="var(--color-bg-card)" stroke="var(--color-border)" strokeWidth="2" />
        <text x="140" y="138" fill="var(--color-text-primary)" fontSize="14" textAnchor="middle" fontWeight="bold">
          {total}
        </text>
        <text x="140" y="152" fill="var(--color-text-muted)" fontSize="9" textAnchor="middle">
          TOTAL
        </text>
      </svg>
      <div className="vl-legend">
        {PIE_DATA.map(d => (
          <div key={d.label} className="vl-legend-item">
            <span className="vl-legend-dot" style={{ background: d.color }} />
            <span className="vl-legend-label">{d.label}</span>
            <span className="vl-legend-value">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GanttChart() {
  const totalDays = 24
  return (
    <div className="vl-chart-wrap">
      <div className="vl-gantt">
        <div className="vl-gantt-header">
          <div className="vl-gantt-task-col">任务</div>
          <div className="vl-gantt-timeline">
            {Array.from({ length: totalDays }, (_, i) => (
              <div key={i} className="vl-gantt-day">{i + 1}</div>
            ))}
          </div>
        </div>
        {GANTT_DATA.map((t, i) => (
          <div key={t.task} className="vl-gantt-row" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="vl-gantt-task-col">{t.task}</div>
            <div className="vl-gantt-timeline">
              <div
                className="vl-gantt-bar"
                style={{
                  left: `${(t.start / totalDays) * 100}%`,
                  width: `${(t.duration / totalDays) * 100}%`,
                }}
              >
                <div
                  className="vl-gantt-progress"
                  style={{ width: `${t.progress}%` }}
                />
                <span className="vl-gantt-bar-label">{t.duration}d · {t.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UMLDiagram() {
  return (
    <div className="vl-chart-wrap">
      <svg viewBox="0 0 560 400" className="vl-svg vl-uml">
        {UML_RELATIONS.map((r, i) => (
          <g key={i}>
            <line
              x1={r.from.x} y1={r.from.y} x2={r.to.x} y2={r.to.y}
              stroke="var(--color-accent-secondary)" strokeWidth="1.5" strokeDasharray="4 3"
            />
            <text
              x={(r.from.x + r.to.x) / 2}
              y={(r.from.y + r.to.y) / 2 - 4}
              fill="var(--color-accent-secondary)"
              fontSize="10" textAnchor="middle"
            >
              {r.label}
            </text>
          </g>
        ))}
        {UML_CLASSES.map(cls => (
          <g key={cls.name}>
            <rect
              x={cls.x} y={cls.y} width={cls.w} height={cls.h}
              fill="var(--color-bg-card)" stroke="var(--color-accent-primary)" strokeWidth="2"
              className="vl-uml-class"
            />
            <rect x={cls.x} y={cls.y} width={cls.w} height="24" fill="var(--color-accent-primary)" />
            <text x={cls.x + cls.w / 2} y={cls.y + 16} fill="var(--color-bg-primary)" fontSize="12" fontWeight="bold" textAnchor="middle">
              {cls.name}
            </text>
            {cls.attrs.map((a, i) => (
              <text key={i} x={cls.x + 8} y={cls.y + 40 + i * 16} fill="var(--color-text-secondary)" fontSize="10">
                {a}
              </text>
            ))}
            <line
              x1={cls.x} y1={cls.y + 40 + cls.attrs.length * 16 + 4}
              x2={cls.x + cls.w} y2={cls.y + 40 + cls.attrs.length * 16 + 4}
              stroke="var(--color-border)" strokeWidth="1"
            />
            {cls.methods.map((m, i) => (
              <text key={i} x={cls.x + 8} y={cls.y + 56 + cls.attrs.length * 16 + i * 16} fill="var(--color-accent-primary)" fontSize="10">
                {m}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

function GaugeChart() {
  const [value, setValue] = useState(68)
  const max = 100
  const angle = -90 + (value / max) * 180
  return (
    <div className="vl-chart-wrap vl-gauge-wrap">
      <svg viewBox="0 0 240 160" className="vl-svg vl-gauge">
        <path d="M 30 130 A 90 90 0 0 1 210 130" fill="none" stroke="var(--color-border)" strokeWidth="16" />
        <path
          d="M 30 130 A 90 90 0 0 1 210 130"
          fill="none" stroke="var(--color-accent-primary)" strokeWidth="16"
          strokeDasharray={`${(value / max) * 283} 283`}
          strokeLinecap="butt"
          className="vl-gauge-arc"
        />
        <line
          x1="120" y1="130" x2={120 + 75 * Math.cos((angle - 90) * Math.PI / 180)}
          y2={130 + 75 * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="var(--color-accent-tertiary)" strokeWidth="3" strokeLinecap="round"
        />
        <circle cx="120" cy="130" r="6" fill="var(--color-accent-tertiary)" />
        <text x="120" y="100" fill="var(--color-text-primary)" fontSize="28" fontWeight="bold" textAnchor="middle">
          {value}
        </text>
        <text x="120" y="118" fill="var(--color-text-muted)" fontSize="9" textAnchor="middle">PERCENT</text>
      </svg>
      <input
        type="range" min="0" max="100" value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="vl-gauge-slider"
      />
    </div>
  )
}

function Heatmap() {
  const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  const hours = Array.from({ length: 12 }, (_, i) => `${i * 2}:00`)
  const data = days.map(() => hours.map(() => Math.random()))
  return (
    <div className="vl-chart-wrap">
      <div className="vl-heatmap">
        <div className="vl-heatmap-row vl-heatmap-header">
          <div className="vl-heatmap-corner">时/日</div>
          {hours.map(h => (
            <div key={h} className="vl-heatmap-label">{h}</div>
          ))}
        </div>
        {days.map((d, di) => (
          <div key={d} className="vl-heatmap-row">
            <div className="vl-heatmap-label">{d}</div>
            {data[di].map((v, hi) => (
              <div
                key={hi}
                className="vl-heatmap-cell"
                style={{
                  background: `rgba(196, 255, 0, ${0.1 + v * 0.9})`,
                  animationDelay: `${(di * 12 + hi) * 0.01}s`,
                }}
                title={`${d} ${hours[hi]}: ${Math.round(v * 100)}%`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function VizLab() {
  const [active, setActive] = useState<ChartType>('bar')

  return (
    <PluginShell
      icon="📊"
      title="数据可视化实验室"
      subtitle="Build Web Data Visualization · 纯 SVG 实现 · 像素风主题"
      vendor="Build Web Data Visualization"
      version="0.1.21"
    >
      <div className="vl-tabs">
        {CHART_TYPES.map(c => (
          <button
            key={c.id}
            className={`plugin-tab ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
            type="button"
          >
            <span className="vl-tab-icon">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>

      <section className="plugin-section vl-canvas">
        <div className="vl-canvas-header">
          <h2 className="plugin-section-title">
            {CHART_TYPES.find(c => c.id === active)?.label} 可视化
          </h2>
          <span className="mock-badge">SVG · MOCK</span>
        </div>
        {active === 'bar' && <BarChart />}
        {active === 'line' && <LineChart />}
        {active === 'pie' && <PieChart />}
        {active === 'gantt' && <GanttChart />}
        {active === 'uml' && <UMLDiagram />}
        {active === 'gauge' && <GaugeChart />}
        {active === 'heatmap' && <Heatmap />}
      </section>

      <section className="plugin-section">
        <h2 className="plugin-section-title">渲染路径说明</h2>
        <div className="vl-paths">
          <div className="vl-path-card">
            <div className="vl-path-icon">🎨</div>
            <div className="vl-path-name">SVG / D3</div>
            <p>声明式 SVG，适合 UML、节点图、精确控制标记。当前页面所有图表均基于此路径。</p>
          </div>
          <div className="vl-path-card">
            <div className="vl-path-icon">⚡</div>
            <div className="vl-path-name">Canvas2D</div>
            <p>立即模式渲染，适合高密度标记（万级数据点）、自定义命中检测。</p>
          </div>
          <div className="vl-path-card">
            <div className="vl-path-icon">🎮</div>
            <div className="vl-path-name">Three.js / WebGL</div>
            <p>GPU 加速，适合真实 3D 空间、粒子流、体渲染。</p>
          </div>
          <div className="vl-path-card">
            <div className="vl-path-icon">📐</div>
            <div className="vl-path-name">Vega-Lite</div>
            <p>语法式声明图表，适合表格类图表快速产出。</p>
          </div>
        </div>
      </section>
    </PluginShell>
  )
}

export default VizLab
