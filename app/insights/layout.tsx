import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Insights | Web Development, SEO & Performance",
  description:
    "Technical insights from Jamshed Khan covering Next.js, React, WordPress, technical SEO, Core Web Vitals, e-commerce systems, performance optimization, and web architecture.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Technical Insights | Jamshed Khan",
    description:
      "Technical insights covering Next.js, React, WordPress, technical SEO, performance, e-commerce systems, and modern web architecture.",
    url: "/insights",
  },
  twitter: {
    title: "Technical Insights | Jamshed Khan",
    description:
      "Technical insights covering Next.js, React, WordPress, technical SEO, performance, e-commerce systems, and web architecture.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}