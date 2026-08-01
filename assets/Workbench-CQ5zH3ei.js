const n=`/* Workbench — 个人工作台 */

.wb-overview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-md);
}

.wb-stat {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  position: relative;
}

.wb-stat-icon {
  font-size: 1.5rem;
}

.wb-stat-value {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--color-accent-primary);
  line-height: 1.1;
}

.wb-stat-label {
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.wb-input-row {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.wb-input-row .plugin-input {
  flex: 1;
}

.wb-icon-select {
  width: 60px !important;
  flex-shrink: 0;
  text-align: center;
  font-size: 1.1rem;
}

.wb-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wb-todo-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 10px 12px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  transition: border-color 0.12s, opacity 0.12s;
  animation: fadeIn 0.3s ease-out backwards;
}

.wb-todo-item:hover {
  border-color: var(--color-accent-primary);
}

.wb-todo-item.done {
  opacity: 0.5;
}

.wb-todo-item.done .wb-todo-text {
  text-decoration: line-through;
}

.wb-check {
  width: 22px;
  height: 22px;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-border-light);
  color: var(--color-bg-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  transition: all 0.1s;
}

.wb-check:hover {
  border-color: var(--color-accent-primary);
}

.wb-todo-item.done .wb-check {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
}

.wb-todo-text {
  flex: 1;
  font-size: 0.9rem;
  color: var(--color-text-primary);
}

.wb-remove {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  padding: 2px 6px;
  transition: color 0.1s;
}

.wb-remove:hover {
  color: var(--color-error);
}

/* 习惯 */
.wb-habit-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  animation: fadeIn 0.3s ease-out backwards;
}

.wb-habit-check {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 10px 12px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: all 0.12s;
  text-align: left;
}

.wb-habit-check:hover {
  border-color: var(--color-accent-primary);
}

.wb-habit-check.done {
  background: rgba(196, 255, 0, 0.08);
  border-color: var(--color-accent-primary);
}

.wb-habit-icon {
  font-size: 1.3rem;
}

.wb-habit-name {
  flex: 1;
  font-size: 0.9rem;
  color: var(--color-text-primary);
}

.wb-streak {
  font-family: var(--font-display);
  font-size: 0.78rem;
  color: var(--color-warning);
  letter-spacing: 0.03em;
}

/* 记账 */
.wb-ledger-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.wb-ledger-type {
  display: flex;
  gap: 2px;
  border: 2px solid var(--color-border);
  border-bottom: none;
}

.wb-ledger-type .plugin-tab {
  flex: 1;
  text-align: center;
  margin-bottom: 0;
  border-bottom: 2px solid var(--color-border);
}

.wb-ledger-type .plugin-tab.active {
  border-bottom-color: var(--color-accent-primary);
}

.wb-ledger-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 8px 12px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  animation: fadeIn 0.3s ease-out backwards;
}

.wb-ledger-amount {
  font-family: var(--font-mono);
  font-weight: bold;
  min-width: 80px;
}

.wb-ledger-amount.income {
  color: var(--color-accent-primary);
}

.wb-ledger-amount.expense {
  color: var(--color-error);
}

.wb-ledger-cat {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  padding: 2px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
}

.wb-ledger-note {
  flex: 1;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.wb-ledger-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

/* 目标 */
.wb-goal-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.wb-goals {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.wb-goal-card {
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  animation: fadeIn 0.3s ease-out backwards;
}

.wb-goal-card:hover {
  border-color: var(--color-accent-primary);
}

.wb-goal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.wb-goal-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.wb-goal-meta {
  display: flex;
  gap: var(--spacing-md);
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-mono);
}

.wb-goal-progress {
  position: relative;
  height: 24px;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-border);
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
}

.wb-goal-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  transition: width 0.3s ease-out;
}

.wb-goal-progress-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
}

.wb-goal-actions {
  display: flex;
  gap: 6px;
}

.wb-goal-actions .plugin-btn {
  flex: 1;
  padding: 5px;
  font-size: 0.75rem;
}

/* 灵感 */
.wb-ideas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--spacing-md);
}

.wb-idea-card {
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-left: 4px solid var(--color-accent-tertiary);
  animation: fadeIn 0.3s ease-out backwards;
}

.wb-idea-card:hover {
  border-color: var(--color-accent-primary);
  border-left-color: var(--color-accent-primary);
}

.wb-idea-content {
  font-size: 0.88rem;
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-sm);
  word-break: break-word;
}

.wb-idea-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wb-idea-time {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .wb-overview {
    grid-template-columns: repeat(2, 1fr);
  }
  .wb-ideas {
    grid-template-columns: 1fr;
  }
}
`;export{n as default};
