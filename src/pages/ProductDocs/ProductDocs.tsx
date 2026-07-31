import { useState, useMemo } from 'react'
import PluginShell from '../../components/PluginShell'
import './ProductDocs.css'

type DocType = 'prd' | 'mvp' | 'tech' | 'competitor' | 'marketing' | 'memo'

interface DocTemplate {
  key: DocType
  label: string
  defaultTitle: string
  content: string
}

const DOC_TEMPLATES: DocTemplate[] = [
  {
    key: 'prd',
    label: 'PRD',
    defaultTitle: '产品需求文档：智能学习路径推荐',
    content: `## 背景与目标

当前用户在 Python 学习过程中面临路径选择困难，超过 40% 的新用户在首周内流失。本需求旨在基于用户行为数据，自动生成个性化学习路径。

## 用户故事

- 作为新手用户，我希望系统能根据我的基础水平推荐入门关卡
- 作为进阶用户，我希望跳过已掌握的内容，直接挑战高难度题目
- 作为回归用户，我希望看到上次学习进度的延续提示

## 功能需求

### 核心功能

1. **水平诊断**：通过 5-10 道题快速评估用户当前水平
2. **路径生成**：基于诊断结果与历史行为生成个性化路径
3. **动态调整**：每完成 3 关后重新评估并调整后续路径

## 非功能需求

- 路径生成接口响应时间 ≤ 800ms（P95）
- 支持日均 10 万次路径请求
- 用户行为数据保留 90 天

## 验收标准

- 新用户首周留存率从 60% 提升至 75%
- 平均学习时长提升 25%
- 路径调整后用户满意度 ≥ 4.2/5`,
  },
  {
    key: 'mvp',
    label: 'MVP Spec',
    defaultTitle: 'MVP 规格：代码打字训练场',
    content: `## 核心假设

开发者通过反复敲击真实代码片段来熟悉语法，比阅读教程更高效。MVP 验证"短时高频打字练习能提升编码熟练度"这一假设。

## 最小功能集

### 必须包含

1. 题目展示区：显示待敲击的代码片段
2. 输入对比区：实时高亮正确与错误字符
3. 计时与 WPM 统计
4. 单关完成反馈

### 明确不做

- 多人竞技模式
- 自定义题目上传
- 复杂成就系统

## 成功指标

- 7 日内完成至少 1 次练习的用户占比 ≥ 50%
- 单次练习平均时长 ≥ 3 分钟
- 用户 NPS ≥ 40

## 技术约束

- 纯前端实现，无后端依赖
- 首屏加载 ≤ 1.5s
- 移动端可用但非首选`,
  },
  {
    key: 'tech',
    label: '技术设计文档(HLD/LLD)',
    defaultTitle: '技术设计文档：实时协作编辑器',
    content: `## 系统架构

整体采用 CRDT + WebSocket 的双层架构。CRDT 保证离线编辑可合并，WebSocket 提供低延迟同步。

## 模块划分

### 协同层 (collab-layer)

- 维护文档 CRDT 树
- 处理远端 op 合并
- 计算光标位置映射

### 传输层 (transport-layer)

\`\`\`typescript
interface TransportMessage {
  type: 'op' | 'cursor' | 'presence' | 'ack'
  sessionId: string
  payload: unknown
  version: number
}
\`\`\`

### 持久化层 (persistence-layer)

每 5 秒批量落库，崩溃恢复时从最近 checkpoint 重放 op 日志。

## 关键决策

### 为什么选 CRDT 而非 OT

CRDT 天然支持离线编辑和 P2P 场景，无需中央协调器。代价是元数据开销较大，但通过 Yjs 的状态压缩可将开销控制在文档大小的 1.5 倍以内。

### 为什么不用 HTTP 长轮询

长轮询在弱网下消息堆积严重，且无法实现光标级实时同步。WebSocket 在 99% 的浏览器环境下可用，配合心跳保活已足够。

## 性能预算

- 单文档并发编辑者：≤ 30 人
- Op 端到端延迟：≤ 200ms（同区域）
- 客户端内存占用：≤ 50MB（10 万字文档）`,
  },
  {
    key: 'competitor',
    label: '竞品分析',
    defaultTitle: '竞品分析：在线编程学习平台',
    content: `## 分析范围

选取三款主流产品：**LeetCode**、**Codewars**、**Exercism**，聚焦 Python 学习路径的设计差异。

## 关键维度对比

### 路径设计

- LeetCode：以题库为中心，无显式路径，依赖标签筛选
- Codewars：以难度等级（8 kyu 到 1 kyu）线性推进，社区贡献题目
- Exercism：提供 mentor 审阅机制，路径按概念树组织

### 学习反馈

LeetCode 侧重"做对了吗"的二元反馈；Codewars 提供他人解法对比；Exercism 提供人工评语，反馈周期 1-3 天。

## 数据观察

LeetCode 周活用户约 800 万，但新手 7 日留存仅 28%。Exercism 留存达 52%，但受限于 mentor 供给，增长缓慢。Codewars 介于两者之间，约 41%。

## 启示

1. 纯题库模式对新手不友好，需要路径引导
2. 人工反馈效果最佳但难规模化，可作为高价值环节保留
3. 自动化反馈介于两者之间，是性价比最高的折中方案`,
  },
  {
    key: 'marketing',
    label: '营销文案',
    defaultTitle: '营销文案：Python 学习产品落地页',
    content: `## 主标题

把 Python 学进肌肉记忆里。

## 副标题

不是再看一遍教程，而是亲手敲出每一行代码。每天 15 分钟，30 天后你会感谢现在的自己。

## 卖点段落

### 用打字的方式学语法

读十遍不如敲一遍。我们从真实开源项目中精选代码片段，让你在敲击中熟悉每一处缩进、每一个冒号、每一行 \`import\` 的位置。手指记住了，脑子自然就记住了。

### 难度像游戏一样推进

每一关都是一个独立的代码挑战，从 \`print('hello')\` 到装饰器、生成器、上下文管理器，循序渐进。失败可以重来，成功有即时反馈。

## 行动号召

第一个关卡免费试玩，无需注册。30 分钟后你会知道，自己是不是真的想学会 Python。

[立即开始第一关]`,
  },
  {
    key: 'memo',
    label: '内部备忘录',
    defaultTitle: '内部备忘录：Q3 协同编辑功能优先级调整',
    content: `## 决策摘要

将原计划 Q3 末发布的"多人光标"功能延后至 Q4 初，优先完成"评论批注"和"版本历史"两项功能。

## 背景

用户调研显示，72% 的受访团队将"评论批注"列为最期待的协同功能，远高于"多人光标"的 31%。同时，部分企业客户在合规审计场景中明确要求版本历史能力。

## 调整后的优先级

1. 评论批注（Q3 W1-W6）
2. 版本历史（Q3 W7-W10）
3. 多人光标（Q4 W1-W4）

## 影响评估

工程量基本持平，无需扩招。多人光标延后不会影响本季度 OKR 的核心指标。需同步告知销售团队，避免对已签约客户过度承诺。

## 后续动作

产品负责人本周内更新路线图文档，并同步至全员周会。`,
  },
]

