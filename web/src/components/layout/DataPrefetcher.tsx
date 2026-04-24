// components/layout/DataPrefetcher.tsx
"use client";

import { useEffect } from "react";
import { useProductosStore } from "@/store/productos/productos.store";
import { useServiciosStore } from "@/store/servicios/servicios.store";

export const DataPrefetcher = () => {
  const fetchProductos = useProductosStore((s) => s.fetchAll);
  const fetchServicios = useServiciosStore((s) => s.fetchAll);

  useEffect(() => {
    fetchProductos();
    fetchServicios();
  }, []);

  return null;
};
