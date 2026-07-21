"use client";
import { useState } from "react";
import type { Submission } from "@/lib/schema";
import { format } from "date-fns";
import { Download, Search, LogOut } from "lucide-react";

function exportCSV(data: Submission[]) {
  const headers = ["id", "created_at", "name", "mobile", "email", "service", "message", "source_page", "email_sent"];
  const rows = data.map((s) => [
    s.id,
    format(s.createdAt, "yyyy-MM-dd HH:mm:ss"),
    s.name,
    s.mobile,
    s.email ?? "",
    s.service ?? "",
    (s.message ?? "").replace(/\n/g, " "),
    s.sourcePage ?? "",
    String(s.emailSent),
  ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","));

  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `submissions-${format(new Date(), "yyyy-MM-dd")}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminClient({ submissions }: { submissions: Submission[] }) {
  const [search, setSearch] = useState("");

  const filtered = submissions.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.mobile.toLowerCase().includes(q) ||
      (s.email ?? "").toLowerCase().includes(q) ||
      (s.message ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-dark text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Garage Door Group — Submissions</h1>
          <p className="text-gray-400 text-xs">{submissions.length} total enquiries</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => exportCSV(filtered)}
            className="flex items-center gap-2 bg-brand-red text-white px-3 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <a href="/admin/logout" className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Log out
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search by name, mobile, email or message…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">No submissions found.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((s) => (
              <div key={s.id} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <h3 className="font-semibold text-brand-dark">{s.name}</h3>
                    <p className="text-sm text-gray-500">{format(s.createdAt, "d MMM yyyy, h:mm a")}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap text-sm">
                    {s.service && (
                      <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full text-xs">
                        {s.service}
                      </span>
                    )}
                    <span className={`border px-2 py-0.5 rounded-full text-xs ${s.emailSent ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>
                      {s.emailSent ? "Email sent" : "Email pending"}
                    </span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">Mobile</span>
                    <a href={`tel:${s.mobile}`} className="text-brand-red font-medium hover:underline">{s.mobile}</a>
                  </div>
                  {s.email && (
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">Email</span>
                      <a href={`mailto:${s.email}`} className="text-brand-red hover:underline">{s.email}</a>
                    </div>
                  )}
                  {s.sourcePage && (
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">From</span>
                      <span className="text-gray-700">{s.sourcePage}</span>
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Message</span>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 rounded p-3 border border-gray-100">
                    {s.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