const INITIAL_TITLES: Record<DocType, string> = Object.fromEntries(
  DOC_TEMPLATES.map(t => [t.key, t.defaultTitle]),
) as Record<DocType, string>

const INITIAL_CONTENTS: Record<DocType, string> = Object.fromEntries(
  DOC_TEMPLATES.map(t => [t.key, t.content]),
) as Record<DocType, string>

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderInline(s: string): string {
  return s
    .replace(/`([^`]+)`/g, '<code class="pd-inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

function renderMarkdown(md: string): string {
  const lines = md.split('\n')
  const html: string[] = []
  let i = 0
  let inUl = false
  let inOl = false
  const paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${renderInline(escapeHtml(paragraph.join(' ')))}</p>`)
      paragraph.length = 0
    }
  }
  const closeLists = () => {
    if (inUl) {
      html.push('</ul>')
      inUl = false
    }
    if (inOl) {
      html.push('</ol>')
      inOl = false
    }
  }

  while (i < lines.length) {
    const line = lines[i]

    // 围栏代码块
    if (line.trim().startsWith('```')) {
      flushParagraph()
      closeLists()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // 跳过闭合的 ```
      html.push(
        `<pre class="pd-code"><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`,
      )
      continue
    }

    // 标题
    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      closeLists()
      const level = headingMatch[1].length
      html.push(`<h${level}>${renderInline(escapeHtml(headingMatch[2]))}</h${level}>`)
      i++
      continue
    }

    // 无序列表
    const ulMatch = line.match(/^[-*]\s+(.*)$/)
    if (ulMatch) {
      flushParagraph()
      if (inOl) {
        html.push('</ol>')
        inOl = false
      }
      if (!inUl) {
        html.push('<ul>')
        inUl = true
      }
      html.push(`<li>${renderInline(escapeHtml(ulMatch[1]))}</li>`)
      i++
      continue
    }

    // 有序列表
    const olMatch = line.match(/^\d+\.\s+(.*)$/)
    if (olMatch) {
      flushParagraph()
      if (inUl) {
        html.push('</ul>')
        inUl = false
      }
      if (!inOl) {
        html.push('<ol>')
        inOl = true
      }
      html.push(`<li>${renderInline(escapeHtml(olMatch[1]))}</li>`)
      i++
      continue
    }

    // 空行
    if (line.trim() === '') {
      flushParagraph()
      closeLists()
      i++
      continue
    }

    // 普通文本 → 累积为段落
    paragraph.push(line.trim())
    i++
  }

  flushParagraph()
  closeLists()

  return html.join('\n')
}

