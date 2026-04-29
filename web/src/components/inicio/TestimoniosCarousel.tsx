"use client";

import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";

interface Testimonio {
  name: string;
  cargo: string;
  empresa: string;
  testimonio: string;
}

const testimonios: Testimonio[] = [
  {
    name: "Carlos Mendoza",
    cargo: "Gerente General",
    empresa: "Constructora Pacífico",
    testimonio:
      "Excelente trabajo en la fachada de vidrio de nuestro edificio. Cumplieron con los plazos y la calidad superó nuestras expectativas.",
  },
  {
    name: "María Quispe",
    cargo: "Directora de Proyectos",
    empresa: "Inmobiliaria Del Sur",
    testimonio:
      "Llevamos 3 proyectos con ellos y siempre demuestran profesionalismo, puntualidad y acabados de primera.",
  },
  {
    name: "Roberto Silva",
    cargo: "Arquitecto",
    empresa: "Grupo Edificar",
    testimonio:
      "Su dominio del acristalamiento moderno es impresionante. Lograron exactamente la estética que buscábamos para el proyecto.",
  },
  {
    name: "Ana Torres",
    cargo: "Administradora",
    empresa: "Centro Empresarial Lima",
    testimonio:
      "Contratamos sus servicios de decoración y quedamos muy satisfechos. Personal muy amable y trabajos impecables.",
  },
  {
    name: "Luis Paredes",
    cargo: "Ingeniero Civil",
    empresa: "Obras & Proyectos Perú",
    testimonio:
      "15 años de experiencia se notan en cada detalle. Son nuestra primera opción para trabajos de construcción y vidriería.",
  },
  {
    name: "Sandra Flores",
    cargo: "CEO",
    empresa: "Vidriería Nacional",
    testimonio:
      "Rapidez, calidad y precio justo. Tres palabras que definen perfectamente a Inversiones J&R Flores SAC.",
  },
];

const track: Testimonio[] = [...testimonios, ...testimonios, ...testimonios];

// Obtiene las 2 primeras letras: primera del nombre + primera del apellido
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

// Colores de avatar basados en el índice
const avatarColors = ["bg-accent text-white", "bg-secondary text-accent", "bg-primary text-accent"];

export const TestimoniosCarousel = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        .testimonios-track {
          animation: marquee 40s linear infinite;
        }
        .testimonios-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative overflow-hidden pt-20 pb-36 bg-transparent">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-12 text-center flex flex-col gap-2"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
            paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
          }}
        >
          <small className="block tracking-widest uppercase text-secondary font-semibold">
            Testimonios
          </small>
          <h2 className="font-extrabold text-accent">
            Lo que dicen nuestros <span className="text-secondary">clientes</span>
          </h2>
        </motion.div>

        {/* Fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{
            background: "linear-gradient(to right, var(--background) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 100%)" }}
        />

        {/* Track */}
        <div className="overflow-hidden">
          <div className="testimonios-track flex w-max items-stretch gap-5 px-6">
            {track.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 bg-white border border-border rounded-2xl p-8 w-96 shrink-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Quote icon */}
                <IconQuote size={28} className="text-secondary" />

                {/* Testimonio */}
                <p className="text-black leading-relaxed flex-1">&quot;{item.testimonio}&quot;</p>

                {/* Autor */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {/* Avatar con iniciales */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold ${
                      avatarColors[i % avatarColors.length]
                    }`}
                    style={{ fontFamily: "var(--font-raleway)", fontSize: "15px" }}
                  >
                    {getInitials(item.name)}
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <small className="font-bold text-accent">{item.name}</small>
                    <small className="text-black">
                      {item.cargo} · {item.empresa}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
