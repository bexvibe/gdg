import { Star, ShieldCheck, Clock, MessageCircle } from "lucide-react";

const badges = [
  { icon: Clock,         value: "30+",       label: "years trade experience" },
  { icon: Star,          value: "5-star",     label: "customer rating" },
  { icon: ShieldCheck,   value: "Guaranteed", label: "workmanship & products" },
  { icon: MessageCircle, value: "Talk to Chris", label: "direct — no call centres" },
];

export default function TrustBadges({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {badges.map(({ icon: Icon, value, label }) => (
        <div key={value} className="flex flex-col items-center text-center gap-3">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${inverted ? "bg-white/10" : "bg-red-50"}`}>
            <Icon className={`w-5 h-5 ${inverted ? "text-white" : "text-[#C8291D]"}`} />
          </div>
          <div>
            <div className={`font-display font-700 text-sm tracking-tight ${inverted ? "text-white" : "text-[#0D1B2A]"}`}>{value}</div>
            <div className={`text-xs leading-snug mt-0.5 ${inverted ? "text-gray-400" : "text-gray-500"}`}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
