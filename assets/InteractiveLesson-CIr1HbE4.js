const n=`.interactive-lesson {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.lesson-progress-bar {
  height: 4px;
  background: var(--color-bg-secondary);
}

.lesson-progress-bar .progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent-primary), #34d399);
  transition: width 0.3s ease;
}

.lesson-steps-indicator {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  overflow-x: auto;
}

.step-dot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  min-width: 60px;
  transition: all var(--transition-fast);
}

.step-dot:hover {
  opacity: 0.8;
}

.dot-number {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.step-dot.current .dot-number {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  color: white;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

.step-dot.completed .dot-number {
  background: var(--color-success);
  border-color: var(--color-success);
  color: white;
}

.dot-title {
  font-size: 11px;
  color: var(--color-text-muted);
  white-space: nowrap;
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-dot.current .dot-title {
  color: var(--color-text-primary);
  font-weight: 500;
}

.lesson-content {
  padding: var(--spacing-xl);
}

.step-header {
  margin-bottom: var(--spacing-lg);
}

.step-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-accent-primary);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.step-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
}

.step-body {
  min-height: 300px;
}

.markdown-content {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.markdown-content p {
  margin-bottom: var(--spacing-md);
}

.markdown-content code {
  background: var(--color-bg-secondary);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: 'Consolas', monospace;
  font-size: 13px;
  color: #fbbf24;
}

.markdown-content strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.explanation-content,
.example-content,
.practice-content,
.quiz-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.code-example-wrapper {
  margin: var(--spacing-md) 0;
}

.example-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.hint-box {
  padding: var(--spacing-md);
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: var(--radius-md);
  font-size: 14px;
  color: var(--color-warning);
}

.hint-icon {
  font-weight: 600;
  margin-right: 4px;
}

.practice-actions {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.success-message {
  padding: var(--spacing-md);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-success);
  font-weight: 500;
  text-align: center;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.quiz-option:hover {
  border-color: var(--color-border-light);
  background: var(--color-bg-tertiary);
}

.quiz-option.selected {
  border-color: var(--color-accent-primary);
  background: rgba(16, 185, 129, 0.1);
}

.quiz-option.correct {
  border-color: var(--color-success);
  background: rgba(16, 185, 129, 0.15);
}

.quiz-option.wrong {
  border-color: var(--color-error);
  background: rgba(239, 68, 68, 0.1);
}

.option-letter {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: 50%;
  font-weight: 600;
  font-size: 13px;
  color: var(--color-text-secondary);
}

.quiz-option.selected .option-letter {
  background: var(--color-accent-primary);
  color: white;
}

.quiz-option.correct .option-letter {
  background: var(--color-success);
  color: white;
}

.quiz-option.wrong .option-letter {
  background: var(--color-error);
  color: white;
}

.option-text {
  flex: 1;
  color: var(--color-text-primary);
  font-size: 15px;
}

.quiz-result {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.result-success {
  padding: var(--spacing-md);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-success);
  font-weight: 500;
  text-align: center;
  font-size: 16px;
}

.result-failure {
  padding: var(--spacing-md);
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-error);
  font-weight: 500;
  text-align: center;
  font-size: 16px;
}

.result-actions {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-md);
}

/* ===== 答案区域样式 ===== */
.answer-section {
  margin-top: var(--spacing-sm);
}

.answer-toolbar {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-sm);
}

.btn-answer-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.35);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-answer-toggle:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25));
  border-color: rgba(99, 102, 241, 0.5);
  color: #c7d2fe;
  transform: translateY(-1px);
}

.btn-copy-answer {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-copy-answer:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-color: var(--color-border-light);
}

.btn-copy-answer:active {
  transform: scale(0.97);
}

.answer-box {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-top: var(--spacing-sm);
  animation: answerFadeIn 0.3s ease;
}

.quiz-explain-box {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(251, 191, 36, 0.05));
  border-color: rgba(245, 158, 11, 0.3);
}

@keyframes answerFadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.answer-box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px dashed rgba(99, 102, 241, 0.25);
}

.answer-box-title {
  font-size: 14px;
  font-weight: 600;
  color: #a5b4fc;
}

.answer-code {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
  margin: 0;
  overflow-x: auto;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #e2e8f0;
  white-space: pre;
  max-height: 360px;
  overflow-y: auto;
}

.answer-code code {
  background: transparent;
  color: inherit;
  padding: 0;
  font-size: inherit;
}

.answer-explanation {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background: rgba(15, 23, 42, 0.4);
  border-radius: var(--radius-sm);
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.answer-explanation .explanation-icon {
  flex-shrink: 0;
  font-size: 16px;
}

.answer-explanation p {
  margin: 0;
}

.answer-explanation p + p {
  margin-top: var(--spacing-sm);
}

.answer-explanation strong {
  color: #fbbf24;
  font-weight: 600;
}

.answer-explanation code {
  background: rgba(99, 102, 241, 0.15);
  padding: 1px 6px;
  border-radius: 4px;
  color: #c7d2fe;
  font-family: 'Consolas', monospace;
  font-size: 12px;
}

.quiz-actions {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .lesson-content {
    padding: var(--spacing-lg);
  }

  .step-title {
    font-size: 20px;
  }

  .lesson-steps-indicator {
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
  }

  .step-dot {
    min-width: 50px;
  }

  .dot-title {
    display: none;
  }

  .practice-actions,
  .result-actions,
  .quiz-actions {
    flex-direction: column;
  }

  .practice-actions .btn,
  .result-actions .btn,
  .quiz-actions .btn,
  .quiz-actions .btn-answer-toggle {
    width: 100%;
  }
}
`;export{n as default};
