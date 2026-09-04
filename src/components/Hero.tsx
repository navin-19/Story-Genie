"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Play,
  ArrowRight,
  Wand2,
  Heart,
  Gift,
} from "lucide-react";
import { Button } from "./Button";
import { AnimatedBackground } from "./AnimatedBackground";
import { CinematicShowcase } from "./CinematicShowcase";
import { DemoVideoModal } from "./DemoVideoModal";

interface HeroProps {
  variant?: "home" | "inner";
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onSecondaryCtaClick?: () => void;
}

export function Hero({
  variant = "home",
  eyebrow = "✦ TURN MOMENTS INTO MAGIC",
  title,
  subtitle,
  primaryCtaText = "Create Your Story →",
  primaryCtaHref = "/contact",
  secondaryCtaText = "▶ Watch Demo",
  secondaryCtaHref = "#",
  onSecondaryCtaClick,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [demoOpen, setDemoOpen] = useState(false);

  // Inner-Page Variant (About, Services, Contact, etc.)
  if (variant === "inner") {
    return (
      <AnimatedBackground
        starCount={45}
        showGlowBlob={true}
        className="pt-32 pb-20 md:pt-40 md:pb-28 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {eyebrow && (
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-950/80 text-pink-300 border border-violet-500/30 backdrop-blur-md mb-6 shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </AnimatedBackground>
    );
  }

  // Home Hero Section — CENTERED COMPOSITION
  return (
    <>
      <AnimatedBackground
        starCount={55}
        showGlowBlob={true}
        enableParallax={true}
        className="pt-28 pb-12 sm:pt-36 sm:pb-20 text-white min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* ============================================================ */}
          {/* 1. CENTERED TOP CONTENT: Eyebrow, H1, Subcopy, CTAs, Features */}
          {/* ============================================================ */}
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-7">
            {/* Eyebrow Pill */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-violet-950/80 text-pink-300 border border-violet-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span>✦ TURN MOMENTS INTO MAGIC</span>
            </motion.div>

            {/* Main Centered Headline */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.12] sm:leading-[1.1]"
            >
              Turn Your Memories Into{" "}
              <span className="block mt-1 sm:mt-2">
                Stories They’ll <span className="text-gradient">Never Forget</span>
              </span>
            </motion.h1>

            {/* Centered Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Transform your photos and cherished memories into cinematic AI videos, personalized storybooks, and creative experiences for life's special moments.
            </motion.p>

            {/* Centered CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1"
            >
              {/* Primary CTA */}
              <Button
                href="/contact"
                variant="gradient-pill"
                size="lg"
                icon="none"
                className="w-full sm:w-auto shadow-2xl shadow-violet-600/40 font-bold px-8"
              >
                Create Your Story →
              </Button>

              {/* Secondary Watch Demo Button */}
              <button
                type="button"
                onClick={() => {
                  if (onSecondaryCtaClick) onSecondaryCtaClick();
                  setDemoOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/25 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-pink-400 text-pink-400 translate-x-0.5" />
                <span>▶ Watch Demo</span>
              </button>
            </motion.div>

            {/* Three Centered Lightweight Feature Highlights (Circular glowing icons) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-400/40 text-violet-300 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.5)]">
                  <Wand2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white leading-tight">AI-Powered</p>
                  <p className="text-[11px] text-slate-400">From photos to magic</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-300 flex items-center justify-center shadow-[0_0_12px_rgba(236,72,153,0.5)]">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white leading-tight">Personalized</p>
                  <p className="text-[11px] text-slate-400">Uniquely yours</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sky-500/30 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-[0_0_12px_rgba(14,165,233,0.5)]">
                  <Gift className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white leading-tight">Made for Every Occasion</p>
                  <p className="text-[11px] text-slate-400">Made for milestones</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* 2. CENTERED MAIN CINEMATIC MEDIA SHOWCASE                   */}
          {/* ============================================================ */}
          <div className="mt-10 sm:mt-14 w-full">
            <CinematicShowcase onPlayClick={() => setDemoOpen(true)} />
          </div>
        </div>
      </AnimatedBackground>

      {/* Demo Video Modal */}
      <DemoVideoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
