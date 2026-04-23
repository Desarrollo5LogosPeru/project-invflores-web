"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import proy01 from "@/assets/proyectos/PROY01.webp";
import proy02 from "@/assets/proyectos/PROY02.webp";
import proy03 from "@/assets/proyectos/PROY03.webp";
import proy04 from "@/assets/proyectos/PROY04.webp";
import proy05 from "@/assets/proyectos/PROY05.webp";
import proy06 from "@/assets/proyectos/PROY06.webp";
import proy07 from "@/assets/proyectos/PROY07.webp";
import proy08 from "@/assets/proyectos/PROY08.webp";
import proy09 from "@/assets/proyectos/PROY09.webp";

const projects = [
  { title: "Proyecto Exitoso", image: proy01 },
  { title: "Proyecto Exitoso", image: proy02 },
  { title: "Proyecto Exitoso", image: proy03 },
  { title: "Proyecto Exitoso", image: proy04 },
  { title: "Proyecto Exitoso", image: proy05 },
  { title: "Proyecto Exitoso", image: proy06 },
  { title: "Proyecto Exitoso", image: proy07 },
  { title: "Proyecto Exitoso", image: proy08 },
  { title: "Proyecto Exitoso", image: proy09 },
];

export const ProjectsGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <small className="block mb-3 tracking-[0.35em] uppercase text-accent font-semibold">
            Portafolio
          </small>
          <h2 className="text-foreground mb-4">
            Proyectos que <span className="text-accent">hablan por nosotros</span>
          </h2>
          <p className="text-black max-w-xl mx-auto">
            Cada obra refleja nuestro compromiso con la calidad, la precisión técnica y el diseño
            arquitectónico de alto nivel.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <motion.div
                layoutId={`image-${index}`}
                className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]"
              >
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-light leading-none" style={{ fontSize: "48px" }}>
                    +
                  </span>
                </div>
              </motion.div>

              <motion.div layoutId={`content-${index}`} className="flex items-center gap-2">
                <IconCircleCheckFilled size={20} className="text-green-500 flex-shrink-0" />
                <p className="text-green-500 font-bold lead2">{project.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                layoutId={`image-${selected}`}
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
              >
                <img
                  src={projects[selected].image.src}
                  alt={projects[selected].title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
                <motion.div
                  layoutId={`content-${selected}`}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-center gap-2"
                >
                  <IconCircleCheckFilled size={22} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 font-bold  lead2">{projects[selected].title}</p>
                </motion.div>

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
