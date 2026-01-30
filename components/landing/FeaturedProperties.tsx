"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  TrendingUp,
  Percent,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import type { Property } from "@/lib/data";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({
  properties,
}: FeaturedPropertiesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(properties.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const currentProperties = properties.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage,
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-24 bg-[#FDFBF9]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          {/* Left: Title */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Live Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">
              Featured Properties
            </h2>
          </div>

          {/* Right: View All Button + Navigation Controls */}
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-stone-900 py-3 px-6 text-white! hover:bg-stone-700 transition-colors"
            >
              View All Properties 
            </Link>

            {/* Navigation Controls */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-stone-300 text-stone-600 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all shadow-sm active:scale-95"
                aria-label="Previous properties"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-stone-300 text-stone-600 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all shadow-sm active:scale-95"
                aria-label="Next properties"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {currentProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/property/${property.id}`}
                  className="block h-full"
                >
                  <div className="group relative h-full bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100">
                      {/* ROI Badge (Tech Style) */}
                      <div className="absolute top-3 left-3 z-10">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-full text-white border border-white/10 shadow-lg">
                          <TrendingUp className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span className="text-xs font-bold">12.5% Yield</span>
                        </div>
                      </div>

                      <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Type Badge */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                          {property.propertyType}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-2 pt-4 pb-2 flex flex-col gap-3">
                      {/* Title & Price */}
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-normal text-stone-900 leading-tight group-hover:text-[#F59E0B] transition-colors ">
                            {property.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-stone-400" />
                          <span className="truncate">{property.location}</span>
                        </div>
                      </div>

                      {/* Investment Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="bg-stone-50 rounded-xl p-2.5 flex flex-col justify-center">
                          <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Percent className="w-3 h-3" /> Target ROI
                          </span>
                          <span className="text-sm font-bold text-stone-900 mt-0.5">
                            15-18%
                          </span>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-2.5 flex flex-col justify-center">
                          <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Term
                          </span>
                          <span className="text-sm font-bold text-stone-900 mt-0.5">
                            5 Years
                          </span>
                        </div>
                      </div>

                      {/* Footer Action */}
                      <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-1">
                        <div>
                          <p className="text-[10px] text-stone-500 font-bold uppercase">
                            Min. Investment
                          </p>
                          <p className="text-base font-bold text-stone-900">
                            {formatPrice(property.price)}
                          </p>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-colors duration-300">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- View All Link --- */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
          >
            View All Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
