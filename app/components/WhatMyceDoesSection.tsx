export default function WhatMyceDoesSection() {
  const capabilities = [
    {
      title: "Smarter approvals",
      description: "Route transactions across multiple paths to maximize success.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accent: (
        <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">
            Approval coverage
          </div>
          <div className="h-2 rounded-full bg-white">
            <div className="h-2 rounded-full bg-primary-500" style={{ width: "76%" }} />
          </div>
          <div className="mt-2 text-xs text-neutral-500">Multi-path routing in real time</div>
        </div>
      ),
      span: "col-span-1",
    },
    {
      title: "Automatic recovery",
      description: "Retry and recover failed payments instead of losing them.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      accent: (
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
            <span>Retry window</span>
            <span>Live</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-neutral-100">
              <div className="h-2 rounded-full bg-accent-400" style={{ width: "62%" }} />
            </div>
            <div className="h-2 rounded-full bg-neutral-100">
              <div className="h-2 rounded-full bg-primary-400" style={{ width: "48%" }} />
            </div>
          </div>
        </div>
      ),
      span: "col-span-1",
    },
    {
      title: "Balanced risk decisions",
      description: "Protect against fraud without killing conversion. Advanced fraud detection that learns from your transaction patterns to approve more legitimate customers.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: (
        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            { label: "Risk score", value: "Balanced" },
            { label: "False declines", value: "Reduced" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/20 bg-white/10 p-3 text-left">
              <div className="text-xs text-white/70">{item.label}</div>
              <div className="text-sm font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      ),
      span: "col-span-2",
      featured: true,
    },
    {
      title: "Checkout as a control point",
      description: "Where payment logic, recovery, and insight converge.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      accent: (
        <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="text-xs text-neutral-500 mb-3">Checkout decision flow</div>
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            <span>Approve</span>
            <span className="text-neutral-300">•</span>
            <span>Retry</span>
            <span className="text-neutral-300">•</span>
            <span>Recover</span>
          </div>
        </div>
      ),
      span: "col-span-1",
    },
    {
      title: "Real-time visibility",
      description: "See where revenue succeeds — and where it gets stuck.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      accent: (
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
            <span>Live approvals</span>
            <span>Now</span>
          </div>
          <div className="h-2 rounded-full bg-neutral-100">
            <div className="h-2 rounded-full bg-primary-500" style={{ width: "70%" }} />
          </div>
        </div>
      ),
      span: "col-span-1",
    },
  ];

  return (
    <section className="section-spacing bg-neutral-50" id="platform">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                What We Deliver
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
              Enterprise Payment Orchestration, Simplified
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto text-balance">
              We implement and manage a complete revenue orchestration solution—so you can focus on growth, not payment complexity.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`${capability.span} ${
                  capability.featured
                    ? "bg-primary-500 text-white p-10"
                    : "bg-white border border-neutral-200 p-8"
                } rounded-2xl hover:shadow-myce-md transition-all duration-myce group`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                    capability.featured
                      ? "bg-white/20 text-white"
                      : "bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white"
                  } transition-all duration-myce`}
                >
                  {capability.icon}
                </div>

                {/* Content */}
                <h3
                  className={`text-xl lg:text-2xl font-bold mb-4 ${
                    capability.featured ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {capability.title}
                </h3>
                <p
                  className={`text-base lg:text-lg leading-relaxed ${
                    capability.featured ? "text-white/90" : "text-neutral-600"
                  }`}
                >
                  {capability.description}
                </p>
                {capability.accent}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
