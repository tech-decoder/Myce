export default function ProblemSection() {
  const painPoints = [
    {
      text: "Legitimate customers declined with no explanation",
      icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" // x-circle - rejection
    },
    {
      text: "Sudden account reviews during growth",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" // exclamation-triangle - warning
    },
    {
      text: "Fraud tools blocking good payments",
      icon: "M12 9v2m0 4h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" // shield-exclamation - security blocking
    },
    {
      text: "No recovery when a payment fails",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" // arrow-path with X concept - no retry
    },
    {
      text: "One provider becomes a single point of failure",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" // server - infrastructure risk
    },
  ];

  const anchors = [
    {
      title: "Approval coverage",
      description: "Multiple routing paths keep legitimate payments moving.",
      icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // check-badge - approval
    },
    {
      title: "Recovery depth",
      description: "Retries and smart fallbacks prevent silent loss.",
      icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" // arrow-path - retry/recovery
    },
    {
      title: "Risk balance",
      description: "Protect revenue without blocking real customers.",
      icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" // scale - balance
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
                <div key={point.text} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.icon} />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-700">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {anchors.map((anchor) => (
              <div key={anchor.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={anchor.icon} />
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
