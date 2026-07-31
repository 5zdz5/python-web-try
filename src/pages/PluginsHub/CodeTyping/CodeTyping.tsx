import { useEffect } from 'react'
import './CodeTyping.css'
import PluginShell from '../../../components/PluginShell'
import { useMonitor } from '../../../context/MonitorContext'
import CodeTypingArena from '../../CodeTypingArena/CodeTypingArena'

/**
 * 插件：代码打字竞技场（走 PluginShell 统一外壳，内部复用已有 CodeTypingArena）
 *
 * 归属层：pages/PluginsHub/CodeTyping/（插件中心子路由，符合法则1分层归属）
 * 监测：法则4主动注册 group + reportHealth
 */
function CodeTypingPlugin() {
  const { registerGroup, reportHealth } = useMonitor()

  useEffect(() => {
    registerGroup('Plugin-CodeTyping', '插件-代码打字竞技场', 'src/pages/PluginsHub/CodeTyping/CodeTyping.tsx')
    reportHealth('Plugin-CodeTyping', 'healthy', '插件挂载成功（复用核心CodeTypingArena）')
  }, [registerGroup, reportHealth])

  return (
    <PluginShell
      icon="⌨️"
      title="代码打字竞技场"
      subtitle="三种题库（Python/TS/React）按难度分级，WPM 速度 + 准确率统计，连击效果，代码手感训练。"
      vendor="内置插件"
      version="1.0.0"
    >
      <CodeTypingArena embedMode />
    </PluginShell>
  )
}

export default CodeTypingPlugin
