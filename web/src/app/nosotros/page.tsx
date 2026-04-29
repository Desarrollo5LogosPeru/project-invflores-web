import { NosotrosCTA } from "@/components/nosotros/NosotrosCTA";
import { NosotrosHero } from "@/components/nosotros/NosotrosHero";
import { NosotrosMisionVision } from "@/components/nosotros/NosotrosMisionVision";
import { NosotrosStory } from "@/components/nosotros/NosotrosStory";
import { NosotrosValores } from "@/components/nosotros/NosotrosValores";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Puertas de ducha en Lima - Instalación y Venta",
  description:
    "Instalamos puertas de ducha en Lima. Diseños modernos en vidrio templado, herrajes de calidad y garantía. Más de 15 años de experiencia.",

  openGraph: {
    title: "Puertas de ducha en Lima - Instalación y Venta",
    description:
      "Instalamos puertas de ducha en Lima. Diseños modernos, vidrio templado y herrajes de calidad.",
    url: "https://inversionesfloressac.com/nosotros",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO05.webp",
        width: 1200,
        height: 630,
        alt: "Puertas de ducha en Lima - Instalación y Venta",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Puertas de ducha en Lima - Instalación y Venta",
    description: "Instalamos puertas de ducha en Lima. Calidad y garantía.",
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
