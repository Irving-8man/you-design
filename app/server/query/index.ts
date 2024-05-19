import { cache } from "react";
import  db  from "@/lib/db";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

/**
 * Get links with tags by user.
 * Authentication required.
 */
export const getLimitAndNumProyectsByUser = cache(async () => {
  const session = await getServerSession(authOptions);
 
  if (!session.user) {
    console.error("No autenticado");
    return null;
  }

  try {
    
    const proyectosCount = await db.proyecto.count({
      where: { idUsuario: session.user.id },
    });

    /*
    const linkData = await db.links.findMany({
      where: {
        creatorId: currentUser.user?.id,
      },
      include: {
        tags: true,
      },
    });

    const tagsData = await db.tags.findMany({
      where: {
        creatorId: currentUser.user?.id,
      },
    });

    */

    return {
      limit: session.user?.limitProyectos,
      numProyects: proyectosCount,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
});

/**
 * Get only tags by user.
 * Authentication required.

export const getTagsByUser = cache(async () => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  const tagsData = await db.tags.findMany({
    where: {
      creatorId: currentUser.user?.id,
    },
  });

  return tagsData;
}); */