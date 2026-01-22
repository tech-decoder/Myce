const faqs = [
  {
    question: "Do I need to replace my current payment providers?",
    answer:
      "No. We integrate with your existing processors (Stripe, Adyen, PayPal, etc.) and add an intelligent orchestration layer on top. Your current setup stays in place—we just make it work smarter together.",
  },
  {
    question: "How quickly can we go live?",
    answer:
      "Most teams are live in 2 weeks. We handle all configuration, testing, and integration work. You get white-glove onboarding with a dedicated implementation specialist who ensures a smooth launch.",
  },
  {
    question: "Do we need a development team to implement this?",
    answer:
      "No. Our team handles the entire technical implementation for you. We configure routing rules, set up recovery logic, and integrate with your existing checkout—no coding required on your end.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on your monthly transaction volume and the complexity of routing you need. We offer transparent, ROI-aligned pricing with no hidden fees. Contact us for a custom quote based on your specific requirements.",
  },
  {
    question: "What ongoing support do you provide?",
    answer:
      "Every client gets a dedicated success manager, 24/7 technical support, and quarterly optimization reviews. We continuously monitor your setup and recommend improvements to maximize approval rates and minimize declines.",
  },
  {
    question: "Is this solution compliant with payment regulations?",
    answer:
      "Yes. Our solution is built on enterprise-grade infrastructure with PCI-aligned workflows, tokenization, and full compliance support. We work within your existing compliance framework and never store sensitive card data.",
  },
];

export default function FAQSection() {
  return (
    <section className="section-spacing bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-5 text-balance">
              Common Questions &amp; Answers
            </h2>
            <p className="text-body-lg text-neutral-600 text-balance mb-6 max-w-md">
              Everything finance and product teams need to evaluate revenue orchestration.
            </p>
            <p className="text-sm text-neutral-500 mb-6">Got a specific question?</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-neutral-900">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-transform duration-myce group-open:rotate-45">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
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
