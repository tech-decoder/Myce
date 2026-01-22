const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-caption uppercase text-neutral-600 mb-6 tracking-wider">
            Payments at scale
          </p>

          {/* Main Headline */}
          <h1 className="text-display-sm lg:text-display font-bold text-neutral-900 mb-8 text-balance">
            When one platform controls your revenue,
            <br />
            <span className="text-neutral-600">your business is fragile.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg lg:text-h3-sm text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto text-balance">
            Myce is a checkout and payments platform built for businesses that have outgrown single-provider risk — helping more legitimate payments go through as you scale globally.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white text-base font-medium rounded-myce hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md"
            >
              Talk to us
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 text-neutral-900 text-base font-medium hover:text-primary-500 transition-colors duration-myce group"
            >
              <span className="mr-2 text-primary-500 group-hover:translate-x-1 transition-transform">▶</span>
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50/20 pointer-events-none" />
    </section>
  );
}
