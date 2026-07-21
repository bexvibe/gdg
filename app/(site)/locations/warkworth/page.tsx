import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Doors Warkworth | Installation, Repairs & Servicing",
  description:
    "Garage Door Group provides professional garage door installation, repairs and servicing throughout Warkworth, Matakana, Snells Beach and surrounding areas. Call 021 906 966.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/locations/warkworth" },
};

const doorTypes = [
  { name: "Sectional Garage Doors", desc: "Our most popular option — versatile, affordable and space-efficient with no swing-out required. Available with insulation and in all COLORSTEEL® colours." },
  { name: "Aluminium Garage Doors", desc: "Premium look with excellent corrosion resistance. Ideal for coastal lifestyle properties around Matakana and Snells Beach." },
  { name: "Wooden & Cedar Doors", desc: "Adds natural warmth and character. Timeless aesthetic that suits traditional and lifestyle-block homes." },
  { name: "Residential Roller Doors", desc: "Ideal for homes with limited headroom or driveway space. Vertical rolling action saves space and is cost-effective." },
  { name: "Commercial Roller Doors", desc: "For workshops, warehouses and farm sheds. NZ-made heavy gauge steel. Openings up to 4.5m high × 4.8m wide." },
];

const repairs = [
  "Spring replacements (torsion or extension springs)",
  "Cable and track repairs",
  "Motor and opener servicing",
  "Door realignment and panel repairs",
  "Preventative maintenance",
  "Weather seal replacement",
];

const faqItems = [
  { q: "How quickly can you attend repairs in Warkworth?", a: "We prioritise urgent repair work wherever possible. Call Chris on 021 906 966 for urgent jobs and we'll aim to get to you as soon as possible." },
  { q: "Do you service rural and lifestyle block properties?", a: "Yes — we regularly service lifestyle blocks and rural properties around Warkworth and Matakana, including wind-rated doors, larger shed openings and robust doors for dust and weather exposure." },
  { q: "What areas near Warkworth do you cover?", a: "We service Warkworth, Matakana, Snells Beach, Point Wells, Omaha, Leigh, Pakiri and surrounding rural areas." },
];

export default function WarkworthPage() {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Door Installation & Repairs — Warkworth",
    provider: {
      "@type": "LocalBusiness",
      name: "Garage Door Group",
      telephone: "+64-21-906-966",
    },
    areaServed: { "@type": "Place", name: "Warkworth, Matakana, Snells Beach, North Auckland" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumb crumbs={[{ label: "Locations" }, { label: "Warkworth" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Warkworth & surrounds</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Doors Warkworth
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Garage Door Group provides professional garage door installation, repairs and servicing throughout Warkworth and surrounding areas including Matakana, Snells Beach, Point Wells and surrounding rural lifestyle properties.
          </p>
          <p className="text-gray-400 mb-8">Locally owned &bull; 30+ years experience &bull; 5-star rated</p>
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

      {/* Installation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Garage door installation in Warkworth</h2>
          <p className="text-gray-600 mb-8">We supply and install the full range of residential and commercial garage doors — designed to perform in Northland conditions including humidity, salt exposure and rural environments.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doorTypes.map((d) => (
              <div key={d.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repairs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Garage door repairs & servicing in Warkworth</h2>
            <p className="text-gray-600 mb-4">Garage door not opening properly? Making an unusual noise? Remote not responding? We provide prompt, professional repairs across the wider Warkworth region.</p>
            <ul className="space-y-2">
              {repairs.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-red mt-0.5">✓</span> {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Rural & lifestyle properties</h2>
            <p className="text-gray-600 mb-4">We regularly service lifestyle blocks and rural properties around Warkworth and Matakana that require:</p>
            <ul className="space-y-2">
              {["Wind-rated doors for exposed sites", "Larger shed openings", "Robust doors for dust and weather exposure", "Coastal and high-humidity environments"].map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-red mt-0.5">✓</span> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why choose Garage Door Group in Warkworth?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Local knowledge", desc: "Locally owned and operated — comprehensive knowledge of the right products for North Auckland conditions." },
              { title: "30+ years experience", desc: "5-star rated. Our team gets it right the first time." },
              { title: "$150 off new installations", desc: "Competitive rates with a current $150 discount on all new door installations." },
              { title: "Talk to Chris directly", desc: "No call centres — fast, direct and honest communication with the owner." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/locations/warkworth"
            heading="Get in touch — Warkworth area"
            subheading="We'll get back to you within 24 hours to discuss your requirements."
          />
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 text-sm">
            Also providing garage door services nearby in{" "}
            <Link href="/locations/silverdale" className="text-brand-red hover:underline">Silverdale</Link> and{" "}
            <Link href="/locations/mangawhai" className="text-brand-red hover:underline">Mangawhai</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
