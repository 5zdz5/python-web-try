/**
 * 主题数据 — 5 套可切换预设
 * 所有颜色定义可作为 data-theme="xxx" 时的 CSS 变量来源
 */
import type { ThemePreset } from '../types/theme'

// ============================================================
// 1. ZZZ 绝区零（系统默认，赛博朋克荧光黄绿 / 青 / 品红）
// ============================================================
export const THEME_ZZZ: ThemePreset = {
  meta: {
    id: 'zzz',
    name: '绝区零 ZZZ',
    author: 'Python Quest',
    description: '绝区零配色 + 简易方块 UI：直角大色块、实线边框，无斜切与扫描线。',
    tags: ['方块', '深色', '荧光', '简洁', '高对比'],
    palette: ['#c4ff00', '#00e5ff', '#ff2e63', '#0a0a0f', '#12121a'],
    version: '1.0.0',
  },
  colors: {
    bgPrimary: '#0a0a0f',
    bgSecondary: '#12121a',
    bgTertiary: '#1a1a25',
    bgCard: '#14141e',
    accentPrimary: '#c4ff00',
    accentSecondary: '#00e5ff',
    accentTertiary: '#ff2e63',
    accentGlow: 'rgba(196, 255, 0, 0.35)',
    accentGlowCyan: 'rgba(0, 229, 255, 0.30)',
    textPrimary: '#f0f0f5',
    textSecondary: '#8a8a9a',
    textMuted: '#555565',
    border: '#2a2a35',
    borderLight: '#3a3a4a',
    borderAccent: 'rgba(196, 255, 0, 0.30)',
    warning: '#ffb800',
    error: '#ff2e63',
    success: '#c4ff00',
    locked: '#3a3a45',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    mono: '"Courier New", "JetBrains Mono", "Consolas", monospace',
  },
  radii: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: false,
    bgPattern: 'none',
  },
}

// ============================================================
// 2. 原神 Genshin Impact — 墨绿金 / 暖色国风
// ============================================================
export const THEME_GENSHIN: ThemePreset = {
  meta: {
    id: 'genshin',
    name: '原神 Genshin',
    author: 'Python Quest',
    description: '提瓦特大陆风格：墨绿打底 + 金色点缀 + 柔和木材质感，适合沉浸式阅读。',
    tags: ['国风', '深色', '金色', '柔和', '低对比'],
    palette: ['#f4c56a', '#2b6b5e', '#c8a96a', '#1a222b', '#2a3340'],
    version: '1.0.0',
  },
  colors: {
    bgPrimary: '#1a222b',
    bgSecondary: '#202a36',
    bgTertiary: '#2a3340',
    bgCard: '#222c38',
    accentPrimary: '#f4c56a',
    accentSecondary: '#2b6b5e',
    accentTertiary: '#c0664a',
    accentGlow: 'rgba(244, 197, 106, 0.30)',
    accentGlowCyan: 'rgba(43, 107, 94, 0.30)',
    textPrimary: '#f5ecd7',
    textSecondary: '#b0a88d',
    textMuted: '#6d6a58',
    border: '#3b3326',
    borderLight: '#4a4130',
    borderAccent: 'rgba(244, 197, 106, 0.28)',
    warning: '#e0a040',
    error: '#c94a4a',
    success: '#5ec07c',
    locked: '#3a3328',
  },
  fonts: {
    family: '"Noto Serif SC", "PingFang SC", system-ui, serif',
    display: '"Noto Serif SC", "ZCOOL XiaoWei", serif',
    mono: '"Courier New", "Consolas", monospace',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: false,
    bgPattern:
      'radial-gradient(ellipse at 10% 0%, rgba(244, 197, 106, 0.06), transparent 50%), radial-gradient(ellipse at 90% 100%, rgba(43, 107, 94, 0.08), transparent 50%)',
  },
}

