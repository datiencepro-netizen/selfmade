import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://self-made.dev"),
  title: {
    default: "Self-made — Bootcamp inteligente de preparación laboral para IT",
    template: "%s · Self-made",
  },
  description:
    "Convierte tu potencial en un perfil contratable. Self-made transforma a alguien sin experiencia específica en un candidato competitivo para los roles de IT más demandados: Machine Learning Engineer, Data Scientist, Developer y AI Engineer.",
  keywords: [
    "bootcamp IT",
    "machine learning engineer",
    "data scientist",
    "AI engineer",
    "preparación laboral",
    "portfolio",
    "entrevistas técnicas",
  ],
  openGraph: {
    title: "Self-made — Preparación laboral inteligente para IT",
    description:
      "Currículo guiado por la demanda real del mercado, compilador integrado, feedback adaptativo y portfolio listo para contratar.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
