"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import type { DateTime } from "next-auth/providers/kakao";

export async function createProblem(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  if (!name || !url) return;

  await db.problem.create({ data: { name, url } });

  redirect("/admin");
}

export async function updateProblem(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  if (!name || !url) return;

  await db.problem.update({
    where: { id },
    data: { name, url },
  })

  redirect("/admin");
}

export async function deleteProblem(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.problem.delete({ where: { id }});

  redirect("/admin");
}

export async function createModule(formData : FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const name = formData.get("name") as string;
  const hidden = formData.get("hidden") === "on";
  
  const rawDate = formData.get("launch-date") as string;
  const launchDate = new Date(rawDate)

  await db.module.create({ data: {name, launchDate, hidden}});

  redirect("/admin")
}