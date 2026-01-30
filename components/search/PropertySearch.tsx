"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ChevronDown, Check, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getPopularCities } from "@/lib/data";

const propertyTypes = [
  "All Types",
  "Residential",
  "Commercial",
  "Villa",
  "Plot",
  "Shop",
  "Building",
];

const PropertySearch: React.FC = () => {
  const router = useRouter();
  const cities = getPopularCities();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // State for custom dropdown visibility
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  // Refs to detect clicks outside the dropdowns
  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTypeDropdownOpen(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    // Add search query if provided
    if (searchQuery) params.set("search", searchQuery);

    // Add property type if not "All Types"
    if (selectedType !== "All Types") params.set("type", selectedType);

    // Add location/state if not "All Locations"
    if (selectedLocation !== "All Locations") {
      // Find the selected city to get its state abbreviation
      const selectedCity = cities.find(
        (city) => city.name === selectedLocation,
      );
      if (selectedCity) {
        // Map state names to abbreviations for the projects page
        const stateAbbreviations: Record<string, string> = {
          "New York": "NY",
          California: "CA",
          Illinois: "IL",
          "District of Columbia": "DC",
          Florida: "FL",
          Massachusetts: "MA",
          Washington: "WA",
        };
        const stateAbbr =
          stateAbbreviations[selectedCity.state] || selectedCity.state;
        params.set("state", stateAbbr);
      }
    }

    router.push(`/projects?${params.toString()}`);
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setIsTypeDropdownOpen(false);
  };

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
  };

  // Create location options from cities
  const locationOptions = ["All Locations", ...cities.map((city) => city.name)];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      onSubmit={handleSearch}
      className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2 relative z-50"
    >
      {/* Location Dropdown Filter */}
      <div
        className="relative flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 min-w-[200px]"
        ref={locationDropdownRef}
      >
        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <button
          type="button"
          onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
          className="flex-1 flex items-center justify-between outline-none focus:outline-none text-gray-900 text-sm md:text-base cursor-pointer bg-transparent"
        >
          <span
            className={
              selectedLocation === "All Locations"
                ? "text-gray-400"
                : "font-medium"
            }
          >
            {selectedLocation}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isLocationDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Location Dropdown Menu */}
        <AnimatePresence>
          {isLocationDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1 z-50 max-h-64 overflow-y-auto"
            >
              {locationOptions.map((location) => (
                <div
                  key={location}
                  onClick={() => handleSelectLocation(location)}
                  className={`
                    px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between
                    ${selectedLocation === location ? "bg-gray-50 text-black font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-black"}
                  `}
                >
                  {location}
                  {selectedLocation === location && (
                    <Check className="w-4 h-4 text-black" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Property Type Dropdown */}
      <div
        className="relative flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 min-w-[200px]"
        ref={typeDropdownRef}
      >
        <Building2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <button
          type="button"
          onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
          className="flex-1 flex items-center justify-between outline-none focus:outline-none text-gray-900 text-sm md:text-base cursor-pointer bg-transparent"
        >
          <span
            className={
              selectedType === "All Types" ? "text-gray-400" : "font-medium"
            }
          >
            {selectedType}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isTypeDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Type Dropdown Menu */}
        <AnimatePresence>
          {isTypeDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1 z-50"
            >
              {propertyTypes.map((type) => (
                <div
                  key={type}
                  onClick={() => handleSelectType(type)}
                  className={`
                    px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between
                    ${selectedType === type ? "bg-gray-50 text-black font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-black"}
                  `}
                >
                  {type}
                  {selectedType === type && (
                    <Check className="w-4 h-4 text-black" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Input */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm md:text-base"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-8 py-3 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors rounded md:rounded-none md:rounded-r-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <Search className="w-5 h-5" />
        <span className="hidden md:inline">Search</span>
      </button>
    </motion.form>
  );
};

export default PropertySearch;
