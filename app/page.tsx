import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CustomerLogoCarousel from "./components/CustomerLogoCarousel";
import ProblemSection from "./components/ProblemSection";
import ProblemSolutionFramework from "./components/ProblemSolutionFramework";
import ShiftSection from "./components/ShiftSection";
import WhatMyceDoesSection from "./components/WhatMyceDoesSection";
import StripePayPalSection from "./components/StripePayPalSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ResultsSection from "./components/ResultsSection";
import WhoItsForSection from "./components/WhoItsForSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CustomerLogoCarousel />
      <ProblemSection />
      <ProblemSolutionFramework />
      <ShiftSection />
      <WhatMyceDoesSection />
      <StripePayPalSection />
      <HowItWorksSection />
      <ResultsSection />
      <WhoItsForSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
