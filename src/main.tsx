import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { PyodideProvider } from './context/PyodideContext'
import { ProgressProvider } from './context/ProgressContext'
import { MonitorProvider } from './context/MonitorContext'
import { AIAgentProvider } from './context/AIAgentContext'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      {/* ThemeProvider 在最外层，确保一开始就注入 CSS 变量，避免闪烁 */}
      <ThemeProvider>
        <MonitorProvider>
          <AIAgentProvider>
            <AuthProvider>
              <ProgressProvider>
                <PyodideProvider>
                  <HashRouter>
                    <App />
                  </HashRouter>
                </PyodideProvider>
              </ProgressProvider>
            </AuthProvider>
          </AIAgentProvider>
        </MonitorProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
