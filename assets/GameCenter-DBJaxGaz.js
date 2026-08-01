const n=`/* GameCenter 游戏中心聚合页样式（像素风 + 主题双适配，CSS 变量驱动） */

.game-center { min-height: 80vh; }

.gc-hero {
  padding: 64px 0 48px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-accent-primary) 14%, transparent), transparent);
  border-bottom: 1px solid var(--color-border-secondary);
}
.gc-hero-content { display: flex; flex-direction: column; gap: 18px; align-items: flex-start; }
.gc-badge {
  padding: 6px 14px;
  background: color-mix(in srgb, var(--color-accent-primary) 16%, transparent);
  color: var(--color-accent-primary);
  border: 1px solid color-mix(in srgb, var(--color-accent-primary) 42%, transparent);
  font-family: var(--font-family-mono);
  font-size: 13px;
  letter-spacing: 0.5px;
  border-radius: var(--radius-md);
}
.gc-title {
  font-size: clamp(34px, 5vw, 54px);
  margin: 0;
  line-height: 1.15;
  letter-spacing: 0.5px;
}
.gc-subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0;
}
.gc-stats-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(130px, 1fr));
  gap: 14px;
  margin-top: 8px;
  width: 100%;
}
@media (max-width: 520px) {
  .gc-stats-row { grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .gc-stat-card { padding: 12px 10px; }
}
.gc-stat-card {
  padding: 16px 18px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.gc-stat-val {
  font-size: 24px;
  font-weight: 700;
  font-family: var(--font-family-mono);
  color: var(--color-text-primary);
}
.gc-stat-label {
  font-size: 12px;
  color: var(--color-text-secondary);
  font-family: var(--font-family-mono);
}

/* ============ Game 卡栅格 ============ */
.gc-games-grid {
  padding: 48px 0 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.gc-game-card {
  display: block;
  padding: 22px;
  border-radius: var(--radius-lg);
  color: inherit;
  text-decoration: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  border: 1px solid var(--color-border-secondary);
  background: var(--color-surface-primary);
}
.gc-game-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px color-mix(in srgb, var(--color-accent-primary) 18%, transparent);
  border-color: color-mix(in srgb, var(--color-accent-primary) 55%, transparent);
}
.gc-game-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 12px;
}
.gc-game-icon { font-size: 40px; }
.gc-game-tag {
  font-family: var(--font-family-mono);
  font-size: 12px;
  padding: 4px 10px;
  background: color-mix(in srgb, var(--color-accent-success) 16%, transparent);
  color: var(--color-accent-success);
  border: 1px solid color-mix(in srgb, var(--color-accent-success) 40%, transparent);
  border-radius: var(--radius-sm);
}
.gc-game-name {
  font-size: 18px; margin: 0 0 8px; color: var(--color-text-primary);
  letter-spacing: 0.2px;
}
.gc-game-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.55;
  min-height: 66px;
  margin: 0 0 14px;
}
.gc-game-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-secondary);
}
.gc-game-diff {
  font-family: var(--font-family-mono);
  font-size: 13px;
  color: var(--color-accent-warning);
  letter-spacing: 1px;
}
.gc-diff-empty { color: var(--color-text-disabled); margin-left: 2px; }
.gc-game-enter {
  font-family: var(--font-family-mono);
  font-size: 13px;
  color: var(--color-accent-primary);
  font-weight: 600;
}
.gc-back-nav {
  padding: 28px 0 80px;
  display: flex; justify-content: space-between;
}
`;export{n as default};
