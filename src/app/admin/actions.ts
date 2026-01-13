"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";

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