# MyWeb 项目沉淀文档

更新时间：2026-09-16

本文档记录 MyWeb 当前的产品定位、技术方案、视觉基线、页面结构和后续规划。它是后续继续开发时的基准文档。

---

# 1. 项目说明

## 1.1 项目定位

MyWeb 是 Sikm 的双语个人研究小站，用于长期沉淀 Agent / LLM、工程实践、开源项目和少量生活切片。

它不是静态简历页，也不是纯技术博客，而是一个有个人气质、可持续更新、可被访问者慢慢浏览的个人研究空间。

一句话定位：

> 一个暖纸面、全站 sans 排版、克制而可长期维护的个人研究小站：主线是 Agent / LLM / 工程实践，辅线是生活记录和个人表达。

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
Hero + 单栏名片式首页 + 暖纸面 sans editorial 视觉系统
```

访问首页时直接进入正文，无欢迎页。首页自上而下：

1. Hero：固定英文标题 `Welcome to Sikm's log`、一段简介、单色社交图标行
2. Writing：最新 4 条博客（`writing` 集合）
3. Projects：最新 3 条项目
4. Life：最新 2 条生活记录

所有内容条目都是无盒子的平面列表行，条目之间用发丝分隔线，section 用 eyebrow 小标签区分。

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

中文导航（5 项）：

```text
首页 / 博客 / 项目 / 生活 / 关于 / 主题切换 / EN
```

英文导航：

```text
Home / Blog / Projects / Life / About / Theme Toggle / 中文
```

说明：

* Header 左侧是头像 + `Sikm` 品牌链接；留言 / 友链不进入主导航，页面仍可通过直接 URL 访问。
* 桌面端（≥768px）导航横排在 Header 内；移动端（<768px）导航收起为汉堡按钮，点击在 Header 下方展开下拉面板（支持点击外部 / ESC / 视口变宽时关闭）。
* 主导航更偏博客小站气质，避免过度研究站化。

---

# 4. 首页信息架构

## 4.1 Hero

目标：像 Lil'Log 一样，第一屏直接进入内容，无进入仪式。

当前规则：

* 首页无 Welcome Gate，打开即是正文。
* Hero 为纯文字开场：英文固定标题 + 双语副标题 + 单色社交图标行（只渲染配置了链接的平台）。
* 头像已移至 Header 品牌区（28px 圆形 + `Sikm` 文字）。

当前标题（两种语言均显示英文）：

```text
Welcome to Sikm's log
```

副标题（中文）：

```text
我是 Sikm，一名 AI 方向研究生。这里长期记录关于 Agent、LLM 与工程实践的笔记，偶尔也会写点生活。
```

英文：

```text
I'm Sikm, a grad student working on AI. I keep long-term notes here on agents, LLMs, and engineering practice — occasionally life too.
```

## 4.2 首页主体

首页主体为单栏布局，全站统一 52rem（832px）中轴。

自上而下：

* Hero（见 4.1）
* Writing：最新 4 条博客，平面列表行（meta / 标题 / 摘要 / 标签），首条标题略大
* Projects：最新 3 条项目，平面列表行（status · 日期 / 标题 / 摘要 / stack / 链接）
* Life：最新 2 条生活记录

每个 section 头部是 eyebrow 小标签 + 小号「更多 →」文字链接。

## 4.3 后续栏目 / 合集

当前首页已移除抽象的主题书架。后续更适合把博客内容组织为真实可维护的栏目或合集，例如：

* LeetCode 手撕合集
* Paper Research 合集
* 开源 AI 工具 / 资讯分享合集
* Agent / RL / 大模型相关专题

设计原则：

* 合集必须来自真实内容沉淀，不做空泛方向陈列。
* 合集入口可以后续做成独立专题页、标签筛选页或 Blog 内的栏目导航。
* 首页优先展示最新写作和项目，避免首屏被抽象分类占据。

## 4.4 首页取数规则

