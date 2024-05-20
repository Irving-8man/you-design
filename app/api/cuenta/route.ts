import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { formSchemaAjustes } from '@/lib/apisZod';

export async function PUT(request: Request) {
  try {
    throw new Error('Enpoint corrupto');
    const req = await request.json();
    const data = formSchemaAjustes.parse(req);

    const userEncontrado = await db.usuario.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!userEncontrado) throw new Error('Usuario no registrado');

    const result = await db.usuario.update({
      where: {
        id: data.id,
      },
      data: {
        nombreUsuario: data.nombreUsuario,
      },
    });

    console.log(result);
    return NextResponse.json({ message: result }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
