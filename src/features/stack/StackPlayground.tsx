"use client";

import { useMemo, useState } from "react";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import { accentVar } from "@/data/accents";

// Deterministic scattered layout — grouped loosely so related tech sits nearby,
// but visually organic rather than a boring grid.
function layout() {
  const cols = 4;
  return technologies.map((t, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = ((i * 37) % 9) - 4;
    const jitterY = ((i * 53) % 8) - 4;
    return {
      ...t,
      x: 16 + col * 22 + jitterX,
      y: 12 + row * 18 + jitterY,
    };
  });
}

export function StackPlayground() {
  const nodes = useMemo(() => layout(), []);
  const [activeId, setActiveId] = useState(nodes[0].id);
  const active = nodes.find((n) => n.id === activeId)!;

  const relatedProjects = projects.filter((p) =>
    p.stack.some((s) => s.toLowerCase().includes(active.name.toLowerCase())),
  );

  const edges = nodes.flatMap((n) =>
    n.related
      .map((rid) => nodes.find((m) => m.id === rid))
      .filter((m): m is (typeof nodes)[number] => Boolean(m))
      .map((m) => ({ a: n, b: m, key: `${n.id}-${m.id}` })),
  );

  return (
    <section id="stack" className="section bg-dark" style={{ ["--a" as string]: accentVar(active.accent) }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">05 // THE STACK</p>
          <h2>Not a wall of logos. A map of how it connects.</h2>
          <p className="text-soft">
            Tap a technology to light up what it talks to, what I use it for, and where it shows up.
            No fake skill percentages — just how comfortable I actually am.
          </p>
        </div>

        <div className="stack">
          <div className="stack__canvas" role="group" aria-label="Technology graph">
            <svg className="stack__svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {edges.map((e) => {
                const lit = e.a.id === activeId || e.b.id === activeId;
                return (
                  <line
                    key={e.key}
                    x1={e.a.x}
                    y1={e.a.y}
                    x2={e.b.x}
                    y2={e.b.y}
                    className={`stack__edge ${lit ? "is-lit" : ""}`}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>
            {nodes.map((n) => {
              const isActive = n.id === activeId;
              const isRelated = active.related.includes(n.id);
              return (
                <button
                  key={n.id}
                  type="button"
                  className={`stack__node ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, ["--a" as string]: accentVar(n.accent) }}
                  onClick={() => setActiveId(n.id)}
                  aria-pressed={isActive}
                >
                  <span className="chip__dot" aria-hidden="true" />
                  {n.name}
                </button>
              );
            })}
          </div>

          <div className="stack__detail">
            <p className="eyebrow eyebrow--a">{active.category}</p>
            <h3>{active.name}</h3>
            <p className="text-soft" style={{ marginTop: "0.6rem" }}>
              {active.use}
            </p>
            <p className="stack__meta">Comfort</p>
            <p className="text-soft">{active.comfort}</p>
            <p className="stack__meta">Where it shows up</p>
            <p className="text-soft">
              {relatedProjects.length
                ? relatedProjects.map((p) => p.title).join(" · ")
                : "Linked to project data as verified case studies are added."}
            </p>
            {active.related.length > 0 && (
              <>
                <p className="stack__meta">Talks to</p>
                <div className="builder__opts">
                  {active.related.map((rid) => {
                    const r = nodes.find((m) => m.id === rid);
                    if (!r) return null;
                    return (
                      <button
                        key={rid}
                        type="button"
                        className="chip chip--btn"
                        style={{ ["--a" as string]: accentVar(r.accent) }}
                        onClick={() => setActiveId(rid)}
                      >
                        {r.name}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
