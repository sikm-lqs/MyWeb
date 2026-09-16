# MyWeb

## Project Purpose

MyWeb is a bilingual personal website for long-term writing and portfolio work around Agent / LLM research and engineering. It hosts three public content streams:

- `writing`: the public Blog stream for technical articles, paper notes, research notes, and engineering thoughts
- `projects`: project case studies
- `life`: a small amount of personal writing

The site is intended to be a durable personal knowledge and work homepage, not a one-off resume page.

## Stack

- Astro 6
- MDX
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript with `astro/tsconfigs/strict`
- Static-first deployment, intended for GitHub + Cloudflare Pages

Production URL: `https://myweb-649.pages.dev/`

Do not assume there is a backend, database, auth system, CMS, or upload service. The first version is file-driven and static.

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Astro CLI: `npm run astro`

Default dev URL: `http://localhost:4321`

Required Node.js version: `>=22.12.0`

## Current State

Implemented:

- Chinese and English home pages with a hero-led single-column layout
- Chinese and English About pages
- Three public content channels: `writing`, `projects`, `life`
- Blog pages are driven by the `writing` collection, which carries technical articles, paper notes, and engineering thoughts
- List and detail pages for each public channel
- Guestbook and friends/link placeholder pages
- Chinese routes under `/` and English routes under `/en`
- Language switching based on `translationKey`
- Fallback to the target-language collection page when a translation is missing
- Explicit light/dark theme switching
- Home page data queries for latest projects, latest blog entries, and life notes
- Single-column home layout with a hero (avatar, English welcome title, bio, social links) followed by latest Writing / Projects / Life sections
- Header brand (28px avatar + "Sikm") and a hamburger mobile menu below 768px (dropdown panel, ESC/outside-click/resize to close)
- Warm editorial visual system based on paper tones, sans typography, hairline dividers, and restrained flat rows
- Icon-based social links; the GitHub profile is `https://github.com/sikm-lqs`
- Placeholder avatar and cover images

Known next priorities:

- Replace placeholder profile and cover images with real assets
- Add more real blog, project, and life content
- Fill in GitHub / Email / social links
- Add basic SEO support such as sitemap, robots, and Open Graph metadata
- Continue mobile and visual polish

## Directory Map

```text
.
├── README.md                         # High-level project overview
├── dev-docs/
│   ├── MyWeb.md                      # Project notes and PRD
│   └── 内容发布流程.md                 # Content publishing workflow
├── public/
│   ├── favicon.*
│   └── images/                       # Profile, cover, and article images
├── src/
│   ├── components/
│   │   ├── about/                    # About page
│   │   ├── content/                  # Content cards and collection pages
│   │   ├── home/                     # Home page
│   │   ├── layout/                   # Header, Footer, Container
│   │   └── ui/                       # Basic UI components
│   ├── content/                      # MDX content source
│   │   ├── writing/{zh,en}/
│   │   ├── projects/{zh,en}/
│   │   └── life/{zh,en}/
│   ├── i18n/                         # UI copy, languages, route helpers
│   ├── layouts/                      # BaseLayout, ArticleLayout, ProjectLayout
│   ├── lib/content/                  # Content queries and translation helpers
│   ├── pages/                        # Astro routes
│   ├── styles/global.css             # Global CSS and Tailwind entry
│   └── content.config.ts             # Astro content collection schemas
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Rules

Content collections are defined in `src/content.config.ts`.

- `writing` and `life` use the shared article schema and may include `readTime`
- The public Blog route is `/writing`; it serves the `writing` collection
- `projects` adds `status`, `stack`, `repoUrl`, `demoUrl`, and `caseStudyUrl`
- Supported languages are `zh-CN` and `en`
- `draft: true` excludes content from public lists and homepage sections
- `routeSlug` controls the public URL
- `translationKey` pairs Chinese and English versions
- A content item may be published in only one language first

When adding content, follow `dev-docs/内容发布流程.md` and run `npm run build`.

## Routing

- Chinese home: `/`
- English home: `/en`
- Chinese collection example: `/writing`
- English collection example: `/en/writing`
- Chinese detail example: `/writing/agent-state-management`
- English detail example: `/en/writing/agent-state-management`

Language switching searches for a non-draft entry in the same collection with the same `translationKey` and the target language. If none exists, it falls back to the target-language collection page.

## Home Page Data

The home page is data-driven:

- Open Projects: latest published `projects` entries, max 3
- Latest Blog: latest published `writing` entries, max 4
- Life Notes: latest published `life` entries, max 2

Entries are sorted by `publishedAt` descending.

## Current TODO

- Recheck the mobile home page after the denser desktop layout.

## Visual Baseline

The implemented UI follows the tokens and component styles in `src/styles/global.css`.

- Light mode uses warm paper tones such as `#f4efe6`, `#eae3d5`, and `#d4c9b8`.
- Dark mode uses warm near-black surfaces and muted paper borders.
- Typography is all sans: system Latin stack with `MiSans` / `Noto Sans SC` for Chinese, at weights 400/500/600.
- The home page is a single-column personal card layout: a hero ("Welcome to Sikm's log") followed by Writing / Projects / Life sections.
- Use whitespace, hairline dividers, eyebrow-style section labels, and restrained text links for hierarchy; home and list entries are flat rows without card boxes.
- Avoid strong gradients, neon effects, particle backgrounds, or marketing-page composition.

## Agent Guidelines

- Read the relevant source files before editing.
- Preserve the static, file-driven architecture unless the user explicitly changes scope.
- Prefer existing components, layouts, i18n helpers, and content utilities over new abstractions.
- Keep slugs stable and English-like; avoid spaces and Chinese filenames for new image assets.
- Keep personal/social links in `src/i18n/utils.ts`; the current GitHub username is `sikm-lqs`.
- For bilingual content, keep the same `translationKey` across languages.
- Do not commit secrets, `.env` files, build output, or large uncompressed images.
- If changing content schemas, route behavior, homepage data rules, or publishing workflow, update `README.md`, `dev-docs/内容发布流程.md`, `CLAUDE.md`, and this file together.
- Keep the UI warm, restrained, editorial, and content-focused: this is a personal writing and portfolio site, not a marketing landing page.
