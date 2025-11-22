import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Management for DIY Landlords | RentReadyTools",
  description:
    "Turnovers, leasing, and rent collection handled for you. Property management that blends calculators, checklists, and a transparent team.",
};

const services = [
  {
    title: "Rent pricing & leasing",
    detail: "Data-backed rent ranges, refreshed listings, batched showings, and same-day application decisions.",
  },
  {
    title: "Turnovers & maintenance",
    detail: "Pre-scheduled cleaners/maintenance, documented before/after photos, and vendor coordination with timelines.",
  },
  {
    title: "Resident care & renewals",
    detail: "Responsive communication, deposit protection, and renewal plans sent 60–90 days before lease end.",
  },
  {
    title: "Transparent reporting",
    detail: "Clear monthly statements, vacancy cost tracking, and upgrade ROI plans when you want to reinvest.",
  },
];

const differentiators = [
  "Every listing and renewal starts with the same rent calculator and response-rate checkpoints you see in the tools.",
  "We pre-stage turnover supplies and backup vendors so notice-to-list takes days, not weeks.",
  "You see photo proof for every turn and repair, plus the cost per day of vacancy to keep decisions fast.",
  "Renewal offers go out early with a simple yes/no flow for residents—no hidden fees or slow approvals.",
];

export default function PropertyManagementPage() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Property management</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Pricing clarity, fast turnovers, and residents who stay longer.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              We run the same calculators and checklists from this site—but we do the work for you. Expect responsive
              communication, photo proof, and clear reporting.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Rent pricing</Badge>
              <Badge>Leasing</Badge>
              <Badge>Turnover</Badge>
              <Badge>Maintenance</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?reason=property-management&source=pm-page"
                className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                Request a proposal
              </Link>
              <Link
                href="/tools/rent-pricing-benchmark"
                className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
              >
                Try the tools first
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6">
            <p className="text-sm font-semibold text-rr-text-primary">What we handle</p>
            <ul className="space-y-3 text-sm text-rr-text-primary/80">
              {services.map((service) => (
                <li key={service.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white/80 p-4">
                  <p className="text-sm font-semibold text-rr-text-primary">{service.title}</p>
                  <p className="text-sm leading-relaxed text-rr-text-primary/75">{service.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="space-y-2">
          <Eyebrow>Why owners choose us</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Built for owners who like clarity.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            Transparent pricing, proactive communication, and measurable vacancy reduction.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
              <p className="text-sm leading-relaxed text-rr-text-primary/80">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
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
