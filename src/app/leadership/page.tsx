import type { Metadata } from "next";
import { RouteShell } from "@/components/RouteShell";
import { leadershipAreas } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Lead",
  description: "Technology needs builders. Great technology also needs direction.",
};

export default function LeadershipPage() {
  return (
    <RouteShell
      index="LD"
      kicker="LEAD"
      title="Technology needs builders. Great technology also needs direction."
      intro="Direction, architecture, product decisions, and mentorship. Verified roles and organization context are placeholders until Arteja supplies them."
      accent="blue"
    >
      <div className="impact-grid">
        {leadershipAreas.map((area) => (
          <article key={area} className="surface impact-card surface--accent">
            <h3 style={{ fontSize: "1.1rem" }}>{area}</h3>
            <p>Add verified responsibilities, decisions, and outcomes here.</p>
          </article>
        ))}
      </div>
    </RouteShell>
  );
}
