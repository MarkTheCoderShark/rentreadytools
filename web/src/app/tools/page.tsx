import Link from "next/link";
import type { ReactNode } from "react";

const tools = [
  {
    name: "Rent Price Calculator",
    description: "Get a data-backed rent range and see if you're under- or overpricing.",
    href: "/tools/rent-pricing-benchmark",
    tag: "Flagship tool",
    tone: "accent" as const,
  },
  {
    name: "Vacancy Cost Calculator",
    description: "Quantify how much empty days cost you, including your own time.",
    href: "/tools/vacancy-loss-calculator",
  },
  {
    name: "Move-In Readiness Checklist",
    description: "Check readiness in under 2 minutes and avoid move-in surprises.",
    href: "/tools/make-ready-audit",
  },
  {
    name: "Rental Renovation ROI Calculator",
    description: "See which upgrades are worth it and how fast they pay back.",
    href: "/tools/renovation-roi",
  },
];

export default function ToolsIndexPage() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
      <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-6">
            <Eyebrow>Tools</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              The toolkit for DIY landlords.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
              Four focused tools to price rent, cut vacancy costs, check readiness, and know when an upgrade pays off.
              Instant outputs—no email gate required.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
              <Badge>Rent pricing clarity</Badge>
              <Badge>Vacancy reduction</Badge>
              <Badge>Ready-for-move-in</Badge>
              <Badge>ROI-focused upgrades</Badge>
            </div>
          </div>
          <div className="grid gap-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite/80 p-6">
            <p className="text-sm font-semibold text-rr-text-primary">How it works</p>
            <ol className="space-y-3 text-sm text-rr-text-primary/80">
              <li>Pick a calculator or checklist.</li>
              <li>Enter a handful of details (under 60 seconds).</li>
              <li>Decide DIY vs professional with clear numbers.</li>
            </ol>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            >
              Talk with the team
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <Eyebrow>Pick a tool</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Run the numbers.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
            Start with rent pricing, vacancy cost, readiness, or renovation ROI. Each tool shows results instantly so
            you can make a decision without guesswork.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.href} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ToolCard({
  tool,
}: {
  tool: {
    name: string;
    description: string;
    href: string;
    tag?: string;
    tone?: "accent";
  };
}) {
  const accentClass =
    tool.tone === "accent"
      ? "border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/35 to-rr-rent-grad-end"
      : "border-rr-border-gray bg-rr-surface-white";

  return (
    <article
      className={`flex h-full flex-col justify-between rounded-[1.1rem] border p-6 shadow-[var(--shadow-soft)] ${accentClass}`}
    >
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-rr-text-primary">{tool.name}</h3>
        <p className="text-sm leading-relaxed text-rr-text-primary/75">{tool.description}</p>
        {tool.tag ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-rr-accent-gold/25 px-3 py-1 text-xs font-semibold text-rr-accent-darkteal">
            {tool.tag}
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm font-semibold text-rr-accent-darkteal">
        <Link className="inline-flex items-center gap-2 transition hover:text-rr-tool-darkteal" href={tool.href}>
          Open tool <span aria-hidden>→</span>
        </Link>
        <span className="flex items-center gap-2 text-xs font-medium text-rr-text-primary/70">
          <span className="h-2 w-2 rounded-full bg-rr-status-success" />
          Instant results
        </span>
      </div>
    </article>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
      {children}
    </span>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rr-border-gray bg-rr-surface-softgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-rr-text-primary">
      {children}
    </span>
  );
}
