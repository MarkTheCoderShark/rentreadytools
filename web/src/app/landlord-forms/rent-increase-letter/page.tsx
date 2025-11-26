import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/app/components/article-schema";

export const metadata: Metadata = {
  title: "Rent Increase Letter Template 2025 | Free Landlord Notice | RentReadyTools",
  description:
    "Free rent increase letter template with proper notice requirements. Includes sample wording, timing guidelines, and state-specific considerations for landlords.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms/rent-increase-letter",
  },
  openGraph: {
    title: "Rent Increase Letter Template 2025 | Free Landlord Notice",
    description:
      "Free rent increase letter template with proper notice requirements. Includes sample wording, timing guidelines, and state-specific considerations.",
    url: "https://rentreadytools.com/landlord-forms/rent-increase-letter",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rent Increase Letter Template - RentReadyTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Increase Letter Template 2025 | Free Landlord Notice",
    description:
      "Free rent increase letter template with proper notice requirements and timing guidelines.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const letterSections = [
  {
    title: "Header information",
    items: [
      "Your name and contact information (landlord/property manager)",
      "Date of the letter",
      "Tenant name(s) and rental property address",
    ],
  },
  {
    title: "Core content",
    items: [
      "Current rent amount",
      "New rent amount and percentage increase",
      "Effective date of the increase",
      "Reference to lease terms allowing the increase",
    ],
  },
  {
    title: "Supporting details",
    items: [
      "Brief explanation for the increase (market rates, property improvements, rising costs)",
      "Payment instructions if changing",
      "Contact information for questions",
      "Signature line",
    ],
  },
];

const noticeRequirements = [
  { period: "30 days", description: "Most common for month-to-month leases" },
  { period: "60 days", description: "Required in CA for increases over 10%" },
  { period: "90 days", description: "Required in some rent-controlled areas" },
  { period: "At renewal", description: "For fixed-term leases, implement at lease end" },
];

const bestPractices = [
  "Send the notice well before the minimum required timeframe to give tenants time to plan.",
  "Keep increases reasonable (3-5% annually) to retain good tenants and avoid turnover costs.",
  "Document delivery with certified mail, email confirmation, or hand-delivery with signature.",
  "Research local rent control laws before sending—some areas cap annual increases.",
  "Consider tenant history: long-term, reliable tenants may warrant smaller increases.",
  "Time increases strategically—avoid holiday seasons when tenants face extra expenses.",
];

const sampleLetter = `[Your Name]
[Your Address]
[City, State ZIP]
[Phone Number]
[Email]

[Date]

[Tenant Name(s)]
[Rental Property Address]
[City, State ZIP]

RE: Notice of Rent Increase for [Property Address]

Dear [Tenant Name],

This letter serves as formal notice that the monthly rent for the property located at [Property Address] will increase from $[Current Rent] to $[New Rent], effective [Effective Date].

This increase of $[Amount] ([Percentage]%) reflects [choose: current market conditions / increased property taxes and maintenance costs / improvements made to the property].

Your new monthly rent of $[New Rent] will be due on the first of each month, beginning [Effective Date]. All other terms of your lease agreement remain unchanged.

Please confirm receipt of this notice by [responding to this email / signing and returning the enclosed copy].

If you have any questions or would like to discuss this matter, please contact me at [Phone] or [Email].

Thank you for being a valued tenant.

Sincerely,

[Your Signature]
[Your Printed Name]
[Title, if applicable]`;

const faqs = [
  {
    question: "How much notice do I need to give for a rent increase?",
    answer:
      "Most states require 30 days notice for month-to-month tenancies. However, California requires 60 days for increases over 10%, and some rent-controlled areas require 90 days. Always check your local laws and lease terms.",
  },
  {
    question: "Can I raise rent during a fixed-term lease?",
    answer:
      "Generally, you cannot raise rent during a fixed-term lease unless the lease specifically allows for it. Most landlords implement increases at lease renewal time.",
  },
  {
    question: "What is a reasonable rent increase percentage?",
    answer:
      "Annual increases of 3-5% are generally considered reasonable and align with inflation. Larger increases may be justified by significant market changes or property improvements, but risk losing good tenants.",
  },
  {
    question: "Do I need to explain why I'm raising rent?",
    answer:
      "Legally, most areas don't require an explanation. However, providing a brief reason (market rates, property taxes, improvements) can maintain goodwill and reduce tenant pushback.",
  },
  {
    question: "What if my tenant refuses the rent increase?",
    answer:
      "If properly notified, tenants can accept the increase, negotiate, or choose to move out. For month-to-month leases, tenants typically have until the effective date to decide. Document all communications.",
  },
];

export default function RentIncreaseLetterPage() {
  return (
    <>
      <ArticleSchema
        title="Rent Increase Letter Template 2025"
        description="Free rent increase letter template with proper notice requirements, sample wording, and timing guidelines for landlords."
        url="/landlord-forms/rent-increase-letter"
        publishedDate="2025-01-15"
        modifiedDate="2025-01-20"
        readingTimeMinutes={8}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Template</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Rent increase letter template.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            Use this template to notify tenants of upcoming rent changes. Includes proper notice timing, required
            elements, and sample wording you can customize.
          </p>
          <LastUpdated date="January 2025" />
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">What to include in your letter</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {letterSections.map((section) => (
              <div
                key={section.title}
                className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold text-rr-text-primary">{section.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rr-accent-darkteal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Notice period requirements</h2>
          <p className="text-sm text-rr-text-primary/80">
            Required notice varies by state and lease type. Always verify your local requirements.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {noticeRequirements.map((req) => (
              <div
                key={req.period}
                className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-offwhite p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-lg font-bold text-rr-accent-darkteal">{req.period}</p>
                <p className="mt-1 text-xs text-rr-text-primary/70">{req.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Sample rent increase letter</h2>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-rr-text-primary/90">
              {sampleLetter}
            </pre>
          </div>
          <p className="text-xs text-rr-text-primary/60">
            This is a general template. Customize for your situation and verify compliance with local laws before
            sending.
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
          <p className="text-sm font-semibold text-rr-text-primary">Need help pricing your rental?</p>
          <p className="text-sm text-rr-text-primary/80">
            Before raising rent, make sure you know what the market supports. Use our rent calculator to see current
            comps in your area.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/tools/rent-estimate-calculator">Check market rent</PrimaryButton>
            <GhostButton href="/rent-pricing/how-much-rent-can-i-charge">Pricing guide</GhostButton>
          </div>
        </section>

        <RelatedResources
          resources={[
            {
              title: "Rent Estimate Calculator",
              description: "See what similar properties are renting for in your area.",
              href: "/tools/rent-estimate-calculator",
              icon: "calculator",
            },
            {
              title: "How Much Rent Can I Charge?",
              description: "Step-by-step guide to pricing your rental correctly.",
              href: "/rent-pricing/how-much-rent-can-i-charge",
              icon: "guide",
            },
            {
              title: "Security Deposit Return Letter",
              description: "Template for returning deposits with proper documentation.",
              href: "/landlord-forms/security-deposit-return-letter",
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
