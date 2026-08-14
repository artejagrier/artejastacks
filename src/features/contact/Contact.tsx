"use client";

import { useState } from "react";
import { contactReasons } from "@/data/opportunities";
import { AskArteja } from "@/features/ask/AskArteja";

// "Send the ping." Playful but professional. The primary button opens the
// visitor's default email app addressed to Arteja (nothing is sent
// automatically). Email + WhatsApp are shown as real, clickable links.
const EMAIL = "agrierhired@gmail.com";
const WHATSAPP_NUMBER = "14047898459"; // international, no formatting for the URL
const WHATSAPP_DISPLAY = "+1 404-789-8459";

// Map a selected reason into a short, clean subject suffix.
const reasonSuffix: Record<string, string> = {
  "I want to hire you": "Hiring",
  "I have a project": "Project",
  "I want training": "Training",
  "I want to collaborate": "Collaboration",
  "I have a ridiculous idea": "Ridiculous Idea",
};

export function Contact() {
  const [reason, setReason] = useState(contactReasons[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function buildMailto() {
    const suffix = reasonSuffix[reason];
    const subject = `Opportunity via ArtejaStacks${suffix ? ` — ${suffix}` : ""}`;
    const intro = name.trim() ? `Hi Arteja, I'm ${name.trim()}.` : "Hi Arteja,";
    const about = message.trim()
      ? ` I found you through ArtejaStacks and wanted to connect about ${message.trim()}`
      : " I found you through ArtejaStacks and wanted to connect about...";
    const body = `${intro}${about}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section bg-dark" style={{ ["--a" as string]: "var(--accent-emerald)" }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow eyebrow--a">14 // OPEN A CONNECTION</p>
          <h2>Send the ping.</h2>
          <p className="text-soft">
            Hiring, building, teaching, or a genuinely ridiculous idea — all valid packets. Response
            time: faster than my backend on a cold start.
          </p>
        </div>

        <div className="class">
          <div>
            {/* Direct channels — always visible, always clickable */}
            <div className="contact-ch">
              <a className="contact-ch__row" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Opportunity via ArtejaStacks")}`}>
                <span className="contact-ch__k">EMAIL</span>
                <span className="contact-ch__v">{EMAIL}</span>
              </a>
              <a
                className="contact-ch__row"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-ch__k">WHATSAPP</span>
                <span className="contact-ch__v">
                  {WHATSAPP_DISPLAY} <em>· message on WhatsApp ↗</em>
                </span>
              </a>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = buildMailto();
              }}
            >
              <div className="form__row">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__row">
                <label htmlFor="c-reason">Reason</label>
                <select
                  id="c-reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  {contactReasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form__row">
                <label htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg"
                  name="message"
                  placeholder="What are we building?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="hero__actions">
                <button className="btn btn--accent" type="submit">
                  SEND THE PING →
                </button>
                <a className="btn btn--ghost" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  MESSAGE ON WHATSAPP
                </a>
              </div>
              <p className="form__hint">
                SEND THE PING opens your email app addressed to {EMAIL} — nothing is sent until you hit
                send. Prefer WhatsApp? That works too.
              </p>
            </form>
          </div>

          <AskArteja />
        </div>
      </div>
    </section>
  );
}
