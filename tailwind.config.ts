import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy:  { DEFAULT: "#0D1B2A", 800: "#152236", 700: "#1D2E47", 600: "#263A58" },
        red:   { DEFAULT: "#C8291D", hover: "#A82219", light: "#FEF2F2", muted: "#FECACA" },
        amber: { DEFAULT: "#D97706", light: "#FEF3C7" },
        ink:   "#0D1B2A",
        mist:  "#F5F6F7",   // cool near-white for alt sections
        stone: "#F0EEE9",   // warm off-white
        // Typography greys
        body:  "#374151",
        muted: "#6B7280",
        faint: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans:    ["var(--font-inter)",   "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)",   { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["clamp(2rem,  4vw, 3rem)",    { lineHeight: "1.1",  letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)",{ lineHeight: "1.2",  letterSpacing: "-0.02em",  fontWeight: "700" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:    "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 16px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)",
        "card-lg": "0 8px 32px -4px rgb(0 0 0 / 0.10), 0 4px 12px -4px rgb(0 0 0 / 0.06)",
        "inset-t": "inset 0 1px 0 0 rgb(255 255 255 / 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(ellipse 80% 50% at 60% 50%, #152236 0%, #0D1B2A 100%)",
        "placeholder-gradient": "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