// ============================================================
// 3. 星铁 Honkai Star Rail — 宇宙蓝紫 / 星空紫
// ============================================================
export const THEME_STARRAIL: ThemePreset = {
  meta: {
    id: 'starrail',
    name: '星穹铁道 Star Rail',
    author: 'Python Quest',
    description: '星空列车风格：深蓝紫 + 星际光辉 + 银灰色边框，适合科幻感探索。',
    tags: ['宇宙', '深色', '紫', '蓝', '未来感'],
    palette: ['#a855f7', '#3b82f6', '#e0e7ff', '#0b0c1e', '#141530'],
    version: '1.0.0',
  },
  colors: {
    bgPrimary: '#0b0c1e',
    bgSecondary: '#12142e',
    bgTertiary: '#1a1d3f',
    bgCard: '#15172a',
    accentPrimary: '#a855f7',
    accentSecondary: '#3b82f6',
    accentTertiary: '#f59e0b',
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    accentGlowCyan: 'rgba(59, 130, 246, 0.35)',
    textPrimary: '#e8ecff',
    textSecondary: '#8892c0',
    textMuted: '#56609a',
    border: '#2a2b58',
    borderLight: '#3b3d7a',
    borderAccent: 'rgba(168, 85, 247, 0.30)',
    warning: '#f59e0b',
    error: '#ef4444',
    success: '#10b981',
    locked: '#2a2a4a',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Orbitron", "Rajdhani", "Noto Sans SC", sans-serif',
    mono: '"Courier New", "JetBrains Mono", monospace',
  },
  radii: {
    sm: '3px',
    md: '6px',
    lg: '10px',
    xl: '14px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: true,
    bgPattern:
      'radial-gradient(circle at 15% 30%, rgba(168, 85, 247, 0.08), transparent 40%), radial-gradient(circle at 85% 70%, rgba(59, 130, 246, 0.08), transparent 40%)',
  },
}

// ============================================================
// 4. Cyberpunk 2077 — 黄红警告 / 黑科技感
// ============================================================
export const THEME_CYBERPUNK2077: ThemePreset = {
  meta: {
    id: 'cyberpunk2077',
    name: '赛博朋克 2077',
    author: 'Python Quest',
    description: '夜之城风格：荧光警告黄 + 赤红危险色 + 重度扫描线，强烈的警示氛围。',
    tags: ['赛博朋克', '深色', '警告黄', '红', '高对比'],
    palette: ['#ffd912', '#ff3b3b', '#f5f5f5', '#0d0d0d', '#1a1a1a'],
    version: '1.0.0',
  },
  colors: {
    bgPrimary: '#0d0d0d',
    bgSecondary: '#151515',
    bgTertiary: '#1f1f1f',
    bgCard: '#181818',
    accentPrimary: '#ffd912',
    accentSecondary: '#00e5ff',
    accentTertiary: '#ff3b3b',
    accentGlow: 'rgba(255, 217, 18, 0.35)',
    accentGlowCyan: 'rgba(0, 229, 255, 0.30)',
    textPrimary: '#f5f5f5',
    textSecondary: '#9a9a9a',
    textMuted: '#606060',
    border: '#2c2c2c',
    borderLight: '#3d3d3d',
    borderAccent: 'rgba(255, 217, 18, 0.30)',
    warning: '#ffd912',
    error: '#ff3b3b',
    success: '#7dff4b',
    locked: '#2a2a2a',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Orbitron", "Rajdhani", "Noto Sans SC", sans-serif',
    mono: '"Courier New", "JetBrains Mono", monospace',
  },
  radii: {
    sm: '0px',
    md: '0px',
    lg: '2px',
    xl: '4px',
  },
  decoration: {
    clipPath:
      'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
    clipPathSm:
      'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
    scanline: true,
    glitchEffect: true,
    neonGlow: true,
    bgPattern:
      'linear-gradient(135deg, rgba(255, 59, 59, 0.04) 0%, transparent 50%), linear-gradient(225deg, rgba(255, 217, 18, 0.04) 0%, transparent 50%)',
  },
}

// ============================================================
// 5. Light Tech 浅色科技 — 清爽白 / 科技蓝
// ============================================================
export const THEME_LIGHT_TECH: ThemePreset = {
  meta: {
    id: 'light-tech',
    name: '浅色科技 Light Tech',
    author: 'Python Quest',
    description: '日间阅读友好：纯白背景 + 科技蓝主色 + 浅灰卡片，适合办公环境。',
    tags: ['浅色', '商务', '蓝', '清爽', '低蓝光'],
    palette: ['#0ea5e9', '#6366f1', '#0f172a', '#ffffff', '#f8fafc'],
    version: '1.0.0',
  },
  colors: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f8fafc',
    bgTertiary: '#f1f5f9',
    bgCard: '#ffffff',
    accentPrimary: '#0ea5e9',
    accentSecondary: '#6366f1',
    accentTertiary: '#ec4899',
    accentGlow: 'rgba(14, 165, 233, 0.25)',
    accentGlowCyan: 'rgba(99, 102, 241, 0.25)',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    borderAccent: 'rgba(14, 165, 233, 0.30)',
    warning: '#f59e0b',
    error: '#ef4444',
    success: '#10b981',
    locked: '#e2e8f0',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Orbitron", "Noto Sans SC", sans-serif',
    mono: '"Courier New", "JetBrains Mono", monospace',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: false,
    bgPattern:
      'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.04), transparent 60%), radial-gradient(ellipse at bottom right, rgba(99, 102, 241, 0.04), transparent 60%)',
  },
}

