import type { SocialObjects } from "@/lib/types";

export const SITE = {
  website: "https://how-to-ask.liushen.fun/", // replace this with your deployed domain
  author: "LiuShen",
  desc: "如何以聪明的方式提问？这里有你需要知道的一切。",
  title: "提问の智慧",
  ogImage: "og-image.jpg",
  repo: "https://github.com/willow-god/How-To-Ask-Questions-The-Smart-Way/",
};

export const LOCALE = {
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN","en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  {
    title: "主页",
    href: "https://www.liushen.fun/",
  },
  {
    title: "博客",
    href: "https://blog.liushen.fun/",
  },
];

// Just works with top-level folders and files. For files, don't add extension as it looks for the slug, and not the file name.
export const side_nav_menu_order: string[] = [
  "statement",
  "introduction",
  "before-questions",
  "when-questions",
  "when-questions/carefully-select-forum",
  "when-questions/stack-overflow",
  "when-questions/website-and-irc",
  "when-questions/use-project-email-list",
  "when-questions/use-meaningful-headlines",
  "when-questions/make-questions-easily",
  "when-questions/use-correctly-sentence",
  "when-questions/use-easy-to-read-file-format",
  "when-questions/precisely-describe-problem",
  "when-questions/not-more-words-but-essence",
  "when-questions/not-say-find-bug-easily",
  "when-questions/humble-not-substitute-homewoek",
  "when-questions/describe-symptoms-not-guesses",
  "when-questions/list-problems-by-time",
  "when-questions/describe-goal-not-process",
  "when-questions/donnot-ask-for-private-email",
  "when-questions/clearly-express-your-question",
  "when-questions/when-ask-code",
  "when-questions/donnot-ask-homework",
  "when-questions/remove-questional-sentence",
  "when-questions/never-write-urgent",
  "when-questions/courtesy-costs-nothing",
  "after-questions",
  "how-to-read-answer",
  "how-to-read-answer/rtfm-and-stfw",
  "how-to-read-answer/if-still-not-understand",
  "how-to-read-answer/Deal-with-offensive",
  "how-to-avoid-being-loser",
  "questions-you-cannot-ask",
  "good-or-bad-question",
  "if-cannot-get-answer",
  "how-to-answer-well",
  "related-resource",
  "thanks",
];

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: false,
  hide_search: false,
  hide_repo_button: false,
  hide_author: false,
};

// Set your social. It will appear in footer. Don't change the `name` value.
export const Socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/willow-god/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/willow-god/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:01@liushen.fun",
    linkTitle: `Send an email to LiuShen`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.gg/tWZRBhaPhd",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@hyp3r00t",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
