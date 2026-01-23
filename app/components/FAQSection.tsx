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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Header Section */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-[10px] sm:text-xs font-medium text-neutral-700 tracking-wide uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-h2-sm lg:text-h2 text-neutral-900 mb-4 sm:mb-5 text-balance">
              Common Questions &amp; Answers
            </h2>
            <p className="text-base sm:text-lg lg:text-body-lg text-neutral-600 text-balance mb-4 sm:mb-6 max-w-md">
              Everything finance and product teams need to evaluate revenue orchestration.
            </p>
            <p className="text-sm text-neutral-500 mb-4 sm:mb-6">Got a specific question?</p>
          </div>

          {/* FAQ Accordion - Mobile-optimized */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-xl sm:rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 lg:p-6 shadow-card hover:shadow-card-hover transition-shadow duration-myce"
              >
                <summary className="flex cursor-pointer list-none items-start sm:items-center justify-between gap-4 text-sm sm:text-base font-semibold text-neutral-900 min-h-touch-lg sm:min-h-0">
                  <span className="leading-relaxed pr-2">{faq.question}</span>
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-transform duration-myce group-open:rotate-45 flex-shrink-0">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed pr-12 sm:pr-14">
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
