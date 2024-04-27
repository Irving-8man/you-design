import { NextResponse } from "next/server";
import db from "@/lib/db"
import { hashPass } from '@/lib/bycript'
import { usuarioAPISchema } from '@/lib/apisZod'

export async function POST(request:Request){
  try {
    //1 Recuperar la data
    const req = await request.json();
    // 2 Validar la data
    const data = usuarioAPISchema.parse(req);
    //3 Comprobar si existe el email usado
    const userEncontrado = await db.usuario.findUnique({
      where:{
        email:data.email
      }
    })
    // 4 retornar respuesta si fue encontrado
    if(userEncontrado){
      return NextResponse.json({
        message: "El email ya ha sido registrado."
      },{
        status:400
      })
    }
    // 5 Hashear el password
    const passwordHash = await hashPass(data.password)

    //6 Guardar la data
    const nuevoUsuario = await db.usuario.create({
      data:{
      nombreUsuario: data.nombreUsuario,
      email:data.email,
      password: passwordHash
    }
    })

    // 7 Retornar lo necesario
    const {password: _,...user} = nuevoUsuario

    // Responder al cliente
    return NextResponse.json(user)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({message:error.message},{status:500})
    }
  }

}