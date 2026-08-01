const n=`import { ReactNode } from 'react'
import './Card.css'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'bordered'
  hoverable?: boolean
  active?: boolean
  onClick?: () => void
  className?: string
}

function Card({
  children,
  variant = 'default',
  hoverable = true,
  active = false,
  onClick,
  className = '',
}: CardProps) {
  const clickable = !!onClick
  const baseClass = \`card card-\${variant}\`
  const stateClass = [
    hoverable ? 'card-hoverable' : '',
    active ? 'card-active' : '',
    clickable ? 'card-clickable' : '',
  ].join(' ').trim()

  if (clickable) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={\`\${baseClass} \${stateClass} \${className}\`.trim()}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick?.()
          }
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <div className={\`\${baseClass} \${stateClass} \${className}\`.trim()}>
      {children}
    </div>
  )
}

export default Card
`;export{n as default};
