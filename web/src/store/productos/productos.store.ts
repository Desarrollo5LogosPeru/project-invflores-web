import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getEnvs } from "@/helpers/getEnvs";
import { ProductosSeccion01 } from "@/interfaces/productos/seccion01.interface";
import { Seccion02, Seccion02Producto } from "@/interfaces/productos/seccion02.interface";
import { Seccion03, Seccion03Item } from "@/interfaces/productos/seccion03.interface";
import {
  ProductosSeccion04,
  ProductosSeccion04Faq,
} from "@/interfaces/productos/seccion04.interface";

let fetchedInMemory = false;

interface ProductosStore {
  seccion01: ProductosSeccion01 | null;
  seccion02: Seccion02 | null;
  seccion02Productos: Seccion02Producto[];
  seccion03: Seccion03 | null;
  seccion03Items: Seccion03Item[];
  seccion04: ProductosSeccion04 | null;
  seccion04Faqs: ProductosSeccion04Faq[];
  loading: boolean;
  fetchAll: () => Promise<void>;
}

export const useProductosStore = create<ProductosStore>()(
  persist(
    (set) => ({
      seccion01: null,
      seccion02: null,
      seccion02Productos: [],
      seccion03: null,
      seccion03Items: [],
      seccion04: null,
      seccion04Faqs: [],
      loading: false,

      fetchAll: async () => {
        if (fetchedInMemory) return;

        const { NEXT_PUBLIC_API_URL } = getEnvs();
        set({ loading: true });

        const [
          seccion01,
          seccion02,
          seccion02Productos,
          seccion03,
          seccion03Items,
          seccion04,
          seccion04Faqs,
        ] = await Promise.all([
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion01`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion02`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion02-productos`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion03`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion03-cards`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion04`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/productos-seccion04-faqs`).then((r) => r.json()),
        ]);

        set({
          seccion01: seccion01 ?? null,
          seccion02: seccion02 ?? null,
          seccion02Productos,
          seccion03: seccion03 ?? null,
          seccion03Items,
          seccion04: seccion04 ?? null,
          seccion04Faqs,
          loading: false,
        });

        fetchedInMemory = true;
      },
    }),
    {
      name: "productos-store",
      partialize: () => ({}),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.seccion01 = null;
          state.seccion02 = null;
          state.seccion02Productos = [];
          state.seccion03 = null;
          state.seccion03Items = [];
          state.seccion04 = null;
          state.seccion04Faqs = [];
          state.loading = false;
        }
      },
    },
  ),
);
