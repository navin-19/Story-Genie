"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Bot,
  HeartHandshake,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./Button";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Birthday AI Videos",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      errs.email = "Please enter a valid email address";
    if (!formData.phone.trim()) errs.phone = "Please enter your contact number";
    if (!formData.message.trim()) errs.message = "Please share a few details about your occasion";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }
    }, 900);
  };

  return (
    <div className="relative">
      {/* Friendly Mascot / Speech Bubble Decorative Badge */}
      <div className="absolute -top-10 right-4 sm:-right-4 z-20 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-xl animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="text-xs font-bold leading-tight">
          <span>We're here to help!</span>
          <span className="block text-[10px] text-pink-200 font-normal">Replies in &lt; 24 hrs</span>
        </div>
      </div>

      {/* Main Floating White Form Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-purple-100 text-slate-900">
        {isSuccess ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Magic Request Received! ✨
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! Our creative storytelling team will review your details for <strong>{formData.service}</strong> and email you sample drafts within 24 hours.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "Birthday AI Videos",
                    message: "",
                  });
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Send an Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tell us about your story and we will craft a personalized sample for you.
              </p>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Name <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Rachel Green"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                    errors.name ? "border-rose-400 bg-rose-50/50" : "border-slate-200 hover:border-slate-300"
                  }`}
                />
              </div>
              {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="rachel@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                      errors.email ? "border-rose-400 bg-rose-50/50" : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                      errors.phone ? "border-rose-400 bg-rose-50/50" : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Select Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Select Service <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all bg-white"
                >
                  <option value="Birthday AI Videos">Birthday AI Videos</option>
                  <option value="Custom Story Books">Custom Story Books (Print / E-book)</option>
                  <option value="Family & Occasion Videos">Family & Occasion Videos</option>
                  <option value="Custom Characters">Custom 3D / Illustrated Characters</option>
                  <option value="Themed Story Books">Themed Bedtime Story Books</option>
                  <option value="Brand & Business Videos">Brand & Business Story Videos</option>
                  <option value="Other Custom Request">Other Custom Request</option>
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Tell Us About Your Moment <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Who is this story for? (e.g., My son Leo's 5th birthday, he loves space and rockets!)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                    errors.message ? "border-rose-400 bg-rose-50/50" : "border-slate-200 hover:border-slate-300"
                  }`}
                />
              </div>
              {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="gradient-pill"
                size="lg"
                icon="arrow"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Brewing Story Magic..." : "Enquiry →"}
              </Button>
            </div>

            <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-pink-500" />
              100% Privacy Protected. We never share your family photos.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
