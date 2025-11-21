"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

export default function VacancyCostPage() {
  const [inputs, setInputs] = useState({
    monthlyRent: 2100,
    daysVacant: 12,
    hourlyValue: 45,
    hoursSpent: 10,
  });

  const results = useMemo(() => {
    const dailyRent = inputs.monthlyRent / 30;
    const missedRent = dailyRent * inputs.daysVacant;
    const laborCost = inputs.hoursSpent * inputs.hourlyValue;
    const total = missedRent + laborCost;
    const pctOfMonth = inputs.monthlyRent ? (total / inputs.monthlyRent) * 100 : 0;

    const trimmedBy = (days: number) => {
      const newDays = Math.max(inputs.daysVacant - days, 0);
      const savedRent = dailyRent * (inputs.daysVacant - newDays);
      return { newDays, savings: savedRent };
    };

    return {
      dailyRent,
      missedRent,
      laborCost,
      total,
      pctOfMonth,
      trimmed5: trimmedBy(5),
      trimmed10: trimmedBy(10),
    };
  }, [inputs]);

  return (
    <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Vacancy Cost Calculator</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              See how much vacancy is costing you—cash and time.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              Count every empty day and your own labor. Model what happens if you trim 5–10 days off turnover.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="#tool">Calculate vacancy cost</PrimaryButton>
              <GhostButton href="/property-management">See how we cut vacancy</GhostButton>
            </div>
          </div>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6 shadow-[var(--shadow-soft)]">
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
        </div>
      </section>

      <section
        id="tool"
        className="grid gap-6 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-card)] md:grid-cols-[1fr_0.95fr] md:p-8"
      >
        <div className="space-y-4">
          <SectionHeader eyebrow="Inputs" title="Your turnover details" />
          <div className="grid gap-4 md:grid-cols-2">
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
              max={120}
              step={1}
              onChange={(daysVacant) => setInputs((prev) => ({ ...prev, daysVacant }))}
            />
            <NumberField
              label="Your hourly value"
              prefix="$"
              value={inputs.hourlyValue}
              min={0}
              max={500}
              step={5}
              onChange={(hourlyValue) => setInputs((prev) => ({ ...prev, hourlyValue }))}
              helper="Think of what your time is worth."
            />
            <NumberField
              label="Hours spent on turnover tasks"
              value={inputs.hoursSpent}
              min={0}
              max={120}
              step={1}
              onChange={(hoursSpent) => setInputs((prev) => ({ ...prev, hoursSpent }))}
              helper="Cleaning, coordinating, showings, marketing."
            />
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeader
            eyebrow="Results"
            title="Total vacancy cost"
            description="Missed rent plus the value of your time."
          />
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Total loss</p>
              <span className="rounded-full bg-rr-status-alert/15 px-3 py-1 text-[11px] font-semibold text-rr-status-alert">
                {results.pctOfMonth.toFixed(1)}% of a month
              </span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-rr-text-primary">{formatCurrency(results.total)}</p>
            <p className="text-sm text-rr-text-primary/70">
              Includes {formatCurrency(results.missedRent)} missed rent + {formatCurrency(results.laborCost)} for your time.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Metric label="Daily rent" value={formatCurrency(results.dailyRent)} />
              <Metric label="Value of your time" value={formatCurrency(results.laborCost)} />
              <Metric label="Missed rent" value={formatCurrency(results.missedRent)} />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <ScenarioCard
              title="Trim 5 days"
              days={results.trimmed5.newDays}
              savings={results.trimmed5.savings}
              monthlyRent={inputs.monthlyRent}
            />
            <ScenarioCard
              title="Trim 10 days"
              days={results.trimmed10.newDays}
              savings={results.trimmed10.savings}
              monthlyRent={inputs.monthlyRent}
            />
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-white p-3 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-[0.08em] text-rr-text-primary/70">{label}</p>
      <p className="text-lg font-semibold text-rr-text-primary">{value}</p>
    </div>
  );
}

function ScenarioCard({
  title,
  days,
  savings,
  monthlyRent,
}: {
  title: string;
  days: number;
  savings: number;
  monthlyRent: number;
}) {
  const pct = monthlyRent ? (savings / monthlyRent) * 100 : 0;
  return (
    <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/60 p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-rr-text-primary">{title}</p>
        <span className="rounded-full bg-rr-status-success/20 px-3 py-1 text-[11px] font-semibold text-rr-tool-darkteal">
          -{title.replace(/\D/g, "") || "5"} days
        </span>
      </div>
      <p className="mt-2 text-2xl font-semibold text-rr-text-primary">{formatCurrency(savings)}</p>
      <p className="text-sm text-rr-text-primary/75">Saved vs current vacancy ({pct.toFixed(1)}% of one month).</p>
      <p className="mt-2 text-xs text-rr-text-primary/65">New days vacant: {days}.</p>
    </div>
  );
}

function CTACluster() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite/80 p-4">
      <div className="space-y-1 text-sm text-rr-text-primary/80">
        <p className="font-semibold text-rr-text-primary">Want to cut vacancy faster?</p>
        <p>We’ll share our average days-on-market and a plan for your property.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton href="/contact?reason=Vacancy%20Cost%20Calculator&source=vacancy-cost-calculator">
          Request a vacancy review
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
