import { useState, useRef } from 'react'
import PluginShell from '../../components/PluginShell'
import './ImageGen.css'

type ImageSize = 'square_hd' | 'square' | 'portrait_4_3' | 'portrait_16_9' | 'landscape_4_3' | 'landscape_16_9'
type GenMode = 'mock' | 'real'

interface GenRecord {
  id: string
  prompt: string
  size: ImageSize
  style: string
  mode: GenMode
  url: string
  createdAt: number
}

const SIZE_OPTIONS: { value: ImageSize; label: string; w: number; h: number }[] = [
  { value: 'square_hd', label: '方形高清', w: 1024, h: 1024 },
  { value: 'square', label: '方形', w: 1024, h: 1024 },
  { value: 'portrait_4_3', label: '竖屏 4:3', w: 864, h: 1152 },
  { value: 'portrait_16_9', label: '竖屏 16:9', w: 720, h: 1280 },
  { value: 'landscape_4_3', label: '横屏 4:3', w: 1152, h: 864 },
  { value: 'landscape_16_9', label: '横屏 16:9', w: 1280, h: 720 },
]

const STYLE_PRESETS = [
  { id: 'pixel', label: '像素风', suffix: 'pixel art style, 8-bit retro, blocky pixels' },
  { id: 'photo', label: '写实', suffix: 'photorealistic, high detail, natural lighting' },
  { id: 'cyber', label: '赛博朋克', suffix: 'cyberpunk neon, futuristic, dark atmosphere' },
  { id: 'mini', label: '极简', suffix: 'minimalist flat design, clean shapes' },
  { id: '3d', label: '3D 渲染', suffix: '3D render, octane render, volumetric lighting' },
  { id: 'ink', label: '水墨', suffix: 'chinese ink painting, traditional, monochrome' },
]

const PROMPT_EXAMPLES = [
  '一只戴着墨镜的柴犬在霓虹城市街道上滑板',
  '像素风魔法师在水晶洞穴中施法',
  '赛博朋克武士站在雨夜东京塔前',
  '极简风格的山脉日落插画',
]

