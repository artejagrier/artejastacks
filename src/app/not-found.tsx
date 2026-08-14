import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Probably Moved It",
};

export default function NotFound() {
  return (
    <main className="nf" style={{ ["--a" as string]: "var(--accent-violet)" }}>
      <h1>404</h1>
      <p style={{ fontSize: "clamp(1.1rem,4vw,1.6rem)", color: "var(--pearl)" }}>I probably moved it.</p>
      <p>Unlike my code, this page cannot be recovered with git reset.</p>
      <div className="nf__actions">
        <Link className="btn btn--primary" href="/">
          GO HOME
        </Link>
        <Link className="btn btn--ghost" href="/#stack">
          EXPLORE THE STACK
        </Link>
      </div>
    </main>
  );
}
