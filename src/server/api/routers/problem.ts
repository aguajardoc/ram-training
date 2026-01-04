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
})
