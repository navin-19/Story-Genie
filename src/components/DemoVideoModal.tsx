"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Film,
  Heart,
} from "lucide-react";
import { Button } from "./Button";

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0B0F2B] text-white rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(139,92,246,0.35)] my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close demo"
            className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/70 text-white/80 hover:text-white hover:bg-black/90 transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player Area */}
          <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
              alt="Leo's 5th Space Odyssey Demo Film"
              fill
              priority
              className="object-cover opacity-80"
            />
            {/* Film grain / gradient filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2B] via-transparent to-black/50" />

            {/* Simulated Live Animation / Story Elements */}
            <div className="relative z-10 text-center p-6 max-w-lg">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white bg-gradient-brand shadow-2xl shadow-pink-500/50 mb-4 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-9 h-9 fill-current" />
                ) : (
                  <Play className="w-9 h-9 fill-current translate-x-1" />
                )}
              </motion.button>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-violet-600/90 text-white border border-white/20 backdrop-blur-md mb-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                AI Generated Film Demo
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Leo's 5th Space Odyssey
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-script text-base">
                "Piloting through the Milky Way to find the Golden Cupcake Star"
              </p>
            </div>

            {/* Bottom In-Player Controls */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
              {/* Scrubber Bar */}
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="bg-gradient-brand h-full rounded-full"
                  animate={{ width: isPlaying ? ["30%", "75%", "90%"] : "45%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-xs">01:42 / 03:00</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-200">
                    4K • 60 FPS
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Dolby Audio
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Action Footer */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">From 8 Family Photos</p>
                  <p className="text-slate-400 text-xs mt-0.5">High-res facial likeness AI rendering</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Custom Soundtrack</p>
                  <p className="text-slate-400 text-xs mt-0.5">Epic orchestral score + parent voice narration</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Ready in 48 Hours</p>
                  <p className="text-slate-400 text-xs mt-0.5">Delivered in crystal clear 4K Ultra HD</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500 fill-current" />
                <span className="font-script text-pink-300 text-xl font-bold">
                  Stories that stay forever ♥
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Close Demo
                </button>
                <Button
                  href="/contact"
                  variant="gradient-pill"
                  size="md"
                  icon="arrow"
                  className="w-full sm:w-auto"
                  onClick={onClose}
                >
                  Create Your Story →
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
