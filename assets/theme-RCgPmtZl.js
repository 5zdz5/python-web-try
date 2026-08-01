const n=`/**
 * 主题系统类型定义
 */

export interface ThemeColors {
  // 背景
  bgPrimary: string
  bgSecondary: string
  bgTertiary: string
  bgCard: string

  // 主题主色 - 1/2/3
  accentPrimary: string
  accentSecondary: string
  accentTertiary: string

  // 发光色
  accentGlow: string
  accentGlowCyan: string

  // 文字
  textPrimary: string
  textSecondary: string
  textMuted: string

  // 边框
  border: string
  borderLight: string
  borderAccent: string

  // 功能色
  warning: string
  error: string
  success: string
  locked: string
}

export interface ThemeFonts {
  family: string
  display: string
  mono: string
}

export interface ThemeDecoration {
  // 斜切角 clip-path
  clipPath: string
  clipPathSm: string

  // 装饰：是否启用扫描线背景
  scanline: boolean
  // 装饰：是否启用故障动画字体
  glitchEffect: boolean
  // 装饰：是否启用霓虹发光
  neonGlow: boolean
  // 主题背景纹理图案（可空）
  bgPattern?: string
}

export interface ThemeRadii {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ThemeMeta {
  id: string
  name: string
  author: string
  description: string
  /** 主题氛围标签，用于搜索筛选 */
  tags: string[]
  /** 调色板预览（3~6个颜色） */
  palette: string[]
  /** 版本号，用于未来升级迁移 */
  version: string
}

export interface ThemePreset {
  meta: ThemeMeta
  colors: ThemeColors
  fonts: ThemeFonts
  radii: ThemeRadii
  decoration: ThemeDecoration
}

export type ThemeId = string

export interface ThemeContextValue {
  /** 当前主题 ID */
  themeId: ThemeId
  /** 当前主题完整定义 */
  theme: ThemePreset
  /** 可用主题列表（可展示到 UI 切换面板） */
  themes: ThemePreset[]
  /** 切换主题 ID，内部会持久化到 localStorage */
  setThemeId: (id: ThemeId) => void
  /** 重置为默认主题 */
  resetTheme: () => void
}
`;export{n as default};
