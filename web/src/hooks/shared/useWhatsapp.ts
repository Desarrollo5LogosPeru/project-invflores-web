"use client";

import { useEmpresa } from "@/store/empresa/empresa.store";

interface UseWhatsappOptions {
  mensaje?: string;
}

export const useWhatsapp = (options: UseWhatsappOptions = {}) => {
  const { whatsapp } = useEmpresa();

  const { mensaje = "Hola, me gustaría recibir más información." } = options;

  const mensajeCodificado = encodeURIComponent(mensaje);

  // Siempre wa.me para el href — evita hydration mismatch
  const url = `https://wa.me/${whatsapp}?text=${mensajeCodificado}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const isMac =
      userAgent.includes("mac") && !userAgent.includes("iphone") && !userAgent.includes("ipad");
    const isWindows = userAgent.includes("win");
    const isDesktop = isMac || isWindows;

    if (isDesktop) {
      e.preventDefault();
      window.open(
        `https://web.whatsapp.com/send?phone=${whatsapp}&text=${mensajeCodificado}`,
        "_blank",
      );
    }
  };

  return {
    url,
    numero: whatsapp,
    handleClick,
  };
};
