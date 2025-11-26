import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/app/components/article-schema";

export const metadata: Metadata = {
  title: "Late Rent Notice Template 2025 | Free Landlord Letter | RentReadyTools",
  description:
    "Free late rent notice template for landlords. Includes pay or quit notice, late fee language, and state-specific timing requirements.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms/late-rent-notice",
  },
  openGraph: {
    title: "Late Rent Notice Template 2025 | Free Landlord Letter",
    description:
      "Free late rent notice template with pay or quit language, late fees, and state timing requirements.",
    url: "https://rentreadytools.com/landlord-forms/late-rent-notice",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Late Rent Notice Template - RentReadyTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Rent Notice Template 2025 | Free Landlord Letter",
    description: "Free late rent notice template with pay or quit language and state timing requirements.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const noticeTypes = [
  {
    type: "Friendly reminder",
    when: "1-3 days late",
    tone: "Soft",
    description: "Informal reminder that rent is overdue. Good for tenants with strong payment history.",
  },
  {
    type: "Formal late notice",
    when: "5-7 days late",
    tone: "Firm",
    description: "Official notice documenting late payment and any applicable late fees.",
  },
  {
    type: "Pay or quit notice",
    when: "7-14 days late",
    tone: "Legal",
    description: "Legal notice required before eviction. Specifies deadline to pay or vacate.",
  },
];

const requiredElements = [
  "Tenant name(s) and rental property address",
  "Date rent was due and amount owed",
  "Number of days rent is past due",
  "Late fee amount (if applicable)",
  "Total amount due including fees",
  "Deadline to pay",
  "Accepted payment methods",
  "Consequences if not paid (for pay or quit notices)",
  "Landlord/property manager signature and date",
];

const stateRequirements = [
  { state: "California", gracePeriod: "No grace required", notice: "3-day pay or quit" },
  { state: "Texas", gracePeriod: "No grace required", notice: "3-day notice to vacate" },
  { state: "Florida", gracePeriod: "No grace required", notice: "3-day pay or quit" },
  { state: "New York", gracePeriod: "5 days (NYC)", notice: "14-day notice to pay" },
  { state: "Illinois", gracePeriod: "5 days grace", notice: "5-day notice" },
  { state: "Pennsylvania", gracePeriod: "No grace required", notice: "10-day notice" },
];

const sampleFriendlyReminder = `Subject: Friendly Reminder - Rent Due for [Property Address]

Dear [Tenant Name],

I hope this message finds you well. This is a friendly reminder that rent for [Property Address] was due on [Due Date].

As of today, [Current Date], I have not received your payment of $[Rent Amount].

If you have already sent payment, please disregard this notice. If not, please submit payment at your earliest convenience to avoid any late fees.

If you're experiencing any difficulties, please reach out so we can discuss options.

Thank you,
[Your Name]
[Contact Info]`;

const sampleFormalNotice = `LATE RENT NOTICE

Date: [Current Date]

To: [Tenant Name(s)]
Property: [Full Property Address]

This is to notify you that your rent payment is past due.

Rent Due Date: [Original Due Date]
Monthly Rent Amount: $[Rent Amount]
Days Past Due: [Number] days
Late Fee (per lease): $[Late Fee Amount]

TOTAL AMOUNT DUE: $[Total with Late Fee]

Please remit payment immediately to avoid further action. Payment may be made via [accepted payment methods].

If you have questions or need to discuss a payment arrangement, contact me at [Phone/Email].

Sincerely,

_______________________
[Your Name]
[Your Title]
[Date]`;

const samplePayOrQuit = `[NUMBER]-DAY NOTICE TO PAY RENT OR QUIT

TO: [Tenant Name(s)]
AND ALL OTHERS IN POSSESSION OF THE PREMISES AT:
[Full Property Address including Unit Number]
[City, State ZIP]

PLEASE TAKE NOTICE that you are justly indebted to the undersigned landlord in the sum of:

Past Due Rent: $[Amount]
Late Fees: $[Amount]
Other Charges: $[Amount if any]
TOTAL DUE: $[Total Amount]

For rent and other charges on the above-described premises from [Start Date] to [End Date].

You are hereby required to pay said amount in full within [NUMBER] days from the date of service of this notice, or quit and deliver up possession of the premises.

If you fail to pay or vacate within [NUMBER] days, legal proceedings will be instituted against you to recover possession of the premises, to declare the forfeiture of the lease, and to recover rents and damages.

Payment may be made to: [Payment Instructions]
During the hours of: [Business Hours]
At the following location: [Address or Online Portal]

Dated: [Date]

_______________________
[Landlord/Agent Name]
[Address]
[Phone]

PROOF OF SERVICE
I served this notice on [Date] by:
[ ] Personal delivery to tenant
[ ] Leaving with person of suitable age at premises
[ ] Posting on premises and mailing copy
[ ] Certified mail

_______________________
Server Signature`;

const faqs = [
  {
    question: "How many days late before I can send a late notice?",
    answer:
      "You can send a friendly reminder as soon as rent is 1 day late. For formal notices, most leases specify a grace period (typically 3-5 days). For pay or quit notices, check your state law—some require you wait until after the grace period ends.",
  },
  {
    question: "Can I charge late fees?",
    answer:
      "Yes, if your lease specifies late fees. Most states allow reasonable late fees (typically 5% of rent or a flat fee like $50). Some states cap late fees or require a grace period before charging them. Check your local laws.",
  },
  {
    question: "What's the difference between a late notice and pay or quit notice?",
    answer:
      "A late notice is a reminder that rent is overdue. A pay or quit notice is a legal document required before filing for eviction—it gives the tenant a specific number of days to pay or vacate. Pay or quit notices have strict legal requirements.",
  },
  {
    question: "How do I serve a pay or quit notice?",
    answer:
      "Proper service varies by state. Common methods include personal delivery, leaving with adult at residence, posting on door plus mailing, or certified mail. Keep proof of service—you'll need it if you file for eviction.",
  },
  {
    question: "What if the tenant makes a partial payment?",
    answer:
      "Accepting partial payment can reset the pay or quit clock in some states or waive your right to evict for that period. Consult local law or an attorney before accepting partial payments during the notice period.",
  },
];

