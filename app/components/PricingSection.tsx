"use client";

import { useState } from "react";

const plans = [
  {
    name: "Growth",
    badge: "Essential",
    monthlyPrice: 1500,
    yearlyPrice: 1200,
    description: "For teams scaling volume and adding routing for the first time.",
    features: ["2-week implementation", "Up to 3 processors", "Smart retries + recovery", "Email support (24hr SLA)"],
    highlight: false,
    iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // circle-check
  },
  {
    name: "Scale",
    badge: "Most popular",
    monthlyPrice: 4500,
    yearlyPrice: 3600,
    description: "For multi-market operations optimizing approval rates and cost.",
    features: ["1-week fast-track setup", "Unlimited processors", "Dedicated success manager", "24/7 priority support"],
    highlight: true,
    iconPath: "M9 12.75L11.25 15 15 9.75m0-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", // badge-check
  },
  {
    name: "Enterprise",
    badge: "White-glove",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For high-volume businesses requiring hands-on optimization.",
    features: ["Custom implementation", "SLA-backed 99.9% uptime", "Quarterly strategy reviews", "Direct engineering access"],
    highlight: false,
    iconPath: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", // star
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (plan: typeof plans[0]) => {
    if (!plan.monthlyPrice) return "Custom";
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    return `From $${price.toLocaleString()}`;
  };

  const getCadence = () => {
    return isYearly ? "/month (billed yearly)" : "/month";
  };

  return (
    <section className="section-spacing bg-neutral-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-[10px] sm:text-xs font-medium text-neutral-700 tracking-wide uppercase">
                Pricing Plans
              </span>
            </div>
            <h2 className="text-2xl sm:text-h2-sm lg:text-h2 text-neutral-900 mb-3 sm:mb-4 text-balance">
              Service plans that scale with you
            </h2>
            <p className="text-base sm:text-lg lg:text-body-lg text-neutral-600 text-balance">
              Transparent pricing based on volume. All plans include implementation, support, and ongoing optimization.
            </p>
          </div>

          {/* Billing Toggle - Mobile-optimized */}
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-1 text-sm w-full sm:w-auto">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-3 sm:py-2.5 rounded-full font-medium transition-all duration-myce min-h-touch ${
                !isYearly ? "bg-primary-500 text-white" : "text-neutral-600 hover:text-neutral-900 active:bg-neutral-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-3 sm:py-2.5 rounded-full font-medium transition-all duration-myce min-h-touch ${
                isYearly ? "bg-primary-500 text-white" : "text-neutral-600 hover:text-neutral-900 active:bg-neutral-100"
              }`}
            >
              Yearly
            </button>
            <span className="hidden sm:inline ml-3 text-xs text-accent-600 font-medium whitespace-nowrap">Save 20%</span>
          </div>
          {/* Mobile: Show savings below toggle */}
          <div className="sm:hidden text-center">
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent-50 text-xs text-accent-600 font-medium">
              💰 Save 20% with yearly billing
            </span>
          </div>
        </div>

        {/* Pricing Cards - Mobile-first grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-5 sm:p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-myce relative ${
                plan.highlight ? "border-primary-500 bg-white ring-2 ring-primary-100 scale-[1.02] md:scale-[1.05]" : "border-neutral-200 bg-white"
              }`}
            >
              {/* Most Popular Badge - Mobile-friendly */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-500 text-white shadow-myce">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 mt-2">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 border border-primary-100 w-fit">
                  {plan.name} {!plan.highlight && `• ${plan.badge}`}
                </span>
                <span className="text-xs text-neutral-500">Paid monthly</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-3">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">{formatPrice(plan)}</div>
              </div>
              {plan.monthlyPrice && (
                <div className="text-sm text-neutral-500 mb-4">{getCadence()}</div>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">{plan.description}</p>

              {/* CTA Button - Touch-friendly */}
              <a
                href="#contact"
                className={`inline-flex w-full items-center justify-center px-6 py-4 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-myce min-h-touch-lg ${
                  plan.highlight
                    ? "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-myce hover:shadow-myce-md"
                    : "border-2 border-primary-200 text-primary-600 hover:border-primary-400 hover:bg-primary-50 active:bg-primary-100 bg-white"
                }`}
              >
                Get this plan
              </a>

              {/* Features List */}
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={plan.iconPath} />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{feature}</span>
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
