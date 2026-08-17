"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TechIcon, { techColor } from "./TechIcon";
import { skillGroups, type Skill } from "@/data/skills";
import { useVariants } from "./motion-primitives";
import TechMarquee from "./TechMarquee";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const v = useVariants();
  const color = techColor(skill.key);

  return (
    <motion.li
      variants={v.fadeUp}
      whileHover={v.reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-[#27272a] bg-[#111113]/80 p-5 transition-colors duration-300 group-hover:border-violet-500/40">
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: color }}
        />
        <motion.div
          whileHover={v.reduce ? undefined : { rotate: -8, scale: 1.12 }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
          className="grid h-12 w-12 place-items-center rounded-xl border border-[#27272a] bg-[#18181b]"
        >
          <TechIcon name={skill.key} className="h-6 w-6" />
        </motion.div>

        <h3 className="mt-4 text-sm font-semibold text-zinc-100 sm:text-base">
          {skill.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 sm:text-[13px]">
          {skill.description}
        </p>

        <span className="absolute top-4 right-4 font-mono text-[10px] text-zinc-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.li>
  );
}

export default function Skills() {
  const v = useVariants();

  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skill"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build modern web experiences."
        />

        <div className="mt-16 space-y-14">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="font-mono text-[11px] tracking-[0.3em] text-zinc-400 uppercase">
                  {group.label}
                </h3>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px flex-1 origin-left bg-gradient-to-r from-[#27272a] to-transparent"
                />
              </div>

              <motion.ul
                variants={v.container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
              >
                {group.items.map((skill, i) => (
                  <SkillCard key={skill.key} skill={skill} index={i} />
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <TechMarquee />
      </div>
    </section>
  );
}
