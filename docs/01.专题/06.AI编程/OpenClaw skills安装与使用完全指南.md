---
title: OpenClaw skills安装与使用完全指南
date: 2026-02-20 22:22:45
permalink: /pages/9fa37d/
categories:
  - 专题
  - AI编程
tags:
  - 
---

### 1. 什么是skills

Skills 是扩展 OpenClaw 能力的**"插件"**，每个 Skill 专注一项功能，组合使用即可构建强大的自动化工作流

### 2. 相关命令

```text
openclaw skills list -         # 列出所有 skills 及状态
openclaw skills info  <name>   # 查看 skill 详情
openclaw skills check -        # 检查哪些 skills 可用
```

### 3. 如何安装

#### 3.1. ClawHub（推荐）

**地址：**[ClawHub](https://clawhub.ai/skills?sort=downloads)

**简介**：ClawHub 是 OpenClaw 官方的 Skills 市场，类似于 npm，但专门为 AI 助手设计。

常用命令

```text
npm i -g clawhub            # 安装 CLI（只需一次）

clawhub search <关键词>      # 搜索 skills
clawhub install <slug>      # 安装 skill
clawhub update <slug>       # 更新 skill
clawhub uninstall <slug>    # 卸载 skill
clawhub list                # 列出已安装的 skills
clawhub explore             # 浏览最新 skills
clawhub inspect <slug>      # 查看 skill 信息（不安装）
```

##### 3.1.1. 案例：安装 tavily-search

**第一步：搜索**

```text
clawhub search tavily
```

会返回搜索结果，包含评分和简介。

**第二步：安装**

```text
clawhub install tavily-search
```

**第三步：获取 API Key**

大多数搜索类 Skill 需要 API Key，以 tavily 为例：

1. 访问 https://tavily.com/
2. 注册账号，获取 API Key
3. 在 OpenClaw Web UI 中配置

💡 **提示**：配置后记得重启 Gateway！

#### 3.2. zip压缩包

当 ClawHub 限速或需要安装特定版本时，手动下载 ZIP 包是可靠的备选方案

1. 从 GitHub 或 ClawHub 下载 Skill 的 ZIP 压缩包
2. 解压到 Skills 目录 （mac 目录：/Users/用户/.openclaw/workspace/skills），windows路径C:\Users\87487\AppData\Roaming\npm\node_modules\openclaw\skills
3. 通过 Web UI、环境变量或配置文件完成设置

#### 3.3. 自然语言对话（最简单）

案例：

- 安装 Tavily 搜索插件
- 配置 Tavily skill 的 API Key
- 帮我检查一下这个 Skill 的代码安全吗？
- 帮我下载这个 GitHub 仓库：[URL]，先扫描代码看有没有恶意后门，确认安全后自动安装依赖并完成 Skill 注册

### 4. 安全检查：SOUL.md

SOUL.md 是 OpenClaw 的"灵魂配置文件"，定义了 AI 的：

- 性格和行为准则
- 安全边界
- 执行规则

位置：`~/.openclaw/workspace/SOUL.md`

##### 4.1.1. 为什么需要安全检查？

安装第三方 Skills 时，需要确认：

- ✅ 源码是否开源
- ✅ 是否有恶意代码
- ✅ API Key 是否安全处理
- ✅ 依赖是否安全

##### 4.1.2. 我添加的安全规则

在我的 SOUL.md 中，添加了以下规则：

```bash
## 安全规则

- 执行命令前必须确认
- 安装插件需先审查源码
- 删除操作需二次确认
- 外部操作需询问用户
```

---

相关链接：

ClawHub：[ClawHub](https://clawhub.ai/skills?sort=downloads)

tavily-search：[Tavily API Platform](https://app.tavily.com/home)

minimax: [MiniMax-与用户共创智能](https://platform.minimaxi.com/subscribe/coding-plan?code=IPoaV45nH2&source=link)

阿里云百炼：https://www.aliyun.com/benefit/ai/aistar?clubBiz=subTask..12413271..10263..

baoyu-skills：[baoyu-skills/README.zh.md at main · JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills/blob/main/README.zh.md)

Obsidian：[Obsidian - Sharpen your thinking](https://obsidian.md/)

YouTube 视频：https://youtu.be/8kN0OmZQD5w
