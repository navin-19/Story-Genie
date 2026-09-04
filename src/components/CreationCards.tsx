"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Cake, HeartHandshake, Users, Star, Film, BookOpen } from "lucide-react";
import { Button } from "./Button";

export interface CreationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  badgeIcon: "Cake" | "HeartHandshake" | "Users" | "Star";
  accentColor: string;
  accentGlow: string;
  href: string;
}

const categories: CreationCategory[] = [
  {
    id: "birthdays",
    title: "Birthdays",
    subtitle: "AI Celebration Films & Bedtime Books",
    description: "Turn birthdays into magical stories they'll cherish forever.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    badgeIcon: "Cake",
    accentColor: "from-orange-500 to-amber-500",
    accentGlow: "rgba(249, 115, 22, 0.25)",
    href: "/services",
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    subtitle: "Golden Milestone Tributes",
    description: "Celebrate your journey with cinematic memories.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    badge: "Emotional Tribute",
    badgeIcon: "HeartHandshake",
    accentColor: "from-pink-500 to-rose-500",
    accentGlow: "rgba(236, 72, 153, 0.25)",
    href: "/services",
  },
  {
    id: "family-moments",
    title: "Family Moments",
    subtitle: "Heirloom Keepsakes & Stories",
    description: "Preserve the love, laughter and moments that matter.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge: "Keepsake",
    badgeIcon: "Users",
    accentColor: "from-violet-500 to-purple-600",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    href: "/services",
  },
  {
    id: "special-memories",
    title: "Special Memories",
    subtitle: "Graduations & Life Milestones",
    description: "Turn your unique moments into timeless stories.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    badge: "Timeless",
    badgeIcon: "Star",
    accentColor: "from-sky-500 to-teal-500",
    accentGlow: "rgba(14, 165, 233, 0.25)",
    href: "/services",
  },
];

const iconMap = {
  Cake: Cake,
  HeartHandshake: HeartHandshake,
  Users: Users,
  Star: Star,
};

export function CreationCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 bg-[#0B0F2B] text-white overflow-hidden border-t border-white/10">
      {/* Background Subtle Nebulae */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-pink-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-950/80 text-pink-300 border border-violet-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>OUR CREATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Made for life’s most{" "}
              <span className="text-gradient">meaningful moments</span>
            </h2>
            <p className="text-slate-300 max-w-xl text-base sm:text-lg">
              Every creation combines generative AI artistry with human emotional craft to create unforgettable celebration stories.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/services"
              variant="outline-pill"
              size="md"
              icon="arrow"
              className="bg-white/5 border-white/20 hover:bg-white/10 text-white"
            >
              Explore All Services
            </Button>
          </div>
        </div>

        {/* 4 Premium Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => {
            const Icon = iconMap[item.badgeIcon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-xl hover:border-violet-400/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                style={{
                  boxShadow: `0 10px 30px -10px ${item.accentGlow}`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-md">
                      <Icon className="w-3 h-3 text-pink-400" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-violet-300 mt-1">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      "{item.description}"
                    </p>
                  </div>

                  {/* Action Link / Button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-pink-300 transition-colors"
                    >
                      <span>Explore {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-brand flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
