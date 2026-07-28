# Python Quest

一个真正可交互的游戏化 Python 学习平台，基于 React + TypeScript + Vite + Pyodide 构建。
在浏览器中直接编写和运行 Python 代码，无需后端服务器！

## ✨ 功能特性

- 🎮 **闯关式学习** - 9大精心设计的关卡，从基础到进阶
- 💻 **在线代码编辑器** - 基于 Pyodide (WebAssembly)，在浏览器中直接运行 Python
- 📖 **交互式教程** - 知识点讲解 + 可运行示例 + 动手练习 + 小测验
- ⚡ **编程挑战** - 自动判题系统，完成挑战获得 XP 经验值
- 🏆 **成就系统** - XP经验值、连续学习天数
- 💾 **本地存储** - 学习进度和代码自动保存到浏览器
- 📊 **进度追踪** - 可视化学习地图，解锁下一关卡
- 📱 **响应式设计** - 完美适配桌面端、平板、移动端

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

项目将在 `http://localhost:3000` 启动。

> **注意**：首次进入学习页面时，Pyodide 会从 CDN 加载 Python 运行环境（约 10-20MB），请耐心等待。

## 📚 页面结构

- **首页** (`/`) - 产品介绍与特色展示
- **冒险地图** (`/map`) - 关卡地图与学习进度
- **课程详情** (`/level/:id`) - 互动学习、编程挑战、学习笔记

## 🛠 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router DOM** - 路由管理
- **Pyodide** - WebAssembly Python 运行时
- **LocalStorage** - 本地数据持久化

## 📁 项目结构

```
src/
├── components/              # 公共组件
│   ├── Navbar/             # 导航栏
│   ├── Footer/             # 页脚
│   ├── Button/             # 按钮组件
│   ├── CodeEditor/         # 代码编辑器（带运行+测试）
│   ├── InteractiveLesson/  # 交互式教程组件
│   └── ChallengeArena/     # 编程挑战组件
├── context/                 # React Context
│   ├── PyodideContext.tsx  # Python 运行环境管理
│   └── ProgressContext.tsx # 学习进度管理
├── pages/                   # 页面组件
│   ├── Home/               # 首页
│   ├── LevelMap/           # 关卡地图页
│   └── LevelDetail/        # 课程详情页
├── data/                    # 数据
│   ├── mockData.ts         # 关卡、用户等基础数据
│   └── lessonContent.ts    # 教程步骤、挑战题目
├── types/                   # TypeScript 类型定义
├── App.tsx                  # 主应用组件
├── main.tsx                 # 入口文件
└── index.css                # 全局样式
```

## 🎯 学习流程

1. 进入**冒险地图**，选择当前可解锁的关卡
2. 进入**互动学习**标签页，按步骤学习：
   - 📝 知识点讲解
   - 💡 可运行的代码示例
   - ✏️ 动手练习（自动判断正误）
   - ❓ 小测验巩固知识
3. 完成学习后，进入**编程挑战**：
   - 阅读题目要求
   - 编写代码
   - 点击运行，系统自动测试
   - 通过所有测试获得 XP 奖励
4. 完成当前关卡的所有内容后，自动解锁下一关卡！

## 🎨 设计特色

- 深色科技风格主题
- 翡翠绿 (#10b981) 主色调
- 流畅的动画过渡效果
- 游戏化的视觉反馈