function buildRealUrl(prompt: string, size: ImageSize) {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`
}

function buildMockUrl(prompt: string, size: ImageSize) {
  // Mock 模式：用 SVG 占位图，模拟生成结果
  const sizeObj = SIZE_OPTIONS.find(s => s.value === size)!
  const seed = prompt.length * 13 + sizeObj.w
  const hues = [
    (seed * 37) % 360,
    (seed * 71) % 360,
    (seed * 113) % 360,
  ]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeObj.w}" height="${sizeObj.h}" viewBox="0 0 ${sizeObj.w} ${sizeObj.h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="hsl(${hues[0]}, 70%, 25%)"/>
        <stop offset="50%" stop-color="hsl(${hues[1]}, 65%, 18%)"/>
        <stop offset="100%" stop-color="hsl(${hues[2]}, 60%, 12%)"/>
      </linearGradient>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <text x="50%" y="46%" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="${Math.floor(sizeObj.w / 28)}" font-weight="bold">[MOCK]</text>
    <text x="50%" y="56%" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="monospace" font-size="${Math.floor(sizeObj.w / 48)}">${sizeObj.w}×${sizeObj.h}</text>
    <text x="50%" y="68%" text-anchor="middle" fill="rgba(196,255,0,0.7)" font-family="monospace" font-size="${Math.floor(sizeObj.w / 56)}">${prompt.slice(0, 24)}${prompt.length > 24 ? '…' : ''}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function ImageGen() {
  const [prompt, setPrompt] = useState('')
  const [size, setSize] = useState<ImageSize>('square_hd')
  const [style, setStyle] = useState('pixel')
  const [mode, setMode] = useState<GenMode>('mock')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<GenRecord[]>([])
  const [error, setError] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)

  const generate = async () => {
    if (!prompt.trim()) {
      setError('请输入提示词')
      return
    }
    setError('')
    setLoading(true)

    const stylePreset = STYLE_PRESETS.find(s => s.id === style)!
    const fullPrompt = `${prompt.trim()}, ${stylePreset.suffix}`

    if (mode === 'mock') {
      // Mock 模式：模拟生成延迟
      await new Promise(r => setTimeout(r, 800))
      const url = buildMockUrl(fullPrompt, size)
      const record: GenRecord = {
        id: `${Date.now()}`,
        prompt: fullPrompt,
        size,
        style: stylePreset.label,
        mode,
        url,
        createdAt: Date.now(),
      }
      setHistory(prev => [record, ...prev].slice(0, 12))
      setLoading(false)
    } else {
      // 真实 API 模式
      const url = buildRealUrl(fullPrompt, size)
      const record: GenRecord = {
        id: `${Date.now()}`,
        prompt: fullPrompt,
        size,
        style: stylePreset.label,
        mode,
        url,
        createdAt: Date.now(),
      }
      // 预加载图片
      const img = new Image()
      img.onload = () => {
        setHistory(prev => [record, ...prev].slice(0, 12))
        setLoading(false)
      }
      img.onerror = () => {
        setError('真实 API 加载失败，可能是网络或限额问题，建议切回 Mock 模式预览')
        setLoading(false)
      }
      img.src = url
    }
  }

  const current = history[0]

  return (
    <PluginShell
      icon="🎨"
      title="AI 图像生成器"
      subtitle="Seedream · 文本到图像 · Mock 预览 + 真实 API 双模式"
      vendor="Seedream"
      version="1.0.0"
    >
      <div className="ig-layout">
        <div className="ig-controls">
          <section className="plugin-section">
            <h2 className="plugin-section-title">提示词</h2>
            <textarea
              className="plugin-textarea"
              placeholder="描述你想要生成的图像，越具体效果越好..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              rows={4}
            />
            <div className="ig-examples">
              <span className="plugin-label">示例：</span>
              {PROMPT_EXAMPLES.map((ex, i) => (
                <button
                  key={i}
                  className="ig-example-chip"
                  onClick={() => setPrompt(ex)}
                  type="button"
                >
                  {ex.slice(0, 14)}…
                </button>
              ))}
            </div>
          </section>

          <section className="plugin-section">
            <h2 className="plugin-section-title">参数</h2>
            <div className="plugin-grid-2">
              <div>
                <label className="plugin-label">尺寸</label>
                <select
                  className="plugin-select"
                  value={size}
                  onChange={e => setSize(e.target.value as ImageSize)}
                >
                  {SIZE_OPTIONS.map(s => (
                    <option key={s.value} value={s.value}>
                      {s.label} ({s.w}×{s.h})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="plugin-label">风格预设</label>
                <select
                  className="plugin-select"
                  value={style}
                  onChange={e => setStyle(e.target.value)}
                >
                  {STYLE_PRESETS.map(s => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="ig-mode-row">
              <label className="plugin-label">生成模式</label>
              <div className="ig-mode-toggle">
                <button
                  className={`plugin-tab ${mode === 'mock' ? 'active' : ''}`}
                  onClick={() => setMode('mock')}
                  type="button"
                >
                  Mock 占位
                </button>
                <button
                  className={`plugin-tab ${mode === 'real' ? 'active' : ''}`}
                  onClick={() => setMode('real')}
                  type="button"
                >
                  真实 API
                </button>
              </div>
            </div>
          </section>

          <button
            className="plugin-btn plugin-btn-primary ig-generate-btn"
            onClick={generate}
            disabled={loading || !prompt.trim()}
            type="button"
          >
            {loading ? '生成中...' : '生成图像'}
          </button>

          {error && <div className="ig-error">{error}</div>}
        </div>

        <div className="ig-preview">
          <section className="plugin-section ig-preview-section">
            <h2 className="plugin-section-title">预览</h2>
            {loading ? (
              <div className="ig-loading">
                <div className="ig-loading-spinner" />
                <p>正在{mode === 'mock' ? '生成 Mock 占位图' : '调用真实 API'}...</p>
              </div>
            ) : current ? (
              <div className="ig-result">
                <img
                  ref={imgRef}
                  src={current.url}
                  alt={current.prompt}
                  className="ig-result-img"
                />
                <div className="ig-result-meta">
                  <span className="mock-badge">
                    {current.mode === 'mock' ? 'MOCK' : 'REAL API'}
                  </span>
                  <span className="ig-result-style">{current.style}</span>
                  <span className="ig-result-size">{current.size}</span>
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plugin-btn"
                    download={`seedream-${current.id}.png`}
                  >
                    下载
                  </a>
                </div>
                <p className="ig-result-prompt">{current.prompt}</p>
              </div>
            ) : (
              <div className="plugin-empty">
                <div className="plugin-empty-icon">🖼️</div>
                <p>输入提示词并点击生成图像</p>
              </div>
            )}
          </section>

          {history.length > 0 && (
            <section className="plugin-section">
              <h2 className="plugin-section-title">历史记录 ({history.length})</h2>
              <div className="ig-history">
                {history.map(r => (
                  <div
                    key={r.id}
                    className="ig-history-item"
                    onClick={() => setHistory(prev => [r, ...prev.filter(x => x.id !== r.id)])}
                  >
                    <img src={r.url} alt={r.prompt} loading="lazy" />
                    <span className="ig-history-mode">{r.mode === 'mock' ? 'M' : 'R'}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PluginShell>
  )
}

export default ImageGen
