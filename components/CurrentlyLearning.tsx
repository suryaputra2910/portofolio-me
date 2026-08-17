"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { currentlyLearning } from "@/data/skills";
import { useVariants } from "./motion-primitives";

export default function CurrentlyLearning() {
  const v = useVariants();

  return (
    <section id="learning" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Growth"
          title="Currently Learning"
          subtitle="What I'm exploring right now to level up my craft."
        />

        <motion.ul
          variants={v.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentlyLearning.map((item, i) => (
            <motion.li
              key={item}
              variants={v.fadeUp}
              className="group flex items-center gap-3 rounded-2xl border border-[#27272a] bg-[#111113]/75 p-4 transition-all hover:-translate-y-1 hover:border-cyan-400/35"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#27272a] bg-[#18181b] font-mono text-[11px] text-cyan-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-zinc-200">{item}</span>
              <Rocket
                className="ml-auto h-4 w-4 shrink-0 text-zinc-700 transition-colors group-hover:text-violet-400"
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-violet-500/20 bg-[#0b0b0d] p-8 text-center sm:p-12"
        >
          <div
            aria-hidden="true"
            className="animate-pulse-glow absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(139,92,246,0.35),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          />
          <div className="relative">
            <Sparkles className="mx-auto h-6 w-6 text-violet-300" aria-hidden="true" />
            <p className="text-gradient mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
              Always learning. Always building.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
              Every project is a chance to write cleaner code and design better
              experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
