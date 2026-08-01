const n=`import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { loadPyodide, PyodideInterface } from 'pyodide'

interface PyodideContextType {
  pyodide: PyodideInterface | null
  isLoading: boolean
  error: string | null
  runCode: (code: string) => Promise<{ output: string; error: string | null }>
  runCodeWithTests: (code: string, testCode: string) => Promise<{ 
    output: string
    error: string | null
    passed: boolean
    testResults: TestResult[]
  }>
  retryLoad: () => void
}

interface TestResult {
  name: string
  passed: boolean
  message: string
}

const PyodideContext = createContext<PyodideContextType | undefined>(undefined)

const defaultContext: PyodideContextType = {
  pyodide: null,
  isLoading: false,
  error: null,
  runCode: async () => ({ output: '', error: 'Python 环境未初始化' }),
  runCodeWithTests: async () => ({ output: '', error: 'Python 环境未初始化', passed: false, testResults: [] }),
  retryLoad: () => {}
}

export function PyodideProvider({ children }: { children: ReactNode }) {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const initStarted = useRef(false)

  const initPyodide = useCallback(async () => {
    if (initStarted.current) return
    initStarted.current = true
    
    setIsLoading(true)
    setError(null)
    try {
      // 延迟到下一帧，确保不影响初始渲染
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const pyodideInstance = await loadPyodide({
        indexURL: (import.meta.env.BASE_URL || '/') + 'pyodide/',
        checkAPIVersion: false
      })
      
      await pyodideInstance.runPythonAsync(\`
import sys
import io
import traceback
\`)
      
      setPyodide(pyodideInstance)
    } catch (err) {
      console.warn('Pyodide load failed (non-fatal):', err)
      setError(err instanceof Error ? err.message : '加载Python运行环境失败')
      initStarted.current = false
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    // 延迟初始化，确保路由和UI先渲染完成
    const timer = setTimeout(() => {
      initPyodide().catch(() => {})
    }, 500)
    return () => clearTimeout(timer)
  }, [initPyodide])

  const retryLoad = useCallback(() => {
    initStarted.current = false
    setPyodide(null)
    setError(null)
    initPyodide().catch(() => {})
  }, [initPyodide])

  const runCode = useCallback(async (code: string) => {
    if (!pyodide) {
      return { output: '', error: 'Python 环境尚未就绪，请稍后再试' }
    }

    try {
      pyodide.runPython(\`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
\`)
      
      await pyodide.runPythonAsync(code)
      
      const output = pyodide.runPython('_output_buffer.getvalue()') as string
      
      pyodide.runPython(\`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
\`)
      
      return { output: output || '代码执行完成，无输出', error: null }
    } catch (err: any) {
      let errorMessage = ''
      
      try {
        const output = pyodide.runPython('_output_buffer.getvalue()') as string
        if (output) {
          errorMessage = output + '\\n'
        }
      } catch {}
      
      if (err.message) {
        errorMessage += err.message
      } else if (typeof err === 'string') {
        errorMessage += err
      } else {
        errorMessage += '未知错误'
      }
      
      try {
        pyodide.runPython(\`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
\`)
      } catch {}
      
      return { output: '', error: errorMessage }
    }
  }, [pyodide])

  const runCodeWithTests = useCallback(async (code: string, testCode: string) => {
    if (!pyodide) {
      return { output: '', error: 'Python 环境尚未就绪', passed: false, testResults: [] }
    }

    const testResults: TestResult[] = []
    let allPassed = true
    let combinedOutput = ''

    try {
      pyodide.runPython(\`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
\`)
      
      await pyodide.runPythonAsync(code)
      
      const userOutput = pyodide.runPython('_output_buffer.getvalue()') as string
      combinedOutput = userOutput
      
      pyodide.runPython(\`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
\`)
      
      await pyodide.runPythonAsync(testCode)
      
      const results = pyodide.runPython(\`
import json
json.dumps(_test_results)
\`) as string
      
      const parsedResults = JSON.parse(results) as TestResult[]
      testResults.push(...parsedResults)
      allPassed = parsedResults.every((r: TestResult) => r.passed)
      
      const testOutput = pyodide.runPython('_output_buffer.getvalue()') as string
      if (testOutput) {
        combinedOutput += '\\n--- 测试输出 ---\\n' + testOutput
      }
      
      pyodide.runPython(\`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
\`)
      
      return { 
        output: combinedOutput || '代码执行完成，无输出', 
        error: null,
        passed: allPassed,
        testResults 
      }
    } catch (err: any) {
      let errorMessage = ''
      
      try {
        const output = pyodide.runPython('_output_buffer.getvalue()') as string
        if (output) {
          errorMessage = output + '\\n'
        }
      } catch {}
      
      if (err.message) {
        errorMessage += err.message
      } else if (typeof err === 'string') {
        errorMessage += err
      } else {
        errorMessage += '未知错误'
      }
      
      try {
        pyodide.runPython(\`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
\`)
      } catch {}
      
      return { 
        output: combinedOutput, 
        error: errorMessage,
        passed: false,
        testResults: []
      }
    }
  }, [pyodide])

  return (
    <PyodideContext.Provider value={{ pyodide, isLoading, error, runCode, runCodeWithTests, retryLoad }}>
      {children}
    </PyodideContext.Provider>
  )
}

export function usePyodide() {
  const context = useContext(PyodideContext)
  if (context === undefined) {
    console.warn('usePyodide called outside PyodideProvider, using default')
    return defaultContext
  }
  return context
}
`;export{n as default};
