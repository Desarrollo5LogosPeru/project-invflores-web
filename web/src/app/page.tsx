import { CtaBanner } from "@/components/inicio/CtaBanner";
import { Diferenciales } from "@/components/inicio/Diferenciales";
import { Hero } from "@/components/inicio/Hero";
import { Portafolio } from "@/components/inicio/Portafolio";
import { SobreNosotros } from "@/components/inicio/SobreNosotros";
import { TestimoniosCarousel } from "@/components/inicio/TestimoniosCarousel";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventanas y Mamparas Acústicas PVC en Lima",
  description:
    "¿Ruido en casa? Instalamos ventanas y mamparas acústicas PVC en Lima. +15 años de experiencia, materiales premium y garantía total.",

  openGraph: {
    title: "Ventanas y Mamparas Acústicas PVC en Lima",
    description:
      "¿Ruido en casa? Instalamos ventanas y mamparas acústicas PVC en Lima. +15 años de experiencia, materiales premium y garantía total.",
    url: "https://inversionesfloressac.com",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO01.webp",
        width: 1200,
        height: 630,
        alt: "Ventanas y Mamparas Acústicas PVC - Inversiones Generales J&R Flores SAC",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ventanas y Mamparas Acústicas PVC en Lima",
    description:
      "¿Ruido en casa? Instalamos ventanas y mamparas acústicas PVC en Lima. +15 años de experiencia, materiales premium y garantía total.",
    images: ["https://inversionesfloressac.com/HERO01.webp"],
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Diferenciales />
      <CtaBanner />
      <Portafolio />
      <TestimoniosCarousel />
    </>
  );
}
