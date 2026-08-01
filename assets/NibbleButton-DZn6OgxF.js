const e=`/**
 * 蚕食按钮组件
 *
 * 归属层：components/（可复用 UI 片段，符合法则1分层归属决策）
 * 功能：输入网址 → 点击蚕食 → 调用 nibbleWebsite 爬取并关卡化 → 回调返回结果
 * 监测：useEffect 中 registerGroup + reportHealth（法则4监测主动注册）
 * 主题：CSS 全用变量，pixel-spectrum/pixel-crow 双适配（法则5主题同步双适配）
 * 蚕食动画：按钮按下时出现"啃食"进度条 + 像素块掉落效果
 */
import { useState, useEffect, useCallback } from 'react'
import './NibbleButton.css'
import { nibbleWebsite, type NibbleResult, type NibbleStatus } from '../../data/nibbleLevels'
import { useMonitor } from '../../context/MonitorContext'
import { useTheme } from '../../context/ThemeContext'

interface NibbleButtonProps {
  /** 蚕食完成回调 */
  onNibbleDone?: (result: NibbleResult) => void
  /** 蚕食失败回调 */
  onNibbleError?: (error: string) => void
  /** 初始网址（可选） */
  initialUrl?: string
}

function NibbleButton({ onNibbleDone, onNibbleError, initialUrl = '' }: NibbleButtonProps) {
  const { registerGroup, reportHealth } = useMonitor()
  const { themeId } = useTheme()
  const [url, setUrl] = useState(initialUrl)
  const [status, setStatus] = useState<NibbleStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [progress, setProgress] = useState(0)

  // 法则4：监测主动注册
  useEffect(() => {
    registerGroup('NibbleButton', '蚕食爬取按钮', 'src/components/NibbleButton/NibbleButton.tsx')
    reportHealth('NibbleButton', 'healthy', '组件挂载成功')
  }, [registerGroup, reportHealth])

  // 进度条动画（蚕食过程中的视觉反馈）
  useEffect(() => {
    if (status === 'fetching' || status === 'parsing') {
      setProgress(0)
      const timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 90) return p
          return p + Math.random() * 8
        })
      }, 300)
      return () => clearInterval(timer)
    }
    if (status === 'done') {
      setProgress(100)
      const timer = setTimeout(() => setProgress(0), 1500)
      return () => clearTimeout(timer)
    }
    setProgress(0)
  }, [status])

  const handleNibble = useCallback(async () => {
    if (!url.trim()) {
      setErrorMsg('请输入要蚕食的网址')
      setStatus('error')
      reportHealth('NibbleButton', 'warning', 'URL 为空')
      return
    }

    setStatus('fetching')
    setErrorMsg('')
    reportHealth('NibbleButton', 'healthy', \`开始蚕食：\${url}\`)

    try {
      // 阶段 1：爬取
      const result = await nibbleWebsite(url.trim())
      setStatus('parsing')
      // nibbleWebsite 内部已解析完成，这里 parsing 状态用于动画过渡
      await new Promise((r) => setTimeout(r, 400))

      setStatus('done')
      reportHealth('NibbleButton', 'healthy', \`蚕食成功：\${result.levels.length} 关卡 / \${result.totalSteps} 步骤\`)
      onNibbleDone?.(result)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      setErrorMsg(msg)
      setStatus('error')
      reportHealth('NibbleButton', 'error', \`蚕食失败：\${msg}\`)
      onNibbleError?.(msg)
    }
  }, [url, onNibbleDone, onNibbleError, reportHealth])

  const isLoading = status === 'fetching' || status === 'parsing'
  const statusText = status === 'fetching' ? '🕷️ 蚕食中…' : status === 'parsing' ? '🔨 关卡化…' : status === 'done' ? '✅ 蚕食完成' : status === 'error' ? '❌ 失败' : '🐛 蚕食网页'

  return (
    <div className={\`nibble-button-wrap \${themeId === 'pixel-spectrum' || themeId === 'pixel-crow' ? 'nibble-pixel' : ''}\`}>
      {/* 触发按钮 */}
      <button
        type="button"
        className="nibble-trigger pixel-btn-3d"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        disabled={isLoading}
      >
        <span className="btn-face nibble-trigger-face">
          <span className="nibble-icon">🐛</span>
          <span className="nibble-label">蚕食网页</span>
          <span className="nibble-caret">{expanded ? '▲' : '▼'}</span>
        </span>
      </button>

      {/* 展开面板：输入 URL + 进度 + 结果 */}
      {expanded && (
        <div className="nibble-panel pixel-card-3d">
          <div className="nibble-panel-inner">
            <label className="nibble-label-text">输入要蚕食的网址（基于 Scrapling 自适应爬取）</label>
            <div className="nibble-input-row">
              <input
                type="url"
                className="nibble-input"
                placeholder="https://www.runoob.com/python3/python3-tutorial.html"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isLoading) handleNibble()
                }}
              />
              <button
                type="button"
                className="nibble-go pixel-btn pixel-btn-accent"
                onClick={handleNibble}
                disabled={isLoading || !url.trim()}
              >
                {statusText}
              </button>
            </div>

            {/* 蚕食进度条 */}
            {isLoading && (
              <div className="nibble-progress-track">
                <div className="nibble-progress-fill" style={{ width: \`\${progress}%\` }} />
                <div className="nibble-progress-bites">
                  {/* 像素块掉落动画装饰 */}
                  <span className="bite bite-1" />
                  <span className="bite bite-2" />
                  <span className="bite bite-3" />
                  <span className="bite bite-4" />
                  <span className="bite bite-5" />
                </div>
              </div>
            )}

            {/* 错误提示 */}
            {status === 'error' && errorMsg && (
              <div className="nibble-error">
                <span className="nibble-error-icon">⚠️</span>
                <span className="nibble-error-text">{errorMsg}</span>
                <button type="button" className="nibble-retry" onClick={handleNibble}>
                  重试
                </button>
              </div>
            )}

            {/* 成功提示 */}
            {status === 'done' && (
              <div className="nibble-success">
                <span>✅ 蚕食完成，已生成关卡，请查看下方展示</span>
              </div>
            )}

            {/* 示例网址快捷入口（法则3：从数据数组渲染，不硬编码 N 份） */}
            <div className="nibble-samples">
              <span className="nibble-samples-label">试试这些：</span>
              {SAMPLE_URLS.map((s) => (
                <button
                  key={s.url}
                  type="button"
                  className="nibble-sample-chip"
                  onClick={() => setUrl(s.url)}
                  disabled={isLoading}
                  title={s.desc}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 示例网址（数据驱动，法则3：不硬编码 JSX 重复结构）
const SAMPLE_URLS = [
  { name: 'Python 教程', url: 'https://www.runoob.com/python3/python3-tutorial.html', desc: '菜鸟教程 Python3' },
  { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/zh/tutorial/', desc: 'FastAPI 官方教程' },
  { name: 'Pandas', url: 'https://pandas.pydata.org/docs/user_guide/index.html', desc: 'Pandas 用户指南' },
]

export default NibbleButton
`;export{e as default};
