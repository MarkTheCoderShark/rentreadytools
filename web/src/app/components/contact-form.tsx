"use client";

import { useState } from "react";

type Props = {
  defaultReason?: string;
  defaultSource?: string;
};

export default function ContactForm({ defaultReason, defaultSource = "contact" }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: defaultReason || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: defaultSource }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }
      setStatus("success");
      setForm((prev) => ({ ...prev, message: "" }));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setError(message);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-card)]">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-rr-text-primary">Request a consult</p>
        <p className="text-sm text-rr-text-primary/70">
          Tell us the property basics and what you want help with. We’ll reply with a custom plan.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="Name"
          value={form.name}
          required
          onChange={(name) => setForm((prev) => ({ ...prev, name }))}
        />
        <Input
          label="Email"
          type="email"
          value={form.email}
          required
          onChange={(email) => setForm((prev) => ({ ...prev, email }))}
        />
        <Input
          label="Phone (optional)"
          type="tel"
          value={form.phone}
          onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
        />
        <Input
          label="Reason"
          placeholder="Rent price, vacancy, readiness, ROI..."
          value={form.reason}
          onChange={(reason) => setForm((prev) => ({ ...prev, reason }))}
        />
      </div>

      <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
        Message
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="w-full rounded-lg border border-rr-border-gray bg-rr-surface-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
          placeholder="Include address/ZIP, beds/baths, and what you want to accomplish."
        />
      </label>

      {error ? <p className="text-sm text-rr-status-alert">{error}</p> : null}
      {status === "success" ? (
        <p className="text-sm font-semibold text-rr-tool-darkteal">Sent! We’ll reply with your custom plan.</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-rr-accent-gold px-5 py-3 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="space-y-1 text-sm font-semibold text-rr-text-primary">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-rr-border-gray bg-rr-surface-white px-3 py-2 text-sm font-normal text-rr-text-primary shadow-[var(--shadow-soft)] focus:border-rr-accent-darkteal focus:outline-none"
      />
    </label>
  );
}
