import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { ArticleSchema } from "@/app/components/article-schema";
import { LastUpdated } from "../../components/last-updated";

export const metadata: Metadata = {
  title: "Rental Inspection Checklist & Schedule (2026) | RentReadyTools",
  description:
    "A complete rental inspection checklist for move-in, routine, and move-out inspections, plus a scheduling plan and documentation tips that protect deposits and reduce disputes.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms/rental-inspection-checklist",
  },
  openGraph: {
    title: "Rental Inspection Checklist & Schedule (2026)",
    description:
      "A complete rental inspection checklist for move-in, routine, and move-out inspections, plus a scheduling plan and documentation tips that protect deposits and reduce disputes.",
    url: "https://rentreadytools.com/landlord-forms/rental-inspection-checklist",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools Rental Inspection Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Inspection Checklist & Schedule (2026)",
    description:
      "A complete rental inspection checklist for move-in, routine, and move-out inspections, plus a scheduling plan and documentation tips that protect deposits and reduce disputes.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const inspectionTypes = [
  {
    title: "Move-in inspection",
    detail: "Baseline the unit condition, set expectations, and document anything that is already worn or damaged.",
  },
  {
    title: "Routine inspection",
    detail: "Check for maintenance issues, lease compliance, and safety hazards while the tenant is in place.",
  },
  {
    title: "Move-out inspection",
    detail: "Document final condition, confirm cleaning standards, and support security deposit deductions.",
  },
];

const moveInChecklist = [
  "Walls: paint condition, holes, scuffs, and stains.",
  "Floors: scratches, stains, loose tiles, or carpet damage.",
  "Kitchen: appliance operation, cabinet doors, sink leaks, and countertops.",
  "Bathroom: caulk condition, drains, fans, and water pressure.",
  "Doors/windows: locks, screens, and proper sealing.",
  "Lighting: all fixtures work and bulbs installed.",
  "Exterior (if applicable): rails, steps, and entry lighting.",
];

const routineChecklist = [
  "Leaks under sinks, around toilets, and behind appliances.",
  "Smoke/CO detectors operational and not tampered with.",
  "HVAC filters clean and vents unobstructed.",
  "Signs of pests, mold, or moisture intrusion.",
  "Unauthorized occupants or pets.",
  "Safety hazards: blocked exits, overloaded outlets, or trip hazards.",
];

const moveOutChecklist = [
  "Walls cleaned, patched, and free of major damage.",
  "Floors cleaned and free of stains or deep scratches.",
  "Appliances cleaned inside and out.",
  "Bathrooms deep cleaned with no mildew or residue.",
  "All keys, remotes, and access devices returned.",
  "Trash removed and unit left empty.",
];

const wearVsDamage = [
  {
    wear: "Light scuffs on walls or minor nail holes.",
    damage: "Large holes, broken doors, or unauthorized paint colors.",
  },
  {
    wear: "Faded carpet in high-traffic areas.",
    damage: "Pet urine stains, burns, or torn carpet.",
  },
  {
    wear: "Minor grout discoloration over time.",
    damage: "Missing tiles or cracked fixtures.",
  },
  {
    wear: "Loose cabinet handles from normal use.",
    damage: "Broken cabinet doors or missing hardware.",
  },
];

const documentationTips = [
  "Use consistent photo angles for every room so before-and-after comparisons are easy.",
  "Take close-ups of damage plus wide-angle context photos.",
  "Store inspection notes with timestamps and receipts.",
  "Have the tenant sign the move-in and move-out checklists when possible.",
];

const conditionRatings = [
  {
    rating: "A - Rent-ready",
    meaning: "Clean, functional, no repairs needed beyond minor touch-ups.",
  },
  {
    rating: "B - Needs attention",
    meaning: "Minor repairs or cleaning required before next move-in.",
  },
  {
    rating: "C - Heavy repair",
    meaning: "Significant repairs or replacements required.",
  },
];

const schedulingPlan = [
  {
    stage: "Move-in day",
    timing: "Before keys are handed over",
    goal: "Create baseline condition and align expectations.",
  },
  {
    stage: "90-120 days after move-in",
    timing: "First routine inspection",
    goal: "Confirm maintenance issues and lease compliance.",
  },
  {
    stage: "Every 6-12 months",
    timing: "Ongoing routine inspection",
    goal: "Prevent deferred maintenance and catch leaks early.",
  },
  {
    stage: "30-14 days before move-out",
    timing: "Pre-move-out walkthrough",
    goal: "Give the tenant a chance to fix issues before move-out.",
  },
  {
    stage: "Move-out day",
    timing: "After keys are returned",
    goal: "Document final condition for deposit decisions.",
  },
];

