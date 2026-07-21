import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Premium Aluminium Garage Doors in North Auckland",
  description:
    "Aluminium garage doors for coastal North Auckland homes. Corrosion resistant, low maintenance and available in custom architectural options. Free quotes. Garage Door Group.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/aluminium-garage-door" },
};

const features = [
  { title: "Corrosion resistant", desc: "Aluminium doesn't rust — the ideal choice for coastal properties exposed to salt air around the Hibiscus Coast, Mangawhai and Orewa." },
  { title: "Minimal maintenance", desc: "A simple wash-down periodically is all that's needed to keep an aluminium door looking its best for decades." },
  { title: "Contemporary look", desc: "Clean lines and premium finishes make aluminium doors a standout choice for modern and architecturally-designed homes." },
  { title: "Custom options", desc: "Available in standard flat panel or custom architectural configurations to suit your home's design." },
  { title: "Lightweight & efficient", desc: "Aluminium's low weight reduces strain on motors and springs, extending system longevity." },
  { title: "Automation ready", desc: "All aluminium doors can be fitted with quiet, reliable motor systems including remote and smart-phone control." },
];

const faqItems = [
  { q: "Are aluminium doors suitable for coastal areas?", a: "Yes — aluminium is an excellent choice for coastal properties as it doesn't rust or corrode. We recommend regular washing with fresh water to remove salt deposits." },
  { q: "Can aluminium doors be insulated?", a: "Yes, insulation can be added to aluminium doors. Contact us to discuss the options available for your specific door model." },
  { q: "What finishes are available?", a: "We offer a range of powder-coated colour finishes. Custom architectural configurations are also available — contact us to discuss your requirements." },
  { q: "Do aluminium doors come with a motor?", a: "Yes, all new door installations include the option for a quiet, reliable automated motor system with remote and sensor technology." },
];

export default function AluminiumDoorPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Aluminium Doors" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Premium & coastal-ready</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Premium Aluminium Garage Doors in North Auckland
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            A premium, contemporary look with excellent corrosion resistance. The ideal garage door choice for coastal North Auckland and Hibiscus Coast properties.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Book a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why choose aluminium?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ideal for coastal North Auckland</h2>
          <p className="text-gray-600 leading-relaxed">
            Properties along the Hibiscus Coast, in Orewa, Whangaparaoa, Mangawhai Heads and other coastal areas face unique challenges — salt air accelerates corrosion on steel products. Aluminium garage doors are naturally corrosion-resistant, making them the smart long-term investment for homes near the water. Pair with regular fresh-water rinse-downs and your door will look great for decades.
          </p>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/aluminium-garage-door"
            heading="Get a free quote on an aluminium door"
            subheading="Tell us about your property and we'll recommend the right option."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
