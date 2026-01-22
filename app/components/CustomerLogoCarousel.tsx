const proofBlocks = [
  {
    title: "Compliance-ready by design",
    description: "PCI-aligned workflows, tokenization, and access controls.",
    meta: "Security posture you can defend",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", // badge-check - compliance/verified
  },
  {
    title: "Multi-processor resilience",
    description: "Route across providers with intelligent fallbacks.",
    meta: "No single point of failure",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01", // server - multiple processors/infrastructure
  },
  {
    title: "Real-time observability",
    description: "Monitor approvals, retries, and recovery signals.",
    meta: "Know where revenue stalls",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", // eye - observability/monitoring
  },
];

export default function CustomerLogoCarousel() {
  return (
    <section className="py-16 border-y border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-neutral-600 font-medium">
            Proof layers built into the platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {proofBlocks.map((block, idx) => {
            // Different color themes for each card
            const themes = [
              { bg: "bg-primary-50", iconBg: "bg-primary-100", iconColor: "text-primary-600", barColor: "bg-primary-500" },
              { bg: "bg-accent-50", iconBg: "bg-accent-100", iconColor: "text-accent-600", barColor: "bg-accent-500" },
              { bg: "bg-neutral-50", iconBg: "bg-neutral-200", iconColor: "text-neutral-700", barColor: "bg-neutral-500" },
            ];
            const theme = themes[idx];

            return (
              <div
                key={block.title}
                className={`rounded-2xl border border-neutral-200 ${theme.bg} p-6 shadow-card hover:shadow-card-hover transition-all duration-myce`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full ${theme.iconBg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${theme.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={block.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Proof
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {block.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-5">{block.description}</p>
                <div className="rounded-xl border border-neutral-200 bg-white/70 p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                    <span>Signal</span>
                    <span>Live</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white">
                      <div className={`h-2 rounded-full ${theme.barColor}`} style={{ width: "78%" }} />
                    </div>
                    <div className="h-2 rounded-full bg-white">
                      <div className="h-2 rounded-full bg-accent-400" style={{ width: "56%" }} />
                    </div>
                    <div className="h-2 rounded-full bg-white">
                      <div className="h-2 rounded-full bg-neutral-400" style={{ width: "68%" }} />
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-3">{block.meta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
