/**
 * 像素打字大战 — Python 代码打字游戏
 *
 * 玩法：屏幕顶部掉落 Python 代码片段，玩家在输入框正确输入即可消除得分，
 *      代码块掉到底部则扣血，血量为 0 游戏结束。连击越高得分倍率越大。
 */
import { useState, useEffect, useRef, useCallback } from 'react'
import './CodeTypingArena.css'

// ===== Python 代码片段库（按难度分级） =====
const SNIPPETS_EASY = [
  'print', 'if', 'else', 'for', 'while', 'def', 'return', 'import', 'class',
  'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'pass', 'break',
]

const SNIPPETS_MEDIUM = [
  'x = 1', 'x += 2', 'len(x)', 'range(n)', 'list()', 'dict()', 'str(x)',
  'int(x)', 'float(x)', 'x.append(y)', 'x.pop()', 'x.sort()', 'type(x)',
  'isinstance(x, int)', 'enumerate(lst)', 'zip(a, b)', 'map(f, lst)',
  'lambda x: x', 'with open(f)', 'try:', 'except:', 'raise ValueError',
]

const SNIPPETS_HARD = [
  '[x for x in lst]', '{k: v for k, v in d}', 'x if x > 0 else 0',
  'def f(*args, **kw)', '@property', 'super().__init__()',
  'yield from gen', 'async def fetch()', 'await coro',
  'f"{name}: {val}"', 'x[1:3]', 'x[::-1]', 'a, *b = lst',
]

interface FallingBlock {
  id: number
  text: string
  x: number      // 百分比水平位置 0-100
  y: number      // 像素垂直位置
  speed: number  // 下落速度 px/frame
  difficulty: 'easy' | 'medium' | 'hard'
  hue: number    // 色相，用于彩虹着色
}

interface GameState {
  status: 'ready' | 'playing' | 'paused' | 'gameover'
  score: number
  hp: number
  maxHp: number
  combo: number
  maxCombo: number
  level: number
  blocksCleared: number
}

const INITIAL_HP = 5
const ARENA_HEIGHT = 440
const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'var(--color-accent-primary, #c4ff00)',
  medium: 'var(--color-accent-tertiary, #ff2e63)',
  hard: 'var(--color-accent-secondary, #00e5ff)',
}

function pickSnippet(level: number): { text: string; difficulty: 'easy' | 'medium' | 'hard' } {
  const r = Math.random()
  // 关卡越高，难题概率越大
  const hardChance = Math.min(0.15 + level * 0.05, 0.45)
  const mediumChance = Math.min(0.35 + level * 0.03, 0.5)
  if (r < hardChance && level >= 2) {
    const t = SNIPPETS_HARD[Math.floor(Math.random() * SNIPPETS_HARD.length)]
    return { text: t, difficulty: 'hard' }
  }
  if (r < hardChance + mediumChance && level >= 1) {
    const t = SNIPPETS_MEDIUM[Math.floor(Math.random() * SNIPPETS_MEDIUM.length)]
    return { text: t, difficulty: 'medium' }
  }
  const t = SNIPPETS_EASY[Math.floor(Math.random() * SNIPPETS_EASY.length)]
  return { text: t, difficulty: 'easy' }
}

function difficultyScore(d: 'easy' | 'medium' | 'hard'): number {
  return d === 'easy' ? 10 : d === 'medium' ? 25 : 50
}

interface CodeTypingArenaProps {
  /** 嵌入插件壳模式：隐藏大标题，与 PluginShell 的标题保持层级清晰 */
  embedMode?: boolean
}

