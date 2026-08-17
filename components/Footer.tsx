"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-[#27272a] px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-lg font-semibold text-zinc-100">
              <span className="text-violet-400">{"<"}</span>Surya
              <span className="text-cyan-300">.dev</span>
              <span className="text-violet-400">{" />"}</span>
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-300">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-sm text-sm text-zinc-500">
              Software Engineering Student & Frontend Web Developer based in{" "}
              {siteConfig.location}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 md:grid-cols-1">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-violet-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase">
              Connect
            </h2>
            <div className="mt-4 flex gap-2">
              {siteConfig.github && (
                <FooterIcon href={siteConfig.github} label="GitHub">
                  <GithubIcon className="h-4 w-4" />
                </FooterIcon>
              )}
              {siteConfig.linkedin && (
                <FooterIcon href={siteConfig.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </FooterIcon>
              )}
              <FooterIcon href={`mailto:${siteConfig.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </FooterIcon>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-zinc-400 transition-colors hover:text-violet-300"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#27272a] pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with{" "}
            <span className="text-zinc-400">Next.js</span>,{" "}
            <span className="text-zinc-400">TypeScript</span> &{" "}
            <span className="text-zinc-400">Tailwind CSS</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            whileHover={{ y: -3 }}
            className="fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-violet-500/30 bg-[#111113]/85 text-violet-200 shadow-[0_10px_35px_-12px_rgba(139,92,246,0.8)] backdrop-blur-md sm:right-8 sm:bottom-8"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid h-10 w-10 place-items-center rounded-xl border border-[#27272a] bg-[#111113] text-zinc-400 transition-all hover:-translate-y-1 hover:border-violet-500/40 hover:text-violet-300"
    >
      {children}
    </a>
  );
}
