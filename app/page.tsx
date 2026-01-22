import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DashboardMockup from "./components/DashboardMockup";
import CustomerLogoCarousel from "./components/CustomerLogoCarousel";
import ProblemSection from "./components/ProblemSection";
import ProblemSolutionFramework from "./components/ProblemSolutionFramework";
import WhatMyceDoesSection from "./components/WhatMyceDoesSection";
import ImplementationProcess from "./components/ImplementationProcess";
import StripePayPalSection from "./components/StripePayPalSection";
import ResultsSection from "./components/ResultsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DashboardMockup />
        </div>
      </section>
      <CustomerLogoCarousel />
      <ProblemSection />
      <ProblemSolutionFramework />
      <WhatMyceDoesSection />
      <ImplementationProcess />
      <StripePayPalSection />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
