const n=`.learning-path-page {
  min-height: calc(100vh - 80px);
  padding: var(--spacing-xl) 0;
  position: relative;
  overflow: hidden;
}

.path-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.path-decoration .deco-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}

.path-decoration .deco-1 {
  width: 350px;
  height: 350px;
  background: var(--color-accent-primary);
  top: -50px;
  left: -100px;
  box-shadow: 0 0 120px var(--color-accent-glow);
}

.path-decoration .deco-2 {
  width: 300px;
  height: 300px;
  background: var(--color-accent-secondary);
  bottom: -50px;
  right: -50px;
  box-shadow: 0 0 120px var(--color-accent-glow-cyan);
}

.path-container {
  position: relative;
  z-index: 1;
}

.path-header {
  margin-bottom: var(--spacing-xl);
}

.path-header .badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(196, 255, 0, 0.12);
  color: var(--color-accent-primary);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-sm);
  clip-path: var(--zzz-clip-path-sm);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 0 4px var(--color-accent-glow);
}

.page-title {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 8px;
  color: var(--color-text-primary);
  letter-spacing: 0.04em;
  text-shadow: 0 0 8px var(--color-accent-glow), 0 0 16px var(--color-accent-glow);
}

.page-subtitle {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.user-level-card {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  padding: var(--spacing-lg);
  background:
    linear-gradient(135deg, rgba(196, 255, 0, 0.06), rgba(0, 229, 255, 0.06)),
    var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-primary);
  clip-path: var(--zzz-clip-path);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.user-level-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, var(--color-accent-glow), transparent 60%);
  opacity: 0.15;
}

.user-avatar-lg {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  border: 2px solid var(--color-border-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg-primary);
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 900;
  flex-shrink: 0;
  box-shadow: 0 0 20px var(--color-accent-glow), 0 0 40px var(--color-accent-glow-cyan);
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: conic-gradient(from 0deg, var(--color-warning), var(--color-accent-tertiary), var(--color-accent-secondary), var(--color-accent-primary), var(--color-warning)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  filter: drop-shadow(0 0 6px var(--color-accent-glow));
}

.user-info-block {
  flex: 1;
  min-width: 0;
}

.user-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.user-name {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.03em;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.user-level-badge {
  padding: 4px 12px;
  background: linear-gradient(135deg, var(--color-warning), var(--color-accent-tertiary));
  color: var(--color-bg-primary);
  clip-path: var(--zzz-clip-path-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 0 12px rgba(255, 184, 0, 0.35);
}

.level-progress-block {
  margin-bottom: 12px;
}

.level-progress-info {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.level-progress-bar {
  height: 6px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.level-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  box-shadow: 0 0 10px var(--color-accent-glow), 0 0 4px var(--color-accent-glow-cyan);
  transition: width 0.6s ease;
}

.user-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.user-tag {
  padding: 4px 10px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  clip-path: var(--zzz-clip-path-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.overview-card {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-border-light);
  clip-path: var(--zzz-clip-path-sm);
  transition: all var(--transition-normal);
}

.overview-card:hover {
  border-left-color: var(--color-accent-primary);
  border-color: var(--color-border-light);
  transform: translateY(-2px);
  box-shadow: 0 0 16px var(--color-accent-glow);
}

.ov-icon {
  width: 48px;
  height: 48px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  clip-path: var(--zzz-clip-path-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.ov-info {
  flex: 1;
  min-width: 0;
}

.ov-value {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.ov-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  margin-top: 2px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.ov-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  margin-top: 2px;
  opacity: 0.7;
  letter-spacing: 0.04em;
}

.path-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.path-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  clip-path: var(--zzz-clip-path);
  padding: var(--spacing-md);
  position: relative;
}

.card-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-left: 10px;
  border-left: 2px solid var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.calendar-card {
  grid-column: 1;
}

.calendar-week {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.cal-day {
  flex: 1;
  text-align: center;
}

.cal-day-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cal-day-cell {
  height: 44px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  clip-path: var(--zzz-clip-path-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.cal-day.studied .cal-day-cell {
  background: linear-gradient(135deg, rgba(196, 255, 0, 0.25), rgba(0, 229, 255, 0.25));
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 12px var(--color-accent-glow), inset 0 0 8px var(--color-accent-glow-cyan);
}

.cal-day.today .cal-day-cell {
  border-color: var(--color-warning);
  box-shadow: 0 0 0 2px rgba(255, 184, 0, 0.25), 0 0 14px rgba(255, 184, 0, 0.4);
}

.cal-check {
  color: var(--color-accent-primary);
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.calendar-foot {
  margin-top: var(--spacing-md);
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.calendar-foot strong {
  font-family: var(--font-display);
  color: var(--color-accent-primary);
  font-weight: 700;
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.levels-card {
  grid-column: 2;
}

.levels-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.path-level {
  position: relative;
  display: flex;
  gap: 12px;
  padding: 10px;
  clip-path: var(--zzz-clip-path-sm);
  cursor: pointer;
  transition: background var(--transition-normal);
}

.path-level:hover {
  background: var(--color-bg-tertiary);
  box-shadow: inset 0 0 10px var(--color-accent-glow-cyan);
}

.path-level.locked {
  cursor: not-allowed;
  opacity: 0.45;
  filter: grayscale(0.6);
}

.pl-node {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-muted);
  flex-shrink: 0;
  z-index: 1;
  transition: all var(--transition-normal);
}

.path-level.completed .pl-node {
  background: radial-gradient(circle at center, var(--color-accent-primary), rgba(196, 255, 0, 0.4));
  border-color: var(--color-accent-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 0 14px var(--color-accent-glow), 0 0 28px var(--color-accent-glow);
}

.path-level.unlocked:not(.completed) .pl-node {
  background: radial-gradient(circle at center, var(--color-accent-secondary), rgba(0, 229, 255, 0.4));
  border-color: var(--color-accent-secondary);
  color: var(--color-bg-primary);
  box-shadow: 0 0 14px var(--color-accent-glow-cyan), 0 0 28px var(--color-accent-glow-cyan);
  animation: pulse-glow 2s ease-in-out infinite;
}

.pl-content {
  flex: 1;
  min-width: 0;
}

.pl-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.03em;
}

.pl-meta {
  display: flex;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.pl-bar {
  height: 3px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.pl-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  box-shadow: 0 0 8px var(--color-accent-glow);
  border-radius: var(--radius-sm);
  transition: width 0.6s ease;
}

.pl-line {
  position: absolute;
  left: 25px;
  top: 42px;
  bottom: -4px;
  width: 2px;
  background: var(--color-border);
}

.pl-line.completed {
  background: linear-gradient(180deg, var(--color-accent-primary), var(--color-accent-secondary));
  box-shadow: 0 0 6px var(--color-accent-glow);
}

.activity-card {
  grid-column: 1 / -1;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 400px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-border-light);
  clip-path: var(--zzz-clip-path-sm);
  transition: all var(--transition-normal);
}

.activity-item:hover {
  border-left-color: var(--color-accent-secondary);
  border-color: var(--color-border-light);
  box-shadow: 0 0 12px var(--color-accent-glow-cyan);
}

.act-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.act-body {
  flex: 1;
  min-width: 0;
}

.act-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
}

.act-desc {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  margin-top: 2px;
  letter-spacing: 0.02em;
}

.act-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
}

.act-xp {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  color: var(--color-warning);
  text-shadow: 0 0 6px rgba(255, 184, 0, 0.4);
  letter-spacing: 0.05em;
}

.act-time {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.empty-state {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .path-main {
    grid-template-columns: 1fr;
  }

  .calendar-card,
  .levels-card,
  .activity-card {
    grid-column: 1;
  }
}

@media (max-width: 600px) {
  .user-level-card {
    flex-direction: column;
    text-align: center;
  }

  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .page-title {
    font-size: 28px;
  }
}
`;export{n as default};
