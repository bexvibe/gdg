import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ServiceAreaList from "@/components/ServiceAreaList";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import ImgPlaceholder from "@/components/ImgPlaceholder";
import { ArrowRight, Wrench, DoorOpen, Zap, Shield, Settings, Radio, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Garage Door Installation, Sales & Repair | Chat With Us Today",
  description: "North Auckland's local garage door experts. New installs, repairs, servicing & openers. Serving Warkworth, Silverdale, Mangawhai & surrounds. 30+ years experience. $150 off a new door.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz" },
};

const services = [
  { icon: DoorOpen,  title: "New door installs",    href: "/garage-doors",                          desc: "Sectional, aluminium, cedar and roller doors. From $1,590 + GST automated." },
  { icon: Zap,       title: "Motors & openers",     href: "/garage-services/garage-openers",        desc: "Quiet, reliable automated openers — remote or phone control." },
  { icon: Shield,    title: "Insulation",           href: "/garage-doors/sectional-garage-door-insulation", desc: "InsulPro insulation keeps your garage cooler, warmer, and quieter year-round." },
  { icon: Wrench,    title: "Repairs",              href: "/garage-services/garage-door-repairs",   desc: "Broken springs, cables, tracks or openers fixed fast — same day where possible." },
  { icon: Settings,  title: "Servicing",            href: "/garage-services/garage-door-servicing", desc: "Prevent costly breakdowns. Service plans from $199 + GST per 18 months." },
  { icon: Radio,     title: "Remote programming",   href: "/garage-services/garage-door-remotes",   desc: "Lost or faulty remote? We replace and program — no fuss, no headaches." },
];

const doorTypes = [
  { name: "Sectional ColorSteel",  href: "/garage-doors/sectional-garage-door",            tag: "Most popular" },
  { name: "Aluminium",             href: "/garage-doors/aluminium-garage-door",             tag: "Coastal-ready" },
  { name: "Wooden & Cedar",        href: "/garage-doors/wooden-cedar-garage-door",          tag: "Timeless" },
  { name: "Residential Roller",    href: "/garage-doors/roller-doors",                      tag: "Budget-friendly" },
  { name: "Commercial Roller",     href: "/garage-doors/commercial-roller-doors",           tag: "Industrial" },
  { name: "Door Insulation",       href: "/garage-doors/sectional-garage-door-insulation",  tag: "Retrofit available" },
];

const whyUs = [
  { title: "Local knowledge",         desc: "Locally owned, serving Warkworth, Mangawhai and Silverdale. We know the products that suit North Auckland conditions." },
  { title: "30+ years experience",    desc: "5-star rated. Our team gets it right the first time — every time." },
  { title: "Free no-obligation quotes", desc: "$150 off all new door installations. $50 off your first repair or service." },
  { title: "Talk to Chris directly",  desc: "No call centres. Speak directly with the owner for fast, honest communication." },
];

