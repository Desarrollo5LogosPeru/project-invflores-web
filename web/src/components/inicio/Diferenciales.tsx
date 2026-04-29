"use client";

import { motion } from "framer-motion";
import { IconRosette, IconAward, IconClock, IconShieldCheck } from "@tabler/icons-react";

const diferenciales = [
  {
    icon: <IconRosette size={32} />,
    titulo: "Calidad",
    descripcion: "Materiales premium y mano de obra certificada.",
  },
  {
    icon: <IconAward size={32} />,
    titulo: "Experiencia",
    descripcion: "Década y media liderando el sector constructivo.",
  },
  {
    icon: <IconClock size={32} />,
    titulo: "Puntualidad",
    descripcion: "Cumplimiento estricto de cronogramas de obra.",
  },
  {
    icon: <IconShieldCheck size={32} />,
    titulo: "Garantía",
    descripcion: "Respaldo total post-proyecto en cada servicio.",
  },
];

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

export const Diferenciales = () => {
  return (
    <section className="w-full py-20 bg-transparent">
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
              className="h1-badge text-secondary font-semibold tracking-widest uppercase"
            >
              Diferenciales
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-extrabold text-accent"
            >
              ¿Por qué elegirnos?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-black max-w-xs md:text-right"
          >
            Nuestro compromiso va más allá de la entrega, buscamos ser aliados estratégicos en el
            crecimiento de su inversión.
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
              <span className="text-accent">{item.icon}</span>
              <h3 className="font-bold text-secondary subtitle2">{item.titulo}</h3>
              <p className="text-black">{item.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
