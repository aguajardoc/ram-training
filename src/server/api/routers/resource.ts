import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"
import { ResourceType } from "generated/prisma";

export const resourceRouter = createTRPCRouter({
    getResourcesByModule: protectedProcedure
    .input(z.object({ moduleId: z.string() }))
    .query(async ({ ctx, input }) => {
        return await ctx.db.resource.findMany({
            where: {
                moduleId: input.moduleId,
            }
        })
    }),

    getResourcesByTrack: protectedProcedure
    .input(z.object({ trackId: z.string() }))
    .query(async ({ ctx, input }) => {
        return await ctx.db.resource.findMany({
            where: {
                module: {
                    levelModules: {
                        some: {
                            trackLevel: {
                                trackId: input.trackId,
                            },
                        },
                    },
                },
            },
        })
    }),

    upsertResourceToModule: protectedProcedure
    .input(
        z.object({
            id: z.string().optional(),
            moduleId: z.string(),
            name: z.string(),
            link: z.string(),
            type: z.nativeEnum(ResourceType),
            description: z.string(),
        }),
    )
    .mutation(async ({ ctx, input }) => {
        if (input.id) {
            return ctx.db.resource.update({
                where: { id: input.id },
                data: input,
            });
        }

        return ctx.db.resource.create({
            data: input,
        })
    }),
});