import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Affordable Roller Garage Doors for North Auckland Homes",
  description:
    "Residential roller garage doors — space-saving, affordable and available in the full COLORSTEEL® range. Perfect for limited headroom. Installed throughout North Auckland. Free quotes.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/roller-doors" },
};

const whyRoller = [
  { title: "Maximise garage space", desc: "Roller doors roll up vertically into a compact coil, freeing up ceiling space — perfect when the gap between door opening and ceiling is restricted." },
  { title: "Affordable option", desc: "Roller doors are definitely the budget-friendly choice compared with sectional steel or aluminium doors — without compromising on security or durability." },
  { title: "Customisable style", desc: "Choose from the full COLORSTEEL® palette, or premium powdercoat finishes. Match your cladding or trim for a seamless modern façade." },
  { title: "Modern automation", desc: "Quiet, reliable motor systems with safety sensors. Remote control or phone-based smart openers available." },
];

const colorsteelRoller = [
  "Threadbow White", "Titania", "Desert Sand", "Lignite", "Ebony",
  "Zincalume (metallic)", "Sandstone Grey", "Grey Friars", "New Denim Blue",
  "Windsor Grey (LG)", "Mist Green", "Permanent Green", "Karaka", "Iron Sand",
  "Pioneer Red", "Scoria", "Gull Grey", "FlaxPod", "Windsor Grey",
];

const faqItems = [
  { q: "Are roller doors suitable for limited headroom?", a: "Yes — roller doors are specifically designed for garages with limited headroom between the door opening and the ceiling. They need very little clearance compared with sectional doors." },
  { q: "What drives the roller door — chain or motor?", a: "Chain drive is available for doors above 2.4m height. Electric motor automation is available on all sizes — we recommend motorising for convenience and safety." },
  { q: "Can roller doors be insulated?", a: "Standard roller doors do not include insulation. If thermal or acoustic performance is a priority, we'd recommend looking at insulated sectional doors instead." },
  { q: "What colours are roller doors available in?", a: "We offer the full COLORSTEEL® range plus premium powdercoat finishes. See the colour list above." },
  { q: "How long does installation take?", a: "A standard roller door installation typically takes 2–4 hours including motor setup." },
];

export default function RollerDoorsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Residential Roller Doors" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Space-saving & affordable</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Space-saving Roller Garage Doors for North Auckland homes
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Roller garage doors offer the perfect combination of functionality, security and value. We install many roller doors every week — from the Harbour Bridge up to Mangawhai.
          </p>
          <p className="text-gray-400 mb-8">COLORSTEEL® and powdercoat finishes. Full automation available.</p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Why choose roller garage doors?</h2>
          <p className="text-gray-500 text-center mb-10">Roller doors are a popular choice for our North Auckland customers — practical, affordable and great-looking.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyRoller.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">COLORSTEEL® roller door colours</h2>
          <p className="text-gray-500 mb-8">Choose from our standard COLORSTEEL® range or premium powdercoat to match your home.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {colorsteelRoller.map((colour) => (
              <span key={colour} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                {colour}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">What areas do we cover?</h2>
          <p className="text-gray-600 mb-4">We supply and install residential roller garage doors everywhere in North Auckland and Rodney — from the Harbour Bridge to Mangawhai.</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Warkworth & surrounds", "Mangawhai coastal areas", "Silverdale & Hibiscus Coast", "Rural North Auckland", "Orewa & Red Beach", "Milldale & Millwater"].map((area) => (
              <li key={area} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-brand-red">✓</span> {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/roller-doors"
            heading="Get a free quote on a roller door"
            subheading="One of our technicians will get in touch to answer questions and arrange a free measure."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
