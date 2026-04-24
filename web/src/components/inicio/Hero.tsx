"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import image01 from "@/assets/inicio/HERO01.webp";
import image02 from "@/assets/inicio/HERO02.webp";

const slides = [
  {
    image: image01.src,
    titulo: "Liderando Proyectos con",
    destacado: "Excelencia y Precisión",
    descripcion:
      "Construcción, decoración y acristalamiento de alta calidad en todo el Perú. Transformamos visiones en estructuras sólidas y modernas.",
  },
  {
    image: image02.src,
    titulo: "Soluciones Integrales en",
    destacado: "Acristalamiento Moderno",
    descripcion:
      "Instalamos vidrios y cristales con los más altos estándares de calidad. Diseño, funcionalidad y elegancia en cada proyecto.",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
    titulo: "15 Años Construyendo",
    destacado: "Confianza y Calidad",
    descripcion:
      "Más de una década ejecutando proyectos de construcción y decoración a nivel nacional con experiencia, compromiso y precisión.",
  },
  {
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1920&q=80",
    titulo: "Decoración que",
    destacado: "Transforma Espacios",
    descripcion:
      "Creamos ambientes únicos combinando materiales premium con diseño contemporáneo. Tu visión, nuestra ejecución.",
  },
];

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";
const INTERVAL = 5000;

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      {/* ── Imagen de fondo ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slide.image}')` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* ── Overlay degradé ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/50 to-secondary/20" />

      {/* ── Flecha izquierda ── */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-12 bottom-12 z-20 w-10 h-10 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200"
      >
        <IconChevronLeft size={20} />
      </button>

      {/* ── Flecha derecha ── */}
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-12 bottom-12 z-20 w-10 h-10 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200"
      >
        <IconChevronRight size={20} />
      </button>

      {/* ── Contenido centrado ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center gap-6 w-full h-full"
        style={{ paddingLeft: PADDING, paddingRight: PADDING }}
      >
        <div className="max-w-3xl flex flex-col items-center gap-6">
          {/* Título */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`titulo-${current}`}
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-white font-extrabold leading-tight"
            >
              {slide.titulo} <span className="text-secondary">{slide.destacado}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Descripción */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="text-white"
            >
              {slide.descripcion}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              href="/servicios"
              className="bg-accent text-accent-foreground px-6 py-2.5 font-semibold hover:bg-accent/80 transition-colors duration-200"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="border border-white text-white px-6 py-2.5 font-semibold hover:bg-white hover:text-accent transition-colors duration-200"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>

        {/* ── Dots ── */}
        <div className="absolute bottom-8 flex items-center gap-2.5 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? "#5AC7FF" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
