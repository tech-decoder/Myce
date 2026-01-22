export default function ProblemSolutionFramework() {
  const problems = [
    {
      text: "Legitimate customers declined with no explanation",
      icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      text: "Sudden account reviews during growth",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
    {
      text: "Fraud tools blocking good payments",
      icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    },
  ];

  const handles = [
    {
      text: "Smart routing evaluates multiple paths",
      icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
    },
    {
      text: "Real-time retry logic recovers failed payments",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      text: "Balanced risk decisions optimize approvals",
      icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
    },
  ];

  const solutions = [
    {
      text: "More payments approved across multiple processors",
      icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      text: "Automatic recovery instead of lost revenue",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      text: "Better fraud protection without killing conversion",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
  ];

  const getHeaderIcon = (tone: string) => {
    if (tone === "neutral") return "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";
    if (tone === "primary") return "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z";
    return "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  };

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Revenue Challenges
            </span>
          </div>
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
            Single-provider payments create risk
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            As your business grows, centralized payment systems expose you to fragility. Here&apos;s how Myce solves this.
          </p>
        </div>

        {/* 3-Column Framework */}
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { title: "Problems", items: problems, tone: "neutral", metric: "Declines increase at scale" },
            { title: "Myce Handles", items: handles, tone: "primary", metric: "Routing adapts in real time" },
            { title: "Solutions", items: solutions, tone: "accent", metric: "Approvals stay resilient" },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    group.tone === "primary"
                      ? "bg-primary-50 text-primary-500"
                      : group.tone === "accent"
                        ? "bg-accent-50 text-accent-500"
                        : "bg-primary-50 text-primary-500"
                  }`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getHeaderIcon(group.tone)} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-neutral-900">{group.title}</h3>
              </div>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {group.metric}
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <p className="text-sm text-neutral-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow indicators (desktop only) */}
        <div className="hidden lg:flex items-center justify-center space-x-12 mt-12">
          <div className="flex items-center space-x-3">
            <div className="text-neutral-600 font-semibold text-sm">Fragile</div>
            <svg className="w-16 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 64 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h60m-6-6l6 6-6 6" />
            </svg>
          </div>
          <div className="text-accent-500 font-semibold text-sm">Resilient</div>
        </div>
      </div>
    </section>
  );
}
