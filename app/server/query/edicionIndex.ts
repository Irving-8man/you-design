import { cache } from 'react';
import {db} from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const getDetailsProyect = cache(async (idProyecto: string) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    console.error('No autenticado');
    return null;
  }

  try {
    const projectDetails = await db.proyecto.findUnique({
      where: { id: idProyecto },
      include: {
        paletaColor: true,
        tipografia: true,
        pautasCheck: true,
      },
    });

    if (!projectDetails) {
      throw new Error('Proyecto no encontrado');
    }

    return {
      nombreProyecto: projectDetails.nombreProyecto,
      paleta: projectDetails.paletaColor?.paleta || "",
      fuenteBase: projectDetails.tipografia?.fuenteBase || "",
      pautasCheck: projectDetails.pautasCheck?.pautasCheck || "",
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});

export const getNameProyect = cache(async (idProyecto: string) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    console.error('No autenticado');
    return null;
  }

  try {
    const project = await db.proyecto.findUnique({
      where: { id: idProyecto },
    });

    if (!project) {
      throw new Error('Proyecto no encontrado');
    }

    return {
      nombreProyecto: project.nombreProyecto,
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});
