import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Jamshed Khan | Full Stack Developer",
  description:
    "Contact Jamshed Khan for full-stack web development, React, Next.js, WordPress, Shopify, API integrations, technical SEO, performance optimization, and custom software projects.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Jamshed Khan | Full Stack Developer",
    description:
      "Get in touch with Jamshed Khan about web development, custom software, e-commerce, API integrations, technical SEO, and performance optimization projects.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Jamshed Khan | Full Stack Developer",
    description:
      "Discuss your web development, custom software, e-commerce, API, SEO, or performance optimization project with Jamshed Khan.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}