"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Home,
  Bed,
  Bath,
  Maximize,
  Phone,
  Download,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Trees,
  Shield,
  Car,
  Wifi,
  Dumbbell,
  UtensilsCrossed,
} from "lucide-react";
import { getCaseStudies } from "@/lib/data";
import ROIEstimator from "@/components/landing/ROIEstimator";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  state?: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
  status: string;
}

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setIsLoading(true);
        const allCaseStudies = getCaseStudies();
        const foundProperty = allCaseStudies.find(
          (study) => study.id === Number(params.id),
        );
        setProperty(foundProperty || null);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FDFBF9] flex items-center justify-center">
        <div className="text-center">
          <div className="w-px h-16 bg-stone-200 overflow-hidden relative mx-auto">
            <div className="absolute inset-0 bg-stone-900 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
          </div>
          <span className="mt-6 text-xs font-bold uppercase tracking-widest text-stone-500 block">
            Loading Property...
          </span>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#FDFBF9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-stone-900 mb-4">
            Property Not Found
          </h1>
          <button
            onClick={() => router.push("/projects")}
            className="text-sm text-stone-600 hover:text-stone-900 underline"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  // Static highlights - can be customized per property type
  const highlights = [
    {
      icon: Building2,
      label: "Premium Construction",
      description: "High-quality materials and craftsmanship",
    },
    {
      icon: Shield,
      label: "Secure Investment",
      description: "Verified legal documentation",
    },
    {
      icon: MapPin,
      label: "Prime Location",
      description: "Strategic positioning with excellent connectivity",
    },
    {
      icon: Trees,
      label: "Green Spaces",
      description: "Landscaped gardens and open areas",
    },
    {
      icon: Car,
      label: "Parking Available",
      description: "Dedicated parking spaces",
    },
    {
      icon: Wifi,
      label: "Smart Features",
      description: "Modern amenities and technology",
    },
  ];

  // Static amenities
  const amenities = [
    "24/7 Security",
    "Power Backup",
    "Water Supply",
    "Fitness Center",
    "Swimming Pool",
    "Children's Play Area",
    "Clubhouse",
    "Landscaped Gardens",
    "Jogging Track",
    "Community Hall",
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF9]">
      {/* Back Button */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] overflow-hidden"
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-4 py-2 bg-white/95 backdrop-blur text-xs font-bold uppercase tracking-widest text-stone-900">
                {property.category}
              </span>
              <span className="px-4 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest">
                {property.status}
              </span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-stone-600 mb-6">
              <MapPin className="w-5 h-5 text-stone-900" />
              <span className="text-lg">{property.location}</span>
            </div>

            <div className="flex items-center gap-2 text-stone-600 mb-8">
              <Calendar className="w-5 h-5 text-stone-900" />
              <span>Completed in {property.year}</span>
            </div>

            <p className="text-base text-stone-700 leading-relaxed mb-8">
              {property.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors">
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-stone-300 text-stone-900 text-sm font-bold uppercase tracking-widest hover:border-stone-900 transition-colors">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              Property Highlights
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover the exceptional features that make this property stand
              out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <div className="flex-shrink-0">
                  <highlight.icon className="w-8 h-8 text-stone-900" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-stone-900 mb-2">
                    {highlight.label}
                  </h3>
                  <p className="text-sm text-stone-600">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Property Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                About This Development
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  This exceptional {property.category.toLowerCase()} development
                  represents the pinnacle of modern architecture and thoughtful
                  design. Located in the heart of {property.location}, it offers
                  residents an unparalleled lifestyle experience.
                </p>
                <p>
                  Every aspect of this project has been meticulously planned to
                  ensure the highest standards of quality, comfort, and
                  sustainability. From the selection of premium materials to the
                  integration of smart home technology, no detail has been
                  overlooked.
                </p>
                <p>
                  The development is strategically positioned to provide
                  excellent connectivity to major business districts,
                  educational institutions, healthcare facilities, and
                  entertainment hubs, making it an ideal choice for discerning
                  investors and homeowners alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-stone-900 mb-6">
                Amenities & Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-stone-900 shrink-0" />
                    <span className="text-sm text-stone-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Estimator Section */}
      <ROIEstimator
        initialPropertyType={property.category}
        lockPropertyType={true}
      />

      {/* Investment Highlights */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Why Invest Here?
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              This property offers exceptional value with strong appreciation
              potential, premium location advantages, and world-class amenities.
              A perfect blend of luxury living and smart investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-stone-100 transition-colors">
                Schedule a Visit
              </button>
              <button className="px-8 py-4 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors">
                Request Callback
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16"></div>
    </main>
  );
}
