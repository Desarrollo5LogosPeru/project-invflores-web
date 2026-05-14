import { ContactForm } from "@/components/contactanos/ContactForm";
import { ContactHero } from "@/components/contactanos/ContactHero";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contacto para Ventanas Antiruido y Mamparas de Vidrio | Inversiones Flores",
  description:
    "Solicita cotización para ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, mamparas de vidrio y aluminio, y puertas de vidrio templado en Lima y Perú.",

  openGraph: {
    title:
      "Contacto para Ventanas Antiruido y Mamparas de Vidrio | Inversiones Flores",
    description:
      "Solicita cotización para ventanas antiruido, mamparas de vidrio para sala y fachada, y puertas de vidrio templado en Lima y Perú.",
    url: "https://inversionesfloressac.com/contactanos",
    siteName: "Inversiones Generales J&R Flores SAC",
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contacto para Ventanas Antiruido y Mamparas de Vidrio | Inversiones Flores",
    description:
      "Cotiza ventanas antiruido, mamparas de vidrio y puertas de vidrio templado en Lima.",
  },

  metadataBase: new URL("https://inversionesfloressac.com"),
  alternates: {
    canonical: "/contactanos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactanosPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
