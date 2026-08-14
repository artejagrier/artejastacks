// Tiny event bus so any component (hero button, command trigger) can open the
// hidden terminal without prop drilling.
const EVENT = "arteja:terminal";

export function openTerminal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT));
  }
}

export function onOpenTerminal(handler: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
