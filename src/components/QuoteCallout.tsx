import React from "react";
import { Heart, Sparkles } from "lucide-react";

interface QuoteCalloutProps {
  quote?: string;
  author?: string;
  tagline?: string;
  className?: string;
}

export function QuoteCallout({
  quote = "Every memory is a story waiting to be told.",
  author = "StoryGenie Philosophy",
  tagline = "Crafting Joy & Wonder for Every Generation",
  className = "",
}: QuoteCalloutProps) {
  return (
    <div className={`relative max-w-4xl mx-auto my-12 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 p-8 sm:p-12 border border-purple-100 shadow-xl text-center">
        {/* Ambient sparkle icons */}
        <Sparkles className="absolute top-6 left-6 w-6 h-6 text-purple-300 animate-pulse" />
        <Heart className="absolute bottom-6 right-6 w-6 h-6 text-pink-300 animate-bounce" />

        <div className="relative z-10 space-y-4">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-violet-900 leading-snug tracking-wide">
            "{quote}" <span className="text-pink-500">♡</span>
          </p>
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {author}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
