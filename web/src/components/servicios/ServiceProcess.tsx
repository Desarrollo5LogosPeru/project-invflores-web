"use client";
import { motion } from "framer-motion";
import { useServiciosStore } from "@/store/servicios/servicios.store";
import { parseDescription } from "@/helpers/parseDescription";

const STEP_COLORS = ["bg-accent", "bg-secondary", "bg-primary", "bg-foreground"];

const ServiceProcessSkeleton = () => (
  <section className="w-full bg-transparent py-20">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-pulse flex flex-col items-center gap-3">
        <div className="h-8 w-56 bg-gray-200 rounded" />
        <div className="h-4 w-72 bg-gray-100 rounded" />
      </div>
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">
        <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-border z-0" />
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="animate-pulse relative z-10 flex flex-col items-center flex-1 px-4 gap-3"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-200" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-3 w-32 bg-gray-100 rounded" />
            <div className="h-3 w-24 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceProcess = () => {
  const { seccion03, seccion03Items, loading } = useServiciosStore();

  if (loading && !seccion03) return <ServiceProcessSkeleton />;

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-3">{seccion03?.title ?? "Nuestro Proceso"}</h2>
          <p className="text-muted-foreground">
            {seccion03?.description ?? "Metodología rigurosa para resultados excepcionales."}
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-border z-0" />

          {seccion03Items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center flex-1 px-4"
            >
              {/* Número */}
              <div
                className={`${STEP_COLORS[index % STEP_COLORS.length]} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md`}
              >
                <span className="text-white font-bold lead">{index + 1}</span>
              </div>

              {/* Título */}
              <h4 className="text-accent mb-2">{item.title}</h4>

              {/* Descripción */}
              {/* <p className="text-black max-w-[180px]">{item.description}</p> */}

              <p className="text-black max-w-[180px]">
                {parseDescription(item.description).descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
