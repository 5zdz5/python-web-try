const n=`.vl-tabs {
  display: flex;
  gap: 2px;
  border-bottom: 2px solid var(--color-border);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.vl-tab-icon {
  margin-right: 4px;
}

.vl-canvas {
  min-height: 360px;
}

.vl-canvas-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.vl-chart-wrap {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-md);
  overflow-x: auto;
}

.vl-svg {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* 柱状图动画 */
.vl-bar {
  animation: vl-bar-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  transform-origin: bottom;
}

@keyframes vl-bar-rise {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

/* 折线图动画 */
.vl-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: vl-line-draw 1.5s ease-out forwards;
}

@keyframes vl-line-draw {
  to { stroke-dashoffset: 0; }
}

.vl-dot {
  opacity: 0;
  animation: vl-dot-appear 0.4s ease-out forwards;
}

@keyframes vl-dot-appear {
  to { opacity: 1; }
}

/* 饼图 */
.vl-pie-wrap {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  justify-content: center;
}

.vl-pie {
  max-width: 280px;
}

.vl-pie-slice {
  animation: vl-pie-pop 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  transform-origin: 140px 140px;
  cursor: pointer;
  transition: transform 0.15s;
}

.vl-pie-slice:hover {
  transform: scale(1.05);
}

@keyframes vl-pie-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}

.vl-legend {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 140px;
}

.vl-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
}

.vl-legend-dot {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.vl-legend-label {
  flex: 1;
  font-size: 0.82rem;
  color: var(--color-text-secondary);
}

.vl-legend-value {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-accent-primary);
  font-weight: bold;
}

/* 甘特图 */
.vl-gantt {
  font-size: 0.8rem;
}

.vl-gantt-header,
.vl-gantt-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.vl-gantt-header {
  position: sticky;
  top: 0;
  background: var(--color-bg-tertiary);
}

.vl-gantt-task-col {
  width: 120px;
  flex-shrink: 0;
  padding: 8px;
  font-family: var(--font-display);
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.03em;
  border-right: 1px solid var(--color-border);
}

.vl-gantt-timeline {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  position: relative;
  min-height: 32px;
}

.vl-gantt-day {
  text-align: center;
  font-size: 0.65rem;
  color: var(--color-text-muted);
  padding: 4px 0;
  border-right: 1px solid var(--color-border);
}

.vl-gantt-row {
  animation: vl-gantt-slide 0.4s ease-out backwards;
}

@keyframes vl-gantt-slide {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.vl-gantt-bar {
  position: absolute;
  top: 6px;
  bottom: 6px;
  background: var(--color-bg-card);
  border: 2px solid var(--color-accent-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 6px;
}

.vl-gantt-progress {
  position: absolute;
  inset: 0;
  background: var(--color-accent-primary);
  opacity: 0.35;
  transition: width 0.3s;
}

.vl-gantt-bar-label {
  position: relative;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-primary);
  white-space: nowrap;
}

/* UML */
.vl-uml-class {
  animation: vl-uml-appear 0.5s ease-out backwards;
}

@keyframes vl-uml-appear {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

/* 仪表盘 */
.vl-gauge-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.vl-gauge {
  max-width: 280px;
}

.vl-gauge-arc {
  animation: vl-gauge-fill 1s ease-out;
}

@keyframes vl-gauge-fill {
  from { stroke-dasharray: 0 283; }
}

.vl-gauge-slider {
  width: 100%;
  max-width: 280px;
  accent-color: var(--color-accent-primary);
}

/* 热力图 */
.vl-heatmap {
  overflow-x: auto;
}

.vl-heatmap-row {
  display: flex;
  align-items: center;
}

.vl-heatmap-header {
  border-bottom: 2px solid var(--color-border);
}

.vl-heatmap-corner,
.vl-heatmap-label {
  width: 50px;
  flex-shrink: 0;
  padding: 4px;
  font-size: 0.68rem;
  color: var(--color-text-muted);
  text-align: center;
  font-family: var(--font-mono);
}

.vl-heatmap-cell {
  width: 36px;
  height: 28px;
  margin: 1px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: transform 0.1s;
  animation: vl-heat-pop 0.4s ease-out backwards;
}

.vl-heatmap-cell:hover {
  transform: scale(1.15);
  z-index: 1;
}

@keyframes vl-heat-pop {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}

/* 路径说明 */
.vl-paths {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.vl-path-card {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: var(--spacing-md);
  transition: border-color 0.12s;
}

.vl-path-card:hover {
  border-color: var(--color-accent-primary);
}

.vl-path-icon {
  font-size: 1.6rem;
  margin-bottom: 6px;
}

.vl-path-name {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-accent-primary);
  margin-bottom: 6px;
}

.vl-path-card p {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}
`;export{n as default};
