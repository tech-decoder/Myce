import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Myce - High-Performance Checkout Powered by Revenue Orchestration",
  description: "Myce is a checkout and payments platform built for businesses that have outgrown single-provider risk — helping more legitimate payments go through as you scale globally.",
  icons: {
    icon: [
      { url: "/images/2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/images/2.png", sizes: "180x180", type: "image/png" },
    shortcut: "/images/2.png",
  },
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
      </body>
    </html>
  );
}
