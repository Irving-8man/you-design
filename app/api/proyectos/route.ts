import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { formSchemaProyect, formSchemaEditProyect,DeleteProyectSchema } from '@/lib/apisZod';

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
        paletaColor: {
          create: {},
        },
        tipografia: {
          create: {},
        },
        pautasCheck: {
          create: {},
        },
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

export async function PUT(request: Request) {
  try {
    const req = await request.json();
    const data = formSchemaEditProyect.parse(req);

    const proyectoEncontrado = await db.proyecto.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!proyectoEncontrado) {
      return NextResponse.json(
        {
          message: 'El proyecto no existe',
        },
        {
          status: 400,
        },
      );
    }

    await db.proyecto.update({
      where: { id: data.id },
      data: {
        nombreProyecto: data.nombreProyecto,
        descripcion: data.descripcion,
      },
    });

    console.log(req);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}


export async function DELETE(request:Request){
  try {
    const req = await request.json();
    const data = DeleteProyectSchema.parse(req);
    
    const result = await db.proyecto.delete({
      where: { id:data.idProyect, idUsuario: data.idUser },
    });
  
    console.log(req);
    return NextResponse.json({ status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}