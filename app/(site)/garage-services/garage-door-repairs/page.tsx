import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Reliable Garage Door Repairs in North Auckland | Garage Door Group",
  description:
    "Fast, reliable garage door repairs throughout North Auckland. Broken springs, cables, tracks, openers and more. Same-day where possible. $50 off your first repair. Call 021 906 966.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-door-repairs" },
};

const commonRepairs = [
  { title: "Broken spring replacement", desc: "Torsion and extension spring replacement — the most common garage door repair. We always replace both springs to ensure balanced operation." },
  { title: "Cable repair & replacement", desc: "Frayed, snapped or jumped cables are a safety risk. We diagnose and replace cables to restore safe, balanced operation." },
  { title: "Track repair & realignment", desc: "Bent, misaligned or damaged tracks prevent safe operation. We repair or replace tracks and realign the door system." },
  { title: "Opener & motor repair", desc: "Motor not responding, moving slowly, or reversing unexpectedly? We diagnose and repair all common opener brands." },
  { title: "Panel repair & replacement", desc: "Dented or damaged door panels can be replaced individually without replacing the entire door in many cases." },
  { title: "Roller & hinge replacement", desc: "Worn rollers and hinges cause noise, vibration and premature wear on tracks. A quick, affordable fix." },
];

const faqItems = [
  { q: "How quickly can you attend to a repair?", a: "We prioritise urgent repair work wherever possible. For a garage door that won't open or close, call us on 021 906 966 and we'll aim to get there as quickly as we can." },
  { q: "Can you repair all brands of garage doors?", a: "Yes — we repair all common garage door brands, types and opener systems across North Auckland." },
  { q: "My garage door makes a loud noise but still works — should I get it checked?", a: "Yes. Unusual noises often indicate worn rollers, failing springs, or loose hardware. Catching these early prevents more costly damage." },
  { q: "Is it safe to operate a damaged garage door?", a: "We recommend not using a garage door that is making unusual noises, moving unevenly, or has a visible spring gap. Call us to assess the issue safely." },
  { q: "Do you service rural properties?", a: "Yes — we service lifestyle blocks, rural properties and coastal homes throughout North Auckland and Rodney." },
];

export default function RepairsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Repairs & Servicing" }, { label: "Garage Door Repairs" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Fast, same-day where possible</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Reliable Garage Door Repairs — North Auckland
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Garage door giving you headaches? From broken springs to malfunctioning openers — we diagnose and fix any garage door issue fast.
          </p>
          <p className="text-green-300 font-medium mb-8">$50 off your first repair & maintenance</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:021906966" className="bg-brand-red text-white font-semibold px-6 py-3.5 rounded-md hover:bg-red-700 transition-colors">
              Call 021 906 966
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white font-semibold px-6 py-3.5 rounded-md hover:bg-white hover:text-brand-dark transition-colors">
              Request a repair
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Common repairs we handle</h2>
          <p className="text-gray-500 text-center mb-10">No garage door issue is too big or too small — call us and we&apos;ll sort it.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonRepairs.map((r) => (
              <div key={r.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">Why work with us?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Local knowledge", desc: "Locally owned and operated — we know North Auckland homes, conditions and products." },
              { title: "30+ years experience", desc: "There is no garage door issue our team hasn't seen and fixed." },
              { title: "Talk to Chris directly", desc: "No call centres — speak directly with the owner for fast, honest communication." },
              { title: "$50 off your first repair", desc: "New customer offer — $50 off your first repair or maintenance visit." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200">
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
            sourcePage="/garage-services/garage-door-repairs"
            heading="Request a repair"
            subheading="Tell us what's happening with your door and we'll get back to you promptly."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
