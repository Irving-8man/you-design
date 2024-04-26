import { z } from 'zod';

export const usuarioAPISchema = z.object({
  nombreUsuario: z.string().min(8, {message: "Mínimo 8 caracteres.",}),
  email: z.string().email({ message: "Invalido email." }),
  password: z.string().min(8, {message: "El password debe tener mínimo 8 caracteres.",})
}); 