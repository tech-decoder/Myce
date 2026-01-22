export default function CustomerLogoCarousel() {
  const integrations = [
    { name: "Stripe", width: 60 },
    { name: "Adyen", width: 70 },
    { name: "PayPal", width: 80 },
    { name: "Square", width: 70 },
    { name: "Razorpay", width: 90 },
    { name: "Mollie", width: 70 },
    { name: "Checkout.com", width: 100 },
    { name: "Worldpay", width: 90 },
  ];

  return (
    <section className="py-12 border-y border-neutral-100 bg-neutral-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-neutral-600 font-medium">
            Integrates with leading payment processors
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-12 lg:space-x-16">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div
                  className="flex items-center justify-center h-12 text-neutral-400 hover:text-neutral-900 transition-colors font-semibold text-sm"
                  style={{ width: `${integration.width}px` }}
                >
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-50/50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-50/50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
