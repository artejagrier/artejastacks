import type { Metadata } from "next";
import { Impact } from "@/features/impact/Impact";

export const metadata: Metadata = {
  title: "Impact",
  description: "Build people, too. Community, access, mentorship, and technology for more people.",
};

export default function ImpactPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <Impact />
    </main>
  );
}
