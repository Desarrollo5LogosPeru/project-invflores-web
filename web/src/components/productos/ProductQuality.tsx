"use client";
import { motion } from "framer-motion";
import { useProductosStore } from "@/store/productos/productos.store";
import { IconRosette, IconSun, IconTemperature, IconShieldCheck } from "@tabler/icons-react";

const ICONS = [IconRosette, IconSun, IconTemperature, IconShieldCheck];

const QualitySkeleton = () => (
  <section className="w-full bg-accent py-20">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
        <div className="flex flex-col gap-4">
          <div className="h-3 w-36 bg-white/20 rounded" />
          <div className="h-8 w-72 bg-white/20 rounded" />
          <div className="space-y-2 mt-2">
            <div className="h-3 w-full bg-white/10 rounded" />
            <div className="h-3 w-5/6 bg-white/10 rounded" />
            <div className="h-3 w-4/6 bg-white/10 rounded" />
          </div>
          <div className="w-12 h-0.5 bg-secondary mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-6 h-36" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const ProductQuality = () => {
  const { seccion03, seccion03Items, loading } = useProductosStore();

  if (loading && !seccion03) return <QualitySkeleton />;

  return (
    <section className="w-full bg-accent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <small className="block mb-4 tracking-[0.35em] uppercase text-primary font-semibold">
              {seccion03?.badge ?? "Excelencia Constructiva"}
            </small>
            <h2 className="text-white mb-6">
              {seccion03?.title ?? "Compromiso con la Calidad Invariable"}
            </h2>
            <p className="text-white mb-8 max-w-md">
              {seccion03?.description ??
                "En J&R Flores SAC, seleccionamos meticulosamente cada material."}
            </p>
            <div className="w-12 h-0.5 bg-secondary" />
          </motion.div>

          {/* Derecha — grid 2x2 */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {seccion03Items.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
                >
                  <Icon size={28} className="text-primary mb-4" stroke={1.5} />
                  <h5 className="text-white mb-2">{item.title}</h5>
                  <p className="text-white text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
