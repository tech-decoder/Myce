export default function WhatMyceDoesSection() {
  const capabilities = [
    {
      title: "Smarter approvals",
      description: "Route transactions across multiple paths to maximize success.",
    },
    {
      title: "Automatic recovery",
      description: "Retry and recover failed payments instead of losing them.",
    },
    {
      title: "Balanced risk decisions",
      description: "Protect against fraud without killing conversion.",
    },
    {
      title: "Checkout as a control point",
      description: "Where payment logic, recovery, and insight converge.",
    },
    {
      title: "Real-time visibility",
      description: "See where revenue succeeds — and where it gets stuck.",
    },
  ];

  return (
    <section className="section-spacing" id="platform">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <h3 className="text-h3-sm font-bold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors duration-myce">
                  {capability.title}
                </h3>
                <p className="text-body-lg text-neutral-600 max-w-readable">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
