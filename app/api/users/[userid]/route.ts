import { NextRequest, NextResponse } from "next/server";

type Params = {
  userid: string
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { userid } = params;
  const rr = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const data = await rr.json();
  return NextResponse.json(data);
}
