"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import { HowToSchema } from "@/app/components/howto-schema";

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: "What’s a normal vacancy rate?",
    answer: "Aim for roughly 5–7 days per turnover in balanced markets. Anything over 10–14 days is usually a signal to fix pricing or process.",
  },
  {
    question: "Should I count my own time as a cost?",
    answer: "Yes. Showings, cleaning, and coordination are hours you could spend elsewhere. Putting a dollar value to your time shows the true cost.",
  },
  {
    question: "How do I lower vacancy without just dropping rent?",
    answer: "List earlier, improve photos, reply fast to inquiries, and tighten make-ready timelines. Small pricing adjustments beat big last-minute drops.",
  },
  {
    question: "Does this include the cost of repairs?",
    answer: "This calculator focuses on time and missed rent. You can add repair costs separately when modeling ROI or include them in your hourly value.",
  },
];

export default function VacancyCostPage() {
  const [inputs, setInputs] = useState({
    monthlyRent: 2100,
    daysVacant: 12,
    zipOrCity: "",
    hourlyValue: 50,
    hoursSpent: 12,
    cashTurnoverCosts: 0,
    rentConcession: 0,
  });
  const [showRefine, setShowRefine] = useState(false);
  const refineRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    const monthlyRent = Number(inputs.monthlyRent) || 0;
    const daysVacant = Math.max(Number(inputs.daysVacant) || 0, 0);
    const hoursSpent = Math.max(Number(inputs.hoursSpent) || 0, 0);
    const hourlyValue = Math.max(Number(inputs.hourlyValue) || 0, 0);
    const cashTurnoverCosts = Math.max(Number(inputs.cashTurnoverCosts) || 0, 0);
    const rentConcession = Math.max(Number(inputs.rentConcession) || 0, 0);

    const dailyRent = monthlyRent > 0 ? monthlyRent / 30 : 0;
    const vacancyLoss = dailyRent * daysVacant;
    const timeCost = hoursSpent * hourlyValue;
    const hardCost = cashTurnoverCosts;
    const concessionCost = rentConcession;
    const totalCost = vacancyLoss + timeCost + hardCost + concessionCost;
    const costPerDayVacant = daysVacant > 0 ? totalCost / daysVacant : 0;
    const pctOfMonth = monthlyRent ? (totalCost / monthlyRent) * 100 : 0;

    return {
      dailyRent,
      vacancyLoss,
      timeCost,
      hardCost,
      concessionCost,
      totalCost,
      costPerDayVacant,
      pctOfMonth,
    };
  }, [inputs]);

  const howToSteps = [
    {
      name: "Enter monthly rent",
      text: "Input the monthly rent amount to calculate daily loss for each vacant day.",
    },
    {
      name: "Enter days vacant",
      text: "Enter the number of days the unit is typically vacant between tenants.",
    },
    {
      name: "Add time and hard costs",
      text: "Include your hourly rate and hours spent on showings, cleaning, and coordination. Add any cash costs for repairs, cleaning services, or concessions.",
    },
    {
      name: "Review total vacancy cost",
      text: "The calculator shows total cost, cost per day, and percentage of monthly rent lost to vacancy.",
    },
  ];

  return (
    <>
      <HowToSchema
        name="Vacancy Cost Calculator"
        description="Calculate the true cost of vacancy including missed rent, your time, and turnover expenses."
        url="/tools/vacancy-rate-calculator"
        steps={howToSteps}
        totalTime="PT3M"
        yield="Vacancy cost analysis"
      />
      <main
      className="relative mx-auto w-full space-y-10 px-4 py-8 text-rr-text-primary md:px-6 md:py-10"
      style={{ maxWidth: "1280px" }}
    >
      <section className="grid max-h-[340px] grid-cols-[1fr_300px] items-start gap-8 py-12">
        <div className="space-y-4">
          <Eyebrow>Vacancy Cost Calculator</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            See how much vacancy is costing you
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-rr-text-primary/80">
            Count every empty day and your own time—get the total loss instantly.
          </p>
          <PrimaryButton href="#tool">Calculate vacancy cost</PrimaryButton>
        </div>
        <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">Quick facts</p>
          <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/75">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-alert" />
              <span>Every 7 extra vacant days ≈ 23% of one month’s rent.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-alert" />
              <span>Your time is part of the loss—showings, cleaning, coordination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Shaving 5–10 days often pays for pro management.</span>
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
            <SectionHeader eyebrow="Step 1" title="Quick estimate (no friction)" />
            <div className="grid grid-cols-2 gap-5">
              <NumberField
                label="Monthly rent"
                prefix="$"
                value={inputs.monthlyRent}
                min={0}
                max={10000}
                step={25}
                onChange={(monthlyRent) => setInputs((prev) => ({ ...prev, monthlyRent }))}
              />
              <NumberField
                label="Days vacant"
                value={inputs.daysVacant}
                min={0}
                max={180}
                step={1}
                helper="Typical turnovers take ~7–14 days."
                onChange={(daysVacant) => setInputs((prev) => ({ ...prev, daysVacant }))}
              />
              <TextField
                label="ZIP or city (optional)"
                value={inputs.zipOrCity}
                placeholder="e.g., 97202 or Portland"
                onChange={(zipOrCity) => setInputs((prev) => ({ ...prev, zipOrCity }))}
                helper="Helps us add local benchmarks later."
              />
            </div>
            <p className="text-xs text-rr-text-primary/65">Results update instantly as you type.</p>
          </div>

          <div
            ref={refineRef}
            className="space-y-3 rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
          >
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setShowRefine((prev) => !prev)}
              type="button"
            >
              <div className="space-y-1">
                <Eyebrow>Step 2</Eyebrow>
                <p className="text-lg font-semibold text-rr-text-primary">Refine estimate</p>
                <p className="text-sm text-rr-text-primary/70">Edit assumptions: time, hourly value, cash costs, concessions.</p>
              </div>
              <span className="text-xl text-rr-text-primary/70">{showRefine ? "−" : "+"}</span>
            </button>
            {showRefine ? (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <NumberField
                    label="Hours spent on tasks"
                    value={inputs.hoursSpent}
                    min={0}
                    max={200}
                    step={1}
                    onChange={(hoursSpent) => setInputs((prev) => ({ ...prev, hoursSpent }))}
                    helper="Cleaning, coordinating, showings, marketing."
                  />
                  <div className="space-y-2">
                    <NumberField
                      label="Hourly value ($/hr)"
                      prefix="$"
                      value={inputs.hourlyValue}
                      min={0}
                      max={500}
                      step={5}
                      onChange={(hourlyValue) => setInputs((prev) => ({ ...prev, hourlyValue }))}
                      helper="What your time is worth."
                    />
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
                      {[25, 50, 75].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setInputs((prev) => ({ ...prev, hourlyValue: value }))}
                          className="rounded-full border border-rr-border-gray px-3 py-1 transition hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
                        >
                          ${value}/hr
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <NumberField
                    label="Out-of-pocket turnover costs"
                    prefix="$"
                    value={inputs.cashTurnoverCosts}
                    min={0}
                    max={20000}
                    step={50}
                    onChange={(cashTurnoverCosts) => setInputs((prev) => ({ ...prev, cashTurnoverCosts }))}
                    helper="Supplies, cleaners, small repairs."
                  />
                  <ToggleRow
                    label="Use typical estimate"
                    onToggle={(useTypical) =>
                      setInputs((prev) => ({
                        ...prev,
                        cashTurnoverCosts: useTypical ? 500 : prev.cashTurnoverCosts || 0,
                      }))
                    }
                  />
                  <NumberField
                    label="Rent concession / discount"
                    prefix="$"
                    value={inputs.rentConcession}
                    min={0}
                    max={20000}
                    step={50}
                    onChange={(rentConcession) => setInputs((prev) => ({ ...prev, rentConcession }))}
                    helper="Discounts or free days offered."
                  />
                </div>
              </div>
            ) : null}
          </div>

          <FAQSection faqs={faqs} />
        </div>

        <div className="space-y-5">
          <SectionHeader
            eyebrow="Results"
            title="Total vacancy cost"
            description="Missed rent plus the value of your time."
          />

          <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Estimated total loss</p>
              <span className="rounded-full bg-rr-status-alert/15 px-3 py-1 text-[11px] font-semibold text-rr-status-alert">
                {results.pctOfMonth.toFixed(1)}% of a month
              </span>
            </div>
            <p className="mt-2 text-[30px] font-bold leading-tight text-rr-text-primary">{formatCurrency(results.totalCost)}</p>
            <p className="text-sm text-rr-text-primary/70">
              Includes {formatCurrency(results.vacancyLoss)} missed rent + {formatCurrency(results.timeCost)} for your time
              {inputs.cashTurnoverCosts ? ` + ${formatCurrency(results.hardCost)} cash costs` : ""}{inputs.rentConcession ? ` + ${formatCurrency(results.concessionCost)} concessions` : ""}.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              <Metric label="Daily rent loss" value={formatCurrency(results.dailyRent)} />
              <Metric label="Lost rent" value={formatCurrency(results.vacancyLoss)} />
              <Metric label="Your time cost" value={formatCurrency(results.timeCost)} />
              <Metric label="Cash costs" value={formatCurrency(results.hardCost)} />
              <Metric label="Concessions" value={formatCurrency(results.concessionCost)} />
              <Metric label="Cost per vacant day" value={formatCurrency(results.costPerDayVacant)} />
            </div>

            <div className="mt-5 space-y-2 rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
              <p className="text-sm font-semibold text-rr-text-primary">Assumptions used (editable)</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/75">
                <AssumptionPill label={`${inputs.hoursSpent} hours landlord work`} onClick={() => focusRefine(refineRef, setShowRefine)} />
                <AssumptionPill label={`$${inputs.hourlyValue}/hr value of time`} onClick={() => focusRefine(refineRef, setShowRefine)} />
                <AssumptionPill label={`$${inputs.cashTurnoverCosts || 0} cash turnover costs`} onClick={() => focusRefine(refineRef, setShowRefine)} />
              </div>
            </div>

            <div className="mt-5 space-y-2 rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4">
              <p className="text-sm text-rr-text-primary/80">
                Even with conservative assumptions, DIY turnover costs about {formatCurrency(results.totalCost)} this cycle.
              </p>
              <p className="text-sm font-semibold text-rr-text-primary">
                Want to reduce that next cycle? Get a free local rental analysis.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href="/contact?reason=rent-analysis&source=vacancy-calculator-primary">Get a free rental analysis</PrimaryButton>
                <GhostButton href="/property-management">Talk to a property manager</GhostButton>
              </div>
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-white p-3 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-[0.08em] text-rr-text-primary/70">{label}</p>
      <p className="text-lg font-semibold text-rr-text-primary">{value}</p>
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

