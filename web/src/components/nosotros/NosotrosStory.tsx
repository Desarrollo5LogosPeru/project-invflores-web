"use client";

import { motion } from "framer-motion";

export const NosotrosStory = () => {
  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — imagen + badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80"
                alt="Equipo J&R Flores"
                className="w-full h-full object-cover"
              />

              {/* Badge dentro de la imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 right-4 bg-accent rounded-2xl px-6 py-4 text-center shadow-xl"
              >
                <p className="text-white font-bold leading-none mb-1" style={{ fontSize: "36px" }}>
                  15
                </p>
                <small className="text-white tracking-[0.15em] uppercase font-semibold">
                  Años de Excelencia
                </small>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent mb-6">
              Construyendo con <span className="text-secondary">precisión y calidad</span> desde
              2010.
            </h2>

            <p className="text-black mb-4">
              En <strong className="text-foreground">Inversiones Generales J&R Flores SAC</strong>,
              nuestra historia está escrita sobre la base del compromiso y la precisión. Con 15 años
              de trayectoria en el mercado peruano, nos hemos consolidado como referentes en
              soluciones arquitectónicas de cristal y estructuras metálicas.
            </p>

            <p className="text-black mb-10">
              Nacimos con la visión de transformar espacios, brindando seguridad y estética a
              proyectos de gran envergadura a nivel nacional. Cada obra es para nosotros un
              testimonio de nuestra dedicación al detalle y la calidad técnica.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-accent font-bold mb-1">500+</h3>
                <small className="tracking-[0.2em] uppercase text-black font-semibold">
                  Proyectos Completados
                </small>
              </div>
              <div>
                <h3 className="text-accent font-bold mb-1">100%</h3>
                <small className="tracking-[0.2em] uppercase text-black font-semibold">
                  Clientes Satisfechos
                </small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
