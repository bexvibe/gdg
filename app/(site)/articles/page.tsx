import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Garage Door Articles & Guides | Garage Door Group",
  description:
    "Expert garage door articles and guides from Garage Door Group — North Auckland's trusted garage door specialists. Tips on installation, repairs, insulation and maintenance.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz/articles" },
};

const articles = [
  {
    slug: "the-importance-of-selecting-the-correct-garage-door-size",
    title: "The Importance of Selecting the Correct Garage Door Size",
    excerpt: "Selecting the right garage door size impacts both functionality and visual appeal. Learn about standard NZ garage door dimensions and key factors to consider.",
    category: "Buying guide",
  },
  {
    slug: "are-your-garage-door-springs-a-problem-5-signs-you-need-a-repair",
    title: "Is Your Garage Door Springing a Problem? 5 Signs You Need a Repair",
    excerpt: "Garage door springs are essential for smooth operation. Here are 5 signs that your springs need attention — and why you should never attempt this repair yourself.",
    category: "Repairs",
  },
  {
    slug: "why-insulate-your-garage-door",
    title: "Why Insulate Your Garage Door?",
    excerpt: "Your garage door covers 25–30% of your home's façade. Learn how InsulPro insulation helps regulate temperature, reduce noise and improve comfort year-round.",
    category: "Insulation",
  },
  {
    slug: "choose-the-right-garage-door-for-your-home",
    title: "Choose the Right Garage Door for Your Home",
    excerpt: "Choosing a new garage door can be daunting with so many styles, types and materials on offer. Here's how to make the right choice for your home.",
    category: "Buying guide",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Articles" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-3">Explore articles on garage doors</h1>
          <p className="text-gray-600 mb-10">Practical guides and expert tips from Garage Door Group — North Auckland&apos;s trusted garage door specialists.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="border border-gray-200 rounded-xl p-6 hover:border-brand-red hover:shadow-sm transition-all group"
              >
                <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-2 py-0.5 rounded mb-3">
                  {article.category}
                </span>
                <h2 className="font-bold text-brand-dark mb-2 group-hover:text-brand-red transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
