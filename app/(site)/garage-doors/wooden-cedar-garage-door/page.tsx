import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Premium Wooden & Cedar Garage Doors | North Auckland",
  description:
    "Hand-crafted wooden and cedar garage doors for North Auckland homes. Timeless aesthetic, natural insulation, fully customisable. Free quotes from Garage Door Group.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/wooden-cedar-garage-door" },
};

const features = [
  { title: "Timeless aesthetic", desc: "Natural wood has an enduring appeal that complements traditional, heritage and bungalow-style homes beautifully." },
  { title: "Natural insulation", desc: "Timber provides natural insulating properties — warmer in winter and cooler in summer without the need for added insulation products." },
  { title: "Fully customisable", desc: "Cedar and timber doors can be custom-designed in size, panel configuration, finish and colour to match your home exactly." },
  { title: "Adds kerb appeal", desc: "A quality wooden door is a standout feature — increasing the visual appeal and resale value of your home." },
];

const maintenance = [
  "Inspect and reseal or repaint every 2–3 years depending on sun and weather exposure",
  "Wash with mild detergent and soft brush to remove dirt and mould",
  "Check and lubricate hinges, rollers and springs annually",
  "Coastal properties should rinse hardware with fresh water regularly",
];

const faqItems = [
  { q: "How much maintenance does a wooden door require?", a: "More than steel or aluminium. We recommend inspecting and resealing or repainting wooden doors every 2–3 years, and lubricating all hardware annually. Coastal properties may need more frequent attention." },
  { q: "Can cedar doors be automated?", a: "Yes — cedar and wooden doors can be fitted with a motorised opener system for convenient, automated operation." },
  { q: "Are wooden doors suitable for coastal properties?", a: "Wooden doors can work near the coast, but require more frequent maintenance. We generally recommend aluminium as the lower-maintenance alternative for coastal homes." },
  { q: "Can I get a custom-sized wooden door?", a: "Yes. We work with Auckland manufacturers who can produce custom-sized wooden and cedar doors to fit non-standard openings." },
];

export default function WoodenCedarDoorPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Wooden & Cedar Doors" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Natural warmth & character</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Premium Wooden & Cedar Garage Doors
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Add natural warmth and lasting character to your home&apos;s exterior. Our wooden and cedar doors are hand-crafted, fully customisable and a genuine standout for heritage and traditional homes.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Book a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why choose wood?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Maintenance requirements</h2>
          <p className="text-gray-600 mb-4">Wooden doors require more care than steel or aluminium, but many homeowners feel the look is worth it. Here&apos;s what to expect:</p>
          <ul className="space-y-3">
            {maintenance.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-brand-red mt-0.5 shrink-0">✓</span>
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic">
            Tip: If you love the wood look but want lower maintenance, ask us about Flat Woodgrain or Pressed Panel steel doors — they replicate the timber aesthetic without the upkeep.
          </p>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/wooden-cedar-garage-door"
            heading="Enquire about wooden & cedar doors"
            subheading="Tell us about your home and we'll discuss the right style and finish."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
