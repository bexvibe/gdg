import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Professional Garage Door Seals & Weather Stripping | North Auckland",
  description:
    "Garage door seals and weather stripping supply and installation in North Auckland. Keep out rain, wind, dust and pests. Free quotes from Garage Door Group.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-door-seals" },
};

const sealTypes = [
  { name: "Bottom seal (astragal)", desc: "Runs along the base of the door and compresses against the floor when closed — the primary defence against water, wind, dust and pests." },
  { name: "Side seals", desc: "Brush or rubber seals running vertically on each side of the door frame, sealing the gap between door edges and the frame." },
  { name: "Top seal", desc: "A horizontal seal along the top of the door opening, preventing wind and rain from entering from above." },
  { name: "Panel seals", desc: "Seals fitted between sectional panels to prevent wind-driven rain from penetrating between sections." },
];

const faqItems = [
  { q: "How do I know if my garage door seals need replacing?", a: "Signs include drafts, water pooling inside the garage after rain, visible cracks or tears in the rubber, pests entering the garage, or daylight visible around the door edges when closed." },
  { q: "How often do seals need replacing?", a: "Rubber seals typically last 5–10 years, though UV exposure and temperature cycles in North Auckland can accelerate wear. Coastal properties may see faster deterioration." },
  { q: "Can you replace seals on any door type?", a: "Yes — we supply and fit replacement seals for all common garage door types including sectional, roller, and tilt doors." },
  { q: "Can I just buy the seal and fit it myself?", a: "Some bottom seals are DIY-friendly. However, for best results — especially on older doors with worn frames — professional fitting ensures a proper seal. Contact us to discuss your situation." },
];

export default function SealsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Repairs & Servicing" }, { label: "Seals & Weather Stripping" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Keep the elements out</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Door Seals & Weather Stripping
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Worn or damaged door seals let in rain, wind, dust and pests. We supply and fit replacement seals for all garage door types across North Auckland — a quick, affordable fix with big results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Types of garage door seals</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {sealTypes.map((s) => (
              <div key={s.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-services/garage-door-seals"
            heading="Get a quote on new seals"
            subheading="Tell us about your door and we'll sort the right seal for you."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
