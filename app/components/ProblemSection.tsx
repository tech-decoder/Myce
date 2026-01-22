export default function ProblemSection() {
  const painPoints = [
    "Legitimate customers declined with no explanation",
    "Sudden account reviews during growth",
    "Fraud tools blocking good payments",
    "No recovery when a payment fails",
    "One provider becomes a single point of failure",
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-8">
            Checkout alone is not enough.
          </h2>

          {/* Problem Description */}
          <div className="text-body-lg text-neutral-600 space-y-6 mb-12 max-w-readable">
            <p>
              Most payment platforms make a single decision: approve or decline.
            </p>
            <p>
              That works — until volume, velocity, or geography increases.
            </p>
            <p>
              Legitimate customers get blocked. Payments fail silently. Accounts get reviewed. Revenue becomes fragile.
            </p>
          </div>

          {/* Pain Points */}
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-1 group-hover:bg-primary-100 transition-colors duration-myce">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                </div>
                <p className="ml-4 text-base lg:text-body-lg text-neutral-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
