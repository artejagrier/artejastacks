"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { terminalResponses, terminalFallback } from "@/data/easter-eggs";
import { sectionNodes, routeCards } from "@/data/navigation";
import { onOpenTerminal } from "./terminalBus";
import { scrollToSection } from "@/components/navigation/useSectionObserver";

type Line = { kind: "echo" | "out" | "hot"; text: string };

const banner: Line[] = [
  { kind: "out", text: "ARTEJA//STACKS terminal — type `help`. (this is a toy. mostly.)" },
];

// The embedded hero instance boots with a short auto-sequence, then stays live.
const heroSeed: Line[] = [
  { kind: "echo", text: "arteja@stacks:~$ whoami" },
  { kind: "out", text: "Full Stack Developer" },
  { kind: "out", text: "Software Engineer" },
  { kind: "out", text: "AI Analyst" },
  { kind: "out", text: "Technical Educator" },
  { kind: "out", text: "Builder of suspiciously ambitious ideas." },
  { kind: "echo", text: "arteja@stacks:~$ git status" },
  { kind: "out", text: "On branch: building-something" },
  { kind: "out", text: "Ideas ahead of origin by: 47" },
  { kind: "out", text: "nothing to commit." },
  { kind: "hot", text: "everything to build." },
];

// Build a nav lookup: section labels + route labels/paths → action.
const navMap: Record<string, { label: string; go: () => void }> = {};
for (const s of sectionNodes) {
  navMap[s.label.toLowerCase()] = { label: s.label, go: () => scrollToSection(s.id) };
  navMap[s.id.toLowerCase()] = { label: s.label, go: () => scrollToSection(s.id) };
}

// Shared terminal engine — one implementation, used by both the floating
// overlay and the embedded hero instance. `onNavigate` lets the overlay close
// itself when a command routes somewhere; the embedded instance omits it.
function useTerminal(initial: Line[], onNavigate?: () => void) {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>(initial);
  const [input, setInput] = useState("");
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      if (!cmd) return;
      const lower = cmd.toLowerCase();
      const next: Line[] = [{ kind: "echo", text: `➜ ${cmd}` }];

      const known = terminalResponses[lower];
      if (known) {
        if (known[0] === "__CLEAR__") {
          setLines(banner);
          setInput("");
          return;
        }
        known.forEach((t) => next.push({ kind: "out", text: t }));
        setLines((l) => [...l, ...next]);
        setInput("");
        if (lower === "sudo hire arteja") {
          window.setTimeout(() => {
            onNavigate?.();
            router.push("/contact");
          }, 900);
        }
        return;
      }

      const nav = navMap[lower];
      if (nav) {
        next.push({ kind: "hot", text: `opening ${nav.label.toLowerCase()}…` });
        setLines((l) => [...l, ...next]);
        setInput("");
        window.setTimeout(() => {
          onNavigate?.();
          nav.go();
        }, 350);
        return;
      }
      const route = routeCards.find((r) => lower === r.label.toLowerCase() || lower === r.href.replace("/", ""));
      if (route) {
        next.push({ kind: "hot", text: `routing to ${route.href}…` });
        setLines((l) => [...l, ...next]);
        setInput("");
        window.setTimeout(() => {
          onNavigate?.();
          router.push(route.href);
        }, 350);
        return;
      }

      next.push({ kind: "out", text: terminalFallback(cmd) });
      setLines((l) => [...l, ...next]);
      setInput("");
    },
    [router, onNavigate],
  );

  return { lines, input, setInput, run, outRef };
}

function TerminalWindow({
  head,
  lines,
  input,
  setInput,
  run,
  outRef,
  inputRef,
  autoFocus,
}: {
  head: string;
  lines: Line[];
  input: string;
  setInput: (v: string) => void;
  run: (v: string) => void;
  outRef: React.RefObject<HTMLDivElement | null>;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  autoFocus?: boolean;
}) {
  return (
    <div className="cmd">
      <div className="cmd__head">
        <i style={{ background: "var(--accent-red)" }} />
        <i style={{ background: "var(--accent-yellow)" }} />
        <i style={{ background: "var(--accent-emerald)" }} />
        <span>{head}</span>
      </div>
      <div className="cmd__out" ref={outRef}>
        {lines.map((l, i) => (
          <div key={i} className={`out-line ${l.kind === "echo" ? "out-echo" : ""}`}>
            {l.kind === "hot" ? <b>{l.text}</b> : l.text}
          </div>
        ))}
      </div>
      <form
        className="cmd__inrow"
        onSubmit={(e) => {
          e.preventDefault();
          run(input);
        }}
      >
        <span aria-hidden="true">➜</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="try: whoami · git status · sudo hire arteja · work · ai"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
        />
      </form>
    </div>
  );
}

// The always-open embedded terminal used in the hero. Same engine + data.
export function TerminalEmbedded() {
  const { lines, input, setInput, run, outRef } = useTerminal(heroSeed);
  return (
    <div className="cmd--embed" aria-label="ArtejaStacks hero terminal">
      <TerminalWindow head="arteja@stacks — live" lines={lines} input={input} setInput={setInput} run={run} outRef={outRef} />
    </div>
  );
}

// The floating trigger + overlay terminal, available everywhere.
export function Terminal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { lines, input, setInput, run, outRef } = useTerminal(banner, () => setOpen(false));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => onOpenTerminal(() => setOpen(true)), []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  return (
    <>
      <button className="cmd-trigger" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="chip__dot" style={{ background: "var(--accent-emerald)" }} aria-hidden="true" />
        terminal
        <kbd>⌘K</kbd>
      </button>

      {open && (
        <div className="cmd-scrim" role="dialog" aria-modal="true" aria-label="ArtejaStacks terminal" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <TerminalWindow
              head="arteja@stacks — ⌘K"
              lines={lines}
              input={input}
              setInput={setInput}
              run={run}
              outRef={outRef}
              inputRef={inputRef}
            />
          </div>
        </div>
      )}
    </>
  );
}
