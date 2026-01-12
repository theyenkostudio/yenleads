import { BusinessData } from "../types/business";


export const kmAutoData: BusinessData = {
  slug: "km-auto",
  name: "K & M Auto Repair",
  shortName: "K&M Auto",
  tagline: "If it was easy, anybody could do it.",

  industry: "Premier Auto Repair & Service Shop",
  location: "Brandon, MS",
  established: "Owned by Karla & Mike Perry",

  hero: {
    headline: "If it was easy, anybody could do it.",
    subheadline: "Karla & Mike Perry provide Brandon and Flowood with premier, ASE-certified auto repair and professional wheel alignments.",
    ctaText: "Schedule Appointment",
    ctaSecondary: "View Coupons",
  },

  trustBadges: [
    "ASE Certified",
    "ASA Member",
    "Family Owned",
    "Premier Service Shop"
  ],

  credentials: [
    {
      title: "ASE Certified",
      description: "Automotive Service Excellence — standard for repair quality.",
      icon: "badge"
    },
    {
      title: "ASA Member",
      description: "Automotive Service Association — committed to honest service.",
      icon: "shield"
    }
  ],

  servicesHeadline: "Professional Auto Care",
  servicesSubheadline: "Specialized maintenance for Brandon and Flowood vehicles.",
  services: [
    {
      title: "Wheel Alignments",
      description: "Professional alignment services to ensure safety and tire longevity.",
      icon: "wrench"
    },
    {
      title: "Transmission Repair",
      description: "Expert diagnostics and repair for all vehicle transmission systems.",
      icon: "wrench"
    },
    {
      title: "Brake Repair",
      description: "Complete brake system inspection, service, and parts replacement.",
      icon: "shield"
    },
    {
      title: "ATV Repair",
      description: "Specialized service and repair for all-terrain vehicles.",
      icon: "car"
    }
  ],

  about: {
    headline: "Welcome to K & M Auto Repair",
    description: "K & M Auto Repair is proud to service the Brandon area, seasoned with mechanical experience sure to take care of all your auto repair needs.",
    highlights: ["ASE certified repair specialists", "Well-trained service advisors", "Regular service packages"]
  },

  testimonials: [
    {
      name: "Brian C.",
      role: "Jackson, MS | Ram 2500",
      content: "Brian said they fixed everything he took to them. Recommended.",
      rating: 5
    }
  ],

  contact: {
    phone: "(601) 825-9093",
    email: "service@kandmauto.net",
    address: {
      street: "1009 Depot Drive",
      city: "Brandon",
      state: "MS",
      zip: "39042"
    },
    hours: "Mon - Fri: 7:00am - 4:00pm",
    social: {
      facebook: "https://facebook.com/kandmauto"
    }
  },

  branding: {
    primaryColor: "#C22026", // Logo Red
    accentColor: "#1C1C1C",  // Deep Charcoal
    backgroundColor: "#FFFFFF",
    textColor: "#333333",
    darkMode: false
  },

  assets: {
    images: ["/images/km/hero-truck.jpg", "/images/km/workshop.jpg"]
  }
};
