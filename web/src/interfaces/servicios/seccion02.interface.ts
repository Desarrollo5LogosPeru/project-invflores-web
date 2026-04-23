export interface Seccion02 {
  id: number;
  badge: string;
  title: string;
}

export interface Seccion02ServicioImagen {
  id: number;
  servicios_seccion02_servicio_id: number;
  image: string;
  order: number;
}

export interface Seccion02Servicio {
  id: number;
  title: string;
  description: string;
  imagenes: Seccion02ServicioImagen[];
}
