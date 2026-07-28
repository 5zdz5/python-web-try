import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { usePyodide } from '../../context/PyodideContext'
import './CodeEditor.css'

interface CodeEditorProps {
  initialCode?: string
  onRun?: (output: string, error: string | null) => void
  readOnly?: boolean
  height?: string
  showOutput?: boolean
  testCode?: string
  onTestResult?: (passed: boolean, testResults: any[]) => void
  placeholder?: string
}

function CodeEditor({ 
  initialCode = '', 
  onRun,
  readOnly = false,
  height = '300px',
  showOutput = true,
  testCode,
  onTestResult,
  placeholder = '# 在这里编写你的 Python 代码'
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<any[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { isLoading, runCode, runCodeWithTests } = usePyodide()

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  const handleRun = async () => {
    if (isLoading || isRunning) return
    
    setIsRunning(true)
    setOutput('')
    setError(null)
    setTestResults([])

    try {
      if (testCode) {
        const result = await runCodeWithTests(code, testCode)
        setOutput(result.output)
        setError(result.error)
        setTestResults(result.testResults)
        onTestResult?.(result.passed, result.testResults)
        onRun?.(result.output, result.error)
      } else {
        const result = await runCode(code)
        setOutput(result.output)
        setError(result.error)
        onRun?.(result.output, result.error)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '执行出错')
    } finally {
      setIsRunning(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const target = e.target as HTMLTextAreaElement
      const start = target.selectionStart
      const end = target.selectionEnd
      const newCode = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newCode)
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4
      }, 0)
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRun()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput('')
    setError(null)
    setTestResults([])
  }

  const handleLineNumbers = () => {
    const lines = code.split('\n').length
    return Array(lines).fill(0).map((_, i) => (
      <div key={i} className="line-number">{i + 1}</div>
    ))
  }

  return (
    <div className="code-editor-container">
      <div className="editor-header">
        <div className="editor-tabs">
          <span className="tab active">main.py</span>
        </div>
        <div className="editor-actions">
          <button className="action-btn" onClick={handleCopy} title="复制代码">
            📋
          </button>
          <button className="action-btn" onClick={handleReset} title="重置代码">
            🔄
          </button>
          <button 
            className={`run-btn ${isRunning ? 'running' : ''}`} 
            onClick={handleRun}
            disabled={isLoading || isRunning || readOnly}
          >
            {isLoading ? (
              <>⏳ 加载中...</>
            ) : isRunning ? (
              <>⏳ 运行中...</>
            ) : (
              <>▶ 运行代码</>
            )}
          </button>
        </div>
      </div>

      <div className="editor-body" style={{ height }}>
        <div className="line-numbers">
          {handleLineNumbers()}
        </div>
        <textarea
          ref={textareaRef}
          className="code-textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          readOnly={readOnly}
          placeholder={placeholder}
          spellCheck={false}
        />
      </div>

      {showOutput && (
        <div className="output-section">
          <div className="output-header">
            <span className="output-title">📤 输出结果</span>
            {testResults.length > 0 && (
              <span className={`test-summary ${testResults.every(t => t.passed) ? 'all-passed' : 'has-failed'}`}>
                {testResults.filter(t => t.passed).length}/{testResults.length} 测试通过
              </span>
            )}
          </div>
          <div className={`output-content ${error ? 'has-error' : ''}`}>
            {error ? (
              <pre className="error-text">{error}</pre>
            ) : output ? (
              <pre>{output}</pre>
            ) : (
              <span className="output-placeholder">点击"运行代码"查看输出结果</span>
            )}
          </div>

          {testResults.length > 0 && (
            <div className="test-results">
              {testResults.map((result, index) => (
                <div key={index} className={`test-item ${result.passed ? 'passed' : 'failed'}`}>
                  <span className="test-icon">{result.passed ? '✓' : '✗'}</span>
                  <span className="test-name">{result.name}</span>
                  {!result.passed && <span className="test-message">{result.message}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CodeEditor
