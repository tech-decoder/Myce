import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import ProblemSection from "./components/ProblemSection";
import ShiftSection from "./components/ShiftSection";
import WhatMyceDoesSection from "./components/WhatMyceDoesSection";
import StripePayPalSection from "./components/StripePayPalSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ResultsSection from "./components/ResultsSection";
import WhoItsForSection from "./components/WhoItsForSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustSignals />
      <ProblemSection />
      <ShiftSection />
      <WhatMyceDoesSection />
      <StripePayPalSection />
      <HowItWorksSection />
      <ResultsSection />
      <WhoItsForSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
