import { useState } from 'react'
import CodeEditor from '../CodeEditor'
import './InteractiveLesson.css'

interface InteractiveStep {
  id: number
  title: string
  type: 'explanation' | 'example' | 'practice' | 'quiz'
  content: string
  code?: string
  testCode?: string
  hint?: string
  options?: string[]
  correctAnswer?: number
}

interface InteractiveLessonProps {
  title: string
  steps: InteractiveStep[]
  onComplete?: () => void
}

function InteractiveLesson({ title: _title, steps, onComplete }: InteractiveLessonProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [practicePassed, setPracticePassed] = useState(false)
  const [skipped, setSkipped] = useState(false)

  const step = steps[currentStep]
  const progress = ((currentStep + (completedSteps.has(currentStep) ? 1 : 0)) / steps.length) * 100
  const isLastStep = currentStep === steps.length - 1

  const handleNext = () => {
    if (isLastStep) {
      markComplete()
      onComplete?.()
      return
    }
    setCurrentStep(currentStep + 1)
    setSelectedAnswer(null)
    setShowResult(false)
    setPracticePassed(false)
    setSkipped(false)
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setPracticePassed(false)
      setSkipped(false)
    }
  }

  const markComplete = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]))
  }

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const checkAnswer = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (selectedAnswer === step.correctAnswer) {
      markComplete()
    }
  }

  const handleRunResult = (passed: boolean) => {
    setPracticePassed(passed)
    if (passed) {
      markComplete()
    }
  }

  const skipStep = () => {
    setSkipped(true)
    markComplete()
  }

  return (
    <div className="interactive-lesson">
      <div className="lesson-progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="lesson-steps-indicator">
        {steps.map((s, index) => (
          <div
            key={s.id}
            className={`step-dot ${index < currentStep || completedSteps.has(index) ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            <span className="dot-number">{index + 1}</span>
            <span className="dot-title">{s.title}</span>
          </div>
        ))}
      </div>

      <div className="lesson-content">
        <div className="step-header">
          <span className="step-badge">
            第 {currentStep + 1} 步 / 共 {steps.length} 步
          </span>
          <h2 className="step-title">{step.title}</h2>
        </div>

        <div className="step-body">
          {step.type === 'explanation' && (
            <div className="explanation-content">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: formatContent(step.content) }}
              />
              <button className="btn btn-primary" onClick={() => { markComplete(); handleNext(); }}>
                {isLastStep ? '完成学习 🎉' : '我明白了，继续 →'}
              </button>
            </div>
          )}

          {step.type === 'example' && (
            <div className="example-content">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: formatContent(step.content) }}
              />
              {step.code && (
                <div className="code-example-wrapper">
                  <div className="example-label">💡 点击运行试试：</div>
                  <CodeEditor 
                    initialCode={step.code}
                    height="250px"
                  />
                </div>
              )}
              <button className="btn btn-primary" onClick={() => { markComplete(); handleNext(); }}>
                {isLastStep ? '完成学习 🎉' : '继续下一步 →'}
              </button>
            </div>
          )}

          {step.type === 'practice' && (
            <div className="practice-content">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: formatContent(step.content) }}
              />
              {step.hint && (
                <div className="hint-box">
                  <span className="hint-icon">💡 提示：</span>
                  {step.hint}
                </div>
              )}
              {step.code && (
                <div className="practice-editor">
                  <CodeEditor 
                    initialCode={step.code}
                    height="300px"
                    testCode={step.testCode}
                    onTestResult={handleRunResult}
                  />
                </div>
              )}
              <div className="practice-actions">
                <button className="btn btn-secondary" onClick={handlePrev} disabled={currentStep === 0}>
                  ← 上一步
                </button>
                {!skipped && !practicePassed && (
                  <button className="btn btn-secondary" onClick={skipStep}>
                    跳过此步
                  </button>
                )}
                <button 
                  className="btn btn-primary" 
                  onClick={() => { markComplete(); handleNext(); }}
                >
                  {practicePassed || skipped ? (isLastStep ? '完成学习 🎉' : '继续下一步 →') : '跳过练习继续 →'}
                </button>
              </div>
              {practicePassed && (
                <div className="success-message">
                  ✅ 太棒了！你成功完成了这个练习！
                </div>
              )}
            </div>
          )}

          {step.type === 'quiz' && (
            <div className="quiz-content">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: formatContent(step.content) }}
              />
              <div className="quiz-options">
                {step.options?.map((option, index) => (
                  <div
                    key={index}
                    className={`quiz-option ${selectedAnswer === index ? 'selected' : ''} ${showResult && index === step.correctAnswer ? 'correct' : ''} ${showResult && selectedAnswer === index && index !== step.correctAnswer ? 'wrong' : ''}`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </div>
                ))}
              </div>
              {!showResult ? (
                <button 
                  className="btn btn-primary" 
                  onClick={checkAnswer}
                  disabled={selectedAnswer === null}
                >
                  提交答案
                </button>
              ) : (
                <div className="quiz-result">
                  {selectedAnswer === step.correctAnswer ? (
                    <div className="result-success">
                      ✅ 回答正确！
                    </div>
                  ) : (
                    <div className="result-failure">
                      ❌ 回答错误，正确答案是 {String.fromCharCode(65 + (step.correctAnswer || 0))}
                    </div>
                  )}
                  <div className="result-actions">
                    <button className="btn btn-secondary" onClick={() => { setShowResult(false); setSelectedAnswer(null); }}>
                      重新答题
                    </button>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => { markComplete(); handleNext(); }}
                    >
                      {isLastStep ? '完成学习 🎉' : '继续下一步 →'}
                    </button>
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

function formatContent(content: string): string {
  return content
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/g, '<p>')
    .replace(/$/g, '</p>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

export default InteractiveLesson
