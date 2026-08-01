const t=`import { useState, useEffect } from 'react'
import './VisitsCounter.css'

/**
 * 真实访问量计数器
 *
 * 使用 abacus.jasoncameron.dev（CountAPI 免费替代，无需注册）
 * - hit 端点：每次访问 +1 并返回新值
 * - 纯前端 fetch，无后端依赖
 *
 * 归属层：components/（可复用组件）
 */
function VisitsCounter() {
  const [visits, setVisits] = useState<number | null>(null)
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    // abacus hit 端点：每次调用 +1，返回 { value, status }
    fetch('https://abacus.jasoncameron.dev/hit/python-web-try/visits')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.value === 'number') {
          setVisits(data.value)
          setStatus('ok')
        } else {
          setStatus('error')
        }
      })
      .catch(() => {
        // API 不可用时，用 localStorage 做本地计数 fallback
        try {
          const key = 'python-quest-local-visits'
          const prev = parseInt(localStorage.getItem(key) || '0', 10)
          const next = prev + 1
          localStorage.setItem(key, String(next))
          setVisits(next)
          setStatus('ok')
        } catch {
          setStatus('error')
        }
      })
  }, [])

  if (status === 'error') return null

  return (
    <span className="visits-counter">
      <span className="visits-icon">👁️</span>
      <span className="visits-label">总访问量</span>
      <span className="visits-number">
        {status === 'loading' ? '···' : (visits ?? 0).toLocaleString()}
      </span>
      <span className="visits-unit">次</span>
    </span>
  )
}

export default VisitsCounter
`;export{t as default};
