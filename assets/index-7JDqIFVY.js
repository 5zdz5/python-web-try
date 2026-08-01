const o=`/**
 * ============================================================
 *  python-quest 架构总索引 (Barrel Exports)
 * ============================================================
 *
 *  设计目的：
 *    1. 集中化导出，新功能接入时只需 import from 'src/index.ts' 即可发现所有接口
 *    2. 层级清晰：按功能域（CONFIG / TYPES / CONTEXT / DATA / AI / COMPONENTS / PAGES）分组
 *    3. 模块解耦：新增功能时只需在对应目录新增 index.ts 后在此登记，无需逐个修改导入路径
 *    4. 大模型友好：任何模型打开此文件即可一眼掌握项目的全部可复用接口
 *
 *  ⚠️ 使用注意：
 *    - 新增功能模块时，先在子目录建 index.ts，再在此处登记
 *    - 避免循环依赖：PAGES → COMPONENTS/CONTEXT/DATA → TYPES/CONFIG 方向单向依赖
 *    - 循环依赖修复：若发生，可直接从具体路径导入绕过此 barrel 文件
 *
 * ============================================================
 */

// ============================================================
//  1. CONFIG 配置常量层（无依赖，最先加载）
// ============================================================
export * from './config/categories'
export * from './config/github'
export * from './config/versionManager'

// ============================================================
//  2. TYPES 类型层（只依赖 config 或全局，不依赖实现）
// ============================================================
export * from './types/index'
export type * from './types/monitor'
export type * from './types/ai'
export type * from './types/experiencePack'

// ============================================================
//  3. DATA 数据层（仅依赖 types，不依赖组件/上下文）
// ============================================================
export * from './data/mockData'
export * from './data/lessonContent'
export * from './data/achievements'
export * from './data/runoobTopics'
export * from './data/projectDocs'
export * from './data/sourceCodeData'

// ============================================================
//  4. AI 智能层（依赖 types + data，不依赖组件）
// ============================================================
export * from './ai/Optimizer'
export * from './ai/metrics'
export * from './ai/experiencePack'

// ============================================================
//  5. CONTEXT 上下文层（全局状态，被组件层消费）
// ============================================================
export { MonitorProvider, useMonitor } from './context/MonitorContext'
export { AIAgentProvider, useAIAgent } from './context/AIAgentContext'
export { AuthProvider } from './context/AuthContext'
export { ProgressProvider } from './context/ProgressContext'
export { PyodideProvider } from './context/PyodideContext'

// ============================================================
//  6. COMPONENTS 可复用组件层（被 pages 消费）
// ============================================================
// 6.1 原子组件
export { default as Button } from './components/Button'
// 6.2 功能组件
export { default as Footer } from './components/Footer/Footer'
export { default as Navbar } from './components/Navbar/Navbar'
export { default as LoginModal } from './components/LoginModal/LoginModal'
export { default as InteractiveLesson } from './components/InteractiveLesson/InteractiveLesson'
export { default as CodeEditor } from './components/CodeEditor/CodeEditor'
export { default as ChallengeArena } from './components/ChallengeArena/ChallengeArena'
export { default as VersionHistory } from './components/VersionHistory/VersionHistory'
export { default as ErrorBoundary } from './components/ErrorBoundary'
export { default as PatrolButton } from './components/PatrolButton'
export { default as AIAgentPanel } from './components/AIAgentPanel'
export { default as ExperiencePackPanel } from './components/ExperiencePackPanel'
// 6.3 路由注入
export { default as GlobalApp } from './App'
`;export{o as default};
