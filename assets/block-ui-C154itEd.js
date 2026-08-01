const e=`/**
 * 简易方块 UI — 扁平直角块 + 硬边偏移阴影
 * 覆盖 pixel 主题的 3D / 彩虹 / 虹彩等重特效（仍保留 opt-in 类名，默认不启用）
 */

[data-theme='pixel-spectrum'] .pixel-card-3d::before,
[data-theme='pixel-spectrum'] .pixel-card-3d::after,
[data-theme='pixel-crow'] .pixel-card-3d::before,
[data-theme='pixel-crow'] .pixel-card-3d::after,
[data-theme='pixel-spectrum'] .pixel-btn-3d .btn-face::before,
[data-theme='pixel-spectrum'] .pixel-btn-3d .btn-face::after,
[data-theme='pixel-crow'] .pixel-btn-3d .btn-face::before,
[data-theme='pixel-crow'] .pixel-btn-3d .btn-face::after {
  display: none;
}

[data-theme='pixel-spectrum'] .pixel-card-3d,
[data-theme='pixel-crow'] .pixel-card-3d,
[data-theme='pixel-spectrum'] .pixel-btn-3d .btn-face,
[data-theme='pixel-crow'] .pixel-btn-3d .btn-face {
  transform: none !important;
}

[data-theme='pixel-spectrum'] .pixel-panel,
[data-theme='pixel-crow'] .pixel-panel {
  border: 2px solid var(--color-border);
  border-radius: 0;
  box-shadow: 4px 4px 0 var(--color-border);
  image-rendering: auto;
}

[data-theme='pixel-spectrum'] .pixel-panel-accent,
[data-theme='pixel-crow'] .pixel-panel-accent {
  border-color: var(--color-accent-primary);
  box-shadow: 4px 4px 0 color-mix(in srgb, var(--color-accent-primary) 45%, var(--color-border));
}

[data-theme='pixel-spectrum'] .rainbow-text,
[data-theme='pixel-crow'] .rainbow-text,
[data-theme='pixel-spectrum'] .rainbow-border,
[data-theme='pixel-crow'] .rainbow-border,
[data-theme='pixel-spectrum'] .crow-iridescent,
[data-theme='pixel-crow'] .crow-iridescent,
[data-theme='pixel-spectrum'] .crow-black,
[data-theme='pixel-crow'] .crow-black {
  animation: none !important;
  background: none !important;
  -webkit-background-clip: unset !important;
  background-clip: unset !important;
  color: var(--color-text-primary);
  border-color: var(--color-border);
  box-shadow: none;
}

[data-theme='pixel-spectrum'] .pixel-shadow,
[data-theme='pixel-crow'] .pixel-shadow,
[data-theme='pixel-spectrum'] .pixel-shadow-sm,
[data-theme='pixel-crow'] .pixel-shadow-sm,
[data-theme='pixel-spectrum'] .pixel-shadow-lg,
[data-theme='pixel-crow'] .pixel-shadow-lg,
[data-theme='pixel-spectrum'] .pixel-shadow-rainbow,
[data-theme='pixel-crow'] .pixel-shadow-rainbow {
  box-shadow: 4px 4px 0 var(--color-border);
}

[data-theme='pixel-spectrum'] .pixel-btn,
[data-theme='pixel-crow'] .pixel-btn {
  font-family: var(--font-family);
  text-transform: none;
  letter-spacing: 0.02em;
  border: 2px solid var(--color-border);
  border-radius: 0;
  box-shadow: 4px 4px 0 var(--color-border);
  image-rendering: auto;
}

[data-theme='pixel-spectrum'] .pixel-btn-accent,
[data-theme='pixel-crow'] .pixel-btn-accent {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
  box-shadow: 4px 4px 0 color-mix(in srgb, var(--color-accent-primary) 50%, black);
}

[data-theme='pixel-spectrum'] .pixel-btn:active,
[data-theme='pixel-crow'] .pixel-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--color-border);
}

[data-theme='zzz'] .btn,
[data-theme='pixel-spectrum'] .btn,
[data-theme='pixel-crow'] .btn {
  border-radius: 0;
}`;export{e as default};
