export default function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Diagram Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 p-8 lg:p-12 shadow-card">

        {/* Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">

          {/* Left: Checkout */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs bg-white border-2 border-neutral-300 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-neutral-900 mb-1">Your Checkout</div>
                <div className="text-xs text-neutral-500">Customer payment</div>
              </div>
            </div>
          </div>

          {/* Center: Arrows & Myce Layer */}
          <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4">
            {/* Arrow In */}
            <div className="flex items-center justify-center lg:rotate-0 rotate-90">
              <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            {/* Myce Orchestration Layer */}
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 shadow-myce min-w-[200px]">
                <div className="text-center mb-4">
                  <div className="text-sm font-bold text-white mb-1">Myce Orchestration</div>
                  <div className="text-xs text-white/80">Intelligent Layer</div>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "Smart Routing", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" },
                    { label: "Auto Recovery", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
                    { label: "Risk Balance", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                      <span className="text-xs text-white font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Out */}
            <div className="flex items-center justify-center lg:rotate-0 rotate-90">
              <svg className="w-12 h-12 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Right: Multiple Processors */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
              Multiple Processors
            </div>
            {["Stripe", "Adyen", "PayPal", "Others"].map((processor, idx) => (
              <div key={idx} className="w-full max-w-xs bg-white border border-neutral-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                    {processor}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                    <span className="text-xs text-accent-600 font-medium">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Explanation */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Myce sits between your checkout and payment processors, intelligently routing transactions, recovering failed payments, and balancing risk—so you never depend on a single provider.
            </p>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-100 rounded-full blur-2xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full blur-2xl opacity-20 pointer-events-none" />
    </div>
  );
}
