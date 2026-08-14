"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { konamiCode, errorToasts } from "@/data/easter-eggs";

// A tiny bug that runs away from the pointer. Catch it enough times and it
// flees to production.
function RunawayBug() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [caught, setCaught] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // initial resting spot, bottom-ish area, client only — deferred a frame so
    // we don't setState synchronously inside the effect body.
    const raf = requestAnimationFrame(() =>
      setPos({ x: Math.min(window.innerWidth - 60, window.innerWidth * 0.5), y: window.innerHeight * 0.8 }),
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  const flee = useCallback(() => {
    const pad = 40;
    const x = pad + Math.random() * (window.innerWidth - pad * 2);
    const y = pad + Math.random() * (window.innerHeight - pad * 2);
    setPos({ x, y });
    setCaught((c) => c + 1);
  }, []);

  useEffect(() => {
    if (caught >= 5) {
      const t = window.setTimeout(() => setGone(true), 300);
      return () => clearTimeout(t);
    }
  }, [caught]);

  if (!pos || gone) return null;

  return (
    <button
      className="bug"
      style={{ left: pos.x, top: pos.y }}
      onMouseEnter={flee}
      onFocus={flee}
      onClick={flee}
      aria-label="A wild bug. Try to catch it."
      title="catch me"
    >
      🐛
    </button>
  );
}

// A shy bookworm that peeks from a few edges of the page, crawls a little, and
// hides. Catch it for a tiny achievement. Replayable, non-intrusive, local
// state only. Kept above page content but below nav/terminal via .bookworm z.
const wormSpots: React.CSSProperties[] = [
  { left: 0, top: "36%" },
  { right: 0, top: "60%" },
  { left: "16%", bottom: 0 },
  { right: "24%", top: 0 },
];

function Bookworm() {
  const reduce = useReducedMotion();
  const [spot, setSpot] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    // occasional crawl to the next peek spot — slow, never constant motion
    const id = window.setInterval(() => {
      setHidden((h) => (h ? h : false));
      setSpot((s) => (s + 1) % wormSpots.length);
    }, 19000);
    return () => clearInterval(id);
  }, []);

  const onCatch = useCallback(() => {
    setCaught(true);
    setHidden(true);
    window.setTimeout(() => setCaught(false), 5000);
    window.setTimeout(() => {
      setSpot((s) => (s + 1) % wormSpots.length);
      setHidden(false);
    }, 9000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!hidden && (
          <motion.button
            key={spot}
            className="bookworm"
            style={wormSpots[spot]}
            onClick={onCatch}
            aria-label="A bookworm is peeking. Catch it!"
            title="a wild bookworm appears"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
            animate={
              reduce
                ? { opacity: 0.9 }
                : { opacity: 0.92, scale: 1, x: [0, 4, 0, -3, 0], y: [0, -2, 0, 2, 0] }
            }
            exit={{ opacity: 0, scale: 0.6 }}
            transition={reduce ? { duration: 0.2 } : { x: { repeat: Infinity, duration: 5, ease: "easeInOut" }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" }, opacity: { duration: 0.4 }, scale: { duration: 0.4 } }}
          >
            📚🐛
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {caught && (
          <motion.div
            className="bookworm__ach"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <b>YOU CAUGHT THE BOOKWORM.</b>
            <span>+10 curiosity</span>
            <span className="bookworm__ach-badge">Achievement: Reads The Documentation</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Occasional dismissible developer "error" that's secretly a success — emerald,
// not red. Non-intrusive: one at a time.
function ErrorToast() {
  const [msg, setMsg] = useState<string | null>(null);
  const idx = useRef(0);

  useEffect(() => {
    const show = () => {
      setMsg(errorToasts[idx.current % errorToasts.length]);
      idx.current += 1;
    };
    const first = window.setTimeout(show, 16000);
    const interval = window.setInterval(() => {
      // only re-surface if currently dismissed
      setMsg((m) => (m ? m : errorToasts[idx.current % errorToasts.length]));
      idx.current += 1;
    }, 55000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          className="err-toast"
          role="status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="err-toast__body">
            <span>{msg}</span>
            <span className="err-toast__status">status: expected behavior</span>
          </div>
          <button type="button" aria-label="Dismiss" onClick={() => setMsg(null)}>
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Konami code → a quick on-brand flash.
function Konami() {
  const [flash, setFlash] = useState(false);
  const buf = useRef<string[]>([]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buf.current = [...buf.current, key].slice(-konamiCode.length);
      if (konamiCode.every((k, i) => buf.current[i] === k)) {
        setFlash(true);
        buf.current = [];
        window.setTimeout(() => setFlash(false), 1600);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          className="konami-flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            initial={{ scale: 0.7, rotate: -4 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            ↑↑↓↓←→←→ BUILD
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function EasterEggs() {
  return (
    <>
      <RunawayBug />
      <Bookworm />
      <ErrorToast />
      <Konami />
    </>
  );
}
