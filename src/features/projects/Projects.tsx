"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects";
import { accentVar } from "@/data/accents";
import type { Project } from "@/types/portfolio";

function hostLabel(url?: string) {
  if (!url) return "localhost";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function Architecture({ project }: { project: Project }) {
  const [active, setActive] = useState<string | null>(null);
  if (!project.architecture?.length) return null;
  const activeNode = project.architecture.find((n) => n.id === active);
  return (
    <div className="modal__block">
      <p className="eyebrow">ARCHITECTURE</p>
      <div className="arch">
        {project.architecture.map((n, i) => (
          <span key={n.id} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              type="button"
              className={`arch__node ${active === n.id ? "is-active" : ""}`}
              style={n.accent ? { ["--a" as string]: accentVar(n.accent) } : undefined}
              onClick={() => setActive(active === n.id ? null : n.id)}
            >
              {n.label}
            </button>
            {i < project.architecture!.length - 1 && <span className="arch__arrow" aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
      <p className="arch__role">{activeNode ? activeNode.role : "Tap a node to see what it does."}</p>
    </div>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} style={{ ["--a" as string]: accentVar(project.accent) }}>
      <div className="modal__scrim" onClick={onClose} />
      <motion.div
        className="modal__panel"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="modal__close" type="button" onClick={onClose}>
          esc ✕
        </button>
        <p className="proj__cat">
          <span>{project.category.replace("-", " ").toUpperCase()}</span>
          <span>{project.year}</span>
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", marginTop: "0.4rem" }}>{project.title}</h2>
        {project.isPlaceholder && (
          <p className="proj__ph" style={{ marginTop: "0.6rem" }}>
            ⚑ PLACEHOLDER — verified detail pending from Arteja.
          </p>
        )}

        <div className="modal__block">
          <p className="eyebrow">THE PROBLEM</p>
          <p>{project.problem}</p>
        </div>
        <div className="modal__block">
          <p className="eyebrow">WHAT I BUILT</p>
          <p>{project.built}</p>
        </div>
        <div className="modal__block">
          <p className="eyebrow">WHY I BUILT IT</p>
          <p>{project.why}</p>
        </div>
        <div className="modal__block">
          <p className="eyebrow">MY ROLE</p>
          <p>{project.role}</p>
        </div>

        <div className="modal__block">
          <p className="eyebrow">STACK</p>
          <div className="builder__opts" style={{ marginTop: "0.5rem" }}>
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        <Architecture project={project} />

        {project.security && (
          <div className="modal__block">
            <p className="eyebrow">SECURITY</p>
            <p>{project.security}</p>
          </div>
        )}
        {project.challenge && (
          <div className="modal__block modal__danger">
            <p className="eyebrow">THE PART THAT ALMOST BROKE ME</p>
            <p>{project.challenge}</p>
          </div>
        )}
        {project.fix && (
          <div className="modal__block">
            <p className="eyebrow">THE FIX</p>
            <p>{project.fix}</p>
          </div>
        )}
        {project.learned && (
          <div className="modal__block">
            <p className="eyebrow">WHAT I LEARNED</p>
            <p>{project.learned}</p>
          </div>
        )}

        <div className="hero__actions" style={{ marginTop: "1.6rem" }}>
          {project.liveUrl && (
            <a className="btn btn--accent" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              VIEW LIVE ↗
            </a>
          )}
          {project.githubUrl && (
            <a className="btn btn--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GITHUB ↗
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="section bg-obsidian">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">07 // RECENT WORK</p>
          <h2>Ideas are easy. Shipping is the skill.</h2>
          <p className="text-soft">
            Real, live work — open one for the story, or jump straight to the site.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <article
              key={p.slug}
              className={`surface proj ${p.featured ? "proj--featured surface--glow" : ""}`}
              style={{ ["--a" as string]: accentVar(p.accent) }}
            >
              <div className="proj__browser">
                <div className="proj__chrome" aria-hidden="true">
                  <span className="proj__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="proj__url">{hostLabel(p.liveUrl)}</span>
                </div>
                <div className="proj__screen">
                  {p.previewImage ? (
                    <Image
                      className="proj__shot"
                      src={p.previewImage}
                      alt={`${p.title} website preview`}
                      width={1200}
                      height={750}
                      sizes="(max-width: 800px) 92vw, 46vw"
                    />
                  ) : (
                    <div className="proj__visual">
                      <span>{p.imageLabel}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="proj__body">
                <p className="proj__cat">
                  <span>{p.category.replace("-", " ").toUpperCase()}</span>
                  <span>{p.year}</span>
                </p>
                <h3 style={{ marginTop: "0.4rem" }}>{p.title}</h3>
                <p className="text-soft" style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
                  {p.summary}
                </p>
                <div className="proj__actions">
                  {p.liveUrl && (
                    <a
                      className="btn btn--accent"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE ↗
                    </a>
                  )}
                  <button className="btn btn--ghost" type="button" onClick={() => setOpen(p)}>
                    CASE STUDY
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <Modal project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
