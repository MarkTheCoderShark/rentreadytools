import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RentReadyTools",
  description: "Terms and conditions for using RentReadyTools and requesting services.",
  alternates: {
    canonical: "https://rentreadytools.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="relative mx-auto max-w-4xl space-y-10 px-4 py-10 text-rr-text-primary md:space-y-12 md:px-6 md:py-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Terms of Service</h1>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">Last updated: {new Date().getFullYear()}</p>
      </header>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Using RentReadyTools</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          The calculators, checklists, and content on this site are provided for informational purposes. Results are
          estimates and do not guarantee outcomes. You are responsible for verifying numbers and complying with local
          laws.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Accounts and communication</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          If you provide contact information, you authorize us to reach out about your request or relevant services. You
          can opt out at any time. Keep your submissions accurate so we can respond effectively.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Intellectual property</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          RentReadyTools retains all rights to the site, tools, copy, and design. You may use templates and outputs for
          your own rental operations but may not resell or republish them without permission.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">No professional advice</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          Content here is not legal, tax, or investment advice. Consult qualified professionals for your specific
          situation.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Liability</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          RentReadyTools is provided “as is.” To the fullest extent allowed by law, we are not liable for any indirect,
          incidental, or consequential damages arising from use of the site or services.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Changes</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          We may update these terms periodically. Continued use of the site after changes means you accept the revised
          terms.
        </p>
      </section>
    </main>
  );
}
