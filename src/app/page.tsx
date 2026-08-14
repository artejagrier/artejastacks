import { Hero } from "@/features/hero/Hero";
import { BookwormStrip } from "@/components/BookwormStrip";
import { Story } from "@/features/story/Story";
import { Playground } from "@/features/playground/Playground";
import { About } from "@/features/about/About";
import { StackPlayground } from "@/features/stack/StackPlayground";
import { Credentials } from "@/features/credentials/Credentials";
import { Projects } from "@/features/projects/Projects";
import { AILab } from "@/features/ai/AILab";
import { Classroom } from "@/features/teaching/Classroom";
import { Impact } from "@/features/impact/Impact";
import { Connections } from "@/features/connections/Connections";
import { World } from "@/features/world/World";
import { Opportunities } from "@/features/opportunities/Opportunities";
import { Contact } from "@/features/contact/Contact";

// The one-page interactive world. Section ids line up with the abstract rail
// (see src/data/navigation.ts). Deep-link routes reuse these same features.
export default function Home() {
  return (
    <main>
      <Hero />
      <BookwormStrip />
      <Story />
      <Playground />
      <About />
      <StackPlayground />
      <Credentials />
      <Projects />
      <AILab />
      <Classroom />
      <Impact />
      <Connections />
      <World />
      <Opportunities />
      <Contact />
    </main>
  );
}
