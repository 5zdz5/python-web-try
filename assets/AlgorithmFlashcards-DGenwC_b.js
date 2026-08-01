const e=`import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AlgorithmFlashcards.css'
import { useMonitor } from '../../context/MonitorContext'
import { useTheme } from '../../context/ThemeContext'

type FlashCategory = '数组' | '链表' | '二叉树' | '哈希' | '排序'

interface FlashCard {
  id: number
  category: FlashCategory
  difficulty: 'easy' | 'medium' | 'hard'
  front: { title: string; problem: string }
  back: {
    tcBest: string; tcWorst: string; sc: string;
    keyIdea: string; patterns: string[];
  }
}

// 法则3：数据驱动，12 张闪卡（数组/链表/二叉树/哈希/排序 5 分类）
const CARDS: FlashCard[] = [
  {
    id: 1, category: '数组', difficulty: 'easy',
    front: { title: '双指针：两数之和（有序数组）', problem: '升序数组找两个数和 = target，要求 O(1) 空间。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(1)',
      keyIdea: '左指针 L=0，右指针 R=len-1；和<target L++；和>target R--；利用有序性一次遍历解决。',
      patterns: ['Two Pointers', '左右夹逼', '有序数组'] },
  },
  {
    id: 2, category: '数组', difficulty: 'medium',
    front: { title: '滑动窗口：无重复字符的最长子串', problem: '字符串 s，求最长不含重复字符的子串长度。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(min(m, n)) m=字符集大小',
      keyIdea: '窗口 [L,R)；扩展 R 遇到重复时，L 向前移动到「重复字符上次出现位置+1」与当前 L 中较大者；每步记录 max(R-L)。',
      patterns: ['Sliding Window', '哈希/数组存上次出现下标', '最大长度维护'] },
  },
  {
    id: 3, category: '数组', difficulty: 'medium',
    front: { title: '前缀和：和为 K 的子数组数量', problem: '整数数组 nums，求子数组和 = K 的个数。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(n)',
      keyIdea: '维护前缀和 pre[i] = sum(nums[0..i])；子数组 (j+1..i] 和 = K → pre[i] - pre[j] = K → 哈希表 count[pre[j]] 出现次数累加答案。',
      patterns: ['Prefix Sum', 'Hash Map 存计数', '两数之差变形'] },
  },
  {
    id: 4, category: '链表', difficulty: 'easy',
    front: { title: '反转链表', problem: '反转单向链表，返回新头。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(1) iterative / O(n) recursive stack',
      keyIdea: '迭代：pre=null, cur=head；每步临时存 next=cur.next；cur.next=pre；pre=cur；cur=next；直到 cur=null → 返回 pre。',
      patterns: ['三指针迭代：pre/cur/next', '递归法（注意递归栈 O(n) 不算原地）'] },
  },
  {
    id: 5, category: '链表', difficulty: 'medium',
    front: { title: '快慢指针：找链表中点 / 判断环', problem: '①找链表中点 ②判断链表是否有环。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(1)',
      keyIdea: 'slow 走 1 步 fast 走 2 步：判环 → fast 能追上 slow=有环；找中点 → fast 到尾时 slow=中点（偶数个节点时靠左或靠右，看题意）。',
      patterns: ['Floyd Cycle Detection', 'Tortoise & Hare', '不修改链表结构'] },
  },
  {
    id: 6, category: '二叉树', difficulty: 'easy',
    front: { title: '三种 DFS 遍历顺序', problem: '前序、中序、后序遍历节点输出顺序有何不同？' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(h) h=树高（递归栈）',
      keyIdea: '前序：根 → 左 → 右；中序：左 → 根 → 右（BST 中序输出升序）；后序：左 → 右 → 根（删节点用）。迭代法用 stack+visited 标志。',
      patterns: ['Recursive DFS', 'Stack Iterative DFS', '中序 = BST 有序'] },
  },
  {
    id: 7, category: '二叉树', difficulty: 'medium',
    front: { title: 'BFS 层序遍历', problem: '二叉树按层从上到下输出（每层一个数组）。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(w) w=最宽层宽度',
      keyIdea: 'queue 初始入队 root；while queue 非空：记录当前层 size → for i in [0,size) 出队一个节点并收集结果→左、右子节点非空入队。',
      patterns: ['Queue + level size 技巧', 'DFS 递归加 depth 也能做'] },
  },
  {
    id: 8, category: '二叉树', difficulty: 'medium',
    front: { title: '判断平衡二叉树（AVL）', problem: '每个节点左右子树高度差 ≤ 1。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(h)',
      keyIdea: '设计返回 -1 表示「非平衡」、否则返回高度的辅助函数；左=-1 或 右=-1 直接返回 -1；|左高-右高|>1 返回 -1；否则返回 max(l,r)+1。根返回值 ≠ -1 即平衡。',
      patterns: ['自底向上 DFS（一次遍历 O(n) 替代 O(n²) 朴素法）', 'Return Union Type（高度 or Sentinel）'] },
  },
  {
    id: 9, category: '哈希', difficulty: 'easy',
    front: { title: '两数之和（一般数组，非有序）', problem: '数组 + target，返回下标 i<j 使 nums[i] + nums[j] = target。' },
    back: { tcBest: 'O(n)', tcWorst: 'O(n)', sc: 'O(n)',
      keyIdea: '遍历 nums[i]：先查哈希表中是否已有补数 K = target - nums[i]；有就返回 [map[K], i]；没有就把 <nums[i], i> 写入哈希表。',
      patterns: ['One-pass Hash', '补数思想', '返回下标用哈希存「值→下标」'] },
  },
  {
    id: 10, category: '哈希', difficulty: 'medium',
    front: { title: '字母异位词分组', problem: 'strs 数组，把字母组成相同（anagram）的分到一组。' },
    back: { tcBest: 'O(nk log k), k=最长字符串长', tcWorst: 'O(nk log k)', sc: 'O(nk)',
      keyIdea: '把每个 str 排序得到 key；哈希表 map<string, list<string>>：按 key 收集；最后返回 value 列表。（也可 O(nk) 用「字符计数 26 位元组」作 key，避免 log k 排序）',
      patterns: ['Sort as Canonical Key', 'Count Array → Tuple Key', 'Group By 聚合'] },
  },
  {
    id: 11, category: '排序', difficulty: 'medium',
    front: { title: '快速排序时间复杂度与稳定性？', problem: '快排最好/最坏/平均 TC，为什么不稳定，最坏何时发生？' },
    back: { tcBest: 'O(n log n)', tcWorst: 'O(n²) 当 pivot 每次是最大/最小（已排序数组+固定 pivot）', sc: 'O(log n) 递归栈平均 / O(n) 最坏',
      keyIdea: '最坏 O(n²) 已被「随机 pivot / 三数取中 pivot」在工程中基本避免，平均仍 O(n log n)。不稳定：分割时相同 key 的相对顺序会被 partition 打乱。',
      patterns: ['Random Pivot / Median-of-Three', 'Hoare / Lomuto Partition', '不稳定排序（稳定=归并）'] },
  },
  {
    id: 12, category: '排序', difficulty: 'medium',
    front: { title: '归并排序 vs 快排 vs 堆排', problem: '三者 TC/SC/稳定性/适用场景对比？' },
    back: { tcBest: '见 keyIdea', tcWorst: '见 keyIdea', sc: '见 keyIdea',
      keyIdea: '①归并：平均/最坏 O(n log n)，稳定，SC O(n) 额外数组（链表场景可 SC O(1)），适合外部排序；②快排：平均 O(n log n) 最坏 O(n²)，不稳定，SC O(log n) 栈，常数因子最小（原地+缓存友好）实际最快；③堆排：全 O(n log n)，不稳定，SC O(1) 原地，常数因子>快排（父子节点跳），适合 TopK 流式维持堆。',
      patterns: ['TopK = 小根堆保留前 K；O(n) 构建 + O(k log k) 取 = 平均 O(n) QuickSelect', '外部排序 = 多路归并', '稳定性要求=选归并'] },
  },
]

/**
 * 游戏：算法闪卡训练营
 *
 * 归属层：pages/（路由级页面，符合法则1分层归属决策）
 * 监测：法则4主动注册 group + reportHealth
 * 主题：CSS 变量 + 像素风升起动画（法则5）
 */
function AlgorithmFlashcards() {
  const { registerGroup, reportHealth } = useMonitor()
  const { themeId } = useTheme()
  const isPixel = themeId === 'pixel-spectrum' || themeId === 'pixel-crow'

  const [filter, setFilter] = useState<FlashCategory | 'All'>('All')
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<number>>(new Set())

  const categories = useMemo(() => {
    const s = new Set<FlashCategory | 'All'>(['All'])
    CARDS.forEach(c => s.add(c.category))
    return Array.from(s) as Array<FlashCategory | 'All'>
  }, [])

  const filtered = useMemo(() => (
    filter === 'All' ? CARDS : CARDS.filter(c => c.category === filter)
  ), [filter])

  const card = filtered[idx % Math.max(1, filtered.length)]

  useEffect(() => {
    registerGroup('Game-AlgoFlashcards', '游戏-算法闪卡训练营', 'src/pages/GameCenter/AlgorithmFlashcards.tsx')
    reportHealth('Game-AlgoFlashcards', 'healthy', \`闪卡 \${CARDS.length} 张 / \${categories.length - 1} 分类\`)
  }, [registerGroup, reportHealth, categories.length])

  // 切分类时重置
  useEffect(() => {
    setIdx(0)
    setFlipped(false)
  }, [filter])

  const total = filtered.length
  const knownCount = filtered.filter(c => known.has(c.id)).length

  const prev = () => { setIdx(i => (i - 1 + total) % total); setFlipped(false) }
  const next = () => { setIdx(i => (i + 1) % total); setFlipped(false) }
  const markKnown = () => {
    setKnown(prevSet => {
      const ns = new Set(prevSet)
      if (ns.has(card.id)) ns.delete(card.id); else ns.add(card.id)
      return ns
    })
    reportHealth('Game-AlgoFlashcards', 'healthy', \`卡片 #\${card.id} \${known.has(card.id) ? '取消掌握' : '标记掌握'}\`)
  }
  const diff = (d: FlashCard['difficulty']) => d === 'easy' ? '简单' : d === 'medium' ? '中等' : '困难'
  const diffColor = (d: FlashCard['difficulty']) =>
    d === 'easy' ? 'var(--color-accent-success)' :
    d === 'medium' ? 'var(--color-accent-warning)' : 'var(--color-accent-danger)'

  if (!card) return null

  return (
    <div className="afc-page container">
      <header className={\`afc-header \${isPixel ? 'pixel-rise-container' : ''}\`}>
        <Link to="/games" className="afc-back-btn">← 返回游戏中心</Link>
        <div>
          <h1 className={\`afc-title \${isPixel ? 'pixel-rise-tall' : 'animate-fade-in'}\`}>🗂️ 算法闪卡训练营</h1>
          <p className="afc-subtitle">翻转卡：正面题目+难度 · 反面复杂度+核心思路 · 掌握进度追踪</p>
        </div>
        <div className="afc-progress pixel-panel pixel-panel-accent">
          <div className="afc-p-row"><span>掌握</span><span className="afc-p-val afc-p-right">{knownCount}</span></div>
          <div className="afc-p-row"><span>剩余</span><span className="afc-p-val">{total - knownCount}</span></div>
          <div className="afc-p-row"><span>进度</span><span className="afc-p-val">{Math.round(knownCount / Math.max(1, total) * 100)}%</span></div>
        </div>
      </header>

      {/* 分类筛选 */}
      <div className="afc-cats">
        {categories.map(c => (
          <button
            key={c}
            type="button"
            className={\`afc-cat \${filter === c ? 'active' : ''}\`}
            onClick={() => setFilter(c)}
          >{c}</button>
        ))}
        <div className="afc-page-num">第 {(idx % total) + 1} / {total} 张</div>
      </div>

      {/* 卡片 */}
      <div
        className={\`afc-card-wrap \${isPixel ? 'pixel-rise' : ''}\`}
        onClick={() => setFlipped(f => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setFlipped(f => !f) }}
      >
        <div className={\`afc-card \${flipped ? 'afc-flipped' : ''}\`}>
          {/* 正面 */}
          <div className="afc-face afc-front pixel-card-3d">
            <div className="afc-face-head">
              <span className="afc-cat-chip">{card.category}</span>
              <span
                className="afc-diff-chip"
                style={{ borderColor: diffColor(card.difficulty), color: diffColor(card.difficulty) }}
              >难度：{diff(card.difficulty)}</span>
              {known.has(card.id) && <span className="afc-known-chip">✅ 已掌握</span>}
            </div>
            <h2 className="afc-card-title">{card.front.title}</h2>
            <p className="afc-card-problem">{card.front.problem}</p>
            <div className="afc-hint">（点击卡片翻转查看思路）</div>
          </div>
          {/* 反面 */}
          <div className="afc-face afc-back pixel-card-3d">
            <div className="afc-face-head">
              <span className="afc-cat-chip afc-cat-chip-back">💡 复杂度 & 核心思路</span>
              {known.has(card.id) && <span className="afc-known-chip">✅ 已掌握</span>}
            </div>
            <div className="afc-complex">
              <div className="afc-complex-item"><span>TC best</span><code>{card.back.tcBest}</code></div>
              <div className="afc-complex-item"><span>TC worst</span><code>{card.back.tcWorst}</code></div>
              <div className="afc-complex-item"><span>SC</span><code>{card.back.sc}</code></div>
            </div>
            <div className="afc-keyidea">
              <h4 className="afc-sec-title">核心思路</h4>
              <p>{card.back.keyIdea}</p>
            </div>
            <div className="afc-patterns">
              <h4 className="afc-sec-title">识别模式</h4>
              <div className="afc-pattern-tags">
                {card.back.patterns.map(p => <span key={p} className="afc-p-tag">{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作栏 */}
      <div className="afc-actions">
        <button type="button" className="btn btn-secondary btn-sm" onClick={prev}>← 上一张</button>
        <button
          type="button"
          className={\`btn btn-sm \${known.has(card.id) ? 'btn-secondary' : 'btn-primary'}\`}
          onClick={(e) => { e.stopPropagation(); markKnown() }}
        >{known.has(card.id) ? '↩ 取消掌握' : '✅ 标记掌握'}</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={(e) => { e.stopPropagation(); setFlipped(f => !f) }}>
          {flipped ? '↶ 看题目' : '↷ 看思路'}
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={next}>下一张 →</button>
      </div>
    </div>
  )
}

export default AlgorithmFlashcards
`;export{e as default};
