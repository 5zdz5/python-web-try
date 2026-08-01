const s=`import { useState, useMemo } from 'react'
import { getAllVersionSnapshots, getVersionProgress, VersionSnapshot } from '../../config/versionManager'
import { CURRENT_VERSION } from '../../config/versionManager'
import './VersionHistory.css'

interface VersionHistoryProps {
  onClose: () => void
}

function VersionHistory({ onClose }: VersionHistoryProps) {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null)

  const snapshots = useMemo<VersionSnapshot[]>(() => getAllVersionSnapshots(), [])
  const sorted = [...snapshots].reverse() // 最新在前

  const selectedData = selectedVersion ? getVersionProgress(selectedVersion) : null

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    } catch { return iso }
  }

  return (
    <div className="version-history-overlay" onClick={onClose}>
      <div className="version-history-modal" onClick={e => e.stopPropagation()}>
        <div className="vh-header">
          <h2>📦 版本历史</h2>
          <button className="vh-close" onClick={onClose}>✕</button>
        </div>

        <div className="vh-body">
          <div className="vh-version-list">
            {sorted.length === 0 && <p className="vh-empty">暂无版本记录</p>}
            {sorted.map((snap) => {
              const isCurrent = snap.version === CURRENT_VERSION
              const isSelected = selectedVersion === snap.version
              return (
                <div
                  key={snap.version}
                  className={\`vh-version-card \${isSelected ? 'selected' : ''} \${isCurrent ? 'current' : ''}\`}
                  onClick={() => setSelectedVersion(snap.version)}
                >
                  <div className="vh-card-header">
                    <span className="vh-version-tag">{snap.version}</span>
                    {isCurrent ? (
                      <span className="vh-badge vh-badge-current">当前版本</span>
                    ) : (
                      <span className="vh-badge vh-badge-frozen">🔒 已冻结</span>
                    )}
                  </div>
                  <div className="vh-card-stats">
                    <div className="vh-stat">
                      <span className="vh-stat-value">{snap.totalXP}</span>
                      <span className="vh-stat-label">总XP</span>
                    </div>
                    <div className="vh-stat">
                      <span className="vh-stat-value">{snap.completedLevels}</span>
                      <span className="vh-stat-label">通关数</span>
                    </div>
                    <div className="vh-stat">
                      <span className="vh-stat-value">{snap.completedLessons}</span>
                      <span className="vh-stat-label">课程</span>
                    </div>
                    <div className="vh-stat">
                      <span className="vh-stat-value">{snap.completedChallenges}</span>
                      <span className="vh-stat-label">挑战</span>
                    </div>
                  </div>
                  <div className="vh-card-date">{formatDate(snap.snapshotDate)}</div>
                </div>
              )
            })}
          </div>

          {selectedData && selectedVersion && (
            <div className="vh-detail-panel">
              <div className="vh-detail-header">
                <h3>版本 {selectedVersion} 进度详情</h3>
                <span className="vh-readonly-hint">📋 只读快照</span>
              </div>

              <div className="vh-detail-stats">
                <div className="vh-detail-stat">
                  <div className="vh-detail-icon">⭐</div>
                  <div>
                    <span className="vh-detail-big">{selectedData.totalXP || 0}</span>
                    <span className="vh-detail-small">经验值</span>
                  </div>
                </div>
                <div className="vh-detail-stat">
                  <div className="vh-detail-icon">📅</div>
                  <div>
                    <span className="vh-detail-big">{selectedData.studyDays?.length || 0}</span>
                    <span className="vh-detail-small">学习天数</span>
                  </div>
                </div>
                <div className="vh-detail-stat">
                  <div className="vh-detail-icon">🏆</div>
                  <div>
                    <span className="vh-detail-big">
                      {Object.values(selectedData.levels || {}).filter((l: { completed?: boolean }) => l?.completed).length}
                    </span>
                    <span className="vh-detail-small">完成关卡</span>
                  </div>
                </div>
              </div>

              <div className="vh-detail-section">
                <h4>关卡完成情况</h4>
                <div className="vh-levels-grid">
                  {Object.entries(selectedData.levels || {}).map(([id, level]: [string, { completed?: boolean; unlocked?: boolean }]) => (
                    <div key={id} className={\`vh-level-chip \${level.completed ? 'completed' : level.unlocked ? 'unlocked' : 'locked'}\`}>
                      <span className="vh-level-num">第{id}关</span>
                      <span className="vh-level-status">
                        {level.completed ? '✓' : level.unlocked ? '进行中' : '🔒'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedData.activityLog && selectedData.activityLog.length > 0 && (
                <div className="vh-detail-section">
                  <h4>最近活动 ({selectedData.activityLog.length} 条)</h4>
                  <div className="vh-activity-list">
                    {selectedData.activityLog.slice(0, 8).map((act: { id: string; icon: string; title: string; timestamp: string }) => (
                      <div key={act.id} className="vh-activity-item">
                        <span className="vh-activity-icon">{act.icon}</span>
                        <div className="vh-activity-info">
                          <span className="vh-activity-title">{act.title}</span>
                          <span className="vh-activity-time">{formatDate(act.timestamp)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VersionHistory
`;export{s as default};
