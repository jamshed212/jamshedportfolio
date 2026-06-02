import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Ye import missing tha
import "./globals.css";

// Font define karna zaroori hai
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jamshed | Digital Architect",
  description: "Personal Portfolio of Jamshed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#020617] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}