"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addUserToTrack(formData : FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const userId = formData.get("userId") as string;
  const trackId = formData.get("trackId") as string;

  if (!userId || !trackId) return; 

  await db.userTrack.deleteMany({
    where: {
      userId: userId,
    },
  });

  await db.userTrack.create({
    data: {
      userId,
      trackId,
    },
  });

  redirect("/train");
}