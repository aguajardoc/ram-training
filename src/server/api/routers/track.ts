import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc"


export const trackRouter = createTRPCRouter({
    upsert: protectedProcedure
    .input(
        z.object({
            id: z.string().optional(),
            name: z.string(),
        })
    )
    .mutation(async ({ctx, input}) => {
        // Create
        if (!input.id) {
            return ctx.db.track.create({
                data: {
                    name: input.name,
                }
            });
        }

        // Update
        return ctx.db.track.update({
            where: {
                id: input.id,
            },
            data: {
                name: input.name,
            }
        })
    }),

    delete: protectedProcedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ctx, input}) => {
        return ctx.db.track.delete({
            where: {
                id: input.id,
            }
        })
    }),
    
});