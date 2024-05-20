import { z } from 'zod';

export const tipografiaUpdateSchema = z.object({
  idProyecto:z.string(),
  fuenteBase: z.string(),
  size: z.string().regex(/^\d+$/, 'Must be a number'),
  ratio: z.string().regex(/^\d*\.?\d+$/, 'Must be a decimal number'),
  interlineado: z.string().regex(/^\d*\.?\d+$/, 'Must be a decimal number')
});


export const paletaColorUpdateSchema = z.object({
  idProyecto:z.string(),
  paleta: z.string(),
});

export const pautasCheckUpdateSchema = z.object({
  idProyecto:z.string(),
  pautasCheck: z.string(),
});