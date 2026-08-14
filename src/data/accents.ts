import type { AccentKey } from "@/types/portfolio";

// Single source of truth for the accent palette. Foundation is
// purple × white × black × emerald; the rest are the "controlled bursts".
export const accentHex: Record<AccentKey, string> = {
  violet: "#8d5cff",
  emerald: "#2ee59d",
  blue: "#2f7cff",
  pink: "#ff5ca8",
  orange: "#ff8a3d",
  yellow: "#ffd23d",
  lime: "#b6ff3d",
  cyan: "#3de0ff",
  red: "#ff5c5c",
};

// Returns a CSS custom property reference so components can drive local color
// with `style={{ ["--a" as string]: accentVar(key) }}`.
export function accentVar(key: AccentKey): string {
  return `var(--accent-${key})`;
}
