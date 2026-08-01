const n=`/* CodeOutputQuiz 代码输出猜谜 样式（像素风+主题双适配） */

.coq-page { padding: 32px 0 80px; }

.coq-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  gap: 18px;
  padding: 16px 0 28px;
}
@media (max-width: 760px) {
  .coq-header { grid-template-columns: 1fr; }
}
.coq-back-btn {
  font-family: var(--font-family-mono);
  font-size: 13px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-secondary);
  color: var(--color-text-secondary);
  background: var(--color-surface-secondary);
  text-decoration: none;
  align-self: start;
}
.coq-back-btn:hover {
  color: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
}
.coq-title {
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: 0.5px;
}
.coq-subtitle {
  margin: 6px 0 0;
  font-size: 14px;
  color: var(--color-text-secondary);
}
.coq-score {
  padding: 14px 18px;
  min-width: 160px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.coq-score-row {
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--font-family-mono);
  font-size: 13px;
}
.coq-score-label { color: var(--color-text-secondary); }
.coq-score-val { font-weight: 700; font-size: 15px; }
.coq-right { color: var(--color-accent-success); }
.coq-wrong { color: var(--color-accent-danger); }
.coq-monospace { font-family: var(--font-family-mono); }

.coq-cats {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
  margin-bottom: 20px;
}
.coq-cat {
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-secondary);
  background: var(--color-surface-secondary);
  color: var(--color-text-secondary);
  cursor: pointer;
  font-family: var(--font-family-mono);
  font-size: 13px;
  transition: all var(--transition-fast);
}
.coq-cat:hover { color: var(--color-accent-primary); border-color: var(--color-accent-primary); }
.coq-cat.active {
  background: color-mix(in srgb, var(--color-accent-primary) 18%, transparent);
  color: var(--color-accent-primary);
  border-color: color-mix(in srgb, var(--color-accent-primary) 55%, transparent);
}
.coq-progress {
  margin-left: auto;
  color: var(--color-text-secondary);
  font-size: 12px;
  padding: 4px 10px;
}

.coq-card {
  padding: 24px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-secondary);
  background: var(--color-surface-primary);
}
.coq-q-head { margin-bottom: 16px; }
.coq-q-cat {
  display: inline-block;
  padding: 3px 10px;
  font-size: 12px;
  color: var(--color-accent-primary);
  border: 1px solid color-mix(in srgb, var(--color-accent-primary) 40%, transparent);
  border-radius: var(--radius-sm);
  margin-bottom: 8px;
}
.coq-q-title {
  margin: 0;
  font-size: 20px;
  color: var(--color-text-primary);
}
.coq-code {
  margin: 0 0 20px !important;
  padding: 16px 18px !important;
  font-family: var(--font-family-mono);
  font-size: 13.5px;
  line-height: 1.7;
  border-radius: var(--radius-md) !important;
  color: var(--color-text-primary);
  overflow-x: auto;
}

.coq-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
@media (max-width: 640px) {
  .coq-options { grid-template-columns: 1fr; }
}
.coq-option {
  display: flex; align-items: baseline; gap: 10px;
  padding: 14px 16px;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--radius-md);
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-fast);
  font-size: 14px;
}
.coq-option:hover:not(:disabled) {
  border-color: var(--color-accent-primary);
  transform: translateY(-1px);
}
.coq-option:disabled { cursor: default; }
.coq-option-sel {
  border-color: var(--color-accent-primary);
  background: color-mix(in srgb, var(--color-accent-primary) 8%, transparent);
}
.coq-option-correct {
  border-color: var(--color-accent-success) !important;
  background: color-mix(in srgb, var(--color-accent-success) 14%, transparent) !important;
}
.coq-option-wrong {
  border-color: var(--color-accent-danger) !important;
  background: color-mix(in srgb, var(--color-accent-danger) 12%, transparent) !important;
}
.coq-opt-key { color: var(--color-accent-primary); font-weight: 700; min-width: 24px; }
.coq-opt-text {
  font-family: var(--font-family-mono);
  font-size: 13px;
  word-break: break-all;
}

.coq-explain {
  padding: 14px 18px;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
  border-left: 4px solid var(--color-accent-primary);
}
.coq-explain-head {
  display: flex; justify-content: space-between; align-items: center;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 6px;
}
.coq-explain-text {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--color-text-secondary);
}

.coq-actions {
  display: flex; justify-content: flex-end; gap: 10px;
}
`;export{n as default};
