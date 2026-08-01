const n=`/* ZZZ Footer — 赛博朋克底栏 */
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border-accent);
  padding: var(--spacing-3xl) 0 0;
  margin-top: auto;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-accent-primary), transparent);
  opacity: 0.5;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.footer-logo .logo-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-primary);
  filter: drop-shadow(0 0 6px var(--color-accent-glow));
}

.footer-logo .logo-icon svg {
  width: 32px;
  height: 32px;
}

.footer-logo .logo-text {
  color: var(--color-accent-primary);
  text-shadow: 0 0 6px var(--color-accent-glow);
}

.footer-tagline {
  color: var(--color-text-muted);
  font-size: 13px;
  max-width: 280px;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.footer-column h4 {
  color: var(--color-accent-secondary);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-md);
}

.footer-column ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-column a {
  color: var(--color-text-muted);
  font-size: 13px;
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: var(--color-accent-primary);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) 0;
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .footer-container { grid-template-columns: 1fr; gap: var(--spacing-xl); }
  .footer-links { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .footer-links { grid-template-columns: 1fr; }
}
`;export{n as default};
