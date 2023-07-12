
import getCurrentUser from "./getCurrentUser";
import prisma from "@/libs/prismadb";

export default async function getInvestments() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const investments = await prisma.investment.findMany({
      where: {
        userId: currentUser.id,
      }
    });

    return investments;
  } catch (error: any) {
    throw new Error(error);
  }
}
