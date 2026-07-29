import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
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
    </ErrorBoundary>
  </React.StrictMode>,
)
