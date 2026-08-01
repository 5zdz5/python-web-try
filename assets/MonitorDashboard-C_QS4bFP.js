const n=`/* ============================================================
 *  MonitorDashboard — ZZZ 绝区零风格
 *  赛博朋克监测仪表盘 / 霓虹边框 / 斜切角 / 扫描线
 * ============================================================ */
.md-page {
  min-height: 100vh;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding-bottom: 40px;
  position: relative;
}

/* 全局扫描线 */
.md-page::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(196, 255, 0, 0.015) 2px, rgba(196, 255, 0, 0.015) 4px);
  pointer-events: none;
  z-index: 0;
}

.md-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* ===== Hero ===== */
.md-hero {
  background:
    radial-gradient(ellipse at top, rgba(196, 255, 0, 0.08), transparent 60%),
    linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 50%, var(--color-bg-secondary) 100%);
  padding: 60px 20px 40px;
  text-align: center;
  border-bottom: 1px solid var(--color-border-accent);
  position: relative;
  overflow: hidden;
}

.md-hero::after {
  content: 'MONITOR // v1.0';
  position: absolute;
  bottom: 12px;
  right: 20px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.2em;
  opacity: 0.6;
}

.md-hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.md-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 255, 0, 0.06);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  padding: 5px 14px;
  margin-bottom: 20px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-accent-primary);
  clip-path: var(--zzz-clip-path-sm);
  text-shadow: 0 0 6px var(--color-accent-glow);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.md-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 900;
  color: var(--color-accent-primary);
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 0 12px var(--color-accent-glow), 0 0 24px var(--color-accent-glow);
}

.md-icon {
  font-size: 36px;
  filter: drop-shadow(0 0 8px var(--color-accent-glow));
}

.md-subtitle {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
  letter-spacing: 0.02em;
}

/* ===== 状态色 ===== */
.md-status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 0;
  background: var(--color-accent-primary);
  transform: rotate(45deg);
  box-shadow: 0 0 6px var(--color-accent-glow);
}

.md-status-healthy { background: var(--color-accent-primary); box-shadow: 0 0 6px var(--color-accent-glow); }
.md-status-warning { background: var(--color-warning); box-shadow: 0 0 6px rgba(255, 184, 0, 0.6); }
.md-status-error { background: var(--color-accent-tertiary); box-shadow: 0 0 6px rgba(255, 46, 99, 0.6); }
.md-status-crashed { background: var(--color-accent-tertiary); box-shadow: 0 0 8px rgba(255, 46, 99, 0.8); }

/* ===== Tabs ===== */
.md-tabs-bar {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border-accent);
  padding: 8px 0;
}

.md-tabs {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.md-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1px solid transparent;
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  clip-path: var(--zzz-clip-path-sm);
}

.md-tab:hover {
  background: rgba(196, 255, 0, 0.04);
  color: var(--color-text-primary);
}

.md-tab.active {
  background: rgba(196, 255, 0, 0.1);
  border-color: var(--color-border-accent);
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.md-tab-icon {
  font-size: 14px;
}

/* ===== Content ===== */
.md-content {
  padding: 30px 20px;
}

.md-panel {
  animation: md-fade-in 0.3s ease;
}

@keyframes md-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.md-panel-title {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--color-accent-primary);
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 0 8px var(--color-accent-glow);
}

.md-panel-desc {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-secondary);
  margin: 0 0 24px;
  line-height: 1.6;
}

/* ===== 按钮 ===== */
.md-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.md-btn {
  background: rgba(196, 255, 0, 0.03);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  clip-path: var(--zzz-clip-path-sm);
}

.md-btn:hover {
  transform: translateY(-1px);
  background: rgba(196, 255, 0, 0.08);
  border-color: var(--color-border-accent);
  box-shadow: 0 0 12px var(--color-accent-glow);
}

.md-btn-sm {
  padding: 5px 12px;
  font-size: 11px;
}

.md-btn-primary {
  background: rgba(196, 255, 0, 0.1);
  border-color: var(--color-border-accent);
  color: var(--color-accent-primary);
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.md-btn-primary:hover {
  background: rgba(196, 255, 0, 0.2);
}

.md-btn-accent {
  background: rgba(0, 229, 255, 0.08);
  border-color: rgba(0, 229, 255, 0.3);
  color: var(--color-accent-secondary);
}

.md-btn-accent:hover {
  background: rgba(0, 229, 255, 0.18);
  box-shadow: 0 0 12px var(--color-accent-glow-cyan);
}

.md-btn-danger {
  background: rgba(255, 46, 99, 0.1);
  border-color: rgba(255, 46, 99, 0.3);
  color: var(--color-accent-tertiary);
}

.md-btn-danger:hover {
  background: rgba(255, 46, 99, 0.2);
  box-shadow: 0 0 12px rgba(255, 46, 99, 0.3);
}

/* ===== 汇总卡片 ===== */
.md-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.md-summary-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 20px;
  text-align: center;
  border-left: 3px solid var(--color-text-muted);
  clip-path: var(--zzz-clip-path-sm);
  position: relative;
}

.md-status-healthy-bg { border-left-color: var(--color-accent-primary); box-shadow: 0 0 8px var(--color-accent-glow); }
.md-status-warning-bg { border-left-color: var(--color-warning); box-shadow: 0 0 8px rgba(255, 184, 0, 0.3); }
.md-status-error-bg { border-left-color: var(--color-accent-tertiary); box-shadow: 0 0 8px rgba(255, 46, 99, 0.3); }
.md-status-crashed-bg { border-left-color: var(--color-accent-tertiary); box-shadow: 0 0 12px rgba(255, 46, 99, 0.5); }

.md-sc-value {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 900;
  color: var(--color-text-primary);
  margin-bottom: 4px;
  text-shadow: 0 0 8px var(--color-accent-glow);
  letter-spacing: 0.04em;
}

.md-sc-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* ===== 通用卡片 ===== */
.md-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 20px;
  margin-bottom: 16px;
  clip-path: var(--zzz-clip-path);
}

.md-card-title {
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--color-text-primary);
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ===== 巡游进度 ===== */
.md-patrol-active {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  padding: 16px;
  margin-bottom: 20px;
  clip-path: var(--zzz-clip-path);
}

.md-patrol-progress-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.md-patrol-progress-bar {
  flex: 1;
  height: 6px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.md-patrol-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  box-shadow: 0 0 8px var(--color-accent-glow);
  border-radius: var(--radius-sm);
  transition: width 0.3s ease;
}

.md-patrol-progress-text {
  font-family: var(--font-display);
  font-size: 12px;
  color: var(--color-accent-primary);
  font-weight: 700;
  min-width: 40px;
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.md-patrol-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
}

/* ===== 事件统计 ===== */
.md-event-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.md-es-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.md-es-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.md-es-val {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

/* ===== 事件列表 ===== */
.md-event-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.md-event-item {
  display: grid;
  grid-template-columns: 60px 100px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 8px 12px;
  background: rgba(20, 20, 30, 0.6);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 11px;
}

.md-event-info { border-left-color: var(--color-accent-secondary); }
.md-event-warning { border-left-color: var(--color-warning); }
.md-event-error { border-left-color: var(--color-accent-tertiary); }
.md-event-crash { border-left-color: var(--color-accent-tertiary); box-shadow: 0 0 8px rgba(255, 46, 99, 0.3); }
.md-event-patrol { border-left-color: var(--color-accent-primary); }
.md-event-snapshot { border-left-color: var(--color-accent-secondary); }

.md-event-type {
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.md-event-source {
  color: var(--color-accent-secondary);
  font-family: var(--font-mono);
  text-shadow: 0 0 4px var(--color-accent-glow-cyan);
}

.md-event-message {
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.md-event-time {
  color: var(--color-text-muted);
  font-size: 10px;
}

/* ===== 空状态 ===== */
.md-empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 30px 20px;
  font-family: var(--font-mono);
  font-size: 13px;
}

/* ===== 监测组列表 ===== */
.md-group-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.md-group-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 16px;
  clip-path: var(--zzz-clip-path);
}

.md-group-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.md-group-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.md-group-status {
  margin-left: auto;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  clip-path: var(--zzz-clip-path-sm);
}

.md-status-text-healthy { color: var(--color-accent-primary); background: rgba(196, 255, 0, 0.12); text-shadow: 0 0 4px var(--color-accent-glow); }
.md-status-text-warning { color: var(--color-warning); background: rgba(255, 184, 0, 0.12); }
.md-status-text-error { color: var(--color-accent-tertiary); background: rgba(255, 46, 99, 0.12); }
.md-status-text-crashed { color: var(--color-accent-tertiary); background: rgba(255, 46, 99, 0.2); }

.md-group-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}

.md-gm-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.md-gm-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.md-gm-value {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-primary);
}

.md-group-detail {
  margin-top: 10px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
}

/* ===== 源码原理 ===== */
.md-source-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.md-source-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 20px;
  clip-path: var(--zzz-clip-path);
}

.md-source-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.md-source-name {
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--color-accent-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.md-source-file {
  font-family: var(--font-mono);
  font-size: 11px;
  background: rgba(0, 229, 255, 0.08);
  color: var(--color-accent-secondary);
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  text-shadow: 0 0 4px var(--color-accent-glow-cyan);
}

.md-source-section {
  margin-bottom: 16px;
}

.md-source-section:last-child {
  margin-bottom: 0;
}

.md-source-section-title {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  color: var(--color-accent-secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 0 0 4px var(--color-accent-glow-cyan);
}

.md-source-text {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* ===== 代码块 ===== */
.md-code-block {
  background: var(--color-bg-primary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
  clip-path: var(--zzz-clip-path-sm);
}

.md-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.md-code-dots {
  display: flex;
  gap: 5px;
}

.md-dot {
  width: 8px;
  height: 8px;
  border-radius: 0;
  transform: rotate(45deg);
}

.md-dot-red { background: var(--color-accent-tertiary); box-shadow: 0 0 4px rgba(255, 46, 99, 0.6); }
.md-dot-yellow { background: var(--color-warning); box-shadow: 0 0 4px rgba(255, 184, 0, 0.6); }
.md-dot-green { background: var(--color-accent-primary); box-shadow: 0 0 4px var(--color-accent-glow); }

.md-code-lang {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.md-code {
  margin: 0;
  padding: 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-accent-primary);
  overflow-x: auto;
  background: rgba(196, 255, 0, 0.02);
}

/* ===== 检查项列表 ===== */
.md-checks-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.md-check-item {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  padding-left: 18px;
  position: relative;
}

.md-check-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent-primary);
  text-shadow: 0 0 4px var(--color-accent-glow);
}

/* ===== 巡游记录列表 ===== */
.md-patrol-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.md-patrol-step {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 14px;
  border-left: 3px solid var(--color-text-muted);
  clip-path: var(--zzz-clip-path-sm);
}

.md-patrol-step.current {
  border-left-color: var(--color-warning);
  box-shadow: 0 0 0 1px rgba(255, 184, 0, 0.3), 0 0 12px rgba(255, 184, 0, 0.15);
}

.md-patrol-pass {
  border-left-color: var(--color-accent-primary);
}

.md-patrol-fail {
  border-left-color: var(--color-accent-tertiary);
}

.md-patrol-step-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.md-patrol-step-idx {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background: rgba(196, 255, 0, 0.1);
  border: 1px solid var(--color-border-accent);
  color: var(--color-accent-primary);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-shadow: 0 0 4px var(--color-accent-glow);
  clip-path: var(--zzz-clip-path-sm);
}

.md-patrol-step-name {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.md-patrol-step-path {
  font-family: var(--font-mono);
  font-size: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: var(--color-text-secondary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.md-patrol-step-group {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-accent-secondary);
  text-shadow: 0 0 4px var(--color-accent-glow-cyan);
}

.md-patrol-step-status {
  margin-left: auto;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  clip-path: var(--zzz-clip-path-sm);
}

.md-patrol-step-checks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 6px;
}

.md-check-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: var(--color-text-secondary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.md-patrol-step-detail {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
}

/* ===== 快照保险 ===== */
.md-snapshots-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.md-snapshot-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.md-snapshot-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  clip-path: var(--zzz-clip-path-sm);
}

.md-snapshot-info {
  flex: 1;
  min-width: 200px;
}

.md-snapshot-label {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent-primary);
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.md-snapshot-time {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-bottom: 2px;
}

.md-snapshot-meta {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
}

.md-snapshot-actions {
  display: flex;
  gap: 8px;
}

/* ===== 响应式 ===== */
@media (max-width: 640px) {
  .md-title { font-size: 24px; }
  .md-tabs { flex-wrap: wrap; }
  .md-tab { font-size: 11px; padding: 6px 10px; }
  .md-event-item {
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto;
  }
  .md-event-source { grid-column: 2; }
  .md-event-message { grid-column: 1 / -1; }
  .md-event-time { grid-column: 1 / -1; }
  .md-summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .md-snapshots-header {
    flex-direction: column;
  }
  .md-patrol-step-header {
    gap: 6px;
  }
  .md-patrol-step-status {
    margin-left: 0;
  }
}

/* ===== AI Agent 介绍 ===== */
.md-agent-intro {
  background:
    linear-gradient(135deg, rgba(196, 255, 0, 0.05), rgba(0, 229, 255, 0.03)),
    var(--color-bg-card);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  padding: 20px;
  margin-bottom: 16px;
  clip-path: var(--zzz-clip-path);
}

.md-agent-intro .md-panel-title {
  color: var(--color-accent-primary);
  margin-bottom: 8px;
}

.md-agent-intro .md-panel-desc {
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
}
`;export{n as default};
