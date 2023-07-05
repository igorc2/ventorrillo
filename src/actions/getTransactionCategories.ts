
import getCurrentUser from "./getCurrentUser";
import prisma from "@/libs/prismadb";

export default async function getTransactionCategories() {
  try {
    
    const transactionCategories = await prisma.transactionCategory.findMany();

    return transactionCategories;
  } catch (error: any) {
    throw new Error(error);
  }
}
