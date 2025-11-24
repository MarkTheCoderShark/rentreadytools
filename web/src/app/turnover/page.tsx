import type { Metadata } from "next";
import Link from "next/link";
import { LastUpdated } from "../components/last-updated";
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "2025 Tenant Turnover Guides | Cut Vacancy Time | RentReadyTools",
  description:
    "2025 practical turnover playbooks for landlords: cleaning checklists, showing cadence, and vacancy math so you can move the next tenant in faster.",
  alternates: {
    canonical: "https://rentreadytools.com/turnover",
  },
  openGraph: {
    title: "2025 Tenant Turnover Guides | Cut Vacancy Time",
    description:
      "2025 practical turnover playbooks for landlords: cleaning checklists, showing cadence, and vacancy math so you can move the next tenant in faster.",
    url: "https://rentreadytools.com/turnover",
    siteName: "RentReadyTools",
    type: "website",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools Turnover Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 Tenant Turnover Guides | Cut Vacancy Time",
    description:
      "2025 practical turnover playbooks for landlords: cleaning checklists, showing cadence, and vacancy math so you can move the next tenant in faster.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const guides = [
  {
    title: "How long should tenant turnover take?",
    summary: "Benchmarks by unit condition, leasing speed, and seasonality so you can spot delays early.",
    href: "/turnover/how-long-should-turnover-take",
  },
  {
    title: "Move-out cleaning checklist",
    summary: "Room-by-room cleaning standards, supply list, and when to bring in pros.",
    href: "/turnover/move-out-cleaning-checklist",
  },
  {
    title: "Vacancy cost calculator",
    summary: "See the daily cost of an empty unit, including your time and lost rent.",
    href: "/tools/vacancy-rate-calculator",
  },
];

const quickWins = [
  "Photograph every room before turnover work so you can charge back damages confidently.",
  "Schedule cleaners and maintenance as soon as notice is given—do not wait for keys.",
  "List within 48 hours of notice with “coming soon” photos if the unit is still occupied.",
  "Run showings in batches (2–3 windows per week) to keep momentum without burning time.",
  "Tighten approval criteria, but issue decisions within 24 hours of application receipt.",
];

const timeline = [
  { phase: "Notice received", actions: "Pre-order supplies, schedule vendors, update listing copy, confirm lock access." },
  { phase: "Day 0–2", actions: "Walkthrough with outgoing tenant, document condition, start cleaning and paint touch-ups." },
  { phase: "Day 3–5", actions: "Finish repairs, swap locks, deep clean appliances, refresh photos, list or refresh listing." },
  { phase: "Day 6–10", actions: "Show in batches, process applications, verify income and rental history, collect holding deposit." },
  { phase: "Day 11–14", actions: "Final punch, smoke/CO test, professional clean, walkthrough checklist before move-in." },
];

export default function TurnoverHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Turnover", url: "/turnover" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Turnover hub</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Cut vacancy days with a clean, tight turnover process.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              Use these guides to move from notice to move-in without stalls. Pair the checklists with the vacancy cost
              calculator so every day has an owner and a cost.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Vacancy reduction</Badge>
              <Badge>Leasing speed</Badge>
              <Badge>Cleaning standards</Badge>
              <Badge>Team coordination</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/vacancy-rate-calculator"
                className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                Run vacancy calculator
              </Link>
              <Link
                href="/contact?reason=turnover"
                className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
              >
                Talk with the team
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6">
            <p className="text-sm font-semibold text-rr-text-primary">Quick wins</p>
            <ul className="space-y-3 text-sm text-rr-text-primary/80">
              {quickWins.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
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
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Turnover playbooks that ship fast.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            Read the guides, then pair them with the calculators to keep vacancy accountable.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.href}
              className="flex h-full flex-col justify-between rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
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

      <section className="space-y-6 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="space-y-2">
          <Eyebrow>14-day turnover</Eyebrow>
          <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Benchmark timeline.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            A realistic schedule for a clean unit. Add 2–4 days if you have heavy repairs or HOA approvals.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {timeline.map((item) => (
            <div
              key={item.phase}
              className="flex items-start gap-3 rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4"
            >
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-rr-text-primary">{item.phase}</p>
                <p className="text-sm leading-relaxed text-rr-text-primary/75">{item.actions}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <LastUpdated date="January 2025" />
      </div>
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
