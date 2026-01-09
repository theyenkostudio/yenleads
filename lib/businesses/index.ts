import { BusinessData } from "@/lib/types/business";
import { electricalSolutions } from "./electrical-solutions";
import { rogersRefrigeration } from "./rogers-refrigeration";
import { sistersInBirth } from "./sisters-in-birth";
import { carShopInc } from "./carshop";

// Registry of all businesses
export const businesses: Record<string, BusinessData> = {
  "electrical-solutions": electricalSolutions,
  "rogers": rogersRefrigeration,
  "sisters-in-birth": sistersInBirth,
  "carshop": carShopInc
};

// Get a business by slug
export function getBusinessBySlug(slug: string): BusinessData | undefined {
  return businesses[slug];
}

// Get all business slugs (for static generation)
export function getAllBusinessSlugs(): string[] {
  return Object.keys(businesses);
}

// Get all businesses
export function getAllBusinesses(): BusinessData[] {
  return Object.values(businesses);
}
