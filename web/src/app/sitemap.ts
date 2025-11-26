const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rentreadytools.com";

const routes = [
  "/",
  "/tools",
  "/tools/rent-estimate-calculator",
  "/tools/vacancy-rate-calculator",
  "/tools/move-in-checklist",
  "/tools/renovation-roi",
  "/tools/cap-rate-calculator",
  "/turnover",
  "/turnover/guide",
  "/turnover/how-long-should-turnover-take",
  "/turnover/move-out-cleaning-checklist",
  "/turnover/true-cost-of-tenant-turnover",
  "/rent-pricing",
  "/rent-pricing/how-much-rent-can-i-charge",
  "/rent-pricing/how-to-run-rent-comps",
  "/rent-pricing/rental-upgrades-that-pay-off",
  "/landlord-forms",
  "/landlord-forms/notice-to-enter-generator",
  "/landlord-forms/security-deposit-return-letter",
  "/landlord-forms/move-in-checklist",
  "/landlord-forms/move-out-checklist",
  "/landlord-forms/rent-increase-letter",
  "/landlord-forms/late-rent-notice",
  "/tenant-screening",
  "/tenant-screening/how-to-screen-tenants",
  "/property-management",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap() {
  const lastModified = new Date().toISOString().split("T")[0];
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : path.startsWith("/tools") ? 0.9 : 0.8,
  }));
}
