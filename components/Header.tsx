"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const doorLinks = [
  { href: "/garage-doors/sectional-garage-door",          label: "Sectional ColorSteel" },
  { href: "/garage-doors/aluminium-garage-door",          label: "Aluminium Doors" },
  { href: "/garage-doors/wooden-cedar-garage-door",       label: "Wooden & Cedar" },
  { href: "/garage-doors/roller-doors",                   label: "Residential Roller" },
  { href: "/garage-doors/commercial-roller-doors",        label: "Commercial Roller" },
  { href: "/garage-doors/sectional-garage-door-insulation", label: "Door Insulation" },
];
const serviceLinks = [
  { href: "/garage-services/garage-door-repairs",         label: "Repairs" },
  { href: "/garage-services/garage-door-servicing",       label: "Servicing" },
  { href: "/garage-services/garage-door-seals",           label: "Seals & Weather Strips" },
  { href: "/garage-services/garage-door-springs",         label: "Springs" },
];
const motorLinks = [
  { href: "/garage-services/garage-openers",              label: "Motors & Openers" },
  { href: "/garage-services/garage-door-remotes",         label: "Remotes" },
];

function NavDropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#C8291D] transition-colors py-2 group">
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-0 pt-2 w-56 transition-all duration-150 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
        <div className="bg-white rounded-xl shadow-card-lg border border-gray-100 py-1.5 overflow-hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FEF2F2] hover:text-[#C8291D] transition-colors"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded]   = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggle = (l: string) => setExpanded((p) => (p === l ? null : l));

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 bg-white ${scrolled ? "shadow-card" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

          {/* Logo — wordmark */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#C8291D] rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
              </svg>
            </div>
            <div>
              <span className="font-display font-800 text-[#0D1B2A] text-sm leading-none block tracking-tight">Garage Door</span>
              <span className="font-display font-700 text-[#C8291D]  text-sm leading-none block tracking-tight">Group</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            <NavDropdown label="Garage Doors"       links={doorLinks} />
            <NavDropdown label="Repairs & Servicing" links={serviceLinks} />
            <NavDropdown label="Motors & Openers"   links={motorLinks} />
            <Link href="/about-us"  className="text-sm font-medium text-gray-700 hover:text-[#C8291D] transition-colors">About</Link>
            <Link href="/articles"  className="text-sm font-medium text-gray-700 hover:text-[#C8291D] transition-colors">Articles</Link>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:021906966" className="flex items-center gap-2 text-sm font-semibold text-[#0D1B2A] hover:text-[#C8291D] transition-colors">
              <div className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-[#C8291D]" />
              </div>
              021 906 966
            </a>
            <Link href="/contact-us"
              className="bg-[#C8291D] hover:bg-[#A82219] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
              Get a quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:021906966" className="flex items-center gap-1.5 text-[#C8291D] font-semibold text-sm">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">021 906 966</span>
            </a>
            <button onClick={() => setMobileOpen((o) => !o)} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {[{ label: "Garage Doors", links: doorLinks }, { label: "Repairs & Servicing", links: serviceLinks }, { label: "Motors & Openers", links: motorLinks }].map(({ label, links }) => (
                <div key={label}>
                  <button onClick={() => toggle(label)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-[#0D1B2A]">
                    {label}
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expanded === label ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === label && (
                    <div className="pl-3 pb-2 space-y-0.5">
                      {links.map((l) => (
                        <Link key={l.href} href={l.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#C8291D]"
                          onClick={() => setMobileOpen(false)}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {[{ href: "/about-us", label: "About" }, { href: "/articles", label: "Articles" }].map((l) => (
                <Link key={l.href} href={l.href}
                  className="block py-2.5 text-sm font-semibold text-[#0D1B2A]"
                  onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 pb-2">
                <Link href="/contact-us"
                  className="block w-full text-center bg-[#C8291D] hover:bg-[#A82219] text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
