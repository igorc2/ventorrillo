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
    investedValue,
    netValue,
    createdAt,
    updatedAt,
    type,
    name,
    description,
  } = body;

  const createdAtDate = createdAt ? new Date(createdAt) : new Date()
  const updatedAtDate = updatedAt ? new Date(updatedAt) : new Date()

  const investment = await prisma.investment.create({
    data: {
      userId: user.id,
      investedValue: parseFloat(investedValue),
      netValue: parseFloat(netValue),
      createdAt: createdAtDate,
      updatedAt: updatedAtDate,
      name,
      type: type.value,
      description,
    }
  });

  console.log('investment', investment)

  return NextResponse.json(investment);

}