const faqs = [
  {
    question: "How often should landlords inspect a rental?",
    answer:
      "A common approach is one routine inspection 3-4 months after move-in and then every 6-12 months. More frequent inspections may be appropriate for high-risk properties or older buildings.",
  },
  {
    question: "Do I need to give notice before an inspection?",
    answer:
      "Yes. Most states require advance notice before a landlord enters a rental. Check your local rules for the exact notice period and delivery method.",
  },
  {
    question: "What should a move-in inspection include?",
    answer:
      "A move-in inspection should document walls, floors, appliances, fixtures, and any existing wear. It protects both you and the tenant by setting a baseline condition.",
  },
  {
    question: "Can I charge for cleaning after move-out?",
    answer:
      "If your lease requires a specific standard and the unit is left below that standard, you can generally charge reasonable cleaning costs. Document the condition and keep receipts.",
  },
  {
    question: "Should the tenant be present for inspections?",
    answer:
      "It helps, but it is not always required. For move-in and move-out inspections, having the tenant present and signing the checklist reduces disputes later.",
  },
  {
    question: "What is normal wear and tear?",
    answer:
      "Normal wear is the expected aging of a property when used properly. Damage is beyond normal wear, such as large holes, broken fixtures, or deep stains.",
  },
  {
    question: "How do I handle issues found during an inspection?",
    answer:
      "Document the issue, provide written notice if the tenant needs to correct it, and schedule repairs quickly. Use a consistent follow-up process so every tenant is treated the same.",
  },
];

