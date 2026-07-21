import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Door Openers & Motor Installation | North Auckland",
  description:
    "Garage door motor and opener supply and installation throughout North Auckland. Smart, quiet, reliable systems with sensor safety. $150 off new installations. Free quotes.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-openers" },
};

const features = [
  { title: "Quiet operation", desc: "Modern belt and screw-drive openers are whisper-quiet — no more waking the house on early morning departures." },
  { title: "Safety sensors", desc: "Auto-reverse sensors stop and reverse the door if anything is detected in the path — protecting people, pets and vehicles." },
  { title: "Remote control", desc: "Standard remotes included. Multi-button options available for multiple doors or gates." },
  { title: "Smart phone control", desc: "Wi-Fi enabled openers allow you to open, close and monitor your door from anywhere via a smartphone app." },
  { title: "Battery backup", desc: "Some models include battery backup — so power outages don't leave you stranded." },
  { title: "Suitable for all door types", desc: "We install openers for sectional, roller, tilt and other door types across North Auckland." },
];

const faqItems = [
  { q: "Which opener is best for my door type?", a: "The right opener depends on your door type, size and weight. We'll assess your door and recommend the most suitable system during a free quote visit." },
  { q: "Can you install an opener on an existing door?", a: "Yes — in most cases we can add motorised automation to an existing garage door without replacing the door itself." },
  { q: "How long does opener installation take?", a: "Installation typically takes 1–3 hours depending on the system and door type." },
  { q: "Can I control my opener from my phone?", a: "Yes — we can install smart Wi-Fi openers that connect to an app on your smartphone, allowing remote operation and monitoring." },
  { q: "My opener is running but the door won't move — what's wrong?", a: "This is often a spring issue rather than the opener itself. If the door won't move but the motor is running, call us on 021 906 966 — it may be dangerous to try to operate it manually." },
];

export default function OpenersPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Motors & Openers" }, { label: "Garage Door Openers" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Automate your garage door</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Garage Door Openers & Motor Installation
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Nothing worse than arriving late to an important meeting because your garage door won&apos;t open. We supply and install quiet, reliable automated openers for all door types throughout North Auckland.
          </p>
          <Link href="/contact-us" className="inline-block bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Features of modern garage door openers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-xl p-5">
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
            sourcePage="/garage-services/garage-openers"
            heading="Get a quote on a new opener"
            subheading="We'll recommend the right system for your door and install it quickly."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
