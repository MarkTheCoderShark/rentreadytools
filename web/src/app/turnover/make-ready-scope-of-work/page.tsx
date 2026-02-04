import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { ArticleSchema } from "@/app/components/article-schema";
import { LastUpdated } from "../../components/last-updated";

export const metadata: Metadata = {
  title: "Make-Ready Scope of Work for Rentals (2026) | RentReadyTools",
  description:
    "Create a make-ready scope of work that protects your budget and timeline: room-by-room tasks, vendor sequencing, quality control, and a ready-to-list checklist.",
  alternates: {
    canonical: "https://rentreadytools.com/turnover/make-ready-scope-of-work",
  },
  openGraph: {
    title: "Make-Ready Scope of Work for Rentals (2026)",
    description:
      "Create a make-ready scope of work that protects your budget and timeline: room-by-room tasks, vendor sequencing, quality control, and a ready-to-list checklist.",
    url: "https://rentreadytools.com/turnover/make-ready-scope-of-work",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools Make-Ready Scope of Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make-Ready Scope of Work for Rentals (2026)",
    description:
      "Create a make-ready scope of work that protects your budget and timeline: room-by-room tasks, vendor sequencing, quality control, and a ready-to-list checklist.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const scopeBuckets = [
  {
    title: "Safety + compliance",
    items: [
      "Smoke/CO detector test and replacements",
      "Trip hazard fixes (loose thresholds, broken steps)",
      "GFCI outlets in kitchen, bath, laundry",
      "Door locks rekey and window locks verified",
    ],
  },
  {
    title: "Clean + reset",
    items: [
      "Deep clean kitchen and bath, including appliances",
      "Carpet clean or hard-surface mop and polish",
      "Remove debris and sanitize high-touch areas",
      "Odor control and air filter replacement",
    ],
  },
  {
    title: "Repairs + touch-ups",
    items: [
      "Patch drywall and paint touch-up",
      "Fix leaks, drips, and running toilets",
      "Replace broken fixtures and missing hardware",
      "Repair blinds, screens, and door stops",
    ],
  },
  {
    title: "Market-ready upgrades",
    items: [
      "Replace dated lighting or hardware",
      "Refresh caulk and grout for a clean finish",
      "Recoat cabinet fronts if worn",
      "Stage with new photos and listing copy",
    ],
  },
];

const roomByRoom = [
  {
    room: "Living + bedrooms",
    items: [
      "Patch nail holes and match paint sheen.",
      "Verify outlets and switches operate correctly.",
      "Check windows, locks, and blinds for damage.",
      "Vacuum or mop floors and spot-clean baseboards.",
    ],
  },
  {
    room: "Kitchen",
    items: [
      "Clean inside appliances and replace drip pans.",
      "Test garbage disposal and check for leaks.",
      "Tighten cabinet hinges and replace worn pulls.",
      "Re-caulk counters and sinks if gaps appear.",
    ],
  },
  {
    room: "Bath",
    items: [
      "Test fan, lighting, and GFCI outlets.",
      "Clean grout and re-caulk tub or shower edges.",
      "Fix running toilets or slow drains.",
      "Replace toilet seat and clean under rim.",
    ],
  },
  {
    room: "Exterior + common",
    items: [
      "Confirm entry lighting works and address numbers are visible.",
      "Replace HVAC filters and test thermostat.",
      "Check smoke/CO detectors and replace batteries.",
      "Remove debris, sweep entry, and clean mailbox area.",
    ],
  },
];

const bidTemplate = [
  "Scope summary: unit type, square footage, and target completion date.",
  "Photos: before images for each room and any known issues.",
  "Materials list: paint brand, flooring type, hardware finish, fixtures.",
  "Labor expectations: cleanup standards, debris removal, haul-away notes.",
  "Access plan: lockbox code, parking rules, and work hours.",
  "Quality standards: photo proof required for each completed task.",
];

const budgetTiers = [
  {
    tier: "Light turn",
    range: "$",
    includes: "Clean, minor touch-ups, small repairs, filters, basic hardware.",
    bestFor: "Units in good condition with short tenancy.",
  },
  {
    tier: "Standard turn",
    range: "$$",
    includes: "Deep clean, paint touch-ups, basic repairs, partial flooring fixes.",
    bestFor: "Most units after 1-3 years of tenancy.",
  },
  {
    tier: "Heavy turn",
    range: "$$$",
    includes: "Full paint, flooring replacement, appliance refresh, significant repairs.",
    bestFor: "Units with deferred maintenance or long tenancies.",
  },
];

const sequencing = [
  {
    step: "Day 0-1: Walkthrough + scope lock",
    detail: "Inspect, document, and finalize the scope. Order materials immediately.",
  },
  {
    step: "Day 2-4: Repairs + paint",
    detail: "Finish repairs, patch drywall, paint walls and trim if needed.",
  },
  {
    step: "Day 4-6: Flooring + fixtures",
    detail: "Install flooring, replace hardware, and fix appliances.",
  },
  {
    step: "Day 6-7: Deep clean",
    detail: "Full clean after construction work is complete.",
  },
  {
    step: "Day 7: Photos + listing",
    detail: "Take fresh photos and publish or refresh the listing.",
  },
];

const qualityChecks = [
  "Walls: uniform paint finish, no visible patches.",
  "Floors: no squeaks, gaps, or lifting seams.",
  "Kitchen: appliances clean, burners working, sinks draining.",
  "Bath: no leaks, caulk clean, fans operating.",
  "Windows: locks functional, screens intact.",
  "Exterior: entry lighting works, address numbers visible.",
];

const faqs = [
  {
    question: "What is a make-ready scope of work?",
    answer:
      "It is the written list of tasks required to bring a unit to move-in ready condition. It includes cleaning, repairs, safety items, and any upgrades needed to price the unit correctly.",
  },
  {
    question: "How detailed should the scope be?",
    answer:
      "Detailed enough that a vendor can price and execute it without guessing. Include materials, finish levels, and who is responsible for each task.",
  },
  {
    question: "When should I finalize the scope?",
    answer:
      "As soon as you receive notice and have access to the unit. The earlier you lock the scope, the faster you can schedule vendors and order materials.",
  },
  {
    question: "Do I need to paint every turnover?",
    answer:
      "Not always. Many landlords do touch-ups instead of full paint when walls are clean and color is consistent. Full paint is best after long tenancies or visible wear.",
  },
  {
    question: "How can I keep a turn under 10 days?",
    answer:
      "Pre-schedule cleaners and maintenance, use a standard scope checklist, and order materials before move-out. Most delays happen when scopes change mid-project.",
  },
  {
    question: "Should I upgrade during turnover?",
    answer:
      "Only when the upgrade raises rent or reduces vacancy. Use ROI math and tenant demand to decide, not personal preference.",
  },
  {
    question: "How do I document make-ready work?",
    answer:
      "Use before-and-after photos for every room and store invoices. Documentation protects your deposit decisions and supports higher rent pricing.",
  },
];

export default function MakeReadyScopePage() {
  const relatedResources = [
    { label: "Turnover Guide", href: "/turnover/guide", icon: "guide" as const },
    { label: "Move-out Cleaning Checklist", href: "/turnover/move-out-cleaning-checklist", icon: "checklist" as const },
    { label: "Turnover Timeline", href: "/turnover/how-long-should-turnover-take", icon: "guide" as const },
    { label: "Vacancy Cost Calculator", href: "/tools/vacancy-rate-calculator", icon: "calculator" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="Make-Ready Scope of Work for Rentals"
        description="Create a make-ready scope of work that protects your budget and timeline: room-by-room tasks, vendor sequencing, quality control, and a ready-to-list checklist."
        url="/turnover/make-ready-scope-of-work"
        publishedDate="2026-02-04"
        modifiedDate="2026-02-04"
        readingTimeMinutes={17}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Turnover guide</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Make-ready scope of work for rentals.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            A clear make-ready scope keeps vendors aligned, protects your budget, and reduces vacancy days. Use this guide
            to create a room-by-room scope, sequence the work, and verify quality before you list the unit.
          </p>
          <LastUpdated date="February 2026" />
        </header>

        <section className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-5 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Featured snippet</p>
          <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/80">
            A make-ready scope of work is a written plan that lists every cleaning, repair, and upgrade task needed to
            bring a rental to move-in ready condition. Lock the scope early, sequence the work by trade, and verify
            quality with a checklist so you can list fast and avoid mid-project delays.
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          <PrimaryButton href="/turnover/guide">Open the turnover guide</PrimaryButton>
          <GhostButton href="/tools/vacancy-rate-calculator">Calculate vacancy cost</GhostButton>
        </section>

        <TableOfContents />

        <section id="definition" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">1. What a make-ready scope includes</h2>
          <p className="text-sm text-rr-text-primary/80">
            Think of the scope as your master checklist. It defines what gets cleaned, repaired, replaced, and upgraded.
            Without it, vendors bid inconsistently, timelines slip, and quality varies from unit to unit.
          </p>
          <p className="text-sm text-rr-text-primary/80">
            Every scope should include four buckets: safety and compliance, clean and reset tasks, repairs and touch-ups,
            and market-ready upgrades. When you separate tasks this way, you can decide what is required versus optional.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {scopeBuckets.map((bucket) => (
              <article key={bucket.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-rr-text-primary">{bucket.title}</p>
                <ul className="mt-2 space-y-2 text-sm text-rr-text-primary/80">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="room-template" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">2. Room-by-room scope template</h2>
          <p className="text-sm text-rr-text-primary/80">
            If you only have time to build one checklist, make it room-by-room. It keeps vendors focused, speeds up
            pricing, and makes inspections faster. Use the template below as a default and customize for your property
            class.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {roomByRoom.map((room) => (
              <article key={room.room} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-rr-text-primary">{room.room}</p>
                <ul className="mt-2 space-y-2 text-sm text-rr-text-primary/80">
                  {room.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Tip>
            Standardize the checklist across your portfolio, then add a small notes section for unit-specific items. That
            keeps your scope consistent and your vendors faster.
          </Tip>
        </section>

        <section id="budget" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">3. Set a budget tier before you bid</h2>
          <p className="text-sm text-rr-text-primary/80">
            Most cost overruns happen when the scope is vague. Before you request bids, decide whether the unit is a light,
            standard, or heavy turn. This keeps vendors quoting the same level of work and helps you decide if upgrades are
            worth it.
          </p>
          <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Budget tiers</p>
            <div className="mt-3 space-y-3">
              {budgetTiers.map((tier) => (
                <div key={tier.tier} className="rounded-[0.95rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-rr-text-primary">{tier.tier}</p>
                    <span className="text-xs font-semibold text-rr-text-primary/70">{tier.range}</span>
                  </div>
                  <p className="mt-2 text-sm text-rr-text-primary/80">Includes: {tier.includes}</p>
                  <p className="mt-2 text-xs text-rr-text-primary/70">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
          <Tip>
            If you are unsure, start with a standard turn budget and treat upgrades as optional add-ons. You can always
            add an upgrade after the core work is scheduled.
          </Tip>
        </section>

        <section id="sequencing" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">4. Sequence the work to avoid rework</h2>
          <p className="text-sm text-rr-text-primary/80">
            Turnover work moves fast when it follows a predictable sequence. Repairs and paint come before flooring.
            Flooring comes before deep cleaning. Photos are last. If you reverse the order, you pay twice and lose time.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {sequencing.map((step) => (
              <div key={step.step} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-rr-text-primary">{step.step}</p>
                <p className="mt-2 text-sm text-rr-text-primary/75">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Scheduling tip</p>
            <p className="mt-2 text-sm text-rr-text-primary/80">
              Book your cleaner for the day after paint and flooring are complete. That single scheduling rule eliminates
              most re-cleaning costs.
            </p>
          </div>
        </section>

        <section id="materials" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">5. Standardize materials and finishes</h2>
          <p className="text-sm text-rr-text-primary/80">
            Consistent materials lower costs and reduce delays. When you use the same paint color, hardware, and flooring
            across units, you can keep spares in stock and make fast repairs without re-ordering.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Recommended standards</p>
              <ul className="mt-2 space-y-2 text-sm text-rr-text-primary/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>One neutral wall color, one trim color, one cabinet touch-up paint.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Standard hardware finish (matte black or brushed nickel).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Same flooring type per unit class to reduce patchwork.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Upgrade decision rule</p>
              <p className="mt-2 text-sm text-rr-text-primary/80">
                Only upgrade if it increases rent or reduces vacancy. If an upgrade does neither, document it as
                maintenance and keep the scope minimal.
              </p>
              <Link
                href="/tools/renovation-roi"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
              >
                Estimate renovation ROI <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="quality" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">6. Quality control before listing</h2>
          <p className="text-sm text-rr-text-primary/80">
            The fastest way to lose a week is to list before the unit is actually ready. Use a consistent quality
            checklist and verify photo standards before you publish the listing.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Quality control checklist</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {qualityChecks.map((check) => (
                <li key={check} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
          <Tip>
            Take a full set of listing photos immediately after the quality check. Fresh photos boost response rate and
            keep your listing competitive.
          </Tip>
        </section>

        <section id="delays" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">7. Avoid the most common delays</h2>
          <p className="text-sm text-rr-text-primary/80">
            Most delays happen for predictable reasons: materials not ordered, scope changes mid-project, or vendors
            waiting on access. Use a pre-turn checklist to reduce these risks.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
              <p className="text-sm font-semibold text-rr-text-primary">Preventable delays</p>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Materials not ordered before work begins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Multiple vendors overlapping without a schedule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Change orders due to unclear scope or missing photos.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
              <p className="text-sm font-semibold text-rr-text-primary">Simple fixes</p>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Order supplies on day one, not day three.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Share a single timeline with every vendor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                  <span>Use before-and-after photos to lock scope early.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ready" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">8. Ready-to-list checklist</h2>
          <p className="text-sm text-rr-text-primary/80">
            If you can check every item below, you are ready to list. If not, finish the work before you publish. Listing
            early creates more cancellations than leads.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <ul className="space-y-2 text-sm text-rr-text-primary/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>Unit is clean, staged, and odor-free.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>All repairs completed and documented.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>Photos taken in daylight with a consistent angle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>Listing price and availability date confirmed.</span>
              </li>
            </ul>
          </div>
          <CTABox
            title="Need help coordinating a turn?"
            body="We can build a make-ready plan, budget, and schedule for your property so you can list fast and avoid delays."
            primaryLabel="Request a turnover plan"
            primaryHref="/contact?reason=turnover&source=make-ready-scope"
            secondaryLabel="Review turnover benchmarks"
            secondaryHref="/turnover/how-long-should-turnover-take"
          />
        </section>

        <section id="faq" className="space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">FAQ</h2>
            <FAQSchemaScript faqs={faqs} />
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4">
                <p className="text-sm font-semibold text-rr-text-primary">{faq.question}</p>
                <p className="mt-2 text-sm text-rr-text-primary/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="references" className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">References</h2>
          <ul className="space-y-2 text-sm text-rr-text-primary/75">
            <li>U.S. Department of Housing and Urban Development (HUD) - Housing quality standards.</li>
            <li>U.S. Environmental Protection Agency (EPA) - Lead-safe renovation guidance.</li>
            <li>OSHA - Workplace safety practices for contractors.</li>
            <li>Institute of Real Estate Management (IREM) - Maintenance planning resources.</li>
          </ul>
        </section>

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

function TableOfContents() {
  const sections = [
    { id: "definition", title: "What a make-ready scope includes" },
    { id: "room-template", title: "Room-by-room template" },
    { id: "budget", title: "Set a budget tier" },
    { id: "sequencing", title: "Sequence the work" },
    { id: "materials", title: "Standardize materials" },
    { id: "quality", title: "Quality control" },
    { id: "delays", title: "Avoid delays" },
    { id: "ready", title: "Ready-to-list checklist" },
    { id: "bid-template", title: "Vendor bid template" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <nav className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
      <p className="text-sm font-semibold text-rr-text-primary">In this guide</p>
      <ul className="mt-2 grid gap-1 text-sm md:grid-cols-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-rr-accent-darkteal hover:underline">
              {index + 1}. {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[1rem] border border-rr-accent-darkteal/20 bg-rr-accent-darkteal/5 p-4">
      <span className="mt-0.5 text-rr-accent-darkteal">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <p className="text-sm text-rr-text-primary/80">{children}</p>
    </div>
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

function CTABox({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="space-y-3 rounded-[1.2rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
      <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-rr-text-primary/75">{body}</p>
      <div className="flex flex-wrap gap-3">
        <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
        <GhostButton href={secondaryHref}>{secondaryLabel}</GhostButton>
      </div>
    </section>
  );
}

function FAQSchemaScript({ faqs }: { faqs: { question: string; answer: string }[] }) {
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
        <section id="bid-template" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">9. Vendor bid request template</h2>
          <p className="text-sm text-rr-text-primary/80">
            A short bid request improves turnaround and reduces change orders. Share a consistent template with every
            vendor so pricing is apples-to-apples and expectations are clear.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Bid request checklist</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {bidTemplate.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Tip>
            Require vendors to confirm the timeline in writing. A one-line confirmation avoids missed expectations.
          </Tip>
        </section>
