"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem { q: string; a: string }
interface Props { items: FAQItem[]; heading?: string }

export default function FAQ({ items, heading = "Frequently asked questions" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-[#F5F6F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-display-md text-[#0D1B2A] mb-10 text-center">{heading}</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className={`bg-white rounded-2xl overflow-hidden transition-shadow ${open === i ? "shadow-card-lg" : "shadow-card"}`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}>
                <span className="font-display font-600 text-[#0D1B2A] text-sm leading-snug">{item.q}</span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-[#C8291D] text-white" : "bg-gray-100 text-gray-500"}`}>
                  {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
