"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";
import { EASE, useVariants } from "./motion-primitives";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const v = useVariants();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          subtitle="Things I've worked on and experiences that shaped my journey."
        />

        <div ref={ref} className="relative mt-16 md:mt-20">
          {/* line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[15px] w-px bg-[#27272a] md:left-1/2 md:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-[15px] w-px origin-top bg-gradient-to-b from-violet-500 via-indigo-400 to-cyan-400 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-4">
            {experiences.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li key={item.title} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* dot */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="absolute top-7 left-[9px] z-10 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-violet-400 shadow-[0_0_0_4px_rgba(139,92,246,0.18)] md:left-1/2 md:-translate-x-1/2"
                  />

                  <motion.div
                    variants={left ? v.slideLeft : v.slideRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`pl-11 md:pl-0 ${
                      left ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#111113]/80 p-5 transition-colors hover:border-violet-500/40 sm:p-6">
                      <div
                        aria-hidden="true"
                        className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-600/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div
                        className={`flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#27272a] bg-[#18181b] text-violet-300">
                          <Briefcase className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-violet-200">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-cyan-300/90">
                        {item.role}
                      </p>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>

                      {item.technologies && (
                        <ul
                          className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}
                        >
                          {item.technologies.map((t) => (
                            <li
                              key={t}
                              className="rounded-lg border border-[#27272a] bg-[#18181b] px-2.5 py-1 text-[11px] text-zinc-400"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
