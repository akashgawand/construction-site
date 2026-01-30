// Static data extracted from backend seed file
// This file contains all the data needed for the frontend without backend API calls

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl: string;
}

export interface PropertyMedia {
  type: 'image' | 'video' | '360';
  url: string;
  thumbnail?: string;
  badge?: string; // Optional badge text like "Investment Video", "Drone Video"
}

export interface AvailableSpace {
  id: number;
  floor: string;
  suite: string;
  capacity: string; // e.g., "1 - 4"
  size: number; // in square feet
  rentalRate: number; // monthly rate
  spaceUse: string; // e.g., "Office"
}

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string; // Keep for backward compatibility
  media?: PropertyMedia[]; // New: multiple media support (optional for now)
  coordinates?: {
    lat: number;
    lng: number;
  };
  isFeatured: boolean;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  expectedROI?: number; // Expected return on investment percentage
  rentalYield?: number; // Annual rental yield percentage
  appreciationRate?: number; // Historical appreciation rate percentage
  textHighlights?: string[]; // New: text-based highlights for bullet-point list
  availableSpaces?: AvailableSpace[]; // New: available spaces for commercial properties
}

export interface ROIConfig {
  id: number;
  propertyType: string;
  roiPercentageMin: number;
  roiPercentageMax: number;
  imageUrl: string;
  disclaimerText: string;
}

export interface CTASection {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  whatsappNumber: string;
}

export interface MarqueeSettings {
  isEnabled: boolean;
  speed: number;
}

export interface LandingSection {
  id: number;
  sectionKey: string;
  title: string;
  isVisible: boolean;
  order: number;
}

export interface TrustPartner {
  id: number;
  name: string;
  isTextBased: boolean;
  isVisible: boolean;
  order: number;
}

export interface BeforeAfter {
  id: number;
  title: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  isVisible: boolean;
}

export interface CaseStudy {
  id: number;
  title: string;
  location: string;
  state: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
  status: string;
  isVisible: boolean;
  displayOrder: number;
}

export interface PopularCity {
  id: number;
  name: string;
  state: string;
  imageUrl: string;
  propertyCount: number;
  averagePrice: number;
  description: string;
  isVisible: boolean;
  order: number;
}

// Hero Content
export const heroContent: HeroContent = {
  headline: 'Discover Your Next Investment',
  subheadline: 'Explore premium properties with exceptional ROI potential.',
  ctaText: 'Explore Properties',
  ctaLink: '#featured',
  bgImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
};

