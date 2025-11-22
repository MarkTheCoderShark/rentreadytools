"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

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
            <SectionHeader eyebrow="Inputs" title="Your turnover details" />
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
                label="Hours spent on tasks"
                value={inputs.hoursSpent}
                min={0}
                max={120}
                step={1}
                onChange={(hoursSpent) => setInputs((prev) => ({ ...prev, hoursSpent }))}
                helper="Cleaning, coordinating, showings, marketing."
              />
            </div>
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
            <p className="mt-2 text-[30px] font-bold leading-tight text-rr-text-primary">{formatCurrency(results.total)}</p>
            <p className="text-sm text-rr-text-primary/70">
              Includes {formatCurrency(results.missedRent)} missed rent + {formatCurrency(results.laborCost)} for your time.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <Metric label="Daily rent loss" value={formatCurrency(results.dailyRent)} />
              <Metric label="Missed rent" value={formatCurrency(results.missedRent)} />
              <Metric label="Value of your time" value={formatCurrency(results.laborCost)} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <ScenarioCard title="Trim 5 days" savings={results.trimmed5.savings} />
              <ScenarioCard title="Trim 10 days" savings={results.trimmed10.savings} />
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-white p-3 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-[0.08em] text-rr-text-primary/70">{label}</p>
      <p className="text-lg font-semibold text-rr-text-primary">{value}</p>
    </div>
  );
}

function ScenarioCard({ title, savings }: { title: string; savings: number }) {
  return (
    <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite/60 p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-rr-text-primary">{title}</p>
      </div>
      <p className="mt-2 text-xl font-semibold text-rr-text-primary">{formatCurrency(savings)}</p>
      <p className="text-sm text-rr-text-primary/75">Savings if you trim {title.replace(/\D/g, "") || "5"} days.</p>
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
  const [mode, setMode] = useState<"idle" | "form" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [zip, setZip] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email.trim()) {
      setError("Please enter an email.");
      return;
    }
    setError(null);
    setMode("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Vacancy Plan Request",
          email,
          reason: "Vacancy plan unlock",
          message: `Please send the local DOM and vacancy plan.${zip ? ` ZIP: ${zip}` : ""}`,
          source: "vacancy-cta",
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to send. Please try again.");
      }
      setMode("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setMode("error");
    }
  };

  return (
    <div className="mt-8 space-y-4 rounded-[12px] bg-[#F7F6F4] p-8 text-center shadow-[var(--shadow-soft)]">
      <h3 className="text-xl font-semibold text-rr-text-primary">Want to cut vacancy faster?</h3>
      <p className="text-sm text-rr-text-primary/75">Unlock your local average days-on-market & a plan.</p>
      {mode === "idle" ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#" onClick={(e) => { e.preventDefault(); setMode("form"); }}>
              Get my vacancy plan
            </PrimaryButton>
            <GhostButton href="/property-management">See property management services →</GhostButton>
          </div>
          <div className="mt-2 text-sm text-rr-text-primary/70">
            <span className="mr-1">🔒</span>
            Average days-on-market in your area: 21–27 days (locked)
          </div>
        </>
      ) : mode === "success" ? (
        <div className="space-y-3">
          <p className="text-lg font-semibold text-rr-text-primary">Your plan is on the way!</p>
          <p className="text-sm text-rr-text-primary/75">
            We’ll email your local DOM and vacancy recommendations shortly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="/contact?reason=Vacancy%20Plan%20Follow-up&source=vacancy-cta-success">
              Book a call
            </PrimaryButton>
            <GhostButton href="/property-management">View PM services →</GhostButton>
          </div>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          <p className="text-sm font-semibold text-rr-text-primary">Enter your email to unlock your plan:</p>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center md:justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-rr-border-gray bg-white px-4 py-2.5 text-sm font-medium text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
            />
            <button
              type="submit"
              disabled={mode === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-5 py-2.5 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {mode === "loading" ? "Sending..." : "Continue →"}
            </button>
          </div>
          <div className="grid gap-2 md:grid-cols-[220px_1fr] md:items-center md:justify-center">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-rr-text-primary">ZIP code (optional)</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="\\d*"
                maxLength={10}
                placeholder="e.g., 97202"
                className="w-full rounded-full border border-rr-border-gray bg-white px-4 py-2.5 text-sm font-medium text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <p className="text-xs text-rr-text-primary/65">Optional — helps us generate local DOM accuracy.</p>
          </div>
          {error ? <p className="text-sm text-rr-status-alert">{error}</p> : null}
          <p className="text-xs text-rr-text-primary/65">No spam. We only send your vacancy report.</p>
          <div className="text-sm text-rr-text-primary/70">
            <span className="mr-1">🔒</span>
            Unlocking: Local DOM + personalized recommendations
          </div>
        </form>
      )}
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
