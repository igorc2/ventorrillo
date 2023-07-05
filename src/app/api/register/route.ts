import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    email,
    name,
    password,
   } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  const source = await prisma.source.create({
    data: {
      userId: user.id,
      name: 'Bank Account',
      description: 'My main bank account',
    }
  });

  console.log('source', source)

  return NextResponse.json(user);
}

export async function GET(
  
) {
   const user = {
    email: 'igor@gmail.com'
   }

  return NextResponse.json(user);
}