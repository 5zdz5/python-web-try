const e=`import { useState } from 'react'
import PluginShell from '../../components/PluginShell'
import '../plugins-shared.css'
import './LarkSuite.css'

type ModuleKey = 'im' | 'doc' | 'sheet' | 'base' | 'calendar' | 'task' | 'vc' | 'approval'

interface ChatItem {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
}

interface Message {
  id: string
  sender: 'me' | 'other'
  text: string
  time: string
}

interface DocItem {
  id: string
  title: string
  type: 'doc' | 'sheet' | 'base' | 'wiki' | 'slide'
  icon: string
  editor: string
  time: string
  preview: string
}

interface SheetData {
  headers: string[]
  rows: (string | number)[][]
}

interface BaseRecord {
  id: string
  name: string
  status: string
  owner: string
  priority: '高' | '中' | '低'
  progress: number
}

interface CalendarEvent {
  id: string
  time: string
  endTime: string
  title: string
  location: string
  attendees: string[]
}

interface TaskItem {
  id: string
  title: string
  assignee: string
  priority: '高' | '中' | '低'
  tag: string
}

interface MeetingItem {
  id: string
  topic: string
  time: string
  duration: string
  attendees: { name: string; avatar: string }[]
  status: 'live' | 'upcoming' | 'ended'
}

interface ApprovalItem {
  id: string
  type: string
  applicant: string
  amount?: string
  duration?: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
}

/* ---------------- Mock 数据 ---------------- */

const NAV_ITEMS: { key: ModuleKey; label: string; icon: string }[] = [
  { key: 'im', label: '消息', icon: '💬' },
  { key: 'doc', label: '云文档', icon: '📄' },
  { key: 'sheet', label: '电子表格', icon: '📊' },
  { key: 'base', label: '多维表格', icon: '🗃️' },
  { key: 'calendar', label: '日历', icon: '📅' },
  { key: 'task', label: '任务', icon: '✅' },
  { key: 'vc', label: '视频会议', icon: '🎥' },
  { key: 'approval', label: '审批', icon: '📝' },
]

const CHATS: ChatItem[] = [
  { id: 'c1', name: '产品研发群', avatar: '🚀', lastMessage: '需求文档已更新，请查阅', time: '14:32', unread: 3 },
  { id: 'c2', name: '张伟', avatar: '👨', lastMessage: '好的，下午对一下方案', time: '13:45', unread: 0 },
  { id: 'c3', name: '设计评审小组', avatar: '🎨', lastMessage: '[图片] 新版界面', time: '11:20', unread: 5 },
  { id: 'c4', name: 'Lark 助手', avatar: '🤖', lastMessage: '你今天有 3 个会议', time: '09:00', unread: 1 },
  { id: 'c5', name: '全员公告', avatar: '📢', lastMessage: '本周五团建活动报名', time: '昨天', unread: 0 },
]

const MESSAGES: Record<string, Message[]> = {
  c1: [
    { id: 'm1', sender: 'other', text: '上午好，PRD 已更新到 v2.3', time: '10:05' },
    { id: 'm2', sender: 'other', text: '主要调整了登录流程和权限模型', time: '10:06' },
    { id: 'm3', sender: 'me', text: '收到，我先看一遍', time: '10:15' },
    { id: 'm4', sender: 'me', text: '权限模型那块要不要拉个会过一下？', time: '10:16' },
    { id: 'm5', sender: 'other', text: '可以，我下午 3 点前都有空', time: '10:20' },
    { id: 'm6', sender: 'other', text: '需求文档已更新，请查阅', time: '14:32' },
  ],
  c2: [
    { id: 'm1', sender: 'other', text: '方案我看过了', time: '13:40' },
    { id: 'm2', sender: 'me', text: '感觉怎么样？', time: '13:42' },
    { id: 'm3', sender: 'other', text: '整体没问题，细节再打磨', time: '13:44' },
    { id: 'm4', sender: 'other', text: '好的，下午对一下方案', time: '13:45' },
  ],
  c3: [
    { id: 'm1', sender: 'other', text: '新版界面出稿了', time: '11:18' },
    { id: 'm2', sender: 'other', text: '[图片] 新版界面', time: '11:20' },
  ],
  c4: [
    { id: 'm1', sender: 'other', text: '早上好！今日待办已同步', time: '09:00' },
    { id: 'm2', sender: 'other', text: '你今天有 3 个会议', time: '09:00' },
  ],
  c5: [
    { id: 'm1', sender: 'other', text: '本周五团建活动报名', time: '昨天' },
  ],
}

const DOCS: DocItem[] = [
  { id: 'd1', title: '飞书套件产品需求文档', type: 'doc', icon: '📘', editor: '李明', time: '5 分钟前', preview: '一、概述\\n飞书套件旨在为团队提供一站式协作能力，覆盖即时通讯、云文档、电子表格、多维表格、日历、任务、视频会议与审批等核心场景。本文档定义 v1.0 的功能范围与交付里程碑。\\n\\n二、核心模块\\n1. IM：支持单聊 / 群聊 / 话题消息\\n2. 云文档：富文本 + 协同编辑\\n3. 多维表格：可配置视图与字段\\n\\n三、里程碑\\nM1：IM 与文档（W1-W3）\\nM2：表格与日历（W4-W6）' },
  { id: 'd2', title: 'Q3 销售数据看板', type: 'sheet', icon: '📈', editor: '王芳', time: '1 小时前', preview: '汇总 Q3 各区域销售业绩，含同比 / 环比、TOP 客户排行与季度趋势图。数据源来自 CRM，每日凌晨自动同步。\\n\\n关键指标：\\n- 季度总营收：¥ 12.8M\\n- 同比增长：+23%\\n- 完成率：112%' },
  { id: 'd3', title: '研发周会纪要', type: 'doc', icon: '📝', editor: '陈晨', time: '今天 10:20', preview: '会议时间：周一 10:00\\n参会人：研发一组全员\\n\\n议题：\\n1. 上周进度回顾\\n2. 风险同步：依赖的外部接口延期\\n3. 本周计划：完成 IM 模块联调' },
  { id: 'd4', title: '设计规范 Wiki', type: 'wiki', icon: '🌐', editor: '林月', time: '昨天', preview: '色彩系统 / 字体阶 / 间距规范 / 组件库使用指南。所有设计稿须遵循本规范以保证一致性。\\n\\n主色：#3370FF（飞书蓝）\\n字体：系统默认 + 等宽代码字体\\n间距基准：4px 网格' },
  { id: 'd5', title: '产品发布演示', type: 'slide', icon: '🎞️', editor: '赵磊', time: '2 天前', preview: '面向客户的季度发布演示，包含产品定位、核心能力、客户案例与路线图。共 24 页。\\n\\n核心叙事：从分散工具到一体化协作平台的演进。' },
  { id: 'd6', title: '需求池追踪表', type: 'base', icon: '🗃️', editor: '周琪', time: '3 天前', preview: '多维表格视图：按状态 / 负责人 / 优先级分组追踪 38 条需求，支持看板与甘特切换。\\n\\n字段：需求编号 · 标题 · 负责人 · 状态 · 优先级 · 预计上线' },
]

const SHEET_DATA: SheetData = {
  headers: ['月份', '销售额', '订单数', '客单价', '转化率'],
  rows: [
    ['2026-01', '¥ 128,000', 320, '¥ 400', '3.2%'],
    ['2026-02', '¥ 156,000', 390, '¥ 400', '3.5%'],
    ['2026-03', '¥ 201,000', 502, '¥ 400', '4.1%'],
    ['2026-04', '¥ 175,000', 438, '¥ 399', '3.8%'],
    ['2026-05', '¥ 234,000', 580, '¥ 403', '4.4%'],
  ],
}

const BASE_RECORDS: BaseRecord[] = [
  { id: 'b1', name: '用户登录鉴权改造', status: '进行中', owner: '李明', priority: '高', progress: 65 },
  { id: 'b2', name: '消息搜索性能优化', status: '待办', owner: '王芳', priority: '中', progress: 0 },
  { id: 'b3', name: '多维表格视图引擎', status: '进行中', owner: '陈晨', priority: '高', progress: 40 },
  { id: 'b4', name: '审批流可视化配置', status: '已完成', owner: '林月', priority: '低', progress: 100 },
]

const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'e1', time: '09:30', endTime: '10:00', title: '每日站会', location: '飞书会议室 · 研发组', attendees: ['李明', '王芳', '陈晨'] },
  { id: 'e2', time: '11:00', endTime: '12:00', title: 'PRD 评审会', location: '会议室 A', attendees: ['产品组', '研发组'] },
  { id: 'e3', time: '14:00', endTime: '15:30', title: '设计走查', location: '设计部', attendees: ['林月', '赵磊'] },
  { id: 'e4', time: '16:30', endTime: '17:00', title: '1:1 同步', location: '茶水间', attendees: ['张伟'] },
]

const TASKS: Record<'todo' | 'doing' | 'done', TaskItem[]> = {
  todo: [
    { id: 't1', title: '编写 IM 消息搜索用例', assignee: '王芳', priority: '中', tag: 'IM' },
    { id: 't2', title: '梳理审批流配置文档', assignee: '林月', priority: '低', tag: '审批' },
  ],
  doing: [
    { id: 't3', title: '多维表格视图引擎开发', assignee: '陈晨', priority: '高', tag: 'Base' },
    { id: 't4', title: '日历日程冲突检测', assignee: '李明', priority: '中', tag: '日历' },
  ],
  done: [
    { id: 't5', title: '视频会议参会人头像组件', assignee: '赵磊', priority: '低', tag: 'VC' },
  ],
}

const MEETINGS: MeetingItem[] = [
  { id: 'v1', topic: '紧急问题同步', time: '现在', duration: '进行中', attendees: [{ name: '张伟', avatar: '👨' }, { name: '周琪', avatar: '👩' }], status: 'live' },
  { id: 'v2', topic: 'PRD 评审会', time: '11:00 - 12:00', duration: '60 分钟', attendees: [{ name: '产品组', avatar: '🚀' }, { name: '研发组', avatar: '⚙️' }], status: 'upcoming' },
  { id: 'v3', topic: '设计走查', time: '14:00 - 15:30', duration: '90 分钟', attendees: [{ name: '林月', avatar: '🎨' }, { name: '赵磊', avatar: '🖼️' }], status: 'upcoming' },
  { id: 'v4', topic: '每日站会', time: '09:30 - 10:00', duration: '30 分钟', attendees: [{ name: '李明', avatar: '👨' }, { name: '王芳', avatar: '👩' }, { name: '陈晨', avatar: '🧑' }], status: 'ended' },
]

const APPROVALS: ApprovalItem[] = [
  { id: 'a1', type: '费用报销', applicant: '王芳', amount: '¥ 2,380', status: 'pending', submittedAt: '今天 10:20' },
  { id: 'a2', type: '请假申请', applicant: '陈晨', duration: '1 天', status: 'pending', submittedAt: '今天 09:15' },
  { id: 'a3', type: '采购申请', applicant: '林月', amount: '¥ 18,600', status: 'pending', submittedAt: '昨天 16:30' },
  { id: 'a4', type: '出差申请', applicant: '赵磊', duration: '3 天', status: 'approved', submittedAt: '昨天 14:00' },
  { id: 'a5', type: '加班调休', applicant: '李明', duration: '0.5 天', status: 'rejected', submittedAt: '前天 18:45' },
]

/* ---------------- 组件 ---------------- */

function LarkSuite() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('im')
  const [selectedChat, setSelectedChat] = useState<string>('c1')
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)

  const renderIm = () => {
    const chat = CHATS.find(c => c.id === selectedChat) ?? CHATS[0]
    const msgs = MESSAGES[selectedChat] ?? []
    return (
      <div className="lark-im">
        <div className="lark-im-list">
          {CHATS.map(c => (
            <button
              key={c.id}
              className={\`lark-chat-item \${selectedChat === c.id ? 'active' : ''}\`}
              onClick={() => setSelectedChat(c.id)}
              type="button"
            >
              <span className="lark-chat-avatar">{c.avatar}</span>
              <div className="lark-chat-info">
                <div className="lark-chat-top">
                  <span className="lark-chat-name">{c.name}</span>
                  <span className="lark-chat-time">{c.time}</span>
                </div>
                <div className="lark-chat-bottom">
                  <span className="lark-chat-last">{c.lastMessage}</span>
                  {c.unread > 0 && <span className="lark-chat-unread">{c.unread}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="lark-im-stream">
          <div className="lark-stream-header">
            <span className="lark-stream-name">{chat.name}</span>
            <span className="mock-badge">MOCK</span>
          </div>
          <div className="lark-stream-body">
            {msgs.map(m => (
              <div key={m.id} className={\`lark-bubble-wrap \${m.sender === 'me' ? 'mine' : 'theirs'}\`}>
                <div className="lark-bubble">
                  <span className="lark-bubble-text">{m.text}</span>
                  <span className="lark-bubble-time">{m.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderDoc = () => {
    const doc = selectedDoc ? DOCS.find(d => d.id === selectedDoc) : null
    return (
      <div className="lark-doc">
        <div className="lark-doc-list">
          {DOCS.map(d => (
            <button
              key={d.id}
              className={\`lark-doc-item \${selectedDoc === d.id ? 'active' : ''}\`}
              onClick={() => setSelectedDoc(d.id)}
              type="button"
            >
              <span className="lark-doc-icon">{d.icon}</span>
              <div className="lark-doc-info">
                <span className="lark-doc-title">{d.title}</span>
                <span className="lark-doc-meta">{d.editor} · {d.time}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="lark-doc-preview">
          {doc ? (
            <>
              <div className="lark-doc-preview-head">
                <span className="lark-doc-preview-icon">{doc.icon}</span>
                <div>
                  <h3 className="lark-doc-preview-title">{doc.title}</h3>
                  <span className="lark-doc-preview-meta">最后编辑：{doc.editor} · {doc.time}</span>
                </div>
              </div>
              <pre className="lark-doc-preview-body">{doc.preview}</pre>
            </>
          ) : (
            <div className="plugin-empty">
              <div className="plugin-empty-icon">📄</div>
              <p>选择左侧文档查看内容预览</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderSheet = () => (
    <div className="lark-sheet">
      <table className="lark-sheet-table">
        <thead>
          <tr>
            {SHEET_DATA.headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {SHEET_DATA.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderBase = () => (
    <div className="lark-base">
      {BASE_RECORDS.map(r => (
        <div key={r.id} className="lark-base-card">
          <div className="lark-base-head">
            <span className="lark-base-name">{r.name}</span>
            <span className={\`lark-priority priority-\${r.priority}\`}>{r.priority}</span>
          </div>
          <div className="lark-base-row">
            <span className="lark-base-label">负责人</span>
            <span className="lark-base-value">{r.owner}</span>
          </div>
          <div className="lark-base-row">
            <span className="lark-base-label">状态</span>
            <span className="lark-base-value">{r.status}</span>
          </div>
          <div className="lark-base-progress">
            <div className="lark-base-progress-bar" style={{ width: \`\${r.progress}%\` }} />
            <span className="lark-base-progress-text">{r.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  )

  const renderCalendar = () => (
    <div className="lark-calendar">
      <div className="lark-calendar-today">今日 · 2026-07-31</div>
      <div className="lark-calendar-timeline">
        {CALENDAR_EVENTS.map(e => (
          <div key={e.id} className="lark-cal-event">
            <div className="lark-cal-time">
              <span className="lark-cal-start">{e.time}</span>
              <span className="lark-cal-end">{e.endTime}</span>
            </div>
            <div className="lark-cal-content">
              <div className="lark-cal-title">{e.title}</div>
              <div className="lark-cal-loc">📍 {e.location}</div>
              <div className="lark-cal-attendees">
                {e.attendees.map((a, i) => <span key={i} className="lark-cal-chip">{a}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderTask = () => {
    const columns: { key: 'todo' | 'doing' | 'done'; label: string }[] = [
      { key: 'todo', label: '待办' },
      { key: 'doing', label: '进行中' },
      { key: 'done', label: '已完成' },
    ]
    return (
      <div className="lark-task">
        {columns.map(col => (
          <div key={col.key} className="lark-task-col">
            <div className="lark-task-col-head">
              <span>{col.label}</span>
              <span className="lark-task-count">{TASKS[col.key].length}</span>
            </div>
            <div className="lark-task-cards">
              {TASKS[col.key].map(t => (
                <div key={t.id} className="lark-task-card">
                  <div className="lark-task-card-title">{t.title}</div>
                  <div className="lark-task-card-foot">
                    <span className={\`lark-priority priority-\${t.priority}\`}>{t.priority}</span>
                    <span className="lark-task-tag">{t.tag}</span>
                    <span className="lark-task-assignee">@{t.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderVc = () => (
    <div className="lark-vc">
      {MEETINGS.map(m => (
        <div key={m.id} className="lark-vc-item">
          <div className="lark-vc-status">
            <span className={\`lark-vc-badge vc-\${m.status}\`}>
              {m.status === 'live' ? '● 直播中' : m.status === 'upcoming' ? '即将开始' : '已结束'}
            </span>
          </div>
          <div className="lark-vc-main">
            <div className="lark-vc-topic">{m.topic}</div>
            <div className="lark-vc-time">🕐 {m.time} · {m.duration}</div>
            <div className="lark-vc-attendees">
              {m.attendees.map((a, i) => (
                <span key={i} className="lark-vc-avatar" title={a.name}>{a.avatar}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderApproval = () => {
    const statusMap: Record<ApprovalItem['status'], { label: string; cls: string }> = {
      pending: { label: '待审批', cls: 'ap-pending' },
      approved: { label: '已通过', cls: 'ap-approved' },
      rejected: { label: '已驳回', cls: 'ap-rejected' },
    }
    return (
      <div className="lark-approval">
        {APPROVALS.map(a => {
          const st = statusMap[a.status]
          return (
            <div key={a.id} className="lark-approval-item">
              <div className="lark-approval-type">{a.type}</div>
              <div className="lark-approval-detail">
                <div className="lark-approval-applicant">申请人：{a.applicant}</div>
                <div className="lark-approval-extra">
                  {a.amount && <span>金额：{a.amount}</span>}
                  {a.duration && <span>时长：{a.duration}</span>}
                </div>
                <div className="lark-approval-time">提交：{a.submittedAt}</div>
              </div>
              <span className={\`lark-approval-status \${st.cls}\`}>{st.label}</span>
            </div>
          )
        })}
      </div>
    )
  }

  const renderContent = () => {
    switch (activeModule) {
      case 'im': return renderIm()
      case 'doc': return renderDoc()
      case 'sheet': return renderSheet()
      case 'base': return renderBase()
      case 'calendar': return renderCalendar()
      case 'task': return renderTask()
      case 'vc': return renderVc()
      case 'approval': return renderApproval()
      default: return null
    }
  }

  return (
    <PluginShell
      icon="🐦"
      title="飞书套件"
      subtitle="Lark · IM/文档/表格/日历/任务/会议 Mock 全场景"
      vendor="Lark"
      version="1.0.3"
    >
      <div className="lark-layout">
        <nav className="lark-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              className={\`lark-nav-item \${activeModule === item.key ? 'active' : ''}\`}
              onClick={() => { setActiveModule(item.key); setSelectedDoc(null) }}
              type="button"
            >
              <span className="lark-nav-icon">{item.icon}</span>
              <span className="lark-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="lark-content">
          {renderContent()}
        </div>
      </div>
    </PluginShell>
  )
}

export default LarkSuite
`;export{e as default};
