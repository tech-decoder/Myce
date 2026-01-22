export default function ProblemSection() {
  const painPoints = [
    "Legitimate customers declined with no explanation",
    "Sudden account reviews during growth",
    "Fraud tools blocking good payments",
    "No recovery when a payment fails",
    "One provider becomes a single point of failure",
  ];

  const anchors = [
    {
      title: "Approval coverage",
      description: "Multiple routing paths keep legitimate payments moving.",
    },
    {
      title: "Recovery depth",
      description: "Retries and smart fallbacks prevent silent loss.",
    },
    {
      title: "Risk balance",
      description: "Protect revenue without blocking real customers.",
    },
  ];

  return (
    <section className="section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                Checkout risk
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-6 text-balance">
              Checkout alone is not enough.
            </h2>
            <div className="text-body-lg text-neutral-600 space-y-5 max-w-readable text-balance mb-10">
              <p>Most payment platforms make a single decision: approve or decline.</p>
              <p>That works — until volume, velocity, or geography increases.</p>
              <p>Legitimate customers get blocked. Payments fail silently. Revenue becomes fragile.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {anchors.map((anchor) => (
              <div key={anchor.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Anchor</span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{anchor.title}</h3>
                <p className="text-sm text-neutral-600">{anchor.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">Fragility gauge</div>
              <div className="h-2 rounded-full bg-white">
                <div className="h-2 rounded-full bg-primary-500" style={{ width: "68%" }} />
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Single‑provider dependence rises as volume and geography expand.
              </p>
            </div>
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <p className="text-sm text-neutral-600">
                Myce adds orchestration on top of your providers so approvals stay stable as you scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
