"use client";

import { motion } from "framer-motion";
import image from "@/assets/shared/NOSOTROSCTA.webp";

export const FeaturedProject = () => {
  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Image */}
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <img
              src={image.src}
              alt="Torre Corporativa Platinum"
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Content */}
          <div className="bg-white p-10 flex flex-col justify-center">
            <small className="block mb-4 tracking-[0.35em] uppercase text-accent font-semibold">
              Proyecto Destacado
            </small>

            <h2 className="text-accent mb-4">Torre Corporativa Platinum</h2>

            <p className="text-black mb-8">
              Implementación integral de sistema de muro cortina con cristales de control solar de
              alto rendimiento. Un hito arquitectónico que combina eficiencia energética con una
              estética impecable en el centro financiero.
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <small className="block tracking-[0.25em] uppercase text-black mb-1">
                  Categoría
                </small>
                <p className="text-accent font-semibold">Muro Cortina</p>
              </div>
              <div>
                <small className="block tracking-[0.25em] uppercase text-black mb-1">
                  Ubicación
                </small>
                <p className="text-accent font-semibold">Lima, Perú</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
