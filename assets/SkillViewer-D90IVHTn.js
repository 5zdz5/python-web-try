const n=`/**
 * SkillViewer 样式
 *
 * 应用 taste-skill 三旋钮规则：
 *   1. anti-slop 反默认：所有间距用 8 倍数显式声明，圆角用 --radius-* 变量
 *   2. 字体反默认：var(--font-mono) JetBrains Mono，禁用 Inter
 *   3. LILA 反 AI 紫蓝：全用 var(--color-accent-*)，不用 #7c3aed/#6366f1/#3b82f6
 *
 * 应用 impeccable 规则：
 *   - no-card-in-card：面板内用 .skill-section 分隔，不嵌套 .card
 *   - radius-unified：全用 var(--radius-sm/md/lg)
 *   - spacing-scale：8/16/24/32 显式倍数
 *   - console-leftover：无 console 残留
 *
 * 法则5 主题同步双适配：
 *   - 基础样式用 CSS 变量，自动跟随主题
 *   - [data-theme="pixel-spectrum"] 彩虹流动边框
 *   - [data-theme="pixel-crow"] 乌鸦虹彩光泽
 */

.skill-viewer-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 960px;
  font-family: var(--font-mono, 'JetBrains Mono', 'Courier New', monospace);
}

/* ===== 触发按钮 ===== */
.skill-trigger {
  background: var(--color-bg-secondary, #12121a);
  border: 3px solid var(--color-accent-primary, #00ff88);
  color: var(--color-text-primary, #f0f0ff);
  padding: 16px 24px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-md, 4px);
  transition: all 0.15s ease;
  width: 100%;
}

.skill-trigger:hover {
  filter: brightness(1.15);
  border-color: var(--color-accent-secondary, #ff0080);
  box-shadow: 0 0 16px var(--color-accent-glow, rgba(0, 255, 136, 0.3));
}

.skill-trigger-face {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.skill-trigger-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.skill-trigger-text {
  flex: 1;
  text-align: left;
}

.skill-trigger-count {
  background: var(--color-accent-primary, #00ff88);
  color: var(--color-bg-primary, #0a0a12);
  padding: 4px 8px;
  border-radius: var(--radius-sm, 2px);
  font-size: 0.85rem;
  font-weight: bold;
  min-width: 32px;
  text-align: center;
}

.skill-trigger-arrow {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
  color: var(--color-text-secondary, #8a8a9a);
}

.skill-trigger-arrow.expanded {
  transform: rotate(180deg);
}

/* ===== 展开面板 ===== */
.skill-panel {
  margin-top: 16px;
  background: var(--color-bg-secondary, #12121a);
  border: 2px solid var(--color-border, #3a3a5a);
  border-radius: var(--radius-lg, 6px);
  overflow: hidden;
}

/* ===== 头部 ===== */
.skill-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  background: var(--color-bg-tertiary, #1a1a2e);
  border-bottom: 2px solid var(--color-border, #3a3a5a);
}

.skill-panel-title h2 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: var(--color-accent-primary, #00ff88);
  font-family: var(--font-display, 'JetBrains Mono', monospace);
  letter-spacing: 1px;
}

.skill-panel-subtitle {
  margin: 0;
  color: var(--color-text-secondary, #8a8a9a);
  font-size: 0.9rem;
}

.skill-close-btn {
  background: transparent;
  border: 1px solid var(--color-border-light, #4a4a6a);
  color: var(--color-text-secondary, #8a8a9a);
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.15s ease;
}

.skill-close-btn:hover {
  background: var(--color-error, #ff3366);
  color: var(--color-bg-primary, #0a0a12);
  border-color: var(--color-error, #ff3366);
}

/* ===== 分类筛选 ===== */
.skill-category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 24px;
  background: var(--color-bg-secondary, #12121a);
  border-bottom: 1px solid var(--color-border, #3a3a5a);
}

.skill-category-chip {
  background: var(--color-bg-tertiary, #1a1a2e);
  border: 1px solid var(--color-border, #3a3a5a);
  color: var(--color-text-secondary, #8a8a9a);
  padding: 8px 16px;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  font-family: var(--font-mono, monospace);
  font-size: 0.85rem;
  transition: all 0.15s ease;
}

.skill-category-chip:hover {
  border-color: var(--color-accent-secondary, #ff0080);
  color: var(--color-text-primary, #f0f0ff);
}

.skill-category-chip.active {
  background: var(--color-accent-primary, #00ff88);
  color: var(--color-bg-primary, #0a0a12);
  border-color: var(--color-accent-primary, #00ff88);
  font-weight: bold;
}

/* ===== 主体双栏布局 ===== */
.skill-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 480px;
  max-height: 640px;
}

/* ===== 左侧列表 ===== */
.skill-list {
  background: var(--color-bg-tertiary, #1a1a2e);
  border-right: 1px solid var(--color-border, #3a3a5a);
  overflow-y: auto;
  padding: 8px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  color: var(--color-text-primary, #f0f0ff);
  padding: 12px;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  text-align: left;
  margin-bottom: 4px;
  transition: all 0.15s ease;
  font-family: var(--font-mono, monospace);
}

.skill-item:hover {
  background: var(--color-bg-secondary, #12121a);
  border-color: var(--color-border-light, #4a4a6a);
}

.skill-item.active {
  background: var(--color-bg-secondary, #12121a);
  border-color: var(--color-accent-primary, #00ff88);
  box-shadow: inset 3px 0 0 var(--color-accent-primary, #00ff88);
}

.skill-item-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.skill-item-info {
  flex: 1;
  min-width: 0;
}

.skill-item-name {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 4px;
  color: var(--color-text-primary, #f0f0ff);
}

.skill-item-meta {
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--color-text-secondary, #8a8a9a);
}

.skill-item-rules {
  color: var(--color-accent-secondary, #ff0080);
}

/* ===== 右侧详情 ===== */
.skill-detail {
  padding: 24px;
  overflow-y: auto;
  background: var(--color-bg-secondary, #12121a);
}

.skill-detail-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-muted, #555565);
  text-align: center;
  gap: 16px;
}

.skill-empty-icon {
  font-size: 3rem;
  color: var(--color-accent-primary, #00ff88);
  animation: skill-bounce 2s ease-in-out infinite;
}

@keyframes skill-bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-8px); }
}

.skill-empty-hint {
  font-size: 0.85rem;
  color: var(--color-text-muted, #555565);
}

.skill-detail-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ===== 详情头部 ===== */
.skill-detail-header {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border, #3a3a5a);
}

.skill-detail-title-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.skill-detail-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.skill-detail-name {
  margin: 0 0 4px 0;
  font-size: 1.4rem;
  color: var(--color-accent-primary, #00ff88);
  font-family: var(--font-display, monospace);
}

.skill-detail-source {
  font-size: 0.8rem;
  color: var(--color-text-secondary, #8a8a9a);
  font-family: var(--font-mono, monospace);
}

.skill-detail-desc {
  margin: 0;
  color: var(--color-text-primary, #f0f0ff);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ===== Section 分隔（impeccable: 不用嵌套 card，用 section） ===== */
.skill-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-section-title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-accent-secondary, #ff0080);
  font-family: var(--font-display, monospace);
  letter-spacing: 0.5px;
  padding-bottom: 8px;
  border-bottom: 1px dashed var(--color-border, #3a3a5a);
}

/* ===== Web 入口按钮 ===== */
.skill-entry-btn {
  display: inline-block;
  padding: 12px 24px;
  background: var(--color-accent-primary, #00ff88);
  color: var(--color-bg-primary, #0a0a12);
  text-decoration: none;
  border-radius: var(--radius-sm, 2px);
  font-weight: bold;
  font-family: var(--font-mono, monospace);
  font-size: 0.9rem;
  transition: all 0.15s ease;
  border: 2px solid var(--color-accent-primary, #00ff88);
}

.skill-entry-btn:hover {
  filter: brightness(1.15);
  box-shadow: 0 0 12px var(--color-accent-glow, rgba(0, 255, 136, 0.4));
}

/* ===== 调用命令 ===== */
.skill-invoke-cmd {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--color-bg-primary, #0a0a0f);
  border: 1px solid var(--color-border, #3a3a5a);
  border-radius: var(--radius-sm, 2px);
  padding: 12px 16px;
}

.skill-cmd-text {
  flex: 1;
  color: var(--color-accent-tertiary, #00c8ff);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.9rem;
  word-break: break-all;
}

.skill-copy-btn {
  background: var(--color-bg-tertiary, #1a1a2e);
  border: 1px solid var(--color-accent-secondary, #ff0080);
  color: var(--color-accent-secondary, #ff0080);
  padding: 6px 16px;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  font-family: var(--font-mono, monospace);
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.skill-copy-btn:hover {
  background: var(--color-accent-secondary, #ff0080);
  color: var(--color-bg-primary, #0a0a12);
}

/* ===== 代码示例 ===== */
.skill-example-code {
  background: var(--color-bg-primary, #0a0a0f);
  border: 1px solid var(--color-border, #3a3a5a);
  border-radius: var(--radius-sm, 2px);
  padding: 16px;
  margin: 0;
  overflow-x: auto;
}

.skill-example-code code {
  color: var(--color-accent-tertiary, #00c8ff);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: pre;
}

/* ===== 规则列表 ===== */
.skill-rules-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-rule-card {
  background: var(--color-bg-tertiary, #1a1a2e);
  border: 1px solid var(--color-border, #3a3a5a);
  border-left: 4px solid var(--color-accent-primary, #00ff88);
  border-radius: var(--radius-sm, 2px);
  padding: 16px;
}

.skill-rule-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.skill-rule-id {
  background: var(--color-accent-primary, #00ff88);
  color: var(--color-bg-primary, #0a0a12);
  padding: 2px 8px;
  border-radius: var(--radius-sm, 2px);
  font-size: 0.75rem;
  font-weight: bold;
  font-family: var(--font-mono, monospace);
}

.skill-rule-title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-primary, #f0f0ff);
}

.skill-rule-desc {
  margin: 0 0 12px 0;
  color: var(--color-text-secondary, #8a8a9a);
  line-height: 1.6;
  font-size: 0.9rem;
}

.skill-rule-example {
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: var(--radius-sm, 2px);
  font-size: 0.85rem;
}

.skill-rule-example.bad {
  background: rgba(255, 51, 102, 0.08);
  border-left: 3px solid var(--color-error, #ff3366);
}

.skill-rule-example.good {
  background: rgba(0, 255, 136, 0.08);
  border-left: 3px solid var(--color-success, #00ff88);
}

.skill-example-label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
  font-family: var(--font-mono, monospace);
  font-size: 0.75rem;
}

.skill-rule-example.bad .skill-example-label {
  color: var(--color-error, #ff3366);
}

.skill-rule-example.good .skill-example-label {
  color: var(--color-success, #00ff88);
}

.skill-example-text {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--color-text-primary, #f0f0ff);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.82rem;
  line-height: 1.5;
}

/* ===== 安装信息网格 ===== */
.skill-install-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skill-install-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--color-bg-tertiary, #1a1a2e);
  padding: 12px 16px;
  border-radius: var(--radius-sm, 2px);
  border: 1px solid var(--color-border, #3a3a5a);
}

.skill-install-label {
  font-size: 0.75rem;
  color: var(--color-text-muted, #555565);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skill-install-value {
  color: var(--color-text-primary, #f0f0ff);
  font-size: 0.9rem;
}

.skill-install-value.status-enabled {
  color: var(--color-success, #00ff88);
  font-weight: bold;
}

/* ========================================
   主题适配 1：pixel-spectrum（泰拉瑞亚微光彩虹流动）
   ======================================== */
[data-theme="pixel-spectrum"] .skill-trigger {
  border-color: var(--color-accent-primary, #00ff88);
  animation: skill-rainbow-border 4s linear infinite;
}

[data-theme="pixel-spectrum"] .skill-panel-title h2 {
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffed00, #00ff88, #00c8ff, #8000ff, #ff0080);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: skill-rainbow-flow 3s linear infinite;
}

[data-theme="pixel-spectrum"] .skill-item.active {
  border-color: var(--color-accent-secondary, #ff0080);
  box-shadow: 
    inset 3px 0 0 var(--color-accent-secondary, #ff0080),
    0 0 8px var(--color-accent-glow, rgba(0, 255, 136, 0.4));
}

[data-theme="pixel-spectrum"] .skill-rule-card {
  border-left-color: var(--color-accent-secondary, #ff0080);
}

[data-theme="pixel-spectrum"] .skill-trigger-count {
  animation: skill-rainbow-flow 3s linear infinite;
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffed00, #00ff88, #00c8ff, #8000ff, #ff0080);
  background-size: 200% 100%;
}

@keyframes skill-rainbow-border {
  0% { border-color: var(--color-accent-primary, #00ff88); }
  16% { border-color: #ff0080; }
  33% { border-color: #ff8c00; }
  50% { border-color: #ffed00; }
  66% { border-color: #00c8ff; }
  83% { border-color: #8000ff; }
  100% { border-color: var(--color-accent-primary, #00ff88); }
}

@keyframes skill-rainbow-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* ========================================
   主题适配 2：pixel-crow（乌鸦五彩斑斓黑虹彩光泽）
   ======================================== */
[data-theme="pixel-crow"] .skill-trigger {
  border-color: var(--color-accent-primary, #9d4edd);
  animation: skill-crow-iridescent 5s linear infinite;
}

[data-theme="pixel-crow"] .skill-panel {
  background: linear-gradient(135deg,
    rgba(15, 15, 30, 0.98) 0%,
    rgba(26, 10, 46, 0.95) 30%,
    rgba(10, 26, 46, 0.95) 60%,
    rgba(26, 26, 62, 0.95) 100%
  );
  border-color: var(--color-accent-primary, #9d4edd);
}

[data-theme="pixel-crow"] .skill-panel-title h2 {
  color: var(--color-accent-primary, #9d4edd);
  text-shadow: 
    0 0 8px rgba(157, 78, 221, 0.5),
    0 0 16px rgba(233, 69, 96, 0.3);
}

[data-theme="pixel-crow"] .skill-item.active {
  border-color: var(--color-accent-primary, #9d4edd);
  box-shadow: 
    inset 3px 0 0 var(--color-accent-primary, #9d4edd),
    0 0 12px rgba(157, 78, 221, 0.3);
  background: linear-gradient(135deg,
    rgba(26, 10, 46, 0.6),
    rgba(10, 26, 46, 0.6)
  );
}

[data-theme="pixel-crow"] .skill-rule-card {
  border-left-color: var(--color-accent-primary, #9d4edd);
  background: linear-gradient(135deg,
    rgba(15, 15, 30, 0.6),
    rgba(26, 26, 62, 0.6)
  );
}

[data-theme="pixel-crow"] .skill-trigger-count {
  background: linear-gradient(135deg, #9d4edd, #533483);
  background-size: 200% 200%;
  animation: skill-crow-shine 4s linear infinite;
}

[data-theme="pixel-crow"] .skill-entry-btn {
  background: linear-gradient(135deg, #9d4edd, #533483);
  background-size: 200% 200%;
  animation: skill-crow-shine 4s linear infinite;
  border-color: var(--color-accent-primary, #9d4edd);
}

@keyframes skill-crow-iridescent {
  0% {
    border-color: rgba(157, 78, 221, 0.8);
    box-shadow: 0 0 12px rgba(157, 78, 221, 0.3);
  }
  33% {
    border-color: rgba(233, 69, 96, 0.8);
    box-shadow: 0 0 12px rgba(233, 69, 96, 0.3);
  }
  66% {
    border-color: rgba(0, 212, 255, 0.8);
    box-shadow: 0 0 12px rgba(0, 212, 255, 0.3);
  }
  100% {
    border-color: rgba(157, 78, 221, 0.8);
    box-shadow: 0 0 12px rgba(157, 78, 221, 0.3);
  }
}

@keyframes skill-crow-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .skill-body {
    grid-template-columns: 1fr;
    max-height: none;
  }
  
  .skill-list {
    border-right: none;
    border-bottom: 1px solid var(--color-border, #3a3a5a);
    max-height: 240px;
  }
  
  .skill-install-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-panel-header {
    padding: 16px;
  }
  
  .skill-detail {
    padding: 16px;
  }
}
`;export{n as default};