export default function RentalInspectionChecklistPage() {
  const relatedResources = [
    { label: "Notice to Enter Generator", href: "/landlord-forms/notice-to-enter-generator", icon: "tool" as const },
    { label: "Move-in Checklist", href: "/landlord-forms/move-in-checklist", icon: "checklist" as const },
    { label: "Move-out Checklist", href: "/landlord-forms/move-out-checklist", icon: "checklist" as const },
    { label: "Security Deposit Return", href: "/landlord-forms/security-deposit-return-letter", icon: "guide" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="Rental Inspection Checklist & Schedule"
        description="A complete rental inspection checklist for move-in, routine, and move-out inspections, plus a scheduling plan and documentation tips that protect deposits and reduce disputes."
        url="/landlord-forms/rental-inspection-checklist"
        publishedDate="2026-02-04"
        modifiedDate="2026-02-04"
        readingTimeMinutes={16}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Checklist</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Rental inspection checklist & schedule.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            A consistent inspection process reduces disputes, protects your security deposit decisions, and keeps
            maintenance under control. Use this guide to plan inspections, document condition, and keep tenants informed.
          </p>
          <LastUpdated date="February 2026" />
        </header>

        <section className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-5 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Featured snippet</p>
          <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/80">
            A complete rental inspection plan includes move-in, routine, and move-out checklists plus a clear schedule.
            Document condition with photos, give proper notice, and use the same checklist every time. Consistency is what
            protects deposits, prevents disputes, and keeps maintenance from piling up.
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          <PrimaryButton href="/landlord-forms/notice-to-enter-generator">Create notice to enter</PrimaryButton>
          <GhostButton href="/landlord-forms/move-in-checklist">Open move-in checklist</GhostButton>
        </section>

        <TableOfContents />

        <section id="types" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">1. The three inspection types</h2>
          <p className="text-sm text-rr-text-primary/80">
            Inspections are not one-size-fits-all. Each type has a different goal. Move-in inspections create a baseline,
            routine inspections catch maintenance issues early, and move-out inspections support deposit decisions.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {inspectionTypes.map((type) => (
              <article key={type.title} className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-rr-text-primary">{type.title}</p>
                <p className="mt-2 text-sm text-rr-text-primary/80">{type.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">2. Recommended inspection schedule</h2>
          <p className="text-sm text-rr-text-primary/80">
            A predictable schedule helps tenants feel respected and keeps issues from escalating. The plan below works for
            most long-term rentals, but adjust for building age, property type, and tenant history.
          </p>
          <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Inspection schedule</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {schedulingPlan.map((item) => (
                <div key={item.stage} className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                  <p className="text-sm font-semibold text-rr-text-primary">{item.stage}</p>
                  <p className="mt-2 text-sm text-rr-text-primary/80">Timing: {item.timing}</p>
                  <p className="mt-2 text-xs text-rr-text-primary/70">Goal: {item.goal}</p>
                </div>
              ))}
            </div>
          </div>
          <Tip>
            If you manage multiple units, group inspections by building or neighborhood. Batching reduces travel time and
            keeps your schedule predictable for residents.
          </Tip>
        </section>

        <section id="notice" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">3. Notice and tenant communication</h2>
          <p className="text-sm text-rr-text-primary/80">
            Always give notice and explain why you are entering. Most residents respond well when you lead with safety and
            maintenance. Be clear about timing, what you will check, and how long it will take.
          </p>
          <p className="text-sm text-rr-text-primary/80">
            Respect privacy during inspections. Avoid opening personal drawers or photographing personal items. Focus on
            property condition and safety, not how the tenant lives. Clear boundaries reduce conflict and protect trust.
          </p>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Communication tips</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                <span>Provide at least one alternate time window for flexibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                <span>Explain how inspections protect the tenant and the property.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                <span>Confirm access instructions the day before the visit.</span>
              </li>
            </ul>
            <Link
              href="/landlord-forms/notice-to-enter-generator"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
            >
              Generate a notice to enter <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section id="move-in" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">4. Move-in inspection checklist</h2>
          <p className="text-sm text-rr-text-primary/80">
            The move-in inspection is your baseline. Anything not documented here becomes harder to charge back later.
            Walk the unit with the tenant if possible, take photos, and note anything that is not in move-in ready
            condition.
          </p>
          <Checklist items={moveInChecklist} />
          <Tip>
            Always capture wide-angle photos of each room plus close-ups of any existing damage. Those wide shots save you
            when a dispute arises months later.
          </Tip>
        </section>

        <section id="routine" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">5. Routine inspection checklist</h2>
          <p className="text-sm text-rr-text-primary/80">
            Routine inspections catch issues that become expensive if ignored. The focus is preventive maintenance, safety,
            and lease compliance. Keep it simple and consistent so tenants know what to expect.
          </p>
          <Checklist items={routineChecklist} />
        </section>

        <section id="move-out" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">6. Move-out inspection checklist</h2>
          <p className="text-sm text-rr-text-primary/80">
            The move-out inspection supports your deposit decision. Compare the unit to the move-in baseline and document
            anything that goes beyond normal wear and tear. Be factual and consistent.
          </p>
          <Checklist items={moveOutChecklist} />
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Security deposit follow-up</p>
            <p className="mt-2 text-sm text-rr-text-primary/80">
              Send a clear deposit accounting letter with itemized deductions and receipts. That documentation reduces
              disputes and keeps your process compliant.
            </p>
            <Link
              href="/landlord-forms/security-deposit-return-letter"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
            >
              Use the deposit return letter <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section id="wear" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">7. Normal wear vs. damage</h2>
          <p className="text-sm text-rr-text-primary/80">
            Disputes often come down to this question: what is normal wear and what is chargeable damage? Use consistent
            examples so your decisions are predictable and defensible.
          </p>
          <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Examples by category</p>
            <div className="grid gap-3 md:grid-cols-2">
              {wearVsDamage.map((item) => (
                <div key={item.wear} className="rounded-[0.95rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                  <p className="text-sm font-semibold text-rr-text-primary">Normal wear</p>
                  <p className="mt-2 text-sm text-rr-text-primary/80">{item.wear}</p>
                  <p className="mt-3 text-sm font-semibold text-rr-text-primary">Damage</p>
                  <p className="mt-2 text-sm text-rr-text-primary/80">{item.damage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="documentation" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">8. Documentation standards</h2>
          <p className="text-sm text-rr-text-primary/80">
            Your notes and photos are the evidence that supports any deduction or repair claim. If you document
            consistently, you will resolve most disputes quickly. If you do not, you will often end up negotiating down.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Documentation tips</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {documentationTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Condition rating scale</p>
            <div className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {conditionRatings.map((item) => (
                <div key={item.rating} className="flex flex-col gap-1 rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-white p-3">
                  <p className="text-sm font-semibold text-rr-text-primary">{item.rating}</p>
                  <p className="text-sm text-rr-text-primary/80">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="repairs" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">9. Turn inspection findings into action</h2>
          <p className="text-sm text-rr-text-primary/80">
            Inspections are only useful if they lead to action. For routine inspections, create a simple repair plan with
            due dates. For move-out inspections, convert your findings into a make-ready scope and schedule vendors
            quickly.
          </p>
          <CTABox
            title="Need a turnover plan based on inspection findings?"
            body="We can turn your inspection notes into a make-ready scope, timeline, and budget so you can list fast."
            primaryLabel="Request a turnover plan"
            primaryHref="/contact?reason=turnover&source=rental-inspection-checklist"
            secondaryLabel="View turnover checklist"
            secondaryHref="/turnover/guide"
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
            <li>U.S. Department of Housing and Urban Development (HUD) - Housing inspection guidance.</li>
            <li>Consumer Financial Protection Bureau (CFPB) - Rental rights and dispute resources.</li>
            <li>National Fire Protection Association (NFPA) - Smoke alarm guidance.</li>
            <li>U.S. Environmental Protection Agency (EPA) - Mold and moisture guidance.</li>
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
    { id: "types", title: "Inspection types" },
    { id: "schedule", title: "Recommended schedule" },
    { id: "notice", title: "Notice and communication" },
    { id: "move-in", title: "Move-in checklist" },
    { id: "routine", title: "Routine checklist" },
    { id: "move-out", title: "Move-out checklist" },
    { id: "wear", title: "Wear vs damage" },
    { id: "documentation", title: "Documentation standards" },
    { id: "repairs", title: "Action plan" },
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

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
      <ul className="space-y-2 text-sm text-rr-text-primary/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
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
