const faqs = [
  {
    question: "Do I need to replace my current payment provider?",
    answer:
      "No. Myce sits above your existing processors and routes traffic intelligently. You keep Stripe, Adyen, PayPal, or any mix you already use.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams are live in 2–4 weeks depending on checkout complexity and compliance requirements. We provide a guided integration plan.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on monthly processing volume, routing complexity, and recovery features. We keep it transparent and align it to ROI.",
  },
  {
    question: "Is Myce compliant with payment regulations?",
    answer:
      "Yes. We support PCI-aligned workflows and work with your existing compliance posture. We never store raw card data.",
  },
  {
    question: "Can Myce improve approvals without increasing fraud?",
    answer:
      "Yes. We balance approval logic with risk signals so legitimate customers pass while risky transactions are contained.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Every customer gets a dedicated success partner, onboarding assistance, and ongoing optimization reviews.",
  },
];

export default function FAQSection() {
  return (
    <section className="section-spacing bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4">
              <span className="text-xs font-medium text-primary-700 tracking-wide uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4">
              Answers for finance and product teams
            </h2>
            <p className="text-body-lg text-neutral-600">
              Clear, direct responses to the questions we hear most from scaling businesses.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-myce-lg border border-neutral-200 bg-white p-6 shadow-card transition-all duration-myce"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-neutral-900">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-transform duration-myce group-open:rotate-45">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
