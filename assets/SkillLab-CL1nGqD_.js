const l=`/**
 * Skill 实验室页面 — 承载 SkillViewer 组件
 *
 * 法则1 分层归属：页面层（page），路由 /skills
 * 法则4 监测主动注册
 * 法则5 主题双适配（通过 SkillViewer 组件继承）
 * 法则6 三注册：App.tsx 路由 + Navbar 导航 + projectDocs 文档
 */
import SkillViewer from '../../components/SkillViewer/SkillViewer'
import './SkillLab.css'

function SkillLab() {
  return (
    <div className="skill-lab-page">
      <header className="skill-lab-header">
        <h1 className="skill-lab-title">🧪 Skill 实验室</h1>
        <p className="skill-lab-subtitle">
          查看所有已安装 Skill 的核心规则、调用命令与示例代码。复制调用命令即可让 Skill 真正被使用。
        </p>
      </header>

      <div className="skill-lab-content">
        <SkillViewer defaultExpanded={true} />
      </div>

      <footer className="skill-lab-footer">
        <p>
          💡 每个 Skill 包含核心规则（含正反例）+ 调用命令 + 调用示例。
          点击"复制"按钮将调用命令复制到剪贴板，即可在 AI 对话中粘贴使用。
        </p>
      </footer>
    </div>
  )
}

export default SkillLab
`;export{l as default};
