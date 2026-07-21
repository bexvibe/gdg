import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Garage Door Remote Replacement in North Auckland",
  description:
    "Replace your lost or faulty garage door remote. Fast, professional programming for all opener brands across North Auckland. No fuss, no headaches.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/garage-services/garage-door-remotes" },
};

const faqItems = [
  { q: "How do I program my garage door remote?", a: "1. Locate the 'Learn' button on your garage door opener. 2. Press and release the Learn button. 3. Press and hold the button on your remote. 4. Release when the opener lights blink. 5. Test the remote. If you can't get it working, call us — we'll sort it fast." },
  { q: "Why is my remote not working?", a: "Common causes: flat battery, loss of programming, obstruction between remote and receiver, or signal interference. Try replacing the battery first. If that doesn't help, contact us." },
  { q: "How long do remote batteries last?", a: "Garage door remote batteries typically last 1–3 years depending on usage frequency." },
  { q: "Can I use a universal remote?", a: "Yes — universal remotes are compatible with most garage door openers. We can supply and program the right replacement remote for your system." },
  { q: "My opener is old — can you still get a remote for it?", a: "In most cases yes. Bring us the opener model details and we'll track down a compatible replacement remote." },
];

export default function RemotesPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Motors & Openers" }, { label: "Remotes" }]} />

      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Lost or faulty?</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Replace your garage door remote — no fuss
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Whether it&apos;s malfunctioning or you&apos;ve just lost it, we&apos;ll help you quickly replace and program your garage door remote. We work with all common opener brands across North Auckland.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why work with us?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "30+ years experience", desc: "There's nothing our technicians haven't seen — we'll get your remote sorted quickly." },
              { title: "Top quality products", desc: "We supply quality replacement remotes with comprehensive warranties." },
              { title: "Fair pricing", desc: "We charge a fair price for a great job — no inflated trade rates." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
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
            sourcePage="/garage-services/garage-door-remotes"
            heading="Get in touch about a remote replacement"
            subheading="Tell us your opener brand/model if you know it and we'll sort a replacement."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
