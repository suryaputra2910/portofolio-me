import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Surya Putrahadi Yustitia | Frontend Web Developer";
const description =
  "Portfolio of Surya Putrahadi Yustitia, a Software Engineering student and frontend web developer from Malang.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: title,
    template: "%s | Surya Putrahadi Yustitia",
  },
  description,
  keywords: [
    "Surya Putrahadi Yustitia",
    "Frontend Developer",
    "Next.js Developer",
    "Software Engineering",
    "SMK Telkom Malang",
    "Web Developer Malang",
  ],
  authors: [{ name: "Surya Putrahadi Yustitia" }],
  creator: "Surya Putrahadi Yustitia",
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "Surya Putrahadi Yustitia",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Putrahadi Yustitia — Frontend Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-[#050505] font-sans text-zinc-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
