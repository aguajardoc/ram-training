"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";

export async function addUserToTrack(formData : FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const userId = formData.get("userId") as string;
  const trackId = formData.get("trackId") as string;

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

  redirect("/admin");
}