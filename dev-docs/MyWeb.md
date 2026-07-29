# MyWeb 项目沉淀文档

更新时间：2026-07-29

本文档记录 MyWeb 当前的产品定位、技术方案、视觉基线、页面结构和后续规划。它是后续继续开发时的基准文档。

---

# 1. 项目说明

## 1.1 项目定位

MyWeb 是 sikm 的双语个人研究小站，用于长期沉淀 Agent / LLM、工程实践、开源项目和少量生活切片。

它不是静态简历页，也不是纯技术博客，而是一个有个人气质、可持续更新、可被访问者慢慢浏览的个人研究空间。

一句话定位：

> 一个清爽现代的个人研究小站：主线是 Agent / LLM / 工程实践，辅线是生活记录和个人表达。

核心目标：

* 展示个人研究方向与技术兴趣
* 持续发布 Agent / LLM / 多智能体 / RAG / 工具调用等方向的文章
* 展示开源项目和工程实践
* 沉淀论文阅读、实验观察和阶段性思考
* 用轻量生活内容保留个人温度
* 为实习、求职、合作和技术交流提供统一入口

## 1.2 当前设计基线

当前版本采用：

```text
Welcome Gate + 三栏博客首页 + 清爽现代视觉系统
```

访问首页时：

1. 每次打开首页先出现沉浸式欢迎页。
2. 点击「进入小屋」后，欢迎页淡出并轻微上移。
3. 进入真正首页。
4. 真正首页采用三栏布局：
   * 左侧：作者卡 + 站内导航
   * 中间：主题书架 + 最近写作 + 开源项目
   * 右侧：Now + Quick Links + 留言入口 + 生活切片

---

# 2. 技术方案

当前采用静态优先方案：

```text
Astro + Tailwind CSS 4 + MDX + TypeScript + GitHub + Cloudflare Pages
```

## 2.1 技术栈说明

| 模块 | 方案 | 说明 |
| --- | --- | --- |
| 前端框架 | Astro | 适合内容型网站、博客、作品集、文档站 |
| 样式 | Tailwind CSS 4 + global CSS tokens | 用 CSS 变量统一浅色 / 深色主题 |
| 内容写作 | Markdown / MDX | 用文件管理文章、项目、研究笔记 |
| 语言 | TypeScript | 页面组件和内容工具类型约束 |
| 版本管理 | GitHub | 管理代码、内容、图片资源 |
| 部署 | Cloudflare Pages | 静态部署，GitHub push 后自动构建 |
| 数据库 | 暂不需要 | 第一版不接数据库 |
| 后台 CMS | 暂不需要 | 第一版本地写 Markdown / MDX |

## 2.2 线上地址

当前 Cloudflare Pages 生产地址：

```text
https://myweb-649.pages.dev/
```

`main` 分支 push 后，由 Cloudflare Pages 自动构建并部署。

## 2.3 为什么第一版不租服务器

第一版主要功能都是静态可生成内容：

* 首页展示
* 技术博客
* 项目展示
* 研究笔记
* 生活记录
* 双语页面
* 图片展示
* 留言 / 友链占位页

因此第一版不需要：

* 云服务器
* Nginx
* 数据库
* 用户登录
* 后端 API
* 文件上传服务

上线流程：

```text
本地写文章 / 放图片
→ GitHub 提交
→ Cloudflare Pages 自动构建
→ 网站自动上线
```

---

# 3. 页面结构

## 3.1 中文页面

```text
/                    首页
/writing             博客列表
/writing/[slug]      博客详情
/projects            项目列表
/projects/[slug]     项目详情
/life                生活列表
/life/[slug]         生活详情
/guestbook           留言墙占位
/friends             友链 / 资源书签占位
/about               关于
```

## 3.2 英文页面

```text
/en
/en/writing
/en/writing/[slug]
/en/projects
/en/projects/[slug]
/en/life
/en/life/[slug]
/en/guestbook
/en/friends
/en/about
```

## 3.3 导航

中文导航：

```text
首页 / 博客 / 项目 / 生活 / 留言 / 友链 / 关于 / 主题切换 / EN
```

英文导航：

```text
Home / Blog / Projects / Life / Guestbook / Links / About / Theme Toggle / 中文
```

说明：

* `Research` 当前保留为内容频道和主题书架跳转目标，但不进入主导航。
* 主导航更偏博客小站气质，避免过度研究站化。

---

# 4. 首页信息架构

## 4.1 Welcome Gate

目标：形成每次访问时的进入仪式。

当前规则：

* 每次打开首页都会显示欢迎页。
* 欢迎页是 fixed overlay，不参与正文滚动。
* 点击「进入小屋」后淡出并轻微上移。
* 不使用 localStorage 记忆进入状态。
* 无 JS 情况下正文内容仍在 HTML 中。

当前文案：

```text
欢迎来到 sikm 的博客小屋。
这里存放一些关于 Agent、LLM、工程实践，以及生活切片的长期记录。
```

英文：

```text
Welcome to sikm's blog cottage.
A long-term place for notes on Agent, LLMs, engineering practice, and small fragments of life.
```

## 4.2 首页主体

首页主体采用三栏布局。

左栏：

* 作者头像
* `sikm`
* 一段简短介绍
* GitHub / Bilibili
* 站内导航

中栏：

* 主题书架
* 最近写作
* 开源项目

右栏：

* Now 当前状态
* Quick Links
* 留言入口
* 生活切片

## 4.3 主题书架

