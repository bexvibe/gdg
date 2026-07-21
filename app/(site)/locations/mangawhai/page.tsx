import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Doors Mangawhai | Installation, Repairs & Servicing",
  description:
    "Garage Door Group provides professional garage door installation, repairs and servicing throughout Mangawhai, Mangawhai Heads and surrounding coastal areas. Call 021 906 966.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/locations/mangawhai" },
};

const faqItems = [
  { q: "Do you service Mangawhai Heads?", a: "Yes — we service both Mangawhai and Mangawhai Heads, including holiday homes and permanent residences." },
  { q: "Are your door systems suitable for coastal conditions?", a: "Yes. We supply aluminium and coastal-rated steel doors specifically suited to salt air environments. We also offer annual Seaside Protection service plans for coastal properties." },
  { q: "Do you service holiday homes in Mangawhai?", a: "Yes — we regularly service holiday properties in Mangawhai. We can arrange seasonal checks and maintenance visits to ensure your door is ready for use." },
  { q: "What areas near Mangawhai do you cover?", a: "We service Mangawhai, Mangawhai Heads, Langs Beach, Kaiwaka and surrounding rural areas." },
];

export default function MangawhaiPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Locations" }, { label: "Mangawhai" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Mangawhai & surrounds</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Doors Mangawhai
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Professional garage door installation, servicing and repairs throughout Mangawhai, Mangawhai Heads and surrounding rural properties. Specialists in coastal and holiday home garage door systems.
          </p>
          <p className="text-gray-400 mb-8">Systems designed for salt air, wind exposure and seasonal usage</p>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Garage door installation in Mangawhai</h2>
            <p className="text-gray-600 mb-4">We supply and install a wide range of garage doors for beach homes, architectural builds and lifestyle blocks in the Mangawhai area.</p>
            <p className="text-gray-600 mb-4">Our coastal-rated aluminium doors and galvanised steel systems are specifically suited to the salt air and wind exposure in the Mangawhai environment.</p>
            <ul className="space-y-2">
              {["Aluminium doors — corrosion resistant, low maintenance", "Sectional ColorSteel with coastal treatment", "Residential and commercial roller doors", "Insulated doors for beach homes used year-round"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-red mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Coastal & holiday property specialists</h2>
            <p className="text-gray-600 mb-4">Mangawhai&apos;s popularity as a coastal destination means many properties have seasonal usage patterns. We offer:</p>
            <ul className="space-y-2">
              {[
                "Annual Seaside Protection service plans ($229 + GST)",
                "Broken spring, cable and track repairs",
                "Motor failure diagnosis and repair",
                "Seasonal fault checking for holiday homes",
                "Full safety servicing before peak season",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-red mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why choose Garage Door Group in Mangawhai?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Local knowledge", desc: "We understand the coastal Mangawhai environment and recommend products suited to it." },
              { title: "30+ years experience", desc: "5-star rated. Our team gets it right the first time." },
              { title: "$150 off new installations", desc: "Current offer — $150 discount on all new door installations." },
              { title: "Talk to Chris directly", desc: "Direct communication with the owner. No call centres, no waiting." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/locations/mangawhai"
            heading="Get in touch — Mangawhai area"
            subheading="We'll get back to you within 24 hours to discuss your requirements."
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 text-sm">
            Also providing garage door services in{" "}
            <Link href="/locations/warkworth" className="text-brand-red hover:underline">Warkworth</Link> and{" "}
            <Link href="/locations/silverdale" className="text-brand-red hover:underline">Silverdale</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
