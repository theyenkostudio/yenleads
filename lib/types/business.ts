export interface BusinessContact {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: string;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface BusinessBranding {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  darkMode: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: "bolt" | "home" | "building" | "car" | "shield" | "wrench" | "battery" | "sun";
}

export interface Credential {
  title: string;
  description?: string;
  icon?: "check" | "star" | "badge" | "award" | "shield" | "car" | "battery";
}

export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  rating?: number;
}

export interface BusinessData {
  // Identifiers
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;

  // Business Info
  industry: string;
  location: string;
  established?: string;

  // Hero Section
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaSecondary?: string;
  };

  // Trust Signals
  trustBadges: string[];
  credentials: Credential[];

  // Services
  services: ServiceItem[];
  servicesHeadline?: string;
  servicesSubheadline?: string;

  // About Section
  about: {
    headline: string;
    description: string;
    highlights?: string[];
  };

  // Testimonials (optional)
  testimonials?: Testimonial[];

  // Contact & Branding
  contact: BusinessContact;
  branding: BusinessBranding;

  // Assets
  assets?: {
    logo?: string;
    heroImage?: string;
    images?: string[];
  };
}
