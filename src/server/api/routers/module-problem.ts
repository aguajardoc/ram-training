import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"
import { ProblemDifficulty, ProblemType } from "generated/prisma";
import { TRPCError } from "@trpc/server";

export const moduleProblemRouter = createTRPCRouter({
    upsert: protectedProcedure
    .input(
        z.object({
            id: z.string().optional(),
            moduleId: z.string().optional(),
            problemId: z.string().optional(),
            problemType: z.nativeEnum(ProblemType).optional(),
            difficulty: z.nativeEnum(ProblemDifficulty).optional(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { id, ...data } = input;

        if (id) {
            return ctx.db.moduleProblem.update({
                where: { id },
                data,
            });
        }
        
        const maxOrder = await ctx.db.moduleProblem.aggregate({
            where: { moduleId: input.moduleId },
            _max: { order: true },
        });

        if (!data.moduleId || !data.problemId) {
            throw new TRPCError({ code: "BAD_REQUEST", message: "Missing fields for new record" });
        }
        
        return ctx.db.moduleProblem.create({
            data: {
                moduleId: data.moduleId,
                problemId: data.problemId,
                problemType: data.problemType ?? "PRACTICE",
                difficulty: data.difficulty ?? "NORMAL",
                order: (maxOrder._max?.order ?? 0) + 1,
            },
        });
    }),

    delete: protectedProcedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ctx, input}) => {
        ctx.db.moduleProblem.delete ({
            where: {
                id: input.id,
            }
        })
    })

});