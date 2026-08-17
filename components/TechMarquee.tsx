"use client";

import TechIcon from "./TechIcon";
import { marqueeTech, techLabels } from "@/data/skills";

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="marquee-pause relative w-full overflow-hidden py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent sm:w-40"
      />

      <ul
        className="animate-marquee flex w-max items-center gap-3 sm:gap-4"
        style={{ ["--marquee-duration" as string]: "45s" }}
        aria-label="Technologies I work with"
      >
        {items.map((key, i) => (
          <li
            key={`${key}-${i}`}
            aria-hidden={i >= marqueeTech.length}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#27272a] bg-[#111113]/70 px-4 py-2.5 sm:px-5 sm:py-3"
          >
            <TechIcon name={key} className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs font-medium whitespace-nowrap text-zinc-300 sm:text-sm">
              {techLabels[key]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
