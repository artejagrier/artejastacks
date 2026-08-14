"use client";

import { Stagger, staggerChild } from "@/components/motion";
import { motion } from "motion/react";
import { opportunities, availability } from "@/data/opportunities";
import { accentVar } from "@/data/accents";
import { scrollToSection } from "@/components/navigation/useSectionObserver";

// "So… what should we build?" — three doors.
export function Opportunities() {
  return (
    <section id="opportunity" className="section bg-obsidian">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">13 // OPPORTUNITIES</p>
          <h2>So… what should we build?</h2>
          <p className="text-soft">Pick the door that matches the moment.</p>
        </div>

        <Stagger className="opps">
          {opportunities.map((o) => (
            <motion.div variants={staggerChild} key={o.key} className="opp surface--glow" style={{ ["--a" as string]: accentVar(o.accent) }}>
              <p className="opp__eyebrow">{o.eyebrow}</p>
              <h3>{o.title}</h3>
              <p className="opp__aud">{o.audience}</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                {o.description}
              </p>
              <ul>
                {o.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn--accent opp__cta"
                onClick={() => scrollToSection("contact")}
              >
                SEND THE PING →
              </button>
            </motion.div>
          ))}
        </Stagger>

        <div className="builder__opts" style={{ marginTop: "1.6rem" }}>
          {availability.map((a) => (
            <span key={a} className="chip">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
