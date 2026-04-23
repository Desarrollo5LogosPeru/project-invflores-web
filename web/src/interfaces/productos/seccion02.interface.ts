export interface Seccion02 {
  id: number;
  badge: string;
  title: string;
}

export interface Seccion02ProductoImagen {
  id: number;
  productos_seccion02_producto_id: number;
  image: string;
  order: number;
}

export interface Seccion02Producto {
  id: number;
  title: string;
  description: string;
  imagenes: Seccion02ProductoImagen[];
}
