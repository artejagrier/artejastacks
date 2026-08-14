import type { Metadata } from "next";
import { RouteShell } from "@/components/RouteShell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Professional snapshot, ready for verified detail.",
};

export default function ResumePage() {
  return (
    <RouteShell
      index="CV"
      kicker="PROFILE"
      title="The professional snapshot."
      intro="A structured résumé surface. Verified roles, organizations, timelines, and a downloadable file are placeholders until Arteja provides them."
      accent="orange"
    >
      <div className="impact-grid">
        <article className="surface impact-card surface--accent">
          <h3 style={{ fontSize: "1.1rem" }}>Professional summary</h3>
          <p>{profile.roles.join(" · ")}. {profile.locationLine}</p>
        </article>
        <article className="surface impact-card surface--accent">
          <h3 style={{ fontSize: "1.1rem" }}>Education</h3>
          <p>{profile.education.current}</p>
        </article>
        <article className="surface impact-card surface--accent">
          <h3 style={{ fontSize: "1.1rem" }}>Experience</h3>
          <p className="proj__ph">⚑ PLACEHOLDER — add verified roles, organizations, and timelines.</p>
        </article>
      </div>
      <div className="builder__opts" style={{ marginTop: "1.4rem" }}>
        <span className="btn btn--ghost" aria-disabled="true" style={{ opacity: 0.6 }}>
          DOWNLOAD RÉSUMÉ — pending file
        </span>
      </div>
    </RouteShell>
  );
}
