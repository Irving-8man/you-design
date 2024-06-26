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


export const formLogin = z.object({
  email: z.string().email({ message: "Invalido email." }),
  password: z.string().min(1, "El campo de password no debe estar vacío.")
});


export const formSchemaAjustes = z.object({
  id: z.string(),
  nombreUsuario: z.string().min(8, {
    message: "Faltan caracteres.",
  }),
  email: z.string().email({ message: "Invalido email." }),
});



export const formSchemaProyect = z.object({
  idUsuario: z.string(),
  nombreProyecto: z.string().min(1, {
    message: "El nombre no debe estar vacio",
  }),
  descripcion: z.string().max(100, {
    message: "Se ha pasado de 100 caracteres",
  }),
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