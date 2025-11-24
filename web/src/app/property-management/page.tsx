import type { Metadata } from "next";
import Link from "next/link";
import FormSection from "./form-section";
import ScrollButton from "./scroll-button";

export const metadata: Metadata = {
  title: "Property Management for Landlords | Free Rental Analysis",
  description:
    "Get a free rental analysis with a data-backed rent estimate, vacancy risk check, and turnover plan. Full-service property management for landlords.",
  alternates: {
    canonical: "https://rentreadytools.com/property-management",
  },
};

const services = [
  {
    title: "Rent pricing & leasing",
    detail: "Data-backed rent ranges, refreshed listings, batched showings, and same-day application decisions.",
  },
  {
    title: "Turnovers & maintenance",
    detail: "Pre-scheduled cleaners/repairs, before-after photo proof, and vendor timelines you can track.",
  },
  {
    title: "Resident care & renewals",
    detail: "Fast communication, deposit protection, and renewal plans sent 60–90 days before lease end.",
  },
  {
    title: "Transparent reporting",
    detail: "Clear monthly statements, vacancy cost tracking, and ROI plans for upgrades.",
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
            <Eyebrow>PROPERTY MANAGEMENT</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Get a free rental analysis — then decide if you want us to run it for you.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              We’ll review your rent price, vacancy risk, and turnover costs using the same tools on this site. You’ll get a
              clear, data-backed plan within 1 business day — no obligation.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Rent pricing</Badge>
              <Badge>Leasing</Badge>
              <Badge>Turnover</Badge>
              <Badge>Maintenance</Badge>
            </div>
            <p className="text-sm font-semibold text-rr-text-primary/75">
              Full-service management focused on accurate pricing, low vacancy, and smooth turns.
            </p>
            <div className="flex flex-wrap gap-3">
              <ScrollButton targetId="free-rental-analysis">
                Get a free rental analysis
              </ScrollButton>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
              >
                Try the tools first
              </Link>
            </div>
            <p className="text-xs font-semibold text-rr-text-primary/70">Free, no obligation. We reply within 1 business day.</p>
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
          <Eyebrow>WHY OWNERS CHOOSE US</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Built for owners who want fewer vacancies and clearer decisions.
          </h2>
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

      <FormSection />
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
