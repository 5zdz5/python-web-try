/**
 * pack34 代码库索引器（Codebase Indexer）
 *
 * 目标：让 Agent 能读取自身代码库，构建知识库供本地 LLM / 外部 LLM（Kimi）分析，
 *      从而实现代码层面的自优化。
 *
 * 技术方案（浏览器端）：
 *   Vite 支持 import.meta.glob(pattern, { as: 'raw', eager: false })
 *   可把 src/** 下的源码以字符串形式按模块懒加载，不影响首屏 bundle 体积。
 *
 * 能力：
 *   1) 枚举项目文件（按路径）
 *   2) 读取源码字符串
 *   3) 计算文件哈希（检测变更）
 *   4) 提取关键词标签（基于 import/export/函数名，便于倒排检索）
 *   5) 生成文件摘要（基于头部注释 + import 列表，避免过长）
 *   6) 构建关键词倒排索引：关键词 → 文件路径列表
 */
import type { CodeFileEntry, CodebaseIndex } from '../types/ai'

/** 支持的扩展名 → language */
const EXT_TO_LANG: Record<string, CodeFileEntry['language']> = {
  '.ts': 'typescript',
  '.tsx': 'tsx',
  '.js': 'javascript',
  '.jsx': 'jsx',
  '.css': 'css',
  '.json': 'json',
  '.md': 'markdown',
  '.html': 'html',
}

/** Vite raw glob：懒加载 src/** 下所有代码文本（只加载有需要的模块） */
const rawGlob = import.meta.glob(
  '../**/*.{ts,tsx,js,jsx,css,json,md,html}',
  { as: 'raw', eager: false },
) as Record<string, () => Promise<string>>

/** 内容哈希（djb2 变体，纯前端，不含 crypto） */
function hashContent(text: string): string {
  let h = 5381
  for (let i = 0; i < text.length; i++) {
    h = ((h << 5) + h + text.charCodeAt(i)) | 0
  }
  // 输出无符号十六进制
  return (h >>> 0).toString(16).padStart(8, '0')
}

/** 从 import / export 语句以及函数名中提取关键词标签 */
function extractTags(content: string): string[] {
  const tags = new Set<string>()

  // export function xxx / export const xxx =
  const expRe = /export\s+(?:function|const|let|var|class|interface|type|enum)\s+([A-Za-z_$][\w$]*)/g
  for (const m of content.matchAll(expRe)) tags.add(m[1])

  // import { Xxx } / import Xxx from
  const impRe1 = /import\s*\{([^}]+)\}/g
  for (const m of content.matchAll(impRe1)) {
    for (const name of m[1].split(',')) {
      const n = name.trim().split(/\s+as\s+/).pop()?.trim()
      if (n) tags.add(n.replace(/[^\w$]/g, ''))
    }
  }
  const impRe2 = /import\s+([A-Za-z_$][\w$]*)\s+from/g
  for (const m of content.matchAll(impRe2)) tags.add(m[1])

  // 函数定义（非 export）
  const fnRe = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g
  for (const m of content.matchAll(fnRe)) tags.add(m[1])

  // 去除单字符标签和明显无意义的标签
  return Array.from(tags).filter(t => t.length > 2).slice(0, 60)
}

/** 从源码生成简短摘要（取顶部注释 + import 行数 + 导出符号数） */
function summarize(path: string, content: string): string {
  const lines = content.split(/\r?\n/)
  const header: string[] = []
  for (const line of lines.slice(0, 20)) {
    if (line.startsWith('/**') || line.startsWith(' *') || line.startsWith(' */')
      || line.startsWith('//') || line.trim().length === 0) {
      if (line.trim()) header.push(line.trim())
      continue
    }
    break
  }
  const importCount = (content.match(/^\s*import\s/gm) || []).length
  const exportCount = (content.match(/^\s*export\s/gm) || []).length
  const lineCount = lines.length
  const headStr = header.length > 0
    ? header.slice(0, 3).join(' ').slice(0, 160)
    : '(无文件注释)'
  return `${path}：${headStr}（${lineCount}行，${importCount}个import，${exportCount}个export）`
}

