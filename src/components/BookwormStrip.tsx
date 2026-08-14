// A thin neon-green intermission strip directly below the hero that introduces
// the hidden Bookworm easter-egg challenge. Compact, full-bleed background,
// dark text for contrast. The tiny worm peek/wiggle is CSS-only and is disabled
// under prefers-reduced-motion by the global rule. The actual easter egg lives
// elsewhere (components/easter-eggs/EasterEggs.tsx).
export function BookwormStrip() {
  return (
    <aside className="wormstrip" aria-label="Bookworm challenge">
      <div className="wrap wormstrip__inner">
        <div className="wormstrip__msg">
          <p className="wormstrip__lead">
            Psst&hellip; I&apos;m a bookworm. <span aria-hidden="true">📚🐛</span>
          </p>
          <p className="wormstrip__sub">
            There&apos;s one loose somewhere in my stack. Catch it if you can.
          </p>
          <p className="wormstrip__ach">achievement unlocked if you find it.</p>
        </div>
        <span className="wormstrip__worm" aria-hidden="true">🐛</span>
      </div>
    </aside>
  );
}
