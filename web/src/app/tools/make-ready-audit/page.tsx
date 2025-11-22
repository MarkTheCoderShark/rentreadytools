"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
type FAQ = { question: string; answer: string };

type Item = {
  id: string;
  label: string;
  category: "Safety" | "Cosmetic" | "Systems";
};

const items: Item[] = [
  { id: "locks", label: "Locks rekeyed and windows latch securely", category: "Safety" },
  { id: "detectors", label: "Smoke/CO detectors tested with fresh batteries", category: "Safety" },
  { id: "gfi", label: "GFCI outlets tested in wet areas", category: "Safety" },
  { id: "handrails", label: "Handrails stable; trip hazards cleared", category: "Safety" },
  { id: "paint", label: "High-traffic scuffs touched up; no peeling", category: "Cosmetic" },
  { id: "flooring", label: "Floors cleaned; no loose transitions", category: "Cosmetic" },
  { id: "lighting", label: "All bulbs working; common fixtures updated", category: "Cosmetic" },
  { id: "blinds", label: "Blinds/shades intact and clean", category: "Cosmetic" },
  { id: "filters", label: "HVAC filter replaced and system test-run", category: "Systems" },
  { id: "water", label: "No active leaks; water heater at safe temp", category: "Systems" },
  { id: "appliances", label: "Appliances cleaned and working", category: "Systems" },
  { id: "plumbing", label: "Sinks/tubs drain well; no running toilets", category: "Systems" },
];

const faqs: FAQ[] = [
  {
    question: "Does this replace a professional inspection?",
    answer: "No. It’s a readiness checklist to prevent move-in issues. You should still comply with local safety/inspection rules.",
  },
  {
    question: "How is the score calculated?",
    answer: "Each essential item is worth equal points across safety, cosmetic, and systems. Checked items raise the score toward 100.",
  },
  {
    question: "What’s a good readiness score to list the property?",
    answer: "Aim for 80%+ before marketing photos/showings. Under 70% often leads to complaints, concessions, or delays.",
  },
  {
    question: "What if I’m short on time?",
    answer: "Prioritize safety (locks, detectors, trip hazards) first, then high-visibility cosmetic fixes. If still tight, book a make-ready crew.",
  },
];

