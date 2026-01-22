import Image from "next/image";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Footer() {
  const footerLinks = {
    platform: [
      { label: "Revenue Orchestration", href: "#platform" },
      { label: "Payment Routing", href: "#platform" },
      { label: "Smart Recovery", href: "#platform" },
      { label: "Risk Management", href: "#platform" },
    ],
    solutions: [
      { label: "For SaaS", href: "#solutions" },
      { label: "For E-commerce", href: "#solutions" },
      { label: "For Marketplaces", href: "#solutions" },
      { label: "Enterprise", href: "#solutions" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: WHATSAPP_URL },
      { label: "Privacy", href: "#privacy" },
    ],
  };

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo & Description - Spans 2 columns on large screens */}
            <div className="col-span-2">
              <Image
                src="/images/2.png"
                alt="Myce"
                width={200}
                height={64}
                className="h-14 w-auto mb-4"
              />
              <p className="text-sm text-neutral-600 max-w-xs mb-6">
                Revenue orchestration platform for businesses that have outgrown single-provider payments.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary-500 flex items-center justify-center transition-colors duration-myce group">
                  <svg className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary-500 flex items-center justify-center transition-colors duration-myce group">
                  <svg className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary-500 flex items-center justify-center transition-colors duration-myce group">
                  <svg className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href === WHATSAPP_URL ? "_blank" : undefined}
                      rel={link.href === WHATSAPP_URL ? "noopener noreferrer" : undefined}
                      className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Myce. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
