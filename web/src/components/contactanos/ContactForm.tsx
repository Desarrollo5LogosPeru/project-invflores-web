"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMapPin,
  IconPhone,
  IconBrandWhatsapp,
  IconChevronDown,
  IconCheck,
} from "@tabler/icons-react";

const services = [
  "Construcción",
  "Decoración de interiores",
  "Acristalamiento",
  "Instalación de mamparas",
  "Fachadas integrales",
  "Techos de policarbonato",
];

const ServiceSelect = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-1 relative" ref={ref}>
      <small className="tracking-[0.2em] uppercase text-black font-semibold">
        Tipo de servicio
      </small>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border-b border-border bg-transparent py-2 text-left focus:outline-none focus:border-accent transition-colors duration-200 group"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/50"}>
          {value || "Seleccione un servicio"}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-muted-foreground group-hover:text-accent transition-colors"
        >
          <IconChevronDown size={18} stroke={1.5} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
          >
            {services.map((service, index) => (
              <motion.button
                key={service}
                type="button"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: index * 0.04 }}
                onClick={() => {
                  onChange(service);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/5 transition-colors duration-150 group"
              >
                <span
                  className={`transition-colors duration-150 ${
                    value === service
                      ? "text-accent font-semibold"
                      : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {service}
                </span>
                {value === service && <IconCheck size={16} className="text-accent" stroke={2} />}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <section className="w-full bg-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border"
          >
            <h3 className="text-accent mb-8">Solicita una cotización</h3>

            <div className="flex flex-col gap-6">
              {/* Fila 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Nombre completo
                  </small>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Empresa
                  </small>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Constructora ABC"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Fila 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Teléfono
                  </small>
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+51 900 000 000"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Email
                  </small>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@empresa.com"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Select custom */}
              <ServiceSelect
                value={form.servicio}
                onChange={(val) => setForm({ ...form, servicio: val })}
              />

              {/* Mensaje */}
              <div className="flex flex-col gap-1">
                <small className="tracking-[0.2em] uppercase text-black font-semibold">
                  Mensaje
                </small>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors duration-200 tracking-widest uppercase"
              >
                Enviar Mensaje →
              </button>
            </div>
          </motion.div>

          {/* Right — Mapa + Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Mapa */}
            <div
              className="w-full rounded-2xl overflow-hidden bg-border"
              style={{ height: "300px" }}
            >
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-77.0!3d-12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzAwLjAiUyA3N8KwMDAnMDAuMCJX!5e0!3m2!1ses!2spe!4v1234567890"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1951.0213769983332!2d-77.09692935661519!3d-12.040577678338785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cff4ad39792f%3A0xa16a63a7dc2bd65c!2sINVERSIONES%20GENERALES%20J%26R%20FLORES%20SAC!5e0!3m2!1ses!2spe!4v1776953194798!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Dirección + Teléfonos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <IconMapPin size={20} className="text-accent" stroke={1.5} />
                </div>
                <div>
                  <p className="text-accent font-semibold mb-1">Dirección</p>
                  <p className="text-black">
                    Jr. Los Cristales 123,
                    <br />
                    Chorrillos, Lima - Perú
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <IconPhone size={20} className="text-accent" stroke={1.5} />
                </div>
                <div>
                  <p className="text-accent font-semibold mb-1">Teléfonos</p>
                  <p className="text-black">
                    951 338 531
                    <br />
                    973 718 240
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <IconBrandWhatsapp size={24} className="text-white" stroke={1.5} />
                </div>
                <div>
                  <small className="block tracking-[0.2em] uppercase text-muted-foreground font-semibold mb-0.5">
                    Atención Inmediata
                  </small>
                  <p className="text-accent font-semibold">Chat por WhatsApp</p>
                </div>
              </div>
              <a
                href="https://wa.me/51951338531"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl border border-border text-accent font-semibold hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200"
              >
                Iniciar Chat
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
