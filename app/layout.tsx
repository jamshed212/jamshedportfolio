import type { Metadata } from "next";
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
  title: "Jamshed Khan | Senior Web Developer & Mobile App Specialist",
  description:
    "Senior Web & Mobile App Developer specializing in React, Next.js, React Native, WordPress & SEO — based in Karachi, serving global clients.",
  keywords: [
    "Jamshed Khan",
    "Jamshed Khan Developer",
    "Senior Web Developer Karachi",
    "Next.js Developer",
    "React Native Developer",
    "WordPress SEO Expert Pakistan",
  ],
  authors: [{ name: "Jamshed Khan" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "_Obmd9Mw5qSobM9xzh-oeLi8pinhXAxzKOSlwT9zJO0",
  },
  openGraph: {
    title: "Jamshed Khan | Senior Web Developer",
    description: "Senior Web & Mobile App Developer — React, Next.js, WordPress & SEO",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jamshed Khan",
    "jobTitle": "Senior Web & Mobile Application Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "PK",
    },
    "sameAs": [
      "https://github.com/your-github-username",
      "https://www.linkedin.com/in/your-linkedin-username",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}