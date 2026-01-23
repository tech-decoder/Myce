const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

const steps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    duration: "Day 1-2",
    description: "We analyze your current payment stack, identify optimization opportunities, and design a custom orchestration strategy.",
    deliverables: [
      { text: "Payment stack audit", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
      { text: "Routing strategy", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
      { text: "ROI projection", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" }
    ],
  },
  {
    num: "02",
    title: "Configuration & Setup",
    duration: "Week 1",
    description: "Our team configures routing rules, retry logic, fraud parameters, and recovery workflows tailored to your business.",
    deliverables: [
      { text: "Processor integration", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
      { text: "Rule configuration", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
      { text: "Testing environment", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" }
    ],
  },
  {
    num: "03",
    title: "Go Live & Optimize",
    duration: "Week 2",
    description: "Launch in production with ongoing monitoring, optimization, and dedicated support. We continuously refine your setup for maximum performance.",
    deliverables: [
      { text: "Production deployment", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
      { text: "24/7 monitoring", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
      { text: "Ongoing optimization", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
    ],
  },
];

export default function ImplementationProcess() {
  return (
    <section className="section-spacing bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4 sm:mb-5 lg:mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-[10px] sm:text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Implementation Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-h2-sm lg:text-h2 text-neutral-900 mb-3 sm:mb-4 text-balance px-4">
            Live in 2 Weeks, Not 6 Months
          </h2>
          <p className="text-base sm:text-lg lg:text-body-lg text-neutral-600 max-w-2xl mx-auto text-balance px-4">
            Our white-glove onboarding gets you from first call to production faster than building in-house—with enterprise-grade results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Horizontal on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-16 lg:top-20 h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-accent-400" />

          {/* Connecting Line - Vertical on mobile */}
          <div className="lg:hidden absolute left-8 sm:left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary-200 via-primary-500 to-accent-400" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.num} className="relative">
                {/* Step Number Badge - Responsive sizing */}
                <div className="flex items-start lg:items-center lg:justify-center mb-5 sm:mb-6">
                  <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-myce flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-white">{step.num}</span>
                  </div>
                  {/* Mobile: Show duration next to badge */}
                  <div className="lg:hidden ml-4 flex items-center">
                    <div className="inline-flex items-center px-3 py-1.5 sm:py-2 rounded-full bg-primary-50 border border-primary-100">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-semibold text-primary-700">{step.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Step Card - Responsive padding */}
                <div className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-myce ml-0 lg:ml-0">
                  {/* Duration Badge - Desktop only (mobile shows next to badge) */}
                  <div className="hidden lg:inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4">
                    <svg className="w-3 h-3 text-primary-600 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold text-primary-700">{step.duration}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-5 leading-relaxed">{step.description}</p>

                  {/* Deliverables - Touch-friendly on mobile */}
                  <div className="pt-4 sm:pt-5 border-t border-neutral-100">
                    <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                      Deliverables
                    </div>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-neutral-700">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile: Vertical connector (down arrow) between steps - Smooth rounded design */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Mobile-optimized */}
        <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <p className="text-sm sm:text-base text-neutral-600">Ready to get started?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-3.5 bg-primary-500 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-primary-600 active:bg-primary-700 transition-all duration-myce shadow-myce hover:shadow-myce-md sm:hover:scale-105 min-h-touch-lg"
            >
              Schedule Discovery Call
            </a>
            <p className="text-xs sm:text-sm text-neutral-500">No commitment required • 30-minute consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
