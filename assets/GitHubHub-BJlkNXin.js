const n=`/* ============================================================
 *  GitHubHub — GitHub 插件页面
 *  像素风 / 状态色标签 / Mock 卡片列表
 *  状态色约定：success=绿 warning=黄 error=红 info=青
 * ============================================================ */

/* ============ 顶部统计条 ============ */
.gh-stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.gh-stat {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  position: relative;
  image-rendering: pixelated;
  animation: hero-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

.gh-stat:nth-child(1) { animation-delay: 0.05s; }
.gh-stat:nth-child(2) { animation-delay: 0.10s; }
.gh-stat:nth-child(3) { animation-delay: 0.15s; }
.gh-stat:nth-child(4) { animation-delay: 0.20s; }

/* 像素风立体阴影（右侧 + 底部色块） */
.gh-stat::before {
  content: '';
  position: absolute;
  top: 2px;
  right: -4px;
  bottom: -4px;
  width: 4px;
  background: var(--color-border-light);
}

.gh-stat::after {
  content: '';
  position: absolute;
  left: 2px;
  right: -4px;
  bottom: -4px;
  height: 4px;
  background: var(--color-border-light);
}

.gh-stat-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  image-rendering: pixelated;
}

.gh-stat-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.gh-stat-value {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.gh-stat-label {
  font-size: 0.68rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}

/* ============ 标签页 ============ */
.gh-tabs {
  margin-top: var(--spacing-md);
}

.gh-tab-icon {
  margin-right: 6px;
}

/* ============ 仓库网格 ============ */
.gh-repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.gh-repo-card {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  position: relative;
  transition: border-color 0.12s, transform 0.12s;
}

.gh-repo-card:hover {
  border-color: var(--color-accent-primary);
  transform: translate(-2px, -2px);
}

.gh-repo-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-sm);
}

.gh-repo-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-accent-secondary);
  letter-spacing: 0.02em;
  word-break: break-all;
}

.gh-repo-stars {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-warning);
  white-space: nowrap;
  flex-shrink: 0;
}

.gh-repo-desc {
  font-size: 0.84rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  flex: 1;
}

.gh-repo-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.74rem;
  color: var(--color-text-muted);
  padding-top: var(--spacing-xs);
  border-top: 1px dashed var(--color-border);
}

.gh-repo-lang {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
}

.gh-lang-dot {
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid var(--color-border-light);
}

.gh-repo-updated {
  font-family: var(--font-mono);
  font-size: 0.7rem;
}

.gh-clone-btn {
  align-self: flex-start;
  margin-top: var(--spacing-xs);
  font-size: 0.78rem;
  padding: 6px 14px;
}

/* ============ 通用列表 ============ */
.gh-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.gh-row {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  transition: border-color 0.12s;
}

.gh-row:hover {
  border-color: var(--color-border-light);
}

/* ============ 状态标签（PR） ============ */
.gh-status-chip {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 2px solid;
  flex-shrink: 0;
  align-self: center;
  image-rendering: pixelated;
}

/* open = 绿（success） */
.gh-status-open {
  color: var(--color-success);
  border-color: var(--color-success);
  background: rgba(196, 255, 0, 0.10);
}

/* merged = 青（info） */
.gh-status-merged {
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
  background: rgba(0, 229, 255, 0.10);
}

/* closed = 红（error） */
.gh-status-closed {
  color: var(--color-error);
  border-color: var(--color-error);
  background: rgba(255, 46, 99, 0.10);
}

/* ============ PR 行 ============ */
.gh-pr-main,
.gh-issue-main,
.gh-ci-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gh-pr-title,
.gh-issue-title {
  font-size: 0.92rem;
  color: var(--color-text-primary);
  line-height: 1.4;
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.gh-pr-num {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.gh-pr-meta,
.gh-issue-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  font-size: 0.76rem;
  color: var(--color-text-muted);
}

.gh-repo-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 2px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
}

/* 头像首字母圆圈 */
.gh-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 900;
  color: var(--color-bg-primary);
  flex-shrink: 0;
  border: 1px solid var(--color-border-light);
}

.gh-avatar-sm {
  width: 18px;
  height: 18px;
  font-size: 0.62rem;
}

.gh-diff {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.74rem;
}

.gh-diff-add {
  color: var(--color-success);
}

.gh-diff-del {
  color: var(--color-error);
}

.gh-files {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

/* ============ Issue 行 ============ */
.gh-priority {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 900;
  padding: 4px 8px;
  border: 2px solid;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  align-self: center;
  image-rendering: pixelated;
}

/* P0 = 红 error */
.gh-pri-P0 {
  color: var(--color-error);
  border-color: var(--color-error);
  background: rgba(255, 46, 99, 0.12);
}

/* P1 = 橙红（error 偏暖） */
.gh-pri-P1 {
  color: #ff8c00;
  border-color: #ff8c00;
  background: rgba(255, 140, 0, 0.12);
}

/* P2 = 黄 warning */
.gh-pri-P2 {
  color: var(--color-warning);
  border-color: var(--color-warning);
  background: rgba(255, 184, 0, 0.12);
}

/* P3 = 青 info */
.gh-pri-P3 {
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
  background: rgba(0, 229, 255, 0.10);
}

.gh-label-chip {
  font-size: 0.7rem;
  padding: 2px 8px;
  background: rgba(196, 255, 0, 0.08);
  border: 1px solid var(--color-border-accent);
  color: var(--color-accent-primary);
  letter-spacing: 0.03em;
  font-family: var(--font-mono);
}

.gh-assignee {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-secondary);
}

.gh-unassigned {
  color: var(--color-text-muted);
  font-style: italic;
  font-size: 0.74rem;
}

/* ============ CI 行 ============ */
.gh-ci-dot {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  align-self: center;
  border: 2px solid var(--color-border-light);
  image-rendering: pixelated;
}

/* success = 绿 */
.gh-ci-success {
  background: var(--color-success);
  box-shadow: 0 0 8px var(--color-accent-glow);
}

/* failure = 红 */
.gh-ci-failure {
  background: var(--color-error);
  box-shadow: 0 0 8px rgba(255, 46, 99, 0.4);
}

/* running = 黄 + 脉冲 */
.gh-ci-running {
  background: var(--color-warning);
  animation: gh-ci-pulse 1.2s ease-in-out infinite;
}

@keyframes gh-ci-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(255, 184, 0, 0.4); }
  50% { opacity: 0.5; box-shadow: 0 0 12px rgba(255, 184, 0, 0.7); }
}

.gh-ci-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  padding: 2px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-text-primary);
}

.gh-ci-head:hover {
  color: var(--color-accent-primary);
}

.gh-ci-workflow {
  font-weight: 700;
  color: var(--color-accent-secondary);
}

.gh-ci-branch {
  color: var(--color-text-muted);
  font-size: 0.76rem;
}

.gh-ci-status {
  font-size: 0.7rem;
  padding: 2px 8px;
  border: 1px solid;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.gh-ci-status-success {
  color: var(--color-success);
  border-color: var(--color-success);
  background: rgba(196, 255, 0, 0.10);
}

.gh-ci-status-failure {
  color: var(--color-error);
  border-color: var(--color-error);
  background: rgba(255, 46, 99, 0.10);
}

.gh-ci-status-running {
  color: var(--color-warning);
  border-color: var(--color-warning);
  background: rgba(255, 184, 0, 0.10);
}

.gh-ci-duration {
  font-size: 0.74rem;
  color: var(--color-text-secondary);
  margin-left: auto;
}

.gh-ci-expand {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  transition: transform 0.2s;
  display: inline-block;
}

.gh-ci-expand.open {
  transform: rotate(180deg);
  color: var(--color-accent-primary);
}

.gh-ci-log {
  margin-top: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-secondary);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  animation: gh-ci-log-in 0.25s ease-out;
}

@keyframes gh-ci-log-in {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.gh-ci-meta {
  margin-top: 4px;
}

/* ============ Toast ============ */
.gh-toast {
  position: fixed;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-bg-card);
  border: 2px solid var(--color-success);
  color: var(--color-text-primary);
  font-family: var(--font-display);
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  z-index: 9999;
  box-shadow: 0 0 16px var(--color-accent-glow), var(--shadow-lg);
  animation: gh-toast-in 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  image-rendering: pixelated;
}

@keyframes gh-toast-in {
  from { opacity: 0; transform: translate(-50%, 12px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.gh-toast-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--color-success);
  color: var(--color-bg-primary);
  font-weight: 900;
  font-size: 0.8rem;
  flex-shrink: 0;
}

/* ============ 响应式 ============ */
@media (max-width: 768px) {
  .gh-stats-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gh-stats-bar {
    grid-template-columns: 1fr;
  }
  .gh-ci-duration {
    margin-left: 0;
  }
}
`;export{n as default};
