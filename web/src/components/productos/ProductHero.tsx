"use client";
import { useEffect } from "react";
import { useProductosStore } from "@/store/productos/productos.store";
import { getEnvs } from "@/helpers/getEnvs";

export const ProductHero = () => {
  const { seccion01, loading /* fetchAll */ } = useProductosStore();
  const { NEXT_PUBLIC_API_URL_BASE } = getEnvs();

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  if (loading && !seccion01) return <ProductHeroSkeleton />;

  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden"
      style={{
        backgroundImage: seccion01?.image
          ? `url(${NEXT_PUBLIC_API_URL_BASE}/${seccion01.image})`
          : "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "calc(4rem + 102px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white mb-3">{seccion01?.title ?? "Nuestros Productos"}</h1>

        <div className="w-12 h-0.5 bg-secondary mb-4" />

        <p className="text-white max-w-lg">
          {seccion01?.description ??
            "Materiales de primera calidad en vidrio, aluminio, PVC y decoración para cada tipo de proyecto."}
        </p>
      </div>
    </section>
  );
};

const ProductHeroSkeleton = () => {
  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden bg-gray-800 animate-pulse"
      style={{ paddingTop: "calc(4rem + 102px)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
