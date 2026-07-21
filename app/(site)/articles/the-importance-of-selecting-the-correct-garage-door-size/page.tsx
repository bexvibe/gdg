import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Importance of Selecting the Correct Garage Door Size",
  description:
    "A comprehensive guide to NZ garage door sizes — single, double and RV doors. Key factors to consider when choosing dimensions for your North Auckland home.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/articles/the-importance-of-selecting-the-correct-garage-door-size" },
};

export default function SizeArticlePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Articles", href: "/articles" }, { label: "Selecting the correct garage door size" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-2 py-0.5 rounded mb-4">Buying guide</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 leading-tight">The Importance of Selecting the Correct Garage Door Size</h1>

          <div className="prose prose-gray max-w-none">
            <p>Selecting the correct garage door size is a crucial decision for homeowners, impacting both the functionality of their home and its visual appeal. The right garage door not only fits the structural dimensions but also complements the design, enhancing the overall appearance of your property.</p>

            <h2>Why size matters</h2>
            <ul>
              <li><strong>Proper clearance:</strong> A garage door that is too small may not provide enough clearance for vehicles or other items being stored.</li>
              <li><strong>Structural integrity:</strong> An oversized garage door can compromise the structural integrity of the building.</li>
              <li><strong>Kerb appeal:</strong> Choosing a garage door that is proportionate to the size of your home creates visual harmony.</li>
            </ul>

            <h2>Standard garage door sizes in New Zealand</h2>
            <h3>Single car garage doors</h3>
            <ul>
              <li>2.2 metres wide: Common, works well for homes with limited space and small to medium-sized vehicles</li>
              <li>2.4 metres wide: Popular choice, more comfortable parking experience for medium-sized vehicles</li>
              <li>2.7 metres wide: For ample space or larger cars — reduces risk of scrapes and dents</li>
              <li>Height: typically 2.1 to 2.4 metres</li>
            </ul>
            <h3>Double car garage doors</h3>
            <ul>
              <li>Standard width: 4.8 metres — comfortably fits two vehicles side by side</li>
              <li>Wider options available up to 6 metres for larger vehicles or more ease of movement</li>
            </ul>
            <h3>RV and large vehicle garage doors</h3>
            <ul>
              <li>Width: 3.66 to 4.27 metres</li>
              <li>Height: 3.66 to 4.88 metres</li>
              <li>Custom sizes available for larger RVs or boats</li>
            </ul>

            <h2>How to measure for a new garage door</h2>
            <ol>
              <li><strong>Width:</strong> Measure the opening at its widest point</li>
              <li><strong>Height:</strong> From floor to lowest point of header or ceiling</li>
              <li><strong>Side room:</strong> About 9.5 cm on each side for standard tracks</li>
              <li><strong>Headroom:</strong> At least 25–30 cm above the opening for standard track systems, plus 5–10 cm additional for a garage door opener</li>
              <li><strong>Backroom:</strong> Door height plus at least 45 cm (example: a 2.1 m door needs at least 2.55 m of backroom)</li>
            </ol>

            <h2>Choosing the right door type for your space</h2>
            <ul>
              <li><strong>Sectional doors:</strong> Panel sections on hinges — roll vertically then horizontally. Space-saving. Our most popular choice.</li>
              <li><strong>Roller doors:</strong> Roll up around a drum above the opening. Minimal headroom required.</li>
              <li><strong>Tilt/up-and-over doors:</strong> One-piece door that tilts up and over. Requires room in front for the outward swing.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Choosing the right garage door size is essential for both practical and aesthetic reasons. Familiarise yourself with standard dimensions, measure accurately, and consult with a garage door specialist if you&apos;re unsure. Custom sizing is available for non-standard openings.</p>
            <p>If you need help selecting the right size door for your North Auckland home, <Link href="/contact-us" className="text-brand-red hover:underline">get in touch with Garage Door Group</Link> — we offer free, no-obligation quotes and expert advice.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Read next</p>
            <Link href="/articles/are-your-garage-door-springs-a-problem-5-signs-you-need-a-repair" className="text-brand-red font-semibold hover:underline">
              Is Your Garage Door Springing a Problem? →
            </Link>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
