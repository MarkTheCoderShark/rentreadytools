import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Checklist | Turnover Ready Units | RentReadyTools",
  description:
    "A practical move-out cleaning checklist to speed tenant turnover: room-by-room tasks, supplies, and photo proof list.",
};

const checklist = [
  {
    title: "Before cleaning",
    points: [
      "Document every room with timestamped photos and video.",
      "Confirm water, power, and HVAC are on so cleaners can work.",
      "Stage supplies and replacement bulbs/filters to avoid store runs.",
    ],
  },
  {
    title: "Kitchen",
    points: [
      "Degrease backsplash, range hood, and cabinet faces; wipe pulls.",
      "Clean oven, stovetop grates, microwave interior, and refrigerator shelves.",
      "Scrub sink and faucet base; run disposal with soap and ice to freshen.",
      "Empty and wipe cabinets/drawers; sweep and mop floors last.",
    ],
  },
  {
    title: "Bathrooms",
    points: [
      "Descale shower walls/doors and tub; refresh caulk if failing.",
      "Clean toilet base, hinges, and behind the toilet; replace seat if cracked.",
      "Polish mirrors, fixtures, lights, and towel bars; disinfect vanity surfaces.",
      "Mop floors and wipe baseboards after dusting vents and fans.",
    ],
  },
  {
    title: "Living spaces",
    points: [
      "Dust ceiling fans, blinds, window sills, and vents; clean switch plates.",
      "Spot-patch small nail holes and scuffs; wipe doors and trim.",
      "Clean closets and shelving; vacuum, then mop hard floors.",
      "Test bulbs and smoke/CO alarms; replace filters as needed.",
    ],
  },
];

const photoProof = [
  "One wide shot from each corner per room plus any damage close-ups.",
  "Inside oven, fridge/freezer, microwave, dishwasher filter, and sink disposals.",
  "Inside cabinets, drawers, and closets to show empty/clean status.",
  "Entry door hardware, window tracks, blinds, and thermostats after cleaning.",
];

export default function TurnoverCleaningChecklistPage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Turnover guide</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Move-out cleaning checklist that keeps vacancy short.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Hand this checklist to cleaners or maintenance so the unit is ready for photos and showings within days of
          notice. Pair it with photo proof to protect the deposit.
        </p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Room-by-room steps</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Follow the order below to avoid rework and keep the timeline tight.
            </p>
          </div>
          <Link
            href="/landlord-forms/move-out-checklist"
            className="inline-flex items-center justify-center rounded-full border border-rr-border-gray px-4 py-2 text-sm font-semibold text-rr-text-primary transition hover:-translate-y-0.5 hover:border-rr-accent-darkteal hover:text-rr-accent-darkteal"
          >
            Grab the printable checklist
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((section) => (
            <article
              key={section.title}
              className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5"
            >
              <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rr-tool-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Photo proof list</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Photos settle deposit disputes quickly. Capture before and after shots.
          </p>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {photoProof.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Stay on timeline</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Use the vacancy calculator to quantify each delay so owners approve decisions faster.
          </p>
          <div className="space-y-2 text-sm text-rr-text-primary/80">
            <p>Pair this checklist with:</p>
            <ul className="space-y-1 pl-4">
              <li className="list-disc">
                <Link className="text-rr-accent-darkteal hover:text-rr-tool-darkteal" href="/tools/vacancy-rate-calculator">
                  Vacancy cost calculator
                </Link>
              </li>
              <li className="list-disc">
                <Link className="text-rr-accent-darkteal hover:text-rr-tool-darkteal" href="/turnover/how-long-should-turnover-take">
                  Turnover timeline benchmarks
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rr-border-gray/80 bg-rr-label-tan/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rr-accent-darkteal">
      {children}
    </span>
  );
}
