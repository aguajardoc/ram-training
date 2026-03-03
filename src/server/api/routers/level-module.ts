import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"

export const levelModuleRouter = createTRPCRouter({
    addModuleToLevel: protectedProcedure
    .input(
        z.object({
            moduleId: z.string(),
            trackLevelId: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { moduleId, trackLevelId } = input;

        const exists = await ctx.db.levelModule.findUnique({
            where: {
                trackLevelId_moduleId: {
                    moduleId,
                    trackLevelId,
                }
            }
        });

        if (exists) return exists;

        return ctx.db.levelModule.create({
            data: {
                moduleId,
                trackLevelId,
            }
        });
    }),

    deleteModuleFromLevel: protectedProcedure
    .input(
        z.object({
            moduleId: z.string(),
            trackLevelId: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { moduleId, trackLevelId } = input;

        const exists = await ctx.db.levelModule.findUnique({
            where: {
                trackLevelId_moduleId: {
                    moduleId,
                    trackLevelId,
                }
            }
        });

        return ctx.db.levelModule.deleteMany({
            where: {
                moduleId,
                trackLevelId,
            }
        });
    }),
});