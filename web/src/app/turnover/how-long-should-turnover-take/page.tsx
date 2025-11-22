import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Should Tenant Turnover Take? | Benchmarks | RentReadyTools",
  description:
    "Turnover timeline benchmarks for landlords: notice to move-out, cleaning, repairs, listing, and lease-up with tips to avoid stalls.",
};

const benchmarks = [
  { type: "Clean, light turn", days: "7–10 days", notes: "Paint touch-ups, deep clean, minor hardware swaps." },
  { type: "Average turn", days: "10–14 days", notes: "Paint/patch, small repairs, carpet shampoo, refreshed photos." },
  { type: "Heavy turn", days: "14–21 days", notes: "Flooring replacement, appliance swap, bath caulk/grout, new fixtures." },
  { type: "Full rehab", days: "30–60 days", notes: "Flooring, kitchen/bath updates, permits, inspections, and new photos." },
];

const blockers = [
  { title: "Waiting to schedule vendors", fix: "Book cleaners and maintenance the day notice is given. Keep backups ready." },
  { title: "Slow listing refresh", fix: "Refresh photos and copy within 48 hours. Post a “coming soon” listing while work finishes." },
  { title: "Application bottlenecks", fix: "Pre-set income, credit, and rental history standards. Decide within 24 hours of receipt." },
  { title: "Deposit disputes", fix: "Photograph every room before cleaning and after. Use consistent checklist language with tenants." },
  { title: "Seasonality drag", fix: "If you list off-season, favor a tighter price range and shorter lease terms to align the next renewal." },
];

const contactHighlights = [
  "Address and unit type (beds/baths, parking, laundry).",
  "Notice date or target move-out date.",
  "Work already scheduled, plus photos of current condition.",
  "Your goal: fastest lease-up vs. highest price vs. ready-for-sale.",
];

export default function TurnoverTimelinePage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Turnover benchmarks</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          How long should tenant turnover take?
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          A clean, well-run turnover should be measured in days, not weeks. Use these benchmarks to set expectations with
          tenants, vendors, and yourself.
        </p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Timeline by turn type</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Start here, then adjust for HOA approvals, special-order parts, or permit requirements.
            </p>
          </div>
          <Link
            href="/tools/vacancy-rate-calculator"
            className="inline-flex items-center justify-center rounded-full bg-rr-tool-teal px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Calculate vacancy cost
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {benchmarks.map((item) => (
            <article key={item.type} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{item.type}</p>
              <p className="text-lg font-semibold text-rr-text-primary">{item.days}</p>
              <p className="text-sm leading-relaxed text-rr-text-primary/75">{item.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Common delays and fixes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {blockers.map((item) => (
            <article key={item.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/50 p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/75">{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Need a timeline review?</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Send what you know and we’ll reply with a 14-day plan tailored to your unit type.
            </p>
          </div>
          <Link
            href="/contact?reason=turnover&source=turnover-timeline"
            className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
          >
            Ask for a plan
          </Link>
        </div>
        <ul className="grid gap-2 md:grid-cols-2">
          {contactHighlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-rr-text-primary/80">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
