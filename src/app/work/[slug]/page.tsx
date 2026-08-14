import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { accentVar } from "@/data/accents";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "ArtejaStacks project case study.",
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="modal__block">
      <p className="eyebrow eyebrow--a">{label}</p>
      <p className="text-soft">{children}</p>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main style={{ ["--a" as string]: accentVar(project.accent) }}>
      <section className="section bg-dark" style={{ paddingTop: "clamp(6rem,14vh,9rem)" }}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap rel">
          <p className="proj__cat" style={{ maxWidth: 200 }}>
            <span>{project.category.replace("-", " ").toUpperCase()}</span>
            <span>{project.year}</span>
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem,7vw,5rem)", marginTop: "0.6rem" }}>{project.title}</h1>
          {project.isPlaceholder && (
            <p className="proj__ph" style={{ marginTop: "0.6rem" }}>
              ⚑ PLACEHOLDER — verified detail, links, and names pending from Arteja.
            </p>
          )}

          <div className="proj__visual" style={{ maxWidth: 720, marginTop: "1.6rem" }}>
            <span>{project.imageLabel}</span>
          </div>

          <div style={{ maxWidth: 760 }}>
            <Block label="THE PROBLEM">{project.problem}</Block>
            <Block label="WHAT I BUILT">{project.built}</Block>
            <Block label="WHY I BUILT IT">{project.why}</Block>
            <Block label="MY ROLE">{project.role}</Block>

            <div className="modal__block">
              <p className="eyebrow eyebrow--a">STACK</p>
              <div className="builder__opts" style={{ marginTop: "0.5rem" }}>
                {project.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {project.architecture && (
              <div className="modal__block">
                <p className="eyebrow eyebrow--a">ARCHITECTURE</p>
                <div className="arch">
                  {project.architecture.map((n, i) => (
                    <span key={n.id} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="arch__node" title={n.role}>
                        {n.label}
                      </span>
                      {i < project.architecture!.length - 1 && <span className="arch__arrow">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.security && <Block label="SECURITY">{project.security}</Block>}
            {project.challenge && (
              <div className="modal__block modal__danger">
                <p className="eyebrow">THE PART THAT ALMOST BROKE ME</p>
                <p className="text-soft">{project.challenge}</p>
              </div>
            )}
            {project.fix && <Block label="THE FIX">{project.fix}</Block>}
            {project.learned && <Block label="WHAT I LEARNED">{project.learned}</Block>}
          </div>

          <div className="builder__opts" style={{ marginTop: "2rem" }}>
            <Link className="btn btn--primary" href="/work">
              ← ALL PROJECTS
            </Link>
            {project.liveUrl ? (
              <a className="btn btn--accent" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                VIEW LIVE ↗
              </a>
            ) : (
              <span className="btn btn--ghost" aria-disabled="true" style={{ opacity: 0.6 }}>
                LIVE — pending
              </span>
            )}
            {project.githubUrl && (
              <a className="btn btn--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GITHUB ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
