const n=`/* ============================================================
 *  ThemePanel — 绝区零风格主题切换面板
 *  暗色赛博背景 / 斜切角卡片 / 霓虹边框 / 发光过渡
 * ============================================================ */

/* ---- 遮罩层 ---- */
.tp-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: tp-fade-in 150ms ease-out;
}

@keyframes tp-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ---- 主弹窗 ---- */
.tp-modal {
  width: 100%;
  max-width: 960px;
  max-height: 90vh;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-primary);
  border-radius: var(--radius-sm);
  clip-path: var(--zzz-clip-path);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 40px var(--color-accent-glow), 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: tp-slide-up 220ms cubic-bezier(.2,.8,.2,1);
  position: relative;
}

.tp-modal::before {
  content: 'THEME SYSTEM // ONLINE';
  position: absolute;
  top: 14px;
  right: 18px;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-text-muted);
  letter-spacing: 0.2em;
  opacity: 0.6;
  z-index: 2;
}

@keyframes tp-slide-up {
  from { opacity: 0; transform: translateY(16px) scale(.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* ---- 头部 ---- */
.tp-head {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:
    radial-gradient(ellipse at 0% 0%, rgba(196, 255, 0, 0.08), transparent 60%),
    linear-gradient(180deg, var(--color-bg-secondary), var(--color-bg-card));
}

.tp-head-left { display: flex; flex-direction: column; gap: 6px; }

.tp-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(196, 255, 0, 0.08);
  border: 1px solid var(--color-border-accent);
  color: var(--color-accent-primary);
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  letter-spacing: 0.2em;
  text-shadow: 0 0 4px var(--color-accent-glow);
  align-self: flex-start;
}

.tp-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 900;
  color: var(--color-accent-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-shadow: 0 0 10px var(--color-accent-glow), 0 0 20px var(--color-accent-glow);
}

.tp-close {
  background: transparent;
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 14px;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: var(--zzz-clip-path-sm);
}

.tp-close:hover {
  background: rgba(255, 46, 99, 0.1);
  color: var(--color-accent-tertiary);
  border-color: rgba(255, 46, 99, 0.3);
  box-shadow: 0 0 10px rgba(255, 46, 99, 0.3);
}

/* ---- 当前主题信息卡 ---- */
.tp-current {
  margin: 20px 24px 0;
  padding: 16px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-secondary);
  border-radius: var(--radius-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  clip-path: var(--zzz-clip-path-sm);
  flex-wrap: wrap;
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.08);
}

.tp-current-left { display: flex; align-items: center; gap: 16px; flex: 1; min-width: 0; }

.tp-current-info { display: flex; flex-direction: column; gap: 4px; min-width: 0; }

.tp-current-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.tp-current-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 900;
  color: var(--color-accent-secondary);
  letter-spacing: 0.05em;
  text-shadow: 0 0 6px var(--color-accent-glow-cyan);
}

.tp-current-desc {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.tp-current-actions { display: flex; gap: 8px; }

.tp-btn {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--color-border);
  background: rgba(196, 255, 0, 0.04);
  color: var(--color-text-primary);
  clip-path: var(--zzz-clip-path-sm);
}

.tp-btn-primary {
  background: rgba(196, 255, 0, 0.12);
  color: var(--color-accent-primary);
  border-color: var(--color-border-accent);
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.tp-btn-primary:hover:not(:disabled) {
  background: rgba(196, 255, 0, 0.22);
  box-shadow: 0 0 12px var(--color-accent-glow);
  transform: translateY(-1px);
}

.tp-btn-primary:disabled { opacity: 0.35; cursor: not-allowed; }

/* ---- 筛选标签 ---- */
.tp-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 24px 0;
}

.tp-chip {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tp-chip:hover {
  border-color: var(--color-border-accent);
  color: var(--color-text-primary);
}

.tp-chip.active {
  background: rgba(196, 255, 0, 0.1);
  color: var(--color-accent-primary);
  border-color: var(--color-border-accent);
  text-shadow: 0 0 4px var(--color-accent-glow);
  box-shadow: 0 0 6px rgba(196, 255, 0, 0.15);
}

/* ---- 卡片网格 ---- */
.tp-grid {
  flex: 1;
  overflow-y: auto;
  margin: 16px 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  padding-right: 6px;
}

.tp-grid::-webkit-scrollbar { width: 6px; }
.tp-grid::-webkit-scrollbar-track { background: var(--color-bg-tertiary); }
.tp-grid::-webkit-scrollbar-thumb { background: var(--color-border-accent); border-radius: var(--radius-sm); }

.tp-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 13px;
}

/* ---- 主题卡 ---- */
.tp-card {
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--tp-card-bg, var(--color-bg-card));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-fast);
  clip-path: var(--zzz-clip-path-sm);
  position: relative;
  text-align: left;
  /* min-height 确保卡片视觉统一 */
  min-height: 260px;
}

.tp-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-left: 3px solid var(--tp-card-accent, var(--color-accent-primary));
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;
}

.tp-card:hover {
  transform: translateY(-2px);
  border-color: var(--tp-card-accent, var(--color-border-accent));
  box-shadow: 0 0 18px var(--color-accent-glow);
}

.tp-card:hover::before,
.tp-card.active::before {
  opacity: 1;
}

.tp-card.active {
  border-color: var(--tp-card-accent, var(--color-border-accent));
  box-shadow: 0 0 20px rgba(196, 255, 0, 0.18);
}

/* ---- 预览区 ---- */
.tp-card-preview {
  height: 100px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 10px 12px;
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}

.tp-card-check {
  position: absolute;
  top: 8px;
  right: 10px;
  background: rgba(196, 255, 0, 0.15);
  color: var(--tp-card-accent, var(--color-accent-primary));
  border: 1px solid var(--tp-card-accent, var(--color-border-accent));
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-shadow: 0 0 4px currentColor;
}

/* ---- 调色板色条 ---- */
.tp-palette {
  display: flex;
  gap: 4px;
}

.tp-palette-dot {
  width: 18px;
  height: 18px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform var(--transition-fast);
}

.tp-palette-dot:hover { transform: scale(1.3); z-index: 1; }

.tp-current-left .tp-palette-dot {
  width: 28px;
  height: 28px;
}

/* ---- 卡内容 ---- */
.tp-card-body {
  padding: 12px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  color: var(--tp-card-text, var(--color-text-primary));
}

.tp-card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.tp-card-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 900;
  color: var(--tp-card-accent, var(--color-accent-primary));
  letter-spacing: 0.05em;
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.tp-card-ver {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

.tp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tp-tag {
  background: rgba(196, 255, 0, 0.06);
  color: var(--tp-card-accent, var(--color-accent-primary));
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tp-card-desc {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  line-height: 1.55;
  margin-top: auto;
}

/* ---- 底部提示 ---- */
.tp-foot {
  padding: 14px 24px 18px;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  text-align: center;
  background: linear-gradient(0deg, var(--color-bg-secondary), transparent);
}

/* ---- 响应式 ---- */
@media (max-width: 640px) {
  .tp-overlay { padding: 0; }
  .tp-modal {
    max-height: 100vh;
    border-left-width: 2px;
    clip-path: none;
  }
  .tp-head { padding: 16px 18px 12px; }
  .tp-current { margin: 16px 18px 0; flex-direction: column; align-items: stretch; }
  .tp-current-actions { width: 100%; }
  .tp-current-actions .tp-btn { flex: 1; }
  .tp-filters { margin: 14px 18px 0; }
  .tp-grid { margin: 14px 18px 0; grid-template-columns: 1fr; }
  .tp-foot { padding: 12px 18px 16px; }
}
`;export{n as default};