// ============================================================
// 6. 像素彩虹 Pixel Spectrum — 反射七彩光 / 泰拉瑞亚微光液体
// ============================================================
export const THEME_PIXEL_SPECTRUM: ThemePreset = {
  meta: {
    id: 'pixel-spectrum',
    name: '像素彩虹 Pixel Spectrum',
    author: 'Python Quest',
    description: '简易方块 UI：直角面板 + 实线边框 + 硬边阴影，无 3D/彩虹动画。',
    tags: ['方块', '简洁', '扁平', '深色'],
    palette: ['#ff0080', '#ff8c00', '#ffed00', '#00ff88', '#00c8ff', '#8000ff', '#ff00ff'],
    version: '2.0.0',
  },
  colors: {
    bgPrimary: '#0a0a12',
    bgSecondary: '#12121f',
    bgTertiary: '#1a1a2e',
    bgCard: '#141428',
    accentPrimary: '#00ff88',
    accentSecondary: '#ff0080',
    accentTertiary: '#00c8ff',
    accentGlow: 'rgba(0, 255, 136, 0.40)',
    accentGlowCyan: 'rgba(255, 0, 128, 0.35)',
    textPrimary: '#f0f0ff',
    textSecondary: '#a0a0c0',
    textMuted: '#606080',
    border: '#3a3a5a',
    borderLight: '#4a4a6a',
    borderAccent: 'rgba(0, 255, 136, 0.40)',
    warning: '#ffed00',
    error: '#ff3366',
    success: '#00ff88',
    locked: '#3a3a4a',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Courier New", "Consolas", monospace',
  },
  radii: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: false,
    bgPattern: 'none',
  },
}

// ============================================================
// 7. 像素乌鸦 Pixel Crow — 简易方块（深色）
// ============================================================
export const THEME_PIXEL_CROW: ThemePreset = {
  meta: {
    id: 'pixel-crow',
    name: '像素乌鸦 Pixel Crow',
    author: 'Python Quest',
    description: '简易方块 UI：深色底 + 直角块，无虹彩/3D 特效。',
    tags: ['方块', '简洁', '深色', '扁平'],
    palette: ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#e94560'],
    version: '2.0.0',
  },
  colors: {
    bgPrimary: '#08080f',
    bgSecondary: '#0f0f1a',
    bgTertiary: '#161625',
    bgCard: '#0c0c18',
    accentPrimary: '#9d4edd',
    accentSecondary: '#e94560',
    accentTertiary: '#00d4ff',
    accentGlow: 'rgba(157, 78, 221, 0.45)',
    accentGlowCyan: 'rgba(233, 69, 96, 0.35)',
    textPrimary: '#e8e8f0',
    textSecondary: '#9090a8',
    textMuted: '#505068',
    border: '#2a2a40',
    borderLight: '#3a3a50',
    borderAccent: 'rgba(157, 78, 221, 0.40)',
    warning: '#ffa500',
    error: '#e94560',
    success: '#4ade80',
    locked: '#2a2a38',
  },
  fonts: {
    family: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    display: '"Noto Sans SC", "PingFang SC", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Courier New", "Consolas", monospace',
  },
  radii: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
  },
  decoration: {
    clipPath: 'none',
    clipPathSm: 'none',
    scanline: false,
    glitchEffect: false,
    neonGlow: false,
    bgPattern: 'none',
  },
}

// ============================================================
// 主题注册表 — 默认顺序
// ============================================================
export const ALL_THEMES: ThemePreset[] = [
  THEME_ZZZ,
  THEME_GENSHIN,
  THEME_STARRAIL,
  THEME_CYBERPUNK2077,
  THEME_LIGHT_TECH,
  THEME_PIXEL_SPECTRUM,
  THEME_PIXEL_CROW,
]

export const DEFAULT_THEME_ID = 'zzz'

export const STORAGE_KEY = 'python-quest-theme@v2.0'
