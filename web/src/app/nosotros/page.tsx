import { NosotrosCTA } from "@/components/nosotros/NosotrosCTA";
import { NosotrosHero } from "@/components/nosotros/NosotrosHero";
import { NosotrosMisionVision } from "@/components/nosotros/NosotrosMisionVision";
import { NosotrosStory } from "@/components/nosotros/NosotrosStory";
import { NosotrosValores } from "@/components/nosotros/NosotrosValores";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Inversiones Flores | Más de 15 años en Ventanas y Mamparas de Vidrio",
  description:
    "Conoce a Inversiones Generales J&R Flores SAC. Especialistas en ventanas antiruido, mamparas de vidrio para sala y fachada, y puertas de vidrio templado en Lima y Perú.",

  openGraph: {
    title:
      "Inversiones Flores | Más de 15 años en Ventanas y Mamparas de Vidrio",
    description:
      "Conoce a Inversiones Generales J&R Flores SAC. Especialistas en ventanas antiruido, mamparas de vidrio y puertas de vidrio templado en Lima y Perú.",
    url: "https://inversionesfloressac.com/nosotros",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO05.webp",
        width: 1200,
        height: 630,
        alt: "Inversiones Flores - Especialistas en vidrio y ventanas antiruido en Lima",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Inversiones Flores | Más de 15 años en Ventanas y Mamparas de Vidrio",
    description:
      "Conoce a Inversiones Flores. Especialistas en ventanas antiruido, mamparas de vidrio y puertas templadas en Lima.",
    images: ["https://inversionesfloressac.com/HERO05.webp"],
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/nosotros",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <NosotrosStory />
      <NosotrosMisionVision />
      <NosotrosValores />
      <NosotrosCTA />
    </>
  );
}
