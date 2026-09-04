"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search, Menu, X, ArrowRight, Wand2 } from "lucide-react";
import { navItems } from "@/data/content";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full px-5 py-2.5 bg-[#0B0F2B]/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            {/* Brand Logo & Tagline */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-full p-1"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-brand shadow-md shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                {/* 4-point Star Logo Icon */}
                <Sparkles className="w-5 h-5 text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1 font-sans leading-none">
                  Story<span className="text-gradient">Genie</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-300 tracking-wider hidden sm:block mt-0.5">
                  Your Moments. Our Magic.
                </span>
              </div>
            </Link>

            {/* Center Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-full px-3 py-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-brand rounded-full -z-10 shadow-lg shadow-violet-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Search Icon & Primary CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search stories and creations"
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 border border-white/10"
              >
                <Search className="w-4 h-4" />
              </button>
              <Button href="/contact" variant="gradient-pill" size="sm" icon="arrow">
                Create Your Story →
              </Button>
            </div>

            {/* Mobile Menu & Search Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search"
                className="p-2 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-white rounded-full bg-white/10 border border-white/10 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-40 p-4 md:hidden"
          >
            <div className="bg-[#0B0F2B]/95 rounded-3xl p-6 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-brand text-white shadow-lg shadow-violet-500/30"
                          : "text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <Button
                  href="/contact"
                  variant="gradient-pill"
                  size="md"
                  icon="arrow"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create Your Story →
                </Button>
                <div className="text-center text-xs text-pink-300 font-script text-base">
                  Stories begin with a conversation ♡
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search & Quick Filter Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-[#0B0F2B] rounded-3xl p-6 border border-white/20 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Wand2 className="w-5 h-5 text-pink-400" />
                  <span>Search StoryGenie</span>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search birthdays, storybooks, anniversary films..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-sm"
                    autoFocus
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Popular Explorations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Birthday AI Videos", href: "/services" },
                      { name: "Custom Story Books", href: "/services" },
                      { name: "Family Occasions", href: "/services" },
                      { name: "3D Character Avatars", href: "/services" },
                      { name: "Request Custom Quote", href: "/contact" },
                    ].map((tag) => (
                      <Link
                        key={tag.name}
                        href={tag.href}
                        onClick={() => setSearchModalOpen(false)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-violet-600 text-slate-200 hover:text-white transition-colors duration-200"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
