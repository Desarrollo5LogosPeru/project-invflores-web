/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMapPin,
  IconPhone,
  IconBrandWhatsapp,
  IconChevronDown,
  IconCheck,
  IconSend,
} from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactSchema, type ContactSchemaType } from "@/schemas/contact.schema";
import { FormAlert } from "@/ui/FormAlert";
import { getEnvs } from "@/helpers/getEnvs";

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_RECAPTCHA_SITE_KEY } = getEnvs();

const AFFAIRS = [
  "Construcción",
  "Decoración de interiores",
  "Acristalamiento",
  "Instalación de mamparas",
  "Fachadas integrales",
  "Techos de policarbonato",
];

// ─── AffairSelect ────────────────────────────────────────────────────────────
const AffairSelect = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-1 relative" ref={ref}>
      <small className="tracking-[0.2em] uppercase text-black font-semibold">Asunto</small>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border-b border-border bg-transparent py-2 text-left focus:outline-none focus:border-accent transition-colors duration-200 group"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/50"}>
          {value || "Seleccione un asunto"}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-muted-foreground group-hover:text-accent transition-colors"
        >
          <IconChevronDown size={18} stroke={1.5} />
        </motion.div>
      </button>

      {error && <small className="text-red-500">{error}</small>}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
          >
            {AFFAIRS.map((affair, index) => (
              <motion.button
                key={affair}
                type="button"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: index * 0.04 }}
                onClick={() => {
                  onChange(affair);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/5 transition-colors duration-150 group"
              >
                <span
                  className={`transition-colors duration-150 ${
                    value === affair
                      ? "text-accent font-semibold"
                      : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {affair}
                </span>
                {value === affair && <IconCheck size={16} className="text-accent" stroke={2} />}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── ContactForm ─────────────────────────────────────────────────────────────
export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      affair: "",
      message: "",
    },
  });

  const affairValue = watch("affair");

  const onSubmit = async (data: ContactSchemaType) => {
    if (!captchaToken) {
      setAlert({ type: "warning", message: "Por favor completa el captcha." });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/enviar-contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captcha: captchaToken }),
      });
      if (!res.ok) throw new Error();
      reset();
      setAlert({ type: "success", message: "¡Mensaje enviado! Te contactaremos pronto." });
    } catch {
      setAlert({ type: "error", message: "Error al enviar el formulario. Intenta de nuevo." });
    } finally {
      setIsLoading(false);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setTimeout(() => setAlert(null), 4000);
    }
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
            <h2 className="text-accent mb-8 h2-card">Solicita una cotización</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Fila 1 — Nombre + Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Nombre completo
                  </small>
                  <input
                    {...register("fullName")}
                    placeholder="Juan Pérez"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.fullName && (
                    <small className="text-red-500">{errors.fullName.message}</small>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Empresa
                  </small>
                  <input
                    {...register("company")}
                    placeholder="Constructora ABC"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.company && (
                    <small className="text-red-500">{errors.company.message}</small>
                  )}
                </div>
              </div>

              {/* Fila 2 — Teléfono + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Teléfono
                  </small>
                  <input
                    {...register("phone")}
                    placeholder="+51 900 000 000"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
                </div>

                <div className="flex flex-col gap-1">
                  <small className="tracking-[0.2em] uppercase text-black font-semibold">
                    Email
                  </small>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="correo@empresa.com"
                    className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                </div>
              </div>

              {/* Affair Select */}
              <AffairSelect
                value={affairValue}
                onChange={(val) => setValue("affair", val, { shouldValidate: true })}
                error={errors.affair?.message}
              />

              {/* Mensaje */}
              <div className="flex flex-col gap-1">
                <small className="tracking-[0.2em] uppercase text-black font-semibold">
                  Mensaje
                </small>
                <textarea
                  {...register("message")}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && <small className="text-red-500">{errors.message.message}</small>}
              </div>

              {/* Captcha + Botón */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token: any) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors duration-200 tracking-widest uppercase justify-center disabled:opacity-60"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Mensaje <IconSend size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Alert */}
              <AnimatePresence>
                {alert && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FormAlert type={alert.type} message={alert.message} />
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right — Mapa + Info (sin cambios) */}
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
                  <small className="text-black">
                    Av. 1 de Mayo 295,
                    <br />
                    Carmen de La Legua - Reynoso 07006, Perú
                  </small>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <IconPhone size={20} className="text-accent" stroke={1.5} />
                </div>
                <div>
                  <p className="text-accent font-semibold mb-1">Teléfonos</p>
                  <small className="text-black">
                    951 338 531
                    <br />
                    973 718 240
                  </small>
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
