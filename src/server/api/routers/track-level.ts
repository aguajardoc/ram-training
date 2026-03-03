import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"

export const trackLevelRouter = createTRPCRouter({
    upsert: protectedProcedure
    .input(
        z.object({
            id: z.string().optional(),
            code: z.string(),
            trackId: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const { id, code, trackId } = input;

        // Update
        if (id) {
            return ctx.db.trackLevel.update({
                where: {
                    id: id,
                },
                data: {
                    code: code,
                    trackId: trackId,
                }
            })
        }

        // Create
        return ctx.db.trackLevel.create({
            data: {
                code: code,
                trackId: trackId,
            }
        });
    }),

    delete: protectedProcedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const id = input.id;

        return ctx.db.trackLevel.delete({
            where: {
                id: id,
            }
        })
    }),
    
});