// Static data extracted from backend seed file
// This file contains all the data needed for the frontend without backend API calls

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  isFeatured: boolean;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
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

// Hero Content
export const heroContent: HeroContent = {
  headline: 'Find Your Dream Property',
  subheadline: 'Discover premium real estate opportunities with exceptional ROI potential',
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
  { id: 2, sectionKey: 'about', title: 'About Section', isVisible: true, order: 1 },
  { id: 3, sectionKey: 'previousWork', title: 'Previous Work', isVisible: true, order: 2 },
  { id: 4, sectionKey: 'featured', title: 'Featured Properties', isVisible: true, order: 3 },
  { id: 5, sectionKey: 'beforeAfter', title: 'Transformations', isVisible: true, order: 4 },
  { id: 6, sectionKey: 'roiEstimator', title: 'ROI Estimator', isVisible: true, order: 5 },
  { id: 7, sectionKey: 'trust', title: 'Trust Partners', isVisible: true, order: 6 },
  { id: 8, sectionKey: 'cta', title: 'Call to Action', isVisible: true, order: 7 },
];

// Properties
export const properties: Property[] = [
  {
    id: 1,
    title: "Skyline Towers",
    description: "A landmark 45-story mixed-use development featuring premium residences, Grade-A office spaces, and luxury retail. Setting new standards for urban living with world-class amenities and sustainable design.",
    price: 2500000,
    location: "New York City, NY",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
  },
  {
    id: 2,
    title: "Heritage Commercial Hub",
    description: "Adaptive reuse of a historic 1920s warehouse transformed into a vibrant commercial complex. Preserving architectural heritage while delivering premium retail and co-working spaces.",
    price: 3200000,
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 50000,
  },
  {
    id: 3,
    title: "Emerald Villas",
    description: "Boutique collection of luxury villas nestled in lush greenery with private pools, smart home technology, and panoramic views. A refined blend of nature and modern architecture.",
    price: 1800000,
    location: "Scottsdale, AZ",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
  },
  {
    id: 4,
    title: "Tech Park Phase III",
    description: "State-of-the-art technology park spanning multiple acres with LEED Platinum certification. Features premium office space, wellness facilities, and landscaped campuses.",
    price: 5000000,
    location: "Austin, TX",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 600000,
  },
  {
    id: 5,
    title: "Riverside Estates",
    description: "Master-planned gated community with premium residential plots along the riverfront. Clubhouse, sports facilities, and generous green cover for sustainable living.",
    price: 450000,
    location: "Boise, ID",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    isFeatured: true,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
  },
  {
    id: 6,
    title: "Urban Lofts",
    description: "Contemporary industrial-style loft apartments with high ceilings, exposed brick, and floor-to-ceiling windows. Designed for creative professionals in the urban core.",
    price: 950000,
    location: "Brooklyn, NY",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
  },
  {
    id: 7,
    title: "Coastal Paradise Resort",
    description: "Luxury beachfront resort development with private villas, infinity pools, spa, and fine dining. Exclusive access to pristine beaches and water recreation.",
    price: 2200000,
    location: "Malibu, CA",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
  },
  {
    id: 8,
    title: "Smart City Apartments",
    description: "IoT-enabled smart apartments with automated climate control, advanced security, and energy optimization. Rooftop gardens and EV charging included.",
    price: 850000,
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
  },
  {
    id: 9,
    title: "Mountain View Chalets",
    description: "Alpine-style luxury chalets with breathtaking mountain vistas, private hot tubs, and stone fireplaces. Perfect retreat for nature lovers seeking tranquility.",
    price: 1250000,
    location: "Aspen, CO",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    isFeatured: false,
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
  },
  {
    id: 10,
    title: "Downtown Executive Suites",
    description: "Fully furnished executive suites in the financial district with concierge services, business center, and skyline views. Ideal for corporate professionals.",
    price: 1150000,
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
  },
  {
    id: 11,
    title: "Lakeside Meadows",
    description: "Expansive residential plots overlooking pristine lake waters. Underground utilities, paved roads, and 24/7 security in a serene natural setting.",
    price: 280000,
    location: "Minneapolis, MN",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    isFeatured: false,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 3600,
  },
  {
    id: 12,
    title: "Innovation Business Center",
    description: "Modern business complex with flexible office layouts, conference facilities, and fiber optic connectivity. Positioned in emerging tech corridor.",
    price: 4200000,
    location: "Raleigh, NC",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 85000,
  },
  {
    id: 13,
    title: "Garden District Townhomes",
    description: "Elegant three-story townhomes with private courtyards, hardwood floors, and designer kitchens. Walk to restaurants, parks, and entertainment.",
    price: 720000,
    location: "New Orleans, LA",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
  },
  {
    id: 14,
    title: "Desert Oasis Estates",
    description: "Mediterranean-inspired villas with desert landscaping, outdoor kitchens, and resort-style pools. Gated community with golf course access.",
    price: 1680000,
    location: "Phoenix, AZ",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
  },
  {
    id: 15,
    title: "Historic Brick Row",
    description: "Restored Victorian-era row houses with original architectural details, modern amenities, and charming tree-lined streets in heritage district.",
    price: 890000,
    location: "Boston, MA",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
  },
  {
    id: 16,
    title: "Waterfront Shopping Plaza",
    description: "Prime retail development on bustling waterfront with high foot traffic. Anchor tenants secured, excellent visibility and parking facilities.",
    price: 6800000,
    location: "San Diego, CA",
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    isFeatured: true,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 120000,
  },
  {
    id: 17,
    title: "Countryside Manor",
    description: "Sprawling estate on 10 acres with main house, guest cottage, and equestrian facilities. Privacy and luxury in pastoral setting minutes from town.",
    price: 3500000,
    location: "Nashville, TN",
    imageUrl: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 7500,
  },
  {
    id: 18,
    title: "Midtown Studio Collection",
    description: "Efficient studio apartments perfect for young professionals. Modern finishes, shared amenities including gym and rooftop terrace.",
    price: 380000,
    location: "Atlanta, GA",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
  },
  {
    id: 19,
    title: "Industrial Warehouse Complex",
    description: "Multi-tenant warehouse facility with loading docks, high ceilings, and strategic location near major highways and distribution centers.",
    price: 2900000,
    location: "Dallas, TX",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 200000,
  },
  {
    id: 20,
    title: "Hillside Retreat Plots",
    description: "Premium hillside plots with panoramic valley views. Terraced layouts perfect for custom homes, with all utilities and infrastructure ready.",
    price: 520000,
    location: "Portland, OR",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    isFeatured: false,
    propertyType: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 4800,
  },
  {
    id: 21,
    title: "Bay View Penthouses",
    description: "Ultra-luxury penthouses with 360-degree views, private elevators, and chef's kitchens. Concierge service and exclusive rooftop access.",
    price: 4500000,
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    isFeatured: true,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
  },
  {
    id: 22,
    title: "Suburban Family Homes",
    description: "Spacious single-family homes with large backyards, modern interiors, and energy-efficient appliances. Top-rated school district.",
    price: 625000,
    location: "Charlotte, NC",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
  },
  {
    id: 23,
    title: "Artisan Quarter Lofts",
    description: "Converted factory lofts in vibrant arts district with soaring ceilings, original timber beams, and polished concrete floors.",
    price: 780000,
    location: "Denver, CO",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
  },
  {
    id: 24,
    title: "Medical Plaza Professional",
    description: "Purpose-built medical office building with examination rooms, waiting areas, and parking. Ideal for healthcare professionals and clinics.",
    price: 3800000,
    location: "Houston, TX",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    isFeatured: false,
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: 45000,
  },
  {
    id: 25,
    title: "Sunset Beach Villas",
    description: "Oceanfront villas with direct beach access, outdoor showers, and expansive decks. Watch dolphins from your living room.",
    price: 2950000,
    location: "Outer Banks, NC",
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    isFeatured: true,
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
  },
  {
    id: 26,
    title: "University District Condos",
    description: "Student-friendly condominiums near campus with study areas, bike storage, and high-speed internet. Ideal investment property.",
    price: 295000,
    location: "Madison, WI",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    isFeatured: false,
    propertyType: "Residential",
    bedrooms: 2,
    bathrooms: 1,
    area: 900,
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
