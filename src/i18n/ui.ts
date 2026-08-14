import type { SiteCollection, SiteLang } from "./utils";

type Dictionary = {
  nav: {
    home: string;
    writing: string;
    projects: string;
    research: string;
    life: string;
    guestbook: string;
    friends: string;
    about: string;
    languageSwitch: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  home: {
    welcomeTitle: string;
    welcomeDescription: string;
    welcomeCta: string;
    nowTitle: string;
    nowDescription: string;
    nowItems: {
      label: string;
      value: string;
    }[];
    focusTitle: string;
    focusDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    writingTitle: string;
    writingDescription: string;
    researchTitle: string;
    researchDescription: string;
    lifeTitle: string;
    lifeDescription: string;
    lifeTeaserTitle: string;
    lifeTeaserDescription: string;
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
    latest: string;
    featured: string;
    currentFocus: string;
    readingTime: string;
    updatedAt: string;
    projectStatus: string;
    stack: string;
    links: string;
    more: string;
    github: string;
    bilibili: string;
    x: string;
    xiaohongshu: string;
    wechat: string;
    demo: string;
    caseStudy: string;
    noTranslation: string;
    backToList: string;
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
  footer: string;
  currentFocus: string[];
};

export const ui: Record<SiteLang, Dictionary> = {
  "zh-CN": {
    nav: {
      home: "首页",
      writing: "博客",
      projects: "项目",
      research: "研究",
      life: "生活",
      guestbook: "留言",
      friends: "友链",
      about: "关于",
      languageSwitch: "EN",
    },
    hero: {
      eyebrow: "Agent / LLM Research & Building",
      title: "你好，我是 sikm。",
      subtitle: "Agent / LLM 算法方向研究生",
      description:
        "你好，我是 sikm！一个努力避免摸鱼的 AI 方向研究生。关注 Agent、RL 和大模型，也会在这里记录有趣项目、论文阅读和技术博客。",
      primaryCta: "阅读博客",
      secondaryCta: "查看项目",
    },
    home: {
      welcomeTitle: "欢迎来到 sikm 的博客小屋。",
      welcomeDescription:
        "这里存放一些关于 Agent、LLM、工程实践，以及生活切片的长期记录。",
      welcomeCta: "进入小屋",
      nowTitle: "当前状态",
      nowDescription: "桌面上暂时只放一张便签，记录此刻最真实的关注。",
      nowItems: [
        {
          label: "最近在研究",
          value: "Agent",
        },
      ],
      focusTitle: "当前关注",
      focusDescription: "Agent 设计、评测和 harness。",
      projectsTitle: "项目小集",
      projectsDescription: "围绕 AI、Agent 和效率工具的项目实践。",
      writingTitle: "博客笔记",
      writingDescription: "论文阅读、工程观察和 AI 工具实践的整理与分享。",
      researchTitle: "研究笔记",
      researchDescription: "论文阅读、实验观察和问题拆解。",
      lifeTitle: "生活切片",
      lifeDescription: "首页只放一点生活的光，真正的生活页后续以照片墙为主。",
      lifeTeaserTitle: "照片墙会放在这里慢慢长出来",
      lifeTeaserDescription: "训练、阅读、日常与一些不太需要解释的瞬间，会成为博客小屋里的窗。",
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
      latest: "最新",
      featured: "精选",
      currentFocus: "Current Focus",
      readingTime: "阅读时间",
      updatedAt: "更新于",
      projectStatus: "项目状态",
      stack: "技术栈",
      links: "相关链接",
      more: "更多",
      github: "GitHub",
      bilibili: "Bilibili",
      x: "X",
      xiaohongshu: "小红书",
      wechat: "微信公众号",
      demo: "Demo",
      caseStudy: "案例分析",
      noTranslation: "该内容暂无对应英文版本，已回退到列表页。",
      backToList: "返回列表",
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
    footer: "",
    currentFocus: ["LLM", "Agent", "RL"],
  },
  en: {
    nav: {
      home: "Home",
      writing: "Blog",
      projects: "Projects",
      research: "Research",
      life: "Life",
      guestbook: "Guestbook",
      friends: "Links",
      about: "About",
      languageSwitch: "中文",
    },
    hero: {
      eyebrow: "Agent / LLM Research & Building",
      title: "Hi, I’m sikm.",
      subtitle: "Agent / LLM Algorithm Graduate Student",
      description:
        "Hi, I am sikm, an AI graduate student trying hard not to slack off. I focus on Agent, RL, and large models, and write about interesting projects, paper reading, and technical notes.",
      primaryCta: "Read blog",
      secondaryCta: "View projects",
    },
    home: {
      welcomeTitle: "Welcome to sikm's blog cottage.",
      welcomeDescription:
        "A long-term place for notes on Agent, LLMs, engineering practice, and small fragments of life.",
      welcomeCta: "Enter",
      nowTitle: "Now",
      nowDescription: "A small desk note for what is actually holding my attention.",
      nowItems: [
        {
          label: "Researching",
          value: "Agent",
        },
      ],
      focusTitle: "Current focus",
      focusDescription: "Agent design, evaluation, and harness work.",
      projectsTitle: "Project Notes",
      projectsDescription: "Project practice around AI, Agent systems, and productivity tools.",
      writingTitle: "Blog Notes",
      writingDescription: "Paper reading, engineering observations, and notes on AI tools.",
      researchTitle: "Research notes",
      researchDescription: "Paper reading, experiment observations, and question breakdowns.",
      lifeTitle: "Life fragments",
      lifeDescription: "Only a small glimmer on the home page; the life page can grow into a photo wall later.",
      lifeTeaserTitle: "A photo wall will grow here",
      lifeTeaserDescription: "Training, reading, daily scenes, and moments that do not need much explanation.",
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
      latest: "Latest",
      featured: "Featured",
      currentFocus: "Current Focus",
      readingTime: "Reading time",
      updatedAt: "Updated",
      projectStatus: "Status",
      stack: "Stack",
      links: "Links",
      more: "More",
      github: "GitHub",
      bilibili: "Bilibili",
      x: "X",
      xiaohongshu: "RED",
      wechat: "WeChat",
      demo: "Demo",
      caseStudy: "Case Study",
      noTranslation: "This entry has no translation yet, so the switch falls back to the list page.",
      backToList: "Back to list",
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
    footer: "",
    currentFocus: ["LLM", "Agent", "RL"],
  },
};
