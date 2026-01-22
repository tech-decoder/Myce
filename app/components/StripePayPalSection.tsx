export default function StripePayPalSection() {
  return (
    <section className="section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-h2-md lg:text-h2 text-neutral-900 mb-8">
            Built for companies that have outgrown single-provider payments.
          </h2>

          {/* Description */}
          <div className="text-body-lg text-neutral-600 space-y-6 max-w-readable">
            <p>
              Stripe and PayPal are excellent for getting started.
            </p>
            <p>
              But at scale, centralized systems create risk.
            </p>
            <p>
              Myce reduces dependency on any single provider by adding intelligence, recovery, and control around the checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
