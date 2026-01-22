export default function TrustSignals() {
  const metrics = [
    {
      value: "97%",
      label: "Average approval rate",
    },
    {
      value: "Hundreds of millions",
      label: "Processed annually",
    },
    {
      value: "Global-ready",
      label: "Infrastructure",
    },
    {
      value: "High-volume",
      label: "Digital businesses",
    },
  ];

  return (
    <section className="py-16 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2 group-hover:text-primary-600 transition-colors duration-myce">
                {metric.value}
              </div>
              <div className="text-sm text-neutral-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
