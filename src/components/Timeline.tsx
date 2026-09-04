"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Users, Compass } from "lucide-react";
import { journeyTimeline, TimelineMilestone } from "@/data/content";

interface TimelineProps {
  milestones?: TimelineMilestone[];
  className?: string;
}

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Users: Users,
  Compass: Compass,
};

export function Timeline({ milestones = journeyTimeline, className = "" }: TimelineProps) {
  return (
    <div className={`relative py-8 ${className}`}>
      {/* Desktop Horizontal Line */}
      <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 -translate-y-6 -z-0 rounded-full opacity-40" />

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {milestones.map((item, index) => {
          const Icon = iconMap[item.iconName] || Sparkles;
          return (
            <motion.div
              key={item.year + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Year Badge */}
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-violet-700 border border-purple-200 mb-4">
                {item.year}
              </span>

              {/* Icon Circle */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ${item.colorClass}`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                {item.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Connecting Dot for Mobile/Tablet */}
              <div className="lg:hidden mt-4 w-3 h-3 rounded-full bg-gradient-brand" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
