import { cache } from 'react';
import db from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const getDetailsTipogra = cache(async (idProyecto: string) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    console.error('No autenticado');
    return null;
  }

  try {
    const tipografiaDetails = await db.tipografia.findUnique({
      where: { idProyecto: idProyecto },
    });

    if (!tipografiaDetails) {
      throw new Error('Proyecto no encontrado');
    }

    return {
      fuenteBase: tipografiaDetails.fuenteBase,
      size: tipografiaDetails.size,
      ratio:tipografiaDetails.ratio,
      interlineado:tipografiaDetails.interlineado,
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});