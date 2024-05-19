import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { formSchemaProyect } from '@/lib/apisZod';

export async function POST(request: Request) {
  const LIMIT_PROYECTS = 3;
  try {
    const req = await request.json();
    const data = formSchemaProyect.parse(req);

    const userEncontrado = await db.usuario.findUnique({
      where: {
        id: data.idUs,
      },
    });

    if (!userEncontrado) {
      return NextResponse.json(
        {
          message: 'El usuario no esta registrado',
        },
        {
          status: 400,
        },
      );
    }

    const proyectosCount = await db.proyecto.count({
      where: { idUsuario: data.idUs },
    });

    if (proyectosCount === LIMIT_PROYECTS) {
      return NextResponse.json(
        {
          message: 'Limite de proyectos creados alcanzados',
        },
        {
          status: 400,
        },
      );
    }

    const nuevoProyecto = await db.proyecto.create({
      data: {
        nombreProyecto: data.nombreProyecto,
        descripcion: data.descripcion,
        idUsuario: data.idUs,
        paletaColor:{
          create:{
          }
        },
        tipografia :{
          create:{
          }
        },
        pautasCheck:{
          create:{
          }
        }
      },
    });

    console.log(nuevoProyecto);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
