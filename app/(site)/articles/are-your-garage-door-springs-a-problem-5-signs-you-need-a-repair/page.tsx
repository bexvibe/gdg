import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Is Your Garage Door Springing a Problem? 5 Signs You Need a Repair",
  description:
    "5 warning signs that your garage door springs need attention — partial opening, visible gaps, jerky movement and more. Expert advice from Garage Door Group, North Auckland.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/articles/are-your-garage-door-springs-a-problem-5-signs-you-need-a-repair" },
};

export default function SpringsArticlePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Articles", href: "/articles" }, { label: "Garage door spring problems" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-2 py-0.5 rounded mb-4">Repairs</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 leading-tight">Is Your Garage Door Springing a Problem? 5 Signs You Need a Repair</h1>

          <div className="prose prose-gray max-w-none">
            <p>Garage door springs are essential for the smooth operation of your garage door. They balance the weight of the door, making it easy to open and close. However, over time, these springs can wear out and need repair. It&apos;s important to know the signs that indicate your garage door springs require attention — this will ensure your garage door works properly for longer and keep your family safe.</p>

            <h2>Sign 1: Door opens partially or slowly</h2>
            <p>If your garage door starts opening very slowly or stops halfway, it could be a sign of a broken garage door spring. When a spring breaks, the door loses proper support — the opener has to work extra hard, leading to slower movement, and the door may not open all the way. These problems can quickly worsen and potentially cause more damage or safety risks.</p>

            <h2>Sign 2: Visible separation or gap in the spring</h2>
            <p>When you check your garage door springs, one clear sign that they need replacing is a visible separation or gap in the spring. If you see a gap of about an inch or more wide, it means the spring has snapped. Normally, tension springs are tightly wound together — any gap is a sure sign something is wrong.</p>
            <p><strong>What to do immediately:</strong> Call an expert. A broken garage door spring not only affects how well your door works, but is also a significant safety risk. The spring is what helps hold the door up — a broken spring increases the chance of your door dropping suddenly.</p>

            <h2>Sign 3: Jerky and uneven door movement</h2>
            <p>When a garage door operates smoothly, it&apos;s a seamless process you hardly notice. However, if the door starts moving unevenly as it goes up or down — with jerks, bounces, or hesitations — this could be a sign of a broken spring. When one spring breaks, the remaining spring bears the entire load, causing uneven tension and movement.</p>

            <h2>Sign 4: Crooked or bent door appearance</h2>
            <p>A broken spring can cause the door to hang lower on the broken-spring side, making it look crooked when opening or closing. The extra pressure from the broken spring can also cause tracks and rollers to bend, and the door may move unevenly from side to side.</p>

            <h2>Sign 5: Loud bang near the garage door</h2>
            <p>If you&apos;ve ever heard a loud bang coming from your garage — often described as sounding like a firecracker or gunshot — it&apos;s possible you&apos;re dealing with a broken spring. This is the sound of the spring snapping under tension, releasing stored energy suddenly.</p>
            <p><strong>After hearing such a noise:</strong> Do not attempt to open or close the garage door. Disconnect the opener and secure the door while waiting for professional inspection.</p>

            <h2>Why you shouldn&apos;t attempt DIY spring repair</h2>
            <p>Dealing with a broken garage door spring is not only inconvenient — it can pose significant injury risks. Springs are under extreme tension, and the stored energy is enough to cause serious injury if handled incorrectly. Always use a professional with the right tools and training.</p>

            <h2>Conclusion</h2>
            <p>Watch for these 5 signs: door only opens partially, visible gaps in the spring, jerky door movement, crooked appearance, or a loud bang from the garage. If you notice any of these, stop using the door and call a professional. Fixing spring problems quickly prevents more serious issues and keeps your family safe.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Read next</p>
            <Link href="/articles/why-insulate-your-garage-door" className="text-brand-red font-semibold hover:underline">
              Why insulate your garage door? →
            </Link>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
