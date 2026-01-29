import { Wrench, Calendar, Settings, Users, HelpCircle, ClipboardCheck } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "consultation",
    title: "Consultation",
    shortDescription: "Schedule a one-on-one consultation to discuss your needs and get personalized recommendations.",
    fullDescription: "Book a consultation with our team to discuss your requirements. We'll listen to your needs, answer questions, and provide tailored recommendations. Our consultations are free and no-obligation.",
    icon: ClipboardCheck,
    features: [
      "Free initial consultation",
      "Personalized recommendations",
      "No obligation",
      "Flexible scheduling",
      "In-person or virtual options",
    ],
    benefits: [
      "Clear understanding of options",
      "Expert guidance",
      "Informed decisions",
      "Time saved",
    ],
  },
  {
    slug: "repair",
    title: "Repair Services",
    shortDescription: "Professional repair services to get things working again quickly and reliably.",
    fullDescription: "When something breaks, you need fast, reliable service. Our skilled technicians provide same-day repair services. We diagnose issues accurately and fix them right the first time, with transparent pricing and satisfaction guarantee.",
    icon: Wrench,
    features: [
      "Same-day service available",
      "Transparent pricing",
      "Satisfaction guarantee",
      "Emergency repairs available",
      "All work warranted",
    ],
    benefits: [
      "Quick resolution",
      "Peace of mind",
      "Extended lifespan",
      "Prevent bigger issues",
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    shortDescription: "Professional installation services with expert guidance and quality workmanship.",
    fullDescription: "Upgrade or add new equipment with our professional installation services. We help you choose the right options, ensure proper setup, and provide ongoing support. All installations come with a comprehensive warranty.",
    icon: Settings,
    features: [
      "Free estimates",
      "Expert guidance",
      "Professional installation",
      "Comprehensive warranty",
      "Ongoing support",
    ],
    benefits: [
      "Optimal performance",
      "Long-term value",
      "Peace of mind",
      "Expert support",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    shortDescription: "Preventive maintenance plans to keep everything running smoothly.",
    fullDescription: "Regular maintenance helps prevent breakdowns and extends the life of your equipment. Our maintenance plans include scheduled visits, inspections, and tune-ups. We catch small issues before they become big problems.",
    icon: Calendar,
    features: [
      "Scheduled visits",
      "Inspections & tune-ups",
      "Priority service",
      "Detailed reports",
      "Flexible plans",
    ],
    benefits: [
      "Prevent breakdowns",
      "Extend lifespan",
      "Maintain warranty",
      "Save money long-term",
    ],
  },
  {
    slug: "support",
    title: "Support Services",
    shortDescription: "Ongoing support and assistance when you need it most.",
    fullDescription: "Get help when you need it with our support services. We offer phone support, remote assistance, and on-site visits. Our team is here to answer questions and resolve issues quickly.",
    icon: HelpCircle,
    features: [
      "Phone support",
      "Remote assistance",
      "On-site visits",
      "Extended hours",
      "Knowledgeable team",
    ],
    benefits: [
      "Quick answers",
      "Problem resolution",
      "Reduced downtime",
      "Expert guidance",
    ],
  },
  {
    slug: "on-site",
    title: "On-Site Service",
    shortDescription: "We come to you for convenient, professional service at your location.",
    fullDescription: "Save time with our on-site service. We bring everything we need to your home or business. Our technicians are professional, punctual, and thorough. Book a visit at a time that works for you.",
    icon: Users,
    features: [
      "Convenient scheduling",
      "Professional technicians",
      "Fully equipped",
      "Flexible time slots",
      "Clear communication",
    ],
    benefits: [
      "Save time",
      "No travel needed",
      "Personalized attention",
      "Quality service",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
