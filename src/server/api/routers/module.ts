import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"
import { TRPCError } from "@trpc/server";

export const moduleRouter = createTRPCRouter({
    upsert: protectedProcedure
    .input(
        z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            launchDate: z.date().optional(),
            hidden: z.boolean().optional(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { id, ...data } = input;

        // Create
        if (!id) {
            return ctx.db.module.create({
                data: {
                    name: data.name ?? "Unnamed Module",
                    launchDate: data.launchDate ?? new Date(),
                    hidden: data.hidden,
                }
            })
        }

        // Update
        return ctx.db.module.update({
            where: {
                id: id,
            },
            data,
        })
    }),

    duplicate: protectedProcedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const id = input.id;

        const original = await ctx.db.module.findUnique({
            where: { id },
            include: { moduleProblems: true },
        });

        if (!original) throw new TRPCError({ code: "BAD_REQUEST", message: "No module found to duplicate" });

        const { name, launchDate, hidden, moduleProblems } = original;

        return ctx.db.module.create({
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
            include: {
                moduleProblems: true,
            }
        })
    }),

    delete: protectedProcedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const id = input.id;

        await ctx.db.levelModule.deleteMany({ where: { moduleId: id }});

        return ctx.db.module.delete({ where: { id }});
    }),
    
});