"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  starCount?: number;
  particleCount?: number;
  showGlowBlob?: boolean;
  showOrbs?: boolean;
  enableParallax?: boolean;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  glow: boolean;
}

export function AnimatedBackground({
  children,
  className = "",
  starCount,
  particleCount,
  showGlowBlob = true,
  showOrbs = true,
  enableParallax = true,
}: AnimatedBackgroundProps) {
  const actualStarCount = starCount ?? particleCount ?? 50;
  const actualShowGlow = showGlowBlob ?? showOrbs ?? true;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  const shouldReduceMotion = useReducedMotion();

  // Handle Desktop Parallax
  useEffect(() => {
    if (!enableParallax || shouldReduceMotion) return;

    // Skip on touch/mobile devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      mouseTarget.current = { x: nx * 15, y: ny * 15 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableParallax, shouldReduceMotion]);

  // Canvas Starfield Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette: mostly pale lavender & white, handful of accent pink, violet, soft yellow
    const paleColors = ["#FFFFFF", "#F6F4FF", "#E9E3FF", "#DDD6FE"];
    const accentColors = ["#EC4899", "#8B5CF6", "#FDE047", "#F472B6"];

    // Cap total stars to 40-60
    const count = Math.min(60, Math.max(35, actualStarCount));
    const stars: Star[] = [];

    for (let i = 0; i < count; i++) {
      const isAccent = i < 6; // Handful of accent stars (around ~10-15%)
      const color = isAccent
        ? accentColors[Math.floor(Math.random() * accentColors.length)]
        : paleColors[Math.floor(Math.random() * paleColors.length)];

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isAccent ? Math.random() * 0.8 + 1.8 : Math.random() * 0.7 + 0.8, // 1-2px for pale, 2-3px for accent
        baseAlpha: isAccent ? 0.75 : Math.random() * 0.3 + 0.4, // 40-70%
        twinkleSpeed: (Math.random() * 0.5 + 0.3) * (Math.PI / 180), // 3-6s cycle
        phase: Math.random() * Math.PI * 2, // Staggered start times
        color,
        glow: isAccent,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for parallax
      if (!shouldReduceMotion) {
        mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.05;
        mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.05;
      }

      stars.forEach((star) => {
        // Opacity pulse (twinkle)
        let alpha = star.baseAlpha;
        if (!shouldReduceMotion) {
          alpha = star.baseAlpha * (0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.phase));
        }

        // Parallax position offset based on star radius/depth
        const parallaxFactor = star.radius * 0.6;
        let px = star.x;
        let py = star.y;

        if (!shouldReduceMotion) {
          px += mouseCurrent.current.x * parallaxFactor;
          py += mouseCurrent.current.y * parallaxFactor;

          // Wrap around canvas edges
          if (px < 0) px += width;
          if (px > width) px -= width;
          if (py < 0) py += height;
          if (py > height) py -= height;
        }

        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

        if (star.glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      time += 1.5;
      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [actualStarCount, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#0A0C1F] ${className}`}
      style={{
        backgroundColor: "#0A0C1F",
        backgroundImage: "radial-gradient(circle at 50% 30%, #0E1130 0%, #0A0C1F 100%)",
      }}
    >
      {/* Background Starfield Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft Center-Right Radial Glow Blob (Behind Hero Floating Collage) */}
        {actualShowGlow && (
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 0.96, 1],
                    x: [0, 20, -15, 0],
                    y: [0, -15, 15, 0],
                    opacity: [0.35, 0.48, 0.38, 0.35],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-[5%] sm:right-[10%] w-[32rem] sm:w-[42rem] h-[32rem] sm:h-[42rem] rounded-full blur-[110px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(236, 72, 153, 0.18) 50%, rgba(10, 12, 31, 0) 75%)",
            }}
          />
        )}

        {/* Optional Secondary Subtle Ambient Violet Depth on Left */}
        {actualShowGlow && (
          <div
            className="absolute top-1/3 left-[-10%] w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Starfield Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      </div>

      {/* Foreground Content (Rendered above starfield & glow) */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
