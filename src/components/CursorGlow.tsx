"use client";

import { useEffect, useRef } from "react";

// A soft, low-opacity radial glow that trails the pointer with slight easing.
// Purple-dominant with a faint emerald blend. Ambient, never a flashlight, and
// never blocks interaction (pointer-events: none). Performance: no React state
// or re-renders on move — a single rAF loop eases toward the pointer and writes
// CSS custom properties on one element. Disabled on touch/coarse pointers and
// under prefers-reduced-motion (see .cursor-glow media queries).
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || reduce || !el) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.4;
    let cx = tx;
    let cy = ty;
    let raf = 0;
    let shown = false;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        el.style.opacity = "1";
      }
    };

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.setProperty("--cursor-x", `${cx}px`);
      el.style.setProperty("--cursor-y", `${cy}px`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
