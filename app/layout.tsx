import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamshedportfolio.vercel.app"),

  title: {
    default: "Jamshed Khan | Full Stack Developer",
    template: "%s | Jamshed Khan",
  },

  description:
    "Jamshed Khan is a Full Stack Developer specializing in React, Next.js, WordPress, Shopify, API integrations, SaaS solutions, and AI automation for global clients.",

  keywords: [
    "Jamshed Khan",
    "Jamshed Khan Developer",
    "Full Stack Developer",
    "Full Stack Developer Pakistan",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Shopify Developer",
    "API Integration Developer",
    "AI Automation Developer",
    "Web Developer Karachi",
  ],

  authors: [
    {
      name: "Jamshed Khan",
      url: "https://jamshedportfolio.vercel.app",
    },
  ],

  creator: "Jamshed Khan",
  publisher: "Jamshed Khan",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "_Obmd9Mw5qSobM9xzh-oeLi8pinhXAxzKOSlwT9zJO0",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamshedportfolio.vercel.app",
    siteName: "Jamshed Khan",
    title: "Jamshed Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, WordPress, Shopify, API integrations, SaaS solutions, and AI automation.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jamshed Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, WordPress, Shopify, APIs, SaaS & AI automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Jamshed Khan",

    url: "https://jamshedportfolio.vercel.app",

    jobTitle: "Full Stack Developer",

    description:
      "Full Stack Developer specializing in React, Next.js, WordPress, Shopify, API integrations, SaaS solutions, and AI automation.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },

    sameAs: [
      "https://github.com/jamshed212",
      "https://www.linkedin.com/in/jamshed0khan",
      "https://x.com/jamshedkhan2010",
    ],

    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "WordPress",
      "Shopify",
      "API Integration",
      "SaaS Development",
      "AI Automation",
      "Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "Jamshed Khan",
    url: "https://jamshedportfolio.vercel.app",

    description:
      "Official portfolio website of Jamshed Khan, a Full Stack Developer specializing in React, Next.js, WordPress, Shopify, APIs, SaaS, AI automation, performance, and technical SEO.",

    author: {
      "@type": "Person",
      name: "Jamshed Khan",
      url: "https://jamshedportfolio.vercel.app",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ToG7tB4D6t2ufV/t5kzFrA"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}