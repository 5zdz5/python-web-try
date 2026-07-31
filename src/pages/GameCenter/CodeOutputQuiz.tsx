import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CodeOutputQuiz.css'
import { useMonitor } from '../../context/MonitorContext'
import { useTheme } from '../../context/ThemeContext'

interface QuizQuestion {
  id: number
  title: string
  code: string
  options: string[]
  answerIdx: number   // 正确选项下标
  explain: string
  category: 'Python' | 'TypeScript' | 'React'
}

// 轻量题库：8 题（法则3：数据驱动渲染，不硬编码 8 份 JSX）
const QUESTION_BANK: QuizQuestion[] = [
  {
    id: 1, category: 'Python', title: '列表切片',
    code: `nums = [1, 2, 3, 4, 5]\nprint(nums[1:4])`,
    options: ['[1, 2, 3]', '[2, 3, 4]', '[2, 3, 4, 5]', '[1, 2, 3, 4]'],
    answerIdx: 1,
    explain: 'Python 切片是左闭右开区间，索引从 0 开始。nums[1:4] 取索引 1、2、3 的元素，得到 [2, 3, 4]。',
  },
  {
    id: 2, category: 'Python', title: 'for 循环累加',
    code: `s = 0\nfor i in range(5):\n    s += i\nprint(s)`,
    options: ['10', '15', '6', '5'],
    answerIdx: 0,
    explain: 'range(5) = [0, 1, 2, 3, 4]。累加：0+1+2+3+4 = 10。',
  },
  {
    id: 3, category: 'Python', title: '字典取值',
    code: `d = {"a": 1, "b": 2}\nprint(d.get("c", 3))`,
    options: ['KeyError', 'None', '3', '2'],
    answerIdx: 2,
    explain: 'dict.get(key, default) 当 key 不存在时返回 default，不抛 KeyError。这里 "c" 不存在，返回 3。',
  },
  {
    id: 4, category: 'TypeScript', title: '类型联合 & 可选链',
    code: `type User = { name: string; addr?: { city: string } }\nconst u: User = { name: "L" }\nconsole.log(u.addr?.city ?? "Unknown")`,
    options: ['undefined', 'null', '"Unknown"', 'TypeError'],
    answerIdx: 2,
    explain: 'addr 是可选属性，u 没有 addr，addr?. 返回 undefined；undefined ?? "Unknown" 走右侧（空值合并只在 null/undefined 时生效）。输出 "Unknown"。',
  },
  {
    id: 5, category: 'TypeScript', title: '箭头函数 map',
    code: `const arr = [1, 2, 3].map(x => x * 2)\nconsole.log(arr)`,
    options: ['[1, 2, 3]', '[2, 4, 6]', '6', 'undefined'],
    answerIdx: 1,
    explain: 'map 返回新数组，每个元素乘以 2。结果 [2, 4, 6]。',
  },
  {
    id: 6, category: 'TypeScript', title: '闭包陷阱',
    code: `const fns: (() => number)[] = []\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i)\n}\nconsole.log(fns[1]())`,
    options: ['1', '2', '3', 'undefined'],
    answerIdx: 2,
    explain: 'var i 是函数作用域，循环结束后 i 已经是 3，3 个闭包都共享同一个 i。调用时返回 3。（用 let 可避免此坑）',
  },
  {
    id: 7, category: 'React', title: 'useState 异步批处理',
    code: `const [n, setN] = useState(0)\n// 点击按钮：\nsetN(n + 1)\nsetN(n + 1)\nconsole.log(n)`,
    options: ['0', '1', '2', 'NaN'],
    answerIdx: 0,
    explain: 'setState 在同一事件处理函数内会批处理。两次 setN(n + 1) 都读取的是同一个旧 n(0)，真正下一次 render 变成 1。但 console.log(n) 读取的是**当前闭包的 n(0)**，所以打印 0。',
  },
  {
    id: 8, category: 'React', title: 'useEffect 依赖数组',
    code: `useEffect(() => {\n  console.log("run")\n}, [])`,
    options: ['每次 render 都 run', '只在组件挂载时 run 一次', '只在卸载时 run', '从不 run'],
    answerIdx: 1,
    explain: '依赖数组为 []（空数组）时，effect 只在组件挂载后执行 1 次，不会因重渲染再执行。',
  },
]

/**
 * 游戏：代码输出猜谜
 *
 * 归属层：pages/（路由级页面，符合法则1分层归属决策）
 * 监测：法则4主动注册 group + reportHealth
 * 主题：CSS 变量 + 像素风升起动画（法则5）
 */
