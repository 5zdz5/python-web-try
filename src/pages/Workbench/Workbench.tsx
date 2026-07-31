import { useState, useEffect, useMemo } from 'react'
import PluginShell from '../../components/PluginShell'
import './Workbench.css'

// ===== 类型 =====
interface Todo {
  id: string
  text: string
  done: boolean
  createdAt: number
}

interface Habit {
  id: string
  name: string
  icon: string
  history: string[] // ['YYYY-MM-DD', ...]
}

interface LedgerEntry {
  id: string
  amount: number
  type: 'income' | 'expense'
  category: string
  note: string
  date: string
}

interface Goal {
  id: string
  title: string
  progress: number
  target: string
  deadline: string
}

interface Idea {
  id: string
  content: string
  createdAt: number
}

type Tab = 'todo' | 'habit' | 'ledger' | 'goal' | 'idea'

// ===== localStorage 工具 =====
function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function save<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

const todayStr = () => new Date().toISOString().slice(0, 10)

// ===== 默认数据 =====
const DEFAULT_HABITS: Habit[] = [
  { id: 'h1', name: '喝水 8 杯', icon: '💧', history: [] },
  { id: 'h2', name: '编码 1 小时', icon: '⌨️', history: [] },
  { id: 'h3', name: '阅读 30 分钟', icon: '📖', history: [] },
]

const DEFAULT_GOALS: Goal[] = [
  { id: 'g1', title: '完成 Python Quest 全部关卡', progress: 35, target: '20 关', deadline: '2026-12-31' },
  { id: 'g2', title: 'Agent 进化档案满级', progress: 60, target: 'Lv.100', deadline: '2026-10-01' },
]

