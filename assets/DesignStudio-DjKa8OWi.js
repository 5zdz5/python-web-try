const n=`/* ============================================================
 *  DesignStudio — UI/UX 设计工作室 Mock
 *  stark · 像素风 · 复用项目 CSS 变量
 * ============================================================ */

.ds-tab-icon {
  margin-right: 6px;
}

.ds-hint {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.04em;
}

/* ============ 颜色令牌 ============ */
.ds-color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-sm);
}

.ds-color-cell {
  border: 2px solid var(--color-border);
  background: var(--color-bg-secondary);
  overflow: hidden;
}

.ds-color-swatch {
  height: 64px;
  border-bottom: 2px solid var(--color-border);
}

.ds-color-meta {
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ds-color-name {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-accent-secondary);
  word-break: break-all;
}

.ds-color-value {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-secondary);
}

/* ============ 字体令牌 ============ */
.ds-font-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.ds-font-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.ds-font-sample {
  color: var(--color-text-primary);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ds-font-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  text-align: right;
}

.ds-font-label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--color-accent-primary);
  letter-spacing: 0.05em;
}

.ds-font-var {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-accent-secondary);
}

.ds-font-desc {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--color-text-muted);
}

/* ============ 间距令牌 ============ */
.ds-spacing-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ds-spacing-row {
  display: grid;
  grid-template-columns: 44px 1fr 56px 150px;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 6px 10px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.ds-spacing-key {
  font-family: var(--font-display);
  font-size: 0.78rem;
  color: var(--color-accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ds-spacing-bar-wrap {
  height: 14px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
}

.ds-spacing-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
}

.ds-spacing-px {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--color-text-secondary);
  text-align: right;
}

.ds-spacing-var {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

/* ============ 圆角令牌 ============ */
.ds-radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--spacing-sm);
}

.ds-radius-cell {
  border: 2px solid var(--color-border);
  background: var(--color-bg-secondary);
  padding: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.ds-radius-block {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  border: 2px solid var(--color-border-light);
}

.ds-radius-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.ds-radius-key {
  font-family: var(--font-display);
  font-size: 0.78rem;
  color: var(--color-accent-primary);
  letter-spacing: 0.05em;
}

.ds-radius-px {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-secondary);
}

.ds-radius-var {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  color: var(--color-text-muted);
}

/* ============ 跨平台适配 ============ */
.ds-platform-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ds-platform-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.ds-platform-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.ds-platform-label {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-accent-primary);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.ds-platform-framework {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-accent-secondary);
  letter-spacing: 0.04em;
}

.ds-platform-idiom {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin-bottom: var(--spacing-md);
}

.ds-platform-body {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--spacing-md);
}

.ds-platform-code,
.ds-platform-preview {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-border);
  background: var(--color-bg-secondary);
  overflow: hidden;
}

.ds-code-head {
  font-family: var(--font-display);
  font-size: 0.66rem;
  color: var(--color-text-muted);
  letter-spacing: 0.12em;
  padding: 6px 10px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-tertiary);
}

.ds-code-block {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  white-space: pre;
  overflow-x: auto;
  line-height: 1.6;
  flex: 1;
}

.ds-preview-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background-image:
    linear-gradient(45deg, var(--color-bg-tertiary) 25%, transparent 25%),
    linear-gradient(-45deg, var(--color-bg-tertiary) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-bg-tertiary) 75%),
    linear-gradient(-45deg, transparent 75%, var(--color-bg-tertiary) 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
}

.ds-preview-btn {
  cursor: default !important;
}

/* ============ UX 流程 ============ */
.ds-flow {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ds-flow-svg {
  width: 100%;
  height: auto;
  max-height: 380px;
  display: block;
}

.ds-flow-edge {
  stroke: var(--color-accent-secondary);
  stroke-width: 2;
  fill: none;
}

.ds-flow-edge-success {
  stroke: var(--color-success);
}

.ds-flow-edge-fail {
  stroke: var(--color-accent-tertiary);
  stroke-dasharray: 5 4;
}

.ds-flow-arrow {
  fill: var(--color-accent-secondary);
}

.ds-flow-arrow-success {
  fill: var(--color-success);
}

.ds-flow-arrow-fail {
  fill: var(--color-accent-tertiary);
}

.ds-flow-edge-label {
  font-family: var(--font-mono);
  font-size: 11px;
  fill: var(--color-accent-tertiary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.ds-flow-node {
  cursor: pointer;
}

.ds-flow-node-rect {
  fill: var(--color-bg-secondary);
  stroke: var(--color-border-light);
  stroke-width: 2;
  transition: fill 0.12s, stroke 0.12s, filter 0.12s;
}

.ds-flow-node:hover .ds-flow-node-rect {
  stroke: var(--color-accent-secondary);
  fill: var(--color-bg-tertiary);
}

.ds-flow-node.active .ds-flow-node-rect {
  fill: var(--color-bg-tertiary);
  stroke: var(--color-accent-primary);
  filter: drop-shadow(0 0 6px var(--color-accent-glow));
}

.ds-flow-node-label {
  font-family: var(--font-display);
  font-size: 13px;
  fill: var(--color-text-primary);
  font-weight: 700;
  letter-spacing: 0.04em;
  pointer-events: none;
}

.ds-flow-node.active .ds-flow-node-label {
  fill: var(--color-accent-primary);
}

.ds-flow-detail-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.ds-flow-detail-badge {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-accent-primary);
  padding: 4px 12px;
  border: 2px solid var(--color-accent-primary);
  letter-spacing: 0.05em;
}

.ds-flow-detail-id {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

.ds-flow-detail-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.ds-flow-legend {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.ds-flow-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-secondary);
}

.ds-dot {
  width: 10px;
  height: 10px;
  border: 1px solid var(--color-border);
  display: inline-block;
  flex-shrink: 0;
}

.ds-dot-info {
  background: var(--color-accent-secondary);
}

.ds-dot-success {
  background: var(--color-success);
}

.ds-dot-fail {
  background: var(--color-accent-tertiary);
}

/* ============ 响应式 ============ */
@media (max-width: 768px) {
  .ds-platform-body {
    grid-template-columns: 1fr;
  }
  .ds-spacing-row {
    grid-template-columns: 44px 1fr 56px;
  }
  .ds-spacing-var {
    grid-column: 1 / -1;
    font-size: 0.64rem;
  }
  .ds-font-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .ds-font-meta {
    text-align: left;
  }
}
`;export{n as default};
