import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CreationCards } from "@/components/CreationCards";
import { OKGallery } from "@/components/OKGallery";
import { RatingStrip } from "@/components/RatingStrip";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <div className="bg-[#0A0C1F] text-white min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <Hero variant="home" />

      {/* 2. Our Creations (Made for life's most meaningful moments) */}
      <CreationCards />

      {/* 3. Explore Our Magical Creations (Interactive OKGallery Showcase) */}
      <OKGallery
        theme="dark"
        title={
          <>
            Explore Our <span className="text-gradient">Magical</span> Creations
          </>
        }
        subtitle="Explore hand-crafted cinematic video films, fairytale storybooks, and custom characters made for real families."
        showFilters={true}
      />

      {/* 4. Customer Ratings & Testimonial Strip */}
      <RatingStrip theme="dark" />

      {/* 5. Final Cinematic CTA Banner */}
      <section className="py-20 md:py-28 bg-[#070A1E] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-pink-500/20 blur-[120px] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="font-script text-2xl sm:text-3xl text-pink-400">
            More Stories More Smiles Always! 🙂
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Turn Your Moment into{" "}
            <span className="text-gradient">Magic</span>?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Give the gift of a lifetime. Send us your favorite photos and let StoryGenie weave an unforgettable memory.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="gradient-pill" size="lg" icon="arrow">
              Create Your Story →
            </Button>
            <Button href="/about" variant="outline-pill" size="lg">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
