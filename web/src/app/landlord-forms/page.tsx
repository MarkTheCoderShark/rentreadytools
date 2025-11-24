import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Landlord Forms & Templates | Checklists & Notices | RentReadyTools",
  description:
    "Download-ready landlord templates: move-out checklist, turnover scope, showing schedule, notice examples, and readiness standards.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms",
  },
};

const templates = [
  {
    title: "Move-out checklist",
    summary: "Room-by-room cleaning standards, photo angles, and what counts as normal wear.",
    href: "/landlord-forms/move-out-checklist",
  },
  {
    title: "Turnover scope template",
    summary: "Organize cleaning, paint, hardware swaps, and small repairs with owners and vendors.",
    href: "/turnover/move-out-cleaning-checklist",
  },
  {
    title: "Showing schedule planner",
    summary: "Batch showings, set pre-screening questions, and send confirmations fast.",
    href: "/turnover/how-long-should-turnover-take",
  },
];

const standards = [
  "Document before and after photos for every room (ceiling to floors) to support deposit deductions.",
  "Use one readiness checklist for cleaners, maintenance, and leasing so quality stays consistent.",
  "Batch tenant communications: confirmations, reminders, and follow-ups use the same template.",
  "Save a baseline set of listing photos and swap only the hero photo between seasons.",
];

export default function LandlordFormsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Landlord Forms", url: "/landlord-forms" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Forms & templates</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Ready-to-use landlord templates that reduce vacancy and disputes.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              Use these checklists and scripts to keep turnovers predictable, protect deposits, and keep tenant
              communication consistent.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Cleaning standards</Badge>
              <Badge>Move-out docs</Badge>
              <Badge>Showing scripts</Badge>
              <Badge>Readiness check</Badge>
            </div>
          </div>
          <div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6">
            <p className="text-sm font-semibold text-rr-text-primary">How to use these templates</p>
            <ul className="space-y-3 text-sm text-rr-text-primary/80">
              {standards.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact?reason=forms"
              className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            >
              Request a custom template
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <Eyebrow>Downloads</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Most-used forms.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            Start with these templates. Adjust for local laws and lease language before sending to residents.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {templates.map((template) => (
            <article
              key={template.href}
              className="flex h-full flex-col justify-between rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{template.title}</h3>
                <p className="text-sm leading-relaxed text-rr-text-primary/75">{template.summary}</p>
              </div>
              <Link
                href={template.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
              >
                View template <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
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
