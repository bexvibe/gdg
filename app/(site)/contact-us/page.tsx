import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote for Garage Doors in North Auckland",
  description:
    "Contact Garage Door Group for a free, no-obligation quote on garage door installation, repairs or servicing in North Auckland. Call 021 906 966 or fill in the form.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Contact Us" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">Get in touch</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Contact Garage Door Group
            </h1>
            <p className="text-gray-600 mb-8">
              Get in touch today to save up to $150. Drop us a line and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Phone</div>
                  <a href="tel:021906966" className="text-lg font-semibold text-brand-dark hover:text-brand-red transition-colors">
                    021 906 966
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Email</div>
                  <a href="mailto:chris@gdgroup.co.nz" className="text-lg font-semibold text-brand-dark hover:text-brand-red transition-colors">
                    chris@gdgroup.co.nz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Service area</div>
                  <p className="text-brand-dark font-medium">North Auckland & Rodney District</p>
                  <p className="text-sm text-gray-500">Warkworth · Silverdale · Mangawhai · Hibiscus Coast & surrounds</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-green-800 mb-1">Current offers</p>
              <ul className="space-y-1 text-sm text-green-700">
                <li>✓ $150 off a new garage door installation</li>
                <li>✓ $50 off your first repair or maintenance visit</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
            <ContactForm
              sourcePage="/contact-us"
              heading="Send us a message"
              subheading="We'll get back to you within 24 hours. For urgent jobs, call us directly."
            />
          </div>
        </div>
      </section>
    </>
  );
}
