const n=`/* ============================================================
 *  LevelMap — ZZZ 绝区零风格
 *  赛博朋克关卡路径 / 节点霓虹 / 斜切角卡片
 * ============================================================ */
.level-map-page {
  padding-top: 80px;
  padding-bottom: var(--spacing-3xl);
  position: relative;
}

/* ===== 分类选择器 ===== */
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.category-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(196, 255, 0, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-family: var(--font-display);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  user-select: none;
  clip-path: var(--zzz-clip-path-sm);
}

.category-tab:hover {
  background: rgba(196, 255, 0, 0.06);
  border-color: var(--cat-color, var(--color-accent-primary));
  color: var(--color-accent-primary);
  transform: translateY(-1px);
}

.category-tab.active {
  background: color-mix(in srgb, var(--cat-color, var(--color-accent-primary)) 14%, transparent);
  border-color: var(--cat-color, var(--color-accent-primary));
  color: var(--cat-color, var(--color-accent-primary));
  box-shadow: 0 0 16px color-mix(in srgb, var(--cat-color, transparent) 30%, transparent);
  text-shadow: 0 0 6px color-mix(in srgb, var(--cat-color, transparent) 50%, transparent);
}

.category-tab .cat-icon { font-size: 14px; }
.category-tab .cat-label { font-size: 12px; }

.category-tab .cat-count {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 2px 7px;
  border-radius: var(--radius-sm);
  background: rgba(0, 0, 0, 0.4);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

/* ===== 分类信息栏 ===== */
.category-info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  clip-path: var(--zzz-clip-path);
  position: relative;
}

.category-info-bar::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--cat-color, var(--color-accent-primary));
  box-shadow: 0 0 8px var(--cat-color, var(--color-accent-glow));
}

.cat-info-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.cat-info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  font-size: 22px;
  background: rgba(196, 255, 0, 0.08);
  clip-path: var(--zzz-clip-path-sm);
}

.cat-info-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cat-info-desc {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
}

.cat-info-right {
  min-width: 200px;
  flex: 1;
  max-width: 300px;
}

.cat-progress-mini {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.cat-progress-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cat-progress-num {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent-primary);
}

.cat-progress-bar {
  height: 4px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.cat-progress-fill {
  height: 100%;
  border-radius: var(--radius-sm);
  background: var(--cat-color, var(--color-accent-primary));
  box-shadow: 0 0 8px var(--cat-color, var(--color-accent-glow));
  transition: width 0.6s ease;
}

.map-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  border-radius: 0;
  border: 1px solid var(--color-accent-primary);
  opacity: 0.08;
  transform: rotate(45deg);
}

.deco-1 { width: 280px; height: 280px; top: 10%; right: -100px; }
.deco-2 { width: 180px; height: 180px; bottom: 20%; left: -50px; border-color: var(--color-accent-secondary); }

.deco-code {
  position: absolute;
  font-size: 120px;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--color-accent-primary);
  opacity: 0.04;
  top: 30%;
  left: 5%;
  text-shadow: 0 0 12px var(--color-accent-glow);
}

.deco-code-2 {
  top: auto;
  bottom: 15%;
  left: auto;
  right: 8%;
  font-size: 100px;
  color: var(--color-accent-secondary);
  text-shadow: 0 0 12px var(--color-accent-glow-cyan);
}

.map-container {
  position: relative;
  z-index: 1;
}

.map-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.map-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* 无敌模式按钮 */
.god-mode-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 255, 0, 0.03);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  user-select: none;
  clip-path: var(--zzz-clip-path-sm);
}

.god-mode-btn:hover {
  border-color: rgba(255, 184, 0, 0.5);
  color: var(--color-warning);
  transform: translateY(-1px);
  box-shadow: 0 0 12px rgba(255, 184, 0, 0.2);
}

.god-mode-btn.active {
  background: linear-gradient(135deg, rgba(255, 184, 0, 0.18), rgba(255, 100, 50, 0.08));
  border-color: rgba(255, 184, 0, 0.6);
  color: var(--color-warning);
  box-shadow: 0 0 20px rgba(255, 184, 0, 0.25);
  text-shadow: 0 0 6px rgba(255, 184, 0, 0.6);
}

.god-mode-icon { font-size: 15px; }
.god-mode-text { font-size: 12px; }

.god-mode-toggle {
  display: inline-flex;
  align-items: center;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  transition: background 0.3s;
}

.god-mode-btn.active .god-mode-toggle {
  background: rgba(255, 184, 0, 0.3);
}

.toggle-slider {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #555565;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-slider.on {
  left: 18px;
  background: var(--color-warning);
  box-shadow: 0 0 8px rgba(255, 184, 0, 0.7);
}

.path-info {
  margin-bottom: var(--spacing-xl);
}

.path-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(196, 255, 0, 0.06);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-md);
  clip-path: var(--zzz-clip-path-sm);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.map-title {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 900;
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 0 12px var(--color-accent-glow);
  color: var(--color-accent-primary);
}

.map-subtitle {
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
  font-size: 14px;
  letter-spacing: 0.02em;
}

.progress-bar-section {
  max-width: 600px;
  margin: 0 auto;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.progress-label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.progress-percent {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.progress-bar {
  height: 6px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  box-shadow: 0 0 12px var(--color-accent-glow);
  border-radius: var(--radius-sm);
  transition: width 1s ease;
}

.level-map-wrapper {
  position: relative;
  padding: var(--spacing-xl) 0;
}

.level-map {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.map-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--line-color, var(--color-accent-primary)) 0%,
    var(--line-color, var(--color-accent-primary)) 35%,
    var(--color-border) 35%,
    var(--color-border) 100%
  );
  transform: translateX(-50%);
  box-shadow: 0 0 8px var(--line-color, var(--color-accent-glow));
}

.map-node {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.node-left {
  justify-content: flex-start;
  padding-right: 50%;
}

.node-right {
  justify-content: flex-end;
  padding-left: 50%;
}

.node-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%) rotate(45deg);
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all var(--transition-normal);
}

.status-completed .node-dot {
  background: var(--color-accent-primary);
  box-shadow: 0 0 0 4px var(--color-bg-primary), 0 0 20px var(--color-accent-glow);
}

.status-current .node-dot {
  background: var(--color-warning);
  box-shadow: 0 0 0 4px var(--color-bg-primary), 0 0 20px rgba(255, 184, 0, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

.status-locked .node-dot {
  background: var(--color-bg-tertiary);
  box-shadow: 0 0 0 4px var(--color-bg-primary);
}

.dot-check {
  color: var(--color-bg-primary);
  font-size: 12px;
  font-weight: 900;
  transform: rotate(-45deg);
}

.dot-pulse {
  width: 10px;
  height: 10px;
  background: var(--color-bg-primary);
  border-radius: 1px;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.dot-lock {
  font-size: 11px;
  transform: rotate(-45deg);
}

.node-card {
  width: calc(100% - 40px);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  clip-path: var(--zzz-clip-path);
  position: relative;
}

.node-left .node-card { margin-right: 40px; }
.node-right .node-card { margin-left: 40px; }

.status-completed .node-card:hover {
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 0 24px var(--color-accent-glow), var(--shadow-lg);
}

.status-current .node-card {
  border-color: var(--color-warning);
  background: linear-gradient(135deg, rgba(255, 184, 0, 0.06), var(--color-bg-card));
  box-shadow: 0 0 24px rgba(255, 184, 0, 0.15);
}

.status-locked .node-card {
  opacity: 0.55;
  cursor: not-allowed;
  filter: grayscale(50%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.level-number {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-accent-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.level-stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 12px;
  color: var(--color-text-muted);
}

.star.filled {
  color: var(--color-warning);
  text-shadow: 0 0 6px rgba(255, 184, 0, 0.6);
}

.card-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.card-desc {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.card-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.meta-icon { font-size: 13px; }

.card-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.topic-tag {
  padding: 3px 10px;
  background: rgba(196, 255, 0, 0.06);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.current-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(255, 184, 0, 0.15);
  border: 1px solid rgba(255, 184, 0, 0.4);
  color: var(--color-warning);
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 4px rgba(255, 184, 0, 0.6);
}

.completed-badge-card {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: rgba(196, 255, 0, 0.15);
  border: 1px solid var(--color-border-accent);
  color: var(--color-accent-primary);
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.level-progress-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 6px 0;
}

.level-progress-bar {
  flex: 1;
  height: 3px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.level-progress-fill {
  height: 100%;
  background: var(--color-accent-primary);
  box-shadow: 0 0 6px var(--color-accent-glow);
  border-radius: var(--radius-sm);
  transition: width 0.6s ease;
}

.level-progress-text {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: var(--color-warning);
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(255, 184, 0, 0.6);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.7; }
}

.locked-content {
  text-align: center;
  padding: var(--spacing-md) 0;
}

.lock-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-sm);
  filter: drop-shadow(0 0 6px var(--color-accent-glow));
}

.lock-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.lock-desc {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
}

.lock-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.current-level-detail {
  margin-top: var(--spacing-3xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-xl);
  clip-path: var(--zzz-clip-path);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
  gap: var(--spacing-lg);
}

.detail-header h2 {
  font-family: var(--font-display);
  font-size: 22px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.detail-subtitle {
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
  font-size: 13px;
}

.list-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.lessons-list {
  margin-bottom: var(--spacing-xl);
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.lesson-item:hover {
  border-color: var(--color-border-accent);
  background: var(--color-bg-tertiary);
  box-shadow: 0 0 8px var(--color-accent-glow);
}

.lesson-item.completed {
  opacity: 0.7;
}

.lesson-index {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-muted);
  width: 30px;
}

.lesson-icon { font-size: 20px; }

.lesson-info { flex: 1; }

.lesson-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.lesson-duration {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
}

.lesson-status {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.status-completed { color: var(--color-accent-primary); }
.status-current {
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.challenges-section {
  margin-bottom: var(--spacing-xl);
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.challenge-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  clip-path: var(--zzz-clip-path-sm);
}

.challenge-card:hover {
  border-color: var(--color-border-accent);
  transform: translateY(-2px);
  box-shadow: 0 0 16px var(--color-accent-glow);
}

.challenge-card.completed {
  opacity: 0.7;
  border-color: var(--color-border-accent);
}

.challenge-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.challenge-difficulty {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.difficulty-easy {
  background: rgba(196, 255, 0, 0.1);
  color: var(--color-accent-primary);
}

.difficulty-medium {
  background: rgba(255, 184, 0, 0.1);
  color: var(--color-warning);
}

.difficulty-hard {
  background: rgba(255, 46, 99, 0.1);
  color: var(--color-accent-tertiary);
}

.challenge-check {
  color: var(--color-accent-primary);
  font-weight: 900;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.challenge-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  clip-path: var(--zzz-clip-path-sm);
}

.stat-icon {
  font-size: 26px;
  filter: drop-shadow(0 0 4px var(--color-accent-glow));
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-big {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.stat-small {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .category-tabs { gap: 6px; }
  .category-tab { padding: 6px 10px; font-size: 11px; }
  .category-tab .cat-label { font-size: 11px; }
  .category-info-bar { flex-direction: column; align-items: stretch; }
  .cat-info-right { max-width: none; }
  .map-line { left: 20px; }
  .node-left, .node-right {
    justify-content: flex-end;
    padding-left: 50px;
    padding-right: 0;
  }
  .node-left .node-card, .node-right .node-card {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
  .node-dot { left: 20px; }
  .map-title { font-size: 26px; }
  .detail-header { flex-direction: column; align-items: stretch; }
  .detail-header .btn { align-self: flex-start; }
  .stats-row { grid-template-columns: 1fr; }
  .challenges-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .current-level-detail { padding: var(--spacing-lg); }
  .detail-header h2 { font-size: 18px; }
  .card-title { font-size: 15px; }
  .card-desc { font-size: 11px; }
}
`;export{n as default};
