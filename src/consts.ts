import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "giosakti.com",
  DESCRIPTION: "Giovanni Sakti, Software Engineer and Writer.",
  EMAIL: "t",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Giovanni Sakti personal website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my writings.",
};

export const PROJECTS: Metadata = {
  TITLE: "Speaking",
  DESCRIPTION:
    "A collection of my public speakings and livestreams.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/giosakti",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/giosakti",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/giosakti",
  },
];
