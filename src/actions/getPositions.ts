
import prisma from "@/libs/prismadb";
import getInvestments from "./getInvestments";

export default async function getPositions() {
  try {
    const investments = await getInvestments();

    if (!investments) {
      return [];
    }

    const investmentsIds = investments.map((investment) => investment.id);

    const positions = await prisma.investmentPosition.findMany({
      where: {
        investmentId: { in: investmentsIds }
      }
    });

    return positions;
  } catch (error: any) {
    throw new Error(error);
  }
}
