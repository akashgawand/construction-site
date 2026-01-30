"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ChevronDown,
  Heart,
  Building2,
  Calendar,
  Users,
  Phone,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCaseStudies } from "@/lib/data";
import USMap from "@/components/USMap";

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

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const PROPERTY_TYPES = ["Residential", "Commercial", "Plot", "Villa"];

// State abbreviation to full name mapping
const STATE_NAMES: Record<string, string> = {
  NY: "New York",
  CA: "California",
  FL: "Florida",
  TX: "Texas",
  CO: "Colorado",
  IL: "Illinois",
  WA: "Washington",
  MA: "Massachusetts",
  AZ: "Arizona",
};

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stateCounts, setStateCounts] = useState<Record<string, number>>({});
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>("All");
  const [selectedState, setSelectedState] = useState<string>("All");
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({});

  const currentPage = Number(searchParams.get("page")) || 1;
  const LIMIT = 10;

  useEffect(() => {
    fetchProjects(currentPage);
    fetchStateCounts();
  }, [currentPage, selectedPropertyType, selectedState]);

  const fetchProjects = async (page: number) => {
    try {
      setIsLoading(true);

      let allStudies = getCaseStudies();

      if (selectedPropertyType && selectedPropertyType !== "All") {
        allStudies = allStudies.filter(
          (s) => s.category === selectedPropertyType,
        );
      }

      if (selectedState && selectedState !== "All") {
        allStudies = allStudies.filter((s) => s.state === selectedState);
      }

      const total = allStudies.length;
      const totalPages = Math.ceil(total / LIMIT);
      const startIndex = (page - 1) * LIMIT;
      const endIndex = startIndex + LIMIT;
      const paginatedStudies = allStudies.slice(startIndex, endIndex);

      setCaseStudies(paginatedStudies);
      setPagination({
        total,
        page,
        limit: LIMIT,
        totalPages,
      });
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStateCounts = async () => {
    try {
      let allStudies = getCaseStudies();

      if (selectedPropertyType && selectedPropertyType !== "All") {
        allStudies = allStudies.filter(
          (s) => s.category === selectedPropertyType,
        );
      }

      const counts: Record<string, number> = {};
      allStudies.forEach((study) => {
        if (study.state) {
          counts[study.state] = (counts[study.state] || 0) + 1;
        }
      });

      setStateCounts(counts);
    } catch (error) {
      console.error("Failed to fetch state counts:", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    router.push(`/projects?page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Image slider handlers
  const handlePrevImage = (e: React.MouseEvent, propertyId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndices((prev) => ({
      ...prev,
      [propertyId]: Math.max((prev[propertyId] || 0) - 1, 0),
    }));
  };

  const handleNextImage = (e: React.MouseEvent, propertyId: number) => {
    e.preventDefault();
    e.stopPropagation();
    const maxIndex = 4; // Assuming 5 images per property
    setImageIndices((prev) => ({
      ...prev,
      [propertyId]: Math.min((prev[propertyId] || 0) + 1, maxIndex),
    }));
  };

  // Helper to format price
  const formatPrice = (id: number) => {
    const basePrice = 500000 + id * 150000;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(basePrice);
  };

  // Helper to format area
  const formatArea = (id: number) => {
    const baseArea = 2500 + id * 1000;
    return new Intl.NumberFormat("en-US").format(baseArea);
  };

  return (
    <main className="h-screen flex flex-col bg-white overflow-hidden">
      {/* TOP BAR */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Filters */}
          <div className="flex items-center gap-3">
            {/* For Lease Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 text-gray-900 text-sm px-4 py-2 pr-8 rounded focus:outline-none focus:border-gray-900 cursor-pointer">
                <option>For Lease</option>
                <option>For Sale</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>

            {/* Property Type */}
            <div className="relative">
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className="appearance-none bg-white border border-gray-300 text-gray-900 text-sm px-4 py-2 pr-8 rounded focus:outline-none focus:border-gray-900 cursor-pointer"
              >
                <option value="All">Space Uses</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>

            {/* State Dropdown */}
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="appearance-none bg-white border border-gray-300 text-gray-900 text-sm px-4 py-2 pr-8 rounded focus:outline-none focus:border-gray-900 cursor-pointer"
              >
                <option value="All">All States</option>
                {Object.keys(stateCounts)
                  .sort((a, b) =>
                    (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b),
                  )
                  .map((state) => (
                    <option key={state} value={state}>
                      {STATE_NAMES[state] || state}
                    </option>
                  ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>

            {/* All Filters Button */}
            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-900 hover:border-gray-900 transition-colors">
              All Filters
            </button>

            {/* Clear Filters Button */}
            {(selectedPropertyType !== "All" || selectedState !== "All") && (
              <button
                onClick={() => {
                  setSelectedPropertyType("All");
                  setSelectedState("All");
                }}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
              Save Search
            </button>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 text-gray-900 text-sm px-4 py-2 pr-8 rounded focus:outline-none cursor-pointer">
                <option>Sort</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: MAP + LISTINGS */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT: MAP */}
        <div className="w-1/2 relative bg-gray-100">
          <div className="absolute inset-0">
            <USMap
              stateCounts={stateCounts}
              selectedState={selectedState !== "All" ? selectedState : null}
              onStateClick={(state) => setSelectedState(state)}
            />
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 left-4 bg-white rounded shadow-lg p-2 flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-gray-900 font-medium">Current Map Area</span>
          </div>

          {/* Results Count */}
          <div className="absolute top-4 right-4 bg-white rounded shadow-lg px-3 py-2 text-sm text-gray-900">
            {pagination?.total || 0}+ Results
          </div>
        </div>

        {/* RIGHT: PROPERTY LISTINGS */}
        <div className="w-1/2 overflow-y-auto bg-white">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/property/${study.id}`}
                  className="block"
                >
                  <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500 uppercase tracking-wide">
                              {study.category} Properties for Lease
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {formatArea(study.id)} SF Office Available
                          </h3>
                          <div className="flex items-center text-gray-900">
                            <span className="font-medium text-lg">
                              {study.title}
                            </span>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-white rounded-full transition-colors">
                          <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>

                      {/* Image and Details Grid */}
                      <div className="flex gap-6">
                        {/* Image with Slider */}
                        <div className="relative w-80 h-64 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 group/image">
                          <img
                            src={study.imageUrl}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                         

                          {/* Image Counter */}
                          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            {(imageIndices[study.id] || 0) + 1} / 5
                          </div>

                          {/* Previous Button */}
                          <button
                            onClick={(e) => handlePrevImage(e, study.id)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity shadow-lg"
                            disabled={(imageIndices[study.id] || 0) === 0}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-900 rotate-90" />
                          </button>

                          {/* Next Button */}
                          <button
                            onClick={(e) => handleNextImage(e, study.id)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity shadow-lg"
                            disabled={(imageIndices[study.id] || 0) === 4}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-900 -rotate-90" />
                          </button>
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          {/* Property Info */}
                          <div>
                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1.5">
                                <Building2 className="w-4 h-4" />
                                <span>
                                  {study.status === "Completed"
                                    ? "Built"
                                    : "Under Construction"}{" "}
                                  in {study.year}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{formatArea(study.id)} SF Total</span>
                              </div>
                            </div>

                            <p className="text-base text-gray-700 line-clamp-3 mb-4 leading-relaxed">
                              {study.description}
                            </p>

                            {/* Location */}
                            <div className="flex items-center gap-1.5 text-base text-gray-600 mb-4">
                              <MapPin className="w-5 h-5" />
                              <span>{study.location}</span>
                            </div>

                            {/* Additional Info */}
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>6 Spaces Available Now</span>
                              <span>•</span>
                              <span>Art-filled office tower</span>
                            </div>
                          </div>

                          {/* Agent Info */}
                          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <Users className="w-5 h-5 text-gray-600" />
                              </div>
                              <div className="text-sm">
                                <div className="font-semibold text-gray-900">
                                  Agent Name
                                </div>
                                <div className="text-gray-500">
                                  Licensed Broker
                                </div>
                              </div>
                            </div>
                            <button className="ml-auto flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors">
                              <Phone className="w-4 h-4" />
                              Contact Agent
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          )}

          {/* Load More */}
          {pagination && pagination.page < pagination.totalPages && (
            <div className="p-6 text-center border-t border-gray-200">
              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
              >
                Load More Properties
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
