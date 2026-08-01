const n=`/* ============================================================
 *  ProductDocs — 产品文档工作台
 *  像素风 / 3D 立体按钮 / 左右分栏编辑预览
 * ============================================================ */

.pd-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.pd-toolbar-actions {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

/* 3D 立体按钮：实心偏移阴影模拟凸起，按下时位移 */
.pd-btn {
  position: relative;
  box-shadow: 4px 4px 0 0 var(--color-bg-tertiary),
              4px 4px 0 2px var(--color-border);
  transition: transform 0.08s, box-shadow 0.08s, border-color 0.12s, color 0.12s;
}

.pd-btn:hover {
  transform: translate(1px, 1px);
  box-shadow: 3px 3px 0 0 var(--color-bg-tertiary),
              3px 3px 0 2px var(--color-border);
}

.pd-btn:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 0 var(--color-bg-tertiary),
              0 0 0 0 var(--color-border);
}

.pd-btn:disabled {
  box-shadow: 4px 4px 0 0 var(--color-bg-tertiary),
              4px 4px 0 2px var(--color-border);
  transform: none;
}

/* 左右分栏 */
.pd-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.pd-editor {
  display: flex;
  flex-direction: column;
}

.pd-content-label {
  margin-top: var(--spacing-md);
}

.pd-textarea {
  min-height: 520px;
  font-family: var(--font-mono);
  font-size: 0.86rem;
  line-height: 1.65;
  tab-size: 2;
}

.pd-preview {
  min-height: 600px;
}

.pd-preview-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-border);
  position: relative;
}

.pd-preview-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 60px;
  height: 2px;
  background: var(--color-accent-primary);
  box-shadow: 0 0 6px var(--color-accent-glow);
}

.pd-preview-body {
  color: var(--color-text-primary);
  font-size: 0.92rem;
  line-height: 1.7;
}

.pd-preview-body h1,
.pd-preview-body h2,
.pd-preview-body h3 {
  font-family: var(--font-display);
  letter-spacing: 0.02em;
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.pd-preview-body h1 {
  font-size: 1.25rem;
  color: var(--color-accent-primary);
}

.pd-preview-body h2 {
  font-size: 1.1rem;
  color: var(--color-accent-secondary);
}

.pd-preview-body h3 {
  font-size: 1rem;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.pd-preview-body p {
  margin: 0 0 var(--spacing-sm);
}

.pd-preview-body ul,
.pd-preview-body ol {
  margin: 0 0 var(--spacing-sm);
  padding-left: 1.5em;
}

.pd-preview-body li {
  margin-bottom: 4px;
}

.pd-preview-body strong {
  color: var(--color-accent-primary);
  font-weight: 700;
}

/* 围栏代码块 */
.pd-code {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-left: 4px solid var(--color-accent-secondary);
  padding: 12px 14px;
  overflow-x: auto;
  margin: 0 0 var(--spacing-sm);
  box-shadow: inset 0 0 0 1px var(--color-border-light);
}

.pd-code code {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  color: var(--color-text-primary);
  white-space: pre;
  line-height: 1.5;
}

/* 行内代码 */
.pd-inline-code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  padding: 1px 5px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-accent-secondary);
}

@media (max-width: 900px) {
  .pd-layout {
    grid-template-columns: 1fr;
  }

  .pd-textarea {
    min-height: 360px;
  }
}
`;export{n as default};
