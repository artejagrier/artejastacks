import type { Metadata } from "next";
import { World } from "@/features/world/World";

export const metadata: Metadata = {
  title: "World",
  description: "My office moves. My standards don't. Global, remote, cross-border technology.",
};

export default function WorldPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <World />
    </main>
  );
}
