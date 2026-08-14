"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import { accentVar } from "@/data/accents";
import { aiAreas, aiLabSections, aiPhilosophy } from "@/data/ai";
import type { AccentKey } from "@/types/portfolio";
import { NeuralField } from "./NeuralField";

// Interactive lenses onto AI. Each spotlights a layer of the neural field and
// emphasises the related areas. All content is accurate to Arteja's stated
// focus — no invented AI projects.
type Mode = {
  key: string;
  label: string;
  accent: AccentKey;
  layer: number;
  headline: string;
  body: string;
  areas: string[];
};

const modes: Mode[] = [
  {
    key: "analyze",
    label: "ANALYZE",
    accent: "blue",
    layer: 0,
    headline: "Start with the task, not the model.",
    body: "What does the work actually need, what's the risk, and what is the data really saying? The model is one input — the analysis is the job.",
    areas: ["AI Analysis", "Emerging Technology"],
  },
  {
    key: "implement",
    label: "IMPLEMENT",
    accent: "violet",
    layer: 1,
    headline: "Make it real, responsibly.",
    body: "Wiring language models into products with structure, guardrails, and review steps — including AI-assisted development in my own workflow.",
    areas: ["AI Implementation", "LLM Applications", "AI-Assisted Development"],
  },
  {
    key: "govern",
    label: "GOVERN",
    accent: "emerald",
    layer: 2,
    headline: "Who checks the output?",
    body: "How AI should be implemented, reviewed, and kept accountable — so a system stays explainable and a human still owns the decision.",
    areas: ["AI Governance", "Responsible AI"],
  },
  {
    key: "secure",
    label: "SECURE",
    accent: "red",
    layer: 3,
    headline: "Where it breaks, leaks, or gets manipulated.",
    body: "Applying a security mindset to AI systems: what can go wrong, who's affected, and how it should fail safely. Rooted in cybersecurity study.",
    areas: ["AI Security"],
  },
  {
    key: "automate",
    label: "AUTOMATE",
    accent: "orange",
    layer: 1,
    headline: "Let AI carry the boring, repeatable part.",
    body: "Human-in-the-loop workflows where the model handles the repetitive load and a person stays on the decisions that matter.",
    areas: ["AI Workflows", "AI Automation"],
  },
  {
    key: "explore",
    label: "EXPLORE",
    accent: "pink",
    layer: 2,
    headline: "Don't fear the evolution.",
    body: "Generative AI and emerging technology, treated as something to understand and build with — not something to be afraid of.",
    areas: ["Generative AI", "Emerging Technology"],
  },
];

export function AILab() {
  const [modeKey, setModeKey] = useState(modes[0].key);
  const mode = modes.find((m) => m.key === modeKey)!;
  const hot = new Set(mode.areas);

  return (
    <section id="ai" className="section bg-dark" style={{ ["--a" as string]: accentVar(mode.accent) }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">08 // THE EVOLUTION</p>
          <h2>And then the internet changed again.</h2>
          <p className="text-soft">
            I work closely with AI because I believe technology should keep evolving. Not just what it
            can do — how it should be implemented, analyzed, governed, secured, and used.
          </p>
        </div>

        <div className="stack">
          <div className="neural" role="group" aria-label="AI Lab neural field">
            <NeuralField accent={mode.accent} emphasisLayer={mode.layer} />
          </div>

          <div className="stack__detail">
            <p className="ai-nudge">Don&apos;t be shy. Click the buttons below.</p>
            <p className="ai-nudge ai-nudge--sub">I promise nothing will explode. Probably.</p>
            <div className="builder__opts" role="tablist" aria-label="AI lenses">
              {modes.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  role="tab"
                  aria-selected={m.key === modeKey}
                  className={`chip chip--btn ${m.key === modeKey ? "is-active" : ""}`}
                  style={{ ["--a" as string]: accentVar(m.accent) }}
                  onClick={() => setModeKey(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: "1.2rem", fontSize: "clamp(1.4rem,3vw,2rem)" }}>{mode.headline}</h3>
            <p className="text-soft" style={{ marginTop: "0.6rem" }}>
              {mode.body}
            </p>

            <p className="stack__meta">Focus areas</p>
            <div className="builder__opts">
              {aiAreas.map((area) => (
                <span
                  key={area}
                  className={`chip ${hot.has(area) ? "is-active" : ""}`}
                  style={hot.has(area) ? { ["--a" as string]: accentVar(mode.accent) } : undefined}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Reveal>
          <div className="lab-grid">
            {aiLabSections.map((s) => (
              <article key={s.key} className="surface lab-card" style={{ ["--a" as string]: accentVar(s.accent) }}>
                <h3>{s.label}</h3>
                <p>{s.body}</p>
                <small>EXPERIMENTS PENDING</small>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="ai-philo" style={{ marginTop: "clamp(2.5rem,6vw,5rem)" }}>
            {aiPhilosophy[0]}
            <br />
            <b>{aiPhilosophy[1]}</b>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
