"use client";

import { motion } from "framer-motion";
import { IconUserCheck, IconBulb, IconScale, IconRosetteAsterisk } from "@tabler/icons-react";

const valores = [
  {
    icon: IconRosetteAsterisk,
    title: "Calidad",
    description: "Excelencia en cada material y proceso ejecutado bajo estándares internacionales.",
  },
  {
    icon: IconUserCheck,
    title: "Compromiso",
    description: "Lealtad total hacia los objetivos de nuestros clientes y plazos establecidos.",
  },
  {
    icon: IconBulb,
    title: "Innovación",
    description: "Búsqueda constante de nuevas tecnologías y tendencias en cristalería.",
  },
  {
    icon: IconScale,
    title: "Responsabilidad",
    description: "Actuamos con integridad ética y responsabilidad social en cada entorno.",
  },
];

export const NosotrosValores = () => {
  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <small className="block mb-3 tracking-[0.35em] uppercase text-accent font-semibold">
            Fundamentos
          </small>
          <h2 className="text-accent">Nuestros Valores Centrales</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col"
              >
                <Icon size={32} className="text-accent mb-5" stroke={1.5} />
                <h5 className="text-accent mb-3">{valor.title}</h5>
                <p className="text-black">{valor.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
