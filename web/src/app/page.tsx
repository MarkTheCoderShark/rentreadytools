import Link from "next/link";
import ContactForm from "./components/contact-form";

const steps = [
  {
    title: "Pick a tool",
    description:
      "Start with rent pricing, vacancy cost, or a quick readiness check.",
  },
  {
    title: "Plug in a few details",
    description: "Most tools take under 60 seconds to complete.",
  },
  {
    title: "Decide DIY vs professional",
    description:
      "See what staying DIY actually costs—and what changes with a management partner.",
  },
];

const tools = [
  {
    name: "Rent Price Calculator",
    description:
      "Get a data-backed rent range and see if you're under- or overpricing.",
    href: "/tools/rent-estimate-calculator",
    tag: "Flagship tool",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    color: "bg-[#197e80]",
    borderColor: "border-[#197e80]",
  },
  {
    name: "Vacancy Cost Calculator",
    description:
      "Quantify how much empty days cost you, including your own time.",
    href: "/tools/vacancy-loss-calculator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
    ),
    color: "bg-[#197e80]",
    borderColor: "border-[#197e80]",
  },
  {
    name: "Move-In Readiness Checklist",
    description:
      "Check your unit's readiness in under 2 minutes and avoid move-in surprises.",
    href: "/tools/make-ready-audit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    color: "bg-[#197e80]",
    borderColor: "border-[#197e80]",
  },
  {
    name: "Rental Renovation ROI Calculator",
    description:
      "See which upgrades are worth it and how fast they pay back.",
    href: "/tools/renovation-roi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-rr-accent-gold to-[#d4a857]",
    borderColor: "border-rr-accent-gold",
  },
];

const resources = [
  {
    title: "How much rent can I charge?",
    href: "/rent-pricing/how-much-rent-can-i-charge",
  },
  {
    title: "How long should tenant turnover take?",
    href: "/turnover/how-long-should-turnover-take",
  },
  {
    title: "Move-out cleaning checklist for landlords",
    href: "/turnover/move-out-cleaning-checklist",
  },
  {
    title: "Rental upgrades that actually pay off",
    href: "/rent-pricing/rental-upgrades-that-pay-off",
  },
];

