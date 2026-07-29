/**
 * Python Quest 自动化 E2E 测试程序
 *
 * 功能：
 *   1. 自动启动 dev server（如果未运行）
 *   2. 使用系统 Edge/Chrome 浏览器打开网页
 *   3. 自动点击、切换、导航各页面
 *   4. 捕获控制台错误和页面异常
 *   5. 生成 Markdown 测试报告
 *   6. 支持 --loop N 参数进行 N 轮迭代测试
 *   7. 支持 --headed 参数显示浏览器窗口
 *
 * 用法：
 *   node scripts/auto-e2e.mjs              # 单次测试
 *   node scripts/auto-e2e.mjs --headed     # 显示浏览器窗口
 *   node scripts/auto-e2e.mjs --loop 5    # 循环 5 轮
 *   node scripts/auto-e2e.mjs --port 3006  # 指定端口
 */
import puppeteer from 'puppeteer-core'
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const REPORT_DIR = resolve(ROOT, 'test-reports')

// 确保 report 目录存在
if (!existsSync(REPORT_DIR)) mkdirSync(REPORT_DIR, { recursive: true })

// ===== 参数解析 =====
const args = process.argv.slice(2)
const HEADED = args.includes('--headed')
const loopIdx = args.indexOf('--loop')
const LOOP_COUNT = loopIdx >= 0 ? Math.max(1, parseInt(args[loopIdx + 1]) || 1) : 1
const portIdx = args.indexOf('--port')
const PORT = portIdx >= 0 ? parseInt(args[portIdx + 1]) || 3006 : 3006
const BASE_URL = `http://localhost:${PORT}/python-web-try/`

// ===== 工具函数 =====
function ts() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

/** 查找系统 Edge/Chrome 可执行文件 */
function findBrowserPath() {
  const paths = [
    // Edge
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    // Chrome
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ]
  for (const p of paths) {
    if (existsSync(p)) return p
  }
  return null
}

/** 检查 dev server 是否在运行 */
async function checkServer() {
  try {
    const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(3000) })
    return res.ok
  } catch {
    return false
  }
}

/** 启动 dev server */
function startDevServer() {
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  const child = spawn(npmCmd, ['run', 'dev', '--', '--port', String(PORT), '--host'], {
    cwd: ROOT,
    stdio: 'pipe',
    shell: true,
  })
  child.stdout?.on('data', () => {})
  child.stderr?.on('data', () => {})
  return child
}

// ===== 测试定义 =====
const TEST_ROUTES = [
  { name: '首页', path: '#/', desc: 'Hero 区域 + 统计数据 + 版本号' },
  { name: '关卡地图', path: '#/map', desc: '分类标签 + 关卡卡片 + 无敌模式' },
  { name: '第1关详情', path: '#/level/1', desc: '课程步骤 + 挑战 + 拓展卡片' },
  { name: '第50关详情', path: '#/level/50', desc: '空挑战状态 + 课程内容' },
  { name: '第60关详情', path: '#/level/60', desc: '最后一关内容验证' },
  { name: '源码探索', path: '#/source', desc: '5个Tab切换 + 统计数据' },
  { name: '学习路径', path: '#/path', desc: '学习路径页面' },
  { name: '成就', path: '#/achievements', desc: '成就页面' },
  { name: '排行榜', path: '#/leaderboard', desc: '排行榜页面' },
]

// ===== Puppeteer 辅助函数 =====
/** 安全获取页面文本 */
async function getBodyText(page) {
  try {
    return await page.evaluate(() => document.body?.innerText || '')
  } catch {
    return ''
  }
}

/** 安全等待选择器可见 */
async function waitForSelector(page, selector, timeout = 3000) {
  try {
    await page.waitForSelector(selector, { visible: true, timeout })
    return true
  } catch {
    return false
  }
}

/** 安全点击元素 */
async function safeClick(page, selector) {
  try {
    await page.click(selector, { timeout: 3000 })
    return true
  } catch {
    return false
  }
}

/** 安全点击包含特定文本的按钮 */
async function clickButtonWithText(page, text) {
  try {
    const clicked = await page.evaluate((btnText) => {
      const buttons = document.querySelectorAll('button')
      for (const btn of buttons) {
        if (btn.textContent && btn.textContent.includes(btnText)) {
          btn.click()
          return true
        }
      }
      return false
    }, text)
    return clicked
  } catch {
    return false
  }
}

