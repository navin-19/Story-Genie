"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Play,
  Sparkles,
  Volume2,
  Maximize2,
  BookOpen,
  Film,
  Heart,
  Star,
  CheckCircle2,
} from "lucide-react";

interface CinematicHeroVisualProps {
  onPlayClick?: () => void;
}

export function CinematicHeroVisual({ onPlayClick }: CinematicHeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Filmstrip memories thumbnails
  const filmstripItems = [
    {
      id: "f1",
      title: "1st Birthday Fairytale",
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "f2",
      title: "Bedtime Forest Quest",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "f3",
      title: "50th Anniversary Golden Film",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "f4",
      title: "Little Superhero Sam",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none flex items-center justify-center pt-8 pb-10 lg:py-0 select-none">
      {/* Ambient Radial Gradient Glows behind visuals */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[42rem] h-[34rem] sm:h-[42rem] rounded-full bg-gradient-to-tr from-violet-600/35 via-pink-500/25 to-indigo-600/20 blur-[100px] pointer-events-none -z-10" />

      {/* Decorative Handwritten Tagline (Top-Right Floating) */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -15, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-6 right-2 sm:right-6 z-30 bg-violet-950/80 backdrop-blur-md border border-purple-400/30 px-4 py-1.5 rounded-full shadow-xl hidden sm:flex items-center gap-1.5"
      >
        <span className="font-script text-pink-300 text-lg sm:text-xl font-bold tracking-wide">
          Every moment deserves a story ♥
        </span>
      </motion.div>

      {/* Main Container of Overlapping Cinematic Layers */}
      <div className="relative w-full h-[540px] sm:h-[600px] flex items-center justify-center">
        {/* ============================================================ */}
        {/* 1. LAYER: Floating Personalized Storybook Mockup (Top-Left) */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -30, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: -4, zIndex: 30 }}
          className="absolute -top-2 left-0 sm:-left-4 z-20 w-48 sm:w-56 rounded-2xl bg-slate-900/90 p-2.5 backdrop-blur-xl border border-purple-300/30 shadow-2xl shadow-purple-950/60 animate-float-slow cursor-pointer"
        >
          {/* Book Image */}
          <div className="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden bg-slate-950">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
              alt="Personalized Story Book"
              fill
              sizes="(max-width: 640px) 190px, 220px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-violet-600/90 text-white shadow-sm flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Illustrated Book
            </span>
          </div>

          {/* Book details */}
          <div className="mt-2 px-1">
            <p className="text-xs font-bold text-white tracking-wide truncate">
              Maya & The Starlight Forest
            </p>
            <p className="text-[10px] text-pink-300 font-semibold mt-0.5">
              Personalized Story Books
            </p>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. LAYER: MAIN CINEMATIC VIDEO PLAYER FRAME (Center-Tilted) */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10 w-full max-w-[420px] sm:max-w-[490px] rounded-3xl bg-slate-900/90 p-3 sm:p-4 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35)] transform sm:rotate-2 hover:rotate-0 transition-transform duration-500 group"
        >
          {/* Top Browser / Player Bar */}
          <div className="flex items-center justify-between pb-2.5 px-2 border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-medium text-slate-300">
                StoryGenie Cinematic Player
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                4K Ultra HD
              </span>
            </div>
          </div>

          {/* Main Cinematic Video Screen */}
          <div
            className="relative h-56 sm:h-64 w-full mt-2.5 rounded-2xl overflow-hidden bg-slate-950 cursor-pointer"
            onClick={onPlayClick}
          >
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
              alt="Cinematic Birthday Celebration Video"
              fill
              priority
              sizes="(max-width: 640px) 400px, 500px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-black/30" />

            {/* Glowing Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glow ring */}
                <span className="absolute -inset-2 rounded-full bg-gradient-brand opacity-75 blur-md animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-2xl shadow-pink-500/50 transform group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Top Video Tag */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg">
                <Film className="w-3.5 h-3.5 text-pink-400" />
                Leo's 5th Space Odyssey
              </span>
            </div>

            {/* Bottom Timeline Controls */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/90 to-transparent">
              {/* Progress Scrubber */}
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-gradient-brand h-full w-2/5 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  01:24 / 03:00
                </span>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-3.5 h-3.5 text-slate-300 hover:text-white" />
                  <Maximize2 className="w-3.5 h-3.5 text-slate-300 hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Film-Strip of Multiple Generated Memories (Beneath Main Video) */}
          <div className="mt-3 pt-2.5 border-t border-white/10">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Generated Scene Reels
              </span>
              <span className="text-[10px] text-pink-400 font-semibold">
                AI Powered • 4 Scenes
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {filmstripItems.map((fItem) => (
                <div
                  key={fItem.id}
                  className="relative h-12 rounded-lg overflow-hidden border border-white/15 bg-slate-950 group/film cursor-pointer hover:border-pink-400 transition-colors"
                  onClick={onPlayClick}
                >
                  <Image
                    src={fItem.img}
                    alt={fItem.title}
                    fill
                    sizes="100px"
                    className="object-cover group-hover/film:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/film:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/film:opacity-100 transition-opacity">
                    <Play className="w-3.5 h-3.5 text-white fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. LAYER: Smaller Cinematic Celebration Card (Bottom-Right) */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 30, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 4, zIndex: 30 }}
          className="absolute -bottom-4 -right-2 sm:-right-6 z-20 w-52 sm:w-60 rounded-2xl bg-slate-900/90 p-2.5 backdrop-blur-xl border border-pink-300/30 shadow-2xl shadow-purple-950/60 animate-float-reverse cursor-pointer"
        >
          <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-slate-950">
            <Image
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
              alt="Cinematic Celebration Videos"
              fill
              sizes="(max-width: 640px) 200px, 240px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md">
                <Play className="w-2.5 h-2.5 fill-current" />
              </div>
              <span className="text-[10px] font-extrabold text-white">
                50th Anniversary Film
              </span>
            </div>
          </div>

          <div className="mt-2 px-1 flex items-center justify-between">
            <p className="text-[11px] text-pink-300 font-bold">
              Cinematic Celebration Videos
            </p>
            <span className="text-[10px] text-slate-400 font-mono">4K HD</span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 4. LAYER: Bottom Script Pill: "More than memories..." */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-full shadow-2xl border border-white/30 whitespace-nowrap flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span className="font-script text-base sm:text-lg font-bold tracking-wide">
            More than memories, beautiful stories ♥
          </span>
        </motion.div>
      </div>
    </div>
  );
}
