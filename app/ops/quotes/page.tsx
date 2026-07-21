import Link from "next/link";
import { Plus } from "lucide-react";
import OpsShell from "@/components/ops/OpsShell";
import { ops } from "@/components/ops/theme";

const MOCK_QUOTES = [
  { date: "Fri, 10 Jul 2026", number: "QU-0016", client: "Dave test", terms: "50/50 (50% deposit, 50% on completion)", amount: "$5,989.62", status: "Approved" },
  { date: "Wed, 8 Jul 2026", number: "QU-0008", client: "Dave test", terms: "50/50 (50% deposit, 50% on completion)", amount: "$400.00", status: "Accepted" },
  { date: "Wed, 8 Jul 2026", number: "QU-0007", client: "Aaron", terms: "100% (paid in full on completion)", amount: "$225.00", status: "Sent" },
  { date: "Wed, 8 Jul 2026", number: "QU-0006", client: "AA Takapuna", terms: "50/50 (50% deposit, 50% on completion)", amount: "$400.00", status: "Sent" },
  { date: "Tue, 7 Jul 2026", number: "QU-0001", client: "—", terms: "—", amount: "$1.00", status: "Draft" },
];

const STATUS_STYLE: Record<string, { bg: string; text: string }> = {
  Approved: { bg: ops.bluePillBg, text: ops.bluePillText },
  Accepted: { bg: ops.navyPill, text: "#fff" },
  Sent: { bg: ops.pink, text: "#fff" },
  Draft: { bg: "#fff", text: ops.muted },
};

export default function OpsQuotesPage() {
  return (
    <OpsShell
      title="Quotes"
      actions={
        <Link
          href="/ops/quotes/new"
          className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
          style={{ background: ops.pink }}
        >
          <Plus className="w-4 h-4" /> New Quote
        </Link>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b" style={{ borderColor: ops.border }}>
              {["Date Created", "Quote Number", "Client Name", "Amount", "Status", ""].map((h) => (
                <th
                  key={h}
                  className="py-3 px-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{ color: ops.muted }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_QUOTES.map((q) => {
              const style = STATUS_STYLE[q.status];
              return (
                <tr key={q.number} className="border-b" style={{ borderColor: ops.border }}>
                  <td className="py-4 px-2 whitespace-nowrap" style={{ color: ops.body }}>{q.date}</td>
                  <td className="py-4 px-2 whitespace-nowrap font-semibold underline" style={{ color: ops.ink }}>{q.number}</td>
                  <td className="py-4 px-2">
                    <div className="font-semibold" style={{ color: ops.ink }}>{q.client}</div>
                    <div className="text-xs italic" style={{ color: ops.muted }}>{q.terms}</div>
                  </td>
                  <td className="py-4 px-2 whitespace-nowrap font-bold" style={{ color: ops.ink }}>{q.amount}</td>
                  <td className="py-4 px-2 whitespace-nowrap">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{ background: style.bg, color: style.text }}
                    >
                      {q.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 whitespace-nowrap text-right">
                    <Link
                      href="/ops/quotes/new"
                      className="text-xs font-bold uppercase tracking-wide border rounded-md px-3 py-2"
                      style={{ borderColor: ops.border, color: ops.ink }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs mt-6" style={{ color: ops.muted }}>
        Sample data for layout purposes only.
      </p>
    </OpsShell>
  );
}
