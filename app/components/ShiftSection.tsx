export default function ShiftSection() {
  return (
    <section className="section-spacing bg-primary-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-medium text-white tracking-wide uppercase">
                The Shift
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-white mb-6 text-balance">
              Payments shouldn&apos;t be binary.
            </h2>
            <div className="grid gap-4 max-w-readable">
              {[
                {
                  title: "Binary logic breaks growth",
                  body: "Growing businesses need more than “approve or block.”",
                },
                {
                  title: "Orchestration replaces guesswork",
                  body: "Approvals, retries, recovery, and risk work together in real time.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                  <p className="text-sm text-white/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Right */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12">
              {/* Comparison Visual */}
              <div className="space-y-8">
                {/* Old Way */}
                <div>
                  <div className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">
                    Single Provider
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-2 bg-white/20 rounded-full" />
                    <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="text-white/50 text-sm mt-2">Binary: Approve or Block</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* New Way */}
                <div>
                  <div className="text-white font-medium mb-3 uppercase tracking-wide text-sm">
                    Revenue Orchestration
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-accent-400 rounded-full" />
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-accent-400 rounded-full" />
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-accent-400 rounded-full" />
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white/90 text-sm mt-2">Multiple paths, intelligent routing, automatic recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
