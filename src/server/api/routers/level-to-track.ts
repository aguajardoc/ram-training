import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"

export const levelToTrackRouter = createTRPCRouter({
    upsert: protectedProcedure
    .input(
        z.object({
            levelId: z.string(),
            trackId: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { levelId, trackId } = input;

        // Clear existing mapping, if any
        await ctx.db.levelToTrack.deleteMany({
            where: {
                levelId: levelId,
            }
        });

        // Create new mapping
        return ctx.db.levelToTrack.create({
            data: {
                levelId: levelId,
                trackId: trackId,
            }
        })
    }),

});