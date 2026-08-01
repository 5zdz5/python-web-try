const n=`/* ============================================================
 *  WebDevTools — Web 开发工具 Mock
 *  web-app-development · 像素风 · 复用项目 CSS 变量
 * ============================================================ */

.wdt-tab-icon {
  margin-right: 6px;
}

.wdt-hint {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-top: var(--spacing-sm);
  letter-spacing: 0.04em;
}

.wdt-sec-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.wdt-sec-head .plugin-section-title {
  margin-bottom: 0;
}

/* ============ 脚手架 ============ */
.wdt-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.wdt-chip-row-sub {
  margin-top: var(--spacing-sm);
}

.wdt-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  padding: 8px 16px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.12s;
}

.wdt-chip:hover {
  border-color: var(--color-accent-secondary);
  color: var(--color-text-primary);
}

.wdt-chip.active {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  background: var(--color-bg-tertiary);
  box-shadow: 0 0 8px var(--color-accent-glow);
}

.wdt-chip-sm {
  font-size: 0.78rem;
  padding: 6px 12px;
}

.wdt-chip-icon {
  font-size: 1rem;
}

.wdt-opt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing-sm);
}

.wdt-opt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: all 0.12s;
  text-align: left;
}

.wdt-opt:hover {
  border-color: var(--color-accent-secondary);
}

.wdt-opt.active {
  border-color: var(--color-accent-primary);
  background: var(--color-bg-tertiary);
}

.wdt-opt-check {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-accent-primary);
}

.wdt-opt-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-text-primary);
  letter-spacing: 0.04em;
}

.wdt-opt-desc {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

.wdt-cmd {
  display: flex;
  gap: var(--spacing-sm);
  align-items: stretch;
}

.wdt-cmd-text {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--color-accent-primary);
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-sm) var(--spacing-md);
  white-space: pre-wrap;
  overflow-x: auto;
  word-break: break-all;
  line-height: 1.6;
}

.wdt-cmd .plugin-btn {
  flex-shrink: 0;
  align-self: stretch;
}

/* ============ 调试器 ============ */
.wdt-log-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.wdt-log-row {
  display: grid;
  grid-template-columns: 70px 56px 70px 1fr;
  gap: var(--spacing-sm);
  align-items: baseline;
  padding: 6px 10px;
  border-left: 3px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.wdt-log-info {
  border-left-color: var(--color-accent-secondary);
}

.wdt-log-warn {
  border-left-color: var(--color-warning);
}

.wdt-log-error {
  border-left-color: var(--color-error);
  background: rgba(255, 46, 99, 0.08);
}

.wdt-log-time {
  color: var(--color-text-muted);
  font-size: 0.72rem;
}

.wdt-log-level {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.wdt-log-info .wdt-log-level {
  color: var(--color-accent-secondary);
}

.wdt-log-warn .wdt-log-level {
  color: var(--color-warning);
}

.wdt-log-error .wdt-log-level {
  color: var(--color-error);
}

.wdt-log-source {
  color: var(--color-accent-tertiary);
  font-size: 0.74rem;
}

.wdt-log-msg {
  color: var(--color-text-primary);
  word-break: break-word;
}

.wdt-net-table {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.wdt-net-head,
.wdt-net-row {
  display: grid;
  grid-template-columns: 64px 1fr 64px 80px 72px;
  gap: var(--spacing-sm);
  padding: 8px 10px;
  align-items: center;
}

.wdt-net-head {
  color: var(--color-text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--color-bg-tertiary);
  border-bottom: 2px solid var(--color-border);
}

.wdt-net-row {
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

.wdt-net-method {
  font-weight: 700;
  text-align: center;
  padding: 2px 6px;
  border: 1px solid var(--color-border);
  font-size: 0.72rem;
}

.wdt-net-method-get { color: var(--color-accent-secondary); border-color: var(--color-accent-secondary); }
.wdt-net-method-post { color: var(--color-success); border-color: var(--color-success); }
.wdt-net-method-put { color: var(--color-warning); border-color: var(--color-warning); }
.wdt-net-method-delete { color: var(--color-error); border-color: var(--color-error); }

.wdt-net-url {
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wdt-net-status {
  text-align: center;
  font-weight: 700;
}

.wdt-net-dur {
  text-align: right;
  color: var(--color-text-secondary);
}

.wdt-net-size {
  text-align: right;
  color: var(--color-text-muted);
}

/* 通用语调色 */
.wdt-tone-success { color: var(--color-success); }
.wdt-tone-warning { color: var(--color-warning); }
.wdt-tone-error { color: var(--color-error); }
.wdt-tone-info { color: var(--color-accent-secondary); }

/* ============ 性能 ============ */
.wdt-ring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing-md);
}

.wdt-ring {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.wdt-ring-stage {
  position: relative;
  width: 120px;
  height: 120px;
}

.wdt-ring-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.wdt-ring-track {
  fill: none;
  stroke: var(--color-bg-tertiary);
  stroke-width: 8;
}

.wdt-ring-fill {
  fill: none;
  stroke-width: 8;
  stroke-linecap: square;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.wdt-ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wdt-ring-score {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
}

.wdt-ring-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.06em;
}

.wdt-metric-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wdt-metric-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.wdt-metric-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wdt-metric-key {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--color-accent-primary);
  letter-spacing: 0.06em;
}

.wdt-metric-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.wdt-metric-value-wrap {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.wdt-metric-value {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
}

.wdt-metric-unit {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

/* ============ 设计系统 ============ */
.wdt-comp-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
}

.wdt-ui-btn {
  font-family: var(--font-display);
  font-size: 0.85rem;
  padding: 8px 18px;
  border: 2px solid var(--color-border);
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.12s;
}

.wdt-ui-btn:hover {
  transform: translate(-1px, -1px);
}

.wdt-ui-btn-primary {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
}

.wdt-ui-btn-secondary {
  background: var(--color-accent-secondary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-secondary);
}

.wdt-ui-btn-outline {
  background: transparent;
  color: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
}

.wdt-ui-btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border-color: transparent;
}

.wdt-ui-btn-ghost:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border-light);
}

.wdt-ui-btn-danger {
  background: var(--color-error);
  color: #fff;
  border-color: var(--color-error);
}

.wdt-input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.wdt-field-full {
  grid-column: 1 / -1;
}

.wdt-ui-badge {
  font-family: var(--font-display);
  font-size: 0.7rem;
  padding: 4px 10px;
  border: 2px solid;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.wdt-ui-badge.wdt-tone-success {
  color: var(--color-success);
  border-color: var(--color-success);
  background: rgba(196, 255, 0, 0.08);
}

.wdt-ui-badge.wdt-tone-warning {
  color: var(--color-warning);
  border-color: var(--color-warning);
  background: rgba(255, 184, 0, 0.08);
}

.wdt-ui-badge.wdt-tone-error {
  color: var(--color-error);
  border-color: var(--color-error);
  background: rgba(255, 46, 99, 0.08);
}

.wdt-ui-badge.wdt-tone-info {
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
  background: rgba(0, 229, 255, 0.08);
}

.wdt-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-md);
}

.wdt-ui-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.wdt-ui-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wdt-ui-card-badge {
  font-family: var(--font-display);
  font-size: 0.66rem;
  padding: 2px 8px;
  border: 1px solid;
  letter-spacing: 0.1em;
}

.wdt-ui-card-badge.wdt-tone-info {
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
}

.wdt-ui-card-badge.wdt-tone-success {
  color: var(--color-success);
  border-color: var(--color-success);
}

.wdt-ui-card-id {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.wdt-ui-card-title {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-text-primary);
  letter-spacing: 0.03em;
}

.wdt-ui-card-desc {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.wdt-ui-card-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.wdt-ui-tag {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--color-accent-secondary);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  padding: 2px 6px;
}

/* ============ 响应式 ============ */
@media (max-width: 768px) {
  .wdt-cmd {
    flex-direction: column;
  }
  .wdt-input-grid {
    grid-template-columns: 1fr;
  }
  .wdt-net-head,
  .wdt-net-row {
    grid-template-columns: 54px 1fr 54px 64px;
  }
  .wdt-net-size {
    display: none;
  }
  .wdt-log-row {
    grid-template-columns: 56px 48px 56px 1fr;
    font-size: 0.74rem;
  }
}
`;export{n as default};
