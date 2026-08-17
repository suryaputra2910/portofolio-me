"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X, Maximize2, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certificates, type Certificate } from "@/data/certificates";
import { EASE, useVariants } from "./motion-primitives";

export default function Certificates() {
  const v = useVariants();
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Certifications and learning experiences."
        />

        <motion.ul
          variants={v.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((c) => {
            const clickable = Boolean(c.image);
            return (
              <motion.li key={c.title} variants={v.fadeUp}>
                <motion.div
                  whileHover={v.reduce ? undefined : { y: -8, rotate: -1.2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-[#27272a] bg-[#111113]/80 p-6 transition-colors hover:border-cyan-400/35 hover:shadow-[0_25px_60px_-30px_rgba(34,211,238,0.6)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-20 -left-20 h-44 w-44 rounded-full bg-cyan-500/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {c.image ? (
                    <div className="relative mb-5 aspect-16/10 overflow-hidden rounded-xl border border-[#27272a]">
                      <Image
                        src={c.image}
                        alt={`${c.title} certificate`}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#27272a] bg-[#18181b] text-cyan-300">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-[#27272a] bg-[#18181b] px-3 py-1 font-mono text-[11px] text-zinc-400">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base leading-snug font-semibold text-zinc-50">
                    {c.title}
                  </h3>
                  {c.subtitle && (
                    <p className="mt-1 text-sm font-medium text-violet-300/90">
                      {c.subtitle}
                    </p>
                  )}
                  <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-zinc-500">
                    <BadgeCheck className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {c.issuer}
                  </p>

                  {clickable && (
                    <button
                      type="button"
                      onClick={() => setActive(c)}
                      aria-label={`Preview ${c.title} certificate`}
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#27272a] px-3.5 py-1.5 text-[11px] font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Preview
                    </button>
                  )}
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      <AnimatePresence>
        {active && active.image && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} preview`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[#27272a] bg-[#0b0b0d]"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-16/11 w-full">
                <Image
                  src={active.image}
                  alt={`${active.title} certificate, issued by ${active.issuer}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-[#27272a] p-4">
                <p className="text-sm font-medium text-zinc-100">{active.title}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {active.issuer} · {active.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
