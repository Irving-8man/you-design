import { NextResponse } from "next/server";

export async function GET(){
  const rr = await fetch("https://jsonplaceholder.typicode.com/users");
  const data =await rr.json();

  let res:string = "hola";
  return NextResponse.json(data);
}


export async function POST(){
  let res:string = "hola";
  return NextResponse.json({
    mesagge:"creando"
  });
}


export async function PUT(){
  let res:string = "hola";
  return NextResponse.json({
    mesagge:"actualizando"
  });
}


export async function DELETE(){
  let res:string = "hola";
  return NextResponse.json({
    mesagge:"borrando"
  });
}

