export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "ai"
  | "tools"
  | "languages"
  | "frameworks";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  github: string;
  liveDemo: string;
  category: ProjectCategory;
  featured: boolean;
}

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "ai";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
