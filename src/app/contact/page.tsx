import type { Metadata } from "next";
import { Opportunities } from "@/features/opportunities/Opportunities";
import { Contact } from "@/features/contact/Contact";

export const metadata: Metadata = {
  title: "Open a Connection",
  description: "Hire, build, or learn with Arteja. Send the ping.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "clamp(3rem,8vh,5rem)" }}>
      <Opportunities />
      <Contact />
    </main>
  );
}
