import Image from "next/image";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Left: Content */}
          <div className="text-left max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                Revenue Orchestration Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-[42px] lg:text-[42px] font-black mb-5 leading-[1.15] text-neutral-900 max-w-lg">
              Stop Losing <span className="text-primary-600">Revenue</span> to Payment Provider <span className="text-primary-600">Lock-In</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-neutral-600 mb-8 leading-[1.6] max-w-xl">
              Enterprise payment orchestration, delivered in <span className="text-primary-600 font-semibold">weeks—not months</span>. Intelligent routing, automatic recovery, and real-time analytics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center whitespace-nowrap px-6 py-3 bg-primary-500 text-white text-sm font-semibold rounded-full hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md hover:scale-105"
              >
                Get Quote
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center whitespace-nowrap px-5 py-2.5 text-primary-600 text-sm font-medium rounded-full border-2 border-primary-200 bg-white hover:border-primary-400 hover:bg-primary-50 transition-all duration-myce group"
              >
                How it works
                <svg className="ml-2 w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Architecture Diagram */}
          <div className="hidden lg:block">
            <ArchitectureDiagramInline />
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline version for Hero - horizontal flow with actual Myce logo
function ArchitectureDiagramInline() {
  return (
    <div className="relative w-full">
      {/* Diagram Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 p-6 shadow-card">
        {/* Architecture Flow - Horizontal */}
        <div className="flex items-center gap-4">
          {/* Left: Checkout */}
          <div className="flex-shrink-0 w-36 bg-white border-2 border-neutral-300 rounded-xl p-3 shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-neutral-900 mb-1">Your Checkout</div>
              <div className="text-xs text-neutral-500">Payment</div>
            </div>
          </div>

          {/* Arrow Right */}
          <svg className="w-6 h-6 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>

          {/* Middle: Myce Layer */}
          <div className="w-[280px] bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-5 shadow-myce">
            {/* Myce Logo - Above text */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/1.png"
                alt="Myce"
                width={90}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="text-center mb-4">
              <div className="text-base font-bold text-white mb-1">Myce Orchestration</div>
              <div className="text-xs text-white/80">Intelligent Layer</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Route", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" },
                { label: "Recover", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
                { label: "Balance", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1.5 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                  <span className="text-xs text-white font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <svg className="w-6 h-6 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>

          {/* Right: Multiple Processors */}
          <div className="flex-shrink-0 w-40 space-y-1.5">
            <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wide text-center mb-3">
              Processors
            </div>
            {["Stripe", "Adyen", "PayPal"].map((processor, idx) => (
              <div key={idx} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                    {processor}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
