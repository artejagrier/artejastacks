"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const lines = [
  "loading curiosity...",
  "mounting components...",
  "connecting ideas...",
  "ignoring 3 good ideas for later...",
  "ready.",
];

// Short, once-per-session loader. Never blocks navigation; skipped entirely
// under reduced motion or if already seen this session.
export function Loader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("as_loaded")) return;

    const timers: number[] = [];
    // defer the reveal one tick so we don't setState synchronously in the effect
    timers.push(window.setTimeout(() => setVisible(true), 0));
    lines.forEach((_, i) => {
      timers.push(window.setTimeout(() => setStep(i + 1), 260 * (i + 1)));
    });
    const done = window.setTimeout(() => {
      sessionStorage.setItem("as_loaded", "1");
      setVisible(false);
    }, 260 * lines.length + 500);
    timers.push(done);

    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <p className="loader__brand">
            ARTEJA<span>{"//"}</span>STACKS
          </p>
          <div className="loader__lines">
            {lines.slice(0, step).map((l, i) => (
              <span key={l}>
                {i === step - 1 ? <b>›</b> : "›"} {l}
              </span>
            ))}
          </div>
          <div className="loader__bar">
            <i style={{ width: `${(step / lines.length) * 100}%`, transition: "width 240ms ease" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
