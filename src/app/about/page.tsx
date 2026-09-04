import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Users,
  Palette,
  Gift,
  Upload,
  Wand2,
  CheckCircle2,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { QuoteCallout } from "@/components/QuoteCallout";
import { Button } from "@/components/Button";

export const metadata = {
  title: "About Us — StoryGenie | We Believe Every Story Matters",
  description:
    "Learn how StoryGenie blends human warmth with AI innovation to turn family milestones into timeless celebration films and illustrated books.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Band */}
      <Hero
        variant="inner"
        eyebrow="ABOUT STORYGENIE"
        title={
          <>
            We Believe <span className="text-gradient">Every Story Matters</span>
          </>
        }
        subtitle="At StoryGenie, we believe that behind every birthday, anniversary, and bedtime giggle lies a magical fairytale waiting to be celebrated."
      />

      {/* 2. Story Visual & Mission Intro Section */}
      <section className="py-16 md:py-24 bg-[#F6F4FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Emotion Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-purple-100 text-violet-700 border border-purple-200">
                OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bringing Family Memories to Life Through{" "}
                <span className="text-gradient">Heart & Wonder</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Photos get lost in camera rolls, and milestone moments quickly pass by. StoryGenie was born from a simple passion: to rescue those precious memories and turn them into cinematic story experiences that children and grandparents will treasure for decades.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine the boundless imagination of generative AI with the sensitive touch of human writers, illustrators, and sound designers. The result? A deeply personal story that moves hearts and sparks pure joy.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Button href="/contact" variant="gradient-pill" size="md" icon="arrow">
                  Start Your Story
                </Button>
                <span className="font-script text-pink-600 text-xl font-bold">
                  Stories begin with a conversation ♡
                </span>
              </div>
            </div>

            {/* Right: Child Reading Visual with Floating Card & Graphic Detail */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Rounded Image */}
                <div className="relative h-96 sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Child reading personalized story book"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/90 text-white shadow-md">
                      ✨ My Special Story
                    </span>
                    <p className="mt-1 text-sm font-semibold">
                      Starring Leo as the Brave Astronaut
                    </p>
                  </div>
                </div>

                {/* Floating Caption Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-purple-100 max-w-xs animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        "Because everyone has a story worth telling."
                      </p>
                      <p className="text-[10px] text-slate-400">StoryGenie Manifesto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Props Row (3 Columns) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-pink-100 text-pink-700 mb-3 border border-pink-200">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Families <span className="text-gradient">Trust StoryGenie</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: People First */}
            <div className="p-8 rounded-3xl bg-[#F6F4FF] border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">People First</h3>
              <p className="text-sm font-semibold text-violet-600 mb-3">
                Your emotions inspire us.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We listen to the subtle joys, inside jokes, and meaningful moments that define your relationships so every creation feels authentically yours.
              </p>
            </div>

            {/* Value 2: Creative Always */}
            <div className="p-8 rounded-3xl bg-[#F6F4FF] border border-pink-100 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Creative Always</h3>
              <p className="text-sm font-semibold text-pink-600 mb-3">
                Unique ideas, every time.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                No generic templates. Every storyline, original illustration, and musical score is customized specifically for your milestone celebration.
              </p>
            </div>

            {/* Value 3: For Every Occasion */}
            <div className="p-8 rounded-3xl bg-[#F6F4FF] border border-sky-100 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 mb-6 group-hover:scale-110 transition-transform">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">For Every Occasion</h3>
              <p className="text-sm font-semibold text-sky-600 mb-3">
                Birthdays, family, milestones and more.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From a toddler's 1st birthday fairytale to a 50th golden wedding anniversary tribute, we craft stories that resonate across all generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-20 bg-[#F6F4FF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-purple-100 text-violet-700 mb-3 border border-purple-200">
              EASY 4-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How the <span className="text-gradient">Magic Happens</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              From your camera roll to an extraordinary keepsake in just a few days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Share Memories",
                desc: "Upload 5-15 photos, voice clips, or quick story bullet points about your loved one.",
                icon: Upload,
                color: "bg-violet-600",
              },
              {
                step: "02",
                title: "AI & Artist Magic",
                desc: "Our AI engine and storytelling artists draft the script, character avatars, and soundtrack.",
                icon: Wand2,
                color: "bg-pink-500",
              },
              {
                step: "03",
                title: "Preview & Tweak",
                desc: "Review your private digital proof. Request any tweaks or edits until it is 100% perfect.",
                icon: CheckCircle2,
                color: "bg-sky-500",
              },
              {
                step: "04",
                title: "Cherish Forever",
                desc: "Receive your high-res 4K video or luxury printed hardcover storybook delivered to your door.",
                icon: PackageCheck,
                color: "bg-emerald-500",
              },
            ].map((stepItem) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={stepItem.step}
                  className="bg-white p-6 rounded-3xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-slate-200 group-hover:text-purple-400 transition-colors font-mono">
                        {stepItem.step}
                      </span>
                      <div
                        className={`w-11 h-11 rounded-2xl ${stepItem.color} text-white flex items-center justify-center shadow-md`}
                      >
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {stepItem.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-pink-100 text-pink-700 mb-3 border border-pink-200">
              MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Growing from a dream into a beloved storytelling studio.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* 6. Mission / Vision Pull-Quote Callout */}
      <QuoteCallout
        quote="Every memory is a story waiting to be told."
        author="StoryGenie Manifesto"
        tagline="Empowering families to celebrate love, laughter, and heritage"
      />
    </div>
  );
}
