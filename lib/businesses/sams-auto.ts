export const samsAuto = {
  name: "Sams Autos",
  tagline: "Car Repairs & Parts Under One Roof",
  established: "1989",
  specialty: "German Car Specialists",
  
  contact: {
    phone: "020 7720 6265",
    email: "info@sams-autos.co.uk",
    address: "Union Muse, off Union Road, Clapham, London, SW4 6JP",
    tubeProximity: "Near Stockwell and Clapham North stations",
  },

  offer: "10% Discount for new customers (Full Service + MOT)",
  
  branding: {
    primary: "#E11D48", // Racing Red
    secondary: "#000000", // Deep Black
    accent: "#FACC15" // German Flag Yellow
  }
};


import { BusinessData } from "@/lib/types/business";

export const samsAutos: BusinessData = {
  slug: "sams-autos",
  name: "Sams Autos",
  shortName: "Sams",
  tagline: "Car Repairs & Parts Under One Roof",

  industry: "German Car Specialist & MOT",
  location: "Clapham / Stockwell, London",
  established: "1989",

  hero: {
    headline: "German Engineering. Local Trust.",
    subheadline:
      "Clapham's premier independent specialists for VW, Audi, BMW, and Mercedes. Over 35 years of precision maintenance just minutes from Stockwell station.",
    ctaText: "Book Your MOT",
    ctaSecondary: "View 10% Offer",
  },

  trustBadges: [
    "Est. 1989",
    "German Car Specialists",
    "10% New Customer Discount",
    "Near Stockwell Tube Station",
  ],

  services: [
    {
      title: "MOT Testing",
      description: "Thorough inspections to keep you legal. Book today for expert testing.",
      icon: "clipboard-check",
    },
    {
      title: "German Car Specialists",
      description: "Expert care for VW, Mercedes, Audi, Seat, BMW, and Mini models.",
      icon: "shield-check",
    },
    {
      title: "Engine Diagnostics",
      description: "Advanced fault-finding and electrical repairs using the latest tech.",
      icon: "cpu",
    },
    {
      title: "Parts & Repairs",
      description: "Full workshop capabilities for exhausts, clutches, timing belts, and brakes.",
      icon: "settings",
    }
  ],

  contact: {
    phone: "020 7720 6265",
    email: "info@sams-autos.co.uk",
    address: {
      street: "Union Muse, off Union Road",
      city: "Clapham",
      state: "London",
      zip: "SW4 6JP",
    },
    hours: "Mon-Fri: 8am - 6pm, Sat: 9am - 4pm, Sun: Closed",
  },

  credentials: [
    {
      title: "Est. 1989",
      description: "Over 35 years of trusted service in South London",
      icon: "award",
    },
    {
      title: "German Car Specialists",
      description: "Expert care for VW, Audi, BMW, Mercedes, and more",
      icon: "car",
    },
    {
      title: "MOT Certified",
      description: "Official MOT testing station",
      icon: "shield",
    },
  ],

  about: {
    headline: "South London's Trusted German Car Specialists",
    description: "Since 1989, Sams Autos has been Clapham and Stockwell's go-to independent garage for German car maintenance and repairs. Our experienced technicians specialise in VW, Audi, BMW, Mercedes, and Mini vehicles, providing dealer-quality service at independent prices.",
    highlights: [
      "Over 35 years of experience",
      "Specialists in German vehicles",
      "Convenient location near Stockwell and Clapham North tube stations",
    ],
  },

  branding: {
    primaryColor: "#E11D48", // Racing Red
    accentColor: "#000000",  // Professional Black
    backgroundColor: "#FAFAFA",
    textColor: "#171717",
    darkMode: false,
  }
};
