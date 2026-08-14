"use client";

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";
import type { AccentKey } from "@/types/portfolio";
import { accentHex } from "@/data/accents";

// A layered neural field: three columns of nodes (input → hidden → output),
// animated pulses on edges, and signals that travel node-to-node. Purely
// SVG + SMIL so it's GPU-cheap and needs no JS animation loop. Colored in the
// foundation palette (violet/emerald/white) with a controlled accent that
// follows the selected AI area. Reacts to selection via `emphasis` (0..n layer
// to spotlight) and to reduced-motion (freezes into a static diagram).
export function NeuralField({
  accent,
  emphasisLayer,
}: {
  accent: AccentKey;
  emphasisLayer: number; // 0 input, 1 hidden-a, 2 hidden-b, 3 output
}) {
  const reduce = useReducedMotion();
  const color = accentHex[accent];

  // Deterministic layered layout on a 400×260 viewBox.
  const layers = useMemo(() => {
    const cols = [40, 150, 260, 360];
    const counts = [3, 5, 5, 3];
    return cols.map((x, li) => {
      const n = counts[li];
      return Array.from({ length: n }, (_, i) => ({
        id: `${li}-${i}`,
        x,
        y: 40 + (i * (180 / (n - 1 || 1))),
        layer: li,
      }));
    });
  }, []);

  const nodes = layers.flat();

  // Fully-connected between adjacent layers.
  const edges = useMemo(() => {
    const out: { x1: number; y1: number; x2: number; y2: number; key: string; li: number }[] = [];
    for (let li = 0; li < layers.length - 1; li++) {
      for (const a of layers[li]) {
        for (const b of layers[li + 1]) {
          out.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key: `${a.id}>${b.id}`, li });
        }
      }
    }
    return out;
  }, [layers]);

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Animated neural network visualization"
    >
      <defs>
        <radialGradient id="nf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="400" height="260" fill="url(#nf-glow)" opacity="0.35" />

      {/* edges */}
      {edges.map((e) => {
        const hot = e.li === emphasisLayer || e.li + 1 === emphasisLayer;
        return (
          <line
            key={e.key}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke={hot ? color : "rgba(255,255,255,0.16)"}
            strokeWidth={hot ? 0.8 : 0.4}
            opacity={hot ? 0.55 : 0.28}
          >
            {!reduce && (
              <animate
                attributeName="opacity"
                values={hot ? "0.25;0.7;0.25" : "0.12;0.32;0.12"}
                dur={`${2.4 + (e.key.length % 4) * 0.5}s`}
                repeatCount="indefinite"
              />
            )}
          </line>
        );
      })}

      {/* traveling signals along a sample of edges */}
      {!reduce &&
        edges
          .filter((_, i) => i % 6 === 0)
          .map((e, i) => (
            <circle key={`sig-${e.key}`} r="1.8" fill={color}>
              <animate
                attributeName="cx"
                values={`${e.x1};${e.x2}`}
                dur={`${1.8 + (i % 5) * 0.4}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${e.y1};${e.y2}`}
                dur={`${1.8 + (i % 5) * 0.4}s`}
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="0;1;0" dur={`${1.8 + (i % 5) * 0.4}s`} repeatCount="indefinite" />
            </circle>
          ))}

      {/* nodes */}
      {nodes.map((node) => {
        const emphasised = node.layer === emphasisLayer;
        const nodeColor = node.layer === 0 ? "#f6f4ef" : node.layer === 3 ? accentHex.emerald : color;
        return (
          <g key={node.id}>
            {emphasised && <circle cx={node.x} cy={node.y} r="9" fill={nodeColor} opacity="0.14" />}
            <circle cx={node.x} cy={node.y} r={emphasised ? 5 : 3.6} fill={nodeColor} opacity={emphasised ? 1 : 0.75}>
              {!reduce && (
                <animate
                  attributeName="r"
                  values={emphasised ? "4.5;6;4.5" : "3.2;4;3.2"}
                  dur={`${2 + (node.y % 3) * 0.4}s`}
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </g>
        );
      })}
    </svg>
  );
}
