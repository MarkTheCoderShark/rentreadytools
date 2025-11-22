"use client";

export default function ScrollButton({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          const focusEl = el.querySelector<HTMLElement>("[data-focus-first='true']") || el.querySelector<HTMLElement>("input,textarea,select");
          focusEl?.focus();
        }
      }}
      className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}
