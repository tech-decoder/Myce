export default function ResultsSection() {
  const proofPoints = [
    {
      title: "Approvals stay steady at scale",
      description: "Routing intelligence adapts to location, method, and risk profile.",
    },
    {
      title: "Recovery happens automatically",
      description: "Retries and fallback logic reduce dropped transactions.",
    },
    {
      title: "Risk is balanced, not blunt",
      description: "Fraud controls are tuned to protect revenue, not block it.",
    },
    {
      title: "Revenue visibility is real-time",
      description: "See where approvals succeed and where they stall.",
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                Proof
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
              Operational proof, not marketing claims
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-readable text-balance">
              We measure success by stability, recovery coverage, and visibility — the same
              signals your finance and risk teams report on.
            </p>
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm text-neutral-600">
                Replace vanity metrics with performance signals you can defend internally.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-2">Signal snapshot</div>
              <div className="grid grid-cols-3 gap-3">
                {["Approval stability", "Recovery depth", "Risk posture"].map((item) => (
                  <div key={item} className="rounded-lg bg-white border border-neutral-200 p-3 text-xs text-neutral-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {proofPoints.map((point, idx) => {
              // Different color themes for each card
              const themes = [
                { bg: "bg-primary-50", iconBg: "bg-primary-100", iconColor: "text-primary-600", cardBg: "bg-primary-50/30" },
                { bg: "bg-accent-50", iconBg: "bg-accent-100", iconColor: "text-accent-600", cardBg: "bg-accent-50/30" },
                { bg: "bg-neutral-50", iconBg: "bg-neutral-200", iconColor: "text-neutral-700", cardBg: "bg-neutral-50" },
                { bg: "bg-primary-50", iconBg: "bg-primary-100", iconColor: "text-primary-600", cardBg: "bg-white" },
              ];
              const theme = themes[idx];

              return (
                <div
                  key={point.title}
                  className={`rounded-2xl border border-neutral-200 ${theme.cardBg} p-6 shadow-card`}
                >
                  <div className={`w-12 h-12 rounded-full ${theme.iconBg} flex items-center justify-center mb-4`}>
                    <svg className={`w-5 h-5 ${theme.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
