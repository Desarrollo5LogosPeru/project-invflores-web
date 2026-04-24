"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

import image from "@/assets/proyectos/PROY08.webp";

export const SobreNosotros = () => {
  return (
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
            Compromiso con la Integridad Estructural y Estética
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-black max-w-md"
          >
            En Inversiones Generales J&R Flores SAC, transformamos visiones en realidades tangibles.
            Nuestra trayectoria se basa en la precisión técnica y el uso de materiales de la más
            alta calidad para garantizar durabilidad y diseño vanguardista.
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
            alt="Estructura metálica interior"
            className="w-full h-72 md:h-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
