"use client";

import { motion } from "framer-motion";
import { IconRosette, IconAward, IconClock, IconShieldCheck } from "@tabler/icons-react";

const diferenciales = [
  {
    icon: <IconRosette size={32} />,
    titulo: "Calidad",
    descripcion: "Materiales premium y mano de obra certificada.",
    keywords: "materiales premium, mano de obra certificada, ventanas antiruido calidad",
  },
  {
    icon: <IconAward size={32} />,
    titulo: "Experiencia",
    descripcion: "Década y media liderando el sector constructivo.",
    keywords: "15 años experiencia, ventanas antiruido Lima, mamparas de vidrio",
  },
  {
    icon: <IconClock size={32} />,
    titulo: "Puntualidad",
    descripcion: "Cumplimiento estricto de cronogramas de obra.",
    keywords: "cumplimiento plazos, instalación puntual, puertas vidrio templado",
  },
  {
    icon: <IconShieldCheck size={32} />,
    titulo: "Garantía",
    descripcion: "Respaldo total post-proyecto en cada servicio.",
    keywords: "garantía post-venta, respaldo proyectos, mamparas vidrio aluminio",
  },
];

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

// Schema.org para la sección de diferenciales
const diferencialesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "¿Por qué elegirnos? - Ventajas competitivas",
  description: "Nuestros diferenciales como especialistas en ventanas antiruido, mamparas de vidrio y puertas de vidrio templado.",
  numberOfItems: diferenciales.length,
  itemListElement: diferenciales.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.titulo,
    description: item.descripcion,
    item: {
      "@type": "Thing",
      name: item.titulo,
      description: item.descripcion,
    },
  })),
};

export const Diferenciales = () => {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diferencialesSchema) }}
      />

      <section 
        className="w-full py-20 bg-transparent"
        aria-label="Nuestros diferenciales - Ventanas antiruido, mamparas de vidrio y puertas templadas en Lima"
      >
        <div
          style={{
            paddingLeft: PADDING,
            paddingRight: PADDING,
          }}
        >
          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="flex flex-col gap-2">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm"
              >
                Diferenciales
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-extrabold text-accent text-2xl md:text-3xl lg:text-4xl"
              >
                ¿Por qué elegirnos?
                <span className="sr-only">
                  Somos especialistas en ventanas antiruido, vidrio antiruido, mamparas de vidrio para sala,
                  mamparas de vidrio para fachada, mamparas de vidrio y aluminio, puertas de vidrio templado
                  y fachadas de vidrio en Lima y todo Perú.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-black max-w-xs md:text-right text-base"
            >
              Somos especialistas en <strong>ventanas antiruido</strong>, <strong>mamparas de vidrio para sala y fachada</strong>, y <strong>puertas de vidrio templado</strong> en Lima y todo Perú.
            </motion.p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {diferenciales.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4 px-8 py-8 border-r border-border last:border-r-0"
              >
                <span className="text-accent" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-secondary text-xl">
                  {item.titulo}
                  <span className="sr-only"> {item.keywords}</span>
                </h3>
                <p className="text-black">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Texto invisible para SEO con todas las keywords */}
        <div className="sr-only">
          <p>
            Nuestros diferenciales como especialistas en ventanas antiruido, vidrio antiruido,
            mamparas de vidrio para sala, mamparas de vidrio para fachada, mamparas de vidrio y aluminio,
            puertas de vidrio templado y fachadas de vidrio. Ofrecemos materiales premium,
            mano de obra certificada, más de 15 años de experiencia en Lima y todo Perú,
            cumplimiento puntual de plazos y garantía post-proyecto.
          </p>
        </div>
      </section>
    </>
  );
};