import type { Metadata } from "next";
import { RouteShell } from "@/components/RouteShell";
import { credentials } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Credentials",
  description: "A structured credential library, ready for verified certificates.",
};

export default function CredentialsPage() {
  return (
    <RouteShell
      index="CR"
      kicker="TRUST"
      title="Credentials, structured for trust — not invented."
      intro="Nothing here is asserted as fact yet. These are typed placeholder slots ready for verified name, issuer, ID, dates, and verification URL."
      accent="emerald"
    >
      <div className="impact-grid">
        {credentials.map((c, i) => (
          <article key={i} className="surface impact-card surface--accent">
            <p className="eyebrow eyebrow--a">{c.category}</p>
            <h3 style={{ fontSize: "1.1rem", marginTop: "0.3rem" }}>{c.name}</h3>
            <p>{c.issuer}</p>
            {c.isPlaceholder && <p className="proj__ph">⚑ PLACEHOLDER — add ID, dates, logo, verification URL.</p>}
          </article>
        ))}
      </div>
    </RouteShell>
  );
}
