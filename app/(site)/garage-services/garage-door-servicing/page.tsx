import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Door Servicing in North Auckland — Service Plans from $199",
  description:
    "Prevent costly repairs with regular garage door servicing. Standard and coastal service plans. Warkworth, Silverdale, Mangawhai and all of North Auckland. $50 off your first service.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-door-servicing" },
};

const plans = [
  {
    name: "Standard Protection",
    price: "$199 + GST",
    frequency: "Every 18 months",
    features: [
      "Thorough inspection of all door components",
      "Spring tension check and adjustment",
      "Track and motor greasing",
      "Hardware tightening and adjustment",
      "Preventative maintenance to extend door life",
      "Safety system check",
    ],
  },
  {
    name: "Seaside Protection",
    price: "$229 + GST",
    frequency: "Every 12 months",
    features: [
      "All Standard Protection inclusions",
      "Salt and corrosion protection treatment",
      "Weather sealant application",
      "Rust prevention treatment on hardware",
      "Coastal-specific component inspection",
      "Annual frequency for maximum protection",
    ],
    highlight: true,
  },
];

const faqItems = [
  { q: "How often should I service my garage door?", a: "We recommend a service 6 months after a brand new door installation, then every 18 months thereafter. Coastal properties should be serviced annually due to salt air exposure." },
  { q: "What does a service include?", a: "A standard service includes thorough inspection, spring tension check, track and motor greasing, hardware tightening, safety system testing and preventative maintenance recommendations." },
  { q: "Can you service any brand of garage door?", a: "Yes — we service all common garage door brands, styles and opener systems across North Auckland and Rodney." },
  { q: "How long does a service take?", a: "A standard service typically takes 1–2 hours on site." },
];

export default function ServicingPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Repairs & Servicing" }, { label: "Servicing" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Prevent costly repairs</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Avoid costly repair bills with regular servicing
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Just like a car, your garage door requires regular maintenance. We suggest a 6-month service on a brand new door, then every 18 months after that. Coastal properties benefit from annual servicing.
          </p>
          <p className="text-green-300 font-medium mb-8">$50 off your first service</p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Book a service
          </Link>
        </div>
      </section>

      {/* Service plans */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Service plans</h2>
          <p className="text-gray-500 text-center mb-10">Choose the plan that suits your property.</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 border-2 ${plan.highlight ? "border-brand-red bg-red-50" : "border-gray-200"}`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-brand-red text-white text-xs font-semibold px-2 py-0.5 rounded mb-3">
                    Coastal recommended
                  </span>
                )}
                <h3 className="font-bold text-brand-dark text-lg mb-1">{plan.name}</h3>
                <p className="text-2xl font-extrabold text-brand-red mb-1">{plan.price}</p>
                <p className="text-sm text-gray-500 mb-4">{plan.frequency}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-brand-red mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why service my garage door?</h2>
          <p className="text-gray-600 mb-4">A well-maintained garage door lasts significantly longer than a neglected one. Regular servicing helps us catch minor issues before they become costly repairs — things like spring tension changes, worn rollers and loose hardware are quick and cheap to address in a service, but can cause major failures if ignored.</p>
          <p className="text-gray-600">For coastal properties across Orewa, Mangawhai, Whangaparaoa and the Hibiscus Coast, salt air accelerates corrosion on springs, cables and hardware — making annual servicing essential.</p>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm
            sourcePage="/garage-services/garage-door-servicing"
            heading="Book a service"
            subheading="We'll get in touch to arrange a convenient time."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
