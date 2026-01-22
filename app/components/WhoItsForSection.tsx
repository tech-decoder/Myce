export default function WhoItsForSection() {
  const audiences = [
    "High-volume digital businesses",
    "Subscription & SaaS",
    "Global e-commerce",
    "Marketplaces",
    "Fintech-adjacent platforms",
  ];

  return (
    <section className="section-spacing" id="solutions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-12 text-center">
            Designed for serious revenue operations.
          </h2>

          {/* Audience List */}
          <div className="space-y-4 mb-12">
            {audiences.map((audience, index) => (
              <div key={index} className="flex items-center group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-myce">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-body-lg text-neutral-700">
                  {audience}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="p-6 bg-primary-50 rounded-myce-lg border border-primary-100">
            <p className="text-base text-neutral-600 text-center">
              If approvals affect your P&L, Myce belongs in your stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
