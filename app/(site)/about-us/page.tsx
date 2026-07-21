import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "About Us | North Auckland & Rodney's Trusted Garage Door Experts",
  description:
    "Garage Door Group — North Auckland's trusted garage door specialists. Locally owned, 30+ years trade experience, 5-star rated. Serving Warkworth, Silverdale, Mangawhai and all of Rodney.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/about-us" },
};

const services = [
  { title: "New garage doors & installs", href: "/garage-doors", desc: "Upgrade your kerb-side appeal. A fresh, new, modern garage door is one of the best investments you can make in your home." },
  { title: "Openers & motors", href: "/garage-services/garage-openers", desc: "Quiet, reliable automated openers with sensor safety technology. Remote or smartphone control available." },
  { title: "Insulation supply & installs", href: "/garage-doors/sectional-garage-door-insulation", desc: "InsulPro insulation provides energy efficiency and year-round comfort. New or retrofit to existing doors." },
  { title: "Repairs", href: "/garage-services/garage-door-repairs", desc: "From broken springs to malfunctioning openers, we have the expertise to fix any issue fast." },
  { title: "Servicing", href: "/garage-services/garage-door-servicing", desc: "Avoid costly repair bills with regular inspections and servicing to prevent problems before they happen." },
  { title: "New remotes", href: "/garage-services/garage-door-remotes", desc: "Lost your remote? We have replacements and will program them on the spot." },
];

const faqItems = [
  { q: "What services do you offer?", a: "New garage door sales and installation, garage door opener and motor installation, insulation, repairs, servicing and maintenance, and remote programming." },
  { q: "Do you provide warranties?", a: "Yes, we provide warranties on our products and workmanship. Contact us for more details on specific product warranties." },
  { q: "How long does installation take?", a: "A small, simple door we can install with motor in under 3 hours. A more complex, bigger door could take most of a day. For repairs and servicing we're generally on site for 1–4 hours." },
  { q: "Can I schedule a repair?", a: "Yes — call Chris on 021 906 966 or email chris@gdgroup.co.nz. We'll arrange a convenient time for our technicians to visit your location." },
  { q: "What areas do you serve?", a: "We service all of North Auckland's Rodney District — Silverdale, Milldale, Millwater, Orewa, Puhoi, Warkworth, Snells Beach, Matakana, Omaha, Point Wells, Leigh, Pakiri, Wellsford, Mangawhai, Langs Beach and Kaiwaka." },
  { q: "What preparation is needed before installation?", a: "We recommend clearing the garage area and securing any loose items. Ensure clear access to electrical outlets and that the installation area is free of obstacles. Our team will handle everything else." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "About Us" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">About Garage Door Group</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            We&apos;re North Auckland & Rodney&apos;s garage door experts
          </h1>
          <p className="text-gray-300 text-lg">
            Locally owned and operated, with over 30 years of trade experience. We serve homeowners, lifestyle blocks and businesses across all of North Auckland&apos;s Rodney District.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <TrustBadges />
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why work with us?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            As a locally owned and operated business focused on North Auckland, we know what matters to homeowners in our region. We buy direct from our Auckland manufacturers who have been supplying Kiwis since 1992.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Local knowledge", desc: "We're locally owned and operated serving Warkworth, Mangawhai and Silverdale. Comprehensive knowledge of the right products suited to North Auckland conditions." },
              { title: "High quality workmanship", desc: "With more than 30 years trade experience, our team gets it right the first time. All products and workmanship are backed by extensive warranties." },
              { title: "Competitive pricing", desc: "We offer competitive rates with a current $150 discount on all new door installations and $50 off your first repair or service." },
              { title: "Direct owner communication", desc: "Talk directly with owner Chris for fast, honest communication. No call centres, no run-around." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Quality garage door services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="border border-gray-200 rounded-xl p-5 hover:border-brand-red hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CtaBanner />
    </>
  );
}
