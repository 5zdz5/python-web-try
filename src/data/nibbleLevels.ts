/**
 * 蚕食爬取 + 关卡化数据层
 *
 * 归属层：data/（纯逻辑，不 import React/Context/组件，符合法则1分层归属决策）
 * 设计理念：基于 Scrapling Skill 的"自适应爬取"概念，在浏览器端通过 fetch + CORS 代理 + DOMParser 实现
 *           "蚕食"= 逐块解析 HTML，把网页内容"啃"成可学习的关卡
 *
 * 关卡化算法：
 *   1. fetch HTML via CORS 代理（allorigins / corsproxy 双 fallback + 15s 超时，符合 pattern 约定）
 *   2. DOMParser 解析
 *   3. 定位主内容区（article > main > .content > #content > body）
 *   4. 按 h2/h3 分割成章节，每章节 → 一个 NibbleLevel
 *   5. p → explanation 步骤；pre → example 步骤（带 code）；ul/li → explanation 知识点
 *   6. 从 pre 代码块提取生成 ChallengeData
 */

// ========================= 类型定义 =========================

/** 蚕食关卡步骤（复用项目既有 InteractiveStep 形状，保持一致性） */
export interface NibbleStep {
  id: number
  title: string
  type: 'explanation' | 'example' | 'practice' | 'quiz' | 'exercise'
  content: string
  code?: string
  hint?: string
  answer?: string
}

/** 蚕食关卡 */
export interface NibbleLevel {
  id: number
  title: string
  subtitle: string
  description: string
  difficulty: number          // 1-5 自动估算（按代码块数+文本长度）
  duration: string            // 自动估算学习时长
  steps: NibbleStep[]
  challenges: NibbleChallenge[]
  sourceUrl: string
  topics: string[]
}

/** 蚕食挑战 */
export interface NibbleChallenge {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  initialCode: string
  expectedOutput?: string
  hint: string
}

/** 爬取状态 */
export type NibbleStatus = 'idle' | 'fetching' | 'parsing' | 'done' | 'error'

/** 爬取结果 */
export interface NibbleResult {
  levels: NibbleLevel[]
  sourceUrl: string
  sourceTitle: string
  totalSteps: number
  totalChallenges: number
  fetchedAt: string
}

// ========================= CORS 代理配置 =========================
// 多代理 fallback（符合 pattern 约定：网络请求必须加超时+重试）
const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://thingproxy.freeboard.io/fetch/${url}`,
]

const FETCH_TIMEOUT_MS = 15000  // 15s 超时（符合 BUILD.hardRules）

// ========================= 爬取核心 =========================

/** 带超时的 fetch */
function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  return new Promise((resolve, reject) => {
    const controller = new AbortController()
    const timer = setTimeout(() => {
      controller.abort()
      reject(new Error(`请求超时（${timeoutMs / 1000}s）`))
    }, timeoutMs)

    fetch(url, { signal: controller.signal, redirect: 'follow' })
      .then((res) => {
        clearTimeout(timer)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        resolve(res)
      })
      .catch((err) => {
        clearTimeout(timer)
        reject(err)
      })
  })
}

/** 多代理 fallback 爬取 HTML */
export async function fetchHtml(url: string): Promise<string> {
  // 简单 URL 校验
  let targetUrl: URL
  try {
    targetUrl = new URL(url)
  } catch {
    throw new Error('URL 格式无效，请输入完整网址（含 https://）')
  }
  if (!targetUrl.protocol.startsWith('http')) {
    throw new Error('仅支持 http/https 协议')
  }

  let lastError: Error | null = null
  // 依次尝试每个代理（指数退避由代理切换实现）
  for (const proxyFn of CORS_PROXIES) {
    try {
      const proxyUrl = proxyFn(url)
      const res = await fetchWithTimeout(proxyUrl, FETCH_TIMEOUT_MS)
      const html = await res.text()
      if (html && html.length > 200) {
        return html
      }
      lastError = new Error('返回内容过短，可能被拦截')
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err))
      // 继续尝试下一个代理
    }
  }
  throw new Error(`所有代理均失败：${lastError?.message ?? '未知错误'}。该网站可能有反爬机制，请换一个网址试试。`)
}

// ========================= HTML 解析 + 关卡化 =========================

/** 定位主内容区（防御式：逐级降级） */
function locateMainContent(doc: Document): HTMLElement {
  const selectors = ['article', 'main', '[role="main"]', '.content', '#content', '.post', '.article', '.markdown-body', '.documentation']
  for (const sel of selectors) {
    const el = doc.querySelector<HTMLElement>(sel)
    if (el && el.innerText && el.innerText.length > 100) {
      return el
    }
  }
  // 降级：移除 script/style/nav/footer/header 后用 body
  const body = doc.body || doc.documentElement
  body.querySelectorAll('script, style, nav, footer, header, aside, iframe, noscript').forEach((n) => n.remove())
  return body
}

