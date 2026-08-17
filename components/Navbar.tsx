"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { navItems, siteConfig } from "@/data/site";
import { EASE } from "./motion-primitives";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-[#27272a] bg-[#09090b]/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8"
        >

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-zinc-50"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-violet-500/25 bg-violet-500/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 sm:flex">
              {siteConfig.github && (
                <IconLink href={siteConfig.github} label="GitHub">
                  <GithubIcon className="h-4 w-4" />
                </IconLink>
              )}
              {siteConfig.linkedin && (
                <IconLink href={siteConfig.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </IconLink>
              )}
              <IconLink href="https://mail.google.com/mail/?view=cm&fs=1&to=suryaputrahadi29@gmail.com" label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
            </div>

            <a
              href="#contact"
              className="hidden rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-violet-400/60 md:inline-block"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#27272a] bg-[#111113]/80 text-zinc-200 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-[#27272a] bg-[#09090b]/95 p-3 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: EASE }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-zinc-600">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-2 border-t border-[#27272a] px-2 pt-3">
              {siteConfig.github && (
                <IconLink href={siteConfig.github} label="GitHub">
                  <GithubIcon className="h-4 w-4" />
                </IconLink>
              )}
              {siteConfig.linkedin && (
                <IconLink href={siteConfig.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </IconLink>
              )}
              <IconLink href="https://mail.google.com/mail/?view=cm&fs=1&to=suryaputrahadi29@gmail.com" label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconLink({
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
      className="grid h-9 w-9 place-items-center rounded-xl border border-[#27272a] bg-[#111113]/60 text-zinc-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
    >
      {children}
    </a>
  );
}
