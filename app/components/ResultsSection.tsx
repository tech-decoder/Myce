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
    <section className="section-spacing bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {results.map((result, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:text-accent-500 transition-colors duration-myce">
                {result.metric}
              </div>
              <div className="text-base lg:text-body-lg text-neutral-400">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
