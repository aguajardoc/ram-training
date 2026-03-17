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

  upsert: protectedProcedure
  .input(
    z.object({
      id: z.string().optional(),
      name: z.string(),
      url: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    return ctx.db.problem.upsert({
      where: {
        id: input.id ?? "placeholder",
      },
      update: {
        name: input.name,
        url: input.url,
      },
      create: {
        name: input.name,
        url: input.url,
      }
    })
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
          select: { 
            name: true,
            period: true,
          }
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


  delete: protectedProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    ctx.db.problem.delete({
      where: {
        id: input.id,
      }
    })
  }),

})
