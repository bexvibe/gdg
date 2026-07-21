import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface Props {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CtaBanner({
  heading = "Get in touch today to save up to $150",
  subtext  = "Free measure and quote. We reply within 24 hours.",
  dark     = false,
}: Props) {
  return (
    <section className={dark ? "bg-[#0D1B2A]" : "bg-[#C8291D]"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-display-md text-white mb-3">{heading}</h2>
          <p className={`text-sm mb-2 ${dark ? "text-gray-400" : "text-red-100"}`}>{subtext}</p>
          <p className={`text-sm font-medium mb-8 ${dark ? "text-gray-300" : "text-white/90"}`}>
            <span className="font-semibold">$150 off</span> a new garage door &ensp;·&ensp;
            <span className="font-semibold">$50 off</span> your first repair &amp; maintenance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact-us"
              className={`flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-sm
                ${dark ? "bg-[#C8291D] hover:bg-[#A82219] text-white" : "bg-white text-[#C8291D] hover:bg-red-50"}`}>
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:021906966"
              className={`flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors border-2
                ${dark ? "border-white/20 text-white hover:bg-white/10" : "border-white/40 text-white hover:bg-red-700"}`}>
              <Phone className="w-4 h-4" /> 021 906 966
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
