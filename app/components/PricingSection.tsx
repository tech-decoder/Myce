const plans = [
  {
    name: "Growth",
    badge: "Essential",
    price: "From $1,500",
    cadence: "/month",
    description: "For teams scaling volume and adding routing for the first time.",
    features: ["2-week implementation", "Up to 3 processors", "Smart retries + recovery", "Email support (24hr SLA)"],
    highlight: false,
  },
  {
    name: "Scale",
    badge: "Most popular",
    price: "From $4,500",
    cadence: "/month",
    description: "For multi-market operations optimizing approval rates and cost.",
    features: ["1-week fast-track setup", "Unlimited processors", "Dedicated success manager", "24/7 priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: "White-glove",
    price: "Custom",
    cadence: "",
    description: "For high-volume businesses requiring hands-on optimization.",
    features: ["Custom implementation", "SLA-backed 99.9% uptime", "Quarterly strategy reviews", "Direct engineering access"],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-spacing bg-neutral-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                Pricing Plans
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
              Service plans that scale with you
            </h2>
            <p className="text-body-lg text-neutral-600 text-balance">
              Transparent pricing based on volume. All plans include implementation, support, and ongoing optimization.
            </p>
          </div>

          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-1 text-sm">
            <button className="px-4 py-2 rounded-full bg-primary-500 text-white font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-full text-neutral-600">
              Yearly
            </button>
            <span className="ml-3 text-xs text-neutral-500">Save 20%</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-card relative ${
                plan.highlight ? "border-primary-500 bg-white ring-1 ring-primary-100" : "border-neutral-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 border border-primary-100">
                  {plan.name} • {plan.badge}
                </span>
                <span className="text-xs text-neutral-500">Paid monthly</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <div className="text-4xl font-bold text-neutral-900">{plan.price}</div>
                {plan.cadence ? <div className="text-sm text-neutral-500">{plan.cadence}</div> : null}
              </div>
              <p className="text-sm text-neutral-600 mb-6">{plan.description}</p>
              <a
                href="#contact"
                className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors duration-myce ${
                  plan.highlight
                    ? "bg-primary-500 text-white hover:bg-primary-600 shadow-myce"
                    : "border border-primary-200 text-primary-600 hover:border-primary-400 bg-white"
                }`}
              >
                Get this plan
              </a>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
