const e=`/**
 * ThemeContext — 主题系统上下文
 * 负责：主题持久化 / 切换 / CSS 变量注入 / data-theme 切换
 */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ThemeContextValue, ThemeId, ThemePreset } from '../types/theme'
import { ALL_THEMES, DEFAULT_THEME_ID, STORAGE_KEY } from '../data/themes'

const ThemeContext = createContext<ThemeContextValue | null>(null)

// ---------- 工具：把主题对象翻译成 inline style（CSS 变量字符串） ----------
function themeToCssVars(theme: ThemePreset): Record<string, string> {
  const { colors, fonts, radii, decoration } = theme
  return {
    // 背景
    '--color-bg-primary': colors.bgPrimary,
    '--color-bg-secondary': colors.bgSecondary,
    '--color-bg-tertiary': colors.bgTertiary,
    '--color-bg-card': colors.bgCard,
    // 主色
    '--color-accent-primary': colors.accentPrimary,
    '--color-accent-secondary': colors.accentSecondary,
    '--color-accent-tertiary': colors.accentTertiary,
    // 发光
    '--color-accent-glow': colors.accentGlow,
    '--color-accent-glow-cyan': colors.accentGlowCyan,
    // 文字
    '--color-text-primary': colors.textPrimary,
    '--color-text-secondary': colors.textSecondary,
    '--color-text-muted': colors.textMuted,
    // 边框
    '--color-border': colors.border,
    '--color-border-light': colors.borderLight,
    '--color-border-accent': colors.borderAccent,
    // 功能色
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--color-success': colors.success,
    '--color-locked': colors.locked,
    // 字体
    '--font-family': fonts.family,
    '--font-display': fonts.display,
    '--font-mono': fonts.mono,
    // 圆角
    '--radius-sm': radii.sm,
    '--radius-md': radii.md,
    '--radius-lg': radii.lg,
    '--radius-xl': radii.xl,
    // 斜切角装饰
    '--zzz-clip-path': decoration.clipPath === 'none' ? 'none' : decoration.clipPath,
    '--zzz-clip-path-sm':
      decoration.clipPathSm === 'none' ? 'none' : decoration.clipPathSm,
  }
}

// ---------- 主题选择器 ----------
function findTheme(themeId: ThemeId): ThemePreset {
  return ALL_THEMES.find((t) => t.meta.id === themeId) ?? ALL_THEMES.find((t) => t.meta.id === DEFAULT_THEME_ID)!
}

// ---------- Provider ----------
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. 初始化：先从 localStorage 读取
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME_ID
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved && ALL_THEMES.some((t) => t.meta.id === saved)) return saved
    } catch {
      /* ignore */
    }
    return DEFAULT_THEME_ID
  })

  const theme = useMemo(() => findTheme(themeId), [themeId])

  // 2. 切换主题（写入 state + 持久化 + 打 data-theme 标签）
  const setThemeId = useCallback((id: ThemeId) => {
    const valid = ALL_THEMES.some((t) => t.meta.id === id)
    const next = valid ? id : DEFAULT_THEME_ID
    setThemeIdState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const resetTheme = useCallback(() => setThemeId(DEFAULT_THEME_ID), [setThemeId])

  // 3. 应用到根元素（document.documentElement）
  useEffect(() => {
    const root = document.documentElement
    const targetThemeId = theme.meta.id
    
    // 标记 data-theme（供未来高级定制）
    root.setAttribute('data-theme', targetThemeId)
    
    // 创建 MutationObserver 监控并保持正确的 data-theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const currentValue = root.getAttribute('data-theme')
          if (currentValue !== targetThemeId) {
            console.warn('[ThemeContext] data-theme was changed externally, restoring to:', targetThemeId)
            root.setAttribute('data-theme', targetThemeId)
          }
        }
      })
    })
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    
    // 写入 CSS 变量
    const vars = themeToCssVars(theme)
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
    // 背景图案
    if (theme.decoration.bgPattern) {
      root.style.setProperty('--theme-bg-pattern', theme.decoration.bgPattern)
    } else {
      root.style.removeProperty('--theme-bg-pattern')
    }
    // 扫描线/故障/霓虹开关（body class，供 CSS 选择）
    const body = document.body
    body.classList.toggle('theme-scanline', !!theme.decoration.scanline)
    body.classList.toggle('theme-glitch', !!theme.decoration.glitchEffect)
    body.classList.toggle('theme-neon', !!theme.decoration.neonGlow)
    
    // 清理函数
    return () => {
      observer.disconnect()
    }
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      themeId,
      theme,
      themes: ALL_THEMES,
      setThemeId,
      resetTheme,
    }),
    [themeId, theme, setThemeId, resetTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// ---------- Hook ----------
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
`;export{e as default};
