"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useEmpresa } from "@/store/empresa/empresa.store";
import image from "@/assets/shared/CTABANNERINICIO.webp";

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

// Schema.org para el CTA
const ctaSchema = {
  "@context": "https://schema.org",
  "@type": "Action",
  name: "Cotización de Ventanas Antiruido y Mamparas de Vidrio",
  description:
    "Solicita tu cotización sin compromiso para ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, y puertas de vidrio templado.",
  provider: {
    "@type": "Organization",
    name: "Inversiones Generales J&R Flores SAC",
    url: "https://inversionesfloressac.com",
  },
  potentialAction: {
    "@type": "CommunicateAction",
    name: "Contactar por WhatsApp",
    target: `https://wa.me/{{whatsapp}}`,
    language: "es",
  },
};

export const CtaBanner = () => {
  const { whatsapp } = useEmpresa();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...ctaSchema,
            potentialAction: {
              ...ctaSchema.potentialAction,
              target: `https://wa.me/${whatsapp}`,
            },
          }),
        }}
      />

      <section
        ref={ref}
        className="relative w-full overflow-hidden py-20"
        aria-label="Cotización de ventanas antiruido, mamparas de vidrio y puertas templadas - Inversiones Flores"
      >
        {/* Imagen de fondo */}
        <motion.img
          src={image.src}
          alt="Ventanas antiruido, mamparas de vidrio y puertas de vidrio templado instaladas por Inversiones Flores en Lima"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y, scale: 1.3 }}
          fetchPriority="high"
          loading="eager"
        />

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-accent/85" aria-hidden="true" />

        {/* Contenido */}
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-5"
          style={{ paddingLeft: PADDING, paddingRight: PADDING }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-white font-extrabold max-w-2xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            ¿Necesitas Ventanas Antiruido, Mamparas de Vidrio o Puertas
            Templadas?
            {/* Keywords invisibles para SEO */}
            <span className="sr-only">
              Ofrecemos ventanas antiruido, vidrio antiruido, mamparas de vidrio
              para sala, mamparas de vidrio para fachada, mamparas de vidrio y
              aluminio, puertas de vidrio templado y fachadas de vidrio en Lima
              y todo Perú.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white max-w-md text-base md:text-lg"
          >
            Solicita tu cotización sin compromiso. Instalamos{" "}
            <strong>ventanas antiruido</strong>,{" "}
            <strong>vidrio antiruido</strong>,{" "}
            <strong>mamparas de vidrio para sala y fachada</strong>, y{" "}
            <strong>puertas de vidrio templado</strong> en Lima y todo Perú.
          </motion.p>

          <motion.a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
            style={{ fontFamily: "var(--font-raleway)" }}
            aria-label="Solicitar cotización por WhatsApp para ventanas antiruido y mamparas de vidrio en Lima"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            Escríbenos por WhatsApp
          </motion.a>
        </div>

        {/* Texto invisible para SEO con todas las keywords */}
        <div className="sr-only">
          <p>
            En Inversiones Generales J&R Flores SAC, somos especialistas en la
            instalación de ventanas antiruido, vidrio antiruido, mamparas de
            vidrio para sala, mamparas de vidrio para fachada, mamparas de
            vidrio y aluminio, puertas de vidrio templado y fachadas de vidrio.
            Con más de 15 años de experiencia en Lima y todo Perú, ofrecemos
            cotizaciones sin compromiso, materiales premium, mano de obra
            certificada y garantía post-proyecto. Contáctanos por WhatsApp para
            transformar tus espacios con soluciones en vidrio de alta calidad.
          </p>
        </div>
      </section>
    </>
  );
};
