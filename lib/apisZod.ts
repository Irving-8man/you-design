import { z } from 'zod';

/**
 * Declaración del esquema para validar registros
 */
export const usuarioAPISchema = z.object({
  nombreUsuario: z.string().min(8, {message: "Mínimo 8 caracteres.",}),
  email: z.string().email({ message: "Invalido email." }),
  password: z.string().min(8, {message: "El password debe tener mínimo 8 caracteres.",})
}); 

/**
 * Declaración del esquema para validar login
 */
export const usuarioLoginSchema = z.object({
  email: z.string().email({ message: "Invalido email." }),
  password: z.string().min(8, {message: "El password debe tener mínimo 8 caracteres.",})
}); 


export const formSchemaProyect = z.object({
  nombreProyecto: z.string().min(1, {
    message: "El nombre no debe estar vacio",
  }),
  descripcion: z.string().max(100, {
    message: "Se ha pasado de 100 caracteres",
  }),
  idUs:z.string(),
});


export const formSchemaEditProyect = z.object({
  id: z.string(),
  nombreProyecto: z.string().min(1, {
    message: "El nombre no debe estar vacio",
  }),
  descripcion: z.string().max(100, {
    message: "Se ha pasado de 100 caracteres",
  }),
});

export const DeleteProyectSchema = z.object({
  idProyect: z.string().min(1, { message: "Proyecto querido." }),
  idUser: z.string(),
});