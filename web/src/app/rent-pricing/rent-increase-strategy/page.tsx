import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";
import { ArticleSchema } from "@/app/components/article-schema";
import { LastUpdated } from "../../components/last-updated";

export const metadata: Metadata = {
  title: "Rent Increase Strategy for Landlords (2026) | RentReadyTools",
  description:
    "A practical rent increase strategy for landlords: timing, pricing logic, communication scripts, and renewal options that protect cash flow without driving turnover.",
  alternates: {
    canonical: "https://rentreadytools.com/rent-pricing/rent-increase-strategy",
  },
  openGraph: {
    title: "Rent Increase Strategy for Landlords (2026)",
    description:
      "A practical rent increase strategy for landlords: timing, pricing logic, communication scripts, and renewal options that protect cash flow without driving turnover.",
    url: "https://rentreadytools.com/rent-pricing/rent-increase-strategy",
    siteName: "RentReadyTools",
    type: "article",
    images: [
      {
        url: "https://rentreadytools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools Rent Increase Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Increase Strategy for Landlords (2026)",
    description:
      "A practical rent increase strategy for landlords: timing, pricing logic, communication scripts, and renewal options that protect cash flow without driving turnover.",
    images: ["https://rentreadytools.com/og-image.jpg"],
  },
};

const timingTable = [
  {
    phase: "120-90 days before lease end",
    focus: "Research market comps, review unit condition, and set a target rent range.",
  },
  {
    phase: "90-75 days before lease end",
    focus: "Pick your increase and draft the renewal message or letter.",
  },
  {
    phase: "75-60 days before lease end",
    focus: "Send renewal offer with options. Track replies and schedule follow-ups.",
  },
  {
    phase: "60-45 days before lease end",
    focus: "If no response, send a reminder and confirm tenant intentions.",
  },
  {
    phase: "45-30 days before lease end",
    focus: "If declining, start turnover plan and update pricing for re-listing.",
  },
];

const increaseMatrix = [
  {
    gap: "0-2% below market",
    move: "Hold or small increase (0-2%).",
    reason: "You're close to market already. Protect retention and reduce vacancy risk.",
  },
  {
    gap: "3-6% below market",
    move: "Moderate increase (3-5%).",
    reason: "Close half the gap this cycle, then reassess next renewal.",
  },
  {
    gap: "7-12% below market",
    move: "Two-step plan (5-7% now, 3-5% next year).",
    reason: "Large jumps cause churn. Phase in while improving unit quality.",
  },
  {
    gap: "13%+ below market",
    move: "Decide: phased increase or reposition at turnover.",
    reason: "If unit needs upgrades, wait for turnover and reset to market.",
  },
];

const communicationPrinciples = [
  "Explain the why: costs, market movement, and any recent upgrades.",
  "Give options: term lengths or renewal dates that change the monthly rent.",
  "Set a clear deadline and follow up twice, not five times.",
  "Use calm, factual language. You can be firm without sounding punitive.",
];

const executionChecklist = [
  "Verify lease notice requirements and local rent rules before sending.",
  "Pull 5-8 comps within the same neighborhood and similar size/condition.",
  "Choose a rent range and lock your target number with a max/min.",
  "Draft the renewal offer with at least two term options.",
  "Send the notice with a clear response date and next-step instructions.",
  "Log responses, schedule reminders, and align your turnover plan if needed.",
];

const faqs = [
  {
    question: "How much should I raise rent each year?",
    answer:
      "Start with your gap to market and your turnover cost. Small, predictable increases (2-5%) often outperform large jumps that create vacancy. If you're far below market, consider a phased plan across two renewals.",
  },
  {
    question: "When should I send a rent increase notice?",
    answer:
      "Most landlords send renewal offers 60-90 days before lease end. This leaves time for tenant questions and gives you room to plan turnover if the tenant declines.",
  },
  {
    question: "Do I need to justify a rent increase?",
    answer:
      "In most areas you can set rent to market, but local rules may require specific notice or caps. Even when not required, explaining the increase improves tenant trust and response rates.",
  },
  {
    question: "Should I offer a smaller increase for a longer lease?",
    answer:
      "Yes if stability matters. A 12-18 month lease at a slightly lower rate can reduce vacancy risk and protect your cash flow if your market is volatile.",
  },
  {
    question: "What if the tenant wants to negotiate?",
    answer:
      "Treat it like a decision tree. If their counter offer still keeps you near market and your turnover cost is high, accept. If you're far below market, offer upgrades or a longer term instead of dropping rent.",
  },
  {
    question: "Is it better to raise rent at renewal or mid-lease?",
    answer:
      "Most landlords raise rent at renewal. Mid-lease increases are only possible if your lease allows it, and they tend to create more friction than a renewal-based adjustment.",
  },
  {
    question: "How do I estimate the cost of a tenant leaving?",
    answer:
      "Add lost rent during vacancy, cleaning/repairs, leasing costs, and your time. Use the vacancy calculator to convert those costs into a per-day number.",
  },
];

export default function RentIncreaseStrategyPage() {
  const relatedResources = [
    { label: "Rent Estimate Calculator", href: "/tools/rent-estimate-calculator", icon: "calculator" as const },
    { label: "Run Rent Comps Guide", href: "/rent-pricing/how-to-run-rent-comps", icon: "guide" as const },
    { label: "Rent Increase Letter", href: "/landlord-forms/rent-increase-letter", icon: "checklist" as const },
    { label: "Vacancy Cost Calculator", href: "/tools/vacancy-rate-calculator", icon: "calculator" as const },
  ];

  return (
    <>
      <ArticleSchema
        title="Rent Increase Strategy for Landlords"
        description="A practical rent increase strategy for landlords: timing, pricing logic, communication scripts, and renewal options that protect cash flow without driving turnover."
        url="/rent-pricing/rent-increase-strategy"
        publishedDate="2026-02-04"
        modifiedDate="2026-02-04"
        readingTimeMinutes={18}
      />
      <main className="relative mx-auto max-w-4xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
        <header className="space-y-4">
          <Eyebrow>Rent pricing guide</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Rent increase strategy for landlords.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
            Raising rent is easier when the timing, number, and message are aligned. Use this playbook to set a fair
            increase, keep renewals on schedule, and avoid vacancy-driven revenue losses.
          </p>
          <LastUpdated date="February 2026" />
        </header>

        <section className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-offwhite p-5 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rr-text-primary/70">Featured snippet</p>
          <p className="mt-2 text-sm leading-relaxed text-rr-text-primary/80">
            A smart rent increase plan starts 90 days before lease end: review comps, set a rent range, and send a clear
            renewal offer with options. Keep increases predictable, phase large gaps over multiple cycles, and compare the
            increase to turnover cost so you protect cash flow without triggering avoidable vacancy.
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          <PrimaryButton href="/tools/rent-estimate-calculator">Run rent estimate</PrimaryButton>
          <GhostButton href="/landlord-forms/rent-increase-letter">Use rent increase letter</GhostButton>
        </section>

        <TableOfContents />

        <section id="timing" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">1. Set the renewal calendar first</h2>
          <p className="text-sm text-rr-text-primary/80">
            Rent increases fail most often because they start too late. If you send a notice a few weeks before lease end,
            you either accept a counter offer you do not like or scramble into turnover. A 90-day window gives you
            breathing room to plan, communicate, and pivot if needed.
          </p>
          <p className="text-sm text-rr-text-primary/80">
            Use the timeline below as a default. If your local rules require longer notice, shift the whole sequence
            earlier. The goal is not just legal compliance; the goal is to keep your rent decision aligned with the
            marketing and turnover plan.
          </p>
          <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5">
            <p className="text-sm font-semibold text-rr-text-primary">Renewal timing checklist</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {timingTable.map((item) => (
                <div key={item.phase} className="rounded-[0.9rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                  <p className="text-sm font-semibold text-rr-text-primary">{item.phase}</p>
                  <p className="mt-2 text-sm text-rr-text-primary/75">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
          <Tip>
            If you wait until 30 days out, you are already in turnover mode. Set a recurring reminder 120 days before
            lease end so your pricing work never starts late.
          </Tip>
        </section>

        <section id="amount" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">2. Calculate the increase with a market gap</h2>
          <p className="text-sm text-rr-text-primary/80">
            The simplest way to choose a number is to compare your current rent to a realistic market range. You do not
            need perfect data. Pull a handful of comps that are similar in size, condition, and neighborhood, then decide
            whether you are on, below, or above the range.
          </p>
          <p className="text-sm text-rr-text-primary/80">
            Use the gap to market to decide how aggressive the increase should be. If you are slightly below market, a
            modest increase often preserves goodwill and keeps vacancy near zero. If you are far below market, a phased
            plan usually produces higher long-term revenue than a one-time jump.
          </p>
          <div className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5">
            <p className="text-sm font-semibold text-rr-text-primary">Increase decision matrix</p>
            <div className="mt-3 space-y-3">
              {increaseMatrix.map((row) => (
                <div key={row.gap} className="rounded-[0.95rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-4">
                  <p className="text-sm font-semibold text-rr-text-primary">Gap to market: {row.gap}</p>
                  <p className="mt-2 text-sm text-rr-text-primary/80">Recommended move: {row.move}</p>
                  <p className="mt-2 text-xs text-rr-text-primary/70">Why: {row.reason}</p>
                </div>
              ))}
            </div>
          </div>
          <Tip>
            If your rent is far below market and the unit is dated, the best long-term move may be to wait for turnover,
            upgrade the unit, then reset rent to market. Use the renovation ROI tool to test the math.{" "}
            <Link href="/tools/renovation-roi" className="text-rr-accent-darkteal hover:underline">
              Estimate upgrade ROI
            </Link>
            .
          </Tip>
        </section>

        <section id="costs" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">3. Compare the increase to your turnover cost</h2>
          <p className="text-sm text-rr-text-primary/80">
            A rent increase only helps if the tenant stays. Before you finalize the number, calculate the break-even
            point for turnover. If it costs you $3,500 to replace a tenant, a $75 increase takes almost four years to
            offset that loss. That does not mean you should never raise rent; it means you need a realistic view of the
            risk.
          </p>
          <p className="text-sm text-rr-text-primary/80">
            Use the vacancy calculator to convert your turnover cost into a per-day number. Then compare that to the
            annual income from the proposed increase. If the increase barely moves the needle, consider a smaller increase
            plus a longer lease term to protect revenue.
          </p>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Quick test</p>
            <p className="mt-2 text-sm text-rr-text-primary/80">
              If turnover costs $3,000 and your proposed increase is $50 per month, it takes 60 months to break even. That
              math does not mean you should avoid the increase, but it should influence how you communicate and whether
              you offer a longer lease.
            </p>
            <Link
              href="/tools/vacancy-rate-calculator"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
            >
              Calculate vacancy cost <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section id="legal" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">4. Confirm your lease and local requirements</h2>
          <p className="text-sm text-rr-text-primary/80">
            Rent increases are governed by your lease and local law. Notice periods, caps, and required language can vary
            by city and state. Always confirm the rules that apply to your property before sending a notice.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Check these items</p>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Lease notice period and delivery method.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Local rent caps or rent stabilization rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Required disclosures or language for increases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                  <span>Notice timing tied to increase percentage.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Use the right format</p>
              <p className="mt-3 text-sm text-rr-text-primary/80">
                A clear, written notice reduces disputes and improves on-time responses. Use a consistent format with the
                new rent amount, effective date, and response deadline.
              </p>
              <Link
                href="/landlord-forms/rent-increase-letter"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rr-accent-darkteal transition hover:text-rr-tool-darkteal"
              >
                Open the rent increase letter <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <Tip>
            If you operate in multiple jurisdictions, create a checklist with the notice period and cap for each city.
            Treat it like a compliance checklist, not an afterthought.
          </Tip>
        </section>

        <section id="communication" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">5. Communicate the increase clearly</h2>
          <p className="text-sm text-rr-text-primary/80">
            Tenants are more likely to renew when the message is calm, clear, and respectful. You do not need to
            over-explain. A short rationale, the new rent amount, and a clear deadline are enough. When possible, give a
            couple of options for term length to create a sense of choice.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-rr-text-primary">Communication principles</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              {communicationPrinciples.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Sample script</p>
            <p className="mt-2 text-sm text-rr-text-primary/80">
              Hi [Name], your lease ends on [Date]. Based on current market rents and rising operating costs, the renewal
              rent will be $[New Rent] starting [Date]. If you renew by [Deadline], you can choose either a 12-month term at
              $[New Rent] or an 18-month term at $[Lower Rent]. Let us know your preference and we will send the renewal
              documents.
            </p>
          </div>
        </section>

        <section id="options" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">6. Offer renewal options that protect revenue</h2>
          <p className="text-sm text-rr-text-primary/80">
            Options increase acceptance rates without forcing you to discount heavily. The most common options are term
            length, renewal date, and upgrade plans. Keep the options simple so tenants can respond quickly.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Term length</p>
              <p className="mt-2 text-sm text-rr-text-primary/80">
                Offer 12 and 18 months. A longer term can justify a slightly lower rent while reducing turnover risk.
              </p>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Move-in date alignment</p>
              <p className="mt-2 text-sm text-rr-text-primary/80">
                Align renewals to your peak leasing season. A mid-summer renewal can be worth more than a winter renewal.
              </p>
            </div>
            <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-white p-4 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-rr-text-primary">Upgrade trade-offs</p>
              <p className="mt-2 text-sm text-rr-text-primary/80">
                Offer small upgrades instead of reducing rent. New blinds or a deep clean can help close the deal.
              </p>
            </div>
          </div>
          <Tip>
            If the tenant is a strong payer and low maintenance, prioritize stability. A small concession is often cheaper
            than a 2-4 week vacancy.
          </Tip>
        </section>

        <section id="decline" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">7. If the tenant declines, pivot fast</h2>
          <p className="text-sm text-rr-text-primary/80">
            A declined renewal is not a failure. It is a signal to move into turnover mode. Start your make-ready plan,
            update the rent price, and schedule your listing photos. The faster you act, the less the vacancy will cost.
          </p>
          <div className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite p-4">
            <p className="text-sm font-semibold text-rr-text-primary">Fast pivot checklist</p>
            <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                <span>Schedule cleaners and repairs as soon as notice is confirmed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                <span>Re-run comps and update the target rent for the new listing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                <span>Prepare showing windows and pre-screening questions.</span>
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-3">
              <GhostButton href="/turnover/guide">Read the turnover guide</GhostButton>
              <GhostButton href="/turnover/how-long-should-turnover-take">Turnover timeline benchmarks</GhostButton>
            </div>
          </div>
        </section>

        <section id="checklist" className="space-y-4 scroll-mt-20">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">8. Rent increase execution checklist</h2>
          <p className="text-sm text-rr-text-primary/80">
            Use this list to keep the process consistent across properties. It protects you from missed deadlines and
            makes tenant communication predictable.
          </p>
          <div className="rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-5 shadow-[var(--shadow-soft)]">
            <ul className="space-y-2 text-sm text-rr-text-primary/80">
              {executionChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <CTABox
            title="Want a data-backed rent plan?"
            body="Send the address and current rent. We will reply with a rent range, renewal options, and a pricing test plan."
            primaryLabel="Request a rent plan"
            primaryHref="/contact?reason=pricing&source=rent-increase-strategy"
            secondaryLabel="Try rent estimate tool"
            secondaryHref="/tools/rent-estimate-calculator"
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
            <li>U.S. Department of Housing and Urban Development (HUD) - Fair housing guidance.</li>
            <li>Consumer Financial Protection Bureau (CFPB) - Tenant rights and rental communications.</li>
            <li>U.S. Department of Labor (BLS) - Inflation and cost trends that impact operating expenses.</li>
            <li>National Association of Realtors (NAR) - Rental market data and vacancy trends.</li>
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
    { id: "timing", title: "Set the renewal calendar" },
    { id: "amount", title: "Calculate the increase" },
    { id: "costs", title: "Compare to turnover cost" },
    { id: "legal", title: "Confirm legal requirements" },
    { id: "communication", title: "Communicate the increase" },
    { id: "options", title: "Offer renewal options" },
    { id: "decline", title: "If the tenant declines" },
    { id: "checklist", title: "Execution checklist" },
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
