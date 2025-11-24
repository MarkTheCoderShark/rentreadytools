import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Checklist for Landlords | RentReadyTools",
  description:
    "Room-by-room move-out cleaning checklist with supply list, photo angles, and standards that protect deposits and speed turnover.",
  alternates: {
    canonical: "https://rentreadytools.com/landlord-forms/move-out-checklist",
  },
};

const rooms = [
  {
    name: "Kitchen",
    tasks: [
      "Degrease range hood and backsplash; wipe cabinet doors and pulls.",
      "Deep clean oven, stovetop, microwave (inside/out), and fridge (empty drip pans).",
      "Scrub sink, faucet base, and garbage disposal; polish stainless steel.",
      "Empty and wipe cabinets, drawers, and pantry shelving; sweep and mop floors.",
    ],
  },
  {
    name: "Bathrooms",
    tasks: [
      "Descale shower walls, doors, tub, and grout; replace failing caulk.",
      "Clean toilet base, behind the toilet, and hinges; replace seat if damaged.",
      "Polish mirrors, fixtures, towel bars, and lighting globes.",
      "Empty vanity and medicine cabinet; disinfect handles; mop floors.",
    ],
  },
  {
    name: "Living & bedrooms",
    tasks: [
      "Dust ceiling fans, vents, blinds, and baseboards; clean switch plates.",
      "Patch nail holes where reasonable; remove adhesive hooks carefully.",
      "Wipe closets, shelving, and door tracks; vacuum and mop floors.",
      "Test all lights; replace burned-out bulbs with consistent color temp.",
    ],
  },
  {
    name: "Appliances & systems",
    tasks: [
      "Clean washer gasket and detergent tray; run a tub clean cycle if needed.",
      "Clear dryer lint trap and exterior vent; wipe exterior surfaces.",
      "Replace HVAC filter; wipe returns; test smoke/CO alarms.",
      "Check disposal splash guard, dishwasher filter, and fridge water filter dates.",
    ],
  },
];

const photoAngles = [
  "One wide shot per room from each corner, plus any damage close-ups.",
  "Inside of fridge/freezer, oven racks, microwave, dishwasher filter area.",
  "Inside cabinets and drawers (kitchen, bath, closets) after they’re emptied.",
  "Entry locks, windows, and blinds to show condition before the next tenant.",
];

const supplies = [
  "Degreaser and stainless steel polish",
  "Tub/tile cleaner and grout brush",
  "Magic eraser, microfiber cloths, and scrub pads",
  "Vacuum with crevice tool and a flat mop",
  "Fresh HVAC filter, light bulbs, and caulk",
];

export default function MoveOutChecklistPage() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10 text-rr-text-primary md:space-y-14 md:px-6 md:py-16">
      <header className="space-y-4">
        <Eyebrow>Template</Eyebrow>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Move-out cleaning checklist for landlords.
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
          Set clear standards, protect deposits, and move the next tenant in faster. Use this checklist with pre- and
          post-clean photos so expectations are clear for residents and vendors.
        </p>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-rr-text-primary/70">
          <Badge>Deposit protection</Badge>
          <Badge>Vendor-ready</Badge>
          <Badge>Photo documentation</Badge>
        </div>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">Room-by-room list</h2>
            <p className="text-sm leading-relaxed text-rr-text-primary/75">
              Hand this to cleaners or maintenance. Ask for timestamped photos when each room is finished.
            </p>
          </div>
          <Link
            href="/contact?reason=turnover&source=move-out-checklist"
            className="inline-flex items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Request an editable copy
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="rounded-[1rem] border border-rr-border-gray bg-rr-surface-offwhite/70 p-5"
            >
              <h3 className="text-lg font-semibold tracking-tight text-rr-text-primary">{room.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-rr-text-primary/80">
                {room.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rr-accent-darkteal" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Photo checklist</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Photos reduce deposit disputes. Capture before and after for each room.
          </p>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {photoAngles.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-tool-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary">Supplies to stage</h2>
          <p className="text-sm leading-relaxed text-rr-text-primary/75">
            Stage a caddy so cleaners do not pause turnover to shop for materials.
          </p>
          <ul className="space-y-2 text-sm text-rr-text-primary/80">
            {supplies.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rr-accent-darkteal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rr-border-gray bg-rr-surface-softgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-rr-text-primary">
      {children}
    </span>
  );
}
