/**
 * 内容一致性校验脚本
 * 用法：node scripts/validate-content.mjs
 *
 * 校验项（迭代时自动发现缺漏，避免手动维护漏项）：
 *   1. mockData.levels 的 id 必须从 1..N 连续
 *   2. 每个 level.lessons/challenges 必须 >= 0
 *   3. lessonContent 必须包含所有关卡 id（1..N），且每个关卡至少 1 个 step
 *   4. runoobTopics 中若存在 href=#/level/N 则 N 必须在 mockData.levels 范围内
 *   5. mockData 中所有 level.category 必须存在于 CATEGORY_ORDER
 *   6. 检测 lessonContent 里 JavaScript 模板字符串中未转义的 ${..} （除合理 JS 外）
 *   7. 统计输出：关卡数 / 总课时 / 总挑战 / 平均难度 / 各分类关卡数
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

function read(p) {
  return readFileSync(resolve(ROOT, p), 'utf8')
}

// ===== 简单解析 mockData.ts / runoobTopics.ts / lessonContent.ts =====
const levelsText = read('src/data/mockData.ts')
const runoobText = read('src/data/runoobTopics.ts')
const lessonText = read('src/data/lessonContent.ts')
const typesText = read('src/types/index.ts')
const catsText = read('src/config/categories.ts')

const errors = []
const warnings = []
function fail(msg) {
  errors.push('  ❌ ' + msg)
}
function warn(msg) {
  warnings.push('  ⚠️ ' + msg)
}

// 1. 提取 levels 数组块（只取 export const levels: Level[] = [ ... ]; 的内部）
// 定位起始行和结尾行，避免取到文件中其它数组/对象
const levelsStartRe = /export\s+const\s+levels\s*:\s*Level\[\]\s*=\s*\[/
const startMatch = levelsText.match(levelsStartRe)
const levelsBlockStart = startMatch ? startMatch.index : -1

// 从起点开始，找到真实数组起始 "= [" 之后才开始计数 depth（避开 TS 类型 Level[] 的方括号）
const rest = levelsBlockStart >= 0 ? levelsText.slice(levelsBlockStart) : levelsText
let levelsBlock = rest
if (levelsBlockStart >= 0) {
  let depth = 0
  let endIdx = -1
  let inStr = null
  let escape = false
  let startedCounting = false
  for (let i = 0; i < rest.length; i++) {
    const ch = rest[i]
    if (inStr) {
      if (escape) { escape = false; continue }
      if (ch === '\\') { escape = true; continue }
      if (ch === inStr) inStr = null
      continue
    }
    if (ch === "'" || ch === '"' || ch === '`') { inStr = ch; continue }
    if (!startedCounting) {
      if (ch === '=' && /^=\s*\[/.test(rest.slice(i, i + 10))) {
        const bracketPos = rest.slice(i).indexOf('[')
        i = i + bracketPos
        startedCounting = true
        depth = 1
        continue
      }
      continue
    }
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) { endIdx = i + 1; break }
    }
  }
  if (endIdx > 0) levelsBlock = rest.slice(0, endIdx)
}

// 1. 提取 level ids：每个 levels 数组元素里的"id: N,"（跨 { 换行后的 id 行）
//   匹配在对象内的 id: N，其中 N 不是其它变量/键。levels 数组里每个对象都是 { id: 数字, ... }
const levelIds = [...levelsBlock.matchAll(/^\s*id:\s*(\d+),/gm)].map((m) => Number(m[1]))
if (levelIds.length === 0) {
  fail('mockData.ts 没有抓到任何关卡 id（正则异常）')
} else {
  const expected = levelIds.sort((a, b) => a - b)
  if (expected[0] !== 1) fail(`level id 起始应当为 1，实际是 ${expected[0]}`)
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== i + 1) fail(`level id 缺失或不连续：缺少 ${i + 1}`)
  }
}
const totalLevels = levelIds.length

// 2. lessons/challenges >= 1（抓每个关卡对象内的 lessons/challenges）
//    技巧：由于每个关卡对象都以 id: N, 开头后再以 id: N+1, 前结束，
//    我们先按行顺序把 levelBlock 切成 chunk，每个 chunk 对应一个关卡，再抓内部字段
const lines = levelsBlock.split('\n')
const chunksByLevelId = new Map()
let curChunk = []
let curId = null
for (const line of lines) {
  const idm = line.match(/^\s*id:\s*(\d+),/)
  if (idm) {
    if (curId !== null) chunksByLevelId.set(curId, curChunk.join('\n'))
    curId = Number(idm[1])
    curChunk = [line]
  } else if (curId !== null) {
    curChunk.push(line)
  }
}
if (curId !== null) chunksByLevelId.set(curId, curChunk.join('\n'))

for (const id of levelIds) {
  const chunk = chunksByLevelId.get(id)
  if (!chunk) { fail(`Level ${id}: 未找到关卡块`); continue }
  const lm = chunk.match(/\blessons:\s*(\d+)/)
  const cm = chunk.match(/\bchallenges:\s*(\d+)/)
  if (!lm || !cm) { fail(`Level ${id}: 未找到 lessons/challenges 字段`); continue }
  const l = Number(lm[1]); const c = Number(cm[1])
  if (l < 1) fail(`Level ${id}: lessons=${l} 必须 >= 1`)
  if (c < 1) fail(`Level ${id}: challenges=${c} 必须 >= 1`)
}

// 3. lessonContent 中每个关卡存在且至少 1 step
//    lessonContent 以 N: [ 开头，数组长度至少 > 0
const lessonKeys = [...lessonText.matchAll(/^\s*(\d+):\s*\[/gm)].map((m) => Number(m[1]))
for (let id = 1; id <= totalLevels; id++) {
  if (!lessonKeys.includes(id)) {
    fail(`lessonContent.ts 缺少关卡 id=${id}`)
  }
}
for (const id of lessonKeys) {
  if (id < 1 || id > totalLevels) {
    warn(`lessonContent.ts 存在多余关卡 id=${id}（超过 mockData 的 ${totalLevels}）`)
  }
}

// 4. runoobTopics href=#/level/N 必须存在
const hrefLevelNums = [...runoobText.matchAll(/#\/level\/(\d+)/g)].map((m) => Number(m[1]))
for (const n of hrefLevelNums) {
  if (n < 1 || n > totalLevels) fail(`runoobTopics.ts href=#/level/${n} 指向不存在的关卡`)
}

// 5. category 合法
const allowedCategoryRegex = /CATEGORY_ORDER\s*:\s*LevelCategory\[\]\s*=\s*\[([\s\S]*?)\]/
const catMatch = catsText.match(allowedCategoryRegex)
let allowedCats = new Set()
if (catMatch) {
  allowedCats = new Set([...catMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]))
} else {
  // fallback：解析 types/index.ts LevelCategory
  const fallback = [...typesText.matchAll(/\|\s*'([^']+)'/g)].map((m) => m[1])
  allowedCats = new Set(fallback)
}
const levelCats = [...levelsBlock.matchAll(/category:\s*'([^']+)'/g)].map((m) => m[1])
for (const cat of levelCats) {
  if (!allowedCats.has(cat)) fail(`存在未知分类 category:'${cat}'，不在分类集合中`)
}

// 6. 检测未转义的 ${...}：在 content: `....` / code: `....` 字符串块里
//    粗略检测：content 反引号块中如果出现 ${ 且前面没有反斜杠，则算隐患（不区分 JS 合法插值 vs 字符串内容）
//    只做 warn，因为某些合法描述里会提到 ${变量名}，但转义过会写成 \${
function findDangerousDollar() {
  const re = /(content|code):\s*`([^`]*(?<!\\)\$\{[^`]+)`/g
  let m
  const out = []
  while ((m = re.exec(lessonText)) !== null) {
    // 粗略算行号
    const pre = lessonText.slice(0, m.index)
    const line = pre.split('\n').length
    out.push({ line })
  }
  return out
}
const risky = findDangerousDollar()
if (risky.length) {
  warn(`lessonContent.ts 中有 ${risky.length} 处反引号字符串内出现未转义 \${...}：行号 ${risky.slice(0, 8).map(r => r.line).join(', ')}${risky.length > 8 ? '...' : ''}（可能是合法内容，也可能导致 ReferenceError）`)
}

// 7. 统计信息（同样只在 levelsBlock 中提取，避免 totalLevels/totalProgress 等混淆）
const totalLessons = [...levelsBlock.matchAll(/\blessons:\s*(\d+)/g)].reduce((s, m) => s + Number(m[1]), 0)
const totalChallenges = [...levelsBlock.matchAll(/\bchallenges:\s*(\d+)/g)].reduce((s, m) => s + Number(m[1]), 0)
const difficulties = [...levelsBlock.matchAll(/\bdifficulty:\s*(\d+)/g)].map((m) => Number(m[1]))
const avgDiff = (difficulties.reduce((s, d) => s + d, 0) / Math.max(1, difficulties.length)).toFixed(2)
const catCount = {}
for (const c of levelCats) catCount[c] = (catCount[c] || 0) + 1

// ===== 输出 =====
console.log('\n📋 内容一致性校验报告')
console.log('='.repeat(50))
console.log('📊 统计：')
console.log(`  关卡总数      : ${totalLevels}`)
console.log(`  课时总数      : ${totalLessons}`)
console.log(`  挑战总数      : ${totalChallenges}`)
console.log(`  平均难度      : ${avgDiff}`)
console.log(`  分类关卡数    :`, catCount)
console.log(`  Runoob 卡片数 : ${[...runoobText.matchAll(/^\s*\{/gm)].length - 0} (估算)`)
console.log('')

if (warnings.length) {
  console.log('⚠️  Warnings:')
  warnings.forEach((w) => console.log(w))
  console.log('')
}

if (errors.length) {
  console.log('❌  Errors:')
  errors.forEach((e) => console.log(e))
  console.log('')
  console.log(`❌ 校验失败：${errors.length} 个错误`)
  process.exit(1)
} else {
  console.log('✅  校验通过：0 个错误')
  if (!warnings.length) console.log('✅  0 个警告')
  process.exit(0)
}