// ROI Configurations
export const roiConfigs: ROIConfig[] = [
  {
    id: 1,
    propertyType: 'Building',
    roiPercentageMin: 8.5,
    roiPercentageMax: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
  {
    id: 2,
    propertyType: 'Shop',
    roiPercentageMin: 10.0,
    roiPercentageMax: 15.0,
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
  {
    id: 3,
    propertyType: 'Plot',
    roiPercentageMin: 6.0,
    roiPercentageMax: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
  {
    id: 4,
    propertyType: 'Commercial',
    roiPercentageMin: 12.0,
    roiPercentageMax: 18.0,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
  {
    id: 5,
    propertyType: 'Residential',
    roiPercentageMin: 8.0,
    roiPercentageMax: 11.0,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
  {
    id: 6,
    propertyType: 'Villa',
    roiPercentageMin: 9.0,
    roiPercentageMax: 13.0,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    disclaimerText: 'ROI estimates are illustrative only and not guaranteed. Actual returns may vary.',
  },
];

// CTA Section
export const ctaSection: CTASection = {
  heading: 'Ready to Invest?',
  subheading: 'Get in touch with our expert team to find the perfect property for your portfolio',
  ctaText: 'Contact Us',
  ctaLink: '/contact',
  whatsappNumber: '+1234567890',
};

// Marquee Settings
export const marqueeSettings: MarqueeSettings = {
  isEnabled: true,
  speed: 50,
};

// Landing Sections
export const landingSections: LandingSection[] = [
  { id: 1, sectionKey: 'hero', title: 'Hero Section', isVisible: true, order: 0 },
  { id: 4, sectionKey: 'featured', title: 'Featured Properties', isVisible: true, order: 1 },
  { id: 9, sectionKey: 'popularCities', title: 'Popular Cities', isVisible: true, order: 2 },
  { id: 2, sectionKey: 'about', title: 'About Section', isVisible: true, order: 3 },
  // { id: 3, sectionKey: 'previousWork', title: 'Previous Work', isVisible: true, order: 2 },
  { id: 5, sectionKey: 'beforeAfter', title: 'Transformations', isVisible: true, order: 4 },
  { id: 6, sectionKey: 'roiEstimator', title: 'ROI Estimator', isVisible: true, order: 5 },
  { id: 7, sectionKey: 'trust', title: 'Trust Partners', isVisible: true, order: 6 },
  { id: 8, sectionKey: 'cta', title: 'Call to Action', isVisible: true, order: 7 },
];

// Properties
export const properties: Property[] = [
  {
    id: 1,
    title: "Skyline Tower",
    description: "A landmark 45-story mixed-use development featuring premium residences, Grade-A office spaces, and luxury retail. Setting new standards for urban living with world-class amenities and sustainable design.",
    price: 2500000,
    location: "New York City, NY",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Investment Video' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', badge: 'Drone Video' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    expectedROI: 12.5,
    rentalYield: 4.2,
    appreciationRate: 8.3,
    textHighlights: [
      "Located in the heart of Manhattan's most prestigious neighborhood with unparalleled city views.",
      "Premium residences feature floor-to-ceiling windows, Italian marble finishes, and smart home automation.",
      "Building amenities include infinity pool, spa, fitness center, and private screening room.",
      "24/7 concierge service, valet parking, and dedicated property management team.",
      "Grade-A office spaces with flexible layouts and state-of-the-art conference facilities.",
      "Ground-floor luxury retail featuring flagship stores and fine dining establishments.",
      "LEED Gold certified building with energy-efficient systems and green rooftop gardens.",
      "Direct access to subway lines and within walking distance of Central Park.",
      "Private wine cellar, pet spa, and children's playroom for residents.",
      "Hurricane-resistant construction with backup generator and advanced security systems."
    ],
    availableSpaces: [
      { id: 1, floor: "28th", suite: "2819", capacity: "1 - 4", size: 165, rentalRate: 808.50, spaceUse: "Office" },
      { id: 2, floor: "28th", suite: "2824", capacity: "1 - 4", size: 160, rentalRate: 1262, spaceUse: "Office" },
      { id: 3, floor: "28th", suite: "2832A", capacity: "1", size: 122, rentalRate: 607.56, spaceUse: "Office" },
      { id: 4, floor: "28th", suite: "2836", capacity: "1 - 4", size: 196, rentalRate: 1707, spaceUse: "Office" },
      { id: 5, floor: "28th", suite: "2860", capacity: "1 - 3", size: 202, rentalRate: 1794, spaceUse: "Office" },
    ],
  },
  {
    id: 2,
    title: "Heritage Commercial Hub",
    description: "Adaptive reuse of a historic 1920s warehouse transformed into a vibrant commercial complex. Preserving architectural heritage while delivering premium retail and co-working spaces.",
    price: 3200000,
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Virtual Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', badge: 'Aerial View' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 37.7749, lng: -122.4194 },
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 50000,
    expectedROI: 15.2,
    rentalYield: 6.8,
    appreciationRate: 9.5,
    textHighlights: [
      "Historic 1920s warehouse building fully restored with original brick and timber features preserved.",
      "Prime location in San Francisco's Mission District with high foot traffic and visibility.",
      "Mixed-use space featuring boutique retail, artisan cafes, and creative co-working areas.",
      "Exposed brick walls, polished concrete floors, and industrial-style lighting throughout.",
      "High ceilings ranging from 14-18 feet with abundant natural light from oversized windows.",
      "Modern HVAC, plumbing, and electrical systems installed while maintaining historic character.",
      "Flexible floor plans suitable for tech startups, creative agencies, and retail concepts.",
      "Shared rooftop terrace with city views, perfect for events and networking.",
      "On-site parking garage with 100+ spaces and bike storage facilities.",
      "Within walking distance of BART station, restaurants, galleries, and entertainment venues."
    ],
    availableSpaces: [
      { id: 1, floor: "1st", suite: "101", capacity: "10 - 20", size: 2500, rentalRate: 8750, spaceUse: "Retail" },
      { id: 2, floor: "2nd", suite: "205", capacity: "15 - 30", size: 3200, rentalRate: 11200, spaceUse: "Office" },
      { id: 3, floor: "2nd", suite: "210", capacity: "5 - 10", size: 1800, rentalRate: 6300, spaceUse: "Office" },
      { id: 4, floor: "3rd", suite: "305", capacity: "20 - 40", size: 4500, rentalRate: 15750, spaceUse: "Co-working" },
    ],
  },
  {
    id: 3,
    title: "Emerald Villas",
    description: "Boutique collection of luxury villas nestled in lush greenery with private pools, smart home technology, and panoramic views. A refined blend of nature and modern architecture.",
    price: 1800000,
    location: "Scottsdale, AZ",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Property Walkthrough' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', badge: 'Pool & Outdoor' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 33.4942, lng: -111.9261 },
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    expectedROI: 10.8,
    rentalYield: 3.5,
    appreciationRate: 7.3,
    textHighlights: [
      "Exclusive gated community with only 12 custom-designed luxury villas surrounded by desert landscape.",
      "Each villa features private infinity pool, outdoor kitchen, and covered entertainment pavilion.",
      "Floor-to-ceiling sliding glass doors create seamless indoor-outdoor living experience.",
      "Smart home automation controls lighting, climate, security, and entertainment systems.",
      "Gourmet kitchens with Wolf and Sub-Zero appliances, quartz waterfall islands, and custom cabinetry.",
      "Master suites with spa-like bathrooms featuring soaking tubs, rainfall showers, and dual vanities.",
      "Sustainable design includes solar panels, energy-efficient windows, and drought-resistant landscaping.",
      "Private two-car garage with EV charging station and additional storage space.",
      "Panoramic mountain and desert views from multiple terraces and observation decks.",
      "Minutes from championship golf courses, upscale shopping, and fine dining in downtown Scottsdale."
    ],
  },
  {
    id: 4,
    title: "Tech Park Phase III",
    description: "State-of-the-art technology park spanning multiple acres with LEED Platinum certification. Features premium office space, wellness facilities, and landscaped campuses.",
    price: 5000000,
    location: "Austin, TX",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Campus Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80', badge: 'Drone Footage' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 30.2672, lng: -97.7431 },
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 600000,
    expectedROI: 14.5,
    rentalYield: 7.2,
    appreciationRate: 11.3,
    textHighlights: [
      "600,000 sq ft technology campus with LEED Platinum certification and net-zero energy design.",
      "Located in Austin's Silicon Hills tech corridor with direct access to major highways.",
      "Class A+ office buildings with floor-to-ceiling windows, exposed ceilings, and flexible layouts.",
      "On-site amenities include fitness center, yoga studio, meditation rooms, and wellness clinic.",
      "Multiple cafeterias and coffee bars featuring locally-sourced and organic food options.",
      "Landscaped campus with walking trails, outdoor workspaces, and native Texas vegetation.",
      "Advanced fiber optic infrastructure with redundant internet connectivity and data centers.",
      "Collaborative spaces include innovation labs, maker spaces, and technology demonstration areas.",
      "2,000+ parking spaces with EV charging stations and covered bike parking for 500+ bikes.",
      "Shuttle service to downtown Austin, Metro Rail station, and nearby residential areas."
    ],
    availableSpaces: [
      { id: 1, floor: "2nd", suite: "Building A-200", capacity: "50 - 100", size: 12000, rentalRate: 42000, spaceUse: "Office" },
      { id: 2, floor: "3rd", suite: "Building B-305", capacity: "100 - 200", size: 25000, rentalRate: 87500, spaceUse: "Office" },
      { id: 3, floor: "1st", suite: "Building C-150", capacity: "30 - 60", size: 8500, rentalRate: 29750, spaceUse: "Office" },
      { id: 4, floor: "4th", suite: "Building A-400", capacity: "150 - 300", size: 35000, rentalRate: 122500, spaceUse: "Office" },
    ],
  },
  {
    id: 5,
    title: "Riverside Estates",
    description: "Master-planned gated community with premium residential plots along the riverfront. Clubhouse, sports facilities, and generous green cover for sustainable living.",
    price: 450000,
    location: "Boise, ID",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Community Overview' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', badge: 'Aerial Photography' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80' },
    ],
    coordinates: { lat: 43.6150, lng: -116.2023 },
    isFeatured: true,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    expectedROI: 9.2,
    rentalYield: 0,
    appreciationRate: 9.2,
    textHighlights: [
      "Master-planned community featuring 150 premium residential plots along the Boise River.",
      "Plot sizes range from 0.25 to 1 acre with river frontage and mountain views available.",
      "All utilities underground including water, sewer, electricity, natural gas, and fiber internet.",
      "Gated entrance with 24/7 security, perimeter fencing, and HOA management services.",
      "Community clubhouse with pool, fitness center, event spaces, and concierge services.",
      "Sports facilities include tennis courts, basketball court, playground, and riverside walking trails.",
      "40% of community dedicated to green spaces, parks, and natural habitat preservation.",
      "Architectural design guidelines ensure cohesive aesthetic while allowing customization.",
      "Private boat dock and river access for kayaking, fishing, and water recreation.",
      "15 minutes from downtown Boise, top-rated schools, shopping centers, and Boise Airport."
    ],
  },
  {
    id: 6,
    title: "Urban Lofts",
    description: "Contemporary industrial-style loft apartments with high ceilings, exposed brick, and floor-to-ceiling windows. Designed for creative professionals in the urban core.",
    price: 950000,
    location: "Brooklyn, NY",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Loft Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', badge: 'Interior Design' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 40.6782, lng: -73.9442 },
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    expectedROI: 11.3,
    rentalYield: 4.8,
    appreciationRate: 6.5,
    textHighlights: [
      "Converted 1920s warehouse building in trendy Williamsburg featuring authentic loft living.",
      "Soaring 14-foot ceilings with original exposed brick walls and industrial timber beams.",
      "Floor-to-ceiling windows flood spaces with natural light and offer stunning city views.",
      "Open-concept floor plans ideal for creative professionals, artists, and designers.",
      "Modern kitchens with stainless steel appliances, concrete countertops, and industrial fixtures.",
      "Polished concrete floors throughout with in-unit washer/dryer and climate control.",
      "Building amenities include rooftop deck, co-working space, bike storage, and package room.",
      "Pet-friendly community with dog washing station and nearby off-leash park.",
      "Steps from Bedford Avenue L train station with 15-minute commute to Manhattan.",
      "Surrounded by artisan coffee shops, farm-to-table restaurants, galleries, and live music venues."
    ],
  },
  {
    id: 7,
    title: "Coastal Paradise Resort",
    description: "Luxury beachfront resort development with private villas, infinity pools, spa, and fine dining. Exclusive access to pristine beaches and water recreation.",
    price: 2200000,
    location: "Malibu, CA",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Resort Experience' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', badge: 'Beach Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 34.0259, lng: -118.7798 },
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    expectedROI: 9.8,
    rentalYield: 5.2,
    appreciationRate: 4.6,
    textHighlights: [
      "Exclusive beachfront resort with only 25 private villas offering unobstructed Pacific Ocean views.",
      "Each villa features private infinity pool, outdoor shower, and expansive ocean-facing terrace.",
      "Direct beach access to pristine private stretch of sand with complimentary beach service.",
      "World-class spa offering massages, facials, body treatments, and wellness programs.",
      "Fine dining restaurant helmed by Michelin-starred chef focusing on coastal California cuisine.",
      "Water recreation includes kayaking, paddleboarding, snorkeling, and seasonal whale watching.",
      "Villas designed with floor-to-ceiling sliding glass walls, natural materials, and coastal elegance.",
      "Concierge services arrange private yacht charters, helicopter tours, and exclusive experiences.",
      "Fitness center, yoga pavilion, and meditation gardens overlooking the ocean.",
      "Prime location on Pacific Coast Highway between Santa Monica and Ventura, near celebrity estates."
    ],
  },
  {
    id: 8,
    title: "Smart City Apartments",
    description: "IoT-enabled smart apartments with automated climate control, advanced security, and energy optimization. Rooftop gardens and EV charging included.",
    price: 850000,
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Smart Home Demo' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93668?w=1200&q=80', badge: 'Tech Features' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 47.6062, lng: -122.3321 },
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    expectedROI: 13.2,
    rentalYield: 5.5,
    appreciationRate: 7.7,
    textHighlights: [
      "Next-generation smart apartments with integrated IoT technology controlling all systems via smartphone.",
      "Automated climate control learns preferences and optimizes energy usage for sustainability.",
      "Advanced security features including facial recognition entry, smart locks, and video monitoring.",
      "Voice-activated controls for lighting, blinds, entertainment systems, and appliances.",
      "Energy monitoring dashboard tracks real-time consumption with AI-powered optimization suggestions.",
      "Rooftop urban gardens with organic vegetables, herbs, and community composting program.",
      "All parking spaces equipped with Level 2 EV charging stations included in HOA fees.",
      "High-speed fiber internet with mesh Wi-Fi coverage throughout apartments and common areas.",
      "Smart package delivery system with refrigerated lockers and real-time notifications.",
      "Located in South Lake Union near Amazon HQ, Google offices, and rapid transit connections."
    ],
  },
  {
    id: 9,
    title: "Mountain View Chalets",
    description: "Alpine-style luxury chalets with breathtaking mountain vistas, private hot tubs, and stone fireplaces. Perfect retreat for nature lovers seeking tranquility.",
    price: 1250000,
    location: "Aspen, CO",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Mountain Retreat Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80', badge: 'Winter Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80' },
    ],
    coordinates: { lat: 39.1911, lng: -106.8175 },
    isFeatured: false,
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    expectedROI: 8.5,
    rentalYield: 4.0,
    appreciationRate: 4.5,
    textHighlights: [
      "Authentic alpine chalets constructed with reclaimed timber and natural stone from Colorado quarries.",
      "Floor-to-ceiling windows frame panoramic views of Aspen Mountain and Maroon Bells peaks.",
      "Outdoor hot tubs and fire pits on wraparound decks perfect for stargazing and relaxation.",
      "Interior features vaulted ceilings, river rock fireplaces, and rustic-elegant furnishings.",
      "Gourmet kitchens with professional-grade appliances, granite counters, and breakfast nooks.",
      "Ski-in/ski-out access to Aspen Highlands with private ski storage and boot warming room.",
      "Radiant floor heating, oversized soaking tubs, and steam showers in master bathrooms.",
      "Two-car heated garage with workshop space and additional storage for outdoor equipment.",
      "Wildlife viewing opportunities including elk, deer, eagles, and occasional black bears.",
      "Minutes from downtown Aspen's world-class dining, shopping, cultural events, and nightlife."
    ],
  },
  {
    id: 10,
    title: "Downtown Executive Suites",
    description: "Fully furnished executive suites in the financial district with concierge services, business center, and skyline views. Ideal for corporate professionals.",
    price: 1150000,
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Executive Suite Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', badge: 'City Views' },
    ],
    coordinates: { lat: 41.8781, lng: -87.6298 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    expectedROI: 10.5,
    rentalYield: 5.8,
    appreciationRate: 4.7,
    textHighlights: [
      "Fully furnished executive suites in prestigious Loop financial district tower.",
      "Turn-key living with designer furniture, artwork, kitchenware, and premium linens included.",
      "24/7 concierge services including dry cleaning, housekeeping, and personal assistant support.",
      "Business center with private offices, conference rooms, and high-speed connectivity.",
      "Panoramic skyline views of Lake Michigan, Navy Pier, and Chicago's iconic architecture.",
      "Building amenities include fitness center, indoor pool, sauna, and rooftop lounge.",
      "Walking distance to Chicago Board of Trade, Federal Reserve, and major corporate headquarters.",
      "Attached to Pedway system for weather-protected access to shops, restaurants, and transit.",
      "Valet parking, car wash services, and EV charging in secure underground garage.",
      "Flexible lease terms from 3 months to multi-year for corporate relocations and executives."
    ],
  },
  {
    id: 11,
    title: "Lakeside Meadows",
    description: "Expansive residential plots overlooking pristine lake waters. Underground utilities, paved roads, and 24/7 security in a serene natural setting.",
    price: 280000,
    location: "Minneapolis, MN",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Property Flyover' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', badge: 'Lake Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80' },
    ],
    coordinates: { lat: 44.9778, lng: -93.2650 },
    isFeatured: false,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 3600,
    expectedROI: 7.8,
    rentalYield: 0,
    appreciationRate: 7.8,
    textHighlights: [
      "80 exclusive residential plots on 200 acres surrounding 50-acre private spring-fed lake.",
      "Plot sizes from 0.5 to 2 acres with lakefront, lake-view, and wooded options available.",
      "All infrastructure complete including underground utilities, fiber internet, and paved roads.",
      "Gated community with 24/7 security patrol and controlled access for residents and guests.",
      "Community amenities include boat launch, fishing dock, swimming beach, and picnic pavilions.",
      "Architectural guidelines ensure quality while allowing diverse home styles and customization.",
      "Protected natural areas with hiking trails, wildlife corridors, and conservation easements.",
      "Community well and septic approved, or connection to municipal services available.",
      "20 minutes from downtown Minneapolis, Mall of America, and Minneapolis-St. Paul Airport.",
      "Excellent schools in highly-rated Wayzata School District with bus service to community entrance."
    ],
  },
  {
    id: 12,
    title: "Innovation Business Center",
    description: "Modern business complex with flexible office layouts, conference facilities, and fiber optic connectivity. Positioned in emerging tech corridor.",
    price: 4200000,
    location: "Raleigh, NC",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Business Center Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', badge: 'Modern Offices' },
    ],
    coordinates: { lat: 35.7796, lng: -78.6382 },
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 85000,
    expectedROI: 13.8,
    rentalYield: 6.5,
    appreciationRate: 7.3,
    textHighlights: [
      "85,000 sq ft Class A business center in Research Triangle Park's growing tech corridor.",
      "Flexible office layouts from 500 to 10,000 sq ft with demising walls and custom build-outs.",
      "Redundant fiber optic connectivity with carrier-neutral telecom room and data center option.",
      "Shared conference facilities include boardrooms, training rooms, and video conferencing suites.",
      "Modern amenities feature fitness center, café, outdoor terraces, and collaboration spaces.",
      "LEED Silver certified with energy-efficient HVAC, LED lighting, and solar panel array.",
      "Ample parking with 4:1000 ratio, covered spaces, EV charging, and bike storage.",
      "Located near Duke, UNC, and NC State with access to top talent and research partnerships.",
      "Surrounded by major employers including IBM, Cisco, SAS Institute, and biotech companies.",
      "Direct access to I-40 and I-540 with 15-minute drive to Raleigh-Durham Airport."
    ],
    availableSpaces: [
      { id: 1, floor: "1st", suite: "110", capacity: "5 - 10", size: 1200, rentalRate: 3600, spaceUse: "Office" },
      { id: 2, floor: "2nd", suite: "205", capacity: "15 - 25", size: 3500, rentalRate: 10500, spaceUse: "Office" },
      { id: 3, floor: "2nd", suite: "220", capacity: "10 - 20", size: 2400, rentalRate: 7200, spaceUse: "Office" },
      { id: 4, floor: "3rd", suite: "305", capacity: "30 - 50", size: 6000, rentalRate: 18000, spaceUse: "Office" },
    ],
  },
  {
    id: 13,
    title: "Garden District Townhomes",
    description: "Elegant three-story townhomes with private courtyards, hardwood floors, and designer kitchens. Walk to restaurants, parks, and entertainment.",
    price: 720000,
    location: "New Orleans, LA",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Townhome Walkthrough' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80', badge: 'Courtyard Views' },
    ],
    coordinates: { lat: 29.9511, lng: -90.0715 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    expectedROI: 9.2,
    rentalYield: 4.5,
    appreciationRate: 4.7,
    textHighlights: [
      "Historic Garden District location with tree-lined streets and preserved 19th-century architecture.",
      "Three-story townhomes featuring New Orleans-inspired design with cast iron balconies and shutters.",
      "Private brick courtyards with fountain features, gas lanterns, and tropical landscaping.",
      "Original hardwood floors, exposed brick accent walls, and 10-foot ceilings throughout.",
      "Gourmet kitchens with marble countertops, farmhouse sinks, and high-end stainless appliances.",
      "Master suites with walk-in closets, spa bathrooms, and French doors to private balconies.",
      "Rooftop terraces with city views perfect for entertaining and enjoying New Orleans weather.",
      "Two-car garage with direct access, plus additional storage and workshop space.",
      "Walking distance to Magazine Street shops, Commander's Palace, Audubon Park, and St. Charles streetcar.",
      "Historic neighborhood with Mardi Gras parade route, annual garden tours, and vibrant community."
    ],
  },
  {
    id: 14,
    title: "Desert Oasis Estates",
    description: "Mediterranean-inspired villas with desert landscaping, outdoor kitchens, and resort-style pools. Gated community with golf course access.",
    price: 1680000,
    location: "Phoenix, AZ",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Estate Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', badge: 'Golf Course Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 33.4484, lng: -112.0740 },
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    expectedROI: 10.2,
    rentalYield: 3.8,
    appreciationRate: 6.4,
    textHighlights: [
      "Mediterranean luxury villas in guard-gated golf community with 24/7 security and concierge.",
      "Resort-style backyard oasis with infinity-edge pool, spa, waterfall, and swim-up bar.",
      "Outdoor living spaces include summer kitchen with built-in BBQ, pizza oven, and refrigeration.",
      "Covered loggia with ceiling fans, misting system, and fireplace for year-round entertaining.",
      "Grand interior features travertine floors, coffered ceilings, and wrought iron details.",
      "Gourmet kitchen with two islands, butler's pantry, wine cellar, and professional appliances.",
      "Master retreat with sitting area, dual closets, exercise room, and resort bathroom.",
      "Championship 18-hole golf course designed by Tom Fazio with member clubhouse and pro shop.",
      "Low-maintenance xeriscaping with mature cacti, palms, and automated drip irrigation.",
      "Near Paradise Valley, Scottsdale Fashion Square, hiking trails, and Phoenix Sky Harbor Airport."
    ],
  },
  {
    id: 15,
    title: "Historic Brick Row",
    description: "Restored Victorian-era row houses with original architectural details, modern amenities, and charming tree-lined streets in heritage district.",
    price: 890000,
    location: "Boston, MA",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Historic Home Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80', badge: 'Victorian Details' },
    ],
    coordinates: { lat: 42.3601, lng: -71.0589 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    expectedROI: 8.9,
    rentalYield: 3.2,
    appreciationRate: 5.7,
    textHighlights: [
      "Meticulously restored 1880s Victorian row house in Back Bay historic preservation district.",
      "Original architectural details include crown molding, medallions, bay windows, and marble fireplaces.",
      "Refinished heart pine floors, decorative plasterwork, and period-appropriate lighting fixtures.",
      "Modern updates include central air, updated electrical and plumbing, and chef's kitchen.",
      "Four levels of living space with parlor floor, family bedrooms, and finished garden level.",
      "Private rear garden with brick patio, perennial gardens, and original carriage house converted to office.",
      "Updated bathrooms blend historic character with modern luxury including heated floors and soaking tubs.",
      "Tree-lined Commonwealth Avenue location near Boston Public Garden and Newbury Street shopping.",
      "Walking distance to Symphony Hall, Prudential Center, restaurants, and MBTA Green Line.",
      "Historic Boston neighborhood with active community association and annual home tours."
    ],
  },
  {
    id: 16,
    title: "Waterfront Shopping Plaza",
    description: "Prime retail development on bustling waterfront with high foot traffic. Anchor tenants secured, excellent visibility and parking facilities.",
    price: 6800000,
    location: "San Diego, CA",
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Plaza Overview' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80', badge: 'Waterfront Location' },
    ],
    coordinates: { lat: 32.7157, lng: -117.1611 },
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 120000,
    expectedROI: 16.5,
    rentalYield: 8.2,
    appreciationRate: 8.3,
    textHighlights: [
      "120,000 sq ft mixed-use development on San Diego Bay waterfront with marina views.",
      "Ground floor retail with outdoor dining patios and direct boardwalk pedestrian access.",
      "Anchor tenants include upscale grocery, fitness center, and waterfront restaurant signed to 15-year leases.",
      "Additional retail spaces available from 1,200 to 8,000 sq ft for boutiques and dining concepts.",
      "Upper floors feature Class A office space with floor-to-ceiling windows and bay views.",
      "600-space parking structure with validated parking for retail customers and monthly office parking.",
      "High foot traffic from neighboring hotels, convention center, and cruise ship terminal.",
      "Modern architecture with outdoor common areas, fountains, and landscaped gathering spaces.",
      "Located in Seaport Village district near Gaslamp Quarter, downtown, and major attractions.",
      "Strong demographics with affluent residential neighborhoods and tourist destination appeal."
    ],
    availableSpaces: [
      { id: 1, floor: "Ground", suite: "G-105", capacity: "Retail", size: 2500, rentalRate: 12500, spaceUse: "Retail" },
      { id: 2, floor: "Ground", suite: "G-120", capacity: "Restaurant", size: 4500, rentalRate: 22500, spaceUse: "Restaurant" },
      { id: 3, floor: "2nd", suite: "200", capacity: "20 - 40", size: 5000, rentalRate: 17500, spaceUse: "Office" },
      { id: 4, floor: "3rd", suite: "305", capacity: "30 - 60", size: 7500, rentalRate: 26250, spaceUse: "Office" },
    ],
  },
  {
    id: 17,
    title: "Countryside Manor",
    description: "Sprawling estate on 10 acres with main house, guest cottage, and equestrian facilities. Privacy and luxury in pastoral setting minutes from town.",
    price: 3500000,
    location: "Nashville, TN",
    imageUrl: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Estate Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80', badge: 'Aerial Estate' },
    ],
    coordinates: { lat: 36.1627, lng: -86.7816 },
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 7500,
    expectedROI: 9.5,
    rentalYield: 2.8,
    appreciationRate: 6.7,
    textHighlights: [
      "Magnificent 10-acre gated estate with long tree-lined driveway ensuring complete privacy.",
      "7,500 sq ft main residence with Southern charm featuring wraparound porches and columns.",
      "Separate 2-bedroom guest cottage with kitchenette perfect for visitors or in-laws.",
      "Equestrian facilities include 6-stall barn, tack room, riding arena, and fenced pastures.",
      "Main house features grand two-story foyer, formal dining, chef's kitchen, and library.",
      "Master wing with sitting room, dual closets, spa bath, and private terrace overlooking grounds.",
      "Outdoor amenities include saltwater pool, pool house, tennis court, and koi pond.",
      "Mature landscaping with magnolia trees, rose gardens, stone pathways, and irrigation system.",
      "Three-car garage plus separate equipment barn for tractors and farm implements.",
      "Just 15 minutes from downtown Nashville, Grand Ole Opry, and Nashville International Airport."
    ],
  },
  {
    id: 18,
    title: "Midtown Studio Collection",
    description: "Efficient studio apartments perfect for young professionals. Modern finishes, shared amenities including gym and rooftop terrace.",
    price: 380000,
    location: "Atlanta, GA",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Studio Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80', badge: 'Modern Living' },
    ],
    coordinates: { lat: 33.7490, lng: -84.3880 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    expectedROI: 11.8,
    rentalYield: 6.2,
    appreciationRate: 5.6,
    textHighlights: [
      "Efficient studio apartments in Midtown's vibrant Peachtree corridor perfect for urban living.",
      "Modern open-concept design with 9-foot ceilings and large windows maximizing natural light.",
      "Contemporary kitchens with quartz counters, stainless appliances, and breakfast bars.",
      "Built-in storage solutions including murphy beds, custom closets, and multi-functional furniture.",
      "Building amenities include 24-hour fitness center, yoga studio, and co-working spaces.",
      "Rooftop terrace with grilling stations, fire pit, and panoramic Atlanta skyline views.",
      "Controlled access building with package lockers, bike storage, and on-site management.",
      "Pet-friendly community with dog washing station and nearby Piedmont Park dog park.",
      "Walk to MARTA station, Ponce City Market, BeltLine trail, restaurants, and nightlife.",
      "Strong rental market with Georgia Tech, Emory, and downtown corporations nearby."
    ],
  },
  {
    id: 19,
    title: "Industrial Warehouse Complex",
    description: "Multi-tenant warehouse facility with loading docks, high ceilings, and strategic location near major highways and distribution centers.",
    price: 2900000,
    location: "Dallas, TX",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Warehouse Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80', badge: 'Loading Facilities' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=80' },
    ],
    coordinates: { lat: 32.7767, lng: -96.7970 },
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 200000,
    expectedROI: 12.5,
    rentalYield: 7.8,
    appreciationRate: 4.7,
    textHighlights: [
      "200,000 sq ft Class A industrial warehouse with multi-tenant configuration options.",
      "Clear heights from 28 to 32 feet with heavy-duty concrete floors rated for forklifts.",
      "24 dock-high loading doors plus 4 ground-level doors for flexible shipping/receiving.",
      "ESFR sprinkler system, LED lighting throughout, and 480V 3-phase power available.",
      "Divisible into units from 25,000 to 100,000 sq ft with separate metering and access.",
      "Office build-outs available ranging from 5-15% of warehouse space per tenant needs.",
      "Strategic location in DFW logistics corridor near I-35E, I-20, and DFW Airport.",
      "Ample trailer parking and truck maneuvering space on 15-acre fenced and gated site.",
      "24/7 security monitoring, LED exterior lighting, and property management on-site.",
      "Strong tenant demand from e-commerce, 3PL, manufacturing, and distribution companies."
    ],
    availableSpaces: [
      { id: 1, floor: "Ground", suite: "Bay A", capacity: "Warehouse", size: 50000, rentalRate: 25000, spaceUse: "Warehouse" },
      { id: 2, floor: "Ground", suite: "Bay B", capacity: "Warehouse", size: 75000, rentalRate: 37500, spaceUse: "Warehouse" },
      { id: 3, floor: "Ground", suite: "Bay C", capacity: "Warehouse", size: 35000, rentalRate: 17500, spaceUse: "Warehouse" },
    ],
  },
  {
    id: 20,
    title: "Hillside Retreat Plots",
    description: "Premium hillside plots with panoramic valley views. Terraced layouts perfect for custom homes, with all utilities and infrastructure ready.",
    price: 520000,
    location: "Portland, OR",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Land Overview' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', badge: 'Valley Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80' },
    ],
    coordinates: { lat: 45.5152, lng: -122.6784 },
    isFeatured: false,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 4800,
    expectedROI: 8.5,
    rentalYield: 0,
    appreciationRate: 8.5,
    textHighlights: [
      "45 premium hillside plots on 120 acres with protected views of Willamette Valley and Cascades.",
      "Plots range from 0.75 to 3 acres with strategic terracing to maximize views and buildability.",
      "All utilities to property line including water, sewer, electricity, natural gas, and fiber internet.",
      "Paved private roads with drainage systems, street lighting, and landscaped medians.",
      "Architectural guidelines encourage environmentally-sensitive design and preserve natural character.",
      "Geotechnical studies completed with engineered building pads and foundation recommendations.",
      "Community forest preserve with 30 acres of hiking trails, viewpoints, and wildlife habitat.",
      "15 minutes to downtown Portland, wineries, farmers markets, and outdoor recreation.",
      "Excellent Portland Public Schools district with bus service to community entrance.",
      "Low HOA fees cover road maintenance, landscaping, and community area upkeep."
    ],
  },
  {
    id: 21,
    title: "Bay View Penthouses",
    description: "Ultra-luxury penthouses with 360-degree views, private elevators, and chef's kitchens. Concierge service and exclusive rooftop access.",
    price: 4500000,
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Penthouse Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', badge: 'Bay Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 25.7617, lng: -80.1918 },
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    expectedROI: 10.5,
    rentalYield: 3.8,
    appreciationRate: 6.7,
    textHighlights: [
      "Exclusive penthouse collection atop 50-story Brickell tower with only 4 residences per floor.",
      "360-degree views of Biscayne Bay, Atlantic Ocean, downtown Miami, and Everglades.",
      "Private elevator foyer with biometric access opens directly into each penthouse.",
      "Italian marble floors, 12-foot ceilings, and floor-to-ceiling impact glass throughout.",
      "Chef's kitchens by Snaidero with Gaggenau appliances, wine cellar, and butler's pantry.",
      "Master suite spans entire wing with morning bar, dual baths, and private terrace.",
      "Smart home automation controls lighting, climate, shades, entertainment, and security.",
      "Private rooftop sky lounge with infinity pool, cabanas, and summer kitchen for penthouse residents.",
      "White-glove concierge services including housekeeping, car service, and personal shopping.",
      "Building amenities include spa, fitness center, theater, wine room, and marina access."
    ],
  },
  {
    id: 22,
    title: "Suburban Family Homes",
    description: "Spacious single-family homes with large backyards, modern interiors, and energy-efficient appliances. Top-rated school district.",
    price: 625000,
    location: "Charlotte, NC",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Home Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80', badge: 'Family Living' },
    ],
    coordinates: { lat: 35.2271, lng: -80.8431 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    expectedROI: 9.8,
    rentalYield: 4.2,
    appreciationRate: 5.6,
    textHighlights: [
      "New construction single-family homes in family-friendly master-planned community.",
      "Open-concept floor plans with 9-foot ceilings, hardwood floors, and abundant natural light.",
      "Gourmet kitchens with granite counters, large islands, pantries, and stainless appliances.",
      "Spacious master suites with tray ceilings, walk-in closets, and spa-inspired bathrooms.",
      "Large fenced backyards perfect for play sets, gardens, and outdoor entertainment.",
      "Energy Star certified with spray foam insulation, dual-pane windows, and programmable thermostats.",
      "Two-car garages with garage door openers, overhead storage, and interior access.",
      "Community amenities include pool, playground, walking trails, and clubhouse with events.",
      "Top-rated Charlotte-Mecklenburg school district with elementary school within community.",
      "Convenient to I-485, shopping centers, restaurants, parks, and 20 minutes to uptown Charlotte."
    ],
  },
  {
    id: 23,
    title: "Artisan Quarter Lofts",
    description: "Converted factory lofts in vibrant arts district with soaring ceilings, original timber beams, and polished concrete floors.",
    price: 780000,
    location: "Denver, CO",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Loft Showcase' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', badge: 'Arts District' },
    ],
    coordinates: { lat: 39.7392, lng: -104.9903 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    expectedROI: 10.8,
    rentalYield: 4.5,
    appreciationRate: 6.3,
    textHighlights: [
      "Historic 1910 factory building transformed into 45 unique loft residences in RiNo Art District.",
      "Soaring 16-foot ceilings with exposed original timber beams, ductwork, and brick walls.",
      "Oversized industrial windows and skylights create light-filled living spaces.",
      "Polished concrete floors, steel staircases, and modern finishes blend old and new.",
      "Open kitchens with concrete countertops, industrial pendants, and commercial-grade appliances.",
      "Flexible floor plans allow for home offices, art studios, or creative workspaces.",
      "Building features include rooftop deck, secure bike storage, and gallery spaces.",
      "Located in Denver's most vibrant arts district with 200+ murals, galleries, and street art.",
      "Walk to craft breweries, farm-to-table restaurants, coffee roasters, and live music venues.",
      "Easy access to downtown Denver, Union Station, and light rail for car-free urban lifestyle."
    ],
  },
  {
    id: 24,
    title: "Medical Plaza Professional",
    description: "Purpose-built medical office building with examination rooms, waiting areas, and parking. Ideal for healthcare professionals and clinics.",
    price: 3800000,
    location: "Houston, TX",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Medical Facility Tour' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', badge: 'Healthcare Ready' },
    ],
    coordinates: { lat: 29.7604, lng: -95.3698 },
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 45000,
    expectedROI: 13.2,
    rentalYield: 7.5,
    appreciationRate: 5.7,
    textHighlights: [
      "45,000 sq ft Class A medical office building strategically located near Texas Medical Center.",
      "HIPAA-compliant infrastructure with secure patient check-in and private consultation areas.",
      "Suites feature examination rooms, lab space, staff areas, and reception configured per specialty.",
      "Advanced HVAC with medical-grade filtration, emergency backup power, and redundant systems.",
      "Ample parking with 200+ spaces including covered, accessible, and patient drop-off zones.",
      "On-site pharmacy, laboratory, and imaging center create one-stop medical campus.",
      "Shared conference rooms, break areas, and administrative services available to all tenants.",
      "Monument signage, digital directory, and individual suite branding for practice visibility.",
      "Fiber internet backbone supports EMR systems, telemedicine, and high-bandwidth medical applications.",
      "Strong tenant mix includes primary care, specialists, urgent care, physical therapy, and dental."
    ],
    availableSpaces: [
      { id: 1, floor: "1st", suite: "105", capacity: "Medical", size: 2500, rentalRate: 8750, spaceUse: "Medical Office" },
      { id: 2, floor: "2nd", suite: "205", capacity: "Medical", size: 3500, rentalRate: 12250, spaceUse: "Medical Office" },
      { id: 3, floor: "2nd", suite: "220", capacity: "Medical", size: 4200, rentalRate: 14700, spaceUse: "Medical Office" },
    ],
  },
  {
    id: 25,
    title: "Sunset Beach Villas",
    description: "Oceanfront villas with direct beach access, outdoor showers, and expansive decks. Watch dolphins from your living room.",
    price: 2950000,
    location: "Outer Banks, NC",
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Beachfront Living' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80', badge: 'Sunset Views' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80' },
      { type: '360', url: 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' },
    ],
    coordinates: { lat: 35.5585, lng: -75.4665 },
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
    expectedROI: 9.2,
    rentalYield: 5.5,
    appreciationRate: 3.7,
    textHighlights: [
      "Oceanfront villas on pristine stretch of Outer Banks beach with 100 feet of private shoreline.",
      "Hurricane-rated construction with impact windows, reinforced concrete pilings, and advanced engineering.",
      "Reverse floor plan maximizes ocean views with main living areas on upper level.",
      "Walls of windows frame endless Atlantic views with dolphins and sea turtles frequently visible.",
      "Multiple levels of decking including widow's walk, covered porches, and ground-level patios.",
      "Private beach access via dune walkover with outdoor shower and storage for beach gear.",
      "Gourmet kitchens with two dishwashers, double ovens, and large islands for family gatherings.",
      "Master suite occupies entire oceanfront wing with private deck, soaking tub, and walk-in shower.",
      "Ground level features game room, wet bar, and bunk rooms perfect for extended family.",
      "Strong vacation rental income potential with 40+ week rental season and high nightly rates."
    ],
  },
  {
    id: 26,
    title: "University District Condos",
    description: "Student-friendly condominiums near campus with study areas, bike storage, and high-speed internet. Ideal investment property.",
    price: 295000,
    location: "Madison, WI",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', badge: 'Student Living' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', badge: 'Campus Proximity' },
    ],
    coordinates: { lat: 43.0731, lng: -89.4012 },
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 1,
    area: 900,
    expectedROI: 12.5,
    rentalYield: 7.8,
    appreciationRate: 4.7,
    textHighlights: [
      "Modern condominiums two blocks from University of Wisconsin-Madison campus.",
      "Efficient layouts designed for students with bedroom privacy and shared living spaces.",
      "In-unit washer/dryer, dishwasher, and modern appliances included in all units.",
      "High-speed fiber internet included in HOA fees supporting online learning and streaming.",
      "Building features study lounges, group project rooms, and quiet study areas.",
      "Secure bike storage with repair station and bus pass included for Madison Metro.",
      "24/7 security, controlled building access, and individual unit key fob entry.",
      "Furnished rental options available perfect for international students and short-term housing.",
      "Strong rental demand with 43,000+ UW students and limited on-campus housing.",
      "Walking distance to State Street, Camp Randall Stadium, Kohl Center, and Lake Mendota."
    ],
  },
  {
    id: 27,
    title: "Corporate Campus Development",
    description: "Multi-building corporate campus with cafeteria, fitness center, and green spaces. Flexible floor plans and cutting-edge infrastructure.",
    price: 12000000,
    location: "San Jose, CA",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 450000,
  },
  {
    id: 28,
    title: "Wine Country Estates",
    description: "Vineyard estate with producing grapevines, wine cellar, and Mediterranean architecture. Turn-key winery operation or private residence.",
    price: 5800000,
    location: "Napa Valley, CA",
    imageUrl: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    area: 6200,
  },
  {
    id: 29,
    title: "River Walk Apartments",
    description: "Riverside apartments with balconies overlooking walking trails. Pet-friendly with dog park, swimming pool, and community events.",
    price: 425000,
    location: "San Antonio, TX",
    imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: 30,
    title: "Business District Plots",
    description: "Commercial plots in developing business district with high growth potential. Approved for mixed-use development up to 15 stories.",
    price: 1800000,
    location: "Tampa, FL",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    isFeatured: false,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 12000,
  },
  {
    id: 31,
    title: "Luxury High-Rise Living",
    description: "Premium apartments in iconic tower with valet parking, wine storage, and private theater. Unmatched amenities and service.",
    price: 1950000,
    location: "Las Vegas, NV",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
  },
  {
    id: 32,
    title: "Mountain Lodge Resort",
    description: "Ski-in/ski-out lodge with rustic elegance, stone fireplaces, and timber construction. Commercial license for vacation rental operation.",
    price: 4200000,
    location: "Park City, UT",
    imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 7,
    bathrooms: 6,
    area: 5800,
  },
  {
    id: 33,
    title: "Downtown Parking Facility",
    description: "Multi-level parking structure in prime downtown location with 500+ spaces. Secure, well-lit, and automated payment systems.",
    price: 8500000,
    location: "Philadelphia, PA",
    imageUrl: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 180000,
  },
  {
    id: 34,
    title: "Cottage Grove Community",
    description: "Charming cottage-style homes in planned community with community gardens, playgrounds, and walking paths. Family-oriented neighborhood.",
    price: 485000,
    location: "Eugene, OR",
    imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
  },
  {
    id: 35,
    title: "Coastal Development Plots",
    description: "Oceanfront plots with approved plans for luxury residential development. Rare opportunity in protected coastal zone with stunning views.",
    price: 3200000,
    location: "Key West, FL",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    isFeatured: true,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 8500,
  },
  {
    id: 36,
    title: "Eco-Friendly Townhouses",
    description: "LEED-certified townhouses with solar panels, rainwater harvesting, and native landscaping. Sustainable living without compromising luxury.",
    price: 695000,
    location: "Boulder, CO",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
  },
  {
    id: 37,
    title: "Strip Mall Investment",
    description: "Fully leased strip mall with national tenants including grocery, pharmacy, and restaurants. Strong cash flow and long-term leases.",
    price: 5200000,
    location: "Orlando, FL",
    imageUrl: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 95000,
  },
  {
    id: 38,
    title: "Golf Course Villa Estate",
    description: "Magnificent villa overlooking championship golf course with private putting green, infinity pool, and outdoor entertainment area.",
    price: 3750000,
    location: "Scottsdale, AZ",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    area: 5200,
  },
  {
    id: 39,
    title: "Historic District Apartments",
    description: "Boutique apartment building in historic downtown with period details, modern updates, and retail space on ground floor.",
    price: 1650000,
    location: "Savannah, GA",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 8,
    bathrooms: 8,
    area: 6800,
  },
  {
    id: 40,
    title: "Airport Business Park",
    description: "Strategic location near international airport with warehouse and office mix. Ideal for logistics, distribution, and corporate offices.",
    price: 9800000,
    location: "Memphis, TN",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 350000,
  },
  {
    id: 41,
    title: "Forest Retreat Cabins",
    description: "Secluded cabin development in pristine forest setting. Off-grid capable with solar and well water. Nature lover's paradise.",
    price: 380000,
    location: "Asheville, NC",
    imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    isFeatured: false,
    propertyType: "Villa",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
  },
];

