import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { LastUpdated } from "../../components/last-updated";
import { ArticleSchema } from "@/app/components/article-schema";

export const metadata: Metadata = {
  title: "Rental Upgrades That Actually Pay Off | ROI Guide | RentReadyTools",
  description:
    "Landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip.",
  alternates: {
    canonical: "https://rentreadytools.com/rent-pricing/rental-upgrades-that-pay-off",
  },
  openGraph: {
    title: "Rental Upgrades That Actually Pay Off | ROI Guide",
    description:
      "Landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip.",
    url: "https://rentreadytools.com/rent-pricing/rental-upgrades-that-pay-off",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools - Rental Upgrades That Pay Off",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Upgrades That Actually Pay Off | ROI Guide",
    description:
      "Landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const upgrades = [
  {
    name: "In-unit laundry or washer/dryer hookups",
    lift: "$60–$120/mo",
    payback: "8–18 months when plumbing is nearby",
    note: "High tenant value; verify electrical capacity and venting.",
  },
  {
    name: "Covered or assigned parking",
    lift: "$40–$110/mo",
    payback: "6–15 months depending on market and snow exposure",
    note: "Fastest ROI in urban/suburban markets with limited street parking.",
  },
  {
    name: "LED lighting + smart thermostat",
    lift: "$15–$35/mo",
    payback: "6–12 months with utility savings and marketing appeal",
    note: "Cheap, quick install that photographs well and lowers resident bills.",
  },
  {
    name: "Kitchen refresh (painted cabinets + hardware + faucet)",
    lift: "$50–$140/mo",
    payback: "12–24 months if boxes are solid and layout stays the same",
    note: "Use durable paint; swap counters only if existing is visibly damaged.",
  },
  {
    name: "Bathroom refresh (caulk, grout, fixtures, mirror)",
    lift: "$35–$90/mo",
    payback: "8–16 months",
    note: "Recaulk and regrout before replacing tile; new mirrors and lights go far.",
  },
];

const skipList = [
  "Luxury appliance packages that exceed neighborhood norms.",
  "High-end countertops when cabinets or layout are outdated.",
  "Grey-on-grey paint and flooring that shows wear quickly—choose warm neutrals.",
  "Barn doors that reduce privacy or closet storage.",
  "Complicated smart locks without a backup key option.",
];

export default function RentalUpgradesGuidePage() {
  const relatedResources = [
    { label: "Renovation ROI Calculator", href: "/tools/renovation-roi", icon: "calculator" as const },
    { label: "How Much Rent Guide", href: "/rent-pricing/how-much-rent-can-i-charge", icon: "guide" as const },
    { label: "Turnover Cost Guide", href: "/turnover/true-cost-of-tenant-turnover", icon: "chart" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="Rental Upgrades That Actually Pay Off"
        description="Landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip."
        url="/rent-pricing/rental-upgrades-that-pay-off"
        author="RentReadyTools"
      />
      <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Upgrade ROI guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Rental upgrades that actually pay off.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Focus on upgrades that tenants will pay for and that lease faster. Start with convenience and reliability
          before cosmetics.
        </p>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-rr-text-primary/70">
          <Badge>Fast payback</Badge>
          <Badge>Tenant value</Badge>
          <Badge>Photo impact</Badge>
        </div>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">High-ROI upgrades (2025-validated)</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Use these 2025-validated estimates to prioritize work. Adjust for your market and existing rent level.
            </p>
          </div>
          <Link
            href="/tools/renovation-roi"
            className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Calculate ROI
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {upgrades.map((upgrade) => (
            <article key={upgrade.name} className="rounded-[1rem] border border-rr-rent-border bg-gradient-to-br from-rr-rent-grad-start via-rr-rent-peach/35 to-rr-rent-grad-end p-5">
              <p className="text-sm font-semibold text-rr-text-primary">{upgrade.name}</p>
              <p className="text-lg font-semibold text-rr-text-primary">{upgrade.lift}</p>
              <p className="text-sm text-rr-text-primary/75">Payback: {upgrade.payback}</p>
              <p className="text-sm text-rr-text-primary/75">{upgrade.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Upgrades to skip or postpone</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Save budget for maintenance and core convenience features first.
          </p>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {skipList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Price moves vs upgrades</h2>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
              <span>Test a 1–2% price move before committing to a cosmetic upgrade.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
              <span>If inquiries are strong, focus on speed to lease instead of raising price further.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
              <span>Use upgrades to support renewals—especially laundry, parking, and lighting.</span>
            </li>
          </ul>
          <Link
            href="/contact?reason=pricing&source=upgrade-guide"
            className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
          >
            Ask for an ROI plan
          </Link>
        </article>
      </section>

      <div className="mt-8">
        <LastUpdated date="January 2025" />
      </div>

      <RelatedResources resources={relatedResources} />
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
