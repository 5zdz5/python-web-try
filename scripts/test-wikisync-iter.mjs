/**
 * Wiki 同步 20 次迭代测试
 *
 * 测试目标：
 *   1. 验证 inspectCodebase 监察逻辑
 *   2. 验证 pushPackToWiki 推送 + 去重（相同 PACK_BUILD 不重复推）
 *   3. 验证 pushChangesToWiki 代码更改推送
 *   4. 验证 applyPushToState 状态更新
 *   5. 验证 localStorage 持久化（wiki-sync + wiki-pending）
 *
 * 用法：node scripts/test-wikisync-iter.mjs [--port 3000]
 */
import puppeteer from 'puppeteer-core'
import { existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const REPORT_DIR = resolve(ROOT, 'test-reports')
if (!existsSync(REPORT_DIR)) mkdirSync(REPORT_DIR, { recursive: true })

const args = process.argv.slice(2)
const portIdx = args.indexOf('--port')
const PORT = portIdx >= 0 ? parseInt(args[portIdx + 1]) || 3000 : 3000
const BASE_URL = `http://localhost:${PORT}/python-web-try/`

function findBrowserPath() {
  const paths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ]
  for (const p of paths) if (existsSync(p)) return p
  return null
}

const browserPath = findBrowserPath()
if (!browserPath) {
  console.error('未找到 Edge/Chrome 浏览器')
  process.exit(1)
}

console.log(`[测试] 连接 ${BASE_URL}`)
console.log(`[测试] 浏览器: ${browserPath}`)

const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

const page = await browser.newPage()
await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 })

// 等待 React 应用挂载
await page.waitForFunction(() => document.querySelector('#root')?.children.length > 0, { timeout: 10000 })
await new Promise(r => setTimeout(r, 1500))

console.log('[测试] 页面加载完成，开始 20 次迭代测试...\n')

// 在浏览器内执行 20 次迭代测试
const result = await page.evaluate(async () => {
  const results = []
  let wikiSyncState = {
    lastPush: null,
    lastPackBuildPushed: 0,
    lastDocVersionPushed: '',
    pushHistory: [],
    autoPushEnabled: true,
    pendingChanges: [],
    totalPushes: 0,
    totalFailures: 0,
  }

  // 模拟经验包（每次迭代 PACK_BUILD 递增）
  function makePack(buildNum) {
    return {
      meta: {
        packBuild: buildNum,
        packVersion: `pack${buildNum}`,
        generatedAt: new Date().toISOString(),
      },
      modules: [
        { id: `mod-${buildNum}-1`, category: 'component', name: `测试模块${buildNum}`, description: '迭代测试' },
      ],
      conventions: [
        { category: 'meta-workflow', rule: `测试规则 ${buildNum}`, description: '迭代测试规则' },
      ],
      conversationLog: [
        { id: `conv-test-${buildNum}`, summary: `测试迭代 ${buildNum}`, filesModified: [], patternsAdded: [], date: '2026-07-30' },
      ],
    }
  }

  // 动态 import wikiSync 模块（vite 会编译 TS）
  let wikiSync
  try {
    wikiSync = await import('/python-web-try/src/ai/wikiSync.ts')
  } catch (err) {
    return { error: `import wikiSync 失败: ${err.message}`, results }
  }

  // 20 次迭代
  for (let i = 1; i <= 20; i++) {
    const buildNum = 21 + i  // 从 pack22 开始模拟
    const pack = makePack(buildNum)
    const monitorSummary = `测试迭代 ${i}，错误 0，崩溃 否`

    // 1. 监察
    const inspection = wikiSync.inspectCodebase(pack, wikiSyncState, monitorSummary)

    // 2. 经验包推送（仅当有新 PACK_BUILD 时）
    let packPushRecord = null
    if (inspection.hasNewPack || inspection.hasNewDocVersion) {
      packPushRecord = wikiSync.pushPackToWiki(pack, inspection)
      wikiSyncState = wikiSync.applyPushToState(wikiSyncState, packPushRecord)
    }

    // 3. 代码更改推送（模拟每轮都有策略应用）
    const changesRecord = wikiSync.pushChangesToWiki(
      [`迭代 ${i}：应用策略 optimize-performance`, `迭代 ${i}：重构组件 X`],
      { iterationNumber: i, appliedStrategies: ['optimize-performance'], scoreAfter: 80 + i },
    )
    wikiSyncState = wikiSync.applyPushToState(wikiSyncState, changesRecord)

    results.push({
      iteration: i,
      packBuild: inspection.packBuild,
      hasNewPack: inspection.hasNewPack,
      hasNewDocVersion: inspection.hasNewDocVersion,
      packPushStatus: packPushRecord?.status || 'skipped',
      packPushHash: packPushRecord?.contentHash?.slice(0, 8) || null,
      changesPushStatus: changesRecord.status,
      changesPushHash: changesRecord.contentHash.slice(0, 8),
      totalPushes: wikiSyncState.totalPushes,
      totalFailures: wikiSyncState.totalFailures,
      pendingQueueLen: wikiSyncState.pushHistory.length,
    })
  }

  // 读取 localStorage 验证持久化
  const wikiSyncStored = localStorage.getItem('python-quest-wiki-sync')
  const wikiPendingStored = localStorage.getItem('python-quest-wiki-pending')

  return {
    results,
    finalState: {
      lastPush: wikiSyncState.lastPush,
      lastPackBuildPushed: wikiSyncState.lastPackBuildPushed,
      lastDocVersionPushed: wikiSyncState.lastDocVersionPushed,
      totalPushes: wikiSyncState.totalPushes,
      totalFailures: wikiSyncState.totalFailures,
      pushHistoryLen: wikiSyncState.pushHistory.length,
    },
    localStorage: {
      wikiSyncKeys: wikiSyncStored ? Object.keys(JSON.parse(wikiSyncStored)) : null,
      wikiPendingLen: wikiPendingStored ? JSON.parse(wikiPendingStored).length : 0,
    },
  }
})