const bestPractices = [
  "Send notices promptly—consistency trains tenants to pay on time.",
  "Keep copies of all notices with proof of delivery method and date.",
  "Be professional and factual—avoid emotional language or threats.",
  "Know your state's specific requirements before sending pay or quit notices.",
  "Offer payment plans when appropriate—it's often cheaper than turnover.",
  "Document all communication about late payments in writing.",
];

export default function LateRentNoticePage() {
  return (
    <>
      <ArticleSchema
        title="Late Rent Notice Template for Landlords"
        description="Free late rent notice templates including friendly reminders, formal notices, and pay or quit letters with state-specific guidance."
        url="/landlord-forms/late-rent-notice"
        publishedDate="2025-01-15"
        modifiedDate="2025-01-20"
        readingTimeMinutes={10}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Template</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Late rent notice templates.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            Templates for every stage of late rent collection—from friendly reminders to formal pay or quit notices.
            Customize for your situation and verify compliance with local laws.
          </p>
          <LastUpdated date="January 2025" />
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Types of late rent notices</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {noticeTypes.map((notice) => (
              <div
                key={notice.type}
                className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between">
                  <p className="text-base font-semibold text-rr-text-primary">{notice.type}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      notice.tone === "Soft"
                        ? "bg-rr-status-success/15 text-rr-status-success"
                        : notice.tone === "Firm"
                          ? "bg-rr-accent-gold/20 text-rr-accent-darkteal"
                          : "bg-rr-status-alert/15 text-rr-status-alert"
                    }`}
                  >
                    {notice.tone}
                  </span>
                </div>
                <p className="mt-1 text-xs text-rr-accent-darkteal">{notice.when}</p>
                <p className="mt-2 text-sm text-rr-text-primary/75">{notice.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Required elements</h2>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">What to include in your notice</p>
            <ul className="mt-3 grid gap-2 text-sm text-rr-text-primary/80 md:grid-cols-2">
              {requiredElements.map((element) => (
                <li key={element} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-accent-darkteal" />
                  <span>{element}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Template 1: Friendly reminder</h2>
          <p className="text-sm text-rr-text-primary/80">
            Use for tenants with good payment history who are 1-3 days late.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-rr-text-primary/90">
              {sampleFriendlyReminder}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Template 2: Formal late notice</h2>
          <p className="text-sm text-rr-text-primary/80">
            Use when rent is 5-7 days late or for tenants with a pattern of late payments.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-rr-text-primary/90">
              {sampleFormalNotice}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Template 3: Pay or quit notice</h2>
          <p className="text-sm text-rr-text-primary/80">
            Legal notice required before eviction. Replace [NUMBER] with your state&apos;s required notice period.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-rr-text-primary/90">
              {samplePayOrQuit}
            </pre>
          </div>
          <div className="flex items-start gap-3 rounded-[1rem] border border-rr-status-alert/30 bg-rr-status-alert/5 p-4">
            <span className="mt-0.5 text-rr-status-alert">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-rr-text-primary">Important legal notice</p>
              <p className="mt-1 text-sm text-rr-text-primary/80">
                Pay or quit notices have strict legal requirements that vary by state. This template is for general
                reference only. Consult with a local attorney or use state-specific forms to ensure compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">State notice requirements</h2>
          <p className="text-sm text-rr-text-primary/80">
            Pay or quit notice periods vary by state. Here are some common requirements:
          </p>
          <div className="overflow-hidden rounded-[1.1rem] border border-rr-border-gray shadow-[var(--shadow-soft)]">
            <table className="w-full text-sm">
              <thead className="bg-rr-surface-offwhite">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">State</th>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Grace period</th>
                  <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Notice type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rr-border-gray bg-rr-surface-white">
                {stateRequirements.map((state) => (
                  <tr key={state.state}>
                    <td className="px-4 py-3 font-medium text-rr-text-primary">{state.state}</td>
                    <td className="px-4 py-3 text-rr-text-primary/80">{state.gracePeriod}</td>
                    <td className="px-4 py-3 text-rr-text-primary/80">{state.notice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-rr-text-primary/60">
            Requirements change. Always verify current state and local laws before sending notices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Best practices</h2>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <ul className="space-y-3 text-sm text-rr-text-primary/80">
              {bestPractices.map((practice) => (
                <li key={practice} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-tool-teal" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
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
          <p className="text-sm font-semibold text-rr-text-primary">Tired of chasing rent payments?</p>
          <p className="text-sm text-rr-text-primary/80">
            Property management handles rent collection, late notices, and if necessary, the eviction process—so you
            don&apos;t have to.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact?reason=rent-collection">Get rent collection help</PrimaryButton>
            <GhostButton href="/property-management">Learn about management</GhostButton>
          </div>
        </section>

        <RelatedResources
          resources={[
            {
              title: "Rent Increase Letter",
              description: "Template for notifying tenants of rent changes.",
              href: "/landlord-forms/rent-increase-letter",
              icon: "checklist",
            },
            {
              title: "Security Deposit Return",
              description: "Template for returning deposits with documentation.",
              href: "/landlord-forms/security-deposit-return-letter",
              icon: "checklist",
            },
            {
              title: "Vacancy Cost Calculator",
              description: "See what late-paying tenants really cost you.",
              href: "/tools/vacancy-rate-calculator",
              icon: "calculator",
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
