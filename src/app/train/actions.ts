"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";

export async function addUserToTrack(formData : FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "ADMIN") redirect("/");

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

  redirect("/train");
}

export async function saveSolve(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    const statusString = formData.get("statusString") as string;
    const problemId = formData.get("problemId") as string;
    
    const submitCount = parseInt(formData.get("submitCount") as string) || 0;
    const readTime = parseInt(formData.get("readTimeMinutes") as string) || 0;
    const thinkTime = parseInt(formData.get("thinkTimeMinutes") as string) || 0;
    const codeTime = parseInt(formData.get("codeTimeMinutes") as string) || 0;
    const debugTime = parseInt(formData.get("debugTimeMinutes") as string) || 0;
    const perceivedDifficulty = parseInt(formData.get("perceivedDifficulty") as string) || 0;
    
    const onYourOwn = formData.get("onYourOwn") === "true";

    await db.solve.upsert({
        where: {
            userId_problemId: {
                userId: session.user.id,
                problemId: problemId
            }
        },
        update: {
            statusString,
            submitCount,
            readTimeMinutes: readTime,
            thinkTimeMinutes: thinkTime,
            codeTimeMinutes: codeTime,
            debugTimeMinutes: debugTime,
            perceivedDifficulty,
            onYourOwn,
        },
        create: {
            userId: session.user.id,
            problemId,
            statusString,
            submitCount,
            readTimeMinutes: readTime,
            thinkTimeMinutes: thinkTime,
            codeTimeMinutes: codeTime,
            debugTimeMinutes: debugTime,
            perceivedDifficulty,
            onYourOwn,
        }
    });
}