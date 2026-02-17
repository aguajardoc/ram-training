import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"

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
});