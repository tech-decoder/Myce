"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=971555710877&text=Hello%21+I+want+to+know+more+about+Myce&type=phone_number&app_absent=0";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#platform" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 rounded-full bg-white/90 backdrop-blur-myce border border-neutral-200 shadow-card px-5">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="/images/2.png"
                alt="Myce"
                width={190}
                height={60}
                priority
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links - Centered (Payble style) */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-myce"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden sm:flex flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors duration-myce shadow-myce"
            >
              Talk to us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-card"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm sm:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-4 left-4 right-4 rounded-3xl bg-white shadow-card border border-neutral-200 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <Image src="/images/2.png" alt="Myce" width={150} height={50} className="h-10 w-auto" />
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-900"
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-base font-medium text-neutral-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors duration-myce shadow-myce"
            >
              Talk to us
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