// ===== 测试执行器 =====
async function runOneIteration(browser, round) {
  const results = []
  const consoleErrors = []
  const pageErrors = []

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })

  // 捕获控制台错误
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text()
      // 忽略非关键警告
      if (!text.includes('React DevTools') && !text.includes('Download the React')) {
        consoleErrors.push({ url: page.url(), text })
      }
    }
  })

  // 捕获页面崩溃
  page.on('pageerror', (err) => {
    pageErrors.push({ url: page.url(), text: err.message })
  })

  // 1. 路由可达性测试
  for (const route of TEST_ROUTES) {
    try {
      await page.goto(BASE_URL + route.path, { waitUntil: 'domcontentloaded', timeout: 10000 })
      await sleep(500)

      const bodyText = await getBodyText(page)
      const hasContent = bodyText.trim().length > 50

      results.push({
        category: '路由测试',
        name: route.name,
        url: route.path,
        desc: route.desc,
        status: hasContent ? 'PASS' : 'FAIL',
        detail: hasContent ? '页面正常加载' : '页面内容为空',
      })
    } catch (err) {
      results.push({
        category: '路由测试',
        name: route.name,
        url: route.path,
        desc: route.desc,
        status: 'ERROR',
        detail: err.message,
      })
    }
  }

  // 2. 404路由重定向测试
  try {
    await page.goto(BASE_URL + '#/nonexistent', { waitUntil: 'domcontentloaded', timeout: 10000 })
    await sleep(800)
    const url = page.url()
    const redirected = url.includes('#/') && !url.includes('nonexistent')
    results.push({
      category: '交互测试',
      name: '404路由重定向',
      url: '#/nonexistent',
      desc: '期望: 重定向到首页',
      status: redirected ? 'PASS' : 'FAIL',
      detail: redirected ? '正确重定向到首页' : `未重定向，当前URL: ${url}`,
    })
  } catch (err) {
    results.push({
      category: '交互测试',
      name: '404路由重定向',
      url: '#/nonexistent',
      desc: '期望: 重定向到首页',
      status: 'ERROR',
      detail: err.message,
    })
  }

  // 3. 无效关卡ID测试
  for (const [label, path] of [['无效关卡ID(999)', '#/level/999'], ['无效关卡ID(abc)', '#/level/abc']]) {
    try {
      await page.goto(BASE_URL + path, { waitUntil: 'domcontentloaded', timeout: 10000 })
      await sleep(800)
      const text = await getBodyText(page)
      const hasNotFound = text.includes('关卡不存在') || text.includes('找不到')
      results.push({
        category: '交互测试',
        name: label,
        url: path,
        desc: '期望: 显示关卡不存在',
        status: hasNotFound ? 'PASS' : 'FAIL',
        detail: hasNotFound ? '正确显示关卡不存在' : '未显示关卡不存在提示',
      })
    } catch (err) {
      results.push({
        category: '交互测试',
        name: label,
        url: path,
        desc: '期望: 显示关卡不存在',
        status: 'ERROR',
        detail: err.message,
      })
    }
  }

  // 4. 关卡地图 - 无敌模式 + 关卡点击测试
  try {
    await page.goto(BASE_URL + '#/map', { waitUntil: 'domcontentloaded', timeout: 10000 })
    await sleep(500)

    // 点击无敌模式按钮
    const godBtnExists = await waitForSelector(page, '.god-mode-btn')
    if (godBtnExists) {
      await safeClick(page, '.god-mode-btn')
      await sleep(300)
      const text = await getBodyText(page)
      // 无敌模式开启后按钮文案变为"按进度解锁"，或页面显示"无敌模式"状态
      const hasUnlocked = text.includes('无敌模式') || text.includes('按进度解锁')

      // 点击一个关卡卡片
      const clicked = await page.evaluate(() => {
        const nodes = document.querySelectorAll('.map-node')
        for (const node of nodes) {
          const text = node.textContent || ''
          if (text.includes('第') && !text.includes('🔒')) {
            node.click()
            return true
          }
        }
        return false
      })

      await sleep(500)
      const navigated = page.url().includes('/level/')
      results.push({
        category: '交互测试',
        name: '无敌模式+关卡点击',
        url: '#/map',
        desc: '开启无敌模式后点击关卡卡片跳转',
        status: hasUnlocked && navigated ? 'PASS' : 'FAIL',
        detail: `无敌模式:${hasUnlocked ? '开' : '关'}, 点击:${clicked ? '是' : '否'}, 跳转:${navigated ? '是' : '否'}`,
      })
    } else {
      results.push({
        category: '交互测试',
        name: '无敌模式+关卡点击',
        url: '#/map',
        desc: '未找到无敌模式按钮',
        status: 'FAIL',
        detail: '.god-mode-btn 不存在',
      })
    }
  } catch (err) {
    results.push({
      category: '交互测试',
      name: '无敌模式+关卡点击',
      url: '#/map',
      desc: '测试异常',
      status: 'ERROR',
      detail: err.message,
    })
  }

  // 5. 源码探索Tab切换测试
  try {
    await page.goto(BASE_URL + '#/source', { waitUntil: 'domcontentloaded', timeout: 10000 })
    await sleep(500)

    const tabs = ['总览', '源码结构', '功能清单', '核心原理', '迁移指南']
    let allTabsWork = true
    let tabDetails = []

    for (const tabLabel of tabs) {
      const clicked = await clickButtonWithText(page, tabLabel)
      if (clicked) {
        await sleep(300)
        const bodyText = await getBodyText(page)
        const hasContent = bodyText.trim().length > 100
        if (!hasContent) allTabsWork = false
        tabDetails.push(`${tabLabel}:${hasContent ? '✓' : '✗'}`)
      } else {
        allTabsWork = false
        tabDetails.push(`${tabLabel}:未找到`)
      }
    }

    // 检查统计数据 — 先切回总览tab再检查
    await clickButtonWithText(page, '总览')
    await sleep(300)
    const statsText = await page.evaluate(() => {
      const el = document.querySelector('.overview-stats')
      return el ? el.textContent : ''
    }).catch(() => '')
    const hasStats = statsText && (statsText.includes('关') || statsText.includes('大主题'))

    results.push({
      category: '交互测试',
      name: '源码探索Tab切换',
      url: '#/source',
      desc: '5个Tab切换 + 统计数据验证',
      status: allTabsWork && hasStats ? 'PASS' : 'FAIL',
      detail: `${tabDetails.join(' ')} | 统计:${hasStats ? '✓' : '✗'}`,
    })
  } catch (err) {
    results.push({
      category: '交互测试',
      name: '源码探索Tab切换',
      url: '#/source',
      desc: '测试异常',
      status: 'ERROR',
      detail: err.message,
    })
  }

  // 6. 挑战Tab空状态测试（第50关）
  try {
    await page.goto(BASE_URL + '#/level/50', { waitUntil: 'domcontentloaded', timeout: 10000 })
    await sleep(500)

    // 先滚动到顶部确保Tab可见
    await page.evaluate(() => window.scrollTo(0, 0))
    await sleep(300)
    // 等待页面完全渲染
    await page.waitForSelector('.detail-tabs, .level-detail-page, .tab-bar', { timeout: 5000 }).catch(() => {})
    // 挑战Tab可能需要等待渲染完成
    let clicked = await clickButtonWithText(page, '编程挑战')
    if (!clicked) {
      await sleep(1500)
      clicked = await clickButtonWithText(page, '编程挑战')
    }
    if (!clicked) {
      // 尝试通过CSS选择器点击
      const tabBtns = await page.$$('button')
      for (const btn of tabBtns) {
        const text = await btn.evaluate(el => el.textContent || '')
        if (text.includes('编程挑战') || text.includes('挑战')) {
          await btn.click()
          clicked = true
          break
        }
      }
    }
    if (clicked) {
      await sleep(500)
      const bodyText = await getBodyText(page)
      const hasEmptyState = bodyText.includes('即将上线') || bodyText.includes('🚧')

      results.push({
        category: '交互测试',
        name: '空挑战状态(第50关)',
        url: '#/level/50',
        desc: '验证空挑战显示"即将上线"提示',
        status: hasEmptyState ? 'PASS' : 'FAIL',
        detail: hasEmptyState ? '空状态提示正常' : '未显示空状态提示',
      })
    } else {
      results.push({
        category: '交互测试',
        name: '空挑战状态(第50关)',
        url: '#/level/50',
        desc: '未找到挑战Tab',
        status: 'FAIL',
        detail: '挑战Tab按钮不可见',
      })
    }
  } catch (err) {
    results.push({
      category: '交互测试',
      name: '空挑战状态(第50关)',
      url: '#/level/50',
      desc: '测试异常',
      status: 'ERROR',
      detail: err.message,
    })
  }

  await page.close()

  // 统计
  const passCount = results.filter(r => r.status === 'PASS').length
  const failCount = results.filter(r => r.status === 'FAIL').length
  const errorCount = results.filter(r => r.status === 'ERROR').length

  return {
    round,
    timestamp: new Date().toISOString(),
    results,
    consoleErrors,
    pageErrors,
    summary: {
      total: results.length,
      pass: passCount,
      fail: failCount,
      error: errorCount,
      consoleErrors: consoleErrors.length,
      pageErrors: pageErrors.length,
    },
  }
}

