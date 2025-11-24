import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { ArticleSchema } from "@/app/components/article-schema";
import { LastUpdated } from "../../components/last-updated";

export const metadata: Metadata = {
  title: "How to Run Rent Comps (2025) | Landlord Playbook | RentReadyTools",
  description:
    "Step-by-step to run rental comps: what to filter, how to adjust for condition and amenities, and when to tighten price.",
  alternates: {
    canonical: "https://rentreadytools.com/rent-pricing/how-to-run-rent-comps",
  },
  openGraph: {
    title: "How to Run Rent Comps (2025) | Landlord Playbook",
    description:
      "Step-by-step to run rental comps: what to filter, how to adjust for condition and amenities, and when to tighten price.",
    url: "https://rentreadytools.com/rent-pricing/how-to-run-rent-comps",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools - How to Run Rent Comps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run Rent Comps (2025) | Landlord Playbook",
    description:
      "Step-by-step to run rental comps: what to filter, how to adjust for condition and amenities, and when to tighten price.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const steps = [
  {
    title: "Filter by the right criteria",
    detail:
      "Beds/baths match, within ~0.75–1.25x your square footage, similar parking and laundry. Stay within 1–2 miles unless it’s a unique submarket.",
  },
  {
    title: "Adjust for condition and amenities",
    detail:
      "Updated kitchens/baths, in-unit laundry, covered parking, and AC move rent the most. If two of these are missing, lean to the lower half of the range.",
  },
  {
    title: "Watch days on market and photos",
    detail:
      "Stale listings or poor photos can sit overpriced. Give more weight to fast-leasing comps with clear photos and recent dates.",
  },
  {
    title: "Set a 6–8% range, test small moves",
    detail:
      "Avoid a single number. Set a narrow band, then test 1–2% moves and refresh the listing to read response rate.",
  },
];

const mistakes = [
  "Using sale comps instead of rental comps.",
  "Ignoring parking/laundry differences (often worth more than minor finishes).",
  "Copying a stale listing that’s been sitting for weeks.",
  "Dropping price in big swings instead of small, measured moves.",
];

export default function RentCompsGuidePage() {
  const relatedResources = [
    { label: "Rent Estimate Calculator", href: "/tools/rent-estimate-calculator", icon: "calculator" as const },
    { label: "How Much Rent Guide", href: "/rent-pricing/how-much-rent-can-i-charge", icon: "guide" as const },
    { label: "Rental Upgrades Guide", href: "/rent-pricing/rental-upgrades-that-pay-off", icon: "chart" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="How to Run Rent Comps"
        description="Step-by-step to run rental comps: what to filter, how to adjust for condition and amenities, and when to tighten price."
        url="/rent-pricing/how-to-run-rent-comps"
        author="RentReadyTools"
      />
      <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Rent pricing guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">How to run rent comps.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Find the right listings, adjust for condition, and set a tight range. Then test price with real response data.
        </p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">4-step comp process</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Use this flow to set your initial range, then refine with response rate.
            </p>
          </div>
          <Link
            href="/tools/rent-estimate-calculator"
            className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Run the calculator
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/75">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Common mistakes</h2>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {mistakes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Need a sanity check?</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Send your address and current price. We’ll reply with a range, listing tweaks, and the first price test to run.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact?reason=pricing&source=rent-comps-guide">Get a rent audit</PrimaryButton>
            <GhostButton href="/property-management">Talk to a property manager</GhostButton>
          </div>
        </article>
      </section>
      <div className="mt-8">
        <LastUpdated date="January 2025" />
      </div>

      <RelatedResources resources={relatedResources} />
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

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-rr-accent-gold px-5 py-3 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-rr-accent-darkteal px-5 py-3 text-sm font-semibold text-rr-accent-darkteal transition hover:bg-rr-accent-darkteal/05"
    >
      {children}
    </Link>
  );
}
