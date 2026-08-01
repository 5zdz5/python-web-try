const e=`import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../pages/plugins-shared.css'

interface PluginShellProps {
  icon: string
  title: string
  subtitle?: string
  vendor?: string
  version?: string
  children: ReactNode
}

export default function PluginShell({
  icon,
  title,
  subtitle,
  vendor,
  version,
  children,
}: PluginShellProps) {
  return (
    <div className="plugin-shell">
      <header className="plugin-shell-header">
        <Link to="/plugins" className="plugin-shell-back">
          ← 插件中心
        </Link>
        <div className="plugin-shell-title-wrap">
          <h1 className="plugin-shell-title">
            <span className="plugin-shell-icon">{icon}</span>
            {title}
            {vendor && (
              <span className="plugin-shell-vendor">
                {vendor}{version ? \` · v\${version}\` : ''}
              </span>
            )}
          </h1>
          {subtitle && <p className="plugin-shell-subtitle">{subtitle}</p>}
        </div>
      </header>
      <div className="plugin-shell-body">{children}</div>
    </div>
  )
}
`;export{e as default};
