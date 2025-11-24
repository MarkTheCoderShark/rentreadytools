# SEO Implementation - Ready-to-Use Code Examples

## 1. Updated Root Layout with Full Metadata

**File to modify:** `/Volumes/cel/rentreadytools/web/src/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import NavBar from "./components/nav-bar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentReadyTools | Landlord Command Center",
  description:
    "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
  // NEW: Add metadataBase for relative URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rentreadytools.com"
  ),
  // NEW: Add OpenGraph tags
  openGraph: {
    title: "RentReadyTools | Landlord Command Center",
    description:
      "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
    url: "https://www.rentreadytools.com",
    siteName: "RentReadyTools",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentReadyTools - Landlord Command Center for DIY Landlords",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // NEW: Add Twitter tags
  twitter: {
    card: "summary_large_image",
    title: "RentReadyTools | Landlord Command Center",
    description:
      "Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.",
    images: ["/twitter-image.jpg"],
    creator: "@RentReadyTools",
    site: "@RentReadyTools",
  },
  // NEW: Add canonical (usually auto-handled by Next.js)
  alternates: {
    canonical: "https://www.rentreadytools.com",
  },
  // NEW: Add icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // NEW: Add manifest
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* NEW: Add Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RentReadyTools",
              url: "https://www.rentreadytools.com",
              logo: "https://www.rentreadytools.com/logo.png",
              description:
                "Free tools and property management for landlords to maximize rental income and reduce vacancy",
              sameAs: [
                "https://twitter.com/RentReadyTools",
                "https://linkedin.com/company/rentreadytools",
                "https://facebook.com/RentReadyTools",
              ],
              contact: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "support@rentreadytools.com",
                availableLanguage: "en",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetBrains.variable} bg-rr-surface-offwhite text-rr-text-primary antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,rgba(12,74,71,0.08),transparent_38%),radial-gradient(circle_at_78%_12%,rgba(233,176,96,0.12),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(15,124,120,0.08),transparent_42%)]">
          <NavBar />
          <div className="pb-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

// ... rest of Footer and other components remain the same
```

---

## 2. Article Schema Component (Reusable)

**Create new file:** `/Volumes/cel/rentreadytools/web/src/app/components/article-schema.tsx`

```typescript
import { ReactNode } from "react";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: string;
  children?: ReactNode;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished = new Date("2024-11-23").toISOString(),
  dateModified = new Date().toISOString(),
  image = "https://www.rentreadytools.com/og-image.jpg",
  author = "RentReadyTools",
  children,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "RentReadyTools",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rentreadytools.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
```

**Usage in a page:**
```typescript
import { ArticleSchema } from "../components/article-schema";

export const metadata: Metadata = {
  title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
  description: "Step-by-step rent pricing for landlords...",
  openGraph: {
    title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
    description: "Step-by-step rent pricing for landlords...",
    url: "https://www.rentreadytools.com/rent-pricing/how-much-rent-can-i-charge",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
    description: "Step-by-step rent pricing for landlords...",
  },
};

export default function HowMuchRentPage() {
  return (
    <ArticleSchema
      title="How Much Rent Can I Charge?"
      description="Step-by-step rent pricing for landlords..."
      url="https://www.rentreadytools.com/rent-pricing/how-much-rent-can-i-charge"
    >
      <main>
        {/* Page content */}
      </main>
    </ArticleSchema>
  );
}
```

---

## 3. Breadcrumb Schema Component (Reusable)

**Create new file:** `/Volumes/cel/rentreadytools/web/src/app/components/breadcrumb-schema.tsx`

```typescript
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Usage in a page:**
```typescript
import { BreadcrumbSchema } from "../components/breadcrumb-schema";

export default function HowLongTurnoverPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rentreadytools.com" },
          {
            name: "Turnover",
            url: "https://www.rentreadytools.com/turnover",
          },
          {
            name: "How Long Should Turnover Take?",
            url: "https://www.rentreadytools.com/turnover/how-long-should-turnover-take",
          },
        ]}
      />
      <main>
        {/* Page content */}
      </main>
    </>
  );
}
```

---

## 4. HowTo Schema Component (Reusable)

**Create new file:** `/Volumes/cel/rentreadytools/web/src/app/components/howto-schema.tsx`

```typescript
interface HowToStep {
  position: string | number;
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  title: string;
  description: string;
  steps: HowToStep[];
  image?: string;
}

