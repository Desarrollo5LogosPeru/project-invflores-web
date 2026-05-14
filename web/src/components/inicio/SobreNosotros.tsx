/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

import image from "@/assets/proyectos/PROY08.webp";
// Schema.org para la sección Sobre Nosotros
const sobreNosotrosSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Nosotros - Inversiones Generales J&R Flores SAC",
  description:
    "Especialistas en ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala y fachada, y puertas de vidrio templado en Lima y todo Perú.",
  url: "https://inversionesfloressac.com/nosotros",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Inversiones Generales J&R Flores SAC",
    foundingDate: "2009",
    foundingLocation: "Lima, Perú",
    description:
      "Más de 15 años de experiencia en instalación de ventanas antiruido, vidrio antiruido, mamparas de vidrio y aluminio, y puertas de vidrio templado.",
    knowsAbout: [
      "Ventanas antiruido",
      "Vidrio antiruido",
      "Mamparas de vidrio para sala",
      "Mamparas de vidrio para fachada",
      "Mamparas de vidrio y aluminio",
      "Puertas de vidrio templado",
      "Fachadas de vidrio",
      "Acristalamiento moderno",
    ],
    areaServed: "Perú",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
  },
};
export const SobreNosotros = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sobreNosotrosSchema),
        }}
      />
      <section className="w-full py-20 bg-transparent">
        <div
          className="flex flex-col md:flex-row items-center gap-12"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
            paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
          }}
        >
          {/* ── Lado izquierdo: texto ── */}
          <div className="flex-1 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="h1-badge text-secondary font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                Sobre Nosotros
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-extrabold text-accent"
            >
              Especialistas en Ventanas Antiruido, Mamparas de Vidrio y Puertas
              Templadas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-black max-w-md"
            >
              En Inversiones Generales J&R Flores SAC, somos especialistas en la
              instalación de <strong>ventanas antiruido</strong>,{" "}
              <strong>vidrio antiruido</strong>,{" "}
              <strong>mamparas de vidrio para sala y fachada</strong>, así como{" "}
              <strong>puertas de vidrio templado</strong>. Con más de 15 años de
              experiencia en Lima y todo Perú, transformamos tus espacios con
              soluciones en vidrio de alta calidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Conoce más <IconArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* ── Lado derecho: imagen ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full rounded-xl overflow-hidden border border-border shadow-sm"
          >
            <img
              src={image.src}
              alt="Ventanas antiruido y mamparas de vidrio instaladas por Inversiones Flores"
              className="w-full h-72 md:h-80 object-cover"
            />
          </motion.div>
        </div>
         {/* Texto invisible para SEO con todas las keywords */}
        <div className="sr-only">
          <p>
            En Inversiones Generales J&R Flores SAC, somos líderes en la instalación de ventanas antiruido,
            vidrio antiruido, mamparas de vidrio para sala, mamparas de vidrio para fachada,
            mamparas de vidrio y aluminio, puertas de vidrio templado y fachadas de vidrio.
            Con más de 15 años de experiencia en Lima y todo Perú, ofrecemos soluciones en acristalamiento
            moderno con los más altos estándares de calidad. Transformamos tus espacios residenciales,
            comerciales y corporativos con materiales premium y diseño contemporáneo.
          </p>
        </div>
      </section>
    </>
  );
};
