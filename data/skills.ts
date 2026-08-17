export type TechKey =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "nextjs"
  | "react"
  | "tailwind"
  | "git"
  | "github"
  | "vercel"
  | "vscode"
  | "figma"
  | "responsive"
  | "uiux"
  | "handoff";

export type Skill = {
  key: TechKey;
  name: string;
  description: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        key: "html",
        name: "HTML",
        description: "Semantic markup and accessible document structure.",
      },
      {
        key: "css",
        name: "CSS",
        description: "Modern layouts with Flexbox, Grid and animations.",
      },
      {
        key: "javascript",
        name: "JavaScript",
        description: "Interactive logic and DOM-driven experiences.",
      },
      {
        key: "nextjs",
        name: "Next.js",
        description: "React framework for modern web applications.",
      },
      {
        key: "responsive",
        name: "Responsive Web Design",
        description: "Interfaces that adapt cleanly to every screen.",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      {
        key: "git",
        name: "Git",
        description: "Version control, branching and clean commit history.",
      },
      {
        key: "github",
        name: "GitHub",
        description: "Collaboration, pull requests and code reviews.",
      },
      {
        key: "vercel",
        name: "Vercel",
        description: "Fast deployments and preview environments.",
      },
      {
        key: "vscode",
        name: "VS Code",
        description: "Daily editor with a tuned developer workflow.",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    items: [
      {
        key: "figma",
        name: "Figma",
        description: "Wireframes, UI design and reusable components.",
      },
      {
        key: "uiux",
        name: "UI/UX",
        description: "User-centered thinking and clear visual hierarchy.",
      },
      {
        key: "handoff",
        name: "Design Handoff",
        description: "Translating design files into pixel-accurate code.",
      },
    ],
  },
];

export const marqueeTech: TechKey[] = [
  "html",
  "css",
  "javascript",
  "typescript",
  "nextjs",
  "react",
  "tailwind",
  "git",
  "github",
  "vercel",
  "figma",
];

export const techLabels: Record<TechKey, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  nextjs: "Next.js",
  react: "React",
  tailwind: "Tailwind CSS",
  git: "Git",
  github: "GitHub",
  vercel: "Vercel",
  vscode: "VS Code",
  figma: "Figma",
  responsive: "Responsive Web Design",
  uiux: "UI/UX",
  handoff: "Design Handoff",
};

export const softSkills: string[] = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Attention to Detail",
  "Time Management",
];

export const languages = [
  { name: "Indonesian", level: "Native", value: 100 },
  { name: "English", level: "Intermediate", value: 65 },
];

export const currentlyLearning: string[] = [
  "Modern Web Development",
  "Advanced Next.js",
  "Backend Integration",
  "UI/UX Design",
  "Modern Frontend Architecture",
];
