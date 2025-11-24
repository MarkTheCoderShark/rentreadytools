import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move-In Checklist for Landlords | RentReadyTools",
  description:
    "Move-in checklist template: safety, systems, and documentation steps to start the tenancy cleanly and protect deposits.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms/move-in-checklist",
  },
};

const items = [
  {
    title: "Safety",
    bullets: [
      "Test smoke/CO alarms and log dates.",
      "Replace HVAC filter and note size/date.",
      "Check locks and window latches; confirm keys/fobs remotes are labeled.",
    ],
  },
  {
    title: "Systems",
    bullets: [
      "Run dishwasher, disposal, washer/dryer; check for leaks.",
      "Label breakers if unclear; confirm hot water temp is reasonable.",
      "Photograph appliance condition and record serials if available.",
    ],
  },
  {
    title: "Cleanliness & finishes",
    bullets: [
      "Document floors, walls, and counters with photos from each room corner.",
      "Wipe fridge shelves, inside cabinets, and closets; swap any burnt bulbs.",
      "Ensure blinds and doors operate smoothly; note prior wear vs new damage.",
    ],
  },
  {
    title: "Move-in packet",
    bullets: [
      "Provide utility info, trash/recycling rules, parking map, and HOA notes.",
      "Share maintenance request process and emergency contact rules.",
      "Give a copy of the move-in condition report and due date for return.",
    ],
  },
];

export default function MoveInChecklistPage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Template</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Move-in checklist for landlords.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Use this to set a clean baseline for the tenancy and avoid disputes later. Pair with photos and a signed
          condition report.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">{item.title}</h2>
            <ul className="space-y-2 text-sm text-rr-text-primary/80">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold text-rr-text-primary">Need an editable copy?</p>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href="/contact?reason=forms&source=move-in-checklist">Request the template</PrimaryButton>
          <GhostButton href="/property-management">Talk to a property manager</GhostButton>
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
