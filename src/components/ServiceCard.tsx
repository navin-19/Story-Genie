import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/content";

interface ServiceCardProps {
  service: ServiceItem;
  onSelectSample?: (serviceId: string) => void;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden border ${service.accentBorder} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col`}
    >
      {/* Thumbnail */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.accentBadgeBg}`}>
            {service.categoryTag}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-violet-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>

          {/* Features Checkpoints */}
          <div className="pt-2 space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 text-[10px]"
                  style={{ backgroundColor: service.accentHex }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${service.accentButtonClass}`}
          >
            <span>View Samples →</span>
          </Link>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            AI + Handcrafted
          </span>
        </div>
      </div>
    </div>
  );
}
