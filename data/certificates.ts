export type Certificate = {
  title: string;
  subtitle?: string;
  issuer: string;
  year: string;
  /** Optional image, e.g. "/certificates/frontend.jpg". Leave empty for a styled placeholder. */
  image?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Frontend Developer Competency Certification",
    subtitle: "Next.js & NestJS",
    issuer: "SMK Telkom Malang",
    year: "2026",
    image: "",
  },
  {
    title: "UI/UX Design Bootcamp",
    issuer:
      "NextFrame, Faculty Technology Information, Universitas Negeri Malang",
    year: "2025",
    image: "",
  },
  {
    title: "Cyber Security Awareness",
    issuer: "SMK Telkom Malang",
    year: "2024",
    image: "",
  },
];
