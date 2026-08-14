# MyWeb

MyWeb 是 sikm 的双语个人研究小站，用于长期沉淀 Agent / LLM、工程实践、项目记录和少量生活切片。

当前版本采用暖纸面、衬线字体和低饱和边框构成的 editorial / magazine 风格：它更像一个长期维护的个人研究小站，而不是营销落地页或一次性简历页。

* 每次打开首页先进入沉浸式欢迎页
* 点击「进入小屋」后进入三栏博客首页
* 左侧为作者卡和站内导航
* 中间为主题书架、最近写作和开源项目
* 右侧为 Now、Quick Links、留言入口和生活切片
* 支持中英文双语
* 支持显式浅色 / 深色主题切换
* 视觉基线以 `src/styles/global.css` 中的 CSS tokens 为准

## 内容频道

站点主要承载四类内容：

* Blog：技术文章、研究笔记与工程思考
* Projects：开源项目与项目案例
* Research：论文阅读、实验观察和研究笔记
* Life：轻量生活记录，后续以照片墙为主

同时预留：

* Guestbook：轻量留言墙
* Links：技术资源型友链 / 资源书签

## 技术方案

当前采用静态优先方案：

* Astro
* MDX
* Tailwind CSS 4
* TypeScript
* GitHub
* Cloudflare Pages

第一版不引入数据库、后端 API、登录系统和 CMS。留言墙目前是占位入口，后续再决定存储与审核方案。

## 线上地址

当前 Cloudflare Pages 生产地址：

```text
https://myweb-649.pages.dev/
```

`main` 分支 push 后，由 Cloudflare Pages 自动构建并部署。

## 开发进展

已完成：

* 中英文首页
* 沉浸式欢迎页入口
* 三栏博客首页布局
* 作者卡、Now、Quick Links、主题书架
* 显式浅色 / 深色主题切换
* 中英文 About 页面
* Blog / Projects / Research / Life 四个内容频道
* 四类内容的列表页与详情页
* Guestbook / Links 中英文占位页
* 双语切换机制
* 基于 `translationKey` 的中英文内容配对规则
* 首页博客流、项目和生活内容取数逻辑
* `npm run build` 构建通过

当前状态：

* 视觉方向已定为暖色纸面、衬线排版、克制卡片和内容优先的个人研究空间
* 当前内容仍以示例内容和占位资源为主
* 后续重点是补充真实内容、完善留言墙 / 友链 / 生活照片墙

## 视觉基线

当前代码中的视觉系统以 `src/styles/global.css` 为准：

* 浅色模式使用暖纸色背景，例如 `#f4efe6`、`#eae3d5`
* 深色模式使用低亮度暖黑和纸质边框色
* 正文字体以 `EB Garamond` + `Noto Serif SC` 为主，保留 `MiSans` / `Noto Sans SC` 作为中文 fallback
* 页面通过细边框、留白、轻微网格肌理和 hover 微位移建立层级
* 不使用强烈渐变、霓虹、粒子背景或过度装饰
* 组件应优先复用 `ArticleCard`、`ProjectCard`、`Badge`、`Button`、`SectionTitle` 和现有 layout

## 后续开发

下一阶段优先项：

1. 补充真实文章、项目、研究、生活内容
2. 将主题书架升级为独立专题页或带筛选的主题入口
3. 完善 Guestbook 轻量留言墙
4. 将 Life 页面改造成照片墙
5. 补充 GitHub / Email / 社交链接
6. 增加 SEO 基础能力，如 sitemap、robots、OG 信息
7. 继续打磨移动端和视觉细节

## 文档

相关详细文档见：

* [dev-docs/MyWeb.md](dev-docs/MyWeb.md)
* [dev-docs/内容发布流程.md](dev-docs/内容发布流程.md)

## 本地开发

```bash
npm install
npm run dev
```

默认地址：

```text
http://localhost:4321
```

## 构建

```bash
npm run build
npm run preview
```

构建输出目录：

```text
dist/
```
