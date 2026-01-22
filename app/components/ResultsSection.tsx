export default function ResultsSection() {
  const results = [
    {
      metric: "+30%",
      label: "Conversion lift",
    },
    {
      metric: "Up to 40%",
      label: "Fewer false declines",
    },
    {
      metric: "Millisecond",
      label: "Response times",
    },
    {
      metric: "Millions",
      label: "In recovered revenue",
    },
  ];

  return (
    <section className="section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4">
            Real impact for growing businesses
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Businesses using Myce see measurable improvements across their entire payment stack.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {results.map((result, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold mb-3 text-primary-500 group-hover:text-primary-600 transition-colors duration-myce">
                {result.metric}
              </div>
              <div className="text-base lg:text-body-lg text-neutral-600">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
