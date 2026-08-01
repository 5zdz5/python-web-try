const n=`.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow: hidden;
  transition:
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.35),
    0 4px 12px -4px rgba(0, 0, 0, 0.45);
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    transparent 60%,
    var(--color-accent-glow) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.card-elevated {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 8px 20px -6px rgba(0, 0, 0, 0.5),
    0 16px 40px -12px rgba(0, 0, 0, 0.35);
}

.card-bordered {
  border: 2px solid var(--color-border-light);
  background: var(--color-bg-secondary);
}

.card-clickable {
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.card-clickable:focus-visible {
  outline: none;
  border-color: var(--color-accent-primary);
  box-shadow:
    0 0 0 3px var(--color-bg-primary),
    0 0 0 5px var(--color-accent-primary),
    0 4px 16px var(--color-accent-glow);
}

.card-hoverable:hover:not(.card-active) {
  transform: translateY(-3px);
  border-color: var(--color-border-light);
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.4),
    0 12px 28px -6px rgba(0, 0, 0, 0.5),
    0 24px 48px -12px rgba(0, 0, 0, 0.4);
}

.card-hoverable:hover:not(.card-active)::before {
  opacity: 0.5;
}

.card-active {
  border-color: var(--color-accent-primary);
  background: color-mix(in srgb, var(--color-accent-primary) 5%, var(--color-bg-card));
  box-shadow:
    0 0 0 2px var(--color-border-accent),
    0 2px 6px rgba(0, 0, 0, 0.4),
    0 10px 24px -6px rgba(0, 0, 0, 0.5),
    0 0 24px -6px var(--color-accent-glow);
}

.card-active::before {
  opacity: 1;
}

.card-active.card-hoverable:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 2px var(--color-border-accent),
    0 4px 10px rgba(0, 0, 0, 0.45),
    0 16px 32px -8px rgba(0, 0, 0, 0.55),
    0 0 32px -8px var(--color-accent-glow);
}

.card > .card {
  border: 1px dashed var(--color-accent-tertiary);
  background: color-mix(in srgb, var(--color-accent-tertiary) 8%, var(--color-bg-card));
  box-shadow: none;
}

.card > .card::after {
  content: '⚠ 避免卡片嵌套';
  position: absolute;
  top: 6px;
  right: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--color-accent-tertiary);
  letter-spacing: 0.04em;
  z-index: 2;
  pointer-events: none;
}
`;export{n as default};
