import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { CursorGlow } from "@/components/CursorGlow";
import { Terminal } from "@/components/easter-eggs/Terminal";
import { EasterEggs } from "@/components/easter-eggs/EasterEggs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artejastacks.com"),
  title: {
    default: "ARTEJA//STACKS — Full Stack Developer, Software Engineer & AI Analyst",
    template: "%s | ARTEJA//STACKS",
  },
  description:
    "The interactive digital world of Arteja — Full Stack Developer, Software Engineer, AI Analyst, technology leader, and technical educator. I build things the internet didn't know it needed.",
  openGraph: {
    title: "ARTEJA//STACKS",
    description:
      "I build things the internet didn't know it needed. Software × AI × People × Possibility. Based abroad. Building globally.",
    url: "https://artejastacks.com",
    siteName: "ARTEJA//STACKS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTEJA//STACKS",
    description: "Full Stack Developer · Software Engineer · AI Analyst · Technology Leader · Technical Educator",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <Loader />
        <Navigation />
        <CursorGlow />
        <div className="shell">
          {children}
          <Footer />
        </div>
        <Terminal />
        <EasterEggs />
      </body>
    </html>
  );
}
