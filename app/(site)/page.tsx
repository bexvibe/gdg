import type { Metadata } from "next";
import QuoteWizardPage from "@/components/ops/QuoteWizardPage";

export const metadata: Metadata = {
  title: "Get a Garage Door Quote | Garage Door Group",
  description: "Create a custom garage door quote for North Auckland. Choose your door type, size, options, and get an instant quote.",
  alternates: { canonical: "https://www.garagedoorgroup.co.nz" },
};

export default function HomePage() {
  return <QuoteWizardPage />;
}
