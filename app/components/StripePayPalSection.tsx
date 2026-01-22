export default function StripePayPalSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual - Left */}
          <div className="order-2 lg:order-1">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 lg:p-12">
              {/* Provider Dependency Visual */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-200 mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                    Single Provider Risk
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-600" />
                    </div>
                    <p className="text-sm text-neutral-700">Account holds during growth spikes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-600" />
                    </div>
                    <p className="text-sm text-neutral-700">Limited control over fraud rules</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-600" />
                    </div>
                    <p className="text-sm text-neutral-700">No backup when systems go down</p>
                  </div>
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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-6">
              <span className="text-xs font-medium text-primary-700 tracking-wide uppercase">
                For Growing Companies
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-6">
              Built for companies that have outgrown single-provider payments.
            </h2>
            <div className="text-lg text-neutral-600 space-y-4 max-w-readable">
              <p>
                Stripe and PayPal are excellent for getting started.
              </p>
              <p>
                But at scale, centralized systems create risk.
              </p>
              <p>
                Myce reduces dependency on any single provider by adding intelligence, recovery, and control around the checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
