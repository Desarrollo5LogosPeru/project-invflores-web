// Versión optimizada para LCP sin next/image
"use client";
import { useServiciosStore } from "@/store/servicios/servicios.store";
import { getEnvs } from "@/helpers/getEnvs";
import image from "@/assets/shared/NOSOTROSCTA.webp";

export const ServiceHero = () => {
  const { seccion01, loading } = useServiciosStore();
  const { NEXT_PUBLIC_API_URL_BASE } = getEnvs();

  if (loading && !seccion01) return <ServiceHeroSkeleton />;

  // Determinar URL final
  const backgroundImageUrl = seccion01?.image
    ? `${NEXT_PUBLIC_API_URL_BASE}/${seccion01.image}`
    : image.src;

  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden"
      style={{
        paddingTop: "calc(4rem + 102px)",
      }}
    >
      {/* Imagen separada del background para mejor control */}
      <img
        src={backgroundImageUrl}
        alt={seccion01?.title ?? "Nuestros Servicios"}
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Badge h1 SEO ── */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
          <h1 className="h1-badge font-semibold tracking-widest uppercase text-white">
            Ventana serie 20, 25, 35, 42, 62 y 80 en Perú
          </h1>
        </div>

        {/* ── Título principal (ahora h2 con mismo tamaño que antes era h1) ── */}
        <h2 className="text-white mb-3 hero-title">{seccion01?.title ?? "Nuestros Servicios"}</h2>

        <div className="w-12 h-0.5 bg-secondary mb-4" />

        <p className="text-white max-w-lg">
          {seccion01?.description ??
            "Soluciones integrales en construcción, decoración y acristalamiento con los más altos estándares de calidad."}
        </p>
      </div>
    </section>
  );
};

const ServiceHeroSkeleton = () => {
  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden bg-gray-800 animate-pulse"
      style={{ paddingTop: "calc(4rem + 102px)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 bg-white/20 rounded-full mb-6" />
        <div className="h-10 w-64 bg-white/20 rounded mb-3" />
        <div className="w-12 h-0.5 bg-secondary mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-96 bg-white/20 rounded" />
          <div className="h-4 w-72 bg-white/20 rounded" />
        </div>
      </div>
    </section>
  );
};
