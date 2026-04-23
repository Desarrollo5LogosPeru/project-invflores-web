"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useEmpresa } from "@/store/empresa/empresa.store";

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

export const CtaBanner = () => {
  const { whatsapp } = useEmpresa();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: imagen se mueve más lento que el scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-20">
      {/* Imagen con parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          y,
          scale: 1.3,
        }}
      />

      {/* Overlay accent */}
      <div className="absolute inset-0 bg-accent/85" />

      {/* Contenido */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-5"
        style={{ paddingLeft: PADDING, paddingRight: PADDING }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-white font-extrabold max-w-2xl"
        >
          ¡Hagamos realidad tu próximo proyecto!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white max-w-md"
        >
          Nuestro equipo de expertos está listo para brindarte la asesoría técnica que necesitas.
        </motion.p>

        <motion.a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          <IconBrandWhatsapp size={20} />
          Escríbenos por WhatsApp
        </motion.a>
      </div>
    </section>
  );
};
