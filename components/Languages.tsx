"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { languages } from "@/data/skills";
import { EASE } from "./motion-primitives";

export default function Languages() {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2">
      {languages.map((lang, i) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
          className="rounded-2xl border border-[#27272a] bg-[#111113]/70 p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100">
              <LanguagesIcon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {lang.name}
            </span>
            <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
              {lang.level}
            </span>
          </div>

          <div
            className="mt-4 flex gap-1.5"
            role="img"
            aria-label={`${lang.name} proficiency: ${lang.level}`}
          >
            {Array.from({ length: 10 }).map((_, idx) => {
              const filled = idx < Math.round(lang.value / 10);
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scaleY: 0.3 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.35, ease: EASE, delay: 0.2 + idx * 0.045 }}
                  className={`h-1.5 flex-1 rounded-full ${
                    filled
                      ? "bg-gradient-to-r from-violet-500 to-cyan-400"
                      : "bg-[#27272a]"
                  }`}
                />
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
