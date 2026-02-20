import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  hasChosenLevel: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const level = await ctx.db.userTrack.findFirst({
      where: { userId },
    });

    return !!level;
  }),

  addToTrack: protectedProcedure
  .input(
    z.object( {
      trackId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    await ctx.db.userTrack.deleteMany({
      where: {
        userId: userId,
      }
    })

    return await ctx.db.userTrack.create({
      data: {
        userId,
        trackId: input.trackId,
      }
    })
  }),

  delete: protectedProcedure
  .mutation(async ({ ctx }) => {
    const id = ctx.session.user.id;

    await ctx.db.user.deleteMany({ where: { id }});
  }),

  deleteFromTrack: protectedProcedure
  .input(
    z.object( {
      trackId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    await ctx.db.userTrack.deleteMany({
      where: {
        userId: userId,
        trackId: input.trackId,
      }
    })
  }),
  
});
