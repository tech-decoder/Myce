import Image from "next/image";

const tools = [
  "Stripe",
  "Adyen",
  "PayPal",
  "Checkout",
  "Worldpay",
  "Braintree",
  "Nium",
  "Shift4",
  "Spreedly",
  "Mollie",
];

export default function IntegrationSection() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Seamless Connections
            </span>
          </div>
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4 text-balance">
            Integrate with your favorite tools
          </h2>
          <p className="text-body-lg text-neutral-600 text-balance mb-10">
            Connect your processors and data sources to orchestrate approvals and recovery in one place.
          </p>
        </div>

        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="marquee w-full overflow-hidden">
            <div className="marquee-track flex items-center gap-4">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-400 text-xs font-semibold shadow-card"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-myce border border-primary-200">
            <Image src="/images/2.png" alt="Myce" width={140} height={44} className="h-10 w-auto" />
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-primary-200 text-primary-600 rounded-full text-sm font-medium hover:border-primary-400 transition-colors duration-myce bg-white"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
