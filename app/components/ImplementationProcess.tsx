const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

const steps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    duration: "Day 1-2",
    description: "We analyze your current payment stack, identify optimization opportunities, and design a custom orchestration strategy.",
    deliverables: ["Payment stack audit", "Routing strategy", "ROI projection"],
  },
  {
    num: "02",
    title: "Configuration & Setup",
    duration: "Week 1",
    description: "Our team configures routing rules, retry logic, fraud parameters, and recovery workflows tailored to your business.",
    deliverables: ["Processor integration", "Rule configuration", "Testing environment"],
  },
  {
    num: "03",
    title: "Go Live & Optimize",
    duration: "Week 2",
    description: "Launch in production with ongoing monitoring, optimization, and dedicated support. We continuously refine your setup for maximum performance.",
    deliverables: ["Production deployment", "24/7 monitoring", "Ongoing optimization"],
  },
];

export default function ImplementationProcess() {
  return (
    <section className="section-spacing bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Implementation Process
            </span>
          </div>
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
            Live in 2 Weeks, Not 6 Months
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            Our white-glove onboarding gets you from first call to production faster than building in-house—with enterprise-grade results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute left-0 right-0 top-20 h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-accent-400" />

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.num} className="relative">
                {/* Step Number Badge */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-myce">
                    <span className="text-2xl font-bold text-white">{step.num}</span>
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-myce">
                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4">
                    <svg className="w-3 h-3 text-primary-600 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold text-primary-700">{step.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{step.description}</p>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                      Deliverables
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-neutral-700">
                          <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-sm text-neutral-600">Ready to get started?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white text-base font-semibold rounded-full hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md hover:scale-105"
            >
              Schedule Discovery Call
            </a>
            <p className="text-xs text-neutral-500">No commitment required • 30-minute consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
