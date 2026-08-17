"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { CalendarRange, Code2, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Reveal, useVariants } from "./motion-primitives";

const facts = [
  { icon: GraduationCap, label: "Education", value: "SMK Telkom Malang" },
  { icon: Code2, label: "Major", value: "Software Engineering (RPL)" },
  { icon: CalendarRange, label: "Period", value: "2024–2027" },
  { icon: MapPin, label: "Location", value: siteConfig.location },
];

const stats = [
  { value: "3+", label: "Projects" },
  { value: "2026", label: "Frontend Developer" },
  { value: "Next.js", label: "Main Framework" },
];

export default function About() {
  const v = useVariants();

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="A little bit about me"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#27272a] bg-[#111113]">
              <div className="relative aspect-4/5 w-full sm:aspect-square lg:aspect-4/5">
                <Image
                  src="/about.jpg"
                  alt="Surya working on a frontend project at his desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ y: "0%" }}
                whileInView={{ y: "-102%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
                className="absolute inset-0 bg-[#050505]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"
              />
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-[11px] tracking-widest text-cyan-300 uppercase">
                  Currently
                </p>
                <p className="mt-1 text-sm text-zinc-200">
                  Building interfaces with Next.js
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.22),transparent_60%)] blur-2xl"
            />
          </motion.div>

          {/* content */}
          <div>
            <Reveal variant="slideRight">
              <p className="text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
                I&apos;m a Software Engineering student at{" "}
                <span className="text-violet-300">SMK Telkom Malang</span> with a
                strong interest in frontend web development. I&apos;m passionate
                about creating responsive interfaces, solving problems through
                technology, and continuously learning modern web development
                tools.
              </p>
            </Reveal>

            <motion.ul
              variants={v.container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              {facts.map((f) => (
                <motion.li
                  key={f.label}
                  variants={v.fadeUp}
                  className="group flex items-start gap-3 rounded-2xl border border-[#27272a] bg-[#111113]/70 p-4 transition-colors hover:border-violet-500/35"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#27272a] bg-[#18181b] text-violet-300 transition-colors group-hover:border-violet-500/40">
                    <f.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                      {f.label}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-200">
                      {f.value}
                    </span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={v.container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid grid-cols-3 gap-3 overflow-hidden rounded-2xl border border-[#27272a] bg-gradient-to-br from-[#111113] to-[#0b0b0d] p-1"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={v.scaleIn}
                  className="rounded-xl px-2 py-5 text-center"
                >
                  <p className="text-gradient text-lg font-semibold tracking-tight sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
