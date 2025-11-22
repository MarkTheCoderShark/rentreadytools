"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type UpgradeOption = {
  value: string;
  label: string;
  defaultCost: number;
  defaultIncrease: number;
};

type FAQ = { question: string; answer: string };

const upgrades: UpgradeOption[] = [
  { value: "paint", label: "Full interior paint", defaultCost: 2200, defaultIncrease: 120 },
  { value: "flooring", label: "LVP flooring (main areas)", defaultCost: 3800, defaultIncrease: 170 },
  { value: "appliances", label: "Appliance package refresh", defaultCost: 3200, defaultIncrease: 150 },
  { value: "bath", label: "Bathroom refresh", defaultCost: 4500, defaultIncrease: 210 },
  { value: "kitchen", label: "Kitchen refresh (countertops/backsplash)", defaultCost: 6800, defaultIncrease: 260 },
];

const faqs: FAQ[] = [
  {
    question: "What’s a good payback period for rental upgrades?",
    answer: "Under ~24 months is generally strong. 24–30 months can be okay if the upgrade reduces turnover risk. Longer than that is usually slow.",
  },
  {
    question: "Should I include vacancy during the project?",
    answer: "Yes. If the work forces vacancy, factor those lost days into total cost. Faster execution or doing work between tenants improves ROI.",
  },
  {
    question: "How accurate are the default rent lifts?",
    answer: "They’re ballpark estimates. Your market, property type, and finish level matter. Adjust the expected increase based on comps and renter expectations.",
  },
  {
    question: "Is it better to do multiple small upgrades or one big one?",
    answer: "Start with fast-payback items (paint, fixtures, minor flooring) before big kitchen/bath projects unless comps clearly support a higher lift.",
  },
];

