"use client";

import { useEffect, useState } from "react";

// Tracks the active section id and overall scroll progress (0–1).
// Uses a rAF-throttled scroll read with a "threshold line" at 40% of the
// viewport: the active section is the last one whose top has crossed that line.
// This is robust for BOTH short sections and tall pinned/sticky sections
// (the scroll story), where intersection-ratio approaches break down.
export function useSectionObserver(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line) current = id;
      }
      setActive(current);

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  const activeIndex = ids.indexOf(active);
  return { active, activeIndex, progress };
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
