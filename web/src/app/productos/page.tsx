import { ProductFAQ } from "@/components/productos/ProductFAQ";
import { ProductHero } from "@/components/productos/ProductHero";
import { ProductQuality } from "@/components/productos/ProductQuality";
import { ProductsGrid } from "@/components/productos/ProductsGrid";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mampara serie 25, 62 y 80 en Perú",
  description:
    "Venta e instalación de mamparas serie 25, 62 y 80 en Perú. Sistemas de acristalamiento modernos para baños, oficinas y espacios comerciales. Alta calidad y garantía.",

  openGraph: {
    title: "Mampara serie 25, 62 y 80 en Perú",
    description:
      "Venta e instalación de mamparas serie 25, 62 y 80 en Perú. Sistemas de acristalamiento modernos para baños, oficinas y espacios comerciales.",
    url: "https://inversionesfloressac.com/productos",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO03.webp",
        width: 1200,
        height: 630,
        alt: "Mampara serie 25, 62 y 80 en Perú",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mampara serie 25, 62 y 80 en Perú",
    description:
      "Venta e instalación de mamparas serie 25, 62 y 80 en Perú. Calidad premium y garantía.",
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
