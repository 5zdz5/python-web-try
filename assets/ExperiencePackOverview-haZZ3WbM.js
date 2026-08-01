const n=`/* 经验包展示说明面板 */
.epo-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: epo-fade-in 0.2s ease-out;
}
@keyframes epo-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.epo-modal {
  background: var(--color-bg-primary, #0a0a0f);
  border: 1px solid var(--color-border, #2a2a3a);
  border-radius: var(--radius-lg, 12px);
  width: min(92vw, 860px);
  max-height: 88vh;
  overflow-y: auto;
  color: var(--color-text-primary, #e0e0e0);
  box-shadow: 0 0 40px rgba(0, 255, 136, 0.08);
}

/* 头部 */
.epo-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--color-border, #2a2a3a);
  gap: 12px;
}
.epo-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-accent, #00ff88);
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
.epo-badge {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 99px;
  background: var(--color-accent, #00ff88);
  color: var(--color-bg-primary, #0a0a0f);
  font-weight: 600;
}
.epo-subtitle {
  font-size: 0.82rem;
  color: var(--color-text-secondary, #888);
  margin: 4px 0 0;
}
.epo-close {
  background: none;
  border: 1px solid var(--color-border, #2a2a3a);
  color: var(--color-text-secondary, #888);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: var(--radius-sm, 6px);
  transition: all 0.15s;
}
.epo-close:hover {
  background: var(--color-bg-secondary, #1a1a2e);
  color: var(--color-text-primary, #e0e0e0);
}

/* Tab 导航 */
.epo-tabs {
  display: flex;
  gap: 4px;
  padding: 12px 24px 0;
  flex-wrap: wrap;
}
.epo-tab {
  background: none;
  border: 1px solid transparent;
  color: var(--color-text-secondary, #888);
  font-size: 0.82rem;
  padding: 6px 14px;
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.epo-tab:hover {
  color: var(--color-text-primary, #e0e0e0);
  background: var(--color-bg-secondary, #1a1a2e);
}
.epo-tab.active {
  color: var(--color-accent, #00ff88);
  border-color: var(--color-accent, #00ff88);
  background: rgba(0, 255, 136, 0.08);
}

/* 内容区 */
.epo-content {
  padding: 16px 24px 24px;
}

/* 汇总统计 */
.epo-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 16px;
}
.epo-stat-card {
  background: var(--color-bg-secondary, #1a1a2e);
  border: 1px solid var(--color-border, #2a2a3a);
  border-radius: var(--radius-md, 8px);
  padding: 12px;
  text-align: center;
}
.epo-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent, #00ff88);
}
.epo-stat-label {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #888);
  margin-top: 2px;
}

/* 版块列表 */
.epo-section {
  background: var(--color-bg-secondary, #1a1a2e);
  border: 1px solid var(--color-border, #2a2a3a);
  border-radius: var(--radius-md, 8px);
  margin-bottom: 10px;
  overflow: hidden;
  transition: border-color 0.15s;
}
.epo-section:hover {
  border-color: var(--color-accent, #00ff88);
}
.epo-section-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
}
.epo-section-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.epo-section-name {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--color-text-primary, #e0e0e0);
  flex: 1;
}
.epo-section-count {
  font-size: 0.78rem;
  color: var(--color-accent, #00ff88);
  background: rgba(0, 255, 136, 0.1);
  padding: 2px 8px;
  border-radius: 99px;
  font-weight: 600;
}
.epo-section-build {
  font-size: 0.72rem;
  color: var(--color-text-secondary, #888);
  margin-left: 4px;
}
.epo-section-toggle {
  font-size: 0.78rem;
  color: var(--color-text-secondary, #888);
}

.epo-section-detail {
  padding: 0 16px 14px;
  border-top: 1px solid var(--color-border, #2a2a3a);
}
.epo-detail-row {
  margin-top: 8px;
}
.epo-detail-label {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #888);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
}
.epo-detail-text {
  font-size: 0.84rem;
  color: var(--color-text-primary, #e0e0e0);
  line-height: 1.5;
}
.epo-detail-text.rule {
  color: var(--color-accent, #00ff88);
  font-weight: 500;
}

/* 分类 breakdown */
.epo-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.epo-cat-tag {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-text-secondary, #aaa);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.epo-cat-count {
  color: var(--color-accent, #00ff88);
  font-weight: 600;
  margin-left: 3px;
}

/* 更新规则汇总 */
.epo-rules-section {
  background: var(--color-bg-secondary, #1a1a2e);
  border: 1px solid var(--color-border, #2a2a3a);
  border-radius: var(--radius-md, 8px);
  padding: 16px;
}
.epo-rules-section h3 {
  font-size: 0.95rem;
  color: var(--color-accent, #00ff88);
  margin: 0 0 10px;
}
.epo-rule-line {
  font-size: 0.82rem;
  color: var(--color-text-primary, #e0e0e0);
  line-height: 1.6;
  padding: 2px 0;
  padding-left: 12px;
  position: relative;
}
.epo-rule-line::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-accent, #00ff88);
}

/* 源常量/子包函数标注 */
.epo-source-tag {
  font-size: 0.72rem;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  color: var(--color-text-secondary, #888);
  background: rgba(255, 255, 255, 0.04);
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: 4px;
}

/* 底部 */
.epo-footer {
  padding: 10px 24px 14px;
  border-top: 1px solid var(--color-border, #2a2a3a);
}
.epo-footnote {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #666);
}

/* 加载状态 */
.epo-loading {
  text-align: center;
  padding: 60px 20px;
  font-size: 1.1rem;
  color: var(--color-accent, #00ff88);
  animation: epo-pulse 1.5s ease-in-out infinite;
}
@keyframes epo-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
`;export{n as default};
