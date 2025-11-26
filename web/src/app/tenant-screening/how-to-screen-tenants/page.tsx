import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/app/components/article-schema";

export const metadata: Metadata = {
  title: "How to Screen Tenants 2025 | Complete Landlord Guide | RentReadyTools",
  description:
    "Step-by-step guide to screening tenants. Learn income verification, background checks, reference calls, and fair housing compliance for landlords.",
  alternates: {
    canonical: "https://rentreadytools.com/tenant-screening/how-to-screen-tenants",
  },
  openGraph: {
    title: "How to Screen Tenants 2025 | Complete Landlord Guide",
    description:
      "Step-by-step guide to screening tenants. Income verification, background checks, reference calls, and compliance.",
    url: "https://rentreadytools.com/tenant-screening/how-to-screen-tenants",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Screen Tenants Guide - RentReadyTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Screen Tenants 2025 | Complete Landlord Guide",
    description: "Step-by-step tenant screening guide for landlords with background check and compliance tips.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const preScreeningQuestions = [
  "When are you looking to move in?",
  "How many people will be living in the unit?",
  "Do you have any pets? If so, what type and size?",
  "What is your combined monthly income?",
  "Have you ever been evicted or broken a lease?",
  "Do you have references from previous landlords?",
  "Are you willing to undergo a background and credit check?",
];

const applicationFields = [
  { category: "Personal info", items: ["Full legal name", "Date of birth", "SSN (for background check)", "Current address", "Phone and email"] },
  { category: "Employment", items: ["Current employer", "Position and salary", "Employment length", "Supervisor contact"] },
  { category: "Rental history", items: ["Previous 2-3 addresses", "Landlord names and contacts", "Rent amounts paid", "Reason for leaving"] },
  { category: "References", items: ["Personal references (non-family)", "Professional references", "Emergency contact"] },
];

const incomeDocuments = [
  { doc: "Pay stubs", description: "Last 2-3 months showing YTD earnings" },
  { doc: "Tax returns", description: "Last 1-2 years for self-employed" },
  { doc: "Bank statements", description: "Last 2-3 months showing deposits" },
  { doc: "Employer letter", description: "Verification of employment and salary" },
  { doc: "Offer letter", description: "For new jobs, with start date and salary" },
];

const backgroundCheckItems = [
  { item: "Credit report", what: "Payment history, debt levels, credit score" },
  { item: "Criminal history", what: "Felonies, misdemeanors, sex offender registry" },
  { item: "Eviction records", what: "Past eviction filings and judgments" },
  { item: "Identity verification", what: "SSN trace, address history" },
];

const referenceQuestions = [
  "How long did the tenant live at your property?",
  "Did they pay rent on time? Any late payments?",
  "How did they maintain the property?",
  "Did they follow lease terms (noise, guests, pets)?",
  "Did you receive their full security deposit back?",
  "Would you rent to them again?",
  "Why are they leaving?",
];

const redFlags = [
  { flag: "Income below 2.5x rent", risk: "High", action: "Require co-signer or additional deposit" },
  { flag: "Recent eviction (< 3 years)", risk: "High", action: "Typically decline or require explanation" },
  { flag: "Multiple late payments on credit", risk: "Medium", action: "Verify current employment, larger deposit" },
  { flag: "Can't provide landlord references", risk: "Medium", action: "Verify other aspects more thoroughly" },
  { flag: "Gaps in rental/employment history", risk: "Low-Med", action: "Ask for explanation, verify details" },
  { flag: "Rushed or pressuring you", risk: "Medium", action: "Don't skip steps, maintain process" },
];

const faqs = [
  {
    question: "How long should tenant screening take?",
    answer:
      "A thorough screening typically takes 3-5 business days. This includes time for background check processing (1-3 days), contacting references (1-2 days), and reviewing all materials. Don't rush—a few extra days upfront saves months of problems later.",
  },
  {
    question: "What credit score should I require?",
    answer:
      "Most landlords set a minimum of 620-650. However, credit score alone doesn't tell the whole story. Look at the full credit report—someone with a 600 score due to medical debt may be lower risk than someone with 650 and multiple late rent payments.",
  },
  {
    question: "Can I charge for the background check?",
    answer:
      "Most states allow you to charge applicants for actual screening costs (typically $30-50). Some states cap this amount or require disclosure. Always provide receipts and apply the same fee to all applicants.",
  },
  {
    question: "What if an applicant has a criminal record?",
    answer:
      "You can consider criminal history but must do so carefully. Many jurisdictions have 'ban the box' laws or require individualized assessment. Consider the nature, severity, and recency of the offense, and whether it relates to tenant suitability.",
  },
  {
    question: "Do I need to screen every applicant the same way?",
    answer:
      "Yes. Consistent screening criteria is essential for fair housing compliance. Document your screening standards in writing and apply them equally to everyone. Inconsistent screening opens you to discrimination claims.",
  },
];

export default function HowToScreenTenantsPage() {
  return (
    <>
      <ArticleSchema
        title="How to Screen Tenants: Complete Guide for Landlords"
        description="Step-by-step guide to screening tenants with income verification, background checks, reference calls, and fair housing compliance."
        url="/tenant-screening/how-to-screen-tenants"
        publishedDate="2025-01-15"
        modifiedDate="2025-01-20"
        readingTimeMinutes={12}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Guide</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            How to screen tenants.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            A thorough screening process protects your property and rental income. Follow this step-by-step guide to
            find reliable tenants while staying compliant with fair housing laws.
          </p>
          <LastUpdated date="January 2025" />
        </header>

        <TableOfContents />

        <section id="pre-screening" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 1: Pre-screening questions</h2>
          <p className="text-sm text-rr-text-primary/80">
            Before accepting a full application, ask pre-screening questions to filter out applicants who don&apos;t
            meet your basic criteria. This saves time for both parties.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Questions to ask</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {preScreeningQuestions.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-accent-darkteal" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <Tip>
            Pre-screening by phone or showing lets you quickly identify deal-breakers like income, move-in timing, or
            pet restrictions before investing time in a full application review.
          </Tip>
        </section>

        <section id="application" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 2: Rental application</h2>
          <p className="text-sm text-rr-text-primary/80">
            A complete rental application collects the information you need to verify income, check references, and run
            background checks. Include authorization for screening.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {applicationFields.map((section) => (
              <div
                key={section.category}
                className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold text-rr-accent-darkteal">{section.category}</p>
                <ul className="mt-2 space-y-1 text-sm text-rr-text-primary/75">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rr-border-gray" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Tip>
            Always include a signed authorization for credit and background checks. Without written consent, you
            can&apos;t legally run these reports.
          </Tip>
        </section>

        <section id="income" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 3: Income verification</h2>
          <p className="text-sm text-rr-text-primary/80">
            Verify that applicants earn at least 2.5-3x the monthly rent. Don&apos;t just take their word for
            it—request documentation.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Acceptable income documentation</p>
            <div className="mt-3 space-y-3">
              {incomeDocuments.map((doc) => (
                <div key={doc.doc} className="flex items-start gap-3 rounded-lg bg-rr-surface-offwhite/60 p-3">
                  <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-tool-teal" />
                  <div>
                    <p className="text-sm font-semibold text-rr-text-primary">{doc.doc}</p>
                    <p className="text-xs text-rr-text-primary/70">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Income calculation example</p>
            <p className="mt-2 text-sm text-rr-text-primary/80">
              For a $2,000/month rent, require minimum gross income of $5,000-6,000/month ($60,000-72,000/year).
            </p>
          </div>
        </section>

        <section id="background" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 4: Background & credit check</h2>
          <p className="text-sm text-rr-text-primary/80">
            Run background and credit checks through a reputable screening service. Review the full report, not just the
            score.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {backgroundCheckItems.map((item) => (
              <div
                key={item.item}
                className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold text-rr-text-primary">{item.item}</p>
                <p className="mt-1 text-xs text-rr-text-primary/70">{item.what}</p>
              </div>
            ))}
          </div>
          <Tip>
            Look beyond the credit score. A 650 score with recent eviction filings is worse than a 600 score with
            clean rental history but old medical debt.
          </Tip>
        </section>

        <section id="references" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 5: Reference checks</h2>
          <p className="text-sm text-rr-text-primary/80">
            Contact previous landlords directly. Current landlords may give positive references to remove a bad
            tenant—focus on landlords from 1-2 properties ago.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Questions for previous landlords</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {referenceQuestions.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-accent-darkteal" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <Tip>
            Verify that reference phone numbers actually belong to previous landlords. Cross-reference with property
            records or online listings to avoid fake references.
          </Tip>
        </section>

        <section id="red-flags" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Red flags to watch for</h2>
          <p className="text-sm text-rr-text-primary/80">
            These warning signs don&apos;t automatically disqualify an applicant, but warrant extra scrutiny.
          </p>
          <div className="overflow-hidden rounded-[1.1rem] border border-rr-border-gray shadow-[var(--shadow-soft)]">
            <table className="w-full text-sm">
              <thead className="bg-rr-surface-offwhite">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Red flag</th>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Risk</th>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rr-border-gray bg-rr-surface-white">
                {redFlags.map((rf) => (
                  <tr key={rf.flag}>
                    <td className="px-4 py-3 text-rr-text-primary/80">{rf.flag}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          rf.risk === "High"
                            ? "bg-rr-status-alert/15 text-rr-status-alert"
                            : rf.risk === "Medium"
                              ? "bg-rr-accent-gold/20 text-rr-accent-darkteal"
                              : "bg-rr-surface-softgray text-rr-text-primary/70"
                        }`}
                      >
                        {rf.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-rr-text-primary/70">{rf.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="decision" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Step 6: Making your decision</h2>
          <p className="text-sm text-rr-text-primary/80">
            Apply your documented criteria consistently. If denying based on credit or background information, you must
            provide an adverse action notice.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-status-success/5 p-4">
              <p className="text-sm font-semibold text-rr-status-success">If approving</p>
              <ul className="mt-2 space-y-1 text-sm text-rr-text-primary/75">
                <li>• Send approval notice with move-in instructions</li>
                <li>• Collect security deposit and first month&apos;s rent</li>
                <li>• Schedule lease signing</li>
                <li>• Provide move-in checklist</li>
              </ul>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-status-alert/5 p-4">
              <p className="text-sm font-semibold text-rr-status-alert">If denying</p>
              <ul className="mt-2 space-y-1 text-sm text-rr-text-primary/75">
                <li>• Send adverse action notice (required by FCRA)</li>
                <li>• Include screening company info</li>
                <li>• State reason for denial</li>
                <li>• Inform of right to dispute</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold text-rr-text-primary">{faq.question}</p>
                <p className="mt-2 text-sm text-rr-text-primary/75">{faq.answer}</p>
              </div>
            ))}
          </div>
          <FAQSchemaScript faqs={faqs} />
        </section>

        <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-rr-text-primary">Need help with tenant screening?</p>
          <p className="text-sm text-rr-text-primary/80">
            Our property management team handles the entire leasing process—marketing, showings, screening, and
            move-in—so you get qualified tenants without the work.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact?reason=screening">Get screening help</PrimaryButton>
            <GhostButton href="/tenant-screening">Back to screening hub</GhostButton>
          </div>
        </section>

        <RelatedResources
          resources={[
            {
              title: "Tenant Screening Hub",
              description: "Overview of the complete screening process and resources.",
              href: "/tenant-screening",
              icon: "guide",
            },
            {
              title: "Vacancy Cost Calculator",
              description: "See how much a bad tenant or vacancy really costs you.",
              href: "/tools/vacancy-rate-calculator",
              icon: "calculator",
            },
            {
              title: "Move-In Checklist",
              description: "Ensure your property is ready for new tenants.",
              href: "/tools/move-in-checklist",
              icon: "checklist",
            },
          ]}
        />
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

function LastUpdated({ date }: { date: string }) {
  return (
    <p className="text-xs text-rr-text-primary/60">
      Last updated: <time>{date}</time>
    </p>
  );
}

function TableOfContents() {
  const sections = [
    { id: "pre-screening", title: "Pre-screening questions" },
    { id: "application", title: "Rental application" },
    { id: "income", title: "Income verification" },
    { id: "background", title: "Background & credit check" },
    { id: "references", title: "Reference checks" },
    { id: "red-flags", title: "Red flags" },
    { id: "decision", title: "Making your decision" },
  ];

  return (
    <nav className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
      <p className="text-sm font-semibold text-rr-text-primary">In this guide</p>
      <ul className="mt-2 grid gap-1 text-sm md:grid-cols-2">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-rr-accent-darkteal hover:underline">
              {i + 1}. {s.title}
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

function RelatedResources({
  resources,
}: {
  resources: { title: string; description: string; href: string; icon: string }[];
}) {
  const icons: Record<string, React.ReactNode> = {
    calculator: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
        />
      </svg>
    ),
    guide: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    checklist: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Related resources</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="group flex items-start gap-3 rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)] transition hover:border-rr-accent-darkteal/40"
          >
            <span className="mt-0.5 text-rr-accent-darkteal">{icons[resource.icon]}</span>
            <div>
              <p className="text-sm font-semibold text-rr-text-primary group-hover:text-rr-accent-darkteal">
                {resource.title}
              </p>
              <p className="mt-1 text-xs text-rr-text-primary/70">{resource.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