const faqItems = [
  { q: "What services do you offer?",   a: "New garage door sales and installation, opener and motor installation, insulation, repairs, servicing and maintenance, and remote programming." },
  { q: "What areas do you serve?",      a: "All of North Auckland's Rodney District — Silverdale, Milldale, Millwater, Orewa, Puhoi, Warkworth, Snells Beach, Matakana, Omaha, Point Wells, Leigh, Pakiri, Wellsford, Mangawhai, Langs Beach and Kaiwaka." },
  { q: "Do you provide warranties?",    a: "Yes — we provide warranties on all products and workmanship. Contact us for specific details." },
  { q: "How long does installation take?", a: "A simple single door with motor typically takes under 3 hours. Larger installs can take most of a day." },
  { q: "How do I schedule a repair?",   a: "Call Chris on 021 906 966 or fill in the contact form. We'll arrange a convenient time and prioritise urgent repairs." },
  { q: "What prep is needed before installation?", a: "Clear the garage area and ensure clear access to electrical outlets. Our team handles everything else." },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C8291D]/10 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              North Auckland &amp; Rodney District
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-5">
              Your local garage door{" "}
              <span className="text-[#C8291D]">install &amp; repair</span>{" "}
              experts.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fast, reliable and affordable. Serving Warkworth, Silverdale, Mangawhai and everywhere in between.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-sm">5-star rated &nbsp;·&nbsp; 30+ years trade experience</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-us"
                className="flex items-center justify-center gap-2 bg-[#C8291D] hover:bg-[#A82219] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-lg">
                Chat with us today <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:021906966"
                className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors">
                📞 021 906 966
              </a>
            </div>

            <p className="mt-5 text-sm text-green-300 font-medium">
              ✓ $150 off a new door &nbsp;·&nbsp; $50 off your first repair or service
            </p>
          </div>

          <div className="hidden lg:block">
            <ImgPlaceholder label="Garage Door Group — North Auckland installation" aspect="wide"
              className="shadow-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#C8291D] font-semibold mb-2">What we do</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">Everything garage doors</h2>
            <p className="text-gray-500 mt-2 text-sm">Installation, automation, repairs and maintenance — all under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, href, desc }) => (
              <Link key={href} href={href}
                className="group bg-white border border-gray-100 hover:border-[#C8291D]/30 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 bg-red-50 group-hover:bg-[#C8291D] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-[#C8291D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-[#0D1B2A] mb-2 group-hover:text-[#C8291D] transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#C8291D] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-[#F0EEE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C8291D] font-semibold mb-3">Why work with us</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight mb-6">Local experts who get it right first time.</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Locally owned and operated — we buy direct from Auckland manufacturers who have been supplying Kiwis since 1992. All products and workmanship are backed with extensive warranties.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {whyUs.map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-5 shadow-card">
                    <h3 className="font-display font-bold text-[#0D1B2A] text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <TrustBadges />
            </div>
            <div className="space-y-3">
              <ImgPlaceholder label="Chris on a garage door installation" aspect="wide" />
              <div className="grid grid-cols-2 gap-3">
                <ImgPlaceholder label="Sectional door install" aspect="square" />
                <ImgPlaceholder label="Roller door close-up" aspect="square" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door range */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#C8291D] font-semibold mb-2">New installations</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">New automated ColorSteel doors from $1,590 + GST</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">Our sectional ColorSteel doors are the most popular choice for North Auckland homes — 19 colours, automation included.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {doorTypes.map((door) => (
              <Link key={door.href} href={door.href}
                className="group bg-[#F5F6F7] hover:bg-white border border-transparent hover:border-[#C8291D]/20 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all">
                <ImgPlaceholder label={door.name} aspect="video" className="mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block text-xs bg-red-50 text-[#C8291D] font-medium px-2 py-0.5 rounded-full mb-1.5">{door.tag}</span>
                    <h3 className="font-display font-bold text-[#0D1B2A] text-sm">{door.name}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#C8291D] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/garage-doors"
              className="inline-flex items-center gap-2 bg-[#0D1B2A] hover:bg-[#152236] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors">
              See our full door range <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Offer band */}
      <div className="bg-[#C8291D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-center sm:text-left">
              <span className="font-display font-extrabold text-white text-2xl">$150</span>
              <span className="text-red-200 text-sm ml-2">off a new garage door</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-red-400/50" />
            <div className="text-center sm:text-left">
              <span className="font-display font-extrabold text-white text-2xl">$50</span>
              <span className="text-red-200 text-sm ml-2">off your first repair &amp; service</span>
            </div>
          </div>
          <Link href="/contact-us"
            className="shrink-0 bg-white text-[#C8291D] font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-red-50 transition-colors">
            Claim offer →
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Service areas */}
      <ServiceAreaList />

      {/* Contact form */}
      <section id="contact" className="py-20 bg-[#F5F6F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-widest text-[#C8291D] font-semibold mb-3">Get in touch</p>
            <h2 className="font-display font-bold text-3xl text-[#0D1B2A] tracking-tight mb-4">Drop us a line, we reply within 24 hours.</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Tell us about your garage door and we will get back to you quickly with a no-obligation quote.</p>
            <div className="space-y-3">
              <a href="tel:021906966" className="flex items-center gap-3 text-sm font-semibold text-[#0D1B2A] hover:text-[#C8291D] transition-colors">
                <div className="w-9 h-9 bg-white rounded-xl shadow-card flex items-center justify-center text-base">📞</div>
                021 906 966
              </a>
              <a href="mailto:chris@gdgroup.co.nz" className="flex items-center gap-3 text-sm font-semibold text-[#0D1B2A] hover:text-[#C8291D] transition-colors">
                <div className="w-9 h-9 bg-white rounded-xl shadow-card flex items-center justify-center text-base">✉️</div>
                chris@gdgroup.co.nz
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-card-lg">
            <ContactForm sourcePage="/" />
          </div>
        </div>
      </section>
    </>
  );
}
