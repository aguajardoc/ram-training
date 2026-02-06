"use server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import type { DateTime } from "next-auth/providers/kakao";
import type { ProblemDifficulty, ProblemType } from "generated/prisma";

export async function createProblem(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  if (!name || !url) return;

  await db.problem.create({ data: { name, url } });

  redirect("/admin");
}

export async function createModuleProblem(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const moduleId = formData.get("moduleId") as string;
  const problemId = formData.get("problemId") as string;
  const problemType = formData.get("problemType") as ProblemType;
  const difficulty = formData.get("difficulty") as ProblemDifficulty;

  if (!moduleId || !problemId || !problemType || !difficulty) return;

  const maxOrder = await db.moduleProblem.aggregate({
    where: { moduleId },
    _max: { order: true },
  });

  await db.moduleProblem.create({
    data: {
      moduleId,
      problemId,
      problemType,
      difficulty,
      order: (maxOrder._max.order ?? 0) + 1,
    },
  });

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

export async function updateTrackName(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;

  if (!name) return;

  await db.track.update({
    where: { id },
    data: { name },
  })

  redirect("/admin");
}

export async function changeDifficulty(id : string, newDiff : number) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  let difficulty;
  if (newDiff === 0) difficulty = "EASY";
  if (newDiff === 1) difficulty = "NORMAL";
  if (newDiff === 2) difficulty = "HARD";
  difficulty = difficulty as ProblemDifficulty;

  await db.moduleProblem.update({
    where: { id },
    data: { difficulty },
  })

  redirect("/admin");
}

export async function updateModule(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const launchDate = new Date(formData.get("launchDate") as string);
  const hidden = Boolean(formData.get("hidden") as string === "true" ? 1:0);

  if (!name || isNaN(launchDate.getTime())) return;

  await db.module.update({
    where: { id },
    data: { name, launchDate, hidden },
  })

  redirect("/admin");
}

export async function deleteProblem(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.problem.delete({ where: { id }});

  redirect("/admin");
}

export async function deleteModuleProblem(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.moduleProblem.delete({ where: { id }});

  redirect("/admin");
}

export async function deleteUser(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.user.delete({ where: { id }});

  redirect("/admin");
}

export async function deleteModule(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.module.delete({ where: { id }});

  redirect("/admin");
}

export async function deleteTrack(id: string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  await db.track.delete({ where: { id }});

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

export async function createTrack(formData : FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const name = formData.get("name") as string;

  await db.track.create({ data: {name}});

  redirect("/admin")
}

export async function createLevel(formData : FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const code = formData.get("code") as string;

  await db.trackLevel.create({ data: {code}});

  redirect("/admin")
}

export async function duplicateModule(id : string) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/");

  const original = await db.module.findUnique({
      where: { id },
      include: { moduleProblems: true },
    });

    if (!original) throw new Error("Module not found");

    const { name, launchDate, hidden, moduleProblems } = original;

    await db.module.create({
      data: {
        name: `${name} (Copy)`,
        launchDate,
        hidden,
        moduleProblems: {
          create: moduleProblems.map(p => ({
            problemId: p.problemId,
            order: p.order,
            problemType: p.problemType,
            difficulty: p.difficulty,
          })),
        },
      },
    });

    redirect("/admin");
}