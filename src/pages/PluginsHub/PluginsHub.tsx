import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './PluginsHub.css'

interface PluginMeta {
  id: string
  name: string
  vendor: string
  version: string
  icon: string
  desc: string
  path: string
  category: 'ai' | 'data' | 'collab' | 'design' | 'dev' | 'automation' | 'game'
  tags: string[]
  featured?: boolean
}

const PLUGINS: PluginMeta[] = [
  {
    id: 'seedream',
    name: 'AI 图像生成器',
    vendor: 'Seedream',
    version: '1.0.0',
    icon: '🎨',
    desc: '文本到图像生成，支持 SDXL 提示词规范、多种尺寸预设、像素风/写实风切换。Mock 演示 + 真实 API 双模式。',
    path: '/plugins/image-gen',
    category: 'ai',
    tags: ['SDXL', '文生图', '像素风'],
    featured: true,
  },
  {
    id: 'seedance',
    name: 'AI 视频生成器',
    vendor: 'Seedance',
    version: '1.0.0',
    icon: '🎬',
    desc: '文本到视频生成，支持多镜头脚本、参考图/视频、镜头运动指令。Mock 预览 + 真实 API 双模式。',
    path: '/plugins/video-gen',
    category: 'ai',
    tags: ['文生视频', '多镜头', '镜头运动'],
    featured: true,
  },
  {
    id: 'viz',
    name: '数据可视化实验室',
    vendor: 'Build Web Data Visualization',
    version: '0.1.21',
    icon: '📊',
    desc: '图表/地图/甘特图/UML/仪表盘。覆盖 D3、Canvas2D、Three.js 等多种渲染路径，像素风主题适配。',
    path: '/plugins/viz-lab',
    category: 'data',
    tags: ['D3', '图表', 'UML', '甘特图'],
    featured: true,
  },
  {
    id: 'workbench',
    name: '个人工作台',
    vendor: 'personal-workbench',
    version: '0.1.0',
    icon: '🗂️',
    desc: '每日计划 / 待办清单 / 习惯打卡 / 记账 / 长期目标 / 灵感记录。本地存储，无后端依赖。',
    path: '/plugins/workbench',
    category: 'collab',
    tags: ['待办', '打卡', '记账', '目标'],
    featured: true,
  },
  {
    id: 'product-docs',
    name: '产品文档工作台',
    vendor: 'product-lifecycle-workbench',
    version: '0.2.1',
    icon: '📄',
    desc: 'PRD / MVP Spec / 技术设计文档 / 竞品分析 / 营销文案。覆盖产品全生命周期文档产出。',
    path: '/plugins/product-docs',
    category: 'collab',
    tags: ['PRD', '技术文档', '竞品分析'],
  },
  {
    id: 'github',
    name: 'GitHub Hub',
    vendor: 'GitHub',
    version: '0.1.2',
    icon: '🐙',
    desc: '仓库检查 / PR 分类 / Issue 三角化 / CI 调试 / 发布变更。Mock 数据演示完整工作流。',
    path: '/plugins/github-hub',
    category: 'dev',
    tags: ['仓库', 'PR', 'Issue', 'CI'],
  },
  {
    id: 'lark',
    name: '飞书套件',
    vendor: 'Lark',
    version: '1.0.3',
    icon: '🐦',
    desc: '消息 / 云文档 / 电子表格 / 多维表格 / 日历 / 任务 / 视频会议 / 审批。Mock 演示企业协作全场景。',
    path: '/plugins/lark-suite',
    category: 'collab',
    tags: ['IM', '文档', '日历', '会议'],
  },
  {
    id: 'stark',
    name: 'UI/UX 设计工作室',
    vendor: 'stark',
    version: '0.7.2',
    icon: '✨',
    desc: '设计令牌 / 跨平台设计 / UX 流程 / 平台原生惯用语。Apple/Android/Web/Windows 多平台适配。',
    path: '/plugins/design-studio',
    category: 'design',
    tags: ['设计令牌', '跨平台', 'UX'],
  },
  {
    id: 'browser',
    name: '浏览器自动化演示',
    vendor: '浏览器控制',
    version: '1.0.3',
    icon: '🌐',
    desc: '页面导航 / 元素点击 / 表单填写 / 截图 / 网络请求监听。Mock 演示自动化测试工作流。',
    path: '/plugins/browser-studio',
    category: 'automation',
    tags: ['自动化', '截图', '表单'],
  },
  {
    id: 'web-dev',
    name: 'Web 开发工具',
    vendor: 'web-app-development',
    version: '0.1.1',
    icon: '⚙️',
    desc: '脚手架 / 调试 / UI 美化 / 性能优化 / 设计系统对齐。前端开发全流程辅助。',
    path: '/plugins/web-dev',
    category: 'dev',
    tags: ['脚手架', '调试', '性能'],
  },
  {
    id: 'code-typing',
    name: '代码打字竞技场',
    vendor: 'stark + typing-game',
    version: '1.0.0',
    icon: '⌨️',
    desc: '代码手感训练营：Python/TS/React 三种题库按难度分级，WPM 速度 + 准确率统计，连击效果，像素风动态打字热区。',
    path: '/plugins/code-typing',
    category: 'game',
    tags: ['WPM', '代码手感', '训练营', '连击'],
    featured: true,
  },
]

