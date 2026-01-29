import {
  getHeroContent,
  getFeaturedProperties,
  getBeforeAfterData,
  getVisibleSections,
} from "@/lib/data";

// Re-export types for compatibility
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  propertyType: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

export interface BeforeAfterData {
  id: number;
  title: string;
  description?: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface LandingSection {
  id: number;
  sectionKey: string;
  isVisible: boolean;
  order: number;
}

export async function getLandingData() {
  // Return static data instead of making API calls
  return {
    hero: getHeroContent(),
    properties: getFeaturedProperties(),
    beforeAfter: getBeforeAfterData(),
    sections: getVisibleSections(),
  };
}
