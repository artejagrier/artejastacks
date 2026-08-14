"use client";

import { useEffect, useState } from "react";
import { sectionNodes } from "@/data/navigation";
import { useSectionObserver, scrollToSection } from "@/components/navigation/useSectionObserver";

const ids = sectionNodes.map((n) => n.id);

export function Navigation() {
  const { activeIndex, progress } = useSectionObserver(ids);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSheetOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const active = sectionNodes[Math.max(0, activeIndex)];

  function go(id: string) {
    setSheetOpen(false);
    // let the sheet close before scrolling
    requestAnimationFrame(() => scrollToSection(id));
  }

  return (
    <>
      {/* Desktop abstract rail — code-gutter × subway-map × circuit board */}
      <nav className="rail" aria-label="Section navigation">
        <span className="rail__brand" aria-hidden="true">
          ARTEJA//STACKS
        </span>
        <div className="rail__track">
          <div className="rail__line" aria-hidden="true">
            <div className="rail__line-fill" style={{ height: `${progress * 100}%` }} />
          </div>
          <div className="rail__nodes">
            {sectionNodes.map((node, i) => {
              const state = i === activeIndex ? "is-active" : i < activeIndex ? "is-done" : "";
              return (
                <button
                  key={node.id}
                  type="button"
                  className={`rail__node ${state}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  aria-label={`Navigate to ${node.label}`}
                  onClick={() => go(node.id)}
                  title={`${node.index} · ${node.label}${node.hint ? ` — ${node.hint}` : ""}`}
                >
                  <span className="rail__dot" aria-hidden="true" />
                  <span className="rail__num">{node.index}</span>
                  <span className="rail__label">{node.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile top bar with a compact rotating section indicator */}
      <div className="mnav">
        <button
          className="mnav__brand"
          type="button"
          onClick={() => go("home")}
          aria-label="ArtejaStacks — go to top"
        >
          ARTEJA//STACKS
        </button>
        <button
          className="mnav__ind"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={sheetOpen}
          onClick={() => setSheetOpen(true)}
        >
          <span className="chip__dot" aria-hidden="true" />
          {active?.index} {active?.label}
        </button>
      </div>

      {sheetOpen && (
        <div className="msheet" role="dialog" aria-modal="true" aria-label="Section map">
          <button className="msheet__close" type="button" onClick={() => setSheetOpen(false)}>
            close
          </button>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            THE MAP
          </p>
          {sectionNodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className="msheet__item"
              onClick={() => go(node.id)}
            >
              <span className="msheet__num">{node.index}</span>
              <span>{node.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
