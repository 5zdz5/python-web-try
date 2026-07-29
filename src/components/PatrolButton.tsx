/**
 * 巡游按钮 - 悬浮在右下角，控制巡游系统的开关
 */
import { useNavigate } from 'react-router-dom'
import { useMonitor } from '../context/MonitorContext'
import './PatrolButton.css'

export default function PatrolButton() {
  const { patrol, startPatrol, stopPatrol, summary } = useMonitor()
  const navigate = useNavigate()

  return (
    <div className="patrol-fab-container">
      {/* 巡游进度条 */}
      {patrol.active && (
        <div className="patrol-progress-ring">
          <svg width="56" height="56">
            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
            <circle
              cx="28" cy="28" r="24" fill="none" stroke="#fff" strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - summary.patrolProgress / 100)}`}
              transform="rotate(-90 28 28)"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <span className="patrol-progress-text">{summary.patrolProgress}%</span>
        </div>
      )}

      {/* 主按钮 */}
      <button
        className={`patrol-fab ${patrol.active ? 'active' : ''}`}
        onClick={() => {
          if (patrol.active) {
            stopPatrol()
          } else {
            startPatrol()
          }
        }}
        title={patrol.active ? '停止巡游' : '启动巡游'}
      >
        {patrol.active ? '⏹' : '🛡'}
      </button>

      {/* 健康指标 */}
      <div className="patrol-health">
        <span className={`health-dot ${summary.error > 0 ? 'danger' : summary.warning > 0 ? 'warning' : 'healthy'}`} />
        <span className="health-text">
          {summary.error > 0 ? `${summary.error}异常` : summary.warning > 0 ? `${summary.warning}警告` : '全部正常'}
        </span>
      </div>

      {/* 跳转仪表盘 */}
      <button
        className="patrol-dashboard-link"
        onClick={() => navigate('/monitor')}
        title="监测仪表盘"
      >
        📊
      </button>
    </div>
  )
}
