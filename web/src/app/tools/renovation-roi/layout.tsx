import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://rentreadytools.com/tools/renovation-roi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
