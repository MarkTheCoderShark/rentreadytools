import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import NavBar from "./components/nav-bar";
import { OrganizationSchema } from "./components/organization-schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentReadyTools | Landlord Command Center",
  description:
    "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
  openGraph: {
    title: "RentReadyTools | Landlord Command Center",
    description:
      "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
    url: "https://rentreadytools.com",
    siteName: "RentReadyTools",
    type: "website",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools - Landlord Command Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentReadyTools | Landlord Command Center",
    description:
      "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${jetBrains.variable} bg-rr-surface-offwhite text-rr-text-primary antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,rgba(12,74,71,0.08),transparent_38%),radial-gradient(circle_at_78%_12%,rgba(233,176,96,0.12),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(15,124,120,0.08),transparent_42%)]">
          <NavBar />
          <div className="pb-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rr-border-gray bg-rr-surface-offwhite">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-6">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-rr-text-primary">
            <span className="h-8 w-8 rounded-xl bg-rr-accent-gold/20 text-center text-lg leading-8 text-rr-accent-darkteal">
              RR
            </span>
            <span>RentReadyTools</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-rr-text-primary/80">
            Free tools that show the real cost of vacancy, underpricing, and upgrades—plus a team that can run it for you.
          </p>
        </div>
        <FooterColumn
          title="Tools"
          links={[
            { label: "Rent Price Calculator", href: "/tools/rent-estimate-calculator" },
            { label: "Vacancy Cost Calculator", href: "/tools/vacancy-rate-calculator" },
            { label: "Cap Rate Calculator", href: "/tools/cap-rate-calculator" },
            { label: "Move-In Readiness Checklist", href: "/tools/move-in-checklist" },
            { label: "Renovation ROI Calculator", href: "/tools/renovation-roi" },
          ]}
        />
        <FooterColumn
          title="Guides & Forms"
          links={[
            { label: "Turnover hub", href: "/turnover" },
            { label: "Rent pricing hub", href: "/rent-pricing" },
            { label: "Tenant screening", href: "/tenant-screening" },
            { label: "Landlord forms", href: "/landlord-forms" },
            { label: "Rent increase letter", href: "/landlord-forms/rent-increase-letter" },
            { label: "Late rent notice", href: "/landlord-forms/late-rent-notice" },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { label: "Property management", href: "/property-management" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </div>
      <div className="border-t border-rr-border-gray bg-rr-surface-softgray/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-rr-text-primary/70 md:flex-row md:items-center md:justify-between md:px-6">
          <span>© {new Date().getFullYear()} RentReadyTools. All rights reserved.</span>
          <span className="flex gap-3">
            <Link className="hover:text-rr-accent-darkteal" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-rr-accent-darkteal" href="/terms">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-rr-text-primary">{title}</p>
      <ul className="space-y-2 text-sm text-rr-text-primary/80">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="transition hover:text-rr-accent-darkteal" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
