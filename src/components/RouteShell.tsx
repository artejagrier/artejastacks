import Link from "next/link";
import type { ReactNode } from "react";
import type { AccentKey } from "@/types/portfolio";
import { accentVar } from "@/data/accents";
import { routeCards } from "@/data/navigation";

// Consistent on-brand hero + body for content routes that don't map 1:1 to a
// home section (about, leadership, credentials, resume). Feature routes
// (work, ai, teach, impact, world, contact) render their live sections instead.
export function RouteShell({
  index,
  kicker,
  title,
  intro,
  accent = "violet",
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  intro: string;
  accent?: AccentKey;
  children?: ReactNode;
}) {
  return (
    <main style={{ ["--a" as string]: accentVar(accent) }}>
      <section className="section bg-dark" style={{ paddingTop: "clamp(6rem,14vh,9rem)" }}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap rel">
          <div className="sec-head" style={{ marginBottom: children ? "clamp(2rem,4vw,3rem)" : 0 }}>
            <p className="eyebrow eyebrow--a">{`${index} // ${kicker}`}</p>
            <h2>{title}</h2>
            <p className="text-soft">{intro}</p>
          </div>
          {children}

          <div className="builder__opts" style={{ marginTop: "clamp(2.5rem,6vw,4rem)" }}>
            <Link className="btn btn--primary" href="/">
              ← BACK TO THE WORLD
            </Link>
            {routeCards.slice(0, 5).map((r) => (
              <Link key={r.href} className="chip chip--btn" href={r.href}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
