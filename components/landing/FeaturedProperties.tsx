"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Minus } from "lucide-react";
import { type Property } from "@/lib/data";

// ------------------------------------------------------------------
// COMPONENT: THE ARCHITECTURAL CARD
// ------------------------------------------------------------------
const ProjectCard: React.FC<{ property: Property; index: number }> = ({
  property,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col h-full select-none" // select-none prevents text highlighting while dragging
    >
      <Link
        href={`/property/${property.id}`}
        className="block h-full draggable-prevent-click"
      >
        {/* IMAGE FRAME */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6 cursor-none group-hover:cursor-pointer">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10" />
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform pointer-events-none" // pointer-events-none ensures image doesn't block drag
          />

          {/* Custom Cursor Replacement on Hover */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="w-20 h-20 rounded-full border border-white/80 backdrop-blur-sm flex items-center justify-center bg-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                View
              </span>
            </div>
          </div>
        </div>

        {/* METADATA */}
        <div className="flex flex-col items-start pr-4 pointer-events-none">
          {" "}
          {/* content shouldn't interfere with drag */}
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400 mb-2">
            <span>{property.location}</span>
            <span className="w-3 h-[1px] bg-gray-300"></span>
            <span>{property.propertyType}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-gray-900 leading-tight mb-3">
            {property.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2 max-w-sm">
            {property.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// SECTION: HORIZONTAL ARCHIVE (With Drag & Wheel Support)
// ------------------------------------------------------------------
const FeaturedProperties: React.FC<{ properties: Property[] }> = ({
  properties,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Drag State
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll State
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(0.5); // pixels per frame

  // 1. AUTO-SCROLL EFFECT
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isHovered && !isDown) {
        const { scrollLeft, scrollWidth, clientWidth } = container;

        // Check if we've reached the end
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
          // Loop back to start smoothly
          container.scrollLeft = 0;
        } else {
          // Continue scrolling
          container.scrollLeft += scrollSpeedRef.current;
        }
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, isDown]);

  // 2. HANDLE MOUSE WHEEL (Vertical Scroll -> Horizontal Scroll)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only hijack scroll if we are not at the edges, or if it's a strong intentional scroll
      // This logic prevents the user from getting "stuck" on the section
      if (e.deltaY === 0) return;

      // Scroll horizontal
      container.scrollLeft += e.deltaY;

      // Optional: Prevent default page scroll ONLY if we are actually scrolling horizontally
      // e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: true }); // passive: true improves performance
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // 3. HANDLE SCROLL PROGRESS BAR
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const progress = (scrollLeft / totalScroll) * 100;
      setScrollProgress(progress);
    }
  };

  // 4. HANDLE DRAG INTERACTIONS
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // * 2 is the speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button Controls
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!properties || properties.length === 0) return null;

  return (
    <section className="py-32 bg-[#FDFDFD] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1600px]">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Minus className="w-8 h-px text-gray-400" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400">
                Selected Works
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1]">
              Curated Spaces
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4 items-center">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 active:scale-95"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative -mr-6 md:-mr-[calc((100vw-100%)/2)]">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDown(false);
            }}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`
              flex gap-8 md:gap-12 overflow-x-auto overflow-y-hidden pb-12 pr-12
              cursor-grab active:cursor-grabbing
              scrollbar-hide
            `}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[28vw] xl:w-[22vw]"
              >
                <ProjectCard property={property} index={index} />
              </div>
            ))}

            {/* "View All" Card */}
            <div className="flex-shrink-0 w-[20vw] flex items-center justify-center h-auto aspect-[3/4]">
              <Link
                href="/projects"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                  <ArrowRight className="w-6 h-6 text-gray-900 group-hover:text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-transparent group-hover:border-gray-900 transition-colors">
                  View Archive
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* CUSTOM PROGRESS BAR */}
        <div className="w-full h-[1px] bg-gray-200 mt-4 relative max-w-4xl">
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-black"
            style={{ width: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
            layoutId="scrollbar"
          />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProperties;
