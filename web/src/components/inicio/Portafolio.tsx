"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconX, IconCircleCheckFilled } from "@tabler/icons-react";

import proy04 from "@/assets/proyectos/PROY04.webp";
import proy05 from "@/assets/proyectos/PROY05.webp";
import proy06 from "@/assets/proyectos/PROY06.webp";
import proy07 from "@/assets/proyectos/PROY07.webp";
import proy08 from "@/assets/proyectos/PROY08.webp";
import proy09 from "@/assets/proyectos/PROY09.webp";

const portfolio = [
  { id: 1, src: proy04.src, alt: "Proyecto Exitoso" },
  { id: 2, src: proy05.src, alt: "Proyecto Exitoso" },
  { id: 3, src: proy06.src, alt: "Proyecto Exitoso" },
  { id: 4, src: proy07.src, alt: "Proyecto Exitoso" },
  { id: 5, src: proy08.src, alt: "Proyecto Exitoso" },
  { id: 6, src: proy09.src, alt: "Proyecto Exitoso" },
];

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

const filas = [
  { grande: portfolio[0], pequenas: [portfolio[1], portfolio[2]], reverse: false },
  { grande: portfolio[3], pequenas: [portfolio[4], portfolio[5]], reverse: true },
];

interface Item {
  id: number;
  src: string;
  alt: string;
}

export const Portafolio = () => {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <section className="w-full py-20 bg-transparent">
      <div style={{ paddingLeft: PADDING, paddingRight: PADDING }}>
        {/* Título */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-extrabold text-accent mb-10"
        >
          Portafolio de Excelencia
        </motion.h3>

        {/* Filas */}
        <div className="flex flex-col gap-4">
          {filas.map((fila, fi) => (
            <div
              key={fi}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                fila.reverse ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Foto grande */}
              <motion.div
                layoutId={`img-${fila.grande.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelected(fila.grande)}
                className="relative overflow-hidden rounded-xl cursor-pointer group md:[direction:ltr] h-[300px] md:h-[400px]"
              >
                <img
                  src={fila.grande.src}
                  alt={fila.grande.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <IconPlus size={22} className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* 2 fotos pequeñas */}
              <div className="flex flex-col gap-4 md:[direction:ltr] md:h-[400px]">
                {fila.pequenas.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layoutId={`img-${item.id}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.12 }}
                    onClick={() => setSelected(item)}
                    className="relative overflow-hidden rounded-xl cursor-pointer group flex-1 h-[200px] md:h-auto"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                        <IconPlus size={18} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
              <motion.div
                layoutId={`img-${selected.id}`}
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
              >
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full max-h-[80vh] object-cover"
                />

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
                >
                  <IconX size={18} />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.15 }}
                  className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5 flex items-center gap-2"
                >
                  <IconCircleCheckFilled size={22} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 font-medium">{selected.alt}</p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
