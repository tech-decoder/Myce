import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

const plans = [
  {
    name: "Growth",
    price: "From $1,500/mo",
    description: "For teams scaling volume and adding routing for the first time.",
    highlights: ["Up to 3 processors", "Smart retries + recovery", "Basic risk rules", "Email + Slack support"],
    cta: "Talk to sales",
    featured: false,
  },
  {
    name: "Scale",
    price: "From $4,500/mo",
    description: "For multi-market operations optimizing approval rates and cost.",
    highlights: [
      "Unlimited routing rules",
      "Advanced risk signals",
      "Real-time monitoring",
      "Dedicated success partner",
    ],
    cta: "Get a quote",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume businesses with complex compliance needs.",
    highlights: [
      "Custom orchestration",
      "SLA-backed support",
      "Multi-entity reporting",
      "Security reviews + onboarding",
    ],
    cta: "Schedule a review",
    featured: false,
  },
];

const included = [
  "PCI-aligned workflows",
  "Tokenized payment handling",
  "A/B routing experiments",
  "Recovery strategy setup",
  "Priority incident response",
  "Ongoing optimization reviews",
];

export const metadata = {
  title: "Myce Pricing - Revenue Orchestration for Growing Businesses",
  description:
    "Transparent, ROI-aligned pricing for revenue orchestration. Choose a plan that fits your processing volume and routing complexity.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-white via-primary-50/20 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="text-xs font-medium text-primary-700 tracking-wide uppercase">
              Pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Pricing that scales with your revenue
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Myce pricing is tied to business outcomes — higher approvals, fewer false declines,
            and more recovered revenue. Pick the level of orchestration you need today.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-myce-lg border p-8 transition-all duration-myce ${
                  plan.featured
                    ? "border-primary-500 bg-primary-50 shadow-myce-md"
                    : "border-neutral-200 bg-white shadow-card"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-neutral-900">{plan.name}</h2>
                  {plan.featured ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-700 bg-white px-3 py-1 rounded-full border border-primary-100">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">{plan.price}</div>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start text-sm text-neutral-700">
                      <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-myce font-medium transition-colors duration-myce ${
                    plan.featured
                      ? "bg-primary-500 text-white hover:bg-primary-600 shadow-myce"
                      : "border border-primary-500 text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4">
                <span className="text-xs font-medium text-primary-700 tracking-wide uppercase">
                  Included
                </span>
              </div>
              <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4">
                Everything you need to move beyond single-provider risk
              </h2>
              <p className="text-body-lg text-neutral-600">
                Every plan includes the foundation: intelligent routing, recovery, and reporting.
                Upgrade as your volume and routing sophistication grow.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="bg-white border border-neutral-200 rounded-myce-lg p-5 shadow-card">
                  <div className="text-sm font-semibold text-neutral-900 mb-2">{item}</div>
                  <p className="text-sm text-neutral-600">
                    Designed to reduce declines and keep approvals stable as volume scales.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4">
            Unsure which plan fits?
          </h2>
          <p className="text-body-lg text-neutral-600 mb-8">
            We’ll review your current stack, approval rates, and risk model to recommend the
            right orchestration strategy.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-white text-base font-semibold rounded-myce hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md hover:scale-105"
          >
            Talk to us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
