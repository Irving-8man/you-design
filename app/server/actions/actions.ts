'use server';
import type { z } from 'zod';
import { tipografiaUpdateSchema } from '@/app/server/schemasActions';
import db from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

export async function updateTipo(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  if (!session.user) {
    console.error('No autenticado.');
    return null;
  }

  // Función para convertir campos de tipografía
function convertTipografiaData(data: z.infer<typeof tipografiaUpdateSchema>) {
  return {
    ...data,
    size: parseInt(data.size, 10),
    interlineado: parseFloat(data.interlineado)
  };
}

  const validatedFields = tipografiaUpdateSchema.parse({
    idProyecto: formData.get('idProyecto'),
    fuenteBase: formData.get('tipografia'),
    size: formData.get('base'),
    ratio: formData.get('Ratio'),
    interlineado: formData.get('interlineado'),
  });

  const convertir = convertTipografiaData(validatedFields);

  await db.tipografia.update({
    where: { idProyecto: convertir.idProyecto },
    data: {
      fuenteBase: convertir.fuenteBase,
      size: convertir.size,
      ratio: convertir.ratio,
      interlineado: convertir.interlineado,
    }
  });

  revalidatePath("/edicion");
  revalidatePath("/edicion/proyecto/");
  return;
}
