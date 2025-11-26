const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rentreadytools.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
