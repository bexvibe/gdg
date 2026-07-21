import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Door Spring Repair Specialists — North Auckland",
  description:
    "Professional garage door spring repair and replacement in North Auckland. Torsion and extension springs. Fast, safe, 30+ years experience. $50 off. Call 021 906 966.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-door-springs" },
};

const process = [
  "Comprehensive assessment of your entire door system",
  "Detailed diagnosis of the specific spring issue",
  "Clear explanation of the required repairs and costs",
  "Professional replacement using quality springs matched to your door",
  "Complete rebalancing of your door for optimal performance",
  "Thorough testing to ensure safe, reliable operation",
  "Maintenance recommendations to prevent future issues",
];

const signs = [
  "Slow or difficult movement when opening or closing",
  "Loud, unusual noises from the spring mechanism",
  "Door appears crooked or misaligned",
  "Jerky, uneven operation",
  "Visible gaps or separation in the spring",
  "Door won't open fully or stops halfway",
];

const faqItems = [
  { q: "Is it safe to operate a door with a broken spring?", a: "No. Stop using the door immediately and call us. A broken spring means the door has lost its counterbalance — operating it risks damage to the opener or, more seriously, the door dropping suddenly." },
  { q: "Can I replace a single spring rather than both?", a: "We strongly recommend replacing both springs at the same time. If one spring has broken, the other is likely at a similar age and tension fatigue — replacing both ensures balanced operation and prevents a second failure soon after." },
  { q: "How long do garage door springs last?", a: "Most springs are rated for 10,000–20,000 cycles. For a door opened twice a day, that's roughly 7–14 years. Regular servicing can help identify spring fatigue before failure." },
  { q: "Why shouldn't I replace springs myself?", a: "Garage door springs are under extreme tension — a broken spring releases a large amount of stored energy suddenly. Incorrect replacement without proper tools and training is extremely dangerous. Always use a professional." },
  { q: "How quickly can you replace springs?", a: "We prioritise spring repairs as urgent work. Call us on 021 906 966 and we'll aim to get to you as quickly as possible." },
];

export default function SpringsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Repairs & Servicing" }, { label: "Springs" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Urgent? Call now</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Door Spring Repair Specialists
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            A broken garage door spring is one of the most common — and most dangerous — garage door problems. Don&apos;t attempt to operate the door or replace springs yourself. Call us.
          </p>
          <p className="text-green-300 font-medium mb-8">$50 off your garage door spring repair or replacement</p>
          <a href="tel:021906966" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Call 021 906 966 now
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5 signs your springs need attention</h2>
            <ul className="space-y-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-red-100 text-brand-red rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Spring types we service</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Torsion springs</h3>
                <p className="text-sm text-gray-600">The most common type on modern garage doors. Mounted horizontally above the door opening on a shaft. Known for strength, durability and smooth, consistent balance.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Extension springs</h3>
                <p className="text-sm text-gray-600">Typically found on older garage doors. Run perpendicular to the door along the horizontal tracks. Stretch and contract as the door moves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Our spring repair process</h2>
          <ol className="space-y-3">
            {process.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <span className="text-sm text-gray-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-services/garage-door-springs"
            heading="Request a spring repair"
            subheading="For urgent jobs call 021 906 966 directly. Otherwise fill in the form and we'll get back to you."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
