import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Smile,
  ShieldCheck,
  Clock,
  Heart,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { OKGallery } from "@/components/OKGallery";
import { RatingStrip } from "@/components/RatingStrip";
import { Button } from "@/components/Button";
import { servicesData, okGalleryData } from "@/data/content";

export const metadata = {
  title: "Our Services — StoryGenie | AI Videos & Illustrated Story Books",
  description:
    "Explore our full suite of AI birthday videos, custom children's fairytale books, family anniversary tribute films, and bespoke 3D character avatars.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Band */}
      <Hero
        variant="inner"
        eyebrow="OUR SERVICES"
        title={
          <>
            Creative Services for Every{" "}
            <span className="text-gradient">Special Moment</span>
          </>
        }
        subtitle="We combine the emotional resonance of bespoke storytelling with cutting-edge AI generation to create cinematic videos and heirloom storybooks."
      />

      {/* 2. Services Grid & Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-[#F6F4FF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: 2x3 Services Grid */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-purple-100 text-violet-700 mb-3 border border-purple-200">
                  CREATIVE CATALOG
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Choose Your <span className="text-gradient">Story Experience</span>
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Every service is fully personalized with your photos, custom scripts, and professional audio mastering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Right 4 Cols: "Why Choose Us?" Sticky Sidebar Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-xl space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-md">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Why Choose Us?
                      </h3>
                      <p className="text-xs text-violet-600 font-semibold">
                        The StoryGenie Advantage
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-4 pt-2 border-t border-purple-100">
                    {[
                      {
                        title: "AI-Powered & Creative",
                        desc: "Next-gen generation paired with human artistic polish.",
                      },
                      {
                        title: "100% Personalized",
                        desc: "Custom likenesses, inside jokes, and tailor-made music.",
                      },
                      {
                        title: "High-Quality Output",
                        desc: "4K ultra HD video exports and luxury 300 DPI hardbound prints.",
                      },
                      {
                        title: "Easy & Quick Process",
                        desc: "Turnaround within 3-5 days with express options available.",
                      },
                      {
                        title: "Loved by Customers",
                        desc: "Over 1,200+ 5-star reviews from delighted families.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Script-font tagline */}
                  <div className="pt-4 border-t border-purple-100 text-center">
                    <p className="font-script text-2xl text-violet-900 font-bold">
                      More Stories More Smiles Always! 🙂
                    </p>
                  </div>

                  {/* Sidebar CTA */}
                  <div className="pt-2">
                    <Button
                      href="/contact"
                      variant="gradient-pill"
                      size="md"
                      icon="arrow"
                      className="w-full"
                    >
                      Request a Custom Quote
                    </Button>
                  </div>
                </div>

                {/* Quick Help Badge */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-900 to-indigo-900 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold text-pink-300">Need Guidance?</p>
                    <p className="text-xs text-slate-200">Talk to our story director</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-900 hover:bg-pink-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Previous Projects Showcase (OKGallery Component Instance) */}
      <div className="bg-white">
        <OKGallery
          title={
            <>
              Previous <span className="text-gradient">Projects</span> & Samples
            </>
          }
          subtitle="Browse completed birthday tributes, storybooks, and custom character commissions created for our clients."
          items={okGalleryData}
          showFilters={true}
        />
      </div>

      {/* 4. Customer Reviews Section */}
      <RatingStrip />
    </div>
  );
}
