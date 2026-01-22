import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo - Using 2.png (full logo) on light background */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/2.png"
              alt="Myce"
              width={120}
              height={44}
              className="h-11 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#platform" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
              Platform
            </a>
            <a href="#solutions" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
              Solutions
            </a>
            <a href="#resources" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
              Resources
            </a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-myce">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Myce. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
