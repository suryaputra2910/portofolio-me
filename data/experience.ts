export type ExperienceItem = {
  year: string;
  date: string;
  title: string;
  role: string;
  description: string;
  technologies?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    year: "2026",
    date: "June 2026",
    title: "Team Website Project",
    role: "Frontend Developer",
    description:
      "Developed responsive web pages using Next.js. Collaborated with backend developers to integrate frontend and backend features.",
    technologies: ["Next.js", "Responsive Web Design", "Team Collaboration"],
  },
  {
    year: "2026",
    date: "February 2026",
    title: "Hotel Nadia Bromo Case Study",
    role: "Problem Solver",
    description:
      "Analyzed business challenges in the hospitality industry and proposed practical solutions. Presented recommendations based on team discussions and problem analysis.",
    technologies: ["Problem Solving", "Team Collaboration", "Business Analysis", "Communication"],
    },
  {
    year: "2025",
    date: "September 2025",
    title: "P5 Program SDU Permata Jingga",
    role: "Teaching Assistant",
    description:
      "Assisted in delivering project-based learning activities. Guided elementary school students during classroom sessions and group activities.",
    technologies: ["Teaching", "Student Guidance", "Project-Based Learning", "Communication"],
  },
];