* `Projects`：`projects` 中已发布内容，按 `publishedAt` 倒序取前 3 条
* `Writing`：`writing` 中已发布内容，按 `publishedAt` 倒序取前 4 条
* `Life`：`life` 中已发布内容，按 `publishedAt` 倒序取前 2 条
* 所有首页列表都先按当前语言过滤，再排序和截断

---

# 5. 视觉系统

## 5.1 当前视觉方向

当前代码中的视觉系统以 `src/styles/global.css` 为准。它已经从早期“清爽现代 / OpenAI-Codex 气质”的蓝绿 accent 方案，收敛到更明确的：

```text
暖纸面
全站 sans 排版
editorial
克制
内容优先
个人研究空间
```

设计原则：

* 内容优先
* 大方留白，但首页保持可扫描的信息密度
* 无盒子卡片：列表条目是平面行，用发丝分隔线、留白和 eyebrow 小标签建立层级
* 少量强调色，以黑色动作按钮、暖色边框和文本层级为主
* 浅色 / 深色都完整可读
* 不使用强烈光效、粒子背景、霓虹风、纯装饰渐变
* 不使用营销型 landing page 构图
* 保留“博客小屋”的个人气质，但不走过度可爱化装饰

## 5.2 色彩基线

浅色模式：

```css
--background: #f4efe6;
--surface: #eae3d5;
--surface-soft: #f0e9df;
--surface-muted: #e6dccf;
--surface-raised: #f5f0e8;
--text-main: #1f1a14;
--text-muted: #5c5246;
--text-subtle: #8a7f6f;
--border: #d4c9b8;
--border-strong: #b8a88f;
--accent: #1f1a14;
--accent-soft: #e6dccf;
--accent-muted: #5c5246;
```

深色模式：

```css
--background: #1a1814;
--surface: #25221d;
--surface-soft: #2f2a24;
--surface-muted: #3a342d;
--surface-raised: #25221d;
--text-main: #f0e9df;
--text-muted: #b8a88f;
--text-subtle: #8a7f6f;
--border: #3a342d;
--border-strong: #4a4238;
--accent: #f0e9df;
--accent-soft: #2f2a24;
--accent-muted: #b8a88f;
```

浅色和深色都通过 `--header-bg`、`--shadow-soft`、`--shadow-poster`、`--grain` 等变量补充 header、hover 和纸面纹理表现。

## 5.3 主题切换

当前支持显式浅色 / 深色切换：

* Header 右侧显示主题切换按钮
* 主题值写入 `localStorage`
* 页面 head 中提前写入 `data-theme`，减少主题闪烁
* 组件颜色全部尽量走 CSS variables，避免深色模式出现浅卡浅字

## 5.4 字体

全站使用无衬线栈（西文系统栈 + 中文 MiSans）：

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  "MiSans",
  "Noto Sans SC",
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

详见 `dev-docs/自托管字体与阅读体验优化计划.md`（已改写为当前字体方案说明）。

---

# 6. 内容系统

## 6.1 Content Collections

当前三类内容：

```text
writing
projects
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

* Hero + 单栏名片式首页（无 Welcome Gate）
* 全站 sans 字体（系统栈 + 自托管 MiSans）
* 全站统一 52rem 中轴
* 暖纸面 editorial 视觉系统，平面列表行 + 发丝分隔线
* 显式浅色 / 深色主题切换
* 图标化单色社交链接入口
* Header 品牌区（头像 + Sikm）与移动端汉堡菜单
* Guestbook / Links 占位页（不进入主导航）

## V0.5：内容与专题

计划：

* 补充真实文章和项目
* 为博客增加真实栏目 / 合集入口
* 完善 About 信息
* 补充真实联系方式

## V0.6：个人小站功能

计划：

* Guestbook 轻量留言墙
* Links 技术资源书签页
* Life 照片墙
* 移动端细节打磨（汉堡菜单已实现）

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
