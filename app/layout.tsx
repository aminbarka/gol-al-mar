import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gol al Mar · World Cup at Vilanova Beach 2026",
  description:
    "Watch every World Cup 2026 match live on a giant projector screen right at Vilanova Beach. Free entry. Sand under your feet. Gol al Mar.",
  keywords:
    "gol al mar, world cup beach, vilanova beach, outdoor football screening, world cup 2026, spain world cup, beach projector, free outdoor event, vilanova i la geltru, summer 2026",
  authors: [{ name: "Gol al Mar" }],
  openGraph: {
    type: "website",
    locale: "en_ES",
    title: "Gol al Mar · World Cup at Vilanova Beach 2026",
    description:
      "Gol al Mar — watch the World Cup on a giant screen in front of the beach. Free entry. Summer 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F2EFE4]">{children}</body>
    </html>
  );
}
