"use client";

import { useState } from "react";

interface SaveResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: string;
  inputs: Record<string, unknown>;
  results: Record<string, unknown>;
  title?: string;
  description?: string;
}

export function SaveResultsModal({
  isOpen,
  onClose,
  tool,
  inputs,
  results,
  title = "Save your analysis",
  description = "Get a copy of this analysis emailed to you, plus tips to improve your results.",
}: SaveResultsModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Track the tool usage with email
      await fetch("/api/track-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool,
          inputs,
          results,
          email,
          savedAnalysis: true,
        }),
      });

      // Send the analysis email
      const response = await fetch("/api/send-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tool,
          inputs,
          results,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-rr-border-gray bg-rr-surface-white p-6 shadow-xl">
        {status === "success" ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rr-status-success/20">
              <svg
                className="h-6 w-6 text-rr-status-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-rr-text-primary">Check your inbox!</h3>
            <p className="mt-2 text-sm text-rr-text-primary/70">
              We&apos;ve sent your analysis to {email}
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-full bg-rr-accent-darkteal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rr-accent-darkteal/90"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-rr-text-primary/50 hover:text-rr-text-primary"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-rr-accent-gold/20">
              <svg
                className="h-5 w-5 text-rr-accent-darkteal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-rr-text-primary">{title}</h3>
            <p className="mt-1 text-sm text-rr-text-primary/70">{description}</p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-rr-border-gray bg-white px-4 py-2.5 text-sm text-rr-text-primary placeholder:text-rr-text-primary/50 focus:border-rr-accent-darkteal focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-rr-status-alert">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-rr-accent-gold px-4 py-2.5 text-sm font-semibold text-rr-hero-bg shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === "loading" ? "Sending..." : "Email my analysis"}
              </button>

              <p className="text-center text-xs text-rr-text-primary/50">
                We&apos;ll also send tips to improve your rental performance. No spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// Hook for easy integration
export function useToolTracking(tool: string) {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [trackedInputs, setTrackedInputs] = useState<Record<string, unknown>>({});
  const [trackedResults, setTrackedResults] = useState<Record<string, unknown>>({});

  const trackUsage = async (inputs: Record<string, unknown>, results: Record<string, unknown>) => {
    setTrackedInputs(inputs);
    setTrackedResults(results);

    // Track usage without email (anonymous)
    try {
      await fetch("/api/track-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool, inputs, results }),
      });
    } catch (error) {
      console.error("Failed to track tool usage:", error);
    }
  };

  return {
    showSaveModal,
    setShowSaveModal,
    trackedInputs,
    trackedResults,
    trackUsage,
  };
}