// Trust Partners
export const trustPartners: TrustPartner[] = [
  { id: 1, name: 'Forbes', isTextBased: true, isVisible: true, order: 0 },
  { id: 2, name: 'Bloomberg', isTextBased: true, isVisible: true, order: 1 },
  { id: 3, name: 'Wall Street Journal', isTextBased: true, isVisible: true, order: 2 },
  { id: 4, name: 'Real Estate Weekly', isTextBased: true, isVisible: true, order: 3 },
  { id: 5, name: 'Property Times', isTextBased: true, isVisible: true, order: 4 },
];

// Before/After Transformations
export const beforeAfterData: BeforeAfter[] = [
  {
    id: 1,
    title: 'Residential Plot Transformation',
    description: 'Complete development from bare land to beautiful residential complex',
    beforeImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    isVisible: true,
  },
  {
    id: 2,
    title: 'Commercial Space Renovation',
    description: 'Modern transformation of a dated office building into a contemporary workspace',
    beforeImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    isVisible: true,
  },
  {
    id: 3,
    title: 'Luxury Villa Development',
    description: 'From concept to completion - creating an architectural masterpiece',
    beforeImageUrl: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    isVisible: true,
  },
];

// Case Studies / Previous Work
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Manhattan Heights',
    location: 'New York, NY',
    state: 'NY',
    category: 'Residential',
    description: 'Transformed a 3-acre plot into a 32-story luxury residential tower with 220 units, achieving 95% pre-launch sales within 60 days.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    year: 2023,
    status: 'Completed',
    isVisible: true,
    displayOrder: 0,
  },
  {
    id: 2,
    title: 'Silicon Valley Tech Campus',
    location: 'San Jose, CA',
    state: 'CA',
    category: 'Commercial',
    description: 'State-of-the-art tech campus spanning 12 acres with LEED Platinum certification. Features 800,000 sq ft of Grade-A office space and innovation labs.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    year: 2024,
    status: 'Ongoing',
    isVisible: true,
    displayOrder: 1,
  },
  {
    id: 3,
    title: 'Miami Beach Villas',
    location: 'Miami, FL',
    state: 'FL',
    category: 'Villa',
    description: 'Boutique development of 18 luxury oceanfront villas with private pools and beach access, sold at 40% premium over initial projections.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    year: 2023,
    status: 'Completed',
    isVisible: true,
    displayOrder: 2,
  },
  {
    id: 4,
    title: 'Austin Business Park',
    location: 'Austin, TX',
    state: 'TX',
    category: 'Commercial',
    description: 'Developed 600,000 sq ft of Grade-A office space with sustainable design, fully leased to tech companies before completion.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    year: 2022,
    status: 'Completed',
    isVisible: true,
    displayOrder: 3,
  },
  {
    id: 5,
    title: 'Colorado Mountain Estates',
    location: 'Denver, CO',
    state: 'CO',
    category: 'Plot',
    description: 'Master-planned 80-acre mountain community with 150 residential plots, complete infrastructure, and 50% green cover. 90% sold within first year.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    year: 2024,
    status: 'Ongoing',
    isVisible: true,
    displayOrder: 4,
  },
  {
    id: 6,
    title: 'Chicago Urban Lofts',
    location: 'Chicago, IL',
    state: 'IL',
    category: 'Residential',
    description: 'Converted historic industrial building into 65 contemporary loft apartments with 16-foot ceilings, attracting young professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    year: 2023,
    status: 'Completed',
    isVisible: true,
    displayOrder: 5,
  },
  {
    id: 7,
    title: 'Seattle Waterfront Residences',
    location: 'Seattle, WA',
    state: 'WA',
    category: 'Residential',
    description: 'Luxury waterfront development with 180 units featuring panoramic Puget Sound views, rooftop gardens, and smart home technology.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    year: 2024,
    status: 'Ongoing',
    isVisible: true,
    displayOrder: 6,
  },
  {
    id: 8,
    title: 'Boston Harbor Plaza',
    location: 'Boston, MA',
    state: 'MA',
    category: 'Commercial',
    description: 'Mixed-use development combining retail, office, and residential spaces in historic harbor district. 450,000 sq ft of premium space.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    year: 2023,
    status: 'Completed',
    isVisible: true,
    displayOrder: 7,
  },
  {
    id: 9,
    title: 'Phoenix Desert Villas',
    location: 'Phoenix, AZ',
    state: 'AZ',
    category: 'Villa',
    description: 'Sustainable desert villas with solar panels, water harvesting, and native landscaping. 25 luxury units with mountain views.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    year: 2024,
    status: 'Ongoing',
    isVisible: true,
    displayOrder: 8,
  },
  {
    id: 10,
    title: 'Portland Green Commons',
    location: 'Portland, OR',
    state: 'OR',
    category: 'Residential',
    description: 'Eco-friendly residential complex with 120 units, green roofs, community gardens, and net-zero energy design.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    year: 2023,
    status: 'Completed',
    isVisible: true,
    displayOrder: 9,
  },
];

