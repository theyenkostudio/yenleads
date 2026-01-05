import { BusinessData } from "@/lib/types/business";

export const rogersRefrigeration: BusinessData = {
  slug: "rogers-refrigeration",
  name: "Rogers Refrigeration",
  tagline: "High Performance HVAC/R Solutions For Your Home & Business",

  industry: "HVAC/R",
  location: "Brandon, MS",
  established: "20+ Years",

  hero: {
    headline: "Comfort You Can Count On",
    subheadline:
      "Central Mississippi's trusted HVAC experts with over 20 years of hands-on experience. Reliable heating and cooling solutions with honest, upfront pricing.",
    ctaText: "Schedule Service",
    ctaSecondary: "Call Now",
  },

  trustBadges: [
    "20+ Years Experience",
    "Licensed & Insured",
    "24/7 Emergency Support",
    "Honest Upfront Pricing",
  ],

  credentials: [
    {
      title: "Licensed HVAC Experts",
      description: "Fully licensed team for residential and commercial projects across Central Mississippi",
      icon: "badge",
    },
    {
      title: "Commercial Certified",
      description: "Factory certifications for Manitowoc, Hoshizaki, True, Beverage Air, and more",
      icon: "award",
    },
    {
      title: "24/7 Emergency Service",
      description: "When your system fails, we're here — day or night",
      icon: "shield",
    },
    {
      title: "20+ Years Experience",
      description: "Two decades of trusted service keeping Mississippi comfortable",
      icon: "star",
    },
  ],

  servicesHeadline: "Complete HVAC/R Solutions",
  servicesSubheadline: "Residential comfort. Commercial reliability. Expert service.",

  services: [
    {
      title: "Air Conditioning",
      description: "Beat the Mississippi heat with expert AC installation, repair, and maintenance.",
      icon: "sun",
    },
    {
      title: "Heating Systems",
      description: "Stay warm all winter with reliable furnace and heat pump services.",
      icon: "home",
    },
    {
      title: "Commercial HVAC",
      description: "Keep your business comfortable with industrial-grade climate solutions.",
      icon: "building",
    },
    {
      title: "Commercial Refrigeration",
      description: "Ice machines, walk-in coolers, freezers — we service all major brands.",
      icon: "battery",
    },
  ],

  about: {
    headline: "Brandon's Trusted HVAC Experts",
    description:
      "At Rogers Refrigeration, we're proud to be Central Mississippi's go-to team for heating, cooling, and refrigeration. Whether it's a simple repair or a complete system install, our licensed team is committed to top-notch workmanship and honest, upfront pricing.",
    highlights: [
      "Fast response times across Central Mississippi",
      "Transparent quotes with no hidden fees",
      "Factory-trained on all major commercial brands",
      "Family-owned, community-focused service",
    ],
  },

  contact: {
    phone: "(601) 896-5747",
    email: "info@rogersrefrigeration.com",
    address: {
      street: "Brandon",
      city: "Brandon",
      state: "MS",
      zip: "39042",
    },
    hours: "Mon–Fri: 8AM–5PM | 24/7 Emergency",
    social: {
      facebook: "https://facebook.com",
    },
  },

  branding: {
    primaryColor: "#2D5A3D",
    accentColor: "#1a1a1a",
    backgroundColor: "#FFFFFF",
    textColor: "#1a1a1a",
    darkMode: false,
  },

  assets: {
    heroImage: "/images/rogers-refrigeration/hero-magnolia.png",
    images: [
      "/images/rogers-refrigeration/hero-magnolia.png",
      "/images/rogers-refrigeration/about-ac.png",
      "/images/rogers-refrigeration/comfort-values.png",
      "/images/rogers-refrigeration/technician-truck.png",
      "/images/rogers-refrigeration/cta-magnolia.png",
    ],
  },
};
