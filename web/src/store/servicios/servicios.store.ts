import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getEnvs } from "@/helpers/getEnvs";
import { ServiciosSeccion01 } from "@/interfaces/servicios/seccion01.interface";
import { Seccion02, Seccion02Servicio } from "@/interfaces/servicios/seccion02.interface";
import { Seccion03, Seccion03Item } from "@/interfaces/servicios/seccion03.interface";
import { Seccion04, Seccion04Brand } from "@/interfaces/servicios/seccion04.interface";

// Muere con cada reload, persiste en navegación entre páginas
let fetchedInMemory = false;

interface ServiciosStore {
  seccion01: ServiciosSeccion01 | null;
  seccion02: Seccion02 | null;
  seccion02Servicios: Seccion02Servicio[];
  seccion03: Seccion03 | null;
  seccion03Items: Seccion03Item[];
  seccion04: Seccion04 | null;
  seccion04Brands: Seccion04Brand[];
  loading: boolean;
  fetchAll: () => Promise<void>;
}

export const useServiciosStore = create<ServiciosStore>()(
  persist(
    (set) => ({
      seccion01: null,
      seccion02: null,
      seccion02Servicios: [],
      seccion03: null,
      seccion03Items: [],
      seccion04: null,
      seccion04Brands: [],
      loading: false,

      fetchAll: async () => {
        if (fetchedInMemory) return;

        const { NEXT_PUBLIC_API_URL } = getEnvs();
        set({ loading: true });

        const [
          seccion01,
          seccion02,
          seccion02Servicios,
          seccion03,
          seccion03Items,
          seccion04,
          seccion04Brands,
        ] = await Promise.all([
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion01`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion02`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion02-servicios`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion03`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion03-items`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion04`).then((r) => r.json()),
          fetch(`${NEXT_PUBLIC_API_URL}/servicios-seccion04-brands`).then((r) => r.json()),
        ]);

        set({
          seccion01: seccion01 ?? null,
          seccion02: seccion02 ?? null,
          seccion02Servicios,
          seccion03: seccion03 ?? null,
          seccion03Items,
          seccion04: seccion04 ?? null,
          seccion04Brands,
          loading: false,
        });

        fetchedInMemory = true;
      },
    }),
    {
      name: "servicios-store",
      // No guarda nada en localStorage, solo existe para no romper el tipo
      partialize: () => ({}),
      // Limpia todo al rehidratar
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.seccion01 = null;
          state.seccion02 = null;
          state.seccion02Servicios = [];
          state.seccion03 = null;
          state.seccion03Items = [];
          state.seccion04 = null;
          state.seccion04Brands = [];
          state.loading = false;
        }
      },
    },
  ),
);
