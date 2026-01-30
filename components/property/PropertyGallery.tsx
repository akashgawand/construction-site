"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Play } from "lucide-react";
import { type PropertyMedia } from "@/lib/data";
import ReactPlayer from "react-player";
import { Pannellum } from "pannellum-react";

interface PropertyGalleryProps {
  media: PropertyMedia[];
  propertyTitle: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  media,
  propertyTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentMedia = media[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const renderMedia = (mediaItem: PropertyMedia, isMain: boolean = false) => {
    const className = isMain
      ? "w-full h-full object-cover"
      : "w-full h-full object-cover";

    switch (mediaItem.type) {
      case "image":
        return (
          <img src={mediaItem.url} alt={propertyTitle} className={className} />
        );
      case "video":
        return (
          <div className="relative w-full h-full bg-black">
            <ReactPlayer
              url={mediaItem.url}
              width="100%"
              height="100%"
              controls
              playing={isMain && !isFullscreen}
            />
          </div>
        );
      case "360":
        return (
          <div className="w-full h-full">
            <Pannellum
              width="100%"
              height="100%"
              image={mediaItem.url}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              showZoomCtrl={isMain}
              mouseZoom={isMain}
              showFullscreenCtrl={false}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Viewer */}
        <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
          {renderMedia(currentMedia, true)}

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                aria-label="Next media"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </>
          )}

          {/* Media Counter */}
          <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 text-white text-sm font-medium rounded-full">
            {currentIndex + 1} / {media.length}
          </div>

          {/* Media Type Badge */}
          {currentMedia.type !== "image" && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-xs font-bold uppercase tracking-wider rounded">
              {currentMedia.type === "360" ? "360° View" : "Video"}
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="View fullscreen"
          >
            <Maximize2 className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        {media.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-black"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.type === "image" ? (
                  <img
                    src={item.thumbnail || item.url}
                    alt={`${propertyTitle} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Play className="w-6 h-6 text-gray-600" />
                    ) : (
                      <span className="text-xs font-bold text-gray-600">
                        360°
                      </span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center z-50"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div
              className="w-full h-full p-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-7xl max-h-full">
                {renderMedia(currentMedia, true)}
              </div>
            </div>

            {/* Fullscreen Navigation */}
            {media.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-full">
                  {currentIndex + 1} / {media.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default PropertyGallery;
