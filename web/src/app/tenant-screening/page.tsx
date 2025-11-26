import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Tenant Screening Guide 2025 | How to Screen Tenants | RentReadyTools",
  description:
    "Complete tenant screening guide for landlords. Learn how to run background checks, verify income, check references, and find reliable tenants while staying compliant.",
  alternates: {
    canonical: "https://rentreadytools.com/tenant-screening",
  },
  openGraph: {
    title: "Tenant Screening Guide 2025 | How to Screen Tenants",
    description:
      "Complete tenant screening guide for landlords. Learn background checks, income verification, and reference checks.",
    url: "https://rentreadytools.com/tenant-screening",
    siteName: "RentReadyTools",
    type: "website",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tenant Screening Guide - RentReadyTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenant Screening Guide 2025 | How to Screen Tenants",
    description:
      "Complete tenant screening guide for landlords. Background checks, income verification, and more.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const screeningSteps = [
  {
    step: "1",
    title: "Pre-screening questions",
    description: "Filter applicants early with key questions about income, move-in date, pets, and rental history.",
    time: "5 min",
  },
  {
    step: "2",
    title: "Application & consent",
    description: "Collect complete application with authorization to run credit and background checks.",
    time: "15 min",
  },
  {
    step: "3",
    title: "Income verification",
    description: "Verify income is 2.5-3x monthly rent through pay stubs, tax returns, or employer verification.",
    time: "1-2 days",
  },
  {
    step: "4",
    title: "Credit & background check",
    description: "Review credit score, payment history, evictions, and criminal background.",
    time: "1-3 days",
  },
  {
    step: "5",
    title: "Reference checks",
    description: "Contact previous landlords and employer to verify rental history and employment.",
    time: "1-2 days",
  },
  {
    step: "6",
    title: "Decision & documentation",
    description: "Make consistent, documented decision based on objective criteria. Send approval or adverse action notice.",
    time: "Same day",
  },
];

const guides = [
  {
    title: "How to screen tenants",
    summary: "Step-by-step process for thorough tenant screening from application to approval.",
    href: "/tenant-screening/how-to-screen-tenants",
    badge: "Guide",
  },
  {
    title: "Rental application template",
    summary: "Complete rental application with all the fields you need to collect from prospective tenants.",
    href: "/tenant-screening/rental-application-template",
    badge: "Template",
  },
  {
    title: "Tenant red flags checklist",
    summary: "Warning signs to watch for during the screening process and how to handle them.",
    href: "/tenant-screening/tenant-red-flags",
    badge: "Checklist",
  },
];

const complianceTips = [
  "Apply the same screening criteria to all applicants—document your standards in writing.",
  "Never deny based on race, color, religion, national origin, sex, familial status, or disability (Fair Housing Act).",
  "Some states/cities have additional protections (source of income, criminal history limitations).",
  "Provide adverse action notice if denying based on credit or background check results.",
  "Keep application records for at least 3 years in case of fair housing complaints.",
];

const screeningMetrics = [
  { stat: "2.5-3x", label: "Income to rent ratio", description: "Industry standard minimum" },
  { stat: "620+", label: "Credit score", description: "Typical minimum threshold" },
  { stat: "2 years", label: "Rental history", description: "Ideal verification period" },
  { stat: "3-5 days", label: "Screening timeline", description: "Average process duration" },
];

export default function TenantScreeningPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Tenant Screening", url: "/tenant-screening" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="relative mx-auto max-w-6xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-16 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-[1.4rem] border border-rr-border-gray bg-rr-surface-white shadow-[var(--shadow-card)]">
          <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div className="space-y-6">
              <Eyebrow>Tenant screening</Eyebrow>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Find reliable tenants. Reduce turnover and risk.
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-rr-text-primary/80">
                A thorough screening process is your best defense against late payments, property damage, and evictions.
                Learn how to screen effectively while staying compliant with fair housing laws.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-rr-text-primary/70">
                <Badge>Background checks</Badge>
                <Badge>Credit reports</Badge>
                <Badge>Income verification</Badge>
                <Badge>Reference checks</Badge>
              </div>
            </div>
            <div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6">
              <p className="text-sm font-semibold text-rr-text-primary">Key screening metrics</p>
              <div className="grid grid-cols-2 gap-3">
                {screeningMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-rr-surface-white p-3">
                    <p className="text-xl font-bold text-rr-accent-darkteal">{metric.stat}</p>
                    <p className="text-xs font-semibold text-rr-text-primary">{metric.label}</p>
                    <p className="text-xs text-rr-text-primary/60">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">The screening process.</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
              Follow these steps for every applicant to ensure thorough, consistent, and compliant screening.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {screeningSteps.map((item) => (
              <article
                key={item.step}
                className="flex flex-col rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rr-accent-darkteal text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold tracking-tight text-rr-text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-rr-text-primary/75">{item.description}</p>
                    <p className="mt-2 text-xs text-rr-text-primary/50">Typical time: {item.time}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <Eyebrow>Resources</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Guides & templates.</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/75">
              Detailed guides and ready-to-use templates to streamline your screening process.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.href}
                className="flex h-full flex-col justify-between rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-rr-accent-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rr-accent-darkteal">
                    {guide.badge}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{guide.title}</h3>
                  <p className="text-sm leading-relaxed text-rr-text-primary/75">{guide.summary}</p>
                </div>
                <Link
                  href={guide.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
                >
                  View resource <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6 shadow-[var(--shadow-soft)]">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-rr-status-alert">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rr-text-primary">Fair housing compliance</p>
              <p className="mt-1 text-sm text-rr-text-primary/80">
                Tenant screening must comply with federal, state, and local fair housing laws. Here are key compliance
                points:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/75">
                {complianceTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rr-status-alert" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">Want help screening tenants?</p>
          <p className="text-sm text-rr-text-primary/80">
            Our property management team handles the entire leasing process—from marketing to screening to move-in.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact?reason=screening">Get screening help</PrimaryButton>
            <GhostButton href="/property-management">Learn about management</GhostButton>
          </div>
        </section>
      </main>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rr-accent-darkteal">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rr-border-gray bg-rr-surface-softgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-rr-text-primary">
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-rr-accent-gold px-5 py-3 text-sm font-semibold text-rr-hero-bg shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-rr-accent-darkteal px-5 py-3 text-sm font-semibold text-rr-accent-darkteal transition hover:bg-rr-accent-darkteal/05"
    >
      {children}
    </Link>
  );
}
