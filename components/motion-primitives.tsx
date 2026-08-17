"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function useVariants() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 * d },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.01 : 0.7, ease: EASE } },
  };
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: reduce ? 0.01 : 0.8, ease: EASE } },
  };
  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 * d },
    show: { opacity: 1, x: 0, transition: { duration: reduce ? 0.01 : 0.7, ease: EASE } },
  };
  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 * d },
    show: { opacity: 1, x: 0, transition: { duration: reduce ? 0.01 : 0.7, ease: EASE } },
  };
  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: reduce ? 0.01 : 0.8, ease: EASE } },
  };
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: reduce ? 0 : 0.05 } },
  };

  return { fadeUp, fadeIn, slideLeft, slideRight, scaleIn, container, reduce };
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
}) {
  const v = useVariants();
  return (
    <motion.div
      className={className}
      variants={v[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: v.reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
