import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Display / heading font — geometric, confident, modern
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — clean, highly legible
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garagedoorgroup.co.nz"),
  title: {
    default: "Garage Door Group | North Auckland Garage Door Experts",
    template: "%s | Garage Door Group",
  },
  description:
    "Garage Door Group — North Auckland's trusted garage door installation, repair and servicing specialists. Serving Warkworth, Silverdale, Mangawhai and surrounding areas. 30+ years experience.",
  openGraph: {
    siteName: "Garage Door Group",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Garage Door Group — North Auckland" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.garagedoorgroup.co.nz" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Garage Door Group",
  url: "https://www.garagedoorgroup.co.nz",
  telephone: "+64-21-906-966",
  email: "chris@gdgroup.co.nz",
  description: "Professional garage door installation, repair and servicing throughout North Auckland and Rodney District.",
  areaServed: ["Silverdale","Orewa","Warkworth","Mangawhai","Whangaparaoa","Milldale","Millwater","Stillwater","Puhoi","Snells Beach","Matakana","Omaha","Point Wells","Leigh","Pakiri","Wellsford","Langs Beach","Kaiwaka"],
  sameAs: ["https://www.facebook.com","https://www.linkedin.com"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "50" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {/* Analytics placeholder — add GTM/GA4 snippet here when ready */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
