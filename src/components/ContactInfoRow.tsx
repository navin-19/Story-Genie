import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactInfo } from "@/data/content";

interface ContactInfoRowProps {
  item: ContactInfo;
}

const iconMap = {
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  Clock: Clock,
};

export function ContactInfoRow({ item }: ContactInfoRowProps) {
  const Icon = iconMap[item.icon] || Mail;

  const content = (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group">
      {/* Circular Gradient Icon Badge */}
      <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex-1">
        <p className="text-xs uppercase tracking-wider font-bold text-violet-300">
          {item.label}
        </p>
        <p className="text-base font-bold text-white mt-0.5 group-hover:text-pink-300 transition-colors">
          {item.value}
        </p>
        <p className="text-xs text-slate-400 mt-0.5">{item.subtext}</p>
      </div>
    </div>
  );

  if (item.actionHref) {
    return (
      <a
        href={item.actionHref}
        target={item.actionHref.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
