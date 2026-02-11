import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"

export const problemRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.problem.findMany()
  }),

  create: protectedProcedure
    .input(
      z.object({
        type: z.string(),
        name: z.string(),
        url: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.problem.create({ data: input })
    }),

    getProblemsByTrack: protectedProcedure
    .input(z.object({ trackId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.moduleProblem.findMany({
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
        include: {
          problem: {
            include: {
              solves: {
                where: {
                  userId: ctx.session.user.id
                },
                take: 1
              }
            }
          },
          module: {
            select: { name: true }
          }
        },
        orderBy: [
          { module: { id: 'asc' } },
          { order: 'asc' }
        ],
      });
    }),
})
