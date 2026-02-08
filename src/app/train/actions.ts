"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import type { ProblemDifficulty, ProblemType } from "generated/prisma";

export async function enrollUserInTrack(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  if (!name || !url) return;

  await db.problem.create({ data: { name, url } });

  redirect("/admin");
}