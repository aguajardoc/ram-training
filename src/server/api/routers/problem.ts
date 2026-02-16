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

  submitSolve: protectedProcedure
    .input(
      z.object({
        problemId: z.string(),
        statusString: z.string(),
        submitCount: z.number().int().default(0),
        readTimeMinutes: z.number().int().default(0),
        thinkTimeMinutes: z.number().int().default(0),
        codeTimeMinutes: z.number().int().default(0),
        debugTimeMinutes: z.number().int().default(0),
        perceivedDifficulty: z.number().int().default(0),
        onYourOwn: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const solve = await ctx.db.solve.upsert({
        where: {
          userId_problemId: {
            userId: userId,
            problemId: input.problemId,
          },
        },
        create: {
          userId: userId,
          ...input,
        },
        update: {
          ...input,
        },
      });

      return solve;
    }),
})
