"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { HowToSchema } from "@/app/components/howto-schema";

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: "What is a good cap rate for rental property?",
    answer:
      "Cap rates vary by market and property type. Generally, 4-6% is common in stable, appreciating markets, while 8-12% is typical in higher-risk or secondary markets. A 'good' rate depends on your investment goals, risk tolerance, and local market conditions.",
  },
  {
    question: "What's the difference between cap rate and ROI?",
    answer:
      "Cap rate measures property value relative to NOI without considering financing. ROI (Return on Investment) factors in your actual cash invested, including down payment and financing costs. Use cap rate to compare properties; use ROI to evaluate your specific deal.",
  },
  {
    question: "Does cap rate include mortgage payments?",
    answer:
      "No. Cap rate is calculated before financing costs. It represents the return if you paid all cash. This makes it useful for comparing properties regardless of how they're financed.",
  },
  {
    question: "Why do lower cap rates mean higher prices?",
    answer:
      "Cap rate = NOI / Property Value. When investors accept lower returns (lower cap rates), they're willing to pay more for the same income stream. This typically happens in desirable, stable markets where appreciation potential is high.",
  },
  {
    question: "Should I use cap rate for single-family rentals?",
    answer:
      "Cap rate works best for comparing similar income-producing properties. For single-family homes, also consider appreciation potential, neighborhood trends, and cash-on-cash return since these properties often have different investment dynamics than multifamily.",
  },
];

const capRateBenchmarks = [
  { range: "3-5%", market: "Class A / Prime markets", risk: "Low", example: "San Francisco, NYC" },
  { range: "5-7%", market: "Stable suburban", risk: "Low-Medium", example: "Denver suburbs, Austin" },
  { range: "7-9%", market: "Secondary markets", risk: "Medium", example: "Indianapolis, Memphis" },
  { range: "9-12%+", market: "Value-add / Tertiary", risk: "Higher", example: "Rural, distressed areas" },
];