function ProductDocs() {
  const [activeType, setActiveType] = useState<DocType>('prd')
  const [titles, setTitles] = useState<Record<DocType, string>>(INITIAL_TITLES)
  const [contents, setContents] = useState<Record<DocType, string>>(INITIAL_CONTENTS)
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle')

  const title = titles[activeType]
  const content = contents[activeType]
  const previewHtml = useMemo(() => renderMarkdown(content), [content])

  const buildMarkdown = () => `# ${title}\n\n${content}`

  const exportMarkdown = () => {
    const md = buildMarkdown()
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const safeName = (title || 'document')
      .replace(/[\\/:*?"<>|]/g, '_')
      .replace(/\s+/g, '_')
      .slice(0, 60)
    const a = document.createElement('a')
    a.href = url
    a.download = `${safeName}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const copyContent = async () => {
    const md = buildMarkdown()
    try {
      await navigator.clipboard.writeText(md)
      setCopyStatus('copied')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = md
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        setCopyStatus('copied')
      } catch {
        setCopyStatus('idle')
      }
      document.body.removeChild(ta)
    }
    window.setTimeout(() => setCopyStatus('idle'), 1500)
  }

  return (
    <PluginShell
      icon="📄"
      title="产品文档工作台"
      subtitle="product-lifecycle-workbench · PRD/技术文档/竞品分析/营销文案"
      vendor="product-lifecycle-workbench"
      version="0.2.1"
    >
      <div className="pd-toolbar">
        <span className="mock-badge">MOCK 数据</span>
        <div className="pd-toolbar-actions">
          <button className="plugin-btn pd-btn" onClick={copyContent} type="button">
            {copyStatus === 'copied' ? '已复制 ✓' : '复制'}
          </button>
          <button
            className="plugin-btn plugin-btn-primary pd-btn"
            onClick={exportMarkdown}
            type="button"
          >
            导出 Markdown
          </button>
        </div>
      </div>

      <div className="plugin-tabs">
        {DOC_TEMPLATES.map(t => (
          <button
            key={t.key}
            className={`plugin-tab ${activeType === t.key ? 'active' : ''}`}
            onClick={() => setActiveType(t.key)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="pd-layout">
        <section className="plugin-section pd-editor">
          <h2 className="plugin-section-title">编辑区</h2>
          <label className="plugin-label" htmlFor="pd-title-input">标题</label>
          <input
            id="pd-title-input"
            className="plugin-input"
            type="text"
            value={title}
            onChange={e => setTitles(prev => ({ ...prev, [activeType]: e.target.value }))}
          />
          <label className="plugin-label pd-content-label" htmlFor="pd-content-input">
            正文（Markdown）
          </label>
          <textarea
            id="pd-content-input"
            className="plugin-textarea pd-textarea"
            value={content}
            onChange={e => setContents(prev => ({ ...prev, [activeType]: e.target.value }))}
            rows={24}
            spellCheck={false}
          />
        </section>

        <section className="plugin-section pd-preview">
          <h2 className="plugin-section-title">预览</h2>
          <h1 className="pd-preview-title">{title}</h1>
          <div
            className="pd-preview-body"
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </section>
      </div>
    </PluginShell>
  )
}

export default ProductDocs
