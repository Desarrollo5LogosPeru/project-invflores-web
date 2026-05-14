import { ProductFAQ } from "@/components/productos/ProductFAQ";
import { ProductHero } from "@/components/productos/ProductHero";
import { ProductQuality } from "@/components/productos/ProductQuality";
import { ProductsGrid } from "@/components/productos/ProductsGrid";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mamparas de Vidrio para Sala y Fachada | Puertas de Vidrio Templado",
  description:
    "Mamparas de vidrio para sala, fachada y baño. Mamparas de vidrio y aluminio. Puertas de vidrio templado. También manejamos series 25, 62 y 80. Instalamos en Perú.",

  openGraph: {
    title:
      "Mamparas de Vidrio para Sala y Fachada | Puertas de Vidrio Templado",
    description:
      "Mamparas de vidrio para sala, fachada y baño. Mamparas de vidrio y aluminio. Puertas de vidrio templado. Instalamos en Perú.",
    url: "https://inversionesfloressac.com/productos",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO03.webp",
        width: 1200,
        height: 630,
        alt: "Mamparas de vidrio para sala y puertas de vidrio templado - Inversiones Flores",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mamparas de Vidrio para Sala y Fachada | Puertas de Vidrio Templado",
    description:
      "Mamparas de vidrio para sala, fachada y baño. Puertas de vidrio templado en Perú.",
    images: ["https://inversionesfloressac.com/HERO03.webp"],
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/productos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductosPage() {
  return (
    <>
      <ProductHero />
      <ProductsGrid />
      <ProductQuality />
      <ProductFAQ />
    </>
  );
}
