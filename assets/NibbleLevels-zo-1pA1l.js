const n=`/**
 * 蚕食关卡化页面样式
 * 法则5：颜色全用 var(--color-*)，圆角用 var(--radius-*)
 */

.nibble-page {
  min-height: 100vh;
  background: var(--color-bg-primary, #0a0a0f);
}

/* Hero */
.nibble-hero {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, var(--color-bg-secondary, #12121a) 0%, var(--color-bg-primary, #0a0a0f) 100%);
  border-bottom: 2px solid var(--color-border, #2a2a35);
}

.nibble-hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.nibble-badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--color-bg-tertiary, #1a1a25);
  border: 1px solid var(--color-border-light, #3a3a4a);
  border-radius: var(--radius-sm, 4px);
  font-size: 0.85rem;
  color: var(--color-accent-primary, #c4ff00);
  font-family: var(--font-mono, monospace);
}

.nibble-title {
  font-size: 2.2rem;
  margin: 0;
  font-family: var(--font-mono, monospace);
}

.nibble-title .title-gradient {
  background: linear-gradient(90deg, var(--color-accent-primary, #c4ff00), var(--color-accent-secondary, #00e5ff));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nibble-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary, #8a8a9a);
  max-width: 600px;
  margin: 0;
}

.nibble-hero-actions {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

/* 结果区 */
.nibble-result-section {
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.nibble-source-card {
  padding: 18px 20px;
  background: var(--color-bg-secondary, #12121a);
  border: 2px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-md, 6px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.nibble-source-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 240px;
}

.nibble-source-icon {
  font-size: 1.8rem;
}

.nibble-source-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nibble-source-title {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text-primary, #f0f0f5);
}

.nibble-source-url {
  font-size: 0.8rem;
  color: var(--color-text-muted, #555565);
  font-family: var(--font-mono, monospace);
  text-decoration: none;
  word-break: break-all;
}

.nibble-source-url:hover {
  color: var(--color-accent-primary, #c4ff00);
}

.nibble-source-stats {
  display: flex;
  gap: 20px;
}

.nibble-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.nibble-stat-val {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--color-accent-primary, #c4ff00);
  font-family: var(--font-mono, monospace);
}

.nibble-stat-label {
  font-size: 0.75rem;
  color: var(--color-text-muted, #555565);
}

/* 关卡列表 + 详情 双栏 */
.nibble-levels-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 20px;
}

.nibble-levels-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 4px;
}

.nibble-list-title {
  margin: 0 0 6px;
  font-size: 1rem;
  color: var(--color-text-secondary, #8a8a9a);
  font-family: var(--font-mono, monospace);
}

.nibble-level-card {
  text-align: left;
  padding: 12px 14px;
  background: var(--color-bg-secondary, #12121a);
  border: 2px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-sm, 4px);
  color: var(--color-text-primary, #f0f0f5);
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-mono, monospace);
}

.nibble-level-card:hover {
  border-color: var(--color-accent-primary, #c4ff00);
  transform: translateX(2px);
}

.nibble-level-card.active {
  border-color: var(--color-accent-primary, #c4ff00);
  background: var(--color-bg-tertiary, #1a1a25);
  box-shadow: 0 0 0 2px var(--color-accent-glow, rgba(196, 255, 0, 0.2));
}

.nlc-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-text-muted, #555565);
}

.nlc-diff {
  color: var(--color-accent-tertiary, #ff2e63);
  font-size: 0.7rem;
}

.nlc-title {
  font-size: 0.95rem;
  font-weight: bold;
  color: var(--color-text-primary, #f0f0f5);
}

.nlc-desc {
  font-size: 0.78rem;
  color: var(--color-text-secondary, #8a8a9a);
  line-height: 1.4;
}

.nlc-meta {
  display: flex;
  gap: 10px;
  font-size: 0.72rem;
  color: var(--color-text-muted, #555565);
}

/* 详情区 */
.nibble-level-detail {
  min-height: 400px;
  background: var(--color-bg-secondary, #12121a);
  border: 2px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-md, 6px);
  padding: 20px;
}

.nibble-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 360px;
  gap: 12px;
  color: var(--color-text-muted, #555565);
}

.nibble-empty-icon {
  font-size: 2.5rem;
}

.nibble-step-viewer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nibble-step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border, #2a2a35);
}

.nibble-step-title {
  margin: 0;
  font-size: 1.15rem;
  color: var(--color-text-primary, #f0f0f5);
}

.nibble-step-progress {
  font-size: 0.85rem;
  color: var(--color-accent-primary, #c4ff00);
  font-family: var(--font-mono, monospace);
}

.nibble-step-indicators {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nibble-step-dot {
  width: 28px;
  height: 28px;
  border: 2px solid var(--color-border, #2a2a35);
  background: var(--color-bg-primary, #0a0a0f);
  color: var(--color-text-muted, #555565);
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  font-size: 0.75rem;
  font-family: var(--font-mono, monospace);
  transition: all 0.15s;
}

.nibble-step-dot:hover {
  border-color: var(--color-accent-secondary, #00e5ff);
}

.nibble-step-dot.done {
  border-color: var(--color-accent-primary, #c4ff00);
  color: var(--color-accent-primary, #c4ff00);
}

.nibble-step-dot.active {
  background: var(--color-accent-primary, #c4ff00);
  color: var(--color-bg-primary, #0a0a0f);
  border-color: var(--color-accent-primary, #c4ff00);
  font-weight: bold;
}

.nibble-step-content {
  padding: 16px;
  background: var(--color-bg-tertiary, #1a1a25);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--color-border, #2a2a35);
}

.nibble-step-content-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--color-text-primary, #f0f0f5);
}

.nibble-step-type-tag {
  font-size: 0.72rem;
  padding: 2px 8px;
  background: var(--color-bg-secondary, #12121a);
  border: 1px solid var(--color-border-light, #3a3a4a);
  border-radius: var(--radius-sm, 4px);
  color: var(--color-accent-secondary, #00e5ff);
  font-weight: normal;
}

.nibble-step-content-body {
  color: var(--color-text-secondary, #8a8a9a);
  line-height: 1.7;
  font-size: 0.92rem;
}

.nibble-step-content-body p {
  margin: 0 0 8px;
}

.nibble-step-code-block {
  margin-top: 14px;
  border: 1px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-sm, 4px);
  overflow: hidden;
}

.nibble-code-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: var(--color-bg-primary, #0a0a0f);
  border-bottom: 1px solid var(--color-border, #2a2a35);
}

.nibble-code-lang {
  font-size: 0.75rem;
  color: var(--color-text-muted, #555565);
  font-family: var(--font-mono, monospace);
}

.nibble-copy-btn {
  padding: 3px 10px;
  background: var(--color-bg-secondary, #12121a);
  border: 1px solid var(--color-border-light, #3a3a4a);
  border-radius: var(--radius-sm, 4px);
  color: var(--color-text-secondary, #8a8a9a);
  font-size: 0.72rem;
  cursor: pointer;
  font-family: var(--font-mono, monospace);
}

.nibble-copy-btn:hover {
  border-color: var(--color-accent-primary, #c4ff00);
  color: var(--color-accent-primary, #c4ff00);
}

.nibble-step-code {
  margin: 0;
  padding: 12px;
  background: var(--color-bg-primary, #0a0a0f);
  color: var(--color-accent-primary, #c4ff00);
  font-family: var(--font-mono, monospace);
  font-size: 0.85rem;
  overflow-x: auto;
  line-height: 1.5;
}

.nibble-step-nav {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.nibble-nav-btn {
  padding: 10px 20px;
  background: var(--color-bg-tertiary, #1a1a25);
  border: 2px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-sm, 4px);
  color: var(--color-text-primary, #f0f0f5);
  cursor: pointer;
  font-family: var(--font-mono, monospace);
  font-size: 0.88rem;
  transition: all 0.15s;
}

.nibble-nav-btn:hover:not(:disabled) {
  border-color: var(--color-accent-primary, #c4ff00);
}

.nibble-nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nibble-nav-next {
  background: var(--color-accent-primary, #c4ff00);
  color: var(--color-bg-primary, #0a0a0f);
  border-color: var(--color-accent-primary, #c4ff00);
  font-weight: bold;
}

.nibble-nav-next:hover:not(:disabled) {
  filter: brightness(1.1);
  border-color: var(--color-accent-secondary, #00e5ff);
}

/* 挑战 */
.nibble-challenges {
  padding-top: 16px;
  border-top: 1px solid var(--color-border, #2a2a35);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nibble-challenges-title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-accent-tertiary, #ff2e63);
}

.nibble-challenge-card {
  padding: 12px 14px;
  background: var(--color-bg-tertiary, #1a1a25);
  border: 1px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-sm, 4px);
}

.ncc-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.ncc-title {
  font-weight: bold;
  color: var(--color-text-primary, #f0f0f5);
  font-size: 0.92rem;
}

.ncc-diff {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: var(--radius-sm, 4px);
  font-family: var(--font-mono, monospace);
  text-transform: uppercase;
}

.ncc-diff-easy { background: rgba(196, 255, 0, 0.15); color: var(--color-accent-primary, #c4ff00); }
.ncc-diff-medium { background: rgba(255, 184, 0, 0.15); color: var(--color-warning, #ffb800); }
.ncc-diff-hard { background: rgba(255, 46, 99, 0.15); color: var(--color-error, #ff2e63); }

.ncc-desc {
  font-size: 0.82rem;
  color: var(--color-text-secondary, #8a8a9a);
  margin: 0 0 8px;
}

.ncc-code {
  margin: 0 0 8px;
  padding: 10px;
  background: var(--color-bg-primary, #0a0a0f);
  color: var(--color-accent-secondary, #00e5ff);
  font-family: var(--font-mono, monospace);
  font-size: 0.8rem;
  overflow-x: auto;
  border-radius: var(--radius-sm, 4px);
}

.ncc-hint {
  font-size: 0.78rem;
  color: var(--color-text-muted, #555565);
  margin: 0;
}

/* 底部 */
.nibble-footer {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.nibble-back-btn {
  padding: 8px 16px;
  color: var(--color-text-secondary, #8a8a9a);
  text-decoration: none;
  font-family: var(--font-mono, monospace);
  font-size: 0.85rem;
  border: 1px solid var(--color-border, #2a2a35);
  border-radius: var(--radius-sm, 4px);
  transition: all 0.15s;
}

.nibble-back-btn:hover {
  color: var(--color-accent-primary, #c4ff00);
  border-color: var(--color-accent-primary, #c4ff00);
}

/* 响应式 */
@media (max-width: 768px) {
  .nibble-levels-layout {
    grid-template-columns: 1fr;
  }
  .nibble-levels-list {
    max-height: none;
  }
  .nibble-title {
    font-size: 1.6rem;
  }
  .nibble-source-stats {
    gap: 12px;
  }
}

/* 像素风主题适配（法则5） */
[data-theme="pixel-spectrum"] .nibble-title .title-gradient {
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffed00, #00ff88, #00c8ff, #8000ff, #ff0080);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-flow 4s linear infinite;
}

[data-theme="pixel-crow"] .nibble-title .title-gradient {
  background: linear-gradient(135deg, #9d4edd, #e94560, #00d4ff, #9d4edd);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: crow-shine-flow 5s linear infinite;
}
`;export{n as default};
