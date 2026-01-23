export default function ServiceBenefits() {
  const benefits = [
    {
      label: "Live in 2 weeks",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      label: "White-glove onboarding",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      label: "24/7 support included",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      label: "No dev team required",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
  ];

  return (
    <section className="py-6 sm:py-8 border-y border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="flex items-center gap-3 p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 active:bg-neutral-100 transition-colors duration-myce min-h-touch-lg"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium text-neutral-700">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
