"use client";

import { useReducedMotion } from "motion/react";
import { globalWork } from "@/data/connections";
import { profile } from "@/data/profile";

// Abstract globe: latitude/longitude arcs + orbiting signal dots + connection
// pings. No real countries, clients, or maps fabricated — it's a feeling of
// distributed, cross-border work.
function Globe() {
  const reduce = useReducedMotion();
  return (
    <div className="globe" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.14)" />
        {/* longitude ellipses */}
        {[20, 45, 70].map((rx) => (
          <ellipse key={`lo-${rx}`} cx="100" cy="100" rx={rx} ry="80" fill="none" stroke="rgba(255,255,255,0.1)" />
        ))}
        {/* latitude lines */}
        {[-50, -25, 0, 25, 50].map((off) => {
          const ry = Math.sqrt(Math.max(0, 80 * 80 - off * off));
          return <ellipse key={`la-${off}`} cx="100" cy={100 + off} rx={ry} ry={ry * 0.28} fill="none" stroke="rgba(255,255,255,0.08)" />;
        })}
        {/* rotating group of nodes + arcs */}
        <g className={reduce ? "" : "anim-spin"} style={{ transformOrigin: "100px 100px" }}>
          {[
            [60, 70, "var(--accent-cyan)"],
            [140, 90, "var(--accent-violet)"],
            [95, 150, "var(--accent-emerald)"],
            [120, 55, "var(--accent-orange)"],
            [55, 120, "var(--accent-pink)"],
          ].map(([x, y, c], i) => (
            <g key={i}>
              <circle cx={x as number} cy={y as number} r="2.6" fill={c as string} />
              <path
                d={`M ${x} ${y} Q 100 100 ${200 - (x as number)} ${200 - (y as number)}`}
                fill="none"
                stroke={c as string}
                strokeWidth="0.6"
                opacity="0.4"
              />
            </g>
          ))}
        </g>
        <circle cx="100" cy="100" r="3" fill="#f6f4ef" />
      </svg>
    </div>
  );
}

export function World() {
  return (
    <section id="world" className="section bg-dark" style={{ ["--a" as string]: "var(--accent-cyan)" }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">12 // GLOBAL</p>
          <h2>My office moves. My standards don&apos;t.</h2>
          <p className="text-soft">{profile.locationLine}</p>
        </div>

        <div className="world">
          <Globe />
          <div className="world__list">
            {globalWork.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
