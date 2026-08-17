"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ProfileImage from "./ProfileImage";
import { EASE } from "./motion-primitives";

const NAME = "Surya Putrahadi Yustitia";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.15]);

  const socials = [
    siteConfig.github && {
      href: siteConfig.github,
      label: "GitHub",
      icon: <GithubIcon className="h-[18px] w-[18px]" />,
    },
    siteConfig.linkedin && {
      href: siteConfig.linkedin,
      label: "LinkedIn",
      icon: <LinkedinIcon className="h-[18px] w-[18px]" />,
    },
   {
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=suryaputrahadi29@gmail.com",
  label: "Email",
  icon: <Mail className="h-[18px] w-[18px]" />,
},
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-5 pt-28 pb-20 sm:px-8 lg:pt-24"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        {/* LEFT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3.5 py-1.5 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Collaboration
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="mt-7 font-mono text-sm tracking-[0.2em] text-violet-300/90 uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <h1
            aria-label={NAME}
            className="mt-3 text-balance text-[2.15rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            <span aria-hidden="true">
              {NAME.split(" ").map((word, wi) => (
                <span key={word + wi} className="mr-[0.28em] inline-block">
                  {word.split("").map((ch, ci) => (
                    <motion.span
                      key={ch + ci}
                      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: reduce ? 0.01 : 0.5,
                        ease: EASE,
                        delay: reduce ? 0 : 0.28 + (wi * 5 + ci) * 0.028,
                      }}
                      className="text-gradient inline-block"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
            className="mt-5 text-lg font-medium text-zinc-300 sm:text-xl"
          >
            Software Engineering Student
            <span className="mx-2 text-violet-500">&</span>
            <span className="text-zinc-100">Junior Frontend Web Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.88 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px] lg:mx-0"
          >
            Software Engineering student at SMK Telkom Malang with a strong
            interest in frontend web development. I enjoy building responsive,
            user-friendly web applications and continuously exploring modern web
            technologies.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
            }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgba(124,58,237,0.85)] transition-transform hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              View My Projects
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.a>

            <motion.a
  variants={{
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  }}
  href="/cv/SuryaCv.pdf"
  download="SuryaCv.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#111113]/70 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-500/40 hover:text-white"
>
  <Download className="h-4 w-4" />
  Download CV
</motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.11, delayChildren: 1.25 } },
            }}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
                }}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-[#27272a] bg-[#111113]/70 text-zinc-400 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-300"
              >
                {s.icon}
              </motion.a>
            ))}

            <span className="ml-2 hidden items-center gap-1.5 text-xs text-zinc-500 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5" />
              {siteConfig.location}
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="order-1 lg:order-2">
          <ProfileImage />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-violet-300 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
