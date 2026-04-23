"use client";
import { motion } from "framer-motion";
import { useServiciosStore } from "@/store/servicios/servicios.store";
import { getEnvs } from "@/helpers/getEnvs";

const { NEXT_PUBLIC_API_URL_BASE } = getEnvs();

const track = (brands: { name: string; image: string }[]) => [...brands, ...brands, ...brands];

export const BrandsCarousel = () => {
  const { seccion04, seccion04Brands, loading } = useServiciosStore();

  const items = track(
    seccion04Brands.map((b) => ({
      name: b.name,
      image: `${NEXT_PUBLIC_API_URL_BASE}/${b.image}`,
    })),
  );

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        .brands-track {
          animation: marquee 25s linear infinite;
        }
        .brands-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative overflow-hidden pt-16 pb-28 bg-transparent mb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 mb-12 text-center"
        >
          {loading && !seccion04 ? (
            <div className="animate-pulse flex flex-col items-center gap-3">
              <div className="h-3 w-28 bg-gray-200 rounded" />
              <div className="h-8 w-80 bg-gray-200 rounded" />
            </div>
          ) : (
            <>
              <small className="mb-3 block tracking-[0.35em] uppercase text-accent font-semibold">
                {seccion04?.badge ?? "Materiales & Marcas"}
              </small>
              <h2 className="text-foreground">
                {seccion04?.title ?? "Trabajamos con las mejores marcas"}
              </h2>
            </>
          )}
        </motion.div>

        {/* Skeleton carrusel */}
        {loading && seccion04Brands.length === 0 ? (
          <div className="flex gap-6 px-8 animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="min-w-[180px] h-28 bg-gray-200 rounded-xl flex-shrink-0" />
            ))}
          </div>
        ) : (
          <div className="relative z-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
              }}
            />

            <div className="overflow-hidden">
              <div className="brands-track flex w-max">
                {items.map((brand, i) => (
                  <div
                    key={i}
                    className="group flex min-w-[180px] md:min-w-[220px] items-center justify-center border-r px-6 md:px-10 py-4"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <div className="flex h-28 w-40 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                      {/* <img
                        src={brand.image}
                        alt={brand.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      /> */}

                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
