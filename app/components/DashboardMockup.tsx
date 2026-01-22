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
          <div className="flex space-x-2">
            <div className="w-20 h-8 bg-neutral-200 rounded" />
            <div className="w-20 h-8 bg-primary-500 rounded" />
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Approval Rate', value: '97.2%', trend: '+2.3%' },
              { label: 'Total Volume', value: '$2.4M', trend: '+15%' },
              { label: 'Transactions', value: '12,543', trend: '+8.1%' },
              { label: 'Recovery Rate', value: '34%', trend: '+12%' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 hover:border-primary-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="text-xs text-neutral-600 mb-1 group-hover:text-primary-600 transition-colors">{stat.label}</div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-xs text-primary-500 font-medium">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 w-40 bg-neutral-300 rounded" />
              <div className="flex space-x-2">
                <div className="w-16 h-6 bg-neutral-200 rounded" />
                <div className="w-16 h-6 bg-neutral-200 rounded" />
              </div>
            </div>

            {/* Simplified Chart Visualization */}
            <div className="h-48 flex items-end justify-between space-x-2 group">
              {[65, 78, 82, 71, 88, 92, 85, 95, 89, 97, 94, 98].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className="bg-gradient-to-t from-primary-500 to-primary-400 rounded-t hover:from-primary-600 hover:to-primary-500 transition-all duration-300 cursor-pointer"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>

            {/* Chart Labels */}
            <div className="flex justify-between mt-2 px-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <div key={i} className="text-xs text-neutral-500">{month}</div>
              ))}
            </div>
          </div>

          {/* Payment Routing Visualization */}
          <div className="grid grid-cols-3 gap-4">
            {/* Source */}
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
              <div className="text-xs text-neutral-600 mb-3">Payment Source</div>
              <div className="space-y-2">
                {['Card Payment', 'Digital Wallet', 'Bank Transfer'].map((method, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200">
                    <span className="text-sm text-neutral-700">{method}</span>
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Routing Logic */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-24 relative group">
                {/* Routing arrows */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0043FF" />
                      <stop offset="100%" stopColor="#00D9FF" />
                    </linearGradient>
                  </defs>
                  <path d="M 10 20 Q 50 10 90 20" stroke="url(#routeGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <path d="M 10 50 L 90 50" stroke="url(#routeGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '2s' }} />
                  <path d="M 10 80 Q 50 90 90 80" stroke="url(#routeGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '2.5s' }} />

                  {/* Animated flow indicators */}
                  <circle r="3" fill="#0043FF" className="opacity-75">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 10 20 Q 50 10 90 20" />
                  </circle>
                  <circle r="3" fill="#00D9FF" className="opacity-75">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 10 50 L 90 50" />
                  </circle>
                  <circle r="3" fill="#0043FF" className="opacity-75">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10 80 Q 50 90 90 80" />
                  </circle>
                </svg>
              </div>
              <div className="bg-primary-500 text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-primary-600 transition-colors cursor-pointer">
                Smart Routing
              </div>
            </div>

            {/* Destination */}
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
              <div className="text-xs text-neutral-600 mb-3">Processors</div>
              <div className="space-y-2">
                {['Stripe', 'Adyen', 'PayPal'].map((processor, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-2 rounded border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                    <span className="text-sm text-neutral-700 group-hover:text-primary-600 transition-colors">{processor}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      <span className="text-xs text-primary-600 font-medium">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions Table Header */}
          <div className="bg-neutral-50 rounded-lg border border-neutral-100">
            <div className="px-4 py-3 border-b border-neutral-200">
              <div className="h-3 w-32 bg-neutral-300 rounded" />
            </div>
            <div className="p-4 space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-neutral-100 transition-colors duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors" />
                    <div className="space-y-1">
                      <div className="h-2 w-24 bg-neutral-300 rounded" />
                      <div className="h-2 w-16 bg-neutral-200 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-2 w-16 bg-neutral-300 rounded" />
                    <div className="h-6 w-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    </div>
                  </div>
                </div>
              ))}
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
