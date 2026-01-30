"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import PropertySearch from "../search/PropertySearch";

// --- Icons ---
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl: string;
}

interface HeroSectionProps {
  content?: HeroContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const defaultContent = {
    headline: "Discover Your Next Investment Opportunity",
    subheadline:
      "Explore premium properties with exceptional ROI potential. From luxury residences to commercial spaces, find the perfect investment to grow your portfolio.",
    ctaText: "Explore Properties",
    ctaLink: "#featured",
    bgImageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    ...content,
  };

  const handleCTAClick = () => {
    const element = document.querySelector(defaultContent.ctaLink);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* --- 1. Background Image with Zoom Effect --- */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${defaultContent.bgImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark Overlay for Text Readability (Gradient) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* --- 2. Main Content Layout --- */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#F59E0B] mb-8 mx-auto md:mx-0"
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 tracking-tight text-center md:text-left"
          >
            {defaultContent.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-gray-300 max-w-3xl mb-12 font-light leading-relaxed text-center md:text-left mx-auto md:mx-0"
          >
            {defaultContent.subheadline}
          </motion.p>

          {/* Search Bar */}
          <div className="mb-12">
            <PropertySearch />
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <Button
              onClick={handleCTAClick}
              className="px-10 py-5 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-lg rounded-none transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            >
              <span>{defaultContent.ctaText}</span>
              <ArrowRightIcon />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* --- 3. Bottom Floating Cards (Glassmorphism) --- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
          {/* Stat 1 */}
          <div>
            <div className="text-[#F59E0B] text-3xl md:text-4xl font-medium tracking-tight">
              $2.5B+
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-gray-400">
              Properties Listed
            </div>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-white text-3xl md:text-4xl font-medium tracking-tight">
              12.5%
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-gray-400">
              Average ROI
            </div>
          </div>

          {/* Mission */}
          <div className="max-w-xs md:max-w-sm">
            <p className="text-white text-sm leading-relaxed">
              Smart investments for long-term wealth creation.
            </p>
            <div className="mt-3 text-[11px] uppercase tracking-widest text-[#F59E0B]">
              Our Mission
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
