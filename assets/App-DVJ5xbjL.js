const n=`/* ZZZ App 容器 */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  overflow-x: hidden;
  position: relative;
}

/* ZZZ 背景光晕 — 荧光黄绿 + 青色 */
.app::before {
  content: '';
  position: fixed;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(ellipse at center, var(--color-accent-glow) 0%, transparent 60%);
  filter: blur(60px);
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
}

/* ZZZ 背景右侧青色光晕 */
.app::after {
  content: '';
  position: fixed;
  bottom: -10%;
  right: -5%;
  width: 50vw;
  height: 50vh;
  background: radial-gradient(ellipse at center, var(--color-accent-glow-cyan) 0%, transparent 60%);
  filter: blur(80px);
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}
`;export{n as default};
