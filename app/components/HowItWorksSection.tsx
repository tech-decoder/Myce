export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Transaction starts at checkout",
      description: "Customer initiates payment",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Payment logic evaluates context in real time",
      description: "Routing, risk, and recovery decisions happen instantly",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Smart retries and recovery prevent losses",
      description: "Failed payments get multiple chances to succeed",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Revenue data feeds optimization",
      description: "Continuous learning improves approval rates",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-spacing bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
              How it works
            </h2>
            <p className="text-body-lg text-neutral-600 text-balance">
              A coordinated flow that turns fragile payments into a resilient revenue engine.
            </p>
          </div>

          <div className="relative">
            <svg
              className="hidden lg:block absolute left-0 right-0 top-16 h-32 w-full"
              viewBox="0 0 1000 180"
              fill="none"
            >
              <path
                d="M40 140 C 180 20, 320 20, 460 140 S 740 260, 920 80"
                stroke="#0043FF"
                strokeWidth="2.5"
                strokeDasharray="6 10"
                opacity="0.4"
              />
            </svg>

            <div className="grid gap-6 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="text-sm font-semibold text-neutral-500">{step.number}</div>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-primary-100 bg-primary-50 p-6 text-center">
            <p className="text-base font-semibold text-neutral-900">
              Result: more approved sales, fewer surprises, predictable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
