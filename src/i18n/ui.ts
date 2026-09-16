import type { SiteCollection, SiteLang } from "./utils";

type Dictionary = {
  nav: {
    home: string;
    writing: string;
    projects: string;
    life: string;
    about: string;
    languageSwitch: string;
  };
  home: {
    heroSubtitle: string;
    projectsTitle: string;
    writingTitle: string;
    lifeTitle: string;
  };
  collections: Record<
    SiteCollection,
    {
      title: string;
      description: string;
      empty: string;
    }
  >;
  labels: {
    updatedAt: string;
    more: string;
    menu: string;
    github: string;
    bilibili: string;
    x: string;
    xiaohongshu: string;
    wechat: string;
    demo: string;
    caseStudy: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    identityTitle: string;
    identityBody: string;
    focusTitle: string;
    focusBody: string;
    buildingTitle: string;
    buildingBody: string;
    contactTitle: string;
    contactBody: string;
  };
  currentFocus: string[];
};

export const ui: Record<SiteLang, Dictionary> = {
  "zh-CN": {
    nav: {
      home: "首页",
      writing: "博客",
      projects: "项目",
      life: "生活",
      about: "关于",
      languageSwitch: "EN",
    },
    home: {
      heroSubtitle:
        "我是 Sikm，一名 AI 方向研究生。这里长期记录关于 Agent、LLM 与工程实践的笔记，偶尔也会写点生活。",
      projectsTitle: "项目小集",
      writingTitle: "博客笔记",
      lifeTitle: "生活切片",
    },
    collections: {
      writing: {
        title: "博客",
        description: "围绕 Agent、LLM 系统、论文阅读、工程实践和设计思考的长期写作。",
        empty: "博客内容还在整理中。",
      },
      projects: {
        title: "项目",
        description: "展示项目背景、技术路径、关键难点与最终结果。",
        empty: "项目案例正在补充中。",
      },
      research: {
        title: "研究",
        description: "沉淀论文阅读、实验日志和研究问题。",
        empty: "研究笔记正在补充中。",
      },
      life: {
        title: "生活",
        description: "保留少量有结构的生活记录与阶段性复盘。",
        empty: "生活记录还在准备中。",
      },
    },
    labels: {
      updatedAt: "更新于",
      more: "更多",
      menu: "菜单",
      github: "GitHub",
      bilibili: "Bilibili",
      x: "X",
      xiaohongshu: "小红书",
      wechat: "微信公众号",
      demo: "Demo",
      caseStudy: "案例分析",
    },
    about: {
      eyebrow: "About",
      title: "把研究、写作与构建放在同一个长期工作台里。",
      lead:
        "MyWeb 不是一张静态简历，而是我持续记录如何学习、研究和构建 AI Agent 系统的公开主页。",
      identityTitle: "我是谁",
      identityBody:
        "目前的主要身份是 Agent / LLM 算法方向研究生，关注从想法验证到可交付系统之间的工程落差。",
      focusTitle: "我关注什么",
      focusBody:
        "重点包括 Agent 工作流、多智能体评测、工具调用稳定性、RAG / MCP 工程实践，以及部分目标检测和效率工具方向。",
      buildingTitle: "我在构建什么",
      buildingBody:
        "这里会逐步沉淀技术文章、项目案例、研究笔记和阶段性复盘，形成一套可回看的长期知识资产。",
      contactTitle: "联系方式",
      contactBody:
        "GitHub、邮箱与公开渠道将在正式上线前补充。当前版本先完成信息结构、内容系统和多语言框架。",
    },
    currentFocus: ["LLM", "Agent", "RL"],
  },
  en: {
    nav: {
      home: "Home",
      writing: "Blog",
      projects: "Projects",
      life: "Life",
      about: "About",
      languageSwitch: "中文",
    },
    home: {
      heroSubtitle:
        "I'm Sikm, a grad student working on AI. I keep long-term notes here on agents, LLMs, and engineering practice — occasionally life too.",
      projectsTitle: "Project Notes",
      writingTitle: "Blog Notes",
      lifeTitle: "Life fragments",
    },
    collections: {
      writing: {
        title: "Blog",
        description: "Long-form notes on agent systems, LLM engineering, paper reading, and practical implementation.",
        empty: "Blog entries are still being prepared.",
      },
      projects: {
        title: "Projects",
        description: "Project case studies with context, technical path, and results.",
        empty: "Project entries are being expanded.",
      },
      research: {
        title: "Research",
        description: "Paper notes, experiment logs, and research questions in progress.",
        empty: "Research notes are still being collected.",
      },
      life: {
        title: "Life",
        description: "A restrained journal layer to keep the site personal.",
        empty: "Life notes are on the way.",
      },
    },
    labels: {
      updatedAt: "Updated",
      more: "More",
      menu: "Menu",
      github: "GitHub",
      bilibili: "Bilibili",
      x: "X",
      xiaohongshu: "RED",
      wechat: "WeChat",
      demo: "Demo",
      caseStudy: "Case Study",
    },
    about: {
      eyebrow: "About",
      title: "A long-term workspace for research, writing, and building.",
      lead:
        "MyWeb is not a static resume page. It is a public home for how I learn, research, and build AI agent systems over time.",
      identityTitle: "Who I am",
      identityBody:
        "I am currently working as an Agent / LLM graduate student, with a strong interest in turning ideas into robust, reviewable systems.",
      focusTitle: "What I focus on",
      focusBody:
        "The main areas include agent workflows, multi-agent evaluation, tool-use reliability, RAG / MCP engineering, plus selected notes on object detection and productivity tools.",
      buildingTitle: "What I am building here",
      buildingBody:
        "This site gradually turns project work, research notes, writing, and periodic reflection into a durable and searchable body of work.",
      contactTitle: "Contact",
      contactBody:
        "GitHub, email, and public contact channels will be added before the public launch. This iteration focuses on structure, content workflows, and bilingual delivery.",
    },
    currentFocus: ["LLM", "Agent", "RL"],
  },
};
