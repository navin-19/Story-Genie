"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  BookOpen,
  Sparkles,
  ArrowRight,
  X,
  Heart,
  Volume2,
  CheckCircle2,
} from "lucide-react";
import { GalleryItem, okGalleryData } from "@/data/content";
import { Button } from "./Button";

interface OKGalleryProps {
  items?: GalleryItem[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showFilters?: boolean;
  initialCategory?: string;
  limit?: number;
  className?: string;
  theme?: "dark" | "light";
}

export function OKGallery({
  items = okGalleryData,
  title,
  subtitle,
  showFilters = true,
  initialCategory = "All",
  limit,
  className = "",
  theme = "dark",
}: OKGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Birthday AI Videos",
    "Custom Story Books",
    "Family Videos",
    "Custom Characters",
    "Special Occasions",
  ];

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const isDark = theme === "dark";

  return (
    <section className={`py-20 md:py-28 relative ${isDark ? "bg-[#0A0C1F] text-white" : "bg-[#F6F4FF] text-slate-900"} ${className}`}>
      {/* Ambient background glow for dark mode */}
      {isDark && (
        <>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/15 blur-[120px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 border ${
                isDark
                  ? "bg-violet-950/80 text-pink-300 border-violet-500/30 backdrop-blur-md"
                  : "bg-purple-100 text-violet-700 border-purple-200"
              }`}
            >
              FEATURED CREATIONS
            </span>
            {title ? (
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h2>
            ) : (
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Explore Our <span className="text-gradient">Magical</span> Creations
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Category Filters */}
        {showFilters && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative select-none cursor-pointer ${
                    isActive
                      ? "text-white shadow-lg shadow-violet-500/30 scale-105"
                      : isDark
                      ? "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/15 backdrop-blur-md"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-purple-50 border border-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="galleryCategoryActive"
                      className="absolute inset-0 bg-gradient-brand rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Gallery Cards Grid with Framer Motion Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 flex flex-col ${
                  isDark
                    ? "bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-xl hover:border-violet-400/50 hover:shadow-[0_10px_35px_-5px_rgba(139,92,246,0.35)]"
                    : "bg-white border border-purple-100/80 shadow-lg hover:shadow-2xl hover:border-purple-300"
                }`}
              >
                {/* Image Container with Zoom & Overlay */}
                <div
                  className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => setActiveItem(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      {item.type === "video" ? (
                        <Play className="w-3 h-3 fill-current" />
                      ) : item.type === "book" ? (
                        <BookOpen className="w-3 h-3" />
                      ) : (
                        <Sparkles className="w-3 h-3" />
                      )}
                      {item.tag}
                    </span>
                  </div>

                  {/* Top-Right Duration / Format Chip */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white/90 backdrop-blur-md border border-white/20">
                      {item.durationOrPages}
                    </span>
                  </div>

                  {/* Center Interactive Play / View Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 active:scale-95 transition-transform duration-300"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      {item.type === "video" ? (
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      ) : (
                        <BookOpen className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isDark ? "text-white group-hover:text-pink-300" : "text-slate-900 group-hover:text-violet-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm line-clamp-2 leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Pill */}
                  <div
                    className={`pt-3 flex items-center justify-between border-t ${
                      isDark ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    <button
                      onClick={() => setActiveItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 text-white hover:opacity-90 active:scale-95 shadow-md cursor-pointer"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <span>{item.sampleBadge || "View Samples →"}</span>
                    </button>
                    <span
                      className={`text-xs font-medium flex items-center gap-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" />
                      Family Favorite
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Item Lightbox & Preview Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0B0F2B] text-white rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(139,92,246,0.35)] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors border border-white/10"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Preview Player Simulation */}
              <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2B] via-transparent to-black/40" />

                <div className="relative z-10 text-center p-6 max-w-md">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white shadow-2xl mb-4 animate-bounce"
                    style={{ backgroundColor: activeItem.accentColor }}
                  >
                    {activeItem.type === "video" ? (
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    ) : (
                      <BookOpen className="w-8 h-8" />
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm mb-2">
                    {activeItem.durationOrPages}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {activeItem.type === "video"
                      ? "4K AI Generated Video with Orchestral Sound & Custom Narration"
                      : "Handcrafted Illustrated Digital & Print Storybook"}
                  </p>
                </div>
              </div>

              {/* Modal Details Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: activeItem.accentColor }}
                    >
                      {activeItem.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-violet-400" />
                      Includes Custom Music & Soundscapes
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Personalized characters from real photos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fast turnaround (3-5 business days)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes 2 rounds of creative revisions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High resolution digital & print master files</span>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <span className="font-script text-pink-400 text-lg">
                    Stories that stay Forever ♡
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto text-center cursor-pointer"
                    >
                      Close Preview
                    </button>
                    <Button
                      href="/contact"
                      variant="gradient-pill"
                      size="md"
                      icon="arrow"
                      className="w-full sm:w-auto"
                      onClick={() => setActiveItem(null)}
                    >
                      Enquire for This Story
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
