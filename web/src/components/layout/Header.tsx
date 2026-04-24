"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconPhone,
  IconMenu2,
  IconX,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEmpresa } from "@/store/empresa/empresa.store";
import LOGOCOLOR from "@/assets/logo/LOGO-COLOR.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useServiciosStore } from "@/store/servicios/servicios.store";
import { useProductosStore } from "@/store/productos/productos.store";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contáctanos", href: "/contactanos" },
];

const PADDING = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

export const Header = () => {
  const { telefono, facebook, tiktok, instagram } = useEmpresa();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // const fetchServicios = useServiciosStore((s) => s.fetchAll);
  // const fetchProductos = useProductosStore((s) => s.fetchAll);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const telefonos = Array.isArray(telefono) ? telefono : [telefono];

  const redes = [
    { href: facebook, icon: <IconBrandFacebook size={14} />, show: !!facebook },
    { href: tiktok, icon: <IconBrandTiktok size={14} />, show: !!tiktok },
    { href: instagram, icon: <IconBrandInstagram size={14} />, show: !!instagram },
  ].filter((r) => r.show);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ── TopBar ── */}
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full"
        style={{ backgroundColor: "#3637AE" }}
      >
        <div
          className="flex items-center justify-between h-8"
          style={{ paddingLeft: PADDING, paddingRight: PADDING }}
        >
          <div className="flex items-center gap-5">
            {telefonos.map((tel) => (
              <Link
                key={tel}
                href={`tel:${tel.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-opacity"
              >
                <IconPhone size={13} />
                <small>{tel}</small>
              </Link>
            ))}
          </div>

          {redes.length > 0 && (
            <div className="flex items-center gap-3">
              {redes.map(({ href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-opacity"
                >
                  {icon}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Header ── */}
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 2px 20px rgba(54, 55, 174, 0.12)" : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full"
      >
        <div className="flex items-stretch h-auto">
          {/* Logo block - siempre bg-white con clip path */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center shrink-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)",
              paddingLeft: PADDING,
              paddingRight: "3.5rem",
              background: "linear-gradient(to right, #ffffff, #dbeeff)",
            }}
          >
            <img src={LOGOCOLOR.src} alt="Logo" className="md:h-18 h-14 w-auto object-contain" />
          </motion.div>

          {/* Nav */}
          <div
            className="flex-1 flex items-center md:justify-between justify-end"
            style={{ paddingRight: PADDING, paddingLeft: "2rem" }}
          >
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 w-full justify-around">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                    className="relative"
                  >
                    {/* <Link
                      href={link.href}
                      className="relative group flex flex-col items-center gap-0.5 py-5"
                    > */}

                    <Link
                      href={link.href}
                      // className="relative group flex flex-col items-center gap-0.5 py-5"
                      className="relative group flex flex-col items-center gap-0.5 py-5"
                      // onMouseEnter={
                      //   link.href === "/servicios"
                      //     ? fetchServicios
                      //     : link.href === "/productos"
                      //       ? fetchProductos
                      //       : undefined
                      // }
                      // onTouchStart={
                      //   link.href === "/servicios"
                      //     ? fetchServicios
                      //     : link.href === "/productos"
                      //       ? fetchProductos
                      //       : undefined
                      // }
                    >
                      <span
                        className="font-semibold tracking-wide transition-colors duration-200"
                        // style={{
                        //   color: isActive ? "#EEF7FF" : scrolled ? "#374151" : "#ffffff",
                        // }}
                        style={{
                          color: scrolled ? (isActive ? "#3637AE" : "#374151") : "#ffffff",
                        }}
                      >
                        {link.label}
                      </span>

                      {/* Underline activo */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-3 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: "#5BC7FD" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Underline hover */}
                      {!isActive && (
                        <span
                          className="absolute bottom-3 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                          style={{ backgroundColor: "#5BC7FD" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden p-2 transition-colors"
              style={{ color: "#3637AE" }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden border-t"
            style={{ borderColor: "#5BC7FD33" }}
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      // onTouchStart={
                      //   link.href === "/servicios"
                      //     ? fetchServicios
                      //     : link.href === "/productos"
                      //       ? fetchProductos
                      //       : undefined
                      // }
                      className="flex items-center gap-3 font-medium px-6 py-3 transition-all duration-200"
                      // className="flex items-center gap-3 font-medium px-6 py-3 transition-all duration-200"
                      style={{
                        color: isActive ? "#3637AE" : "#4B5563",
                        backgroundColor: isActive ? "#3637AE0D" : "transparent",
                        borderLeft: isActive ? "3px solid #5BC7FD" : "3px solid transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
