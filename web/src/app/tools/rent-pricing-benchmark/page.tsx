"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type PropertyType = "house" | "condo" | "duplex" | "apartment";
type FAQ = { question: string; answer: string };

const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "duplex", label: "Duplex" },
  { value: "apartment", label: "Apartment" },
];

const conditionLabels: Record<number, string> = {
  1: "Needs work",
  2: "Below average",
  3: "Average",
  4: "Updated",
  5: "Excellent",
};

const faqs: FAQ[] = [
  {
    question: "How often should I update my rent price?",
    answer: "Check monthly while listed and at least 60 days before renewals. Small adjustments beat big swings after long vacancy.",
  },
  {
    question: "Does this guarantee I’ll get the suggested rent?",
    answer: "No tool can guarantee rent. This gives a data-backed range; photos, timing, and marketing quality still matter.",
  },
  {
    question: "What if my comps are unusual or limited?",
    answer: "Use the condition slider and parking toggle to nudge the range. If your property is unique, stay near the midpoint and test response.",
  },
  {
    question: "Should I lower price or improve the listing first?",
    answer: "Start with better photos, description, and showing speed. If inquiries stay slow after a week, tighten toward the midpoint.",
  },
];

export default function RentPricingPage() {
  const [inputs, setInputs] = useState({
    zip: "97202",
    propertyType: "house" as PropertyType,
    beds: 3,
    baths: 2,
    sqft: 1450,
    parking: true,
    condition: 4,
    currentRent: 2150,
  });

  const results = useMemo(() => {
    const base =
      950 +
      inputs.beds * 360 +
      inputs.baths * 180 +
      (inputs.sqft ? Math.min(inputs.sqft, 2500) * 0.65 : 0);

    const typeAdjustment =
      inputs.propertyType === "house"
        ? 75
        : inputs.propertyType === "condo"
          ? -25
          : inputs.propertyType === "duplex"
            ? 0
            : -50;

    const conditionFactor = 0.86 + (inputs.condition - 3) * 0.06; // ~0.74–1.1
    const parkingAdjustment = inputs.parking ? 85 : 0;
    const midpoint = (base + typeAdjustment + parkingAdjustment) * conditionFactor;

    const lower = midpoint * 0.96;
    const upper = midpoint * 1.04;

    const suggested = Math.round((lower + upper) / 2);

    let pricingStatus: "under" | "over" | "within" = "within";
    let delta = 0;
    if (inputs.currentRent) {
      delta = inputs.currentRent - suggested;
      if (delta <= -75) pricingStatus = "under";
      else if (delta >= 75) pricingStatus = "over";
    }

    const competition =
      suggested < 1600 ? "Medium" : suggested < 2300 ? "Medium/High" : "High";

    return {
      lower: Math.round(lower),
      upper: Math.round(upper),
      suggested,
      status: pricingStatus,
      delta,
      competition,
    };
  }, [inputs]);

  return (
    <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-cover bg-center bg-no-repeat shadow-[var(--shadow-card)]">
        <div className="relative bg-gradient-to-br from-rr-hero-bg/92 via-rr-hero-bg-secondary/82 to-rr-hero-deepgreen/78 p-8 md:p-12">
          <div className="space-y-6 text-white md:max-w-3xl">
            <Eyebrow tone="dark">Rent Price Calculator</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Get a data-backed rent range in under a minute.
            </h1>
            <p className="text-sm leading-relaxed text-rr-hero-highlight/90">
              Enter your basics—beds, baths, condition—and see a recommended range, suggested price, and whether you’re
              under- or overpricing.
            </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#tool" tone="hero">
              Run the calculator
            </PrimaryButton>
            <GhostButton href="/property-management" tone="hero">
              Talk with a pricing expert
            </GhostButton>
          </div>
        </div>
        </div>
      </section>

      <section id="tool" className="grid gap-6 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-card)] md:grid-cols-[1fr_0.95fr] md:p-8">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Inputs"
            title="Property details"
            description="Plug in the essentials so we can estimate a realistic rent range."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="ZIP or neighborhood"
              value={inputs.zip}
              onChange={(zip) => setInputs((prev) => ({ ...prev, zip }))}
              placeholder="e.g., 97202"
            />
            <SelectField
              label="Property type"
              value={inputs.propertyType}
              onChange={(propertyType) => setInputs((prev) => ({ ...prev, propertyType }))}
              options={propertyTypes}
            />
            <NumberField
              label="Beds"
              value={inputs.beds}
              min={0}
              max={8}
              onChange={(beds) => setInputs((prev) => ({ ...prev, beds }))}
            />
            <NumberField
              label="Baths"
              value={inputs.baths}
              min={0}
              max={6}
              step={0.5}
              onChange={(baths) => setInputs((prev) => ({ ...prev, baths }))}
            />
            <NumberField
              label="Square footage"
              value={inputs.sqft}
              min={300}
              max={4500}
              step={50}
              onChange={(sqft) => setInputs((prev) => ({ ...prev, sqft }))}
              helper="Optional but improves accuracy."
            />
            <NumberField
              label="Current asking rent"
              value={inputs.currentRent}
              min={0}
              max={8000}
              step={25}
              onChange={(currentRent) => setInputs((prev) => ({ ...prev, currentRent }))}
              helper="We’ll show if that’s under/over market."
            />
          </div>
          <div className="space-y-3 rounded-[1.05rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
            <label className="flex items-center justify-between text-sm font-semibold text-rr-text-primary">
              Condition <span className="text-rr-text-primary/75">{conditionLabels[inputs.condition]}</span>
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={inputs.condition}
              onChange={(e) => setInputs((prev) => ({ ...prev, condition: Number(e.target.value) }))}
              className="w-full accent-rr-accent-gold"
            />
            <label className="flex items-center gap-3 text-sm font-semibold text-rr-text-primary">
              <input
                type="checkbox"
                checked={inputs.parking}
                onChange={(e) => setInputs((prev) => ({ ...prev, parking: e.target.checked }))}
                className="h-4 w-4 rounded border-rr-border-gray text-rr-accent-darkteal focus:ring-rr-accent-darkteal"
              />
              Parking included
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeader
            eyebrow="Results"
            title="Recommended rent range"
            description="Instant range plus a suggested price based on condition and amenities."
          />
          <div className="rounded-[1.1rem] border border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/40 to-rr-rent-grad-end p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Range</p>
              <span className="rounded-full bg-rr-accent-gold/25 px-3 py-1 text-[11px] font-semibold text-rr-accent-darkteal">
                {results.competition} competition
              </span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-rr-text-primary">
              {formatCurrency(results.lower)} – {formatCurrency(results.upper)}
            </p>
            <p className="text-sm text-rr-text-primary/70">Based on inputs for {inputs.beds}bd / {inputs.baths}ba in {inputs.zip || "your area"}.</p>

            <div className="mt-6 space-y-2 rounded-[1rem] border border-rr-border-gray bg-rr-surface-white/80 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-rr-text-primary">Suggested price</p>
                <StatusPill status={results.status} delta={results.delta} />
              </div>
              <p className="text-2xl font-semibold text-rr-text-primary">{formatCurrency(results.suggested)}</p>
              {inputs.currentRent ? (
                <p className="text-sm text-rr-text-primary/75">
                  Current asking: {formatCurrency(inputs.currentRent)} ({results.status === "within" ? "within range" : `${results.status === "under" ? "under" : "over"} by ${formatCurrency(Math.abs(results.delta))}`})
                </p>
              ) : (
                <p className="text-sm text-rr-text-primary/75">Add your current asking rent to see under/overpricing.</p>
              )}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <InsightCard
              title="Action"
              items={[
                results.status === "under"
                  ? "You may be underpricing; test a bump toward the suggested price."
                  : results.status === "over"
                    ? "You may be overpricing; tighten toward the midpoint to cut vacancy."
                    : "You’re within range; focus on marketing speed to reduce vacancy.",
              ]}
            />
            <InsightCard
              title="Next steps"
              items={[
                "Refresh photos + highlight amenities that match comps.",
                "Re-check pricing monthly if days-on-market rise.",
              ]}
            />
          </div>

          <FAQSection faqs={faqs} />

          <CTACluster />
        </div>
      </section>
    </main>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "bg-white/12 text-white border border-white/25"
      : "bg-rr-label-tan/40 text-rr-accent-darkteal border border-rr-border-gray/80";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${styles}`}>
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

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      />
    </label>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  helper,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  helper?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      />
      {helper ? <p className="text-xs font-normal text-rr-text-primary/65">{helper}</p> : null}
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: PropertyType) => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as PropertyType)}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function StatusPill({ status, delta }: { status: "under" | "over" | "within"; delta: number }) {
  const label =
    status === "under" ? "Underpriced" : status === "over" ? "Overpriced" : "Within range";
  const tone =
    status === "under"
      ? "bg-rr-status-success/15 text-rr-tool-darkteal border-rr-status-success/50"
      : status === "over"
        ? "bg-rr-status-alert/15 text-rr-status-alert border-rr-status-alert/50"
        : "bg-rr-surface-softgray text-rr-text-primary border-rr-border-gray";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}>
      {label}
      {delta !== 0 ? <span>{delta > 0 ? "+" : "-"}{formatCurrency(Math.abs(delta))}</span> : null}
    </span>
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
        <p className="font-semibold text-rr-text-primary">Need a second set of eyes?</p>
        <p>We’ll run your property through live comps and send a custom rent plan.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton href="/contact?reason=Rent%20Price%20Calculator&source=rent-price-calculator">
          Request a free rental analysis
        </PrimaryButton>
        <GhostButton href="/property-management">See property management services</GhostButton>
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "hero";
}) {
  const styles =
    tone === "hero"
      ? "bg-rr-accent-gold !text-rr-accent-darkteal"
      : "bg-rr-accent-gold text-rr-hero-bg";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 ${styles}`}
    >
      {children}
    </Link>
  );
}

function GhostButton({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "hero";
}) {
  const styles =
    tone === "hero"
      ? "border border-white text-white hover:bg-white/05"
      : "border border-rr-accent-darkteal text-rr-accent-darkteal hover:bg-rr-accent-darkteal/05";
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${styles}`}>
      {children}
    </Link>
  );
}