function CodeOutputQuiz() {
  const { registerGroup, reportHealth } = useMonitor()
  const { themeId } = useTheme()
  const isPixel = themeId === 'pixel-spectrum' || themeId === 'pixel-crow'

  // 按 category 分组显示题目（默认全部）
  const [filter, setFilter] = useState<string>('All')
  const [cursor, setCursor] = useState(0)       // 当前做第几题
  const [selected, setSelected] = useState<number | null>(null)
  const [showExplain, setShowExplain] = useState(false)
  const [score, setScore] = useState({ right: 0, wrong: 0 })

  const categories = useMemo(() => {
    const s = new Set<string>(['All'])
    QUESTION_BANK.forEach(q => s.add(q.category))
    return Array.from(s)
  }, [])

  const filtered = useMemo(() => (
    filter === 'All' ? QUESTION_BANK : QUESTION_BANK.filter(q => q.category === filter)
  ), [filter])

  const current = filtered[cursor % Math.max(1, filtered.length)]

  useEffect(() => {
    registerGroup('Game-CodeOutputQuiz', '游戏-代码输出猜谜', 'src/pages/GameCenter/CodeOutputQuiz.tsx')
    reportHealth('Game-CodeOutputQuiz', 'healthy', `题库 ${QUESTION_BANK.length} 题 / ${categories.length - 1} 分类`)
  }, [registerGroup, reportHealth, categories.length])

  // 切换分类时重置 cursor
  useEffect(() => {
    setCursor(0)
    setSelected(null)
    setShowExplain(false)
  }, [filter])

  const submit = () => {
    if (selected === null) return
    setShowExplain(true)
    if (selected === current.answerIdx) {
      setScore(s => ({ ...s, right: s.right + 1 }))
      reportHealth('Game-CodeOutputQuiz', 'healthy', `答对 #${current.id}（${current.category}）`)
    } else {
      setScore(s => ({ ...s, wrong: s.wrong + 1 }))
      reportHealth('Game-CodeOutputQuiz', 'warning', `答错 #${current.id}（${current.category}）选 idx=${selected} 正确=${current.answerIdx}`)
    }
  }

  const nextQ = () => {
    setCursor(c => c + 1)
    setSelected(null)
    setShowExplain(false)
  }

  const totalDone = score.right + score.wrong
  const accuracy = totalDone === 0 ? 0 : Math.round(100 * score.right / totalDone)

  return (
    <div className="coq-page container">
      {/* 头部 */}
      <header className={`coq-header ${isPixel ? 'pixel-rise-container' : ''}`}>
        <Link to="/games" className="coq-back-btn">← 返回游戏中心</Link>
        <div>
          <h1 className={`coq-title ${isPixel ? 'pixel-rise-tall' : 'animate-fade-in'}`}>🧩 代码输出猜谜</h1>
          <p className="coq-subtitle">读代码 → 4 选 1 猜输出 · 实时统计正确率</p>
        </div>
        <div className="coq-score pixel-panel pixel-panel-accent">
          <div className="coq-score-row"><span className="coq-score-label">正确</span><span className="coq-score-val coq-right">{score.right}</span></div>
          <div className="coq-score-row"><span className="coq-score-label">错误</span><span className="coq-score-val coq-wrong">{score.wrong}</span></div>
          <div className="coq-score-row"><span className="coq-score-label">正确率</span><span className="coq-score-val">{accuracy}%</span></div>
        </div>
      </header>

      {/* 分类筛选（法则3：数据数组渲染，不硬编码 N 个按钮） */}
      <div className="coq-cats">
        {categories.map(c => (
          <button
            key={c}
            type="button"
            className={`coq-cat ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >{c}</button>
        ))}
        <div className="coq-progress coq-monospace">
          进度：{(cursor % filtered.length) + 1} / {filtered.length}
        </div>
      </div>

      {/* 题目卡 */}
      {current && (
        <article className={`coq-card pixel-card-3d ${isPixel ? 'pixel-rise' : ''}`}>
          <div className="coq-q-head">
            <span className="coq-q-cat coq-monospace">#{current.id} · {current.category}</span>
            <h2 className="coq-q-title">{current.title}</h2>
          </div>
          <pre className="coq-code pixel-panel">
            <code>{current.code}</code>
          </pre>

          <div className="coq-options">
            {current.options.map((opt, idx) => {
              const isCorrect = idx === current.answerIdx
              const isSel = idx === selected
              const showResult = showExplain
              return (
                <button
                  key={idx}
                  type="button"
                  className={
                    `coq-option ` +
                    `${isSel ? 'coq-option-sel ' : ''}` +
                    `${showResult && isCorrect ? 'coq-option-correct ' : ''}` +
                    `${showResult && isSel && !isCorrect ? 'coq-option-wrong ' : ''}`
                  }
                  disabled={showExplain}
                  onClick={() => setSelected(idx)}
                >
                  <span className="coq-opt-key coq-monospace">{String.fromCharCode(65 + idx)}.</span>
                  <code className="coq-opt-text">{opt}</code>
                </button>
              )
            })}
          </div>

          {showExplain && (
            <div className="coq-explain pixel-panel">
              <div className="coq-explain-head coq-monospace">
                {selected === current.answerIdx ? '✅ 答对了！' : '❌ 答错了'}
                <span>正确答案：{String.fromCharCode(65 + current.answerIdx)}</span>
              </div>
              <p className="coq-explain-text">{current.explain}</p>
            </div>
          )}

          <div className="coq-actions">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => { setSelected(null); setShowExplain(false) }}
              disabled={!showExplain}
            >重置选择</button>
            {!showExplain ? (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={submit}
                disabled={selected === null}
              >提交答案</button>
            ) : (
              <button type="button" className="btn btn-primary btn-sm" onClick={nextQ}>下一题 →</button>
            )}
          </div>
        </article>
      )}
    </div>
  )
}

export default CodeOutputQuiz
