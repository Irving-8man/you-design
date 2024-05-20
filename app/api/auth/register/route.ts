import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { hashPass } from '@/lib/bycript';
import { usuarioAPISchema } from '@/lib/apisZod';

export async function POST(request: Request) {
  try {
    const req = await request.json();

    const data = usuarioAPISchema.parse(req);

    const userEncontrado = await db.usuario.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userEncontrado) {
      return NextResponse.json(
        {
          message: 'El email ya ha sido registrado.',
        },
        {
          status: 400,
        },
      );
    }

    const passwordHash = await hashPass(data.password);

    const nuevoUsuario = await db.usuario.create({
      data: {
        nombreUsuario: data.nombreUsuario,
        email: data.email,
        password: passwordHash,
      },
    });

    return NextResponse.json({ status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
