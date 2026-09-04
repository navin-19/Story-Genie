"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Play,
  Volume2,
  Maximize2,
  BookOpen,
  Film,
  Sparkles,
  Heart,
} from "lucide-react";

interface CinematicShowcaseProps {
  onPlayClick?: () => void;
}

export function CinematicShowcase({ onPlayClick }: CinematicShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Filmstrip thumbnails beneath main video
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

  // Mouse Parallax handler for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x: nx, y: ny });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-6xl mx-auto pt-6 pb-12 sm:pb-20 select-none flex items-center justify-center"
    >
      {/* Soft Center Radial Glow directly behind the showcase */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] sm:w-[54rem] h-[28rem] sm:h-[40rem] rounded-full bg-gradient-to-r from-violet-600/30 via-purple-600/25 to-pink-500/30 blur-[120px] pointer-events-none -z-10" />

      {/* Main Relative Container for Centered Showcase with Orbiting Floating Cards */}
      <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
        {/* ============================================================ */}
        {/* 1. LEFT FLOATING CARD: Personalized Illustrated Storybook     */}
        {/* ============================================================ */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -14, 0],
                  rotate: [-2, 1.5, -2],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          style={{
            x: shouldReduceMotion ? 0 : mousePos.x * -18,
            y: shouldReduceMotion ? 0 : mousePos.y * -14,
            transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="absolute -top-6 sm:-top-8 left-0 sm:left-2 lg:-left-6 z-20 w-44 sm:w-56 lg:w-64"
        >
          {/* Handwritten Decorative Text above left card */}
          <div className="mb-2 hidden sm:block">
            <span className="font-script text-pink-300 text-base lg:text-lg font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(236,72,153,0.4)] whitespace-nowrap block">
              More than memories, Beautiful stories ♥
            </span>
          </div>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -4 }}
            className="rounded-3xl bg-slate-900/85 p-3 backdrop-blur-2xl border border-white/20 shadow-[0_15px_40px_-10px_rgba(139,92,246,0.45)] hover:border-violet-400/60 hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.65)] transition-all duration-300 group cursor-pointer"
            onClick={onPlayClick}
          >
            {/* Book Image Cover */}
            <div className="relative h-36 sm:h-44 lg:h-52 w-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                alt="Maya & The Starlight Forest - Illustrated Story Book"
                fill
                sizes="(max-width: 640px) 180px, 260px"
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-violet-600/90 text-white backdrop-blur-md shadow-md flex items-center gap-1 border border-white/20">
                  <BookOpen className="w-3 h-3" />
                  ILLUSTRATED BOOK
                </span>
              </div>
            </div>

            {/* Book Details */}
            <div className="mt-2.5 px-1">
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate group-hover:text-pink-300 transition-colors">
                Maya & The Starlight Forest
              </p>
              <p className="text-[10px] sm:text-[11px] text-pink-300 font-semibold mt-0.5">
                Personalized Story Books
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. CENTER CARD: LARGE CINEMATIC VIDEO-PLAYER FRAME           */}
        {/* ============================================================ */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -10, 0],
                  rotate: [0, 0.4, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: shouldReduceMotion ? 0 : mousePos.x * 8,
            y: shouldReduceMotion ? 0 : mousePos.y * 6,
            transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="relative z-10 w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[560px] rounded-3xl bg-slate-900/90 p-3.5 sm:p-4 backdrop-blur-2xl border border-white/25 shadow-[0_25px_70px_-15px_rgba(139,92,246,0.4)] transition-all duration-500 group"
        >
          {/* Top Browser / Player Bar */}
          <div className="flex items-center justify-between pb-2.5 px-2 border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-semibold text-slate-300">
                Cinematic Player
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-500/30">
                4K Ultra HD
              </span>
            </div>
          </div>

          {/* Main Cinematic Video Screen */}
          <div
            className="relative h-56 sm:h-72 lg:h-80 w-full mt-3 rounded-2xl overflow-hidden bg-slate-950 cursor-pointer"
            onClick={onPlayClick}
          >
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80"
              alt="Cinematic AI Birthday Celebration Video"
              fill
              priority
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 560px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-black/20 to-black/30" />

            {/* Large Circular Play Button with Glowing Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glow ring */}
                <span className="absolute -inset-3 rounded-full bg-gradient-brand opacity-80 blur-lg animate-pulse" />
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-2xl shadow-pink-500/60 transform transition-transform duration-300"
                >
                  <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-current translate-x-0.5" />
                </motion.div>
              </div>
            </div>

            {/* Top Video Title Tag */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg">
                <Film className="w-3.5 h-3.5 text-pink-400" />
                Leo's 5th Space Odyssey
              </span>
            </div>

            {/* Bottom Timeline Controls */}
            <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
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

          {/* Generated Scene Reels beneath video */}
          <div className="mt-3 pt-2.5 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
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
                  className="relative h-11 sm:h-13 rounded-lg overflow-hidden border border-white/15 bg-slate-950 group/film cursor-pointer hover:border-pink-400 transition-colors"
                  onClick={onPlayClick}
                >
                  <Image
                    src={fItem.img}
                    alt={fItem.title}
                    fill
                    sizes="120px"
                    className="object-cover group-hover/film:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover/film:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/film:opacity-100 transition-opacity">
                    <Play className="w-3.5 h-3.5 text-white fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. RIGHT FLOATING CARD: Cinematic Celebration Video Card     */}
        {/* ============================================================ */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -12, 0],
                  rotate: [1, -1.5, 1],
                }
          }
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          style={{
            x: shouldReduceMotion ? 0 : mousePos.x * -16,
            y: shouldReduceMotion ? 0 : mousePos.y * -12,
            transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="absolute -bottom-6 sm:-bottom-8 right-0 sm:right-2 lg:-right-6 z-20 w-48 sm:w-56 lg:w-64"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -4 }}
            className="rounded-3xl bg-slate-900/85 p-3 backdrop-blur-2xl border border-white/20 shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)] hover:border-pink-400/60 hover:shadow-[0_20px_50px_-10px_rgba(236,72,153,0.65)] transition-all duration-300 group cursor-pointer"
            onClick={onPlayClick}
          >
            {/* Celebration Image */}
            <div className="relative h-32 sm:h-38 lg:h-44 w-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
                alt="50th Anniversary Golden Film - Celebration Video"
                fill
                sizes="(max-width: 640px) 190px, 260px"
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-pink-500/90 text-white backdrop-blur-md shadow-md flex items-center gap-1 border border-white/20">
                  <Film className="w-3 h-3" />
                  Celebration Video
                </span>
              </div>

              {/* Play icon overlay */}
              <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Card Content */}
            <div className="mt-2.5 px-1">
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate group-hover:text-pink-300 transition-colors">
                50th Anniversary Film
              </p>
              <p className="text-[10px] sm:text-[11px] text-pink-300 font-semibold mt-0.5">
                Cinematic Celebration Videos
              </p>
            </div>
          </motion.div>

          {/* Handwritten Decorative Text below right card */}
          <div className="mt-2 text-right hidden sm:block">
            <span className="font-script text-pink-300 text-base lg:text-lg font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(236,72,153,0.4)] whitespace-nowrap block">
              Every moment deserves a story ♥
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
