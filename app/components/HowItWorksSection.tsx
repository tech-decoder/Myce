export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Transaction starts at checkout",
      description: "Customer initiates payment",
    },
    {
      number: "02",
      title: "Payment logic evaluates context in real time",
      description: "Routing, risk, and recovery decisions happen instantly",
    },
    {
      number: "03",
      title: "Smart retries and recovery prevent losses",
      description: "Failed payments get multiple chances to succeed",
    },
    {
      number: "04",
      title: "Revenue data feeds optimization",
      description: "Continuous learning improves approval rates",
    },
  ];

  return (
    <section className="section-spacing" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-16 text-center">
            How it works
          </h2>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-myce">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-h3-sm font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-16 p-8 bg-primary-50 rounded-myce-lg border-2 border-primary-100">
            <p className="text-xl font-semibold text-neutral-900 text-center">
              Result: more approved sales, fewer surprises, predictable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
