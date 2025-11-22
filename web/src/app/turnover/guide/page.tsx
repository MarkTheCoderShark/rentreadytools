import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Turnover Guide | From Notice to Move-In | RentReadyTools",
  description:
    "A complete turnover guide for landlords: timelines, checklists, and pricing signals to keep vacancy short and move-ins smooth.",
};

const phases = [
  {
    title: "Notice received",
    bullets: [
      "Schedule cleaners and maintenance the same day; line up backups.",
      "Update listing copy and photo plan; prep “coming soon” listing if occupied.",
      "Confirm lock/entry access and parking instructions for vendors.",
    ],
  },
  {
    title: "Pre-move-out",
    bullets: [
      "Do a quick walkthrough to document condition; note repairs.",
      "Stage supplies: filters, bulbs, caulk, cleaner, touch-up paint.",
      "Collect forwarding info and move-out instructions in writing.",
    ],
  },
  {
    title: "Make-ready",
    bullets: [
      "Clean, patch, and touch up paint; address trip hazards and leaks first.",
      "Swap locks, test smoke/CO, and replace filters.",
      "Refresh hero photos if condition improved.",
    ],
  },
  {
    title: "Marketing & leasing",
    bullets: [
      "List within 48–72 hours; update headline if price or status changes.",
      "Batch showings 2–3 windows per week; pre-screen before showing.",
      "Decide on applications within 24 hours; confirm income/rental history.",
    ],
  },
];

const links = [
  { label: "Vacancy Cost Calculator", href: "/tools/vacancy-rate-calculator" },
  { label: "Move-out cleaning checklist", href: "/turnover/move-out-cleaning-checklist" },
  { label: "Turnover timeline benchmarks", href: "/turnover/how-long-should-turnover-take" },
  { label: "True cost of turnover", href: "/turnover/true-cost-of-tenant-turnover" },
];

export default function TurnoverGuidePage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Turnover guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          From notice to move-in without losing weeks.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Use this guide to keep turnover under control: timelines, checklists, and pricing signals that cut vacancy.
        </p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Turnover phases</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">Follow these phases and keep a daily owner.</p>
          </div>
          <Link
            href="/tools/vacancy-rate-calculator"
            className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Calculate vacancy cost
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {phases.map((phase) => (
            <article key={phase.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{phase.title}</p>
              <ul className="mt-2 space-y-2 text-sm text-rr-text-primary/80">
                {phase.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold text-rr-text-primary">Use these next</p>
        <div className="flex flex-wrap gap-2 text-sm text-rr-accent-darkteal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-rr-border-gray px-3 py-1 transition hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
            >
              {link.label}
            </Link>
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
