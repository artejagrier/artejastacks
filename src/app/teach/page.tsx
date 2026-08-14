import type { Metadata } from "next";
import { Classroom } from "@/features/teaching/Classroom";

export const metadata: Metadata = {
  title: "Teach",
  description: "Knowledge should travel. Interactive lessons across the full stack, AI, and security.",
};

export default function TeachPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <Classroom />
    </main>
  );
}
