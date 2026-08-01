const n=`/**
 * 像素风核心样式 - Pixel Art Core
 * 
 * 包含：
 * - 3D立体按钮（三视图：顶面/正面/侧面）
 * - 按钮按压下沉效果
 * - 柱子升起动画（页面元素）
 * - 彩虹流动 / 乌鸦虹彩效果
 * - 像素风通用组件样式
 */

/* ========================================
   1. 3D 立体按钮基础结构
   ======================================== */

/* 像素风按钮容器 - 3D透视 */
.pixel-btn-3d {
  position: relative;
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: transform 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 按钮主体 - 正面 */
.pixel-btn-3d .btn-face {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 3D 立体效果 - 通过 box-shadow 模拟多面 */
.pixel-btn-3d .btn-face::before {
  /* 右侧面 - 模拟3D深度 */
  content: '';
  position: absolute;
  top: 0;
  right: -6px;
  width: 6px;
  height: 100%;
  background: var(--color-accent-secondary, #ff0080);
  border-radius: 0;
  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.15);
}

.pixel-btn-3d .btn-face::after {
  /* 底部面 - 模拟3D深度 */
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--color-accent-secondary, #ff0080);
  border-radius: 0;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.2);
}

/* 按钮按下状态 - 下沉效果 */
.pixel-btn-3d:active .btn-face {
  transform: translate(4px, 4px);
}

.pixel-btn-3d:active .btn-face::before {
  width: 3px;
  right: -3px;
}

.pixel-btn-3d:active .btn-face::after {
  height: 3px;
  bottom: -3px;
}

/* Hover 状态 - 轻微浮起 */
.pixel-btn-3d:hover .btn-face {
  transform: translate(-1px, -2px);
}

.pixel-btn-3d:hover .btn-face::before {
  width: 8px;
  right: -8px;
}

.pixel-btn-3d:hover .btn-face::after {
  height: 8px;
  bottom: -8px;
}

/* ========================================
   2. 立体卡片/面板 - 3D效果
   ======================================== */

/* 像素风立体卡片 */
.pixel-card-3d {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out;
}

.pixel-card-3d::before {
  /* 右侧面 */
  content: '';
  position: absolute;
  top: 4px;
  right: -8px;
  bottom: -8px;
  width: 8px;
  background: linear-gradient(90deg, var(--color-border, #3a3a5a), var(--color-bg-tertiary, #1a1a2e));
  border-radius: 0;
}

.pixel-card-3d::after {
  /* 底部面 */
  content: '';
  position: absolute;
  left: 4px;
  right: -8px;
  bottom: -8px;
  height: 8px;
  background: linear-gradient(180deg, var(--color-border, #3a3a5a), var(--color-bg-tertiary, #1a1a2e));
  border-radius: 0;
}

.pixel-card-3d:hover {
  transform: translate(-2px, -4px);
}

.pixel-card-3d:hover::before {
  width: 12px;
  right: -12px;
}

.pixel-card-3d:hover::after {
  height: 12px;
  bottom: -12px;
}

/* ========================================
   3. 柱子升起动画 - 页面元素
   ======================================== */

/* 柱子升起动画 - 基础 */
@keyframes pixel-rise {
  0% {
    opacity: 0;
    transform: translateY(100px) scaleY(0);
    transform-origin: bottom center;
    filter: blur(4px);
  }
  50% {
    opacity: 0.8;
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    filter: blur(0);
  }
}

/* 柱子升起 - 带随机高度差异的变体 */
@keyframes pixel-rise-varied {
  0% {
    opacity: 0;
    transform: translateY(120px) scaleY(0);
    transform-origin: bottom center;
  }
  30% {
    transform: translateY(20px) scaleY(0.9);
  }
  60% {
    transform: translateY(-5px) scaleY(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

/* 页面加载动画容器 */
.pixel-rise-container > * {
  animation: pixel-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

/* 延迟升起 - 交错效果 */
.pixel-rise-container > *:nth-child(1) { animation-delay: 0ms; }
.pixel-rise-container > *:nth-child(2) { animation-delay: 60ms; }
.pixel-rise-container > *:nth-child(3) { animation-delay: 120ms; }
.pixel-rise-container > *:nth-child(4) { animation-delay: 180ms; }
.pixel-rise-container > *:nth-child(5) { animation-delay: 240ms; }
.pixel-rise-container > *:nth-child(6) { animation-delay: 300ms; }
.pixel-rise-container > *:nth-child(7) { animation-delay: 360ms; }
.pixel-rise-container > *:nth-child(8) { animation-delay: 420ms; }
.pixel-rise-container > *:nth-child(9) { animation-delay: 480ms; }
.pixel-rise-container > *:nth-child(10) { animation-delay: 540ms; }

/* ========================================
   4. 彩虹流动效果 - 泰拉瑞亚式微光液体
   ======================================== */

/* 彩虹边框动画 */
@keyframes rainbow-border {
  0% {
    border-color: var(--color-accent-primary, #00ff88);
    box-shadow: 0 0 20px var(--color-accent-glow, rgba(0, 255, 136, 0.4));
  }
  16% {
    border-color: #ff0080;
    box-shadow: 0 0 20px rgba(255, 0, 128, 0.4);
  }
  33% {
    border-color: #ff8c00;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.4);
  }
  50% {
    border-color: #ffed00;
    box-shadow: 0 0 20px rgba(255, 237, 0, 0.4);
  }
  66% {
    border-color: #00c8ff;
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.4);
  }
  83% {
    border-color: #8000ff;
    box-shadow: 0 0 20px rgba(128, 0, 255, 0.4);
  }
  100% {
    border-color: var(--color-accent-primary, #00ff88);
    box-shadow: 0 0 20px var(--color-accent-glow, rgba(0, 255, 136, 0.4));
  }
}

/* 彩虹渐变背景 - 流动 */
@keyframes rainbow-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.rainbow-border {
  animation: rainbow-border 4s linear infinite;
  border-width: 2px;
  border-style: solid;
}

.rainbow-flow {
  background: linear-gradient(
    90deg,
    #ff0080, #ff8c00, #ffed00, #00ff88, #00c8ff, #8000ff, #ff0080
  );
  background-size: 200% 100%;
  animation: rainbow-flow 3s linear infinite;
}

/* 彩虹文字效果 */
.rainbow-text {
  background: linear-gradient(
    90deg,
    #ff0080, #ff8c00, #ffed00, #00ff88, #00c8ff, #8000ff, #ff0080
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-flow 3s linear infinite;
}

/* ========================================
   5. 乌鸦虹彩效果 - 五彩斑斓的黑
   ======================================== */

/* 虹彩光泽动画 */
@keyframes iridescent-shine {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* 乌鸦黑色 - 带流动虹彩 */
.crow-black {
  background: linear-gradient(
    135deg,
    #0a0a0f 0%,
    #1a0a2e 20%,
    #0a1a2e 40%,
    #1a1a3e 60%,
    #0a0a2e 80%,
    #0a0a0f 100%
  );
  background-size: 300% 300%;
  animation: iridescent-shine 8s linear infinite;
}

/* 虹彩边框 - 乌鸦风格 */
@keyframes crow-iridescent {
  0% {
    border-color: rgba(157, 78, 221, 0.6);
    box-shadow: 
      0 0 15px rgba(157, 78, 221, 0.3),
      0 0 30px rgba(233, 69, 96, 0.2);
  }
  33% {
    border-color: rgba(233, 69, 96, 0.6);
    box-shadow: 
      0 0 15px rgba(233, 69, 96, 0.3),
      0 0 30px rgba(0, 212, 255, 0.2);
  }
  66% {
    border-color: rgba(0, 212, 255, 0.6);
    box-shadow: 
      0 0 15px rgba(0, 212, 255, 0.3),
      0 0 30px rgba(157, 78, 221, 0.2);
  }
  100% {
    border-color: rgba(157, 78, 221, 0.6);
    box-shadow: 
      0 0 15px rgba(157, 78, 221, 0.3),
      0 0 30px rgba(233, 69, 96, 0.2);
  }
}

.crow-iridescent {
  animation: crow-iridescent 5s linear infinite;
  border-width: 2px;
  border-style: solid;
}

/* ========================================
   6. 像素风通用按钮样式
   ======================================== */

/* 像素风按钮基础 */
.pixel-btn {
  font-family: var(--font-family, 'Press Start 2P', monospace);
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 3px solid var(--color-border-light, #4a4a6a);
  background: var(--color-bg-tertiary, #1a1a2e);
  color: var(--color-text-primary, #f0f0ff);
  cursor: pointer;
  padding: 12px 24px;
  position: relative;
  transition: all 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  image-rendering: pixelated;
}

/* 像素风按钮 - 强调色 */
.pixel-btn-accent {
  background: var(--color-accent-primary, #00ff88);
  color: var(--color-bg-primary, #0a0a12);
  border-color: var(--color-accent-secondary, #ff0080);
}

/* 像素风按钮 - 次要色 */
.pixel-btn-secondary {
  background: var(--color-bg-secondary, #12121f);
  color: var(--color-text-primary, #f0f0ff);
  border-color: var(--color-accent-tertiary, #00c8ff);
}

/* 像素风按钮按下效果 */
.pixel-btn:active {
  transform: translate(3px, 3px);
  box-shadow: none;
}

.pixel-btn-accent:active {
  box-shadow: 
    inset 2px 2px 0 rgba(255, 255, 255, 0.2),
    inset -2px -2px 0 rgba(0, 0, 0, 0.2);
}

/* 像素风按钮悬停 */
.pixel-btn:hover {
  filter: brightness(1.1);
}

/* ========================================
   7. 像素风面板/卡片通用
   ======================================== */

.pixel-panel {
  background: var(--color-bg-secondary, #12121f);
  border: 3px solid var(--color-border, #3a3a5a);
  padding: 20px;
  image-rendering: pixelated;
}

.pixel-panel-accent {
  border-color: var(--color-accent-primary, #00ff88);
  box-shadow: 
    inset 2px 2px 0 rgba(255, 255, 255, 0.05),
    inset -2px -2px 0 rgba(0, 0, 0, 0.15);
}

/* ========================================
   8. 柱子升起 - 页面标题/大元素
   ======================================== */

@keyframes pixel-rise-tall {
  0% {
    opacity: 0;
    transform: translateY(200px) scaleY(0);
    transform-origin: bottom center;
    filter: blur(8px);
  }
  40% {
    transform: translateY(30px) scaleY(0.9);
    filter: blur(2px);
  }
  70% {
    transform: translateY(-8px) scaleY(1.03);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    filter: blur(0);
  }
}

.pixel-rise-tall {
  animation: pixel-rise-tall 1s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

/* ========================================
   9. 像素风阴影 - 硬边风格
   ======================================== */

.pixel-shadow {
  box-shadow: 
    4px 4px 0 var(--color-border, #3a3a5a),
    8px 8px 0 rgba(0, 0, 0, 0.3);
}

.pixel-shadow-sm {
  box-shadow: 
    2px 2px 0 var(--color-border, #3a3a5a),
    4px 4px 0 rgba(0, 0, 0, 0.2);
}

.pixel-shadow-lg {
  box-shadow: 
    6px 6px 0 var(--color-border, #3a3a5a),
    12px 12px 0 rgba(0, 0, 0, 0.4);
}

/* 彩色阴影 - 像素彩虹风格 */
.pixel-shadow-rainbow {
  box-shadow: 
    4px 4px 0 var(--color-accent-primary, #00ff88),
    8px 8px 0 var(--color-accent-secondary, #ff0080),
    12px 12px 0 rgba(0, 0, 0, 0.3);
}

/* ========================================
   10. 像素风网格背景
   ======================================== */

.pixel-grid-bg {
  background-image: 
    linear-gradient(var(--color-border, #3a3a5a) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border, #3a3a5a) 1px, transparent 1px);
  background-size: 16px 16px;
  background-position: -1px -1px;
}

/* ========================================
   11. 主题特殊效果类
   ======================================== */

/* 当数据主题为 pixel-spectrum 时启用的额外效果 */
[data-theme="pixel-spectrum"] .pixel-btn {
  font-size: 0.85rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
}

[data-theme="pixel-spectrum"] .pixel-btn-accent {
  box-shadow: 
    3px 3px 0 var(--color-accent-secondary, #ff0080),
    6px 6px 0 var(--color-accent-tertiary, #00c8ff),
    9px 9px 0 rgba(0, 0, 0, 0.3);
}

[data-theme="pixel-spectrum"] .pixel-btn-accent:active {
  box-shadow: 
    1px 1px 0 var(--color-accent-secondary, #ff0080),
    2px 2px 0 var(--color-accent-tertiary, #00c8ff);
}

/* 当数据主题为 pixel-crow 时启用的额外效果 */
[data-theme="pixel-crow"] .pixel-btn {
  font-size: 0.85rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.8);
}

[data-theme="pixel-crow"] .pixel-btn-accent {
  background: linear-gradient(135deg, #9d4edd, #533483);
  background-size: 200% 200%;
  animation: iridescent-shine 4s linear infinite;
  box-shadow: 
    3px 3px 0 rgba(157, 78, 221, 0.6),
    6px 6px 0 rgba(233, 69, 96, 0.4),
    9px 9px 0 rgba(0, 0, 0, 0.5);
}

[data-theme="pixel-crow"] .pixel-btn-accent:active {
  box-shadow: 
    1px 1px 0 rgba(157, 78, 221, 0.6),
    2px 2px 0 rgba(233, 69, 96, 0.4);
}

/* ========================================
   12. 页面加载动画 - 专用
   ======================================== */

/* 英雄区域升起动画 */
@keyframes hero-rise {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.98);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.hero-anim {
  animation: hero-rise 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s backwards;
}

/* 特性卡片交错升起 */
@keyframes feature-rise {
  0% {
    opacity: 0;
    transform: translateY(60px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.feature-card-anim {
  animation: feature-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

.feature-card-anim:nth-child(1) { animation-delay: 0.3s; }
.feature-card-anim:nth-child(2) { animation-delay: 0.45s; }
.feature-card-anim:nth-child(3) { animation-delay: 0.6s; }
.feature-card-anim:nth-child(4) { animation-delay: 0.75s; }
.feature-card-anim:nth-child(5) { animation-delay: 0.9s; }

/* ========================================
   13. 像素风选择/激活状态
   ======================================== */

.pixel-selected {
  box-shadow: 
    0 0 0 3px var(--color-accent-primary, #00ff88),
    0 0 20px var(--color-accent-glow, rgba(0, 255, 136, 0.5));
}

.pixel-pressed {
  transform: translate(2px, 2px) scale(0.98);
  filter: brightness(0.9);
}
`;export{n as default};
