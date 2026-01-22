export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Dashboard Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
        {/* Dashboard Header */}
        <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-lg bg-primary-500" />
            <div className="space-y-1">
              <div className="h-3 w-32 bg-neutral-300 rounded" />
              <div className="h-2 w-24 bg-neutral-200 rounded" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/images/2.png" alt="Myce" className="h-6 w-auto opacity-70" />
            <div className="w-20 h-8 bg-neutral-200 rounded" />
            <div className="w-20 h-8 bg-primary-500 rounded" />
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Approval health", value: "Stable", trend: "Monitored" },
              { label: "Recovery coverage", value: "Expanding", trend: "Automated" },
              { label: "Routing diversity", value: "Adaptive", trend: "Live" },
              { label: "Risk balance", value: "Controlled", trend: "Aligned" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 hover:border-primary-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="text-xs text-neutral-600 mb-1 group-hover:text-primary-600 transition-colors">
                  {stat.label}
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-xs text-primary-500 font-medium">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Chart + Processors */}
          <div className="grid grid-cols-[2.2fr_1fr] gap-4">
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-40 bg-neutral-300 rounded" />
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 border border-primary-100 px-2 py-1 rounded-full">
                    Orchestration
                  </span>
                  <div className="w-16 h-6 bg-neutral-200 rounded" />
                  <div className="w-16 h-6 bg-neutral-200 rounded" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {["Approval coverage", "Recovery depth", "Risk posture"].map((label) => (
                  <div key={label} className="rounded-lg border border-neutral-200 bg-white p-3">
                    <div className="text-xs text-neutral-500 mb-2">{label}</div>
                    <div className="h-2 rounded-full bg-neutral-100">
                      <div className="h-2 rounded-full bg-primary-500" style={{ width: "68%" }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-44 rounded-lg border border-neutral-200 bg-white p-4 relative overflow-hidden">
                <div className="h-full w-full relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] [background-size:28px_28px]" />
                  <svg className="relative w-full h-full" viewBox="0 0 400 160" fill="none">
                    <path
                      d="M10 120 C 60 90, 120 110, 170 80 C 220 50, 280 70, 330 40"
                      stroke="#0043FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 120 C 60 90, 120 110, 170 80 C 220 50, 280 70, 330 40"
                      stroke="#0043FF"
                      strokeWidth="8"
                      strokeLinecap="round"
                      opacity="0.08"
                    />
                    <path
                      d="M10 130 C 70 120, 140 130, 200 100 C 260 70, 320 90, 380 60"
                      stroke="#00D9FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="170" cy="80" r="4" fill="#0043FF" />
                    <circle cx="330" cy="40" r="4" fill="#0043FF" />
                  </svg>
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[10px] text-neutral-500 shadow-card">
                  Approval lift trend
                </div>
              </div>

              <div className="flex justify-between mt-3 px-1">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                  <div key={month} className="text-xs text-neutral-500">
                    {month}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
              <div className="text-xs text-neutral-600 mb-3">Active processors</div>
              <div className="space-y-2">
                {["Stripe", "Adyen", "PayPal", "Checkout"].map((processor) => (
                  <div
                    key={processor}
                    className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200"
                  >
                    <span className="text-sm text-neutral-700">{processor}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      <span className="text-xs text-primary-600 font-medium">Active</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="text-[10px] text-neutral-500 mb-2">Risk balance</div>
                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 rounded-full bg-primary-500" style={{ width: "72%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Routing + Recovery Queue */}
          <div className="grid grid-cols-[1.1fr_1fr] gap-4">
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
              <div className="text-xs text-neutral-600 mb-3">Routing orchestration</div>
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="space-y-2">
                  {["Card Payment", "Digital Wallet", "Bank Transfer"].map((method) => (
                    <div key={method} className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200">
                      <span className="text-xs text-neutral-700">{method}</span>
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-24 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0043FF" />
                          <stop offset="100%" stopColor="#00D9FF" />
                        </linearGradient>
                      </defs>
                      <path d="M 10 20 Q 50 10 90 20" stroke="url(#routeGradient)" strokeWidth="2" fill="none" />
                      <path d="M 10 50 L 90 50" stroke="url(#routeGradient)" strokeWidth="2" fill="none" />
                      <path d="M 10 80 Q 50 90 90 80" stroke="url(#routeGradient)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="bg-primary-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Smart Routing
                  </div>
                </div>
                <div className="space-y-2">
                  {["Stripe", "Adyen", "PayPal"].map((processor) => (
                    <div
                      key={processor}
                      className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200"
                    >
                      <span className="text-xs text-neutral-700">{processor}</span>
                      <span className="text-[10px] text-primary-600">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
              <div className="text-xs text-neutral-600 mb-3">Recovery queue</div>
              <div className="space-y-2">
                {[
                  { label: "Retry 1 • EU card", status: "Retrying", tone: "bg-primary-100 text-primary-600" },
                  { label: "Wallet fallback", status: "Recovered", tone: "bg-accent-100 text-accent-700" },
                  { label: "Risk review", status: "Escalated", tone: "bg-neutral-200 text-neutral-600" },
                  { label: "Bank transfer", status: "Queued", tone: "bg-neutral-100 text-neutral-600" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200">
                    <span className="text-xs text-neutral-700">{item.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.tone}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Depth */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent-100 rounded-full blur-3xl opacity-20" />
    </div>
  );
}
