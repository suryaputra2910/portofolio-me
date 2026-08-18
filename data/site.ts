/**
 * Central site configuration.
 * Replace the empty strings below with your real URLs.
 * Any link left as an empty string will simply not be rendered.
 */
export const siteConfig = {
  name: "Surya Putrahadi Yustitia",
  shortName: "Surya.dev",
  role: "Software Engineering Student & Frontend Web Developer",
  location: "Kota Malang, Jawa Timur, Indonesia",
  email: "suryaputrahadi29@gmail.com",
  phone: "083857642962",
  // === Replace these later ===
  github: "",
  linkedin: "",
  cv: "", // e.g. "/cv.pdf"
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
