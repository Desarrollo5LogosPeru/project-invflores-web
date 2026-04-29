"use client";

import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconChevronRight,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEmpresa } from "@/store/empresa/empresa.store";
import { useProductosStore } from "@/store/productos/productos.store";
import { Container } from "@/ui/Container";
import LOGOWHITE from "@/assets/logo/LOGO-WHITE.png";
import LogosPeruLogo from "@/assets/logo/LOGOSPERU-OFF.webp";
import { useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contáctanos", href: "/contacto" },
];

export const Footer = () => {
  const { nombre, telefono, email, facebook, tiktok, whatsapp, direccion, instagram } =
    useEmpresa();
  const { seccion02Productos, loading, fetchAll } = useProductosStore();

  useEffect(() => {
    fetchAll();
  }, []);

  const telefonos = Array.isArray(telefono) ? telefono : [telefono];
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Fondo degradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-secondary/70" />

      {/* Textura sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 py-16"
      >
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Col 1 — Logo + descripción */}
            <div className="flex flex-col gap-5">
              <img src={LOGOWHITE.src} alt="Logo" className="h-16 w-auto object-contain" />
              <p className="text-white leading-relaxed">
                Más de 15 años transformando espacios con soluciones integrales en construcción,
                decoración y acristalamiento en todo el Perú.
              </p>
              <div className="flex items-center gap-3">
                {facebook && (
                  <Link
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <IconBrandFacebook size={17} />
                  </Link>
                )}
                {tiktok && (
                  <Link
                    href={tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <IconBrandTiktok size={17} />
                  </Link>
                )}
                {instagram && (
                  <Link
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <IconBrandInstagram size={17} />
                  </Link>
                )}
                {whatsapp && (
                  <Link
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <IconBrandWhatsapp size={17} />
                  </Link>
                )}
              </div>
            </div>

            {/* Col 2 — Navegación */}
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold tracking-wide subtitle2">Navegación</p>
              <div className="w-8 h-0.5 bg-secondary rounded-full" />
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 text-white transition-colors duration-200 group"
                    >
                      <IconChevronRight
                        size={14}
                        className="text-secondary group-hover:translate-x-1 transition-transform duration-200"
                      />
                      <p>{link.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Productos */}
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold tracking-wide subtitle2">Productos</p>
              <div className="w-8 h-0.5 bg-secondary rounded-full" />

              {loading && seccion02Productos.length === 0 ? (
                // Skeleton
                <ul className="flex flex-col gap-2.5 animate-pulse">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-white/20 shrink-0" />
                      <div
                        className="h-3 bg-white/20 rounded"
                        style={{ width: `${70 + i * 5}%` }}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col gap-2.5">
                  {/* {seccion02Productos.map((producto) => (
                    <li key={producto.id} className="flex items-center gap-1.5 text-white">
                      <IconChevronRight size={14} className="text-secondary shrink-0" />
                      <p>{producto.title}</p>
                    </li>
                  ))} */}

                  {seccion02Productos.map((producto) => (
                    <li key={producto.id} className="flex items-center gap-1.5 text-white">
                      <IconChevronRight size={14} className="text-secondary shrink-0" />
                      <Link
                        href={`/productos#producto-${producto.id}`}
                        className="hover:text-secondary transition-colors duration-200"
                      >
                        <p>{producto.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Col 4 — Contacto */}
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold tracking-wide subtitle2">Contacto</p>
              <div className="w-8 h-0.5 bg-secondary rounded-full" />
              <div className="flex flex-col gap-4">
                {telefonos.map((tel) => (
                  <Link
                    key={tel}
                    href={`tel:${tel.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-white transition-colors duration-200"
                  >
                    <IconPhone size={17} className="text-secondary shrink-0 mt-0.5" />
                    <p>{tel}</p>
                  </Link>
                ))}
                {email && (
                  <Link
                    href={`mailto:${email}`}
                    className="flex items-start gap-3 text-white transition-colors duration-200"
                  >
                    <IconMail size={17} className="text-secondary shrink-0 mt-0.5" />
                    <p>{email}</p>
                  </Link>
                )}
                {direccion && (
                  <div className="flex items-start gap-3 text-white">
                    <IconMapPin size={17} className="text-secondary shrink-0 mt-0.5" />
                    <p>{direccion}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Divisor */}
      <div className="relative z-10 w-full h-px bg-white/12" />

      {/* Bottom bar */}
      <div className="relative z-10 py-5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <small className="text-white">
              © {year} {nombre}. Todos los derechos reservados.
            </small>
            <small className="text-white flex flex-row items-center gap-x-2">
              Desarrollado por{" "}
              <Link
                href="https://www.logosperu.com.pe/?gad_source=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex justify-center items-center gap-1.5 hover:opacity-80 transition-opacity"
                title="Logos Perú - Agencia de Diseño"
              >
                <img
                  src={LogosPeruLogo.src}
                  alt="Logos Perú"
                  className="h-5 w-auto group-hover:scale-105 transition-transform duration-200 brightness-0 invert"
                />
              </Link>
            </small>
          </div>
        </Container>
      </div>
    </footer>
  );
};
