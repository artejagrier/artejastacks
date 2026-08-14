import type { Metadata } from "next";
import { RouteShell } from "@/components/RouteShell";
import { profile } from "@/data/profile";
import { storyChapters } from "@/data/story";

export const metadata: Metadata = {
  title: "About",
  description: "The person behind the systems — building, teaching, connecting, and refusing to stop.",
};

export default function AboutPage() {
  return (
    <RouteShell
      index="00"
      kicker="THE STORY"
      title="I actually want you to feel like you know me."
      intro={profile.intro}
      accent="violet"
    >
      <div className="impact-grid">
        {storyChapters.map((c) => (
          <article key={c.id} className="surface impact-card" style={{ ["--a" as string]: `var(--accent-${c.accent})` }}>
            <p className="eyebrow eyebrow--a">
              {c.index} — {c.era}
            </p>
            <h3 style={{ marginTop: "0.4rem", fontSize: "1.15rem" }}>{c.headline}</h3>
            <p>{c.body[0]}</p>
          </article>
        ))}
      </div>
      <p className="text-soft" style={{ marginTop: "1.6rem", fontFamily: "var(--font-mono)" }}>
        {profile.education.current}
      </p>
    </RouteShell>
  );
}
