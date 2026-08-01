const n=`.vg-layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.vg-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.vg-hint {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-style: italic;
  padding: 8px;
  background: var(--color-bg-secondary);
  border-left: 3px solid var(--color-border-light);
}

.vg-shots {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.vg-shot {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-sm);
}

.vg-shot-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.vg-shot-num {
  font-family: var(--font-display);
  font-size: 0.78rem;
  color: var(--color-accent-secondary);
  letter-spacing: 0.05em;
}

.vg-shot-remove {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 2px 6px;
  transition: color 0.1s;
}

.vg-shot-remove:hover {
  color: var(--color-error);
}

.vg-shot-desc {
  min-height: 50px;
  font-size: 0.82rem;
  margin-bottom: 6px;
}

.vg-shot-params {
  display: flex;
  gap: 8px;
}

.vg-shot-params .plugin-select {
  flex: 1;
  font-size: 0.78rem;
  padding: 5px 8px;
}

.vg-shot-dur {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.vg-add-shot {
  width: 100%;
  padding: 8px;
  font-size: 0.82rem;
  border-style: dashed;
}

.vg-ratio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.vg-ratio-chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 6px;
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.1s;
}

.vg-ratio-chip:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-text-primary);
}

.vg-ratio-chip.active {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
}

.vg-preview {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.vg-result {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.vg-player {
  position: relative;
  width: 100%;
  background: #000;
  border: 2px solid var(--color-border);
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.vg-player.vg-ratio-16-9 { aspect-ratio: 16 / 9; }
.vg-player.vg-ratio-4-3 { aspect-ratio: 4 / 3; }
.vg-player.vg-ratio-1-1 { aspect-ratio: 1 / 1; }
.vg-player.vg-ratio-3-4 { aspect-ratio: 3 / 4; }
.vg-player.vg-ratio-9-16 { aspect-ratio: 9 / 16; max-width: 360px; margin: 0 auto; }
.vg-player.vg-ratio-21-9 { aspect-ratio: 21 / 9; }
.vg-player.vg-ratio-adaptive { aspect-ratio: 16 / 9; }

.vg-player-content {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vg-player-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(196, 255, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(196, 255, 0, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.vg-player-scan {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(0, 229, 255, 0.15), transparent);
  animation: vg-scan 3s linear infinite;
}

@keyframes vg-scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.vg-player-text {
  text-align: center;
  z-index: 2;
  padding: var(--spacing-md);
}

.vg-player-tag {
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-accent-primary);
  margin-bottom: 8px;
  text-shadow: 0 0 8px var(--color-accent-glow);
}

.vg-player-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: 6px;
  max-width: 400px;
  margin-inline: auto;
}

.vg-player-meta {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-secondary);
}

.vg-player-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--color-accent-primary);
  box-shadow: 0 0 8px var(--color-accent-glow);
  animation: vg-progress 5s linear infinite;
}

@keyframes vg-progress {
  0% { width: 0; }
  100% { width: 100%; }
}

.vg-shots-timeline {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.vg-timeline-shot {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vg-timeline-bar {
  background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
  padding: 4px 8px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  color: var(--color-bg-primary);
  font-weight: 700;
  min-width: 40px;
}

.vg-timeline-dur {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-secondary);
}

.vg-workflow {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-md);
}

.vg-code-block {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  background: var(--color-bg-primary);
  padding: 10px;
  border-left: 3px solid var(--color-accent-secondary);
  overflow-x: auto;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.vg-thumb {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a0a2e, #0a1a2e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-accent-primary);
}

@media (max-width: 900px) {
  .vg-layout {
    grid-template-columns: 1fr;
  }
  .vg-ratio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;export{n as default};
