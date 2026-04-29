import image from "@/assets/shared/CONTACTHERO.webp";

export const ContactHero = () => {
  return (
    <section
      className="relative min-h-[320px] flex items-center py-16 w-full overflow-hidden"
      style={{
        paddingTop: "calc(4rem + 102px)",
      }}
    >
      <img
        src={image.src}
        alt="Contacto - Inversiones J&R Flores"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/30 to-secondary/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge h1 (opcional, pero manteniendo coherencia) */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
          <h1 className="h1-badge font-semibold tracking-widest uppercase text-white">
            Contáctanos | Inversiones Generales J&R Flores SAC
          </h1>
        </div>

        {/* Título principal como h2 (mismo tamaño que antes) */}
        <h2 className="text-white mb-3 hero-title">¿Tienes un proyecto en mente?</h2>

        <div className="w-12 h-0.5 bg-secondary mb-4" />

        <p className="text-white max-w-lg">
          Estamos listos para materializar su visión arquitectónica con la precisión y elegancia que
          nos caracteriza.
        </p>
      </div>
    </section>
  );
};
