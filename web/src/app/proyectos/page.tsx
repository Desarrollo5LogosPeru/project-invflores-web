// import { FeaturedProject } from "@/components/proyectos/FeaturedProject";
import { ProjectHero } from "@/components/proyectos/ProjectHero";
import { ProjectsGrid } from "@/components/proyectos/ProjectsGrid";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos de Ventanas Antiruido y Mamparas de Vidrio | Galería",
  description:
    "Galería de proyectos reales: ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, y puertas de vidrio templado. Inspírate para tu espacio.",

  openGraph: {
    title: "Proyectos de Ventanas Antiruido y Mamparas de Vidrio | Galería",
    description:
      "Galería de proyectos reales: ventanas antiruido, mamparas de vidrio y puertas de vidrio templado. Inspírate para tu espacio en Lima y Perú.",
    url: "https://inversionesfloressac.com/proyectos",
    siteName: "Inversiones Generales J&R Flores SAC",
    images: [
      {
        url: "https://inversionesfloressac.com/HERO04-OFF.webp",
        width: 1200,
        height: 630,
        alt: "Proyecto de ventanas antiruido y mamparas de vidrio - Inversiones Flores",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Proyectos de Ventanas Antiruido y Mamparas de Vidrio | Galería",
    description:
      "Galería de proyectos reales: ventanas antiruido, mamparas de vidrio y puertas de vidrio templado.",
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