export default function CapRateCalculatorPage() {
  const [inputs, setInputs] = useState({
    propertyValue: 350000,
    monthlyRent: 2200,
    vacancyRate: 5,
    propertyTaxes: 3500,
    insurance: 1200,
    maintenance: 2400,
    propertyManagement: 0,
    hoa: 0,
    utilities: 0,
    other: 0,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const results = useMemo(() => {
    const propertyValue = Math.max(Number(inputs.propertyValue) || 0, 1);
    const monthlyRent = Math.max(Number(inputs.monthlyRent) || 0, 0);
    const vacancyRate = Math.min(Math.max(Number(inputs.vacancyRate) || 0, 0), 100);

    const grossAnnualRent = monthlyRent * 12;
    const vacancyLoss = grossAnnualRent * (vacancyRate / 100);
    const effectiveGrossIncome = grossAnnualRent - vacancyLoss;

    const totalExpenses =
      (Number(inputs.propertyTaxes) || 0) +
      (Number(inputs.insurance) || 0) +
      (Number(inputs.maintenance) || 0) +
      (Number(inputs.propertyManagement) || 0) +
      (Number(inputs.hoa) || 0) +
      (Number(inputs.utilities) || 0) +
      (Number(inputs.other) || 0);

    const noi = effectiveGrossIncome - totalExpenses;
    const capRate = (noi / propertyValue) * 100;
    const grm = monthlyRent > 0 ? propertyValue / grossAnnualRent : 0;
    const expenseRatio = effectiveGrossIncome > 0 ? (totalExpenses / effectiveGrossIncome) * 100 : 0;

    // What price would give different cap rates
    const priceAt5Cap = noi > 0 ? noi / 0.05 : 0;
    const priceAt7Cap = noi > 0 ? noi / 0.07 : 0;
    const priceAt10Cap = noi > 0 ? noi / 0.1 : 0;

    return {
      grossAnnualRent,
      vacancyLoss,
      effectiveGrossIncome,
      totalExpenses,
      noi,
      capRate,
      grm,
      expenseRatio,
      priceAt5Cap,
      priceAt7Cap,
      priceAt10Cap,
    };
  }, [inputs]);

  const howToSteps = [
    {
      name: "Enter property value",
      text: "Input the purchase price or current market value of the rental property.",
    },
    {
      name: "Add rental income",
      text: "Enter the monthly rent and expected vacancy rate to calculate effective gross income.",
    },
    {
      name: "Input operating expenses",
      text: "Add property taxes, insurance, maintenance, and other annual operating costs.",
    },
    {
      name: "Review cap rate and metrics",
      text: "The calculator shows your cap rate, NOI, GRM, and price comparisons at different cap rates.",
    },
  ];

  return (
    <>
      <HowToSchema
        name="Cap Rate Calculator"
        description="Calculate the capitalization rate for rental properties to compare investment returns and analyze real estate deals."
        url="/tools/cap-rate-calculator"
        steps={howToSteps}
        totalTime="PT3M"
        yield="Cap rate analysis with NOI and investment metrics"
      />
      <main
        className="relative mx-auto w-full space-y-10 px-4 py-8 text-rr-text-primary md:px-6 md:py-10"
        style={{ maxWidth: "1280px" }}
      >
        <section className="grid max-h-[340px] grid-cols-1 items-start gap-8 py-12 md:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <Eyebrow>Cap Rate Calculator</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Calculate your property&apos;s cap rate
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-rr-text-primary/80">
              Capitalization rate measures a property&apos;s return independent of financing. Use it to compare deals
              and assess investment potential.
            </p>
            <PrimaryButton href="#tool">Calculate cap rate</PrimaryButton>
          </div>
          <div className="hidden rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)] md:block">
            <p className="text-sm font-semibold text-rr-text-primary">Cap rate formula</p>
            <div className="mt-3 rounded-lg bg-rr-surface-white p-3 font-mono text-sm">
              <p className="text-rr-accent-darkteal">Cap Rate = NOI / Property Value</p>
              <p className="mt-2 text-xs text-rr-text-primary/70">
                NOI = Gross Rent - Vacancy - Operating Expenses
              </p>
            </div>
            <p className="mt-3 text-xs text-rr-text-primary/70">
              Higher cap rate = higher return but often higher risk. Lower cap rate = lower return but typically more
              stable.
            </p>
          </div>
        </section>

        <section id="tool" className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[45%_55%] md:py-10">
          <div className="space-y-5">
            <div className="space-y-4 rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite/60 p-5 shadow-[var(--shadow-soft)]">
              <SectionHeader eyebrow="Step 1" title="Property & income" />
              <div className="grid grid-cols-2 gap-5">
                <NumberField
                  label="Property value / price"
                  prefix="$"
                  value={inputs.propertyValue}
                  min={0}
                  max={10000000}
                  step={5000}
                  onChange={(propertyValue) => setInputs((prev) => ({ ...prev, propertyValue }))}
                />
                <NumberField
                  label="Monthly rent"
                  prefix="$"
                  value={inputs.monthlyRent}
                  min={0}
                  max={50000}
                  step={50}
                  onChange={(monthlyRent) => setInputs((prev) => ({ ...prev, monthlyRent }))}
                />
                <NumberField
                  label="Vacancy rate"
                  suffix="%"
                  value={inputs.vacancyRate}
                  min={0}
                  max={50}
                  step={1}
                  helper="Typical: 5-8%"
                  onChange={(vacancyRate) => setInputs((prev) => ({ ...prev, vacancyRate }))}
                />
              </div>
            </div>

            <div className="space-y-4 rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
              <SectionHeader eyebrow="Step 2" title="Annual operating expenses" />
              <div className="grid grid-cols-2 gap-4">
                <NumberField
                  label="Property taxes"
                  prefix="$"
                  value={inputs.propertyTaxes}
                  min={0}
                  max={100000}
                  step={100}
                  helper="/year"
                  onChange={(propertyTaxes) => setInputs((prev) => ({ ...prev, propertyTaxes }))}
                />
                <NumberField
                  label="Insurance"
                  prefix="$"
                  value={inputs.insurance}
                  min={0}
                  max={20000}
                  step={100}
                  helper="/year"
                  onChange={(insurance) => setInputs((prev) => ({ ...prev, insurance }))}
                />
                <NumberField
                  label="Maintenance / repairs"
                  prefix="$"
                  value={inputs.maintenance}
                  min={0}
                  max={50000}
                  step={100}
                  helper="/year (typical: 1% of value)"
                  onChange={(maintenance) => setInputs((prev) => ({ ...prev, maintenance }))}
                />
                <NumberField
                  label="Property management"
                  prefix="$"
                  value={inputs.propertyManagement}
                  min={0}
                  max={50000}
                  step={100}
                  helper="/year (typical: 8-10% of rent)"
                  onChange={(propertyManagement) => setInputs((prev) => ({ ...prev, propertyManagement }))}
                />
              </div>

              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setShowAdvanced((prev) => !prev)}
                type="button"
              >
                <span className="text-sm font-semibold text-rr-accent-darkteal">
                  {showAdvanced ? "Hide" : "Show"} additional expenses
                </span>
                <span className="text-xl text-rr-text-primary/70">{showAdvanced ? "-" : "+"}</span>
              </button>

              {showAdvanced && (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <NumberField
                    label="HOA fees"
                    prefix="$"
                    value={inputs.hoa}
                    min={0}
                    max={20000}
                    step={50}
                    helper="/year"
                    onChange={(hoa) => setInputs((prev) => ({ ...prev, hoa }))}
                  />
                  <NumberField
                    label="Utilities (landlord-paid)"
                    prefix="$"
                    value={inputs.utilities}
                    min={0}
                    max={10000}
                    step={50}
                    helper="/year"
                    onChange={(utilities) => setInputs((prev) => ({ ...prev, utilities }))}
                  />
                  <NumberField
                    label="Other expenses"
                    prefix="$"
                    value={inputs.other}
                    min={0}
                    max={50000}
                    step={100}
                    helper="/year"
                    onChange={(other) => setInputs((prev) => ({ ...prev, other }))}
                  />
                </div>
              )}
            </div>

            <FAQSection faqs={faqs} />
          </div>

          <div className="space-y-5">
            <SectionHeader eyebrow="Results" title="Cap rate analysis" description="Based on your inputs" />

            <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Cap Rate</p>
                <CapRateBadge rate={results.capRate} />
              </div>
              <p className="mt-2 text-[42px] font-bold leading-tight text-rr-text-primary">
                {results.capRate.toFixed(2)}%
              </p>
              <p className="text-sm text-rr-text-primary/70">
                Net Operating Income of {formatCurrency(results.noi)} on a {formatCurrency(inputs.propertyValue)}{" "}
                property.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
                <Metric label="Gross Annual Rent" value={formatCurrency(results.grossAnnualRent)} />
                <Metric label="Vacancy Loss" value={formatCurrency(results.vacancyLoss)} />
                <Metric label="Effective Income" value={formatCurrency(results.effectiveGrossIncome)} />
                <Metric label="Total Expenses" value={formatCurrency(results.totalExpenses)} />
                <Metric label="NOI" value={formatCurrency(results.noi)} highlight />
                <Metric label="GRM" value={results.grm.toFixed(1) + "x"} />
              </div>

              <div className="mt-5 space-y-2 rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                <p className="text-sm font-semibold text-rr-text-primary">Price at different cap rates</p>
                <p className="text-xs text-rr-text-primary/70">
                  What would this NOI be worth at different cap rates?
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-rr-surface-white p-2">
                    <p className="text-xs text-rr-text-primary/70">@ 5% cap</p>
                    <p className="text-sm font-semibold text-rr-text-primary">{formatCurrency(results.priceAt5Cap)}</p>
                  </div>
                  <div className="rounded-lg bg-rr-surface-white p-2">
                    <p className="text-xs text-rr-text-primary/70">@ 7% cap</p>
                    <p className="text-sm font-semibold text-rr-text-primary">{formatCurrency(results.priceAt7Cap)}</p>
                  </div>
                  <div className="rounded-lg bg-rr-surface-white p-2">
                    <p className="text-xs text-rr-text-primary/70">@ 10% cap</p>
                    <p className="text-sm font-semibold text-rr-text-primary">{formatCurrency(results.priceAt10Cap)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2 rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4">
                <p className="text-sm font-semibold text-rr-text-primary">Need accurate rent data?</p>
                <p className="text-sm text-rr-text-primary/80">
                  Your cap rate is only as good as your rent estimate. Get market-based rent comps for your property.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <PrimaryButton href="/tools/rent-estimate-calculator">Get rent estimate</PrimaryButton>
                  <GhostButton href="/property-management">Talk to an expert</GhostButton>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-5 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Cap rate benchmarks by market</p>
              <div className="mt-3 space-y-2">
                {capRateBenchmarks.map((benchmark) => (
                  <div
                    key={benchmark.range}
                    className="flex items-center justify-between rounded-lg bg-rr-surface-white p-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-rr-accent-darkteal">{benchmark.range}</p>
                      <p className="text-xs text-rr-text-primary/70">{benchmark.market}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-rr-text-primary/70">{benchmark.risk} risk</p>
                      <p className="text-xs text-rr-text-primary/50">{benchmark.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
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
  suffix,
  onChange,
  helper,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
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
        {suffix ? <span className="pr-3 text-sm text-rr-text-primary/70">{suffix}</span> : null}
      </div>
      {helper ? <p className="text-xs font-normal text-rr-text-primary/65">{helper}</p> : null}
    </label>
  );
}

function Metric({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-[0.9rem] border border-rr-border-gray p-3 shadow-[var(--shadow-soft)] ${highlight ? "bg-rr-accent-darkteal/5" : "bg-rr-surface-white"}`}
    >
      <p className="text-xs uppercase tracking-[0.08em] text-rr-text-primary/70">{label}</p>
      <p className={`text-lg font-semibold ${highlight ? "text-rr-accent-darkteal" : "text-rr-text-primary"}`}>
        {value}
      </p>
    </div>
  );
}

function CapRateBadge({ rate }: { rate: number }) {
  let color = "bg-rr-status-alert/15 text-rr-status-alert";
  let label = "Below average";

  if (rate >= 8) {
    color = "bg-rr-status-success/15 text-rr-status-success";
    label = "Strong return";
  } else if (rate >= 5) {
    color = "bg-rr-accent-gold/20 text-rr-accent-darkteal";
    label = "Typical range";
  }

  return <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${color}`}>{label}</span>;
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
