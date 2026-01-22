export default function ShiftSection() {
  return (
    <section className="section-spacing bg-primary-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-h2-sm lg:text-h2 text-white mb-8">
            Payments shouldn&apos;t be binary.
          </h2>

          {/* Description */}
          <div className="text-body-lg text-white/90 space-y-6 max-w-readable-lg mx-auto">
            <p>
              Growing businesses need more than &quot;approve or block.&quot;
            </p>
            <p>
              Myce replaces single-decision payments with a coordinated system — often referred to as revenue orchestration — where approvals, retries, recovery, and risk work together in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
