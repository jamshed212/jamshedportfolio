import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Development Process",
  description:
    "Understand Jamshed Khan's web development process for websites, web applications, e-commerce platforms, custom software, UI/UX, and technical SEO projects.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Project Development Process | Jamshed Khan",
    description:
      "Explore the process used to plan, architect, build, optimize, and deliver modern websites, web applications, e-commerce platforms, and custom software.",
    url: "/process",
  },
  twitter: {
    title: "Project Development Process | Jamshed Khan",
    description:
      "Explore the process for planning, architecting, building, optimizing, and delivering modern web and software projects.",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}