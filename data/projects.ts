export type Project = {
  title: string;
  description: string;
  role: string;
  image: string;
  technologies: string[];
  /** Leave empty to hide the button */
  github: string;
  /** Leave empty to hide the button */
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Train Ticket Booking",
    role: "Frontend Developer",
    description:
      "Designed and developed the frontend interface for a train ticket booking website.",
    image: "/projects/pesantiket.png",
    technologies: ["Tailwind CSS", "Next.js", "Vercel", "GitHub"],
    github: "https://github.com/suryaputra2910/2026-Ukl",
    demo: "https://keretaproject.vercel.app",
    featured: true,
  },
  {
    title: "Admin Dashboard - Online Store CRUD",
    role: "Frontend & Backend Developer",
    description:
      "Developed frontend and backend features for a CRUD-based online store application.",
    image: "/projects/adminDshbrd.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel/API",
      "MySQL",
      "GitHub",
      "Vercel",
    ],
    github: "https://github.com/suryaputra2910/Toko-Online",
    demo: "https://toko-online-v2-seven.vercel.app/",
  },
  {
    title: "Sketchtoon",
    role: "UI/Frontend Designer",
    description:
      "Designed the website interface using Figma and created a user-friendly layout.",
    image: "/projects/skeetchtoon.png",
    technologies: ["Figma", "UI/UX", "Frontend"],
    github: "",
    demo: "",
  },
];
