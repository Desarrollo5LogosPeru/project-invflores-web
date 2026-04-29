"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useWhatsapp } from "@/hooks/shared/useWhatsapp";
import image from "@/assets/shared/NOSOTROSCTA.webp";

export const NosotrosCTA = () => {
  const { numero, handleClick } = useWhatsapp();

  const proyectoMessage =
    "Hola, quiero iniciar un proyecto con sus servicios. ¿Podrían brindarme más información?";

  const whatsappLink = `https://wa.me/${numero}?text=${encodeURIComponent(proyectoMessage)}`;

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: "320px" }}
        >
          {/* Contenedor parallax con Tailwind */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Overlay azul */}
          <div className="absolute inset-0 z-10 bg-accent/50" />

          {/* Contenido */}
          <div className="relative z-20 flex flex-col justify-center h-full p-10 md:p-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-white mb-4">Trabajemos juntos</h2>
              <p className="text-white mb-10">
                Transformamos sus planos en realidades tangibles con la maestría que solo 15 años de
                experiencia pueden ofrecer. Solicite una asesoría hoy mismo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  onClick={handleClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Iniciar Proyecto
                </a>
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:text-accent transition-colors duration-200"
                >
                  Ver Catálogo
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
