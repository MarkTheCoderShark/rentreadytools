"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Tools", href: "/tools" },
  { label: "Turnover Guides", href: "/turnover" },
  { label: "Rent Pricing Guides", href: "/rent-pricing" },
  { label: "Forms & Templates", href: "/landlord-forms" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const baseClasses =
    "sticky top-0 z-40 transition-colors duration-200 backdrop-blur supports-[backdrop-filter]:backdrop-blur";
  const themeClasses = scrolled
    ? "bg-rr-surface-white/98 text-rr-text-primary border-b border-rr-border-gray shadow-sm"
    : "bg-transparent text-rr-text-primary";

  return (
    <header className={`${baseClasses} ${themeClasses}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label="RentReadyTools home"
        >
          <span className="h-9 w-9 rounded-xl bg-rr-accent-darkteal/15 text-center text-lg leading-9 text-rr-text-primary ring-1 ring-rr-border-gray">
            RR
          </span>
          <span className="text-rr-text-primary">
            RentReadyTools
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-rr-text-primary transition hover:text-rr-accent-darkteal"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/tools/rent-pricing-benchmark"
            className="hidden items-center justify-center rounded-full bg-rr-accent-gold px-4 py-2 text-sm font-semibold text-rr-text-primary shadow-[0_10px_28px_-16px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Run rent price calculator
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full border border-rr-border-gray px-3 text-sm font-semibold text-rr-text-primary transition md:hidden"
            aria-label="Menu"
          >
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
