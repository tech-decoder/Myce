import Image from "next/image";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-myce border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/images/1.png"
                alt="Myce"
                width={60}
                height={40}
                priority
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-myce">
              Platform
            </a>
            <a href="#solutions" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-myce">
              Solutions
            </a>
            <a href="#resources" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-myce">
              Resources
            </a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-myce">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-myce hover:bg-primary-600 transition-colors duration-myce shadow-myce"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