export default function MoveInReadinessPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set(["detectors", "filters", "lighting"]));

  const { score, remainingHours, categoryProgress, remainingItems } = useMemo(() => {
    const total = items.length;
    const done = items.filter((item) => checked.has(item.id)).length;
    const score = Math.round((done / total) * 100);
    const remaining = total - done;
    const remainingHours = Math.max(remaining * 0.75, 0);

    const categories = items.reduce<Record<string, { done: number; total: number }>>((acc, item) => {
      const bucket = acc[item.category] || { done: 0, total: 0 };
      bucket.total += 1;
      if (checked.has(item.id)) bucket.done += 1;
      acc[item.category] = bucket;
      return acc;
    }, {});

    const categoryProgress = Object.entries(categories).map(([category, data]) => ({
      category,
      percent: Math.round((data.done / data.total) * 100),
      done: data.done,
      total: data.total,
    }));

    const remainingItems = items.filter((item) => !checked.has(item.id));

    return { score, remainingHours, categoryProgress, remainingItems };
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <main
      className="relative mx-auto w-full space-y-10 px-4 py-8 text-rr-text-primary md:px-6 md:py-10"
      style={{ maxWidth: "1280px" }}
    >
      <section className="grid max-h-[340px] grid-cols-[1fr_300px] items-start gap-8 py-12">
        <div className="space-y-4">
          <Eyebrow>Move-In Readiness Checklist</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Quick readiness score—no overwhelming checklist.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-rr-text-primary/80">
            Check safety, cosmetic, and systems essentials. See what’s left and how long it might take.
          </p>
          <PrimaryButton href="#tool">Check readiness</PrimaryButton>
        </div>
        <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">What this covers</p>
          <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/75">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Life-safety basics: locks, detectors, trip hazards.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Cosmetic issues that create move-in complaints.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Systems to test before showings and move-in.</span>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="tool"
        className="grid grid-cols-[45%_55%] gap-8 py-8 md:py-10"
      >
        <div className="space-y-5">
          <div className="space-y-4 rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite/60 p-5 shadow-[var(--shadow-soft)]">
            <SectionHeader
              eyebrow="Checklist"
              title="Tap through the essentials"
              description="Grouped by safety, cosmetic, and systems so you don’t miss the critical items."
            />
            <div className="space-y-4">
              {["Safety", "Cosmetic", "Systems"].map((category) => (
                <div key={category} className="space-y-3 rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-rr-text-primary">{category}</p>
                    <ProgressBar percent={categoryProgress.find((c) => c.category === category)?.percent || 0} />
                  </div>
                  <div className="space-y-2">
                    {items
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <label key={item.id} className="flex items-start gap-3 rounded-lg bg-rr-surface-offwhite/60 px-3 py-2 text-sm font-medium text-rr-text-primary shadow-[var(--shadow-soft)]">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 rounded border-rr-border-gray text-rr-accent-darkteal focus:ring-rr-accent-darkteal"
                            checked={checked.has(item.id)}
                            onChange={() => toggleItem(item.id)}
                          />
                          <span className="leading-relaxed text-rr-text-primary/80">{item.label}</span>
                        </label>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>

        <div className="space-y-5">
          <SectionHeader
            eyebrow="Results"
            title="Move-in readiness score"
            description="We translate your checks into a score and an estimated effort to finish."
          />
          <div className="rounded-[12px] border border-rr-border-gray bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/35 to-rr-rent-grad-end p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Overall</p>
              <span className="rounded-full bg-rr-accent-gold/25 px-3 py-1 text-[11px] font-semibold text-rr-accent-darkteal">
                {score >= 80 ? "Ready" : score >= 60 ? "Close" : "Work left"}
              </span>
            </div>
            <p className="mt-2 text-4xl font-semibold text-rr-text-primary">{score}%</p>
            <p className="text-sm text-rr-text-primary/75">
              {checked.size} of {items.length} items done. About {remainingHours.toFixed(1)} hours of work remaining.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InsightCard
                title="What’s left"
                items={
                  remainingItems.length
                    ? remainingItems.slice(0, 3).map((item) => item.label)
                    : ["Nothing major left—schedule final walkthrough."]
                }
              />
              <InsightCard
                title="Focus areas"
                items={[
                  "Fix safety blockers first to avoid move-in delays.",
                  "Batch cosmetic touch-ups; photograph after completion.",
                ]}
              />
            </div>
          </div>

          <CTACluster />
        </div>
      </section>
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

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-1">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">{title}</h2>
      {description ? <p className="text-sm leading-relaxed text-rr-text-primary/75">{description}</p> : null}
    </div>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 w-28 rounded-full bg-rr-surface-white shadow-inner">
      <div
        className="h-2 rounded-full bg-rr-tool-teal transition-all"
        style={{ width: `${Math.min(percent, 100)}%` }}
      />
    </div>
  );
}

function InsightCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-semibold text-rr-text-primary">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-rr-text-primary/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rr-tool-teal" />
            <span className="text-rr-text-primary/75">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-semibold text-rr-text-primary">FAQ</p>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.question} className="space-y-1 rounded-lg bg-rr-surface-offwhite/60 p-3">
            <p className="text-sm font-semibold text-rr-text-primary">{faq.question}</p>
            <p className="text-sm text-rr-text-primary/75">{faq.answer}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}

function CTACluster() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite/80 p-4">
      <div className="space-y-1 text-sm text-rr-text-primary/80">
        <p className="font-semibold text-rr-text-primary">Short on time?</p>
        <p>Book a make-ready crew walkthrough and we’ll finish the list.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton href="/contact?reason=Move-In%20Readiness%20Checklist&source=move-in-readiness-checklist">
          Request a walkthrough
        </PrimaryButton>
        <GhostButton href="/property-management">See property management services</GhostButton>
      </div>
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-rr-accent-gold px-5 py-3 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-rr-accent-darkteal px-5 py-3 text-sm font-semibold text-rr-accent-darkteal transition hover:bg-rr-accent-darkteal/05"
    >
      {children}
    </Link>
  );
}
