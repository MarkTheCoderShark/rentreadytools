import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { ArticleSchema } from "@/app/components/article-schema";
import { LastUpdated } from "../../components/last-updated";
export const metadata: Metadata = {
  title: "The True Cost of Tenant Turnover (2025) | Missed Rent + Time | RentReadyTools",
  description:
    "See every cost in a 2025 tenant turnover: missed rent, your time, cash costs, and concessions. Use it to decide DIY vs professional management.",
  alternates: {
    canonical: "https://rentreadytools.com/turnover/true-cost-of-tenant-turnover",
  },
  openGraph: {
    title: "The True Cost of Tenant Turnover (2025) | Missed Rent + Time",
    description:
      "See every cost in a 2025 tenant turnover: missed rent, your time, cash costs, and concessions. Use it to decide DIY vs professional management.",
    url: "https://rentreadytools.com/turnover/true-cost-of-tenant-turnover",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools - True Cost of Tenant Turnover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The True Cost of Tenant Turnover (2025) | Missed Rent + Time",
    description:
      "See every cost in a 2025 tenant turnover: missed rent, your time, cash costs, and concessions. Use it to decide DIY vs professional management.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const costs = [
  { title: "Missed rent", detail: "Daily rent x vacant days. A 12-day turn at $2,000/month costs about $800 in lost rent alone." },
  { title: "Your time", detail: "Showings, cleaners, maintenance, marketing. If your time is $50/hr and you spend 12 hours, that’s $600." },
  { title: "Cash turnover costs", detail: "Supplies, cleaners, locksmith, small repairs. Budget at least a few hundred even on light turns." },
  { title: "Concessions or discounts", detail: "Free days, move-in credits, or discounted first month to fill faster." },
];

const trims = [
  "Pre-schedule cleaners and maintenance the day notice is given.",
  "List within 48–72 hours with “coming soon” photos if occupied.",
  "Batch showings 2–3 times per week instead of one-offs.",
  "Decide on applications within 24 hours with preset criteria.",
  "Refresh photos and headline when you change price or status.",
];

export default function TrueCostTurnoverPage() {
  const relatedResources = [
    { label: "Vacancy Calculator", href: "/tools/vacancy-rate-calculator", icon: "calculator" as const },
    { label: "Turnover Timeline", href: "/turnover/how-long-should-turnover-take", icon: "chart" as const },
    { label: "Turnover Guide", href: "/turnover/guide", icon: "guide" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="The True Cost of Tenant Turnover"
        description="See every cost in a 2025 tenant turnover: missed rent, your time, cash costs, and concessions. Use it to decide DIY vs professional management."
        url="/turnover/true-cost-of-tenant-turnover"
        author="RentReadyTools"
      />
      <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Turnover guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">The true cost of tenant turnover.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Turnover isn’t just missed rent. Your hours, cash costs, and concessions add up fast. This guide shows the full
          picture and how to cut it.
        </p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Cost components</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">Use this list to build your own estimate.</p>
          </div>
          <Link
            href="/tools/vacancy-rate-calculator"
            className="inline-flex items-center justify-center rounded-full bg-rr-tool-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Open the calculator
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {costs.map((item) => (
            <article key={item.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/75">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Quick ways to shrink vacancy</h2>
        <ul className="space-y-2 text-sm text-rr-text-primary/80">
          {trims.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm text-rr-text-primary/75">
          Want a custom plan to cut vacancy? We’ll run the calculator with your numbers and send a 14-day turnover schedule.
        </p>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href="/contact?reason=turnover&source=true-cost-turnover">Get a vacancy plan</PrimaryButton>
          <GhostButton href="/property-management">Talk to a property manager</GhostButton>
        </div>
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
