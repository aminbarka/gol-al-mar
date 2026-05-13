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
  title: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
  description:
    "Mira todos los partidos del Mundial 2026 en directo en una pantalla gigante justo en la Playa de Vilanova. Entrada libre. Arena bajo los pies. Gol al Mar.",
  keywords:
    "gol al mar, mundial playa, playa vilanova, fútbol al aire libre, mundial 2026, españa mundial, proyector playa, evento gratuito, vilanova i la geltru, verano 2026",
  authors: [{ name: "Gol al Mar" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Gol al Mar · El Mundial en la Playa de Vilanova 2026",
    description:
      "Gol al Mar — mira el Mundial en una pantalla gigante frente al mar. Entrada libre. Verano 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F2EFE4]">{children}</body>
    </html>
  );
}
