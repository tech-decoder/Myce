const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-primary-50/30" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-primary-500 text-white text-lg font-medium rounded-myce hover:bg-primary-600 transition-all duration-myce shadow-myce-md hover:shadow-myce-lg hover:scale-105 mb-6"
          >
            Talk to us
          </a>

          {/* Reassurance */}
          <p className="text-body-sm text-neutral-600">
            No commitment. Real conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
