// import { FeaturedProject } from "@/components/proyectos/FeaturedProject";
import { ProjectHero } from "@/components/proyectos/ProjectHero";
import { ProjectsGrid } from "@/components/proyectos/ProjectsGrid";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Barandas y pasamanos en acero en Perú - Proyectos Realizados",
  description:
    "Conozca nuestros proyectos realizados de barandas y pasamanos en acero en Perú. Más de 15 años de experiencia en fabricación e instalación para edificios, viviendas y espacios comerciales.",

  openGraph: {
    title: "Barandas y pasamanos en acero en Perú | Proyectos Realizados",
    description:
      "Conozca nuestros proyectos realizados de barandas y pasamanos en acero en Perú. Diseños modernos y resistentes con garantía de calidad.",
    url: "https://inversionesfloressac.com/proyectos",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO04-OFF.webp",
        width: 1200,
        height: 630,
        alt: "Barandas y pasamanos en acero en Perú - Proyectos Realizados",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Barandas y pasamanos en acero en Perú | Proyectos Realizados",
    description:
      "Conozca nuestros proyectos realizados de barandas y pasamanos en acero en Perú. Calidad y diseño en cada proyecto.",
    images: ["https://inversionesfloressac.com/HERO04-OFF.webp"],
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/proyectos",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function ProyectosPage() {
  return (
    <>
      <ProjectHero />
      <ProjectsGrid />
    </>
  );
}
