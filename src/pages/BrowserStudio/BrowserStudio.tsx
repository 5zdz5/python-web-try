import { useMemo, useRef, useState } from 'react'
import PluginShell from '../../components/PluginShell'
import '../plugins-shared.css'
import './BrowserStudio.css'

/* ============ Mock 数据 ============ */

type ElementType = 'heading' | 'text' | 'button' | 'input'

interface MockElement {
  id: string
  tag: ElementType
  text?: string
  placeholder?: string
}

interface MockPage {
  url: string
  title: string
  elements: MockElement[]
}

const MOCK_PAGES: MockPage[] = [
  {
    url: 'https://example.com',
    title: 'Example 首页',
    elements: [
      { id: 'hero', tag: 'heading', text: 'Welcome to Example' },
      { id: 'desc', tag: 'text', text: '一个用于浏览器自动化演示的 Mock 站点。' },
      { id: 'login-btn', tag: 'button', text: '登录' },
    ],
  },
  {
    url: 'https://example.com/login',
    title: '登录页',
    elements: [
      { id: 'title', tag: 'heading', text: 'Sign In' },
      { id: 'username', tag: 'input', placeholder: '用户名' },
      { id: 'password', tag: 'input', placeholder: '密码' },
      { id: 'submit', tag: 'button', text: '提交' },
    ],
  },
  {
    url: 'https://example.com/dashboard',
    title: '控制台',
    elements: [
      { id: 'dash-title', tag: 'heading', text: 'Dashboard' },
      { id: 'welcome', tag: 'text', text: '欢迎回来，admin！' },
      { id: 'card1', tag: 'text', text: '📦 订单：1,280' },
      { id: 'card2', tag: 'text', text: '👥 用户：326' },
      { id: 'logout', tag: 'button', text: '退出' },
    ],
  },
]

const DEFAULT_SCRIPT = `# 浏览器自动化 Mock 脚本
navigate https://example.com
click #login-btn
navigate https://example.com/login
type #username admin
type #password s3cret
click #submit
screenshot
navigate https://example.com/dashboard
screenshot`

const INITIAL_PAGE: MockPage = MOCK_PAGES[0]

const STEP_DELAY = 700
const FLASH_DELAY = 480
const SHOT_FLASH_DELAY = 360

/* ============ 类型 ============ */

interface ParsedStep {
  text: string
  lineIndex: number
}

type StepType = 'navigate' | 'click' | 'type' | 'screenshot' | 'unknown'
type StepStatus = 'success' | 'failed'
type LineStatus = 'running' | 'success' | 'failed' | 'pending' | 'idle'

interface LogEntry {
  id: string
  timestamp: number
  action: string
  type: StepType
  status: StepStatus
  message: string
}

interface Screenshot {
  id: string
  url: string
  time: number
  svg: string
}

/* ============ 工具函数 ============ */

function parseScript(text: string): ParsedStep[] {
  return text
    .split('\n')
    .map((line, i) => ({ text: line.trim(), lineIndex: i }))
    .filter(s => s.text.length > 0 && !s.text.startsWith('#'))
}

