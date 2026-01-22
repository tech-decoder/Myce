export default function WhoItsForSection() {
  const audiences = [
    "High-volume digital businesses",
    "Subscription & SaaS",
    "Global e-commerce",
    "Marketplaces",
    "Fintech-adjacent platforms",
  ];

  return (
    <section className="section-spacing bg-neutral-50" id="solutions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                  Who it&apos;s for
                </span>
              </div>
              <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
                Designed for serious revenue operations.
              </h2>
              <p className="text-body-lg text-neutral-600 text-balance max-w-readable">
                Built for teams managing complex payment flows across regions, methods, and risk models.
              </p>
              <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6">
                <p className="text-sm text-neutral-600">
                  If approvals affect your P&L, Myce belongs in your stack.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base text-neutral-800">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
