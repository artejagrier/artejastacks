"use client";

import { Reveal, Stagger, staggerChild } from "@/components/motion";
import { motion } from "motion/react";
import { impactAreas } from "@/data/connections";

// Mission, not charity. "Build people, too."
export function Impact() {
  return (
    <section id="impact" className="section bg-dark" style={{ ["--a" as string]: "var(--accent-emerald)" }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">10 // THE MISSION</p>
          <h2>Build people, too.</h2>
          <p className="text-soft">
            I care about what technology can do for people who haven&apos;t always had access to the rooms
            where technology gets built. So I try to open those rooms.
          </p>
        </div>

        <Stagger className="impact-grid">
          {impactAreas.map((a) => (
            <motion.article key={a.title} variants={staggerChild} className="surface impact-card surface--accent">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </motion.article>
          ))}
        </Stagger>

        <Reveal>
          <p
            className="ai-philo"
            style={{ marginTop: "clamp(2.5rem,6vw,4.5rem)", ["--a" as string]: "var(--accent-emerald)" }}
          >
            Technology becomes more powerful <b>when more people can build with it.</b>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