/** 提取网页标题 */
function extractTitle(doc: Document): string {
  const h1 = doc.querySelector('h1')
  if (h1 && h1.textContent) return h1.textContent.trim().slice(0, 80)
  const title = doc.querySelector('title')
  if (title && title.textContent) return title.textContent.trim().slice(0, 80)
  return '未命名网页'
}

/** 清理文本（去多余空白） */
function cleanText(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/** 估算难度（1-5） */
function estimateDifficulty(codeBlocks: number, textLength: number): number {
  let score = 1
  score += Math.min(2, Math.floor(codeBlocks / 2))
  score += Math.min(2, Math.floor(textLength / 1500))
  return Math.max(1, Math.min(5, score))
}

/** 估算时长 */
function estimateDuration(steps: number, codeBlocks: number): string {
  const minutes = steps * 3 + codeBlocks * 2
  if (minutes < 60) return `${Math.max(2, minutes)} 分钟`
  return `${Math.floor(minutes / 60)} 小时 ${minutes % 60} 分`
}

/** 提取主题词（从标题+前几段文本） */
function extractTopics(headings: string[]): string[] {
  const topics = new Set<string>()
  for (const h of headings) {
    // 取标题中的关键词（去除常见停用词）
    const words = h.replace(/[【】《》()\[\]{}""'':：，,.。！!？?]/g, ' ').split(/\s+/).filter((w) => w.length >= 2 && w.length <= 12)
    words.slice(0, 2).forEach((w) => topics.add(w))
  }
  return Array.from(topics).slice(0, 6)
}

/**
 * 蚕食关卡化核心算法
 * 按 h2/h3 分割内容，每段成为一个关卡
 */
export function nibbleToLevels(html: string, sourceUrl: string): NibbleResult {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const sourceTitle = extractTitle(doc)
  const content = locateMainContent(doc)

  // 收集所有标题节点作为分割点
  const headings = Array.from(content.querySelectorAll('h2, h3'))
  const topics = extractTopics(headings.map((h) => h.textContent || ''))

  const levels: NibbleLevel[] = []

  // 无标题 → 整个内容作为一个关卡
  if (headings.length === 0) {
    const level = buildLevelFromNode(content, 1, sourceTitle, sourceUrl, '本页内容', [])
    if (level.steps.length > 0) levels.push(level)
  } else {
    // 第一个标题前的内容作为"导言"关卡
    const firstHeading = headings[0]
    const introNodes = getNodesBefore(content, firstHeading)
    if (introNodes.length > 0) {
      const introLevel = buildLevelFromNode(
        { children: introNodes } as unknown as ParentNode,
        1,
        '导言',
        sourceUrl,
        `${sourceTitle} 概览`,
        topics,
      )
      if (introLevel.steps.length > 0) levels.push(introLevel)
    }

    // 每个标题到下一个标题之间作为一个关卡
    headings.forEach((heading, idx) => {
      const nextHeading = headings[idx + 1]
      const sectionNodes = getNodesBetween(content, heading, nextHeading)
      const title = cleanText(heading.textContent || `第 ${idx + 1} 节`)
      const level = buildLevelFromNode(
        { children: sectionNodes } as unknown as ParentNode,
        levels.length + 1,
        title,
        sourceUrl,
        `${sourceTitle} · ${title}`,
        topics,
      )
      if (level.steps.length > 0) levels.push(level)
    })
  }

  // 兜底：若解析失败无关卡，构造一个提示关卡
  if (levels.length === 0) {
    levels.push({
      id: 1,
      title: '解析结果',
      subtitle: `${sourceTitle}（内容较少）`,
      description: '该网页内容结构较简单，已提取可用片段。',
      difficulty: 1,
      duration: '5 分钟',
      steps: [{
        id: 1,
        title: '提取的内容',
        type: 'explanation',
        content: cleanText(content.innerText).slice(0, 2000) || '未提取到有效内容',
      }],
      challenges: [],
      sourceUrl,
      topics,
    })
  }

  const totalSteps = levels.reduce((s, l) => s + l.steps.length, 0)
  const totalChallenges = levels.reduce((s, l) => s + l.challenges.length, 0)

  return {
    levels,
    sourceUrl,
    sourceTitle,
    totalSteps,
    totalChallenges,
    fetchedAt: new Date().toISOString(),
  }
}

/** 获取某节点之前的兄弟节点 */
function getNodesBefore(container: ParentNode, target: Node): Node[] {
  const result: Node[] = []
  for (const child of Array.from(container.childNodes)) {
    if (child === target || (child.contains && child.contains(target))) break
    result.push(child)
  }
  return result
}

/** 获取两个节点之间的兄弟节点（含起始节点） */
function getNodesBetween(container: ParentNode, start: Node, end: Node | null): Node[] {
  const result: Node[] = []
  let recording = false
  for (const child of Array.from(container.childNodes)) {
    if (child === start || (child.contains && child.contains(start))) recording = true
    if (recording) result.push(child)
    if (end && (child === end || (child.contains && child.contains(end)))) break
  }
  return result
}

/** 从一组节点构建一个关卡 */
function buildLevelFromNode(
  nodeContainer: ParentNode,
  levelId: number,
  title: string,
  sourceUrl: string,
  subtitle: string,
  sharedTopics: string[],
): NibbleLevel {
  const steps: NibbleStep[] = []
  const challenges: NibbleChallenge[] = []
  let stepId = 1
  let challengeId = 1
  let totalTextLength = 0
  let codeBlockCount = 0

  const allNodes = Array.from(nodeContainer.childNodes)

  for (const node of allNodes) {
    // 跳过标题本身（已用作关卡标题）
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      const tag = el.tagName.toLowerCase()

      // 代码块 → example 步骤 + 挑战
      if (tag === 'pre' || (tag === 'code' && el.textContent && el.textContent.includes('\n'))) {
        const code = (el.textContent || '').trim()
        if (code.length > 10) {
          codeBlockCount++
          totalTextLength += code.length
          steps.push({
            id: stepId++,
            title: `代码示例 ${codeBlockCount}`,
            type: 'example',
            content: `下面是从网页提取的代码示例，阅读并理解其作用：`,
            code,
          })
          // 从代码块生成挑战
          if (challengeId <= 5) {  // 每关最多5个挑战
            const challenge = buildChallengeFromCode(code, challengeId)
            if (challenge) {
              challenges.push(challenge)
              challengeId++
            }
          }
        }
        continue
      }

      // 列表 → explanation 步骤
      if (tag === 'ul' || tag === 'ol') {
        const items = Array.from(el.querySelectorAll('li'))
          .map((li) => `- ${cleanText(li.textContent || '')}`)
          .filter((t) => t.length > 3)
        if (items.length > 0) {
          const text = items.join('\n')
          totalTextLength += text.length
          steps.push({
            id: stepId++,
            title: `知识点列表`,
            type: 'explanation',
            content: text,
          })
        }
        continue
      }

      // 段落 → explanation 步骤
      if (tag === 'p' || tag === 'blockquote' || tag === 'div') {
        const text = cleanText(el.innerText || el.textContent || '')
        if (text.length > 30) {
          totalTextLength += text.length
          steps.push({
            id: stepId++,
            title: `讲解 ${steps.filter((s) => s.type === 'explanation').length + 1}`,
            type: 'explanation',
            content: text.slice(0, 1000),
          })
        }
        continue
      }

      // 内联 code 块（非 pre 包裹）
      if (tag === 'code') {
        const code = (el.textContent || '').trim()
        if (code.length > 5) {
          steps.push({
            id: stepId++,
            title: `内联代码`,
            type: 'example',
            content: `网页中提到的代码片段：`,
            code,
          })
        }
        continue
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      const text = cleanText(node.textContent || '')
      if (text.length > 50) {
        totalTextLength += text.length
        steps.push({
          id: stepId++,
          title: `讲解 ${steps.filter((s) => s.type === 'explanation').length + 1}`,
          type: 'explanation',
          content: text.slice(0, 1000),
        })
      }
    }
  }

  const difficulty = estimateDifficulty(codeBlockCount, totalTextLength)
  const duration = estimateDuration(steps.length, codeBlockCount)
  const desc = steps.slice(0, 2).map((s) => s.content.slice(0, 60)).join(' / ')

  return {
    id: levelId,
    title,
    subtitle,
    description: desc || `${title}：共 ${steps.length} 个学习步骤`,
    difficulty,
    duration,
    steps,
    challenges,
    sourceUrl,
    topics: sharedTopics,
  }
}

/** 从代码块生成挑战（启发式） */
function buildChallengeFromCode(code: string, id: number): NibbleChallenge | null {
  // 太短不生成挑战
  if (code.length < 20) return null

  const firstLine = code.split('\n')[0].slice(0, 40)
  const difficulty: NibbleChallenge['difficulty'] = code.length > 300 ? 'hard' : code.length > 100 ? 'medium' : 'easy'

  return {
    id,
    title: `挑战 ${id}：理解代码`,
    description: `阅读以下从网页提取的代码，尝试修改使其输出不同的结果，或解释代码的作用。`,
    difficulty,
    initialCode: code,
    expectedOutput: undefined,
    hint: `参考原代码：${firstLine}...，尝试改变变量值或输出内容。`,
  }
}

// ========================= 一站式蚕食入口 =========================

/** 蚕食一个网址 → 返回关卡化结果 */
export async function nibbleWebsite(url: string): Promise<NibbleResult> {
  const html = await fetchHtml(url)
  const result = nibbleToLevels(html, url)
  if (result.levels.length === 0) {
    throw new Error('解析完成但未提取到有效学习内容，该网站可能主要靠 JS 动态渲染。')
  }
  return result
}
