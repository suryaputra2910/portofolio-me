"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion-primitives";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-4 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        {isCenter && (
          <motion.span
            className="h-px flex-1 max-w-[160px] origin-right bg-gradient-to-l from-violet-500/60 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
        )}
        <motion.span
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-violet-300/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {eyebrow}
        </motion.span>
        <motion.span
          className={`h-px flex-1 max-w-[160px] origin-left bg-gradient-to-r ${
            isCenter ? "from-violet-500/60" : "from-violet-500/60"
          } to-transparent`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      </div>

      <motion.h2
        className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-[2.75rem]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-4 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
