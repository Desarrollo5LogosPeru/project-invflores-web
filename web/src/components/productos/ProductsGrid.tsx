"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCircleCheck } from "@tabler/icons-react";
import { useProductosStore } from "@/store/productos/productos.store";
import { getEnvs } from "@/helpers/getEnvs";
import { parseDescription } from "@/helpers/parseDescription";
import { useWhatsapp } from "@/hooks/shared/useWhatsapp";

const { NEXT_PUBLIC_API_URL_BASE } = getEnvs();

const ProductCardSkeleton = () => (
  <div className="animate-pulse mb-16">
    <div className="flex flex-col lg:flex-row gap-8 mb-4">
      <div className="flex-1 flex flex-col gap-3">
        <div className="h-4 w-24 bg-gray-200 rounded-full" />
        <div className="h-7 w-48 bg-gray-200 rounded" />
        <div className="space-y-2 mt-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 bg-gray-100 rounded" style={{ width: `${88 - i * 8}%` }} />
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="h-3 bg-gray-100 rounded" style={{ width: `${70 - i * 5}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[420px] h-[280px] bg-gray-200 rounded-xl flex-shrink-0" />
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-52 bg-gray-200 rounded-lg" />
      ))}
    </div>
    <div className="border-b border-border mt-10" />
  </div>
);

const RotatingImage = ({ imagenes }: { imagenes: { id: number; image: string }[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagenes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <div className="w-full lg:w-[420px] h-[280px] flex-shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={`${NEXT_PUBLIC_API_URL_BASE}/${imagenes[current].image}`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      {imagenes.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-4" : "bg-white/50 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({
  producto,
  index,
}: {
  producto: {
    id: number;
    title: string;
    description: string;
    imagenes: { id: number; image: string }[];
  };
  index: number;
}) => {
  const { descripcion, items } = parseDescription(producto.description);
  const [activeImg, setActiveImg] = useState(0);

  const { url, handleClick } = useWhatsapp({
    mensaje: `Hola, me gustaría cotizar el servicio de *${producto.title}*. ¿Me pueden dar más información?`,
  });

  useEffect(() => {
    if (producto.imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % producto.imagenes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [producto.imagenes.length]);

  return (
    <motion.div
      id={`producto-${producto.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="mb-16 last:mb-0 scroll-mt-28"
    >
      {/* Fila superior: texto + imagen principal */}
      <div className="flex flex-col lg:flex-row gap-8 mb-4">
        {/* Izquierda: título + descripción + features */}
        <div className="flex-1">
          <h3 className="text-accent mb-3 h3-card" style={{ fontWeight: 700 }}>
            {producto.title}
          </h3>

          {descripcion && <p className="text-black  leading-relaxed mb-4">{descripcion}</p>}

          {items.length > 0 && (
            <div className="space-y-2 mb-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <IconCircleCheck size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-black text-sm">
                    {typeof item === "string" ? item : item.categoria}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* <button className="px-6 py-2.5 rounded-full border border-border text-accent text-xs uppercase tracking-widest font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">
            Consultar
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
        {producto.imagenes.length > 0 && (
          <div className="w-full lg:w-[520px] h-[380px] flex-shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={`${NEXT_PUBLIC_API_URL_BASE}/${producto.imagenes[activeImg].image}`}
                alt={producto.title}
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

      {/* Fila inferior: grid de 3 imágenes clickeables */}
      {producto.imagenes.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {producto.imagenes.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setActiveImg(i)}
              className={`h-72 rounded-lg overflow-hidden cursor-pointer ring-2 transition-all duration-200 ${
                i === activeImg ? "ring-accent" : "ring-transparent"
              }`}
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

      <div className="border-b border-border mt-10" />
    </motion.div>
  );
};

export const ProductsGrid = () => {
  const { seccion02, seccion02Productos, loading } = useProductosStore();

  useEffect(() => {
    if (loading || seccion02Productos.length === 0) return;
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // pequeño delay para que renderice primero
    }
  }, [loading, seccion02Productos]);

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {loading && !seccion02 ? (
            <div className="animate-pulse flex flex-col items-center gap-3">
              <div className="h-4 w-36 bg-gray-200 rounded" />
              <div className="h-8 w-96 bg-gray-200 rounded" />
              <div className="h-4 w-72 bg-gray-100 rounded" />
            </div>
          ) : (
            <>
              <small className="block mb-3 tracking-[0.35em] uppercase text-accent font-semibold">
                {seccion02?.badge ?? "Catálogo de productos"}
              </small>
              <h2 className="text-foreground mb-4">
                {seccion02?.title ?? "Soluciones para cada tipo de proyecto"}
              </h2>
            </>
          )}
        </div>

        {/* Lista de productos */}
        <div>
          {loading && seccion02Productos.length === 0
            ? [1, 2, 3].map((i) => <ProductCardSkeleton key={i} />)
            : seccion02Productos.map((producto, index) => (
                <ProductCard key={producto.id} producto={producto} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