export function HowToSchema({
  title,
  description,
  steps,
  image = "https://www.rentreadytools.com/og-image.jpg",
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    image: image,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: String(step.position),
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Usage example:**
```typescript
import { HowToSchema } from "../components/howto-schema";

export default function MoveOutChecklistPage() {
  const steps = [
    {
      position: "1",
      name: "Walkthrough with tenant",
      text: "Document the current condition of the unit with photos and written notes.",
    },
    {
      position: "2",
      name: "Schedule cleaners",
      text: "Contact cleaning and maintenance vendors to schedule work.",
    },
    // ... more steps
  ];

  return (
    <>
      <HowToSchema
        title="Move-Out Cleaning Checklist"
        description="Room-by-room cleaning standards and checklist for tenant move-outs."
        steps={steps}
      />
      <main>
        {/* Page content */}
      </main>
    </>
  );
}
```

---

## 5. Related Resources Component

**Create new file:** `/Volumes/cel/rentreadytools/web/src/app/components/related-resources.tsx`

```typescript
import Link from "next/link";

interface RelatedResource {
  title: string;
  description: string;
  href: string;
}

export function RelatedResources({
  resources,
}: {
  resources: RelatedResource[];
}) {
  return (
    <section className="mt-12 space-y-4 rounded-lg border border-rr-border-gray bg-rr-surface-offwhite p-6">
      <h2 className="text-lg font-semibold text-rr-text-primary">
        Related Resources
      </h2>
      <ul className="space-y-3">
        {resources.map((resource) => (
          <li key={resource.href}>
            <Link
              href={resource.href}
              className="block text-rr-accent-darkteal hover:underline"
            >
              <p className="font-semibold">{resource.title}</p>
              <p className="text-sm text-rr-text-primary/70">
                {resource.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

**Usage in a page:**
```typescript
import { RelatedResources } from "../components/related-resources";

export default function HowMuchRentPage() {
  return (
    <main>
      {/* Page content */}

      <RelatedResources
        resources={[
          {
            title: "Rent Price Calculator",
            description:
              "Get a data-backed rent range in under a minute using live comps.",
            href: "/tools/rent-estimate-calculator",
          },
          {
            title: "How to Run Rent Comps",
            description:
              "Step-by-step guide to analyzing comparable rental properties.",
            href: "/rent-pricing/how-to-run-rent-comps",
          },
          {
            title: "Rental Upgrades That Pay Off",
            description: "ROI analysis by upgrade type to guide your spending.",
            href: "/rent-pricing/rental-upgrades-that-pay-off",
          },
        ]}
      />
    </main>
  );
}
```

---

## 6. Updated Page Metadata Example

**Example for:** `/Volumes/cel/rentreadytools/web/src/app/rent-pricing/how-much-rent-can-i-charge/page.tsx`

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
  description:
    "Step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
  // NEW: OpenGraph
  openGraph: {
    title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
    description:
      "Step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
    url: "https://www.rentreadytools.com/rent-pricing/how-much-rent-can-i-charge",
    type: "article",
    images: [
      {
        url: "/rent-pricing-og.jpg",
        width: 1200,
        height: 630,
        alt: "How Much Rent Can I Charge - Pricing Guide",
      },
    ],
    authors: ["RentReadyTools"],
    publishedTime: "2024-11-23T00:00:00Z",
  },
  // NEW: Twitter
  twitter: {
    card: "summary_large_image",
    title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
    description:
      "Step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
    images: ["/rent-pricing-twitter.jpg"],
  },
  // NEW: Canonical
  alternates: {
    canonical:
      "https://www.rentreadytools.com/rent-pricing/how-much-rent-can-i-charge",
  },
};

export default function HowMuchRentPage() {
  // ... component code
}
```

---

## 7. Complete Page with All SEO Elements

**Full example for a guide page:**

```typescript
// /Volumes/cel/rentreadytools/web/src/app/turnover/how-long-should-turnover-take/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "../../components/article-schema";
import { BreadcrumbSchema } from "../../components/breadcrumb-schema";
import { RelatedResources } from "../../components/related-resources";

export const metadata: Metadata = {
  title:
    "How Long Should Turnover Take? | Benchmarks & Timeline | RentReadyTools",
  description:
    "Turnover timeline benchmarks by unit condition and seasonality. See realistic 14-day schedule and identify bottlenecks.",
  openGraph: {
    title:
      "How Long Should Turnover Take? | Benchmarks & Timeline | RentReadyTools",
    description:
      "Turnover timeline benchmarks by unit condition and seasonality. See realistic 14-day schedule and identify bottlenecks.",
    url: "https://www.rentreadytools.com/turnover/how-long-should-turnover-take",
    type: "article",
    images: [
      {
        url: "/og-turnover.jpg",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2024-11-23T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Long Should Turnover Take? | Benchmarks & Timeline | RentReadyTools",
    description:
      "Turnover timeline benchmarks by unit condition and seasonality. See realistic 14-day schedule and identify bottlenecks.",
  },
  alternates: {
    canonical:
      "https://www.rentreadytools.com/turnover/how-long-should-turnover-take",
  },
};

export default function HowLongTurnoverPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rentreadytools.com" },
          {
            name: "Turnover",
            url: "https://www.rentreadytools.com/turnover",
          },
          {
            name: "How Long Should Turnover Take?",
            url: "https://www.rentreadytools.com/turnover/how-long-should-turnover-take",
          },
        ]}
      />
      <ArticleSchema
        title="How Long Should Turnover Take? Benchmarks & Timeline"
        description="Turnover timeline benchmarks by unit condition and seasonality. See realistic 14-day schedule and identify bottlenecks."
        url="https://www.rentreadytools.com/turnover/how-long-should-turnover-take"
      >
        <main className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-semibold mb-4">
            How Long Should Turnover Take?
          </h1>
          <p className="text-lg text-rr-text-primary/80 mb-8">
            Turnover timeline benchmarks by unit condition and seasonality.
          </p>

          {/* Your page content */}

          <RelatedResources
            resources={[
              {
                title: "Move-Out Cleaning Checklist",
                description: "Room-by-room cleaning standards and supply list.",
                href: "/turnover/move-out-cleaning-checklist",
              },
              {
                title: "Vacancy Cost Calculator",
                description: "See the daily cost of empty units.",
                href: "/tools/vacancy-rate-calculator",
              },
              {
                title: "Turnover Guide",
                description: "Complete playbook for faster turnovers.",
                href: "/turnover/guide",
              },
            ]}
          />
        </main>
      </ArticleSchema>
    </>
  );
}
```

---

## 8. Next.js Config Updates (Optional but Recommended)

**File:** `/Volumes/cel/rentreadytools/web/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects (if needed for old URLs)
  async redirects() {
    return [
      // Example: redirect old URL structure
      // {
      //   source: "/old-path",
      //   destination: "/new-path",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
```

---

## 9. Environment Variable Setup

**File:** `.env.local` (or `.env`)

```env
# Required for metadataBase and canonical URLs
NEXT_PUBLIC_SITE_URL=https://www.rentreadytools.com

# Optional: for local development
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 10. Vercel Deployment Configuration (Optional)

**File:** `vercel.json` (optional, in root)

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "@next_public_site_url"
  }
}
```

**Or set in Vercel Dashboard:**
- Project Settings → Environment Variables
- Add: `NEXT_PUBLIC_SITE_URL=https://www.rentreadytools.com`

---

## 11. Testing Commands

Run these after implementation:

```bash
# Build the project
npm run build

# Validate metadata (Next.js will warn of issues)
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Lint
npm run lint
```

**Then test in validators:**
1. Schema Validator: https://validator.schema.org/
2. Open Graph: https://developers.facebook.com/tools/debug/
3. Twitter Cards: https://cards-dev.twitter.com/validator
4. Google Rich Results: https://search.google.com/test/rich-results

---

## 12. Before/After Comparison

**Before SEO Implementation:**
- Title + Description only
- No OG tags
- Minimal schema (FAQ only)
- Weak internal linking
- No breadcrumbs

**After SEO Implementation:**
- Full metadata suite
- OG + Twitter cards on all pages
- Complete schema markup (FAQPage, Article, BreadcrumbList, HowTo, Organization)
- Strong internal linking with Related Resources
- Schema-based breadcrumbs

---

## Summary of Files to Create/Modify

### Create (New Files):
1. `/src/app/components/article-schema.tsx` - Article schema component
2. `/src/app/components/breadcrumb-schema.tsx` - Breadcrumb schema component
3. `/src/app/components/howto-schema.tsx` - HowTo schema component
4. `/src/app/components/related-resources.tsx` - Related resources component

### Modify (Existing Files):
1. `/src/app/layout.tsx` - Add OG, Twitter, Organization schema
2. `next.config.ts` - Add image and security headers (optional)
3. All 25 `page.tsx` files - Add OG/Twitter metadata

### Setup:
1. Add `.env` variable: `NEXT_PUBLIC_SITE_URL`
2. Create OG/Twitter images (or use defaults)

---

**Total Implementation Time:** 25-35 hours
**Difficulty:** Medium
**Expected ROI:** 25-50% organic traffic increase

