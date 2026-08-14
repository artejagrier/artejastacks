"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/components/navigation/useSectionObserver";
import { openTerminal } from "@/components/easter-eggs/terminalBus";
import { TerminalEmbedded } from "@/components/easter-eggs/Terminal";

// Rotating role with a light typewriter effect. Under reduced motion it renders
// the full role list statically.
function RoleTyper() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = profile.roles[roleIndex];
    const atFull = text === full;
    const atEmpty = text === "";

    let delay = deleting ? 40 : 70;
    if (atFull && !deleting) delay = 1400;
    if (atEmpty && deleting) delay = 220;

    const t = window.setTimeout(() => {
      if (!deleting && atFull) {
        setDeleting(true);
      } else if (deleting && atEmpty) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % profile.roles.length);
      } else {
        setText(full.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, reduce]);

  if (reduce) {
    return <span>{profile.roles.join(" · ")}</span>;
  }

  return (
    <span>
      I am a <b className="caret">{text}</b>
    </span>
  );
}

export function Hero() {
  return (
    <header id="home" className="hero wrap" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow" style={{ background: "var(--accent-violet)", width: 460, height: 460, top: -120, left: -80 }} aria-hidden="true" />
      <div className="glow" style={{ background: "var(--accent-emerald)", width: 360, height: 360, bottom: -120, right: 40, opacity: 0.3 }} aria-hidden="true" />
      <span className="ghost-word" style={{ fontSize: "clamp(6rem,22vw,20rem)", bottom: "-3rem", right: "-2rem" }} aria-hidden="true">
        BUILD
      </span>

      <div className="hero__inner">
        <div>
          <p className="hero__status">
            <span className="chip__dot anim-pulse" style={{ background: "var(--accent-emerald)" }} />
            {profile.availabilityLabel}
          </p>

          <p className="hero__roles" aria-live="off">
            <RoleTyper />
          </p>

          <h1>
            <span>I BUILD THE GAP</span>
            <span>BETWEEN</span>
            <span className="hero__imagine">&ldquo;IMAGINE IF&hellip;&rdquo;</span>
            <span className="hero__and">AND</span>
            <span className="hero__openlink">&ldquo;OPEN THE LINK.&rdquo;</span>
          </h1>

          <p className="hero__tag">
            Ideas can stay ideas forever. I like making them clickable.
          </p>
          <p className="hero__pipeline">from thought → architecture → build → ship</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <button className="btn btn--primary" type="button" onClick={() => scrollToSection("stack")}>
              ENTER MY STACK
            </button>
            <button className="btn btn--ghost" type="button" onClick={() => openTerminal()}>
              ASK ARTEJA
            </button>
          </div>

          <p className="hero__global">{profile.locationLine}</p>
        </div>

        <TerminalEmbedded />
      </div>
    </header>
  );
}
