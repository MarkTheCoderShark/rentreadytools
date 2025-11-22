import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RentReadyTools | Built for DIY Landlords",
  description:
    "RentReadyTools blends calculators, checklists, and an experienced property management team so DIY landlords can run tighter operations.",
};

const pillars = [
  {
    title: "Numbers first",
    detail: "Every recommendation starts with data: rent comps, vacancy cost, and ROI models—not gut feel.",
  },
  {
    title: "No black box",
    detail: "Clear pricing, timelines, and photo proof. If we manage for you, you see the same dashboards we do.",
  },
  {
    title: "DIY-friendly",
    detail: "Use the tools for free, or hand off when you’re ready. No pressure to sign a contract to get answers.",
  },
];

const backstory = [
  "RentReadyTools started as internal spreadsheets and checklists we used to run our own rentals.",
  "Owners kept asking for those templates, so we turned them into calculators and checklists you can use without a login.",
  "Some owners still want a partner, so the same team offers property management with those tools baked in.",
];

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>About</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Built for landlords who want clarity before they commit.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          RentReadyTools is a small team of operators, leasing pros, and analysts who wanted better, faster answers than
          typical property management pitches.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">What we stand for</h2>
          <div className="space-y-3 text-sm text-rr-text-primary/80">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                <p className="text-sm font-semibold text-rr-text-primary">{pillar.title}</p>
                <p className="text-sm leading-relaxed text-rr-text-primary/75">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Our story</h2>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {backstory.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?reason=about&source=about-page"
            className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
          >
            Talk with the team
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
