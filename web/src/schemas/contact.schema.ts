import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "La empresa es requerida"),
  phone: z.string().min(7, "El teléfono es requerido"),
  affair: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
