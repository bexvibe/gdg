import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Door Insulation — InsulPro Installation & Retrofit | North Auckland",
  description:
    "Garage door insulation services in North Auckland. InsulPro factory-fit and retrofit to existing sectional doors. Regulate temperature, reduce noise. Free quotes from Garage Door Group.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-doors/sectional-garage-door-insulation" },
};

const benefits = [
  "A more moderate garage temperature year-round",
  "A more energy efficient space",
  "A quieter garage — 2-way insulation barrier muffling sound in and out",
  "Garage door operating noise greatly reduced",
  "InsulPro insulation has a warm, carpet-like finish — enhances the feel of the garage",
];

const faqItems = [
  { q: "Can you insulate my existing garage door?", a: "Most existing sectional garage doors can be retrofitted with InsulPro insulation. We take exact measurements and custom-fit the insulation on site. It sometimes requires a spring swap to rebalance the door — we'll assess this during our visit." },
  { q: "What is InsulPro insulation?", a: "InsulPro is a premium insulation product with a warm, carpet-like finish. It's custom-fitted to each door panel and dramatically reduces heat transfer and operating noise." },
  { q: "Will insulation make my door noticeably quieter?", a: "Yes — insulation acts as a 2-way sound barrier, muffling noise coming in from outside as well as the operating noise of the door itself. Particularly useful for early morning or late-night operation." },
  { q: "Is insulation included on new doors?", a: "Our COLORSTEEL® sectional doors and most other sectional models have an insulation option. Factory-fitted insulation is applied at the point of manufacture for the best result." },
  { q: "How much does garage door insulation cost?", a: "Cost depends on the size of your door and whether it's a new installation or retrofit. Contact us for a free, no-obligation quote." },
];

export default function InsulationPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Garage Doors", href: "/garage-doors" }, { label: "Door Insulation" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">New & retrofit</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Door Insulation — Stay comfortable year-round
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Your garage door covers 25–30% of your home&apos;s façade and is an excellent conductor of heat and cold. Insulating it keeps winter cold out, summer heat at bay, and noise in or out — year-round comfort.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How does insulation help?</h2>
            <p className="text-gray-600 mb-4">
              Most modern homes are well insulated and double-glazed — but the garage door often misses out. No wonder the garage feels like a freezer in winter and a sauna in summer.
            </p>
            <p className="text-gray-600 mb-4">
              By insulating your garage door, you regulate heat transfer — keeping winter cold outside and summer heat at bay. The result is a more moderate temperature year-round, a quieter space, and a more comfortable garage.
            </p>
            <p className="text-gray-600">
              Sound transfer is also greatly improved: insulation acts as a 2-way barrier, muffling noise going in and out — ideal when living near a busy road, or using the garage as a workshop.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Benefits at a glance</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-brand-red mt-0.5 shrink-0 font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-brand-dark mb-3">New doors with insulation</h3>
            <p className="text-sm text-gray-600">
              Our COLORSTEEL® doors and the majority of our sectional range have an insulation option. These doors are custom-fitted with InsulPro insulation at the factory before delivery — the best result possible.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-brand-dark mb-3">Retrofit your existing door</h3>
            <p className="text-sm text-gray-600">
              Your current sectional garage door can most likely be retrofitted with InsulPro insulation. We take exact measurements and custom-fit the insulation on site. It sometimes requires swapping out a spring to rebalance the door. Contact us for a free quote.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-doors/sectional-garage-door-insulation"
            heading="Get a free insulation quote"
            subheading="Tell us about your door and we'll assess the best insulation option for you."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
