"use client";

import { motion, useReducedMotion } from "motion/react";
import { scrollToSection } from "@/components/navigation/useSectionObserver";

// End-of-page, on-brand return-to-top. Pulses once when it scrolls into view
// (the "you reached the bottom" moment) — never continuously.
export function RunItBack() {
  const reduce = useReducedMotion();
  return (
    <div className="runback">
      <motion.button
        type="button"
        className="btn btn--accent runback__btn"
        style={{ ["--a" as string]: "var(--accent-emerald)" }}
        onClick={() => scrollToSection("home")}
        initial={reduce ? undefined : { scale: 1 }}
        whileInView={reduce ? undefined : { scale: [1, 1.06, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        aria-label="Run it back — scroll to the top"
      >
        RUN IT BACK ↑
      </motion.button>
      <p className="runback__note">You made it to production. Want to see the source again?</p>
      <p className="runback__cmd">$ cd /home</p>
    </div>
  );
}
