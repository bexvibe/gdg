"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ops } from "./theme";

const NAV = [
  { label: "Overview", href: null },
  { label: "Bookings", href: null },
  { label: "To Schedule", href: null },
  { label: "Customers", href: null },
  { label: "Quotes", href: "/ops/quotes" },
  { label: "Invoices", href: null },
  { label: "Team Members", href: null },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 shrink-0 flex flex-col justify-between px-6 py-8"
      style={{ background: ops.navy }}
    >
      <div>
        <p
          className="text-xs font-bold tracking-[0.2em] mb-1"
          style={{ color: ops.pink }}
        >
          GDG OPS
        </p>
        <p className="font-extrabold text-lg tracking-tight leading-snug mb-10" style={{ color: "#fff" }}>
          GARAGE DOOR GROUP
        </p>

        <nav className="flex flex-col gap-1">
          {NAV.map((item) => {
            const active = !!item.href && pathname.startsWith(item.href);
            const content = (
              <span
                className="block text-xs font-bold tracking-[0.15em] uppercase px-3 py-2.5 rounded-r-sm border-l-2"
                style={{
                  color: active ? "#fff" : "#9698B5",
                  borderColor: active ? ops.pink : "transparent",
                  background: active ? ops.navySoft : "transparent",
                }}
              >
                {item.label}
              </span>
            );
            return item.href ? (
              <Link key={item.label} href={item.href}>
                {content}
              </Link>
            ) : (
              <div key={item.label} className="cursor-default opacity-70">
                {content}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <span className="block text-xs font-bold tracking-[0.15em] uppercase px-3 py-2 text-[#9698B5] cursor-default opacity-70">
          Settings
        </span>
        <a
          href="/admin/logout"
          className="text-center text-xs font-bold tracking-[0.15em] uppercase text-white border rounded-md py-2.5 hover:bg-white/5 transition-colors"
          style={{ borderColor: ops.navyBorder }}
        >
          Sign Out
        </a>
      </div>
    </aside>
  );
}
