"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { connectionNodes, connectionCenter } from "@/data/connections";
import { accentHex, accentVar } from "@/data/accents";

// A people-network: ARTEJA at the center, node types orbiting. Edges draw
// themselves as the section enters view.
//   HOVER  → subtle highlight only (no panel, no ring, nothing obscured).
//   CLICK  → select the node: a slim ring, a brighter link to ARTEJA, a
//            stronger label, and the explanation in ONE dedicated area below
//            the network. Clicking another node replaces the details.
// No oversized bubbles or overlays around the node itself.
export function Connections() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const current = connectionNodes.find((n) => n.id === selected) ?? null;

  function selectNode(id: string) {
    setSelected((prev) => (prev === id ? null : id));
  }

  return (
    <section id="connections" className="section bg-obsidian" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">11 // THE NETWORK</p>
          <h2>The internet connected computers. I like connecting people.</h2>
          <p className="text-soft">
            Some of the best things in technology happen when the right people find each other. Tap a
            node — see what that connection actually means to me.
          </p>
        </div>

        <div className="net">
          <svg viewBox="0 0 100 100" role="img" aria-label="Network of people Arteja connects: developers, founders, students, creators, communities, nonprofits, startups, educators, technologists.">
            {/* edges from center to each node — brighter only for the selected */}
            {connectionNodes.map((n, i) => {
              const lit = selected === n.id;
              const dim = selected !== null && !lit;
              return (
                <motion.line
                  key={`e-${n.id}`}
                  x1={connectionCenter.x}
                  y1={connectionCenter.y}
                  x2={n.x}
                  y2={n.y}
                  className={`net__edge ${lit ? "is-lit" : ""}`}
                  style={{ opacity: dim ? 0.2 : 1 }}
                  initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                  whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
                />
              );
            })}

            {/* subtle inter-node arcs to feel like a mesh */}
            {connectionNodes.map((n, i) => {
              const m = connectionNodes[(i + 2) % connectionNodes.length];
              const faded = selected !== null;
              return (
                <line
                  key={`m-${n.id}`}
                  x1={n.x}
                  y1={n.y}
                  x2={m.x}
                  y2={m.y}
                  className="net__edge"
                  style={{ opacity: faded ? 0.08 : 0.18 }}
                />
              );
            })}

            {/* outer nodes */}
            {connectionNodes.map((n) => {
              const isSelected = selected === n.id;
              const isHovered = hovered === n.id;
              const dim = selected !== null && !isSelected;
              const color = accentHex[n.accent];
              return (
                <g
                  key={n.id}
                  className="net__node"
                  style={{ cursor: "pointer", opacity: dim ? 0.4 : 1, transition: "opacity 200ms ease" }}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => {
                    setHovered(n.id);
                    setFocused(n.id);
                  }}
                  onBlur={() => {
                    setHovered(null);
                    setFocused(null);
                  }}
                  onClick={() => selectNode(n.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      selectNode(n.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${n.label} — ${n.headline ?? "see how Arteja connects"}`}
                >
                  {/* slim, color-matched ring — the only selected-state shape.
                      No pulsing blob/pop-up over the node. */}
                  {isSelected && (
                    <circle cx={n.x} cy={n.y} r="3.4" fill="none" stroke={color} strokeWidth="0.35" opacity="0.95" />
                  )}
                  {/* small CIRCULAR keyboard-focus ring (replaces the default
                      focus rectangle, which is removed via CSS). Never a pill. */}
                  {focused === n.id && !isSelected && (
                    <circle cx={n.x} cy={n.y} r="3.4" fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="1.2 1" opacity="0.9" />
                  )}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isSelected ? 2.6 : isHovered ? 2.5 : 2.2}
                    fill={color}
                    opacity={isHovered && !isSelected ? 1 : 0.92}
                    style={{ transition: "r 160ms ease" }}
                  />
                  <text
                    className="net__label"
                    x={n.x}
                    y={n.y - 4}
                    textAnchor="middle"
                    style={{ fill: isSelected || isHovered ? "var(--pearl)" : undefined }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}

            {/* center */}
            <circle cx={connectionCenter.x} cy={connectionCenter.y} r="5.5" fill="none" stroke={accentHex.violet} strokeWidth="0.6" className={reduce ? "" : "anim-pulse"} />
            <circle cx={connectionCenter.x} cy={connectionCenter.y} r="3.4" fill={accentHex.violet} />
            <text className="net__center-label" x={connectionCenter.x} y={connectionCenter.y - 8} textAnchor="middle">
              {connectionCenter.label}
            </text>
          </svg>
        </div>

        {/* the single dedicated details area — below the network, never over it */}
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={current.id}
              className="net-panel"
              style={{ ["--a" as string]: accentVar(current.accent) }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="net-panel__head">
                <span className="net-panel__cat">
                  <span className="chip__dot" aria-hidden="true" />
                  {current.label}
                </span>
                <button type="button" className="net-panel__pin" onClick={() => setSelected(null)}>
                  close ✕
                </button>
              </div>
              <h3 className="net-panel__headline">{current.headline}</h3>
              <p className="text-soft">{current.description}</p>
              {current.how && (
                <>
                  <p className="net-panel__label">How I connect</p>
                  <div className="builder__opts">
                    {current.how.map((h) => (
                      <span key={h} className="chip">
                        {h}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {current.micro && <p className="net-panel__micro">{current.micro}</p>}
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              className="net-panel__hint"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ↑ Pick a node to see what that connection means to me.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
