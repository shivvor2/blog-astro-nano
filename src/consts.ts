import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Shivvor2's Blog",
  EMAIL: "jzloo11111@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage of my personal site, built using Astro Nano, a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/shivVor2",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/shivvor2"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/%E9%A7%BF%E8%AA%A0-%E7%9B%A7-a90597199/",
  }
];
