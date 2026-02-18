import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { problemRouter } from "./routers/problem";
import { userRouter } from "./routers/user";
import { resourceRouter } from "./routers/resource";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  problem: problemRouter,
  resource: resourceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);