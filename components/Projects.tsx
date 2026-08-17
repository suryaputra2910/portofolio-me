"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useVariants } from "./motion-primitives";

export default function Projects() {
  const v = useVariants();

  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="A selection of projects I've worked on."
        />

        <motion.div
          variants={v.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} featured={p.featured} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
