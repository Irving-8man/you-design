import { cache } from 'react';
import db from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export const getLimitAndNumProyectsByUser = cache(async ({{idProyecto}:string}) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    console.error('No autenticado');
    return null;
  }

  try {
    const proyectosCount = await db.proyecto.count({
      where: { idUsuario: session.user.id },
    });

    const allProyectsUser = await db.proyecto.findMany({
      where: {
        idUsuario: session.user.id,
      },
    });

    return {
      limit: session.user?.limitProyectos,
      numProyects: proyectosCount,
      proyectos:allProyectsUser,
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});
