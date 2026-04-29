"use client";

import { motion } from "framer-motion";
import { IconTarget, IconEye } from "@tabler/icons-react";

export const NosotrosMisionVision = () => {
  return (
    <section className="w-full bg-transparent py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <small className="block mb-3 tracking-[0.35em] uppercase text-accent font-semibold">
            Quiénes somos
          </small>
          <h2 className="text-foreground">
            Propósito y <span className="text-accent">dirección</span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">
          {/* Card Misión */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 shadow-md border border-border w-full md:w-[420px] md:self-start"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <IconTarget size={26} className="text-accent" stroke={1.5} />
            </div>
            <h3 className="text-accent mb-4 h3-card">Nuestra Misión</h3>
            <p className="text-black leading-relaxed">
              Proveer soluciones integrales en construcción y acabados de cristal que superen las
              expectativas de nuestros clientes, garantizando durabilidad, seguridad y una estética
              vanguardista en cada centímetro cuadrado.
            </p>
          </motion.div>

          {/* Líneas SVG — solo desktop */}
          <div className="hidden md:flex items-center justify-center w-32 shrink-0">
            <svg
              viewBox="0 0 120 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-48"
            >
              <motion.line
                x1="0"
                y1="60"
                x2="120"
                y2="100"
                stroke="#ADE7FE"
                strokeWidth="2"
                strokeDasharray="150"
                strokeDashoffset={150}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.line
                x1="0"
                y1="140"
                x2="120"
                y2="100"
                stroke="#5AC7FF"
                strokeWidth="2"
                strokeDasharray="150"
                strokeDashoffset={150}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.circle
                cx="120"
                cy="100"
                r="5"
                fill="#0000AC"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.2 }}
              />
            </svg>
          </div>

          {/* Card Visión */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-10 shadow-md border border-border w-full md:w-[420px] md:self-end"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <IconEye size={26} className="text-secondary" stroke={1.5} />
            </div>
            <h3 className="text-accent mb-4 h3-card">Nuestra Visión</h3>
            <p className="text-black leading-relaxed">
              Ser reconocidos a nivel nacional como la empresa líder en innovación arquitectónica de
              vidrio, destacando por nuestra capacidad técnica, ética profesional y contribución al
              desarrollo infraestructural del Perú.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
