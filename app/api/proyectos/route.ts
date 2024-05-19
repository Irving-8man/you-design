import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { formSchemaProyect} from '@/lib/apisZod';

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const data = formSchemaProyect.parse(req);

    console.log(req);
    return NextResponse.json({ status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}