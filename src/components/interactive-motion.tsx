"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function InteractiveMotion({
  children,
  className = "inline-flex",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
