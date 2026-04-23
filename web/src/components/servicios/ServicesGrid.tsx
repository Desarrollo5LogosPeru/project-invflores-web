"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServiciosStore } from "@/store/servicios/servicios.store";
import { getEnvs } from "@/helpers/getEnvs";
import { parseDescription } from "@/helpers/parseDescription";
import { useWhatsapp } from "@/hooks/shared/useWhatsapp";

const { NEXT_PUBLIC_API_URL_BASE } = getEnvs();

// Skeleton card
const ServiceCardSkeleton = () => (
  <div className="animate-pulse mb-16">
    <div className="flex flex-col lg:flex-row gap-8 mb-4">
      <div className="flex-1 flex flex-col gap-3">
        <div className="h-7 w-40 bg-gray-200 rounded" />
        <div className="space-y-2 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-3 bg-gray-100 rounded" style={{ width: `${85 - i * 8}%` }} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[420px] h-[260px] bg-gray-200 rounded-xl flex-shrink-0" />
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-36 bg-gray-200 rounded-lg" />
      ))}
    </div>
    <div className="border-b border-border mt-10" />
  </div>
);

// Card individual
const ServiceCard = ({
  servicio,
  index,
}: {
  servicio: {
    id: number;
    title: string;
    description: string;
    imagenes: { id: number; image: string }[];
  };
  index: number;
}) => {
  const { descripcion, items } = parseDescription(servicio.description);
  const [activeImg, setActiveImg] = useState(0);

  // 👇 Hook con el título del servicio en el mensaje
  const { url, handleClick } = useWhatsapp({
    mensaje: `Hola, me gustaría cotizar el servicio de *${servicio.title}*. ¿Me pueden dar más información?`,
  });

  // Rota automáticamente
  useEffect(() => {
    if (servicio.imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % servicio.imagenes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [servicio.imagenes.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="mb-16 last:mb-0"
    >
      {/* Fila superior: texto + imagen principal */}
      <div className="flex flex-col lg:flex-row gap-8 mb-4">
        {/* Izquierda: título + descripción */}
        <div className="flex-1">
          <h3 className="text-accent mb-4 h3-card" style={{ fontWeight: 700 }}>
            {servicio.title}
          </h3>

          {descripcion && <p className="text-black text-sm leading-relaxed mb-3">{descripcion}</p>}

          {items.length > 0 && (
            <ul className="space-y-1.5 mb-6">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {typeof item === "string" ? item : item.categoria}
                </li>
              ))}
            </ul>
          )}
          {/* 
          <button className="mt-2 px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-accent/90 transition-colors duration-200">
            Cotiza Ahora
          </button> */}
          <a
            href={url}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-accent/90 transition-colors duration-200"
          >
            Cotiza Ahora
          </a>
        </div>

        {/* Derecha: imagen principal rotativa */}
        {servicio.imagenes.length > 0 && (
          <div className="w-full lg:w-[520px] h-[380px] flex-shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={`${NEXT_PUBLIC_API_URL_BASE}/${servicio.imagenes[activeImg].image}`}
                alt={servicio.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Fila inferior: grid de 3 imágenes */}
      {servicio.imagenes.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {servicio.imagenes.map((img, i) => (
            <div
              key={img.id}
              className={`h-72 rounded-lg overflow-hidden cursor-pointer ring-2 transition-all duration-200 ${
                i === activeImg ? "ring-accent" : "ring-transparent"
              }`}
              onClick={() => setActiveImg(i)}
            >
              <img
                src={`${NEXT_PUBLIC_API_URL_BASE}/${img.image}`}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* Separador entre servicios */}
      <div className="border-b border-border mt-10" />
    </motion.div>
  );
};

export const ServicesGrid = () => {
  const { seccion02, seccion02Servicios, loading } = useServiciosStore();

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {loading && !seccion02 ? (
            <div className="animate-pulse flex flex-col items-center gap-3">
              <div className="h-4 w-36 bg-gray-200 rounded" />
              <div className="h-8 w-96 bg-gray-200 rounded" />
            </div>
          ) : (
            <>
              <span className="h1-badge uppercase tracking-widest text-secondary font-semibold">
                {seccion02?.badge ?? "Excelencia Constructiva"}
              </span>
              <h2 className="text-foreground mt-3 mb-4 max-w-2xl mx-auto">
                {seccion02?.title ?? "Todo lo que tu proyecto necesita"}
              </h2>
            </>
          )}
        </div>

        {/* Lista de servicios */}
        <div>
          {loading && seccion02Servicios.length === 0
            ? [1, 2, 3].map((i) => <ServiceCardSkeleton key={i} />)
            : seccion02Servicios.map((servicio, index) => (
                <ServiceCard key={servicio.id} servicio={servicio} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
