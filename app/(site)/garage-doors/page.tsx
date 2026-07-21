import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Garage Door Installation for North Auckland Homes",
  description:
    "Professional garage door installation in North Auckland. Sectional ColorSteel, aluminium, wooden/cedar, residential and commercial roller doors. Free no-obligation quotes. $150 off.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors" },
};

const doors = [
  {
    name: "Sectional ColorSteel Doors",
    href: "/garage-doors/sectional-garage-door",
    desc: "Our most popular option — durable, versatile and available in 19 colours. No swing-out required, ideal for tight driveways. Insulation available.",
    bullets: [
      "19 COLORSTEEL® colours",
      "Premium insulation option",
      "From $1,590 + GST automated",
      "30+ year steel warranty",
    ],
  },
  {
    name: "Aluminium Doors",
    href: "/garage-doors/aluminium-garage-door",
    desc: "A premium, contemporary look with excellent corrosion resistance — ideal for coastal North Auckland properties.",
    bullets: [
      "Rust and corrosion resistant",
      "Minimal maintenance required",
      "Custom architectural options",
      "Perfect for coastal homes",
    ],
  },
  {
    name: "Wooden & Cedar Doors",
    href: "/garage-doors/wooden-cedar-garage-door",
    desc: "Add natural warmth and character with a hand-crafted wooden or cedar door. Timeless, customisable, and a standout kerb appeal upgrade.",
    bullets: [
      "Natural insulation properties",
      "Custom design options",
      "Timeless aesthetic",
      "Suits weatherboard & heritage homes",
    ],
  },
  {
    name: "Residential Roller Doors",
    href: "/garage-doors/roller-doors",
    desc: "Space-saving and cost-effective — the ideal choice when headroom is limited. Fully automated with remote or phone control.",
    bullets: [
      "Ideal for limited headroom",
      "Budget-friendly option",
      "Full COLORSTEEL® palette",
      "Secure and weather-resistant",
    ],
  },
  {
    name: "Commercial Roller Doors",
    href: "/garage-doors/commercial-roller-doors",
    desc: "Heavy-duty New Zealand steel roller doors for workshops, warehouses and farm buildings. Openings up to 4.5m high × 4.8m wide.",
    bullets: [
      "NZ-made heavy gauge steel",
      "Openings up to 4.5m × 4.8m",
      "Wind-rated options available",
      "Suitable for rural & industrial",
    ],
  },
  {
    name: "Door Insulation",
    href: "/garage-doors/sectional-garage-door-insulation",
    desc: "InsulPro insulation retrofitted to your existing sectional door — regulate temperature, reduce noise, and improve comfort year-round.",
    bullets: [
      "Retrofit to existing doors",
      "Warm carpet-like finish inside",
      "2-way noise barrier",
      "Helps reduce energy costs",
    ],
  },
];

const whyMatters = [
  { title: "Increase home value", desc: "A new garage door is one of the highest-ROI improvements you can make to your home's exterior." },
  { title: "Versatile extra room", desc: "Insulated and automated doors turn your garage into a usable space — workshop, gym, playroom or storage." },
  { title: "Safe and secure storage", desc: "Modern doors with robust locks and motorised sensors keep your vehicles and belongings secure." },
  { title: "Save on energy costs", desc: "An insulated door reduces heat transfer, keeping your garage at a more stable temperature year-round." },
];

const colorsteelColours = [
  "Titania", "Calico", "Desert Sand", "Lignite", "Ebony", "Sandstone Grey",
  "Silver", "Grey Friars", "New Denim Blue", "Mist Green", "Rivergum",
  "Permanent Green", "Karaka", "Iron Sand", "Scoria", "Dark Cedar",
  "Gull Grey", "FlaxPod", "Windsor Grey",
];

const faqItems = [
  { q: "How much does a new garage door cost?", a: "New automated ColorSteel sectional doors start from $1,590 + GST. Roller doors are generally the most affordable option. Aluminium and cedar doors vary depending on size and customisation. We offer free, no-obligation quotes." },
  { q: "How long does installation take?", a: "A straightforward single door installation including motor typically takes under 3 hours. Larger or more complex doors can take most of a day." },
  { q: "Do you offer insulation?", a: "Yes. Most of our sectional door range includes an InsulPro insulation option. We can also retrofit insulation to many existing sectional doors." },
  { q: "What COLORSTEEL colours are available?", a: "We offer 19 COLORSTEEL® colours including Titania, Ebony, Sandstone Grey, New Denim Blue, Iron Sand, and more. Custom powdercoat colours are also available." },
  { q: "Do your doors come with automation?", a: "Yes. All new doors can be fitted with a quiet, reliable motor system including remote control and safety sensors. Phone-based smart openers are also available." },
];

export default function GarageDoorsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagedoorgroup.co.nz" },
      { "@type": "ListItem", position: 2, name: "Garage Doors", item: "https://www.garagedoorgroup.co.nz/garage-doors" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb crumbs={[{ label: "Garage Doors" }]} />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">New installations</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Premium garage door installation for North Auckland homes
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            We supply and install the full range of residential and commercial garage doors — from budget roller doors to premium cedar and aluminium. Free measure and quote. $150 off your new door.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>

      {/* Door types grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Our door range</h2>
          <p className="text-gray-500 text-center mb-10">Choose from our full range — or book a free measure and quote and we&apos;ll help you find the right fit.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doors.map((door) => (
              <div key={door.href} className="border border-gray-200 rounded-xl p-6 flex flex-col">
                <h3 className="font-bold text-brand-dark text-lg mb-2">{door.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{door.desc}</p>
                <ul className="space-y-1 mb-5">
                  {door.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-brand-red">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <Link href={door.href} className="flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline">
                  See the {door.name} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-10 text-center">Why your new garage door matters</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyMatters.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLORSTEEL colours */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">COLORSTEEL® colour range</h2>
          <p className="text-gray-500 mb-8">19 colours to match your home&apos;s exterior — or choose a custom powdercoat.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {colorsteelColours.map((colour) => (
              <span key={colour} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full border border-gray-200">
                {colour}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CtaBanner />
    </>
  );
}
