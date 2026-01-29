import { Metadata } from "next";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Request Service",
  description: `Request service from ${siteConfig.name}. Schedule your appointment online or call ${siteConfig.phone}.`,
  openGraph: {
    title: `Request Service | ${siteConfig.name}`,
    description: `Schedule your appointment today.`,
  },
};

export default function BookPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Sony blue */}
      <section className="relative bg-sony-hero bg-logo-pattern-dense py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="container relative mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Fill out the form below to schedule your appointment. We'll
            contact you shortly to confirm.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white/90 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 bg-[#0066b3]/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-4">
            Prefer to speak with someone? Give us a call!
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
