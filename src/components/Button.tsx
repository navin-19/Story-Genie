"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "gradient-pill" | "outline-pill" | "accent-pill" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: "arrow" | "play" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "gradient-pill",
  size = "md",
  href,
  onClick,
  icon = "none",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold gap-1.5",
    md: "px-6 py-3 text-sm font-semibold gap-2",
    lg: "px-8 py-4 text-base font-bold gap-2.5",
  };

  const variantClasses = {
    "gradient-pill":
      "bg-gradient-brand text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] border border-white/20",
    "outline-pill":
      "border border-white/40 text-white hover:bg-white/10 hover:border-white hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm",
    "accent-pill":
      "bg-pink-500 text-white shadow-lg shadow-pink-500/25 hover:bg-pink-600 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const combinedClass = twMerge(
    clsx(
      "inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none select-none",
      sizeClasses[size],
      variantClasses[variant],
      className
    )
  );

  const iconElement = (
    <>
      {icon === "arrow" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === "play" && (
        <Play className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("group", combinedClass)}>
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("group", combinedClass)}
    >
      <span>{children}</span>
      {iconElement}
    </button>
  );
}
