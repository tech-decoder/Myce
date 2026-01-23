import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Myce - High-Performance Checkout Powered by Revenue Orchestration",
  description: "Myce is a checkout and payments platform built for businesses that have outgrown single-provider risk — helping more legitimate payments go through as you scale globally.",
  keywords: [
    "payment orchestration",
    "revenue orchestration",
    "payment routing",
    "checkout optimization",
    "payment recovery",
    "multi-processor payments",
    "payment gateway",
    "SaaS payments",
    "e-commerce payments",
    "payment fraud prevention",
    "Stripe alternative",
    "payment failover",
    "smart payment routing",
    "payment approval rates",
    "payment infrastructure"
  ],
  authors: [{ name: "Myce" }],
  creator: "Myce",
  publisher: "Myce",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/images/2.png", sizes: "180x180", type: "image/png" },
    shortcut: "/images/2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myce.com",
    siteName: "Myce",
    title: "Myce - Revenue Orchestration Platform for High-Growth Businesses",
    description: "Stop losing revenue to payment provider lock-in. Myce delivers enterprise payment orchestration with smart routing, automatic recovery, and fraud prevention. Live in 2 weeks.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Myce - Revenue Orchestration Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myce - Revenue Orchestration Platform",
    description: "Enterprise payment orchestration with smart routing, automatic recovery, and fraud prevention. Live in 2 weeks, not 6 months.",
    images: ["/images/og-image.png"],
    creator: "@myce",
  },
  metadataBase: new URL("https://myce.com"),
  alternates: {
    canonical: "https://myce.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
