export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Myce gave us confidence during growth. We finally have routing logic that adapts in real time without slowing checkout.",
      author: "Head of Finance",
      title: "Subscription Infrastructure",
      company: "Series B SaaS",
    },
    {
      quote:
        "We stopped guessing which provider would fail. The orchestration layer made reliability an operational metric.",
      author: "VP of Payments",
      title: "Global Commerce",
      company: "Enterprise Retail",
    },
  ];

  return (
    <section className="section-spacing bg-primary-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-medium text-white tracking-wide uppercase">
                Customer Stories
              </span>
            </div>
            <h2 className="text-h2-sm lg:text-h2 text-white mb-4 text-balance">
              Trusted by growing businesses
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-myce"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-white/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/90 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-xs uppercase tracking-wide">
                      {testimonial.author
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-white/70 text-sm">
                      {testimonial.title} • {testimonial.company}
                    </div>
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-wide text-white/80">
                      Verified operator
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
