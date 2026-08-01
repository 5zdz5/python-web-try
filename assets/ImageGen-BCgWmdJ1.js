const n=`.ig-layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.ig-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ig-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin-top: var(--spacing-sm);
}

.ig-example-chip {
  font-size: 0.72rem;
  padding: 3px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.1s;
  font-family: var(--font-mono);
}

.ig-example-chip:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
}

.ig-mode-row {
  margin-top: var(--spacing-md);
}

.ig-mode-toggle {
  display: flex;
  gap: 2px;
  border: 2px solid var(--color-border);
  border-bottom: none;
}

.ig-mode-toggle .plugin-tab {
  flex: 1;
  text-align: center;
  margin-bottom: 0;
  border-bottom: 2px solid var(--color-border);
}

.ig-mode-toggle .plugin-tab.active {
  border-bottom-color: var(--color-accent-primary);
}

.ig-generate-btn {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 700;
}

.ig-error {
  padding: 10px 12px;
  background: rgba(255, 46, 99, 0.1);
  border: 1px solid var(--color-error);
  color: var(--color-error);
  font-size: 0.85rem;
}

.ig-preview {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ig-preview-section {
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.ig-loading {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--color-text-secondary);
  min-height: 300px;
}

.ig-loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-accent-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ig-result {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.ig-result-img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
}

.ig-result-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.ig-result-style,
.ig-result-size {
  font-size: 0.72rem;
  padding: 2px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
}

.ig-result-prompt {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  line-height: 1.5;
  padding: 8px;
  background: var(--color-bg-secondary);
  border-left: 3px solid var(--color-accent-secondary);
}

.ig-history {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
}

.ig-history-item {
  position: relative;
  cursor: pointer;
  border: 2px solid var(--color-border);
  transition: border-color 0.1s;
  aspect-ratio: 1;
  overflow: hidden;
}

.ig-history-item:hover {
  border-color: var(--color-accent-primary);
}

.ig-history-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ig-history-mode {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.6rem;
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-accent-primary);
  padding: 1px 4px;
  font-family: var(--font-mono);
}

@media (max-width: 900px) {
  .ig-layout {
    grid-template-columns: 1fr;
  }
}
`;export{n as default};
