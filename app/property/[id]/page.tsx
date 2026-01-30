"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  ChevronDown,
  Image as ImageIcon,
} from "lucide-react";
import { properties, type Property } from "@/lib/data";
import PropertyMap from "@/components/property/PropertyMap";
import Viewer3D from "@/components/property/Viewer3D";
import ROIEstimator from "@/components/landing/ROIEstimator";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setIsLoading(true);
        const foundProperty = properties.find(
          (p) => p.id === Number(params.id),
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
      <div className="min-h-screen bg-white flex items-center justify-center">
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-stone-900 mb-4">
            Property Not Found
          </h1>
          <button
            onClick={() => router.push("/projects")}
            className="text-sm text-stone-600 hover:text-stone-900 underline"
          >
            Return to Properties
          </button>
        </div>
      </div>
    );
  }

  // Get media or create fallback
  const mediaItems =
    property.media && property.media.length > 0
      ? property.media
      : [{ type: "image" as const, url: property.imageUrl }];

  // Filter only images for gallery
  const imageItems = mediaItems.filter((m) => m.type === "image");

  // Check if property has 360° content
  const has360Content = mediaItems.some((m) => m.type === "360");

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Properties &gt; PropShare: Titania
          </button>
        </div>
      </div>

      {/* Multi-Image Gallery */}
      {/* Property Image Gallery */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* MAIN IMAGE */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden bg-stone-100 h-[420px] md:h-[520px]">
            <img
              src={imageItems[selectedImage]?.url ?? property.imageUrl}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Badges */}
            {/* <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {mediaItems.some((m) => m.badge === "Investment Video") && (
                <span className="px-4 py-2 bg-white/90 backdrop-blur text-sm font-medium rounded-lg">
                  Investment Video
                </span>
              )}
              {has360Content && (
                <span className="px-4 py-2 bg-white/90 backdrop-blur text-sm font-medium rounded-lg">
                  360° Virtual Tour
                </span>
              )}
            </div> */}
          </div>

          {/* RIGHT SIDE THUMBNAILS */}
          <div className="flex flex-col gap-4 h-[420px] md:h-[520px]">
            {imageItems.slice(0, 4).map((item, index) => (
              <button
                key={item.url}
                onClick={() => setSelectedImage(index)}
                className={`relative flex-1 rounded-lg overflow-hidden border focus:outline-none
            ${
              selectedImage === index
                ? "border-stone-900"
                : "border-stone-200 hover:border-stone-400"
            }
          `}
              >
                <img
                  src={item.url}
                  alt={`${property.title} thumbnail ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {item.badge && (
                  <span className="absolute top-2 left-2 px-2 py-1 text-xs bg-white/90 rounded">
                    {item.badge}
                  </span>
                )}

                {/* SEE ALL OVERLAY */}
                {index === 3 && imageItems.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-bold">
                    <ImageIcon className="w-5 h-5 mr-2" />
                    {imageItems.length} Photos
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info & Highlights */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Highlights & About */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights Section */}
            <div>
              <h2 className="text-2xl font-normal text-stone-900 mb-6">
                Highlights
              </h2>

              {property.textHighlights && property.textHighlights.length > 0 ? (
                <ul className="space-y-3">
                  {property.textHighlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                      <p className="text-stone-700 leading-relaxed text-[15px]">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-stone-700 leading-relaxed">
                  {property.description}
                </p>
              )}
            </div>

            {/* About Property Section */}
            <div>
              <h2 className="text-2xl font-normal text-stone-900 mb-6">
                About Property
              </h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
                  {property.description}
                </p>
                <p className="text-stone-700 leading-relaxed text-[15px] mb-4">
                  This exceptional property represents a unique investment
                  opportunity in one of the most sought-after locations. With
                  its prime positioning and world-class amenities, it offers
                  both immediate value and long-term appreciation potential.
                </p>
                <p className="text-stone-700 leading-relaxed text-[15px]">
                  The development features state-of-the-art infrastructure,
                  sustainable design principles, and a comprehensive suite of
                  services designed to meet the needs of modern businesses and
                  residents. Every detail has been carefully considered to
                  create an environment that promotes productivity, comfort, and
                  well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Property Stats & Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Property Stats Card */}
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-stone-600" />
                  <span className="text-sm text-stone-600">
                    {property.location}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {property.bedrooms > 0 && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-900">
                        {property.bedrooms}
                      </div>
                      <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">
                        beds
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-900">
                        {property.bathrooms}
                      </div>
                      <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">
                        baths
                      </div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-stone-900">
                      {property.area.toLocaleString()}
                    </div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">
                      sqft
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200">
                  <div className="text-3xl font-bold text-stone-900 mb-3">
                    ${property.price.toLocaleString()}
                  </div>
                  <button className="w-full px-4 py-2 bg-white border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:border-stone-400 transition-colors flex items-center justify-between">
                    Split options
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-4">
                  Contact
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AG</span>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">
                      Gary Hahnenkamp
                    </div>
                    <div className="text-sm text-stone-500">Agent</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#DC2626] text-white font-bold text-sm hover:bg-[#B91C1C] transition-colors rounded-lg">
                    <Phone className="w-4 h-4" />
                    +1 720-728-0473
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#DC2626] text-white font-bold text-sm hover:bg-[#B91C1C] transition-colors rounded-lg">
                    <Mail className="w-4 h-4" />
                    Message
                  </button>
                </div>

                <button className="w-full mt-4 px-4 py-3 bg-stone-900 text-white font-bold text-sm hover:bg-stone-700 transition-colors rounded-lg">
                  Request a tour
                  <div className="text-xs font-normal mt-0.5">
                    Earliest at 11:00 tomorrow
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Spaces Table */}
      {property.availableSpaces && property.availableSpaces.length > 0 && (
        <section className="bg-white py-12 mb-12 border-y border-stone-200">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-normal text-stone-900">
                All Available Spaces ({property.availableSpaces.length})
              </h2>
              <div className="text-sm text-stone-600">
                Display Rental Rate as{" "}
                <span className="text-blue-600 font-medium">$ Amt/MO ▼</span>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto bg-white border border-stone-200 rounded-lg">
              <table className="w-full">
                <thead className="bg-stone-50">
                  <tr className="border-b border-stone-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-900">
                      Space
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-900">
                      No. of People
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-900">
                      Size
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-900">
                      Rental Rate
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-900">
                      Space Use
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {property.availableSpaces.map((space) => (
                    <tr
                      key={space.id}
                      className="hover:bg-stone-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                          {space.floor} Floor, Ste {space.suite}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-[#DC2626] font-medium">
                          {space.capacity}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        {space.size} SF
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-stone-900">
                        ${space.rentalRate.toLocaleString()} /MO
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-[#92400E] font-medium">
                          {space.spaceUse}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-stone-400 hover:text-stone-600 transition-colors">
                          <ChevronDown className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {property.availableSpaces.map((space) => (
                <div
                  key={space.id}
                  className="bg-white border border-stone-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-blue-600">
                        {space.floor} Floor, Ste {space.suite}
                      </div>
                      <div className="text-sm text-stone-500">
                        {space.spaceUse}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-stone-900">
                        ${space.rentalRate.toLocaleString()}
                      </div>
                      <div className="text-xs text-stone-500">/MO</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-stone-500">People:</span>{" "}
                      <span className="text-[#DC2626] font-medium">
                        {space.capacity}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-500">Size:</span>{" "}
                      <span className="text-stone-900">{space.size} SF</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3D Street View Section */}
      {has360Content && (
        <section className="bg-stone-50 py-16 mb-12">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-normal text-stone-900 mb-8">
                {property.availableSpaces && property.availableSpaces.length > 0
                  ? "28th Floor - Virtual Tour"
                  : "360° Virtual Tour"}
              </h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-stone-200">
                {(() => {
                  const viewer360 = mediaItems.find((m) => m.type === "360");
                  return viewer360 ? (
                    <Viewer3D imageUrl={viewer360.url} title={property.title} />
                  ) : null;
                })()}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Map Section */}
      {property.coordinates && (
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-normal text-stone-900 mb-8">
              Location
            </h2>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-stone-200 relative">
              <Image
                src="/image.png"
                alt="Property Location Map"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* ROI Estimator Section */}
      <ROIEstimator
        initialPropertyType={property.propertyType}
        lockPropertyType={true}
      />

      {/* Footer Spacer */}
      <div className="h-16"></div>
    </main>
  );
}
