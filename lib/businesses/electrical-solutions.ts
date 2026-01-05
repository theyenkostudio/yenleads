import { BusinessData } from "@/lib/types/business";

export const electricalSolutions: BusinessData = {
  slug: "electrical-solutions",
  name: "Electrical Solutions and Services LLC",
  shortName: "ESS",
  tagline: "Powering Your Projects with Integrity",

  industry: "Electrical Contracting",
  location: "Pearl, MS",
  established: "30+ Years",

  hero: {
    headline: "Safe. Reliable. Code-Compliant.",
    subheadline:
      "Veteran-owned with 30+ years of experience. From EV chargers to whole-home generators, we deliver power solutions that protect your family and future-proof your property.",
    ctaText: "Get Your Free Estimate",
    ctaSecondary: "Call Now",
  },

  trustBadges: [
    "Veteran Owned",
    "30+ Years Experience",
    "Certified Tesla Installer",
    "Generac Authorized Dealer",
  ],

  credentials: [
    {
      title: "Certified Tesla Installer",
      description: "Factory-trained for Tesla Wall Connector and Powerwall installations",
      icon: "car",
    },
    {
      title: "Generac Authorized Dealer",
      description: "Expert backup power solutions to keep your home running",
      icon: "battery",
    },
    {
      title: "Veteran Owned & Operated",
      description: "Mission-first discipline. Integrity in every job.",
      icon: "badge",
    },
    {
      title: "30+ Years in Business",
      description: "Three decades of trusted service across Mississippi",
      icon: "award",
    },
  ],

  servicesHeadline: "Full-Service Electrical Solutions",
  servicesSubheadline: "Residential. Commercial. Industrial.",

  services: [
    {
      title: "Residential Electrical",
      description: "Complete home electrical services — repairs, rewiring, upgrades, and new construction.",
      icon: "home",
    },
    {
      title: "Commercial & Industrial",
      description: "Large-scale electrical solutions for businesses and industrial facilities.",
      icon: "building",
    },
    {
      title: "EV Charger Installation",
      description: "Tesla-certified Level 2 home charging installations.",
      icon: "car",
    },
    {
      title: "Backup Generators",
      description: "Generac whole-home generators. Never lose power again.",
      icon: "battery",
    },
  ],

  about: {
    headline: "Why Rankin County Trusts ESS",
    description:
      "For over three decades, Electrical Solutions and Services has been the name Mississippi families and businesses call when quality matters. As a veteran-owned company, we bring military precision to every project — no shortcuts, no excuses, just work done right the first time.",
    highlights: [
      "Same-day service available for emergencies",
      "Transparent pricing with no hidden fees",
      "Clean, professional technicians",
      "100% satisfaction guarantee",
    ],
  },

  contact: {
    phone: "(769) 572-7597",
    email: "info.ess.ms@gmail.com",
    address: {
      street: "218 Saint Paul Street",
      city: "Pearl",
      state: "MS",
      zip: "39208",
    },
    hours: "Mon–Fri: 7AM–4PM",
    social: {
      facebook: "https://facebook.com",
    },
  },

  branding: {
    primaryColor: "#DC2626",
    accentColor: "#FFFFFF",
    backgroundColor: "#0A0A0A",
    textColor: "#FFFFFF",
    darkMode: true,
  },

  assets: {
    heroImage: "/images/electrical-solutions/hero-logo.png",
    images: [
      "/images/electrical-solutions/hero-logo.png",
      "/images/electrical-solutions/hero-veteran.png",
      "/images/electrical-solutions/footer-contact.png",
    ],
  },
};