function Workbench() {
  const [tab, setTab] = useState<Tab>('todo')

  // 待办
  const [todos, setTodos] = useState<Todo[]>(() => load('wb_todos', []))
  const [todoInput, setTodoInput] = useState('')

  // 习惯
  const [habits, setHabits] = useState<Habit[]>(() => load('wb_habits', DEFAULT_HABITS))
  const [habitInput, setHabitInput] = useState('')
  const [habitIcon, setHabitIcon] = useState('✨')

  // 记账
  const [ledger, setLedger] = useState<LedgerEntry[]>(() => load('wb_ledger', []))
  const [ledgerAmount, setLedgerAmount] = useState('')
  const [ledgerType, setLedgerType] = useState<'income' | 'expense'>('expense')
  const [ledgerCategory, setLedgerCategory] = useState('餐饮')
  const [ledgerNote, setLedgerNote] = useState('')

  // 目标
  const [goals, setGoals] = useState<Goal[]>(() => load('wb_goals', DEFAULT_GOALS))
  const [goalInput, setGoalInput] = useState('')
  const [goalTarget, setGoalTarget] = useState('')
  const [goalDeadline, setGoalDeadline] = useState('')

  // 灵感
  const [ideas, setIdeas] = useState<Idea[]>(() => load('wb_ideas', []))
  const [ideaInput, setIdeaInput] = useState('')

  useEffect(() => save('wb_todos', todos), [todos])
  useEffect(() => save('wb_habits', habits), [habits])
  useEffect(() => save('wb_ledger', ledger), [ledger])
  useEffect(() => save('wb_goals', goals), [goals])
  useEffect(() => save('wb_ideas', ideas), [ideas])

  // 统计
  const stats = useMemo(() => {
    const today = todayStr()
    const todayDone = habits.filter(h => h.history.includes(today)).length
    const todoDone = todos.filter(t => t.done).length
    const balance = ledger.reduce((s, e) => s + (e.type === 'income' ? e.amount : -e.amount), 0)
    const monthExpense = ledger
      .filter(e => e.type === 'expense' && e.date.slice(0, 7) === today.slice(0, 7))
      .reduce((s, e) => s + e.amount, 0)
    return { todayDone, totalHabits: habits.length, todoDone, todoTotal: todos.length, balance, monthExpense }
  }, [habits, todos, ledger])

  // ===== 待办操作 =====
  const addTodo = () => {
    if (!todoInput.trim()) return
    setTodos(prev => [{ id: `${Date.now()}`, text: todoInput.trim(), done: false, createdAt: Date.now() }, ...prev])
    setTodoInput('')
  }
  const toggleTodo = (id: string) => setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  const removeTodo = (id: string) => setTodos(prev => prev.filter(t => t.id !== id))

  // ===== 习惯操作 =====
  const addHabit = () => {
    if (!habitInput.trim()) return
    setHabits(prev => [...prev, { id: `${Date.now()}`, name: habitInput.trim(), icon: habitIcon, history: [] }])
    setHabitInput('')
    setHabitIcon('✨')
  }
  const toggleHabitToday = (id: string) => {
    const today = todayStr()
    setHabits(prev => prev.map(h => {
      if (h.id !== id) return h
      const has = h.history.includes(today)
      return { ...h, history: has ? h.history.filter(d => d !== today) : [...h.history, today] }
    }))
  }
  const removeHabit = (id: string) => setHabits(prev => prev.filter(h => h.id !== id))

  // ===== 记账操作 =====
  const addLedger = () => {
    const amount = parseFloat(ledgerAmount)
    if (isNaN(amount) || amount <= 0) return
    setLedger(prev => [{
      id: `${Date.now()}`,
      amount,
      type: ledgerType,
      category: ledgerCategory,
      note: ledgerNote.trim(),
      date: todayStr(),
    }, ...prev])
    setLedgerAmount('')
    setLedgerNote('')
  }
  const removeLedger = (id: string) => setLedger(prev => prev.filter(e => e.id !== id))

  // ===== 目标操作 =====
  const addGoal = () => {
    if (!goalInput.trim()) return
    setGoals(prev => [...prev, {
      id: `${Date.now()}`,
      title: goalInput.trim(),
      progress: 0,
      target: goalTarget.trim() || '—',
      deadline: goalDeadline || '—',
    }])
    setGoalInput('')
    setGoalTarget('')
    setGoalDeadline('')
  }
  const updateGoalProgress = (id: string, delta: number) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, progress: Math.max(0, Math.min(100, g.progress + delta)) } : g))
  }
  const removeGoal = (id: string) => setGoals(prev => prev.filter(g => g.id !== id))

  // ===== 灵感操作 =====
  const addIdea = () => {
    if (!ideaInput.trim()) return
    setIdeas(prev => [{ id: `${Date.now()}`, content: ideaInput.trim(), createdAt: Date.now() }, ...prev])
    setIdeaInput('')
  }
  const removeIdea = (id: string) => setIdeas(prev => prev.filter(i => i.id !== id))

  const ICONS = ['✨', '💧', '⌨️', '📖', '🏃', '🧘', '🎯', '💪', '🌅', '🥗', '😴', '📝']

  return (
    <PluginShell
      icon="🗂️"
      title="个人工作台"
      subtitle="personal-workbench · 待办/打卡/记账/目标/灵感 · localStorage 持久化"
      vendor="personal-workbench"
      version="0.1.0"
    >
      {/* 统计概览 */}
      <section className="plugin-section wb-overview">
        <div className="wb-stat">
          <span className="wb-stat-icon">✅</span>
          <div>
            <div className="wb-stat-value">{stats.todoDone}/{stats.todoTotal}</div>
            <div className="wb-stat-label">今日待办</div>
          </div>
        </div>
        <div className="wb-stat">
          <span className="wb-stat-icon">🔥</span>
          <div>
            <div className="wb-stat-value">{stats.todayDone}/{stats.totalHabits}</div>
            <div className="wb-stat-label">习惯打卡</div>
          </div>
        </div>
        <div className="wb-stat">
          <span className="wb-stat-icon">💰</span>
          <div>
            <div className="wb-stat-value">¥{stats.balance.toFixed(0)}</div>
            <div className="wb-stat-label">结余</div>
          </div>
        </div>
        <div className="wb-stat">
          <span className="wb-stat-icon">📉</span>
          <div>
            <div className="wb-stat-value">¥{stats.monthExpense.toFixed(0)}</div>
            <div className="wb-stat-label">本月支出</div>
          </div>
        </div>
      </section>

      <div className="plugin-tabs">
        <button className={`plugin-tab ${tab === 'todo' ? 'active' : ''}`} onClick={() => setTab('todo')} type="button">📋 待办</button>
        <button className={`plugin-tab ${tab === 'habit' ? 'active' : ''}`} onClick={() => setTab('habit')} type="button">🔥 打卡</button>
        <button className={`plugin-tab ${tab === 'ledger' ? 'active' : ''}`} onClick={() => setTab('ledger')} type="button">💰 记账</button>
        <button className={`plugin-tab ${tab === 'goal' ? 'active' : ''}`} onClick={() => setTab('goal')} type="button">🎯 目标</button>
        <button className={`plugin-tab ${tab === 'idea' ? 'active' : ''}`} onClick={() => setTab('idea')} type="button">💡 灵感</button>
      </div>

      {/* 待办 */}
      {tab === 'todo' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">今日待办</h2>
          <div className="wb-input-row">
            <input
              className="plugin-input"
              placeholder="添加待办事项..."
              value={todoInput}
              onChange={e => setTodoInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
            />
            <button className="plugin-btn plugin-btn-primary" onClick={addTodo} type="button">添加</button>
          </div>
          {todos.length === 0 ? (
            <div className="plugin-empty"><div className="plugin-empty-icon">📝</div><p>暂无待办，添加第一项吧</p></div>
          ) : (
            <ul className="wb-list">
              {todos.map(t => (
                <li key={t.id} className={`wb-todo-item ${t.done ? 'done' : ''}`}>
                  <button className="wb-check" onClick={() => toggleTodo(t.id)} type="button">
                    {t.done && '✓'}
                  </button>
                  <span className="wb-todo-text">{t.text}</span>
                  <button className="wb-remove" onClick={() => removeTodo(t.id)} type="button">×</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* 习惯打卡 */}
      {tab === 'habit' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">习惯打卡</h2>
          <div className="wb-input-row">
            <select className="plugin-select wb-icon-select" value={habitIcon} onChange={e => setHabitIcon(e.target.value)}>
              {ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
            </select>
            <input
              className="plugin-input"
              placeholder="习惯名称..."
              value={habitInput}
              onChange={e => setHabitInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addHabit()}
            />
            <button className="plugin-btn plugin-btn-primary" onClick={addHabit} type="button">添加</button>
          </div>
          {habits.length === 0 ? (
            <div className="plugin-empty"><div className="plugin-empty-icon">🔥</div><p>暂无习惯</p></div>
          ) : (
            <ul className="wb-list">
              {habits.map(h => {
                const today = todayStr()
                const doneToday = h.history.includes(today)
                const streak = (() => {
                  let s = 0
                  const d = new Date()
                  while (true) {
                    const ds = d.toISOString().slice(0, 10)
                    if (h.history.includes(ds)) { s++; d.setDate(d.getDate() - 1) }
                    else break
                  }
                  return s
                })()
                return (
                  <li key={h.id} className="wb-habit-item">
                    <button
                      className={`wb-habit-check ${doneToday ? 'done' : ''}`}
                      onClick={() => toggleHabitToday(h.id)}
                      type="button"
                    >
                      <span className="wb-habit-icon">{h.icon}</span>
                      <span className="wb-habit-name">{h.name}</span>
                      {streak > 0 && <span className="wb-streak">🔥 {streak}</span>}
                    </button>
                    <button className="wb-remove" onClick={() => removeHabit(h.id)} type="button">×</button>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      )}

      {/* 记账 */}
      {tab === 'ledger' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">记账</h2>
          <div className="wb-ledger-form">
            <div className="wb-ledger-type">
              <button className={`plugin-tab ${ledgerType === 'expense' ? 'active' : ''}`} onClick={() => setLedgerType('expense')} type="button">支出</button>
              <button className={`plugin-tab ${ledgerType === 'income' ? 'active' : ''}`} onClick={() => setLedgerType('income')} type="button">收入</button>
            </div>
            <div className="plugin-grid-2">
              <input
                className="plugin-input"
                type="number"
                placeholder="金额"
                value={ledgerAmount}
                onChange={e => setLedgerAmount(e.target.value)}
              />
              <select className="plugin-select" value={ledgerCategory} onChange={e => setLedgerCategory(e.target.value)}>
                {ledgerType === 'expense'
                  ? ['餐饮', '交通', '购物', '娱乐', '住房', '医疗', '教育', '其他'].map(c => <option key={c}>{c}</option>)
                  : ['工资', '奖金', '投资', '副业', '其他'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <input
              className="plugin-input"
              placeholder="备注（可选）"
              value={ledgerNote}
              onChange={e => setLedgerNote(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addLedger()}
            />
            <button className="plugin-btn plugin-btn-primary" onClick={addLedger} type="button">记录</button>
          </div>
          {ledger.length === 0 ? (
            <div className="plugin-empty"><div className="plugin-empty-icon">💰</div><p>暂无记录</p></div>
          ) : (
            <ul className="wb-list wb-ledger-list">
              {ledger.slice(0, 30).map(e => (
                <li key={e.id} className="wb-ledger-item">
                  <span className={`wb-ledger-amount ${e.type}`}>{e.type === 'income' ? '+' : '-'}¥{e.amount}</span>
                  <span className="wb-ledger-cat">{e.category}</span>
                  {e.note && <span className="wb-ledger-note">{e.note}</span>}
                  <span className="wb-ledger-date">{e.date.slice(5)}</span>
                  <button className="wb-remove" onClick={() => removeLedger(e.id)} type="button">×</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* 目标 */}
      {tab === 'goal' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">长期目标</h2>
          <div className="wb-goal-form">
            <input className="plugin-input" placeholder="目标名称..." value={goalInput} onChange={e => setGoalInput(e.target.value)} />
            <div className="plugin-grid-2">
              <input className="plugin-input" placeholder="目标值（如 100关）" value={goalTarget} onChange={e => setGoalTarget(e.target.value)} />
              <input className="plugin-input" type="date" value={goalDeadline} onChange={e => setGoalDeadline(e.target.value)} />
            </div>
            <button className="plugin-btn plugin-btn-primary" onClick={addGoal} type="button">添加目标</button>
          </div>
          {goals.length === 0 ? (
            <div className="plugin-empty"><div className="plugin-empty-icon">🎯</div><p>暂无目标</p></div>
          ) : (
            <div className="wb-goals">
              {goals.map(g => (
                <div key={g.id} className="wb-goal-card">
                  <div className="wb-goal-head">
                    <span className="wb-goal-title">{g.title}</span>
                    <button className="wb-remove" onClick={() => removeGoal(g.id)} type="button">×</button>
                  </div>
                  <div className="wb-goal-meta">
                    <span>目标: {g.target}</span>
                    <span>截止: {g.deadline}</span>
                  </div>
                  <div className="wb-goal-progress">
                    <div className="wb-goal-progress-bar" style={{ width: `${g.progress}%` }} />
                    <span className="wb-goal-progress-text">{g.progress}%</span>
                  </div>
                  <div className="wb-goal-actions">
                    <button className="plugin-btn" onClick={() => updateGoalProgress(g.id, -5)} type="button">-5%</button>
                    <button className="plugin-btn" onClick={() => updateGoalProgress(g.id, 5)} type="button">+5%</button>
                    <button className="plugin-btn" onClick={() => updateGoalProgress(g.id, 10)} type="button">+10%</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 灵感 */}
      {tab === 'idea' && (
        <section className="plugin-section">
          <h2 className="plugin-section-title">灵感记录</h2>
          <div className="wb-input-row">
            <input
              className="plugin-input"
              placeholder="随手记下灵感..."
              value={ideaInput}
              onChange={e => setIdeaInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addIdea()}
            />
            <button className="plugin-btn plugin-btn-primary" onClick={addIdea} type="button">记录</button>
          </div>
          {ideas.length === 0 ? (
            <div className="plugin-empty"><div className="plugin-empty-icon">💡</div><p>暂无灵感</p></div>
          ) : (
            <div className="wb-ideas">
              {ideas.map(i => (
                <div key={i.id} className="wb-idea-card">
                  <p className="wb-idea-content">{i.content}</p>
                  <div className="wb-idea-foot">
                    <span className="wb-idea-time">{new Date(i.createdAt).toLocaleString('zh-CN')}</span>
                    <button className="wb-remove" onClick={() => removeIdea(i.id)} type="button">×</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </PluginShell>
  )
}

export default Workbench
