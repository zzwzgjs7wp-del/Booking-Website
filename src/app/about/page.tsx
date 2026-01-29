import { Metadata } from "next";
import { Award, Users, Clock, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - your trusted partner in ${siteConfig.serviceArea}. Licensed, insured, and committed to excellence.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Professional services with a commitment to quality and customer satisfaction.`,
  },
};

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your protection and peace of mind",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our satisfied customers",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Fast response times when you need us most",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified technicians with years of experience",
  },
];

const credentials = [
  "Certified Team",
  "Licensed & Bonded",
  "BBB Accredited Business",
  "Fully Insured",
  "Years of Experience",
  "Satisfaction Guarantee",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Sony blue */}
      <section className="relative bg-cyberpunk-hero bg-logo-pattern-dense py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="container relative mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About {siteConfig.name}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted partner for professional services in {siteConfig.serviceArea}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white/5 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                {siteConfig.name} was founded with a simple mission: to provide
                exceptional service that meets the needs of our community. Based in {siteConfig.serviceArea}, we
                understand what our customers need.
              </p>
              <p>
                With years of experience, our team has helped thousands of customers
                with everything from consultations to installations. We
                pride ourselves on honest pricing, quality workmanship, and
                outstanding customer service.
              </p>
              <p>
                What sets us apart is our commitment to doing the job right the
                first time. We don't cut corners, and we stand behind our work
                with comprehensive warranties and ongoing support. When you
                choose {siteConfig.name}, you're choosing reliability,
                expertise, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Credentials & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're committed to providing the highest quality service
              with transparent pricing, honest communication, and exceptional
              customer care. Your satisfaction is our top priority.
            </p>
            <CTAButton
              type="both"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
