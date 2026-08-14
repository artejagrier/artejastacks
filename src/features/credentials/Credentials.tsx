"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { credentials } from "@/data/credentials";
import { accentVar } from "@/data/accents";

// Interactive credential grid — click a certificate to expand its category and
// the skills it validates. No fabricated IDs, dates, URLs, or logos; missing
// fields are simply omitted.
export function Credentials() {
  const reduce = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="credentials" className="section bg-dark">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a" style={{ ["--a" as string]: "var(--accent-emerald)" }}>
            06 // CREDENTIALS
          </p>
          <h2>I like receipts.</h2>
          <p className="text-soft">
            Certifications, structured learning, and proof that I don&apos;t only collect browser tabs.
          </p>
          <p className="cred-note">$ verified --curiosity &nbsp;# fun, but professional</p>
        </div>

        <div className="cred-grid">
          {credentials.map((c, i) => {
            const open = openIdx === i;
            const accent = accentVar(c.accent ?? "violet");
            return (
              <article
                key={c.name}
                className={`surface cred ${open ? "is-open" : ""}`}
                style={{ ["--a" as string]: accent }}
              >
                <button
                  type="button"
                  className="cred__head"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                >
                  <span className="cred__meta">
                    <span className="cred__cat">{c.category}</span>
                    <span className="cred__name">{c.name}</span>
                    {c.issuer && <span className="cred__issuer">{c.issuer}</span>}
                  </span>
                  <span className="cred__toggle" aria-hidden="true">
                    {open ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="cred__detail"
                      initial={reduce ? undefined : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="cred__detail-inner">
                        {c.skills && (
                          <>
                            <p className="cred__label">Validates</p>
                            <div className="builder__opts">
                              {c.skills.map((s) => (
                                <span key={s} className="chip">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                        {c.status && <p className="cred__status">status: {c.status.toLowerCase()}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
