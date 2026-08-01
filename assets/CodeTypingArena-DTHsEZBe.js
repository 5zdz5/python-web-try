const n=`/**
 * 像素打字大战 — 样式
 * 像素风 / 3D 立体 / 彩虹流动 / 乌鸦虹彩
 */

.cta-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

/* ===== 标题区 ===== */
.cta-header {
  text-align: center;
  margin-bottom: 20px;
}

.cta-title {
  font-family: var(--font-display, 'Orbitron', sans-serif);
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0 0 8px;
}

.cta-subtitle {
  color: var(--color-text-secondary, #8a8a9a);
  font-size: 0.95rem;
  margin: 0;
}

/* ===== HUD 状态栏 ===== */
.cta-hud {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 16px;
}

.cta-hud-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px !important;
}

.cta-hud-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-muted, #555565);
}

.cta-hud-value {
  font-family: var(--font-display, 'Orbitron', sans-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary, #f0f0f5);
}

.cta-score {
  color: var(--color-accent-primary, #c4ff00);
  text-shadow: 0 0 12px var(--color-accent-glow, rgba(196, 255, 0, 0.35));
}

.cta-combo {
  color: var(--color-accent-tertiary, #ff2e63);
}

.cta-multiplier {
  font-size: 0.9rem;
  margin-left: 4px;
  color: var(--color-accent-secondary, #00e5ff);
}

/* 血量条 */
.cta-hp-bar {
  position: relative;
  width: 100%;
  height: 22px;
  background: var(--color-bg-tertiary, #1a1a25);
  border: 2px solid var(--color-border, #2a2a35);
  overflow: hidden;
}

.cta-hp-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-error, #ff2e63), var(--color-warning, #ffb800), var(--color-success, #c4ff00));
  transition: width 0.3s ease;
  background-size: 200% 100%;
  animation: rainbow-flow 4s linear infinite;
}

.cta-hp-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-primary, #f0f0f5);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.8);
}

/* ===== 游戏区域 ===== */
.cta-arena {
  position: relative;
  width: 100%;
  height: 440px;
  background: var(--color-bg-secondary, #12121a);
  border: 3px solid var(--color-border, #2a2a35);
  overflow: hidden;
  cursor: text;
  margin-bottom: 12px;
}

/* 网格背景叠加 */
.cta-arena.pixel-grid-bg {
  background-image:
    linear-gradient(rgba(58, 58, 90, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(58, 58, 90, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 底部危险线 */
.cta-danger-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-error, #ff2e63), transparent);
  box-shadow: 0 0 12px var(--color-error, #ff2e63);
  animation: rainbow-flow 2s linear infinite;
}

/* ===== 下落的代码块 ===== */
.cta-block {
  position: absolute;
  padding: 6px 12px;
  border: 2px solid;
  background: var(--color-bg-card, #14141e);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  transition: filter 0.1s, box-shadow 0.1s;
  animation: pixel-rise 0.3s ease-out;
}

.cta-block-text {
  display: block;
  color: var(--color-text-primary, #f0f0f5);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6);
}

.cta-block-easy {
  border-width: 2px;
}

.cta-block-medium {
  border-width: 2px;
  font-size: 0.95rem;
}

.cta-block-hard {
  border-width: 2px;
  font-size: 0.9rem;
  background: var(--color-bg-tertiary, #1a1a25);
}

/* ===== 漂浮文字 ===== */
.cta-float-text {
  position: absolute;
  font-family: var(--font-display, 'Orbitron', sans-serif);
  font-size: 1.2rem;
  font-weight: 900;
  pointer-events: none;
  animation: cta-float-up 0.8s ease-out forwards;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
  transform: translateX(-50%);
}

@keyframes cta-float-up {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-40px); }
}

/* ===== 覆盖层（准备/暂停/结束） ===== */
.cta-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(4px);
  z-index: 10;
}

.cta-overlay-card {
  text-align: center;
  padding: 32px 40px !important;
  max-width: 420px;
  animation: pixel-rise-tall 0.6s ease-out;
}

.cta-overlay-card h2 {
  margin: 0 0 12px;
  font-family: var(--font-display, 'Orbitron', sans-serif);
  font-size: 1.6rem;
}

.cta-overlay-card p {
  color: var(--color-text-secondary, #8a8a9a);
  margin: 6px 0;
  font-size: 0.9rem;
}

.cta-tip {
  color: var(--color-accent-secondary, #00e5ff) !important;
}

.cta-start-btn {
  margin-top: 20px;
  font-size: 1.1rem;
  padding: 14px 32px;
}

.cta-gameover-title {
  color: var(--color-error, #ff2e63);
  text-shadow: 0 0 20px rgba(255, 46, 99, 0.5);
}

.cta-result-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 20px 0;
}

.cta-result-grid > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  background: var(--color-bg-tertiary, #1a1a25);
  border: 1px solid var(--color-border, #2a2a35);
}

.cta-result-grid span {
  font-size: 0.7rem;
  color: var(--color-text-muted, #555565);
  text-transform: uppercase;
}

.cta-result-grid strong {
  font-family: var(--font-display, 'Orbitron', sans-serif);
  font-size: 1.3rem;
}

/* ===== 输入框 ===== */
.cta-input-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.cta-input {
  flex: 1;
  padding: 14px 18px !important;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-primary, #f0f0f5);
  background: var(--color-bg-secondary, #12121a);
  border: 3px solid var(--color-accent-primary, #c4ff00);
  outline: none;
  transition: box-shadow 0.2s;
}

.cta-input:focus {
  box-shadow: 0 0 0 3px var(--color-accent-glow, rgba(196, 255, 0, 0.35));
}

.cta-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cta-input::placeholder {
  color: var(--color-text-muted, #555565);
  font-weight: 400;
}

/* ===== 图例 ===== */
.cta-legend {
  padding: 14px 18px !important;
}

.cta-legend-title {
  margin: 0 0 10px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-secondary, #8a8a9a);
}

.cta-legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.cta-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--color-text-primary, #f0f0f5);
}

.cta-legend-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid var(--color-border-light, #3a3a4a);
}

/* ===== 响应式 ===== */
@media (max-width: 640px) {
  .cta-title { font-size: 1.6rem; }
  .cta-arena { height: 360px; }
  .cta-hud { grid-template-columns: repeat(2, 1fr); }
  .cta-result-grid { grid-template-columns: 1fr; }
  .cta-overlay-card { padding: 24px 20px !important; max-width: 90%; }
}
`;export{n as default};
