import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://golalmar.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
    template: "%s · Gol al Mar",
  },
  description:
    "Mira todos los partidos del Mundial 2026 en directo en una pantalla gigante justo en la Playa de Vilanova. Entrada libre. Arena bajo los pies. Gol al Mar.",
  keywords: [
    "gol al mar",
    "mundial playa",
    "playa vilanova",
    "fútbol al aire libre",
    "mundial 2026",
    "españa mundial 2026",
    "proyector playa",
    "evento gratuito",
    "vilanova i la geltru",
    "verano 2026",
    "cine playa",
    "habana blue vilanova",
    "pantalla gigante playa",
    "ver mundial playa",
    "mundial cataluña",
  ],
  authors: [{ name: "Gol al Mar", url: siteUrl }],
  creator: "Gol al Mar",
  publisher: "Gol al Mar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Gol al Mar",
    title: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
    description:
      "Gol al Mar — mira el Mundial en una pantalla gigante frente al mar. Entrada libre. Verano 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
    description:
      "Mira el Mundial 2026 en una pantalla gigante frente al mar. Entrada libre. Playa de Vilanova.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F2EFE4]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
