import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MarketSummary } from "@/components/MarketSummary";
import { RolesExplorer } from "@/components/RolesExplorer";
import { CompilerPreview } from "@/components/CompilerPreview";
import { Difference } from "@/components/Difference";
import { Method } from "@/components/Method";
import { CognitiveScience } from "@/components/CognitiveScience";
import { Portfolio } from "@/components/Portfolio";
import { Manifesto } from "@/components/Manifesto";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <MarketSummary />
        <RolesExplorer />
        <CompilerPreview />
        <Difference />
        <Method />
        <CognitiveScience />
        <Portfolio />
        <Manifesto />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
