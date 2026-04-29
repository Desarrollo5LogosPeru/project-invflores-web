import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceProcess } from "@/components/servicios/ServiceProcess";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { BrandsCarousel } from "@/components/ui/BrandsCarousel";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventana serie 20, 25, 35, 42, 62 y 80 en Perú",
  description:
    "Venta e instalación de ventanas serie 20, 25, 35, 42, 62 y 80 en Perú. Alta calidad, aislantes acústicos y térmicos. Garantía y experiencia comprobada.",

  openGraph: {
    title: "Ventana serie 20, 25, 35, 42, 62 y 80 en Perú",
    description:
      "Venta e instalación de ventanas serie 20, 25, 35, 42, 62 y 80 en Perú. Sistemas de alta calidad para todo tipo de proyectos.",
    url: "https://inversionesfloressac.com/servicios",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO02.webp",
        width: 1200,
        height: 630,
        alt: "Ventana serie 20, 25, 35, 42, 62 y 80 en Perú",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ventana serie 20, 25, 35, 42, 62 y 80 en Perú",
    description: "Venta e instalación de ventanas serie 20, 25, 35, 42, 62 y 80 en Perú.",
    images: ["https://inversionesfloressac.com/HERO02.webp"],
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/servicios",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <ServiceHero />
      <ServicesGrid />
      <ServiceProcess />
      <BrandsCarousel />
    </>
  );
}
