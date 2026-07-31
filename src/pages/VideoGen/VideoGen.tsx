import { useState } from 'react'
import PluginShell from '../../components/PluginShell'
import './VideoGen.css'

type Resolution = '480p' | '720p'
type Ratio = '16:9' | '4:3' | '1:1' | '3:4' | '9:16' | '21:9' | 'adaptive'
type GenMode = 'mock' | 'real'

interface Shot {
  id: number
  description: string
  camera: string
  duration: number
}

interface VideoRecord {
  id: string
  prompt: string
  resolution: Resolution
  ratio: Ratio
  duration: number
  mode: GenMode
  shots: Shot[]
  createdAt: number
}

const CAMERA_MOVES = [
  '静态镜头',
  '缓慢推进',
  '环绕拍摄',
  '俯视下降',
  '横向平移',
  '跟随镜头',
  '手持晃动',
]

const PROMPT_EXAMPLES = [
  '赛博朋克城市夜景，霓虹灯闪烁，飞行汽车穿梭',
  '一只小猫在阳光下的花园里追蝴蝶',
  '太空飞船穿越星云，引擎喷射蓝色火焰',
  '水墨风格山水，云雾缭绕，瀑布流淌',
]

const RATIO_OPTIONS: Ratio[] = ['16:9', '4:3', '1:1', '3:4', '9:16', '21:9', 'adaptive']
const DURATIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function VideoGen() {
  const [prompt, setPrompt] = useState('')
  const [resolution, setResolution] = useState<Resolution>('720p')
  const [ratio, setRatio] = useState<Ratio>('16:9')
  const [duration, setDuration] = useState(5)
  const [mode, setMode] = useState<GenMode>('mock')
  const [shots, setShots] = useState<Shot[]>([])
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<VideoRecord[]>([])
  const [error, setError] = useState('')

  const addShot = () => {
    setShots(prev => [
      ...prev,
      {
        id: prev.length + 1,
        description: '',
        camera: CAMERA_MOVES[prev.length % CAMERA_MOVES.length],
        duration: 3,
      },
    ])
  }

  const updateShot = (id: number, field: keyof Shot, value: string | number) => {
    setShots(prev => prev.map(s => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const removeShot = (id: number) => {
    setShots(prev => prev.filter(s => s.id !== id))
  }

  const generate = async () => {
    if (!prompt.trim()) {
      setError('请输入提示词')
      return
    }
    setError('')
    setLoading(true)

    // Mock 模式：模拟生成延迟
    await new Promise(r => setTimeout(r, 1500))

    const finalShots = shots.length > 0 ? shots : [
      { id: 1, description: prompt, camera: '缓慢推进', duration },
    ]

    const record: VideoRecord = {
      id: `${Date.now()}`,
      prompt,
      resolution,
      ratio,
      duration,
      mode,
      shots: finalShots,
      createdAt: Date.now(),
    }
    setHistory(prev => [record, ...prev].slice(0, 8))
    setLoading(false)
  }

  const current = history[0]

  return (
    <PluginShell
      icon="🎬"
      title="AI 视频生成器"
      subtitle="Seedance · 文本到视频 · 多镜头脚本 · Mock 预览 + 真实工作流"
      vendor="Seedance"
      version="1.0.0"
    >
      <div className="vg-layout">
        <div className="vg-controls">
          <section className="plugin-section">
            <h2 className="plugin-section-title">导演脚本</h2>
            <textarea
              className="plugin-textarea"
              placeholder="描述视频主题、场景、动作、镜头语言..."
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
                  {ex.slice(0, 10)}…
                </button>
              ))}
            </div>
          </section>

          <section className="plugin-section">
            <h2 className="plugin-section-title">分镜列表</h2>
            {shots.length === 0 ? (
              <p className="vg-hint">未添加分镜，将生成单镜头视频</p>
            ) : (
              <div className="vg-shots">
                {shots.map(s => (
                  <div key={s.id} className="vg-shot">
                    <div className="vg-shot-head">
                      <span className="vg-shot-num">Shot {s.id}</span>
                      <button
                        className="vg-shot-remove"
                        onClick={() => removeShot(s.id)}
                        type="button"
                      >
                        ×
                      </button>
                    </div>
                    <textarea
                      className="plugin-textarea vg-shot-desc"
                      placeholder="本镜动作描述..."
                      value={s.description}
                      onChange={e => updateShot(s.id, 'description', e.target.value)}
                      rows={2}
                    />
                    <div className="vg-shot-params">
                      <select
                        className="plugin-select"
                        value={s.camera}
                        onChange={e => updateShot(s.id, 'camera', e.target.value)}
                      >
                        {CAMERA_MOVES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <label className="vg-shot-dur">
                        时长
                        <select
                          className="plugin-select"
                          value={s.duration}
                          onChange={e => updateShot(s.id, 'duration', Number(e.target.value))}
                        >
                          {DURATIONS.map(d => (
                            <option key={d} value={d}>{d}s</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button className="plugin-btn vg-add-shot" onClick={addShot} type="button">
              + 添加分镜
            </button>
          </section>

          <section className="plugin-section">
            <h2 className="plugin-section-title">输出参数</h2>
            <div className="plugin-grid-2">
              <div>
                <label className="plugin-label">分辨率</label>
                <select
                  className="plugin-select"
                  value={resolution}
                  onChange={e => setResolution(e.target.value as Resolution)}
                >
                  <option value="480p">480p</option>
                  <option value="720p">720p</option>
                </select>
              </div>
              <div>
                <label className="plugin-label">总时长</label>
                <select
                  className="plugin-select"
                  value={duration}
                  onChange={e => setDuration(Number(e.target.value))}
                >
                  {DURATIONS.map(d => (
                    <option key={d} value={d}>{d}s</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ marginTop: '12px' }}>
              <label className="plugin-label">宽高比</label>
              <div className="vg-ratio-grid">
                {RATIO_OPTIONS.map(r => (
                  <button
                    key={r}
                    className={`vg-ratio-chip ${ratio === r ? 'active' : ''}`}
                    onClick={() => setRatio(r)}
                    type="button"
                  >
                    {r}
                  </button>
                ))}
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
                  Mock 预览
                </button>
                <button
                  className={`plugin-tab ${mode === 'real' ? 'active' : ''}`}
                  onClick={() => setMode('real')}
                  type="button"
                >
                  真实工作流
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
            {loading ? '生成中...' : '生成视频'}
          </button>

          {error && <div className="ig-error">{error}</div>}
        </div>

        <div className="vg-preview">
          <section className="plugin-section">
            <h2 className="plugin-section-title">预览</h2>
            {loading ? (
              <div className="ig-loading">
                <div className="ig-loading-spinner" />
                <p>正在{mode === 'mock' ? '渲染 Mock 预览' : '构建调用工作流'}...</p>
              </div>
            ) : current ? (
              <div className="vg-result">
                <div
                  className={`vg-player vg-ratio-${current.ratio.replace(':', '-')}`}
                  data-mode={current.mode}
                >
                  <div className="vg-player-content">
                    <div className="vg-player-grid" />
                    <div className="vg-player-scan" />
                    <div className="vg-player-text">
                      <div className="vg-player-tag">
                        {current.mode === 'mock' ? 'MOCK PREVIEW' : 'REAL WORKFLOW'}
                      </div>
                      <div className="vg-player-title">
                        {current.prompt.slice(0, 30)}{current.prompt.length > 30 ? '…' : ''}
                      </div>
                      <div className="vg-player-meta">
                        {current.resolution} · {current.ratio} · {current.duration}s · {current.shots.length} 镜
                      </div>
                    </div>
                    <div className="vg-player-progress" />
                  </div>
                </div>
                <div className="vg-shots-timeline">
                  {current.shots.map((s, i) => (
                    <div key={s.id} className="vg-timeline-shot">
                      <div className="vg-timeline-bar" style={{ flex: s.duration }}>
                        <span>S{i + 1}</span>
                      </div>
                      <span className="vg-timeline-dur">{s.duration}s</span>
                    </div>
                  ))}
                </div>
                {current.mode === 'real' && (
                  <div className="vg-workflow">
                    <h3 className="plugin-section-title">真实调用工作流</h3>
                    <pre className="vg-code-block">{`# 真实模式需通过 IDE GenerateVideo 工具调用
# 网站侧仅展示调用参数，实际生成在 IDE 内完成

GenerateVideo(
  prompt = ${JSON.stringify(current.prompt)},
  resolution = "${current.resolution}",
  ratio = "${current.ratio}",
  duration = ${current.duration},
  file_path = "./output/seedance-${current.id}.mp4"
)`}</pre>
                  </div>
                )}
              </div>
            ) : (
              <div className="plugin-empty">
                <div className="plugin-empty-icon">🎞️</div>
                <p>输入脚本并点击生成视频</p>
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
                    <div className={`vg-thumb vg-ratio-${r.ratio.replace(':', '-')}`}>
                      <span>{r.duration}s</span>
                    </div>
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

export default VideoGen
