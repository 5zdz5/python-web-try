const n=`/* ============================================================
 *  PluginShell — 插件页面通用外壳
 *  统一头部 / 返回 / 主体 / 像素风
 * ============================================================ */

.plugin-shell {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-3xl);
  max-width: 1280px;
  margin: 0 auto;
}

.plugin-shell-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
  position: relative;
  animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

.plugin-shell-header::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 80px;
  height: 2px;
  background: var(--color-accent-primary);
  box-shadow: 0 0 8px var(--color-accent-glow);
}

.plugin-shell-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: all 0.12s;
  text-decoration: none;
  flex-shrink: 0;
}

.plugin-shell-back:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  transform: translateX(-2px);
}

.plugin-shell-title-wrap {
  flex: 1;
}

.plugin-shell-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.plugin-shell-icon {
  font-size: 1.6rem;
}

.plugin-shell-subtitle {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-top: 4px;
  letter-spacing: 0.02em;
}

.plugin-shell-vendor {
  display: inline-block;
  font-size: 0.7rem;
  padding: 2px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-left: var(--spacing-sm);
}

.plugin-shell-body {
  animation: fadeIn 0.5s ease-out 0.1s backwards;
}

/* 通用区块 */
.plugin-section {
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.plugin-section-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.plugin-section-title::before {
  content: '▸';
  color: var(--color-accent-secondary);
}

/* 通用按钮（复用） */
.plugin-btn {
  font-family: var(--font-display);
  font-size: 0.85rem;
  padding: 8px 16px;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-border-light);
  color: var(--color-text-primary);
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.1s;
  text-transform: uppercase;
}

.plugin-btn:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
}

.plugin-btn:active {
  transform: translate(2px, 2px);
}

.plugin-btn-primary {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
}

.plugin-btn-primary:hover {
  filter: brightness(1.1);
  color: var(--color-bg-primary);
}

.plugin-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 通用输入 */
.plugin-input,
.plugin-textarea,
.plugin-select {
  width: 100%;
  padding: 10px 12px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.12s;
}

.plugin-input:focus,
.plugin-textarea:focus,
.plugin-select:focus {
  border-color: var(--color-accent-primary);
}

.plugin-textarea {
  min-height: 100px;
  resize: vertical;
  line-height: 1.5;
}

.plugin-label {
  display: block;
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* 通用网格 */
.plugin-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.plugin-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .plugin-grid-2,
  .plugin-grid-3 {
    grid-template-columns: 1fr;
  }
  .plugin-shell-header {
    flex-direction: column;
  }
}

/* Mock 徽标 */
.mock-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  padding: 3px 8px;
  background: rgba(255, 184, 0, 0.12);
  border: 1px solid var(--color-warning);
  color: var(--color-warning);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* 标签页 */
.plugin-tabs {
  display: flex;
  gap: 2px;
  border-bottom: 2px solid var(--color-border);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.plugin-tab {
  font-family: var(--font-display);
  font-size: 0.82rem;
  padding: 8px 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.12s;
  margin-bottom: -2px;
}

.plugin-tab:hover {
  color: var(--color-text-primary);
}

.plugin-tab.active {
  color: var(--color-accent-primary);
  border-bottom-color: var(--color-accent-primary);
}

/* 空状态 */
.plugin-empty {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.plugin-empty-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  opacity: 0.5;
}
`;export{n as default};
