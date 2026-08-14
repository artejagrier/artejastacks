"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion";
import { accentVar } from "@/data/accents";
import {
  thisOrThat,
  brainTabs,
  currently,
  techPersonality,
  buildRoles,
  buildEnvironments,
  buildProblems,
  buildCoffee,
  buildResult,
} from "@/data/playground";

// --- This or That ----------------------------------------------------------
function ThisOrThat() {
  const [revealed, setRevealed] = useState<number | null>(null);
  return (
    <article className="surface pg-card" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <h3>THIS / THAT</h3>
      <div className="tot">
        {thisOrThat.map((row, i) => (
          <div key={i}>
            <div className="tot__row">
              <button
                type="button"
                className={`tot__btn ${revealed === i ? "is-chosen" : ""}`}
                onClick={() => setRevealed(i)}
              >
                {row.left}
              </button>
              <span className="tot__vs">vs</span>
              <button
                type="button"
                className={`tot__btn ${revealed === i ? "is-chosen" : ""}`}
                onClick={() => setRevealed(i)}
              >
                {row.right}
              </button>
            </div>
            {revealed === i && <p className="tot__answer">→ {row.answer}</p>}
          </div>
        ))}
      </div>
    </article>
  );
}

// --- Brain tabs (draggable) ------------------------------------------------
// Deterministic scatter so SSR + first client render match (no Math.random on
// mount). Shuffle re-seeds and re-keys the tabs to reset their drag transforms.
function pseudo(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
function scatter(count: number, seed: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: 3 + pseudo(i + seed) * 60,
    top: 3 + pseudo(i * 7 + seed + 3) * 72,
  }));
}

function BrainTabs() {
  const reduce = useReducedMotion();
  const boundsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [seed, setSeed] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const pos = scatter(brainTabs.length, seed);

  function shuffle() {
    setSeed((s) => s + 7);
    setResetKey((k) => k + 1);
  }

  return (
    <article className="surface pg-card pg-card--tall" style={{ ["--a" as string]: accentVar(brainTabs[active].accent) }}>
      <div className="btab-head">
        <h3>MY BRAIN HAS TABS OPEN</h3>
        <p className="btab-sub">LINE THEM UP IF YOU CAN.</p>
      </div>

      <div className="tabs" ref={boundsRef}>
        {brainTabs.map((tab, i) => (
          <motion.button
            key={`${tab.label}-${resetKey}`}
            type="button"
            className={`btab ${i === active ? "is-active" : ""}`}
            style={{ left: `${pos[i].left}%`, top: `${pos[i].top}%`, ["--a" as string]: accentVar(tab.accent) }}
            drag={!reduce}
            dragConstraints={boundsRef}
            dragElastic={0.12}
            dragMomentum={false}
            whileHover={reduce ? undefined : { y: -3 }}
            whileDrag={{ scale: 1.06, rotate: 3, zIndex: 20 }}
            onClick={() => setActive(i)}
            title="drag me. Arteja won't notice."
            aria-pressed={i === active}
          >
            <span className="chip__dot" aria-hidden="true" />
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="btab-foot">
        <p className="btab__thought">{brainTabs[active].thought}</p>
        <button type="button" className="chip chip--btn" onClick={shuffle}>
          ⇢ shuffle my tabs
        </button>
      </div>
    </article>
  );
}

// --- Currently -------------------------------------------------------------
function Currently() {
  return (
    <article className="surface pg-card" style={{ ["--a" as string]: "var(--accent-emerald)" }}>
      <h3>CURRENTLY</h3>
      <div className="curr">
        {currently.map((row) => (
          <div key={row.label} className="curr__row" style={{ ["--a" as string]: accentVar(row.accent) }}>
            <span className="curr__k">{row.label}</span>
            <span className="curr__v">
              <b>{row.value}</b>
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

// --- Tech personality (explicitly non-scientific) --------------------------
function TechPersonality() {
  const reduce = useReducedMotion();
  return (
    <article className="surface pg-card pg-card--wide" style={{ ["--a" as string]: "var(--accent-pink)" }}>
      <h3>MY TECH PERSONALITY</h3>
      <p className="stat__note">Definitely not scientific. Do not cite in a performance review.</p>
      <div className="stat">
        {techPersonality.map((bar) => {
          const isError = bar.value === "ERROR";
          const width = isError ? 100 : (bar.value as number);
          return (
            <div key={bar.label} className="stat__row" style={{ ["--a" as string]: accentVar(bar.accent) }}>
              <div className="stat__top">
                <span>{bar.label}</span>
                <span>{isError ? "ERROR" : `${bar.value}%`}</span>
              </div>
              <div className="stat__track">
                {reduce ? (
                  <div className="stat__fill" style={{ width: `${width}%` }} />
                ) : (
                  <motion.div
                    className="stat__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

// --- Build a version of Arteja ---------------------------------------------
function BuildArteja() {
  const [role, setRole] = useState(buildRoles[0].key);
  const [env, setEnv] = useState(buildEnvironments[0].key);
  const [problem, setProblem] = useState(buildProblems[0].key);
  const [coffee, setCoffee] = useState(buildCoffee[0].key);
  const [result, setResult] = useState<string | null>(null);

  function group(
    label: string,
    opts: { key: string; label: string }[],
    value: string,
    set: (k: string) => void,
  ) {
    return (
      <div className="builder__group">
        <span className="curr__k">{label}</span>
        <div className="builder__opts">
          {opts.map((o) => (
            <button
              key={o.key}
              type="button"
              className={`chip chip--btn ${value === o.key ? "is-active" : ""}`}
              onClick={() => set(o.key)}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <article className="surface pg-card pg-card--wide" style={{ ["--a" as string]: "var(--accent-orange)" }}>
      <h3>BUILD A VERSION OF ARTEJA</h3>
      <div className="builder">
        {group("Role", buildRoles, role, setRole)}
        {group("Environment", buildEnvironments, env, setEnv)}
        {group("Problem", buildProblems, problem, setProblem)}
        {group("Coffee", buildCoffee, coffee, setCoffee)}
        <button className="btn btn--accent" type="button" onClick={() => setResult(buildResult(role, env, problem, coffee))}>
          COMPILE ARTEJA
        </button>
        <div className="builder__result">
          {result ? <span>{result}</span> : <span className="text-muted">Pick three, then compile. It&apos;s playful frontend logic — no AI required.</span>}
        </div>
      </div>
    </article>
  );
}

export function Playground() {
  return (
    <section id="playground" className="section bg-obsidian">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">03 // GET TO KNOW ME</p>
          <h2>OKAY, BUT WHO IS ARTEJA?</h2>
          <p className="text-soft">
            The professional stuff is everywhere else. This part is just fun — poke around.
          </p>
        </div>
        <Reveal>
          <div className="pg-grid">
            <ThisOrThat />
            <BrainTabs />
            <Currently />
            <TechPersonality />
            <BuildArteja />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
