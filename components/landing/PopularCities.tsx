"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, TrendingUp, Building2 } from "lucide-react";
import Link from "next/link";
import { getPopularCities } from "@/lib/data";

export default function PopularCities() {
  const [activeTab, setActiveTab] = useState<"us" | "international">("us");
  const cities = getPopularCities();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      notation: "compact",
    }).format(price);
  };

  const formatCount = (count: number) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(count);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-[90vw]">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            Explore Popular Cities
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-stone-200">
            <button
              onClick={() => setActiveTab("us")}
              className={`pb-3 text-base font-medium transition-colors relative ${
                activeTab === "us"
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              US Cities
              {activeTab === "us" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`pb-3 text-base font-medium transition-colors relative ${
                activeTab === "international"
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              International Cities
              {activeTab === "international" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Cities Grid */}
        {activeTab === "us" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link
                key={city.id}
                href={`/projects?state=${city.state}`}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 hover:shadow-2xl hover:shadow-stone-300/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* City Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {city.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{city.state}</span>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 bg-white">
                    <p className="text-sm text-stone-600 mb-4 line-clamp-2">
                      {city.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                      <div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>Properties</span>
                        </div>
                        <p className="text-lg font-bold text-stone-900">
                          {formatCount(city.propertyCount)}+
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Avg Price</span>
                        </div>
                        <p className="text-lg font-bold text-stone-900">
                          {formatPrice(city.averagePrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}

        {/* International Cities - Coming Soon */}
        {activeTab === "international" && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-2xl font-serif text-stone-900 mb-2">
              Coming Soon
            </h3>
            <p className="text-stone-600 text-center max-w-md">
              We're expanding our reach globally. International cities will be
              available soon.
            </p>
          </div>
        )}

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-3 transition-all group"
          >
            <span>View All Cities</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