当前主题：

* Agent Systems
* Agent Evaluation
* Harness / Workflow
* LLM Reading Notes
* Engineering Practice
* Life Fragments

当前实现：

* 每个主题是可点击卡片。
* 目前先跳转到现有频道，如 Blog / Research / Projects / Life。
* 后续可以升级为独立专题页或主题筛选页。

## 4.4 首页取数规则

* `Open Projects`：`projects` 中已发布内容，按 `publishedAt` 倒序取前 3 条
* `Recent Writing`：`writing` + `research` 中已发布内容合并，按 `publishedAt` 倒序取前 4 条
* `Life Fragments`：`life` 中已发布内容，按 `publishedAt` 倒序取前 2 条
* `Now`：当前写在 `src/i18n/ui.ts`，目前为 `最近在研究：Agent`
* 所有首页列表都先按当前语言过滤，再排序和截断
* Research 内容独立存储在 `src/content/research/`，但通过 `/writing/[slug]` 统一展示

---

# 5. 视觉系统

## 5.1 当前视觉方向

当前已摒弃早期暖白 / 棕色 / 复古博客风，改为：

```text
清爽
现代
克制
产品化
研究空间
OpenAI / Codex 气质参考
```

设计原则：

* 内容优先
* 大方留白
* 卡片清晰但不厚重
* 少量强调色
* 浅色 / 深色都完整可读
* 不使用强烈光效、粒子背景、霓虹风
* 不使用过度可爱化的博客装饰

## 5.2 色彩基线

浅色模式：

```css
--background: #f7f8fa;
--surface: #ffffff;
--surface-soft: #f1f5f9;
--surface-muted: #e8eef5;
--text-main: #111827;
--text-muted: #5f6b7a;
--text-subtle: #8a95a3;
--border: #e3e8ef;
--border-strong: #cad3df;
--accent: #10a37f;
--accent-soft: #d9f5ec;
--accent-muted: #08785f;
```

深色模式：

```css
--background: #0f1115;
--surface: #171a21;
--surface-soft: #1f2430;
--surface-muted: #293140;
--text-main: #f4f7fb;
--text-muted: #aab4c2;
--text-subtle: #7e8998;
--border: #2b3442;
--border-strong: #3b4658;
--accent: #7ee0c3;
--accent-soft: #173c34;
--accent-muted: #8fead0;
```

## 5.3 主题切换

当前支持显式浅色 / 深色切换：

* Header 右侧显示主题切换按钮
* 主题值写入 `localStorage`
* 页面 head 中提前写入 `data-theme`，减少主题闪烁
* 组件颜色全部尽量走 CSS variables，避免深色模式出现浅卡浅字

## 5.4 字体

当前使用现代 sans-serif 栈：

```css
font-family:
  "OpenAI Sans",
  "Inter",
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang SC",
  "Microsoft YaHei",
  sans-serif;
```

代码字体：

```css
font-family:
  "JetBrains Mono",
  "SFMono-Regular",
  Consolas,
  "Liberation Mono",
  monospace;
```

---

# 6. 内容系统

## 6.1 Content Collections

当前四类内容：

```text
writing
projects
research
life
```

内容目录：

```text
src/content/
  writing/
    zh/
    en/
  projects/
    zh/
    en/
  research/
    zh/
    en/
  life/
    zh/
    en/
```

## 6.2 双语映射

每篇内容通过 `translationKey` 配对。

规则：

* 中文默认无语言前缀
* 英文使用 `/en`
* 详情页语言切换优先寻找相同 `translationKey`
* 如果没有对应翻译，回退到目标语言列表页

---

# 7. 图片与资源

当前图片仍通过 Git 管理。

推荐路径：

```text
public/images/
  profile/
  writing/
  projects/
  research/
  life/
```

建议：

* 头像使用 400x400 或 512x512
* 首页和文章封面使用 1200x630 或 1200x675
* 正文图宽度建议 800-1400px
* Life 照片压缩后上传，避免超过 1-2MB
* 所有图片尽量补充 alt 文本

第一版不支持访客上传图片。

---

# 8. 后续开发规划

## V0.4：当前视觉基线

已完成：

* Welcome Gate
* 三栏博客首页
* 清爽现代视觉系统
* 显式浅色 / 深色主题切换
* 主题书架整卡可点击
* Guestbook / Links 占位页

## V0.5：内容与专题

计划：

* 补充真实文章和项目
* 为主题书架增加独立专题页或主题筛选
* 完善 About 信息
* 补充真实联系方式

## V0.6：个人小站功能

计划：

* Guestbook 轻量留言墙
* Links 技术资源书签页
* Life 照片墙
* 更完整的移动端适配

## V1.0：上线完善

计划：

* sitemap / robots
* Open Graph 信息
* 自定义域名
* 内容校对
* 部署稳定性检查

---

# 9. 本地开发与部署

安装：

```bash
npm install
```

本地开发：

```bash
npm run dev
```

构建：

```bash
npm run build
```

预览：

```bash
npm run preview
```

Cloudflare Pages 配置：

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Production branch: main
Production URL: https://myweb-649.pages.dev/
```

---

# 10. 非目标

当前阶段不做：

* 用户登录
* 后台 CMS
* 在线上传图片
* 数据库
* 复杂评论系统
* 自动同步 GitHub repo
* 音乐 / 天气 / 日历真实功能

这些功能可以后续评估，但不应该打断当前的内容沉淀和视觉稳定。
