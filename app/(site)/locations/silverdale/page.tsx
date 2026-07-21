import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Doors Silverdale | Installation, Repairs & Servicing",
  description:
    "Garage Door Group provides garage door installation, repairs and servicing throughout Silverdale, Millwater, Orewa, Red Beach and Milldale. Free quotes. Call 021 906 966.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/locations/silverdale" },
};

const faqItems = [
  { q: "Do you work on new build homes in Silverdale?", a: "Yes — we work extensively on new subdivisions in Silverdale, Milldale and Millwater. We can work directly with your builder or be engaged by the homeowner." },
  { q: "What areas near Silverdale do you cover?", a: "We service Silverdale, Millwater, Milldale, Orewa, Red Beach, Stillwater and the wider Hibiscus Coast area." },
  { q: "How quickly can you attend repairs in Silverdale?", a: "We aim to respond to urgent repairs as quickly as possible. Call Chris on 021 906 966 for urgent jobs." },
];

export default function SilverdalePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Locations" }, { label: "Silverdale" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Silverdale & Hibiscus Coast</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Doors Silverdale
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Garage Door Group provides garage door installation, repairs and servicing throughout Silverdale, Millwater, Orewa, Red Beach and Milldale — including new subdivision developments.
          </p>
          <p className="text-gray-400 mb-8">Experienced in new builds &bull; 30+ years trade &bull; 5-star rated</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
              Get a free quote
            </Link>
            <a href="tel:021906966" className="border-2 border-white text-white font-semibold px-6 py-3.5 rounded-md hover:bg-white hover:text-brand-dark transition-colors">
              Call 021 906 966
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Garage door installation in Silverdale</h2>
          <p className="text-gray-600 mb-8">We supply and install a wide range of residential garage doors throughout Silverdale and the Hibiscus Coast — including the fast-growing new subdivisions of Milldale and Millwater.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Sectional ColorSteel", desc: "Our most popular option — versatile, affordable and space-efficient with no swing-out required." },
              { name: "Aluminium Doors", desc: "Perfect for coastal properties with a premium look and feel. Corrosion resistant and low maintenance." },
              { name: "Wooden & Cedar", desc: "Adds natural warmth and character. Suits the character homes in older Silverdale areas." },
              { name: "Residential Roller Doors", desc: "Ideal for homes with limited headroom or driveway space. Cost-effective and space-saving." },
              { name: "Commercial Roller Doors", desc: "For workshops, warehouses and commercial buildings in the Silverdale business area." },
              { name: "Door Insulation", desc: "Factory-fitted or retrofit InsulPro insulation for new and existing sectional doors." },
            ].map((d) => (
              <div key={d.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Repairs & servicing in Silverdale</h2>
          <p className="text-gray-600 mb-6">We offer fast, professional repairs and regular servicing across Silverdale and the Hibiscus Coast.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Cable and track repairs", "Track and cable faults", "Motor and remote issues", "Door misalignment", "Spring replacement", "Preventative maintenance"].map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-brand-red mt-0.5">✓</span> {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/locations/silverdale"
            heading="Get in touch — Silverdale area"
            subheading="We'll get back to you within 24 hours to discuss your requirements."
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 text-sm">
            Also providing garage door services in{" "}
            <Link href="/locations/warkworth" className="text-brand-red hover:underline">Warkworth</Link> and{" "}
            <Link href="/locations/mangawhai" className="text-brand-red hover:underline">Mangawhai</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
