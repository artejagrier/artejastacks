"use client";

import { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
  motion,
  AnimatePresence,
} from "motion/react";
import { storyChapters } from "@/data/story";
import { accentVar } from "@/data/accents";
import { StoryScene } from "./StoryScene";

function ChapterBody({ index }: { index: number }) {
  const c = storyChapters[index];
  return (
    <div className="story__grid wrap">
      <div className="scene-wrap" aria-hidden="true">
        <StoryScene scene={c.scene} />
      </div>
      <div className="rel">
        <p className="story__index">
          CHAPTER {c.index} — {c.era}
        </p>
        <p className="story__era" aria-hidden="true">
          {c.era}
        </p>
        <h3 className="story__headline">{c.headline}</h3>
        <div className="story__body">
          {c.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {c.punch && <p className="story__punch">{c.punch}</p>}
      </div>
    </div>
  );
}

// Reduced-motion / accessible fallback: every chapter stacked and readable.
function StaticStory() {
  return (
    <section id="story" className="story story--static bg-dark">
      <div className="wrap section--tight">
        <p className="eyebrow">02 // THE STORY</p>
        <h2 style={{ fontSize: "clamp(2.2rem,6vw,4.5rem)", lineHeight: 0.95, marginTop: "0.6rem" }}>
          HOW I GOT HERE
        </h2>
      </div>
      {storyChapters.map((c) => (
        <div
          key={c.id}
          className="story__chapter wrap"
          style={{ ["--a" as string]: accentVar(c.accent) }}
        >
          <ChapterBodyStatic index={storyChapters.indexOf(c)} />
        </div>
      ))}
    </section>
  );
}

function ChapterBodyStatic({ index }: { index: number }) {
  const c = storyChapters[index];
  return (
    <div className="story__grid">
      <div className="rel" style={{ minHeight: 180 }} aria-hidden="true">
        <StoryScene scene={c.scene} />
      </div>
      <div className="rel">
        <p className="story__index">
          CHAPTER {c.index} — {c.era}
        </p>
        <h3 className="story__headline">{c.headline}</h3>
        <div className="story__body">
          {c.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {c.punch && <p className="story__punch">{c.punch}</p>}
      </div>
    </div>
  );
}

export function Story() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const count = storyChapters.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(count - 1, Math.max(0, Math.floor(v * count)));
    setIndex(i);
  });

  if (reduce) return <StaticStory />;

  const accent = accentVar(storyChapters[index].accent);

  return (
    <section
      id="story"
      className="story bg-dark"
      ref={ref}
      style={{ height: `${count * 100}vh`, ["--a" as string]: accent }}
    >
      <div className="story__sticky">
        <div className="grid-bg" aria-hidden="true" />
        <div
          className="glow"
          style={{ background: "var(--a)", width: 420, height: 420, top: "20%", left: "10%", opacity: 0.28 }}
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="rel"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ChapterBody index={index} />
          </motion.div>
        </AnimatePresence>

        <div className="story__progress" aria-hidden="true">
          {storyChapters.map((c, i) => (
            <span key={c.id} className={`story__pip ${i === index ? "is-active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
