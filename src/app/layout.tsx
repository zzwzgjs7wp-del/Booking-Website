import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani" });

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
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-sans min-h-screen bg-cyberpunk bg-logo-pattern text-white`}>
        {children}
      </body>
    </html>
  );
}
