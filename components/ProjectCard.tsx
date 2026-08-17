"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/projects";
import { useVariants } from "./motion-primitives";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const v = useVariants();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);

  const hasLinks = Boolean(project.github || project.demo);

  return (
    <motion.article
      ref={ref}
      variants={v.fadeUp}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border border-[#27272a] bg-[#111113]/80 transition-colors duration-500 hover:border-violet-500/40 ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(139,92,246,0.25), 0 25px 60px -25px rgba(139,92,246,0.55)",
        }}
      />

      {/* image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-[380px]" : "aspect-16/10"
        }`}
      >
        <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.role} project preview`}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 1024px) 100vw, 480px"}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/25 to-transparent"
        />

        {/* hover overlay */}
        {hasLinks && (
          <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-violet-950/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-zinc-900 transition-transform duration-300 group-hover:translate-y-0"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-transform delay-75 duration-300 group-hover:translate-y-0"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      {/* body */}
      <div className={`flex flex-col p-6 sm:p-7 ${featured ? "lg:justify-center lg:p-9" : ""}`}>
        <h3
          className={`font-semibold tracking-tight text-zinc-50 ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-lg border border-[#27272a] bg-[#18181b] px-2.5 py-1 text-[11px] text-zinc-400"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#27272a] px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-500/40 hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          {!hasLinks && (
            <span className="font-mono text-[11px] tracking-wider text-zinc-600 uppercase">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
