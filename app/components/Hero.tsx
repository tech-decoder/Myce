const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Content Container */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Revenue Orchestration Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-5 leading-[1.1] text-balance">
            <span className="bg-gradient-to-r from-neutral-900 via-primary-600 to-neutral-900 bg-clip-text text-transparent">
              Stop Losing Revenue to Payment Provider Lock-In
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary-600 mb-4 text-balance">
            Enterprise payment orchestration, delivered in weeks—not months.
          </p>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto text-balance">
            We help finance teams implement multi-processor payment orchestration with intelligent routing, automatic recovery, and real-time analytics. All the benefits, none of the complexity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white text-base font-semibold rounded-full hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md hover:scale-105"
            >
              Get a Custom Quote
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-6 py-3 text-primary-600 text-base font-medium rounded-full border border-primary-200 bg-white hover:border-primary-400 transition-colors duration-myce group"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
              See how it works
              <svg className="ml-2 w-4 h-4 text-primary-500 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Service Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              {
                label: "Live in 2 weeks",
                icon: "M13 10V3L4 14h7v7l9-11h-7z" // lightning bolt - speed
              },
              {
                label: "White-glove onboarding",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // user group - personalized service
              },
              {
                label: "24/7 support included",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" // chat bubble - support
              },
              {
                label: "No dev team required",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // code icon - no coding needed
              }
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 shadow-card"
              >
                <svg className="w-3 h-3 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </span>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200">
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-medium text-neutral-600">Powered by enterprise-grade infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
