const proofBlocks = [
  {
    title: "Compliance-ready by design",
    description: "PCI-aligned workflows, tokenization, and access controls.",
    meta: "Security posture you can defend",
  },
  {
    title: "Multi-processor resilience",
    description: "Route across providers with intelligent fallbacks.",
    meta: "No single point of failure",
  },
  {
    title: "Real-time observability",
    description: "Monitor approvals, retries, and recovery signals.",
    meta: "Know where revenue stalls",
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
          {proofBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-myce"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 4v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
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
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span>Signal</span>
                  <span>Live</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-primary-500" style={{ width: "78%" }} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
