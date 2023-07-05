
import getCurrentUser from "./getCurrentUser";
import prisma from "@/libs/prismadb";

export default async function getSources() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const sources = await prisma.source.findMany({
      where: {
        userId: currentUser.id,
      }
    });

    return sources;
  } catch (error: any) {
    throw new Error(error);
  }
}
