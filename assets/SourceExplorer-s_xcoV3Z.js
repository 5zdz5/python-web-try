const n=`.source-explorer-page {
  min-height: 100vh;
  padding-bottom: 40px;
}

/* Hero */
.se-hero {
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 50%, var(--color-bg-primary) 100%);
  padding: 60px 20px 40px;
  text-align: center;
  border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.08));
}

.se-hero-content { max-width: 700px; margin: 0 auto; }

.se-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: color-mix(in srgb, var(--color-accent-secondary) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent-secondary) 30%, transparent);
  border-radius: var(--radius-xl);
  padding: 5px 14px;
  margin-bottom: 20px;
}

.se-version {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent-secondary);
}

.se-date {
  font-size: 11px;
  color: var(--color-text-secondary);
}

.se-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 12px;
}

.se-icon { font-size: 36px; }

.se-subtitle {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin: 0 0 24px;
}

.se-tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.08));
  border-radius: var(--radius-xl);
  padding: 4px 12px;
  font-size: 12px;
  color: var(--color-text-secondary);
  cursor: default;
  transition: all 0.2s;
}

.tech-pill:hover {
  border-color: var(--color-accent-primary);
  transform: translateY(-1px);
}

.tech-icon { font-size: 14px; }

/* Changelog */
.se-changelog {
  background: color-mix(in srgb, var(--color-accent-secondary) 4%, transparent);
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.06));
}

.changelog-title {
  font-size: 15px;
  color: var(--color-text-primary);
  margin: 0 0 12px;
}

.changelog-list { display: flex; flex-direction: column; gap: 6px; }

.changelog-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--color-text-secondary);
}

.changelog-dot { color: var(--color-accent-secondary); font-size: 12px; }

/* Tabs */
.se-tabs-bar {
  background: var(--color-bg-primary);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.08));
  padding: 8px 0;
}

.se-tabs {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.se-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1px solid transparent;
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-xl);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.se-tab:hover {
  background: rgba(255,255,255,0.05);
  color: var(--color-text-primary);
}

.se-tab.active {
  background: color-mix(in srgb, var(--color-accent-secondary) 12%, transparent);
  border-color: color-mix(in srgb, var(--color-accent-secondary) 30%, transparent);
  color: var(--color-accent-secondary);
}

.tab-icon { font-size: 16px; }

/* Content */
.se-content {
  padding: 30px 20px;
  max-width: 900px;
}

.tab-panel { animation: fadeIn 0.3s ease; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.panel-title {
  font-size: 22px;
  color: var(--color-text-primary);
  margin: 0 0 8px;
}

.panel-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0 0 24px;
}

/* Overview */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 30px;
}

.overview-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.06));
  border-radius: var(--radius-lg);
  padding: 20px;
}

.overview-icon { font-size: 28px; margin-bottom: 12px; }

.overview-card h3 {
  font-size: 16px;
  color: var(--color-text-primary);
  margin: 0 0 14px;
}

.overview-stats { display: flex; flex-direction: column; gap: 8px; }

.os-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.os-label { font-size: 13px; color: var(--color-text-secondary); }
.os-val { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }

.overview-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }

.overview-list li {
  font-size: 13px;
  color: var(--color-text-secondary);
  padding-left: 16px;
  position: relative;
}

.overview-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-accent-secondary);
}

.overview-cta {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.06));
  border-radius: var(--radius-lg);
  padding: 20px;
}

.overview-cta h3 { font-size: 16px; color: var(--color-text-primary); margin: 0 0 14px; }

.cta-buttons { display: flex; flex-wrap: wrap; gap: 8px; }

.cta-btn {
  background: color-mix(in srgb, var(--color-accent-secondary) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent-secondary) 25%, transparent);
  color: var(--color-accent-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-xl);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-btn:hover {
  background: color-mix(in srgb, var(--color-accent-secondary) 20%, transparent);
  transform: translateY(-1px);
}

/* File Tree */
.file-tree-container {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.06));
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.file-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.15s;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.file-row:hover { background: rgba(255,255,255,0.04); }

.file-row.folder { font-weight: 600; color: var(--color-text-primary); }
.file-row.file { color: var(--color-text-secondary); }

.file-icon { font-size: 16px; min-width: 20px; }
.file-name { font-size: 14px; min-width: 180px; }
.file-desc { font-size: 12px; color: var(--color-text-tertiary); flex: 1; }

/* Feature Cards */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.feature-doc-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.06));
  border-radius: var(--radius-lg);
  padding: 18px;
  transition: all 0.2s;
}

.feature-doc-card:hover { border-color: color-mix(in srgb, var(--color-accent-secondary) 30%, transparent); transform: translateY(-2px); }

.fdc-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.fdc-icon { font-size: 24px; }
.fdc-header h3 { font-size: 16px; color: var(--color-text-primary); margin: 0; }
.fdc-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin: 0 0 12px; }

.fdc-files { display: flex; flex-wrap: wrap; gap: 4px; }

.fdc-file-tag {
  font-size: 11px;
  background: color-mix(in srgb, var(--color-accent-secondary) 8%, transparent);
  color: var(--color-accent-secondary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
}

/* Principles */
.principles-list { display: flex; flex-direction: column; gap: 16px; }

.principle-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border, rgba(255,255,255,0.06));
  border-radius: var(--radius-lg);
  padding: 20px;
}

.pc-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.pc-icon { font-size: 24px; }
.pc-header h3 { font-size: 16px; color: var(--color-text-primary); margin: 0; }
.pc-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 14px; }

.pc-code-block {
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.pc-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.pc-code-dots { display: flex; gap: 5px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }
.pc-code-lang { font-size: 11px; color: var(--color-text-tertiary); }

.pc-code {
  margin: 0;
  padding: 14px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-text-primary);
  overflow-x: auto;
  font-family: var(--font-mono);
}

/* Migration Timeline */
.migration-timeline { display: flex; flex-direction: column; gap: 0; }

.migration-step {
  display: flex;
  gap: 16px;
}

.ms-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 32px;
}

.ms-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-accent-secondary) 15%, transparent);
  border: 2px solid var(--color-accent-secondary);
  color: var(--color-accent-secondary);
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ms-line {
  width: 2px;
  flex: 1;
  background: color-mix(in srgb, var(--color-accent-secondary) 20%, transparent);
  margin: 4px 0;
}

.ms-content { padding-bottom: 24px; flex: 1; }

.ms-title { font-size: 15px; color: var(--color-text-primary); margin: 4px 0 6px; }
.ms-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin: 0 0 10px; }

.ms-code-block {
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.ms-code {
  margin: 0;
  padding: 12px 14px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-text-primary);
  overflow-x: auto;
  font-family: var(--font-mono);
}

/* Footer */
.se-footer {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 24px 20px;
}

.se-back-btn {
  display: inline-block;
  color: var(--color-accent-secondary);
  text-decoration: none;
  font-size: 14px;
  padding: 8px 20px;
  border: 1px solid color-mix(in srgb, var(--color-accent-secondary) 25%, transparent);
  border-radius: var(--radius-xl);
  transition: all 0.2s;
}

.se-back-btn:hover {
  background: color-mix(in srgb, var(--color-accent-secondary) 12%, transparent);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .se-title { font-size: 24px; }
  .se-tabs { flex-wrap: wrap; }
  .se-tab { font-size: 12px; padding: 6px 10px; }
  .file-name { min-width: 120px; }
  .file-desc { display: none; }
}
`;export{n as default};
