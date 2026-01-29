import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Booking Solutions | Smart Appointment Scheduling",
    template: `%s | AI Booking Solutions`,
  },
  description: "AI-powered appointment booking for local businesses. Schedule smarter, reduce no-shows, grow your business.",
  keywords: [
    "appointment booking",
    "AI scheduling",
    "local business",
    "customer retention",
    "AI chatbot",
    "scheduling software",
  ],
  authors: [{ name: "AI Booking Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Booking Solutions",
    title: "AI Booking Solutions | Smart Appointment Scheduling",
    description: "AI-powered appointment booking for local businesses. Schedule smarter, reduce no-shows, grow your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-sony-inspired bg-logo-pattern`}>
        {children}
      </body>
    </html>
  );
}
