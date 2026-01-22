export default function ProblemSolutionFramework() {
  const problems = [
    "Legitimate customers declined with no explanation",
    "Sudden account reviews during growth",
    "Fraud tools blocking good payments",
  ];

  const handles = [
    "Smart routing evaluates multiple paths",
    "Real-time retry logic recovers failed payments",
    "Balanced risk decisions optimize approvals",
  ];

  const solutions = [
    "More payments approved across multiple processors",
    "Automatic recovery instead of lost revenue",
    "Better fraud protection without killing conversion",
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-4">
            <span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">
              Revenue Challenges
            </span>
          </div>
          <h2 className="text-h2-sm lg:text-h2 text-neutral-900 mb-4">
            Single-provider payments create risk
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            As your business grows, centralized payment systems expose you to fragility. Here's how Myce solves this.
          </p>
        </div>

        {/* 3-Column Framework */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-error-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-error-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Problems</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-error-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-error-500" />
                  </div>
                  <p className="text-neutral-700 text-sm">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Handle Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Myce Handles</h3>
            </div>
            <div className="space-y-4">
              {handles.map((handle, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 text-sm">{handle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-success-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Solutions</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 text-sm">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow indicators (desktop only) */}
        <div className="hidden lg:flex items-center justify-center space-x-12 mt-12">
          <div className="flex items-center space-x-3">
            <div className="text-error-500 font-semibold text-sm">Fragile</div>
            <svg className="w-16 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 64 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h60m-6-6l6 6-6 6" />
            </svg>
          </div>
          <div className="text-success-500 font-semibold text-sm">Resilient</div>
        </div>
      </div>
    </section>
  );
}
