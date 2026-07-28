import { useState } from 'react'
import CodeEditor from '../CodeEditor'
import './ChallengeArena.css'

interface ChallengeArenaProps {
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  initialCode: string
  testCode: string
  testCases: TestCase[]
  onComplete?: () => void
  xpReward?: number
}

interface TestCase {
  name: string
  input: string
  expected: string
}

function ChallengeArena({ 
  title, 
  description, 
  difficulty, 
  initialCode, 
  testCode,
  testCases,
  onComplete,
  xpReward = 10
}: ChallengeArenaProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'testcases'>('description')

  const handleTestResult = (passed: boolean) => {
    if (passed && !isCompleted) {
      setIsCompleted(true)
      onComplete?.()
    }
  }

  const difficultyConfig = {
    easy: { label: '简单', color: 'green', icon: '🟢' },
    medium: { label: '中等', color: 'yellow', icon: '🟡' },
    hard: { label: '困难', color: 'red', icon: '🔴' }
  }

  const diff = difficultyConfig[difficulty]

  return (
    <div className="challenge-arena">
      <div className="challenge-header">
        <div className="challenge-info">
          <div className="challenge-title-row">
            <span className={`difficulty-badge difficulty-${difficulty}`}>
              {diff.icon} {diff.label}
            </span>
            <span className="xp-reward">
              ⭐ +{xpReward} XP
            </span>
          </div>
          <h2 className="challenge-title">{title}</h2>
        </div>
        {isCompleted && (
          <div className="completion-badge">
            <span className="badge-icon">✅</span>
            <span>已完成</span>
          </div>
        )}
      </div>

      <div className="challenge-layout">
        <div className="challenge-sidebar">
          <div className="sidebar-tabs">
            <button 
              className={`sidebar-tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              📝 题目描述
            </button>
            <button 
              className={`sidebar-tab ${activeTab === 'testcases' ? 'active' : ''}`}
              onClick={() => setActiveTab('testcases')}
            >
              🧪 测试用例 ({testCases.length})
            </button>
          </div>

          <div className="sidebar-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p className="challenge-desc">{description}</p>
                
                <div className="hint-section">
                  <button 
                    className="hint-toggle"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? '隐藏提示' : '💡 查看提示'}
                  </button>
                  {showHint && (
                    <div className="hint-content">
                      <p>提示：使用 Python 的循环结构和条件判断来解决问题。</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'testcases' && (
              <div className="testcases-content">
                {testCases.map((tc, index) => (
                  <div key={index} className="testcase-item">
                    <div className="testcase-header">
                      <span className="testcase-name">测试用例 {index + 1}: {tc.name}</span>
                    </div>
                    <div className="testcase-body">
                      <div className="testcase-row">
                        <span className="testcase-label">输入：</span>
                        <code>{tc.input}</code>
                      </div>
                      <div className="testcase-row">
                        <span className="testcase-label">预期：</span>
                        <code>{tc.expected}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="challenge-editor">
          <CodeEditor 
            initialCode={initialCode}
            height="400px"
            testCode={testCode}
            onTestResult={handleTestResult}
          />
        </div>
      </div>

      {isCompleted && (
        <div className="completion-modal-overlay">
          <div className="completion-modal">
            <div className="modal-confetti">🎉</div>
            <h3>恭喜完成挑战！</h3>
            <p className="modal-reward">
              获得 <span className="reward-xp">+{xpReward} XP</span> 经验值
            </p>
            <p className="modal-message">
              你成功通过了所有测试用例，继续加油！
            </p>
            <button className="btn btn-primary" onClick={() => setIsCompleted(false)}>
              继续编码
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeArena
