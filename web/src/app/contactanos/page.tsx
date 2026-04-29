import { ContactForm } from "@/components/contactanos/ContactForm";
import { ContactHero } from "@/components/contactanos/ContactHero";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | Inversiones Generales J&R Flores SAC",
  description:
    "Comunícate con nosotros para cotizar tus proyectos de construcción, acristalamiento y decoración en Lima y todo Perú. Respondemos en 24 horas.",

  openGraph: {
    title: "Contáctanos | Inversiones Generales J&R Flores SAC",
    description:
      "Comunícate con nosotros para cotizar tus proyectos de construcción, acristalamiento y decoración.",
    url: "https://inversionesfloressac.com/contactanos",
    siteName: "Inversiones Generales J&R Flores SAC",
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contáctanos | Inversiones Generales J&R Flores SAC",
    description: "Comunícate con nosotros para cotizar tus proyectos.",
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