// ===== 报告生成 =====
function generateReport(allResults) {
  const now = ts()
  const reportPath = resolve(REPORT_DIR, `e2e-report-${now}.md`)

  let md = `# Python Quest 自动化 E2E 测试报告\n\n`
  md += `**生成时间**: ${new Date().toLocaleString('zh-CN')}\n`
  md += `**测试轮次**: ${allResults.length}\n`
  md += `**测试地址**: ${BASE_URL}\n\n`

  // 总览
  md += `## 📊 总览\n\n`
  md += `| 轮次 | 总测试 | 通过 | 失败 | 异常 | 控制台错误 | 页面错误 |\n`
  md += `|------|--------|------|------|------|-----------|---------|\n`
  for (const r of allResults) {
    md += `| ${r.round} | ${r.summary.total} | ${r.summary.pass} | ${r.summary.fail} | ${r.summary.error} | ${r.summary.consoleErrors} | ${r.summary.pageErrors} |\n`
  }
  md += `\n`

  // 最新一轮详细结果
  const latest = allResults[allResults.length - 1]
  md += `## 📋 第 ${latest.round} 轮详细结果\n\n`
  md += `| 测试项 | 分类 | URL | 状态 | 详情 |\n`
  md += `|--------|------|-----|------|------|\n`
  for (const r of latest.results) {
    const icon = r.status === 'PASS' ? '✅' : r.status === 'FAIL' ? '❌' : '⚠️'
    md += `| ${r.name} | ${r.category} | ${r.url} | ${icon} ${r.status} | ${r.detail} |\n`
  }
  md += `\n`

  // 控制台错误
  if (latest.consoleErrors.length > 0) {
    md += `## ⚠️ 控制台错误（最新一轮）\n\n`
    for (const err of latest.consoleErrors.slice(0, 10)) {
      md += `- **URL**: ${err.url}\n  **错误**: ${err.text}\n\n`
    }
  }

  // 页面错误
  if (latest.pageErrors.length > 0) {
    md += `## 🚨 页面崩溃错误（最新一轮）\n\n`
    for (const err of latest.pageErrors.slice(0, 10)) {
      md += `- **URL**: ${err.url}\n  **错误**: ${err.text}\n\n`
    }
  }

  // 趋势分析
  if (allResults.length > 1) {
    md += `## 📈 趋势分析\n\n`
    const first = allResults[0].summary
    const last = allResults[allResults.length - 1].summary
    md += `- 首轮通过: ${first.pass}/${first.total} (${Math.round(first.pass / first.total * 100)}%)\n`
    md += `- 末轮通过: ${last.pass}/${last.total} (${Math.round(last.pass / last.total * 100)}%)\n`
    if (last.pass > first.pass) md += `- ✅ 通过率提升 ${Math.round((last.pass - first.pass) / first.total * 100)}%\n`
    else if (last.pass < first.pass) md += `- ⚠️ 通过率下降 ${Math.round((first.pass - last.pass) / first.total * 100)}%\n`
    else md += `- ➡️ 通过率持平\n`
    md += `\n`
  }

  writeFileSync(reportPath, md, 'utf8')
  console.log(`\n📄 报告已保存: ${reportPath}`)

  // 同时保存一份最新报告（固定文件名）
  const latestPath = resolve(REPORT_DIR, 'latest-report.md')
  writeFileSync(latestPath, md, 'utf8')

  return reportPath
}