function extractId(selector: string): string | null {
  if (selector.startsWith('#')) return selector.slice(1)
  return selector
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

function buildScreenshotSvg(page: MockPage, typed: Record<string, string>): string {
  const w = 320
  const h = 200
  const rows: string[] = []
  let y = 52
  for (const el of page.elements) {
    if (y > h - 20) break
    if (el.tag === 'heading') {
      rows.push(`<rect x="16" y="${y}" width="180" height="12" fill="rgba(120,200,255,0.7)"/>`)
      y += 22
    } else if (el.tag === 'text') {
      const label = typed[el.id] ? `${el.placeholder || el.id}: ${typed[el.id]}` : (el.text || '')
      const width = Math.min(280, Math.max(60, label.length * 6))
      rows.push(`<rect x="16" y="${y}" width="${width}" height="8" fill="rgba(200,210,230,0.55)"/>`)
      y += 16
    } else if (el.tag === 'button') {
      rows.push(`<rect x="16" y="${y}" width="60" height="16" fill="rgba(196,255,0,0.45)" stroke="rgba(196,255,0,0.9)"/>`)
      y += 22
    } else if (el.tag === 'input') {
      const val = typed[el.id] || ''
      rows.push(`<rect x="16" y="${y}" width="200" height="14" fill="rgba(40,44,60,0.9)" stroke="rgba(120,140,180,0.6)"/>`)
      if (val) {
        rows.push(`<text x="20" y="${y + 11}" fill="rgba(196,255,0,0.9)" font-family="monospace" font-size="9">${escapeXml(val)}</text>`)
      }
      y += 20
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="${w}" height="${h}" fill="#0f1320"/>
<rect x="0" y="0" width="${w}" height="30" fill="#1a1f30"/>
<circle cx="14" cy="15" r="4" fill="#ff5e62"/>
<circle cx="28" cy="15" r="4" fill="#ffb800"/>
<circle cx="42" cy="15" r="4" fill="#3ddc84"/>
<rect x="58" y="7" width="${w - 70}" height="16" fill="#0f1320" stroke="rgba(120,140,180,0.4)"/>
<text x="64" y="19" fill="rgba(160,170,200,0.85)" font-family="monospace" font-size="9">${escapeXml(page.url)}</text>
${rows.join('\n')}
<text x="${w - 8}" y="${h - 6}" text-anchor="end" fill="rgba(120,130,160,0.7)" font-family="monospace" font-size="8">${escapeXml(new Date().toLocaleTimeString())}</text>
</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

/* ============ 组件 ============ */

function BrowserStudio() {
  const [script, setScript] = useState<string>(DEFAULT_SCRIPT)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [currentLine, setCurrentLine] = useState<number>(-1)
  const [page, setPage] = useState<MockPage>(INITIAL_PAGE)
  const [typedText, setTypedText] = useState<Record<string, string>>({})
  const [flashingId, setFlashingId] = useState<string | null>(null)
  const [flashShot, setFlashShot] = useState<boolean>(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const stopFlagRef = useRef<boolean>(false)
  const pageRef = useRef<MockPage>(INITIAL_PAGE)
  const typedRef = useRef<Record<string, string>>({})
  const backdropRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const parsedSteps = useMemo(() => parseScript(script), [script])
  const lineToStep = useMemo(() => {
    const m = new Map<number, number>()
    parsedSteps.forEach((s, p) => m.set(s.lineIndex, p))
    return m
  }, [parsedSteps])

  const allLines = script.split('\n')

  const computeLineStatus = (i: number): LineStatus => {
    const pos = lineToStep.get(i)
    if (pos === undefined) return 'idle'
    if (i === currentLine) return 'running'
    if (pos < logs.length) return logs[pos].status
    return 'pending'
  }

  const updatePage = (next: MockPage) => {
    pageRef.current = next
    setPage(next)
  }

  const syncScroll = () => {
    if (textareaRef.current && backdropRef.current) {
      backdropRef.current.scrollTop = textareaRef.current.scrollTop
      backdropRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }

  const executeStep = (raw: string) => {
    const parts = raw.split(/\s+/)
    const cmd = (parts[0] || '').toLowerCase()
    const arg1 = parts[1] || ''
    const arg2 = parts.slice(2).join(' ')
    const logId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

    const pushLog = (type: StepType, status: StepStatus, message: string) => {
      setLogs(prev => [...prev, { id: logId, timestamp: Date.now(), action: raw, type, status, message }])
    }

    const flash = (id: string) => {
      setFlashingId(id)
      setTimeout(() => {
        setFlashingId(prev => (prev === id ? null : prev))
      }, FLASH_DELAY)
    }

    if (cmd === 'navigate') {
      const url = arg1
      const found = MOCK_PAGES.find(p => p.url === url)
      if (found) {
        updatePage(found)
        pushLog('navigate', 'success', `已导航到 ${url}`)
      } else {
        updatePage({
          url,
          title: '未找到',
          elements: [{ id: 'nf', tag: 'text', text: `404 — ${url} 不在 Mock 站点列表中` }],
        })
        pushLog('navigate', 'failed', `Mock 站点未找到: ${url}`)
      }
    } else if (cmd === 'click') {
      const id = extractId(arg1)
      const el = id ? pageRef.current.elements.find(e => e.id === id) : undefined
      if (el) {
        flash(el.id)
        pushLog('click', 'success', `已点击 ${arg1}`)
      } else {
        pushLog('click', 'failed', `元素不存在: ${arg1}`)
      }
    } else if (cmd === 'type') {
      const id = extractId(arg1)
      const el = id ? pageRef.current.elements.find(e => e.id === id) : undefined
      if (el) {
        const next = { ...typedRef.current, [el.id]: arg2 }
        typedRef.current = next
        setTypedText(next)
        flash(el.id)
        pushLog('type', 'success', `已输入 "${arg2}" 至 ${arg1}`)
      } else {
        pushLog('type', 'failed', `元素不存在: ${arg1}`)
      }
    } else if (cmd === 'screenshot') {
      setFlashShot(true)
      setTimeout(() => setFlashShot(false), SHOT_FLASH_DELAY)
      const svg = buildScreenshotSvg(pageRef.current, typedRef.current)
      setScreenshots(prev => [
        ...prev,
        { id: logId, url: pageRef.current.url, time: Date.now(), svg },
      ])
      pushLog('screenshot', 'success', '截图已保存')
    } else {
      pushLog('unknown', 'failed', `未知命令: ${cmd}`)
    }
  }

  const runScript = () => {
    if (isRunning) return
    const steps = parseScript(script)
    if (steps.length === 0) return
    stopFlagRef.current = false
    setIsRunning(true)
    setLogs([])
    setCurrentLine(-1)
    let i = 0

    const finish = () => {
      setIsRunning(false)
      setCurrentLine(-1)
      timerRef.current = null
    }

    const runStep = () => {
      if (stopFlagRef.current) {
        finish()
        return
      }
      if (i >= steps.length) {
        finish()
        return
      }
      const step = steps[i]
      setCurrentLine(step.lineIndex)
      executeStep(step.text)
      i++
      timerRef.current = setTimeout(runStep, STEP_DELAY)
    }

    runStep()
  }

  const stopScript = () => {
    stopFlagRef.current = true
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setIsRunning(false)
    setCurrentLine(-1)
  }

  const resetAll = () => {
    stopScript()
    setLogs([])
    setScreenshots([])
    typedRef.current = {}
    setTypedText({})
    updatePage(INITIAL_PAGE)
    setCurrentLine(-1)
  }

  return (
    <PluginShell
      icon="🌐"
      title="浏览器自动化演示"
      subtitle="浏览器控制 · 导航/点击/表单/截图 Mock"
      vendor="浏览器控制"
      version="1.0.3"
    >
      <div className="bs-layout">
        {/* 左侧：脚本编辑器 */}
        <section className="plugin-section bs-editor-section">
          <h2 className="plugin-section-title">自动化脚本</h2>
          <div className="bs-editor-wrap">
            <div className="bs-editor-backdrop" ref={backdropRef} aria-hidden="true">
              {allLines.map((line, i) => (
                <div key={i} className={`bs-editor-line status-${computeLineStatus(i)}`}>
                  <span className="bs-line-num">{i + 1}</span>
                  <span className="bs-line-text">{line || '\u00A0'}</span>
                </div>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              className="bs-editor-input"
              value={script}
              onChange={e => setScript(e.target.value)}
              onScroll={syncScroll}
              spellCheck={false}
              readOnly={isRunning}
            />
          </div>
          <div className="bs-editor-actions">
            <button
              className="plugin-btn plugin-btn-primary"
              onClick={runScript}
              disabled={isRunning}
              type="button"
            >
              ▶ 运行脚本
            </button>
            <button
              className="plugin-btn"
              onClick={stopScript}
              disabled={!isRunning}
              type="button"
            >
              ■ 停止
            </button>
            <button
              className="plugin-btn"
              onClick={resetAll}
              disabled={isRunning}
              type="button"
            >
              ↺ 重置
            </button>
            <span className="bs-step-count">{parsedSteps.length} 步</span>
          </div>
        </section>

        {/* 右侧：浏览器视口 */}
        <section className="plugin-section bs-viewport-section">
          <h2 className="plugin-section-title">浏览器视口</h2>
          <div className="bs-browser">
            <div className="bs-browser-chrome">
              <span className="bs-dot bs-dot-r" />
              <span className="bs-dot bs-dot-y" />
              <span className="bs-dot bs-dot-g" />
              <div className="bs-addressbar">
                <span className="bs-lock">🔒</span>
                <span className="bs-url">{page.url}</span>
              </div>
              <span className="bs-reload" title="刷新">⟳</span>
            </div>
            <div className="bs-browser-body">
              {flashShot && <div className="bs-flash" />}
              <div className="bs-page-title">{page.title}</div>
              <div className="bs-page-content">
                {page.elements.map(el => {
                  const flashing = flashingId === el.id
                  if (el.tag === 'heading') {
                    return (
                      <h3 key={el.id} className={`bs-el-heading ${flashing ? 'bs-flash-el' : ''}`}>
                        {el.text}
                      </h3>
                    )
                  }
                  if (el.tag === 'text') {
                    return (
                      <p key={el.id} className={`bs-el-text ${flashing ? 'bs-flash-el' : ''}`}>
                        {el.text}
                      </p>
                    )
                  }
                  if (el.tag === 'button') {
                    return (
                      <button
                        key={el.id}
                        id={el.id}
                        type="button"
                        className={`bs-el-button ${flashing ? 'bs-flash-el' : ''}`}
                      >
                        {el.text}
                      </button>
                    )
                  }
                  return (
                    <input
                      key={el.id}
                      id={el.id}
                      type="text"
                      className={`bs-el-input ${flashing ? 'bs-flash-el' : ''}`}
                      placeholder={el.placeholder}
                      value={typedText[el.id] || ''}
                      readOnly
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 左下：步骤日志 */}
        <section className="plugin-section bs-log-section">
          <h2 className="plugin-section-title">步骤日志 ({logs.length})</h2>
          {logs.length === 0 ? (
            <div className="plugin-empty">
              <div className="plugin-empty-icon">📋</div>
              <p>运行脚本后，每一步的执行记录将显示在此</p>
            </div>
          ) : (
            <div className="bs-log-list">
              {logs.map((log, idx) => (
                <div key={log.id} className={`bs-log-row bs-log-${log.status}`}>
                  <div className="bs-log-head">
                    <span className="bs-log-time">{formatTime(log.timestamp)}</span>
                    <span className="bs-log-idx">#{idx + 1}</span>
                    <span className="bs-log-action">{log.action}</span>
                    <span className={`bs-log-status bs-log-status-${log.status}`}>
                      {log.status === 'success' ? '✓ success' : '✗ failed'}
                    </span>
                  </div>
                  <div className="bs-log-message">{log.message}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 底部：截图列表 */}
        <section className="plugin-section bs-shots-section">
          <h2 className="plugin-section-title">截图列表 ({screenshots.length})</h2>
          {screenshots.length === 0 ? (
            <div className="plugin-empty">
              <div className="plugin-empty-icon">📷</div>
              <p>脚本中的 screenshot 步骤会将视口快照保存到此处</p>
            </div>
          ) : (
            <div className="bs-shots-grid">
              {screenshots.map((s, idx) => (
                <div key={s.id} className="bs-shot-item">
                  <img src={s.svg} alt={`截图 ${idx + 1}`} />
                  <div className="bs-shot-meta">
                    <span className="bs-shot-idx">#{idx + 1}</span>
                    <span className="bs-shot-time">{formatTime(s.time)}</span>
                  </div>
                  <div className="bs-shot-url" title={s.url}>{s.url}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PluginShell>
  )
}

export default BrowserStudio
