const n=`/**
 * ResourceBus - 资源调配总线
 *
 * Agent 作为网站的资源调配中心，统一调度：
 * 1. 插件功能（plugins hub 各页面能力）
 * 2. Skill 规则（installedSkills 的训练规则）
 * 3. 关卡（lessonContent 的挑战测试）
 * 4. 监查（MonitorContext 的事件/崩溃/指标）
 * 5. 经验（experiencePack 的模块/约定/教训）
 * 6. Wiki 同步（wikiSync 的推送队列）
 * 7. LLM 内核（localLLMCore 的离线推理 + 外部 LLM）
 * 8. Pyodide（Python 执行环境）
 *
 * 调配流程：
 *   dispatch(resource, action, args) → 路由到对应 handler → 记录 ResourceCall → 返回结果
 */

import type {
  ResourceType, ResourceCall, ResourceBusState,
} from '../types/ai'

// ===== 资源处理器类型 =====
export type ResourceHandler = (action: string, args?: Record<string, unknown>) => Promise<unknown>

// ===== 总线状态 =====
const MAX_RECENT_CALLS = 50

const initialState: ResourceBusState = {
  totalCalls: 0,
  successCalls: 0,
  failedCalls: 0,
  recentCalls: [],
  availableResources: ['plugin', 'skill', 'level', 'monitor', 'experience', 'wiki', 'llm', 'pyodide'],
}

// ===== 处理器注册表 =====
const handlers = new Map<ResourceType, ResourceHandler>()

/** 注册资源处理器 */
export function registerResourceHandler(resource: ResourceType, handler: ResourceHandler) {
  handlers.set(resource, handler)
}

/** 注销资源处理器 */
export function unregisterResourceHandler(resource: ResourceType) {
  handlers.delete(resource)
}

// ===== 调配核心 =====

/**
 * 创建资源调配总线实例
 * 每个 AIAgentProvider 创建独立实例，状态通过闭包管理
 */
export function createResourceBus() {
  let state: ResourceBusState = { ...initialState, recentCalls: [] }

  /** 调度资源 */
  async function dispatch(
    resource: ResourceType,
    action: string,
    args?: Record<string, unknown>,
  ): Promise<unknown> {
    const call: ResourceCall = {
      id: \`call-\${Date.now()}-\${Math.random().toString(36).slice(2, 6)}\`,
      resource,
      action,
      args,
      timestamp: new Date().toISOString(),
    }

    const handler = handlers.get(resource)
    if (!handler) {
      call.result = 'skipped'
      call.detail = \`无已注册的 \${resource} 处理器\`
      state = addToRecent(state, call)
      return null
    }

    try {
      const result = await handler(action, args)
      call.result = 'success'
      call.detail = typeof result === 'string' ? result : JSON.stringify(result).slice(0, 200)
      state = {
        ...state,
        totalCalls: state.totalCalls + 1,
        successCalls: state.successCalls + 1,
        recentCalls: addToRecentList(state.recentCalls, call),
      }
      return result
    } catch (err) {
      call.result = 'failed'
      call.detail = err instanceof Error ? err.message : String(err)
      state = {
        ...state,
        totalCalls: state.totalCalls + 1,
        failedCalls: state.failedCalls + 1,
        recentCalls: addToRecentList(state.recentCalls, call),
      }
      throw err
    }
  }

  /** 获取当前状态 */
  function getState(): ResourceBusState {
    return { ...state }
  }

  /** 重置状态 */
  function reset(): void {
    state = { ...initialState, recentCalls: [] }
  }

  return { dispatch, getState, reset }
}

// ===== 辅助 =====

function addToRecent(state: ResourceBusState, call: ResourceCall): ResourceBusState {
  return {
    ...state,
    totalCalls: state.totalCalls + 1,
    successCalls: call.result === 'success' ? state.successCalls + 1 : state.successCalls,
    failedCalls: call.result === 'failed' ? state.failedCalls + 1 : state.failedCalls,
    recentCalls: addToRecentList(state.recentCalls, call),
  }
}

function addToRecentList(list: ResourceCall[], call: ResourceCall): ResourceCall[] {
  return [call, ...list].slice(0, MAX_RECENT_CALLS)
}

// ===== 默认 Mock 处理器（在未注册真实处理器时使用）=====

/** 默认 Mock 处理器：返回模拟结果，用于演示资源调配能力 */
export function createMockHandler(resource: ResourceType): ResourceHandler {
  return async (action: string, args?: Record<string, unknown>) => {
    // 模拟异步延迟
    await new Promise(r => setTimeout(r, 50))
    return {
      resource,
      action,
      args,
      mockResult: true,
      timestamp: new Date().toISOString(),
    }
  }
}

/** 为所有资源注册 Mock 处理器（开发期默认）*/
export function registerAllMockHandlers() {
  const resources: ResourceType[] = ['plugin', 'skill', 'level', 'monitor', 'experience', 'wiki', 'llm', 'pyodide']
  for (const r of resources) {
    if (!handlers.has(r)) {
      registerResourceHandler(r, createMockHandler(r))
    }
  }
}

// ===== 资源能力描述（供 UI 展示）=====

export interface ResourceCapability {
  resource: ResourceType
  name: string
  icon: string
  description: string
  actions: { action: string; description: string }[]
}

export const RESOURCE_CAPABILITIES: ResourceCapability[] = [
  {
    resource: 'plugin',
    name: '插件功能',
    icon: '🧩',
    description: '调度插件中心各页面能力：图像生成、视频生成、数据可视化、工作台等',
    actions: [
      { action: 'invoke-plugin', description: '调用指定插件功能' },
      { action: 'list-plugins', description: '列出所有可用插件' },
      { action: 'get-plugin-status', description: '查询插件状态' },
    ],
  },
  {
    resource: 'skill',
    name: 'Skill 规则',
    icon: '🎯',
    description: '从 installedSkills 提取训练规则，注入 LLM prompt 做合规校验',
    actions: [
      { action: 'list-skills', description: '列出已启用 skill' },
      { action: 'get-skill-rules', description: '提取 skill 规则' },
      { action: 'validate-compliance', description: '合规检测' },
    ],
  },
  {
    resource: 'level',
    name: '关卡',
    icon: '🎮',
    description: '调度 lessonContent 关卡挑战，跑测试用例采集学习效果',
    actions: [
      { action: 'run-level-test', description: '跑指定关卡测试' },
      { action: 'get-high-failure-levels', description: '查询高失败率关卡' },
      { action: 'list-levels', description: '列出所有关卡' },
    ],
  },
  {
    resource: 'monitor',
    name: '监查',
    icon: '📡',
    description: 'MonitorContext 事件/崩溃/指标采集，错误模式分析',
    actions: [
      { action: 'get-error-summary', description: '获取错误摘要' },
      { action: 'create-snapshot', description: '创建快照' },
      { action: 'get-crash-status', description: '查询崩溃状态' },
    ],
  },
  {
    resource: 'experience',
    name: '经验包',
    icon: '📦',
    description: 'experiencePack 模块/约定/教训，经验检索与写入',
    actions: [
      { action: 'read-pack', description: '读取经验包' },
      { action: 'write-pack', description: '写入经验包' },
      { action: 'retrieve-lessons', description: '检索教训' },
    ],
  },
  {
    resource: 'wiki',
    name: 'Wiki 同步',
    icon: '📚',
    description: 'wikiSync 推送队列，GitHub API 真实推送 + 重试',
    actions: [
      { action: 'push-to-wiki', description: '推送到 Wiki' },
      { action: 'get-pending', description: '查询待推送队列' },
      { action: 'process-pending', description: '处理待推送队列' },
    ],
  },
  {
    resource: 'llm',
    name: 'LLM 内核',
    icon: '🧠',
    description: 'localLLMCore 离线推理 + 外部 LLM API，双模式',
    actions: [
      { action: 'local-infer', description: '本地离线推理' },
      { action: 'external-infer', description: '外部 LLM 推理' },
      { action: 'get-comprehension', description: '查询理解度' },
    ],
  },
  {
    resource: 'pyodide',
    name: 'Python 执行',
    icon: '🐍',
    description: 'PyodideContext Python 执行环境，跑用户代码与测试用例',
    actions: [
      { action: 'run-learning-validation', description: '跑学习验证' },
      { action: 'run-code', description: '执行 Python 代码' },
      { action: 'run-code-with-tests', description: '执行带测试的代码' },
    ],
  },
]
`;export{n as default};