// ===== 主程序 =====
async function main() {
  console.log('╔══════════════════════════════════════════════╗')
  console.log('║  Python Quest 自动化 E2E 测试程序           ║')
  console.log('╚══════════════════════════════════════════════╝')
  console.log(`  模式: ${HEADED ? '有头' : '无头'} | 端口: ${PORT} | 轮次: ${LOOP_COUNT}`)
  console.log(`  基址: ${BASE_URL}`)
  console.log()

  // 1. 查找浏览器
  const browserPath = findBrowserPath()
  if (!browserPath) {
    console.error('❌ 未找到系统 Edge/Chrome 浏览器，请安装 Microsoft Edge 或 Google Chrome')
    process.exit(1)
  }
  console.log(`  浏览器: ${browserPath}`)

  // 2. 检查/启动 dev server
  let serverChild = null
  const serverRunning = await checkServer()
  if (!serverRunning) {
    console.log('  🔧 Dev server 未运行，正在启动...')
    serverChild = startDevServer()
    // 等待 server 启动
    let retries = 0
    while (retries < 20) {
      await sleep(1500)
      if (await checkServer()) {
        console.log('  ✅ Dev server 已启动')
        break
      }
      retries++
      if (retries % 5 === 0) console.log(`  ⏳ 等待 server 启动... (${retries}/20)`)
    }
    if (!(await checkServer())) {
      console.error('❌ Dev server 启动失败')
      if (serverChild) serverChild.kill()
      process.exit(1)
    }
  } else {
    console.log('  ✅ Dev server 已在运行')
  }

  // 3. 启动浏览器
  console.log('  🚀 启动浏览器...')
  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: !HEADED ? 'new' : false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1280,720',
    ],
  })

  // 4. 运行测试轮次
  const allResults = []
  for (let i = 1; i <= LOOP_COUNT; i++) {
    console.log(`\n${'═'.repeat(50)}`)
    console.log(`▶ 第 ${i}/${LOOP_COUNT} 轮测试开始`)
    console.log(`${'═'.repeat(50)}`)

    const result = await runOneIteration(browser, i)

    console.log(`\n📋 第 ${i} 轮结果:`)
    console.log(`  通过: ${result.summary.pass} / ${result.summary.total}`)
    console.log(`  失败: ${result.summary.fail}`)
    console.log(`  异常: ${result.summary.error}`)
    console.log(`  控制台错误: ${result.summary.consoleErrors}`)
    console.log(`  页面错误: ${result.summary.pageErrors}`)

    // 打印失败的测试
    const failed = result.results.filter(r => r.status !== 'PASS')
    if (failed.length > 0) {
      console.log(`\n  ❌ 失败项:`)
      for (const f of failed) {
        console.log(`    • ${f.name}: ${f.detail}`)
      }
    }

    allResults.push(result)

    // 如果不是最后一轮，等待一会
    if (i < LOOP_COUNT) {
      console.log(`\n  ⏳ 等待 2 秒后开始下一轮...`)
      await sleep(2000)
    }
  }

  // 5. 生成报告
  console.log(`\n${'═'.repeat(50)}`)
  console.log('📝 生成测试报告...')
  const reportPath = generateReport(allResults)

  // 6. 总结
  const totalPass = allResults.reduce((s, r) => s + r.summary.pass, 0)
  const totalTests = allResults.reduce((s, r) => s + r.summary.total, 0)
  const passRate = Math.round(totalPass / totalTests * 100)
  console.log(`\n${'═'.repeat(50)}`)
  console.log(`🎯 总计: ${totalPass}/${totalTests} 通过 (${passRate}%)`)
  console.log(`📄 报告: ${reportPath}`)

  // 7. 清理
  await browser.close()
  if (serverChild) {
    console.log('  🧹 关闭 dev server...')
    serverChild.kill()
  }

  process.exit(passRate === 100 ? 0 : 1)
}

main().catch(err => {
  console.error('💥 程序异常:', err)
  process.exit(1)
})
