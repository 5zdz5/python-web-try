const n=`.login-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.login-modal {
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lm-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.lm-close:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

.lm-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.lm-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-md);
  background: linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
}

.lm-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.lm-subtitle {
  font-size: 14px;
  color: var(--color-text-muted);
}

.lm-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.lm-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lm-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.lm-required {
  font-size: 11px;
  color: var(--color-error);
}

.lm-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.lm-input {
  flex: 1;
  padding: 10px 40px 10px 12px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: 14px;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  transition: all 0.2s;
}

.lm-input:focus {
  outline: none;
  border-color: var(--color-warning);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}

.lm-toggle {
  position: absolute;
  right: 8px;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lm-toggle:hover {
  background: var(--color-bg-secondary);
}

.lm-hint {
  font-size: 12px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.lm-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: var(--color-error);
  font-size: 13px;
}

.lm-submit {
  padding: 12px;
  background: linear-gradient(135deg, var(--color-warning), var(--color-warning));
  border: none;
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.lm-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
}

.lm-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.lm-guide {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.lm-guide details {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.lm-guide summary {
  cursor: pointer;
  color: var(--color-accent-primary);
  font-weight: 500;
  padding: 4px 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.lm-guide summary::-webkit-details-marker {
  display: none;
}

.lm-steps {
  margin: 12px 0;
  padding-left: 20px;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.lm-steps li {
  margin-bottom: 4px;
}

.lm-steps a {
  color: var(--color-accent-secondary);
  text-decoration: none;
}

.lm-steps a:hover {
  text-decoration: underline;
}

.lm-steps strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.lm-warning {
  padding: 10px 12px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 6px;
  font-size: 12px;
  color: var(--color-warning);
  line-height: 1.5;
}
`;export{n as default};
