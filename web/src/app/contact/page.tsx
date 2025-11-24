import type { Metadata } from "next";
import ContactForm from "../components/contact-form";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact RentReadyTools | Free Rental Analysis",
  description:
    "Get a free rental analysis and consult with the RentReadyTools team about property management services.",
  alternates: {
    canonical: "https://rentreadytools.com/contact",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { reason?: string; source?: string };
}) {
  const defaultReason = searchParams?.reason || undefined;
  const defaultSource = searchParams?.source || "contact";

  return (
    <main className="relative mx-auto max-w-6xl space-y-10 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <section className="space-y-4">
        <Eyebrow>Talk with the team</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Request a free rental analysis or consultation.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          We’ll respond with a custom plan covering rent price, vacancy reduction, and upgrade ROI. No spam or marketing
          drip—just a human reply.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <ContactForm defaultReason={defaultReason} defaultSource={defaultSource} />
        <aside className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">What to include</p>
          <ul className="space-y-2 text-sm text-rr-text-primary/75">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
              <span>Property address or ZIP, beds/baths, and condition.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
              <span>Your current rent (if listed) and days-on-market or vacancy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
              <span>What you want: pricing clarity, vacancy cut, readiness help, or ROI plan.</span>
            </li>
          </ul>
          <div className="space-y-1 rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 text-sm text-rr-text-primary/75">
            <p className="font-semibold text-rr-text-primary">Response time</p>
            <p>We aim to reply within 1 business day with a clear next step (no call booking required).</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rr-accent-darkteal">
      {children}
    </span>
  );
}