/** Vite import.meta.glob 路径形如 "../ai/foo.ts"，标准化为相对路径 */
function normalizePath(vitePath: string): string {
  // "../ai/foo.ts" → "src/ai/foo.ts"
  const cleaned = vitePath.replace(/^\.\.\//, '')
  return cleaned.startsWith('src/') ? cleaned : `src/${cleaned}`
}

/** 返回所有已知文件路径（不加载内容） */
export function listIndexedFiles(): string[] {
  return Object.keys(rawGlob).map(normalizePath)
}

/** 读取单个文件内容并构建 CodeFileEntry */
export async function readFileEntry(vitePatternPath: string): Promise<CodeFileEntry> {
  const content = await rawGlob[vitePatternPath]()
  const path = normalizePath(vitePatternPath)
  const dot = path.lastIndexOf('.')
  const ext = dot >= 0 ? path.slice(dot).toLowerCase() : ''
  const language: CodeFileEntry['language'] = EXT_TO_LANG[ext] || 'other'
  const lineCount = (content.match(/\r?\n/g) || []).length + 1
  const sizeBytes = new Blob([content]).size
  const hash = hashContent(content)
  const tags = extractTags(content)
  return {
    path,
    content,
    language,
    sizeBytes,
    lineCount,
    hash,
    tags,
    keywords: tags,
  }
}

/**
 * 构建完整的代码库索引（含内容的副本）。
 * 注意：为避免首次调用时间过长，按批次加载；
 *       用户可通过 maxFiles 控制一次性加载的文件数。
 */
export async function buildCodebaseIndex(maxFiles = 120): Promise<CodebaseIndex> {
  const paths = Object.keys(rawGlob).slice(0, maxFiles)
  const files: CodeFileEntry[] = await Promise.all(paths.map(readFileEntry))

  const keywordIndex: Record<string, string[]> = {}
  const fileSummaries: Record<string, string> = {}
  let totalLines = 0
  let totalSize = 0
  let summaryLines = 0

  for (const f of files) {
    totalLines += f.lineCount
    totalSize += f.sizeBytes
    const s = summarize(f.path, f.content)
    fileSummaries[f.path] = s
    summaryLines += (s.match(/\r?\n/g) || []).length + 1
    for (const tag of f.tags) {
      if (!keywordIndex[tag]) keywordIndex[tag] = []
      keywordIndex[tag].push(f.path)
    }
  }

  return {
    indexedAt: new Date().toISOString(),
    totalFiles: files.length,
    totalLines,
    totalSizeBytes: totalSize,
    files,
    keywordIndex,
    fileSummaries,
    summaryLines,
    totalKeywords: Object.keys(keywordIndex).length,
  }
}

/**
 * 生成适合塞进 LLM 上下文的代码库摘要（避免 token 爆炸）。
 * 策略：包含所有路径 + 简短摘要，而不包含每个文件的全文。
 */
export function buildLLMCodeContext(index: CodebaseIndex, maxSummaryLines = 200): string {
  const header =
    `# 项目代码库摘要（python-quest / React + Vite + TS）\n` +
    `- 总文件数：${index.totalFiles}\n` +
    `- 总行数：${index.totalLines.toLocaleString()}\n` +
    `- 总大小：${(index.totalSizeBytes / 1024).toFixed(1)} KB\n` +
    `- 索引时间：${index.indexedAt}\n\n` +
    `## 关键模块目录\n` +
    `  - src/ai/           AI 代理核心（优化器/LLM客户端/元逻辑/本地推理）\n` +
    `  - src/context/      React Context（AIAgent/Monitor/Pyodide/Progress）\n` +
    `  - src/components/   通用组件 + AIAgentPanel\n` +
    `  - src/pages/        路由页面（受保护的 Home 在 pages/Home/）\n` +
    `  - src/types/        TS 类型定义（ai.ts 是核心）\n` +
    `  - src/data/         关卡与课程内容（lessonContent）\n\n` +
    `## 文件摘要（仅列 ${Math.min(maxSummaryLines, index.files.length)} 个）：\n`
  const body = index.files
    .slice(0, maxSummaryLines)
    .map(f => `  - ${f.path} [${f.language}, ${f.lineCount}行, ${f.tags.slice(0, 5).join(',')}]`)
    .join('\n')
  const tail =
    `\n\n## 搜索提示（关键词倒排，仅展示高频）：\n` +
    Object.entries(index.keywordIndex)
      .filter(([, v]) => v.length >= 2)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 40)
      .map(([k, v]) => `  ${k} → [${v.length}] ${v.slice(0, 3).join(', ')}${v.length > 3 ? '…' : ''}`)
      .join('\n')
  return header + body + tail
}

/**
 * 通过关键词搜索文件（用于本地 LLM 在检索时快速找文件）
 */
export function searchFilesByKeyword(index: CodebaseIndex, keyword: string): string[] {
  const kw = keyword.trim()
  if (!kw) return []
  const exact = index.keywordIndex[kw] || []
  const fuzzy = Object.entries(index.keywordIndex)
    .filter(([k]) => k.toLowerCase().includes(kw.toLowerCase()))
    .flatMap(([, v]) => v)
  // 合并去重
  return Array.from(new Set([...exact, ...fuzzy]))
}

/**
 * 查找与目标路径相同目录/相邻目录的"邻居文件"（用于给 LLM 上下文补全）
 */
export function getNeighborFiles(index: CodebaseIndex, filePath: string, limit = 8): string[] {
  const dir = filePath.slice(0, filePath.lastIndexOf('/') + 1)
  return index.files
    .filter(f => f.path !== filePath && f.path.startsWith(dir))
    .map(f => f.path)
    .slice(0, limit)
}
