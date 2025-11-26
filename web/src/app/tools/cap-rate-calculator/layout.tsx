import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cap Rate Calculator 2025 | Free Real Estate Investment Tool | RentReadyTools",
  description:
    "Calculate capitalization rate for rental properties. Compare investment returns, analyze deals, and make data-driven real estate decisions with our free cap rate calculator.",
  alternates: {
    canonical: "https://rentreadytools.com/tools/cap-rate-calculator",
  },
  openGraph: {
    title: "Cap Rate Calculator 2025 | Free Real Estate Investment Tool",
    description:
      "Calculate capitalization rate for rental properties. Compare investment returns and analyze deals with our free calculator.",
    url: "https://rentreadytools.com/tools/cap-rate-calculator",
    siteName: "RentReadyTools",
    type: "website",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cap Rate Calculator - RentReadyTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap Rate Calculator 2025 | Free Real Estate Investment Tool",
    description:
      "Calculate capitalization rate for rental properties. Compare investment returns and analyze deals.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
