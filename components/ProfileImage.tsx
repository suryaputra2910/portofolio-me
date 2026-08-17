"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import TechIcon from "./TechIcon";
import type { TechKey } from "@/data/skills";
import { EASE } from "./motion-primitives";

type Floating = {
  key: TechKey;
  className: string;
  delay: number;
  hideOnMobile?: boolean;
};

const floating: Floating[] = [
  { key: "nextjs", className: "-top-4 left-2 sm:-top-6 sm:-left-6", delay: 0.6 },
  { key: "react", className: "top-1/4 -right-5 sm:-right-8", delay: 0.75 },
  {
    key: "javascript",
    className: "-bottom-4 left-8 sm:-bottom-6 sm:left-10",
    delay: 0.9,
  },
  {
    key: "git",
    className: "bottom-1/4 -left-5 sm:-left-9",
    delay: 1.05,
    hideOnMobile: true,
  },
  {
    key: "github",
    className: "-top-6 right-8 sm:-top-8 sm:right-12",
    delay: 1.2,
    hideOnMobile: true,
  },
  {
    key: "figma",
    className: "-bottom-6 right-0 sm:-bottom-8 sm:-right-6",
    delay: 1.35,
    hideOnMobile: true,
  },
];

export default function ProfileImage() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
      className="relative mx-auto w-[240px] sm:w-[300px] lg:w-[360px]"
    >
      {/* decorative ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute -inset-8 rounded-full border border-dashed border-violet-500/15 sm:-inset-10"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_65%)] blur-2xl"
      />

      <motion.div
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* gradient border */}
        <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500/70 via-indigo-500/30 to-cyan-400/60 p-[1.5px] shadow-[0_0_60px_-15px_rgba(139,92,246,0.6)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[#0b0b0d]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/foto.jpeg"
                alt="Portrait of Surya Putrahadi Yustitia"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-cyan-400/10"
            />
          </div>
        </div>

        {/* floating tech icons */}
        {floating.map((f) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: f.delay }}
            className={`absolute ${f.className} ${f.hideOnMobile ? "hidden sm:block" : ""}`}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -9, 0] }}
              transition={{
                duration: 4 + f.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: f.delay,
              }}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[#27272a] bg-[#111113]/85 backdrop-blur-md sm:h-13 sm:w-13"
            >
              <TechIcon name={f.key} className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
