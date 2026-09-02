export type Project = {
  id: string;
  title: string;
  cat: string;
  stars: string;
  tags: string[];
  img: string;
  desc: string;
};

export type Experience = {
  title: string;
  co: string;
  loc: string;
  period: string;
  icon: string;
  tags: string[];
  desc: string;
};

export type SkillCategory = {
  cat: string;
  items: SkillItem[];
};

export type SkillItem = {
  n: string;
  icon: string;
  certified?: boolean;
};

export type Trait = {
  icon: string;
  label: string;
  desc: string;
};

export type SiteConfig = {
  initial: string;
  name: string;
  email: string;
  copyright: string;
  copyrightSub: string;
  location: string;
  footerBio: string;
  bio: string[];
  tags: string[];
  linkedin: string;
  github: string;
  linkedinUrl: string;
  githubUrl: string;
};

export type CvHighlight = {
  icon: string;
  label: string;
  val: string;
  sub: string;
};

export type Stat = {
  val: string;
  label: string;
};

export type M2Module = {
  name: string;
  ects: number;
};

export type NavLink = string;