const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'ai', label: 'AI 生成' },
  { id: 'data', label: '数据可视化' },
  { id: 'collab', label: '协作工具' },
  { id: 'design', label: '设计' },
  { id: 'dev', label: '开发' },
  { id: 'automation', label: '自动化' },
  { id: 'game', label: '游戏训练' },
] as const

function PluginsHub() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return PLUGINS
    return PLUGINS.filter(p => p.category === filter)
  }, [filter])

  const stats = useMemo(() => ({
    total: PLUGINS.length,
    featured: PLUGINS.filter(p => p.featured).length,
    categories: new Set(PLUGINS.map(p => p.category)).size,
  }), [])

  return (
    <div className="plugins-hub">
      <header className="plugins-hub-header">
        <h1 className="plugins-hub-title">插件中心</h1>
        <p className="plugins-hub-subtitle">
          已加载 {PLUGINS.length} 个插件 · 像素风统一封装 · 全前端 Mock 可用
        </p>
        <div className="plugins-hub-stats">
          <div className="plugin-stat">
            <span className="plugin-stat-value">{stats.total}</span>
            <span className="plugin-stat-label">插件</span>
          </div>
          <div className="plugin-stat">
            <span className="plugin-stat-value">{stats.featured}</span>
            <span className="plugin-stat-label">精选</span>
          </div>
          <div className="plugin-stat">
            <span className="plugin-stat-value">{stats.categories}</span>
            <span className="plugin-stat-label">分类</span>
          </div>
        </div>
      </header>

      <div className="plugins-filter">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`filter-chip ${filter === c.id ? 'active' : ''}`}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="plugins-grid">
        {filtered.map((p, idx) => (
          <Link
            key={p.id}
            to={p.path}
            className="plugin-card feature-card-anim"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            <div className="plugin-card-header">
              <div className="plugin-card-icon">{p.icon}</div>
              <div>
                <div className="plugin-card-title">{p.name}</div>
                <div className="plugin-card-vendor">
                  {p.vendor} · v{p.version}
                </div>
              </div>
            </div>
            <p className="plugin-card-desc">{p.desc}</p>
            <div className="plugin-card-tags">
              {p.featured && <span className="plugin-tag plugin-tag-accent">精选</span>}
              {p.tags.slice(0, 3).map(t => (
                <span key={t} className="plugin-tag">{t}</span>
              ))}
            </div>
            <div className="plugin-card-footer">
              <span className="plugin-card-status">
                <span className="plugin-status-dot" />
                已启用
              </span>
              <span className="plugin-card-enter">进入 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PluginsHub
