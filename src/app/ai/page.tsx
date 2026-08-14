import type { Metadata } from "next";
import { AILab } from "@/features/ai/AILab";

export const metadata: Metadata = {
  title: "AI",
  description:
    "AI analysis, governance, security, responsible implementation, LLM applications, and an animated neural lab.",
};

export default function AIPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <AILab />
    </main>
  );
}
