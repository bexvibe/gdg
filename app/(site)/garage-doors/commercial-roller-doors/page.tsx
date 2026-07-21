import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Commercial Roller Doors | Heavy-Duty Affordable Solutions | North Auckland",
  description:
    "Commercial roller doors for workshops, warehouses and farm sheds in North Auckland. New Zealand-made heavy gauge steel. Openings up to 4.5m × 4.8m. Free quotes.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/commercial-roller-doors" },
};

const features = [
  { title: "NZ-made heavy gauge steel", desc: "Our commercial roller doors are manufactured in New Zealand from high-quality, heavy gauge steel — built to last in demanding environments." },
  { title: "Large opening capacity", desc: "We can accommodate openings up to 4.5m high × 4.8m wide. Steel shutter doors are available for even larger industrial-scale openings." },
  { title: "Wind-rated options", desc: "Rural properties and exposed sites can benefit from our wind-rated door options designed to handle North Auckland's coastal and rural conditions." },
  { title: "Low maintenance", desc: "Commercial roller doors are robust and require minimal maintenance — ideal for high-usage farm, workshop and warehouse environments." },
];

const faqItems = [
  { q: "What size openings can you accommodate?", a: "We can install commercial roller doors in openings up to 4.5m high × 4.8m wide. For larger industrial openings, we also offer steel shutter doors — contact us to discuss." },
  { q: "Are commercial roller doors suitable for farm sheds?", a: "Yes — our commercial doors are regularly installed on farm sheds, rural workshops and lifestyle blocks throughout North Auckland and Rodney." },
  { q: "Do commercial doors come with automation?", a: "Yes. Motorised openers are available and recommended for large commercial openings. We can discuss the right system for your usage requirements." },
  { q: "Are wind-rated doors available?", a: "Yes. For exposed sites or rural properties with high wind load requirements, we have wind-rated door options available." },
];

export default function CommercialRollerDoorsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Commercial Roller Doors" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Workshops, warehouses & sheds</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Commercial Roller Doors — Heavy-duty, affordable solutions
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            New Zealand-made heavy gauge steel roller doors for workshops, warehouses, farm sheds and commercial buildings. Openings up to 4.5m high × 4.8m wide. Wind-rated options available.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Built for demanding environments</h2>
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

      <FAQ items={faqItems} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/commercial-roller-doors"
            heading="Get a quote on a commercial door"
            subheading="Tell us your opening size and requirements and we'll provide a no-obligation quote."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
