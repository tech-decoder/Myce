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
                      <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-accent-400 rounded-full" />
                      <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-accent-400 rounded-full" />
                      <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