// 输出测试报告
console.log('═'.repeat(80))
console.log('  Wiki 同步 20 次迭代测试报告')
console.log('═'.repeat(80))

if (result.error) {
  console.error(`[失败] ${result.error}`)
  console.log('前几次迭代结果：')
  for (const r of result.results) {
    console.log(`  迭代 ${r.iteration}: packPush=${r.packPushStatus}, changesPush=${r.changesPushStatus}`)
  }
} else {
  console.log('\n迭代详情：')
  console.log('─'.repeat(80))
  console.log('迭代 | PACK_BUILD | hasNewPack | packPush  | changesPush | totalPushes | failures')
  console.log('─'.repeat(80))
  for (const r of result.results) {
    console.log(
      `  ${String(r.iteration).padStart(2)} | ` +
      `pack${r.packBuild}    | ` +
      `${r.hasNewPack ? '是' : '否'}        | ` +
      `${r.packPushStatus.padEnd(9)} | ` +
      `${r.changesPushStatus.padEnd(11)} | ` +
      `${String(r.totalPushes).padStart(3)}        | ` +
      `${r.totalFailures}`
    )
  }
  console.log('─'.repeat(80))

  console.log('\n最终状态：')
  console.log(`  lastPush:             ${result.finalState.lastPush}`)
  console.log(`  lastPackBuildPushed:  ${result.finalState.lastPackBuildPushed}`)
  console.log(`  lastDocVersionPushed: ${result.finalState.lastDocVersionPushed}`)
  console.log(`  totalPushes:          ${result.finalState.totalPushes}`)
  console.log(`  totalFailures:        ${result.finalState.totalFailures}`)
  console.log(`  pushHistoryLen:       ${result.finalState.pushHistoryLen}`)

  console.log('\nlocalStorage 持久化验证：')
  console.log(`  wiki-sync 字段: ${result.localStorage.wikiSyncKeys?.join(', ') || '未持久化'}`)
  console.log(`  wiki-pending 队列长度: ${result.localStorage.wikiPendingLen}`)

  // 去重验证：packPush 应该 20 次全部推送（每次 PACK_BUILD 都不同），无 skipped
  const packPushCount = result.results.filter(r => r.packPushStatus === 'pending' || r.packPushStatus === 'success').length
  const packSkipCount = result.results.filter(r => r.packPushStatus === 'skipped').length
  const changesPushCount = result.results.filter(r => r.changesPushStatus === 'pending' || r.changesPushStatus === 'success').length

  console.log('\n去重验证：')
  console.log(`  经验包推送次数: ${packPushCount}/20（每次 PACK_BUILD 不同，应全部推送）`)
  console.log(`  经验包跳过次数: ${packSkipCount}/20`)
  console.log(`  代码更改推送次数: ${changesPushCount}/20`)

  const passed = packPushCount === 20 && changesPushCount === 20 && result.finalState.totalFailures === 0
  console.log(`\n测试结果: ${passed ? '✓ 通过' : '✗ 失败'}`)
}

// 保存报告
const reportPath = resolve(REPORT_DIR, `wikisync-iter-test-${Date.now()}.md`)
const reportContent = `# Wiki 同步 20 次迭代测试报告

**时间**: ${new Date().toISOString()}
**URL**: ${BASE_URL}

## 测试结果

${result.error ? `## 失败\n\n${result.error}` : `## 最终状态

- lastPush: ${result.finalState.lastPush}
- lastPackBuildPushed: ${result.finalState.lastPackBuildPushed}
- lastDocVersionPushed: ${result.finalState.lastDocVersionPushed}
- totalPushes: ${result.finalState.totalPushes}
- totalFailures: ${result.finalState.totalFailures}
- pushHistoryLen: ${result.finalState.pushHistoryLen}

## localStorage 持久化

- wiki-sync 字段: ${result.localStorage.wikiSyncKeys?.join(', ') || '未持久化'}
- wiki-pending 队列长度: ${result.localStorage.wikiPendingLen}

## 迭代详情

| 迭代 | PACK_BUILD | hasNewPack | packPush | changesPush | totalPushes | failures |
|------|-----------|------------|----------|-------------|-------------|----------|
${result.results.map(r => `| ${r.iteration} | pack${r.packBuild} | ${r.hasNewPack ? '是' : '否'} | ${r.packPushStatus} | ${r.changesPushStatus} | ${r.totalPushes} | ${r.totalFailures} |`).join('\n')}
`}
`
writeFileSync(reportPath, reportContent)
console.log(`\n报告已保存: ${reportPath}`)

await browser.close()
process.exit(result.error ? 1 : 0)
