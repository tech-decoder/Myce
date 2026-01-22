const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-neutral-900 mb-5 leading-tight text-balance">
            Stop Losing Revenue to Payment Provider Lock-In
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 mb-4 text-balance">
            Enterprise payment orchestration, delivered in weeks—not months.
          </p>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto text-balance">
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
              "Live in 2 weeks",
              "White-glove onboarding",
              "24/7 support included",
              "No dev team required"
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 shadow-card"
              >
                <svg className="w-3 h-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
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
