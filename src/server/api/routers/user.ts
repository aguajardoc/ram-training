import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  hasChosenLevel: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const level = await ctx.db.userTrack.findFirst({
      where: { userId },
    });

    return !!level;
  }),
});
