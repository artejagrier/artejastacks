"use client";

import type { StoryScene as SceneKey } from "@/types/portfolio";

// Lightweight SVG/CSS scenes — one per chapter. All transform/opacity based,
// GPU-friendly, and quiet enough to sit behind text. Color comes from --a.
export function StoryScene({ scene }: { scene: SceneKey }) {
  const stroke = "var(--a)";
  const faint = "rgba(255,255,255,0.12)";

  switch (scene) {
    case "browser-assembles":
      return (
        <svg className="scene-svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <rect x="30" y="30" width="340" height="240" rx="14" stroke={stroke} strokeWidth="1.5" />
          <line x1="30" y1="66" x2="370" y2="66" stroke={faint} />
          <circle cx="50" cy="48" r="4" fill="var(--accent-red)" />
          <circle cx="66" cy="48" r="4" fill="var(--accent-yellow)" />
          <circle cx="82" cy="48" r="4" fill="var(--accent-emerald)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="52" y={90 + i * 24} width={200 - i * 26} height="8" rx="4" fill={faint}>
              <animate attributeName="width" from="0" to={200 - i * 26} dur="1.4s" begin={`${i * 0.2}s`} fill="freeze" />
            </rect>
          ))}
          <rect className="anim-float" x="270" y="150" width="80" height="34" rx="8" fill={stroke} opacity="0.85" />
          <text x="286" y="172" fontFamily="var(--font-mono)" fontSize="12" fill="#07080c">click</text>
        </svg>
      );

    case "dispatch":
      return (
        <svg className="scene-svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <g stroke={faint}>
            {[60, 120, 180, 240].map((y) => (
              <line key={y} x1="20" y1={y} x2="380" y2={y} />
            ))}
            {[80, 160, 240, 320].map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="280" />
            ))}
          </g>
          {Array.from({ length: 18 }).map((_, i) => {
            const h = 20 + ((i * 37) % 80);
            return (
              <rect key={i} x={30 + i * 19} y={150 - h / 2} width="7" height={h} rx="3" fill={stroke} opacity="0.7">
                <animate attributeName="height" values={`${h};${h / 2};${h}`} dur={`${1.6 + (i % 5) * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="y" values={`${150 - h / 2};${150 - h / 4};${150 - h / 2}`} dur={`${1.6 + (i % 5) * 0.2}s`} repeatCount="indefinite" />
              </rect>
            );
          })}
          <circle cx="200" cy="150" r="6" fill={stroke} />
          <circle cx="200" cy="150" r="6" fill="none" stroke={stroke}>
            <animate attributeName="r" from="6" to="60" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.8" to="0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <text x="24" y="292" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">LAT —.—— · LON —.—— · STATUS: RESPONDING</text>
        </svg>
      );

    case "stacking":
      return (
        <svg className="scene-svg" viewBox="0 0 400 320" fill="none" aria-hidden="true">
          {["FRONTEND", "BACKEND", "DATABASES", "SECURITY", "CLOUD", "AI", "ARCHITECTURE"].map((label, i) => (
            <g key={label}>
              <rect x={60} y={20 + i * 38} width="280" height="28" rx="7" stroke={stroke} strokeWidth="1.2" opacity={0.4 + i * 0.08} />
              <text x={74} y={38 + i * 38} fontFamily="var(--font-mono)" fontSize="11" fill="var(--soft)">{label}</text>
              {i < 6 && <line x1="200" y1={48 + i * 38} x2="200" y2={58 + i * 38} stroke={stroke} />}
            </g>
          ))}
        </svg>
      );

    case "shipping":
      return (
        <svg className="scene-svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className="anim-float" style={{ animationDelay: `${i * 0.4}s` }}>
              <rect x={40 + i * 34} y={40 + i * 22} width="180" height="120" rx="10" fill="var(--obsidian)" stroke={stroke} strokeWidth="1.2" opacity={0.9 - i * 0.13} />
              <line x1={40 + i * 34} y1={62 + i * 22} x2={220 + i * 34} y2={62 + i * 22} stroke={faint} />
              <circle cx={54 + i * 34} cy={51 + i * 22} r="3" fill={stroke} />
            </g>
          ))}
        </svg>
      );

    case "classroom":
      return (
        <svg className="scene-svg" viewBox="0 0 400 260" fill="none" aria-hidden="true">
          {["HTML", "CSS", "JS", "REACT", "API", "DB"].map((label, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <g key={label} className="anim-float" style={{ animationDelay: `${i * 0.3}s` }}>
                <rect x={40 + col * 115} y={50 + row * 90} width="95" height="60" rx="10" stroke={stroke} strokeWidth="1.3" fill="rgba(255,255,255,0.02)" />
                <text x={88 + col * 115} y={86 + row * 90} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--soft)">{label}</text>
              </g>
            );
          })}
        </svg>
      );

    case "neural": {
      const nodes = [
        [200, 40], [90, 110], [310, 110], [60, 210], [200, 160], [340, 210], [130, 250], [270, 250],
      ];
      const edges = [
        [0, 1], [0, 2], [1, 4], [2, 4], [1, 3], [2, 5], [4, 6], [4, 7], [3, 6], [5, 7], [0, 4],
      ];
      return (
        <svg className="scene-svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={stroke} strokeWidth="0.8" opacity="0.4">
              <animate attributeName="opacity" values="0.15;0.6;0.15" dur={`${2 + (i % 4) * 0.4}s`} repeatCount="indefinite" />
            </line>
          ))}
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6" fill={stroke}>
              <animate attributeName="r" values="5;8;5" dur={`${2 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      );
    }

    case "converge": {
      const threads = ["CODE", "SECURITY", "LEADERSHIP", "TEACHING", "AI", "COMMUNITY", "GLOBAL"];
      const cx = 200;
      const cy = 150;
      return (
        <svg className="scene-svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          {threads.map((label, i) => {
            const angle = (i / threads.length) * Math.PI * 2;
            const x = cx + Math.cos(angle) * 150;
            const y = cy + Math.sin(angle) * 120;
            return (
              <g key={label}>
                <line x1={x} y1={y} x2={cx} y2={cy} stroke={stroke} strokeWidth="0.8" opacity="0.5" />
                <circle cx={x} cy={y} r="3" fill={stroke} />
                <text x={x} y={y - 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--muted)">{label}</text>
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r="10" fill={stroke} className="anim-pulse" />
        </svg>
      );
    }

    default:
      return null;
  }
}
