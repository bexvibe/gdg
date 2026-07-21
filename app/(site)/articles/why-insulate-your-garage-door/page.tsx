import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Why Insulate Your Garage Door? | Garage Door Group",
  description:
    "Your garage door covers 25–30% of your home's façade. Insulating it regulates temperature, reduces noise and improves comfort. Learn how InsulPro insulation works.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/articles/why-insulate-your-garage-door" },
};

export default function InsulateArticlePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Articles", href: "/articles" }, { label: "Why insulate your garage door?" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-2 py-0.5 rounded mb-4">Insulation</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 leading-tight">Why insulate your garage door?</h1>

          <div className="prose prose-gray max-w-none">
            <p>Garage Door Group specialises in garage door insulation. Almost our entire range of new sectional doors have an insulation option.</p>

            <h2>How does insulation affect heat and noise?</h2>
            <p>Most modern homes are insulated and double glazed, but quite often the garage door misses out — it&apos;s no wonder the garage feels like a freezer in winter and a sauna on a hot summer&apos;s day. Your garage door often occupies 25–30% of the façade and is an excellent conductor of hot and cold.</p>
            <p>By insulating your garage door, it will help regulate heat transfer — keeping the cold of winter out, along with the heat of summer. The resulting effect will be a more moderate garage temperature year-round.</p>
            <p>Sound transfer is greatly improved through insulation acting as a 2-way barrier by muffling the noise going in and out. Ideal when living on or near a busy road, or if using the garage space as a workshop.</p>
            <p>Insulation will also dramatically reduce the operating noise of your garage door by muffling the sound so it doesn&apos;t wake the house on early mornings. The inside look of your door is enhanced with our InsulPro insulation — by covering the steel of the door you&apos;re left with a &ldquo;carpet-like&rdquo; finish, giving the garage a warmer feel and transforming it into an extra room.</p>

            <h2>How are sectional doors insulated?</h2>
            <p><strong>New doors:</strong> Our COLORSTEEL® doors and the majority of our other sectional doors have an insulation option. These doors are custom-fitted with InsulPro insulation when the door is manufactured at the factory — the best possible result.</p>
            <p><strong>Retrofit to your existing door:</strong> Your current sectional garage door can most likely be retrofitted with InsulPro insulation. We take exact measurements of your garage door panels and custom-fit the insulation on site. It sometimes requires swapping out a spring to &ldquo;balance up&rdquo; your door. <Link href="/contact-us" className="text-brand-red hover:underline">Contact us today for a no-obligation free quote.</Link></p>

            <h2>Benefits of garage door insulation</h2>
            <ul>
              <li>A more moderate garage temperature year-round</li>
              <li>A more energy efficient space</li>
              <li>A quieter garage with a 2-way insulation barrier muffling sound coming in and out</li>
              <li>Garage door operating noise greatly reduced</li>
              <li>InsulPro insulation has a warm, carpet-like finish — enhancing the feel of the garage</li>
            </ul>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Read next</p>
            <Link href="/articles/choose-the-right-garage-door-for-your-home" className="text-brand-red font-semibold hover:underline">
              Choose the right garage door for your home →
            </Link>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
