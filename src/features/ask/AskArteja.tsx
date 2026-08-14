"use client";

import { useRef, useState } from "react";
import { askPrompts, askReplies, askFallback } from "@/data/ai";

type Message = { role: "user" | "assistant"; text: string };

// Ask Arteja — another way to explore the portfolio, not a floating chatbot.
// Local mock only: a fixed set of honest answers. No backend is pretended.
export function AskArteja() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Ask me about Arteja. I'm a local mock with a fixed set of honest answers for now — the real assistant connects later. Try a prompt below, or type your own.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const timer = useRef<number | null>(null);

  function answer(prompt: string) {
    const match = askReplies.find((r) => r.prompt.toLowerCase() === prompt.toLowerCase());
    return match?.reply ?? askFallback;
  }

  function send(prompt: string) {
    const clean = prompt.trim();
    if (!clean || loading) return;
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: answer(clean) }]);
      setLoading(false);
    }, 480);
  }

  return (
    <div className="surface ask" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <div>
        <p className="eyebrow eyebrow--a">ASK ARTEJA</p>
        <h3 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", marginTop: "0.4rem" }}>
          Want the 30-second version? Ask.
        </h3>
      </div>

      <div className="ask__stream" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role === "user" ? "bubble--u" : "bubble--a"}`}>
            {m.text}
          </div>
        ))}
        {loading && <div className="bubble bubble--a bubble--typing">Arteja-bot is thinking…</div>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        style={{ display: "flex", gap: "0.5rem" }}
      >
        <input
          className="form"
          style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)", borderRadius: 12, padding: "0.7rem 0.9rem", color: "var(--pearl)" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about Arteja…"
          aria-label="Ask Arteja a question"
        />
        <button className="btn btn--accent" type="submit" disabled={loading}>
          ASK
        </button>
      </form>

      <div className="ask__prompts">
        {askPrompts.map((p) => (
          <button key={p} type="button" className="chip chip--btn" disabled={loading} onClick={() => send(p)}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
