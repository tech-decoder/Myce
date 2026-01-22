export default function StripePayPalSection() {
  return (
    <section className="section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual - Left */}
          <div className="order-2 lg:order-1">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 lg:p-12">
              {/* Provider Dependency Visual */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                    Single Provider Risk
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Account holds during growth spikes",
                    "Limited control over fraud rules",
                    "No backup when systems go down",
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                      </div>
                      <p className="text-sm text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-12 bg-primary-50 border-2 border-primary-200 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">Myce Layer</span>
                    </div>
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="flex-1 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <span className="text-neutral-500 font-medium text-xs">Your Providers</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 text-center mt-3">
                    Orchestration layer adds intelligence and redundancy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                For Growing Companies
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-6 text-balance">
              Built for companies that have outgrown single-provider payments.
            </h2>
            <div className="grid gap-4 max-w-readable">
              {[
                {
                  title: "Great to start",
                  body: "Stripe and PayPal are excellent for getting started.",
                },
                {
                  title: "Risk at scale",
                  body: "Centralized systems create fragility as volume and regions expand.",
                },
                {
                  title: "Orchestrated control",
                  body: "Myce adds intelligence, recovery, and control around the checkout.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card">
                  <div className="text-sm font-semibold text-neutral-900 mb-2">{item.title}</div>
                  <p className="text-sm text-neutral-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
