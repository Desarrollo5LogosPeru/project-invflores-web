export const ProjectHero = () => {
  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "calc(4rem + 102px)",
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-accent/60 to-secondary/50" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white h1-badge uppercase tracking-widest">
          Inversiones J&R Flores
        </span> */}

        <h1 className="text-white mb-3">
          Nuestros <span className="text-secondary">Proyectos</span>
        </h1>

        <div className="w-12 h-0.5 bg-secondary mb-4" />

        <p className="text-white max-w-lg">
          Más de 15 años ejecutando proyectos de construcción, acristalamiento y decoración en todo
          el Perú.
        </p>
      </div>
    </section>
  );
};
