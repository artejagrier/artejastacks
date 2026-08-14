"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { teachingTopics, teachingPhilosophy } from "@/data/teaching";
import { accentVar } from "@/data/accents";

// Interactive classroom: tap a key to get a tiny, real lesson from Arteja.
export function Classroom() {
  const [activeKey, setActiveKey] = useState(teachingTopics[0].key);
  const reduce = useReducedMotion();
  const active = teachingTopics.find((t) => t.key === activeKey)!;
  const index = teachingTopics.findIndex((t) => t.key === activeKey);

  const Panel = (
    <div className="lesson" style={{ ["--a" as string]: accentVar(active.accent) }}>
      <p className="lesson__num">
        LESSON {String(index + 1).padStart(2, "0")} / {String(teachingTopics.length).padStart(2, "0")} — {active.oneLiner}
      </p>
      <h3>{active.label}</h3>
      <p>{active.lesson}</p>
    </div>
  );

  return (
    <section id="teach" className="section bg-obsidian" style={{ ["--a" as string]: accentVar(active.accent) }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">09 // TEACH</p>
          <h2>Then I started teaching other people.</h2>
          <p className="text-soft">
            {teachingPhilosophy.lead} I teach Full Stack Development to {teachingPhilosophy.audiences.slice(0, 4).join(", ")}, and
            anyone breaking into tech. Tap a key — learn something.
          </p>
        </div>

        <div className="class">
          <div className="class__keys" role="tablist" aria-label="Lessons">
            {teachingTopics.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={t.key === activeKey}
                className={`key ${t.key === activeKey ? "is-active" : ""}`}
                style={{ ["--a" as string]: accentVar(t.accent) }}
                onClick={() => setActiveKey(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {reduce ? (
            Panel
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {Panel}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <p className="text-soft" style={{ marginTop: "1.6rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
          Technology becomes more powerful when more people understand how to create with it.
        </p>
      </div>
    </section>
  );
}
