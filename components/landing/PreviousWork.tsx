"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getCaseStudies } from "@/lib/data";

// --- Types ---
interface CaseStudy {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
  status: string;
}

// --- Configuration ---
// Reduced widths/gaps slightly for better fit on average screens
const CARD_WIDTH = 450;
const CARD_GAP = 100;
const DRAG_BUFFER = 50;
const LUXURY_EASE = [0.32, 0.72, 0, 1] as const;
const TRANSITION = { duration: 0.9, ease: LUXURY_EASE };

export default function TimelineArchive() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll State
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mock Data Loading
    const data = getCaseStudies().sort((a: any, b: any) => a.year - b.year);
    setCaseStudies(data);
  }, []);

  // --- Core Navigation Logic ---
  const calculatePosition = useCallback((index: number) => {
    if (typeof window === "undefined") return 0;
    // Center logic: Screen Center - (Card Half) - (Index * (Card + Gap))
    const centerOffset = window.innerWidth / 2 - CARD_WIDTH / 2;
    return centerOffset - index * (CARD_WIDTH + CARD_GAP);
  }, []);

  const handleSnap = useCallback(
    (index: number) => {
      if (index < 0 || index >= caseStudies.length) return;

      setIsAnimating(true);
      setActiveIndex(index);

      animate(x, calculatePosition(index), {
        ...TRANSITION,
        onComplete: () => setIsAnimating(false),
      });
    },
    [caseStudies.length, calculatePosition, x],
  );

  // Handle Resize & Initial Snap
  useEffect(() => {
    const handleResize = () => handleSnap(activeIndex);
    window.addEventListener("resize", handleResize);
    handleSnap(activeIndex); // Initial snap
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, handleSnap]);

  // Auto-scroll Effect
  useEffect(() => {
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    // Only auto-scroll if not hovered, not dragging, and not animating
    if (!isHovered && !isDragging && !isAnimating && caseStudies.length > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % caseStudies.length;
          handleSnap(nextIndex);
          return nextIndex;
        });
      }, 3000); // Auto-advance every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isHovered, isDragging, isAnimating, caseStudies.length, handleSnap]);

  // --- Input Handlers ---
  const handleWheel = (e: React.WheelEvent) => {
    if (isAnimating) return;
    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      if (e.deltaX > 0 || e.deltaY > 0) handleSnap(activeIndex + 1);
      else handleSnap(activeIndex - 1);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -500) handleSnap(activeIndex + 1);
    else if (offset > DRAG_BUFFER || velocity > 500)
      handleSnap(activeIndex - 1);
    else handleSnap(activeIndex);
  };

  if (!caseStudies.length) return null;
  const activeProject = caseStudies[activeIndex];

  return (
    // FIXED: Uses 'h-screen' or 'min-h-screen' to contain layout.
    // 'overflow-hidden' prevents the horizontal scrollbar issue.
    <section
      className="relative py-20 w-full h-screen min-h-[700px] flex flex-col justify-center bg-white text-black overflow-hidden outline-none"
      onWheel={handleWheel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- Section Header --- */}
      <header className="relative z-30 w-full px-6 mb-8 md:mb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: Title */}
          <div>
            <span className="block text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-tight">
              Stories in Time
            </h2>
          </div>

          {/* Right: Description */}
          <p className="max-w-xs text-sm text-neutral-500 leading-relaxed">
            Explore how our projects have evolved over the years, one at a time.
          </p>
        </div>
      </header>

      {/* --- Background & Spine --- */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-center">
        {/* The visual timeline line - positioned behind the images */}
        <div className="w-full h-px bg-neutral-100 relative top-[-10%] md:top-[-5%]">
          {/* Progress Line */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-black/20"
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeIndex + 1) / caseStudies.length) * 100}%`,
            }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Background text decoration */}
        <div className="absolute left-6 md:left-12 top-1/2 -mt-24 text-[10px] tracking-[0.2em] text-neutral-200 uppercase -rotate-90 origin-center hidden md:block">
          Archive 2018 — 2024
        </div>
      </div>

      {/* --- Main Carousel Track --- */}
      {/* FIXED: Reduced height from fixed pixels to viewport percentage (55vh) to allow text space below */}
      <div
        className="relative z-10 w-full h-[55vh] min-h-[400px] flex items-center cursor-grab active:cursor-grabbing"
        ref={containerRef}
      >
        <motion.div
          className="flex items-center absolute left-0 will-change-transform"
          style={{ x, gap: CARD_GAP }}
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          dragElastic={0.1}
        >
          {caseStudies.map((study, index) => {
            const isActive = index === activeIndex;
            const distance = Math.abs(index - activeIndex);

            return (
              <motion.div
                key={study.id}
                onClick={() => !isDragging && handleSnap(index)}
                className="relative shrink-0 select-none group"
                style={{
                  width: CARD_WIDTH,
                  // Responsive sizing
                  height: isActive ? "55vh" : "45vh",
                  maxHeight: isActive ? 600 : 500,
                  minHeight: isActive ? 400 : 300,
                }}
                animate={{
                  height: isActive ? "55vh" : "45vh",
                  opacity: isActive ? 1 : distance === 1 ? 0.6 : 0.3,
                  filter: isActive
                    ? "grayscale(0%)"
                    : "grayscale(100%) blur(1px)",
                  scale: isActive ? 1 : 0.9,
                }}
                transition={TRANSITION}
              >
                {/* Image Container */}
                <div className="w-full h-full overflow-hidden bg-neutral-50 relative">
                  <motion.img
                    src={study.imageUrl}
                    alt={study.title}
                    draggable={false}
                    className="w-full h-full object-cover"
                    animate={{ scale: isActive ? 1.05 : 1.15 }}
                    transition={{ duration: 1.2 }}
                  />

                  {/* Active Frame */}
                  <div
                    className={`absolute inset-0 border-[1px] pointer-events-none transition-colors duration-500 ${isActive ? "border-black/10" : "border-transparent"}`}
                  />
                </div>

                {/* Timeline Year Marker - Attached to top of card */}
                <div
                  className={`absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <span className="font-mono text-xs text-black mb-2">
                    {study.year}
                  </span>
                  <div className="w-px h-8 bg-black/20"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* --- Editorial Panel (Fixed at Bottom) --- */}
      {/* FIXED: Uses a fixed height container that is separated from the carousel to prevent overlap */}
      <div className="relative z-20 w-full mt-8 md:mt-12 px-6">
        <div className="max-w-5xl mx-auto border-t border-neutral-100 pt-6 flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex gap-1">
              <button
                onClick={() => handleSnap(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="w-10 h-10 flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => handleSnap(activeIndex + 1)}
                disabled={activeIndex === caseStudies.length - 1}
                className="w-10 h-10 flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="font-mono text-xs text-neutral-400">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(caseStudies.length).padStart(2, "0")}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 overflow-hidden min-h-[120px]">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 leading-none">
                  {activeProject.title}
                </h3>
                <span className="hidden md:inline-block w-8 h-px bg-neutral-200" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                  {activeProject.location}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-sm text-neutral-500 leading-relaxed max-w-md line-clamp-3 md:line-clamp-none">
                  {activeProject.description}
                </p>

                <div className="flex items-start md:items-end justify-start md:justify-end">
                  <button className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-black border-b border-transparent hover:border-black pb-1 transition-all">
                    Explore Project <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
