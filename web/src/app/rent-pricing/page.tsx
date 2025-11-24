import type { Metadata } from "next";
import Link from "next/link";
import { LastUpdated } from "../components/last-updated";
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "2025 Rent Pricing Guides | Charge Market Rent | RentReadyTools",
  description:
    "2025 data-backed rent pricing guides for landlords: how to set the right rent, test price changes, and upgrade where it pays back.",
  alternates: {
    canonical: "https://rentreadytools.com/rent-pricing",
  },
  openGraph: {
    title: "2025 Rent Pricing Guides | Charge Market Rent",
    description:
      "2025 data-backed rent pricing guides for landlords: how to set the right rent, test price changes, and upgrade where it pays back.",
    url: "https://rentreadytools.com/rent-pricing",
    siteName: "RentReadyTools",
    type: "website",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools Rent Pricing Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 Rent Pricing Guides | Charge Market Rent",
    description:
      "2025 data-backed rent pricing guides for landlords: how to set the right rent, test price changes, and upgrade where it pays back.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const guides = [
  {
    title: "How much rent can I charge?",
    summary: "Step-by-step on setting a rent range, testing price drops, and reading response rate.",
    href: "/rent-pricing/how-much-rent-can-i-charge",
  },
  {
    title: "Rental upgrades that actually pay off",
    summary: "ROI by upgrade type, plus a checklist before you spend on finishes.",
    href: "/rent-pricing/rental-upgrades-that-pay-off",
  },
  {
    title: "Rent Price Calculator",
    summary: "Blend comps and condition to get a range in under a minute.",
    href: "/tools/rent-estimate-calculator",
  },
];

const signals = [
  "Under 5 quality inquiries in the first week is a pricing or listing issue.",
  "If you cut price, do it in small moves (1–2%) and refresh the listing at the same time.",
  "Rent should support a 45–55% expense ratio after vacancy; adjust if you routinely exceed that.",
  "Move renewals 60–90 days early to avoid last-minute concessions.",
  "Parking, laundry, and pet policies change rent faster than small cosmetic upgrades.",
];

export default function RentPricingHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Rent Pricing", url: "/rent-pricing" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Rent pricing hub</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Price with comps, response rate, and ROI—not guesses.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              Use the guides and calculator to set an initial range, test small moves, and know when upgrades make
              sense. Built for DIY landlords who want a data-backed rent price.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Market comps</Badge>
              <Badge>Pricing tests</Badge>
              <Badge>Upgrade ROI</Badge>
              <Badge>Renewal prep</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/rent-estimate-calculator"
                className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                Run rent price calculator
              </Link>
              <Link
                href="/contact?reason=pricing"
                className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
              >
                Get a rent audit
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6">
            <p className="text-sm font-semibold text-rr-text-primary">Pricing signals to watch</p>
            <ul className="space-y-3 text-sm text-rr-text-primary/80">
              {signals.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <Eyebrow>Guides</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Rent pricing recipes.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            Start with the calculator, then use the guides to tighten price and decide whether upgrades are worth it.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.href}
              className="flex h-full flex-col justify-between rounded-[1.1rem] border border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/35 to-rr-rent-grad-end p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-rr-text-primary/75">{guide.summary}</p>
              </div>
              <Link
                href={guide.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
              >
                Open guide <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-rr-text-primary">Want a done-for-you rent plan?</p>
            <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
              Send the address and current rent. We'll reply with a range, photo fixes, and the first 3 listing tests.
            </p>
            <LastUpdated date="January 2025" />
          </div>
          <Link
            href="/contact?reason=pricing&source=rent-pricing-hub"
            className="inline-flex items-center justify-center rounded-full bg-rr-tool-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Request a rent plan
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rr-accent-darkteal">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rr-border-gray bg-rr-surface-softgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-rr-text-primary">
      {children}
    </span>
  );
}