function CodeTypingArena({ embedMode = false }: CodeTypingArenaProps = {}) {
  const [game, setGame] = useState<GameState>({
    status: 'ready',
    score: 0,
    hp: INITIAL_HP,
    maxHp: INITIAL_HP,
    combo: 0,
    maxCombo: 0,
    level: 1,
    blocksCleared: 0,
  })
  const [blocks, setBlocks] = useState<FallingBlock[]>([])
  const [input, setInput] = useState('')
  const [floatTexts, setFloatTexts] = useState<Array<{ id: number; text: string; x: number; y: number; color: string }>>([])

  const inputRef = useRef<HTMLInputElement>(null)
  const arenaRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const lastSpawnRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const blockIdRef = useRef<number>(0)
  const floatIdRef = useRef<number>(0)
  // 用 ref 保存最新的 blocks，避免闭包陷阱
  const blocksRef = useRef<FallingBlock[]>([])
  blocksRef.current = blocks

  // ===== 生成新方块 =====
  const spawnBlock = useCallback((level: number) => {
    const { text, difficulty } = pickSnippet(level)
    const speed = 0.6 + level * 0.15 + Math.random() * 0.3
    const block: FallingBlock = {
      id: blockIdRef.current++,
      text,
      x: 5 + Math.random() * 80,  // 5%-85% 避免贴边
      y: -30,
      speed,
      difficulty,
      hue: Math.floor(Math.random() * 360),
    }
    setBlocks(prev => [...prev, block])
  }, [])

  // ===== 添加漂浮文字（+10 / Miss 等） =====
  const addFloatText = useCallback((text: string, x: number, y: number, color: string) => {
    const ft = { id: floatIdRef.current++, text, x, y, color }
    setFloatTexts(prev => [...prev, ft])
    setTimeout(() => {
      setFloatTexts(prev => prev.filter(f => f.id !== ft.id))
    }, 800)
  }, [])

  // ===== 游戏主循环 =====
  const gameLoop = useCallback((time: number) => {
    if (game.status !== 'playing') return
    const dt = lastTimeRef.current ? (time - lastTimeRef.current) / 16.67 : 1
    lastTimeRef.current = time

    // 生成方块：间隔随关卡缩短
    const spawnInterval = Math.max(900 - game.level * 80, 400)
    if (time - lastSpawnRef.current > spawnInterval) {
      spawnBlock(game.level)
      lastSpawnRef.current = time
    }

    // 更新方块位置
    let hpLost = 0
    setBlocks(prev => {
      const next: FallingBlock[] = []
      for (const b of prev) {
        const ny = b.y + b.speed * dt
        if (ny >= ARENA_HEIGHT) {
          // 掉到底部，扣血
          hpLost += 1
          addFloatText('MISS', b.x, ARENA_HEIGHT - 20, 'var(--color-error, #ff2e63)')
        } else {
          next.push({ ...b, y: ny })
        }
      }
      return next
    })

    if (hpLost > 0) {
      setGame(prev => {
        const newHp = Math.max(0, prev.hp - hpLost)
        return {
          ...prev,
          hp: newHp,
          combo: 0,
          status: newHp <= 0 ? 'gameover' : prev.status,
        }
      })
    }

    rafRef.current = requestAnimationFrame(gameLoop)
  }, [game.status, game.level, spawnBlock, addFloatText])

  // ===== 启动/停止主循环 =====
  useEffect(() => {
    if (game.status === 'playing') {
      lastTimeRef.current = 0
      lastSpawnRef.current = 0
      rafRef.current = requestAnimationFrame(gameLoop)
      return () => cancelAnimationFrame(rafRef.current)
    }
  }, [game.status, gameLoop])

  // ===== 输入处理 =====
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInput(val)
    if (game.status !== 'playing') return

    // 精确匹配最低的方块（最危险的那个）
    const matches = blocksRef.current
      .filter(b => b.text === val.trim())
      .sort((a, b) => b.y - a.y)

    if (matches.length > 0) {
      const target = matches[0]
      const base = difficultyScore(target.difficulty)
      const multiplier = 1 + Math.floor(game.combo / 5) * 0.5
      const gained = Math.round(base * multiplier)

      setBlocks(prev => prev.filter(b => b.id !== target.id))
      setGame(prev => {
        const newCombo = prev.combo + 1
        const newCleared = prev.blocksCleared + 1
        // 每 10 个清除升一级
        const newLevel = Math.floor(newCleared / 10) + 1
        return {
          ...prev,
          score: prev.score + gained,
          combo: newCombo,
          maxCombo: Math.max(prev.maxCombo, newCombo),
          blocksCleared: newCleared,
          level: newLevel,
          hp: prev.hp < prev.maxHp && newCombo % 5 === 0 ? prev.hp + 1 : prev.hp, // 每 5 连击回 1 血
        }
      })
      addFloatText(`+${gained}${multiplier > 1 ? ' x' + multiplier.toFixed(1) : ''}`, target.x, target.y, DIFFICULTY_COLORS[target.difficulty])
      setInput('')
    }
  }, [game.status, game.combo, addFloatText])

  // ===== 开始游戏 =====
  const startGame = useCallback(() => {
    setBlocks([])
    setInput('')
    setGame({
      status: 'playing',
      score: 0,
      hp: INITIAL_HP,
      maxHp: INITIAL_HP,
      combo: 0,
      maxCombo: 0,
      level: 1,
      blocksCleared: 0,
    })
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  // ===== 暂停/继续 =====
  const togglePause = useCallback(() => {
    setGame(prev => ({
      ...prev,
      status: prev.status === 'playing' ? 'paused' : prev.status === 'paused' ? 'playing' : prev.status,
    }))
  }, [])

  // 游戏中自动聚焦输入框
  useEffect(() => {
    if (game.status === 'playing') inputRef.current?.focus()
  }, [game.status])

  const hpPercent = (game.hp / game.maxHp) * 100
  const comboMultiplier = 1 + Math.floor(game.combo / 5) * 0.5

  return (
    <div className={`cta-page ${embedMode ? 'cta-embed' : ''}`}>
      {!embedMode && (
        <div className="cta-header hero-anim">
          <h1 className="cta-title rainbow-text">像素打字大战</h1>
          <p className="cta-subtitle">Python 代码从天而降，正确输入即可消除。连击越高，倍率越大。</p>
        </div>
      )}

      {/* ===== HUD 状态栏 ===== */}
      <div className="cta-hud pixel-rise-container">
        <div className="cta-hud-item pixel-panel pixel-panel-accent">
          <span className="cta-hud-label">分数</span>
          <span className="cta-hud-value cta-score">{game.score.toLocaleString()}</span>
        </div>
        <div className="cta-hud-item pixel-panel">
          <span className="cta-hud-label">血量</span>
          <div className="cta-hp-bar">
            <div className="cta-hp-fill" style={{ width: `${hpPercent}%` }} />
            <span className="cta-hp-text">{game.hp} / {game.maxHp}</span>
          </div>
        </div>
        <div className="cta-hud-item pixel-panel">
          <span className="cta-hud-label">连击</span>
          <span className="cta-hud-value cta-combo">
            {game.combo}
            {comboMultiplier > 1 && <span className="cta-multiplier"> x{comboMultiplier.toFixed(1)}</span>}
          </span>
        </div>
        <div className="cta-hud-item pixel-panel">
          <span className="cta-hud-label">关卡</span>
          <span className="cta-hud-value">{game.level}</span>
        </div>
        <div className="cta-hud-item pixel-panel">
          <span className="cta-hud-label">消除</span>
          <span className="cta-hud-value">{game.blocksCleared}</span>
        </div>
        <div className="cta-hud-item pixel-panel">
          <span className="cta-hud-label">最高连击</span>
          <span className="cta-hud-value">{game.maxCombo}</span>
        </div>
      </div>

      {/* ===== 游戏区域 ===== */}
      <div
        ref={arenaRef}
        className="cta-arena pixel-grid-bg pixel-card-3d"
        onClick={() => game.status === 'playing' && inputRef.current?.focus()}
      >
        {/* 准备界面 */}
        {game.status === 'ready' && (
          <div className="cta-overlay">
            <div className="cta-overlay-card pixel-panel pixel-panel-accent pixel-shadow-rainbow">
              <h2 className="rainbow-text">准备好了吗？</h2>
              <p>输入掉落的 Python 代码来消除它们。</p>
              <p>掉到底部会扣血，血量为 0 游戏结束。</p>
              <p className="cta-tip">提示：每 5 连击提升倍率并回 1 血。</p>
              <button className="pixel-btn pixel-btn-accent pixel-shadow cta-start-btn" onClick={startGame}>
                ▶ 开始游戏
              </button>
            </div>
          </div>
        )}

        {/* 暂停界面 */}
        {game.status === 'paused' && (
          <div className="cta-overlay">
            <div className="cta-overlay-card pixel-panel">
              <h2>已暂停</h2>
              <button className="pixel-btn pixel-btn-accent" onClick={togglePause}>继续</button>
            </div>
          </div>
        )}

        {/* 游戏结束界面 */}
        {game.status === 'gameover' && (
          <div className="cta-overlay">
            <div className="cta-overlay-card pixel-panel crow-iridescent">
              <h2 className="cta-gameover-title">游戏结束</h2>
              <div className="cta-result-grid">
                <div><span>最终分数</span><strong className="rainbow-text">{game.score.toLocaleString()}</strong></div>
                <div><span>最高连击</span><strong>{game.maxCombo}</strong></div>
                <div><span>消除方块</span><strong>{game.blocksCleared}</strong></div>
                <div><span>到达关卡</span><strong>{game.level}</strong></div>
              </div>
              <button className="pixel-btn pixel-btn-accent pixel-shadow cta-start-btn" onClick={startGame}>
                ↻ 再来一局
              </button>
            </div>
          </div>
        )}

        {/* 下落的代码块 */}
        {blocks.map(b => (
          <div
            key={b.id}
            className={`cta-block cta-block-${b.difficulty}`}
            style={{
              left: `${b.x}%`,
              top: `${b.y}px`,
              borderColor: DIFFICULTY_COLORS[b.difficulty],
              // 高亮与输入前缀匹配的方块
              ...(input && b.text.startsWith(input.trim())
                ? { boxShadow: `0 0 16px ${DIFFICULTY_COLORS[b.difficulty]}, inset 0 0 8px rgba(255,255,255,0.1)`, filter: 'brightness(1.3)' }
                : {}),
            }}
          >
            <span className="cta-block-text">{b.text}</span>
          </div>
        ))}

        {/* 漂浮文字 */}
        {floatTexts.map(f => (
          <div
            key={f.id}
            className="cta-float-text"
            style={{ left: `${f.x}%`, top: `${f.y}px`, color: f.color }}
          >
            {f.text}
          </div>
        ))}

        {/* 底部危险线 */}
        <div className="cta-danger-line" />
      </div>

      {/* ===== 输入框 ===== */}
      <div className="cta-input-row">
        <input
          ref={inputRef}
          className="cta-input pixel-panel pixel-panel-accent"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder={game.status === 'playing' ? '输入代码消除方块…' : '等待游戏开始…'}
          disabled={game.status !== 'playing'}
          autoComplete="off"
          spellCheck={false}
        />
        {game.status === 'playing' && (
          <button className="pixel-btn pixel-btn-secondary" onClick={togglePause}>
            ⏸ 暂停
          </button>
        )}
      </div>

      {/* ===== 说明 ===== */}
      <div className="cta-legend pixel-panel">
        <h3 className="cta-legend-title">方块难度</h3>
        <div className="cta-legend-items">
          <span className="cta-legend-item">
            <span className="cta-legend-dot" style={{ background: DIFFICULTY_COLORS.easy }} />
            简单（关键字）+10
          </span>
          <span className="cta-legend-item">
            <span className="cta-legend-dot" style={{ background: DIFFICULTY_COLORS.medium }} />
            中等（短语句）+25
          </span>
          <span className="cta-legend-item">
            <span className="cta-legend-dot" style={{ background: DIFFICULTY_COLORS.hard }} />
            困难（复杂表达式）+50
          </span>
        </div>
      </div>
    </div>
  )
}

export default CodeTypingArena
