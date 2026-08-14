"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { accentVar } from "@/data/accents";
import type { AccentKey } from "@/types/portfolio";

// "Beyond the Stack" — the human behind ArtejaStacks. Content is Arteja's own
// lived story, used as supplied: resilience and relearning framed as lived
// experience, with no invented diagnoses, neurological claims, titles, case
// details, names, or outcomes.

const primaryStory = [
  "I learned how to rebuild long before I learned how to code.",
  "I was born blind and deaf and lived with those limitations through the earliest years of my childhood.",
  "When my world began opening up around the age of six, learning wasn't simply about catching up. In many ways, it meant learning how to experience things that other children had already been building familiarity with for years — sound, sight, language, patterns, memory, communication, and how the different pieces of the world connected.",
  "My brain and my way of learning had to adapt. Things that might have developed naturally for someone else often became things I had to approach deliberately, differently, and repeatedly until they became mine.",
];

const adaptLines = ["THE BRAIN CAN ADAPT.", "PEOPLE CAN REBUILD.", "“IMPOSSIBLE” CAN MOVE."];

const relearnLine =
  "I grew up understanding that long before I had the language for it. What it meant in practice: I had to relearn, rebuild, create new ways of processing information, and adapt how I understood the world.";

const curiosity = [
  "That experience followed me into everything. When I encounter something I don't understand, my instinct is to investigate it. When a system breaks, I want to know why. When someone says something cannot be done, my brain immediately starts asking: “According to who?”",
  "That curiosity eventually found technology. And technology felt strangely familiar. Code is complicated until you understand the pattern. Systems are intimidating until you understand how the pieces communicate. A problem feels impossible until you break it into smaller problems.",
  "Maybe that's part of why engineering made sense — I'd already spent a lifetime learning how to do exactly that.",
];

const quoteFollow = "I don't always know how yet. “Yet” is the important part.";

const service = [
  "My background as a former emergency first responder in law enforcement shaped the way I think about responsibility, safety, information, and what happens when technology meets real people in real situations.",
  "Over the years, my technical and investigative skills have taken me far beyond building websites.",
  "I've used technology to help locate missing children. I've helped reconnect families.",
];

const communityAreas = [
  "Digital Safety",
  "Cybersecurity Awareness",
  "AI Security",
  "Responsible Technology",
  "Online Safety",
  "Digital Literacy",
];

const serviceClose = [
  "Those experiences are part of why I don't see technology as something separate from people.",
  "To me, the most interesting question is never simply: “Can we build it?” It's also: “Who does it help once we do?”",
];

const ending =
  "I've spent my life adapting, rebuilding, learning, teaching, investigating, connecting, and refusing to accept that the current limitation has to be the final answer.";

const storyNodes: { label: string; accent: AccentKey; statement: string }[] = [
  { label: "RESILIENCE", accent: "violet", statement: "I learned very early that “difficult” and “impossible” are not synonyms." },
  { label: "FIRST RESPONSE", accent: "emerald", statement: "Before debugging production systems, I learned how to stay calm when the stakes were real." },
  { label: "TECHNOLOGY", accent: "blue", statement: "I didn't want to only use the internet. I wanted to understand what made it work." },
  { label: "COMMUNITY", accent: "lime", statement: "Technology should improve life outside of technology too." },
  { label: "TEACHING", accent: "orange", statement: "Knowledge becomes more valuable when somebody else can use it." },
  { label: "AI", accent: "pink", statement: "Evolution doesn't scare me. It makes me curious." },
  { label: "CONNECTION", accent: "cyan", statement: "The right conversation can create an entirely new direction." },
];

function StoryNodes() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const node = storyNodes[active];
  return (
    <div className="about__nodes-wrap" style={{ ["--a" as string]: accentVar(node.accent) }}>
      <div className="about__nodes" role="tablist" aria-label="Story markers">
        {storyNodes.map((n, i) => (
          <button
            key={n.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`key ${i === active ? "is-active" : ""}`}
            style={{ ["--a" as string]: accentVar(n.accent) }}
            onClick={() => setActive(i)}
          >
            {n.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          className="about__reveal"
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {node.statement}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Portrait() {
  return (
    <div className="about__portrait">
      <div className="about__frame">
        <span className="about__corner about__corner--tl" aria-hidden="true" />
        <span className="about__corner about__corner--tr" aria-hidden="true" />
        <span className="about__corner about__corner--bl" aria-hidden="true" />
        <span className="about__corner about__corner--br" aria-hidden="true" />

        <div className="about__tags" aria-hidden="true">
          <span className="about__tag">
            <span className="chip__dot" style={{ background: "var(--accent-emerald)" }} /> SUBJECT // ARTEJA GRIER
          </span>
          <span className="about__tag">ROLE // FULL STACK</span>
        </div>

        <Image
          className="about__img"
          src="/images/arteja-grier-full-stack.png"
          alt="Arteja Grier — full stack developer, software engineer, and technical educator"
          width={886}
          height={886}
          sizes="(max-width: 860px) 90vw, 40vw"
          priority={false}
        />

        <svg className="about__trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--accent-violet)" strokeWidth="0.4" strokeDasharray="6 4" opacity="0.5" />
        </svg>

        <span className="about__coord" aria-hidden="true">STATUS // BUILDING</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section bg-dark about" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <div className="grid-bg" aria-hidden="true" />
      <div
        className="glow"
        style={{ background: "var(--accent-violet)", width: 380, height: 380, top: "10%", right: "6%", opacity: 0.22 }}
        aria-hidden="true"
      />
      <div className="wrap rel">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">04 // ABOUT ARTEJA</p>
          <h2>
            THE CODE IS ONLY
            <br />
            PART OF THE STORY.
          </h2>
          <p className="text-soft">Beyond the stack, there&apos;s a human — and a reason all of this exists.</p>
        </div>

        <div className="about__grid">
          <Portrait />

          <div className="about__story">
            {primaryStory.map((p, i) => (
              <p key={i} className="text-soft about__p">
                {p}
              </p>
            ))}

            <div className="about__adapt" aria-hidden="false">
              {adaptLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>

            <p className="text-soft about__p">{relearnLine}</p>

            {curiosity.map((p, i) => (
              <p key={i} className="text-soft about__p">
                {p}
              </p>
            ))}

            <blockquote className="about__quote">
              IMPOSSIBLE HAS ALWAYS
              <br />
              SOUNDED TEMPORARY TO ME.
            </blockquote>
            <p className="about__quote-follow">{quoteFollow}</p>

            <p className="about__kicker">Tap a marker — see how it connects.</p>
            <StoryNodes />

            {service.map((p, i) => (
              <p key={i} className="text-soft about__p">
                {p}
              </p>
            ))}

            <p className="about__kicker">I&apos;ve worked with communities to better understand:</p>
            <div className="builder__opts" style={{ margin: "0 0 1.2rem" }}>
              {communityAreas.map((a) => (
                <span key={a} className="chip">
                  {a}
                </span>
              ))}
            </div>

            {serviceClose.map((p, i) => (
              <p key={i} className="text-soft about__p">
                {p}
              </p>
            ))}

            <div className="about__final-block">
              <p className="text-soft about__p">{ending}</p>
              <p className="about__final">{"THAT'S PROBABLY WHY"}<br />I BECAME AN ENGINEER.</p>
              <p className="about__joke">Debugging started long before JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
