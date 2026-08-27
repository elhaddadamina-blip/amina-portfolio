export type Project = {
  id: number;
  title: string;
  cat: string;
  stars: number;
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
  icon: string;
  items: SkillItem[];
};

export type SkillItem = {
  n: string;
  icon: string;
};

export type Trait = {
  icon: string;
  label: string;
  desc: string;
};

export type ContactInfo = {
  icon: string;
  label: string;
  val: string;
  href: string;
};
