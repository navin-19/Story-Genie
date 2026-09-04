import React from "react";
import { Sparkles, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContactInfoRow } from "@/components/ContactInfoRow";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { placeholderContactDetails } from "@/data/content";

export const metadata = {
  title: "Contact Us — StoryGenie | Let's Create Magic Together",
  description:
    "Get in touch with the StoryGenie team to start your personalized AI video, custom storybook, or family legacy keepsake.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0B0F2B] text-white min-h-screen relative overflow-hidden">
      {/* Background Starfield & Nebula */}
      <AnimatedBackground particleCount={70} showOrbs={true} />

      <div className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Two-Column Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 cols): Narrative & Contact Info Rows */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-white/10 text-pink-300 border border-white/15 backdrop-blur-md mb-4 shadow-inner">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  GET IN TOUCH
                </span>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Let's Create Something{" "}
                  <span className="text-gradient">Magical</span> Together
                </h1>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  Have an upcoming birthday, wedding anniversary, or a unique storytelling idea? We’d love to hear from you and bring your vision to life.
                </p>
              </div>

              {/* Contact Info Rows (Email, Call, Location, Hours) */}
              <div className="space-y-3">
                {placeholderContactDetails.map((item, idx) => (
                  <ContactInfoRow key={idx} item={item} />
                ))}
              </div>

              {/* Script Caption */}
              <div className="pt-2">
                <p className="font-script text-2xl sm:text-3xl text-pink-300">
                  Stories begin with a conversation ♡
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Floating Enquiry Form Card */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>

          {/* Quick FAQ / Assistance Banner */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-300">
                FREQUENTLY ASKED
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Have Quick Questions?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  q: "How fast is delivery?",
                  a: "Digital 4K videos and e-books are ready within 3-5 business days. Luxury hardcover storybooks are printed and shipped in 5-8 business days.",
                },
                {
                  q: "What photos do I need to send?",
                  a: "Clear, well-lit photos of the person or pet. Candid smiles and childhood pictures work best! You can upload 5 to 15 photos.",
                },
                {
                  q: "Can I request revisions?",
                  a: "Yes! Every project includes 2 rounds of revisions so you can tweak script narrations, names, or character details before final delivery.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-base font-bold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
