import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ServiceAreaList from "@/components/ServiceAreaList";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Expert Sectional Garage Door Installation | North Auckland",
  description:
    "Premium sectional garage doors for North Auckland homes. ColorSteel, insulation, and automation options. 30+ years experience. Free quotes. $150 off. Warkworth, Silverdale, Mangawhai.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/sectional-garage-door" },
};

const models = [
  { name: "Flatline Smooth Panel .95mm Heavy Gauge Steel", desc: "Our premium door — made from .95mm heavy gauge steel. Maximum durability and a sleek, modern look." },
  { name: "Smooth Panel .75mm", desc: "An affordable yet stylish option. We recommend adding insulation for extra rigidity and comfort." },
  { name: "Flat Woodgrain", desc: "A modern minimalistic woodgrain design — popular on new builds and contemporary homes." },
  { name: "Pressed Panel", desc: "A classic pressed woodgrain look that never goes out of style." },
  { name: "Ribline", desc: "One of our most timeless and versatile options — suits a wide range of architectural styles." },
  { name: "Fineline", desc: "A modern take on the Ribline design with a clean, architectural finish." },
];

const colorsteelColours = [
  "Titania", "Calico", "Desert Sand", "Lignite", "Ebony", "Sandstone Grey",
  "Silver", "Grey Friars", "New Denim Blue", "Mist Green", "Rivergum",
  "Permanent Green", "Karaka", "Iron Sand", "Scoria", "Dark Cedar",
  "Gull Grey", "FlaxPod", "Windsor Grey",
];

const benefits = [
  { title: "Versatile design", desc: "No swing-out required — maximises your driveway space. Sections fold up neatly inside the garage." },
  { title: "Low cost of ownership", desc: "Energy-efficient, minimal maintenance and backed by a 30+ year ColorSteel® material warranty." },
  { title: "Long-term peace of mind", desc: "Enhanced weather sealing and robust security keep your garage and everything inside safe." },
];

const faqItems = [
  { q: "What styles of sectional doors do you offer?", a: "We offer Flatline Smooth Panel (.95mm and .75mm), Flat Woodgrain, Pressed Panel, Ribline, and Fineline designs — covering modern to classic architectural styles." },
  { q: "Can sectional doors be insulated?", a: "Yes. Most models include a premium Autex/InsulPro insulation option that helps regulate temperature and reduce operating noise." },
  { q: "What colours are available?", a: "All 19 COLORSTEEL® colours are available, plus custom powdercoat options. We'll help you match your home's existing cladding or trim." },
  { q: "Do sectional doors come with automation?", a: "Yes — all our sectional doors can be fitted with a quiet, reliable motor system with remote and smart-phone control options." },
  { q: "How long does installation take?", a: "A standard single door with motor typically takes under 3 hours. Larger doors may take up to a full day." },
];

export default function SectionalDoorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.garagedoorgroup.co.nz" },
      { "@type": "ListItem", position: 2, name: "Garage Doors", item: "https://www.garagedoorgroup.co.nz/garage-doors" },
      { "@type": "ListItem", position: 3, name: "Sectional Garage Doors", item: "https://www.garagedoorgroup.co.nz/garage-doors/sectional-garage-door" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Sectional Doors" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Most popular choice</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Premium Sectional Garage Doors for North Auckland homes
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Sectional garage doors offer the perfect blend of style, functionality and durability. Space-efficient, fully automated and available in 19 COLORSTEEL® colours.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Book a free quote
          </Link>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Available door models</h2>
          <p className="text-gray-600 mb-8">All models are available in the full COLORSTEEL® palette with insulation and automation options.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {models.map((m) => (
              <div key={m.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-1">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customisation */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Customisation options</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-dark mb-2">Colour</h3>
              <p className="text-sm text-gray-600 mb-4">Choose from the full 19-colour COLORSTEEL® range, or specify a custom powdercoat colour to match your home perfectly.</p>
              <div className="flex flex-wrap gap-1.5">
                {colorsteelColours.slice(0, 8).map((c) => (
                  <span key={c} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c}</span>
                ))}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">+ 11 more</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-dark mb-2">Insulation</h3>
              <p className="text-sm text-gray-600">Premium InsulPro insulation keeps your garage cooler in summer, warmer in winter and quieter year-round. Factory-fitted or retrofit to existing doors.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-dark mb-2">Windows</h3>
              <p className="text-sm text-gray-600">Add rectangular glass panels with frosted or clear options to bring natural light into your garage while maintaining privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why choose sectional?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <h3 className="font-semibold text-brand-dark mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      {/* Contact form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/sectional-garage-door"
            heading="Get a free quote on a sectional door"
            subheading="We'll measure up, discuss your options and give you a no-obligation quote."
          />
        </div>
      </section>

      <ServiceAreaList />
      <CtaBanner />
    </>
  );
}
