import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Technical SEO Services",
  description:
    "Explore Jamshed Khan's full-stack web development, WordPress, e-commerce, technical SEO, performance optimization, UI/UX, API integration, and modern web engineering services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development & Technical SEO Services | Jamshed Khan",
    description:
      "Full-stack web development, WordPress, e-commerce, technical SEO, performance optimization, UI/UX, API integrations, and modern web engineering.",
    url: "/services",
  },
  twitter: {
    title: "Web Development & Technical SEO Services | Jamshed Khan",
    description:
      "Full-stack web development, WordPress, e-commerce, technical SEO, performance optimization, UI/UX, and API integrations.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}