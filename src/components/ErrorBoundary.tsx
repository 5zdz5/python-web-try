import { Component, ErrorInfo, ReactNode, useState } from 'react'
import './ErrorBoundary.css'

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * 全局 Monitor 桥接函数类型
 * 由 MonitorProvider 在挂载时注入到 window，供 class component 使用
 * （ErrorBoundary 是 class component，无法使用 useMonitor hook）
 */
declare global {
  interface Window {
    __monitorLogEvent?: (
      type: 'info' | 'warning' | 'error' | 'crash' | 'patrol' | 'snapshot',
      source: string,
      message: string,
      detail?: string
    ) => void
    __monitorRestoreSnapshot?: () => boolean
  }
}

/**
 * React Error Boundary
 * 捕获子组件树的 JavaScript 错误，防止整个应用白屏崩溃。
 * 捕获后展示一个友好的崩溃恢复界面，并通过 window.__monitorLogEvent 上报错误。
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })
    // 通过全局桥接函数上报到 MonitorContext（class component 不能用 hook）
    try {
      window.__monitorLogEvent?.(
        'crash',
        'ErrorBoundary',
        error.message || String(error),
        `${error.stack || ''}\n${errorInfo.componentStack || ''}`
      )
    } catch {
      /* 上报失败不影响崩溃界面展示 */
    }
  }

  handleReload = (): void => {
    window.location.reload()
  }

  handleGoHome = (): void => {
    // 重置错误状态，让 ErrorBoundary 重新渲染子树
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.hash = '#/'
  }

  handleRestoreSnapshot = (): void => {
    try {
      const ok = window.__monitorRestoreSnapshot?.()
      if (!ok) {
        // 恢复失败则回退到刷新
        window.location.reload()
      }
    } catch {
      window.location.reload()
    }
  }

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state
    const { children } = this.props

    if (!hasError) return children

    const canRestore = typeof window.__monitorRestoreSnapshot === 'function'
    const monitorAvailable = typeof window.__monitorLogEvent === 'function'

    return (
      <div className="eb-overlay">
        <div className="eb-card">
          <div className="eb-icon" role="img" aria-label="崩溃">💥</div>
          <h2 className="eb-title">应用崩溃了</h2>
          <p className="eb-message">
            抱歉，程序遇到了一个未预期的错误。你可以尝试刷新页面或返回首页继续使用。
          </p>

          <div className="eb-actions">
            <button className="btn btn-primary" onClick={this.handleReload}>
              🔄 刷新页面
            </button>
            <button className="btn btn-secondary" onClick={this.handleGoHome}>
              🏠 返回首页
            </button>
            {canRestore && (
              <button className="btn btn-outline" onClick={this.handleRestoreSnapshot}>
                ⏪ 从快照恢复
              </button>
            )}
          </div>

          <ErrorDetails error={error} errorInfo={errorInfo} />

          {monitorAvailable && (
            <p className="eb-monitor-hint">📡 错误已自动上报到监测系统</p>
          )}
        </div>
      </div>
    )
  }
}

/**
 * 错误详情子组件（可展开/折叠）
 * 非 Error Boundary，可使用函数组件 + useState 管理展开状态
 */
function ErrorDetails({
  error,
  errorInfo,
}: {
  error: Error | null
  errorInfo: ErrorInfo | null
}): ReactNode {
  const [expanded, setExpanded] = useState(false)

  if (!error) return null

  return (
    <div className="eb-details">
      <button
        className="eb-details-toggle"
        onClick={() => setExpanded(v => !v)}
        aria-expanded={expanded}
      >
        <span className="eb-toggle-arrow">{expanded ? '▼' : '▶'}</span>
        错误详情
      </button>
      {expanded && (
        <div className="eb-details-content">
          <div className="eb-detail-section">
            <span className="eb-detail-label">错误:</span>
            <pre className="eb-detail-pre">
              {error.name}: {error.message}
            </pre>
          </div>
          {error.stack && (
            <div className="eb-detail-section">
              <span className="eb-detail-label">调用栈:</span>
              <pre className="eb-detail-pre">{error.stack}</pre>
            </div>
          )}
          {errorInfo?.componentStack && (
            <div className="eb-detail-section">
              <span className="eb-detail-label">组件栈:</span>
              <pre className="eb-detail-pre">{errorInfo.componentStack}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
