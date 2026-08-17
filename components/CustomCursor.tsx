"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 45, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 900, damping: 45, mass: 0.25 });
  const rx = useSpring(x, { stiffness: 170, damping: 22, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 170, damping: 22, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;
    document.documentElement.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setEnabled(true);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setHovering(
        !!t?.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]'),
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -ml-[3px] -mt-[3px]"
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-violet-300" />
      </motion.div>
      <motion.div
        style={{ x: rx, y: ry }}
        className="absolute -ml-5 -mt-5"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.7 : 1,
        }}
        transition={{ duration: 0.22 }}
      >
        <div
          className={`h-10 w-10 rounded-full border transition-colors duration-200 ${
            hovering
              ? "border-cyan-300/70 bg-cyan-300/10"
              : "border-violet-400/45"
          }`}
        />
      </motion.div>
    </div>
  );
}
