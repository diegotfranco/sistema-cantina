import { z } from "zod";

export type LoginDataProps = z.infer<typeof loginFormData>;

export const loginFormData = z.object({
  phone: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(14, 'Formato de número inválido')
    .max(15, 'Formato de número inválido'),
  password: z
    .string()
    .min(1, 'Campo obrigatório')
});