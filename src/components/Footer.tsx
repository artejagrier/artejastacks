import Link from "next/link";
import { profile, socialLinks } from "@/data/profile";
import { routeCards } from "@/data/navigation";
import { RunItBack } from "@/components/RunItBack";

const footerSocialLinks = socialLinks.filter((s) => !["GitHub", "LinkedIn"].includes(s.label));

// Ending credits of a film.
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <RunItBack />

        <p className="footer__big" aria-hidden="true">
          ARTEJA//STACKS
        </p>

        <p className="footer__credits">
          Designed. Engineered. Written. Deployed. <b>By Arteja.</b>
        </p>
        <p className="eyebrow" style={{ marginTop: "0.8rem" }}>
          Build. Analyze. Lead. Teach. Connect.
        </p>

        <div className="footer__meta">
          <nav className="footer__links" aria-label="Footer navigation">
            {routeCards.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label}
              </Link>
            ))}
          </nav>
          <div className="footer__links">
            {footerSocialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                title={s.isPlaceholder ? "Placeholder link — pending real handle" : undefined}
              >
                {s.label}
                {s.isPlaceholder ? " ↗" : ""}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__meta" style={{ borderTop: 0, paddingTop: 0, marginTop: "1.2rem" }}>
          <p className="footer__note">No website builders were emotionally harmed during production.</p>
          <p className="footer__note">{profile.locationLine}</p>
        </div>
      </div>
    </footer>
  );
}
