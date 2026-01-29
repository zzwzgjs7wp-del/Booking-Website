export const siteConfig = {
  name: "AI Booking Solutions",
  phone: "(555) 123-4567",
  email: "hello@aibookingsolutions.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST",
    zip: "12345",
  },
  serviceArea: "Your Area",
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com/yourbusiness",
    google: "https://g.page/yourbusiness",
  },
  seo: {
    defaultTitle: "AI Booking Solutions | Smart Appointment Scheduling",
    defaultDescription: "AI-powered appointment booking for local businesses. Schedule smarter, reduce no-shows, grow your business.",
  },
} as const;