// Popular Cities
export const popularCities: PopularCity[] = [
  {
    id: 1,
    name: 'New York City',
    state: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    propertyCount: 1247,
    averagePrice: 1850000,
    description: 'The financial capital with iconic skyline and endless opportunities',
    isVisible: true,
    order: 1,
  },
  {
    id: 2,
    name: 'Los Angeles',
    state: 'California',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg',
    propertyCount: 892,
    averagePrice: 1650000,
    description: 'Entertainment hub with luxury properties and coastal living',
    isVisible: true,
    order: 2,
  },
  {
    id: 3,
    name: 'Chicago',
    state: 'Illinois',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    propertyCount: 634,
    averagePrice: 875000,
    description: 'Architectural marvel with diverse neighborhoods and culture',
    isVisible: true,
    order: 3,
  },
  {
    id: 4,
    name: 'Washington D.C.',
    state: 'District of Columbia',
    imageUrl: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800&q=80',
    propertyCount: 421,
    averagePrice: 1250000,
    description: 'Historic capital with prestigious properties and monuments',
    isVisible: true,
    order: 4,
  },
  {
    id: 5,
    name: 'Miami',
    state: 'Florida',
    imageUrl: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80',
    propertyCount: 567,
    averagePrice: 1450000,
    description: 'Tropical paradise with waterfront luxury and vibrant lifestyle',
    isVisible: true,
    order: 5,
  },
  {
    id: 6,
    name: 'San Francisco',
    state: 'California',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    propertyCount: 389,
    averagePrice: 2100000,
    description: 'Tech hub with stunning bay views and Victorian charm',
    isVisible: true,
    order: 6,
  },
  {
    id: 7,
    name: 'Boston',
    state: 'Massachusetts',
    imageUrl: 'https://cdn.sanity.io/images/nxpteyfv/goguides/1d183bd01f79e6048dce8852588a0bc951f89b75-1600x1066.jpg',
    propertyCount: 312,
    averagePrice: 1350000,
    description: 'Historic city with world-class education and innovation',
    isVisible: true,
    order: 7,
  },
  {
    id: 8,
    name: 'Seattle',
    state: 'Washington',
    imageUrl: 'https://images.trvl-media.com/place/178307/74b030b2-80ee-45bf-9771-ebe736f0c7b1.jpg',
    propertyCount: 445,
    averagePrice: 1550000,
    description: 'Emerald city with tech innovation and natural beauty',
    isVisible: true,
    order: 8,
  },
];

// Helper functions to get data
export function getHeroContent(): HeroContent {
  return heroContent;
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.isFeatured);
}

export function getAllProperties(): Property[] {
  return properties;
}

export function getPropertyById(id: number): Property | undefined {
  return properties.find(p => p.id === id);
}

export function getBeforeAfterData(): BeforeAfter[] {
  return beforeAfterData.filter(item => item.isVisible);
}

export function getVisibleSections(): LandingSection[] {
  return landingSections.filter(s => s.isVisible).sort((a, b) => a.order - b.order);
}

export function getTrustPartners(): TrustPartner[] {
  return trustPartners.filter(p => p.isVisible).sort((a, b) => a.order - b.order);
}

export function getCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getROIConfigs(): ROIConfig[] {
  return roiConfigs;
}

export function getCTASection(): CTASection {
  return ctaSection;
}

export function getMarqueeSettings(): MarqueeSettings {
  return marqueeSettings;
}

export function getPopularCities(): PopularCity[] {
  return popularCities.filter(city => city.isVisible).sort((a, b) => a.order - b.order);
}
