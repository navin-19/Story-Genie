"use client";

import React from "react";
import Image from "next/image";
import { Star, Heart, Sparkles, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/data/content";

interface RatingStripProps {
  theme?: "dark" | "light";
  className?: string;
}

export function RatingStrip({ theme = "dark", className = "" }: RatingStripProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 md:py-28 relative overflow-hidden border-t ${
        isDark ? "bg-[#070A1E] text-white border-white/10" : "bg-gradient-to-b from-[#F6F4FF] to-white border-purple-100"
      } ${className}`}
    >
      {/* Ambient background glows */}
      {isDark && (
        <>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Summary Bar */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between rounded-3xl p-6 sm:p-8 mb-14 gap-6 ${
            isDark
              ? "bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl"
              : "bg-white border border-purple-100 shadow-xl"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-lg shadow-purple-500/30 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className={`ml-2 font-black text-lg ${isDark ? "text-white" : "text-slate-900"}`}>
                  4.9 / 5.0
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Rated by over <strong>1,200+ happy families</strong> worldwide
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-6 sm:gap-8 flex-wrap justify-center text-xs font-bold ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Express Delivery Option</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Digital + Luxury Print</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-xl hover:border-violet-400/50 hover:shadow-[0_10px_35px_-5px_rgba(139,92,246,0.3)]"
                  : "bg-white border border-purple-100 shadow-lg hover:shadow-2xl"
              }`}
            >
              <div className="space-y-4">
                {/* Stars & Occasion Chip */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                      isDark
                        ? "bg-violet-950/80 text-pink-300 border-violet-500/30"
                        : "bg-purple-50 text-violet-700 border-purple-100"
                    }`}
                  >
                    {item.occasion}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed italic ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                className={`flex items-center gap-3 pt-4 border-t ${
                  isDark ? "border-white/10" : "border-slate-100"
                }`}
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-violet-400">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
