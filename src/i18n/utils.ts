export const SITE_NAME = "Sikm's Log";
export const DEFAULT_LANG = "zh-CN";
export const SUPPORTED_LANGS = [DEFAULT_LANG, "en"] as const;
export const PROFILE_AVATAR_SRC = "/images/profile/avatar.jpg";
export const GITHUB_URL = "https://github.com/sikm-lqs";
export const GITHUB_HANDLE = "sikm-lqs";
export const BILIBILI_URL = "https://space.bilibili.com/563285166";
export const BILIBILI_HANDLE = "563285166";
export const X_URL = "https://x.com/liuqingsong1109";
export const X_HANDLE = "liuqingsong1109";
export const XIAOHONGSHU_URL = "";
export const XIAOHONGSHU_HANDLE = "";
export const WECHAT_URL = "";
export const WECHAT_HANDLE = "";

export type SiteLang = (typeof SUPPORTED_LANGS)[number];
export type SiteCollection = "writing" | "projects" | "life";

export const isEnglish = (lang: SiteLang) => lang === "en";

export const getLangPrefix = (lang: SiteLang) => (isEnglish(lang) ? "/en" : "");

export const getCollectionPath = (collection: SiteCollection, lang: SiteLang) =>
  `${getLangPrefix(lang)}/${collection}`;

export const getDetailPath = (
  collection: SiteCollection,
  lang: SiteLang,
  slug: string,
) => `${getCollectionPath(collection, lang)}/${slug}`;

export const getAboutPath = (lang: SiteLang) =>
  isEnglish(lang) ? "/en/about" : "/about";

export const getHomePath = (lang: SiteLang) => (isEnglish(lang) ? "/en" : "/");

export const getGuestbookPath = (lang: SiteLang) =>
  isEnglish(lang) ? "/en/guestbook" : "/guestbook";

export const getFriendsPath = (lang: SiteLang) =>
  isEnglish(lang) ? "/en/friends" : "/friends";

export const getOppositeLang = (lang: SiteLang): SiteLang =>
  isEnglish(lang) ? DEFAULT_LANG : "en";

export const formatDate = (value: string, lang: SiteLang) =>
  new Intl.DateTimeFormat(isEnglish(lang) ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));

export const sortByPublishedAtDesc = <T extends { data: { publishedAt: string } }>(
  entries: T[],
) =>
  [...entries].sort(
    (left, right) =>
      new Date(right.data.publishedAt).getTime() -
      new Date(left.data.publishedAt).getTime(),
  );