export default function RenovationROIPage() {
  const [inputs, setInputs] = useState({
    currentRent: 2100,
    upgrade: "flooring",
    cost: 3800,
    expectedIncrease: 170,
  });

  const results = useMemo(() => {
    const monthlyIncrease = Math.max(inputs.expectedIncrease, 0);
    const annualIncrease = monthlyIncrease * 12;
    const newRent = inputs.currentRent + monthlyIncrease;
    const paybackMonths = monthlyIncrease > 0 ? inputs.cost / monthlyIncrease : Infinity;

    let verdict: "Good" | "Marginal" | "Slow" = "Slow";
    if (paybackMonths <= 18) verdict = "Good";
    else if (paybackMonths <= 30) verdict = "Marginal";

    return {
      monthlyIncrease,
      annualIncrease,
      newRent,
      paybackMonths,
      verdict,
    };
  }, [inputs]);

  return (
    <main
      className="relative mx-auto w-full space-y-10 px-4 py-8 text-rr-text-primary md:px-6 md:py-10"
      style={{ maxWidth: "1280px" }}
    >
      <section className="grid max-h-[340px] grid-cols-[1fr_300px] items-start gap-8 py-12">
        <div className="space-y-4">
          <Eyebrow>Rental Renovation ROI Calculator</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Model rent lift and payback before you spend.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-rr-text-primary/80">
            Choose an upgrade, enter cost, and see the expected rent increase and payback for rentals—not flips.
          </p>
          <PrimaryButton href="#tool">Run the ROI calculator</PrimaryButton>
        </div>
        <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">Tips</p>
          <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/75">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Target payback under 24 months for rentals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Match upgrades to neighborhood expectations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-alert" />
              <span>Account for vacancy during the project.</span>
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
              eyebrow="Inputs"
              title="Upgrade details"
              description="Start with your current rent, select an upgrade, and adjust the cost and rent lift."
            />
            <div className="grid grid-cols-2 gap-5">
              <NumberField
                label="Current monthly rent"
                prefix="$"
                value={inputs.currentRent}
                min={0}
                max={8000}
                step={25}
                onChange={(currentRent) => setInputs((prev) => ({ ...prev, currentRent }))}
              />
              <SelectField
                label="Upgrade type"
                value={inputs.upgrade}
                onChange={(upgrade) => {
                  const option = upgrades.find((u) => u.value === upgrade);
                  setInputs((prev) => ({
                    ...prev,
                    upgrade,
                    cost: option ? option.defaultCost : prev.cost,
                    expectedIncrease: option ? option.defaultIncrease : prev.expectedIncrease,
                  }));
                }}
                options={upgrades}
              />
              <NumberField
                label="Estimated upgrade cost"
                prefix="$"
                value={inputs.cost}
                min={0}
                max={50000}
                step={100}
                onChange={(cost) => setInputs((prev) => ({ ...prev, cost }))}
                helper="All-in cost including labor and materials."
              />
              <NumberField
                label="Expected monthly rent increase"
                prefix="$"
                value={inputs.expectedIncrease}
                min={0}
                max={2000}
                step={10}
                onChange={(expectedIncrease) => setInputs((prev) => ({ ...prev, expectedIncrease }))}
                helper="What you believe the upgrade will add monthly."
              />
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>

        <div className="space-y-5">
          <SectionHeader
            eyebrow="Results"
            title="ROI snapshot"
            description="New rent, annual lift, and payback period."
          />
          <div className="rounded-[12px] border border-rr-border-gray bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/40 to-rr-rent-grad-end p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">New estimated rent</p>
              <VerdictPill verdict={results.verdict} />
            </div>
            <p className="mt-2 text-3xl font-semibold text-rr-text-primary">{formatCurrency(results.newRent)}</p>
            <p className="text-sm text-rr-text-primary/75">
              +{formatCurrency(results.monthlyIncrease)} per month ({formatCurrency(results.annualIncrease)} per year).
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Metric label="Payback period" value={results.paybackMonths === Infinity ? "N/A" : `${results.paybackMonths.toFixed(1)} months`} />
              <Metric label="Annual rent lift" value={formatCurrency(results.annualIncrease)} />
              <Metric label="Upgrade cost" value={formatCurrency(inputs.cost)} />
              <Metric label="Current rent" value={formatCurrency(inputs.currentRent)} />
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InsightCard
                title="When it’s worth it"
                items={[
                  "Payback under ~24 months is typically strong for rentals.",
                  "Pair upgrades with lease renewal to avoid extra vacancy.",
                ]}
              />
              <InsightCard
                title="If payback is slow"
                items={[
                  "Downscope: focus on paint/fixtures before bigger projects.",
                  "Rebid labor or time the work between tenants to cut downtime.",
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

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
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

function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  prefix,
  onChange,
  helper,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  helper?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <div className="flex items-center rounded-lg border border-rr-border-gray bg-white shadow-[var(--shadow-soft)] focus-within:border-rr-accent-darkteal">
        {prefix ? <span className="pl-3 text-sm text-rr-text-primary/70">{prefix}</span> : null}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-lg px-3 py-2 text-sm font-normal text-rr-text-primary focus:outline-none"
        />
      </div>
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
  onChange: (value: string) => void;
  options: UpgradeOption[];
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

function VerdictPill({ verdict }: { verdict: "Good" | "Marginal" | "Slow" }) {
  const styles =
    verdict === "Good"
      ? "bg-rr-status-success/15 text-rr-tool-darkteal border-rr-status-success/40"
      : verdict === "Marginal"
        ? "bg-rr-accent-gold/20 text-rr-accent-darkteal border-rr-accent-gold/50"
        : "bg-rr-status-alert/15 text-rr-status-alert border-rr-status-alert/40";
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold ${styles}`}>
      {verdict} payback
    </span>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-white p-3 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-[0.08em] text-rr-text-primary/70">{label}</p>
      <p className="text-lg font-semibold text-rr-text-primary">{value}</p>
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
        <p className="font-semibold text-rr-text-primary">Want pro-grade numbers?</p>
        <p>We’ll price upgrades against comps and handle the project if you prefer.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton href="/contact?reason=Rental%20Renovation%20ROI%20Calculator&source=renovation-roi">
          Request an ROI consult
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
