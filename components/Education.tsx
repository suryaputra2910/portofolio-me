"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarRange, MapPin, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EASE } from "./motion-primitives";

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Study"
          title="Education"
          subtitle="Where I'm building my technical foundation."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-[#27272a] bg-gradient-to-br from-[#111113] to-[#0a0a0c] p-6 sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-violet-500/25 bg-violet-500/10 text-violet-300">
              <img src="logotelkom.png" alt="logo" className="h-full w-full object-contain" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                SMK Telkom Malang
              </h3>
              <p className="mt-1.5 text-sm font-medium text-cyan-300/90">
                Software Engineering (RPL)
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip icon={CalendarRange} text="2024–2027" />
                <Chip icon={MapPin} text="Kota Malang, Jawa Timur, Indonesia" />
                <Chip icon={BookOpen} text="Vocational High School" />
              </div>

              <p className="mt-5 text-pretty text-sm leading-relaxed text-zinc-400">
                Focused on software engineering, web development, programming,
                and modern web technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#18181b] px-3 py-1.5 text-[11px] text-zinc-400">
      <Icon className="h-3.5 w-3.5" />
      {text}
    </span>
  );
}
