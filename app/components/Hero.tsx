import DashboardMockup from "./DashboardMockup";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-primary-50/20 to-white">
      {/* Floating gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Content Container */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="text-xs font-medium text-primary-700 tracking-wide uppercase">
              Revenue Orchestration Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            When one platform controls your revenue,{" "}
            <span className="text-neutral-600">your business is fragile.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Myce is a checkout and payments platform built for businesses that have outgrown single-provider risk — helping more legitimate payments go through as you scale globally.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white text-base font-semibold rounded-myce hover:bg-primary-600 transition-all duration-myce shadow-myce hover:shadow-myce-md hover:scale-105"
            >
              Talk to us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 text-neutral-700 text-base font-medium hover:text-primary-500 transition-colors duration-myce group"
            >
              <svg className="mr-2 w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              How it works
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-6 text-sm text-neutral-600 mb-12">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>97% approval rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-grade</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Global-ready</span>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
