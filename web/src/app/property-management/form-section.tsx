"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export default function FormSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    units: "1",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.address) {
      setError("Please fill name, email, and address/ZIP.");
      return;
    }
    setError(null);
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          reason: "Free rental analysis",
          message: `Address/ZIP: ${formValues.address}\nUnits: ${formValues.units}\nNotes: ${formValues.notes || "N/A"}`,
          source: "property-management-page",
        }),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");
      setFormState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setFormState("error");
    }
  };

  return (
    <section
      id="free-rental-analysis"
      className="space-y-6 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8"
    >
      <div className="space-y-2">
        <Eyebrow>FREE RENTAL ANALYSIS</Eyebrow>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Want a pricing + turnover plan for your property?</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
          Tell us a bit about your place. We’ll send a free rent range, vacancy risk check, and next-step plan within 1 business day.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
          <p className="text-sm font-semibold text-rr-text-primary">Quick answers</p>
          <ul className="space-y-2 text-sm text-rr-text-primary/75">
            <li>
              <strong className="font-semibold text-rr-text-primary">What’s included?</strong> Rent estimate, comps-based range, vacancy cost risks, and turnover timeline guidance.
            </li>
            <li>
              <strong className="font-semibold text-rr-text-primary">Do I need to sign anything?</strong> No. It’s free and no-obligation.
            </li>
            <li>
              <strong className="font-semibold text-rr-text-primary">Do you manage in my area?</strong> Send your ZIP — we’ll confirm coverage fast.
            </li>
          </ul>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-5 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <TextField
              ref={nameRef}
              label="Name"
              required
              dataFocus
              value={formValues.name}
              onChange={(name) => setFormValues((prev) => ({ ...prev, name }))}
            />
            <TextField
              label="Email"
              required
              type="email"
              value={formValues.email}
              onChange={(email) => setFormValues((prev) => ({ ...prev, email }))}
            />
            <TextField
              label="Phone (optional)"
              value={formValues.phone}
              onChange={(phone) => setFormValues((prev) => ({ ...prev, phone }))}
            />
            <TextField
              label="Address or ZIP/city"
              required
              value={formValues.address}
              onChange={(address) => setFormValues((prev) => ({ ...prev, address }))}
            />
            <div>
              <label className="text-sm font-semibold text-rr-text-primary">Number of units</label>
              <select
                className="mt-1 w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
                value={formValues.units}
                onChange={(e) => setFormValues((prev) => ({ ...prev, units: e.target.value }))}
                required
              >
                <option value="1">1</option>
                <option value="2-4">2–4</option>
                <option value="5-19">5–19</option>
                <option value="20+">20+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-rr-text-primary">Notes (optional)</label>
              <textarea
                className="mt-1 w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
                rows={3}
                value={formValues.notes}
                onChange={(e) => setFormValues((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="Share timing, current rent, or any concerns."
              />
            </div>
          </div>
          {error ? <p className="text-sm text-rr-status-alert">{error}</p> : null}
          {formState === "success" ? (
            <p className="text-sm font-semibold text-rr-text-primary">
              Thanks — we’ve got it. Expect your analysis within 1 business day.
            </p>
          ) : (
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === "submitting" ? "Sending..." : "Get my free analysis"}
            </button>
          )}
          <p className="text-xs text-rr-text-primary/70">No spam. We only use this to deliver your analysis.</p>
        </form>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rr-accent-darkteal">
      {children}
    </span>
  );
}

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  dataFocus?: boolean;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, value, onChange, required, type = "text", dataFocus }, ref) => {
    return (
      <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
        {label}
        <input
          ref={ref}
          type={type}
          required={required}
          data-focus-first={dataFocus ? "true" : undefined}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-rr-border-gray bg-white px-3 py-2 text-sm text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
        />
      </label>
    );
  }
);

TextField.displayName = "TextField";
