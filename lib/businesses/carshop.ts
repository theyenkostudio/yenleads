import { BusinessData } from "@/lib/types/business";

export const carShopInc: BusinessData = {
  slug: "carshop",
  name: "CarShop Inc.",
  shortName: "CarShop",
  tagline: "The Toyota, Honda, Acura, and Lexus Specialists",

  industry: "Automotive Repair & Maintenance",
  location: "Ridgeland, MS",
  established: "1997",

  hero: {
    headline: "Factory Trained. Master Certified.",
    subheadline:
      "Ridgeland's elite destination for specialized maintenance and repair. With over 165 years of combined experience, we provide dealership-level precision for only four car lines.",
    ctaText: "Schedule Service",
    ctaSecondary: "View Team",
  },

  trustBadges: [
    "ASE Certified Master Technicians",
    "40+ Years Experience",
    "Honda National Troubleshooting Champion",
    "Specializing in Only 4 Brands",
  ],

  credentials: [
    {
      title: "Master Level Expertise",
      description: "Led by David Morse, a National Troubleshooting Champion with factory training in Japan",
      icon: "award",
    },
    {
      title: "165+ Combined Years",
      description: "A veteran team including Master Technicians Austin Sorey and Tony Resch",
      icon: "users",
    },
    {
      title: "Japanese Specialization",
      description: "Exclusive focus on Toyota, Honda, Acura, and Lexus for superior results",
      icon: "settings",
    },
    {
      title: "ASE Certified",
      description: "The highest standard of automotive repair certification in the industry",
      icon: "badge",
    },
  ],

  servicesHeadline: "Specialized in Only Four. Master of Them All.",
  servicesSubheadline: "Precision Care for Your High-Performance Japanese Vehicle.",

  services: [
    {
      title: "Toyota Specialist",
      description: "Full maintenance and complex repairs for all Toyota models.",
      icon: "car",
    },
    {
      title: "Honda Excellence",
      description: "Factory-trained precision for Honda troubleshooting and repair.",
      icon: "tool",
    },
    {
      title: "Lexus Luxury Care",
      description: "Meticulous maintenance to preserve the performance of your Lexus.",
      icon: "shield",
    },
    {
      title: "Acura Performance",
      description: "Specialized diagnostics and repair for all Acura vehicles.",
      icon: "zap",
    },
  ],

  about: {
    headline: "Built on 40 Years of Excellence",
    description:
      "Founded in 1997 by David and Edna Morse, CarShop Inc. was built to fill a gap in specialized Japanese auto repair. We don't try to fix everything—we focus on being the absolute best at four specific brands. Our team features over 165 years of combined automotive experience, ensuring your car is fixed right the first time.",
    highlights: [
      "National Troubleshooting Contest Winner",
      "Factory Trained in Japan",
      "Master Certified Technicians",
      "Specialized Diagnostic Tools & Software",
    ],
  },

  contact: {
    phone: "(601) 991-9663",
    email: "service@hondacarshop.net",
    address: {
      street: "114 Centre Street",
      city: "Ridgeland",
      state: "MS",
      zip: "39157",
    },
    hours: "Mon–Fri: 8AM–5PM",
    social: {
      facebook: "https://www.facebook.com/hondacarshop",
    },
    // Adding utility feature for the QR code mentioned in the crawl
    features: [
      "Scan QR Code for GPS Directions",
      "Located just off Highway 51",
    ],
  },

  branding: {
    primaryColor: "#DC2626", // Specialist Red
    accentColor: "#1C1917", // Slate Gray
    backgroundColor: "#FFFFFF",
    textColor: "#1C1917",
    darkMode: false,
  },

  assets: {
    heroImage: "/images/carshop/precision-engine.png",
    images: [
      "/images/carshop/precision-engine.png",
      "/images/carshop/master-tech-profile.png",
      "/images/carshop/team-legacy.png",
      "/images/carshop/qr-directions.png",
    ],
  },
};
