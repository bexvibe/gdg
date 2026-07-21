import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1 text-xs text-gray-400 flex-wrap">
        <li><Link href="/" className="hover:text-[#C8291D] transition-colors">Home</Link></li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-3 h-3 text-gray-300" />
            {crumb.href
              ? <Link href={crumb.href} className="hover:text-[#C8291D] transition-colors">{crumb.label}</Link>
              : <span className="text-gray-600 font-medium">{crumb.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
