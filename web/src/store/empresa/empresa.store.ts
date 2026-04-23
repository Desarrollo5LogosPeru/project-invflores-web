import { create, type StateCreator } from "zustand";

//prettier-ignore
interface EmpresaState {
  nombre   : string;
  telefono : string[];
  email    : string;
  horario  : string;
  direccion: string;
  whatsapp : string;
  facebook : string;
  instagram: string;
  tiktok   : string;
  youtube  : string;
  x        : string;
}

const storeEmpresa: StateCreator<EmpresaState> = () => {
  return {
    nombre: "Inversiones Generales J&R Flores SAC",
    telefono: ["951 338 531", "973 718 240"],
    email: "",
    horario: "Lun - Sab 8am - 6pm",
    direccion: "",
    whatsapp: "51951338531",
    facebook: "https://facebook.com/share/14cKTs4dgC7/",
    instagram: "https://www.instagram.com/inversiones_g_jrfloressac?igsh=YjFmdmxpazJpbHB3",
    tiktok: "https://tiktok.com/@inversiones.grls",
    youtube: "",
    x: "",
  };
};

export const useEmpresa = create<EmpresaState>(storeEmpresa);