function PrimaryButton({ href, children, onClick }: { href: string; children: ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
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

function TextField({
  label,
  value,
  placeholder,
  onChange,
  helper,
}: {
  label: string;
  value: string;
  placeholder?: string;
  helper?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      />
      {helper ? <p className="text-xs font-normal text-rr-text-primary/65">{helper}</p> : null}
    </label>
  );
}

function ToggleRow({ label, onToggle }: { label: string; onToggle: (checked: boolean) => void }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center justify-between rounded-lg border border-rr-border-gray bg-rr-surface-offwhite/80 px-3 py-2">
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-rr-text-primary">{label}</p>
        <p className="text-xs text-rr-text-primary/65">Fills a typical $500 turnover cost.</p>
      </div>
      <button
        type="button"
        onClick={() => {
          const next = !checked;
          setChecked(next);
          onToggle(next);
        }}
        className={`flex h-6 w-11 items-center rounded-full transition ${checked ? "bg-rr-accent-darkteal" : "bg-rr-border-gray"}`}
      >
        <span
          className={`ml-1 h-4 w-4 rounded-full bg-white transition ${checked ? "translate-x-5" : ""}`}
        />
      </button>
    </div>
  );
}

function AssumptionPill({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-rr-border-gray bg-white px-3 py-1 transition hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
    >
      {label}
    </button>
  );
}

function focusRefine(ref: RefObject<HTMLDivElement | null>, setOpen: (state: boolean) => void) {
  setOpen(true);
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
