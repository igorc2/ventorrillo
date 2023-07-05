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
    amount,
    transactionCategory,
    source,
    createdAt,
    description,
  } = body;

  console.log('body :>> ', body);

  const transaction = await prisma.transaction.create({
    data: {
      userId: user.id,
      transactionCategoryId: transactionCategory.value,
      sourceId: source.value,
      amount: parseFloat(amount),
      createdAt,
      description: description,
    }
  });

  return NextResponse.json(transaction);

}