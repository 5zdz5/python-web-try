import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { PyodideProvider } from './context/PyodideContext'
import { ProgressProvider } from './context/ProgressContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProgressProvider>
      <PyodideProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </PyodideProvider>
    </ProgressProvider>
  </React.StrictMode>,
)
