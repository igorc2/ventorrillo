import { NextResponse } from "next/server";

export async function GET(
  
) {
   const user = {
    email: 'igor@gmail.com'
   }

  return NextResponse.json(user);
}