const pmBenefits = [
  "Reduced vacancy averages",
  "Better tenant screening",
  "Coordinated turnovers",
  "Transparent reporting",
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-14 px-4 pb-10 pt-0 text-rr-text-primary md:space-y-20 md:px-6 md:pb-16">
      <Hero />

      <section className="space-y-8 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-offwhite px-6 py-10 md:space-y-10 md:px-8 md:py-12">
        <SectionHeader
          eyebrow="How it works"
          title="Run the numbers, then decide."
          description="A three-step flow that gives you quick clarity without forcing an email gate."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-rr-text-primary/70">
                <span className="rounded-full bg-rr-label-tan/30 px-3 py-1 text-xs font-medium text-rr-text-primary">
                  Step {index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-rr-tool-teal" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-rr-text-primary/75">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white px-6 py-10 md:space-y-10 md:px-8 md:py-12">
        <SectionHeader
          eyebrow="Tools"
          title="The toolkit for DIY landlords."
          description="Four focused tools so you can price rent, cut vacancy costs, and know when an upgrade pays off."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.1rem] border ${tool.borderColor} bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]`}
            >
              {/* Corner blob with icon */}
              <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full ${tool.color}`} />
              <div className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center">
                {typeof tool.icon === 'string' ? (
                  <span className="text-xl" aria-hidden="true">
                    {tool.icon}
                  </span>
                ) : (
                  tool.icon
                )}
              </div>

              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-rr-text-primary">
                    {tool.name}
                  </h3>
                  {tool.tag ? (
                    <span className="rounded-full bg-rr-accent-gold/25 px-3 py-1 text-xs font-semibold text-rr-accent-darkteal">
                      {tool.tag}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-rr-text-primary/75">
                  {tool.description}
                </p>
              </div>
              <div className="relative mt-4 flex items-center justify-between">
                <Link
                  href={tool.href}
                  className="flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
                >
                  Open tool
                  <span aria-hidden className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-rr-text-primary/70">
                  <span className="h-2 w-2 rounded-full bg-rr-status-success" />
                  <span>Instant results</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-softgray/50 p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <HighlightCard
            eyebrow="Turnover & Vacancy"
            title="Stop losing money between tenants."
            description="Every extra day of vacancy is direct loss. The calculator shows exactly how much—and how faster leasing changes the picture."
            actionLabel="Calculate your vacancy cost"
            actionHref="/tools/vacancy-loss-calculator"
            bullets={[
              "See missed rent and the value of your time side by side.",
              "Model what happens if you trim turnover by 5–10 days.",
            ]}
          />
          <HighlightCard
            eyebrow="Rent Pricing"
            title="Price your rental like a pro."
            description="Avoid the race to the bottom. Compare your rent against similar properties and get a recommended range."
            actionLabel="Get a rent price"
            actionHref="/tools/rent-estimate-calculator"
            bullets={[
              "Shows underpricing/overpricing with plain-language guidance.",
              "Condition and amenities adjustments baked in.",
            ]}
            tone="accent"
          />
        </div>
      </section>

      <section className="space-y-7 rounded-[1.6rem] bg-rr-pm-bg px-6 py-10 text-rr-hero-highlight shadow-[var(--shadow-card)] md:px-8 md:py-12">
        <SectionHeader
          eyebrow="Property management"
          title="We can run this playbook for you."
          description="When the numbers say DIY stops paying off, hand the work to a crew that tracks vacancy, pricing, and readiness like a science."
          tone="dark"
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.1rem] border border-rr-pm-border/70 bg-rr-hero-bg/40 p-6 shadow-[var(--shadow-soft)]">
            <div className="flex flex-wrap gap-3">
              {pmBenefits.map((item) => (
                <Badge key={item} tone="dark">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <StatCard
                title="Avg vacancy trimmed"
                value="6–10 days"
                note="Based on typical single-family turnovers."
                tone="dark"
              />
              <StatCard
                title="Pricing confidence"
                value="Data-backed"
                note="Benchmarked ranges and on-the-ground comps."
                tone="dark"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-rr-hero-highlight/90">
              We keep the same tools you see here running for every door we manage—so you get faster leasing,
              better pricing, and fewer surprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href="/property-management" tone="hero">
                See property management services
              </PrimaryButton>
              <GhostButton href="/contact" tone="hero">
                Talk with the team
              </GhostButton>
            </div>
          </article>
          <article className="rounded-[1.1rem] border border-rr-pm-border bg-rr-pm-card-bg p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-lg font-semibold text-rr-text-primary">
              What it feels like as a client
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-rr-text-primary/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-gold" />
                <span>
                  Pricing updates when the market shifts—no waiting for a renewal to discover underpricing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-gold" />
                <span>
                  Turnovers scheduled before move-out, with a clear checklist and time targets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-gold" />
                <span>
                  Transparent reporting dashboards so you always know rent status, maintenance, and renewals.
                </span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="space-y-7 rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-offwhite px-6 py-10 md:px-8 md:py-12">
        <SectionHeader
          eyebrow="Featured resources"
          title="Guides that support each tool."
          description="Use these as fast references or pair them with the calculators for deeper context."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex items-center justify-between rounded-[1.05rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)] transition hover:border-rr-accent-darkteal/60"
            >
              <div>
                <h3 className="text-base font-semibold text-rr-text-primary">
                  {resource.title}
                </h3>
                <p className="text-sm text-rr-text-primary/75">SEO-driven guide, written for real decisions.</p>
              </div>
              <Link
                href={resource.href}
                className="text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
              >
                Read
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[1.5rem] border border-rr-bottomcta-border/70 bg-rr-bottomcta-bg p-7 shadow-[var(--shadow-card)] md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-3 text-white">
            <Eyebrow tone="dark">Need a partner?</Eyebrow>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Want a walkthrough of the numbers for your rental?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-rr-hero-highlight/90">
              Send us the basics—address, bed/bath, condition—and we’ll reply with a custom rent benchmark and plan to
              cut vacancy.
            </p>
            <div className="flex flex-wrap gap-3">
              <GhostButton href="/property-management" tone="hero">
                See how we work
              </GhostButton>
            </div>
          </div>
          <div className="rounded-[1.1rem] bg-white/92 p-1 shadow-[var(--shadow-card)] backdrop-blur">
            <ContactForm defaultReason="Free rental analysis" defaultSource="homepage-bottom-cta" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
      <section
        className="relative isolate w-screen max-w-none overflow-hidden bg-cover bg-center bg-no-repeat md:w-screen md:max-w-none"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rr-hero-bg/80 via-rr-hero-bg-secondary/70 to-rr-hero-deepgreen/60" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-16">
          <div className="space-y-6 text-white">
            <Eyebrow tone="dark">Landlord Command Center</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Free tools to maximize your rental income and reduce vacancy.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-rr-hero-highlight/90">
              Run the numbers on pricing, turnover, and upgrades. See exactly what doing it yourself costs you—and when it
              makes sense to hand it off.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/tools/rent-estimate-calculator" tone="hero">
                Launch Rent Price Calculator
              </PrimaryButton>
              <GhostButton href="/property-management" tone="hero">
                Get a free rental analysis
              </GhostButton>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-rr-hero-highlight/80">
              <Badge tone="hero">Rent pricing clarity</Badge>
              <Badge tone="hero">Vacancy reduction</Badge>
              <Badge tone="hero">ROI-focused upgrades</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="space-y-2">
      <Eyebrow tone={tone === "dark" ? "dark" : "light"}>{eyebrow}</Eyebrow>
      <h2
        className={`text-2xl font-bold tracking-tight md:text-3xl ${
          tone === "dark" ? "text-white" : "text-rr-text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-3xl text-sm leading-relaxed ${
            tone === "dark" ? "text-rr-hero-highlight/90" : "text-rr-text-primary/75"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HighlightCard({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  bullets,
  tone = "primary",
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  bullets: string[];
  tone?: "primary" | "accent";
}) {
  const accentClass =
    tone === "accent"
      ? "border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/40 to-rr-rent-grad-end"
      : "border-rr-border-gray bg-rr-surface-white";

  return (
    <article
      className={`flex flex-col justify-between rounded-[1.2rem] border p-6 shadow-[var(--shadow-card)] ${accentClass}`}
    >
      <div className="space-y-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="text-xl font-semibold tracking-tight text-rr-text-primary">{title}</h3>
        <p className="text-sm leading-relaxed text-rr-text-primary/75">{description}</p>
        <ul className="space-y-2 text-sm text-rr-text-primary">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
              <span className="text-rr-text-primary/75">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={actionHref}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
      >
        {actionLabel}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}

function Badge({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "hero" | "dark";
}) {
  const styles =
    tone === "hero"
      ? "bg-[#F3F6F7] text-[#32404C]"
      : tone === "dark"
        ? "border-rr-pm-border/60 bg-rr-hero-bg-secondary/40 text-rr-hero-highlight"
        : "border-rr-border-gray bg-rr-surface-softgray text-rr-text-primary";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
      {children}
    </span>
  );
}

function StatCard({
  title,
  value,
  note,
  tone = "light",
}: {
  title: string;
  value: string;
  note?: string;
  tone?: "light" | "dark";
}) {
  const bgClass = tone === "dark" ? "bg-rr-hero-bg/40 border-rr-pm-border/60 text-rr-hero-highlight" : "bg-rr-surface-white border-rr-border-gray text-rr-text-primary";
  const labelClass = tone === "dark" ? "text-rr-hero-highlight/80" : "text-rr-text-primary/70";
  const valueClass = tone === "dark" ? "text-rr-hero-highlight" : "text-rr-text-primary";
  const noteClass = tone === "dark" ? "text-rr-hero-highlight/80" : "text-rr-text-primary/70";
  return (
    <div className={`rounded-[1rem] border p-4 shadow-[var(--shadow-soft)] ${bgClass}`}>
      <p className={`text-xs uppercase tracking-[0.08em] ${labelClass}`}>{title}</p>
      <p className={`text-2xl font-semibold ${valueClass}`}>{value}</p>
      {note ? <p className={`text-xs ${noteClass}`}>{note}</p> : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "hero" | "bottom";
}) {
  const styles =
    tone === "bottom"
      ? "bg-rr-bottomcta-gold text-rr-hero-bg"
      : tone === "hero"
        ? "bg-rr-accent-gold !text-rr-accent-darkteal"
        : "bg-rr-accent-gold text-rr-hero-bg";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-16px_rgba(0,0,0,0.35)] ${styles}`}
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
  children: React.ReactNode;
  tone?: "light" | "hero" | "bottom";
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    tone === "hero"
      ? "border border-white text-white hover:bg-white/05"
      : tone === "bottom"
        ? "bg-white text-rr-text-primary hover:bg-white/90"
        : "border border-rr-accent-darkteal text-rr-accent-darkteal hover:bg-rr-accent-darkteal/05";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const styles =
    tone === "dark"
      ? "bg-white/15 text-white border border-white/30"
      : "bg-rr-label-tan/40 text-rr-accent-darkteal border border-rr-border-gray/80";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] backdrop-blur ${styles}`}
    >
      {children}
    </span>
  );
}
