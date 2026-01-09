import { BusinessData } from "@/lib/types/business";

export const bancroftGarage: BusinessData = {
  slug: "bancroft-garage",
  name: "Bancroft Garage Ltd",
  shortName: "Bancroft Garage",
  tagline: "Your Car. Our Priority.",

  industry: "Automotive MOT & Repairs",
  location: "East London",
  established: "25+ Years",

  hero: {
    headline: "Reliable Service. Expert MOT.",
    subheadline:
      "East London's well-established MOT and repair testing centre. Professional care for European and Japanese models, backed by over 25 years of technical expertise.",
    ctaText: "Book Your MOT",
    ctaSecondary: "Call Now",
  },

  trustBadges: [
    "25+ Years Experience",
    "Qualified MOT Testers",
    "Trust Your Garage Member",
    "East London Specialists",
  ],

  credentials: [
    {
      title: "Qualified MOT Testers",
      description:
        "Fully certified testing station ensuring your vehicle meets all safety standards.",
      icon: "clipboard-check",
    },
    {
      title: "25+ Years Experience",
      description:
        "A polite and well-mannered team with decades of hands-on mechanical repair.",
      icon: "award",
    },
    {
      title: "Trust Your Garage",
      description:
        "Active members of the scheme, providing consumers with total confidence.",
      icon: "shield",
    },
    {
      title: "Specialist Care",
      description:
        "Expertise in both European and Japanese vehicles to the highest standards.",
      icon: "settings",
    },
  ],

  servicesHeadline: "Complete Garage Solutions",
  servicesSubheadline:
    "From minor servicing to complex mechanical restoration.",

  services: [
    {
      title: "MOT Testing",
      description:
        "Thorough inspections with free retests available to keep you on the road.",
      icon: "clipboard-check",
    },
    {
      title: "Mechanical Servicing",
      description:
        "Petrol and diesel vehicle maintenance including oil, filters, and full checks.",
      icon: "settings",
    },
    {
      title: "Gearboxes & Timing Belts",
      description:
        "Precision repair of critical transmission and engine timing systems.",
      icon: "activity",
    },
    {
      title: "Diagnostics & Electronics",
      description:
        "High-end engine diagnostics to resolve electrical faults and warnings.",
      icon: "cpu",
    },
  ],

  about: {
    headline: "Treating Your Car As If It's Our Own",
    description:
      "Bancroft Garage Ltd is a well-established MOT and repairs testing centre based in East London. Our mission is to handle every vehicle with the same respect we give our own cars, providing efficient and cost-effective service to the highest industry standards.",
    highlights: [
      "Free estimates on all repairs",
      "Competitive local rates",
      "Same-day service for many repairs",
      "Full stockists of spare car parts",
    ],
  },

  contact: {
    phone: "020 7790 6128",
    email: "info@bancroftgarage.co.uk",
    address: {
      street: "Bancroft Road",
      city: "Stepney, London",
      state: "East London",
      zip: "E1",
    },
    hours: "Mon–Fri: 8:30AM–5:30PM",
    social: {
      facebook: "https://facebook.com",
    },
  },

  branding: {
    primaryColor: "#1E40AF", // Bancroft Royal Blue
    accentColor: "#FACC15", // MOT Safety Yellow
    backgroundColor: "#FFFFFF",
    textColor: "#1C1917",
    darkMode: false,
  },

  assets: {
    heroImage: "/images/bancroft/hero-garage.png",
    images: [
      "/images/bancroft/mot-station.png",
      "/images/bancroft/mechanic-working.png",
      "/images/bancroft/trust-badges.png",
    ],
  },
};
