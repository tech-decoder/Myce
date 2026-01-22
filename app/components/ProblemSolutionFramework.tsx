export default function ProblemSolutionFramework() {
  const problems = [
    "Legitimate customers declined with no explanation",
    "Sudden account reviews during growth",
    "Fraud tools blocking good payments",
  ];

  const handles = [
    "Smart routing evaluates multiple paths",
    "Real-time retry logic recovers failed payments",
    "Balanced risk decisions optimize approvals",
  ];

  const solutions = [
    "More payments approved across multiple processors",
    "Automatic recovery instead of lost revenue",
    "Better fraud protection without killing conversion",
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Revenue Challenges
            </span>
          </div>
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
            Single-provider payments create risk
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            As your business grows, centralized payment systems expose you to fragility. Here's how Myce solves this.
          </p>
        </div>

        {/* 3-Column Framework */}
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { title: "Problems", items: problems, tone: "neutral", metric: "Declines increase at scale" },
            { title: "Myce Handles", items: handles, tone: "primary", metric: "Routing adapts in real time" },
            { title: "Solutions", items: solutions, tone: "accent", metric: "Approvals stay resilient" },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    group.tone === "primary"
                      ? "bg-primary-50 text-primary-500"
                      : group.tone === "accent"
                        ? "bg-accent-50 text-accent-500"
                        : "bg-primary-50 text-primary-500"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-current" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900">{group.title}</h3>
              </div>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {group.metric}
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  </div>
                    <p className="text-sm text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow indicators (desktop only) */}
        <div className="hidden lg:flex items-center justify-center space-x-12 mt-12">
          <div className="flex items-center space-x-3">
            <div className="text-neutral-600 font-semibold text-sm">Fragile</div>
            <svg className="w-16 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 64 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h60m-6-6l6 6-6 6" />
            </svg>
          </div>
          <div className="text-accent-500 font-semibold text-sm">Resilient</div>
        </div>
      </div>
    </section>
  );
}
