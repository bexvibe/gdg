interface Props {
  label?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "hero";
  className?: string;
  icon?: React.ReactNode;
}

const aspects: Record<NonNullable<Props["aspect"]>, string> = {
  hero:    "aspect-[16/7]",
  video:   "aspect-video",
  wide:    "aspect-[4/3]",
  square:  "aspect-square",
  portrait:"aspect-[3/4]",
};

export default function ImgPlaceholder({ label, aspect = "video", className = "", icon }: Props) {
  return (
    <div
      className={`${aspects[aspect]} w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-200 to-gray-300 relative ${className}`}
      aria-label={label ? `Image placeholder: ${label}` : "Image placeholder"}
      role="img"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Door icon */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center shadow-sm">
          {icon ?? (
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="8" x2="21" y2="8" strokeLinecap="round" />
              <line x1="3" y1="13" x2="21" y2="13" strokeLinecap="round" />
              <circle cx="18" cy="18" r="1" fill="currentColor" stroke="none" />
            </svg>
          )}
        </div>
        {label && (
          <span className="bg-white/70 backdrop-blur-sm text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
