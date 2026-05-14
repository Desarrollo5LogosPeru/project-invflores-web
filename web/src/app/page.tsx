import { CtaBanner } from "@/components/inicio/CtaBanner";
import { Diferenciales } from "@/components/inicio/Diferenciales";
import { Hero } from "@/components/inicio/Hero";
import { Portafolio } from "@/components/inicio/Portafolio";
import { SobreNosotros } from "@/components/inicio/SobreNosotros";
import { TestimoniosCarousel } from "@/components/inicio/TestimoniosCarousel";
import JsonLd from "@/components/SEO/JsonLd";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventanas Antiruido | Vidrio Antiruido | Mamparas y Puertas de Vidrio",
  description:
    "Ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, mamparas de vidrio y aluminio, puertas de vidrio templado. Expertos en Lima.",
  openGraph: {
    title:
      "Ventanas Antiruido | Vidrio Antiruido | Mamparas y Puertas de Vidrio",
    description:
      "Ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, mamparas de vidrio y aluminio, puertas de vidrio templado. Expertos en Lima.",
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
    title:
      "Ventanas Antiruido | Vidrio Antiruido | Mamparas y Puertas de Vidrio",
    description:
      "Ventanas antiruido, vidrio antiruido, mamparas de vidrio y aluminio, puertas de vidrio templado en Lima.",
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
      <JsonLd />
      <Hero />
      <SobreNosotros />
      <Diferenciales />
      <CtaBanner />
      <Portafolio />
      <TestimoniosCarousel />
    </>
  );
}
