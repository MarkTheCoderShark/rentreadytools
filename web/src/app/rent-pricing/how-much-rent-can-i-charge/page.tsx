import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
  description:
    "Step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
};

const steps = [
  {
    title: "Start with a rent range, not a single number",
    detail:
      "Use comps within 0.75–1.25x your square footage and similar parking/laundry to set a range. Aim for a 6–8% spread between low and high.",
  },
  {
    title: "Adjust for condition and convenience",
    detail:
      "Updated kitchens/baths, in-unit laundry, and parking push rent faster than cosmetics. If two of three are missing, stay in the lower half of the range.",
  },
  {
    title: "Watch response rate in the first 7 days",
    detail:
      "Under 5 quality inquiries in week one means tighten price or fix photos/listing copy. Over 12 inquiries can justify a small bump or faster approval criteria.",
  },
  {
    title: "Test small moves",
    detail:
      "Change price in 1–2% increments and refresh photos/copy at the same time. Big swings create suspicion and stale listings.",
  },
  {
    title: "Align renewals 60–90 days early",
    detail:
      "Offer renewal terms earlier than you think. If rent is below market, move halfway now and finish the gap next renewal to avoid churn.",
  },
];

const metrics = [
  { label: "Inquiry-to-show rate", target: "35–50%", note: "If lower, fix photos, add floor plan, or tighten price." },
  { label: "Show-to-application rate", target: "25–40%", note: "Pre-screen well. If low, your criteria or price may be misaligned." },
  { label: "Days from notice to list", target: "≤3 days", note: "Listing within 72 hours keeps momentum and search rank." },
  { label: "Expense ratio after vacancy", target: "45–55%", note: "If expenses regularly exceed this, revisit rent + upgrade plan." },
];

export default function RentPricingGuidePage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Rent pricing guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          How much rent can I charge?
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Build a rent range with comps, then tighten it with response rate and condition. The goal is fast leasing at a
          profitable number, not the highest guess.
        </p>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-rr-text-primary/70">
          <Badge>Comp-based</Badge>
          <Badge>Response-driven</Badge>
          <Badge>Small price tests</Badge>
        </div>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">5-step pricing flow</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Follow this sequence and let inquiries guide whether to raise or tighten price.
            </p>
          </div>
          <Link
            href="/tools/rent-pricing-benchmark"
            className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Run the calculator
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-[1rem] border border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/35 to-rr-rent-grad-end p-5"
            >
              <p className="text-sm font-semibold text-rr-text-primary">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/75">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Key metrics to watch</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Response data shows whether price or listing quality is the issue.
          </p>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {metrics.map((metric) => (
              <li key={metric.label} className="flex items-start gap-3 rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <div>
                  <p className="text-sm font-semibold text-rr-text-primary">{metric.label}</p>
                  <p className="text-sm text-rr-text-primary/75">{metric.target}</p>
                  <p className="text-xs text-rr-text-primary/70">{metric.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">If inquiries are slow</h2>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
              <span>Refresh the hero photo, add a floor plan, and rewrite the first 2 lines of the listing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
              <span>Tighten the price 1–2% and update within the listing, not just the title.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
              <span>Adjust showing cadence: 2–3 grouped windows each week beats one-off showings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
              <span>Verify screening criteria match the neighborhood norms; misalignment slows approvals.</span>
            </li>
          </ul>
          <Link
            href="/contact?reason=pricing&source=rent-pricing-guide"
            className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
          >
            Ask for a pricing review
          </Link>
        </article>
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
