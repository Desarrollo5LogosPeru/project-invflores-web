import image from "@/assets/shared/NOSOTROSCTA.webp";

export const ProjectHero = () => {
  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden"
      style={{
        paddingTop: "calc(4rem + 102px)",
      }}
    >
      {/* Imagen optimizada con img nativo */}
      <img
        src={image.src}
        alt="Barandas y pasamanos en acero en Perú - Proyectos Realizados"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Badge h1 SEO con keyword ── */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
          <h1 className="h1-badge font-semibold tracking-widest uppercase text-white">
            Barandas y pasamanos en acero en Perú
          </h1>
        </div>

        {/* ── Título principal como h2 ── */}
        <h2 className="text-white mb-3 hero-title">
          Nuestros <span className="text-secondary">Proyectos</span>
        </h2>

        <div className="w-12 h-0.5 bg-secondary mb-4" />

        <p className="text-white max-w-lg">
          Más de 15 años ejecutando proyectos de construcción, acristalamiento y decoración en todo
          el Perú.
        </p>
      </div>
    </section>
  );
};
