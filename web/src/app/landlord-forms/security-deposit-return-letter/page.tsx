import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Deposit Return Letter Template | RentReadyTools",
  description:
    "Simple security deposit return letter template for landlords. Itemize deductions, timelines, and delivery proof.",
};

const sections = [
  "Tenant name(s), property address, and move-out date.",
  "Total deposit received and date received.",
  "Itemized deductions with amounts and brief notes.",
  "Remaining balance returned (or amount owed).",
  "Payment method and date sent or applied.",
  "Contact info for questions or disputes.",
];

const tips = [
  "Check state timelines for returning deposits (often 14–30 days).",
  "Attach photo evidence for deductions; keep copies for your records.",
  "Send via a trackable method and keep proof of delivery.",
  "If balancing against outstanding rent, clearly state amounts and dates.",
];

export default function DepositReturnLetterPage() {
  return (
    <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Template</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Security deposit return letter template.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Use this outline to return deposits clearly and on time. Adjust for local laws and lease language.
        </p>
      </header>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold text-rr-text-primary">What to include</p>
        <ul className="space-y-2 text-sm text-rr-text-primary/80">
          {sections.map((item) => (
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
          <PrimaryButton href="/contact?reason=forms&source=deposit-return-letter">Request an editable letter</PrimaryButton>
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
