import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const doorLinks = [
  { href: "/garage-doors/sectional-garage-door",            label: "Sectional ColorSteel" },
  { href: "/garage-doors/aluminium-garage-door",            label: "Aluminium Doors" },
  { href: "/garage-doors/wooden-cedar-garage-door",         label: "Wooden & Cedar" },
  { href: "/garage-doors/roller-doors",                     label: "Residential Roller" },
  { href: "/garage-doors/commercial-roller-doors",          label: "Commercial Roller" },
  { href: "/garage-doors/sectional-garage-door-insulation", label: "Insulation" },
];
const serviceLinks = [
  { href: "/garage-services/garage-door-repairs",           label: "Repairs" },
  { href: "/garage-services/garage-door-servicing",         label: "Servicing" },
  { href: "/garage-services/garage-door-seals",             label: "Seals & Strips" },
  { href: "/garage-services/garage-door-springs",           label: "Springs" },
  { href: "/garage-services/garage-openers",                label: "Motors & Openers" },
  { href: "/garage-services/garage-door-remotes",           label: "Remotes" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">

      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-700 text-xl text-white mb-1">Ready to upgrade your garage door?</p>
            <p className="text-gray-400 text-sm">Free measure and quote. $150 off a new door, $50 off your first repair.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:021906966"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> 021 906 966
            </a>
            <Link href="/contact-us"
              className="flex items-center gap-1.5 bg-[#C8291D] hover:bg-[#A82219] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
              Get a quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">

        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-[#C8291D] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
              </svg>
            </div>
            <div>
              <span className="font-display font-700 text-white text-sm leading-none block">Garage Door</span>
              <span className="font-display font-700 text-[#C8291D] text-sm leading-none block">Group</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            North Auckland&apos;s trusted garage door specialists. 30+ years trade experience. 5-star rated.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors text-xs font-bold"
              aria-label="Facebook">f</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors text-xs font-bold"
              aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* Doors */}
        <div>
          <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Garage Doors</h3>
          <ul className="space-y-2.5">
            {doorLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Services</h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Contact</h3>
          <ul className="space-y-3 mb-5">
            <li>
              <a href="tel:021906966" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" /> 021 906 966
              </a>
            </li>
            <li>
              <a href="mailto:chris@gdgroup.co.nz" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" /> chris@gdgroup.co.nz
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>North Auckland &amp;<br />Rodney District, NZ</span>
              </div>
            </li>
          </ul>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest">Locations</h3>
            <div className="flex flex-wrap gap-2">
              {[["Warkworth","/locations/warkworth"],["Mangawhai","/locations/mangawhai"],["Silverdale","/locations/silverdale"]].map(([name, href]) => (
                <Link key={href} href={href}
                  className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-2.5 py-1 rounded-md transition-colors">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Garage Door Group. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/about-us"  className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/articles"  className="hover:text-gray-300 transition-colors">Articles</Link>
            <Link href="/contact-us" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
