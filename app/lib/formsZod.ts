import { z } from 'zod';

export const formSchema = z.object({
  nombreUsuario: z.string().min(8, {
    message: "Faltan caracteres.",
  }),
  email: z.string().email({ message: "Invalido email." }),
  password: z.string().min(8, {
    message: "El password debe tener mínimo 8 caracteres.",
  }),
  confirmPassword: z.string(),}).refine((data) => data.password === data.confirmPassword, {
  message: "Los passwords no son iguales.",
  path: ["confirmPassword"], // Esto enfoca el error en el campo confirmPassword
});
