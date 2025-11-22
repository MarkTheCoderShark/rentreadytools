import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RentReadyTools",
  description: "How RentReadyTools collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative mx-auto max-w-4xl space-y-10 px-4 py-10 text-rr-text-primary md:space-y-12 md:px-6 md:py-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Privacy Policy</h1>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">Last updated: {new Date().getFullYear()}</p>
      </header>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Information we collect</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-rr-text-primary/80">
          <li>Contact details you provide (name, email, phone) when requesting analysis or property management.</li>
          <li>Property information you submit for calculators or consultations.</li>
          <li>Usage data such as page views and tool interactions to improve performance and reliability.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">How we use information</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-rr-text-primary/80">
          <li>To deliver calculator results, respond to inquiries, and provide proposals you request.</li>
          <li>To operate and improve our site, tools, and services.</li>
          <li>To communicate about updates or service offerings; you can opt out at any time.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Sharing</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          We do not sell personal information. We may share data with service providers who help us operate the site,
          deliver communications, or provide property management services, all under confidentiality obligations.
        </p>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Data security</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/80">
          We use reasonable technical and organizational measures to protect your data. No system is perfectly secure;
          please share only what is necessary for your request.
        </p>
      </section>

      <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-semibold text-rr-text-primary">Your choices</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-rr-text-primary/80">
          <li>Request, update, or delete your information by contacting us at privacy@rentreadytools.com.</li>
          <li>Opt out of marketing emails by using the unsubscribe link or replying to any message.</li>
        </ul>
      </section>
    </main>
  );
}
