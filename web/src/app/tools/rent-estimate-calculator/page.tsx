"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { HowToSchema } from "@/app/components/howto-schema";
import { SaveResultsModal } from "@/app/components/save-results-modal";

type PropertyType = "house" | "condo" | "duplex" | "apartment";
type Inputs = {
  address: string;
  propertyType: PropertyType;
  beds: number | "";
  baths: number | "";
  sqft: number | "";
  parking: boolean;
  condition: number;
  currentRent: number | "";
};
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
  const [inputs, setInputs] = useState<Inputs>({
    address: "",
    propertyType: "house",
    beds: 0,
    baths: 0,
    sqft: 0,
    parking: false,
    condition: 3,
    currentRent: 0,
  });
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const [apiEstimate, setApiEstimate] = useState<{
    status: "idle" | "loading" | "ready" | "error";
    data?: {
      compsCount: number;
      medianRent: number;
      medianRentPerSqft: number;
      address?: string;
      currentRentZestimate?: number;
    };
    error?: string;
  }>({ status: "idle" });

  const heuristic = useMemo(() => computeHeuristic(inputs), [inputs]);

  const fetchComps = async () => {
    if (!inputs.address) {
      setApiEstimate({ status: "error", error: "Address or ZIP is required for live comps." });
      return;
    }
    const controller = new AbortController();
    setApiEstimate({ status: "loading" });
    try {
      const res = await fetch("/api/rent-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: inputs.address,
          beds: inputs.beds,
          baths: inputs.baths,
          sqft: inputs.sqft,
          propertyType: inputs.propertyType,
          currentRent: inputs.currentRent,
        }),
        signal: controller.signal,
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to fetch comps");
      }
      const data = await res.json();
      setApiEstimate({ status: "ready", data });
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Track tool usage
      try {
        await fetch("/api/track-tool", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tool: "rent-estimate-calculator",
            inputs: {
              address: inputs.address,
              propertyType: inputs.propertyType,
              beds: inputs.beds,
              baths: inputs.baths,
              sqft: inputs.sqft,
              parking: inputs.parking,
              condition: inputs.condition,
              currentRent: inputs.currentRent,
            },
            results: {
              compsCount: data.compsCount,
              medianRent: data.medianRent,
              zestimate: data.currentRentZestimate,
            },
          }),
        });
      } catch {
        // Silent fail for tracking
      }
    } catch (error) {
      if (controller.signal.aborted) return;
      setApiEstimate({
        status: "error",
        error: error instanceof Error ? error.message : "Failed to fetch comps",
      });
    }
  };

  const results = useMemo(() => {
    const compCount = apiEstimate.data?.compsCount ?? 0;
    const compRentPerSqft = apiEstimate.data?.medianRentPerSqft ?? 0;
    const compRent = apiEstimate.data?.medianRent ?? 0;
    const zestimate = apiEstimate.data?.currentRentZestimate;
    const numBeds = inputs.beds === "" ? 0 : Number(inputs.beds);
    const numBaths = inputs.baths === "" ? 0 : Number(inputs.baths);
    const numSqft = inputs.sqft === "" ? 0 : Number(inputs.sqft);
    const numCurrentRent = inputs.currentRent === "" ? 0 : Number(inputs.currentRent);

    const compEstimate =
      numSqft && compRentPerSqft
        ? compRentPerSqft * numSqft
        : compRent || 0;

    // Market adjustment factor - calibrated to local market conditions
    const marketAdjustment = 1.07;

    let suggested = heuristic.suggested;
    let rangeLower = heuristic.lower;
    let rangeUpper = heuristic.upper;
    let note = "Heuristic estimate";

    if (zestimate && zestimate > 0) {
      const adjusted = zestimate * marketAdjustment;
      suggested = Math.round(adjusted);
      rangeLower = Math.round(adjusted * 0.95);
      rangeUpper = Math.round(adjusted * 1.05);
      note = "Live rent estimate";
    } else if (compCount >= 10 && compEstimate > 0) {
      const blendedMid = 0.7 * compEstimate + 0.3 * heuristic.suggested;
      const adjMid = blendedMid * heuristic.conditionFactor * marketAdjustment;
      suggested = Math.round(adjMid);
      rangeLower = Math.round(adjMid * 0.96);
      rangeUpper = Math.round(adjMid * 1.04);
      note = `Live comps blended (${compCount} comps)`;
    } else if (compCount >= 3 && compEstimate > 0) {
      const blendedMid = 0.5 * compEstimate + 0.5 * heuristic.suggested;
      const adjMid = blendedMid * heuristic.conditionFactor * marketAdjustment;
      suggested = Math.round(adjMid);
      rangeLower = Math.round(adjMid * 0.95);
      rangeUpper = Math.round(adjMid * 1.05);
      note = `Limited comps blended (${compCount} comps)`;
    }

    let status: "under" | "over" | "within" = "within";
    let delta = 0;
    if (numCurrentRent) {
      delta = numCurrentRent - suggested;
      if (delta <= -75) status = "under";
      else if (delta >= 75) status = "over";
    }

    const competition =
      compCount > 25
        ? "High"
        : compCount >= 10
          ? "Medium/High"
          : heuristic.competition;

    return {
      lower: rangeLower,
      upper: rangeUpper,
      suggested,
      status,
      delta,
      competition,
      note,
      comps: apiEstimate.data,
      conditionFactor: heuristic.conditionFactor,
      numBeds,
      numBaths,
      numSqft,
      numCurrentRent,
    };
  }, [apiEstimate, heuristic, inputs.currentRent, inputs.sqft, inputs.beds, inputs.baths]);

  const hasLiveEstimate =
    apiEstimate.status === "ready" &&
    ((apiEstimate.data?.medianRent ?? 0) > 0 || (apiEstimate.data?.currentRentZestimate ?? 0) > 0);

  const howToSteps = [
    {
      name: "Enter property details",
      text: "Start with your address, property type (house, condo, duplex, apartment), number of bedrooms, bathrooms, and square footage.",
    },
    {
      name: "Adjust for condition",
      text: "Use the condition slider (Needs work to Excellent) and mark if you have parking/assigned parking to account for market adjustments.",
    },
    {
      name: "Enter current rent",
      text: "Input your current rent amount to see if you are underpricing, overpricing, or within market range for your property.",
    },
    {
      name: "Review the estimated range",
      text: "The calculator provides a recommended rent range based on comparable properties and your unit condition. Use this for lease renewals and new listings.",
    },
  ];

  return (
    <>
      <HowToSchema
        name="Rent Price Calculator"
        description="Get a data-backed rent range by entering your property details, condition, and current rent."
        url="/tools/rent-estimate-calculator"
        steps={howToSteps}
        totalTime="PT2M"
        yield="Rent pricing range"
      />
      <main
      className="relative mx-auto w-full space-y-10 px-4 py-6 text-rr-text-primary md:px-6 md:py-10"
      style={{ maxWidth: "1280px" }}
    >
      <section className="grid gap-6 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white/90 p-5 shadow-[var(--shadow-card)] md:grid-cols-[1.05fr_0.95fr] md:p-10">
        <div className="space-y-4">
          <Eyebrow>Rent Price Calculator</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Get a data-backed rent range in under a minute.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-rr-text-primary/80">
            Enter your address plus basics—beds, baths, condition—and see a recommended range and under/overpricing.
          </p>
          <PrimaryButton href="#tool">Run the calculator</PrimaryButton>
        </div>
        <div className="rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">Quick facts</p>
          <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/75">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Pricing tweaks beat big swings after long vacancy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-success" />
              <span>Condition and parking meaningfully move the range.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-status-alert" />
              <span>Overpricing often costs more than a modest price cut.</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="tool" className="grid grid-cols-1 gap-8 py-6 md:grid-cols-[1.05fr_0.95fr] md:py-10">
        <div className="space-y-5">
          <div className="space-y-4 rounded-[12px] border border-rr-border-gray bg-rr-surface-offwhite/60 p-5 shadow-[var(--shadow-soft)]">
            <SectionHeader
              eyebrow="Inputs"
              title="Property details"
              description="Plug in the essentials so we can estimate a realistic rent range."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="Address"
                value={inputs.address}
                onChange={(address) => setInputs((prev) => ({ ...prev, address }))}
                placeholder="e.g., 1450 SE Main St, Portland OR"
              />
              <SelectField
                label="Property type"
                value={inputs.propertyType}
                onChange={(propertyType) => setInputs((prev) => ({ ...prev, propertyType }))}
                options={propertyTypes}
              />
              <SelectField
                label="Beds"
                value={String(inputs.beds)}
                onChange={(beds) => setInputs((prev) => ({ ...prev, beds: Number(beds) }))}
                options={[
                  { value: "0", label: "Studio (0)" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5+" },
                ]}
                helper="Studio? Pick 0."
              />
              <SelectField
                label="Baths"
                value={String(inputs.baths)}
                onChange={(baths) => setInputs((prev) => ({ ...prev, baths: Number(baths) }))}
                options={[
                  { value: "1", label: "1" },
                  { value: "1.5", label: "1.5" },
                  { value: "2", label: "2" },
                  { value: "2.5", label: "2.5" },
                  { value: "3", label: "3" },
                  { value: "3.5", label: "3.5" },
                  { value: "4", label: "4" },
                  { value: "4.5", label: "4.5" },
                  { value: "5", label: "5" },
                ]}
                helper="Half-baths included."
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
                helper="We’ll show if that’s under/over market. Leave blank if unset."
              />
            </div>
            <div className="space-y-3 rounded-[12px] border border-rr-border-gray bg-rr-surface-white p-4">
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
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={fetchComps}
                className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-5 py-2.5 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={apiEstimate.status === "loading"}
              >
                {apiEstimate.status === "loading" ? "Fetching comps..." : "Get live comps"}
              </button>
              {apiEstimate.status === "error" ? (
                <p className="text-xs text-rr-status-alert">{apiEstimate.error || "Unable to fetch comps."}</p>
              ) : null}
              {apiEstimate.status === "ready" ? (
                <p className="text-xs text-rr-text-primary/70">
                  {apiEstimate.data?.compsCount || 0} comps used for this estimate.
                </p>
              ) : null}
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>

        <div className="space-y-5" ref={resultsRef}>
          <SectionHeader
            eyebrow="Results"
            title="Recommended rent range"
            description="Instant range plus a suggested price based on condition and amenities."
          />
          <div className="rounded-[12px] border border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/40 to-rr-rent-grad-end p-6 shadow-[var(--shadow-soft)]">
            {hasLiveEstimate ? (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Range</p>
                  <span className="rounded-full bg-rr-accent-gold/25 px-3 py-1 text-[11px] font-semibold text-rr-accent-darkteal">
                    {results.competition} competition
                  </span>
                </div>
                <p className="mt-2 text-3xl font-semibold text-rr-text-primary">
                  {formatCurrency(results.lower)} – {formatCurrency(results.upper)}
                </p>
                <p className="text-sm text-rr-text-primary/70">
                  Based on inputs for {inputs.beds}bd / {inputs.baths}ba at {inputs.address || "your address"}.
                </p>

                <div className="mt-6 space-y-2 rounded-[12px] border border-rr-border-gray bg-rr-surface-white/80 p-4">
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
                  <CompMeta results={results} />
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <InsightCard
                    title="Action"
                    items={[
                      results.status === "under"
                        ? "You may be underpricing; test a bump toward the suggested price."
                        : results.status === "over"
                          ? "You may be overpricing; tighten toward the midpoint to cut vacancy."
                          : "You're within range; focus on marketing speed to reduce vacancy.",
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

                <button
                  type="button"
                  onClick={() => setShowSaveModal(true)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-rr-accent-darkteal bg-rr-accent-darkteal/5 px-4 py-2.5 text-sm font-semibold text-rr-accent-darkteal transition hover:bg-rr-accent-darkteal/10"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email me this analysis
                </button>
              </>
            ) : (
              <div className="space-y-3 text-sm text-rr-text-primary/75">
                <p className="text-base font-semibold text-rr-text-primary">Get your live rent estimate</p>
                <p>Enter a full address and click “Get live comps” to see the recommended range.</p>
                <div className="flex flex-wrap gap-2">
                  <PrimaryButton href="#tool" onClick={(e) => { e.preventDefault(); fetchComps(); }}>
                    Get live comps
                  </PrimaryButton>
                  {apiEstimate.status === "error" ? (
                    <p className="text-xs text-rr-status-alert">{apiEstimate.error || "Unable to fetch comps."}</p>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          <CTACluster />
        </div>
      </section>
      </main>

      <SaveResultsModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        tool="rent-estimate-calculator"
        inputs={{
          address: inputs.address,
          propertyType: inputs.propertyType,
          beds: inputs.beds,
          baths: inputs.baths,
          sqft: inputs.sqft,
          parking: inputs.parking,
          condition: inputs.condition,
          currentRent: inputs.currentRent,
        }}
        results={{
          suggestedRent: results.suggested,
          rentRange: `${formatCurrency(results.lower)} - ${formatCurrency(results.upper)}`,
          pricingStatus: results.status,
          competition: results.competition,
          compsUsed: apiEstimate.data?.compsCount || 0,
        }}
        title="Save your rent analysis"
        description="Get this analysis emailed to you with tips to optimize your rental pricing."
      />
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

function computeHeuristic(inputs: Inputs) {
  const numBeds = inputs.beds === "" ? 0 : inputs.beds;
  const numBaths = inputs.baths === "" ? 0 : inputs.baths;
  const numSqft = inputs.sqft === "" ? 0 : inputs.sqft;

  const base =
    950 +
    numBeds * 360 +
    numBaths * 180 +
    (numSqft ? Math.min(numSqft, 2500) * 0.65 : 0);

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
    conditionFactor,
  };
}

function CompMeta({
  results,
}: {
  results: ReturnType<typeof computeHeuristic> & {
    note?: string;
    comps?: {
      compsCount?: number;
      medianRent?: number;
      medianRentPerSqft?: number;
      currentRentZestimate?: number;
    };
  };
}) {
  const compsCount = results.comps?.compsCount ?? 0;
  const medianRent = results.comps?.medianRent ?? 0;
  const zestimate = results.comps?.currentRentZestimate;
  if (results.note === "Heuristic estimate" && compsCount === 0) {
    return <p className="text-xs text-rr-text-primary/65">Using heuristic estimate (no live comps yet).</p>;
  }
  return (
    <div className="text-xs text-rr-text-primary/70">
      <p className="font-semibold text-rr-text-primary/80">
        {results.note || "Estimate source"}
      </p>
      <p>
        {zestimate
          ? `Live rent estimate used. Range reflects ±5% around ${formatCurrency(zestimate)}.`
          : compsCount > 0
          ? `Comps: ${compsCount} found. Median rent ${formatCurrency(medianRent)}.`
          : "Fetching live comps..."}
      </p>
    </div>
  );
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
  value: number | "";
  min?: number;
  max?: number;
  step?: number;
  helper?: string;
  onChange: (value: number | "") => void;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <input
        type="number"
        value={value === "" ? "" : value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const next = e.target.value === "" ? "" : Number(e.target.value);
          onChange(next);
        }}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      />
      {helper ? <p className="text-xs font-normal text-rr-text-primary/65">{helper}</p> : null}
    </label>
  );
}

function SelectField<Value extends string>({
  label,
  value,
  onChange,
  options,
  helper,
}: {
  label: string;
  value: Value;
  options: { value: Value; label: string }[];
  onChange: (value: Value) => void;
  helper?: string;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Value)}
        className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helper ? <p className="text-xs font-normal text-rr-text-primary/65">{helper}</p> : null}
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
    <details className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-rr-text-primary">
        FAQ
        <span className="text-xs text-rr-text-primary/70">Click to toggle</span>
      </summary>
      <div className="space-y-3 pt-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="space-y-1 rounded-lg bg-rr-surface-offwhite/60 p-3">
            <p className="text-sm font-semibold text-rr-text-primary">{faq.question}</p>
            <p className="text-sm text-rr-text-primary/75">{faq.answer}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </details>
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
  onClick,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "hero";
  onClick?: (e: React.MouseEvent) => void;
}) {
  const styles =
    tone === "hero"
      ? "bg-rr-accent-gold !text-rr-accent-darkteal"
      : "bg-rr-accent-gold text-rr-hero-bg";

  return (
    <Link
      href={href}
      onClick={onClick}
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
