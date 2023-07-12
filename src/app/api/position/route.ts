import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {

  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect("/login");
  }

  const body = await request.json();
  
  const {
    netValue,
    updatedAt,
    investmentId,
  } = body;

  const updatedAtDate = updatedAt ? new Date(updatedAt) : new Date()

  const investmentPosition = await prisma.investmentPosition.create({
    data: {
      netValue: parseFloat(netValue),
      updatedAt: updatedAtDate,
      investment: { connect: { id: investmentId } },
    }
  });

  console.log('investment', investmentPosition)

  return NextResponse.json(investmentPosition);

}