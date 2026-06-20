import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AprendeData — Data Engineering & Cloud",
  description:
    "Plataforma educativa gratuita para aprender Data Engineering, Cloud e Inteligencia Artificial. 100% sin fines de lucro.",
  keywords: ["data engineering", "cloud", "machine learning", "python", "sql", "aprendizaje"],
  openGraph: {
    title: "AprendeData",
    description: "Aprende Data Engineering y Cloud de forma gratuita.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
