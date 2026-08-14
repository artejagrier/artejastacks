import type { Metadata } from "next";
import { Projects } from "@/features/projects/Projects";

export const metadata: Metadata = {
  title: "Build",
  description: "Projects, case studies, architecture, and the part that almost broke me.",
};

export default function WorkPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <Projects />
    </main>
  );
}
