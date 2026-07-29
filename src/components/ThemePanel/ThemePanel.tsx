/**
 * ThemePanel — 主题切换面板
 * 模态弹窗风格，展示 5 个主题卡片 + 当前主题详情 + 重置按钮
 */
import React, { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import type { ThemePreset } from '../../types/theme'
import './ThemePanel.css'

interface ThemePanelProps {
  isOpen: boolean
  onClose: () => void
}

const ThemePanel: React.FC<ThemePanelProps> = ({ isOpen, onClose }) => {
  const { themes, themeId, setThemeId, resetTheme } = useTheme()
  const [filter, setFilter] = useState<string>('ALL')

  // ESC 关闭
  useEffect(() => {
    if (!isOpen) return
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen, onClose])

  // 按氛围标签聚合（去重）
  const allTags = useMemo(() => {
    const s = new Set<string>()
    themes.forEach((t) => t.meta.tags.forEach((tg) => s.add(tg)))
    return ['ALL', ...Array.from(s)]
  }, [themes])

  const filteredThemes = useMemo(() => {
    if (filter === 'ALL') return themes
    return themes.filter((t) => t.meta.tags.includes(filter))
  }, [themes, filter])

  if (!isOpen) return null

  return (
    <div className="tp-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="主题切换面板">
      <div className="tp-modal" onClick={(e) => e.stopPropagation()}>
        {/* 头部 */}
        <div className="tp-head">
          <div className="tp-head-left">
            <span className="tp-badge">THEMES // {themes.length}</span>
            <h2 className="tp-title">主题系统</h2>
          </div>
          <button className="tp-close" onClick={onClose} aria-label="关闭">
            ✕
          </button>
        </div>

        {/* 当前主题信息卡 */}
        <div className="tp-current">
          <div className="tp-current-left">
            <PaletteStrip palette={themes.find((t) => t.meta.id === themeId)?.meta.palette ?? []} />
            <div className="tp-current-info">
              <div className="tp-current-label">当前主题</div>
              <div className="tp-current-name">
                {themes.find((t) => t.meta.id === themeId)?.meta.name ?? themeId}
              </div>
              <div className="tp-current-desc">
                {themes.find((t) => t.meta.id === themeId)?.meta.description ?? ''}
              </div>
            </div>
          </div>
          <div className="tp-current-actions">
            <button
              className="tp-btn tp-btn-primary"
              onClick={resetTheme}
              disabled={themeId === 'zzz'}
              title="重置为默认绝区零主题"
            >
              ♻️ 恢复默认
            </button>
          </div>
        </div>

        {/* 筛选标签 */}
        <div className="tp-filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tp-chip ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag === 'ALL' ? '全部' : tag}
            </button>
          ))}
        </div>

        {/* 主题卡片网格 */}
        <div className="tp-grid">
          {filteredThemes.map((t) => (
            <ThemeCard key={t.meta.id} theme={t} active={t.meta.id === themeId} onClick={() => setThemeId(t.meta.id)} />
          ))}
          {filteredThemes.length === 0 && (
            <div className="tp-empty">没有符合筛选条件的主题</div>
          )}
        </div>

        {/* 底部提示 */}
        <div className="tp-foot">
          <span>💡 点击任一主题卡即可全局生效，选择会自动保存。</span>
        </div>
      </div>
    </div>
  )
}

// ========== 子组件：主题卡 ==========
interface ThemeCardProps {
  theme: ThemePreset
  active: boolean
  onClick: () => void
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, active, onClick }) => {
  const { meta } = theme
  return (
    <button
      type="button"
      className={`tp-card ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
      style={{
        // 给卡片用各自主色做边框和 accent 色
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--tp-card-accent' as any]: theme.colors.accentPrimary,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--tp-card-bg' as any]: theme.colors.bgCard,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--tp-card-text' as any]: theme.colors.textPrimary,
      }}
    >
      <div className="tp-card-preview" style={{ background: `linear-gradient(135deg, ${meta.palette[0] ?? '#000'} 0%, ${meta.palette[1] ?? '#000'} 50%, ${meta.palette[2] ?? '#000'} 100%)` }}>
        <PaletteStrip palette={meta.palette} />
        {active && <div className="tp-card-check">✓ 当前</div>}
      </div>
      <div className="tp-card-body">
        <div className="tp-card-head">
          <div className="tp-card-name">{meta.name}</div>
          <div className="tp-card-ver">v{meta.version}</div>
        </div>
        <div className="tp-card-tags">
          {meta.tags.slice(0, 3).map((tg) => (
            <span key={tg} className="tp-tag">{tg}</span>
          ))}
        </div>
        <div className="tp-card-desc">{meta.description}</div>
      </div>
    </button>
  )
}

// ========== 子组件：调色板色条 ==========
const PaletteStrip: React.FC<{ palette: string[] }> = ({ palette }) => (
  <div className="tp-palette">
    {palette.slice(0, 6).map((c, i) => (
      <span key={i} className="tp-palette-dot" style={{ background: c }} />
    ))}
  </div>
)

export default ThemePanel
