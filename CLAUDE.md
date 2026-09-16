# MyWeb

## 项目目的

MyWeb 是一个双语个人网站，用于长期沉淀 Agent / LLM 算法方向的博客、项目案例和少量生活记录。博客统一承载技术文章、研究笔记、论文阅读、实验观察和工程思考。项目目标不是一次性简历页，而是可持续维护的个人知识与作品主页。

一句话定位：记录我如何学习、研究和构建 AI Agent。

## 技术栈

- Astro 6
- MDX
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript，使用 `astro/tsconfigs/strict`
- 静态优先部署，目标平台为 GitHub + Cloudflare Pages

线上地址：`https://myweb-649.pages.dev/`

第一版不包含数据库、后端 API、登录系统、CMS 或访客上传能力。

## 常用命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 构建检查：`npm run build`
- 本地预览构建结果：`npm run preview`
- Astro CLI：`npm run astro`

默认开发地址为 `http://localhost:4321`。Node.js 要求 `>=22.12.0`。

## 当前进展

已完成：

- 中英文首页（hero + Writing / Projects / Life 单栏布局）
- 显式浅色 / 深色主题切换
- 中英文 About 页面
- `writing` / `projects` / `life` 三个公开内容频道
- Blog 入口由 `writing` 集合统一承载，包含技术文章、论文笔记和工程思考
- 三类公开内容的列表页与详情页
- Guestbook / Friends 中英文占位页
- `/` 中文路由与 `/en` 英文路由
- 基于 `translationKey` 的双语内容配对与语言切换回退
- 首页最新项目、最新博客和生活记录取数
- 占位头像、封面图和暖纸面 editorial 视觉系统
- 图标化个人链接入口，GitHub 指向 `https://github.com/sikm-lqs`
- `npm run build` 曾构建通过

当前主要待办：

- 替换真实头像、项目封面和更多图片资源
- 补充真实博客、项目和生活内容
- 完善 GitHub / Email / 社交链接
- 增加 sitemap、robots、OG 等 SEO 基础能力
- 继续打磨移动端和视觉细节

## 目录地图

```text
.
├── README.md                         # 项目概览
├── dev-docs/
│   ├── MyWeb.md                      # 项目说明与 PRD
│   └── 内容发布流程.md                 # 内容新增、双语映射、frontmatter 规则
├── public/
│   ├── favicon.*
│   └── images/                       # 头像、封面和正文图片
├── src/
│   ├── components/
│   │   ├── about/                    # About 页面组件
│   │   ├── content/                  # 平面列表条目（ArticleCard/ProjectCard）、列表页、图片组件
│   │   ├── home/                     # 首页组件
│   │   ├── layout/                   # Header、Footer、Container
│   │   └── ui/                       # Button、SocialLink、ThemeToggle 等基础 UI
│   ├── content/                      # 文件驱动内容
│   │   ├── writing/{zh,en}/
│   │   ├── projects/{zh,en}/
│   │   └── life/{zh,en}/
│   ├── i18n/                         # 文案、语言、路由工具
│   ├── layouts/                      # BaseLayout、ArticleLayout、ProjectLayout
│   ├── lib/content/                  # 内容查询、排序、翻译配对
│   ├── pages/                        # Astro 路由
│   ├── styles/global.css             # 全局样式与 Tailwind 入口
│   └── content.config.ts             # Astro 内容集合 schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 内容模型

内容集合定义在 `src/content.config.ts`：

- `writing`、`life` 使用通用文章 schema，可选 `readTime`
- 公开 Blog 入口使用 `/writing`，由 `writing` 集合承载
- `projects` 额外包含 `status`、`stack`、`repoUrl`、`demoUrl`、`caseStudyUrl`
- 支持语言：`zh-CN`、`en`
- `draft: true` 的内容不会进入列表页或首页
- `routeSlug` 控制 URL，文件名不直接决定最终 URL
- `translationKey` 用于中英文内容配对

内容发布流程详见 `dev-docs/内容发布流程.md`。新增内容后至少运行 `npm run build`。

## 路由与取数规则

- 中文首页：`/`
- 英文首页：`/en`
- 中文详情页示例：`/writing/agent-state-management`
- 英文详情页示例：`/en/writing/agent-state-management`
- 语言切换优先查找同集合、同 `translationKey`、目标语言且非草稿的内容
- 找不到翻译时回退到目标语言的集合列表页

首页当前按发布时间倒序自动取数：

- Open Projects：`projects` 中已发布内容，最多 3 条
- Latest Blog：`writing` 中已发布内容，最多 4 条
- Life Notes：`life` 中已发布内容，最多 2 条

## 当前 TODO

- 继续检查移动端首屏与 Blog/Projects 并排区块的视觉密度

## 视觉基线

当前实现以 `src/styles/global.css` 为准，采用暖纸面、全站无衬线字体、轻网格肌理和低饱和发丝分隔线的 editorial 风格：

- 浅色主题基于 `#f4efe6`、`#eae3d5`、`#d4c9b8` 等暖色纸面变量
- 深色主题是暖黑和低对比纸面边框，不走纯黑高亮或霓虹风
- 全站字体为无衬线：西文系统栈（零加载）+ 中文自托管 `MiSans` / `Noto Sans SC`
- 首页是 hero + 单栏内容流（Writing / Projects / Life），不是营销型 landing page
- 列表条目和卡片已拍平为无盒子的平面行，通过发丝分隔线、留白和 eyebrow 小标签建立层级
- 新增 UI 优先复用现有 `ArticleCard`、`ProjectCard`、`Button`、`SocialLink`、`BaseLayout`、`ArticleLayout` 和 `ProjectLayout`

## 开发约定

- 修改前先阅读相关页面、组件和 `src/content.config.ts`
- 保持文件驱动内容管理，不引入 CMS、数据库或后端，除非需求明确变更
- 新增内容优先使用稳定英文 slug；图片路径从站点根路径开始，例如 `/images/projects/demo-cover.svg`
- GitHub username 使用 `sikm-lqs`，个人主页链接常量维护在 `src/i18n/utils.ts`
- 中英文版本的 `translationKey` 必须一致；允许先发布单语内容
- 不要提交 `.env`、密钥、构建产物或大型未压缩图片
- 改动内容 schema、首页取数、路由规则时，同步更新 `README.md`、`dev-docs/内容发布流程.md` 以及本文件
- 变更 UI 时保持现有静态内容站风格：暖纸面、sans 排版、克制、面向阅读和作品展示
