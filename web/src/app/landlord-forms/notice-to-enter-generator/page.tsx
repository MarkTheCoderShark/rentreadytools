import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notice to Enter Generator | Landlord Template | RentReadyTools",
  description:
    "Generate a simple notice to enter for repairs or inspections. Editable template with required details and timing considerations.",
};

const fields = [
  "Tenant name(s) and unit address",
  "Date and time window of entry",
  "Reason for entry (repair, inspection, showing, etc.)",
  "Who will enter (owner, maintenance, vendor)",
  "Contact info for questions",
];

const tips = [
  "Check your local notice requirements (often 24–48 hours).",
  "Use a reasonable time window and offer an alternate if needed.",
  "Document delivery method (email + posted notice) and time sent.",
  "If showing with tenant in place, batch showings to minimize disruption.",
];

export default function NoticeToEnterGeneratorPage() {
  return (
    <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Template</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Notice to enter generator.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Use this template to quickly draft a compliant notice to enter. Confirm local requirements before sending.
        </p>
      </header>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold text-rr-text-primary">What to include</p>
        <ul className="space-y-2 text-sm text-rr-text-primary/80">
          {fields.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold text-rr-text-primary">Tips</p>
        <ul className="space-y-2 text-sm text-rr-text-primary/80">
          {tips.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href="/contact?reason=forms&source=notice-to-enter">Request an editable doc</PrimaryButton>
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
