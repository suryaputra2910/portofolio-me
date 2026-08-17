"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  MessagesSquare,
  ScanEye,
  Clock,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { softSkills } from "@/data/skills";
import { useVariants } from "./motion-primitives";
import Languages from "./Languages";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Problem Solving": Lightbulb,
  Teamwork: Users,
  Communication: MessagesSquare,
  "Attention to Detail": ScanEye,
  "Time Management": Clock,
};

export default function SoftSkills() {
  const v = useVariants();
  const marquee = [...softSkills, ...softSkills, ...softSkills];

  return (
    <section id="beyond-code" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Human Side"
          title="Beyond Code"
          subtitle="Soft skills that make collaboration and delivery smoother."
        />

        <motion.ul
          variants={v.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {softSkills.map((s) => {
            const Icon = icons[s] ?? Lightbulb;
            return (
              <motion.li key={s} variants={v.scaleIn}>
                <div className="group inline-flex items-center gap-2.5 rounded-full border border-[#27272a] bg-[#111113]/80 px-5 py-3 transition-all hover:-translate-y-1 hover:border-violet-500/45 hover:bg-violet-500/[0.06]">
                  <Icon className="h-4 w-4 text-violet-300" aria-hidden="true" />
                  <span className="text-sm text-zinc-200">{s}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* marquee */}
        <div className="marquee-pause relative mt-12 overflow-hidden py-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050505] to-transparent sm:w-36"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050505] to-transparent sm:w-36"
          />
          <div
            aria-hidden="true"
            className="animate-marquee-reverse flex w-max items-center gap-8"
            style={{ ["--marquee-duration" as string]: "40s" }}
          >
            {marquee.map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="flex shrink-0 items-center gap-8 font-mono text-sm tracking-[0.2em] whitespace-nowrap text-zinc-600 uppercase"
              >
                {s}
                <span className="text-violet-500/60">◆</span>
              </span>
            ))}
          </div>
        </div>

        <Languages />
      </div>
    </section>
  );
}
