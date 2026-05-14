import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceProcess } from "@/components/servicios/ServiceProcess";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { BrandsCarousel } from "@/components/ui/BrandsCarousel";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventanas Antiruido y Puertas de Vidrio Templado | Servicios en Perú",
  description:
    "Ventanas antiruido, vidrio antiruido y puertas de vidrio templado. También manejamos ventanas serie 20,25,35,42,62 y 80. Instalamos en todo Perú.",

  openGraph: {
    title:
      "Ventanas Antiruido y Puertas de Vidrio Templado | Servicios en Perú",
    description:
      "Ventanas antiruido, vidrio antiruido y puertas de vidrio templado. También manejamos ventanas serie 20,25,35,42,62 y 80. Instalamos en todo Perú.",
    url: "https://inversionesfloressac.com/servicios",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO02.webp",
        width: 1200,
        height: 630,
        alt: "Ventanas antiruido y puertas de vidrio templado - Inversiones Flores",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ventanas Antiruido y Puertas de Vidrio Templado | Servicios en Perú",
    description:
      "Ventanas antiruido, vidrio antiruido y puertas de vidrio templado. Instalamos en todo Perú.",
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
